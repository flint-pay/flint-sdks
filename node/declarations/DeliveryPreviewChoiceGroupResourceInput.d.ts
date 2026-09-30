
import type { DeliveryCandidateOutcomeResourceInput } from './DeliveryCandidateOutcomeResourceInput.js';
import type { DeliveryInputRequirementInput } from './DeliveryInputRequirementInput.js';
import type { DeliveryOptionProjectionInput } from './DeliveryOptionProjectionInput.js';
import type { DeliveryQuoteExecutionLegResourceInput } from './DeliveryQuoteExecutionLegResourceInput.js';
import type { DeliveryQuoteLineItemResourceInput } from './DeliveryQuoteLineItemResourceInput.js';

export type DeliveryPreviewChoiceGroupResourceInput = { "allowed_types"?: Array<string>; "availability_status": "ready" | "needs_input" | "needs_checkout_context" | "unavailable"; "candidate_outcomes": Record<string, DeliveryCandidateOutcomeResourceInput>; "evaluation_status": "complete" | "incomplete" | "degraded"; /** Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. */ "execution_legs"?: Array<DeliveryQuoteExecutionLegResourceInput>; "input_requirements": Array<DeliveryInputRequirementInput>; "line_items": Array<DeliveryQuoteLineItemResourceInput>; "options": Array<DeliveryOptionProjectionInput>; };
