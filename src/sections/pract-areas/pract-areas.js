import styled from "styled-components";
import React from "react";
import { Header, Text } from "@/components/typography";
import BackgroundSlider from "@/components/backgroundSlider/BackgroundSlider";

const services = [
  {
    img: "https://ikwueto.s3.amazonaws.com/images/Litigation.png",
    service: "Litigation",
    details: [
      "Our clients rely on us to resolve a broad range of civil and criminal matters in recognition of our record breaking skills in litigating either simple or complex claims in multiple economic sectors, including oil and gas, real estate, information technology, taxation, intellectual property, election petitions and electoral matters, public procurement and administration.",
      "In a bid to service our diverse clientele spread across the country, we have established offices at strategic locations in the country, to wit; Abuja, Lagos and Anambra State to speedily meet our clients’ demands.",
      "Our diverse team of resource-minded experts in various areas of law ensure that thorough preparation and brilliant research on cases is never compromised. Our customer service promises to be friendly and efficient, and aims to understand and interpret client instructions in a manner that is culturally sensitive and creatively unbiased.",
      "We have been involved in several local and international landmark cases. Our lawyers have appeared before all levels of national courts as well as acted on behalf of international organizations, agencies and governments before international courts",
    ],
  },
  {
    img: "https://ikwueto.s3.amazonaws.com/images/Energy.png",
    service: "Energy & Natural Resources Law",
    details: [
      "The energy industry is an emerging market that has been barely tapped. Nigeria is enriched with a multiplicity of natural resources and is actively involved in the upstream and downstream oil and gas operations, making the oil and gas sector a major source of the country’s Gross Domestic Products (GDP). Energy exploration in Nigeria is open to both private and public sectors; hence, transactions such as contract bidding, oil exploration partnerships, importation and exportation of finished energy resources and general sale of natural resources products are rife and tenable.",
      "At Ikwueto®, our lawyers are conversant with energy legislations on a global scale. We provide clients with advice on matters relating to energy and natural resources law and also manage oil and gas documentations and negotiations.",
      "Our team works on award-winning transactions, providing legal support to the largest, most cutting-edge and complex oil, gas, liquefied natural gas (LNG) and petrochemical transactions on domestic and cross-border levels.",
      "Our sustained commitment to client service is reflected in our long-standing relationships as advisors to many of the leading oil and gas companies.",
    ],
  },
  {
    img: "https://ikwueto.s3.amazonaws.com/images/Corporate.png",
    service: "Corporate Services & Compliance",
    details: [
      "We work with small, medium or large companies, to deliver practical, timely and responsive range of corporate services.",
      "Our advisory services vary from corporate governance codes applicable in Nigeria, compliance with regulatory frameworks of major Nigerian regulatory bodies, board advisory, tax advisory services, capital market activities etc. We also advise local companies with intent on expanding to foreign jurisdictions; because we are abreast with the legal regimes applicable in major commercial jurisdictions like the UK, USA, CHINA & CANADA.",
      "We have been instrumental in the negotiations for Mergers and Acquisitions, Winding Up proceedings, Corporate Restructuring and a multiplicity of daily corporate necessities. ",
      "Our lawyers are actively engaged in registration of companies, regulatory compliance and statutory filings with regulatory bodies, fulfillment of stock market requirements and continuing obligations, conducting investigations for companies, compliance check and monitoring, legal due diligence, corporate governance advisory, conduct of general meetings and board committee meetings, negotiation with major stakeholders and minority shareholders, risk management and insurance.",
    ],
  },
  {
    img: "https://ikwueto.s3.amazonaws.com/images/Arbitration.png",
    service: "Arbitration & ADR",
    details: [
      "At Ikwueto®, we offer alternative means of dispute resolution to our clients, particularly arbitration, mediation and negotiations. Maintaining a competitive pace in commercial transactions is the crucial goal to our alternative dispute resolution methods. ",
      "We actively conduct and successfully represent our clients in arbitration proceedings both virtually and in person. Our arbitration lawyers are knowledgeable and conversant with the various domestic arbitration laws and also the international arbitration rules such as the UNCITRAL, LCIA, ICC etc. We have a world class team of experienced arbitrators and arbitration lawyers and we ensure that our clients are protected by iron-clad, superbly drafted arbitration clauses, the best choice of law and well-preserved rights to enforce arbitral awards. We have participated in several arbitration matters involving governments, corporate giants and multi-national companies.",
      "As mediators and negotiators, we guide our clients towards achieving an effective resolution of their dispute. We also provide pre-emptory guidelines and advisory services at every stage of negotiating complex transactions. We help our clients to maintain their hard-fought negotiations in business by deriving pro-active intent to ensure speedy access to resolving disputes.",
    ],
  },
  {
    img: "https://ikwueto.s3.amazonaws.com/images/Banking.png",
    service: "Banking and Finance",
    details: [
      "The law and practice of banking and finance has continued to evolve and be disrupted by payment technologies. Today, payment services have been opened to several tech players. International and domestic electronic payments are now made in real time without the interface of commercial banks as it were. We are able to offer process participation and professional advise in the new payment landscape to both payment end users, technology partners, payment service providers and financial institutions generally.",
      "We are ever ready to scrutinize the regulatory mechanisms of financial service operations. We have based our banks and other financial institutions advisory services and litigation practice upon the wider scenario of cross-border regulatory compliance, financial markets operations and international best practices in governance and risk management procedures.",
      "In view of the relatively volatile nature of the sector, we prefer to remain attuned to the transactional needs of our clients by being available to advise them on a corporate retainership basis to provide long term value to their business.",
      "We have acted in various capacities for several leading Nigerian commercial banks, the apex bank regulator and several other financial institutions.",
    ],
  },
  {
    img: "https://ikwueto.s3.amazonaws.com/images/Legal.png",
    service: "Legal Documentation",
    details: [
      "Our experienced Solicitors deal with a full suite of legal documents for personal, business and compliance purposes. With a systemic attention to detail, here are just a few of the legal documentation we prepare on a daily basis.",
      "Legal correspondence on behalf of clients such as notice of intent to sue, letters of demand, invitation to negotiation or settlement.",
      "Real estate documentation, including conveyancing documents such as contract of sale and power of attorney, construction contracts, let/lease agreements, creation of mortgages, statutory notices in recovery of premises, legal aspects of property tax assessment and capital gains reduction, transfer of title in disposal of property.",
      "Administration of private estate documentation including wills, codicils, trusts, transfers, receiverships.",
      "Commercial and financial agreements such as loans, debentures, corporate bonds, suppliers’ contracts, futures, foreign exchange, service level agreements, commodities trade and exchange.",
      "Specialty agreements for various sectors, including energy, entertainment, hospitality, oil and gas services and agriculture.",
    ],
  },
  {
    img: "https://ikwueto.s3.amazonaws.com/images/Arbitration.png",
    service: "Tax Law and Advisory",
    details: [
      "We offer our clients superb, multi-jurisdictional tax advisory services both independently and as an integral part of our legal service. Our clients, ranging from multinationals, corporate and private businesses to small enterprises, rely on the expertise of our team to deliver advise on tax implications, tax compliance, tax risk analysis, tax issues arising from major international and domestic transactions.",
      "At Ikwueto®, our services are tailored to meet our clients’ best interest by providing an extensive tax planning that help minimize tax risks and tax liabilities. We have experience and offer advisory services on all areas of tax such as Stamp Duty, Personal Income Tax, Companies Income Tax, Value Added Tax etc.",
    ],
  },
  {
    img: "https://ikwueto.s3.amazonaws.com/images/Intellectual.png",
    service: "Intellectual Property",
    details: [
      "At Ikwueto®, we firmly believe that the world is moving towards a more innovation-based market and every property, whether tangible or intangible, is worthy of protection. Thus, our dedication to protecting the innovative ideas and works of our clients by providing bespoke services aimed at protecting copyright, trademark and patent infringement.",
      "We believe in leveraging our strengths to deliver enhanced value and definition in professional services. Hence, we decided to integrate our IP solutions by combining the core areas of legal specialization with practical requirements of commerce and business. We create networks with quality service providers, industry regulators and advocacy groups in Nigeria and abroad so that our clients can resolve issues of IP registration, protection, enforcement or simply questions or niggling thoughts of any form.",
      "In today’s commerce, Africa meets the world through the internet and online trade. Therefore, smart indigenous companies are recognizing the need to incorporate privacy protection, data handling techniques and brand integrity. Our legal professionals and expert partners can assist you with searches, application for and registration of trademarks, designs, enforcement of copyrights, brand protection and product innovation. ",
      "We also offer business support, legal advisory services and partnerships to emerging start-up businesses and well established corporations. Our clients include artisans, performers, entrepreneurs, trade associations, government agencies and individuals on either supply or consumer side.",
    ],
  },
  {
    img: "https://ikwueto.s3.amazonaws.com/images/Foreign.png",
    service: "Foreign Investment Advisory Services",
    details: [
      "At Ikwueto®, you are guaranteed an end-to-end solution in lucrative and secure foreign investments. Our Firm’s professionals and expert partners are always available to assist our valued clients, and advise them on the most lucrative and secure foreign investments. ",
      "We offer an end-to-end solution to enable individuals, groups or corporate bodies engage in diverse possibilities of direct and portfolio investments in Nigeria. Naturally, we ensure that when we utilize the services of any of our trusted partners, agents or commissaries, they are obliged to treat your business with same level of diligence and confidentiality that we do. Particularly in foreign direct investment transactions, we are able to offer advise on the most secure payment options available to merchants home and abroad. Our knowledge on the reciprocity and viability of foreign payment channels arms us with enormous proficiency in the subject to protect our clients’ best interest.",
      "As lawyers of confidence to the Embassy of Switzerland in Nigeria, we also take active part in facilitating Swiss-Nigeria and vice versa business opportunities and transactions.",
    ],
  },
];

const PractContainer = styled.div`
  width: 100%;
  height: fit-content;
  scroll-behavior: smooth;
  color: ${({ theme }) => theme.primaryColor};
  .service {
    width: 100%;
    padding: 60px 0;
    .service-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      width: 90%;
      margin: 0 auto;
      .service-text {
        width: 45%;
        h1 {
          font-size: 25px;
          font-weight: 400;
        }
        p {
          font-size: 12px;
          margin-top: 10px;
        }
      }
      .service-img {
        height: 300px;
        width: 45%;
        box-shadow: 0 8px 12px #40404068;
      }

      @media screen and (max-width: 780px) {
        flex-direction: column;
        gap: 30px;
        .service-text {
          width: 100%;
          h1 {
            font-size: 25px;
          }
          p {
            font-size: 12px;
            margin-top: 10px;
          }
        }
        .service-img {
          height: 300px;
          width: 100%;
          box-shadow: 0 8px 12px #40404068;
        }
      }
    }
    &:nth-child(2n) {
      background-color: #eee;
      .service-content {
        flex-direction: row-reverse;
        @media screen and (max-width: 780px) {
          flex-direction: column;
        }
      }
    }
  }
`;

function PracticeAreas() {
  return (
    <PractContainer>
      {services.map((service, i) => (
        <div className="service" key={i} id={service.service}>
          <div className="service-content">
            <div className="service-text">
              <Header left="left">{service.service}</Header>
              {service.details.map((detail, i) => (
                <Text left="left" key={i}>
                  {detail}
                </Text>
              ))}
            </div>
            <div className="service-img">
              <BackgroundSlider
                imageUrls={[service.img]}
                currImg={0}
                width="100%"
                height="100%"
              ></BackgroundSlider>
            </div>
          </div>
        </div>
      ))}
    </PractContainer>
  );
}

export default PracticeAreas;
