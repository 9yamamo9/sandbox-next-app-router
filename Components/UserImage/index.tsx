import Image from 'next/image'

type UserImageProps = {
  interval: number
}

const fakeImageDownload = async (interval: number) => {
  await new Promise((resolve) => setTimeout(resolve, interval))
  return './next.svg'
}

const UserImage = async (props: UserImageProps) => {
  const src = await fakeImageDownload(props.interval)

  return (
    <>
      <Image alt="sample-image" src={src} width={320} height={180} />
    </>
  )
}

export default UserImage
