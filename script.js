let itr=1;
let list = document.getElementById("infi-list");
function addItems(numberOfItems) {
    for (let i = 0; i < numberOfItems; i++) {
        let item = document.createElement("li");
        item.innerText = "Item " + (itr++);
        list.appendChild(item);
    }
}
addItems(10);

list.addEventListener("scroll",()=>{
    let scrollTop = list.scrollTop;
    let containerHeight = list.clientHeight;
    let totalHeight = list.scrollHeight;
    if(Math.abs(scrollTop+containerHeight-totalHeight)<5){
        addItems(2);
    }
});