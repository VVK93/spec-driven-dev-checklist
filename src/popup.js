function el(id){return document.getElementById(id)}

let currentEditId = null

function formatDate(ts){
  try{const d=new Date(ts);return d.toLocaleString()}catch(e){return ts}
}

async function loadAndRender(){
  const entries = await window.DiaryStorage.getEntries()
  const list = el('entriesList')
  list.innerHTML = ''
  const keys = Object.keys(entries).sort((a,b)=> (entries[b].updatedAt||entries[b].createdAt) - (entries[a].updatedAt||entries[a].createdAt))
  if(keys.length===0){el('emptyState').classList.remove('hidden')}else{el('emptyState').classList.add('hidden')}
  keys.forEach(id=>{
    const item = entries[id]
    const li = document.createElement('li')
    li.className='entry'
    li.dataset.id = id
    li.innerHTML = `<strong>${escapeHtml(item.title||'Untitled')}</strong><small>${formatDate(item.date||item.createdAt)}</small>`
    li.addEventListener('click', ()=>openEditor(id))
    list.appendChild(li)
  })
}

function escapeHtml(s){return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}

async function openEditor(id){
  const editor = el('editor')
  editor.classList.remove('hidden')
  if(!id){
    currentEditId = null
    el('entryTitle').value = ''
    el('entryContent').value = ''
    el('deleteBtn').classList.add('hidden')
  } else {
    const entries = await window.DiaryStorage.getEntries()
    const e = entries[id]
    if(!e) return
    currentEditId = id
    el('entryTitle').value = e.title || ''
    el('entryContent').value = e.content || ''
    el('deleteBtn').classList.remove('hidden')
  }
}

function closeEditor(){
  el('editor').classList.add('hidden')
  currentEditId = null
}

async function saveCurrent(){
  const title = el('entryTitle').value.trim()
  const content = el('entryContent').value.trim()
  const now = Date.now()
  const entry = {
    id: currentEditId || String(now),
    date: new Date().toISOString().slice(0,10),
    title,
    content,
    createdAt: currentEditId ? undefined : now,
    updatedAt: currentEditId ? now : undefined
  }
  await window.DiaryStorage.saveEntry(entry)
  closeEditor()
  await loadAndRender()
}

async function deleteCurrent(){
  if(!currentEditId) return
  await window.DiaryStorage.deleteEntry(currentEditId)
  closeEditor()
  await loadAndRender()
}

function setupEvents(){
  el('newEntryBtn').addEventListener('click', ()=>openEditor(null))
  el('saveBtn').addEventListener('click', saveCurrent)
  el('cancelBtn').addEventListener('click', closeEditor)
  el('deleteBtn').addEventListener('click', deleteCurrent)
}

document.addEventListener('DOMContentLoaded', async ()=>{
  setupEvents()
  await loadAndRender()
})
