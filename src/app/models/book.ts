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
    get bookName() {
        return this.name;
    }
    get bookCoverURL() {
        return this.coverURL;
    }
    get bookGenre() {
        return this.genre;
    }

    get bookBriefDescription() {
        return this.briefDescription;
    }
    get bookLikesCount() {
        return this.likes.count;
    }

    get bookShopList() {
        return this.shopList;
    }

    addLike(userId: number): void {
        if (!(userId in this.likes.items)) {
            this.likes.count ++;
            this.likes.items.push(userId);
        }
    }

    isLiked(userId: number): boolean {
        if (userId in this.likes.items) {
            return true;
        } else {
            return false;
        }
    }
}
