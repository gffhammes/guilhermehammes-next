import React from 'react';

function Footer() {
  function currentYear() {
    var today = new Date();
    return today.getFullYear() ;
  };

  return (
    <footer id='footer'>
      <div className="container">
        <span>© {currentYear()} | guilhermehammes</span>
      </div>
    </footer>
  )
}

export default Footer
