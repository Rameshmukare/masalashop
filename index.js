const http = require('http');

const PORT = 3000;

const products = [
  {
    name: "Turmeric Powder",
    price: "₹100",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Turmeric_powder_and_rhizome.jpg"
  },
  {
    name: "Onion Powder",
    price: "₹80",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Onion_powder_2018.jpg"
  },
  {
    name: "Dry Fruits Mix",
    price: "₹250",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Mixed_dry_fruits.jpg"
  }
];

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let productListHtml = products.map(p => `
      <div style="border:1px solid #ccc; padding:10px; margin:10px; width:250px; display:inline-block;">
        <h3>${p.name}</h3>
        <img src="${p.image}" alt="${p.name}" style="width:200px; height:150px; object-fit:cover;" />
        <p>Price: <b>${p.price}</b></p>
      </div>
    `).join('');
    
    res.end(`
      <html>
        <head><title>MasalaShop Products</title></head>
        <body>
          <h1>Welcome to MasalaShop</h1>
          <div>${productListHtml}</div>
        </body>
      </html>
    `);
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(PORT, () => {
  console.log(`MasalaShop server running on port ${PORT}`);
});
