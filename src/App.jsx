import React, { useState } from 'react';
import SaveAltIcon from '@material-ui/icons/SaveAlt';




const App = () => {


    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);

    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList('');
    }


    return (

        <>
            <div className='main_div'>
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder='Add Items' required value={inputList} onChange={itemEvent} />
                    <button
                        onClick={listOfItems}>
                        <SaveAltIcon />
                    </button>
                    <ol >

                        {
                            items.map((itemVal) => {
                                return (
                                    <div>
                                        <li>{itemVal}</li>

                                    </div>
                                )
                            })
                        }
                    </ol>
                </div>

            </div>
        </>
    )

}

export default App
