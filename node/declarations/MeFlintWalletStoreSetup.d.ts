
import type { StripeClientSetup } from './StripeClientSetup.js';

export type MeFlintWalletStoreSetup = { "client_setup"?: StripeClientSetup; "payment_method_id": string; "status": "pending" | "active" | "failed" | "expired" | (string & {}); "store_setup_id": string; };
