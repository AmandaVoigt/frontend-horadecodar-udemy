import { createContext, useReducer } from "react";
import questions from "../data/questions_complete";

const STAGES = ["Start", "Category", "Playing", "End"];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  answerSelected: false,
  score: 0,
  help: false,
  optionToHide: null,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STAGE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "START_GAME": {
      const quizQuestions = state.questions.find(
        (q) => q.category === action.payload
      )?.questions;

      return {
        ...state,
        questions: quizQuestions || [],
        gameStage: STAGES[2],
        currentQuestion: 0,
        score: 0,
      };
    }

    case "REORDER_QUESTIONS":
      return {
        ...state,
        questions: [...state.questions].sort(() => Math.random() - 0.5),
      };

    case "CHANGE_QUESTION": {
      const nextQuestion = state.currentQuestion + 1;
      const endGame = !state.questions[nextQuestion];

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[3] : state.gameStage,
        answerSelected: false,
        help: false,
        optionToHide: null,
      };
    }

    case "NEW_GAME":
      return { ...initialState };

    case "CHECK_ANSWER": {
      if (state.answerSelected) return state;

      const { answer, option } = action.payload;

      return {
        ...state,
        score: state.score + (answer === option ? 1 : 0),
        answerSelected: option,
      };
    }

    case "SHOW_TIP":
      return {
        ...state,
        help: "tip",
      };

    case "REMOVE_OPTION": {
      const question = state.questions[state.currentQuestion];

      const optionToHide = question.options.find(
        (opt) => opt !== question.answer
      );

      return {
        ...state,
        optionToHide,
        help: true,
      };
    }

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};