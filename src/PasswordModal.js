import React, { useState } from 'react';  
import './PasswordModal.css';  

const PasswordModal = ({ isOpen, onClose, onSubmit }) => {  
  const [password, setPassword] = useState('');  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    onSubmit(password);  
  };  

  return (  
    isOpen && (  
      <div className="modal-overlay">  
        <div className="modal-content fade-in">  
          <h2 className="modal-header">💌 Enter Password 💌</h2>  
          <form onSubmit={handleSubmit} className="modal-form">  
            <input  
              type="password"  
              placeholder="💖 Password 💖"  
              value={password}  
              onChange={(e) => setPassword(e.target.value)}  
              required  
            />  
            <button type="submit" className="submit-button">Submit</button>  
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>  
          </form>  
        </div>  
      </div>  
    )  
  );  
};  

export default PasswordModal;  