// GENERAL APP CONTROLLER
const event = new Event();
const ui = new UI();


//eventlisteners
document.getElementById('submitBtn').addEventListener('click', () =>{
	// Read fields
	const eventName = document.getElementById('event-name').value;
	const category = document.getElementById('category').value;

	// Validate the event name
	if(eventName === ''){
		ui.printMessage('Add an Event or City', 'text-center alert alert-danger');
	}else{
		// Get & display events based on eventName
		event.getEvents(eventName, category)
		.then(info => {
			const events = info.events.event;
			
			//
			if(events.length > 0){
				// 
				ui.displayEvents(events);
			}else{
				//
				ui.printMessage('No Results Found', 'text-center alert alert-danger');
			}
		})
		.catch(err => {
			ui.printMessage(`${err}: No Results Found`, 'text-center alert alert-danger');
		});
	}
});