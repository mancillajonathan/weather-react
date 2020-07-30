import React from 'react';
const api = {
	key: '5e1225a66ad0b532458cfa06cea116e7',
	base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
	const dateBuilder = (d) => {
		let months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];

		let days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];

		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${day} ${date} ${month} ${year}`;
	};
	return (
		<div className='App'>
			<main>
				<div className='search-box'>
					<input type='text' className='search-bar' placeholder='search...' />
				</div>
				<div className='location-box'>
					<div className='location'>New York City, US</div>
					<div className='date'>{dateBuilder(new Date())}</div>
				</div>
				<div className='weather-box'>
					<div className='temp'>15&deg;C</div>
					<div className='weather'>Windy</div>
				</div>
			</main>
		</div>
	);
}

export default App;
