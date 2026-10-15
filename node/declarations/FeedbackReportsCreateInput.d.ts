import type { InputValue } from '../runtime.js';
import type { CreateFeedbackReportRequestInput } from './CreateFeedbackReportRequestInput.js';

export type FeedbackReportsCreateInput = { /** minLength: 1. maxLength: 255. */ "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CreateFeedbackReportRequestInput>; };
