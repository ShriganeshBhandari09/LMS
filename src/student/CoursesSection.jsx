import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { dummyCourses } from "../assets/assets";

const CoursesSection = () => {
  const allCourses = dummyCourses;
  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-800">
        Learn from the best
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Discover our top-rated courses across various categories. From coding
        and design to business and wellness, our courses are crafted to deliver
        results.
      </p>

      <div className="grid courses px-4 md:px-0 md:my-16 my-10 gap-4">
        {allCourses.slice(0, 3).map((course, index) => (
          <CourseCard course={course} key={index} />
        ))}
      </div>

      <Link
        to={"/"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray--500/30 px-10 py-3 rounded"
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CoursesSection;
