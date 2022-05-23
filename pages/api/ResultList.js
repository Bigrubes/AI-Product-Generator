import React, {useState} from 'react'
import ResultForm from './ResultForm'
import Result from './Result'

const ResultList = () => {
  const [results, setResults] = useState([])
    const [data, setData] = useState({results:[]});
  
    const addItemTodata = (result) => {
      const results = data['result'];
      results.push(result);
      setData({results: results})
      console.log(data)
    }

  const addResult = result => {
    if (!result.text || /^\s*$/.test(result.text))
    return;
  
  const newResults = [result, ...results]
  setResults(newResults);
  console.log(...results)
  }
  const completeResult = id => {
    const updatedResults = results.map(result =>{
      if (result.is === id){
        result.isComplete = !result.isComplete;
      }
      return result;
    })
    setResults(updatedResults)
  }
  return (
    <div>
    <ResultForm onSubmit={addResult} resultForm={addItemTodata}/>
    <Result results={results} completeResult={completeResult}/>
    </div>
  )
}

export default ResultList