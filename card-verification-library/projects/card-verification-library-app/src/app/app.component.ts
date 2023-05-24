import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Address, Card, CardVerificationLibraryComponent } from 'card-verification-library'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'card-verification';
  cardChecker!: FormGroup;
  myCard!: Card;
  constructor(
    private cardService: CardVerificationLibraryComponent,
    private formBuilder: FormBuilder
  ){
    this.myCard = new Card();
  }

  ngOnInit(): void {
    this.createForms();
  }

  createForms() {
    this.cardChecker = this.formBuilder.group({
      name: new FormControl(''),
      cvv: new FormControl('', Validators.max(3)),
      cardNumber: new FormControl('', Validators.max(16)),
      expDate: new FormControl('')
    });
  }

  
  validateCard() {
    let isvalidCard = false;

    this.myCard.Name = this.cardChecker.controls['name'].value;
    this.myCard.Cvc = this.cardChecker.controls['cvv'].value;
    this.myCard.CardNumber = this.cardChecker.controls['cardNumber'].value;
    let billAddress = new Address();
    billAddress.Adder1 = '123 Easy Street';
    billAddress.City = 'Any Town';
    billAddress.State = 'TN';
    billAddress.postalCode = '55555';
    this.myCard.BillingAddress = billAddress;
    this.myCard.ExpDate = this.cardChecker.controls['expDate'].value;
    isvalidCard =  this.cardService.verifyCard(this.myCard);

    if(isvalidCard){
      alert('Card is valid!');

    }else{
      alert('Card is invalid!');
    }
 
  }
}