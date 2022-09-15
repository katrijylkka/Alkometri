import './App.css';
import {useState} from 'react'

// Syötettävät arvot määritelty

function App() {
  const [weight,setWeight] = useState (0)
  const [bottles,setBottles] = useState (0)
  const [time,setTime] = useState (0)
  const [gender,setGender] = useState ('male')
  const [result, setResult] = useState (0)


// Funktio jonka avulla voidaan määrittää kumpi sukupuoli tulostetaan

  function finalResult(e) {
    e.preventDefault(); 
    console.log(bottles)
    console.log(weight)
    console.log(time)
    


    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams -(burning * time)

    console.log(gramsLeft)
     let perMill = 0;
    if (gender ==='male') {
      perMill = gramsLeft / (weight * 0.7)
    }
    else {
      perMill =  gramsLeft /(weight * 0.6)
    }

    setResult(perMill)

  }
 

  return (
  <>
    <form onSubmit={finalResult}>
      <h1>Calculatin alcohol blood level</h1>
      <div>
        <label>Weight</label>
        <input name="weight" type="number" step= "1" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div>
        <label>Bottles</label>
        <input name="bottles" type="number" value={bottles} onChange={e => setBottles(e.target.value)}></input>
      </div>
      <div>
        <label>Time</label>
        <input name="time" type="number" value={time} onChange={e => setTime(e.target.value)}></input>
      </div>
      <div>
        <p>Gender:</p>
        <input type="radio" value="male" name="gender" defaultChecked onChange= {e => setGender(e.target.value)} /><label>Male</label>
        <input type="radio" value="female" name="gender" onChange= {e => setGender(e.target.value)} /><label>Female</label>
      </div>
      <div>
        <output>{result.toFixed(2)}</output>
      </div>
      <button>Calculate</button>
    </form>
  </>
  );
}

export default App;

