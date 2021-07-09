import Head from './Head'
import Join from './Join'
import axios from 'axios';
const Demo = () => {

    const handleClick =async( ) => { 
      const a = await axios.get("https://api.jikan.moe/v3/search/anime?q=naruto")
    
      const b = await a.data

      console.log(b)

      

    }


    return (
    <div>
      <button onClick ={handleClick}>
      click
      </button>


      </div>
      
      

      
    );
  }
   
  export default Demo ;