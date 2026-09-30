
import type { MerchantAccountSessionEffectivePolicyInput } from './MerchantAccountSessionEffectivePolicyInput.js';
import type { OnboardingExternalActionInput } from './OnboardingExternalActionInput.js';
import type { OnboardingRequirementsInput } from './OnboardingRequirementsInput.js';

export type MerchantAccountSessionInput = { /** minItems: 1. */ "components": Array<"account_onboarding" | "account_management" | "payouts" | "balances" | "tax_documents" | "notification_banner">; "effective_policy": MerchantAccountSessionEffectivePolicyInput; "external_action": OnboardingExternalActionInput; "requirements": OnboardingRequirementsInput; };
