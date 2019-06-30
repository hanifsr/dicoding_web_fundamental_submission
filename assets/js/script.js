var page_index = 1;
show_page(page_index);

function goto_page(index) {
	show_page(page_index += index );
}

function show_page(index) {
	var page = document.getElementsByClassName('page');

	if(index > page.length) {
		page_index = 1;
	}

	if(index < 1) {
		page_index = page.length;
	}

	for(var i = 0; i < page.length; i++) {
		page[i].style.display = 'none';
	}

	page[page_index - 1].style.display = 'block';
}