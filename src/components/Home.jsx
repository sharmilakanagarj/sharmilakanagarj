import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (  
        <div className="class">
            <h2 style={{color: "red",backgroundColor: "lightblue",padding:"10px",fontfamily:"Arial"}}> Scaffold Control Sytem</h2>
        
        <div className="links">
            <Link to ="/">Home</Link>
            <Link to ="/Register">|Register</Link>
            
            
            </div>
</div>
    );
}
 
export default Home;