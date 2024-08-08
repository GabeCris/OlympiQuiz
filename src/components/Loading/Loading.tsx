import * as S from "./styles";
import Text from "../Utils/Text";

const Loading = () => {
  return (
    <S.LoadingPopup
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: 2,
      }}
    >
      <S.LoadingRings>
        <S.Loading />
        <S.Loading />
        <S.Loading />
        <S.Loading />
        <S.Loading />
      </S.LoadingRings>
      <Text fontSize="30px" isTitle>
        OlympiQuiz
      </Text>
    </S.LoadingPopup>
  );
};

export default Loading;
