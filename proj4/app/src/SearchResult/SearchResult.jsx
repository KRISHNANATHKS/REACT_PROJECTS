import styled from "styled-components";
import { BASE_URL, Button } from "../App";


const SearchResult = ({data}) => {
  return (
      <div>
        <Foodcartcontainer>
        <Foodcart>
               {
            data?.map((food)=><NewFood key={food.name}>
              <div className="foodmenu">
                <img src={ BASE_URL + food.image} alt="food image" />
              </div>
              <div className="foodinfo">
                <div className="info">
                  <h3>
                    {food.name}
                  </h3>
                  <p>
                    {food.text}
                  </p>
                </div>
                <Button>
                  ${food.price.toFixed(2)}
                </Button>
              </div>
            </NewFood>)
          }
          
         
        </Foodcart>
       </Foodcartcontainer>
      </div>
      
  
  )
}

export default SearchResult

const Foodcartcontainer=styled.section`
  min-height: calc(100vh - 231px);
  background-image:url("/images/bg.png") ;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

      
`;

const Foodcart=styled.div`
   
      display: flex;
      width: 1200px;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      row-gap: 30px;
      column-gap: 20px;

  
`;

const NewFood=styled.div`

    width: 340px;
    height: 167px;

  border: 0.66px solid;
      border-image-source: radial-gradient(
        80.69% 208.78% at 108.28% 112.58%,
        #eabfff 0%,
        rgba(135,38,183,0) 100%
      )
       radial-gradient(
         80.38% 222.5% at -13.75% -12.38%,
        #98f9ff 0%,
        rgba(255,255,255,0) 100%
       );

       background: url(.png),
       radial-gradient(
           90.16% 143.01% at 15.28% 21.04%,
         rgba(165,238,255,0.2) 0%,
         rgba(110,191,244,0.044) 77%,
         rgba(70,144,213,0) 100%
       );
       background-blend-mode: overlay,normal;
        backdrop-filter: blur(13.18px);
        border-radius: 20px;

        display: flex;
        padding: 8px;

        .foodinfo{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: end;
          h3{
            margin-top:8px ;
            font-size: 16px;
            font-weight: 500;
          }
          p{
            margin-top: 8px;
            font-size: 12px;
          }
          Button{
            font-size:12px ;
          }
        }

`;