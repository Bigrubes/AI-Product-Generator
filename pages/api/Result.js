import React from 'react'

function Result({results, completeResult}) {
    
  return (
    results.map((result, index) =>{

    <div
    className={result.isComplete ? 'result-row complete' : 'result-row'}
    key={index}
    >
    <div key={result.id} onClick={() => completeResult(result.id)}>
    </div>   
    </div>
    }))
}

export default Result