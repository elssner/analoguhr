function writeClock (x: number, y: number, radius: number, hour: number, minute: number) {
    matrix.rasterCircle(x, y, radius)
    for (let ih = 0; ih <= 11; ih++) {
        matrix.hour_mark(ih, x, y, 20, 23)
    }
    matrix.hour_mark(hour, x, y, 0, 10)
    matrix.minute_mark(minute, x, y, 0, 16)
}
matrix.init(matrix.ePages.y128)
matrix.displayMatrix()
rtcpcf85063tp.beimStart(rtcpcf85063tp.rtcpcf85063tp_eADDR(rtcpcf85063tp.eADDR.RTC_x51))
matrix.comment("elssner/analoguhr")
matrix.comment("2 Erweiterungen:")
matrix.comment("calliope-net/matrix")
matrix.comment("calliope-net/rtc-uhr")
loops.everyInterval(1000, function () {
    rtcpcf85063tp.readDateTime(rtcpcf85063tp.rtcpcf85063tp_eADDR(rtcpcf85063tp.eADDR.RTC_x51))
    matrix.clearMatrix()
    matrix.writeClock_radius24(30, 23, rtcpcf85063tp.getByte(rtcpcf85063tp.rtcpcf85063tp_eRegister(rtcpcf85063tp.eRegister.Stunde), rtcpcf85063tp.eFormat.DEC), rtcpcf85063tp.getByte(rtcpcf85063tp.rtcpcf85063tp_eRegister(rtcpcf85063tp.eRegister.Minute), rtcpcf85063tp.eFormat.DEC))
    writeClock(63, 63, 24, rtcpcf85063tp.getByte(rtcpcf85063tp.rtcpcf85063tp_eRegister(rtcpcf85063tp.eRegister.Stunde), rtcpcf85063tp.eFormat.DEC), rtcpcf85063tp.getByte(rtcpcf85063tp.rtcpcf85063tp_eRegister(rtcpcf85063tp.eRegister.Minute), rtcpcf85063tp.eFormat.DEC))
    matrix.writeDigits(15, 0, rtcpcf85063tp.getTime(rtcpcf85063tp.ePart.mit))
    matrix.displayMatrix()
})
