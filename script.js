let moodBtn = document.querySelector(".mood-btns");
let darkMood = document.querySelector(".bx-moon");

moodBtn.addEventListener("click", () => {
    console.log("click");
    document.body.classList.toggle("dark-mood");
    darkMood.classList.toggle("bx-sun");
})