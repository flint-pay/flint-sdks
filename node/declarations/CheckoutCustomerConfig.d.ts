
import type { PrefilledCustomerInfo } from './PrefilledCustomerInfo.js';

export type CheckoutCustomerConfig = { "customer_id"?: string; "enable_address_autocomplete"?: boolean; /** Caller-owned identifier for this resource in an external system. maxLength: 255. */ "external_reference_id"?: string; "prefilled_customer_info"?: PrefilledCustomerInfo; "require_billing_address"?: boolean; "require_email"?: boolean; "require_phone"?: boolean; };
