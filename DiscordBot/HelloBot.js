function generateDungeonLayout(width, height) {
  // Create a two-dimensional array to store the layout
  let layout = new Array(width);
  for (let i = 0; i < width; i++) {
    layout[i] = new Array(height);
  }

  // Fill the layout with random values
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (Math.random() < 0.4) {
        layout[x][y] = "#"; // Wall
      } else {
        layout[x][y] = "."; // Floor
      }
    }
  }

  // Add some rooms to the layout
  let numRooms = Math.floor(width * height / 200);
  for (let i = 0; i < numRooms; i++) {
    let roomWidth = Math.floor(Math.random() * 8) + 4;
    let roomHeight = Math.floor(Math.random() * 8) + 4;
    let roomX = Math.floor(Math.random() * (width - roomWidth - 2)) + 1;
    let roomY = Math.floor(Math.random() * (height - roomHeight - 2)) + 1;
    for (let x = roomX; x < roomX + roomWidth; x++) {
      for (let y = roomY; y < roomY + roomHeight; y++) {
        layout[x][y] = "."; // Floor
      }
    }
  }

  // Add some corridors to the layout
  for (let i = 0; i < numRooms * 2; i++) {
    let room1 = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height)
    };
    let room2 = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height)
    };
    if (layout[room1.x][room1.y] == "." && layout[room2.x][room2.y] == ".") {
      let x = room1.x;
      let y = room1.y;
      while (x != room2.x || y != room2.y) {
        if (x < room2.x) x++;
        if (x > room2.x) x--;
        if (y < room2.y) y++;
        if (y > room2.y) y--;
        layout[x][y] = "."; // Floor
      }
    }
  }

  return layout;
}
console.log(generateDungeonLayout(20, 20));