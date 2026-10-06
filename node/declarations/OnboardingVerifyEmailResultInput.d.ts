
import type { MerchantInput } from './MerchantInput.js';
import type { OnboardingNextStepInput } from './OnboardingNextStepInput.js';
import type { UserInput } from './UserInput.js';

export type OnboardingVerifyEmailResultInput = { /** Whether the merchant has no external API key and a default sandbox exists. */ "can_issue_api_key": boolean; "default_sandbox_id"?: string; "merchant": MerchantInput; "merchant_created": boolean; "next_step"?: OnboardingNextStepInput; /** Expiry of onboarding_session_token. The token cannot be refreshed; verify the email again to get a new one. Format: date-time. */ "onboarding_session_expires_at": string | globalThis.Date; "onboarding_session_token": string; "user": UserInput; };
