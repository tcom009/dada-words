import { Button, Grid } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import './App.css';
import jsonWords from './data/words.json';
import getRandomNumber from './utils/getRandomNumber';
import NavBar from './Navbar';
import { nanoid } from 'nanoid';

type ButtonColors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

type ButtonVariants = 'contained' | 'outlined' | 'text';

type ButtonSizes = 'small' | 'medium' | 'large';

const sizeList: ButtonSizes[] = ['small', 'medium', 'large'];

interface RandomButtonProps {
  word: string;
  color: ButtonColors;
  size: ButtonSizes;
  variant: ButtonVariants;
}

interface StateModel {
  randomWordList: RandomButtonProps[] | [];
  userSelectedWords: string[] | [];
}

const initialState = {
  randomWordList: [],
  userSelectedWords: [],
};

const colorList: ButtonColors[] = [
  'primary',
  'secondary',
  'success',
  'error',
  'info',
  'warning',
];

const variantList: ButtonVariants[] = ['contained', 'outlined', 'text'];

const App = () => {
  const [state, setState] = useState<StateModel>(initialState);
  const { randomWordList, userSelectedWords } = state;
  const wordsListLenth = 10;
  const words = jsonWords as string[];
  const refreshTime = 5000;

  const getVariant = (): ButtonVariants => {
    const { length } = variantList;
    return variantList[getRandomNumber(length - 1)] as ButtonVariants;
  };

  const getColor = (): ButtonColors => {
    const { length } = colorList;
    return colorList[getRandomNumber(length - 1)];
  };

  const getSize = () => {
    const { length } = sizeList;
    return sizeList[getRandomNumber(length - 1)];
  };

  const selectedWords = useCallback(() => {
    const { length } = words;
    const randomWordList: RandomButtonProps[] = [];
    let cicleCounter = 0;
    for (cicleCounter; cicleCounter < wordsListLenth; cicleCounter++) {
      const randomPosition = getRandomNumber(length);
      randomWordList.push({
        word: words[randomPosition],
        color: getColor(),
        variant: getVariant(),
        size: getSize(),
      });
    }
    return randomWordList;
  }, [words]);
  const getNewWords = useCallback(
    () =>
      setState((prevState) => ({
        ...prevState,
        randomWordList: selectedWords(),
      })),
    [selectedWords]
  );

  useEffect(() => {
    getNewWords();
    const refreshInterval = setInterval(getNewWords, refreshTime);
    return () => clearInterval(refreshInterval);
  }, [getNewWords]);

  const addWord = (word: string, wordIndex: number) => {

    const newList = [...userSelectedWords];
    newList.push(word);
    const newRandomList = [...randomWordList];
    newRandomList.splice(wordIndex, 1);
    setState({
      ...state,
      userSelectedWords: newList,
      randomWordList: newRandomList,
    });
  };

  return (
    <>
      <NavBar />
      <Grid sx={{ m: 10 }} container>
        <Grid xs={4} alignContent="center" item>
          {randomWordList.map((word: RandomButtonProps , index: number) => (
            <div key={nanoid(5)}>
              <Button
                variant={word.variant}
                color={word.color}
                size={word.size}
                sx={{ m: 1 }}
                onClick={() => addWord(word.word, index)}
              >
                {word.word}
              </Button>
            </div>
          ))}
        </Grid>
        <Grid xs={4} item>
          Palabras Selecionadas:
          {userSelectedWords.map((word: string, index: number) => (
            <div key={word}>{word}</div>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default App;
