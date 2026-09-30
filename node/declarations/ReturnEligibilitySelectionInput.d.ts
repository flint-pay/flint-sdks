
import type { ReturnLineItemRequestInput } from './ReturnLineItemRequestInput.js';

export type ReturnEligibilitySelectionInput = ({ "line_items"?: Array<ReturnLineItemRequestInput>; "selection_type": "all_remaining_fulfilled" | "line_items"; }) & ((({ "selection_type": "all_remaining_fulfilled"; }) & ({ "line_items"?: never })) | ({ /** minItems: 1. */ "line_items": unknown; "selection_type": "line_items"; }));
