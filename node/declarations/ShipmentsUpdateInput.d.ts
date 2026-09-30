import type { InputValue } from '../runtime.js';
import type { UpdateShipmentRequestInput } from './UpdateShipmentRequestInput.js';

export type ShipmentsUpdateInput = { "shipment_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateShipmentRequestInput>; };
