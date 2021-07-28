'use strict';
const yearPoint = 1970;
const bigMonth = 31;
const eleven = 11;
const thousand = 1000;
const sixty = 60;
const twentyFour = 24;
const week = 7;


function getAge(birth) {
	let month_diff = Date.now() - birth.getTime();
	let age_dt = new Date(month_diff);
	return Math.abs(age_dt.getUTCFullYear() - yearPoint);
}
function getWeekDay(date) {
	let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
	if (date instanceof Date) {
		return days[ date.getDay() ];
	} else {
		return days[ new Date(date).getDay() ];
	}
}
function getAmountDaysToNewYear(date) {
	let today = new Date();
	let newYear = new Date(today.getFullYear(), eleven, bigMonth);
	const days = Math.ceil((newYear.getTime() - date.getTime()) / (thousand * sixty * sixty * twentyFour));
	return days;
}
function getProgrammersDay(year) {
	let options = { day: 'numeric', month: 'short', year: 'numeric', weekday: 'long' };
	let dayProgrammer = 256;
	const oneDay = thousand * sixty * sixty * twentyFour;
	let data = dayProgrammer * oneDay;
	let startDateYear = new Date(year, 0, 0);
	let startDatTimestamp = new Date(startDateYear).getTime();
	let calcTimestamp = startDatTimestamp + data;
	let calcDate = new Date(calcTimestamp);
	console.log(calcDate.toLocaleDateString('en-US', options));
	console.log(getWeekDay(calcDate));
}
function howFarIs(day) {
	let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
	let today = new Date();
	let specifiedWeekday = today.getDay();
	let dayIndex = days.indexOf(day.charAt(0).toUpperCase() + day.slice(1).toLowerCase());

	if (specifiedWeekday === dayIndex) {
		return `Hey, today is ${days[ specifiedWeekday ]} =)`
	} else {
		let d;
		if (specifiedWeekday > dayIndex) {
			d = (specifiedWeekday + dayIndex) % week - 1;
		} else {
			d = dayIndex - specifiedWeekday;
		}
		return `It's ${d} day(s) left till ${days[ specifiedWeekday ]}`
	}
}
function isValidIdentifier(string) {
	let regexp = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
	return regexp.test(string);
}
function capitalize(testStr) {
	let formatStr = testStr.toLowerCase().replace(/\b(\w)/g, function (letter) {
		return letter.toUpperCase();
	});
	return formatStr;
}
function isValidAudioFile(string) {
	let regexp = /^[A-Za-z0-9,\s]+[.]{1}[aac|mp3|flac|alac]*$/g;
	return regexp.test(string);
}
function getHexadecimalColors(string) {
	let regexp = /#([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?\b/g;
	let colorArr = [];
	let colorValue = string.match(regexp);
	if (colorValue) {
		return colorValue;
	} else {
		return colorArr;
	}
}
function isValidPassword(string) {
	let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
	return regexp.test(string);
}
function addThousandsSeparators(value) {
	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function getAllUrlsFromText(string) {
	let regexp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;
	const x = 'error';
	let urlArr = [];
	if (string === undefined) {
		return x;
	} else {
		let urlValue = string.match(regexp);
		if (urlValue) {
			return urlValue;
		} else {
			return urlArr;
		}
	}	
}

