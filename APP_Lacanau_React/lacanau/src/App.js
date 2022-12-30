import './App.css';
import Donnees from './components/Donnees.js';
import Donnees2 from './components/Donnees2.js';
import Donnees3 from './components/Donnees3.js';
import Donnees4 from './components/Donnees4.js';
import Donnees5 from './components/Donnees5.js';
import { useState } from 'react';



function App(){
  const [message, setMessage] = useState('');
  const [emoji, setEmoji] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
    if(event.target.value<50){
      setEmoji('☢️')
    }
    if(event.target.value>=50&&event.target.value<90){
      setEmoji('⭐')
    }
    if(event.target.value>=90){
      setEmoji('✨')
    }

    console.log('value is:', event.target.value);
  };
  let hourtin = Donnees(95);
  let carcan = Donnees2(0);
  let lege = Donnees3(1);
  let le_porge = Donnees4(2);
  let naujac = Donnees5(3);
  const ajd = new Date();
  const yyyy = ajd.getFullYear();
  let mm = ajd.getMonth()+1;
  let dd = ajd.getDate();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  const ajd_formate= dd + '/' + mm + '/' + yyyy;
  let valeur_input=15;
  return (
    <div className="App">
      <header className="App-header">
      <div class="barre">
        <br></br>
        <div class = "texte_header">Lacanau - qualité des eaux à la date du {ajd_formate}</div>
        <br></br>
      </div>
      </header>
      <div> <text class = "texte1">Taux de pollution du jour : </text>
      <form>
        <input type="text" id="taux_pollution" name="taux_pollution" class ="input" defaultValue={valeur_input} onChange={handleChange} value={message}/>
        <input type="submit" hidden/>
      </form>
      </div>
      <div class = "arrow"> <img alt="Une fleche" width="400" src={ require('./arrow.png') } /> </div>
      <div class = "texte2"> {emoji} </div>
      <div class = "tableau"><table>
  <tr>
    <td>Hourtin</td>
    <td>{hourtin}</td>
  </tr>
  <tr>
    <td>Lège</td>
    <td> {lege} </td>
  </tr>
  <tr>
    <td>Naujac-sur-Mer</td>
    <td> {naujac} </td>
  </tr>
  <tr>
    <td>Carcan</td>
    <td>{carcan}</td>
  </tr>
  <tr>
    <td>Le Porge</td>
    <td> {le_porge} </td>
  </tr>
  <body>
  </body>
</table></div>
    </div>
    
  );
}

export default App;
