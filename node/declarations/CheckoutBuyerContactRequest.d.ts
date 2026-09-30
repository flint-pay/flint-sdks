


/** Buyer contact to save. Send at least one field. Omitted fields keep their saved value; null clears a saved value. Values are stored exactly as sent, so an email with surrounding spaces is rejected. */ export type CheckoutBuyerContactRequest = { /** Email the buyer entered, such as buyer@example.com. Null clears the saved email. Format: email. maxLength: 255. */ "email"?: string | null; /** Phone the buyer entered, in E.164 format, such as +14155551234. Null clears the saved phone. pattern: ^\+[1-9][0-9]{1,14}$. */ "phone"?: string | null; };
