
import type { MerchantAccountSessionStripeRequirements } from './MerchantAccountSessionStripeRequirements.js';

export type MerchantAccountSessionStripeCollectionOptions = { /** Requirement collection breadth to pass as fields to setCollectionOptions. */ "fields": "currently_due" | "eventually_due" | (string & {}); /** Whether to collect future requirements. Pass this value as futureRequirements to setCollectionOptions. */ "future_requirements": "omit" | "include" | (string & {}); /** Targeted requirement collection restriction to pass as requirements to setCollectionOptions. Omitted when collection is not targeted. */ "requirements"?: MerchantAccountSessionStripeRequirements; };
