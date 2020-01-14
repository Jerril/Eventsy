class Event{
	constructor(){
		this.app_key = 'S6ntfMfbTNqFhKW2';
	}


	// Get events
	async getEvents(eventName, category){
		const url = `https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?keywords=${eventName}&category=${category}&app_key=S6ntfMfbTNqFhKW2`;
		const data = await fetch(url); 
		const result = await data.json();
		//
		return result;
	}

	// Get categories
	async getCategories(){
		// Query API to get categories
		const url = `https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/categories/list?app_key=${this.app_key}`;
		const data = await fetch(url);
		const result = await data.json();
		// Return the data
		return result;		
	}
}