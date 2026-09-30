
import type { DeliveryCountryConditionInput } from './DeliveryCountryConditionInput.js';
import type { DeliveryCustomerBooleanConditionInput } from './DeliveryCustomerBooleanConditionInput.js';
import type { DeliveryCustomerGroupConditionInput } from './DeliveryCustomerGroupConditionInput.js';
import type { DeliveryEligibilityExpressionInput } from './DeliveryEligibilityExpressionInput.js';
import type { DeliveryPostalCodeConditionInput } from './DeliveryPostalCodeConditionInput.js';
import type { DeliveryRadiusConditionInput } from './DeliveryRadiusConditionInput.js';
import type { DeliveryStateConditionInput } from './DeliveryStateConditionInput.js';
import type { DeliveryWindowTimeConditionInput } from './DeliveryWindowTimeConditionInput.js';
import type { DeliveryZoneConditionInput } from './DeliveryZoneConditionInput.js';
import type { MoneyValueInput } from './MoneyValueInput.js';

export type DeliveryPricingRateRequestInput = { "currency_options": Record<string, MoneyValueInput>; /** Stable rate identifier returned by Flint. Include it when updating or retaining an existing rate. */ "delivery_rate_id"?: string; /** Format: int32. */ "priority": number; /** A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. */ "when": ({ /** minItems: 1. maxItems: 100. */ "all"?: Array<DeliveryEligibilityExpressionInput>; /** minItems: 1. maxItems: 100. */ "any"?: Array<DeliveryEligibilityExpressionInput>; "country"?: DeliveryCountryConditionInput; "customer_group"?: DeliveryCustomerGroupConditionInput; "customer_has_email"?: DeliveryCustomerBooleanConditionInput; "customer_has_phone_number"?: DeliveryCustomerBooleanConditionInput; "customer_verified"?: DeliveryCustomerBooleanConditionInput; "not"?: DeliveryEligibilityExpressionInput; "postal_code"?: DeliveryPostalCodeConditionInput; "radius"?: DeliveryRadiusConditionInput; "state"?: DeliveryStateConditionInput; "window_time"?: DeliveryWindowTimeConditionInput; "zone"?: DeliveryZoneConditionInput; }) & (({ "all": unknown; }) | ({ "any": unknown; }) | ({ "not": unknown; }) | ({ "zone": unknown; }) | ({ "country": unknown; }) | ({ "state": unknown; }) | ({ "postal_code": unknown; }) | ({ "radius": unknown; }) | ({ "window_time": unknown; }) | ({ "customer_group": unknown; }) | ({ "customer_verified": unknown; }) | ({ "customer_has_email": unknown; }) | ({ "customer_has_phone_number": unknown; })); };
