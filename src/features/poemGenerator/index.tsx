import { Button, Grid } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import jsonWords from 'data/words.json';
import jsonArticles from 'data/articles.json';
import getRandomNumber from 'utils/getRandomNumber';
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
  disabled: boolean
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

const CreatePoem = () => {
  const [state, setState] = useState<StateModel>(initialState);
  const { randomWordList, userSelectedWords } = state;
  const words = jsonWords as string[];
  const articles = jsonArticles as string[];
  const refreshTime = 7000;

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

  const getNewWords = useCallback(() => {
    const selectWords = (wordList: string[], maxListLenght: number) => {
      const { length } = wordList;
      const randomWordList: RandomButtonProps[] = [];
      let cicleCounter = 0;
      for (cicleCounter; cicleCounter < maxListLenght; cicleCounter++) {
        const randomPosition = getRandomNumber(length);
        randomWordList.push({
          word: wordList[randomPosition],
          color: getColor(),
          variant: getVariant(),
          size: getSize(),
          disabled: false,
        });
      }
      return randomWordList;
    };
    const newWords = selectWords(words, 7);
    const newArticles = selectWords(articles, 3);
    const shuffledWordList = [...newWords, ...newArticles].sort(() => {
      return Math.random() - 0.5;
    });
    setState((prevState) => ({
      ...prevState,
      randomWordList: shuffledWordList,
    }));
  }, [articles, words]);

  useEffect(() => {
    getNewWords();
    const refreshInterval = setInterval(getNewWords, refreshTime);
    return () => clearInterval(refreshInterval);
  }, [getNewWords]);

  const addWord = (word: string, wordIndex: number) => {
    const newList = [...userSelectedWords];
    newList.push(word);
    const newRandomList = [...randomWordList];
    newRandomList[wordIndex]={ ...newRandomList[wordIndex], disabled: true}
    setState({
      ...state,
      userSelectedWords: newList,
      randomWordList: newRandomList,
    });
  };

  return (
    <Grid sx={{ m: 10 }} container>
      <Grid xs={12} item>
        Palabras Selecionadas:
        {userSelectedWords.map((word: string, index: number) => (
          <div key={word}>{word}</div>
        ))}
      </Grid>
      <Grid alignContent="center" direction="row" container>
        {randomWordList.map((word: RandomButtonProps, index: number) => (
          <Grid xs={3} alignContent="center" key={nanoid(5)}>
            <Button
              variant={word.variant}
              color={word.color}
              size={word.size}
              sx={{ m: 1 }}
              onClick={() => addWord(word.word, index)}
              disabled={word.disabled}
            >
              {word.word}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default CreatePoem;
