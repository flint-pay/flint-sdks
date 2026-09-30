


/** How billing begins. Send exactly one closed tagged-union branch. */ export type SubscriptionBillingStartRequestInput = (({ "type": "immediate"; }) | ({ /** Future instant when the first billing period starts. Format: date-time. */ "starts_at": string | globalThis.Date; "type": "scheduled"; }) | ({ /** Start of the already-running billing period being imported. Format: date-time. */ "period_started_at": string | globalThis.Date; "type": "imported"; }));
