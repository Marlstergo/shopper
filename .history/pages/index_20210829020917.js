import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col -screen py-2">
      <Head>
        <title>Shopper</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="h-full">
        <div className="grid grid-cols-3 h-1/2">
          <div className="flex justify-center items-center h-full">
            shoe
          </div>
          <div className="flex justify-center items-center">
            hat
          </div>
          <div className="flex justify-center items-center">
            gown
          </div>

        </div>
      </div>
    </div>
  )
}
