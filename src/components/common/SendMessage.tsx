"use client";

import React, { useState, Fragment } from "react";
import { IoMdMail } from "react-icons/io";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { Dialog, Transition } from "@headlessui/react";

function SendMessage() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="flex items-center justify-center mb-4">
        <ShimmerButton
          onClick={openModal}
          className="shadow-2xl text-peachOrange dark:from-white dark:to-slate-900/10 hover:text-hummingBird transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <span className="flex items-center whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight lg:text-lg">
            <IoMdMail className="mr-2" />
            Send Message
          </span>
        </ShimmerButton>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center bg-white bg-opacity-10 backdrop-blur-lg shadow-xl">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-gray-900 bg-opacity-50 backdrop-blur-lg shadow-xl transition-all p-6 text-left align-middle">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl text-center font-bold leading-6 text-blueStonePrim"
                  >
                    Send a Message
                  </Dialog.Title>

                  <form className="mt-4 space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-lg font-bold text-brandy"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="mt-1 p-2 block w-full rounded-md border-gray-700 shadow-sm bg-gray-800 bg-opacity-40 text-gray-200 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-lg font-bold text-brandy"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="mt-1 p-2 block w-full rounded-md border-gray-700 shadow-sm bg-gray-800 bg-opacity-40 text-gray-200 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Your Phone Number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-lg font-bold text-brandy"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 p-2 block w-full rounded-md border-gray-700 shadow-sm bg-gray-800 bg-opacity-40 text-gray-200 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Your Email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-lg font-bold text-brandy"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="mt-1 p-2 block w-full rounded-md border-gray-700 shadow-sm bg-gray-800 bg-opacity-40 text-gray-200 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Subject"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-lg font-bold text-brandy"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="mt-1 p-2 block w-full rounded-md border-gray-700 shadow-sm bg-gray-800 bg-opacity-40 text-gray-200 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Your Message"
                        rows={4}
                      />
                    </div>
                    <div className="mt-4 flex justify-center items-center">
                      <ShimmerButton
                        type="submit"
                        className="bg-indigo-600 text-brandy text-center text-xl font-semibold hover:bg-indigo-700 transition-colors duration-200 ease-in-out"
                      >
                        Send
                      </ShimmerButton>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default SendMessage;
