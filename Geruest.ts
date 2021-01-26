class Geruest extends MovedObject
{

    constructor(spur: number,startpunkt:number) { 
        super(20, spur, Begehbarkeit.UNTERTUNNELBAR,startpunkt)
        
     }


    initializeSprite()
    {
        this.sprite =  sprites.create(assets.image`Geruest`,SpriteKind.Geruest)
        this.build()
    }


}
