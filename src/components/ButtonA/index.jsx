import React from 'react'

import styles from  './style.module.css'

const ButtonA = ({
    children
}) => (
    <button type="button" className={styles.Button} >{ children }</button>
)

export default ButtonA