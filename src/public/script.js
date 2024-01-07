let path = []

function openMovieUrl(url) {
  window.location.href = '/' + url
}

function openFolder(folderName) {
  path.push(folderName)
  traverse()
}

function gotoBackPage() {
  path.pop()
  traverse()
}

function traverse() {
  const fullPath = path.join('/')
  const body = JSON.stringify({ path: fullPath })
  const headers = new Headers({
    'Content-Type': 'application/json',
  })
  const method = 'POST'
  fetch('/goto-folder', { body, method, headers })
    .then(res => res.text())
    .then(data => {
      let container = document.getElementById('list-section-container')
      container.innerHTML = data
    })
}

function handleCopy(e, filePath) {
  e.preventDefault()
  e.stopPropagation()
  const fullPath = `${window.location.protocol}//${window.location.host}/${filePath}`

  if (window.isSecureContext && navigator.clipboard) {
    navigator.clipboard.writeText(fullPath)
  } else {
    unsecuredCopyToClipboard(fullPath)
  }
}

function unsecuredCopyToClipboard(text) {
  const textArea = document.createElement('textarea')
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()
  try {
    document.execCommand('copy')
  } catch (err) {
    console.error('Unable to copy to clipboard', err)
  }
  document.body.removeChild(textArea)
}
