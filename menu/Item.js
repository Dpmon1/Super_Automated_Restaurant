class Item
{
    constructor(name, description = "", price, prepTime = undefined, images = undefined, ingredients = undefined, avail = false, popu = false)
    {
        //this.itemID = 
        this.itemName = name;
        this.itemDescription = description;
        this.itemPrice = price;
        this.itemPrepTime = prepTime;
        this.itemImages = images;
        this.itemIngredients = ingredients;
        this.itemAvailability = avail;
        this.itemPopularity = popu;
        this.itemDeleted = false;
    }
    addIngredient(ingredient)
    {
        this.itemIngredients.push(ingredient);
    }
    delIngredient(ingredient)
    {
        this.itemIngredients.splice(this.itemIngredients.indexOf(ingredient),1);
    }
    editItem(json)
    {
        if(json.itemName)
        {
            this.itemName = json.itemName;
        }
        if(json.itemDescription)
        {
            this.itemDescription = json.itemDescription;
        }
        if(json.itemPrice)
        {
            this.itemPrice = json.itemPrice;
        }
        if(json.itemPrepTime)
        {
            this.itemPrepTime = json.itemPrepTime;
        }
    }
}
function addItem(name, desc, price, prepTime, images, ingredients, avail, popu)
{
    return new Item(name,desc,price,prepTime,images,ingredients,avail,popu);
}
function deleteItem(item)
{
    item.itemDeleted = true;
}