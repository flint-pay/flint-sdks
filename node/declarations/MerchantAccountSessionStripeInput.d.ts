
import type { MerchantAccountSessionStripeAccountSessionInput } from './MerchantAccountSessionStripeAccountSessionInput.js';
import type { MerchantAccountSessionStripeComponentInput } from './MerchantAccountSessionStripeComponentInput.js';

export type MerchantAccountSessionStripeInput = { /** Account session authority for initializing Stripe Connect in the browser. */ "account_session": MerchantAccountSessionStripeAccountSessionInput; /** Authorized Stripe component names and collection options to apply when mounting each component. */ "components": Array<MerchantAccountSessionStripeComponentInput>; /** Stripe publishable key to pass as publishableKey to loadConnectAndInitialize. */ "publishable_key": string; };
