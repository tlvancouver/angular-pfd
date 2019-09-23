import { Component, OnInit, Input } from '@angular/core';
import { Dashboard } from '../dashboard';


@Component({
  selector: 'app-dashboard-editor',
  templateUrl: './dashboard-editor.component.html',
  styleUrls: ['./dashboard-editor.component.css']
})
export class DashboardEditorComponent implements OnInit {

  @Input() dashboard: Dashboard;

  constructor() {
    
  }

  ngOnInit() {
  }

}