function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}


const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");
const scoreDisplay = document.querySelector("#score");
let score = 0;

window.addEventListener("keydown", function(evt) {
	if(evt.key === "ArrowDown" || evt.key === "Down") {
		moveVertical(avatar, 50);
	}
	else if(evt.key === "ArrowUp" || evt.key === "Up") {
		moveVertical(avatar, -50);
	}
	else if(evt.key === "ArrowRight" || evt.key === "Right") {
		avatar.style.transform = "scale(1,1)";
		moveHorizontal(avatar, 50);
	}
	else if(evt.key === "ArrowLeft" || evt.key === "Left") {
		avatar.style.transform = "scale(-1,1)";
		moveHorizontal(avatar, -50);
	}
	if(isTouching(avatar, coin)) {
		updateCoinCollection(1);
		moveCoin();
	}
});

const moveVertical = (element, amount) => {
	const currTop = extractPosition(element.style.top);
	element.style.top = `${currTop + amount}px`;
};

const moveHorizontal = (element, amount) => {
	const currLeft = extractPosition(element.style.left);
	element.style.left = `${currLeft + amount}px`;
};

const extractPosition = (pos) => {
	if(!pos) return 100;
	return parseInt(pos.slice(0,-2));
};

const moveCoin = () => {
	const x = Math.floor(Math.random() * window.innerWidth);
	const y = Math.floor(Math.random() * window.innerHeight);
	coin.style.top = `${y}px`;
	coin.style.left = `${x}px`;
}

const updateCoinCollection = (amount) => {
	score += amount;
	const displayStr = `Coins Collected: ${score}`;
	scoreDisplay.innerText = displayStr;
};

updateCoinCollection(0);
moveCoin();