const rotators = document.querySelector('span').children;

function timer(speed) { return new Promise(res => setTimeout(res, speed)); };

async function task(rotator){
    rotator.style.color = rotator.dataset.color;
    rotator.classList.add('rotator__case_active');
    await timer(rotator.dataset.speed);
    rotator.classList.remove('rotator__case_active');
};

async function loop() {
    for (let rotator of rotators) {
        await task(rotator);
    }

    loop();
};

loop();