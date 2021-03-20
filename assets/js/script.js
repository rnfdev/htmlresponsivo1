window.onload = () => {

    // Toggle Menu
    let menu = document.querySelector('.menu-mobile');
    let toggle = document.querySelector('.toggle');
    let close = document.querySelector('.close');

    menu.style.display = 'none';

    toggle.addEventListener('click', show);
    close.addEventListener('click', hide);

    function show() {
        menu.style.display = 'flex';
        menu.style.left = '0';
    }

    function hide() {
        menu.style.left = '100%';
    }

    // Banner
    let banner = document.querySelector('.banner');
    let viewWidth = window.innerWidth;

    if(viewWidth > 768) {
        banner.style.backgroundImage = "url('assets/img/bg-banner-desktop.png')";
    } else {
        banner.style.backgroundImage = "none";
    }

    //Scroll Suave
    // Identificar o clique no menu
    // Verificar o item que foi clicado e fazer referência com o alvo
    // Verificar a distância entre o alvo e o topo
    // Animar o scroll até o alvo

function getWidthDocument() {
    let width = window.innerWidth;

    if(width > 768) {
        return document.querySelectorAll('.menu a');
    } else {
        return document.querySelectorAll('.list-mobile a[href^="#"]');
    }
}

const menuItems = getWidthDocument();

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 70;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  // window.scroll({
  //   top: to,
  //   behavior: "smooth",
  // });
  smoothScrollTo(0, to, 500); // Informe a Cordenada X, Cordenada Y, Duração do Smooth
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

// Active Link Desktop
    const linkDesktop = document.querySelectorAll('.menu a');
    linkDesktop.forEach(item => {
        item.addEventListener('click', (e) => {
            let linkHref = e.target.getAttribute('href');
            setStyleMenu(linkHref);
        });

    function setStyleMenu(menu) {
        let getMenu = document.querySelector(`.menu a[href="${menu}"]`);
         switch(menu) {
             case("#banner"):
                getMenu.style.color = "#f00";
                document.querySelector('.menu a[href="#portfolio"]').style.color = "#fff";
                document.querySelector('.menu a[href="#servicos"]').style.color = "#fff";
                document.querySelector('.menu a[href="#contato"]').style.color = "#fff";
                break;
             case("#portfolio"):
                getMenu.style.color = "#f00";
                document.querySelector('.menu a[href="#banner"]').style.color = "#fff";
                document.querySelector('.menu a[href="#servicos"]').style.color = "#fff";
                document.querySelector('.menu a[href="#contato"]').style.color = "#fff";
                break;
             case("#servicos"):
                getMenu.style.color = "#f00";
                document.querySelector('.menu a[href="#banner"]').style.color = "#fff";
                document.querySelector('.menu a[href="#portfolio"]').style.color = "#fff";
                document.querySelector('.menu a[href="#contato"]').style.color = "#fff";
                break;
             case("#contato"):
                getMenu.style.color = "#f00";
                document.querySelector('.menu a[href="#banner"]').style.color = "#fff";
                document.querySelector('.menu a[href="#portfolio"]').style.color = "#fff";
                document.querySelector('.menu a[href="#servicos"]').style.color = "#fff";
                break;
         }
    }
    });
    // -------------------------End On Load-------------------------
}


// Banner
let viewWidth = window.innerWidth;
let banner = document.querySelector('.banner');
window.addEventListener('resize', function() {
    viewWidth = window.innerWidth;
    if(viewWidth > 768) {
        banner.style.backgroundImage = "url('assets/img/bg-banner-desktop.png')";
    } else {
        banner.style.backgroundImage = "none";
    }
});


// Contato via Whatsapp
const btnEnviar = document.querySelector('#btn-enviar');
const aviso = document.querySelector('#aviso');
const warning = document.querySelector('#warning');

btnEnviar.addEventListener('click', function(e) {
    e.preventDefault();
    let msg = document.querySelector('#mensagem').value;

    if(msg === '') {
        warning.classList.remove('display-none');
        setTimeout(() => {
            warning.classList.add('display-none');
        }, 2000);
    } else {
        window.location.href = `https://wa.me/5585988757519?text=${msg}`;
    }
});