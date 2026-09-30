import type { InputValue } from '../runtime.js';
import type { DeveloperInitialAPIKeyRequestInput } from './DeveloperInitialAPIKeyRequestInput.js';

export type OnboardingCreateAPIKeyInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<DeveloperInitialAPIKeyRequestInput>; };
