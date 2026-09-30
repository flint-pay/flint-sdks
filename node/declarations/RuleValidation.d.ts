
import type { Analysis } from './Analysis.js';
import type { RuleWarning } from './RuleWarning.js';

export type RuleValidation = { "analysis": Analysis; "warnings": Array<RuleWarning>; };
