import { Routes } from '@angular/router';
import { CareerComponent } from 'src/app/pages/career/career.component';
import { ClassroomComponent } from 'src/app/pages/classroom/classroom.component';
import { CourseComponent } from 'src/app/pages/course/course.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { DayComponent } from 'src/app/pages/day/day.component';
import { LevelComponent } from 'src/app/pages/level/level.component';
import { ScheduleComponent } from 'src/app/pages/schedule/schedule.component';
import { schoolYearComponent } from 'src/app/pages/school-year/school-year.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { StatusComponent } from 'src/app/pages/status/status.component';
import { SubjectComponent } from 'src/app/pages/subject/subject.component';
import { TeacherComponent } from 'src/app/pages/teacher/teacher.component';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';
import { UserComponent } from 'src/app/pages/user/user.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'career', component: CareerComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'course', component: CourseComponent },
  { path: 'day', component: DayComponent },
  { path: 'level', component: LevelComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'school-year', component: schoolYearComponent },
  { path: 'status', component: StatusComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'user', component: UserComponent },
  { path: 'classroom', component: ClassroomComponent },
];
