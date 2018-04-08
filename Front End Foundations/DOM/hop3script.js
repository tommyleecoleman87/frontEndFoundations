document.getElementById('submitBDay').addEventListener('click', handleInput);

function handleInput(e) {
    e.preventDefault();
    let month = document.getElementById('month').value;
    let day = document.getElementById('day').value;
    let year = document.getElementById('year').value;
    document.getElementById('birthday').innerHTML = `Your birthday is: ${month} ${day}, ${year}`
}