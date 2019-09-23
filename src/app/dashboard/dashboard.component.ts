import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../dashboard';
//import { MOCKDASHBOARD } from '../mock-dashboard';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    dashboard: Dashboard;
  
  constructor(private dashboardService : DashboardService) {  
  }
  
  ngOnInit() {
    this.getDashboard();
  }

  getDashboard(): void {
    //this.dashboard = this.dashboardService.getDashboard(1);
    
    this.dashboardService.getDashboard(1)
      .subscribe(dashboard => this.dashboard = dashboard);
    
  }
}