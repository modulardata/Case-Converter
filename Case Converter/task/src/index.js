// Functions or methods
function properCase(text) {
	return text
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
		.join(' ');
}

function sentenceCase(theString) {
	var newString = theString
		.toLowerCase()
		.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
			return c.toUpperCase();
		});
	return newString;
}

function download(filename, text) {
	let element = document.createElement('a');
	element.setAttribute(
		'href',
		'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
	);
	element.setAttribute('download', filename);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}

// Events

document.getElementById('upper-case').addEventListener('click', function () {
	document.getElementById('textarea-box').value = document
		.getElementById('textarea-box')
		.value.toUpperCase();
});

document.getElementById('lower-case').addEventListener('click', function () {
	document.getElementById('textarea-box').value = document
		.getElementById('textarea-box')
		.value.toLowerCase();
});

document.getElementById('proper-case').addEventListener('click', function () {
	document.getElementById('textarea-box').value = properCase(
		document.getElementById('textarea-box').value
	);
});

document.getElementById('sentence-case').addEventListener('click', function () {
	document.getElementById('textarea-box').value = sentenceCase(
		document.getElementById('textarea-box').value
	);
});

document
	.getElementById('save-text-file')
	.addEventListener('click', function () {
		document.getElementById('textarea-box').value = download(
			'text.txt',
			document.getElementById('textarea-box').value
		);
	});