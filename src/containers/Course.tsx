import { useParams, Link, Outlet } from 'react-router-dom';
import { CourseType, CourseKeyType } from '../data/types/Courses';
import { UnitType } from '../data/types/Units';
import AllCourses from '../data/AllCourses';
import Unit from './Unit';

function renderUnit(unit: UnitType | undefined) {
  if (!unit) {
    return null;
  }

  return <Unit unit={unit} />;
}

function renderUnitLink(unit: UnitType) {
  return (
    <div key={`unit-link-${unit.id}`}>
      <Link to={unit.id}>{unit.name}</Link>
    </div>
  );
}

function renderUnitList(course: CourseType) {
  return (
    <div>
      {Object.values(course.units).map((unit: UnitType) =>
        renderUnitLink(unit)
      )}
    </div>
  );
}

function Course() {
  const courseId = useParams().course as CourseKeyType;
  const course = AllCourses[courseId];

  const unitId = useParams().unit;
  const unit = unitId ? course.units[unitId] : undefined;
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <h2>{course.name}</h2>
      <div>{renderUnitList(course)}</div>
      <div>{renderUnit(unit as UnitType)}</div>
      {<Outlet />}
    </div>
  );
}

export default Course;
