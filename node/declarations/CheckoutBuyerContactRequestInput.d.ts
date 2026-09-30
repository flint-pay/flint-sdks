
import type { CheckoutBuyerContactRequest } from './CheckoutBuyerContactRequest.js';

/** Buyer contact to save. Send at least one field. Omitted fields keep their saved value; null clears a saved value. Values are stored exactly as sent, so an email with surrounding spaces is rejected. */ export type CheckoutBuyerContactRequestInput = CheckoutBuyerContactRequest;
