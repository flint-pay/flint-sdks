
import type { DeliveryCountryConditionInput } from './DeliveryCountryConditionInput.js';
import type { DeliveryPostalCodeConditionInput } from './DeliveryPostalCodeConditionInput.js';
import type { DeliveryRadiusConditionInput } from './DeliveryRadiusConditionInput.js';
import type { DeliveryStateConditionInput } from './DeliveryStateConditionInput.js';
import type { DeliveryZoneConfigurationInput } from './DeliveryZoneConfigurationInput.js';

export type CreateDeliveryZoneRequestInput = { /** A reusable geographic predicate containing only country, state, postal_code, and radius conditions. */ "configuration": ({ /** minItems: 1. maxItems: 100. */ "all"?: Array<DeliveryZoneConfigurationInput>; /** minItems: 1. maxItems: 100. */ "any"?: Array<DeliveryZoneConfigurationInput>; "country"?: DeliveryCountryConditionInput; "not"?: DeliveryZoneConfigurationInput; "postal_code"?: DeliveryPostalCodeConditionInput; "radius"?: DeliveryRadiusConditionInput; "state"?: DeliveryStateConditionInput; }) & (({ "all": unknown; }) | ({ "any": unknown; }) | ({ "not": unknown; }) | ({ "country": unknown; }) | ({ "state": unknown; }) | ({ "postal_code": unknown; }) | ({ "radius": unknown; })); /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; };
