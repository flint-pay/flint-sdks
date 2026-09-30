
import type { PostalAddressInput } from './PostalAddressInput.js';

export type FulfillmentRecipientInput = { "address"?: PostalAddressInput; "email"?: string; /** Instructions for handling the recipient's order. For a pickup that checkout creates, this is the note the buyer left for the store, such as the car to look for. */ "instructions"?: string; "name"?: string; "phone"?: string; };
