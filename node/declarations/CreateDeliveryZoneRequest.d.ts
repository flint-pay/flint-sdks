
import type { DeliveryCountryCondition } from './DeliveryCountryCondition.js';
import type { DeliveryPostalCodeCondition } from './DeliveryPostalCodeCondition.js';
import type { DeliveryRadiusCondition } from './DeliveryRadiusCondition.js';
import type { DeliveryStateCondition } from './DeliveryStateCondition.js';
import type { DeliveryZoneConfiguration } from './DeliveryZoneConfiguration.js';

export type CreateDeliveryZoneRequest = { /** A reusable geographic predicate containing only country, state, postal_code, and radius conditions. */ "configuration": ({ /** minItems: 1. maxItems: 100. */ "all"?: Array<DeliveryZoneConfiguration>; /** minItems: 1. maxItems: 100. */ "any"?: Array<DeliveryZoneConfiguration>; "country"?: DeliveryCountryCondition; "not"?: DeliveryZoneConfiguration; "postal_code"?: DeliveryPostalCodeCondition; "radius"?: DeliveryRadiusCondition; "state"?: DeliveryStateCondition; }) & (({ "all": unknown; }) | ({ "any": unknown; }) | ({ "not": unknown; }) | ({ "country": unknown; }) | ({ "state": unknown; }) | ({ "postal_code": unknown; }) | ({ "radius": unknown; }) | (object)); /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; };
