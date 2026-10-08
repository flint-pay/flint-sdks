import type { InputValue } from '../runtime.js';
import type { CreateSubscriptionDeliveryMigrationRequestInput } from './CreateSubscriptionDeliveryMigrationRequestInput.js';

export type SubscriptionDeliveryMigrationsCreateInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateSubscriptionDeliveryMigrationRequestInput>; };
