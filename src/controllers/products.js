exports.createProducts = (req, res, next) => {
  res.json({
    message: "Create Product succssfully!",
    data: [
      {
        id: 1,
        name: "Sari Gandum",
        price: 20000,
      },
      {
        id: 2,
        name: "Oreo Cream Vanila",
        price: 20000,
      },
      {
        id: 3,
        name: "Good Time Choclate",
        price: 20000,
      },
      {
        id: 4,
        name: "Sari Roti",
        price: 20000,
      },
    ],
  });
  next();
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    message: "Get All Products Success",
    data: [
      {
        id: 1,
        name: "Sari Gandum",
        price: 20000,
      },
      {
        id: 2,
        name: "Oreo Cream Vanila",
        price: 20000,
      },
      {
        id: 3,
        name: "Good Time Choclate",
        price: 20000,
      },
      {
        id: 4,
        name: "Sari Roti",
        price: 20000,
      },
    ],
  });
};
