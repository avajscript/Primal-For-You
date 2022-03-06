export default [
  {
    title: "Beef",
    image: require("./Images/logos/grassFedLogo.jpg"),
    content: {
      Organs: {
        title: "Organs",
        image: require("./Images/Beef/organs/liver.jpg"),
        content: [
          {
            title: "Liver",
            weight: "1 lb",
            price: 9.99,
            image: require("./Images/Beef/organs/liver.jpg"),
            code: 1
          },
          {
            title: "Heart",
            weight: "1 lb",
            price: 7.99,
            image: require("./Images/Beef/organs/heart.jpg"),
            code: 2
          },
          {
            title: "Brain",
            weight: "1 lb",
            price: 14.99,
            image: require("./Images/Beef/organs/brain.jpg"),
            code: 3
          },
          {
            title: "Sweetbread",
            weight: "1 lb",
            price: 8.99,
            image: require("./Images/Beef/organs/sweetbread.png"),
            code: 4
          },
          {
            title: "Kidney",
            weight: "1 lb",
            price: 7.99,
            image: require("./Images/Beef/organs/kidney.png"),
            code: 5
          }
        ]
      },
      Steaks: {
        title: "Steaks",
        image: require("./Images/Beef/steaks/ribeye.jpg"),
        content: [
          {
            title: "Strip Loin",
            weight: "1 lb",
            price: 14.99,
            image: require("./Images/Beef/steaks/striploin.jpg"),
            code: 6
          },
          {
            title: "Ribeye",
            weight: "1 lb",
            price: 17.99,
            image: require("./Images/Beef/steaks/ribeye.jpg"),
            code: 7
          },
          {
            title: "Chuck",
            weight: "1 lb",
            price: 7.99,
            image: require("./Images/Beef/steaks/chuck.jpg"),
            code: 8
          },
          {
            title: "Sirloin",
            weight: "1 lb",
            price: 9.99,
            image: require("./Images/Beef/steaks/sirloin.jpg"),
            code: 9
          },
          {
            title: "Round",
            weight: "1 lb",
            price: 6.99,
            image: require("./Images/Beef/steaks/round.png"),
            code: 10
          }
        ]
      },
      Ground: {
        title: "Ground",
        image: require("./Images/Beef/ground/fattyGroundBeef.jpg"),
        content: [
          {
            title: "Lean",
            weight: "1 lb",
            price: 7.99,
            image: require("./Images/Beef/ground/leanGroundBeef.png"),
            code: 11
          },
          {
            title: "Semi-lean",
            weight: "1 lb",
            price: 7.99,
            image: require("./Images/Beef/ground/semiLeanGroundBeef.png"),
            code: 12
          },
          {
            title: "Fatty",
            weight: "1 lb",
            price: 7.99,
            image: require("./Images/Beef/ground/fattyGroundBeef.jpg"),
            code: 13
          }
        ]
      },
      Fat: {
        title: "Fat",
        image: require("./Images/Beef/fat/beefFat.jpg"),
        content: [
          {
            title: "Beef fat",
            weight: "1 lb",
            price: 9.99,
            image: require("./Images/Beef/fat/beefFat.jpg"),
            code: 14
          },
          {
            title: "Suet",
            weight: "1 lb",
            price: 4.99,
            image: require("./Images/Beef/fat/beefSuet.jpg"),
            code: 15
          }
        ]
      }
    }
  },
  {
    title: "Chicken",
    image: require("./Images/logos/chickenLogo.jpg"),
    content: {
      Organs: {
        title: "Organs",
        image: require("./Images/Chicken/organs/liver.jpg"),
        content: [
          {
            title: "Liver",
            weight: "1 lb",
            price: 6.99,
            image: require("./Images/Chicken/organs/liver.jpg"),
            code: 16
          },
          {
            title: "Heart",
            weight: "1 lb",
            price: 6.99,
            image: require("./Images/Chicken/organs/heart.jpg"),
            code: 17
          },

          {
            title: "Gizzards",
            weight: "1 lb",
            price: 6.99,
            image: require("./Images/Chicken/organs/gizzards.jpg"),
            code: 18
          },
          {
            title: "Kidney",
            weight: "1 lb",
            price: 6.99,
            image: require("./Images/Chicken/organs/kidney.jpg"),
            code: 19
          }
        ]
      },
      "Muscle-Meat": {
        title: "Muscle-Meat",
        image: require("./Images/Chicken/muscle/thighs.jpg"),
        content: [
          {
            title: "Breast",
            weight: "1 lb",
            price: 5.99,
            image: require("./Images/Chicken/muscle/breast.png"),
            code: 20
          },
          {
            title: "Thighs",
            weight: "5 lb",
            price: 22.99,
            image: require("./Images/Chicken/muscle/thighs.jpg"),
            code: 21
          },
          {
            title: "Wings",
            weight: "5 lb",
            price: 19.99,
            image: require("./Images/Chicken/muscle/wings.jpeg"),
            code: 22
          },
          {
            title: "Whole",
            weight: "3 kg",
            price: 45.99,
            image: require("./Images/Chicken/muscle/whole.jpg"),
            code: 23
          }
        ]
      }
    }
  },
  {
    title: "Fish",
    image: require("./Images/logos/fishLogo.png"),
    content: {
      "All-Fish": {
        title: "All-Fish",
        image: require("./Images/logos/fishLogo.png"),
        content: [
          {
            title: "Clams",
            weight: "5 lb",
            price: 24.99,
            image: require("./Images/Fish/clams.jpg"),
            code: 24
          },
          {
            title: "Cod",
            weight: "3 lb",
            price: 14.99,
            image: require("./Images/Fish/cod.jpg"),
            code: 25
          },
          {
            title: "Crab",
            weight: "1 lb",
            price: 29.99,
            image: require("./Images/Fish/crab.jpeg"),
            code: 26
          },
          {
            title: "Mackerel",
            weight: "1 lb",
            price: 8.99,
            image: require("./Images/Fish/mackerel.jpg"),
            code: 27
          },
          {
            title: "Mussels",
            weight: "5 lb",
            price: 14.99,
            image: require("./Images/Fish/mussels-5lb.jpg"),
            code: 28
          },
          {
            title: "Oyster box (25 count)",
            weight: "25",
            price: 13.99,
            image: require("./Images/Fish/oysterBox.jpg"),
            code: 29
          },
          {
            title: "Salmon",
            weight: "2 lb",
            price: 39.99,
            image: require("./Images/Fish/salmon.jpg"),
            code: 30
          },
          {
            title: "Scallops",
            weight: "4 lb",
            price: 79.99,
            image: require("./Images/Fish/scallops.jpg"),
            code: 31
          },
          {
            title: "Swordfish",
            weight: "2 lb",
            price: 14.99,
            image: require("./Images/Fish/swordfish.jpg"),
            code: 32
          },
          {
            title: "Tuna",
            weight: "2 lb",
            price: 19.99,
            image: require("./Images/Fish/tuna.jpg"),
            code: 33
          }
        ]
      }
    }
  },
  {
    title: "Dairy",
    image: require("./Images/logos/rawMilkLogo.jpg"),
    content: {
      Milk: {
        title: "Milk",
        image: require("./Images/logos/rawMilkLogo.jpg"),
        content: [
          {
            title: "A2 Cow's Milk",
            weight: "1/2 Gallon",
            price: 12.99,
            image: require("./Images/Dairy/Milk/halfGallonCow.jpeg"),
            code: 34
          },
          {
            title: "A2 Cow's Milk",
            weight: "1 Gallon",
            price: 19.99,
            image: require("./Images/Dairy/Milk/oneGallonCow.png"),
            code: 35
          },
          {
            title: "Sheep's Milk",
            weight: "1/2 Gallon",
            price: 14.99,
            image: require("./Images/Dairy/Milk/halfGallonSheep.jpg"),
            code: 36
          },
          {
            title: "Sheep's Milk",
            weight: "1 Gallon",
            price: 24.99,
            image: require("./Images/Dairy/Milk/oneGallonCow.png"),
            code: 37
          },
          {
            title: "Goat's Milk",
            weight: "1/2 Gallon",
            price: 13.99,
            image: require("./Images/Dairy/Milk/halfGallonGoat.jpg"),
            code: 38
          },
          {
            title: "Goat's Milk",
            weight: "1Gallon",
            price: 22.99,
            image: require("./Images/Dairy/Milk/oneGallonGoat.jpg"),
            code: 39
          }
        ]
      },

      Cheese: {
        title: "Cheese",
        image: require("./Images/Dairy/Cheese/camabert.jpg"),
        content: [
          {
            title: "Cottage Cheese",
            weight: "1 pound",
            price: 9.99,
            image: require("./Images/Dairy/Cheese/cottageCheese.jpg"),
            code: 40
          },
          {
            title: "Mascarpone",
            weight: "1 pound",
            price: 12.99,
            image: require("./Images/Dairy/Cheese/mascarpone.jpg"),
            code: 41
          },
          {
            title: "Fromage Blanc",
            weight: "1/2 Gallon",
            price: 13.99,
            image: require("./Images/Dairy/Cheese/fromageBlanc.png"),
            code: 42
          },
          {
            title: "Quark",
            weight: "1 pound",
            price: 14.99,
            image: require("./Images/Dairy/Cheese/quark.jpg"),
            code: 43
          },
          {
            title: "Paneer",
            weight: "1/2 Gallon",
            price: 13.99,
            image: require("./Images/Dairy/Cheese/paneer.jpg"),
            code: 44
          },
          {
            title: "Skyr",
            weight: "1 Litre",
            price: 11.99,
            image: require("./Images/Dairy/Cheese/skyr.png"),
            code: 45
          }, // End of soft
          {
            title: "Brie",
            weight: "1 pound",
            price: 12.99,
            image: require("./Images/Dairy/Cheese/brie.jpg"),
            code: 46
          },
          {
            title: "Camabert",
            weight: "1 pound",
            price: 14.99,
            image: require("./Images/Dairy/Cheese/camabert.jpg"),
            code: 47
          },
          {
            title: "Port Salut",
            weight: "1 pound",
            price: 13.99,
            image: require("./Images/Dairy/Cheese/portSalut.jpg"),
            code: 48
          },
          {
            title: "Montery Jack",
            weight: "1 pound",
            price: 12.99,
            image: require("./Images/Dairy/Cheese/monteryJack.jpg"),
            code: 49
          }, // End of semi-soft
          {
            title: "Swiss",
            weight: "1 pound",
            price: 17.99,
            image: require("./Images/Dairy/Cheese/swiss.jpeg"),
            code: 50
          },
          {
            title: "Cheddar",
            weight: "1 pound",
            price: 15.99,
            image: require("./Images/Dairy/Cheese/rawCheddar.jpg"),
            code: 51
          },
          {
            title: "Gouda",
            weight: "1 pound",
            price: 16.99,
            image: require("./Images/Dairy/Cheese/gouda.jpg"),
            code: 52
          },
          {
            title: "Gruyere",
            weight: "1 pound",
            price: 13.99,
            image: require("./Images/Dairy/Cheese/gruyere.jpg"),
            code: 53
          },
          {
            title: "Provolone",
            weight: "1 pound",
            price: 18.99,
            image: require("./Images/Dairy/Cheese/provolone.jpg"),
            code: 54
          }
        ]
      },

      Fat: {
        title: "Fat",
        image: require("./Images/Dairy/Fat/rawButter.jpg"),
        content: [
          {
            title: "Raw Cow Butter (unsalted)",
            weight: "1 pound",
            price: 14.99,
            image: require("./Images/Dairy/Fat/rawButter.jpg"),
            code: 55
          },
          {
            title: "Raw Cow Butter (unsalted)",
            weight: "10 pounds",
            price: 129.99,
            image: require("./Images/Dairy/Fat/rawButter.jpg"),
            code: 56
          },
          {
            title: "Raw Goat Butter (unsalted)",
            weight: "1 pound",
            price: 18.99,
            image: require("./Images/Dairy/Fat/rawButter.jpg"),
            code: 57
          },
          {
            title: "Raw Goat Butter (unsalted)",
            weight: "10 pounds",
            price: 159.99,
            image: require("./Images/Dairy/Fat/rawButter.jpg"),
            code: 58
          },
          {
            title: "Raw Sheep Butter (unsalted)",
            weight: "1 pound",
            price: 19.99,
            image: require("./Images/Dairy/Fat/rawButter.jpg"),
            code: 59
          },
          {
            title: "Raw Sheep Butter (unsalted)",
            weight: "10 pounds",
            price: 179.99,
            image: require("./Images/Dairy/Fat/rawButter.jpg"),
            code: 60
          },
          {
            title: "Raw Cow Cream",
            weight: "1 quart",
            price: 12.99,
            image: require("./Images/Dairy/Fat/1quartCowCream.jpg"),
            code: 61
          },
          {
            title: "Raw Cow Cream",
            weight: "2 Gallons",
            price: 39.99,
            image: require("./Images/Dairy/Fat/2gallonRawCream.jpg"),
            code: 62
          }
        ]
      }
    }
  }
];

export const Products = {
  1: {
    title: "Beef Liver",
    weight: "1 lb",
    price: 9.99,
    image: require("./Images/Beef/organs/liver.jpg"),
    code: 1
  },
  2: {
    title: "Beef Heart",
    weight: "1 lb",
    price: 7.99,
    image: require("./Images/Beef/organs/heart.jpg"),
    code: 2
  },
  3: {
    title: "Beef Brain",
    weight: "1 lb",
    price: 14.99,
    image: require("./Images/Beef/organs/brain.jpg"),
    code: 3
  },
  4: {
    title: "Beef Sweetbread",
    weight: "1 lb",
    price: 8.99,
    image: require("./Images/Beef/organs/sweetbread.png"),
    code: 4
  },
  5: {
    title: "Beef Kidney",
    weight: "1 lb",
    price: 7.99,
    image: require("./Images/Beef/organs/kidney.png"),
    code: 5
  },
  6: {
    title: "Strip Loin",
    weight: "1 lb",
    price: 14.99,
    image: require("./Images/Beef/steaks/striploin.jpg"),
    code: 6
  },
  7: {
    title: "Ribeye",
    weight: "1 lb",
    price: 17.99,
    image: require("./Images/Beef/steaks/ribeye.jpg"),
    code: 7
  },
  8: {
    title: "Chuck",
    weight: "1 lb",
    price: 7.99,
    image: require("./Images/Beef/steaks/chuck.jpg"),
    code: 8
  },
  9: {
    title: "Sirloin",
    weight: "1 lb",
    price: 9.99,
    image: require("./Images/Beef/steaks/sirloin.jpg"),
    code: 9
  },
  10: {
    title: "Round",
    weight: "1 lb",
    price: 6.99,
    image: require("./Images/Beef/steaks/round.png"),
    code: 10
  },
  11: {
    title: "Lean",
    weight: "1 lb",
    price: 7.99,
    image: require("./Images/Beef/ground/leanGroundBeef.png"),
    code: 11
  },
  12: {
    title: "Semi-lean",
    weight: "1 lb",
    price: 7.99,
    image: require("./Images/Beef/ground/semiLeanGroundBeef.png"),
    code: 12
  },
  13: {
    title: "Fatty",
    weight: "1 lb",
    price: 7.99,
    image: require("./Images/Beef/ground/fattyGroundBeef.jpg"),
    code: 13
  },
  14: {
    title: "Beef fat",
    weight: "1 lb",
    price: 9.99,
    image: require("./Images/Beef/fat/beefFat.jpg"),
    code: 14
  },
  15: {
    title: "Suet",
    weight: "1 lb",
    price: 4.99,
    image: require("./Images/Beef/fat/beefSuet.jpg"),
    code: 15
  },
  16: {
    title: "Chicken Liver",
    weight: "1 lb",
    price: 6.99,
    image: require("./Images/Chicken/organs/liver.jpg"),
    code: 16
  },
  17: {
    title: "Chicken Heart",
    weight: "1 lb",
    price: 6.99,
    image: require("./Images/Chicken/organs/heart.jpg"),
    code: 17
  },

  18: {
    title: "Chicken Gizzards",
    weight: "1 lb",
    price: 6.99,
    image: require("./Images/Chicken/organs/gizzards.jpg"),
    code: 18
  },
  19: {
    title: "Chicken Kidney",
    weight: "1 lb",
    price: 6.99,
    image: require("./Images/Chicken/organs/kidney.jpg"),
    code: 19
  },
  20: {
    title: "Chicken Breast",
    weight: "1 lb",
    price: 5.99,
    image: require("./Images/Chicken/muscle/breast.png"),
    code: 20
  },
  21: {
    title: "Chicken Thighs",
    weight: "5 lb",
    price: 22.99,
    image: require("./Images/Chicken/muscle/thighs.jpg"),
    code: 21
  },
  22: {
    title: "Chicken Wings",
    weight: "5 lb",
    price: 19.99,
    image: require("./Images/Chicken/muscle/wings.jpeg"),
    code: 22
  },
  23: {
    title: "Chicken Whole",
    weight: "3 kg",
    price: 45.99,
    image: require("./Images/Chicken/muscle/whole.jpg"),
    code: 23
  },
  24: {
    title: "Clams",
    weight: "5 lb",
    price: 24.99,
    image: require("./Images/Fish/clams.jpg"),
    code: 24
  },
  25: {
    title: "Cod",
    weight: "3 lb",
    price: 14.99,
    image: require("./Images/Fish/cod.jpg"),
    code: 25
  },
  26: {
    title: "Crab",
    weight: "1 lb",
    price: 29.99,
    image: require("./Images/Fish/crab.jpeg"),
    code: 26
  },
  27: {
    title: "Mackerel",
    weight: "1 lb",
    price: 8.99,
    image: require("./Images/Fish/mackerel.jpg"),
    code: 27
  },
  28: {
    title: "Mussels",
    weight: "5 lb",
    price: 14.99,
    image: require("./Images/Fish/mussels-5lb.jpg"),
    code: 28
  },
  29: {
    title: "Oyster box (25 count)",
    weight: "25",
    price: 13.99,
    image: require("./Images/Fish/oysterBox.jpg"),
    code: 29
  },
  30: {
    title: "Salmon",
    weight: "2 lb",
    price: 39.99,
    image: require("./Images/Fish/salmon.jpg"),
    code: 30
  },
  31: {
    title: "Scallops",
    weight: "4 lb",
    price: 79.99,
    image: require("./Images/Fish/scallops.jpg"),
    code: 31
  },
  32: {
    title: "Swordfish",
    weight: "2 lb",
    price: 14.99,
    image: require("./Images/Fish/swordfish.jpg"),
    code: 32
  },
  33: {
    title: "Tuna",
    weight: "2 lb",
    price: 19.99,
    image: require("./Images/Fish/tuna.jpg"),
    code: 33
  },
  34: {
    title: "A2 Cow's Milk",
    weight: "1/2 Gallon",
    price: 12.99,
    image: require("./Images/Dairy/Milk/halfGallonCow.jpeg"),
    code: 34
  },
  35: {
    title: "A2 Cow's Milk",
    weight: "1 Gallon",
    price: 19.99,
    image: require("./Images/Dairy/Milk/oneGallonCow.png"),
    code: 35
  },
  36: {
    title: "Sheep's Milk",
    weight: "1/2 Gallon",
    price: 14.99,
    image: require("./Images/Dairy/Milk/halfGallonSheep.jpg"),
    code: 36
  },
  37: {
    title: "Sheep's Milk",
    weight: "1 Gallon",
    price: 24.99,
    image: require("./Images/Dairy/Milk/oneGallonCow.png"),
    code: 37
  },
  38: {
    title: "Goat's Milk",
    weight: "1/2 Gallon",
    price: 13.99,
    image: require("./Images/Dairy/Milk/halfGallonGoat.jpg"),
    code: 38
  },
  39: {
    title: "Goat's Milk",
    weight: "1Gallon",
    price: 22.99,
    image: require("./Images/Dairy/Milk/oneGallonGoat.jpg"),
    code: 39
  },
  40: {
    title: "Cottage Cheese",
    weight: "1 pound",
    price: 9.99,
    image: require("./Images/Dairy/Cheese/cottageCheese.jpg"),
    code: 40
  },
  41: {
    title: "Mascarpone",
    weight: "1 pound",
    price: 12.99,
    image: require("./Images/Dairy/Cheese/mascarpone.jpg"),
    code: 41
  },
  42: {
    title: "Fromage Blanc",
    weight: "1/2 Gallon",
    price: 13.99,
    image: require("./Images/Dairy/Cheese/fromageBlanc.png"),
    code: 42
  },
  43: {
    title: "Quark",
    weight: "1 pound",
    price: 14.99,
    image: require("./Images/Dairy/Cheese/quark.jpg"),
    code: 43
  },
  44: {
    title: "Paneer",
    weight: "1/2 Gallon",
    price: 13.99,
    image: require("./Images/Dairy/Cheese/paneer.jpg"),
    code: 44
  },
  45: {
    title: "Skyr",
    weight: "1 Litre",
    price: 11.99,
    image: require("./Images/Dairy/Cheese/skyr.png"),
    code: 45
  }, // End of soft
  46: {
    title: "Brie",
    weight: "1 pound",
    price: 12.99,
    image: require("./Images/Dairy/Cheese/brie.jpg"),
    code: 46
  },
  47: {
    title: "Camabert",
    weight: "1 pound",
    price: 14.99,
    image: require("./Images/Dairy/Cheese/camabert.jpg"),
    code: 47
  },
  48: {
    title: "Port Salut",
    weight: "1 pound",
    price: 13.99,
    image: require("./Images/Dairy/Cheese/portSalut.jpg"),
    code: 48
  },
  49: {
    title: "Montery Jack",
    weight: "1 pound",
    price: 12.99,
    image: require("./Images/Dairy/Cheese/monteryJack.jpg"),
    code: 49
  }, // End of semi-soft
  50: {
    title: "Swiss",
    weight: "1 pound",
    price: 17.99,
    image: require("./Images/Dairy/Cheese/swiss.jpeg"),
    code: 50
  },
  51: {
    title: "Cheddar",
    weight: "1 pound",
    price: 15.99,
    image: require("./Images/Dairy/Cheese/rawCheddar.jpg"),
    code: 51
  },
  52: {
    title: "Gouda",
    weight: "1 pound",
    price: 16.99,
    image: require("./Images/Dairy/Cheese/gouda.jpg"),
    code: 52
  },
  53: {
    title: "Gruyere",
    weight: "1 pound",
    price: 13.99,
    image: require("./Images/Dairy/Cheese/gruyere.jpg"),
    code: 53
  },
  54: {
    title: "Provolone",
    weight: "1 pound",
    price: 18.99,
    image: require("./Images/Dairy/Cheese/provolone.jpg"),
    code: 54
  },
  55: {
    title: "Raw Cow Butter (unsalted)",
    weight: "1 pound",
    price: 14.99,
    image: require("./Images/Dairy/Fat/rawButter.jpg"),
    code: 55
  },
  56: {
    title: "Raw Cow Butter (unsalted)",
    weight: "10 pounds",
    price: 129.99,
    image: require("./Images/Dairy/Fat/rawButter.jpg"),
    code: 56
  },
  57: {
    title: "Raw Goat Butter (unsalted)",
    weight: "1 pound",
    price: 18.99,
    image: require("./Images/Dairy/Fat/rawButter.jpg"),
    code: 57
  },
  58: {
    title: "Raw Goat Butter (unsalted)",
    weight: "10 pounds",
    price: 159.99,
    image: require("./Images/Dairy/Fat/rawButter.jpg"),
    code: 58
  },
  59: {
    title: "Raw Sheep Butter (unsalted)",
    weight: "1 pound",
    price: 19.99,
    image: require("./Images/Dairy/Fat/rawButter.jpg"),
    code: 59
  },
  60: {
    title: "Raw Sheep Butter (unsalted)",
    weight: "10 pounds",
    price: 179.99,
    image: require("./Images/Dairy/Fat/rawButter.jpg"),
    code: 60
  },
  61: {
    title: "Raw Cow Cream",
    weight: "1 quart",
    price: 12.99,
    image: require("./Images/Dairy/Fat/1quartCowCream.jpg"),
    code: 61
  },
  62: {
    title: "Raw Cow Cream",
    weight: "2 Gallons",
    price: 39.99,
    image: require("./Images/Dairy/Fat/2gallonRawCream.jpg"),
    code: 62
  }
};
