import Head from "next/head";
import Layout from "./components/Layout/Layout";
import Info from "./components/MainPage/Info";
export default function Home() {
  return (
    <>
      <Layout seccion={"Home"}>
        <header className="h-screen flex flex-row bg-gray-200 text-black items-center snap-start">
          <h1 className="font-bold text-center  text-6xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </h1>
        </header>

        <Info title={"Lorem Ipsum"} image="../images/ProfilePic.jpg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Info>
        <Info title={"Lorem Ipsum"} image="../images/ProfilePic.jpg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Info>
      </Layout>
    </>
  );
}
