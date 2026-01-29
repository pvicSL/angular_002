import { Routes } from '@angular/router';
import { PostsListComponent } from './pages/posts-list/posts-list';
import { PostDetailComponent } from './pages/post-detail/post-detail';
import { PostFormComponent } from './pages/post-form/post-form';

export const routes: Routes = [
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: 'posts', component: PostsListComponent },
    { path: 'posts/:id', component: PostDetailComponent },
    { path: 'posts/new', component: PostFormComponent },
    { path: '**', redirectTo: 'posts' },
];