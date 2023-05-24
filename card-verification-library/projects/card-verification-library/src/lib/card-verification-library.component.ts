import { Component, OnInit } from '@angular/core';
import { Card } from './shared/card';

@Component({
  selector: 'lib-card-verification-library',
  template: `
    <p>
      card-verification-library works!
    </p>
  `,
  styles: [
  ]
})
export class CardVerificationLibraryComponent implements OnInit {
  CARD_NUMBER_REGEX = /^[\d\s-]*$/;
  MAX_LENGTH = 255;
  constructor() { }

  ngOnInit(): void {
  }

  verifyCard(cardInfo: Card): boolean {
    let cardNumToValidate = cardInfo.CardNumber.toString();
    let isValidCard = false;

    if(cardInfo.BillingAddress && cardInfo.CardNumber && cardInfo.ExpDate){
      switch (cardNumToValidate.substring(0,1)) {
        case '3': { //Amex
          if (cardNumToValidate.length === 15) {
            isValidCard = true;
          }
          break;
        }
        case '4': { //Visa
          if (cardNumToValidate.length === 16) {
            isValidCard = true;
          }
          break;
        }
        case '5': { //MC
          if (cardNumToValidate.length === 16) {
            isValidCard = true;
          }
          break;
        }
        case '6': { //Discover
          if (cardNumToValidate.length === 16) {
            isValidCard = true;
          }
          break;
        }
        default: {
          isValidCard = false;
          break;
        }
      }
    }else{
      isValidCard = false;
    }
   
   

    return isValidCard;

  }







verification(
  isValid: boolean,
  isPotentiallyValid: boolean
): Verification {


  return { isValid, isPotentiallyValid };
}

}



export type Verification = {
  isValid: boolean;
  isPotentiallyValid: boolean;
};
export interface CardNumberVerification extends Verification {
  card: Card | null;
}
