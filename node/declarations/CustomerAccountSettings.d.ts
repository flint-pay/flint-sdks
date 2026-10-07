
import type { BuyerCapabilities } from './BuyerCapabilities.js';
import type { CustomerAccountPresentation } from './CustomerAccountPresentation.js';
import type { CustomerAccountRouteTemplates } from './CustomerAccountRouteTemplates.js';

export type CustomerAccountSettings = { /** What buyers may do to their own subscriptions in Flint's buyer account or through a customer session, in either mode. Merchant credentials are not bound by it. Buyers can always cancel. Written as a whole: an update that includes buyer_capabilities replaces the stored value, and each field it omits takes its default. Effective settings include every default. */ "buyer_capabilities"?: BuyerCapabilities; "merchant_account_url"?: string; "mode"?: "flint_hosted" | "merchant_hosted" | (string & {}); "presentation"?: CustomerAccountPresentation; "route_templates"?: CustomerAccountRouteTemplates; };
