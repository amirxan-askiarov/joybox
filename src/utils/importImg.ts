async function importImgsAsArray() {
  const imgs = [];
  const modulePaths = ['./module1.ts', './module2.ts', './module3.ts']; // Adjust paths as needed

  for (const path of modulePaths) {
    const module = await import(path);
    imgs.push(module); // Or push specific exports from the module
  }
  return imgs;
};

export default importImgsAsArray;