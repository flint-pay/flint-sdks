
import type { MerchantAccountSessionStripeCollectionOptions } from './MerchantAccountSessionStripeCollectionOptions.js';

export type MerchantAccountSessionStripeComponent = { /** Collection instructions for a policy-aware component. Omitted for other components. Map future_requirements to futureRequirements when calling setCollectionOptions. */ "collection_options"?: MerchantAccountSessionStripeCollectionOptions; /** Stripe component name authorized by this session. tax_documents uses the Stripe name documents. Convert underscores to hyphens when calling Connect.create. */ "component": "account_onboarding" | "account_management" | "payouts" | "balances" | "documents" | "notification_banner" | (string & {}); };
