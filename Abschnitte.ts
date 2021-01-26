class Abschnitte 
{
    protected abschnittListe : Abschnitt[]=[];
    protected aktiverAbschnitt:Abschnitt

    constructor ()
    {
    }

    public setActiveAbschnitt(index:number)
    {
        this.aktiverAbschnitt= this.abschnittListe[index]
        this.aktiverAbschnitt.start()
    }

    public getActiveAbschnitt()
    {
        return this.aktiverAbschnitt
    }

    public add(abschnitt:Abschnitt)
    {
        this.abschnittListe.push(abschnitt)
    }

    public numAbschnitte()
    {
        return this.abschnittListe.length
    }
}
