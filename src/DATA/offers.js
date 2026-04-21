import CIH from "../../public/CIH.png";
import CHAABI from "../../public/CHAABI.png";
import BMCE from "../../public/BMCE.png";

const data = [
  {
    id: 1,
    image: "/CIH.png",
    bank: "CIH BANK",
    amount: 200000,
    rate: 0.03,
    duration: 20,
    details: {
      Durée: 20,
      Mensualité: 2000,
    },
  },
  {
    id: 2,
    image: "/CHAABI.png",
    bank: "CHAABI BANK",
    amount: 200000,
    rate: 0.025,
    duration: 20,
    details: {
      Durée: 25,
      Mensualité: 7000,
    },
  },
  {
    id: 3,
    image: "/BMCE.png",
    bank: "BMCE BANK",
    amount: 200000,
    rate: 0.04,
    duration: 20,
    details: {
      Durée: 30,
      Mensualité: 60000,
    },
  },
];

export default data;
