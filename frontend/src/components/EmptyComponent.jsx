import React from 'react'
import { Image } from 'react-bootstrap'

export default function EmptyComponent({message}) {
  return (
    <div style={styles.container}>
        <div>
            <Image 
                src="/5845.jpg"
                alt='404'
                style={styles.image}
            />
        </div>
        <div style={styles.text}>{message}</div>
    </div>
  )
}

const styles = {
    container: {
      textAlign: "center",
      padding: "2rem 0",
    },
    image: {
      width: "200px",
      height: "auto",
      display: "block",
      margin: "0 auto",
    },
    text: {
      marginTop: "1rem",
      fontSize: "1.25rem",
      color: "#333",
    },
  };
