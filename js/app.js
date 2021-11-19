const shareBtn = document.querySelector('#shareBtn');
const share = document.querySelector('.share');

shareBtn.addEventListener("click", function() {
    if(share.classList.contains("inactive")) {
        share.classList.add("active");
        share.classList.remove("inactive");
    } else {
        share.classList.add("inactive");
        share.classList.remove("active");
    }
});