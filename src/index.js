const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')



const nav = document.querySelectorAll("a");
// const nav = document.querySelector

nav[0].textContent = 'Services';
// nav[0].textContent = siteContent["nav"]["nav-item-1"];
// nav[0].className = 'italic'  
//----> alternative way to do it, by gathering values out of the object provided above
nav[1].textContent = 'Product';
nav[2].textContent = 'Vision';
nav[3].textContent = 'Features';
nav[4].textContent = 'About';
nav[5].textContent = 'Contact';

nav.forEach(n => n.className = 'italic');
// nav.forEach(function(n){
//   return n.className = 'italic';
// })
// nav.forEach(n => n.className = header nav a.italic)

const logo = document.querySelector('#logo-img');
logo.src = "http://localhost:9000/img/logo.png";
//logo.src = siteContent.images["logo-img"];  ---> alt way

const mainHeader = document.querySelector('h1');
mainHeader.textContent = 'DOM Is Awesome';
//mainHeader.textContent = siteContent.cta.h1; ---> alternative

const button = document.querySelector('.cta button');
button.textContent = 'Get Started';

const image1 = document.querySelector('#cta-img');
image1.src = "http://localhost:9000/img/cta.png";

const contentHeaders = document.querySelectorAll('.main-content h4');
contentHeaders[0].textContent = 'Features';
//contentHeaders[0].textContent = siteContent['main-content']['features-h4'];
contentHeaders[1].textContent = 'About';
contentHeaders[2].textContent = 'Services';
contentHeaders[3].textContent = 'Product';
contentHeaders[4].textContent = 'Vision';

const contentHeadersParagraphs = document.querySelectorAll('.main-content p');
contentHeadersParagraphs[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
contentHeadersParagraphs[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
contentHeadersParagraphs[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
contentHeadersParagraphs[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
contentHeadersParagraphs[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const image2 = document.querySelector('#middle-img');
image2.src = "http://localhost:9000/img/accent.png";

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = 'Contact';

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = '123 Way 456 Street Somewhere, USA';
contactInfo[1].textContent = '1 (888) 888-8888';
contactInfo[2].textContent = 'sales@greatidea.io';

const copyright = document.querySelector('footer a');
copyright.className = 'bold';
copyright.textContent = 'Copyright Great Idea! 2021';









