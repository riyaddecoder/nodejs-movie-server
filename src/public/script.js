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
  navigator.clipboard.writeText(
    `${window.location.protocol}//${window.location.host}/${filePath}`
  )
}
