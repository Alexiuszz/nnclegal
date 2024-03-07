import Head from "next/head";
import MainLayout from "@/components/layout";
import SimpleHero from "@/components/simple-hero/simple-hero";

export default function Home() {
  return (
    <>
      <MainLayout>
        <SimpleHero
          imageUrl={
            "https://ikwueto.s3.amazonaws.com/images/aboutHero.png"
          }
          textHeader={"Nwachukwu, Nwachukwu & Co. (NN&C)"}
          textBody={
            "Get quality legal representation in diverse areas with the best in each field."
          }
          button={{ link: "/contact", text: "Contact Us" }}
        />
      </MainLayout>
    </>
  );
}
