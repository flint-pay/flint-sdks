
import type { ReturnLineDecision } from './ReturnLineDecision.js';

export type DecideReturnRequest = { /** Omit to use the completion mode established by all matched return policies. Required when the policies disagree or do not establish a mode. */ "completion_mode"?: "manual" | "automatic" | (string & {}); /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; /** minItems: 1. */ "line_items": Array<ReturnLineDecision>; };
