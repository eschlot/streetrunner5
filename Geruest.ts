class Geruest extends MovedObject
{

    constructor(spur: number,startpunkt:number) { 
        super(20, spur, Begehbarkeit.UNTERTUNNELBAR,startpunkt)
        
     }


    initializeSprite()
    {
        console.log("initializeSprite in Geruest")
        this.sprite =  sprites.create(assets.image`Geruest`,SpriteKind.Geruest)
        this.build()
    }


}
