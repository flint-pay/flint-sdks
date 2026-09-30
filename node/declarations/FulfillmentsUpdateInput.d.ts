import type { InputValue } from '../runtime.js';
import type { UpdateFulfillmentRequestInput } from './UpdateFulfillmentRequestInput.js';

export type FulfillmentsUpdateInput = { "fulfillment_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; /** Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages. */ "body": InputValue<UpdateFulfillmentRequestInput>; };
