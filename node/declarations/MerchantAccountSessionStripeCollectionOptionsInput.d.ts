
import type { MerchantAccountSessionStripeRequirementsInput } from './MerchantAccountSessionStripeRequirementsInput.js';

export type MerchantAccountSessionStripeCollectionOptionsInput = { /** Requirement collection breadth to pass as fields to setCollectionOptions. */ "fields": "currently_due" | "eventually_due"; /** Whether to collect future requirements. Pass this value as futureRequirements to setCollectionOptions. */ "future_requirements": "omit" | "include"; /** Targeted requirement collection restriction to pass as requirements to setCollectionOptions. Omitted when collection is not targeted. */ "requirements"?: MerchantAccountSessionStripeRequirementsInput; };
