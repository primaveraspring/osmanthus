import { useParams, Link } from 'react-router-dom';
import { CourseType, CourseKeyType } from '../data/types/Courses';
import { UnitType } from '../data/types/Units';
import AllCourses from '../data/AllCourses';
import Unit from './Unit';
import { Navigation } from 'baseui/side-navigation';
import { useNavigate } from 'react-router-dom';
import { StyledLink } from 'baseui/link';

function renderNav(course: CourseType, unit: UnitType | undefined) {
  let navigate = useNavigate();

  return (
    <Navigation
      items={Object.values(course.units).map((unit: UnitType) => ({
        title: unit.name,
        itemId: unit.id,
      }))}
      activeItemId={unit ? unit.id : undefined}
      onChange={({ event, item }) => {
        event.preventDefault();
        return navigate(`${item.itemId}`, { replace: true });
      }}
    />
  );
}

function renderUnit(unit: UnitType | undefined) {
  if (!unit) {
    return null;
  }

  return <Unit unit={unit} />;
}

function Course() {
  const courseId = useParams().course as CourseKeyType;
  const course = AllCourses[courseId] ? AllCourses[courseId] : undefined;

  const unitId = useParams().unit;
  const unit = course && unitId ? course.units[unitId] : undefined;
  return (
    <div className="with-sidebar">
      <div className="sidebar">
        <div>
          <StyledLink $as={Link} to="/">
            Home
          </StyledLink>
        </div>
        <h2>{course ? course.name : ''}</h2>
        <div>{renderNav(course as any, unit)}</div>
      </div>
      <div className="not-sidebar">{renderUnit(unit as any)}</div>
    </div>
  );
}

export default Course;
