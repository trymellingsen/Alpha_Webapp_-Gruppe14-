import { Metadata } from '@redwoodjs/web'

const HjemPage = () => {
  return (
    <>
      <Metadata title="Hjem" description="Hjem page" />

      <h1>HjemPage</h1>
        <p>
          Find me in <code>./web/src/pages/HjemPage/HjemPage.tsx</code>
        </p>
      {/*
          My default route is named `hjem`, link to me with:
          `<Link to={routes.hjem()}>Hjem</Link>`
      */}
    </>
  )
}

export default HjemPage
