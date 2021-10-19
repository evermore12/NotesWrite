window.addEventListener('load', async () => {
    document.getElementById('note').focus()
    let version = 0
    let timeout = null
    document.getElementById('note').addEventListener('input', async (element) => {
        let note = element.target.value
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fetch('api/postnote/jonathan', {
                method: "POST",
                body: JSON.stringify({PartitionKey: "jonathan", Note: note, Version: version})
            })
            version++;
        }, 3000, note, version)
    })
})

