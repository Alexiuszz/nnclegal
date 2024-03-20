import MainLayout from "@/components/layout";
import SimpleHero from "@/components/simple-hero/simple-hero";
import Pract_Areas from "@/sections/home/pract-areas/P-A";
import PractContact from "@/sections/pract-areas/contact";
import PracticeAreas from "@/sections/pract-areas/pract-areas";

export default function Expertise() {
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
        <Pract_Areas />
        <PracticeAreas />
        <PractContact />
      </MainLayout>
    </>
  );
}
