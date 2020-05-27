// identify my variables plus, minus, count
// create function to update .count html
// create function to add to count
// create function to subract from the count

// Variables
counter = document.querySelector('.counter');
minus = document.querySelector('.minus');
plus = document.querySelector('.plus');
count = 0;

// functions
newCount = () => {
	counter.innerText = count;
};

add = () => {
	count += 1;
	newCount();
};

sub = () => {
	count = count > 0 ? count - 1 : 0;
	newCount();
};

// event listeners
plus.addEventListener('click', add);
minus.addEventListener('click', sub);
