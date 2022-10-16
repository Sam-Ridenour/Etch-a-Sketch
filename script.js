const maxRnC = 16;
const container = document.querySelector('#container');

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

