import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const Contact = () => {
  return (
    <div className="text-white min-h-screen flex items-center justify-center p-4 pb-24">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full max-w-6xl">
        <div className="flex flex-col space-y-6 lg:w-1/2">
          <h1 className="text-5xl font-bold text-primary">Let&apos;s Talk</h1>
          <p className="text-neutral-300">
            If you have any questions about membership or usage, please fill out
            the form and our team will get back to you within 24 hours.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 lg:text-xl text-neutral-300">
              <Image
                width={40}
                height={40}
                className="object-contain"
                src="/images/icons/email.svg"
                alt="emailIcon"
              />
              <span>kenzi.lawson@example.com</span>
            </div>
            <div className="flex items-center space-x-3 lg:text-xl text-neutral-300">
              <Image
                width={40}
                height={40}
                className="object-contain"
                src="/images/icons/phone.svg"
                alt="emailIcon"
              />

              <span>(603) 555-0123</span>
            </div>
            <div className="flex items-center space-x-3 lg:text-xl text-neutral-300">
              <Image
                width={40}
                height={40}
                className="object-contain"
                src="/images/icons/location.svg"
                alt="emailIcon"
              />

              <span>
                4517 Washington Ave. Manchester, <br /> Kentucky 39495
              </span>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden bg-darkGray px-4 py-8 lg:p-8 rounded-xl mt-10 lg:mt-0 lg:w-1/2 lg:ml-10">
          <div className="absolute left-[50%] top-0 -translate-x-1/2 -translate-y-1/2 opacity-[65%] pointer-events-none">
            <div className="shadow-effect blur-[150px] aspect-square w-[200px]"></div>
          </div>
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-6 text-center">
            Say Something
          </h2>
          <form className="flex flex-col space-y-4">
            <label htmlFor="name" className="font-medium">
              Name
            </label>
            <input
              className="ring ring-1 ring-white/25 flex h-12 w-full rounded-md px-3 py-2 text-sm bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              id="name"
              placeholder="Your name"
            />
            <label htmlFor="phone" className="font-medium">
              Phone
            </label>

            <input
              className="ring ring-1 ring-white/25 flex h-12 w-full rounded-md px-3 py-2 text-sm bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="Phone number"
            />
            <label htmlFor="email" className="font-medium">
              Email
            </label>

            <input
              className="ring ring-1 ring-white/25 flex h-12 w-full rounded-md px-3 py-2 text-sm bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="Email"
            />
            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your text..."
              className="resize-none h-32 ring ring-1 ring-white/25 flex h-12 w-full rounded-md px-3 py-2 text-sm bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
            <div className="flex justify-center">
            <Button squared>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
