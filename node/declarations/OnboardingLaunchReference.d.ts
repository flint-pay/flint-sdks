
import type { OnboardingLaunchRecommendedPolicy } from './OnboardingLaunchRecommendedPolicy.js';

export type OnboardingLaunchReference = { "component": "account_onboarding" | (string & {}); /** Endpoint for creating the browser session. Uses the same public API base URL as submit_endpoint: absolute when configured, relative otherwise. */ "endpoint": string; "method": "POST" | (string & {}); "recommended_policy": OnboardingLaunchRecommendedPolicy; "sandbox_id"?: string; };
