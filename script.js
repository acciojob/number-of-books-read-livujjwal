const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  let count = 0;
	// for (let index = 0; index < library.length; index++) {
	// 	let temp = library[i];
	// if(temp.readingStatus)
	// {
	// 	count++;
	// }
	// }
	// 
	for (let i of library) {
     if (i.readingStatus) {
     	count++;
     }		
	}
	return count;
};
//Do not change the code below

alert(numberOfBooksRead());
