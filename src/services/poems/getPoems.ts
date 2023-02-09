import {
  // prettier-ignore
  collection,
  query,
  getFirestore,
  getDocs,
} from 'firebase/firestore';

import app from 'services/firebaseConfig/firebaseSetup';

const getPoems = () => {
  const db = getFirestore(app);
  return getDocs(query(collection(db, 'poems')));
};

export default getPoems;
