


/** Contact the buyer entered in checkout before paying. */ export type CheckoutBuyerContact = { /** Email the buyer entered, exactly as typed. Null when the buyer has not entered an email or cleared it. Format: email. maxLength: 255. */ "email": string | null; /** Phone the buyer entered, in E.164 format. Null when the buyer has not entered a phone or cleared it. pattern: ^\+[1-9][0-9]{1,14}$. */ "phone": string | null; /** When the buyer last changed the saved contact. Format: date-time. */ "updated_at": string; };
