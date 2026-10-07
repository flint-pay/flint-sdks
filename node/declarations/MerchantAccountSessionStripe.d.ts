
import type { MerchantAccountSessionStripeAccountSession } from './MerchantAccountSessionStripeAccountSession.js';
import type { MerchantAccountSessionStripeComponent } from './MerchantAccountSessionStripeComponent.js';

export type MerchantAccountSessionStripe = { /** Account session authority for initializing Stripe Connect in the browser. */ "account_session": MerchantAccountSessionStripeAccountSession; /** Authorized Stripe component names and collection options to apply when mounting each component. */ "components": Array<MerchantAccountSessionStripeComponent>; /** Stripe publishable key to pass as publishableKey to loadConnectAndInitialize. */ "publishable_key": string; };
