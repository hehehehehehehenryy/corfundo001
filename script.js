function mudarImagem (img){
    let body = document.body;

    switch (img) {
        case 'img1': body.style.backgroundImage = 'url(img1.png)'; break;
        case 'img2': body.style.backgroundImage = 'url(img2.png)'; break;
        case 'img3': body.style.backgroundImage = 'url(img3.png)'; break;
        case 'img4': body.style.backgroundImage = 'url(img4.png)'; break;
        case 'img5': body.style.backgroundImage = 'url(img5.png)'; break;
default: body.style.backgroundImage = 'black';
    }
}