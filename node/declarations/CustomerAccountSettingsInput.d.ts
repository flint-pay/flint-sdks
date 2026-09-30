
import type { CustomerAccountPresentationInput } from './CustomerAccountPresentationInput.js';
import type { CustomerAccountRouteTemplatesInput } from './CustomerAccountRouteTemplatesInput.js';

export type CustomerAccountSettingsInput = { "merchant_account_url"?: string; "mode"?: "flint_hosted" | "merchant_hosted"; "presentation"?: CustomerAccountPresentationInput; "route_templates"?: CustomerAccountRouteTemplatesInput; };
