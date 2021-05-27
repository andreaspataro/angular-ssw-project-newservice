import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { KeyvalueService } from "./keyvalue.service";
import { HttpClientModule } from "@angular/common/http";
import { NewPostComponent } from './new-post/new-post.component';
import { ShowpostComponent } from './showpost/showpost.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, NewPostComponent, ShowpostComponent],
  bootstrap: [AppComponent],
  providers: [KeyvalueService]
})
export class AppModule {}
