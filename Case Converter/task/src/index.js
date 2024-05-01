function properCase(text) {
    return text
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// function sentenceCase(text) {
// 	var splitStr = text.toLowerCase().split(' ');
// 	for (var i = 0; i < splitStr.length; i++) {
// 		splitStr[i] =
// 			splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
// 	}
// 	// Directly return the joined string
// 	return splitStr.join(' ');
// }

function sentenceCase(theString) {
    return theString
        .toLowerCase()
        .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
            return c.toUpperCase();
        });
}

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