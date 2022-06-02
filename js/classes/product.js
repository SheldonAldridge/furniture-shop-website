export class furniture{
    constructor(id,image,productname,description,cost,getImage){
        this.id = id;
        this.image = image;
        this.name = productname;
        this.description = description;
        this.cost = cost;
        this.getImage = getImage;
    }
    id = Math.floor(Math.random() * 1000);
}