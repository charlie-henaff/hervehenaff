function onMenuIconClick() {
    const menu = document.getElementById('appbar-menu');

    menu.setAttribute('open', !menu.hasAttribute('open') || menu.getAttribute('open') === 'false')

    return false;
}

function onMenuItemClick() {
    onMenuIconClick();
    return true;
}

function loadImageGrid(id) {
    console.log(id);
    const folder = 'media/img/';

    fetch(folder)
        .then(data => data.text())
        .then(text => {
            Array.from(
                new DOMParser()
                    .parseFromString(text, 'text/html')
                    .getElementsByTagName("a")
            )
                .map(a => a.getAttribute("href"))
                .forEach(href => {

                    if (href.match(/\.(jpe?g|png|gif)$/)) {

                        const img = new Image();
                        img.src = folder + href;

                        const a = document.createElement('a');
                        a.setAttribute('href', folder + href);
                        a.setAttribute('target', '_blank');
                        a.appendChild(img);

                        document
                            .getElementById(id)
                            .append(a);
                    }
                });
        })
}

window.onload = loadImageGrid('photographie--images-grid');
