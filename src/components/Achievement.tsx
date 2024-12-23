"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import hackCBS from '@/pictures/hackCBS.jpg'
import cbs from '../pictures/cbs.jpg'
import hackBFCET from '@/pictures/hackBFCET.jpg'
import hackbfgi from '@/pictures/hackbfgi.jpg'
import hackcb from '@/pictures/hackcb.jpg'
import cbspannel from '@/pictures/cbspannel.jpg'


export function Achievement() {
  
  return <div className=" mt-[50rem]"><HeroParallax  products={products} />
  </div>
}
export const products = [
  {
    title: "Top 10 At hackCBS",
    link: "/",
    thumbnail:
      hackCBS,
  },

  {
    title: "Participated in BFCET HACk at BFGI",
    link: "/",
    thumbnail:
      hackBFCET,
  },
  {
    title: "Top 10 At hackCBS",
    link: "/",
    thumbnail:
      cbs,
  },
  {
    title: "Participated in BFCET HACk at BFGI",
    link: "/",
    thumbnail:
      hackbfgi,
  },
  {
    title: "Top 10 At hackCBS",
    link: "/",
    thumbnail:
      hackCBS,
  },

  {
    title: "Participated in BFCET HACk at BFGI",
    link: "/",
    thumbnail:
      hackBFCET,
  },
  {
    title: "Top 10 Ranker At hackCBS",
    link: "/",
    thumbnail:
      hackcb,
  },
 
  {
    title: "Participated in BFCET HACk at BFGI",
    link: "/",
    thumbnail:
      hackbfgi,
  },
  {
    title: "HACK CBS",
    link: "/",
    thumbnail:
      cbspannel,
  },
]