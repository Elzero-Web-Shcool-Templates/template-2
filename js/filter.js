const filterBtns = document.querySelectorAll('.shuffle li');
const boxes = document.querySelectorAll('.imgs-container .box');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        boxes.forEach(box => {
            if (filter === 'all' || box.dataset.category === filter) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });
});