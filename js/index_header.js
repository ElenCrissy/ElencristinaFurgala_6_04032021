class Header{
    createDomHeader(){
        const body = document.querySelector('body');
        
        const header = document.createElement('header');
        header.setAttribute('role', 'banner');
        header.setAttribute('class', 'header-index');
        
        const headerElements = document.createElement('div');
        headerElements.classList.add('header-elements');

        const logoLink = document.createElement('a');
        logoLink.setAttribute('href', 'index.html');
        logoLink.classList.add('class', 'logo');
        
        const logoImg = document.createElement('img');
        Object.assign(logoImg, {
            src: 'images/Logo/logo.png',
            alt: 'FishEye Home Page'
        })

        const goToMain = document.createElement('a');
        goToMain.setAttribute('href', '#index_main');
        goToMain.classList.add('class', 'go_to_main');
        goToMain.appendChild(document.createTextNode('Passer au contenu'));

        const navbar = this.createNavbar()

        logoLink.appendChild(logoImg);
        header.appendChild(headerElements);
        headerElements.append(logoLink, goToMain, navbar);
        body.appendChild(header);
    }

    createNavbar() {
        const navbar = document.createElement('nav');
        navbar.setAttribute('role', 'navigation');
        const tagsName = ['portrait', 'art', 'fashion', 'architecture', 'travel', 'sport', 'animals', 'events'];
        tagsName.forEach(tagName => {
            const tagNameDiv = document.createElement('div');
            tagNameDiv.classList.add('navigation-item', 'tag');
            tagNameDiv.appendChild(document.createTextNode(`#${tagName}`));
            navbar.appendChild(tagNameDiv);
        })
        return navbar;
    }
}