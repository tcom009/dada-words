import { Button, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import './App.css';
import jsonWords from './data/words.json';
import getRandomNumber from './utils/getRandomNumber';

interface StateModel {
  wordList: string[] | [];
  selectedWords: string[] | [];
}


const initialState = {
  wordList: [],
  selectedWords: []
};


const App = () => {
  const [state, setState] = useState<StateModel>(initialState);
  const { wordList, selectedWords } = state;

  useEffect(() => {
    const words= jsonWords as string[];
    const refreshTime = 3000;
    const selectedWords = () => {
      const { length }= words;
      const wordsListLenth = 10;
      const randomWordList: string[] = [];
      let cicleCounter = 0;
      for (cicleCounter; cicleCounter < wordsListLenth; cicleCounter++) {
        const randomPosition = getRandomNumber(length);
        randomWordList.push(words[randomPosition]);
      }
      return randomWordList;
    };
    const getNewWords = () =>
      setState((prevState) => ({
        ...prevState,
        wordList: selectedWords(),
      }));
    getNewWords();
    const refreshInterval = setInterval(getNewWords, refreshTime);
  }, []);

  const addWord = (word : string) => {
    const newList= [...selectedWords];
    newList.push(word);
    setState({...state, selectedWords: newList })
  }

  return (
    <Grid sx={{ m: 10 }} container>
      <Grid xs={4} alignContent="center" item>
        {wordList.map((word: string, index: number) => (
          <div key={word}>
          <Button onClick={() => addWord(word)}>
            {word}
          </Button>
          </div>
        ))}
      </Grid>
      <Grid xs={4} item>
        Palabras Selecionadas:
        {selectedWords.map((word: string, index: number) => (
          <div key={word}>{word}</div>
        ))}
      </Grid>
    </Grid>
  );
};

export default App;
