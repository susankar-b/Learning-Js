const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    results = document.querySelector('#results');
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
        note.innerHTML = `<span>Under Weight</span>`;
    }
    if (bmi >= 18.6 && bmi < 24.9) {
        note.innerHTML = `<span>Normal Weight</span>`;
    } if(bmi>24.9) {
        note.innerHTML = `<span>Over Weight</span>`;
    }
})