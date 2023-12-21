import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="text-white min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full max-w-6xl">
        <div className="flex flex-col space-y-6 md:w-1/2">
          <h1 className="text-5xl font-bold text-primary">Let's Talk</h1>
          <p className="text-neutral-300">
            If you have any questions about membership or usage, please fill out
            the form and our team will get back to you within 24 hours.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                width={40}
                height={40}
                className="object-contain"
                src="/images/icons/email.svg"
                alt="emailIcon"
              />
              <span>kenzi.lawson@example.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                width={40}
                height={40}
                className="object-contain"
                src="/images/icons/phone.svg"
                alt="emailIcon"
              />

              <span>(603) 555-0123</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                width={40}
                height={40}
                className="object-contain"
                src="/images/icons/location.svg"
                alt="emailIcon"
              />

              <span>4517 Washington Ave. Manchester, <br /> Kentucky 39495</span>
            </div>
          </div>
        </div>
        <div className="bg-[#1A1A1A] p-8 rounded-lg mt-10 md:mt-0 md:w-1/2 md:ml-10">
          <h2 className="text-2xl font-bold text-white mb-6">Say Something</h2>
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
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
