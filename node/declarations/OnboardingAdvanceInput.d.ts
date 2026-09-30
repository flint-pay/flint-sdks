import type { InputValue } from '../runtime.js';
import type { OnboardingAdvanceRequestInput } from './OnboardingAdvanceRequestInput.js';

export type OnboardingAdvanceInput = { "sandbox_id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<OnboardingAdvanceRequestInput>; };
