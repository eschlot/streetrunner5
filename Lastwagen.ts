class Lastwagen extends MovedObject
{

    constructor(spur: number,startpunkt:number) { 
        super(40, spur, Begehbarkeit.MASSIV,startpunkt)
        
     }


    public initializeSprite()
    {
        console.log("initializeSprite in Lastwagen")
        this.sprite = sprites.create(assets.image`Lastwagen`,SpriteKind.Lastwagen)
        this.build()
    }

}
