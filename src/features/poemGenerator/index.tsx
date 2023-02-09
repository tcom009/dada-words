import { Button, Grid } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import jsonWords from 'data/words.json';
import DragList from './DragList';
import jsonArticles from 'data/articles.json';
import getRandomNumber from 'utils/getRandomNumber';
import { nanoid } from 'nanoid';
import SendIcon from '@mui/icons-material/Send';
import CreatePoemModal from './CreatePoemModal';
import { v4 as uuidv4 } from 'uuid';
import createPoem from 'services/poems/createPoem';

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
  disabled: boolean;
}

interface StateModel {
  randomWordList: RandomButtonProps[] | [];
  userSelectedWords: string[] | [];
  modalOpen: boolean;
  author: string;
  poem: string;
  saveSuccess: boolean;
}

const initialState = {
  randomWordList: [],
  userSelectedWords: [],
  modalOpen: false,
  author: '',
  poem: '',
  saveSuccess: false,
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
  const {
    randomWordList,
    userSelectedWords,
    modalOpen,
    poem,
    author,
    saveSuccess,
  } = state;
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

  const openModal = () => setState({ ...state, modalOpen: true });
  const closeModal = () => {
    if (saveSuccess) {
      setState(initialState);
    } else {
      setState({ ...state, modalOpen: false });
    }
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
    newRandomList[wordIndex] = { ...newRandomList[wordIndex], disabled: true };
    setState({
      ...state,
      userSelectedWords: newList,
      randomWordList: newRandomList,
    });
  };

  const onDeleteWord = (index: number) => {
    const _userSelectedWords = [...userSelectedWords];
    _userSelectedWords.splice(index, 1);
    setState({ ...state, userSelectedWords: _userSelectedWords });
  };

  const setSelectedWords = (_words: string[]) =>
    setState({ ...state, userSelectedWords: [..._words] });

  const poemToString = (poemArray: string[]) => poemArray.join(' ');

  const onSavePoem = () => {
    poem && openModal();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    const _state = {
      ...state,
      [name]: value,
    };
    setState(_state);
  };

  const onCreatePoem = () => {
    const id = uuidv4();
    const data = {
      id,
      createdAt: Date.now(),
      author,
      poem,
    };
    console.log(data);
    createPoem(data, id)
      .then(() => {
        setState({ ...state, saveSuccess: true });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      poem: poemToString(userSelectedWords),
    }));
  }, [userSelectedWords]);

  return (
    <Grid sx={{ mt: 5 }} container>
      <Grid xs={12} item>
        <h2>Palabras Selecionadas:</h2>
      </Grid>
      <CreatePoemModal
        onClose={closeModal}
        open={modalOpen}
        poem={poem}
        onCreatePoem={onCreatePoem}
        handleChange={handleChange}
        saveSuccess={saveSuccess}
      />
      <DragList
        wordsList={userSelectedWords}
        setWordsList={setSelectedWords}
        onDeleteWord={onDeleteWord}
      />
      <Grid
        alignContent="center"
        justifyContent="center"
        direction="row"
        container
      >
        {randomWordList.map((word: RandomButtonProps, index: number) => (
          <Grid
            xs
            key={nanoid(5)}
            alignContent="center"
            justifyContent="center"
            textAlign="center"
            sx={{ p: 2 }}
            item
          >
            <Button
              variant={word.variant}
              color={word.color}
              size={word.size}
              onClick={() => addWord(word.word, index)}
              disabled={word.disabled}
            >
              {word.word}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid sx={{ mt: 5 }} justifyContent="center" container>
        <Button
          variant="contained"
          onClick={() => onSavePoem()}
          endIcon={<SendIcon />}
        >
          Guardar poema
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreatePoem;
