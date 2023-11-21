const cookies = document.cookie;

console.log(cookies);

const score1 = cookies
    .split('; ')
    .find(row => row.startsWith('score1='))
    .split('=')[1];

const score2 = cookies
    .split('; ')
    .find(row => row.startsWith('score2='))
    .split('=')[1];

const score3 = cookies
    .split('; ')
    .find(row => row.startsWith('score3='))
    .split('=')[1];

const score4 = cookies
    .split('; ')
    .find(row => row.startsWith('score4='))
    .split('=')[1];

const score5 = cookies
    .split('; ')
    .find(row => row.startsWith('score5='))
    .split('=')[1];

const score6 = cookies
    .split('; ')
    .find(row => row.startsWith('score6='))
    .split('=')[1];



document.querySelector('.one').dataset.percentage = score1;
document.querySelector('.two').dataset.percentage = score2;
document.querySelector('.three').dataset.percentage = score3;
document.querySelector('.four').dataset.percentage = score4;
document.querySelector('.five').dataset.percentage = score5;
document.querySelector('.six').dataset.percentage = score6;
