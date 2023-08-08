const fakeRequest = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return { name: 'Ichiro Yamaguchi' }
}

const ServerComponent = async () => {
  const data = await fakeRequest()
  console.log(data.name)

  return (
    <div className="min-h-screen">
      <h1 className="mt-12 text-center text-6xl font-bold">Server Component Page</h1>
    </div>
  )
}

export default ServerComponent
