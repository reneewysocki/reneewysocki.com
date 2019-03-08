$(document).ready(function () {

	console.log("Ready!");

	const portfolioItems = {
		1: {
			id: '01',
			title: 'BOOM!',
			client: 'TransWorld Manufacturing',
			date: 'July 2017',
			description: 'Social Media and Print Promotion',
			mainImage: 'assets/images/gd-portfolio/TWM-Boom.jpg',
			image1: 'assets/images/gd-portfolio/TWM-Boom-Square.jpg',
		},
		2: {
			id: '02',
			title: 'Spring is Coming',
			client: 'Transworld Manufacturing',
			date: 'April 2017',
			description: 'Social Media and Print Promotion',
			mainImage: 'assets/images/gd-portfolio/TWM-Spring/TWM-Spring.jpg',
			image1: 'assets/images/gd-portfolio/TWM-Spring/TWM-Spring2.jpg',
		},
		3: {
			id: '03',
			title: 'Fabulous Boom Dollies',
			client: 'Transworld Manufacturing',
			date: 'March 2017',
			description: 'Social Media and Print Promotion for International Trade Show in Las Vegas',
			mainImage: 'assets/images/gd-portfolio/TWM-Conexpo.jpg',
			image1: 'assets/images/gd-portfolio/TWM-Conexpo-Square.jpg',
		},
		4: {
			id: '04',
			title: 'Game Changer',
			client: 'Pile Driving Solutions',
			date: 'July 2017',
			description: 'Half Page Magazine Ad Published in American Cranes & Transportation and International Cranes & Transport Magazines',
			mainImage: 'assets/images/gd-portfolio/PDS-Game-Changer.jpg',
		},
		5: {
			id: '05',
			title: "International Women's Day",
			client: 'Crane Network',
			date: 'March 2018',
			description: 'Web and Social Media Promotion',
			mainImage: 'assets/images/gd-portfolio/CN-International-Womens-Day.jpg',
			image1: 'assets/images/gd-portfolio/CN-International-Womens-Day-Square.jpg',
		},
		6: {
			id: '06',
			title: "Crane Snapshot",
			client: 'Crane Network',
			date: 'August 2018',
			description: 'Full Page Print Advertisement Published in International Cranes & Transport Magazine',
			mainImage: 'assets/images/gd-portfolio/IC&ST-August-Full-Page-airbnb-snapshot-photo (2018_02_10 19_15_37 UTC).jpg',
		},
	}


		for (prop in portfolioItems) {

			let portfolioCard = $("<div id='" + portfolioItems[prop].id + "' class='card'><img class='card-img-top' src='" + portfolioItems[prop].mainImage + "' alt='" + portfolioItems[prop].title + "' data-toggle='modal' data-target='#" + portfolioItems[prop].id + "Modal' /></div>'");

			let portfolioModal = $("<div class='modal fade' id='" + portfolioItems[prop].id + "Modal' tabindex='-1' role='dialog' aria-labelledby='" + portfolioItems[prop].id + "ModalTitle' aria-hidden='true'><div class='modal-dialog modal-dialog-scrollable' role='document'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' id='" + portfolioItems[prop].id + "ModalTitle'>" + portfolioItems[prop].title + " </h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button></div><div class='modal-body'><p>" + portfolioItems[prop].description + "<br>" + portfolioItems[prop].date + "<br>" + portfolioItems[prop].client + "</p><img class='portfolio-img' src='" + portfolioItems[prop].mainImage + "' alt='" + portfolioItems[prop].title + "'></div><div class='modal-footer folio-date'>" + portfolioItems[prop].client + "&nbsp <b> " + portfolioItems[prop].date + "</b></div></div></div></div>")

			$("#gd-portfolio-div").append(portfolioCard, portfolioModal);
		}
			
});