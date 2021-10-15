async function sendText(element) {
    console.log(element)
    let note = document.getElementById("note").value
    let response = await fetch("api/postnote", {
        method: "POST",
        body: JSON.stringify({username: "jonathan", note: note})
    })
}

// document.querySelector("#save").addEventListener('click', sendText)

window.addEventListener('load', () => {
    document.getElementById('note').focus()

    let timeout = null
    document.getElementById('note').addEventListener('input', (element) => {
        clearTimeout(timeout)
        timeout = setTimeout(sendText, 3000, element)
    })
})