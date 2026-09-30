
import type { MerchantAccountSessionEffectivePolicy } from './MerchantAccountSessionEffectivePolicy.js';
import type { OnboardingExternalAction } from './OnboardingExternalAction.js';
import type { OnboardingRequirements } from './OnboardingRequirements.js';

export type MerchantAccountSession = { /** minItems: 1. */ "components": Array<"account_onboarding" | "account_management" | "payouts" | "balances" | "tax_documents" | "notification_banner" | (string & {})>; "effective_policy": MerchantAccountSessionEffectivePolicy; "external_action": OnboardingExternalAction; "requirements": OnboardingRequirements; };
