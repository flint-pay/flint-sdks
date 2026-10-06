
import type { Merchant } from './Merchant.js';
import type { OnboardingNextStep } from './OnboardingNextStep.js';
import type { User } from './User.js';

export type OnboardingVerifyEmailResult = { /** Whether the merchant has no external API key and a default sandbox exists. */ "can_issue_api_key": boolean; "default_sandbox_id"?: string; "merchant": Merchant; "merchant_created": boolean; "next_step"?: OnboardingNextStep; /** Expiry of onboarding_session_token. The token cannot be refreshed; verify the email again to get a new one. Format: date-time. */ "onboarding_session_expires_at": string; "onboarding_session_token": string; "user": User; };
