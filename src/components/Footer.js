import React from 'react'
import '../components/Footer.css'; // Import the CSS file

function Footer() {
  return (
    <div>
        <footer className="footer">
           <div className="container">
           <p>&copy; {new Date().getFullYear()} Portfolio</p>
           </div>
       </footer>
    </div>
  )
}

export default Footer