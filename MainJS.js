let Frame = document.body.querySelector('iframe');
let current;

let Collection = {
    Coffee: 'Collection/Coffee/CoffeeHTML.html',
    Moon: 'Collection/Moon/MoonHTML.html',
}

function SubCreator () {
    let subList = document.createElement('ul');

    subList.innerHTML = `
    <ul>
        <li>
            <button data-control-target="static">Static</button>
        </li>
        <li>
            <button data-control-target="animation">Animation</button>
        </li>
    </ul>`

    return subList;
}

MainList.onclick = function(event) {
    let target = event.target;

    if (!target.matches('button')) return;

    if (!(target.hasAttribute('data-control-target') || target.getAttribute('data-current'))) {
        current?.nextElementSibling.remove();
        current?.setAttribute('data-current', '')

        current = target;
        target.setAttribute('data-current', 'current');

        let subList = SubCreator();
        target.parentElement.append(subList);

        Frame.src = Collection[target.textContent];

        return;
    }

    

}