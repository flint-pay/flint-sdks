import type { InputValue } from '../runtime.js';
import type { IssueSandboxAPIKeyRequestInput } from './IssueSandboxAPIKeyRequestInput.js';

export type DeveloperIssueSandboxTestKeyInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "sandbox_id": InputValue<string>; "body": InputValue<IssueSandboxAPIKeyRequestInput>; };
