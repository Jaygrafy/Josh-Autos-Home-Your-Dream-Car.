const sr = ScrollReveal({
        distance: '85px',
        duration: 2500,
        delay: 450,
        reset: true
    })


    sr.reveal('.cont', {delay:200, origin: 'top'});
    sr.reveal('.img', {delay:200, origin: 'bottom'});
    sr.reveal('#icon', {delay:200, origin: 'right'});
    sr.reveal('.carpng', {delay: 200, origin: 'top'});
    sr.reveal('.about', {delay: 200, origin: 'right'});



    const car = document.querySelectorAll('.bcar');

    const prat = document.getElementById('pre');

    car.forEach(par => {
        par.addEventListener('click', () => {
                
            const carimg = par.querySelector('img').src;
            const carprice = par.querySelector('p').innerText;

            prat.innerHTML = '';

            prat.innerHTML = `
            <img src="${carimg}" alt="Active Preview Vehicle">
            <p>${carprice}</p>
            `;
        });
    });