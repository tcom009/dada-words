import { useState, useRef } from 'react';

interface Props {
  wordsList: string[];
}

const DragList = ({ wordsList }: Props) => {
  const [words, setWords] = useState(wordsList);
  // const [newWordItem, setNewWordItem] = useState("")

  //save reference for dragItem and dragOverItem
  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);

  const handleSort = () => {
    //duplicate items
    let _words = [...words];

    //remove and save the dragged item content
    const draggedItemContent = _words.splice(dragItem.current, 1)[0];

    //switch the position
    _words.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setWords(_words);
  };

  return (
    <div>
      {words.map((item, index) => (
        <div
          key={index}
          // className="list-item"
          draggable
          onDragStart={() => (dragItem.current = index)}
          onDragEnter={() => (dragOverItem.current = index)}
          onDragEnd={handleSort}
          onDragOver={(e) => e.preventDefault()}
        >
          <h3>{item}</h3>
        </div>
      ))}
    </div>
  );
};

export default DragList;
