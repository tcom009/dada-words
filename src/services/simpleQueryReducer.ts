import { DocumentData } from 'firebase/firestore';

/**
 * Takes a firebase DocumentData object and extracts the data
 * @param {DocumentData} data
 * @returns {array}
 */

const simpleQueryReduce = (data: DocumentData) => {
  if (!data.empty) {
    const { docs } = data;
    const retrievedData: any[] = [];
    docs.forEach((doc: DocumentData) => retrievedData.push(doc.data()));
    return retrievedData;
  }
  return [];
};

export default simpleQueryReduce;
