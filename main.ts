// Write pin data to Thingspeak
input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.showNumber(pins.analogReadPin(AnalogPin.P1))
        basic.showIcon(IconNames.SmallDiamond)
        ESP8266_IoT.connectThingSpeak()
        basic.showIcon(IconNames.Diamond)
        ESP8266_IoT.setData(
        "0P838AQUU1O7B3EJ",
        pins.analogReadPin(AnalogPin.P1)
        )
        basic.showIcon(IconNames.SmallSquare)
        ESP8266_IoT.uploadData()
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.Yes)
    }
})
// Pin Bar Chart
input.onButtonPressed(Button.AB, function () {
    while (true) {
        led.plotBarGraph(
        pins.analogReadPin(AnalogPin.P1),
        1023
        )
    }
})
// 3 quick reads of pin
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    }
})
// Connect to WiFi
basic.showIcon(IconNames.Silly)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("Dnet", "123456789")
if (ESP8266_IoT.wifiState(true)) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
