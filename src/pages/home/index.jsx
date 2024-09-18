import  React,{useState,useCallback} from "react"

import { useNavigate } from "react-router-dom";

const HomePage =()=>
{
const[value,setValue]=useState();
const navigate=useNavigate();
const handleJoinRoom=useCallback(()=>
{
    navigate(`/room/${value}`)

},[navigate,value]);

    return (
<div style={{
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  gap: "20px", 
  padding: "30px", 
  borderRadius: "15px", 
  background: "linear-gradient(135deg, #f3ec78, #af4261)", 
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", 
  width: "350px", 
  margin: "50px auto", 
  fontFamily: "'Poppins', sans-serif"
}}>
   <h2 style={{ 
     color: "#fff", 
     margin: "0 0 15px", 
     fontWeight: "600", 
     fontSize: "24px"
   }}>Join a Room</h2>

   <input 
     type="text" 
     placeholder="Enter Room Code"
     value={value}
     onChange={(e)=> setValue(e.target.value)}
     style={{
       padding: "15px", 
       border: "none", 
       borderRadius: "10px", 
       width: "100%", 
       fontSize: "16px", 
       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
       outline: "none", 
       transition: "all 0.3s ease",
     }}
     onFocus={(e) => e.target.style.boxShadow = "0 0 10px rgba(0, 123, 255, 0.8)"}
     onBlur={(e) => e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"}
   />
   
   <button 
     onClick={handleJoinRoom}
     style={{
       padding: "15px 20px", 
       backgroundColor: "#007BFF", 
       color: "#fff", 
       border: "none", 
       borderRadius: "10px", 
       cursor: "pointer", 
       fontSize: "18px", 
       width: "100%", 
       textTransform: "uppercase", 
       letterSpacing: "1px", 
       fontWeight: "bold", 
       transition: "background 0.3s ease",
     }}
     onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
     onMouseOut={(e) => e.target.style.backgroundColor = "#007BFF"}
   >
     Join Room
   </button>
</div>



    );

};
export default HomePage;
