
import type { OnboardingLaunchReferenceInput } from './OnboardingLaunchReferenceInput.js';

export type OnboardingNextStepInput = { "code": string; "launch"?: OnboardingLaunchReferenceInput; "machine_completable": boolean; "owner": string; "required_fields"?: Array<string>; "submit_endpoint"?: string; "submit_method"?: string; };
