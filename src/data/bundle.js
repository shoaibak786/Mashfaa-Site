import abayaImage from "../assets/products/Abayas/Abaya Brown.png";
import hijabImage from "../assets/products/Hijabs/Hijab Maroon.png";
import broochImage from "../assets/products/Abayas/Abaya Purple.png";

const bundles = [
  {
    id: 1,
    name: "Complete Abaya Look",
    description: "A refined combination for an effortless modest look.",
    products: [
      {
        name: "Premium Abaya",
        image: abayaImage,
        price: 4499,
      },
      {
        name: "Elegant Hijab",
        image: hijabImage,
        price: 1499,
      },
      {
        name: "Elegant Brooch",
        image: broochImage,
        price: 799,
      },
    ],
    totalPrice: 6797,
    bundlePrice: 5999,
    badge: "Save Rs. 798",
  },

  {
    id: 2,
    name: "Everyday Essentials",
    description: "Essential pieces curated for your everyday style.",
    products: [
      {
        name: "Elegant Hijab",
        image: hijabImage,
        price: 1499,
      },
      {
        name: "Elegant Brooch",
        image: broochImage,
        price: 799,
      },
    ],
    totalPrice: 2298,
    bundlePrice: 1999,
    badge: "Save Rs. 299",
  },
  {
  id: 3,
  name: "Signature Style",
  description:
    "A polished combination of statement pieces for a complete refined look.",
  products: [
    {
      name: "Premium Abaya",
      image: abayaImage,
      price: 4499,
    },
    {
      name: "Elegant Hijab",
      image: hijabImage,
      price: 1499,
    },
    {
      name: "Elegant Brooch",
      image: broochImage,
      price: 799,
    },
  ],
  totalPrice: 6797,
  bundlePrice: 5799,
  badge: "Save Rs. 998",
},
];

export default bundles;