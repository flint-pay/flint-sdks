
import type { NextAction } from './NextAction.js';

export type ErrorRemediation = { "missing_or_invalid_fields"?: Array<string>; "next_actions"?: Array<NextAction>; "next_steps"?: string; "retryable"?: boolean; };
