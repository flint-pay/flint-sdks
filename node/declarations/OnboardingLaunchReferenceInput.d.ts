
import type { OnboardingLaunchRecommendedPolicyInput } from './OnboardingLaunchRecommendedPolicyInput.js';

export type OnboardingLaunchReferenceInput = { "component": "account_onboarding"; /** Endpoint for creating the browser session. Uses the same public API base URL as submit_endpoint: absolute when configured, relative otherwise. */ "endpoint": string; "method": "POST"; "recommended_policy": OnboardingLaunchRecommendedPolicyInput; "sandbox_id"?: string; };
