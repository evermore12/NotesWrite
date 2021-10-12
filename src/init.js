async function sendText(element) {
    let response = await fetch("api/postnote", {
        method: "POST",
        body: JSON.stringify({username: "jonathan", note: element.target.value})
    })

    location.reload();
}

document.querySelector("#save").addEventListener('click', sendText)

window.addEventListener('load', () => {
document.getElementById('note').focus();
})