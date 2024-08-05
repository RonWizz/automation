// components/Notification.js
import React from 'react';
import styles from './notification.module.css';

const Notification = ({ message, type }) => {
  if (!message) return null;

  return (
    <div className={`${styles.notification} ${styles[type]}`}>
      {message}
    </div>
  );
};

export default Notification;
