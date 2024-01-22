import React, { useEffect } from 'react'
import CardContact from './CardContact';
import koushal from '../images/heads/koushal.webp'
import suraj from '../images/heads/suraj.webp'
import sikhar from '../images/heads/sikhar.webp'
import ankush from '../images/heads/ankush.webp'
import manish from '../images/heads/manish.webp'
import shaukat from '../images/heads/shaukat.webp'
import shreyash from '../images/heads/shreyash.webp'
import rahul from '../images/heads/rahul.webp'
import jeevan from '../images/heads/jeevan.webp'
import prakhar from '../images/heads/prakhar.webp'
import shivam from '../images/heads/shivam.webp'
import megha from '../images/heads/megha.webp'
const  ContactUs=()=> {
  useEffect(() => {
    window.scroll(0,0)
    
  }, []);
  return (
    <div className=' mt-24 w-full bg-darkSecondary pb-5 '>
      <h1 className='text-center text-3xl md:text-5xl font-bold font-nunito text-darkMain my-3 p-4'>Our Team</h1>
    
      <div className='flex justify-center items-center'>
        <CardContact name="Koushal Kumar" position="Vice President" email="kaushaljackson.kj@gmail.com" phone="8709192811" url={koushal} />
      </div>
        {/* <CardContact name="S.S.S Vardhan" position="UG Representative" email="sesettyssvardhan@gmail.com" phone="8639789316" url={Vardhan} /> */}
      <div className='flex flex-col gap-2 lg:flex-row justify-around items-center mt-10 max-w-[1500px] mx-auto'>
        <CardContact name="Suraj Padmanabh Shet" position="PG Representative" email="surajshet5555@gmail.com" phone="8660292319" url={suraj} />
        <CardContact name="Ankush Kumar" position="Fugacity Co-ordinator" email="ankumar505@gmail.com" phone="8651812624" url={ankush} />
      </div>
      <h1 className='text-center font-nunito text-darkMain  text-2xl font-bold my-3 p-4 underline'>Team Heads</h1>
      
      <div id='tech' className='flex flex-col gap-2 lg:flex-row justify-around items-center mt-5 max-w-[1500px] mx-auto'>
        <CardContact name="Shaukat Ali" position="Web Team Head" email="shau8122@gmail.com" phone="7654831436" url={shaukat} />
        <CardContact name="Manish vaghmashi" position="Core Team Head" email="manishvaghamashi1011@gmail.com" phone="9316614261" url={manish} />
        <CardContact name="Shreyash Jay" position="Core Team Head" email="shreyashjay5@gmail.com" phone="9608407527" url={shreyash} />
      </div>
      <div id='design' className='flex flex-col gap-2 lg:flex-row justify-around items-center mt-5 max-w-[1500px] mx-auto'>
        <CardContact name="Shikhar Samrat" position="General Secretary" email="shikharsamrat22@gmail.com" phone="6205324328" url={sikhar} />
        <CardContact name="Rahul Rajwar" position="Design Team head" email="rahulbilturajwar@gmail.com" phone="8092573150" url={rahul} />
        <CardContact name="Thummalapelli Jeevan Kumar" position="Design Team Head" email="jeevankumar.t1709@gmail.com" phone="9121931784" url={jeevan} />
      </div>
      <div className='flex flex-col lg:flex-row gap-2 justify-around items-center mt-5 max-w-[1500px] mx-auto'>
        <CardContact name="Prakhar Jain" position="Sponsorship Team Head" email="Prakhar.jain3333@gmail.com" phone="7727082097" url={prakhar} />
        <CardContact name="Megha Singh" position="Sponsorship Team Head" email="meghasingh1004@gmail.com" phone="8271226399" url={megha} />
        <CardContact name="Shivam Kumar Sharma" position="Sponsorship Team Head" email="iamshivamkumarsharma@gmail.com" phone="9939893600" url={shivam} />
      </div>

    </div>
  )

}

export default ContactUs;
