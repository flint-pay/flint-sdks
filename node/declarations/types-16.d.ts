import type {
    DeliveryMethod,
    DeliveryLocationSetsDeleteParams,
    DeliveryInputRequirement,
    DeliveryLocationSummaryResource,
    DeliveryMerchantDiagnostic,
    DeliveryEligibilityExpressionInput,
    DeliveryExternalPricingStrategy,
    DeliveryFixedPricingStrategy,
    DeliveryFixedPricingStrategyRequestInput
} from './types-15.js';
import type { ResponseMeta } from './types-48.js';
import type { MerchantWebhookEnvelope } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { CreateDeliveryMethodRequestInput, CreateDeliveryPreviewRequestInput } from './types-7.js';
import type { InputValue } from '../runtime.js';
import type { UpdateDeliveryMethodRequestInput } from './types-58.js';
import type { BuyerInstructionsConfig } from './types-2.js';
import type {
    DeliveryArrivalEstimate,
    DeliveryAddressAdvisoryResource,
    DeliveryBuyerLocationResource,
    DeliveryCandidateOutcomeResource,
    DeliveryEligibilityExpression,
    DeliveryCalculatedPricingStrategy,
    DeliveryCallbackPricingStrategyRequest,
    DeliveryCallerSuppliedPricingStrategyRequest,
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput
} from './types-14.js';
import type {
    DeliveryQuoteExecutionLegResource,
    DeliveryRecipientRequirement,
    DeliveryQuoteLineItemResource,
    DeliveryRateTablePricingStrategy,
    DeliveryRateTablePricingStrategyCreateRequest,
    DeliveryRateTablePricingStrategyCreateRequestInput
} from './types-18.js';
import type {
    DeliveryShipmentDetails,
    DeliveryWindowRequest,
    DeliveryTieredPricingStrategy,
    DeliveryTieredPricingStrategyRequestInput
} from './types-19.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { Address } from './types-0.js';
import type { CreateOrderLineItem } from './types-9.js';
import type { DeliveryPricingStrategyFixed, DeliveryPricingStrategyRateTable, DeliveryPricingStrategyTiered } from './types-17.js';
/** The `allocated_origin_group` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroup = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id"?: string;
    /** minLength: 1. */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1.
     */
    "location_ids"?: Array<string>;
    /** Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group" | (string & {});
})
    & (({
    /** minItems: 1. maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /** Value enum: "allocated_origin_group". */
    "type": unknown;
})
    & ((Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations & object, readonly unknown[]>)
    | (Record<string, unknown>)));
/** The Delivery location set selector for a allocated_origin_group delivery origin. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet = ({
    /** minLength: 1. */
    "delivery_location_set_id": string;
    /** minLength: 1. */
    "location_id"?: string;
    /** minItems: 1. maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /** Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group" | (string & {});
});
/** The Delivery location set selector for a allocated_origin_group delivery origin. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSetInput = ({
    /** minLength: 1. */
    "delivery_location_set_id": string;
    /** minLength: 1. */
    "location_id"?: string;
    /** minItems: 1. maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /** Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group";
})
    & (({
    "location_id"?: never;
}) & ({
    "location_ids"?: never;
}));
/** The `allocated_origin_group` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id"?: string;
    /** minLength: 1. */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1.
     */
    "location_ids"?: Array<string>;
    /** Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group";
})
    & (({
    /** minItems: 1. maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /** Value enum: "allocated_origin_group". */
    "type": ("allocated_origin_group") & ("allocated_origin_group");
})
    & ((Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSetInput & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocationsInput & object, readonly unknown[]>))
    & ({
    "location_id"?: never;
}));
/** The Locations selector for a allocated_origin_group delivery origin. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations = ({
    /** minLength: 1. */
    "delivery_location_set_id"?: string;
    /** minLength: 1. */
    "location_id"?: string;
    /** minItems: 1. maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. */
    "location_ids": Array<string>;
    /** Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group" | (string & {});
});
/** The Locations selector for a allocated_origin_group delivery origin. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocationsInput = ({
    /** minLength: 1. */
    "delivery_location_set_id"?: string;
    /** minLength: 1. */
    "location_id"?: string;
    /** minItems: 1. maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. */
    "location_ids": Array<string>;
    /** Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group";
})
    & (({
    "location_id"?: never;
}) & ({
    "delivery_location_set_id"?: never;
}));
/** The `fixed_location` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputFixedLocation = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id"?: string;
    /** minLength: 1. */
    "location_id": string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1.
     */
    "location_ids"?: Array<string>;
    /** Value enum: "fixed_location". */
    "type": "fixed_location" | (string & {});
})
    & (({
    /** Value enum: "fixed_location". */
    "type": unknown;
    /** minLength: 1. */
    "location_id": string;
}));
/** The `fixed_location` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputFixedLocationInput = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id"?: string;
    /** minLength: 1. */
    "location_id": string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1.
     */
    "location_ids"?: Array<string>;
    /** Value enum: "fixed_location". */
    "type": "fixed_location";
})
    & (({
    /** Value enum: "fixed_location". */
    "type": ("fixed_location") & ("fixed_location");
    /** minLength: 1. */
    "location_id": string;
})
    & (({
    "delivery_location_set_id"?: never;
})
    & ({
    "delivery_location_set_revision_id"?: never;
})
    & ({
    "location_ids"?: never;
})));
/** The `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollection = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id"?: string;
    /** minLength: 1. */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1.
     */
    "location_ids"?: Array<string>;
    /** Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection" | (string & {});
})
    & (({
    /** minItems: 1. maxItems: 1000. uniqueItems: true. [] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /** Value enum: "pickup_location_collection". */
    "type": unknown;
})
    & ((Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations & object, readonly unknown[]>)
    | (Record<string, unknown>)));
/** The Delivery location set selector for a pickup_location_collection delivery origin. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet = ({
    /** minLength: 1. */
    "delivery_location_set_id": string;
    /** minLength: 1. */
    "location_id"?: string;
    /** minItems: 1. maxItems: 1000. uniqueItems: true. [] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /** Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection" | (string & {});
});
/** The Delivery location set selector for a pickup_location_collection delivery origin. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput = ({
    /** minLength: 1. */
    "delivery_location_set_id": string;
    /** minLength: 1. */
    "location_id"?: string;
    /** minItems: 1. maxItems: 1000. uniqueItems: true. [] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /** Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection";
})
    & (({
    "location_id"?: never;
}) & ({
    "location_ids"?: never;
}));
/** The `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionInput = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id"?: string;
    /** minLength: 1. */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1.
     */
    "location_ids"?: Array<string>;
    /** Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection";
})
    & (({
    /** minItems: 1. maxItems: 1000. uniqueItems: true. [] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /** Value enum: "pickup_location_collection". */
    "type": ("pickup_location_collection") & ("pickup_location_collection");
})
    & ((Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput & object, readonly unknown[]>))
    & ({
    "location_id"?: never;
}));
/** The Locations selector for a pickup_location_collection delivery origin. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations = ({
    /** minLength: 1. */
    "delivery_location_set_id"?: string;
    /** minLength: 1. */
    "location_id"?: string;
    /** minItems: 1. maxItems: 1000. uniqueItems: true. [] (Value): string. minLength: 1. */
    "location_ids": Array<string>;
    /** Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection" | (string & {});
});
/** The Locations selector for a pickup_location_collection delivery origin. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput = ({
    /** minLength: 1. */
    "delivery_location_set_id"?: string;
    /** minLength: 1. */
    "location_id"?: string;
    /** minItems: 1. maxItems: 1000. uniqueItems: true. [] (Value): string. minLength: 1. */
    "location_ids": Array<string>;
    /** Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection";
})
    & (({
    "location_id"?: never;
}) & ({
    "delivery_location_set_id"?: never;
}));
/** The `pickup_location_collection` variant of `DeliveryMethodOriginSelector`. */
export type DeliveryMethodOriginSelectorPickupLocationCollection = ({
    "delivery_location_set_id"?: string;
    "delivery_location_set_revision_id"?: string;
    "location_id"?: string;
    /**  [] (Value): string. */
    "location_ids"?: Array<string>;
    /** Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection" | (string & {});
})
    & (({
    /** minItems: 1. maxItems: 1000. uniqueItems: true. [] (Value): string. */
    "location_ids"?: Array<string>;
    /** Value enum: "pickup_location_collection". */
    "type": unknown;
})
    & (({
    "delivery_location_set_id": string;
})
    | ({
    /** minItems: 1. maxItems: 1000. uniqueItems: true. [] (Value): string. */
    "location_ids": (Array<string>) & (Array<string>);
})
    | (Record<string, unknown>)));
/**
 * The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations
 * from a delivery location set or an inline list.
 */
export type DeliveryMethodOriginSelectorRequest = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id"?: string;
    /** minLength: 1. */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1.
     */
    "location_ids"?: Array<string>;
    /** Value enum: "fixed_location", "allocated_origin_group", "pickup_location_collection". */
    "type": "fixed_location" | "allocated_origin_group" | "pickup_location_collection" | (string & {});
})
    & ((Exclude<DeliveryMethodOriginSelectorInputFixedLocation & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroup & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollection & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations
 * from a delivery location set or an inline list.
 */
export type DeliveryMethodOriginSelectorRequestInput = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     */
    "delivery_location_set_id"?: string;
    /** minLength: 1. */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1.
     */
    "location_ids"?: Array<string>;
    /** Value enum: "fixed_location", "allocated_origin_group", "pickup_location_collection". */
    "type": "fixed_location" | "allocated_origin_group" | "pickup_location_collection";
})
    & ((Exclude<DeliveryMethodOriginSelectorInputFixedLocationInput & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionInput & object, readonly unknown[]>));
/** A response containing `DeliveryMethod` data. */
export type DeliveryMethodResponse = {
    /** A configured shipping, pickup, local delivery, or service option. */
    "data": DeliveryMethod;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type DeliveryMethodUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_method.updated";
});
/**
 * The `delivery_method.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type DeliveryMethodUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
     * or service option.
     */
    "data"?: {
        /** A configured shipping, pickup, local delivery, or service option. */
        "object": DeliveryMethod;
    };
    /** Value enum: "delivery_method.updated". */
    "event_type"?: "delivery_method.updated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `delivery_method.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryMethodUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link DeliveryMethod}. A configured shipping, pickup, local delivery,
     * or service option.
     */
    "data"?: {
        /** A configured shipping, pickup, local delivery, or service option. */
        "object": DeliveryMethod;
    };
    /** Value enum: "delivery_method.updated". */
    "event_type"?: "delivery_method.updated";
});
export type DeliveryMethodsCreateParams = (CreateDeliveryMethodRequestInput);
export type DeliveryMethodsDeleteParams = DeliveryLocationSetsDeleteParams;
export type DeliveryMethodsGetParams = {};
export type DeliveryMethodsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Search across delivery_method_id, name, description, and external_reference_id. Text fields
     * match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs
     * match from the start and need the type prefix, such as dmet_01. maxLength: 255.
     */
    "query"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "inactive", "archived". Value enum: "active",
     * "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "inactive", "archived". anyOf[1][] (Value): string. Value enum: "active", "inactive",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Filter by method type. Accepts repeated keys, comma-separated values, or mixtures. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "shipment",
     * "local_delivery", "pickup". Value enum: "shipment", "local_delivery", "pickup". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "shipment", "local_delivery", "pickup".
     * anyOf[1][] (Value): string. Value enum: "shipment", "local_delivery", "pickup". anyOf[2]
     * (Value): string. Value enum: "shipment", "local_delivery", "pickup".
     */
    "type"?: InputValue<("shipment" | "local_delivery" | "pickup") | readonly ("shipment" | "local_delivery" | "pickup")[]>;
    /** Filter by referenced delivery zone. Example: "dzone_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "delivery_zone_id"?: InputValue<string>;
    /** Filter by referenced delivery location set. Example: "dls_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "delivery_location_set_id"?: InputValue<string>;
    /** Filter by referenced callback endpoint. Example: "dcb_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "delivery_rate_callback_id"?: InputValue<string>;
    /** Filter by referenced Location. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "location_id"?: InputValue<string>;
};
export type DeliveryMethodsUpdateParams = (UpdateDeliveryMethodRequestInput);
/**
 * A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs,
 * and shipment, pickup, or local delivery details.
 */
export type DeliveryOptionProjection = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /**
     * The estimated arrival date range for a delivery option, as calendar dates in the option's
     * timezone.
     */
    "arrival_estimate"?: DeliveryArrivalEstimate;
    /**
     * Controls buyer instructions for a delivery option. Omit it from a method configuration to
     * disable instruction collection.
     */
    "buyer_instructions": BuyerInstructionsConfig;
    /**
     * Flint charge tax category. Value enum: "service_fee", "shipping", "delivery", "handling",
     * "surcharge".
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | (string & {});
    "consumed_by_delivery_selection_id"?: string;
    "delivery_method_id": string;
    "delivery_method_revision_id"?: string;
    "delivery_option_id"?: string;
    /**
     * Whether a delivery option is fulfilled in one delivery or several, with the first arrival
     * time, completion time, and delivery count.
     */
    "delivery_plan": DeliveryPlan;
    "description"?: string;
    /** Format: int32. */
    "display_position": number;
    /**
     * Where this option's items leave from, one leg per origin Location. Under method_origin
     * routing each method uses its own origin, so a pickup option leaves from the chosen store
     * while a shipment option can leave from a warehouse. Selecting the option makes these legs
     * the selection's execution legs. [] (Value): {@link DeliveryQuoteExecutionLegResource}. One
     * leg of a delivery choice group, identifying the origin Location the group's items leave
     * from.
     */
    "execution_legs"?: Array<DeliveryQuoteExecutionLegResource>;
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /** Details of a local delivery option: instructions and service level. */
    "local_delivery"?: DeliveryShipmentDetails;
    "name": string;
    /**
     *  [] (Value): {@link DeliveryWindowRequest}. A time window a buyer can choose for a delivery,
     * with its start, end, price, and the last moment it can be chosen.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /** Pickup details of a delivery option: the pickup mode and the pickup location. */
    "pickup"?: DeliveryPickupDetails;
    /**
     * Recipient fields this option asks for. A selection can leave out required fields, but
     * payment needs them. [] (Value): {@link DeliveryRecipientRequirement}. Says whether a
     * recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the
     * format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirement>;
    "recommended": boolean;
    /**
     * Shipment-specific details of a delivery option or choice: the `service_level` and buyer
     * `instructions`.
     */
    "shipment"?: DeliveryShipmentDetails;
    "taxable": boolean;
    /**
     * IANA timezone for displaying window_start_at, window_end_at, and any offered windows.
     * Example: "America/New_York".
     */
    "timezone"?: string;
    /** Value enum: "shipment", "pickup", "local_delivery". */
    "type": "shipment" | "pickup" | "local_delivery" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "window_end_at"?: string;
    /** Value enum: "uniform", "varies". */
    "window_pricing"?: "uniform" | "varies" | (string & {});
    /** Value enum: "none", "offered". */
    "window_selection": "none" | "offered" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "window_start_at"?: string;
};
/**
 * A delivery method and choice group still waiting for a caller-supplied rate on a delivery quote.
 */
export type DeliveryPendingCallerRateRequest = {
    "delivery_choice_group_id": string;
    "delivery_method_id": string;
    "delivery_method_revision_id": string;
};
/**
 * The result of a pickup locations preview: each pickup location and whether it can supply the
 * order, with input requirements and merchant diagnostics.
 */
export type DeliveryPickupAvailability = {
    /** RFC3339 timestamp. Format: date-time. */
    "evaluated_at": string;
    /** Value enum: "complete", "incomplete", "degraded". */
    "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {});
    /**
     *  [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * Up to 25 pickup locations, nearest first when Flint can place the buyer location, otherwise
     * in the order the pickup methods list them. maxItems: 25. [] (Value): {@link
     * DeliveryPickupAvailabilityLocationResource}. One pickup location in a pickup locations
     * preview, with its outcome, distance, compatible methods, and applicable quantities.
     */
    "locations": Array<DeliveryPickupAvailabilityLocationResource>;
    /**
     * Configured Locations the search left out, and listed Locations that cannot supply the
     * order's tracked items. Always present with an API key or dashboard credential as an array,
     * including when empty. [] (Value): {@link DeliveryPickupAvailabilityDiagnostic}. A
     * merchant-only diagnostic about a configured pickup location that was left out of the results
     * or cannot supply the order.
     */
    "merchant_diagnostics"?: Array<DeliveryPickupAvailabilityDiagnostic>;
    /**
     * The delivery question this preview answers. - `pickup_locations`: Lists the checkout
     * session's pickup locations and whether each can supply its items. Value enum:
     * "pickup_locations".
     */
    "mode": "pickup_locations" | (string & {});
};
/**
 * Whether pickup is available at one location, chosen by `type`, with the reason when it is
 * unavailable or cannot be calculated.
 */
export type DeliveryPickupAvailabilityCandidateOutcome = {
    /**
     *  [] (Value): {@link DeliveryAddressAdvisoryResource}. An address verification result for a
     * delivery address or buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /**
     * Why Flint could not calculate pickup availability and the action that can make calculation
     * succeed. - `eligibility_context_invalid`: Create a new checkout session, then create a new
     * quote. - `eligibility_dependency_failure`: Retry after the eligibility dependency recovers.
     * - `pickup_method_unavailable`: Activate or choose an available pickup method. -
     * `inventory_dependency_failure`: Retry after inventory availability and routing recover.
     * Value enum: "eligibility_context_invalid", "eligibility_dependency_failure",
     * "pickup_method_unavailable", "inventory_dependency_failure".
     */
    "failure_category"?: "eligibility_context_invalid"
        | "eligibility_dependency_failure"
        | "pickup_method_unavailable"
        | "inventory_dependency_failure"
        | (string & {});
    /**
     *  [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements"?: Array<DeliveryInputRequirement>;
    "retryable"?: boolean;
    /** Value enum: "available", "unavailable", "input_required", "cannot_calculate". */
    "type": "available" | "unavailable" | "input_required" | "cannot_calculate" | (string & {});
    /**
     * Why pickup is unavailable and the action that can make it eligible. -
     * `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts
     * or method eligibility rule. - `inventory_insufficient`: Reduce the requested quantity,
     * replenish inventory, or choose another pickup location. Value enum: "eligibility_no_match",
     * "inventory_insufficient".
     */
    "unavailable_reason"?: "eligibility_no_match" | "inventory_insufficient" | (string & {});
};
/**
 * A merchant-only diagnostic about a configured pickup location that was left out of the results
 * or cannot supply the order.
 */
export type DeliveryPickupAvailabilityDiagnostic = {
    /**
     * Stable reason a configured pickup location was left out of the results or cannot supply the
     * order. - `pickup_location_inactive`: The Location is inactive, so it was left out. -
     * `pickup_location_geography_unavailable`: The Location has no usable published geography, so
     * it was left out. - `pickup_location_inventory_unavailable`: The Location does not allocate
     * inventory, so it cannot supply the order's tracked items. It is listed with an unavailable
     * outcome. Items without tracked inventory need no allocation. -
     * `pickup_location_dependency_failure`: Flint could not resolve the configured Location. Value
     * enum: "pickup_location_inactive", "pickup_location_geography_unavailable",
     * "pickup_location_inventory_unavailable", "pickup_location_dependency_failure".
     */
    "code": "pickup_location_inactive"
        | "pickup_location_geography_unavailable"
        | "pickup_location_inventory_unavailable"
        | "pickup_location_dependency_failure"
        | (string & {});
    "diagnostic_id": string;
    "location_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /** Value enum: "unavailable", "cannot_calculate". */
    "outcome": "unavailable" | "cannot_calculate" | (string & {});
    /** Value enum: "review_configuration", "retry". */
    "recommended_action": "review_configuration" | "retry" | (string & {});
    "retryable": boolean;
    /** Value enum: "location". */
    "scope": "location" | (string & {});
    "summary": string;
};
/**
 * One pickup location in a pickup locations preview, with its outcome, distance, compatible
 * methods, and applicable quantities.
 */
export type DeliveryPickupAvailabilityLocationResource = {
    /**
     *  [] (Value): {@link DeliveryQuoteLineItemResource}. The quantity of an order line item, or
     * of one of its bundle components, that a pickup location applies to.
     */
    "applicable_quantities": Array<DeliveryQuoteLineItemResource>;
    /**
     * Whether pickup is available at one location, chosen by `type`, with the reason when it is
     * unavailable or cannot be calculated.
     */
    "candidate_outcome": DeliveryPickupAvailabilityCandidateOutcome;
    /**
     *  [] (Value): {@link DeliveryPickupAvailabilityMethodResource}. A pickup delivery method,
     * with its revision, that can serve a pickup location.
     */
    "compatible_methods": Array<DeliveryPickupAvailabilityMethodResource>;
    /**
     * Straight-line distance in meters from the buyer location. A buyer location with only a
     * postal code is measured from the postal code's center. Omitted when Flint cannot place the
     * buyer location or the store.
     */
    "distance_meters"?: number;
    /** The ID, name, and address of a pickup location in a pickup locations preview. */
    "location": DeliveryPickupAvailabilityLocationSummary;
};
/** The ID, name, and address of a pickup location in a pickup locations preview. */
export type DeliveryPickupAvailabilityLocationSummary = {
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    "location_id": string;
    "name": string;
};
/**
 * A maximum distance from the buyer location, as a value and unit, that limits which pickup
 * locations a preview returns.
 */
export type DeliveryPickupAvailabilityMaximumDistanceRequestInput = {
    /** Value enum: "meter", "kilometer", "mile". */
    "unit": "meter" | "kilometer" | "mile";
    /**
     * Maximum distance from the buyer location, greater than zero, in the selected unit.
     * exclusiveMinimum: 0.
     */
    "value": number;
};
/** A pickup delivery method, with its revision, that can serve a pickup location. */
export type DeliveryPickupAvailabilityMethodResource = {
    "delivery_method_id": string;
    "delivery_method_revision_id": string;
};
/** Pickup details of a delivery option: the pickup mode and the pickup location. */
export type DeliveryPickupDetails = {
    /**
     * A pickup location shown on a delivery option: its name, address, instructions, and timezone.
     */
    "location"?: DeliveryLocationSummaryResource;
    /** Value enum: "in_store", "curbside", "locker", "other". */
    "pickup_mode": "in_store" | "curbside" | "locker" | "other" | (string & {});
};
/**
 * Whether a delivery option is fulfilled in one delivery or several, with the first arrival time,
 * completion time, and delivery count.
 */
export type DeliveryPlan = {
    /** RFC3339 timestamp. Format: date-time. */
    "complete_by_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "first_arrival_at"?: string;
    "planned_delivery_count"?: number;
    /** Value enum: "single_delivery", "multiple_deliveries". */
    "type": "single_delivery" | "multiple_deliveries" | (string & {});
};
/**
 * A delivery eligibility condition that matches the address postal code against exact or prefix
 * `values`.
 */
export type DeliveryPostalCodeCondition = {
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location" | (string & {});
    /**
     * Postal codes, each with its country. Flint compares codes in uppercase without spaces or
     * hyphens. An exact value matches that code, and a prefix value matches every code that starts
     * with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes
     * within it, so 07030 matches 07030-5788, which address verification returns for a full
     * address. A ZIP+4 value matches only that ZIP+4. [] (Value): {@link DeliveryPostalCodeValue}.
     * A postal code or postal code prefix with its country, used in a postal code condition.
     */
    "values": Array<DeliveryPostalCodeValue>;
};
/**
 * A delivery eligibility condition that matches the address postal code against exact or prefix
 * `values`.
 */
export type DeliveryPostalCodeConditionInput = {
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location";
    /**
     * Postal codes, each with its country. Flint compares codes in uppercase without spaces or
     * hyphens. An exact value matches that code, and a prefix value matches every code that starts
     * with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes
     * within it, so 07030 matches 07030-5788, which address verification returns for a full
     * address. A ZIP+4 value matches only that ZIP+4. [] (Value): {@link
     * DeliveryPostalCodeValueInput}. A postal code or postal code prefix with its country, used in
     * a postal code condition.
     */
    "values": Array<DeliveryPostalCodeValueInput>;
};
/** A postal code or postal code prefix with its country, used in a postal code condition. */
export type DeliveryPostalCodeValue = {
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country": string;
    /** Default: "exact". Value enum: "exact", "prefix". */
    "type"?: "exact" | "prefix" | (string & {});
    /** minLength: 1. */
    "value": string;
};
/** A postal code or postal code prefix with its country, used in a postal code condition. */
export type DeliveryPostalCodeValueInput = {
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country": string;
    /** Default: "exact". Value enum: "exact", "prefix". */
    "type"?: "exact" | "prefix";
    /** minLength: 1. */
    "value": string;
};
/**
 * The delivery options and prices Flint would offer for the supplied items and buyer location,
 * with input requirements and merchant diagnostics.
 */
export type DeliveryPreview = {
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. The normalized buyer address or coordinate used for this quote.
     */
    "buyer_location"?: DeliveryBuyerLocationResource;
    /**
     *  [] (Value): {@link DeliveryPreviewChoiceGroupResource}. One group of order items in a
     * delivery options preview, with the options a buyer could choose, its availability status,
     * and any input still needed.
     */
    "choice_groups": Array<DeliveryPreviewChoiceGroupResource>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**  [] (Value): string. */
    "delivery_method_ids": Array<string>;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. A postal address. Every address has country. Addresses Flint checked as complete
     * (customer and saved addresses, merchant, location, invoice, order delivery destination, tax
     * identity, fulfillment recipient and pickup addresses) always have line1 and city, and US
     * ones always have state and postal_code. Delivery quote destinations, buyer locations and
     * postal-code tax locations hold only what was provided, such as postal_code and country.
     */
    "destination_address"?: Address;
    /** RFC3339 timestamp. Format: date-time. */
    "evaluated_at": string;
    /** Value enum: "complete", "incomplete", "degraded". */
    "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at": string;
    /**
     * Inputs the delivery methods need. A quote requirement, such as the destination address, is
     * input a method needs before Flint can price it. A selection requirement is input a delivery
     * selection needs before payment, such as a recipient field or delivery window an option
     * requires. A method that waits on the buyer's address or store, or on an address the buyer
     * must correct, already lists the recipient fields it requires. Those requirements name the
     * method's choice group and have no delivery_option_ids. [] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     *  [] (Value): {@link CreateOrderLineItem}. A line item in a delivery preview: a catalog
     * variant, a bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItem>;
    /**
     * Present for merchant callers as an array, including when empty. Absent for buyer callers. []
     * (Value): {@link DeliveryMerchantDiagnostic}. A merchant-only diagnostic explaining why a
     * delivery method produced no option, with its outcome, recommended action, and eligibility
     * mismatches.
     */
    "merchant_diagnostics"?: Array<DeliveryMerchantDiagnostic>;
    /**
     * The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods
     * and prices for the supplied items and buyer location. Value enum: "delivery_options".
     */
    "mode": "delivery_options" | (string & {});
    "pickup_location_id"?: string;
};
/**
 * One group of order items in a delivery options preview, with the options a buyer could choose,
 * its availability status, and any input still needed.
 */
export type DeliveryPreviewChoiceGroupResource = {
    /**  [] (Value): string. */
    "allowed_types"?: Array<string>;
    /** Value enum: "ready", "needs_input", "needs_checkout_context", "unavailable". */
    "availability_status": "ready" | "needs_input" | "needs_checkout_context" | "unavailable" | (string & {});
    /**
     *  * (Value): {@link DeliveryCandidateOutcomeResource}. The result of evaluating one delivery
     * method for a choice group, selected by `type`: available with an option, unavailable, input
     * required, cannot calculate, or requires checkout context.
     */
    "candidate_outcomes": Record<string, DeliveryCandidateOutcomeResource>;
    /** Value enum: "complete", "incomplete", "degraded". */
    "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {});
    /**
     * Where the group's items leave from, one leg per origin Location, when all of its methods
     * leave from the same Locations. Omitted when the origin depends on the chosen method, such as
     * shipping from a warehouse or picking up at a store. Each option then lists its own
     * execution_legs. [] (Value): {@link DeliveryQuoteExecutionLegResource}. One leg of a delivery
     * choice group, identifying the origin Location the group's items leave from.
     */
    "execution_legs"?: Array<DeliveryQuoteExecutionLegResource>;
    /**
     *  [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     *  [] (Value): {@link DeliveryQuoteLineItemResource}. An order line item, or one bundle
     * component of it, and the quantity covered by a delivery choice group.
     */
    "line_items": Array<DeliveryQuoteLineItemResource>;
    /**
     *  [] (Value): {@link DeliveryOptionProjection}. A delivery option in a quote or preview: its
     * price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery
     * details.
     */
    "options": Array<DeliveryOptionProjection>;
};
/** The response for: Create delivery preview. */
export type DeliveryPreviewResponse = {
    /**
     *  oneOf[1] (Value): {@link DeliveryPreview}. The delivery options and prices Flint would
     * offer for the supplied items and buyer location, with input requirements and merchant
     * diagnostics. oneOf[2] (Value): {@link DeliveryPickupAvailability}. The result of a pickup
     * locations preview: each pickup location and whether it can supply the order, with input
     * requirements and merchant diagnostics.
     */
    "data": ((DeliveryPreview) | (DeliveryPickupAvailability) | (Record<string, unknown>));
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Chooses where a delivery options preview routes inventory from: a fixed Location, an inventory
 * allocation policy, or one policy revision.
 */
export type DeliveryPreviewRoutingSourceInput = {
    /** minLength: 1. */
    "inventory_allocation_policy_id"?: string;
    /** minLength: 1. */
    "inventory_allocation_policy_revision_id"?: string;
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "fixed_location", "policy", "policy_revision". */
    "type": "fixed_location" | "policy" | "policy_revision";
};
export type DeliveryPreviewsCreateParams = (CreateDeliveryPreviewRequestInput);
/**
 * One rate in a rate table pricing strategy: a `when` condition, a `priority`, and a price per
 * currency. The first matching rate by priority sets the price.
 */
export type DeliveryPricingRate = {
    /**
     *  * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    "delivery_rate_id": string;
    /**
     * Rates are checked from the highest priority to the lowest. The first matching rate sets the
     * price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     *  anyOf[1] (Value): {@link DeliveryEligibilityExpression}. A boolean expression containing
     * exactly one operator or typed condition at each node. Expressions support at most 8 levels
     * and 100 total nodes. anyOf[2] (Value): null.
     */
    "when": ((DeliveryEligibilityExpression) | (null) | (unknown));
};
/**
 * A rate to add when creating a rate table pricing strategy: a `when` condition, a `priority`, and
 * a price per currency.
 */
export type DeliveryPricingRateCreateRequest = {
    /**
     *  * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /**
     * Rates are checked from the highest priority to the lowest. The first matching rate sets the
     * price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "when": DeliveryEligibilityExpression;
};
/**
 * A rate to add when creating a rate table pricing strategy: a `when` condition, a `priority`, and
 * a price per currency.
 */
export type DeliveryPricingRateCreateRequestInput = {
    /**
     *  * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /**
     * Rates are checked from the highest priority to the lowest. The first matching rate sets the
     * price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "when": DeliveryEligibilityExpressionInput;
};
/**
 * A rate in a rate table pricing strategy you send when updating a delivery method. Include
 * `delivery_rate_id` to keep or update an existing rate.
 */
export type DeliveryPricingRateRequest = {
    /**
     *  * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /**
     * Stable rate identifier returned by Flint. Include it when updating or retaining an existing
     * rate. minLength: 1.
     */
    "delivery_rate_id"?: string;
    /**
     * Rates are checked from the highest priority to the lowest. The first matching rate sets the
     * price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "when": DeliveryEligibilityExpression;
};
/**
 * A rate in a rate table pricing strategy you send when updating a delivery method. Include
 * `delivery_rate_id` to keep or update an existing rate.
 */
export type DeliveryPricingRateRequestInput = {
    /**
     *  * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /**
     * Stable rate identifier returned by Flint. Include it when updating or retaining an existing
     * rate. minLength: 1.
     */
    "delivery_rate_id"?: string;
    /**
     * Rates are checked from the highest priority to the lowest. The first matching rate sets the
     * price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes.
     */
    "when": DeliveryEligibilityExpressionInput;
};
/**
 * How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`,
 * `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set.
 */
export type DeliveryPricingStrategy = ({
    /**
     * Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with
     * minimum and maximum fees, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
     * bounded by minimum and maximum fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
     * bounded by minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /** A fixed delivery price, by currency. */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Pricing strategy that charges the price of the first matching rate in a list of prioritized
     * rates. `unmatched_behavior` says what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal,
     * selects a band, and `unit` applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Value enum: "fixed", "rate_table", "tiered", "calculated", "callback", "caller_supplied". */
    "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied" | (string & {});
})
    & ((Exclude<DeliveryPricingStrategyCalculated & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCallback & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyCallerSupplied & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyFixed & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyRateTable & object, readonly unknown[]>)
    | (Exclude<DeliveryPricingStrategyTiered & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `calculated` variant of `DeliveryPricingStrategy`. */
export type DeliveryPricingStrategyCalculated = ({
    /**
     * Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with
     * minimum and maximum fees, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
     * bounded by minimum and maximum fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
     * bounded by minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /** A fixed delivery price, by currency. */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Pricing strategy that charges the price of the first matching rate in a list of prioritized
     * rates. `unmatched_behavior` says what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal,
     * selects a band, and `unit` applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Value enum: "calculated". */
    "type": "calculated" | (string & {});
})
    & (({
    /** Value enum: "calculated". */
    "type": unknown;
    /**
     * Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with
     * minimum and maximum fees, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
}));
/** The `callback` variant of `DeliveryPricingStrategy`. */
export type DeliveryPricingStrategyCallback = ({
    /**
     * Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with
     * minimum and maximum fees, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
     * bounded by minimum and maximum fees by currency.
     */
    "callback": DeliveryExternalPricingStrategy;
    /**
     * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
     * bounded by minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /** A fixed delivery price, by currency. */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Pricing strategy that charges the price of the first matching rate in a list of prioritized
     * rates. `unmatched_behavior` says what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal,
     * selects a band, and `unit` applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Value enum: "callback". */
    "type": "callback" | (string & {});
})
    & (({
    /** Value enum: "callback". */
    "type": unknown;
    /**
     * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
     * bounded by minimum and maximum fees by currency.
     */
    "callback": DeliveryExternalPricingStrategy;
}));
/** The `caller_supplied` variant of `DeliveryPricingStrategy`. */
export type DeliveryPricingStrategyCallerSupplied = ({
    /**
     * Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with
     * minimum and maximum fees, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
     * bounded by minimum and maximum fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
     * bounded by minimum and maximum fees by currency.
     */
    "caller_supplied": DeliveryExternalPricingStrategy;
    /** A fixed delivery price, by currency. */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Pricing strategy that charges the price of the first matching rate in a list of prioritized
     * rates. `unmatched_behavior` says what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal,
     * selects a band, and `unit` applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Value enum: "caller_supplied". */
    "type": "caller_supplied" | (string & {});
})
    & (({
    /** Value enum: "caller_supplied". */
    "type": unknown;
    /**
     * Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller,
     * bounded by minimum and maximum fees by currency.
     */
    "caller_supplied": DeliveryExternalPricingStrategy;
}));
/** The `calculated` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputCalculated = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing strategy you supply when creating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Value enum: "calculated". */
    "type": "calculated" | (string & {});
})
    & (({
    /** Value enum: "calculated". */
    "type": unknown;
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
}));
/** The `calculated` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputCalculatedInput = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing strategy you supply when creating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Value enum: "calculated". */
    "type": "calculated";
})
    & (({
    /** Value enum: "calculated". */
    "type": ("calculated") & ("calculated");
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategyRequestInput;
})
    & (({
    "callback"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/** The `callback` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputCallback = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequest;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing strategy you supply when creating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Value enum: "callback". */
    "type": "callback" | (string & {});
})
    & (({
    /** Value enum: "callback". */
    "type": unknown;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequest;
}));
/** The `callback` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputCallbackInput = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing strategy you supply when creating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Value enum: "callback". */
    "type": "callback";
})
    & (({
    /** Value enum: "callback". */
    "type": ("callback") & ("callback");
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/** The `caller_supplied` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputCallerSupplied = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequest;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing strategy you supply when creating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Value enum: "caller_supplied". */
    "type": "caller_supplied" | (string & {});
})
    & (({
    /** Value enum: "caller_supplied". */
    "type": unknown;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequest;
}));
/** The `caller_supplied` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputCallerSuppliedInput = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequestInput;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing strategy you supply when creating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Value enum: "caller_supplied". */
    "type": "caller_supplied";
})
    & (({
    /** Value enum: "caller_supplied". */
    "type": ("caller_supplied") & ("caller_supplied");
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied": DeliveryCallerSuppliedPricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "callback"?: never;
})
    & ({
    "fixed"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/** The `fixed` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputFixed = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed": DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing strategy you supply when creating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Value enum: "fixed". */
    "type": "fixed" | (string & {});
})
    & (({
    /** Value enum: "fixed". */
    "type": unknown;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed": DeliveryFixedPricingStrategy;
}));
/** The `fixed` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputFixedInput = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed": DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing strategy you supply when creating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /** Value enum: "fixed". */
    "type": "fixed";
})
    & (({
    /** Value enum: "fixed". */
    "type": ("fixed") & ("fixed");
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed": DeliveryFixedPricingStrategyRequestInput;
})
    & (({
    "calculated"?: never;
})
    & ({
    "callback"?: never;
})
    & ({
    "caller_supplied"?: never;
})
    & ({
    "rate_table"?: never;
})
    & ({
    "tiered"?: never;
})));
/** The `rate_table` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputRateTable = ({
    /**
     * Calculated delivery pricing you supply for a delivery method: base fee, distance and weight
     * rates, per-item handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Delivery pricing you supply that comes from a delivery rate callback
     * (`delivery_rate_callback_id`), with minimum and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Delivery pricing where you supply the rate when creating a delivery quote, bounded by
     * minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /** A fixed delivery price by currency, supplied for a delivery method. */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing strategy you supply when creating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
     * prices, and a weight `unit` when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /** Value enum: "rate_table". */
    "type": "rate_table" | (string & {});
})
    & (({
    /** Value enum: "rate_table". */
    "type": unknown;
    /**
     * Rate table pricing strategy you supply when creating a delivery method: a list of
     * prioritized rates, each with a condition and prices.
     */
    "rate_table": DeliveryRateTablePricingStrategyCreateRequest;
}));
