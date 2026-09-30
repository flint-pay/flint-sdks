
import type { Merchant } from './Merchant.js';
import type { OnboardingNextStep } from './OnboardingNextStep.js';
import type { User } from './User.js';

export type OnboardingVerifyEmailResult = { "can_issue_api_key": boolean; "default_sandbox_id"?: string; "merchant": Merchant; "merchant_created": boolean; "next_step"?: OnboardingNextStep; "onboarding_session_token": string; "status": string; "user": User; };
