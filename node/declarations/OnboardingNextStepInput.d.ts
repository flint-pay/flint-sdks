
import type { OnboardingLaunchReferenceInput } from './OnboardingLaunchReferenceInput.js';

export type OnboardingNextStepInput = { "code": "check_onboarding_state" | "start_onboarding" | "complete_business_profile" | "complete_verification_step" | "wait_for_review" | "create_api_key"; "launch"?: OnboardingLaunchReferenceInput; "machine_completable": boolean; "owner": "agent" | "human" | "system"; "required_fields"?: Array<string>; "submit_endpoint"?: string; /** HTTP method for submit_endpoint. */ "submit_method"?: string; };
