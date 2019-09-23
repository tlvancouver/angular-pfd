import { Injectable } from '@angular/core';
import { Dashboard } from './dashboard';
import { MOCKDASHBOARD } from './mock-dashboard';
import { Observable, of } from  'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

export class DashboardService {

  private dashboardurl = ''; // URL to REST API

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getDashboard(id: number): Observable<Dashboard> { 
    this.log('Mock dashboard retrieved');
    return of (MOCKDASHBOARD);    
    /*
    return this.http.get<Dashboard>(this.dashboardurl)
      .pipe(
        catchError(this.handleError<Dashboard[]>('getDashboard', []))
      );
    */
  }

  private log(message: string)  {
    this.messageService.add('DashboardService: $(mesasge)');
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}

