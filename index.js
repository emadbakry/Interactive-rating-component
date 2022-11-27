
    let ratingSelected = 0;
window.onload = () => {
    //  bg for selected rating
    let ratings = document.querySelectorAll('.ratings a');
    // let changeRating = (el) => {
        ratings.forEach((ele) => {
            ele.addEventListener('click', (targetEle) => {
                ratings.forEach((el) => el.classList.remove('active') )
                targetEle.currentTarget.classList.add('active');
                ratingSelected = targetEle.currentTarget.textContent
            })
        });   
}
    

let submitRating = () => {
    let mainBox = document.querySelector('.root .box');
    let thankYou_Box = document.querySelector(".root .thankYou-box");
    let selectedNum = document.getElementById('selectedNum');
    if (ratingSelected !== 0) {
        mainBox.style.display = 'none';
        thankYou_Box.style.display = 'block';
        selectedNum.textContent = ratingSelected;
    } else {
        // please select from 1 - 5
    }
}