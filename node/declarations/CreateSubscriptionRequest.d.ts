
import type { SubscriptionBillingScheduleRequest } from './SubscriptionBillingScheduleRequest.js';
import type { SubscriptionBillingStartRequest } from './SubscriptionBillingStartRequest.js';
import type { SubscriptionDeliveryRequest } from './SubscriptionDeliveryRequest.js';
import type { SubscriptionServiceLocationRequest } from './SubscriptionServiceLocationRequest.js';

export type CreateSubscriptionRequest = ({ /** Format: int32. */ "billing_anchor_day"?: number; "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {}); /** minimum: 1. maximum: 365. */ "billing_interval_count"?: number; "billing_schedule"?: SubscriptionBillingScheduleRequest; "billing_start": SubscriptionBillingStartRequest; "customer_id": string; "delivery"?: SubscriptionDeliveryRequest; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "metadata"?: Record<string, string>; "payment_method_id"?: string; /** Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100. */ "quantity"?: number; "service_location"?: SubscriptionServiceLocationRequest; "subscription_plan_id": string; }) & (({ "billing_schedule": { "owner": "flint" | (string & {}); }; }) | (({ "billing_schedule": { "owner": "external" | (string & {}); }; })) | (unknown) | (object));
