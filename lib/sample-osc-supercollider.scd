/**
* Create a NetAddr with the same port as the OSC server
*/
~vizServer = NetAddr.new("localhost", 33333);

~vizServer.sendMsg("/path/for/osc","arg1", "arg2", 1);

/**
* Create a pattern to continually send messages to the OSC server
*/
~nodePat = Pseq([10, 20, 30, 40, 50, 60, 70, 80, 90, 100],inf).asStream;

/*
* Create a pattern to determine how long to wait before sending the next message
*/
~waitPat = Pdefn(\wait, Prand([0.15], inf)).asStream;

/*
* Create a routine to continually send messages to the server
*/
(
~nodePatRoutine = Routine({
	loop{
		var height = ~nodePat.next(());
		var wait = ~waitPat.next(());
		height.postln;
		wait.postln;
		~vizServer.sendMsg("/height", height);
		wait.wait;
	}
});
)

/*start the routine*/
~nodePatRoutine.reset.play;

/*stop the routine*/
~nodePatRoutine.stop;
