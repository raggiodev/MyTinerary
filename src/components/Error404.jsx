import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";

const Error404 = () => {
  useEffect(() => {
    document.title = "Error 404: MyTinerary";
  },
  []);

  return (
    <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <section style={{textAlign: 'center', marginBottom: '2rem'}}>
        <h1>ERROR <span style={{color: '#f00'}}>404</span></h1>
        <h3>Sorry, the page you´re looking for doesn´t exist</h3>
        <NavLink to="/" style={{textDecoration: 'none', color: '#333'}}>
          <button style={{marginTop: '1rem', padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid #333', backgroundColor: 'transparent', cursor: 'pointer'}}>
            Go Back Home
          </button>
        </NavLink>
      </section>
      <aside style={{minHeight: '10vh', height: '40vh', display: 'flex', justifyContent: 'center'}}>
        <div style={{border: '2px dashed #888', padding: '1rem', borderRadius: '8px'}}>
          <p>AÑADIR IMAGEN!!!</p>
        </div>
      </aside>
    </main>
  );
}

export default Error404;