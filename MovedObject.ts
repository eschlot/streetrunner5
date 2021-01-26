
// Gib deinen Code hier ein

enum Begehbarkeit
{
    MASSIV,
    UNTERTUNNELBAR,
    UEBERHUEPFBAR
}

class  MovedObject {
    protected speed : int32
    protected spur : int16
    protected begehbarkeit : Begehbarkeit
    protected startpunkt : int32
    protected sprite : Sprite

    constructor(speed:number, spur: number, begehbarkeit: Begehbarkeit,startpunkt:number )
    {
        this.speed=speed;
        this.spur=spur;
        this.begehbarkeit=begehbarkeit;
        this.startpunkt=startpunkt;
    }


    protected build()
    {
        this.sprite.x = 40*(this.spur+1)
        this.sprite.y = -this.startpunkt
        this.sprite.vy = this.speed 
    }

    public getSprite()
    {
        return this.sprite
    }

    public destroySprite()
    {
        this.sprite.destroy()
        this.sprite=null
    }

    initializeSprite()
    {
        console.log("initializeSprite in MovedObject")
    }
}

