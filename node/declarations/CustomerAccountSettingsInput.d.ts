
import type { BuyerCapabilitiesInput } from './BuyerCapabilitiesInput.js';
import type { CustomerAccountPresentationInput } from './CustomerAccountPresentationInput.js';
import type { CustomerAccountRouteTemplatesInput } from './CustomerAccountRouteTemplatesInput.js';

export type CustomerAccountSettingsInput = { /** What buyers may do to their own subscriptions in Flint's buyer account or through a customer session, in either mode. Merchant credentials are not bound by it. Buyers can always cancel. Written as a whole: an update that includes buyer_capabilities replaces the stored value, and each field it omits takes its default. Effective settings include every default. */ "buyer_capabilities"?: BuyerCapabilitiesInput; "merchant_account_url"?: string; "mode"?: "flint_hosted" | "merchant_hosted"; "presentation"?: CustomerAccountPresentationInput; "route_templates"?: CustomerAccountRouteTemplatesInput; };
