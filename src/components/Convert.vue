<template>
    <v-container>
        <v-row justify="center">
            <h1>Binary Convertor</h1>
        </v-row>

        <v-row justify="center">
            <p>Selecione o tipo de conversão que voçe deseja</p>
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
                        @keydown="validateInput($event)"/>
            </v-col>

            <v-col cols="3">
                <v-select
                        v-model="inputType"
                        :items="items"
                        solo
                        flat/>
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
                <v-icon dark>mdi-minus</v-icon>
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
                        :items="items"
                        solo
                        flat/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Convert",
        data: () => ({
            items: ['Binary', 'Decimal', 'Hexadecimal', 'Octal'],
            input: '',
            inputType: 'Binary',
            output: '',
            outputType: 'Decimal',
            binaryValues: ['0', '1'],
            decimalValues: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            hexadecimalValues: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'],
            octalValues: ['0', '1', '2', '3', '4', '5', '6', '7'],
        }),
        methods: {
            validateInput($event) {
                const validValues = this.validValues()
                console.log(validValues)
                console.log($event.key)
                console.log(validValues.indexOf($event.key))
                if (validValues.indexOf($event.key) < 0) {
                    $event.preventDefault()
                }
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
            exchange() {
                const input = this.inputType
                this.inputType = this.outputType
                this.outputType = input
            },
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
        z-index: 1000;
        margin-top: -10px;
        margin-bottom: -10px;
        border: 10px solid #F6F5F8;
        box-shadow: none!important;
        background: #ffffff!important;
    }
</style>