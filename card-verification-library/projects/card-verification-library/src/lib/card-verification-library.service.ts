import { Injectable } from '@angular/core';
import { CardNumberVerification } from './card-verification-library.component';
import { Card } from './shared/card';

@Injectable({
  providedIn: 'root'
})
export class CardVerificationLibraryService {

  constructor() { }

  verifyCard(
    card: Card | null,
    isPotentiallyValid: boolean,
    isValid: boolean
  ): CardNumberVerification {
    return {
      card,
      isPotentiallyValid,
      isValid,
    };
  }
  
}
