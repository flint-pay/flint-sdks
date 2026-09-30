


export type DeliverySelectionRecipientRequest = { /** Recipient email address. When the selected delivery option requires it, payment needs it: send it with this selection or a later one. Format: email. maxLength: 254. */ "email"?: string; /** Recipient name. When the selected delivery option requires it, payment needs it: send it with this selection or a later one. maxLength: 200. */ "name"?: string; /** Recipient phone number in E.164 format. When the selected delivery option requires it, payment needs it: send it with this selection or a later one. maxLength: 16. pattern: ^\+[1-9][0-9]{7,14}$. */ "phone"?: string; };
