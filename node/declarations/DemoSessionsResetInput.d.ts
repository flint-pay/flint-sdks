import type { InputValue } from '../runtime.js';
import type { CreateDemoSessionRequestInput } from './CreateDemoSessionRequestInput.js';

export type DemoSessionsResetInput = { "X-Turnstile-Token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CreateDemoSessionRequestInput>; };
