import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { inject} from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})

export class Nav {

  protected accountService = inject(AccountService)
  protected creds: any = {}
  //protected loggedIn = signal(false)

  login(){
    this.accountService.login(this.creds).subscribe({
      next: result => {
        console.log(result);
        this.creds = {};
      },
      error:error => alert(error.message)
      
    })
  }

  logout(){
    //this.loggedIn.set(false);
    this.accountService.logout();
  }
  // login(){
  //   console.log(this.creds);
  // }
}
