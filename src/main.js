import './index.css'
const redirect2WS = (number) => {
    window.location.href = `https://wa.me/${number}`
}

const validateNumber = (number) => {
    // test for us number (numbers only, no spaces, no dashes, no parentheses, no plus sign) including country code
    const usNumber = /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/;
    // test for latin american number (numbers only, no spaces, no dashes, no parentheses, no plus sign) including country code
    // countries: Argentina, Bolivia, Brazil, Chile, Colombia, Costa Rica, Dominican Republic, Ecuador, El Salvador, Guatemala, Honduras, Mexico, Nicaragua, Panama, Paraguay, Peru, Puerto Rico, Uruguay, Venezuela
    const latinAmericanNumber = /^(\+?5)?[2-9]\d{2}[2-9](?!11)\d{6}$/;
    // test for european number (numbers only, no spaces, no dashes, no parentheses, no plus sign) including country code
    // countries: Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Monaco, Netherlands, Norway, Poland, Portugal, Romania, San Marino, Slovakia, Slovenia, Spain, Sweden, Switzerland, United Kingdom
    const europeanNumber = /^(\+?3)?[2-9]\d{2}[2-9](?!11)\d{6}$/;
    return usNumber.test(number) || latinAmericanNumber.test(number) || europeanNumber.test(number)
}
[ "input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout" ].forEach(function(event) {

    document.getElementById('number').addEventListener(event, (e) => {
        // remove all non-numeric characters
        e.target.value = e.target.value.replace(/\D/g, '')
        if (validateNumber(e.target.value)) {
            document.getElementById('submit').disabled = false
        }
        else {
            document.getElementById('submit').disabled = true
        }

    })
})


document.getElementById('sendForm').addEventListener('submit', (e) => {
    e.preventDefault()
    const number = document.getElementById('number').value
    if (validateNumber(number)) {
        redirect2WS(number)
    }
})
