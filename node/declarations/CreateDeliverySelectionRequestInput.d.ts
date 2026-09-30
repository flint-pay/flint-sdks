
import type { CreateDeliverySelectionChoiceRequestInput } from './CreateDeliverySelectionChoiceRequestInput.js';
import type { DeliverySelectionRecipientRequestInput } from './DeliverySelectionRecipientRequestInput.js';
import type { PostalAddressInput } from './PostalAddressInput.js';

export type CreateDeliverySelectionRequestInput = { "choices": Array<CreateDeliverySelectionChoiceRequestInput>; "delivery_quote_id": string; "destination_address"?: PostalAddressInput; /** Current delivery selection ID used for compare-and-swap. Send null to assert that no selection exists. */ "expected_delivery_selection_id": string | null; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "external_system"?: string; "recipient"?: DeliverySelectionRecipientRequestInput; };
