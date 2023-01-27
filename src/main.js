import './index.css'

const redirect2WS = () => {
    const number = document.getElementById('number').value
    window.location.href = `https://wa.me/${number}`
}

document.getElementById('sendForm').addEventListener('submit', (e) => {
    e.preventDefault()
    redirect2WS()
})
