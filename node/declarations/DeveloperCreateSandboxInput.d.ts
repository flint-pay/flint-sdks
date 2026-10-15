import type { InputValue } from '../runtime.js';
import type { CreateSandboxRequestInput } from './CreateSandboxRequestInput.js';

export type DeveloperCreateSandboxInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CreateSandboxRequestInput>; };
