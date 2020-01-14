class UI{
	constructor(){
		this.init();
	}

	init(){
		this.printCategories();
		this.categorySelect = document.getElementById('category');
		this.resultDiv = document.getElementById('result');
	}

	//
	displayEvents(events){

		let HTMLTemplate = '';

		events.forEach(event=> {

			HTMLTemplate += `
				<div class="col-md-4 mt-4">
					<div class="card">
						<div class="card-body">
							<img class="img-fluid mb-2" src="${event.image!==null?event.image.medium.url:''}" height="256" width="256">
						</div>
						<div class="card-body">
							<div class="card-text">
								<h2 class="text-center card-title">${event.title}</h2>
								<p class="lead text-info">Event Information: </p>
								<span class="badge badge-primary">Country: ${event.country_name}</span>
								<span class="badge badge-secondary">Date & Time: ${event.start_time}</span>

								<a href="${event.url}" target="_blank" class="btn btn-primary btn-block mt-4">Get Tickets</a>
							</div>
						</div>
					</div>
				</div>
			`;
		});

		this.resultDiv.innerHTML = HTMLTemplate;
	}

	// Insert the available categories into the UI
	printCategories(){
		event.getCategories()
		.then(info =>{
			// Display the categories as options
			const categories = info.category;

			categories.forEach(item =>{
				// Create option element
				const option = document.createElement('option');
				option.value = item.id;
				option.innerHTML = item.name;

				// Insert it into its parent
				this.categorySelect.appendChild(option);
			});
		})
		.catch(err =>{
			console.log(err);
		});
	}

	// Display message
	printMessage(message, className){
		const div = document.createElement('div');
		div.className = className;
		div.appendChild(document.createTextNode(message));

		// Remove previous alerts
		this.removeMessage();

		// Inesert alert into UI
		document.getElementById('search-events').appendChild(div);

		// Remove from UI
		setTimeout(()=>{
			this.removeMessage();	
		},3000);	
	}

	removeMessage(){
		const alert = document.querySelector('.alert');
		if(alert){
			alert.remove();
		}
	}
}