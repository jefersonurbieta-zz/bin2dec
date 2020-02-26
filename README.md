<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/JefersonUrbieta/bin2dec">
    <img src="images/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Pomodoro</h3>

  <p align="center">
    An awesome application of the bin2dec technique!
    <br />
    <a href="https://jefersonurbieta.github.io/bin2dec">View Demo</a>
    ·
    <a href="https://github.com/JefersonUrbieta/bin2dec/issues">Report Bug</a>
    ·
    <a href="https://github.com/JefersonUrbieta/bin2dec/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Idea](#idea-from-app-ideas-collection)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]][demo-url]

Application for converting binary numbers.

The Pomodoro technique is a time management method developed by Francesco Cirillo in the late 1980s. 
The technique uses a timer to divide work into intervals, traditionally 25 minutes long, separated by short intervals - 5 minutes.

The idea of developing this application came from the video [More 80 ideas to learn to program](https://www.youtube.com/watch?v=H4CCPaYLTWg&t) by [Filipe Deschamps](https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw) where the [App Ideas Collection](https://github.com/florinpop17/app-ideas) repository of [Florin Pop](https://github.com/florinpop17) was presented. 
I was very excited about the projects, because the ideas in it are very good for spending time programming.

Looking at more of the [Florin Pop](https://github.com/florinpop17) repositories I discovered this [100Days100Projects](https://github.com/florinpop17/100Days100Projects) and I felt challenged to embark on this challenge.
From then on, I started to develop some of the ideas from the [App Ideas Collection](https://github.com/florinpop17/app-ideas) repository in order to meet the challenge [100Days100Projects](https://github.com/florinpop17/100Days100Projects).

This project was developed on day 2 of the challenge #100Days100Projects

### Idea from App Ideas Collection

**Tier:** 1-Beginner

Binary is the number system all digital computers are based on.
Therefore it's important for developers to understand binary, or base 2,
mathematics. The purpose of Bin2Dec is to provide practice and
understanding of how binary calculations.

Bin2Dec allows the user to enter strings of up to 8 binary digits, 0's
and 1's, in any sequence and then displays its decimal equivalent.

This challenge requires that the developer implementing it follow these
constraints:

-   Arrays may not be used to contain the binary digits entered by the user
-   Determining the decimal equivalent of a particular binary digit in the
    sequence must be calculated using a single mathematical function, for
    example the natural logarithm. It's up to you to figure out which function
    to use.

#### User Stories

-   [x] User can enter up to 8 binary digits in one input field
-   [x] User must be notified if anything other than a 0 or 1 was entered
-   [x] User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered

#### Bonus features

-   [x] User can enter a variable number of binary digits

### Built With
* [Vue.js](https://vuejs.org)
* [Vuetitl](https://vuetifyjs.com)

<!-- GETTING STARTED -->
## Getting Started

This project follows the pattern generated through the [vue-cli](https://cli.vuejs.org)

### Prerequisites

For the development of this application we have the prerequisite
* npm

### Installation

1. Clone the repo
```sh
git clone https://github.com/JefersonUrbieta/bin2dec.git
```
2. Install NPM packages
```sh
npm install
```
4. Compile and run the project
```sh
npm run serve
```

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Jeferson Urbieta - [LinkedIn](https://www.linkedin.com/in/jefersonurbieta) - jeferson.urbieta@gmail.com

Project Link: [https://github.com/JefersonUrbieta/bin2dec](https://github.com/JefersonUrbieta/bin2dec)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Thalita Oliveira](https://github.com/thalita12) for help and support

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/JefersonUrbieta/bin2dec.svg?style=flat-square
[contributors-url]: https://github.com/JefersonUrbieta/bin2dec/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/JefersonUrbieta/bin2dec.svg?style=flat-square
[forks-url]: https://github.com/JefersonUrbieta/bin2dec/network/members
[stars-shield]: https://img.shields.io/github/stars/JefersonUrbieta/bin2dec.svg?style=flat-square
[stars-url]: https://github.com/JefersonUrbieta/bin2dec/stargazers
[issues-shield]: https://img.shields.io/github/issues/JefersonUrbieta/bin2dec.svg?style=flat-square
[issues-url]: https://github.com/JefersonUrbieta/bin2dec/issues
[license-shield]: https://img.shields.io/github/license/JefersonUrbieta/bin2dec.svg?style=flat-square
[license-url]: https://github.com/JefersonUrbieta/bin2dec/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jefersonurbieta
[demo-url]: https://jefersonurbieta.github.io/bin2dec
[product-screenshot]: images/screenshot.png
