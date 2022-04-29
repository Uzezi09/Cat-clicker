const cats = [
  {
    name: "Cat One",
    image: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
    counter: 0,
  },
  {
    name: "Cat Two",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    counter: 0,
  },
  {
    name: "Cat Three",
    image: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    counter: 0,
  },
  {
    name: "Cat Four",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    counter: 0,
  },
  {
    name: "Cat Five",
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    counter: 0,
  }
];
const mainBody = document.getElementById('cats')
const totalCount = document.getElementById('total')



function createData(aCat) {
  const container = document.createElement("div");
  const img = document.createElement("img");
  img.setAttribute("src", aCat.image);
  container.appendChild(img)
  const text = document.createElement("div");
  text.innerText = `Name: ${aCat.name} \n Clicks:`;
  const counterText = document.createElement("span");
  counterText.innerText = aCat.counter;
  
  
  text.appendChild(counterText)
  container.appendChild(text);
 
  
  container.addEventListener("click", function() {
    const value = +counterText.innerText;
    counterText.innerText = Number(value) + 1;
  });
  return container;
}

 
for (let aCat of cats) {
    mainBody.appendChild(createData(aCat)) 
  console.log(mainBody);
}
