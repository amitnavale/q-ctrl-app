let server = {
  "links": {
    "self": "https://api.q-ctrl.com/controls"
  },
  "data": [{
      "type": "controls",
      "id": "1",
      "attributes": {
        "name": "Single-Qubit Driven",
        "type": "Primitive",
        "maximum_rabi_rate": 63.16731,
        "polar_angle": 0.05671
      }
    },
    {
      "type": "controls",
      "id": "2",
      "attributes": {
        "name": "Single-Qubit Dynamic Decoupling",
        "type": "CORPSE",
        "maximum_rabi_rate": 87.00172,
        "polar_angle": 0.02688
      }
    },
    {
      "type": "controls",
      "id": "3",
      "attributes": {
        "name": "Two-Qubit Parametric Drive",
        "type": "Gaussian",
        "maximum_rabi_rate": 70.03844,
        "polar_angle": 0.09843
      }
    },
    {
      "type": "controls",
      "id": "4",
      "attributes": {
        "name": "Mølmer-Sørensen Drive",
        "type": "CinBB",
        "maximum_rabi_rate": 97.07732,
        "polar_angle": 0.09173
      }
    }
  ]
};

export default server;