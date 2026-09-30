


/** A closed owner-specific billing schedule update. */ export type UpdateSubscriptionBillingScheduleRequest = (({ /** Format: int32. */ "billing_anchor_day"?: number; "initiated_by": "buyer" | "merchant" | "integration" | (string & {}); /** Future date at which Flint attempts the next charge. Format: date-time. */ "next_billing_at": string; "owner": "flint"; }) | ({ "initiated_by": "buyer" | "merchant" | "integration" | (string & {}); /** Future date at which Flint attempts the next charge. Omit to preserve the date or send null to clear it. Format: date-time. */ "next_billing_at"?: string | null; "owner": "external"; }) | (object));
