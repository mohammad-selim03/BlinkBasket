"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  
} from "@headlessui/react";

import {modalImg } from "../assets";

const ProductModel = () => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen ">
        <div className="flex min-h-full justify-center text-center sm:items-center ">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white h-[300px]">
              <div className="sm:flex sm:items-start">
                <div className="grid grid-cols-2 -ml-2">
                  <div className="col-span-1">
                    <img src={modalImg} alt="" className="" />
                  </div>
                  <div className="col-span-1 w-52 pl-6 mt-14 ">
                    <p className="text-gray-500 font-semibold">Newsletter</p>
                    <h3 className="text-2xl font-bold">Subscribe Now</h3>
                    <p className="text-xs text-gray-400">
                      Subscribe to our newsletter and get 10% off your first
                      purchase
                    </p>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs mt-2">
                          Email Address <span className="text-red-500">*</span>
                        </p>
                        <input
                          type="text"
                          placeholder="example@gmail.com"
                          className=" px-3 outline-none border border-gray-500 rounded-md placeholder:text-sm text-xs h-8 w-52 "
                          required
                        />
                        <button
                          onClick={() => setOpen(false)}
                          className="w-52 rounded-md h-8 bg-black text-white font-semibold text-center"
                        >
                          Subscribe
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              {/* <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Deactivate
              </button> */}
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
export default ProductModel;
