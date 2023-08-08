type DynamicRoutesParam = {
  page: string
}

export const generateStaticParams = async (): Promise<DynamicRoutesParam[]> => {
  // Actually, fetch data from somewhere.
  return [{ page: 'hoge' }, { page: 'fuga' }, { page: 'piyo' }]
}

const DynamicRoutesSub = ({ params }: { params: DynamicRoutesParam }) => {
  const { page } = params

  return (
    <div className="min-h-screen">
      <h1 key={page} className="mt-12 text-center text-6xl font-bold">
        This page is {page} by Dynamic Routes.
      </h1>
    </div>
  )
}

export default DynamicRoutesSub
