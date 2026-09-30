
import type { AnalysisInput } from './AnalysisInput.js';
import type { RuleWarningInput } from './RuleWarningInput.js';

export type RuleValidationInput = { "analysis": AnalysisInput; "warnings": Array<RuleWarningInput>; };
