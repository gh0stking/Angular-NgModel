import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  cities: Array<any>;

  constructor() {
    this.getCities();
    this.createUser();
  }

  getCities() {
    this.cities = [
      { id: '0001', name: '北京' },
      { id: '0002', name: '上海' },
      { id: '0003', name: '深圳' },
    ];
  }

  createUser() {
    this.user = new User();
    this.user.Sex = "1";
    this.user.Status = true;
  }

  changeUserName() {
    console.log(this.user.UserName);
  }

  changeCity() {
    console.log(this.user.City);
  }

}

export class User {
  UserId: string;
  UserName: string;
  UserPassword: string;
  Sex: string;
  Birth: Date;
  City: string;
  Salary: number;
  Note: string;
  Status: boolean;
}
