import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "../../redux/counter/counterAction"
import { useState } from "react"

const Counter = () => {

    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState(0)

    const addValue = Number(incrementAmount) || 0

    const resetAll = () => {
       setIncrementAmount(0)
       dispatch(reset())
    }

    return (
      <section className="container mt_10">
        <p>{count}</p>
          <div className="">
              <button className="mr_2" onClick={() => dispatch(increment())}>+</button>
              <button onClick={() => dispatch(decrement())}>-</button>
          </div>
          <div className="mt_5">
            <input 
                  type="text" 
                  value={incrementAmount}
                  onChange={(e) => setIncrementAmount(e.target.value)}
              />
          </div>

          <div className="mt_5">
            <button className="mr_2" onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(incrementByAmount(addValue))}>Add</button>
            <button className="mr_2" onClick={() => dispatch(resetAll())}>Reset All</button>
          </div>
      </section>
    )
}

export default Counter
