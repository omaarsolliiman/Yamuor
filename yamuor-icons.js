window.onload = () => { let e = null, t = 0, l = document.querySelector(".landing h1"); clearInterval(e), e = setInterval(() => { l.innerText = l.innerText.split("").map((e, n) => n < t ? l.dataset.value[n] : "ABCDEFGHIJKLMNO"[Math.floor(15 * Math.random())]).join(""), t >= l.dataset.value.length && clearInterval(e), t += 1 / 3 }, 25) }; function sendEmail() { let e = document.getElementById("name").value, t = document.getElementById("email").value, l = document.getElementById("subject").value, n = document.getElementById("message").value; emailjs.send("yamuor", "template_34ievap", { from_name: e, to_name: "omar", from_email: t, subject: l, message: n }).then(e => { console.log("SUCCESS!", e.status, e.text); let t = document.querySelector(".good"); t.classList.add("active"), setTimeout(function () { t.classList.remove("active") }, 3e3) }, e => { console.log("FAILED...", e) }) } const sendBtn = document.getElementById("send"); sendBtn.addEventListener("click", function () { if (document.getElementById("email").value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) && document.getElementById("name").value.match(/^.{3,}\s*$/u) && document.getElementById("subject").value.match(/^\s*\S+(?:\s+\S+)*\s*$/) && document.getElementById("message").value.match(/^.{21,}\s*$/)) sendEmail(); else { let e = document.querySelector(".bad"); e.classList.toggle("active"), setTimeout(function () { e.classList.toggle("active") }, 3e3) } }); const divElements = document.querySelectorAll(".icon"); divElements.forEach(e => { e.addEventListener("click", () => { let t = e.querySelector("i").outerHTML, l = document.createElement("input"); l.setAttribute("value", t), document.body.appendChild(l), l.select(), document.execCommand("copy"), document.body.removeChild(l); let n = document.querySelector(".icon-message"); n.classList.add("show"), setTimeout(function () { n.classList.remove("show") }, 1e3) }) });
let myInput = document.querySelector(".uusge");

function copyToClipboard() {
    const myInput = document.querySelector(".usage");

    // Select the text in the input element
    myInput.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    let n = document.querySelector(".icon-message");
    n.classList.add("show"),
    setTimeout(function () { n.classList.remove("show") }, 1e3)


}

