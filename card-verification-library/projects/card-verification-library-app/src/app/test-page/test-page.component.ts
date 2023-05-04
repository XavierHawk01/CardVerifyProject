import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Card, CardVerificationLibraryComponent}  from 'card-verification-library'
@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  title = 'card-verification';
  cardChecker!: FormGroup;
  myCard!: Card;
  constructor(private cardService: CardVerificationLibraryComponent) { }

  ngOnInit(): void {
  }

  // validateCard(cardData: any ){
  validateCard( ){

  this.myCard.FirstName = this.cardChecker.value;
   
  //For now needs to be deleted 
  const _cardData = new Card();
  //
  alert(this.cardService.verifyCard(_cardData));
  }
}
 