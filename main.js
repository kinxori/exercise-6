const loremSelection = document.querySelector('p');
const loremSeparation = loremSelection.textContent.split(' ');
loremSelection.innerText = null;

loremSelection.onanimationstart = function(){
loremSelection.classList.add('animation-scale-rotation')


}

function animationAdd(node, index){

    const spanCreation = document.createElement('span');
    spanCreation.innerText = node;
    loremSelection.appendChild(spanCreation);


    spanCreation.classList.add('animation-text')
    
    
    spanCreation.style = "--timing:" + index;
    
    
}


loremSeparation.forEach(animationAdd);







console.log(loremSeparation)
