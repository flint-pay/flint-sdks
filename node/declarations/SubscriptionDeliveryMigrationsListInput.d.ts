import type { InputValue } from '../runtime.js';


export type SubscriptionDeliveryMigrationsListInput = { /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "from_delivery_method_id"?: InputValue<string>; "status"?: InputValue<"pending" | "running" | "completed">; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
