
import type { Address } from './Address.js';
import type { CreateDeliverySelectionChoiceRequest } from './CreateDeliverySelectionChoiceRequest.js';
import type { DeliverySelectionRecipientRequest } from './DeliverySelectionRecipientRequest.js';

export type CreateDeliverySelectionRequest = { "choices": Array<CreateDeliverySelectionChoiceRequest>; "delivery_quote_id": string; "destination_address"?: Address; /** Current delivery selection ID used for compare-and-swap. Send null to assert that no selection exists. */ "expected_delivery_selection_id": string | null; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "external_system"?: string; "recipient"?: DeliverySelectionRecipientRequest; };
