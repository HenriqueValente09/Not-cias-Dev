const p = document.getElementsByTagName("p")
const h2 = document.getElementsByTagName("h2")
for (let p_ of p) {
    let pValue = p_.innerHTML
    let pLastChar = pValue.charAt(pValue.length - 1)
    while (pLastChar == ' ' ||
        pLastChar == ',' ||
        (pValue.length > 60)) {
        pValue = pValue.slice(0, -1)
        pLastChar = pValue.charAt(pValue.length - 1)
    }
    console.log(pValue);
    p_.innerHTML = pValue + '...'
}

for (let p_ of h2) {
    let pValue = p_.innerHTML
    let pLastChar = pValue.charAt(pValue.length - 1)
    while (pLastChar == ' ' ||
        pLastChar == ',' ||
        (pValue.length > 40)) {
        pValue = pValue.slice(0, -1)
        pLastChar = pValue.charAt(pValue.length - 1)
    }
    console.log(pValue);
    p_.innerHTML = pValue + '...'
}

