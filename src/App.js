import { useState, useEffect } from 'react';
import Form from "./Components/Form/Form"
import Grid from "./Components/Grid/Grid"

const App = () => {
  const [selectedDataSet, setSelectedDataSet] = useState('');

  const submitHandler = (selectedDataSet) => {
    setSelectedDataSet(selectedDataSet);
  }


  return (
    <div>
      <Form onSubmitHandler={submitHandler} />
      <Grid filterData={selectedDataSet} />
    </div>
  );
}

export default App