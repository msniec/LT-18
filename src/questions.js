import React, { useState } from 'react'
import {
  withRouter
} from 'react-router-dom'

const styles = {
  outer: {
    width: "100vw",
    height: "100vh"
  },
  question: {
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    textAlign: "center"
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
    color: "white"
  }
}

function Question(props) {
  const goNext = (column, row) => () => {
    setQuestionColumn(column)
    setQuestionRow(row)
  }
  const showAnswer = (answer) => () => {
    props.history.push(`/result/${answer}`)
  }

  const [questionRow, setQuestionRow] = useState(0)
  const [questionColumn, setQuestionColumn] = useState(0)
  const questions = [
    [
      {
        question: "Czasem przejmujesz się że nie masz wystarcząjących kompetencji by być tu gdzie jesteś?",
        yesAction: goNext(0, 1),
        noAction: goNext(1, 1),
      }
    ],
    [
      {
        question: "Uważasz innych za bardziej dojrzałych do zadania od siebie",
        yesAction: goNext(0, 2),
        noAction: goNext(1, 2)
      },
      {
        question: "Czujesz się niekomfortowo gdy ktoś chwali twoją pracę",
        yesAction: goNext(2, 2),
        noAction: goNext(3, 2)
      }
    ],
    [
      {
        question: "Używasz języka 'minimalizującego' jak np. 'wydaje mi sie', 'chyba'",
        yesAction: goNext(0, 3),
        noAction: goNext(1, 3)
      },
      {
        question: "Unikasz proszenia o podwyżkę",
        yesAction: goNext(2, 3),
        noAction: goNext(3, 3),
      },
      {
        question: "Stawiasz sobie nieosiągalne cele",
        yesAction: goNext(4, 3),
        noAction: goNext(3, 3)
      },
      {
        question: "Czy uważany jesteś za perfekcjoniste",
        yesAction: goNext(4, 3),
        noAction: goNext(5, 3)
      },
    ],
    [
      {
        question: "Uważasz że ludzie prawią tobie pochwały tylko bo są mili",
        yesAction: goNext(1, 4),
        noAction: goNext(0, 4)
      },
      {
        question: "Uważasz że twój sukces jest głownie dziełem zewnętrznych czynników (dobre kontakty, zbieg okoliczności)",
        yesAction: goNext(1, 4),
        noAction: goNext(2, 4)
      },
      {
        question: "Uważasz że twoja praca musi być bezbłedna cały czas",
        yesAction: goNext(3, 4),
        noAction: goNext(2, 4)
      },
      {
        question: "Uważasz że twoje miejsce w życiu zawdzięczasz głównie szczęściu?",
        yesAction: goNext(3, 4),
        noAction: goNext(4, 4)
      },
      {
        question: "Martwisz się że nie spełniasz postawionych wymagań",
        yesAction: goNext(3, 4),
        noAction: goNext(4, 4)
      },
      {
        question: "Czy czętso się przepracowujesz?",
        noAction: goNext(4, 4),
        yesAction: goNext(5, 4)
      }
    ],
    [
      {
        question: "Czy unikasz zkładania CV do firm chyba że spełniasz wszystkie wymagania?",
        yesAction: showAnswer(0),
        noAction: showAnswer(1)
      },
      {
        question: "Uważasz że poniosłeś porażkę jeśli nauka czegoś nie idzie ci jak z płatka?",
        yesAction: showAnswer(0),
        noAction: showAnswer(2)
      },
      {
        question: "Masz wrażenie że do wszystkiego musisz dojść sam",
        yesAction: showAnswer(2),
        noAction: showAnswer(1)

      },
      {
        question: "Często zostajesz w pracy do późna?",
        yesAction: showAnswer(3),
        noAction: showAnswer(4)
      },
      {
        question: "Masz problem z delegowaniem zadań?",
        yesAction: showAnswer(3),
        noAction: showAnswer(5)
      },
      {
        question: "Czy jesteś mikromenadżerem?",
        yesAction: showAnswer(4),
        noAction: showAnswer(5)
      }
    ]
  ]

  const { question, yesAction, noAction } = questions[questionRow][questionColumn]
  return <div style={styles.outer}>
    <div style={styles.question}>
      {question}
    </div>
    <div style={styles.actionContainer}>
      <div style={styles.yesContainer} onClick={yesAction}>Tak</div>
      <div style={styles.noContainer} onClick={noAction}>Nie</div>
    </div>
  </div>
}

export default withRouter(Question)