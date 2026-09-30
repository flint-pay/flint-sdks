
import type { CustomerAccountPresentation } from './CustomerAccountPresentation.js';
import type { CustomerAccountRouteTemplates } from './CustomerAccountRouteTemplates.js';

export type CustomerAccountSettings = { "merchant_account_url"?: string; "mode"?: "flint_hosted" | "merchant_hosted" | (string & {}); "presentation"?: CustomerAccountPresentation; "route_templates"?: CustomerAccountRouteTemplates; };
