import type { InputValue } from '../runtime.js';
import type { OnboardingStartRequestInput } from './OnboardingStartRequestInput.js';

export type OnboardingStartFlowInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<OnboardingStartRequestInput>; };
