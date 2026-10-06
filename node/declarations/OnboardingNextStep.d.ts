
import type { OnboardingLaunchReference } from './OnboardingLaunchReference.js';

export type OnboardingNextStep = { "code": "check_onboarding_state" | "start_onboarding" | "complete_business_profile" | "complete_verification_step" | "wait_for_review" | "create_api_key" | (string & {}); "launch"?: OnboardingLaunchReference; "machine_completable": boolean; "owner": "agent" | "human" | "system" | (string & {}); "required_fields"?: Array<string>; "submit_endpoint"?: string; /** HTTP method for submit_endpoint. */ "submit_method"?: string; };
