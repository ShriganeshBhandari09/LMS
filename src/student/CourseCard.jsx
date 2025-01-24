import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const CourseCard = ({ course }) => {
  return (
    <Link className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg">
      <img src={course.courseThumbnail} alt="" className="w-full" />
      <div className="p-3 text-left">
        <h3 className="text-base font-semibold">{course.courseTitle}</h3>
        <p className="text-gray-500">{course.educator.name}</p>
        <div className="flex items-center space-x-2">
          <p>4.5</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={assets.star} className="w-3.5 h-3.5" />
            ))}
          </div>
          <p className="text-gray-500">22</p>
        </div>
        <p className="text-base font-semibold text-gray-800">
          ₹
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

CourseCard.propTypes;

export default CourseCard;
