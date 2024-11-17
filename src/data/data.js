const products = [
  { id: "1", name: "Remera 1", description: "", stock: 10, price: 2000, image: "/img/remera.png", category: "remeras" },
  { id: "2", name: "Gorra 1", description: "", stock: 2, price: 1000, image: "/img/gorra.jpg", category: "gorras" },
  { id: "3", name: "Zapatillas 1", description: "", stock: 5, price: 5000, image: "/img/zapas.png", category: "zapatillas" },
  { id: "4", name: "Remera 2", description: "", stock: 8, price: 4500, image: "/img/remera.png", category: "remeras" },
  { id: "5", name: "Gorra 2", description: "", stock: 12, price: 3000, image: "/img/remera.png", category: "gorras" },
  { id: "6", name: "Zapatillas 2", description: "", stock: 7, price: 4200, image: "/img/remera.png", category: "zapatillas" },
  { id: "7", name: "Remera 3", description: "", stock: 3, price: 7000, image: "/img/remera.png", category: "remeras" },
  { id: "8", name: "Gorra 3", description: "", stock: 6, price: 1200, image: "/img/remera.png", category: "gorras" },
  { id: "9", name: "Gorra 4", description: "", stock: 9, price: 3500, image: "/img/remera.png", category: "gorras" },
  { id: "10", name: "Remera 4", description: "", stock: 11, price: 2500, image: "/img/remera.png", category: "remeras" },
  { id: "12", name: "Zapatillas 3", description: "", stock: 4, price: 6000, image: "/img/remera.png", category: "zapatillas" },
  { id: "13", name: "Remera 5", description: "", stock: 5, price: 4200, image: "/img/remera.png", category: "remeras" },
  { id: "15", name: "Zapatillas 4", description: "", stock: 15, price: 1500, image: "/img/remera.png", category: "zapatillas" },
  { id: "18", name: "Zapatillas 5", description: "", stock: 3, price: 6500, image: "/img/remera.png", category: "zapatillas" },
  { id: "19", name: "Gorra 5", description: "", stock: 4, price: 3800, image: "/img/remera.png", category: "gorras" }
];

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export { getProducts };
