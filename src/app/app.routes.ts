import { Routes } from '@angular/router';
import { LandingPage } from "./landingpage/landingpage.component"
import { MemePage } from "./memepage/memepage.component"
import { ImportantCommandPage } from './importantcommandpage/importantcommandpage.component'
import { AboutPage } from './aboutpage/aboutpage.component'

export const routes: Routes = [
  {
    path: "",
    component: LandingPage,
  },
  {
    path: "memes",
    component: MemePage
  },
  {
    path: "about",
    component: AboutPage
  },
  {
    path: "importantcommands",
    component: ImportantCommandPage
  },
  {
    path: "**",
    component: LandingPage,
  }
];
