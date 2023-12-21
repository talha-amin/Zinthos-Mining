import React from "react";
import Container from "../ui/Container";
import Image from "next/image";

const Roadmap = () => {
  return (
    <section className="relative">
      <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 opacity-[25%] pointer-events-none">
        <div className="shadow-effect blur-[150px] aspect-square w-[350px]"></div>
      </div>
      <Container>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white">
          <div className="odd:ml-auto w-1/2 relative flex items-center justify-between  md:odd:flex-row-reverse group is-active">
            <div className="absolute left-0 top-[50%] md:-translate-y-1/2 flex items-center justify-center rounded-full  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Image
                width={50}
                height={50}
                className="w-10 h-10"
                src="/images/icons/bead.svg"
                alt="icon"
              />
            </div>
            <div className="relative roadmap-item w-4/5 shadow-inner p-8 rounded-2xl shadow">
              <div className="absolute left-0 top-[50%] md:-translate-y-1/2 flex items-center justify-center rounded-full  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Image
                  width={15}
                  height={15}
                  src="/images/icons/bead.svg"
                  alt="icon"
                />
              </div>
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-semibold text-3xl">Order Placed</div>
              </div>
              <div className=" text-xl font-medium">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
            <hr className="w-1/5 h-[1px] bg-white" />
          </div>

          <div className="odd:ml-auto w-1/2 relative flex items-center justify-between  md:odd:flex-row-reverse group is-active">
            <div className="absolute right-0 flex items-center justify-center rounded-full  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Image
                width={50}
                height={50}
                className="w-10 h-10"
                src="/images/icons/bead.svg"
                alt="icon"
              />
            </div>

            <div className="relative roadmap-item w-4/5 shadow-inner p-8 rounded-2xl shadow">
              <div className="absolute right-0 top-[50%] md:-translate-y-1/2 flex items-center justify-center rounded-full  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Image
                  width={15}
                  height={15}
                  src="/images/icons/bead.svg"
                  alt="icon"
                />
              </div>
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-semibold text-3xl">Order Shipped</div>
              </div>
              <div className=" text-xl font-medium">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
            <hr className="w-1/5 h-[1px] bg-white" />
          </div>

          <div className="odd:ml-auto w-1/2 relative flex items-center justify-between  md:odd:flex-row-reverse group is-active">
            <div className="absolute left-0 top-[50%] md:-translate-y-1/2 flex items-center justify-center rounded-full  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Image
                width={50}
                height={50}
                className="w-10 h-10"
                src="/images/icons/bead.svg"
                alt="icon"
              />
            </div>

            <div className="relative roadmap-item w-4/5 shadow-inner p-8 rounded-2xl shadow">
              <div className="absolute left-0 top-[50%] md:-translate-y-1/2 flex items-center justify-center rounded-full  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Image
                  width={15}
                  height={15}
                  src="/images/icons/bead.svg"
                  alt="icon"
                />
              </div>
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-semibold text-3xl">In Transit</div>
              </div>
              <div className=" text-xl font-medium">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
            <hr className="w-1/5 h-[1px] bg-white" />
          </div>

          <div className="odd:ml-auto w-1/2 relative flex items-center justify-between  md:odd:flex-row-reverse group is-active">
            <div className="absolute right-0 flex items-center justify-center rounded-full  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Image
                width={50}
                height={50}
                className="w-10 h-10"
                src="/images/icons/bead.svg"
                alt="icon"
              />
            </div>
            <div className="relative roadmap-item w-4/5 shadow-inner p-8 rounded-2xl shadow">
              <div className="absolute right-0 top-[50%] md:-translate-y-1/2 flex items-center justify-center rounded-full  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Image
                  width={15}
                  height={15}
                  src="/images/icons/bead.svg"
                  alt="icon"
                />
              </div>
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-semibold text-3xl">Out of Delivery</div>
              </div>
              <div className=" text-xl font-medium">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
            <hr className="w-1/5 h-[1px] bg-white" />
          </div>

          <div className="odd:ml-auto w-1/2 relative flex items-center justify-between  md:odd:flex-row-reverse group">
            <div className="absolute left-0 top-[50%] md:-translate-y-1/2 flex items-center justify-center rounded-full  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Image
                width={50}
                height={50}
                className="w-10 h-10"
                src="/images/icons/bead.svg"
                alt="icon"
              />
            </div>
            <div className="relative roadmap-item w-4/5 shadow-inner p-8 rounded-2xl shadow">
              <div className="absolute left-0 top-[50%] md:-translate-y-1/2 flex items-center justify-center rounded-full  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Image
                  width={15}
                  height={15}
                  src="/images/icons/bead.svg"
                  alt="icon"
                />
              </div>
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-semibold text-3xl">Delivered</div>
              </div>
              <div className=" text-xl font-medium">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
            <hr className="w-1/5 h-[1px] bg-white" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Roadmap;
