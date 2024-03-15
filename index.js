const charToBinary = (char) => {
	return char.charCodeAt(0).toString(2);
};

function binaryToChar(binaryString) {
	return String.fromCharCode(parseInt(binaryString, 2));
}

const leftRotate = (str, amount) => {
	return str.slice(amount) + str.slice(0, amount);
};

const rightRotate = (str, amount) => {
	return str.slice(-amount) + str.slice(0, -amount);
};

const shiftAmount = 3;
const str = 'egg';

const encrypt = (word, amount) => {
	let encrypted = '';
	for (let i = 0; i < word.length; i++)
		encrypted += binaryToChar(
			rightRotate(charToBinary(word.charAt(i)), amount)
		);
	return encrypted;
};

const dencrypt = (word, amount) => {
	let dencrypted = '';
	for (let i = 0; i < word.length; i++) {
		dencrypted += binaryToChar(
			leftRotate(charToBinary(word.charAt(i)), amount)
		);
	}
	return dencrypted;
};

const encrypted = encrypt(str, shiftAmount);
console.log(encrypted);
console.log(dencrypt(encrypted, shiftAmount));
