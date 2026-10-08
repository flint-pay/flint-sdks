


/** How billing begins. Send exactly one closed tagged-union branch. */ export type SubscriptionBillingStartRequest = (({ "type": "immediate"; }) | ({ /** Future instant when the first billing period starts. Format: date-time. */ "starts_at": string; "type": "scheduled"; }) | ({ /** Number of billing cycles already charged on the previous billing system, including the current imported period. The subscription's completed_cycles starts here, and the next renewal's subscription_cycle is this number plus one. minimum: 0. */ "completed_cycles"?: number; /** Start of the already-running billing period being imported. Format: date-time. */ "period_started_at": string; "type": "imported"; }) | (object));
