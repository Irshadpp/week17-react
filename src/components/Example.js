import React from 'react'

const Example = () => {
    const [count, setCount] = useState(0);

    const reset = useCallback(()=>{

        setCount(0)
    })
    
  return (
    <div>
      <h1>{count}</h1>
      <button
      onClick={()=>setCount(count+1)}
      >increment</button>
      <button
      onClick={()=>setCount(count-1)}
      >decrement</button>
      <button
      onClick={()=>reset}
      >reset</button>
    </div>
  )
}

export default Example
