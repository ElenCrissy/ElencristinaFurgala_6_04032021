class Header{
    constructor(selector, photographerList){
        this.selector = selector;
        this.photographerList = photographerList;
    }

    createHeader(){        
        const headerElements = document.createElement('div');
        headerElements.classList.add('header-elements');
        headerElements.setAttribute('tabindex', '0');

        const logoLink = document.createElement('a');
        logoLink.setAttribute('href', 'index.html');
        logoLink.setAttribute('tabindex', '2');
        logoLink.setAttribute('aria-current', 'page');
        logoLink.classList.add('logo');
        
        const logoImg = document.createElement('img');
        logoImg.setAttribute('src', 'images/Logo/logo.png');
        logoImg.setAttribute('alt', 'FishEye Home Page');

        const goToMain = document.createElement('a');
        goToMain.setAttribute('href', '#index_main');
        goToMain.classList.add('go_to_main');
        goToMain.appendChild(document.createTextNode('Passer au contenu'));

        const navbar = this.createNavbar();

        this.selector.setAttribute('tabindex', '1');

        logoLink.appendChild(logoImg);
        headerElements.append(logoLink, goToMain, navbar);
        this.selector.appendChild(headerElements);
    }

    createNavbar() {
        const navbar = document.createElement('nav');
        navbar.setAttribute('role', 'navigation');
        navbar.setAttribute('tabindex', '0');
        navbar.setAttribute('aria-label', 'navigation_principale');
        const tagsName = ['portrait', 'art', 'fashion', 'architecture', 'travel', 'sport', 'animals', 'events'];

        tagsName.forEach(tagName => {
            const tag = this.photographerList.createTag(navbar, tagName);
            tag.classList.add('navigation-item');
            return tag;
        })
        return navbar;
    }
}