const container2 = document.getElementsByClassName('container2')[0];
const container3 = document.getElementsByClassName('container3')[0];
const checkIcon = document.getElementById('check-icon');
const xIcon = document.getElementById('x-icon');
let i = 0;

xIcon.addEventListener('click', () => {
    typeNote();
    console.log('boom')
})

checkIcon.addEventListener('click', () => {
    createNote();
    console.log('boomer')
})

const typeNote = () => {
    //if container #3 is not displaying on the screen
    if(container3.style.display == 'none') {
        container3.style.display = 'block';
    } else {
        container3.style.display = 'none';
    }
}

const createNote = () => {
    let noteText = document.getElementById('note-text').value;
    let node0 = document.createElement('div');
    let node1 = document.createElement('h1');

    node1.innerHTML = noteText;
    node1.setAttribute('style', 'width: 250px; height: 250px; font-size: 26px; padding: 25px; margin-top: 10px; overflow: hidden: box-shadow: 0px, 10px, 24px, 0px, rgba(0, 0, 0, 0.75);');
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();

    node0.appendChild(node1);

    container2.insertAdjacentElement('beforeend', node0);

    //when hovering the post-it will scale up with 0.1 unit.
    node0.addEventListener('mouseenter', () => {
        node0.style.transform = 'scale(1.1)';
    })

    //when no mouse is hovering the post-it will go back to normal size
    node0.addEventListener('mouseleave', () => {
        node0.style.transform = 'scale(1)';
    })

    //delete the note with a double-click
    node0.addEventListener('dblclick', () => {
        node0.remove();
    })

    //erase the text when note has been submitted
    document.getElementById('note-text').value = '';
}

const margin = () => {
    let random_margin = ['-5px', '1px', '5px', '10px', '15px', '20px'];
    //math.floor and random to create a random rumber between 1 and the index length of the array
    return random_margin[Math.floor(Math.random() * random_margin.length)];
}

const rotate = () => {
    let random_rotate = ['rotate(3deg)', 'rotate(1deg)', 'rotate(-1deg)', 'rotate(-3deg)', 'rotate(-5deg)', 'rotate(-10deg)'];
    return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

const color = () => {
    let random_color = ['#4287f5', '#4f1787', '#495c4a', '#7d4233', '#693b45', '#15243b'];

    //if last value is used then we would want to go back to the beginning
    // -1 because the index starts at 0
    if(i > random_color.length - 1) {
        i = 0;
    }
    return random_color[i++];
}