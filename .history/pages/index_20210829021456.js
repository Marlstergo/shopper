import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col h-screen py-2">
      <Head>
        <title>Shopper</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="h-full">
        <div className="grid grid-cols-3 h-1/2">
          <div className="flex justify-center items-center h-full">
            <div className="">1</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="">2</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="">3</div>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-2">
              <div className="flex justify-center items-center">
                <div className="">4</div>
              </div>
              <div className="flex justify-center items-center">
                <div className="">5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
