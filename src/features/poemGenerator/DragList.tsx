import { useRef } from 'react';
import { Grid } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

interface Props {
  wordsList: string[];
  setWordsList: Function;
  onDeleteWord: Function;
}

const DragList = ({ wordsList, setWordsList, onDeleteWord }: Props) => {
  //save reference for dragItem and dragOverItem
  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);

  const handleSort = () => {
    //duplicate items
    let _words = [...wordsList];

    //remove and save the dragged item content
    const draggedItemContent = _words.splice(dragItem.current, 1)[0];

    //switch the position
    _words.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setWordsList(_words);
  };

  return (
    <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          height: '30vh',
          width: '100%',
          overflowY: 'scroll',
          border:'1px solid gray',
          borderRadius: '8px',
        }}
      >
      {wordsList.map((item, index) => (
        <Grid
          xs
          sx={{ mx: 1, alignContent: 'center', alignItems: 'center', display: 'flex'}}
          key={`${item}${index}`}
          onDragStart={() => (dragItem.current = index)}
          onDragEnter={() => (dragOverItem.current = index)}
          onDragEnd={handleSort}
          onDragOver={(e) => e.preventDefault()}
          className="word-div"
          alignItems="center"
          draggable
          item
        >
          <h3 style={{ display: 'flex'}}>
            {' '}
            {item}
            <button
              type="button"
              onClick={() => onDeleteWord(index)}
              style={{ border: 'none', backgroundColor: 'inherit' }}
            >
              <ClearIcon sx={{ fontSize: '15px', ml: 3 }} />{' '}
            </button>
          </h3>
        </Grid>
      ))}
    </div>
  );
};

export default DragList;
