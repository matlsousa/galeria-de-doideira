class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.activeClick = this.handleClick.bind(); 
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            console.log
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClckEvent() {
        this.mobileMenu.addEventListener("click" , () => console.log("Hey"));
    }
    
     init(){
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
     }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
