document.querySelector('[data-search]').addEventListener('keyup', filter)

function filter() {
	var term = document.querySelector('[data-search]').value
	var tag = document.querySelectorAll('[data-searchable] li ')
	for (i = 0; i < tag.length; i++) {
		if (tag[i].innerHTML.indexOf(term) !== -1) {
			tag[i].style.display = 'block'
		} else {
			tag[i].style.display = 'none'
		}
	}
}
