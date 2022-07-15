import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2 *ngIf="displayName;else elseBlock">true</h2>
                <ng-template #elseBlock>  
                <h2>false</h2>
                </ng-template>
                  <div *ngIf="show; then thenBlock; else elseBlock"></div>
                <ng-template #thenBlock><h2 >Then</h2></ng-template>
                <ng-template #elseBlock><h2>Else</h2></ng-template>

                <!--ngSwicth Statement directives-->
                <div [ngSwitch]="color">
                  <div *ngSwitchCase="'red'">picked red color</div>
                  <div *ngSwitchCase="'blue'">picked blue color</div>
                  <div *ngSwitchCase="'yellow'">picked yellow color</div>
                  <div *ngSwitchDefault>picked again</div>
                </div>
                <!--ngFor statement directives-->
                <div *ngFor="let color of colors; index as i; first as f">
                 <h2>{{i}} {{f}} {{color}}</h2>
                </div>
                <div *ngFor="let vechil of vechils; index as i; even as e">
                 <h2>{{i}} {{e}} {{vechil}}</h2>
                </div>
  `,
  styles: ['']
})
export class TestComponent implements OnInit {
public displayName = true;
public show = false;
public color = "red";
public colors = ["red", "blue", "green", "white"];
public vechils = ["Bike", "Car", "Truck", "Bus"]
  constructor() { }

  ngOnInit(): void {
  }

}
