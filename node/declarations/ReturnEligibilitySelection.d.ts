
import type { ReturnLineItemRequest } from './ReturnLineItemRequest.js';

export type ReturnEligibilitySelection = ({ "line_items"?: Array<ReturnLineItemRequest>; "selection_type": "all_remaining_fulfilled" | "line_items" | (string & {}); }) & ((({ "selection_type": "all_remaining_fulfilled"; })) | ({ /** minItems: 1. */ "line_items": unknown; "selection_type": "line_items"; }) | (object));
