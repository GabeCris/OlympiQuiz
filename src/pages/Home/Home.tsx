import Card from "@src/components/Card";
import Header from "../../components/Header";
import MedalBoard from "../../components/MedalBoard";
import Container from "@src/components/Utils/Container";
import { CardProps, Color } from "@src/types/types";
import {
  CalendarIcon,
  OlympiQuizIcon,
  RocketIcon,
  TowerIcon,
} from "@src/components/Icons";
import toast, { Toaster } from "react-hot-toast";
import Loading from "@src/components/Loading";

const Home = () => {
  const showComingSoonToast = (color: string) => {
    toast("Disponível em Breve", {
      style: {
        background: color,
        color: "#fff",
      },
    });
  };

  const showHelpToast = (color: string) => {
    toast(
      "Diversas perguntas sobre os melhores atletas, países, esportes e muitas medalhas! \n\nE você, vai garantir a sua também?",
      {
        duration: 8000,
        style: {
          background: color,
          color: "#fff",
        },
      }
    );
  };

  const cards: CardProps[] = [
    {
      title: "Paris 2024",
      subtitle: "O que você já assistiu desde o começo dos jogos?",
      color: Color.BLUE,
      record: true,
      icon: <TowerIcon />,
      help: () => showHelpToast(Color.BLUE),
    },
    {
      title: "Desafio Diário",
      subtitle: "Você se lembra o que rolou ontem?",
      color: Color.RED,
      icon: <RocketIcon />,
      action: () => showComingSoonToast(Color.RED),
    },
    {
      title: "Calendário",
      subtitle: "Quando o Brasil vai jogar mesmo?",
      color: Color.GREEN,
      icon: <CalendarIcon />,
      action: () => showComingSoonToast(Color.GREEN),
    },
  ];

  return (
    <>
      <Header></Header>
      <Loading />
      <Container>
        <Toaster position="bottom-center" />
        <MedalBoard />
        {cards.map((card) => (
          <Card {...card} />
        ))}
      </Container>
    </>
  );
};

export default Home;
