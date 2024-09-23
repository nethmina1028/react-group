import React from "react";

function CTA(){
    return(

        <div style={{ display: 'flex',flexDirection: 'column',
            gap: '20px',  textAlign: 'center' }}>
            <h1 style={{fontSize:'36px',color: '#111928'}} >
                <b>Start your free trial today</b>
            </h1>
         

            <h1 style={{fontSize:'20px',color: '#6b7280'}}>
              Try Flowbite Platform for 30 days. No credit card required.
            </h1>
         

            <div style={{ display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
                <button  className="btn btn-lg"  style={{fontSize:'16px',color: 'white',background:'#7E3AF2',
                 borderRadius:'8px',padding:'12px,20px',width:'199px',height:'48px'}}>
                 Free trial for 30 days
                </button>
            </div>
        
        </div>
        
     )
    
    


}
export default CTA