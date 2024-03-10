import Head from "next/head";
import MainLayout from "@/components/layout";
import SimpleHero from "@/components/simple-hero/simple-hero";
import ImgText from "@/components/img-text-section/img-text";
import Pract_Areas from "@/sections/home/pract-areas/P-A";

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
        <ImgText
          textHeader="About Us"
          imgUrl="https://nnclegal.org/wp-content/uploads/2021/05/judge-aay.jpg"
          btns={[{ link: "/about-us", text: "Learn More" }]}
          staggerName=".home-about"
          text={
            "Nwachukwu Nwachukwu & Co is a full-service law firm with its headquarters in Abuja. We offer high-end solutions in all legal or consultancy services to our clients. The firm is a new one powered by young and vibrant lawyers. The lawyers collectively present significant and diverse professional experiences in the legal fields. Members of the firm possess professional qualifications in law, company secretarial practices and alternative dispute resolution practices have achieved expertise in their respective practice areas by working with world-class large advisory firms and large law firms of international repute for a considerable period. The firm focuses on providing high quality, business-oriented, innovative and cost-effective lega1solutions to clients. We have extensive experience in handling corporate insolvency and bankruptcy matters."
          }
        />
        <Pract_Areas />
      </MainLayout>
    </>
  );
}
