function main() {
  const myBox = document.getElementById("my-box");
  myBox.addEventListener('click', () => {
    if (myBox.style.backgroundColor === "red") {
      myBox.style.backgroundColor = "black";
    } else {
      myBox.style.backgroundColor = "red"
    }
  });





  // Get the "my-box" div from the document
  // When someone clicks on the element then change the background color
  // to red.
}

