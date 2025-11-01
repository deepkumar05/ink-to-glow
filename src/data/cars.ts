export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  themeColor: string;
  themeColorRGB: string;
  specs: {
    horsepower: number;
    torque: string;
    zeroToHundred: string;
    topSpeed: string;
    engine: string;
    price: string;
  };
  description: string;
  image: string;
}

import lamboImage from "@/assets/cars/lamborghini-huracan.jpg";
import ferrariImage from "@/assets/cars/ferrari-812.jpg";
import mclarenImage from "@/assets/cars/mclaren-720s.jpg";
import porscheImage from "@/assets/cars/porsche-911.jpg";
import bugattiImage from "@/assets/cars/bugatti-chiron.jpg";
import astonImage from "@/assets/cars/aston-martin-dbs.jpg";
import koenigseggImage from "@/assets/cars/koenigsegg-jesko.jpg";

export const cars: Car[] = [
  {
    id: "lamborghini-huracan",
    name: "Lamborghini Huracán",
    brand: "LAMBORGHINI",
    model: "Huracán",
    themeColor: "#84E82D",
    themeColorRGB: "132, 232, 45",
    specs: {
      horsepower: 631,
      torque: "443 lb-ft",
      zeroToHundred: "2.9s",
      topSpeed: "325 km/h",
      engine: "V10 5.2L",
      price: "$261,274"
    },
    description: "Italian fury meets precision engineering",
    image: lamboImage
  },
  {
    id: "ferrari-812",
    name: "Ferrari 812 Superfast",
    brand: "FERRARI",
    model: "812 Superfast",
    themeColor: "#E81224",
    themeColorRGB: "232, 18, 36",
    specs: {
      horsepower: 789,
      torque: "530 lb-ft",
      zeroToHundred: "2.9s",
      topSpeed: "340 km/h",
      engine: "V12 6.5L",
      price: "$365,000"
    },
    description: "The most powerful Ferrari ever built",
    image: ferrariImage
  },
  {
    id: "mclaren-720s",
    name: "McLaren 720S",
    brand: "MCLAREN",
    model: "720S",
    themeColor: "#FF6B00",
    themeColorRGB: "255, 107, 0",
    specs: {
      horsepower: 710,
      torque: "568 lb-ft",
      zeroToHundred: "2.8s",
      topSpeed: "341 km/h",
      engine: "V8 4.0L Twin-Turbo",
      price: "$299,000"
    },
    description: "Aerodynamic excellence in motion",
    image: mclarenImage
  },
  {
    id: "porsche-911",
    name: "Porsche 911 Turbo S",
    brand: "PORSCHE",
    model: "911 Turbo S",
    themeColor: "#FFD700",
    themeColorRGB: "255, 215, 0",
    specs: {
      horsepower: 640,
      torque: "590 lb-ft",
      zeroToHundred: "2.7s",
      topSpeed: "330 km/h",
      engine: "Flat-6 3.8L Twin-Turbo",
      price: "$207,000"
    },
    description: "Legendary performance, timeless design",
    image: porscheImage
  },
  {
    id: "bugatti-chiron",
    name: "Bugatti Chiron",
    brand: "BUGATTI",
    model: "Chiron",
    themeColor: "#00B4D8",
    themeColorRGB: "0, 180, 216",
    specs: {
      horsepower: 1479,
      torque: "1,180 lb-ft",
      zeroToHundred: "2.4s",
      topSpeed: "420 km/h",
      engine: "W16 8.0L Quad-Turbo",
      price: "$3,000,000"
    },
    description: "The ultimate hypercar experience",
    image: bugattiImage
  },
  {
    id: "aston-martin-dbs",
    name: "Aston Martin DBS Superleggera",
    brand: "ASTON MARTIN",
    model: "DBS Superleggera",
    themeColor: "#A8DADC",
    themeColorRGB: "168, 218, 220",
    specs: {
      horsepower: 715,
      torque: "664 lb-ft",
      zeroToHundred: "3.4s",
      topSpeed: "340 km/h",
      engine: "V12 5.2L Twin-Turbo",
      price: "$316,300"
    },
    description: "British elegance meets brute force",
    image: astonImage
  },
  {
    id: "koenigsegg-jesko",
    name: "Koenigsegg Jesko",
    brand: "KOENIGSEGG",
    model: "Jesko",
    themeColor: "#E5E5E5",
    themeColorRGB: "229, 229, 229",
    specs: {
      horsepower: 1600,
      torque: "1,106 lb-ft",
      zeroToHundred: "2.5s",
      topSpeed: "480+ km/h",
      engine: "V8 5.0L Twin-Turbo",
      price: "$3,000,000"
    },
    description: "Swedish engineering at its absolute peak",
    image: koenigseggImage
  }
];
