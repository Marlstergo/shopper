import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Shopper</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div>
        <div className="grid grid-col-3">
          <div className="flex justify-center items-center">
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
