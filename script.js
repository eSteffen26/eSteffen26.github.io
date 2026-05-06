
// Footer Java Script

function sendMail()
{
    const address = 'easton.steffen5875@gmail.com'
    const url = `mailto:${address}`

    window.open(url)
}

let button = document.querySelector('#sendEmail')
button.addEventListener('click', sendMail)