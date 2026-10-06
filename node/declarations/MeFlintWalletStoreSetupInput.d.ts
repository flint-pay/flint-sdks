
import type { StripeClientSetupInput } from './StripeClientSetupInput.js';

export type MeFlintWalletStoreSetupInput = { "client_setup"?: StripeClientSetupInput; "payment_method_id": string; "status": "pending" | "active" | "failed" | "expired"; "store_setup_id": string; };
