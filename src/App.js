import { useState, useEffect } from 'react';
import Form from "./Components/Form/Form"
import Grid from "./Components/Grid/Grid"

const App = () => {
  const [selectedDataSet, setSelectedDataSet] = useState('');

  useEffect(() => {
    console.log(selectedDataSet, "App.js");
  }, [selectedDataSet]);

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