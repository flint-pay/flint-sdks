
import type { NextActionInput } from './NextActionInput.js';

export type ErrorRemediationInput = { "missing_or_invalid_fields"?: Array<string>; "next_actions"?: Array<NextActionInput>; "next_steps"?: string; "retryable"?: boolean; };
