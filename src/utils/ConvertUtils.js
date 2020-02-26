class ConvertUtils {
    binaryToDecimal(binary) {
        return parseInt(binary, 2)
    }

    binaryToHexadecimal(binary) {
        return parseInt(binary, 2).toString(16).toUpperCase()
    }

    binaryToOctal(binary) {
        return parseInt(binary, 2).toString(8).toUpperCase()
    }

    decimalToBinary(value) {
        return parseInt(value).toString(2).toUpperCase()
    }

    decimalToHexadecimal(value) {
        return parseInt(value).toString(16).toUpperCase()
    }

    decimalToOctal(value) {
        return parseInt(value).toString(8).toUpperCase()
    }

    hexadecimalToBinary(value) {
        return parseInt(value, 16).toString(2)
    }

    hexadecimalToDecimal(value) {
        return parseInt(value, 16).toString(10)
    }

    hexadecimalToOctal(value) {
        return parseInt(value, 16).toString(8)
    }

    octalToBinary(value) {
        return parseInt(value, 8).toString(2)
    }

    octalToDecimal(value) {
        return parseInt(value, 8).toString(10)
    }

    octalToHexadecimal(value) {
        return parseInt(value, 8).toString(16)
    }

}

export default new ConvertUtils()
