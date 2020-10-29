import React from 'react';

import styles from './style.module.css';

const ButtonB = ({
    children
}) => (
    <button type="button" className={styles.Button} >{ children }</button>
)

export default ButtonB