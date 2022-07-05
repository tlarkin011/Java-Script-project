class Artist {
    constructor (input){
        this.input = input
        
    
    }

    artistName(){
        return `${this.input}`
    }  
}

class Album {
    constructor(albumCover, year){
    this.albumCover = albumCover
    this.year = year
    this.albumArray = []
    }
    albumName(){
        alert(`${this.albumCover} released ${this.year}`)
        }
    

}

class Genre{
    constructor(type){
    this.type = type
    }
    classification(){
        return `${this.type}`;
    }
}

class Menu {
    constructor(){
        this.artist = []
        this.array = []
        
    }
    start(){
        let selection = this.showMainMenuOptions()
        while (selection != 0){
            switch (selection) {
                case '1' :
                    this.viewArtists()
                    break;
                case '4' :
                    this.viewAlbums()
                    break;
                case '3' : 
                    this.displayalbums() 
                    break;
                case '2':
                    this.createArtist()
                    break;
                case '5': 
                    this.deleteAlbum()
                    break;       
                default: 
                    selection = 0         

            }
            selection = this.showMainMenuOptions()
        }
        alert('See ya!')
        
    }
    showMainMenuOptions(){
        return prompt(`
        0) Exit
        1) View Artists
        2) Create Artist
        3) Display Albums
        4) Create Albums
        5) Delete Album
        `);
    }

    createArtist(){
        
        let name = prompt ('Enter name for new artist:');
        this.artist.push(name + `\n`);
        
        
    }
    viewArtists(){
        
    
         return alert(this.artist)
    }
    viewAlbums(){
        let newAlbumName = prompt('No albums found, please add the name of an album')
        let yearOfAlbum = prompt("what year was it recorded")
        let album = new Album(newAlbumName, yearOfAlbum)
        album.albumName() + `\n`
        this.array.push(`The Album ${newAlbumName} was released in ${yearOfAlbum}` + `\n`)
    }
    displayalbums(){
        if (this.array.length > 0){
        return alert(this.array)
        }
        else  { 
            return alert(`${"No albums found"}`)
        }
    }
    deleteAlbum(){
        let list = ""
        for(let i = 0; i < this.array.length; i++){
            list += i + ') ' + this.array[i] + '\n'; 
        }
        alert(list)
        let file = prompt("select an album index to delete")
        if (file > -1 && file < this.array.length){
            this.array.splice(file, 1);
        }
    }
}

let menu = new Menu()
menu.start()
