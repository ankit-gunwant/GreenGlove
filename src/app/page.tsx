import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import MainBar from "./Components/MainBar";
import Sidebar from "./Components/Sidebar";
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/img4.png";
import img5 from "../Assets/img5.png";
import img6 from "../Assets/img6.png";
import img7 from "../Assets/img7.png";
import img8 from "../Assets/img8.png";
import img9 from "../Assets/img9.png";

const cardData = [
  {
    image: img1,
    name: "Zamioculcas zamiifolia",
    price: "₹ 349",
  },
  {
    image: img2,
    name: "ZZ Plant",
    price: "₹ 349",
  },
  // {
  //   image: img3,
  //   name: "Product 3",
  //   price: "$15",
  // },
  {
    image: img4,
    name: "Bonsai Looking Adenium",
    price: "₹ 567",
  },
  {
    image: img5,
    name: "Dieffenbachia seguine",
    price: "₹ 305",
  },
  {
    image: img6,
    name: "Helxine soleirolii",
    price: "₹ 239",
  },
  {
    image: img7,
    name: "Dracaena Warneckii",
    price: "₹ 245",
  },
  {
    image: img8,
    name: "Lucky Bamboo Stalk",
    price: "₹ 549",
  },
  {
    image: img9,
    name: "Areca Palm",
    price: "₹ 399",
  },
  {
    image: img1,
    name: "Zamioculcas zamiifolia",
    price: "₹ 349",
  },
  {
    image: img2,
    name: "ZZ Plant",
    price: "₹ 349",
  },
  //{
  //   image: img3,
  //   name: "Bonsai Looking Adenium",
  //   price: "₹ 567",
  // },
  {
    image: img4,
    name: "Bonsai Looking Adenium",
    price: "₹ 567",
  },
  {
    image: img5,
    name: "Dieffenbachia seguine",
    price: "₹ 305",
  },
  {
    image: img6,
    name: "Dieffenbachia seguine",
    price: "₹ 305",
  },
  {
    image: img7,
    name: "Helxine soleirolii",
    price: "₹ 239",
  },
  {
    image: img8,
    name: "Lucky Bamboo Stalk",
    price: "₹ 549",
  },
  {
    image: img9,
    name: "Areca Palm",
    price: "₹ 399",
  },
];

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="flex">
        <Sidebar />
        <MainBar cards={cardData} />
      </div>
    </div>
  );
};

export default page;
