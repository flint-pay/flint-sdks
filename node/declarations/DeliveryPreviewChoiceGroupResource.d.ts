
import type { DeliveryCandidateOutcomeResource } from './DeliveryCandidateOutcomeResource.js';
import type { DeliveryInputRequirement } from './DeliveryInputRequirement.js';
import type { DeliveryOptionProjection } from './DeliveryOptionProjection.js';
import type { DeliveryQuoteExecutionLegResource } from './DeliveryQuoteExecutionLegResource.js';
import type { DeliveryQuoteLineItemResource } from './DeliveryQuoteLineItemResource.js';

export type DeliveryPreviewChoiceGroupResource = { "allowed_types"?: Array<string>; "availability_status": "ready" | "needs_input" | "needs_checkout_context" | "unavailable" | (string & {}); "candidate_outcomes": Record<string, DeliveryCandidateOutcomeResource>; "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {}); /** Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. */ "execution_legs"?: Array<DeliveryQuoteExecutionLegResource>; "input_requirements": Array<DeliveryInputRequirement>; "line_items": Array<DeliveryQuoteLineItemResource>; "options": Array<DeliveryOptionProjection>; };
