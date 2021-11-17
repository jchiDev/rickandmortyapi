import React, {useState, useEffect} from 'react';
import { Container, Row, Alert, Button } from 'react-bootstrap';
import { FaSearch, FaRedoAlt } from "react-icons/fa";

// REDUX
import { useSelector , useDispatch} from 'react-redux';
import { setItems, delItems, setResults, delResults, setSearch, delSearch } from '../../redux/actions/itemActions'

// componentes
import Item from "./Item";

const ItemLista = () => {

  const items = useSelector((state) => state.allItems.items);
  const results = useSelector((state) => state.allItems.results);
  const textSearch = useSelector((state) => state.allItems.search);
  const dispatch = useDispatch();
  const api = 'https://rickandmortyapi.com/api/character/';

  // SetState
  const [noData, setNoData] = useState(null);
  const [sentQuery, setSentQuery] = useState(false);
  const [stringQuery, setStringQuery] = useState('');
  const [name, setName] = useState('');

  // Fetch Items
  const fetchItems = endpoint => {
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setNoData(true);
          dispatch(delItems());
        } else {
          setNoData(false);
          setSentQuery(false);
          dispatch(setItems(data));
          dispatch(delResults());
          dispatch(delSearch());
          setName('');
          document.getElementById("form-search").reset();
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setNoData(true);
      });
  };
  
  // Fetch Results
  const fetchResults = endpoint => {
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setNoData(true);
          dispatch(delResults());
          dispatch(delItems());
        } else {
          setNoData(false);
          dispatch(setResults(data));
          dispatch(delItems());
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setNoData(true);
      });
  };

  useEffect(() => {
    if(results.length === 0){

      fetchItems(api);
    }
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    if (!name) {
      setSentQuery(false);
      alert('Especifica algún nombre en el campo');
    } else {
      setSentQuery(true);
      dispatch(setSearch(name));
      // crear api query
      const query = `${api}?name=${name}`;
      fetchResults(query);
      // StringQuery
      const templateQuery = `${name}`;
      setStringQuery(templateQuery);
    }
    
  };

  const handleNameChange = event => {
    setName(event.target.value)
  };

  return (
    <Container>
      <Row>
        {/* <h1>Lista de personajes</h1> */}
        <div className="container mb-4 align-items-center">
          <form id="form-search" className="row" onSubmit={onSubmit}>
            <div className="col-auto">
              <label htmlFor="name" className="col-form-label">Nombre</label>
            </div>
            <div className="col-auto">
              <input
              id='name'
              className='form-control'
              type='search'
              placeholder='Buscar por nombre'
              name='characterName'
              onChange={handleNameChange}></input>
              {textSearch ? (
                <small className="text-muted form-text">Búsqueda actual: {textSearch}</small>
              ) : (
                ''
              )}
            </div>
            <div className="col-auto">
              <Button
              varian="primary"
              type='submit'>
                <FaSearch /> Buscar
              </Button>
              {' '}
              <Button variant="light" onClick={() => fetchItems(api)}>
                <FaRedoAlt /> Ver todo
              </Button>
            </div>
          
          </form>
        </div>
      </Row>

      <Row>
        {sentQuery || textSearch ? (
          <p><small>Número de resultados: {results.length}</small></p>
        ) : (
          ''
        )}

        {noData ? (
          <div className="text-center mt-4">
            <Alert variant='dark'>
              <h3 className='search-status--message'>No encontramos resultados para tu búsqueda ...</h3>
            </Alert>
          </div>
        ) : (
          ''
        )}

        {items.length > 0 ? <Item results={items} /> : <Item results={results} />}

        
      </Row>
    </Container>
  );
};

export default ItemLista