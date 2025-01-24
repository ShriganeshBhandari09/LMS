import Companies from "../student/Companies";
import CoursesSection from "../student/CoursesSection";
import Hero from "../student/Hero";
import TestimonialSection from "../student/TestimonialSection";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Companies />
      <CoursesSection />
      <TestimonialSection/>
    </div>
  );
};

export default Home;
