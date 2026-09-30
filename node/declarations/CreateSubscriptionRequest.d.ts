
import type { SubscriptionBillingScheduleRequest } from './SubscriptionBillingScheduleRequest.js';
import type { SubscriptionBillingStartRequest } from './SubscriptionBillingStartRequest.js';
import type { SubscriptionServiceLocationRequest } from './SubscriptionServiceLocationRequest.js';

export type CreateSubscriptionRequest = ({ /** Format: int32. */ "billing_anchor_day"?: number; "billing_schedule"?: SubscriptionBillingScheduleRequest; "billing_start": SubscriptionBillingStartRequest; "customer_id": string; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "metadata"?: Record<string, string>; "payment_method_id"?: string; "plan_id": string; "service_location"?: SubscriptionServiceLocationRequest; }) & (({ "billing_schedule": { "owner": "flint" | (string & {}); }; }) | (({ "billing_schedule": { "owner": "external" | (string & {}); }; })) | (unknown) | (object));
