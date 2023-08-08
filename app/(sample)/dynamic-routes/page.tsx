import Link from 'next/link'

const DynamicRoutes = () => {
  return (
    <div className="min-h-screen">
      <h1 className="mt-12 text-center text-6xl font-bold">This Page is Dynamic Routes Sample.</h1>

      <div className="m-12 grid lg:grid-cols-3 xl:gap-36 sm:gap-3 text-center">
        <div className="block p-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100">
          <Link href="/dynamic-routes/hoge" className="text-3xl">
            hoge
          </Link>
        </div>

        <div className="block p-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100">
          <Link href="/dynamic-routes/fuga" className="text-3xl">
            fuga
          </Link>
        </div>

        <div className="block p-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100">
          <Link href="/dynamic-routes/piyo" className="text-3xl">
            piyo
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DynamicRoutes
