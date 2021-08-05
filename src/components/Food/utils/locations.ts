import Continent from "../enums/continent";
import Food from "../enums/food";

const continent = () => {
  return [
    {
      continent: Continent.asia,
      food: Food.filipino,
      locations: [
        {
          name: "Fiesta Manila Bakery",
          description: "",
          location: {},
        },
      ],
    },
  ];
};

export default continent;
