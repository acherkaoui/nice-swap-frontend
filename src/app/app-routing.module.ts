import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlsExemplesComponent } from './components/gls-exemples/gls-exemples.component';
import { SwapTableComponent } from './views/swap-table/swap-table.component';
import { FeedQueueComponent } from './components/feed-queue/feed-queue.component';
const routes: Routes = [
  { path: '', component: SwapTableComponent },
  { path: 'theme', component: GlsExemplesComponent },
  { path: 'feed', component: FeedQueueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
