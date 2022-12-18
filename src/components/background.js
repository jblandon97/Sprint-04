import "../styles/rules.sass";


export const background = () => {

    const d = document;

    const head = d.querySelector("head")
    , backgroundFooter = d.createElement('img')
    , footer = d.createElement('footer')
    , linkCDN1 = d.createElement('link')
    , linkCDN2 = d.createElement('link')
    , scriptCDN1 = d.createElement('link')
    , divIcons = d.createElement('div')
    , divCountdown = d.createElement('div')
    , iconFacebook = d.createElement('i')
    , iconInstagram = d.createElement('i')
    , iconPinterest = d.createElement('i')


    backgroundFooter.crossOrigin = "Anonymous";
    backgroundFooter.src = "https://raw.githubusercontent.com/jblandon97/Sprint-04/ea33abadb50cde70050ab3bf1609370d98c1807b/imagenes/pattern-hills.svg";

    linkCDN1.rel = "stylesheet";
    linkCDN1.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css";

    linkCDN2.innerHTML = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">`;

    scriptCDN1.innerHTML = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>`;
    
    divCountdown.id = "countdown";

    footer.setAttribute("id", "mountains");

    divIcons.id = "icons";

    d.body.appendChild(divCountdown);
    d.body.appendChild(footer);
    // d.body.appendChild(divIcons);

    iconFacebook.classList.add('bi', 'bi-facebook');
    iconPinterest.classList.add('bi', 'bi-pinterest');
    iconInstagram.classList.add('bi', 'bi-instagram');

    divIcons.appendChild(iconFacebook);
    divIcons.appendChild(iconInstagram);
    divIcons.appendChild(iconPinterest);
    
    footer.appendChild(divIcons)
    footer.appendChild(backgroundFooter);
  

    head.appendChild(linkCDN1);
    head.appendChild(linkCDN2);
    head.appendChild(scriptCDN1);
    


}
