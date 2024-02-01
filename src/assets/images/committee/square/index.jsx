import Placeholder from "./placeholder.png";
import SeeS from "./See S.jpg";
import MarianoV from "./Mariano V.jpg";
import AbdillahL from "./Abdillah L.png";
import AbisadoM from "./Abisado M.png";
import AculaD from "./Acula D.jpg";
import AshipaoloyeF from "./Ashipaoloye F.jpg";
import BalahadiaF from "./Balahadia F.png";
import BalleraM from "./Ballera M.png";
import BimleshW from "./Bimlesh W.jpg";
import BoinodirisP from "./Boinodiris P.png";
import BarfehD from "./Barfeh D.jpg";
import BringulaR from "./Bringula R.png";
import CaluyaS from "./Caluya S.png";
import CaniloA from "./Canilo A.jpg";
import CanlasR from "./Canlas R.jpg";
import ContrerasJ from "./Contreras J.jpg";
import DellosaR from "./Dellosa R.png";
import EbardoR from "./Ebardo R.jpg";
import EniegoA from "./Eniego A.jpg";
import Fabito from "./Fabito B.png";
import FernandoA from "./Fernando A.jpg";
import GeX from "./Ge X.jpg";
import GuadanaR from "./Guadana R.jpg";
import GuoqingY from "./Guoqing Y.jpg";
import HengS from "./Heng S.png";
import ImperialJ from "./Imperial J.jpg";
import JamisM from "./Jamis M.png";
import LacasandileA from "./Lacasandile A.jpg";
import LauB from "./Lau B.jpg";
import LlovidoJ from "./Llovido J.jpg";
import MacedaL from "./Maceda L.png";
import MalicdemA from "./Malicdem A.jpg";
import MedinaR from "./Medina R.jpg";
import MilitanteS from "./Militante S.jpg";
import NovaA from "./Nova A.jpg";
import PalaoagP from "./Palaoag T.jpg";
import ParagasJ from "./Paragas J.jpg";
import PeiP from "./Pei P.jpg";
import PonayC from "./Ponay C.jpg";
import QingyuL from "./Qingyu L.jpg";
import RagaR from "./Raga R.png";
import RamirezE from "./Ramirez E.jpg";
import RodrigoM from "./Rodrigo M.jpg";
import RodriguezR from "./Rodriguez R.jpeg";
import RomanaC from "./Romana C.jpg";
import SalazarA from "./Salazar A.jpg";
import SalazarJ from "./Salazar J.jpeg";
import SalidoJ from "./Salido J.jpg";
import SalimbagatJ from "./Salimbagat J.jpg";
import SampedroG from "./Sampedro G.jpeg";
import SideñoJ from "./Sideño J.jpg";
import SongX from "./Song X.jpg";
import SophatsathitP from "./Sophatsathit P.png";
import TiuG from "./Tiu G.jpg";
import WenmingW from "./Wenming W.jpg";
import XiaoyanL from "./Xiaoyan L.jpg";
import YabutE from "./Yabut E.jpg";
import YongX from "./Yong X.jpg";
import ZhuX from "./Zhu X.jpg";

const getImage = (name) => {
  const images = {
    "Vladimir Mariano": MarianoV,
    "Simon See": SeeS,
    "Leon Andretti Abdillah": AbdillahL,
    "Mideth Abisado": AbisadoM,
    "Donata Acula": AculaD,
    "Francis Kayode Ashipaoloye": AshipaoloyeF,
    "Francis Balahadia": BalahadiaF,
    "Melvin Ballera": BalleraM,
    "Davood Pour Yousefian Barfeh": BarfehD,
    "Bimlesh Wadhwa": BimleshW,
    "Phaedra Boinodiris": BoinodirisP,
    "Rex Bringula": BringulaR,
    "Angie Ceniza-Canillo": CaniloA,
    "Ria Liza Canlas": CanlasR,
    "Susan Caluya": CaluyaS,
    "Jennifer Contreras": ContrerasJ,
    "Rhowel Dellosa": DellosaR,
    "Ryan Ebardo": EbardoR,
    "Arnold Eniego": EniegoA,
    "Bernie S. Fabito": Fabito,
    "Alexa Ray Fernando": FernandoA,
    "Ge Xianlei": GeX,
    "Ryan Richard Guadaña": GuadanaR,
    "Yue Guoqing": GuoqingY,
    "Sovannarith Heng": HengS,
    "Joseph Marvin Imperial": ImperialJ,
    "Marilou Jamis": JamisM,
    "Angelique Lacasandile": LacasandileA,
    "Lau Bee Theng": LauB,
    "Jennifer Llovido": LlovidoJ,
    "Lany Maceda": MacedaL,
    "Alvin Malicdem": MalicdemA,
    "Ruji Medina": MedinaR,
    "Sammy Militante": MilitanteS,
    "Avonn C. Nova": NovaA,
    "Thelma Palaoag": PalaoagP,
    "Jessie Paragas": ParagasJ,
    "Pei Pei": PeiP,
    "Charmaine Ponay": PonayC,
    "Liu Qingyu": QingyuL,
    "Rodolfo Jr. Raga": RagaR,
    "Emmanuel Ramirez": RamirezE,
    "Maria Mercedes T. Rodrigo": RodrigoM,
    "Ramon Rodriguez": RodriguezR,
    "Cherry Lyn Sta. Romana": RomanaC,
    "Armida Salazar": SalazarA,
    "Julian Salazar": SalazarJ,
    "Julie Ann Salido": SalidoJ,
    "Jennilyn Salimbagat": SalimbagatJ,
    "Gabriel Avelino Sampedro": SampedroG,
    "Janette Sideño": SideñoJ,
    "Song Xiedong": SongX,
    "Peraphon Sophatsathit": SophatsathitP,
    "Glendora Tiu": TiuG,
    "Wang Wenming": WenmingW,
    "Li Xiaoyan": XiaoyanL,
    "Emeliza Yabut": YabutE,
    "Yong Xu": YongX,
    "Zhu Xuemei": ZhuX,
  };

  const img = images[`${name}`];
  return img == null ? Placeholder : img;
};

export default getImage;
