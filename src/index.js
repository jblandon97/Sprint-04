import "./styles/rules.sass";

const d = document;

const head = d.querySelector("head");
const backgroundBody = d.createElement('img');
const backgroundFooter = d.createElement('img');
const footer = d.createElement('footer');
const linkCDN1 = d.createElement('link');
const divIcons = d.createElement('div');
const iconFacebook = d.createElement('i');
const iconInstagram = d.createElement('i');
const iconPinterest = d.createElement('i');

backgroundBody.crossOrigin ="anonymous";
backgroundBody.src = "https://raw.githubusercontent.com/jblandon97/Sprint-04/ea33abadb50cde70050ab3bf1609370d98c1807b/imagenes/bg-stars.svg";

backgroundFooter.crossOrigin ="Anonymous";
backgroundFooter.src ="https://raw.githubusercontent.com/jblandon97/Sprint-04/ea33abadb50cde70050ab3bf1609370d98c1807b/imagenes/pattern-hills.svg";

linkCDN1.rel ="stylesheet";
linkCDN1.href ="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css";
footer.setAttribute("id", "mountains");
divIcons.id = "icons"

d.body.appendChild(backgroundBody);
d.body.appendChild(footer);
iconFacebook.classList.add('bi', 'bi-facebook');
iconPinterest.classList.add('bi', 'bi-pinterest');
iconInstagram.classList.add('bi', 'bi-instagram');
divIcons.appendChild(iconFacebook);
divIcons.appendChild(iconInstagram);
divIcons.appendChild(iconPinterest);
footer.appendChild(backgroundFooter);
footer.appendChild(divIcons);
head.appendChild(linkCDN1);



