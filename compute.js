
const animBox = document.getElementById('animation-box');

const anim_rotation_label = document.getElementById('anim-rotation-label');



function changeHandler(event) {
    if (event.target.name === "anim-x") {
        animBox.style.transform = `translateX(${event.target.value}%)`;
        
    }
    else if (event.target.name === "anim-y") {
        animBox.style.transform = `translateY(${event.target.value}%)`;
    }
    else if (event.target.name === "anim-scale") {
        animBox.style.transform = `scale(${event.target.value})`;
    }
    else if (event.target.name === "anim-rotate") {
        animBox.style.transform = `rotate(${(event.target.value)}deg)`;
        anim_rotation_label.textContent = event.target.value;
    }
    else if (event.target.name === "anim-duration") {
        animBox.style.transitionDuration = `${event.target.value}s`;
        console.log(animBox.style.transitionDuration);
    }
}

