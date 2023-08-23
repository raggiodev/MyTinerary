import React from "react";
import {NavLink} from "react-router-dom";

const UnderConstruction = () => {
  return (
    <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <section style={{textAlign: 'center', marginBottom: '2rem'}}>
        <h1>Page Under Construction</h1>
        <h3>We´re working on bringing you new content</h3>
        <p>Check back later for updates!</p>
        <NavLink to="/" style={{textDecoration: 'none', color: '#333'}}>
          <button style={{marginTop: '1rem', padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid #333', backgroundColor: 'transparent', cursor: 'pointer'}}>
            Go Back Home
          </button>
        </NavLink>
      </section>
      <aside style={{minHeight: '10vh', height: '40vh', display: 'flex', justifyContent: 'center'}}>
        <div style={{border: '2px dashed #888', padding: '1rem', borderRadius: '8px'}}>
          <p>No images available</p>
        </div>
      </aside>
    </main>
  );
}

export default UnderConstruction;