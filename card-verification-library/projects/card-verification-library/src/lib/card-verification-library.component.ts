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

verifyCard(cardInfo: Card): boolean{
return true;

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
