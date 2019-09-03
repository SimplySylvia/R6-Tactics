module.exports = {
  index: (req, res) => {
    res.json({
      message: "Welcome to R6 tactics Api!",
      documentation_url: "https://github.com/DaltonHart/R6-Tactics",
      base_url: "localhost:3000",
      endpoints: [
        {
          method: "GET",
          path: "/api",
          description: "Describes available endpoints"
        },
        {
          method: "GET",
          path: "/api/atkops",
          description: "Will respond with a Json of all attack operators."
        },
        {
          method: "GET",
          path: "/api/atkops/:id",
          description:
            "Will respond with a Json of a specific attack operator with the given id."
        },
        {
          method: "GET",
          path: "/api/defops",
          description: "Will respond with a Json of all defense operators."
        },
        {
          method: "GET",
          path: "/api/defops/:id",
          description:
            "Will respond with a Json of a specific defense operator with the given id."
        },
        {
          method: "GET",
          path: "/api/smaps",
          description: "Will respond with a Json of all game maps."
        },
        {
          method: "GET",
          path: "/api/smaps/:id",
          description:
            "Will respond with a Json of a specific game map with the given id."
        },
        {
          method: "GET",
          path: "/api/gadgets",
          description: "Will respond with a Json of all game basic gadgets."
        },
        {
          method: "GET",
          path: "/api/gadgets/:id",
          description:
            "Will respond with a Json of a specific gadget with the given id."
        },
        {
          method: "GET",
          path: "/api/abilities",
          description:
            "Will respond with a Json of all game operator abilities."
        },
        {
          method: "GET",
          path: "/api/abilities/:id",
          description:
            "Will respond with a Json of a specific operator ability with the given id."
        },
        {
          method: "GET",
          path: "/api/weapons",
          description: "Will respond with a Json of all game operator weapons."
        },
        {
          method: "GET",
          path: "/api/weapons/:id",
          description:
            "Will respond with a Json of a specific operator weapon with the given id."
        }
      ]
    });
  }
};
