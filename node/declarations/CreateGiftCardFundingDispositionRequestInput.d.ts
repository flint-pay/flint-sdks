


export type CreateGiftCardFundingDispositionRequestInput = { "disposition": "honor_value"; /** The lost dispute on the payment that funded the gift card value. pattern: ^du_[0-9A-HJKMNP-TV-Z]{26}$. */ "dispute_id": string; /** Your reason for honoring the gift card value despite the confirmed funding loss. minLength: 1. maxLength: 200. */ "reason_message": string; };
