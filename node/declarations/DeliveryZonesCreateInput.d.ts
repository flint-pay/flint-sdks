import type { InputValue } from '../runtime.js';
import type { CreateDeliveryZoneRequestInput } from './CreateDeliveryZoneRequestInput.js';

export type DeliveryZonesCreateInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateDeliveryZoneRequestInput>; };
