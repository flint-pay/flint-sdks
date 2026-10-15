import type { InputValue } from '../runtime.js';
import type { CreateDemoSessionRequestInput } from './CreateDemoSessionRequestInput.js';

export type DemoSessionsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Turnstile-Token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CreateDemoSessionRequestInput>; };
