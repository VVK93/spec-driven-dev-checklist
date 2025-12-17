const STORAGE_KEY = 'diary.entries'

function _chromeGet() {
  return new Promise((resolve) => {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get([STORAGE_KEY], (res) => resolve(res[STORAGE_KEY] || {}))
    } else {
      try {
        const raw = localStorage.getItem(STORAGE_KEY) || '{}'
        resolve(JSON.parse(raw))
      } catch (e) {
        resolve({})
      }
    }
  })
}

function _chromeSet(obj) {
  return new Promise((resolve) => {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      const data = {}
      data[STORAGE_KEY] = obj
      chrome.storage.local.set(data, () => resolve())
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
      resolve()
    }
  })
}

async function getEntries() {
  return await _chromeGet()
}

async function saveEntry(entry) {
  const entries = await _chromeGet()
  entries[entry.id] = entry
  await _chromeSet(entries)
}

async function deleteEntry(id) {
  const entries = await _chromeGet()
  delete entries[id]
  await _chromeSet(entries)
}

window.DiaryStorage = { getEntries, saveEntry, deleteEntry }
