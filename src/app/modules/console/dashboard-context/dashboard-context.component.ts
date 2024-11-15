import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-dashboard-context',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './dashboard-context.component.html',
  styleUrl: './dashboard-context.component.scss'
})
export class DashboardContextComponent {

}
