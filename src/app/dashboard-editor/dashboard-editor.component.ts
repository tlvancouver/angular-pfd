import { Component, OnInit} from '@angular/core';
import { Dashboard } from '../dashboard';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-editor',
  templateUrl: './dashboard-editor.component.html',
  styleUrls: ['./dashboard-editor.component.css']
})
export class DashboardEditorComponent implements OnInit {

  dashboard: Dashboard;

  constructor(private dashboardService : DashboardService) {

  }

  ngOnInit() {
    this.getDashboard();
  }

  getDashboard(): void {
    this.dashboardService.getDashboard(1)
      .subscribe(dashboard => this.dashboard = dashboard);
  }
}