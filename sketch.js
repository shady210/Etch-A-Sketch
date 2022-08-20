

function createParentDiv() {
    count=0;
    for (let index = 0; index < 16; index++) {
        let createElement = document.createElement('div')
        createElement.classList.add('sub-container');   
        document.getElementById('0').appendChild(createElement);
        
        for (let j = 0; j< 16; j++) {
            
            let createChildElement = document.createElement('div')
            createChildElement.classList.add('touch')
            // console.log(createChildElement,index,count+=1,j);
            createElement.appendChild(createChildElement);
            createChildElement.style.border = '1px solid black';
            createChildElement.style.width= '30px';
            createChildElement.style.height = '30px';
            // createChildElement.style.height = '50px';
        }

    }

    console.log('Hii')
    document.querySelector('div').addEventListener("mouseover", function(event) {
        event.target.classList.replace("touch", "simple");
    });
 
}

function color()
{
    document.querySelector('div').addEventListener("mouseover", function(event) {
        event.target.classList.replace("simple", "color");
    });
}

function touch()
{
    document.querySelector('div').addEventListener("mouseover", function(event) {
        event.target.classList.replace("color", "simple");
    });
}

function clearValue()
{
    location.reload()
}





createParentDiv()

// createDiv()