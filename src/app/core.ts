export interface standard {
    name: string;
    description: string;
}

export function unique(items: {name: string}[]){
    let namesUsed: string[] = [];
    let itemsOut = [];
    items.forEach(item => {
        if(namesUsed.indexOf(item.name) < 0){
            namesUsed.push(item.name);
            itemsOut.push(item);
        }
    });
    return itemsOut;
}