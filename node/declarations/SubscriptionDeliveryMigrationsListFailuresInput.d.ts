import type { InputValue } from '../runtime.js';


export type SubscriptionDeliveryMigrationsListFailuresInput = { "subscription_delivery_migration_id": InputValue<string>; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "reason"?: InputValue<"method_not_offered" | "destination_not_served" | "rate_unavailable" | "method_unavailable" | "no_longer_applicable" | "not_movable">; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
