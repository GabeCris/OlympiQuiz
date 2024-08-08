import Card from "@src/components/Card";
import Header from "../../components/Header";
import MedalBoard from "../../components/MedalBoard";
import Container from "@src/components/Utils/Container";
import { CardProps, Color } from "@src/types/types";
import { CalendarIcon, RocketIcon, TowerIcon } from "@src/components/Icons";

const Home = () => {
  const cards: CardProps[] = [
    {
      title: "Desafio Diário",
      subtitle: "Você se lembra o que rolou ontem?",
      record: 1,
      color: Color.RED,
      icon: <RocketIcon />,
    },
    {
      title: "Paris 2024",
      subtitle: "O que você já assistiu desde o começo dos jogos?",
      record: 10,
      color: Color.BLUE,
      icon: <TowerIcon />,
    },
    {
      title: "Calendário",
      subtitle: "Quando o Brasil vai jogar mesmo?",
      color: Color.GREEN,
      icon: <CalendarIcon />,
    },
  ];

  return (
    <>
      <Header></Header>
      <Container>
        <MedalBoard />
        {cards.map((card) => (
          <Card {...card} />
        ))}
      </Container>
    </>
  );
};

export default Home;
