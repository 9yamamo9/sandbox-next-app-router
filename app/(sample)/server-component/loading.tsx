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

export const UserImageLoading = () => {
  return (
    <div className="mt-12 ml-24 min-h-screen">
      <div role="status" className="animate-pulse flex flex-row place-items-center">
        <div className="flex items-center justify-center w-1/3 h-24 bg-gray-700 rounded">
          <svg
            className="w-10 h-10 text-gray-600 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 23 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="ml-8 w-full">
          <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-2/3 mb-4"></div>
          <div className="h-2.5 bg-gray-700 rounded-full dark:bg-gray-700 w-1/3"></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
