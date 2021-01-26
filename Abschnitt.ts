class Abschnitt 
{
    protected objects:MovedObject[]=[];

    constructor()
    {
    }

    public add(o:MovedObject)
    {
        this.objects.push(o)
    }
    
    public isRunning()
    {
        let i:number;
        let returnValue=false;

        for (i=0;i<this.objects.length;i++)
        {
            let o=this.objects[i];
            if (o.getSprite()!=null)
            {
                if (o.getSprite().top<scene.screenHeight())
                {
                    returnValue= true;
                }
                else
                {
                    o.destroySprite()
                }
            }
        }
        return returnValue;
    }

    public start()
    {
        let i:number;
        for (i=0;i<this.objects.length;i++)
        {
            let o=this.objects[i];
            o.initializeSprite();
        }
    }
}
