import MainLayout from "@/components/layout";
import SimpleHero from "@/components/simple-hero/simple-hero";
import ImgText from "@/components/img-text-section/img-text";
import Pract_Areas from "@/sections/home/pract-areas/P-A";

export default function About() {
  return (
    <>
      <MainLayout>
        <SimpleHero
          imageUrl={
            "https://nnclegal.org/wp-content/uploads/2021/05/Untitled-1024x681.jpg"
          }
          textHeader={"About Us"}
          textBody={
            "Nwachukwu Nwachukwu & Co is a full-service law firm with its headquarters in Abuja. We offer high-end solutions in all legal or consultancy services to our clients. The firm is a new one powered by young and vibrant lawyers."
          }
          height={"600px"}
          mask="full"
          button={{ link: "/contact", text: "Contact Us" }}
        />
        <ImgText
          textHeader="Nwachukwu Nwachukwu & Co"
          imgUrl="https://nnclegal.org/wp-content/uploads/2021/05/judge-aay.jpg"
          btns={[{ link: "/about-us", text: "Learn More" }]}
          staggerName=".home-about"
          text={
            "The lawyers collectively present significant and diverse professional experiences in the legal fields. Members of the firm possess professional qualifications in law, company secretarial practices and alternative dispute resolution practices have achieved expertise in their respective practice areas by working with world-class large advisory firms and large law firms of international repute for a considerable period. The firm focuses on providing high quality, business-oriented, innovative and cost-effective lega1solutions to clients."
          }
        />
        <ImgText
          textHeader="The Firm"
          imgUrl="https://ikwueto.s3.amazonaws.com/images/Arbitration.png"
          btns={[{ link: "/about-us", text: "Learn More" }]}
          staggerName=".home-about"
          reverse={true}
          text={
            "We maintain a high standard of integrity and ethical standard in dealing with clients. Each client is assigned a client-lawyer who is responsible for maintaining personal contact with the client to know and fully understand the client’s concerns and objectives. Nwachukwu Nwachukwu & Co offers a wide range of expert legal services in the areas of corporate and commercial laws. With the pool of lawyers, company secretaries and other professionals, the firm is professionally equipped to handle large-sized and complex corporate transactions like Corporate Restructuring, Joint Ventures, Inbound & Outbound Investments, Real Estate Transactions, Infrastructure Projects, Project Finance, Power Projects, Highways & Road Projects, Corporate Taxation, etc."
          }
        />
        <ImgText
          textHeader="Our Focus"
          imgUrl="https://ikwueto.s3.amazonaws.com/images/Litigation.png"
          btns={[{ link: "/about-us", text: "Learn More" }]}
          staggerName=".home-about"
          text={
            "We offer proven capabilities in litigation and dispute resolution practice areas, especially in handling international and domestic arbitrations as well as litigation in the Supreme Court, various High Courts of Nigeria and various judicial and quasi-judicial tribunals/forums. We have extensive experience in handling corporate insolvency and bankruptcy matters. We offer strategic advice to corporate debtors, creditors and other stakeholders during the insolvency proceedings and provide professional services required during the process and represent them in court/tribunal proceedings."
          }
        />
        <Pract_Areas />
      </MainLayout>
    </>
  );
}
