
import type { PostalAddress } from './PostalAddress.js';

/** Details the buyer's checkout can prefill from the customer it acts for. */ export type CheckoutCustomerPrefill = { /** The customer's default billing address. Omitted when the customer has none. */ "billing_address"?: PostalAddress; /** The customer's email. */ "email": string; /** The customer's default shipping address. Omitted when the customer has none. */ "shipping_address"?: PostalAddress; /** Recipient name saved with the customer's default shipping address. Present only with `shipping_address`; omitted when that address was set on the customer without a saved recipient. */ "shipping_recipient_name"?: string; };
