document.addEventListener('mouseover', handleMouseEvent);

function handleMouseEvent(e) {
    e.preventDefault();
    return document.getElementById('mouse').innerHTML = "Hello World!";
}