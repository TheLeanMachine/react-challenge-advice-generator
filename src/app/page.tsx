"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Advice } from '../components/Advice'

function AdviceRenderer({ apiJson }) {

  if (null === apiJson) {
    return (
      <Advice adviceId={'???'} message={'Loading adivce from REST API...'} />
    )
  } else {
    return (
      <Advice adviceId={apiJson.slip.id} message={apiJson.slip.advice} />
    )
  }  
}

export default function AdviceGenerator() {

  let [apiJson, setApiJson] = useState(null);

  useEffect(loadAndRenderAdvice, []); // intentionally no dependiecies: Only run once!


  function loadAndRenderAdvice() {
    window.fetch('https://api.adviceslip.com/advice')
      .then((response) => {
        if (response.ok) {
          console.log(`>>> Request success (HTTP-status code '${response.status}')`);
          
          response.json()
            .then((adviceFromApi) => {
              console.log(`>>> JSON response body: ${JSON.stringify(adviceFromApi)}`)
              setApiJson(adviceFromApi);
            });  
    
        } else {
          console.log('>>> request failure');    
          // TODO: Better error handling - read "Message"-object; see https://api.adviceslip.com/#object-message          
          Promise.reject(`An error occured performing the HTTP request to the REST API. HTTP-status code is '${response.status}', message is '${response.statusText}'.`);
        }    
      })
      .catch((err) => console.log(`Unexpected error fetching an advice from REST API: ${err}`));
  }

  return (
    <main style={{ width: '400px', padding: '0 0 50px 0' }} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-0 border-black border-solid">

      <div className="rounded-lg bg-[#313a49] text-center border-0 border-white border-solid">

        <AdviceRenderer apiJson={apiJson} />

        <div style={{ padding: '20px 0 60px 0' }} className="border-0 border-white border-solid">
          <Image
            src="/images/pattern-divider-desktop.svg"
            alt="---"
            width={444}
            height={16}
          />
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-26 p-6 rounded-full bg-[#53ffac]">
          <button onClick={loadAndRenderAdvice}>
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

