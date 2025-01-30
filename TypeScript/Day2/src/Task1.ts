// Write a generic class Storage<T> that holds an array of items of type T. Add methods to add items and get all items.

class Storages<T> {
     items: T[] = []; 

    addItem(item: T) {
        this.items.push(item);
    }

    getItems(): T[] {
        return this.items;
    }
}

const stringStorage = new Storages();
stringStorage.addItem("hello");
console.log(stringStorage.getItems()); // ["hello"]
