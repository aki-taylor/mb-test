input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.TShirt)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Duck)
    basic.clearScreen()
})
basic.forever(function () {
    basic.showString("TEST")
    basic.pause(1000)
})
