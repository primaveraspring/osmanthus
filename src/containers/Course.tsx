import {
  useParams,
  Link,
  useOutletContext,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { CourseType, CourseKeyType } from '../data/types/Courses';
import { UnitType } from '../data/types/Units';
import AllCourses from '../data/AllCourses';
import { Navigation } from 'baseui/side-navigation';
import { useNavigate } from 'react-router-dom';
import { StyledLink } from 'baseui/link';

type ContextType = { unit: UnitType | null; course: CourseType };

function renderNav(course: CourseType, unit: UnitType | undefined) {
  let activeItem = '';
  let navigate = useNavigate();
  let location = useLocation();

  if (location.pathname.indexOf('/practice') >= 0) {
    activeItem = 'practice';
  } else if (unit) {
    activeItem = unit.id;
  }

  const navItems = Object.values(course.units).map((unit: UnitType) => ({
    title: unit.name,
    itemId: unit.id,
  }));

  navItems.unshift({ title: 'Practice', itemId: 'practice' });

  return (
    <Navigation
      items={navItems}
      activeItemId={activeItem}
      onChange={({ event, item }) => {
        event.preventDefault();
        return navigate(`${item.itemId}`, { replace: true });
      }}
    />
  );
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
      <div className="not-sidebar">
        <Outlet context={{ unit, course }} />
      </div>
    </div>
  );
}

export default Course;

export function useUnit() {
  return useOutletContext<ContextType>();
}

export function useCourse() {
  return useOutletContext<ContextType>();
}
