def on_button_pressed_a():
    while True:
        basic.show_number(pins.analog_read_pin(AnalogPin.P1))
        basic.show_icon(IconNames.SMALL_DIAMOND)
        ESP8266_IoT.connect_thing_speak()
        basic.show_icon(IconNames.DIAMOND)
        ESP8266_IoT.set_data("0P838AQUU1O7B3EJ", pins.analog_read_pin(AnalogPin.P1))
        basic.show_icon(IconNames.SMALL_SQUARE)
        ESP8266_IoT.upload_data()
        basic.show_icon(IconNames.SQUARE)
        basic.show_icon(IconNames.YES)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    for index in range(3):
        basic.show_number(pins.analog_read_pin(AnalogPin.P1),50)
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_icon(IconNames.SILLY)
ESP8266_IoT.init_wifi(SerialPin.P8, SerialPin.P12, BaudRate.BAUD_RATE115200)
ESP8266_IoT.connect_wifi("Dnet", "123456789")
if ESP8266_IoT.wifi_state(True):
    basic.show_icon(IconNames.HAPPY)
else:
    basic.show_icon(IconNames.SAD)