# osc-viz
Very early stages of visualization of all things sphinxr, in the browser.
uses
- [socket.io](http://socket.io/)
- [node-osc](https://github.com/TheAlphaNerd/node-osc)

to proxy data from supercollider to a browser for visualization.

I'm not sure what node-osc is giving us at the moment, except that this setup seams to work.

## Running the app

*Assumes node is already installed*

clone this repo, `git clone https://github.com/jhuston/osc-viz.git`

`npm install`

`npm run server`


open "lib/sample-osc-supercollider.scd" in Supercollider and follow the instructions in that file to get a routine sending messages to the osc server.

visit `localhost:3000` to see what is happening!
