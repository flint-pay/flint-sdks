
import type { OnboardingLaunchRecommendedPolicy } from './OnboardingLaunchRecommendedPolicy.js';

export type OnboardingLaunchReference = { "component": "account_onboarding" | (string & {}); "endpoint": string; "method": "POST" | (string & {}); "recommended_policy": OnboardingLaunchRecommendedPolicy; "sandbox_id"?: string; };
