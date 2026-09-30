


export type OrderDeliveryDestinationRecipientRequest = ({ /** maxLength: 255. */ "name"?: string; /** maxLength: 30. */ "phone"?: string; }) & (({ /** minLength: 1. pattern: \S. */ "name": string; }) | ({ /** minLength: 1. pattern: \S. */ "phone": string; }) | (object));
