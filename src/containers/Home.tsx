import { Link } from 'react-router-dom';
import AllCourses from '../data/AllCourses';

function renderCourseLinks() {
  const courses = Object.values(AllCourses);
  return courses.map((course, index) => {
    return (
      <span key={`course-${course.id}`}>
        <Link to={`/${course.id}`}>{course.name}</Link>
        {index < courses.length - 1 ? ' | ' : null}
      </span>
    );
  });
}

function Home() {
  return (
    <div className="App">
      <h1>Sudachi</h1>
      <h4>Select a Course</h4>
      <div>{renderCourseLinks()}</div>
    </div>
  );
}

export default Home;
