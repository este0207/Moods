'use client'
import Image from "next/image";
import styles from "./page.module.css";
import "react-chat-elements/dist/main.css"
import { MessageBox } from "react-chat-elements";
import { useState } from "react";
import { Input } from 'react-chat-elements'





function OnResponse(param) {
  if (param != '') {
    return (
      <MessageBox
        className={styles.message}
        position='left'
        title='Serena'
        type='text'
        text={param}
        date={new Date()}
        replyButton={true}
      />
    )
  }
  else {
    return (
      <div>
        <p>Submit Something</p>
      </div>
    )
  }


}

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [output, setOutput] = useState('')

  const handleSubmit = async (e) => {
    console.log('test')
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/ai/serenafree', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })
      if (!response.ok) {
        throw new Error('Serena is sleeping...');
      }

      const result = await response.json();

      console.log(result)
      setOutput(result.response)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={styles.maindiv}>
      <div>
        {OnResponse(output)}

      </div>
        <form onSubmit={handleSubmit}>
          <Input
          className={styles.input}
            placeholder="Write a message..."
            type="text" value={prompt}
            rightButtons={ <div className={styles.submit}><button   type="submit">submit</button></div>
            }
            onChange={(e) => setPrompt(e.target.value)}

            multiline={true}

          />
        </form>

    </div>



  );
}
