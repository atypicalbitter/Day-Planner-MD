# Day Planner - Matt Dudman

## Description
This is a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [About](#about)
- [License](#license)
- [Deployed Link](#deployed-link)
- [Author](#author)


## Introduction

My goal with this application was to build a functioning day planner where you can add and save appointments locally on the page, also that the current date is displayed and the planner showed whether the hour slot had been or was to come. 

## Installation 

N/A

## About

I started out by understanding first and foremost how I wanted the day planner to operate. 

I was given starter code which was the style.css file and the index.html. 

I started out by linking the script tags accordingly and the css into the header. First I created div blocks using bootstrap to add in time blocks for 8am to 8pm. I then added in a function to format day and time using day.js. The date can be seen at the top of the planner here. ![Alt text](<Assets/Images/Screenshot 2024-01-09 at 16.14.34.png>)

And the time runs vertically along the side of the planner here. 

![Alt text](<Assets/Images/Screenshot 2024-01-09 at 16.14.42.png>)

I then added in a If/Else statement to allow the past / present or future class to be added. This would then become applicable depending on the time of day. I added another If/Else statement to add and remove appointments on the planner and the ablity to save the appointments was also added in with a 'click' function. 

I then looked back and did some more research on my code. I found a quicker and cleaner way to do this was to have my Javascript written so that It could create and write out the time blocks accordingly. This not only is less code to have buidling up within the HTML, but also overall is cleaner and easier to operate, use and work through. 

This is a screen shot of the finished project at 4:19pm on Tuesday 9th Jan. 

![Alt text](<Assets/Images/Screenshot 2024-01-09 at 16.20.26.png>)

## License

MIT License

Copyright (c) [2024] [Dudman-Matt]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Deployed Link
 * [See Deployed Link Here](https://atypicalbitter.github.io/Day-Planner-MD/)

## Author
 * [Matt Dudman](https://github.com/atypicalbitter)