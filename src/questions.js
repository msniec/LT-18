import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const styles = {
  outer: {
    width: "100vw",
    height: "100vh",
  },
  question: {
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    textAlign: "center",
  },
  actionContainer: {
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  yesContainer: {
    backgroundColor: "green",
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  noContainer: {
    backgroundColor: "red",
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
};

function Question(props) {
  const goNext = (column, row) => () => {
    setQuestionColumn(column);
    setQuestionRow(row);
  };
  const showAnswer = (answer) => () => {
    props.history.push(`/result/${answer}`);
  };

  const [questionRow, setQuestionRow] = useState(0);
  const [questionColumn, setQuestionColumn] = useState(0);
  const questions = [
    [
      {
        question: "Czy kiedykolwiek obawiasz się, że zostaniesz odkryty?",
        yesAction: goNext(0, 1),
        noAction: goNext(1, 1),
      },
    ],
    [
      {
        question:
          "Czy masz wrażenie, że Twoi koledzy są bardziej kompetentni od Ciebie?",
        yesAction: goNext(0, 2),
        noAction: goNext(1, 2),
      },
      {
        question: "Czy czujesz się niekomfortowo, gdy ktoś chwali Twoją pracę?",
        yesAction: goNext(2, 2),
        noAction: goNext(3, 2),
      },
    ],
    [
      {
        question:
          'Czy używasz minimalizującego języka? (np. "Chyba", "Wydaje mi się")?',
        yesAction: goNext(0, 3),
        noAction: goNext(1, 3),
      },
      {
        question: "Czy unikasz proszenia o podwyżkę",
        yesAction: goNext(2, 3),
        noAction: goNext(3, 3),
      },
      {
        question: "Czy stawiasz sobie nieosiągalne cele?",
        yesAction: goNext(4, 3),
        noAction: goNext(3, 3),
      },
      {
        question: "Czy oczekujesz, że Twoja że twoja praca będzie bezbłędna?",
        yesAction: goNext(4, 3),
        noAction: goNext(5, 3),
      },
    ],
    [
      {
        question:
          "Czy czujesz, że mówiąc pochwały ludzie starają się być mili?",
        yesAction: goNext(1, 4),
        noAction: goNext(0, 4),
      },
      {
        question:
          "Czy uważasz, że twoje sukcesy zawdzięczasz tylko czynnikom zewnętrznym (np. dobre kontakty, szczęście)?",
        yesAction: goNext(1, 4),
        noAction: goNext(2, 4),
      },
      {
        question:
          "Czy czujesz, że że twoja praca musi być bezbłędna przez cały przez cały czas?",
        yesAction: goNext(3, 4),
        noAction: goNext(2, 4),
      },
      {
        question:
          "Czy uważasz, że twoja pozycja w życiu jest głównie dzięki szczęściu?",
        yesAction: goNext(3, 4),
        noAction: goNext(4, 4),
      },
      {
        question: "Czy ciągle martwisz się, że nie spełniasz oczekiwań?",
        yesAction: goNext(3, 4),
        noAction: goNext(4, 4),
      },
      {
        question:
          "Czy często przepracowywać się lub nadmiernie się przygotowujesz?",
        noAction: goNext(4, 4),
        yesAction: goNext(5, 4),
      },
    ],
    [
      {
        question:
          "Czy unikasz ubiegania się o pracę, chyba że spełniasz wszystkie wymagania?",
        yesAction: showAnswer(0),
        noAction: showAnswer(1),
      },
      {
        question:
          "Czy czujesz, że ponisłeś porażkę, jeśli z trudem coś opanowywujesz?",
        yesAction: showAnswer(0),
        noAction: showAnswer(2),
      },
      {
        question: "Czy czujesz się zakłopotany, kiedy nie znasz odpowiedzi?",
        yesAction: showAnswer(2),
        noAction: showAnswer(1),
      },
      {
        question: "Czy często zostajesz do późna w pracy?",
        yesAction: showAnswer(3),
        noAction: showAnswer(4),
      },
      {
        question: "Czy masz problemy z delegowaniem zadań?",
        yesAction: showAnswer(3),
        noAction: showAnswer(5),
      },
      {
        question: "Czy jesteś mikromenadżerem?",
        yesAction: showAnswer(4),
        noAction: showAnswer(5),
      },
    ],
  ];

  const { question, yesAction, noAction } =
    questions[questionRow][questionColumn];
  return (
    <div style={styles.outer}>
      <div style={styles.question}>{question}</div>
      <div style={styles.actionContainer}>
        <div style={styles.yesContainer} onClick={yesAction}>
          Tak
        </div>
        <div style={styles.noContainer} onClick={noAction}>
          Nie
        </div>
      </div>
    </div>
  );
}

export default withRouter(Question);
