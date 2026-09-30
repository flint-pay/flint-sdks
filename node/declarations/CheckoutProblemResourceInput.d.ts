
import type { ErrorRemediationInput } from './ErrorRemediationInput.js';

export type CheckoutProblemResourceInput = { "blocks_completion": boolean; "code": "delivery_selection_stale" | "delivery_selection_invalid"; "remediation"?: ErrorRemediationInput; "severity": "error"; };
