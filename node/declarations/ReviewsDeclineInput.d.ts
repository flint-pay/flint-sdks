import type { InputValue } from '../runtime.js';
import type { DeclineReviewRequestInput } from './DeclineReviewRequestInput.js';

export type ReviewsDeclineInput = { "review_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body"?: InputValue<DeclineReviewRequestInput>; };
