import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { DataService } from 'src/app/core/services/data/data.service';
import { HelpersService } from 'src/app/core/services/helpers/helpers.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user!:IUser
  showAll = false;
  constructor(
    private data:DataService,
    private helpers:HelpersService
  ) { }


  ngOnInit() {
    this.toggleShowAll();
  }
  getUser(){
    this.data.getData('/user/profile').subscribe(
      res=>{
        this.user = res;
      },
      err=>{
        console.log(err);
        this.helpers.PresentGenericToaster({message:'Cannot Retrieve Data'})
      }
    )
  }

  toggleShowAll(){
    setTimeout(() => {
      this.showAll = !this.showAll
    }, 2000);
  }
}
