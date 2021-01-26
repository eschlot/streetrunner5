class NiedrigeMauer extends MovedObject
{
    constructor(spur: number,startpunkt:number) { 
        super(60, spur, Begehbarkeit.UEBERHUEPFBAR,startpunkt)
     }

    public initializeSprite()
    {
        console.log("initializeSprite in NiedrigeMauer")
        this.sprite =  sprites.create(assets.image`NiedrigeMauer`,SpriteKind.NiedrigeMauer)
        this.build()
    }

}
