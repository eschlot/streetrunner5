
namespace SpriteKind {
    export const Lastwagen = SpriteKind.create()
    export const Geruest = SpriteKind.create()
    export const HoheMauer = SpriteKind.create()
    export const NiedrigeMauer = SpriteKind.create()
}

enum Color {
    Transparent, // 0
    White, // 1 = RGB(255, 255, 255)
    Red, // 2 = RGB(255, 33, 33)
    Pink, // 3 = RGB(255, 147, 196)
    Orange, // 4 = RGB(255, 129, 53)
    Yellow, // 5 = RGB(255, 246, 9)
    Aqua, // 6 = RGB(36, 156, 163)
    BrightGreen, // 7 = RGB(120, 220, 82)
    Blue, // 8 = RGB(0, 63, 173)
    LightBlue, // 9 = RGB(135, 242, 255)
    Purple, // 10 = RGB(142, 46, 196)
    RoseBouquet, // 11 = RGB(164, 131, 159)
    Wine, // 12 = RGB(92, 64, 108)
    Bone, // 13 = RGB(229, 205, 196)
    Brown, // 14 = RGB(145, 70, 61)
    Black // 15 = RGB(0, 0, 0)
}


scene.setBackgroundColor(Color.Bone)

let abschnitte : Abschnitte = new Abschnitte();
{
    let abschnitt : Abschnitt = new Abschnitt()
    abschnitt.add(new HoheMauer(1,50))
    abschnitt.add(new Geruest(0,50))
    abschnitt.add(new NiedrigeMauer(2,100))
    abschnitt.add(new Lastwagen(0,300))
    abschnitte.add(abschnitt)
}
{
    let abschnitt : Abschnitt = new Abschnitt()
    abschnitt.add(new HoheMauer(2,50))
    abschnitt.add(new Geruest(0,50))
    abschnitt.add(new NiedrigeMauer(0,400))
    abschnitt.add(new Lastwagen(1,300))
    abschnitte.add(abschnitt)
}


game.onUpdateInterval(200, function () {
        let aktAbschnitt = abschnitte.getActiveAbschnitt()
        if (!aktAbschnitt.isRunning())
        {
            let neuerAbschnitt = Math.floor(randint(0,abschnitte.numAbschnitte()-1))
            console.logValue("neuerAbschnitt", neuerAbschnitt)
            abschnitte.setActiveAbschnitt(neuerAbschnitt)
        } 
})

abschnitte.setActiveAbschnitt(0);




