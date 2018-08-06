import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ZippyComponent } from "./zippy/zippy.component";
import { TodosComponent } from "./todos/todos.component";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [AppComponent, TodosComponent, ZippyComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
