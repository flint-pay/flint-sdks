import type { InputValue } from '../runtime.js';
import type { CreateReportRequestInput } from './CreateReportRequestInput.js';

export type ReportsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateReportRequestInput>; };
