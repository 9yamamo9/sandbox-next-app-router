const Loading = () => {
  return (
    <div className="min-h-screen">
      <div role="status" className="animate-pulse mx-8">
        <div className="mt-12 h-6 bg-white rounded-full dark:bg-gray-700 w-full"></div>
        <div className="mt-2 h-2 bg-white rounded-full w-full"></div>
        <div className="mt-2 h-2 bg-white rounded-full w-full"></div>
        <div className="mt-2 h-2 bg-white rounded-full w-full"></div>
      </div>
    </div>
  )
}

export default Loading
