import type { InputValue } from '../runtime.js';
import type { RevokeDeliveryDependencyRequestInput } from './RevokeDeliveryDependencyRequestInput.js';

export type DeliveryRevocationsRevokeDeliveryDependencyInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<RevokeDeliveryDependencyRequestInput>; };
