class HoheMauer extends MovedObject
{

    constructor(spur: number,startpunkt:number) { 
        super(20, spur, Begehbarkeit.MASSIV,startpunkt)

     }


    public initializeSprite()
    {
        this.sprite = sprites.create(assets.image`HoheMauer`,SpriteKind.HoheMauer)
        this.build()
    }

}
