<template>
    <v-dialog v-model="dialog" large scrollable >
        <template v-slot:activator="{ on }">
            <v-btn
                    color="primary"
                    dark
                    text
                    v-on="on">
                About numeral system
            </v-btn>
        </template>

        <v-card>
            <v-card-title>
                About numeral system
                <v-spacer/>
                <v-btn @click="dialog = false" icon>
                    <v-icon>fas fa-times</v-icon>
                </v-btn>
            </v-card-title>
            <v-divider/>

            <v-card-text>
                <br>
                <h2>Binary System</h2>
                <br>

                <p>The <strong>binary numeral system</strong> uses the number 2 as its base (radix). As a base-2 numeral
                    system, it consists of only two numbers: 0 and 1.&nbsp;</p>
                <p>While it has been applied in ancient Egypt, China and India for different purposes, the binary system
                    has become the language of electronics and computers in the modern world. This is the most efficient
                    system to detect an electric signal’s off (0) and on (1) state. It is also the basis for binary code
                    that is used to compose data in computer-based machines. Even the digital text that you are reading
                    right now consists of binary numbers.</p>
                <p>Reading a binary number is easier than it looks: This is a positional system; therefore, every digit
                    in a binary number is raised to the powers of 2, starting from the rightmost with 2<sup>0</sup>. In
                    the binary system, each binary digit refers to 1 bit.</p>

                <h2>Decimal System</h2>
                <br>

                <p><strong>The decimal numeral system</strong> is the most commonly used and the standard system in
                    daily life. It uses the number 10 as its base (radix). Therefore, it has 10 symbols: The numbers
                    from 0 to 9; namely 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9.</p>
                <p>As one of the oldest known numeral systems, the <strong>decimal numeral system</strong> has been used
                    by many ancient civilizations. The difficulty of representing very large numbers in the decimal
                    system was overcome by the Hindu–Arabic numeral system. The Hindu-Arabic numeral system gives
                    positions to the digits in a number and this method works by using powers of the base 10; digits are
                    raised to the n<sup>th</sup> power, in accordance with their position.</p>
                <p>For instance, take the number 2345.67 in the decimal system: </p>
                <ul>
                    <li>The digit 5 is in the position of ones (10<sup>0</sup>, which equals 1),</li>
                    <li>4 is in the position of tens (10<sup>1</sup>)</li>
                    <li>3 is in the position of hundreds (10<sup>2</sup>)</li>
                    <li>2 is in the position of thousands (10<sup>3</sup>)</li>
                    <li>Meanwhile, the digit 6 after the decimal point is in the tenths (1/10, which is 10<sup>-1</sup>)
                        and 7 is in the hundredths (1/100, which is 10<sup>-2</sup>) position
                    </li>
                    <li>Thus, the number 2345.67 can also be represented as follows:
                        (2 * 10<sup>3</sup>) + (3 * 10<sup>2</sup>) + (4 * 10<sup>1</sup>) + (5 * 10<sup>0</sup>) + (6 *
                        10<sup>-1</sup>) + (7 * 10<sup>-2</sup>)
                    </li>
                </ul>

                <h2>The Octal System</h2>
                <br>

                <p>The <strong>octal number system</strong> (or shortly oct) uses the number 8 as its base (radix). As a
                    base-8 numeral system, it uses eight symbols: The numbers from 0 to 7, namely 0, 1, 2, 3, 4, 5, 6
                    and 7. Although it was used by some native American tribes until the 20th century, the octal system
                    has become popular in the early ages of computing as a language of computer programming. This is
                    because the octal system shortens binary by simplifying long and complex chains of binary displays
                    used by computers.</p>
                <p>The octal system is mainly used for counting binary in groups of three: Each octal digit represents
                    three binary digits. Since 8 is 2 to the third power (2<sup>3</sup>), the octal system became a
                    perfect abbreviation of binary for machines that employ word sizes divisible by three - which were
                    6-bit, 12-bit, 24-bit or 36-bit. Nowadays, most modern systems use hexadecimal rather than octal.
                    However, octal numbers are an important part of basic knowledge in electronics.</p>

                <h2>Hexadecimal System (Hex System)</h2>
                <br>

                <p>The <strong>hexadecimal system (shortly hex)</strong>, uses the number 16 as its base (radix). As a
                    base-16 numeral system, it uses 16 symbols. These are the 10 decimal digits (0, 1, 2, 3, 4, 5, 6, 7,
                    8, 9) and the first six letters of the English alphabet (A, B, C, D, E, F). The letters are used
                    because of the need to represent the values 10, 11, 12, 13, 14 and 15 each in one single symbol.</p>
                <p>Hex is used in mathematics and information technologies as a more friendly way to represent binary
                    numbers. Each hex digit represents four binary digits; therefore, hex is a language to write binary
                    in an abbreviated form.</p>
                <p>Four binary digits (also called nibbles) make up half a byte. This means one byte can carry binary
                    values from 0000 0000 to 1111 1111. In hex, these can be represented in a friendlier fashion,
                    ranging from 00 to FF.</p>
                <p>In html programming, colors can be represented by a 6-digit hexadecimal number: FFFFFF represents
                    white whereas 000000 represents black.</p>

            </v-card-text>

            <v-divider/>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        @click="dialog = false"
                        color="primary"
                        text>
                    OK
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: 'AboutPomodoro',
        data: () => ({
            dialog: false
        })
    }
</script>

<style scoped>
</style>
