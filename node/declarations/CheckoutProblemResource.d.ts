
import type { ErrorRemediation } from './ErrorRemediation.js';

export type CheckoutProblemResource = { "blocks_completion": boolean; "code": "delivery_selection_stale" | "delivery_selection_invalid" | (string & {}); "remediation"?: ErrorRemediation; "severity": "error" | (string & {}); };
