const correctAnswers=['Y','Y','Y','Y'];
const form= document.querySelector('.question-form');
const result= document.querySelector('.result');

form.addEventListener('submit',e=>{
    e.preventDefault();
    let score = 0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswers[index]){
            score+=25;

        }
    })

    //console.log(score);
    result.classList.remove('d-none');
    let point=0;
    const  publish=setInterval(()=>{
        result.querySelector('span').textContent = `${point}%`;
    
        if(point==score){
         clearInterval(publish);
        }
        else{
            point++;
        }
    
    
    },20);
    //result.querySelector('span').textContent= `${score}%`;

})



