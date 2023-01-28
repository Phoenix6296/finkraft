import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Form from "./Components/Form/Form"
import Grid from "./Components/Grid/Grid"

const App = () => {
  const [selectedDataSet, setSelectedDataSet] = useState('');

  const submitHandler = (selectedDataSet) => {
    setSelectedDataSet(selectedDataSet);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form onSubmitHandler={submitHandler} />} />
        <Route path="/grid" element={<Grid filterData={selectedDataSet} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App