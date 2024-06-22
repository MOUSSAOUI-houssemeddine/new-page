import React from 'react'
import herobg from "../assets/images/hero-bg.png";
import heroimg01 from "../assets/images/hero-img01.png";
import heroimg02 from "../assets/images/hero-img02.png";
const WhoWeAre = () => {
  return (
    <div className="flex flex-col  items-center justify-between ">
<header className="flex bg-darkGreen1 h-full w-full text-white  py-4 ">
        <button> --- Who We Are !</button>

      </header>
<h1 className="text-[36px] leading-[46px] text-darkGreen3 font-[800] mt-4 ml-4 ">
                  {" "}
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text-grey mt-4">Years of Experience</p>
                <div className="flex gap-[30px] justify-end" >
              <div >
                <img className="w-full" src={herobg} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroimg01} alt="" className="w-full mb-[30px] " />
                <img src={heroimg02} alt="" className="w-full " />
              </div>
              
            </div>
            <p className="text-grey mt-4 ">This is some of our Services</p>
            <div className="mt-[30px]">
                <img src="" alt="" className="rounded " />
                <img src="" alt="" className="" />
              </div>
              
      <div className="px-4 mx-auto max-w-screen-md ">
        <h2 className="heading text-center text-darkGreen3">Contact Us</h2>
        <p className="mb-8  font-light text-center ">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label html For="email" className="text-darkGreen3">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form__input mt-1"
            />
          </div>
          <div>
            <label html For="subject" className="text-darkGreen3">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you "
              className="form__input mt-1"
            />
          </div>
          <div className="col-span-2">
            <label html For="message" className="text-darkGreen3">
              Your Message
            </label>
            <textarea
              rows="6"
              type="text"
              id="message"
              placeholder="How can we help you today?"
              className="form__input mt-1"
            />
          </div>
          <button type="submit" className=" rounded w-28 h-16 bg-darkGreen3 text-white">
            Submit
          </button>
        </form>
      </div>
              
    </div>
  )
}

export default WhoWeAre