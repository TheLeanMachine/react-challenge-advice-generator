"use client";

import React from 'react';
import Image from 'next/image';

import { Advice } from '../components/Advice'

export default function AdviceGenerator() {

  return ( // flex min-h-screen flex-col items-center justify-between p-24 bg-[#1f2631]
    <main style={{ width: '400px', padding: '0 0 50px 0' }} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-0 border-black border-solid">

      <div className="rounded-lg bg-[#313a49] text-center border-0 border-white border-solid">

        <Advice adviceId="321" message="A quote from a wise man that is really, really, really, really, long, so it enforces a line-break - Kai" />

        <div style={{ padding: '20px 0 60px 0' }} className="border-0 border-white border-solid">
          <Image
            src="/images/pattern-divider-desktop.svg"
            alt="---"
            width={444}
            height={16}
          />
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-26 p-6 rounded-full bg-[#53ffac]">
          <Image
            src="/images/icon-dice.svg"
            alt="---"
            width={24}
            height={24}
            className="m-auto"
          />
        </div>
      </div>

    </main>
  )
}

