import React from 'react'
import Todo from './State Hooks/Todo'
import Counter from './State Hooks/Counter'
import Form from './State Hooks/Form'
import Toggle from './State Hooks/Toggle'
import ObjectArrays from './State Hooks/ObjectArrays'
import EffectIntro from './Effect hooks/EffectIntro'
import ContextDemo from './Context Hook/ContextDemo'
import UseContext from './Context Hook/UseContext'
import ReducerDemo from './Reducer Hook/ReducerDemo'
import MemoDemo from './Memo hook/MemoDemo'
import CounterApp from './Redux/Redux toolkit/CounterApp'
import Timer from './Effect hooks/Timer'
import DataFetch from './Effect hooks/DataFetch'
import SearchBar from './State Hooks/SearchBar'
import Contest from './Contest/Contest'
import Demo from './Contest/Demo'
import Chip from './Namaste Dev/Chip'
import AutoSave from './Namaste Dev/AutoSave'
import ReactMemo from './React Memo/ReactMemo'
import CustomHook from './Custom Hooks/CustomHook'
import OddorEven from './Namaste Dev/OddorEven'
import AutoSaveForm from './Namaste Dev/AutoFormSave'
import TodoApp from './Namaste Dev/TodoApp'
import Pagination from './Nitesh Sir Questions/Pagination'

const App = () => {

  // const data = [
  //   {name : "Prisans" , description: "Student"},
  //   {name : "Shivam" , description : "Accio Student"}
  // ]


  const data = [
    "Apple","Banana","Orange","Grapes","Mango",
    "Pineapple","Papaya","Kiwi","Peach","Berry"
  ]
  
  return (
    <div>
        {/* <-------------------useState-------------------> */}

        {/* <Counter/> */}
        {/* <Todo/> */}
        {/* <Form/> */}
        {/* <Toggle/> */}
        {/* <ObjectArrays/> */}
        {/* <SearchBar/> */}
        {/* <--------------------useEffect---------------->      <EffectIntro/> */}
        {/* <Timer/> */}
        {/* <DataFetch/> */}

        {/* <-------------------useContext---------------> */}

        {/* <ContextDemo.Provider value={{name:"prisans",age:22}}>
            <UseContext/>
        </ContextDemo.Provider> */}

        {/* <----------------------useReducer-----------> */}

        {/* <ReducerDemo/> */}

        {/* <MemoDemo/> */}


        {/* <CounterApp/> */}

        {/* <Contest value={data} /> */}
        {/* <Demo/> */}

        {/* <-----------------Namaste dev--------------------------> */}

        {/* <Chip/> */}
        {/* <AutoSave/> */}
        {/* <OddorEven/> */}
        {/* <AutoSaveForm/> {pass data as objects in string} */}
        {/* <TodoApp/> */}

        {/* <-------------------------React.memo---------------------> */}

        {/* <ReactMemo/> */}


        {/* <---------React custom hooks-----------> */}

        {/* <CustomHook/> */}

        {/* <-----------------Nitesh Sir questions---------------> */}

        <Pagination data={data}/>

    </div>
  )
}

export default App