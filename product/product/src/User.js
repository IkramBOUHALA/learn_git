import React from "react";
const User = ({ userName }) => {
    return (
        
        <div>
        
          <p style={{ color: "purple", fontSize: 60 , textAlign: 'center' }}>Hello, {userName ? userName : 'there'}!</p>
        </div>
      
    );
  };
  export default User