
import type { Address } from './Address.js';

export type FulfillmentRecipient = { "address"?: Address; "email"?: string; /** Instructions for handling the recipient's order. For a pickup that checkout creates, this is the note the buyer left for the store, such as the car to look for. */ "instructions"?: string; "name"?: string; "phone"?: string; };
