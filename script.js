// tabs
const tabsBtns = document.querySelectorAll(".tabs-nav button");
const tabsItems = document.querySelectorAll(".tabs-item");

// скрывает табы и убирает active у кнопок

function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}

// показывает переданный номер таба и делает кнопку активной
function showTab(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));

// anchors
const anchors = document.querySelectorAll(".header-nav a");

anchors.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault();

        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);

        window.scroll({
            top:elem.offsetTop - 80,
            behavior: 'smooth'
        })
    });
})