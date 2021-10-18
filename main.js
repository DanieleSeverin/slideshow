//fetched data
const data = [
    'https://occ-0-728-778.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABVcL9HO-rsXxXXVXVpsqAdELpwWWUKcMhI30y3T9cGHgw61wRX6oC1gLe2EVYFFATbXI6R_v3NvwYuG3LB7AkhJ0NxI.jpg?r=01d',
    'https://occ-0-728-778.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABV177VHnizQGLsY-jkZWaaFWQoZ2pWz-nKLj_6TCNqbv983GZ48tiUjoq21Gc4tbvmFd_D7tFdgai06gkoxgjy0jqg8.jpg?r=91a',
    'https://occ-0-728-778.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABU5w7z-kesVp4Paod_ivoxcytx_9E-YLxOUJm4IsK3Ey_UYB-ZJGAR_XhnJEXAPb-S8onW8oYgeocPVe_OjmoAcw5TE.jpg?r=058',
    'https://occ-0-728-778.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABWYj__KEV_rJ5hUSzejAgSsSFgwOQaOGunspzwK3Vm61QF1kYMtoxUwmuSdAx-PhzoAiRb4xUaB3lzh6KWUybpaqRts.jpg?r=1ff',
    'https://occ-0-728-778.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABXXLBP7T6eAhxDIQWPjDA86VCTN2Cy4_5U7C7QhGLgpRfVJvkgR1krjHRo-QIW3yal02_opBKX6IcgiZNbG9AkXBnSfKTbGL19MwuW82JKSuGgRacoDUfEfFCmtr.jpg?r=909',
    'https://occ-0-728-778.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABXLAr-JJ7IDV2aqz8OdjbOuj_jYLQKN2ecFpUy1nqLj_ZZY3DGwowFrBcoXU0EFXYmWfkjwOo6Y1Nmprdy7-Kfx2yQdPNeFyd1kBDf9jY6BXsDL-ud-V5S6nqw0g.jpg?r=014',
    'https://occ-0-728-778.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABdH_ouF5I1FW3yquxEN-s6slrAMd1tZQ1jS4D60jozEzFLMkiz08jIP6rlcuhJ4NPwGDEQiO_hheWwKtzbIXRcRk5_Rz6rKPpLFhVflmLQQmHr8EA2IP-_i-gotC.jpg?r=bb9',
    'https://occ-0-728-778.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABcistyG8eLGO9ta5hLMlYqbwADfs9kwctHgoIG5roFHEe78u6zdyV0No6r2F6GCADXW9xsQVOC8PfhczwvJNMIBGm0PyIQnl89SLgS2G8gUSYv_BmSjGT3Z_cq8B.jpg?r=4aa',
    'https://occ-0-728-778.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABVeumLrhL1MCMHKdszZ4WUlDBe9PF2Z7IG-6uBoPzQLVhPR1MPtr8eGaF5aRHl12Qk9qTRQgY_jWNwRhr7x8al9Qaug.jpg?r=849',
    'https://occ-0-728-778.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABWNKXe-e6ZMLqv3cFrDiIK1AYqbtyfzQkA98q55BvWdkNCmLlH5pSZlObMLCa3KpjeaTCUWogXrUpOnc9V4c5_ywMHuWQel1nnrQ7qnsOFtv9oyFmGQcQ9xXIHU6.jpg?r=ce9',
    'https://occ-0-728-778.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABdQRapAu3AI46BenxGymzBI8Tl4ME74Ol8ZwI3IkP_1zs_x44u-IY-V0c40xKLl-b_Zfq9QrdyYuTPKLo-Rp5jkRBZgaE6foGvSMkc_5WOmXwaY-MOGxLOWE_VKX.jpg?r=422'
];

const wheelHandler = (e, element) =>{
    let delta = 0;

    if(typeof e === 'number'){
        delta = e;
    } else if (e.deltaX !== 0) {
        delta = e.deltaX;
        e.preventDefault();
    }
    element.scrollLeft += delta;
}

function handleMouse(e) {
    wheelHandler(e, items);
}

window.onload = function() {
    const items = document.getElementById('items');

    data.forEach( x => {
        let item = document.createElement('div');
        item.classList.add('item');

        let img =  document.createElement('img');
        img.classList.add('item-image');
        img.src = x;

        let imgCard =  document.createElement('img');
        imgCard.classList.add('item-image-card');
        imgCard.src = x;

        let cardContent = document.createElement('div');
        cardContent.classList.add('displaynone');

        const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et semper risus, et tempus orci.'
        let description = document.createElement('p');
        description.classList.add('item-description');
        description.textContent = text;

        const iconPlay = document.createElement('i');
        iconPlay.classList.add('fas', 'fa-play-circle');

        const iconStar = document.createElement('i');
        iconStar.classList.add('fas', 'fa-star');

        const seconds = Math.floor(Math.random() * 60);
        const minutes = Math.floor(Math.random() * 60);
        let time = (minutes ? minutes : '00')  + ':' + (seconds > 9 ? seconds : '0' + seconds) + ' min';
        let showTime = document.createElement('div');
        showTime.classList.add('show-time');
        showTime.innerText = time;

        cardContent.appendChild(imgCard);
        cardContent.appendChild(iconPlay);
        cardContent.appendChild(iconStar);
        cardContent.appendChild(showTime);
        cardContent.appendChild(description);
        item.appendChild(cardContent);
        item.appendChild(img);
        items.appendChild(item);

        items.addEventListener("wheel", handleMouse, false);

        item.addEventListener("mouseenter", (e) => {
            cardContent.classList.remove('displaynone');
            cardContent.classList.add('item-card-content');

            let opacity = 0;

            const setOpacity = () => {
                if(opacity < 1) {
                    opacity += 0.2;
                    cardContent.style.opacity = opacity;
                }
            }

            const interval = setInterval(setOpacity, 100);
            if(opacity >= 1) clearInterval(interval);

            img.classList.remove('item-image');
            img.classList.add('displaynone');
        });

        item.addEventListener("mouseleave", (e) => {
            cardContent.classList.remove('item-card-content');
            cardContent.classList.add('displaynone');
            cardContent.style.opacity = 0;

            img.classList.remove('displaynone');
            img.classList.add('item-image');
        });
    })
}

