import { Routes } from '@angular/router';

import { MainPageComponent } from './Pages/main-page/main-page.component';
import { AdminPageComponent } from './Pages/admin-page/admin-page.component';
import { QuizComponent } from './Components/quiz/quiz.component';

export const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'admin', component: AdminPageComponent},
    {path: 'Questionnaire', component: QuizComponent}



];
