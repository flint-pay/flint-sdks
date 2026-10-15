import type { InputValue } from '../runtime.js';
import type { DeveloperInitialAPIKeyRequestInput } from './DeveloperInitialAPIKeyRequestInput.js';

export type OnboardingCreateAPIKeyInput = { "Idempotency-Key"?: InputValue<string>; "sandbox_id"?: InputValue<string>; "body": InputValue<DeveloperInitialAPIKeyRequestInput>; };
