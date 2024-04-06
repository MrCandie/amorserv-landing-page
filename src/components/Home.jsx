import About from "./about/About";
import Blog from "./blog/Blog";
import CommunityEngagement from "./community-engagement/CommunityEngagement";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import MembershipInfo from "./membership-info/MembershipInfo";
import NewsUpdates from "./news-and-updates/NewsUpdates";
import UpcomingEvents from "./upcoming-events/UpcomingEvents";
import VolunteerOpportunity from "./volunteer-opportunity/VolunteerOpportunity";
import WhyJoin from "./why-join/WhyJoin";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <WhyJoin />
      <UpcomingEvents />
      <CommunityEngagement />
      <VolunteerOpportunity />
      <MembershipInfo />
      <NewsUpdates />
      <Blog />
      <Footer />
    </>
  );
}
