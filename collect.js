let currentItem = 0;
const items = ["item1.jpg", "item2.jpg", "item3.jpg"];

function showItem(index) {
    const img = document.getElementById("collect-img");
    img.src = items[index];
}

function prevItem() {
    currentItem = (currentItem - 1 + items.length) % items.length;
    showItem(currentItem);
}

function nextItem() {
    currentItem = (currentItem + 1) % items.length;
    showItem(currentItem);
}