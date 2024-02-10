let Frame = document.body.querySelector('iframe');

let Collection = {
    Coffee: 'Collection/Coffee/CoffeeHTML.html',
    Moon: 'Collection/Moon/MoonHTML.html',
}

MainList.onclick = function(event) {
    Frame.src = Collection[event.target.textContent];
}