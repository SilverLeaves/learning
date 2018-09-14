var visualize = require('javascript-state-machine/lib/visualize');
var StateMachine = require('javascript-state-machine');

var fsm = new StateMachine({
  init: 'open',
  transitions: [
	{ name: 'close', from: 'open',   to: 'closed' },
	{ name: 'open',  from: 'closed', to: 'open'   }
  ]
});


console.log(visualize(fsm));

// Create a new directed graph 
var g = new dagre.graphlib.Graph();

// Set an object for the graph label
g.setGraph(visualize(fsm));
console.log(g.graph());
