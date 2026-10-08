
import type { DeliveryCountryCondition } from './DeliveryCountryCondition.js';
import type { DeliveryCustomerBooleanCondition } from './DeliveryCustomerBooleanCondition.js';
import type { DeliveryCustomerGroupCondition } from './DeliveryCustomerGroupCondition.js';
import type { DeliveryEligibilityExpression } from './DeliveryEligibilityExpression.js';
import type { DeliveryPostalCodeCondition } from './DeliveryPostalCodeCondition.js';
import type { DeliveryRadiusCondition } from './DeliveryRadiusCondition.js';
import type { DeliveryStateCondition } from './DeliveryStateCondition.js';
import type { DeliveryWindowTimeCondition } from './DeliveryWindowTimeCondition.js';
import type { DeliveryZoneCondition } from './DeliveryZoneCondition.js';
import type { MoneyValue } from './MoneyValue.js';

export type DeliveryPricingRate = { "currency_options": Record<string, MoneyValue>; "delivery_rate_id": string; /** Format: int32. */ "priority": number; /** A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. */ "when"?: ({ /** minItems: 1. maxItems: 100. */ "all"?: Array<DeliveryEligibilityExpression>; /** minItems: 1. maxItems: 100. */ "any"?: Array<DeliveryEligibilityExpression>; "country"?: DeliveryCountryCondition; "customer_group"?: DeliveryCustomerGroupCondition; "customer_has_email"?: DeliveryCustomerBooleanCondition; "customer_has_phone"?: DeliveryCustomerBooleanCondition; "customer_verified"?: DeliveryCustomerBooleanCondition; "not"?: DeliveryEligibilityExpression; "postal_code"?: DeliveryPostalCodeCondition; "radius"?: DeliveryRadiusCondition; "state"?: DeliveryStateCondition; "subscription_purchase"?: DeliveryCustomerBooleanCondition; "window_time"?: DeliveryWindowTimeCondition; "zone"?: DeliveryZoneCondition; }) & (({ "all": unknown; }) | ({ "any": unknown; }) | ({ "not": unknown; }) | ({ "zone": unknown; }) | ({ "country": unknown; }) | ({ "state": unknown; }) | ({ "postal_code": unknown; }) | ({ "radius": unknown; }) | ({ "window_time": unknown; }) | ({ "customer_group": unknown; }) | ({ "customer_verified": unknown; }) | ({ "customer_has_email": unknown; }) | ({ "customer_has_phone": unknown; }) | ({ "subscription_purchase": unknown; }) | (object)); };
