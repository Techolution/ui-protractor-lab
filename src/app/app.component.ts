import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loaded: string = "";

  asyncLoading() {
    setTimeout(() => {
      this.loaded = this.loaded === "" ? "data-loaded" : "";
      console.log("loaded value: ", this.loaded);
    }, 3000);
  }

}
