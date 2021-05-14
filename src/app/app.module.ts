import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { FeedQueueComponent } from './components/feed-queue/feed-queue.component';
import { GlsExemplesComponent } from './components/gls-exemples/gls-exemples.component';
import { DialogContentComponent } from './components/gls-dialog/gls-dialog.component';
import { SwapTableComponent } from './views/swap-table/swap-table.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  declarations: [
    AppComponent,
    DialogContentComponent,
    FeedQueueComponent,
    GlsExemplesComponent,
    SwapTableComponent,
  ],
  entryComponents: [DialogContentComponent],
  bootstrap: [AppComponent],
  exports: [FeedQueueComponent, GlsExemplesComponent, MaterialModule],
})
export class AppModule {}
