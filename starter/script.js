'use strict';
let compare_num = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
let score=20;
let highscore=0;

document.querySelector('.check').addEventListener(
'click', function()
{
    let num=Number(document.querySelector('.guess').value);
    if(!num) document.querySelector('.message').textContent='⛔️ No number';
    else if(num===compare_num) 
    {
        document.querySelector('.message').textContent='🎉🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        if(score>highscore)
        {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }

    }
    else if(num>compare_num) 
    {
        document.querySelector('.message').textContent='📈 Too High! ';
        if(score>1)
        {
            score--;
            document.querySelector('.score').textContent=score;
        }else
        {
            document.querySelector('.message').textContent='💥💥 You lost the game!';
        }
    }
    else if(num<compare_num) 
    {
        document.querySelector('.message').textContent='📉 Too Low! ';
        if(score>0)
        {
            score--;
            document.querySelector('.score').textContent=score;
        }else
        {
            document.querySelector('.message').textContent='💥💥 You lost the game!';
        }
    }
});
document.querySelector('.again').addEventListener('click',
    function()
    {
        score = 20;
        compare_num = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.score').textContent = 20;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
      
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    }
);
