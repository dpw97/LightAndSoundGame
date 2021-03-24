# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: David Weaver

Time spent: 9 hours spent in total

Link to project: https://amenable-beautiful-echidna.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

* [X] Added a display for the amount of incorrect guesses the player has left
* [X] Replaced annoying alert messages with cute doggos

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![gif](https://i.imgur.com/dAwIEMn.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used Google for any questions I had regarding this project.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I did not run into too many issues following the prompt when creating the application, however I tried to customize it to my own liking which did not work out.
After realizing each pitch cooresponded to a note, I got the idea to try to implement a "Guitar Hero" style game, in which
the program would play a section of a song, and the user would have to repeat it back. The big challenge in implementing this was
having to get each note to play at the correct timing. As I implemented it I could not find an easy way to determine the interval between notes, which
would then have to be converted into ms. Due to this I ended up scrapping the idea of my "Piano Hero", but the experience gave me some ideas to work on in the future.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I would be curious as to how we could implement a multiplayer feature over the internet for this particular game. Below I talk about
wanting to implement a feature where users can make their own custom patterns, but I don't know how they would be shared with other users across the network.
I have a very small amount of experience working with web sockets to create a realtime chat application, but I don't know if that technology
would be appropirate for this use case. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more time to work on this project I would implement the two final optional features, which are extra sounds and implementing a timer. Also 
I got the idea to let the user create a custom pattern, which then they could play against or have others play against. This feature would also be 
rather easy to implement, just requiring an extra button and some back end refactoring.



## License

    Copyright David Weaver

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.