function scrollRow(amount) {
    document.getElementById('row').scrollBy({ left: amount, behavior: 'smooth' });
}

document.getElementById('prev').addEventListener('click', function () {
    scrollRow(-720);
});

document.getElementById('next').addEventListener('click', function () {
    scrollRow(720);
});