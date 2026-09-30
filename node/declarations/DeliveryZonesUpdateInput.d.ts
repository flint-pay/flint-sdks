import type { InputValue } from '../runtime.js';
import type { UpdateDeliveryZoneRequestInput } from './UpdateDeliveryZoneRequestInput.js';

export type DeliveryZonesUpdateInput = { "delivery_zone_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateDeliveryZoneRequestInput>; };
