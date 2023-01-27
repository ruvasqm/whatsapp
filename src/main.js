import './index.css'
const redirect2WS = (number) => {
    //window.location.href = `https://wa.me/+${number}`
    window.location.href = `https://api.whatsapp.com/send?phone=${number}&type=phone_number`
}

const validateNumber = async (number) => {
    const result = await fetch('/.netlify/functions/validateNumber', {
        method: 'POST',
        body: JSON.stringify({ number: number })
    }
    )
    const data = await result.json()
    return data.valid;
}

[ "input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout" ].forEach(function(event) {

    document.getElementById('number').addEventListener(event, (e) => {
        // remove all non-numeric characters
        e.target.value = e.target.value.replace(/\D/g, '')
    })
})


document.getElementById('sendForm').addEventListener('submit', (e) => {
    e.preventDefault()
    const number = document.getElementById('number').value
    if (validateNumber(number)) {
        redirect2WS(number)
    }
})
