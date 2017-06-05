import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { RowComponent } from './components/table/row/row.component';
import { TableService } from "./providers/table.service";
import { ChangeLimitComponent } from './components/change-limit/change-limit.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    RowComponent,
    ChangeLimitComponent,
    PaginationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
