function saveText() {
    const text = document.getElementById('notepad').value;
    localStorage.setItem('savedText', text);
}


function loadText() {
    const savedText = localStorage.getItem('savedText');
    if (savedText) {
        document.getElementById('notepad').value = savedText;
    }
}


function clearText() {
    localStorage.removeItem('savedText');
    document.getElementById('notepad').value = '';
}


window.onload = loadText;