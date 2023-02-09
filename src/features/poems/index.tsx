import { useEffect, useCallback, useState } from 'react';
import getPoems from 'services/poems/getPoems';
import simpleQueryReduce from 'services/simpleQueryReducer';
import PoemCard from './PoemCard';

interface StateModel {
  loading: boolean;
  data: any;
}

const initialState = {
  loading: false,
  data: null,
};

const PoemList = () => {
  const [state, setState] = useState<StateModel>(initialState);
  const { data, loading } = state;
  const getData = useCallback(() => {
    getPoems()
    .then((response) => {
      const _data = simpleQueryReduce(response);
      setState({ data: _data, loading: false });
    })
    .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setState((prevState) => ({ ...prevState, loading: true}))
    getData();
  }, [getData]);

  if (loading) {
    return <div style={{ textAlign: 'center', margin: 10 }}> Cargando </div>;
  }
  if (!data) {
    return (
      <div style={{ textAlign: 'center', margin: 10 }}>
        {' '}
        No se han encontrado poemas{' '}
      </div>
    );
  }

  return (
    <div>
      {data.map((item: any) => (
        <div key={item.id}>
          {' '}
          <PoemCard poem={item.poem} author={item.author} />
        </div>
      ))}
    </div>
  );
};

export default PoemList;
