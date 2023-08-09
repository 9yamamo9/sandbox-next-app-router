import UserImage from '@/Components/UserImage'
import { Suspense } from 'react'
import { UserImageLoading } from '@/app/(sample)/server-component/loading'

const fakeRequest = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return { name: 'Ichiro Yamaguchi' }
}

const ServerComponent = () => {
  // const data = await fakeRequest()

  return (
    <div className="min-h-screen">
      <h1 className="mt-12 text-center text-6xl font-bold">Server Component Page</h1>

      <Suspense fallback={<UserImageLoading />}>
        <div className="mt-12 ml-24 flex flex-row place-items-center">
          <UserImage interval={3000} />
          <p className="ml-8 text-xl text-gray-600">Here is a sample image at left side. It have the suspense component.</p>
        </div>
      </Suspense>

      <Suspense fallback={<UserImageLoading />}>
        <div className="mt-12 ml-24 flex flex-row place-items-center">
          <UserImage interval={5000} />
          <p className="ml-8 text-xl text-gray-600">Here is a sample image at left side. It have the suspense component.</p>
        </div>
      </Suspense>
    </div>
  )
}

export default ServerComponent
