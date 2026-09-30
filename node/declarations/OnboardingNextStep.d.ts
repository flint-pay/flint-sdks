
import type { OnboardingLaunchReference } from './OnboardingLaunchReference.js';

export type OnboardingNextStep = { "code": string; "launch"?: OnboardingLaunchReference; "machine_completable": boolean; "owner": string; "required_fields"?: Array<string>; "submit_endpoint"?: string; "submit_method"?: string; };
