import React, { useState } from 'react';
import styles from './Email.module.css';

const Email = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(email)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
      // handle valid email here
    }
  };

  return (
    <>
    <p>Be the first to know! Share your email and We'll notify you when it's live</p>
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Please enter your email id"
          className={styles.inputField} // Apply input field styles
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className={styles.submitButton}>Notify Me</button>
      </form>
      {error && <p className={styles.errorMsg}>{error}</p>}
    </div>
    </>
  );
};

export default Email;
