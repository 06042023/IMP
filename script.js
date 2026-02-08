function typeText(id, text, speed, callback) {
    let i = 0;
    const el = document.getElementById(id);
    el.innerHTML = "";

    const timer = setInterval(() => {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            if (callback) callback();
        }
    }, speed);
}

function showImage(id) {
    document.getElementById(id).classList.add("show");
}

