
import type { MerchantInput } from './MerchantInput.js';
import type { OnboardingNextStepInput } from './OnboardingNextStepInput.js';
import type { UserInput } from './UserInput.js';

export type OnboardingVerifyEmailResultInput = { "can_issue_api_key": boolean; "default_sandbox_id"?: string; "merchant": MerchantInput; "merchant_created": boolean; "next_step"?: OnboardingNextStepInput; "onboarding_session_token": string; "status": string; "user": UserInput; };
