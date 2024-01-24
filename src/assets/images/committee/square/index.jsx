import Placeholder from "./placeholder.png";
import SeeS from "./See S.jpg";
import MarianoV from "./Mariano V.jpg";
import AbdillahL from "./Abdillah L.png";
import AbisadoM from "./Abisado M.png";
import AculaD from "./Acula D.jpg";
import BalahadiaF from "./Balahadia F.png";
import BoinodirisP from "./Boinodiris P.png";
import BarfehD from "./Barfeh D.jpg";
import BringulaR from "./Bringula R.png";
import CaluyaS from "./Caluya S.png";
import CaniloA from "./Canilo A.jpg";
import DellosaR from "./Dellosa R.png";
import Fabito from "./Fabito B.png";
import GeX from "./Ge X.jpg";
import GuadanaR from "./Guadana R.jpg";
import GuoqingY from "./Guoqing Y.jpg";
import HengS from "./Heng S.png";
import ImperialJ from "./Imperial J.jpg";
import JamisM from "./Jamis M.png";
import LauB from "./Lau B.jpg";
import LlovidoJ from "./Llovido J.jpg";
import MacedaL from "./Maceda L.png";
import MalicdemA from "./Malicdem A.jpg";
import MilitanteS from "./Militante S.jpg";
import NovaA from "./Nova A.jpg";
import PalaoagP from "./Palaoag T.jpg";
import ParagasJ from "./Paragas J.jpg";
import PeiP from "./Pei P.jpg";
import PonayC from "./Ponay C.jpg";
import RodrigoM from "./Rodrigo M.jpg";
import RodriguezR from "./Rodriguez R.jpeg";
import SalazarA from "./Salazar A.jpg";
import SalazarJ from "./Salazar J.jpeg";
import SalidoJ from "./Salido J.jpg";
import SalimbagatJ from "./Salimbagat J.jpg";
import SampedroG from "./Sampedro G.jpeg";
import SongX from "./Song X.jpg";
import TiuG from "./Tiu G.jpg";
import WenmingW from "./Wenming W.jpg";
import XiaoyanL from "./Xiaoyan L.jpg";
import YabutE from "./Yabut E.jpg";
import ZhuX from "./Zhu X.jpg";

const getImage = (name) => {
  const images = {
    "Vladimir Mariano": MarianoV,
    "Simon See": SeeS,
    "Leon Andretti Abdillah": AbdillahL,
    "Mideth Abisado": AbisadoM,
    "Donata Acula": AculaD,
    "Francis Balahadia": BalahadiaF,
    "Davood Pour Yousefian Barfeh": BarfehD,
    "Phaedra Boinodiris": BoinodirisP,
    "Rex Bringula": BringulaR,
    "Angie Ceniza-Canillo": CaniloA,
    "Susan Caluya": CaluyaS,
    "Rhowel Dellosa": DellosaR,
    "Bernie S. Fabito": Fabito,
    "Ge Xianlei": GeX,
    "Ryan Richard Guadaña": GuadanaR,
    "Yue Guoqing": GuoqingY,
    "Sovannarith Heng": HengS,
    "Joseph Marvin Imperial": ImperialJ,
    "Marilou Jamis": JamisM,
    "Lau Bee Theng": LauB,
    "Jennifer Llovido": LlovidoJ,
    "Lany Maceda": MacedaL,
    "Alvin Malicdem": MalicdemA,
    "Sammy Militante": MilitanteS,
    "Avonn C. Nova": NovaA,
    "Thelma Palaoag": PalaoagP,
    "Jessie Paragas": ParagasJ,
    "Pei Pei": PeiP,
    "Charmaine Ponay": PonayC,
    "Maria Mercedes T. Rodrigo": RodrigoM,
    "Ramon Rodriguez": RodriguezR,
    "Armida Salazar": SalazarA,
    "Julian Salazar": SalazarJ,
    "Julie Ann Salido": SalidoJ,
    "Jennilyn Salimbagat": SalimbagatJ,
    "Gabriel Avelino Sampedro": SampedroG,
    "Song Xiedong": SongX,
    "Glendora Tiu": TiuG,
    "Wang Wenming": WenmingW,
    "Li Xiaoyan": XiaoyanL,
    "Emeliza Yabut": YabutE,
    "Zhu Xuemei": ZhuX,
  };

  const img = images[`${name}`];
  return img == null ? Placeholder : img;
};

export default getImage;
