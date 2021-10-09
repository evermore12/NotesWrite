async function sendText(element) {
    let response = await fetch("api/postnote", {
        method: "POST",
        body: element.target.value,
    })
}

document.querySelector("#note").addEventListener('input', sendText, )