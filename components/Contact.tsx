import React, { useState } from "react";

import Image from "next/image";

import countries from "../assets/images/countries.png";
import cv from "../assets/images/cv.png";

import {
  PhoneIcon,
  MailIcon,
  XIcon,
  DocumentDownloadIcon,
} from "@heroicons/react/solid";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div id="contact" className="px-[100px] pb-5 pt-10 bg-[#A0D995]">
      <div className="grid grid-cols-2">
        <div>
          <div className="space-y-5">
            <h1 className="font-Oswald text-white text-6xl">CONTACT</h1>
            <div className="space-y-3">
              <div className="flex items-center space-x-5">
                <div className="bg-[#A0D995] shadow-md hover:shadow-xl rounded-full px-5 py-2 flex items-center space-x-3">
                  <MailIcon className="h-7 text-white" />
                  <p className="font-Comfortaa text-white text-lg">
                    nawfaldo.fazli@gmail
                  </p>
                </div>
                <div className="bg-[#A0D995] shadow-md hover:shadow-xl rounded-full px-5 py-2 flex items-center space-x-3">
                  <PhoneIcon className="h-5 text-white" />
                  <p className="font-Comfortaa text-white text-lg">
                    081281685570
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-5">
                <div className="bg-[#A0D995] shadow-md hover:shadow-xl rounded-full px-5 py-2 flex items-center space-x-3">
                  <svg
                    width="20px"
                    height="20px"
                    fill="white"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 310 310"
                  >
                    <g id="XMLID_801_">
                      <path
                        id="XMLID_802_"
                        d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"
                      />
                      <path
                        id="XMLID_803_"
                        d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                      />
                      <path
                        id="XMLID_804_"
                        d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
                      />
                    </g>
                  </svg>
                  <p className="font-Comfortaa text-white text-lg">nawfaldo</p>
                </div>
                <div className="bg-[#A0D995] shadow-md hover:shadow-xl rounded-full px-5 py-2 flex items-center space-x-3">
                  <svg
                    width="24px"
                    height="24px"
                    fill="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.0172337,20.0036431 C10.022429,20.1264837 10.0091724,20.2463579 9.98330461,20.3676906 C9.93784953,20.5808973 9.85006902,20.806507 9.72581375,21.0149561 C9.37258963,21.6075205 8.77254382,22.0029294 8,22.0029294 C6.18009841,22.0029294 5.46583567,21.110101 4.57152331,18.8743201 C3.96583567,17.360101 3.68009841,17.0029294 3,17.0029294 L3,15.0029294 C4.81990159,15.0029294 5.53416433,15.8957579 6.42847669,18.1315388 C7.03416433,19.6457579 7.31990159,20.0029294 8,20.0029294 C8,19.7127644 7.99602627,19.4557363 7.98766336,19.10766 C7.96806324,18.2918745 7.96580921,18.1253294 8.00139994,17.9072328 C8.01562221,17.4311461 8.13853505,17.0933379 8.38499657,16.758055 C6.15319163,16.2722225 4.64792011,15.2688507 3.78397367,13.6414131 L3.46033692,12.8803116 C3.14504523,11.9742045 3,10.9475314 3,9.76182789 C3,8.3962705 3.41634612,7.17529446 4.19401809,6.15466942 C3.95142672,5.18452501 3.98465035,3.99922139 4.52030872,2.66060213 L4.69533986,2.22319636 L5.14406803,2.07965982 C5.20414701,2.06044211 5.27718427,2.04308516 5.36298939,2.02961795 C6.2367624,1.89247825 7.48010477,2.21967938 9.10554673,3.26084348 C10.0637668,3.03871956 11.0728464,2.92657377 12.0887705,2.92657377 C12.9966325,2.92657377 13.8994565,3.01809831 14.761632,3.19853941 C16.3430593,2.20820612 17.552239,1.89759865 18.4025017,2.02979376 C18.4873192,2.04298081 18.5596096,2.06000541 18.6191923,2.07890005 L19.0707147,2.22208531 L19.2459583,2.66215824 C19.7145535,3.83889806 19.7949778,4.92336373 19.6244695,5.87228979 C20.5184674,6.94500389 21,8.26378067 21,9.76182789 C21,11.0247658 20.9095208,11.9744236 20.64943,12.8982988 L20.374903,13.6516598 C19.6562828,15.2773712 18.071463,16.2919934 15.627532,16.7752488 C15.881555,17.1269685 16,17.4840164 16,18.0029294 L16,19.0029294 C16,19.4875328 16,19.5024553 15.9988971,20.0029332 C16.0011677,20.0388683 16.0041674,20.0564681 16.0074409,20.0674343 C16.0069051,20.0676207 16.0044248,20.7127858 16,22.0029294 C15.1482062,22.0029294 14.5148687,21.5875264 14.2033753,20.9322561 C14.0418761,20.5925196 13.9936266,20.2681196 14,19.9887282 L14,18.0029294 C14,17.9190828 13.9970903,17.9142333 13.7928932,17.7100362 C13.2470903,17.1642333 13,16.7524162 13,16.0029294 L13,15.098327 L13.9000749,15.0079345 C16.5793439,14.7388614 18.0365375,13.994809 18.5196779,12.9078386 L18.7454621,12.2906007 C18.925117,11.6452201 19,10.8592573 19,9.76182789 C19,8.5957377 18.5929046,7.6324677 17.8229924,6.86285829 L17.399809,6.43984136 L17.5725269,5.86695742 C17.7259675,5.35801396 17.7624331,4.7557886 17.6001079,4.06889646 C17.5731265,4.07573155 17.5450908,4.08318009 17.5159887,4.09128216 C16.9805442,4.24035094 16.3120315,4.56021479 15.5064471,5.09869159 L15.139019,5.34429154 L14.7100567,5.23792413 C13.880388,5.0321958 12.9888516,4.92657377 12.0887705,4.92657377 C11.0878626,4.92657377 10.0984637,5.05392119 9.18445917,5.30309711 L8.73840507,5.42470039 L8.3568182,5.1636581 C7.52362575,4.59367395 6.83145179,4.25470831 6.27642408,4.09636524 C6.23678449,4.08505652 6.19904057,4.07494077 6.16316427,4.06592263 C5.9695217,4.8609066 6.04611126,5.51405583 6.24223012,6.00416015 L6.47738305,6.59181128 L6.04688499,7.05581793 C5.36089731,7.79520071 5,8.69496705 5,9.76182789 C5,10.7385874 5.11434439,11.5479509 5.32388252,12.1576254 L5.58556699,12.7770588 C6.23973869,14.0045823 7.62920432,14.743076 10.1065792,15.0086252 L11,15.1043908 L11,16.0029294 C11,16.7524162 10.7529097,17.1642333 10.2071068,17.7100362 C10.0029097,17.9142333 10,17.9190828 10,18.0029294 L9.98276345,18.1877969 C9.97135799,18.2484289 9.97135799,18.404984 9.98708636,19.0596217 C9.99432024,19.3607065 9.99844271,19.5990116 9.99963477,19.8480351 C10.0115828,19.8995855 10.013389,19.9328439 10.0172337,20.0036431 Z"
                    />
                  </svg>

                  <p className="font-Comfortaa text-white text-lg">nawfaldo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-start space-x-5">
            <div className="relative h-[100px] w-[100px] drop-shadow-xl">
              <Image src={countries} layout="fill" objectFit="contain" />
            </div>
            <div>
              <p className="font-Poppins text-xl drop-shadow-xl text-red-600">
                Tangerang,
              </p>
              <p className="font-Poppins text-xl drop-shadow-xl text-white">
                Indonesia
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="font-Oswald text-white text-6xl">CV</h1>
          <div className="flex items-start space-x-5">
            <button
              className="relative h-[200px] w-[150px] drop-shadow-md hover:drop-shadow-xl"
              onClick={() => setShowModal(true)}
            >
              <Image
                src={cv}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </button>
            <div className="space-y-3">
              <p className="font-Comfortaa text-medium text-white">
                Click image to preview
              </p>
              <div className="bg-[#A0D995] shadow-md hover:shadow-xl rounded-full px-5 py-2 flex items-center space-x-3 w-max cursor-pointer">
                <p className="font-Comfortaa text-white text-lg">Download</p>
                <DocumentDownloadIcon className="h-7 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-between px-5 py-3">
                  <h1 className="text-xl font-Poppins">Preview</h1>
                  <button onClick={() => setShowModal(false)}>
                    <XIcon className="h-10" />
                  </button>
                </div>
                <hr />
                <div
                  className="relative h-[700px] w-[550px] p-10"
                  onClick={() => setShowModal(true)}
                >
                  <Image src={cv} layout="fill" className="rounded-xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <hr className="mt-10" />
      <p className="mt-5 font-Comfortaa text-white">&copy; nawfaldo2022</p>
    </div>
  );
};

export default Contact;
