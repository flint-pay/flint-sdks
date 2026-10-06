
import type { SubscriptionBillingScheduleRequestInput } from './SubscriptionBillingScheduleRequestInput.js';
import type { SubscriptionBillingStartRequestInput } from './SubscriptionBillingStartRequestInput.js';
import type { SubscriptionServiceLocationRequestInput } from './SubscriptionServiceLocationRequestInput.js';

export type CreateSubscriptionRequestInput = ({ /** Format: int32. */ "billing_anchor_day"?: number; "billing_schedule"?: SubscriptionBillingScheduleRequestInput; "billing_start": SubscriptionBillingStartRequestInput; "customer_id": string; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "metadata"?: Record<string, string>; "payment_method_id"?: string; "service_location"?: SubscriptionServiceLocationRequestInput; "subscription_plan_id": string; }) & (({ "billing_schedule": { "owner": "flint"; }; }) | (({ "billing_schedule": { "owner": "external"; }; }) & ({ "billing_anchor_day"?: never })) | ((({ "billing_schedule"?: never }) & ({ "billing_anchor_day"?: never }))));
