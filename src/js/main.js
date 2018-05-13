$('#goToNextSection').click(e => {
	console.log('goToNext');
	$('#me').get(0).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
})