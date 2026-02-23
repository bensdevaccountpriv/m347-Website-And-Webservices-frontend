import { Component } from '@angular/core'
import { Command, DataService } from "../Services/loadhomecontent.service"

@Component({
  selector: 'app-importantcommandspage',
  templateUrl: './importantcommandpage.component.html',
  styleUrls: ['./importantcommandpage.component.css'],
})
export class ImportantCommandPage {
  public commands: Command[] = [];
  constructor(private service: DataService) {
    this.service.getCommands().subscribe((data: Command[]) => {
      this.commands = data;
    });
  }
}
