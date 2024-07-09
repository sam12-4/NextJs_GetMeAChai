import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <div className="flex flex-col items-center justify-center text-white h-96 text-center">
          <p className="text-3xl py-2 flex gap-3">Get Me a Chai<img className="w-9 cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full mx-2" src="./coffee.gif" alt="" /></p>
          <p className="py-2">A crowd funding platform for cretaors to fund their project</p>
          <p className="py-2">A place where your fans can buy you a chai. Unleash the power of your fans and get your projects funded</p>
          <div className="buttons flex gap-2 py-2">
            <Link href={"/login"}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button></Link>
            <Link href={"/login"}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button></Link>
          </div>
        </div>
        <div className="h-[2px] bg-[rgb(255,255,255,0.18)] my-2">
        </div>
        <div className="flex flex-col text-white min-h-72 justify-center mb-10">
          <p className="text-3xl my-6 text-center">Your Fans can buy you a Chai</p>
          <div className="boxes flex justify-evenly items-center flex-wrap">
            <div className="box flex flex-col items-center md:my-0 my-10">
              <img src="./help.png" className="w-40 bg-[rgb(255,255,255,0.18)] p-4 rounded-full" alt="" />
              <span>Fans want to help</span>
              <span className="my-2">Your fans are available to support you</span>
            </div>
            <div className="box flex flex-col items-center md:my-0 my-10">
              <img src="./financial.png" className="w-52 bg-[rgb(255,255,255,0.18)] rounded-full p-4" alt="" />
              <span className="my-2">Fans want to contribute</span>
              <span className="my-2">Your fans are waiting to contribute financially</span>
            </div>
            <div className="box flex flex-col items-center md:my-0 my-10">
              <img src="./collaborate.png" className="w-40 bg-[rgb(255,255,255,0.18)] p-4 rounded-full" alt="" />
              <span>Fans want to collaborate</span>
              <span className="my-2">Your fans are ready to collaborate with you</span>
            </div>
          </div>
        </div>
        <div className="h-[2px] bg-[rgb(255,255,255,0.18)] my-2">
        </div>
        <div className="flex flex-col text-white min-h-72 justify-center items-center mb-10">
          <p className="text-3xl my-6 text-center">Get to know about us</p>
          <iframe className="my-4" width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=AveS2bW-BnVWjklB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

      </main></>
  );
}
