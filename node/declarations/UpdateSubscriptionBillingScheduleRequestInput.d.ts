


/** A closed owner-specific billing schedule update. */ export type UpdateSubscriptionBillingScheduleRequestInput = (({ /** Format: int32. */ "billing_anchor_day"?: number; "initiated_by": "buyer" | "merchant" | "integration"; /** Future date at which Flint attempts the next charge. Format: date-time. */ "next_billing_at": string | globalThis.Date; "owner": "flint"; }) | ({ "initiated_by": "buyer" | "merchant" | "integration"; /** Future date at which Flint attempts the next charge. Omit to preserve the date or send null to clear it. Format: date-time. */ "next_billing_at"?: string | globalThis.Date | null; "owner": "external"; }));
