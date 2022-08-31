                                            // Gestion de clique //

const arrayOfFiles = document.querySelectorAll(".case");

const filesNameArray = ["a", "b", "c", "d", "e", "f", "g", "h"];

// compteur pour filesArray


let fileNumber = 0;

for (const i of arrayOfFiles) {
  // variable de comptage de rangs(row)
  let counter = 1;
  for (const el of i.children) {
    el.setAttribute("id", filesNameArray[fileNumber] + counter);
    counter++;
  }
  fileNumber++;
}

for (const i of arrayOfFiles) {
  console.log(i.children);
}
