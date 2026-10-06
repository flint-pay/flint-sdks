


/** Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. */ export type CheckoutBuyerContactRequest = { /** Email for the buyer, such as buyer@example.com. On checkout session updates, null clears the saved email. Format: email. maxLength: 255. */ "email"?: string | null; /** Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates, null clears the saved phone. pattern: ^\+[1-9][0-9]{1,14}$. */ "phone"?: string | null; };
