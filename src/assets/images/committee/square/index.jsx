import Test from "../../../test-image.png";
import MarianoV from "./Mariano V..jpg";
import AbisadoM from "./Abisado M..png";
import CaluyaS from "./Caluya S..png";
import Fabito from "./Fabito B..png";
import GuadanaR from "./Guadana R..jpg";
import GuoqingY from "./Guoqing Y..jpg";
import ImperialJ from "./Imperial J..jpg";
import JamisM from "./Jamis M..png";
import NovaA from "./Nova A..jpg";
import RodriguezR from "./Rodriguez R..jpeg";
import SampedroG from "./Sampedro G..jpeg";
import SongX from "./Song X..jpg";
import WenmingW from "./Wenming W..jpg";
import XiaoyanL from "./Xiaoyan L..jpg";
import YabutE from "./Yabut E..jpg";
import SeeS from "./See S..jpg";

const getImage = (name) => {
  const images = {
    "Vladimir Mariano": MarianoV,
    "Mideth Abisado": AbisadoM,
    "Susan Caluya": CaluyaS,
    "Bernie S. Fabito": Fabito,
    "Ryan Richard Guadaña": GuadanaR,
    "Yue Guoqing": GuoqingY,
    "Joseph Marvin Imperial": ImperialJ,
    "Marilou Jamis": JamisM,
    "Avonn C. Nova": NovaA,
    "Ramon Rodriguez": RodriguezR,
    "Gabriel Avelino Sampedro": SampedroG,
    "Simon See": SeeS,
    "Song Xiedong": SongX,
    "Wang Wenming": WenmingW,
    "Li Xiaoyan": XiaoyanL,
    "Emeliza Yabut": YabutE,
  };

  const img = images[`${name}`];
  return img == null ? Test : img;
};

export default getImage;
