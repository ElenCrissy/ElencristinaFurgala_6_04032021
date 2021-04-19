class Diaporama {

    constructor(listMedia) {
        this.listMedia = listMedia;
        this.currentMedia = null;
    }

    add(media){
        this.listMedia.push(media);
    }

    play() {
        this.current = this.listMedia[0];
    }

    next() {
        for(let i = 0; i < this.listMedia.length; i++) {
            if(this.listMedia[i] == this.currentMedia) {
                this.currentMedia = this.listMedia[++i];
                break;
            }
        }
    }

    previous() {
        for(let i = 0; i < this.listMedia.length; i++) {
            if(this.listMedia[i] === this.currentMedia) {
                this.currentMedia = this.listMedia[--i];
                break;
            }
        }
    }

    _
}