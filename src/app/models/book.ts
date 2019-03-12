export class Book {
    private name: string;
    private coverURL: string;
    private genre: string;
    private briefDescription: string;
    private likes: {count: number,
                    items: number[]
                };
    private shopList: number[]; // массив id магазинов

    constructor(book) {
        this.name = book['name'];
        this.coverURL = book['coverURL'];
        this.genre = book['genre'];
        this.briefDescription = book['briefDescription'];
        this.likes = book['likes'];
        this.shopList = book['shopList'];
    }
    get bookName(): string {
        return this.name;
    }
    set bookName(newName: string) {
        this.name = newName;
    }
    get bookCoverURL(): string {
        return this.coverURL;
    }
    get bookGenre(): string {
        return this.genre;
    }
    set bookGenre(newGenre: string) {
        this.genre = newGenre;
    }
    get bookBriefDescription(): string {
        return this.briefDescription;
    }
    set bookBriefDescription(newBriefDescription) {
       this.briefDescription = newBriefDescription;
    }

    get bookLikesCount() {
        return this.likes.count;
    }

    get bookShopList(): number[] {
        return this.shopList;
    }

    set bookShopList(newShopList: number[]) {
        this.shopList = newShopList;
    }

    addLike(userId: number): void {
        if (!(this.likes.items.indexOf(userId) + 1)) {
            this.likes.count ++;
            this.likes.items.push(userId);
        }
    }
    delLike(userId: number): void {
        const pos = this.likes.items.indexOf(userId);
        if (pos + 1) {
            this.likes.count --;
            this.likes.items.splice(pos, 1);
        }
    }

    isLiked(userId: number): boolean {
        if (this.likes.items.indexOf(userId) + 1) {
            return true;
        } else {
            return false;
        }
    }
    isFoundString(searchStr: string): boolean {
        if (this.name.toUpperCase().indexOf(searchStr.toUpperCase()) + 1) {
            return true;
        }
        if (this.genre.toUpperCase().indexOf(searchStr.toUpperCase()) + 1) {
            return true;
        }
        return false;
    }
}
