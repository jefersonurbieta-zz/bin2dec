<template>
    <v-container>
        <v-row justify="center">
            <h1>Binary Convertor</h1>
        </v-row>

        <v-row justify="center">
            <p>Select the type of conversion you want</p>
        </v-row>

        <v-row justify="center" class="convert-input">
            <v-col cols="9">
                <v-textarea
                        v-model="input"
                        autofocus
                        clearable
                        auto-grow
                        rows="1"
                        flat
                        solo
                        @click:clear="output = ''"
                        @keyup="processInput"/>
            </v-col>

            <v-col cols="3">
                <v-select
                        v-model="inputType"
                        :items="items"
                        solo
                        flat
                        @change="inputTypeChange"/>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-btn class="btn-convert"
                   fab
                   text
                   large
                   width="72"
                   height="72"
                   @click="exchange">
                <v-icon dark>fas fa-exchange-alt</v-icon>
            </v-btn>
        </v-row>

        <v-row justify="center" class="convert-input">
            <v-col cols="9">
                <v-textarea
                        v-model="output"
                        clearable
                        auto-grow
                        disabled
                        rows="1"
                        flat
                        solo/>
            </v-col>

            <v-col cols="3">
                <v-select
                        v-model="outputType"
                        :items="itemsOutput"
                        solo
                        flat
                        @change="outputTypeChange"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import ConvertUtils from '../utils/ConvertUtils'

    export default {
        name: "Convert",
        data: () => ({
            items: ['Binary', 'Decimal', 'Hexadecimal', 'Octal'],
            input: '',
            inputType: 'Binary',
            output: '',
            outputType: 'Decimal',
            commandValues: ['Backspace', 'Control'],
            binaryValues: ['0', '1'],
            decimalValues: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            hexadecimalValues: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'],
            octalValues: ['0', '1', '2', '3', '4', '5', '6', '7'],
        }),
        computed: {
            itemsOutput() {
                return this.items.filter(item => item !== this.inputType)
            }
        },
        methods: {
            processInput() {
                this.clearInvalidInput()
                if(this.input.length > 0) {
                    this.calculate()
                } else {
                    this.output = ''
                }
            },
            clearInvalidInput() {
                const validValues = this.validValues()
                let result = ''
                this.input.split('').forEach(letter => {
                    if (validValues.indexOf(letter) >= 0) {
                        result += letter;
                    }
                });
                this.input = result
            },
            validValues() {
                switch (this.inputType) {
                    case 'Binary':
                        return this.binaryValues
                    case 'Decimal':
                        return this.decimalValues
                    case 'Hexadecimal':
                        return this.hexadecimalValues
                    case 'Octal':
                        return this.octalValues
                }
            },
            inputTypeChange() {
                if(!this.itemsOutput.some(item => item === this.outputType)) {
                    this.outputType = this.itemsOutput[0]
                }
                this.processInput()
            },
            outputTypeChange() {
                this.processInput()
            },
            exchange() {
                const input = this.inputType
                this.inputType = this.outputType
                this.outputType = input
                this.processInput()
            },
            calculate() {
                switch (this.inputType) {
                    case 'Binary':
                        this.calculateBinary()
                        break
                    case 'Decimal':
                        this.calculateDecimal()
                        break
                    case 'Hexadecimal':
                        this.calculateHexadecimal()
                        break
                    case 'Octal':
                        this.calculateOctal()
                        break
                }
            },
            calculateBinary() {
                switch (this.outputType) {
                    case 'Decimal':
                        this.output = ConvertUtils.binaryToDecimal(this.input)
                        break
                    case 'Hexadecimal':
                        this.output = ConvertUtils.binaryToHexadecimal(this.input)
                        break
                    case 'Octal':
                        this.output = ConvertUtils.binaryToOctal(this.input)
                        break
                }
            },
            calculateDecimal() {
                console.log(this.outputType)
                switch (this.outputType) {
                    case 'Binary':
                        this.output = ConvertUtils.decimalToBinary(this.input)
                        break
                    case 'Hexadecimal':
                        this.output = ConvertUtils.decimalToHexadecimal(this.input)
                        break
                    case 'Octal':
                        this.output = ConvertUtils.decimalToOctal(this.input)
                        break
                }
            },
            calculateHexadecimal() {
                switch (this.outputType) {
                    case 'Binary':
                        this.output = ConvertUtils.hexadecimalToBinary(this.input)
                        break
                    case 'Decimal':
                        this.output = ConvertUtils.hexadecimalToDecimal(this.input)
                        break
                    case 'Octal':
                        this.output = ConvertUtils.hexadecimalToOctal(this.input)
                        break
                }
            },
            calculateOctal() {
                switch (this.outputType) {
                    case 'Binary':
                        this.output = ConvertUtils.octalToBinary(this.input)
                        break
                    case 'Decimal':
                        this.output = ConvertUtils.octalToDecimal(this.input)
                        break
                    case 'Hexadecimal':
                        this.output = ConvertUtils.octalToHexadecimal(this.input)
                        break
                }
            }
        }
    }
</script>

<style>
.convert-input {
    background: white;
    padding-top: 30px;
    border-radius: 4px;
}

.convert-input .col {
    padding: 0;
}

.convert-input .v-text-field--solo {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.convert-input .v-select {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.convert-input .v-select__selection--comma {
    overflow: unset;
}

    .btn-convert {
        z-index: 2;
        margin-top: -10px;
        margin-bottom: -10px;
        border: 10px solid #F6F5F8;
        box-shadow: none!important;
        background: #ffffff!important;
    }

    .btn-convert:focus::before {
        opacity: 0!important;
    }
</style>
