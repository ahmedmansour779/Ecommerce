import shortid from "shortid";
import imag1 from "../images/products/1.png";
import imag2 from "../images/products/2.png";
import imag3 from "../images/products/3.png";
import imag4 from "../images/products/4.png";
import imag5 from "../images/products/5.png";
import imag6 from "../images/products/6.png";

const dataProducts = [
    {
        id: shortid.generate(),
        name: "Product",
        describe: "Product description",
        prise: "50$",
        img: imag1,
        rating: 3,
    },
    {
        id: shortid.generate(),
        name: "Product",
        describe: "Product description",
        prise: "50$",
        img: imag2,
        rating: 3,
    },
    {
        id: shortid.generate(),
        name: "Product",
        describe: "Product description",
        prise: "50$",
        img: imag3,
        rating: 3,
    },
    {
        id: shortid.generate(),
        name: "Product",
        describe: "Product description",
        prise: "50$",
        img: imag4,
        rating: 3,
    },
    {
        id: shortid.generate(),
        name: "Product",
        describe: "Product description",
        prise: "50$",
        img: imag5,
        rating: 3,
    },
    {
        id: shortid.generate(),
        name: "Product",
        describe: "Product description",
        prise: "50$",
        img: imag6,
        rating: 3,
    },
]

export default dataProducts;