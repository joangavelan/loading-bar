const loadingBarItem = document.querySelector(".loading-bar__item");
const buttons = document.querySelectorAll("button");
// const button40 = document.getElementById("40");
// const button60 = document.getElementById("60");
// const button100 = document.getElementById("100");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let width = 1;
        let loadPercent = +button.id;

        let loadingBar = setInterval(() => {
            if(width >= loadPercent) {
                clearInterval(loadingBar);
            } else {
                width++;
                loadingBarItem.style.width = `${width}%`;
            }
        }, 10);
    });
});


//my previous solution to 40, 60, 100 load percent challenge
// button40.addEventListener("click", function() {
//     let width = 1;
//     let loadingBar = setInterval(function() {
//         if (width >= 40) {
//             clearInterval(loadingBar);
//         } else {
//             width++;
//             loadingBarItem.style.width = width + '%';
//         }
//     }, 10)
// });

// button60.addEventListener("click", function() {
//     let width = 1;
//     let loadingBar = setInterval(function() {
//         if (width >= 60) {
//             clearInterval(loadingBar);
//         } else {
//             width++;
//             loadingBarItem.style.width = width + '%';
//         }
//     }, 10)
// });

// button100.addEventListener("click", function() {
//     let width = 1;
//     let loadingBar = setInterval(function() {
//         if (width >= 100) {
//             clearInterval(loadingBar);
//         } else {
//             width++;
//             loadingBarItem.style.width = width + '%';
//         }
//     }, 10)
// });

//es5 teacher's solution to 100% load
// let width = 1;
// let loadingBar = setInterval(function() {
//     if (width >= 100) {
//         clearInterval(loadingBar);
//     } else {
//         width++;
//         loadingBarItem.style.width = width + '%';
//     }
// }, 15)