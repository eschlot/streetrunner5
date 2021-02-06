
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


controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (spur>0)
    {
        spur=spur-1
        direction=-1
        mySprite.vx = -200
    }
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (spur<2)
    {
        spur=spur+1
        direction=1
        mySprite.vx = 200
    }
})


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
    abschnitt.add(new NiedrigeMauer(0,250))
    abschnitt.add(new Lastwagen(1,300))
    abschnitte.add(abschnitt)
}
{
    let abschnitt : Abschnitt = new Abschnitt()
    abschnitt.add(new HoheMauer(1,300))
    abschnitt.add(new Geruest(0,50))
    abschnitt.add(new NiedrigeMauer(0,300))
    abschnitt.add(new Lastwagen(1,300))
    abschnitt.add(new Lastwagen(2,300))
    abschnitte.add(abschnitt)
}

let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 3 3 3 3 3 3 . . . . . . . 
    . . 3 3 . . . . . 3 3 3 3 . . . 
    . . 3 . . . . . . . . . 3 . . . 
    . . 3 . . . . . . . . . 3 3 . . 
    . . 3 . . . . . . . . . . 3 . . 
    . . 3 . . . . . . . . . . 3 . . 
    . . 3 . . . . . . . . . . 3 3 . 
    . . 3 . . . . . . . . . . 3 3 . 
    . 3 . . . . . . . . . . . 3 3 . 
    . 3 . . . . . . . . . . . . 3 . 
    . 3 . . . . . . . . . . . . 3 . 
    . 3 . . . . . . . . . . . . . 3 
    . 3 . . . . . . . . . . . . . 3 
    . . . . . . . . . . . . . . . 3 
    `, SpriteKind.Player)

let spur = 1
let direction =0

mySprite.setPosition(40 + 40 * spur, 96)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . . f f f f 2 2 f f f f . . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f f 2 f e f . . 
    . . f f f 2 f e e 2 2 f f f . . 
    . . f e 2 f f e e 2 f e e f . . 
    . f f e f f e e e f e e e f f . 
    . f f e e e e e e e e e e f f . 
    . . . f e e e e e e e e f . . . 
    . . . e f f f f f f f f 4 e . . 
    . . . 4 f 2 2 2 2 2 e d d 4 . . 
    . . . e f f f f f f e e 4 . . . 
    . . . . f f f . . . . . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . . f f f f 2 2 f f f f . . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e f 2 f f f 2 f 2 e f . . 
    . . f f f 2 2 e e f 2 f f f . . 
    . . f e e f 2 e e f f 2 e f . . 
    . f f e e e f e e e f f e f f . 
    . f f e e e e e e e e e e f f . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f e . . . 
    . . 4 d d e 2 2 2 2 2 f 4 . . . 
    . . . 4 e e f f f f f f e . . . 
    . . . . . . . . . f f f . . . . 
    `],
100,
true
)

game.onUpdate(function () {
    if (direction == 1)
    {
        if (40+spur*40 < mySprite.x) {
            mySprite.vx = 0
            direction = 0
        }    
    }
    if (direction == -1)
    {
        if (40+spur*40 > mySprite.x) {
            mySprite.vx = 0
            direction = 0
        }
    }
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Geruest, function(sprite: Sprite, otherSprite: Sprite) {
    
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Lastwagen, function(sprite: Sprite, otherSprite: Sprite) {
    game.over()
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.NiedrigeMauer, function(sprite: Sprite, otherSprite: Sprite) {
    
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.HoheMauer, function(sprite: Sprite, otherSprite: Sprite) {
    
    game.over()
})

game.onUpdateInterval(200, function () {
        let aktAbschnitt = abschnitte.getActiveAbschnitt()
        if (!aktAbschnitt.isRunning())
        {
            let neuerAbschnitt = Math.floor(randint(0,abschnitte.numAbschnitte()-.5))
            console.logValue("neuerAbschnitt", neuerAbschnitt)
            abschnitte.setActiveAbschnitt(neuerAbschnitt)
        } 
})
abschnitte.setActiveAbschnitt(0);





