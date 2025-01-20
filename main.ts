const casCekani: number = 0
const casReakce: number = 0
const proximity: number = 0
let nahodnyCas = Math.randomRange(2500, 5000)

input.onButtonPressed(Button.A, function () {
    music.playTone(400, 500)
    basic.showLeds(`
# # # # #
. # # # .
. . # . .
. # # # .
# # # # #
`)
    basic.pause(nahodnyCas)
    basic.clearScreen()
} )
music.playTone(400, 500)
control.inBackground(function () {
    music.playTone(400, 500)
})
if Sensors.OnLightDrop(basic.showLeds(casReakce) {
    
})

