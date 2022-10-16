const container = document.querySelector('#container');
const button = document.querySelector('.btn');
let maxRnC = '';

prompting();

button.onclick = () => {
    container.replaceChildren();
    prompting();
}

function prompting(){
while (true){
    maxRnC = prompt("Enter A Number Between 1 And 100 You Would Like To Sketch On.");
    if(!isNaN(maxRnC)){
        if(maxRnC < 101 && maxRnC > 0){
        break;
        } else{
            alert("Pick A Number Between 1 And 100");
        }
    } else{
        alert("Please Try Again, Input A Number Via Digit's");
    }
}

for(let i = 0; i < maxRnC; i++){
    let row = document.createElement('div');
    row.classList.add('row');
        for(let j = 0; j < maxRnC; j++){
            let column = document.createElement('div');
            column.classList.add('column');  
            column.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'gray';
            });
                  
            row.appendChild(column);
        }   
    container.appendChild(row);
    }
}