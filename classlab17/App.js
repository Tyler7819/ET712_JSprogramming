import './App.css';

function App(){

    const messages =["I think, therefore I am", "I have a dream", "The only thing we have to fear is fear itself"]

    let [counter, setcounter] = useState(1)

    return(
        <div className="App">
            <h1 className='title'>Slice by student's full name</h1>
            <section className='slicewrapper'>
                <div className='numberWrapper'>
                    <div className={counter == 1 ? "active": ""}><p>1</p></div>
                    <div className={counter == 2 ? "active": ""}><p>2</p></div>
                    <div className={counter == 3 ? "active": ""}><p>3</p></div>
                </div>
        
        <p className='msg'>{counter} <em style={{"color":"orangered"}}>(messages[counter-1])</em> </p>
        
        <div className='btngroup'>
            <button onClick={function(){counter>1 ? setcounter(counter-1): setcounter(3)}}>Previous</button>
            <button onClick={function(){counter<messages.length ? setcounter(counter+1): setcounter(1)}}>Next</button>
        </div>
        </section>

        </div>
    );
}

export default App;
