import { Component } from "@angular/core"
import { Meme, DataService } from "../Services/loadhomecontent.service"


@Component({
  selector: 'app-memepage',
  templateUrl: './memepage.component.html',
  styleUrls: ['./memepage.component.css'],
})
export class MemePage {
  public memes: Meme[] = [];
  constructor(private service: DataService) {
    this.service.getMemes().subscribe((data: Meme[]) => {
      this.memes = data;
    });
  }
}
