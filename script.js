
const container = document.querySelector('.container');
let size = 16;
let colorr = 'white';

for(let i=0; i<size; i++) {
    const row = document.createElement('div')
    row.style.cssText = 'display:flex;'
    container.appendChild(row);
    for(let h=0; h<size;h++) {
        const column = document.createElement('div');
        row.appendChild(column)
    }
}

const color = document.querySelectorAll('.container div div');

for(let l = 0; l<color.length; l++) {
    color[l].addEventListener('mouseenter', () => {
        color[l].style.cssText = `background-color: ${colorr};`
    })
    // color[l].addEventListener('mouseleave', () => {
        // color[l].style.cssText = 'background-color: black;'
    // })

}

const button = document.querySelector('.size');
button.addEventListener('click' , () => {
    for(;;) {

        
        size = parseInt(prompt('Select a size between 1 and 100'));
        console.log(size);
        const divi = document.querySelectorAll('.container div');
        for(let e=0; e<divi.length; e++) {
            divi[e].remove();
        }

        if( size >0 && size <= 100) {
            for(let i=0; i<size; i++) {
                const row = document.createElement('div')
                row.style.cssText = 'display:flex;'
                container.appendChild(row);
                for(let h=0; h<size;h++) {
                    const column = document.createElement('div');
                    row.appendChild(column)
                }
            }

            const color = document.querySelectorAll('.container div div');

            for(let l = 0; l<color.length; l++) {
                color[l].addEventListener('mouseenter', () => {
                    color[l].style.cssText = `background-color: ${colorr};`
                })
                // color[l].addEventListener('mouseleave', () => {
                    // color[l].style.cssText = 'background-color: black;'
                // })
            
            }
            break;
        }
        else {
            alert('size must be a number between 1 and 100')
            continue
        }
    }
})


const colore = document.querySelector('.red');
colore.addEventListener('click', (e)=> {
    console.log(e);
    colorr = e.originalTarget.innerText;
    console.log(colorr);
})

const colore1 = document.querySelector('.white');
colore1.addEventListener('click', (e)=> {
    colorr = e.originalTarget.innerText;
    console.log(colorr);
})

const colore2 = document.querySelector('.blue');
colore2.addEventListener('click', (e)=> {
    colorr = e.originalTarget.innerText;
    console.log(colorr);
})

const colore3 = document.querySelector('.black');
colore3.addEventListener('click', (e)=> {
    colorr = e.originalTarget.innerText;
    console.log(colorr);
})