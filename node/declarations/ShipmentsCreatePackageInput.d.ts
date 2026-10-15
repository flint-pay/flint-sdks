import type { InputValue } from '../runtime.js';
import type { CreatePackageRequestInput } from './CreatePackageRequestInput.js';

export type ShipmentsCreatePackageInput = { "shipment_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CreatePackageRequestInput>; };
