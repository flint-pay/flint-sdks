import type { InputValue } from '../runtime.js';
import type { OnboardingVerifyEmailRequestInput } from './OnboardingVerifyEmailRequestInput.js';

export type OnboardingVerifyEmailCodeInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<OnboardingVerifyEmailRequestInput>; };
