$(document).ready(() => {
    $('.slider').slick();


    let images = [
        {
            imageName: "https://cdn1.ozone.ru/s3/multimedia-3/c1200/6016299399.jpg",
            authorName: "Ivan Ivanov"
        },
        {
            imageName: "https://i.pinimg.com/originals/5a/f0/4d/5af04db6603ae8d529a2e3fe5b3a7ae3.jpg",
            authorName: "Ivan Ivanov"
        },
        {
            imageName: "https://i.pinimg.com/736x/30/6f/69/306f697622ec7dfd29cc462a778bdc40.jpg",
            authorName: "Ivan Ivanov"
        },
        {
            imageName: "https://crosti.ru/patterns/00/1c/07/bbc3a51d85/preview.jpg",
            authorName: "Ivan Ivanov"
        },
        {
            imageName: "https://avatars.mds.yandex.net/get-zen_doc/118284/pub_5acf915ba936f4899b1a29bd_5ad062ab2f578cabca0ee0aa/scale_1200",
            authorName: "Ivan Ivanov"
        },
        {
            imageName: "https://i.pinimg.com/736x/0a/76/45/0a7645c5e1ae4298173ff8400d01920d--colorful-paintings-paintings-on-canvas.jpg",
            authorName: "Ivan Ivanov"
        },
        {
            imageName: "https://crosti.ru/patterns/00/1c/07/bbc3a51d85/preview.jpg",
            authorName: "Ivan Ivanov"
        },
        {
            imageName: "https://tvorchesky.ru/pictures/product/big/10498_big.jpg",
            authorName: "Ivan Ivanov"
        },
        {
            imageName: "https://i.ucrazy.ru/files/pics/2016.10/12c2.jpg",
            authorName: "Павел Ефимов"
        },
        {
            imageName: "https://cs2.livemaster.ru/storage/99/35/b5797357435e78d2bbd0d13a457f--kartiny-i-panno-kartina-maslomromashki.jpg",
            authorName: "Марьям Ефимова"
        },
    ]
    let columns = document.querySelectorAll('.works__grid--column')

    for(let i = 0; i < images.length; i++) {
        let div = document.createElement('div');
        div.className = "works__grid--item";
        div.innerHTML = `
            <img src="${images[i].imageName}" alt="" />
            <p class="author">${images[i].authorName}</p>
        `;
        columns[i%4].append(div)
    }

});