document.body.style.margin = "0";
document.body.style.backgroundColor = "hsl(217, 54%, 11%)";
document.body.style.fontFamily = "Outfit, sans-serif";
document.body.style.fontSize = "18px";

//Wrapper
let wrapper = document.createElement('div');
wrapper.id = "wrapper";
wrapper.style.maxWidth = "1440px";
wrapper.style.margin = "100px auto";
wrapper.style.display = "flex";
wrapper.style.flexWrap = "wrap";
wrapper.style.gap = "30px";
wrapper.style.justifyContent = "center";



function creatCard() {
	// Card
	let card = document.createElement("div");
	card.className = "card";
	card.style.padding = "30px 30px";
	card.style.maxWidth = "350px";
	card.style.backgroundColor = "hsl(216, 50%, 16%)";
	card.style.borderRadius = "20px";
	card.style.boxShadow = "rgb(0 0 1 / 20%) 0px 9px 20px 30px";
	card.style.position = "relative";

	// Img
	let cardImg = document.createElement("img");
	cardImg.className = "card-img";
	cardImg.src = "./img/image-equilibrium.jpg";
	cardImg.style.width = "100%";
	cardImg.style.borderRadius = "15px";


	// h3
	let title = document.createElement("h3");
	title.className = "card-title";
	title.innerText = "Equilibrium #3429";
	title.style.margin = "20px 0";
	title.style.fontSize = "25px";
	title.style.color = "hsl(0, 0%, 100%)";

	// p
	let subtitle = document.createElement("p");
	subtitle.className = "card-subtitle";
	subtitle.innerText = "Our Equilibrium collection promotes balance and calm.";
	subtitle.style.margin = "0 0 25px";
	subtitle.style.fontSize = "18px";
	subtitle.style.color = "hsl(215, 51%, 70%)";

	// div
	let column = document.createElement("div");
	column.className = "card-column";
	column.style.display = "flex";
	column.style.justifyContent = "space-between";

	// div
	let cardEth = document.createElement("div");
	cardEth.className = "card-eth";
	cardEth.style.margin = "0";
	cardEth.style.display = "flex";
	cardEth.style.alignItems = "center";

	// img
	let ethIcon = document.createElement("img");
	ethIcon.className = "card-icon";
	ethIcon.src = "./img/icon-ethereum.svg";
	ethIcon.style.marginRight = "10px";

	// p
	let ethText = document.createElement("p");
	ethText.className = "card-eth-txt";
	ethText.innerText = "0.041 ETH";
	ethText.style.margin = "0";
	ethText.style.color = "hsl(178, 100%, 50%)";


	// div
	let cardTime = document.createElement("div");
	cardTime.className = "card-time";
	cardTime.style.margin = "0";
	cardTime.style.display = "flex";
	cardTime.style.alignItems = "center";

	// img
	let timeIcon = document.createElement("img");
	timeIcon.className = "card-icon";
	timeIcon.src = "./img/icon-clock.svg";
	timeIcon.style.marginRight = "10px";

	// p
	let timeText = document.createElement("p");
	timeText.className = "card-eth-txt";
	timeText.innerText = "3 days left";
	timeText.style.margin = "0";
	timeText.style.color = "hsl(215, 51%, 70%)";

	// hr
	let line = document.createElement("hr");
	line.style.margin = "20px 0 15px";
	line.style.borderColor = "hsl(215, 32%, 27%)";

	// div
	let cardAuthor = document.createElement("div");
	cardAuthor.style.display = "flex";
	cardAuthor.style.alignItems = "center";

	// img
	let cardAuthorImg = document.createElement("img");
	cardAuthorImg.className = "card-author-img";
	cardAuthorImg.src = "./img/image-avatar.png";
	cardAuthorImg.style.width = "45px";
	cardAuthorImg.style.border = "1px solid hsl(0, 0%, 100%)";
	cardAuthorImg.style.borderRadius = "50%";

	// p
	let cardName = document.createElement("p");
	cardName.className = "card-name";
	cardName.innerText = "Creation of ";
	cardName.style.margin = "0 0 0 15px";
	cardName.style.fontSize = "17px";
	cardName.style.color = "hsl(215, 51%, 70%)";

	// span
	let cardSpan = document.createElement("span");
	cardSpan.className = "card-span";
	cardSpan.innerText = "Jules Wyvern";
	cardSpan.style.color = "hsl(0, 0%, 100%)";

	document.body.appendChild(wrapper);
	wrapper.appendChild(card);
	card.appendChild(cardImg);
	card.appendChild(title);
	card.appendChild(subtitle);
	card.appendChild(column);
	column.appendChild(cardEth);
	column.appendChild(cardTime);
	cardEth.appendChild(ethIcon);
	cardEth.appendChild(ethText);
	cardTime.appendChild(timeIcon);
	cardTime.appendChild(timeText);

	card.appendChild(line);
	card.appendChild(cardAuthor);
	cardAuthor.appendChild(cardAuthorImg);
	cardAuthor.appendChild(cardName);
	cardName.appendChild(cardSpan);


}

creatCard();
creatCard();

alert("Я оцениваю свою работу на 100 бфллов))!");

