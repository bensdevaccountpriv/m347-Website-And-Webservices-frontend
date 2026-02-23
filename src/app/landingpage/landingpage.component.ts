import { Component } from "@angular/core"
import { Post, DataService } from "../Services/loadhomecontent.service"

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
})
export class LandingPage {
  public posts: Post[] = [];
  constructor(private service: DataService) {
    this.service.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }
}
