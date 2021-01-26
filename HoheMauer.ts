class HoheMauer extends MovedObject
{

    constructor(spur: number,startpunkt:number) { 
        super(60, spur, Begehbarkeit.MASSIV,startpunkt)

     }


    public initializeSprite()
    {
        console.log("initializeSprite in HoheMauer")
        this.sprite = sprites.create(assets.image`HoheMauer`,SpriteKind.HoheMauer)
        this.build()
    }

}
