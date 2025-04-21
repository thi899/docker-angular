import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-docker';

  constructor(private httpClient: HttpClient) {
    console.log('AppComponent initialized');
  }

  ngOnInit() {
    this.httpClient.get('http://backend:8080/hello').subscribe(
      (response) => {
        console.log('API response:', response);
      }
    );
  }
}
