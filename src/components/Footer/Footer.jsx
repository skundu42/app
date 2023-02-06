import React from 'react';
import graybox from "./../../assets/images/graybox4.png";
import ellipse from "./../../assets/images/Ellipse6.png";



const Footer = () => {
    return (
        <div className="relative w-[100%] flex flex-col  items-center -z-10">
           <img
          width="20%"
          height="auto"
          className="absolute left-0 -top-44"
          src={graybox}
          alt=""
        />
            <div className="relative max-w-[1250px] w-[100%] ">
            <img
          width="60%"
          height="auto"
          className="absolute bottom-0 left-[18%] -"
          src={ellipse}
          alt=""
        />
            <footer
      class="text-white body-font"
      style={{ fontFamily: "Inter" }}
    >
      <div class="container py-24 mx-auto">

        <div class="flex lg:flex-wrap md:flex-row md:text-left text-center md:justify-between flex-col-reverse justify-center items-center ">
          {/* Subscribe block */}

          <div class="lg:w-1/4  md:w-[30%] w-[70%] px-4  lg:mb-0">
            <img src="" alt="" />
            <h2
              class="title-font font-bold text-appblue text-[20px] mb-3 tracking-wide"
              style={{ fontFamily: "Montserrat" }}
            >
              Pegasus
            </h2>
            <div class="flex   md:flex-nowrap lg:flex-wrap flex-col flex-wrap justify-center md:items-start items-center md:justify-between">
             
              <p className="text-appblue text-[16px] mb-6 cursor-default ">
                Start learning the skills for the web3 programming economy and
                get paid while you learn
              </p>
              <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white my-btn py-2 px-5 ">
                @ Leave us a message
              </button>
            </div>
          </div>
          {/* links block */}
          <div className="flex flex-wrap md:text-left text-center w-[60%]">
            <div class="lg:w-1/4 md:w-1/2 w-[100%] px-4">
              <h2 class="title-font font-bold text-appblue tracking-wide text-[18px] mb-5 cursor-default">
                Community
              </h2>
              <nav class="list-none mb-10">
                <li className="mb-4">
                  <a class="text-white hover:text-appblue cursor-pointer">
                    Linkedin Group
                  </a>
                </li>
                <li className="mb-4">
                  <a class="text-white hover:text-appblue cursor-pointer">
                    Facebook Group
                  </a>
                </li>
                <li className="mb-4">
                  <a class="text-white hover:text-appblue cursor-pointer">FAQ</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-[100%] px-4">
              <h2 class="title-font font-bold text-appblue tracking-wide text-[18px] mb-5 cursor-default">
                About us
              </h2>
              <nav class="list-none mb-10">
                <li className="mb-4">
                  <a class="text-white hover:text-appblue cursor-pointer">Meet the Team</a>
                </li>
                <li className="mb-4">
                  <a class="text-white hover:text-appblue cursor-pointer">Partners</a>
                </li>
              </nav>
            </div>
            <div class=" md:w-1/2 w-[100%] px-4">
              <h2 class="title-font font-bold text-appblue tracking-wide text-[18px] mb-5 cursor-default">
              Contacts
              </h2>
              <nav class="list-none mb-10">
                <li className="mb-4">
                  <p>
                    Feel free to get in touch with us via phone or send us a
                    message.
                  </p>
                </li>
                <li className="mb-4">
                  <p>
                     saksham@hashmaps.tech
                  </p>
                </li>
              </nav>
            </div>
          </div>

        </div>

      </div>
{/* bottom bar */}

      <div class="border-t-2 border-appblue">
        <div class="container px-5 py-10 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-appblue">
            <span class="ml-3 text-md">©  Pegasus 2022, All Rights Reserved.</span>
          </a>

          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-appblue">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-appblue">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-appblue">
            <svg fill="currentColor" stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   width="24px" height="24px">    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/></svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
            </div>
        </div>
    );
}

export default Footer;