import { doc, setDoc, getFirestore } from 'firebase/firestore';
import app from 'services/firebaseConfig/firebaseSetup';

interface PoemModel  {
    id: string;
    createdAt: number,
    author: string,
    poem: string,
  }

const createPoem = (data: PoemModel, id: string) => {  
  const db = getFirestore(app);
  return setDoc(doc(db, 'poems', id), data);
};

export default createPoem;
