import type { InputValue } from '../runtime.js';
import type { UpdateShipmentRequestInput } from './UpdateShipmentRequestInput.js';

export type ShipmentsUpdateInput = { "shipment_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<UpdateShipmentRequestInput>; };
