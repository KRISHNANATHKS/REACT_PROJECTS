import { useEffect, useState } from 'react';
import styled from 'styled-components'
import SearchResult from './SearchResult/SearchResult.jsx';

export const BASE_URL="http://localhost:9000";

function App() {

  const [data,setdata]=useState(null);
  const [error,seterror]=useState(false);
  const[loading,setloading]=useState(false);
  const[filtered,setfiltered]=useState(null);
  const[sorted,setsorted]=useState(null);



  useEffect(()=>{
          const fetchdata= async ()=>{
        
        setloading(true);

      try {
        
        const url = await fetch(BASE_URL);
        const json = await url.json();
        setdata(json);
        setfiltered(json)
        setloading(false);

      } catch (error) {
        
        seterror("Unable to load the Data");
      }
  }
  fetchdata();

  },[]);

  console.log(data);

  const searchFood=(e)=>{

      const searchValue = e.target.value;
      console.log(searchValue);

      if (searchValue==" "){
        setfiltered(null);
        return;
      }
      const filter=data?.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase()))
      setfiltered(filter);
  };

  const sortFood=(type)=>{
      setsorted(type);
      if(type=="all"){
        setfiltered(data);
        return;
      }
       const filter=data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()))
      setfiltered(filter); 
  }


  
  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading....</div>

  return (
    <>
    <Maincontainer>
       <Topcontainer>
        <div className='logo'>
            <img src="/public/images/logo.svg" alt="logo" />
        </div>
        <div className='search'>
          <input onChange={searchFood} type="text" placeholder= 'Search Food' />
        </div>
       </Topcontainer>
       <Filtercontainer>
        <Button onClick={()=>sortFood("all")}>All</Button>
        <Button onClick={()=>sortFood("breakfast")}>Breakfast</Button>
        <Button onClick={()=>sortFood("lunch")}>Lunch</Button>
        <Button onClick={()=>sortFood("dinner")}>Dinner</Button>  {/* can use array to store the name and type then use map to that array for the buttons */}
       </Filtercontainer>
    </Maincontainer>
    <SearchResult data={filtered}/>
    </>
    
  )
}

export default App

export const Maincontainer= styled.div`
background-color: #323334;
width: 100%;
margin: 0 auto;
`;

const Topcontainer=styled.section`

min-height: 140px;
display: flex;
justify-content: space-between ;
align-items: center;
padding: 60px;

.search{
  input{
    background-color: transparent;
    color: white;
    min-height: 40px;
    border: 1px solid red;
    border-radius: 4px;
    font-size: 16px;
    padding-left: 14px;
    margin-top: 12px; /*you can give &::placeholder so the color change of place holder here  */
  }
}
.logo{
  margin-top: 12px;
}

/* to fix in small devices*/

@media(0<width<600px){
  flex-direction: column;
}

`;

const Filtercontainer=styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom:30px ;
`;
export const Button=styled.button`
 background-color:#ff4343 ;  /* $ then compare with a prop so background switches when selected the button with "?" */
 color: white;
 padding: 6px 12px;
 border: none;
 border-radius: 4px;
 border: 1px solid transparent;
 cursor: pointer;
 transition: 0.3s ease-in-out;
 &:hover{
  background-color: #751818;
  border: 1px solid white;
  transform: scale(1.05);
 }
`;

