"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Advice } from '../components/Advice'


/*

Just an example, on how to use React.useEffect() directly - Kai

useEffect(() => {
  setTimeout(() => {
    setAdvice(new Advice({ adviceId: '777', message: 'yuk yuk' }))
  }, 3000)
}, [advice]);
*/







export default function AdviceGenerator() {

  let [adviceId, setAdviceId] = useState('???');
  let [message, setMessage] = useState('Loading advice from server... - Kai');


  /*setTimeout(() => {
    setAdviceId('Fooooo');
    setMessage('Baaar');
  }, 2000);*/

  useEffect(() => {
    setAdviceId('FoooooYYY');
    setMessage('BaaarYYYYY');

  }, [adviceId, message]);

  function callApi(): void {
    window.fetch('https://api.adviceslip.com/advice')
    .then((response) => {
      if (response.ok) {
        console.log(`>>> Request success (HTTP-status code '${response.status}')`);
        
        response.json()
          .then((restApiAdvice) => {
            console.log(`>>> JSON response body: ${JSON.stringify(restApiAdvice)}`)
  
            setAdviceId(restApiAdvice.id);
            setMessage(restApiAdvice.advice);
          });  
  
      } else {
        console.log('>>> request failure');
  
        // TODO: Better error handling - read "Message"-object; see https://api.adviceslip.com/#object-message          
        Promise.reject(`An error occured performing the HTTP request to the REST API. HTTP-status code is '${response.status}', message is '${response.statusText}'.`);
      }
  
    })
    .catch((err) => console.log(`Unexpected error fetching an advice from REST API: ${err}`));
  }

  function handleClick() {
    callApi();
  }

  // {advice.render()}

  return (
    <main style={{ width: '400px', padding: '0 0 50px 0' }} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-0 border-black border-solid">

      <div className="rounded-lg bg-[#313a49] text-center border-0 border-white border-solid">

        <Advice adviceId={adviceId} message={message} />

        <div style={{ padding: '20px 0 60px 0' }} className="border-0 border-white border-solid">
          <Image
            src="/images/pattern-divider-desktop.svg"
            alt="---"
            width={444}
            height={16}
          />
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-26 p-6 rounded-full bg-[#53ffac]">
          <button onClick={handleClick}>
            <Image
              src="/images/icon-dice.svg"
              alt="---"
              width={24}
              height={24}
              className="m-auto"
            />
          </button>
        </div>
      </div>

    </main>
  )
}

