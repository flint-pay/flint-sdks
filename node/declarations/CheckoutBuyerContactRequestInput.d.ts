
import type { CheckoutBuyerContactRequest } from './CheckoutBuyerContactRequest.js';

/** Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. */ export type CheckoutBuyerContactRequestInput = CheckoutBuyerContactRequest;
