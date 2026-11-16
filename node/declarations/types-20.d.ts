import type {
    DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes,
    DeliveryMethodOriginSelectorFixedLocationPreviousAttributes,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroup,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput,
    DeliveryMethod,
    DeliveryMethodConfiguration,
    DeliveryMethodConfigurationPreviousAttributes,
    DeliveryLocationSetsDeleteParams,
    DeliveryInputRequirement,
    DeliveryLocationSummaryResource,
    DeliveryLocationSummaryResourcePreviousAttributes,
    DeliveryMerchantDiagnostic
} from './types-19.js';
import type { ResponseMeta } from './types-60.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-41.js';
import type { PartnerWebhookEnvelope } from './types-49.js';
import type { SubscriptionCounts, SubscriptionCountsPreviousAttributes } from './types-67.js';
import type { InputValue } from '../runtime.js';
import type { CreateDeliveryMethodRequestInput, CreateDeliveryPreviewRequestInput } from './types-9.js';
import type { DisputesAcceptParams } from './types-25.js';
import type { UpdateDeliveryMethodRequestInput } from './types-73.js';
import type { BuyerInstructionsConfig, BuyerInstructionsConfigPreviousAttributes } from './types-2.js';
import type {
    DeliveryArrivalEstimate,
    DeliveryArrivalEstimatePreviousAttributes,
    DeliveryAddressAdvisoryResource
} from './types-17.js';
import type {
    DeliveryQuoteExecutionLegResource,
    DeliveryQuoteExecutionLegResourcePreviousAttributes,
    DeliveryQuoteLineItemResource
} from './types-22.js';
import type {
    DeliveryRecipientRequirement,
    DeliveryRecipientRequirementPreviousAttributes,
    DeliveryRateTablePricingStrategy,
    DeliveryRateTablePricingStrategyPreviousAttributes,
    DeliveryRateTablePricingStrategyCreateRequest,
    DeliveryRateTablePricingStrategyCreateRequestInput
} from './types-23.js';
import type {
    DeliveryShipmentDetails,
    DeliveryWindowRequest,
    DeliveryShipmentDetailsPreviousAttributes,
    DeliveryWindowResourcePreviousAttributes,
    DeliveryTieredPricingStrategy,
    DeliveryTieredPricingStrategyPreviousAttributes,
    DeliveryTieredPricingStrategyRequestInput
} from './types-24.js';
import type { MoneyValue, MoneyValuePreviousAttributes, MoneyValueInput } from './types-42.js';
import type { Address } from './types-0.js';
import type { CreateOrderLineItem } from './types-11.js';
import type {
    DeliveryBuyerLocationResource,
    DeliveryCandidateOutcomeResource,
    DeliveryEligibilityExpression,
    DeliveryEligibilityExpressionRequest,
    DeliveryEligibilityExpressionRequestInput,
    DeliveryEligibilityExpressionPreviousAttributes,
    DeliveryCalculatedPricingStrategy,
    DeliveryExternalPricingStrategy,
    DeliveryFixedPricingStrategy,
    DeliveryCalculatedPricingStrategyPreviousAttributes,
    DeliveryExternalPricingStrategyPreviousAttributes,
    DeliveryFixedPricingStrategyPreviousAttributes,
    DeliveryCallbackPricingStrategyRequest,
    DeliveryCallerSuppliedPricingStrategyRequest,
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput,
    DeliveryFixedPricingStrategyRequestInput
} from './types-18.js';
import type { DeliveryPricingStrategyFixed, DeliveryPricingStrategyRateTable, DeliveryPricingStrategyTiered } from './types-21.js';
/** The Locations selector for a allocated_origin_group delivery origin. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 25. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
    "type": "allocated_origin_group" | (string & {});
});
/** The Locations selector for a allocated_origin_group delivery origin. */
export type DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocationsInput = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 25. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": Array<string>;
    /** Where delivery starts. Value enum: "allocated_origin_group". */
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
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "fixed_location". */
    "type": "fixed_location" | (string & {});
})
    & (({
    /** Where delivery starts. Value enum: "fixed_location". */
    "type": unknown;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
}));
/** The `fixed_location` variant of `DeliveryMethodOriginSelectorInput`. */
export type DeliveryMethodOriginSelectorInputFixedLocationInput = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "fixed_location". */
    "type": "fixed_location";
})
    & (({
    /** Where delivery starts. Value enum: "fixed_location". */
    "type": ("fixed_location") & ("fixed_location");
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
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
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection" | (string & {});
})
    & (({
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": unknown;
})
    & ((Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations & object, readonly unknown[]>)
    | (Record<string, unknown>)));
/** The Delivery location set selector for a pickup_location_collection delivery origin. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id": string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection" | (string & {});
});
/** The Delivery location set selector for a pickup_location_collection delivery origin. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id": string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
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
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection";
})
    & (({
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": ("pickup_location_collection") & ("pickup_location_collection");
})
    & ((Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput & object, readonly unknown[]>))
    & ({
    "location_id"?: never;
}));
/** The Locations selector for a pickup_location_collection delivery origin. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection" | (string & {});
});
/** The Locations selector for a pickup_location_collection delivery origin. */
export type DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput = ({
    /**
     * ID of the delivery location set that names the Locations in the group. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection";
})
    & (({
    "location_id"?: never;
}) & ({
    "delivery_location_set_id"?: never;
}));
/** The `pickup_location_collection` variant of `DeliveryMethodOriginSelector`. */
export type DeliveryMethodOriginSelectorPickupLocationCollection = ({
    /**
     * ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the location set revision in effect for this method revision. Example:
     * "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ".
     */
    "delivery_location_set_revision_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * IDs of the Locations in the group. [] (Value): string. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": "pickup_location_collection" | (string & {});
})
    & (({
    /**
     * IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true. []
     * (Value): string. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /** Where delivery starts. Value enum: "pickup_location_collection". */
    "type": unknown;
})
    & (({
    /**
     * ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id": string;
})
    | ({
    /**
     * IDs of the Locations in the group. IDs of the Locations in the group. minItems: 1. maxItems:
     * 1000. uniqueItems: true. [] (Value): string. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids": (Array<string>) & (Array<string>);
})
    | (Record<string, unknown>)));
export type DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes = ({
    /**
     * ID of the delivery location set that names the Locations in the group. anyOf[1] (Value):
     * string. ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". anyOf[2] (Value): null.
     */
    "delivery_location_set_id"?: ((string) | (null));
    /**
     * ID of the location set revision in effect for this method revision. anyOf[1] (Value):
     * string. ID of the location set revision in effect for this method revision. Example:
     * "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". anyOf[2] (Value): null.
     */
    "delivery_location_set_revision_id"?: ((string) | (null));
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. anyOf[1] (Value): string. ID of the Location delivery starts from. Required for
     * `fixed_location` and not allowed otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * anyOf[2] (Value): null.
     */
    "location_id"?: ((string) | (null));
    /**
     * IDs of the Locations in the group. anyOf[1] (Value): Array of string. IDs of the Locations
     * in the group. anyOf[1][] (Value): string. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * anyOf[2] (Value): null.
     */
    "location_ids"?: ((Array<string>) | (null));
    /**
     * Where delivery starts. Value enum: "pickup_location_collection". anyOf[1] (Value): string.
     * Where delivery starts. Value enum: "pickup_location_collection". anyOf[2] (Value): null.
     */
    "type"?: (("pickup_location_collection" | (string & {})) | (null));
})
    & (({
    /**
     * IDs of the Locations in the group. anyOf[1] (Value): Array of string. IDs of the Locations
     * in the group. minItems: 1. maxItems: 1000. uniqueItems: true. anyOf[1][] (Value): string.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "location_ids"?: ((Array<string>) | (null));
    /**
     * Where delivery starts. Value enum: "pickup_location_collection". anyOf[1] (Value): any.
     * Where delivery starts. Value enum: "pickup_location_collection". anyOf[2] (Value): null.
     */
    "type"?: ((unknown) | (null) | (unknown));
})
    & (((unknown) | (unknown) | (Record<string, unknown>))));
export type DeliveryMethodOriginSelectorPreviousAttributes = ({
    /**
     * ID of the delivery location set that names the Locations in the group. anyOf[1] (Value):
     * string. ID of the delivery location set that names the Locations in the group. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H". anyOf[2] (Value): null.
     */
    "delivery_location_set_id"?: ((string) | (null));
    /**
     * ID of the location set revision in effect for this method revision. anyOf[1] (Value):
     * string. ID of the location set revision in effect for this method revision. Example:
     * "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". anyOf[2] (Value): null.
     */
    "delivery_location_set_revision_id"?: ((string) | (null));
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. anyOf[1] (Value): string. ID of the Location delivery starts from. Required for
     * `fixed_location` and not allowed otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * anyOf[2] (Value): null.
     */
    "location_id"?: ((string) | (null));
    /**
     * IDs of the Locations in the group. anyOf[1] (Value): Array of string. IDs of the Locations
     * in the group. anyOf[1][] (Value): string. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * anyOf[2] (Value): null.
     */
    "location_ids"?: ((Array<string>) | (null));
    /**
     * Where delivery starts. Value enum: "fixed_location", "allocated_origin_group",
     * "pickup_location_collection". anyOf[1] (Value): string. Where delivery starts. Value enum:
     * "fixed_location", "allocated_origin_group", "pickup_location_collection". anyOf[2] (Value):
     * null.
     */
    "type"?: (("fixed_location" | "allocated_origin_group" | "pickup_location_collection" | (string & {}))
        | (null));
})
    & (((Exclude<DeliveryMethodOriginSelectorFixedLocationPreviousAttributes & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes & object, readonly unknown[]>)
    | (Record<string, unknown>)));
/**
 * The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations
 * from a delivery location set or an inline list.
 */
export type DeliveryMethodOriginSelectorRequest = ({
    /**
     * Named delivery location set to reuse. Send either delivery_location_set_id or inline
     * location_ids, never both. The set may contain at most 25 Locations for
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * Where delivery starts. Value enum: "fixed_location", "allocated_origin_group",
     * "pickup_location_collection".
     */
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
     * allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: string;
    /**
     * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Inline Location IDs for a set managed by this delivery method. Send either location_ids or
     * delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * Where delivery starts. Value enum: "fixed_location", "allocated_origin_group",
     * "pickup_location_collection".
     */
    "type": "fixed_location" | "allocated_origin_group" | "pickup_location_collection";
})
    & ((Exclude<DeliveryMethodOriginSelectorInputFixedLocationInput & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput & object, readonly unknown[]>)
    | (Exclude<DeliveryMethodOriginSelectorInputPickupLocationCollectionInput & object, readonly unknown[]>));
/** A response containing `DeliveryMethod` data. */
export type DeliveryMethodResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A configured shipping,
     * pickup, or local delivery option.
     */
    "data": DeliveryMethod;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type DeliveryMethodUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryMethodConfiguration;
            "created_at": string;
            "current_delivery_method_revision_id": string;
            "delivery_method_id": string;
            "delivery_revocation_id": string | null;
            "description"?: string;
            "display_position": number;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "recommendation_priority"?: number;
            "status": "active" | "inactive" | "archived" | (string & {});
            "subscription_counts": SubscriptionCounts;
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "configuration"?: ((DeliveryMethodConfigurationPreviousAttributes) | (null) | (unknown));
            "created_at"?: ((string) | (null));
            "current_delivery_method_revision_id"?: ((string) | (null));
            "delivery_method_id"?: ((string) | (null));
            "delivery_revocation_id"?: ((string | null) | (null) | (unknown));
            "description"?: ((string) | (null));
            "display_position"?: ((number) | (null));
            "external_reference_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "name"?: ((string) | (null));
            "recommendation_priority"?: ((number) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "subscription_counts"?: ((SubscriptionCountsPreviousAttributes) | (null) | (unknown));
            "type"?: (("shipment" | "local_delivery" | "pickup" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_method.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryMethodConfiguration;
            "created_at": string;
            "current_delivery_method_revision_id": string;
            "delivery_method_id": string;
            "delivery_revocation_id": string | null;
            "description"?: string;
            "display_position": number;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "recommendation_priority"?: number;
            "status": "active" | "inactive" | "archived" | (string & {});
            "subscription_counts": SubscriptionCounts;
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "configuration"?: ((DeliveryMethodConfigurationPreviousAttributes) | (null) | (unknown));
            "created_at"?: ((string) | (null));
            "current_delivery_method_revision_id"?: ((string) | (null));
            "delivery_method_id"?: ((string) | (null));
            "delivery_revocation_id"?: ((string | null) | (null) | (unknown));
            "description"?: ((string) | (null));
            "display_position"?: ((number) | (null));
            "external_reference_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "name"?: ((string) | (null));
            "recommendation_priority"?: ((number) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "subscription_counts"?: ((SubscriptionCountsPreviousAttributes) | (null) | (unknown));
            "type"?: (("shipment" | "local_delivery" | "pickup" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_method.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryMethodConfiguration}.
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes. object.created_at (Required): string. Time the method
     * was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_method_revision_id (Required): string. Immutable revision currently
     * used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". object.delivery_method_id
     * (Required): string. Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.description (Optional): string. Optional buyer-facing description.
     * object.display_position (Required): integer. Ascending display order among methods. Format:
     * int32. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing method name.
     * object.recommendation_priority (Optional): integer. Marks this method as recommended. Within
     * each choice group, the available method with the lowest value is recommended and listed
     * first. Ties go to the lower display_position, then the method ID. Null never recommends the
     * method. Format: int32. object.status (Required): string. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". object.subscription_counts (Required): {@link
     * SubscriptionCounts}. How many subscriptions use this method, by status. Counts of
     * subscriptions by status: active, past due, and paused. object.type (Required): string.
     * Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
     * object.updated_at (Required): string. Time the method last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency
     * version for method writes. Format: uint64. minimum: 1. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.configuration (Optional): {@link
     * DeliveryMethodConfigurationPreviousAttributes} or null. Current eligibility, pricing,
     * origin, estimate, and tax configuration. previous_attributes.configuration.anyOf[1] (Value):
     * {@link DeliveryMethodConfigurationPreviousAttributes}.
     * previous_attributes.configuration.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. Time the method was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. Time the method was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.current_delivery_method_revision_id (Optional): string or
     * null. Immutable revision currently used for new quotes.
     * previous_attributes.current_delivery_method_revision_id.anyOf[1] (Value): string. Immutable
     * revision currently used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     * previous_attributes.current_delivery_method_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_method_id (Optional): string or null. Stable delivery method
     * ID. previous_attributes.delivery_method_id.anyOf[1] (Value): string. Stable delivery method
     * ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * previous_attributes.delivery_method_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_revocation_id (Optional): string or null or null. The
     * revocation fencing this resource's own current revision. `null` when the current revision
     * isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null`
     * because its rate callback revision, signing key, or a Location's address is revoked. A
     * revocation doesn't change `status`; publish a new revision to clear it.
     * previous_attributes.delivery_revocation_id.anyOf[1] (Value): string or null. The revocation
     * fencing this resource's own current revision. `null` when the current revision isn't
     * revoked. It doesn't cover dependencies: a method can be unusable while this is `null`
     * because its rate callback revision, signing key, or a Location's address is revoked. A
     * revocation doesn't change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". previous_attributes.delivery_revocation_id.anyOf[2]
     * (Value): null. previous_attributes.description (Optional): string or null. Optional
     * buyer-facing description. previous_attributes.description.anyOf[1] (Value): string. Optional
     * buyer-facing description. previous_attributes.description.anyOf[2] (Value): null.
     * previous_attributes.display_position (Optional): integer or null. Ascending display order
     * among methods. previous_attributes.display_position.anyOf[1] (Value): integer. Ascending
     * display order among methods. Format: int32. previous_attributes.display_position.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null.
     * Caller-owned identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Merchant-facing method name. previous_attributes.name.anyOf[1] (Value):
     * string. Merchant-facing method name. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.recommendation_priority (Optional): integer or null. Marks this method
     * as recommended. Within each choice group, the available method with the lowest value is
     * recommended and listed first. Ties go to the lower display_position, then the method ID.
     * Null never recommends the method. previous_attributes.recommendation_priority.anyOf[1]
     * (Value): integer. Marks this method as recommended. Within each choice group, the available
     * method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     * previous_attributes.recommendation_priority.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". previous_attributes.status.anyOf[1] (Value):
     * string. Current method lifecycle status. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_counts
     * (Optional): {@link SubscriptionCountsPreviousAttributes} or null. How many subscriptions use
     * this method, by status. previous_attributes.subscription_counts.anyOf[1] (Value): {@link
     * SubscriptionCountsPreviousAttributes}. previous_attributes.subscription_counts.anyOf[2]
     * (Value): null. previous_attributes.type (Optional): string or null. Delivery mode this
     * method offers. Value enum: "shipment", "local_delivery", "pickup".
     * previous_attributes.type.anyOf[1] (Value): string. Delivery mode this method offers. Value
     * enum: "shipment", "local_delivery", "pickup". previous_attributes.type.anyOf[2] (Value):
     * null. previous_attributes.updated_at (Optional): string or null. Time the method last
     * changed. previous_attributes.updated_at.anyOf[1] (Value): string. Time the method last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Optimistic-concurrency version for method writes.
     * previous_attributes.version.anyOf[1] (Value): integer. Optimistic-concurrency version for
     * method writes. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryMethodConfiguration}. Current eligibility,
         * pricing, origin, estimate, and tax configuration. How a delivery method works: its
         * origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and
         * option lifetimes. created_at (Required): string. Time the method was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". current_delivery_method_revision_id
         * (Required): string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". delivery_method_id (Required): string. Stable
         * delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_revocation_id
         * (Required): string or null. The revocation fencing this resource's own current revision.
         * `null` when the current revision isn't revoked. It doesn't cover dependencies: a method
         * can be unusable while this is `null` because its rate callback revision, signing key, or
         * a Location's address is revoked. A revocation doesn't change `status`; publish a new
         * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". description
         * (Optional): string. Optional buyer-facing description. display_position (Required):
         * integer. Ascending display order among methods. Format: int32. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". metadata (Optional): {@link MetadataMap}.
         * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. Merchant-facing method name. recommendation_priority
         * (Optional): integer. Marks this method as recommended. Within each choice group, the
         * available method with the lowest value is recommended and listed first. Ties go to the
         * lower display_position, then the method ID. Null never recommends the method. Format:
         * int32. status (Required): string. Current method lifecycle status. Value enum: "active",
         * "inactive", "archived". subscription_counts (Required): {@link SubscriptionCounts}. How
         * many subscriptions use this method, by status. Counts of subscriptions by status:
         * active, past due, and paused. type (Required): string. Delivery mode this method offers.
         * Value enum: "shipment", "local_delivery", "pickup". updated_at (Required): string. Time
         * the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Optimistic-concurrency version for method writes. Format: uint64.
         * minimum: 1.
         */
        "object": {
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. How a
             * delivery method works: its origin, pricing, eligibility, timing estimate, tax
             * settings, recipient requirements, and option lifetimes.
             */
            "configuration": DeliveryMethodConfiguration;
            /** Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
             */
            "current_delivery_method_revision_id": string;
            /** Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
            "delivery_method_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /** Optional buyer-facing description. */
            "description"?: string;
            /** Ascending display order among methods. Format: int32. */
            "display_position": number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing method name. */
            "name": string;
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. Format:
             * int32.
             */
            "recommendation_priority"?: number;
            /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * How many subscriptions use this method, by status. Counts of subscriptions by
             * status: active, past due, and paused.
             */
            "subscription_counts": SubscriptionCounts;
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup".
             */
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. configuration (Optional): {@link
         * DeliveryMethodConfigurationPreviousAttributes} or null. Current eligibility, pricing,
         * origin, estimate, and tax configuration. configuration.anyOf[1] (Value): {@link
         * DeliveryMethodConfigurationPreviousAttributes}. configuration.anyOf[2] (Value): null.
         * created_at (Optional): string or null. Time the method was created. created_at.anyOf[1]
         * (Value): string. Time the method was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * current_delivery_method_revision_id (Optional): string or null. Immutable revision
         * currently used for new quotes. current_delivery_method_revision_id.anyOf[1] (Value):
         * string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". current_delivery_method_revision_id.anyOf[2]
         * (Value): null. delivery_method_id (Optional): string or null. Stable delivery method ID.
         * delivery_method_id.anyOf[1] (Value): string. Stable delivery method ID. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_method_id.anyOf[2] (Value): null.
         * delivery_revocation_id (Optional): string or null or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it.
         * delivery_revocation_id.anyOf[1] (Value): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". delivery_revocation_id.anyOf[2] (Value): null.
         * description (Optional): string or null. Optional buyer-facing description.
         * description.anyOf[1] (Value): string. Optional buyer-facing description.
         * description.anyOf[2] (Value): null. display_position (Optional): integer or null.
         * Ascending display order among methods. display_position.anyOf[1] (Value): integer.
         * Ascending display order among methods. Format: int32. display_position.anyOf[2] (Value):
         * null. external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. metadata.anyOf[1]
         * (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string
         * or null. Merchant-facing method name. name.anyOf[1] (Value): string. Merchant-facing
         * method name. name.anyOf[2] (Value): null. recommendation_priority (Optional): integer or
         * null. Marks this method as recommended. Within each choice group, the available method
         * with the lowest value is recommended and listed first. Ties go to the lower
         * display_position, then the method ID. Null never recommends the method.
         * recommendation_priority.anyOf[1] (Value): integer. Marks this method as recommended.
         * Within each choice group, the available method with the lowest value is recommended and
         * listed first. Ties go to the lower display_position, then the method ID. Null never
         * recommends the method. Format: int32. recommendation_priority.anyOf[2] (Value): null.
         * status (Optional): string or null. Current method lifecycle status. Value enum:
         * "active", "inactive", "archived". status.anyOf[1] (Value): string. Current method
         * lifecycle status. Value enum: "active", "inactive", "archived". status.anyOf[2] (Value):
         * null. subscription_counts (Optional): {@link SubscriptionCountsPreviousAttributes} or
         * null. How many subscriptions use this method, by status. subscription_counts.anyOf[1]
         * (Value): {@link SubscriptionCountsPreviousAttributes}. subscription_counts.anyOf[2]
         * (Value): null. type (Optional): string or null. Delivery mode this method offers. Value
         * enum: "shipment", "local_delivery", "pickup". type.anyOf[1] (Value): string. Delivery
         * mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
         * type.anyOf[2] (Value): null. updated_at (Optional): string or null. Time the method last
         * changed. updated_at.anyOf[1] (Value): string. Time the method last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Optimistic-concurrency version for method writes.
         * version.anyOf[1] (Value): integer. Optimistic-concurrency version for method writes.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. anyOf[1]
             * (Value): {@link DeliveryMethodConfigurationPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "configuration"?: ((DeliveryMethodConfigurationPreviousAttributes) | (null) | (unknown));
            /**
             * Time the method was created. anyOf[1] (Value): string. Time the method was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable revision currently used for new quotes. anyOf[1] (Value): string.
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". anyOf[2] (Value): null.
             */
            "current_delivery_method_revision_id"?: ((string) | (null));
            /**
             * Stable delivery method ID. anyOf[1] (Value): string. Stable delivery method ID.
             * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
             */
            "delivery_method_id"?: ((string) | (null));
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. anyOf[1] (Value): string or null. The revocation fencing this
             * resource's own current revision. `null` when the current revision isn't revoked. It
             * doesn't cover dependencies: a method can be unusable while this is `null` because
             * its rate callback revision, signing key, or a Location's address is revoked. A
             * revocation doesn't change `status`; publish a new revision to clear it. Example:
             * "drev_01KEZF7C007Q141XJ28YAAC87B". anyOf[2] (Value): null.
             */
            "delivery_revocation_id"?: ((string | null) | (null) | (unknown));
            /**
             * Optional buyer-facing description. anyOf[1] (Value): string. Optional buyer-facing
             * description. anyOf[2] (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Ascending display order among methods. anyOf[1] (Value): integer. Ascending display
             * order among methods. Format: int32. anyOf[2] (Value): null.
             */
            "display_position"?: ((number) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value):
             * null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * Merchant-facing method name. anyOf[1] (Value): string. Merchant-facing method name.
             * anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. anyOf[1]
             * (Value): integer. Marks this method as recommended. Within each choice group, the
             * available method with the lowest value is recommended and listed first. Ties go to
             * the lower display_position, then the method ID. Null never recommends the method.
             * Format: int32. anyOf[2] (Value): null.
             */
            "recommendation_priority"?: ((number) | (null));
            /**
             * Current method lifecycle status. Value enum: "active", "inactive", "archived".
             * anyOf[1] (Value): string. Current method lifecycle status. Value enum: "active",
             * "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * How many subscriptions use this method, by status. anyOf[1] (Value): {@link
             * SubscriptionCountsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "subscription_counts"?: ((SubscriptionCountsPreviousAttributes) | (null) | (unknown));
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup". anyOf[1] (Value): string. Delivery mode this method offers. Value enum:
             * "shipment", "local_delivery", "pickup". anyOf[2] (Value): null.
             */
            "type"?: (("shipment" | "local_delivery" | "pickup" | (string & {})) | (null));
            /**
             * Time the method last changed. anyOf[1] (Value): string. Time the method last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Optimistic-concurrency version for method writes. anyOf[1] (Value): integer.
             * Optimistic-concurrency version for method writes. Format: uint64. minimum: 1.
             * anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_method.updated". */
    "event_type"?: "delivery_method.updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `delivery_method.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryMethodUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryMethodConfiguration}.
     * Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method
     * works: its origin, pricing, eligibility, timing estimate, tax settings, recipient
     * requirements, and option lifetimes. object.created_at (Required): string. Time the method
     * was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_method_revision_id (Required): string. Immutable revision currently
     * used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". object.delivery_method_id
     * (Required): string. Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.description (Optional): string. Optional buyer-facing description.
     * object.display_position (Required): integer. Ascending display order among methods. Format:
     * int32. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing method name.
     * object.recommendation_priority (Optional): integer. Marks this method as recommended. Within
     * each choice group, the available method with the lowest value is recommended and listed
     * first. Ties go to the lower display_position, then the method ID. Null never recommends the
     * method. Format: int32. object.status (Required): string. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". object.subscription_counts (Required): {@link
     * SubscriptionCounts}. How many subscriptions use this method, by status. Counts of
     * subscriptions by status: active, past due, and paused. object.type (Required): string.
     * Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
     * object.updated_at (Required): string. Time the method last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Optimistic-concurrency
     * version for method writes. Format: uint64. minimum: 1. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.configuration (Optional): {@link
     * DeliveryMethodConfigurationPreviousAttributes} or null. Current eligibility, pricing,
     * origin, estimate, and tax configuration. previous_attributes.configuration.anyOf[1] (Value):
     * {@link DeliveryMethodConfigurationPreviousAttributes}.
     * previous_attributes.configuration.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. Time the method was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. Time the method was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.current_delivery_method_revision_id (Optional): string or
     * null. Immutable revision currently used for new quotes.
     * previous_attributes.current_delivery_method_revision_id.anyOf[1] (Value): string. Immutable
     * revision currently used for new quotes. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     * previous_attributes.current_delivery_method_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_method_id (Optional): string or null. Stable delivery method
     * ID. previous_attributes.delivery_method_id.anyOf[1] (Value): string. Stable delivery method
     * ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * previous_attributes.delivery_method_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_revocation_id (Optional): string or null or null. The
     * revocation fencing this resource's own current revision. `null` when the current revision
     * isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null`
     * because its rate callback revision, signing key, or a Location's address is revoked. A
     * revocation doesn't change `status`; publish a new revision to clear it.
     * previous_attributes.delivery_revocation_id.anyOf[1] (Value): string or null. The revocation
     * fencing this resource's own current revision. `null` when the current revision isn't
     * revoked. It doesn't cover dependencies: a method can be unusable while this is `null`
     * because its rate callback revision, signing key, or a Location's address is revoked. A
     * revocation doesn't change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". previous_attributes.delivery_revocation_id.anyOf[2]
     * (Value): null. previous_attributes.description (Optional): string or null. Optional
     * buyer-facing description. previous_attributes.description.anyOf[1] (Value): string. Optional
     * buyer-facing description. previous_attributes.description.anyOf[2] (Value): null.
     * previous_attributes.display_position (Optional): integer or null. Ascending display order
     * among methods. previous_attributes.display_position.anyOf[1] (Value): integer. Ascending
     * display order among methods. Format: int32. previous_attributes.display_position.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null.
     * Caller-owned identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Merchant-facing method name. previous_attributes.name.anyOf[1] (Value):
     * string. Merchant-facing method name. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.recommendation_priority (Optional): integer or null. Marks this method
     * as recommended. Within each choice group, the available method with the lowest value is
     * recommended and listed first. Ties go to the lower display_position, then the method ID.
     * Null never recommends the method. previous_attributes.recommendation_priority.anyOf[1]
     * (Value): integer. Marks this method as recommended. Within each choice group, the available
     * method with the lowest value is recommended and listed first. Ties go to the lower
     * display_position, then the method ID. Null never recommends the method. Format: int32.
     * previous_attributes.recommendation_priority.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Current method lifecycle status.
     * Value enum: "active", "inactive", "archived". previous_attributes.status.anyOf[1] (Value):
     * string. Current method lifecycle status. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_counts
     * (Optional): {@link SubscriptionCountsPreviousAttributes} or null. How many subscriptions use
     * this method, by status. previous_attributes.subscription_counts.anyOf[1] (Value): {@link
     * SubscriptionCountsPreviousAttributes}. previous_attributes.subscription_counts.anyOf[2]
     * (Value): null. previous_attributes.type (Optional): string or null. Delivery mode this
     * method offers. Value enum: "shipment", "local_delivery", "pickup".
     * previous_attributes.type.anyOf[1] (Value): string. Delivery mode this method offers. Value
     * enum: "shipment", "local_delivery", "pickup". previous_attributes.type.anyOf[2] (Value):
     * null. previous_attributes.updated_at (Optional): string or null. Time the method last
     * changed. previous_attributes.updated_at.anyOf[1] (Value): string. Time the method last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Optimistic-concurrency version for method writes.
     * previous_attributes.version.anyOf[1] (Value): integer. Optimistic-concurrency version for
     * method writes. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryMethodConfiguration}. Current eligibility,
         * pricing, origin, estimate, and tax configuration. How a delivery method works: its
         * origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and
         * option lifetimes. created_at (Required): string. Time the method was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". current_delivery_method_revision_id
         * (Required): string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". delivery_method_id (Required): string. Stable
         * delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_revocation_id
         * (Required): string or null. The revocation fencing this resource's own current revision.
         * `null` when the current revision isn't revoked. It doesn't cover dependencies: a method
         * can be unusable while this is `null` because its rate callback revision, signing key, or
         * a Location's address is revoked. A revocation doesn't change `status`; publish a new
         * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". description
         * (Optional): string. Optional buyer-facing description. display_position (Required):
         * integer. Ascending display order among methods. Format: int32. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". metadata (Optional): {@link MetadataMap}.
         * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. name (Required): string. Merchant-facing method name. recommendation_priority
         * (Optional): integer. Marks this method as recommended. Within each choice group, the
         * available method with the lowest value is recommended and listed first. Ties go to the
         * lower display_position, then the method ID. Null never recommends the method. Format:
         * int32. status (Required): string. Current method lifecycle status. Value enum: "active",
         * "inactive", "archived". subscription_counts (Required): {@link SubscriptionCounts}. How
         * many subscriptions use this method, by status. Counts of subscriptions by status:
         * active, past due, and paused. type (Required): string. Delivery mode this method offers.
         * Value enum: "shipment", "local_delivery", "pickup". updated_at (Required): string. Time
         * the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Optimistic-concurrency version for method writes. Format: uint64.
         * minimum: 1.
         */
        "object": {
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. How a
             * delivery method works: its origin, pricing, eligibility, timing estimate, tax
             * settings, recipient requirements, and option lifetimes.
             */
            "configuration": DeliveryMethodConfiguration;
            /** Time the method was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
             */
            "current_delivery_method_revision_id": string;
            /** Stable delivery method ID. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
            "delivery_method_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /** Optional buyer-facing description. */
            "description"?: string;
            /** Ascending display order among methods. Format: int32. */
            "display_position": number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Merchant-facing method name. */
            "name": string;
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. Format:
             * int32.
             */
            "recommendation_priority"?: number;
            /** Current method lifecycle status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * How many subscriptions use this method, by status. Counts of subscriptions by
             * status: active, past due, and paused.
             */
            "subscription_counts": SubscriptionCounts;
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup".
             */
            "type": "shipment" | "local_delivery" | "pickup" | (string & {});
            /** Time the method last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. configuration (Optional): {@link
         * DeliveryMethodConfigurationPreviousAttributes} or null. Current eligibility, pricing,
         * origin, estimate, and tax configuration. configuration.anyOf[1] (Value): {@link
         * DeliveryMethodConfigurationPreviousAttributes}. configuration.anyOf[2] (Value): null.
         * created_at (Optional): string or null. Time the method was created. created_at.anyOf[1]
         * (Value): string. Time the method was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * current_delivery_method_revision_id (Optional): string or null. Immutable revision
         * currently used for new quotes. current_delivery_method_revision_id.anyOf[1] (Value):
         * string. Immutable revision currently used for new quotes. Example:
         * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". current_delivery_method_revision_id.anyOf[2]
         * (Value): null. delivery_method_id (Optional): string or null. Stable delivery method ID.
         * delivery_method_id.anyOf[1] (Value): string. Stable delivery method ID. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_method_id.anyOf[2] (Value): null.
         * delivery_revocation_id (Optional): string or null or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it.
         * delivery_revocation_id.anyOf[1] (Value): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". delivery_revocation_id.anyOf[2] (Value): null.
         * description (Optional): string or null. Optional buyer-facing description.
         * description.anyOf[1] (Value): string. Optional buyer-facing description.
         * description.anyOf[2] (Value): null. display_position (Optional): integer or null.
         * Ascending display order among methods. display_position.anyOf[1] (Value): integer.
         * Ascending display order among methods. Format: int32. display_position.anyOf[2] (Value):
         * null. external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. metadata.anyOf[1]
         * (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string
         * or null. Merchant-facing method name. name.anyOf[1] (Value): string. Merchant-facing
         * method name. name.anyOf[2] (Value): null. recommendation_priority (Optional): integer or
         * null. Marks this method as recommended. Within each choice group, the available method
         * with the lowest value is recommended and listed first. Ties go to the lower
         * display_position, then the method ID. Null never recommends the method.
         * recommendation_priority.anyOf[1] (Value): integer. Marks this method as recommended.
         * Within each choice group, the available method with the lowest value is recommended and
         * listed first. Ties go to the lower display_position, then the method ID. Null never
         * recommends the method. Format: int32. recommendation_priority.anyOf[2] (Value): null.
         * status (Optional): string or null. Current method lifecycle status. Value enum:
         * "active", "inactive", "archived". status.anyOf[1] (Value): string. Current method
         * lifecycle status. Value enum: "active", "inactive", "archived". status.anyOf[2] (Value):
         * null. subscription_counts (Optional): {@link SubscriptionCountsPreviousAttributes} or
         * null. How many subscriptions use this method, by status. subscription_counts.anyOf[1]
         * (Value): {@link SubscriptionCountsPreviousAttributes}. subscription_counts.anyOf[2]
         * (Value): null. type (Optional): string or null. Delivery mode this method offers. Value
         * enum: "shipment", "local_delivery", "pickup". type.anyOf[1] (Value): string. Delivery
         * mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
         * type.anyOf[2] (Value): null. updated_at (Optional): string or null. Time the method last
         * changed. updated_at.anyOf[1] (Value): string. Time the method last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Optimistic-concurrency version for method writes.
         * version.anyOf[1] (Value): integer. Optimistic-concurrency version for method writes.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current eligibility, pricing, origin, estimate, and tax configuration. anyOf[1]
             * (Value): {@link DeliveryMethodConfigurationPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "configuration"?: ((DeliveryMethodConfigurationPreviousAttributes) | (null) | (unknown));
            /**
             * Time the method was created. anyOf[1] (Value): string. Time the method was created.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable revision currently used for new quotes. anyOf[1] (Value): string.
             * Immutable revision currently used for new quotes. Example:
             * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". anyOf[2] (Value): null.
             */
            "current_delivery_method_revision_id"?: ((string) | (null));
            /**
             * Stable delivery method ID. anyOf[1] (Value): string. Stable delivery method ID.
             * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
             */
            "delivery_method_id"?: ((string) | (null));
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. anyOf[1] (Value): string or null. The revocation fencing this
             * resource's own current revision. `null` when the current revision isn't revoked. It
             * doesn't cover dependencies: a method can be unusable while this is `null` because
             * its rate callback revision, signing key, or a Location's address is revoked. A
             * revocation doesn't change `status`; publish a new revision to clear it. Example:
             * "drev_01KEZF7C007Q141XJ28YAAC87B". anyOf[2] (Value): null.
             */
            "delivery_revocation_id"?: ((string | null) | (null) | (unknown));
            /**
             * Optional buyer-facing description. anyOf[1] (Value): string. Optional buyer-facing
             * description. anyOf[2] (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Ascending display order among methods. anyOf[1] (Value): integer. Ascending display
             * order among methods. Format: int32. anyOf[2] (Value): null.
             */
            "display_position"?: ((number) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value):
             * null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * Merchant-facing method name. anyOf[1] (Value): string. Merchant-facing method name.
             * anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Marks this method as recommended. Within each choice group, the available method
             * with the lowest value is recommended and listed first. Ties go to the lower
             * display_position, then the method ID. Null never recommends the method. anyOf[1]
             * (Value): integer. Marks this method as recommended. Within each choice group, the
             * available method with the lowest value is recommended and listed first. Ties go to
             * the lower display_position, then the method ID. Null never recommends the method.
             * Format: int32. anyOf[2] (Value): null.
             */
            "recommendation_priority"?: ((number) | (null));
            /**
             * Current method lifecycle status. Value enum: "active", "inactive", "archived".
             * anyOf[1] (Value): string. Current method lifecycle status. Value enum: "active",
             * "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * How many subscriptions use this method, by status. anyOf[1] (Value): {@link
             * SubscriptionCountsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "subscription_counts"?: ((SubscriptionCountsPreviousAttributes) | (null) | (unknown));
            /**
             * Delivery mode this method offers. Value enum: "shipment", "local_delivery",
             * "pickup". anyOf[1] (Value): string. Delivery mode this method offers. Value enum:
             * "shipment", "local_delivery", "pickup". anyOf[2] (Value): null.
             */
            "type"?: (("shipment" | "local_delivery" | "pickup" | (string & {})) | (null));
            /**
             * Time the method last changed. anyOf[1] (Value): string. Time the method last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Optimistic-concurrency version for method writes. anyOf[1] (Value): integer.
             * Optimistic-concurrency version for method writes. Format: uint64. minimum: 1.
             * anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_method.updated". */
    "event_type"?: "delivery_method.updated";
});
export type DeliveryMethodsCreateParams = (CreateDeliveryMethodRequestInput)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type DeliveryMethodsDeleteParams = DeliveryLocationSetsDeleteParams;
export type DeliveryMethodsGetParams = DisputesAcceptParams;
export type DeliveryMethodsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
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
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Filter by method type. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "shipment", "local_delivery", "pickup". Value enum: "shipment",
     * "local_delivery", "pickup". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "shipment", "local_delivery", "pickup". anyOf[1][] (Value): string. Value enum: "shipment",
     * "local_delivery", "pickup". anyOf[2] (Value): string. Value enum: "shipment",
     * "local_delivery", "pickup".
     */
    "type"?: InputValue<("shipment" | "local_delivery" | "pickup") | readonly ("shipment" | "local_delivery" | "pickup")[]>;
    /**
     * Filter by referenced delivery zone. pattern: ^dzone_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
     */
    "delivery_zone_id"?: InputValue<string>;
    /**
     * Filter by referenced delivery location set. pattern: ^dls_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "dls_01KEZF7C00C4WWN7RYTRF55C4H".
     */
    "delivery_location_set_id"?: InputValue<string>;
    /**
     * Filter by referenced callback endpoint. pattern: ^dcb_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id"?: InputValue<string>;
    /**
     * Filter by referenced Location. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: InputValue<string>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type DeliveryMethodsUpdateParams = (UpdateDeliveryMethodRequestInput)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/**
 * A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs,
 * and shipment, pickup, or local delivery details.
 */
export type DeliveryOptionProjection = {
    /**
     * Delivery charge for this option. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Estimated arrival dates. Omitted when the method makes no timing promise. The estimated
     * arrival date range for a delivery option, as calendar dates in the option's timezone.
     */
    "arrival_estimate"?: DeliveryArrivalEstimate;
    /**
     * The instructions field checkout collects for this option: whether it is enabled and
     * required, and its label and placeholder. Controls buyer instructions for a delivery option.
     * Omit it from a method configuration to disable instruction collection.
     */
    "buyer_instructions": BuyerInstructionsConfig;
    /**
     * Flint charge tax category. Value enum: "service_fee", "shipping", "delivery", "handling",
     * "surcharge".
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | (string & {});
    /**
     * ID of the delivery selection that chose this option. Omitted until a selection does.
     * Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "consumed_by_delivery_selection_id"?: string;
    /**
     * ID of the delivery method that produced this option. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id": string;
    /**
     * ID of the method revision this option was priced from. Example:
     * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id"?: string;
    /**
     * ID to send when choosing this option in a delivery selection. Omitted on delivery previews,
     * whose options cannot be selected. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923".
     */
    "delivery_option_id"?: string;
    /**
     * How the option divides the items into deliveries. Whether a delivery option is fulfilled in
     * one delivery or several, with the first arrival time, completion time, and delivery count.
     */
    "delivery_plan": DeliveryPlan;
    /** Buyer-visible description of the option. Omitted when the method has none. */
    "description"?: string;
    /**
     * Position in which this option displays among the others. Lower values display first. Format:
     * int32.
     */
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
    /**
     * Last moment a delivery selection can choose this option: the quote's expires_at, or earlier
     * when the rate the merchant's callback or server returned expires first. Afterward the option
     * is left out of the quote's options and selecting it requires a new quote. Omitted on
     * delivery previews, whose options can't be selected. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Local delivery details. Set only when `type` is `local_delivery`. Details of a local
     * delivery option: instructions and service level.
     */
    "local_delivery"?: DeliveryShipmentDetails;
    /** Buyer-visible name of the option. */
    "name": string;
    /**
     * Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`. []
     * (Value): {@link DeliveryWindowRequest}. A time window a buyer can choose for a delivery,
     * with its start, end, price, and the last moment it can be chosen.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /**
     * Pickup details. Set only when `type` is `pickup`. Pickup details of a delivery option: the
     * pickup mode and the pickup location.
     */
    "pickup"?: DeliveryPickupDetails;
    /**
     * Recipient fields this option asks for. A selection can leave out required fields, but
     * payment needs them. [] (Value): {@link DeliveryRecipientRequirement}. Says whether a
     * recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the
     * format it must use.
     */
    "recipient_requirements"?: Array<DeliveryRecipientRequirement>;
    /**
     * Whether Flint recommends this option over the others in the group, based on the methods'
     * `recommendation_priority`.
     */
    "recommended": boolean;
    /**
     * Shipment details. Set only when `type` is `shipment`. Shipment-specific details of a
     * delivery option or choice: the `service_level` and buyer `instructions`.
     */
    "shipment"?: DeliveryShipmentDetails;
    /** Whether tax applies to the delivery charge. */
    "taxable": boolean;
    /**
     * IANA timezone for displaying window_start_at, window_end_at, and any offered windows.
     * Example: "America/New_York".
     */
    "timezone"?: string;
    /** Delivery type of this option. Value enum: "shipment", "pickup", "local_delivery". */
    "type": "shipment" | "pickup" | "local_delivery" | (string & {});
    /**
     * End of the delivery window for this option. Omitted when the option has no single window;
     * see offered_windows. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string;
    /** Whether the offered windows cost the same. Value enum: "uniform", "varies". */
    "window_pricing"?: "uniform" | "varies" | (string & {});
    /** Whether the buyer chooses a delivery window. Value enum: "none", "offered". */
    "window_selection": "none" | "offered" | (string & {});
    /**
     * Start of the delivery window for this option. Omitted when the option has no single window;
     * see offered_windows. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string;
};
export type DeliveryOptionProjectionPreviousAttributes = {
    /**
     * Delivery charge for this option. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
    /**
     * Estimated arrival dates. Omitted when the method makes no timing promise. anyOf[1] (Value):
     * {@link DeliveryArrivalEstimatePreviousAttributes}. anyOf[2] (Value): null.
     */
    "arrival_estimate"?: ((DeliveryArrivalEstimatePreviousAttributes) | (null) | (unknown));
    /**
     * The instructions field checkout collects for this option: whether it is enabled and
     * required, and its label and placeholder. anyOf[1] (Value): {@link
     * BuyerInstructionsConfigPreviousAttributes}. anyOf[2] (Value): null.
     */
    "buyer_instructions"?: ((BuyerInstructionsConfigPreviousAttributes) | (null) | (unknown));
    /**
     * Flint charge tax category. Value enum: "service_fee", "shipping", "delivery", "handling",
     * "surcharge". anyOf[1] (Value): string. Flint charge tax category. Value enum: "service_fee",
     * "shipping", "delivery", "handling", "surcharge". anyOf[2] (Value): null.
     */
    "charge_tax_category"?: (("service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | (string & {})) | (null));
    /**
     * ID of the delivery selection that chose this option. Omitted until a selection does.
     * anyOf[1] (Value): string. ID of the delivery selection that chose this option. Omitted until
     * a selection does. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
     */
    "consumed_by_delivery_selection_id"?: ((string) | (null));
    /**
     * ID of the delivery method that produced this option. anyOf[1] (Value): string. ID of the
     * delivery method that produced this option. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * anyOf[2] (Value): null.
     */
    "delivery_method_id"?: ((string) | (null));
    /**
     * ID of the method revision this option was priced from. anyOf[1] (Value): string. ID of the
     * method revision this option was priced from. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     * anyOf[2] (Value): null.
     */
    "delivery_method_revision_id"?: ((string) | (null));
    /**
     * ID to send when choosing this option in a delivery selection. Omitted on delivery previews,
     * whose options cannot be selected. anyOf[1] (Value): string. ID to send when choosing this
     * option in a delivery selection. Omitted on delivery previews, whose options cannot be
     * selected. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923". anyOf[2] (Value): null.
     */
    "delivery_option_id"?: ((string) | (null));
    /**
     * How the option divides the items into deliveries. anyOf[1] (Value): {@link
     * DeliveryPlanPreviousAttributes}. anyOf[2] (Value): null.
     */
    "delivery_plan"?: ((DeliveryPlanPreviousAttributes) | (null) | (unknown));
    /**
     * Buyer-visible description of the option. Omitted when the method has none. anyOf[1] (Value):
     * string. Buyer-visible description of the option. Omitted when the method has none. anyOf[2]
     * (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * Position in which this option displays among the others. Lower values display first.
     * anyOf[1] (Value): integer. Position in which this option displays among the others. Lower
     * values display first. Format: int32. anyOf[2] (Value): null.
     */
    "display_position"?: ((number) | (null));
    /**
     * Where this option's items leave from, one leg per origin Location. Under method_origin
     * routing each method uses its own origin, so a pickup option leaves from the chosen store
     * while a shipment option can leave from a warehouse. Selecting the option makes these legs
     * the selection's execution legs. anyOf[1] (Value): Array of {@link
     * DeliveryQuoteExecutionLegResourcePreviousAttributes}. Where this option's items leave from,
     * one leg per origin Location. Under method_origin routing each method uses its own origin, so
     * a pickup option leaves from the chosen store while a shipment option can leave from a
     * warehouse. Selecting the option makes these legs the selection's execution legs. anyOf[1][]
     * (Value): {@link DeliveryQuoteExecutionLegResourcePreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "execution_legs"?: ((Array<DeliveryQuoteExecutionLegResourcePreviousAttributes>) | (null));
    /**
     * Last moment a delivery selection can choose this option: the quote's expires_at, or earlier
     * when the rate the merchant's callback or server returned expires first. Afterward the option
     * is left out of the quote's options and selecting it requires a new quote. Omitted on
     * delivery previews, whose options can't be selected. anyOf[1] (Value): string. Last moment a
     * delivery selection can choose this option: the quote's expires_at, or earlier when the rate
     * the merchant's callback or server returned expires first. Afterward the option is left out
     * of the quote's options and selecting it requires a new quote. Omitted on delivery previews,
     * whose options can't be selected. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * anyOf[2] (Value): null.
     */
    "expires_at"?: ((string) | (null));
    /**
     * Local delivery details. Set only when `type` is `local_delivery`. anyOf[1] (Value): {@link
     * DeliveryShipmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "local_delivery"?: ((DeliveryShipmentDetailsPreviousAttributes) | (null) | (unknown));
    /**
     * Buyer-visible name of the option. anyOf[1] (Value): string. Buyer-visible name of the
     * option. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Delivery windows the buyer can choose from. Omitted when `window_selection` is `none`.
     * anyOf[1] (Value): Array of {@link DeliveryWindowResourcePreviousAttributes}. Delivery
     * windows the buyer can choose from. Omitted when `window_selection` is `none`. anyOf[1][]
     * (Value): {@link DeliveryWindowResourcePreviousAttributes}. anyOf[2] (Value): null.
     */
    "offered_windows"?: ((Array<DeliveryWindowResourcePreviousAttributes>) | (null));
    /**
     * Pickup details. Set only when `type` is `pickup`. anyOf[1] (Value): {@link
     * DeliveryPickupDetailsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "pickup"?: ((DeliveryPickupDetailsPreviousAttributes) | (null) | (unknown));
    /**
     * Recipient fields this option asks for. A selection can leave out required fields, but
     * payment needs them. anyOf[1] (Value): Array of {@link
     * DeliveryRecipientRequirementPreviousAttributes}. Recipient fields this option asks for. A
     * selection can leave out required fields, but payment needs them. anyOf[1][] (Value): {@link
     * DeliveryRecipientRequirementPreviousAttributes}. anyOf[2] (Value): null.
     */
    "recipient_requirements"?: ((Array<DeliveryRecipientRequirementPreviousAttributes>) | (null));
    /**
     * Whether Flint recommends this option over the others in the group, based on the methods'
     * `recommendation_priority`. anyOf[1] (Value): boolean. Whether Flint recommends this option
     * over the others in the group, based on the methods' `recommendation_priority`. anyOf[2]
     * (Value): null.
     */
    "recommended"?: ((boolean) | (null));
    /**
     * Shipment details. Set only when `type` is `shipment`. anyOf[1] (Value): {@link
     * DeliveryShipmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "shipment"?: ((DeliveryShipmentDetailsPreviousAttributes) | (null) | (unknown));
    /**
     * Whether tax applies to the delivery charge. anyOf[1] (Value): boolean. Whether tax applies
     * to the delivery charge. anyOf[2] (Value): null.
     */
    "taxable"?: ((boolean) | (null));
    /**
     * IANA timezone for displaying window_start_at, window_end_at, and any offered windows.
     * anyOf[1] (Value): string. IANA timezone for displaying window_start_at, window_end_at, and
     * any offered windows. Example: "America/New_York". anyOf[2] (Value): null.
     */
    "timezone"?: ((string) | (null));
    /**
     * Delivery type of this option. Value enum: "shipment", "pickup", "local_delivery". anyOf[1]
     * (Value): string. Delivery type of this option. Value enum: "shipment", "pickup",
     * "local_delivery". anyOf[2] (Value): null.
     */
    "type"?: (("shipment" | "pickup" | "local_delivery" | (string & {})) | (null));
    /**
     * End of the delivery window for this option. Omitted when the option has no single window;
     * see offered_windows. anyOf[1] (Value): string. End of the delivery window for this option.
     * Omitted when the option has no single window; see offered_windows. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "window_end_at"?: ((string) | (null));
    /**
     * Whether the offered windows cost the same. Value enum: "uniform", "varies". anyOf[1]
     * (Value): string. Whether the offered windows cost the same. Value enum: "uniform", "varies".
     * anyOf[2] (Value): null.
     */
    "window_pricing"?: (("uniform" | "varies" | (string & {})) | (null));
    /**
     * Whether the buyer chooses a delivery window. Value enum: "none", "offered". anyOf[1]
     * (Value): string. Whether the buyer chooses a delivery window. Value enum: "none", "offered".
     * anyOf[2] (Value): null.
     */
    "window_selection"?: (("none" | "offered" | (string & {})) | (null));
    /**
     * Start of the delivery window for this option. Omitted when the option has no single window;
     * see offered_windows. anyOf[1] (Value): string. Start of the delivery window for this option.
     * Omitted when the option has no single window; see offered_windows. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "window_start_at"?: ((string) | (null));
};
/**
 * A delivery method and choice group still waiting for a caller-supplied rate on a delivery quote.
 */
export type DeliveryPendingCallerRateRequest = {
    /** Choice group that needs a rate. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". */
    "delivery_choice_group_id": string;
    /** Method that needs a rate. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
    "delivery_method_id": string;
    /** Revision of that method. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". */
    "delivery_method_revision_id": string;
};
/**
 * The result of a pickup locations preview: each pickup location and whether it can supply the
 * order, with input requirements and merchant diagnostics.
 */
export type DeliveryPickupAvailability = {
    /**
     * Time Flint evaluated pickup availability. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "evaluated_at": string;
    /**
     * How completely Flint evaluated the pickup Locations. Value enum: "complete", "incomplete",
     * "degraded".
     */
    "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {});
    /**
     * Inputs the pickup methods need before Flint can evaluate them. [] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint.
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
     * Address verification results that affected this method. Omitted when there are none. []
     * (Value): {@link DeliveryAddressAdvisoryResource}. An address verification result for a
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
     * Inputs the method needs before Flint can price it. Set only when `type` is `input_required`.
     * [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
     * address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements"?: Array<DeliveryInputRequirement>;
    /** Whether trying again later can succeed. Set only when `type` is `cannot_calculate`. */
    "retryable"?: boolean;
    /**
     * What happened when Flint evaluated this delivery method. Value enum: "available",
     * "unavailable", "input_required", "cannot_calculate".
     */
    "type": "available" | "unavailable" | "input_required" | "cannot_calculate" | (string & {});
    /**
     * Why pickup is unavailable and the action that can make it eligible. -
     * `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts
     * or method eligibility rule. - `inventory_unavailable`: The origin or pickup location cannot
     * supply the requested inventory. Reduce the quantity, replenish inventory, or choose another
     * origin or method. Value enum: "eligibility_no_match", "inventory_unavailable".
     */
    "unavailable_reason"?: "eligibility_no_match" | "inventory_unavailable" | (string & {});
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
    /**
     * ID to quote when you ask Flint about this diagnostic. Example:
     * "ddiag_01KEZF7C002JPVD08857RGDGPC".
     */
    "diagnostic_id": string;
    /** ID of the Location that was evaluated. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id": string;
    /** Time Flint recorded this diagnostic. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /**
     * What happened when Flint evaluated the method or Location. Value enum: "unavailable",
     * "cannot_calculate".
     */
    "outcome": "unavailable" | "cannot_calculate" | (string & {});
    /** What the merchant can do to get an option. Value enum: "review_configuration", "retry". */
    "recommended_action": "review_configuration" | "retry" | (string & {});
    /** Whether trying again later can succeed. */
    "retryable": boolean;
    /** What the diagnostic is about. Value enum: "location". */
    "scope": "location" | (string & {});
    /** Plain-language explanation for the merchant. */
    "summary": string;
};
/**
 * One pickup location in a pickup locations preview, with its outcome, distance, compatible
 * methods, and applicable quantities.
 */
export type DeliveryPickupAvailabilityLocationResource = {
    /**
     * Quantities of the order's items this Location can supply. [] (Value): {@link
     * DeliveryQuoteLineItemResource}. The quantity of an order line item, or of one of its bundle
     * components, that a pickup location applies to.
     */
    "applicable_quantities": Array<DeliveryQuoteLineItemResource>;
    /**
     * Result of evaluating this Location for pickup. Whether pickup is available at one location,
     * chosen by `type`, with the reason when it is unavailable or cannot be calculated.
     */
    "candidate_outcome": DeliveryPickupAvailabilityCandidateOutcome;
    /**
     * Pickup methods that can serve this Location. [] (Value): {@link
     * DeliveryPickupAvailabilityMethodResource}. A pickup delivery method, with its revision, that
     * can serve a pickup location.
     */
    "compatible_methods": Array<DeliveryPickupAvailabilityMethodResource>;
    /**
     * Straight-line distance in meters from the buyer location. A buyer location with only a
     * postal code is measured from the postal code's center. Omitted when Flint cannot place the
     * buyer location or the store.
     */
    "distance_meters"?: number;
    /**
     * The pickup Location. The ID, name, and address of a pickup location in a pickup locations
     * preview.
     */
    "location": DeliveryPickupAvailabilityLocationSummary;
};
/** The ID, name, and address of a pickup location in a pickup locations preview. */
export type DeliveryPickupAvailabilityLocationSummary = {
    /**
     * Street address of the Location. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "address"?: Address;
    /** ID of the Location buyers can collect from. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id": string;
    /** Name of the Location, as buyers see it when choosing pickup. */
    "name": string;
};
/**
 * A maximum distance from the buyer location, as a value and unit, that limits which pickup
 * locations a preview returns.
 */
export type DeliveryPickupAvailabilityMaximumDistanceRequestInput = {
    /** Unit of `value`. Value enum: "meter", "kilometer", "mile". */
    "unit": "meter" | "kilometer" | "mile";
    /**
     * Maximum distance from the buyer location, greater than zero, in the selected unit.
     * exclusiveMinimum: 0.
     */
    "value": number;
};
/** A pickup delivery method, with its revision, that can serve a pickup location. */
export type DeliveryPickupAvailabilityMethodResource = {
    /** ID of the pickup method. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
    "delivery_method_id": string;
    /**
     * ID of the method revision that was evaluated. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id": string;
};
/** Pickup details of a delivery option: the pickup mode and the pickup location. */
export type DeliveryPickupDetails = {
    /**
     * Location where the buyer collects the items. A pickup location shown on a delivery option:
     * its name, address, instructions, and timezone.
     */
    "location"?: DeliveryLocationSummaryResource;
    /**
     * How the buyer collects the items at this Location. Value enum: "in_store", "curbside",
     * "locker", "other".
     */
    "pickup_mode": "in_store" | "curbside" | "locker" | "other" | (string & {});
};
export type DeliveryPickupDetailsPreviousAttributes = {
    /**
     * Location where the buyer collects the items. anyOf[1] (Value): {@link
     * DeliveryLocationSummaryResourcePreviousAttributes}. anyOf[2] (Value): null.
     */
    "location"?: ((DeliveryLocationSummaryResourcePreviousAttributes) | (null) | (unknown));
    /**
     * How the buyer collects the items at this Location. Value enum: "in_store", "curbside",
     * "locker", "other". anyOf[1] (Value): string. How the buyer collects the items at this
     * Location. Value enum: "in_store", "curbside", "locker", "other". anyOf[2] (Value): null.
     */
    "pickup_mode"?: (("in_store" | "curbside" | "locker" | "other" | (string & {})) | (null));
};
/**
 * Whether a delivery option is fulfilled in one delivery or several, with the first arrival time,
 * completion time, and delivery count.
 */
export type DeliveryPlan = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "complete_by_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "first_arrival_at"?: string;
    /** Number of deliveries the plan makes. */
    "planned_delivery_count"?: number;
    /** Whether the items arrive together. Value enum: "single_delivery", "multiple_deliveries". */
    "type": "single_delivery" | "multiple_deliveries" | (string & {});
};
export type DeliveryPlanPreviousAttributes = {
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "complete_by_at"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "first_arrival_at"?: ((string) | (null));
    /**
     * Number of deliveries the plan makes. anyOf[1] (Value): integer. Number of deliveries the
     * plan makes. anyOf[2] (Value): null.
     */
    "planned_delivery_count"?: ((number) | (null));
    /**
     * Whether the items arrive together. Value enum: "single_delivery", "multiple_deliveries".
     * anyOf[1] (Value): string. Whether the items arrive together. Value enum: "single_delivery",
     * "multiple_deliveries". anyOf[2] (Value): null.
     */
    "type"?: (("single_delivery" | "multiple_deliveries" | (string & {})) | (null));
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
export type DeliveryPostalCodeConditionPreviousAttributes = {
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Value enum:
     * "destination_address", "buyer_location". anyOf[1] (Value): string. Address facts tested by
     * this condition. destination_address is the shipping destination. buyer_location is the
     * buyer's current pickup or local-delivery location. Default: "destination_address". Value
     * enum: "destination_address", "buyer_location". anyOf[2] (Value): null.
     */
    "subject"?: (("destination_address" | "buyer_location" | (string & {})) | (null));
    /**
     * Postal codes, each with its country. Flint compares codes in uppercase without spaces or
     * hyphens. An exact value matches that code, and a prefix value matches every code that starts
     * with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes
     * within it, so 07030 matches 07030-5788, which address verification returns for a full
     * address. A ZIP+4 value matches only that ZIP+4. anyOf[1] (Value): Array of {@link
     * DeliveryPostalCodeValuePreviousAttributes}. Postal codes, each with its country. Flint
     * compares codes in uppercase without spaces or hyphens. An exact value matches that code, and
     * a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a
     * US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which
     * address verification returns for a full address. A ZIP+4 value matches only that ZIP+4.
     * anyOf[1][] (Value): {@link DeliveryPostalCodeValuePreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "values"?: ((Array<DeliveryPostalCodeValuePreviousAttributes>) | (null));
};
/**
 * A delivery eligibility condition that matches the address postal code against exact or prefix
 * `values`.
 */
export type DeliveryPostalCodeConditionRequestInput = {
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
     * DeliveryPostalCodeValueRequestInput}. A postal code or postal code prefix with its country,
     * used in a postal code condition.
     */
    "values": Array<DeliveryPostalCodeValueRequestInput>;
};
/** A postal code or postal code prefix with its country, used in a postal code condition. */
export type DeliveryPostalCodeValue = {
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country": string;
    /**
     * Whether `value` is a whole postal code or the start of one. Default: "exact". Value enum:
     * "exact", "prefix".
     */
    "type"?: "exact" | "prefix" | (string & {});
    /** The postal code, or the start of postal codes, to match. minLength: 1. */
    "value": string;
};
export type DeliveryPostalCodeValuePreviousAttributes = {
    /**
     * ISO 3166-1 alpha-2 country code. anyOf[1] (Value): string. ISO 3166-1 alpha-2 country code.
     * minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". anyOf[2] (Value): null.
     */
    "country"?: ((string) | (null));
    /**
     * Whether `value` is a whole postal code or the start of one. Value enum: "exact", "prefix".
     * anyOf[1] (Value): string. Whether `value` is a whole postal code or the start of one.
     * Default: "exact". Value enum: "exact", "prefix". anyOf[2] (Value): null.
     */
    "type"?: (("exact" | "prefix" | (string & {})) | (null));
    /**
     * The postal code, or the start of postal codes, to match. anyOf[1] (Value): string. The
     * postal code, or the start of postal codes, to match. minLength: 1. anyOf[2] (Value): null.
     */
    "value"?: ((string) | (null));
};
/** A postal code or postal code prefix with its country, used in a postal code condition. */
export type DeliveryPostalCodeValueRequestInput = {
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country": string;
    /**
     * Whether `value` is a whole postal code or the start of one. Default: "exact". Value enum:
     * "exact", "prefix".
     */
    "type"?: "exact" | "prefix";
    /** The postal code, or the start of postal codes, to match. minLength: 1. */
    "value": string;
};
/**
 * The delivery options and prices Flint would offer for the supplied items and buyer location,
 * with input requirements and merchant diagnostics.
 */
export type DeliveryPreview = {
    /**
     * Buyer location used to evaluate delivery availability and pickup proximity. Omitted when the
     * request sent none. The normalized buyer address or coordinate used for this quote.
     */
    "buyer_location"?: DeliveryBuyerLocationResource;
    /**
     * Groups of order items that each choose their own delivery option. [] (Value): {@link
     * DeliveryPreviewChoiceGroupResource}. One group of order items in a delivery options preview,
     * with the options a buyer could choose, its availability status, and any input still needed.
     */
    "choice_groups": Array<DeliveryPreviewChoiceGroupResource>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * Delivery methods the preview evaluated. [] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids": Array<string>;
    /**
     * Destination address used to evaluate shipment and local delivery options. Omitted when the
     * request sent none. A postal address. Every address has country. Addresses Flint checked as
     * complete (customer and saved addresses, merchant, location, invoice, order delivery
     * destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and
     * city, and US ones always have state and postal_code. Delivery quote destinations, buyer
     * locations and postal-code tax locations hold only what was provided, such as postal_code and
     * country.
     */
    "destination_address"?: Address;
    /** Time Flint computed this preview. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "evaluated_at": string;
    /**
     * How completely Flint evaluated the candidate delivery methods. Value enum: "complete",
     * "incomplete", "degraded".
     */
    "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {});
    /**
     * Request a new preview after this time, because prices and availability may have changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
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
     * Items the preview evaluated. [] (Value): {@link CreateOrderLineItem}. A line item in a
     * delivery preview: a catalog variant, a bundle, or a custom item with a name and unit price.
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
    /**
     * ID of the Location at which pickup methods were priced. Omitted when the request sent none.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "pickup_location_id"?: string;
};
/**
 * One group of order items in a delivery options preview, with the options a buyer could choose,
 * its availability status, and any input still needed.
 */
export type DeliveryPreviewChoiceGroupResource = {
    /** Delivery types permitted by this group's items. [] (Value): string. */
    "allowed_types"?: Array<string>;
    /**
     * Whether this group has a delivery option available. Value enum: "ready", "needs_input",
     * "needs_checkout_context", "unavailable".
     */
    "availability_status": "ready" | "needs_input" | "needs_checkout_context" | "unavailable" | (string & {});
    /**
     * Evaluation result for each candidate delivery method, keyed by its method ID. * (Value):
     * {@link DeliveryCandidateOutcomeResource}. The result of evaluating one delivery method for a
     * choice group, selected by `type`: available with an option, unavailable, input required,
     * cannot calculate, or requires checkout context.
     */
    "candidate_outcomes": Record<string, DeliveryCandidateOutcomeResource>;
    /**
     * How completely Flint evaluated the group's candidate delivery methods. Value enum:
     * "complete", "incomplete", "degraded".
     */
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
     * Inputs this group's delivery methods need before they can be priced. [] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * Order line items, or bundle components, this group covers, with the quantity covered. []
     * (Value): {@link DeliveryQuoteLineItemResource}. An order line item, or one bundle component
     * of it, and the quantity covered by a delivery choice group.
     */
    "line_items": Array<DeliveryQuoteLineItemResource>;
    /**
     * Delivery options available for these items. [] (Value): {@link DeliveryOptionProjection}. A
     * delivery option in a quote or preview: its price, type, timing, delivery plan, execution
     * legs, and shipment, pickup, or local delivery details.
     */
    "options": Array<DeliveryOptionProjection>;
};
/** The response for: Create delivery preview. */
export type DeliveryPreviewResponse = {
    /**
     * Resource, collection, or operation result returned by this request. oneOf[1] (Value): {@link
     * DeliveryPreview}. The delivery options and prices Flint would offer for the supplied items
     * and buyer location, with input requirements and merchant diagnostics. oneOf[2] (Value):
     * {@link DeliveryPickupAvailability}. The result of a pickup locations preview: each pickup
     * location and whether it can supply the order, with input requirements and merchant
     * diagnostics.
     */
    "data": ((DeliveryPreview) | (DeliveryPickupAvailability) | (Record<string, unknown>));
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type DeliveryPreviewsCreateParams = (CreateDeliveryPreviewRequestInput)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/**
 * One rate in a rate table pricing strategy: a `when` condition, a `priority`, and a price per
 * currency. The first matching rate by priority sets the price.
 */
export type DeliveryPricingRate = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /** ID of this rate. Flint assigns it. Example: "drate_01KEZF7C00FD0B4QEC0M00MJ4S". */
    "delivery_rate_id": string;
    /**
     * Rates are checked from the highest priority to the lowest. The first matching rate sets the
     * price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Eligibility expression that decides whether this rate applies. The rate matches when the
     * expression matches. `null` when a stored rate has no condition. Flint requires a condition
     * on every rate, so expect an expression. anyOf[1] (Value): {@link
     * DeliveryEligibilityExpression}. A boolean expression containing exactly one operator or
     * typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     * anyOf[2] (Value): null.
     */
    "when": ((DeliveryEligibilityExpression) | (null) | (unknown));
};
/**
 * A rate to add when creating a rate table pricing strategy: a `when` condition, a `priority`, and
 * a price per currency.
 */
export type DeliveryPricingRateCreateRequest = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /**
     * Rates are checked from the highest priority to the lowest. The first matching rate sets the
     * price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Eligibility expression that decides whether this rate applies. The rate matches when the
     * expression matches. A boolean expression containing exactly one operator or typed condition
     * at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "when": DeliveryEligibilityExpressionRequest;
};
/**
 * A rate to add when creating a rate table pricing strategy: a `when` condition, a `priority`, and
 * a price per currency.
 */
export type DeliveryPricingRateCreateRequestInput = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /**
     * Rates are checked from the highest priority to the lowest. The first matching rate sets the
     * price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Eligibility expression that decides whether this rate applies. The rate matches when the
     * expression matches. A boolean expression containing exactly one operator or typed condition
     * at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "when": DeliveryEligibilityExpressionRequestInput;
};
export type DeliveryPricingRatePreviousAttributes = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value.
     * anyOf[1] (Value): Map of {@link MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "currency_options"?: ((Record<string, MoneyValuePreviousAttributes>) | (null));
    /**
     * ID of this rate. Flint assigns it. anyOf[1] (Value): string. ID of this rate. Flint assigns
     * it. Example: "drate_01KEZF7C00FD0B4QEC0M00MJ4S". anyOf[2] (Value): null.
     */
    "delivery_rate_id"?: ((string) | (null));
    /**
     * Rates are checked from the highest priority to the lowest. The first matching rate sets the
     * price. Priorities must be unique and at least 0. anyOf[1] (Value): integer. Rates are
     * checked from the highest priority to the lowest. The first matching rate sets the price.
     * Priorities must be unique and at least 0. Format: int32. anyOf[2] (Value): null.
     */
    "priority"?: ((number) | (null));
    /**
     * Eligibility expression that decides whether this rate applies. The rate matches when the
     * expression matches. `null` when a stored rate has no condition. Flint requires a condition
     * on every rate, so expect an expression. anyOf[1] (Value): ({@link
     * DeliveryEligibilityExpressionPreviousAttributes} or null). Eligibility expression that
     * decides whether this rate applies. The rate matches when the expression matches. `null` when
     * a stored rate has no condition. Flint requires a condition on every rate, so expect an
     * expression. anyOf[1].anyOf[1] (Value): {@link
     * DeliveryEligibilityExpressionPreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2]
     * (Value): null.
     */
    "when"?: (((((DeliveryEligibilityExpressionPreviousAttributes) | (null) | (unknown)))) | (null) | (unknown));
};
/**
 * A rate in a rate table pricing strategy you send when updating a delivery method. Include
 * `delivery_rate_id` to keep or update an existing rate.
 */
export type DeliveryPricingRateRequest = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /**
     * Stable rate identifier returned by Flint. Include it when updating or retaining an existing
     * rate. minLength: 1. Example: "drate_01KEZF7C00FD0B4QEC0M00MJ4S".
     */
    "delivery_rate_id"?: string;
    /**
     * Rates are checked from the highest priority to the lowest. The first matching rate sets the
     * price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Eligibility expression that decides whether this rate applies. The rate matches when the
     * expression matches. A boolean expression containing exactly one operator or typed condition
     * at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "when": DeliveryEligibilityExpressionRequest;
};
/**
 * A rate in a rate table pricing strategy you send when updating a delivery method. Include
 * `delivery_rate_id` to keep or update an existing rate.
 */
export type DeliveryPricingRateRequestInput = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /**
     * Stable rate identifier returned by Flint. Include it when updating or retaining an existing
     * rate. minLength: 1. Example: "drate_01KEZF7C00FD0B4QEC0M00MJ4S".
     */
    "delivery_rate_id"?: string;
    /**
     * Rates are checked from the highest priority to the lowest. The first matching rate sets the
     * price. Priorities must be unique and at least 0. Format: int32.
     */
    "priority": number;
    /**
     * Eligibility expression that decides whether this rate applies. The rate matches when the
     * expression matches. A boolean expression containing exactly one operator or typed condition
     * at each node. Expressions support at most 8 levels and 100 total nodes.
     */
    "when": DeliveryEligibilityExpressionRequestInput;
};
/**
 * How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`,
 * `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set.
 */
export type DeliveryPricingStrategy = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Delivery pricing
     * calculated from a base fee, distance, weight, and per-item handling, with minimum and
     * maximum fees, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing that
     * comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded
     * by minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price, by
     * currency.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Pricing strategy that
     * charges the price of the first matching rate in a list of prioritized rates.
     * `unmatched_behavior` says what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "fixed",
     * "rate_table", "tiered", "calculated", "callback", "caller_supplied".
     */
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
     * Calculated pricing settings. Set only when `type` is `calculated`. Delivery pricing
     * calculated from a base fee, distance, weight, and per-item handling, with minimum and
     * maximum fees, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing that
     * comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded
     * by minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price, by
     * currency.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Pricing strategy that
     * charges the price of the first matching rate in a list of prioritized rates.
     * `unmatched_behavior` says what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "calculated".
     */
    "type": "calculated" | (string & {});
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "calculated".
     */
    "type": unknown;
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Delivery pricing
     * calculated from a base fee, distance, weight, and per-item handling, with minimum and
     * maximum fees, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
}));
export type DeliveryPricingStrategyCalculatedPreviousAttributes = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. anyOf[1] (Value): {@link
     * DeliveryCalculatedPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "calculated"?: ((DeliveryCalculatedPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. anyOf[1] (Value): {@link
     * DeliveryExternalPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "callback"?: ((DeliveryExternalPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. anyOf[1]
     * (Value): {@link DeliveryExternalPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "caller_supplied"?: ((DeliveryExternalPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. anyOf[1] (Value): {@link
     * DeliveryFixedPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "fixed"?: ((DeliveryFixedPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. anyOf[1] (Value): {@link
     * DeliveryRateTablePricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "rate_table"?: ((DeliveryRateTablePricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. anyOf[1] (Value): {@link
     * DeliveryTieredPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tiered"?: ((DeliveryTieredPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "calculated". anyOf[1] (Value): string. How the method sets its price. Set the property
     * named by this value. Value enum: "calculated". anyOf[2] (Value): null.
     */
    "type"?: (("calculated" | (string & {})) | (null));
})
    & ({
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "calculated". anyOf[1] (Value): any. How the method sets its price. Set the property named
     * by this value. Value enum: "calculated". anyOf[2] (Value): null.
     */
    "type"?: ((unknown) | (null) | (unknown));
});
/** The `callback` variant of `DeliveryPricingStrategy`. */
export type DeliveryPricingStrategyCallback = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Delivery pricing
     * calculated from a base fee, distance, weight, and per-item handling, with minimum and
     * maximum fees, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing that
     * comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum
     * and maximum fees by currency.
     */
    "callback": DeliveryExternalPricingStrategy;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded
     * by minimum and maximum fees by currency.
     */
    "caller_supplied"?: DeliveryExternalPricingStrategy;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price, by
     * currency.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Pricing strategy that
     * charges the price of the first matching rate in a list of prioritized rates.
     * `unmatched_behavior` says what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "callback".
     */
    "type": "callback" | (string & {});
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "callback".
     */
    "type": unknown;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing that
     * comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum
     * and maximum fees by currency.
     */
    "callback": DeliveryExternalPricingStrategy;
}));
export type DeliveryPricingStrategyCallbackPreviousAttributes = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. anyOf[1] (Value): {@link
     * DeliveryCalculatedPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "calculated"?: ((DeliveryCalculatedPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. anyOf[1] (Value): {@link
     * DeliveryExternalPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "callback"?: ((DeliveryExternalPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. anyOf[1]
     * (Value): {@link DeliveryExternalPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "caller_supplied"?: ((DeliveryExternalPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. anyOf[1] (Value): {@link
     * DeliveryFixedPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "fixed"?: ((DeliveryFixedPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. anyOf[1] (Value): {@link
     * DeliveryRateTablePricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "rate_table"?: ((DeliveryRateTablePricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. anyOf[1] (Value): {@link
     * DeliveryTieredPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tiered"?: ((DeliveryTieredPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "callback".
     * anyOf[1] (Value): string. How the method sets its price. Set the property named by this
     * value. Value enum: "callback". anyOf[2] (Value): null.
     */
    "type"?: (("callback" | (string & {})) | (null));
})
    & ({
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "callback".
     * anyOf[1] (Value): any. How the method sets its price. Set the property named by this value.
     * Value enum: "callback". anyOf[2] (Value): null.
     */
    "type"?: ((unknown) | (null) | (unknown));
});
/** The `caller_supplied` variant of `DeliveryPricingStrategy`. */
export type DeliveryPricingStrategyCallerSupplied = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Delivery pricing
     * calculated from a base fee, distance, weight, and per-item handling, with minimum and
     * maximum fees, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing that
     * comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryExternalPricingStrategy;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded
     * by minimum and maximum fees by currency.
     */
    "caller_supplied": DeliveryExternalPricingStrategy;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price, by
     * currency.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Pricing strategy that
     * charges the price of the first matching rate in a list of prioritized rates.
     * `unmatched_behavior` says what happens when none match.
     */
    "rate_table"?: DeliveryRateTablePricingStrategy;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Pricing strategy that charges by
     * band. The `basis` value, such as total weight or subtotal, selects a band, and `unit`
     * applies to weight bases.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "caller_supplied".
     */
    "type": "caller_supplied" | (string & {});
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "caller_supplied".
     */
    "type": unknown;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded
     * by minimum and maximum fees by currency.
     */
    "caller_supplied": DeliveryExternalPricingStrategy;
}));
export type DeliveryPricingStrategyCallerSuppliedPreviousAttributes = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. anyOf[1] (Value): {@link
     * DeliveryCalculatedPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "calculated"?: ((DeliveryCalculatedPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. anyOf[1] (Value): {@link
     * DeliveryExternalPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "callback"?: ((DeliveryExternalPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. anyOf[1]
     * (Value): {@link DeliveryExternalPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "caller_supplied"?: ((DeliveryExternalPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. anyOf[1] (Value): {@link
     * DeliveryFixedPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "fixed"?: ((DeliveryFixedPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. anyOf[1] (Value): {@link
     * DeliveryRateTablePricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "rate_table"?: ((DeliveryRateTablePricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. anyOf[1] (Value): {@link
     * DeliveryTieredPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tiered"?: ((DeliveryTieredPricingStrategyPreviousAttributes) | (null) | (unknown));
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "caller_supplied". anyOf[1] (Value): string. How the method sets its price. Set the property
     * named by this value. Value enum: "caller_supplied". anyOf[2] (Value): null.
     */
    "type"?: (("caller_supplied" | (string & {})) | (null));
})
    & ({
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "caller_supplied". anyOf[1] (Value): any. How the method sets its price. Set the property
     * named by this value. Value enum: "caller_supplied". anyOf[2] (Value): null.
     */
    "type"?: ((unknown) | (null) | (unknown));
});
/** The `calculated` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputCalculated = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequest;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "calculated".
     */
    "type": "calculated" | (string & {});
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "calculated".
     */
    "type": unknown;
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategy;
}));
/** The `calculated` variant of `DeliveryPricingStrategyCreateInput`. */
export type DeliveryPricingStrategyCreateInputCalculatedInput = ({
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated": DeliveryCalculatedPricingStrategyRequestInput;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback"?: DeliveryCallbackPricingStrategyRequestInput;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequestInput;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategyRequestInput;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequestInput;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategyRequestInput;
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "calculated".
     */
    "type": "calculated";
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum:
     * "calculated".
     */
    "type": ("calculated") & ("calculated");
    /**
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
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
     * Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery
     * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
     * handling, and fee limits, by currency.
     */
    "calculated"?: DeliveryCalculatedPricingStrategy;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequest;
    /**
     * Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery
     * pricing where you supply the rate when creating a delivery quote, bounded by minimum and
     * maximum fees by currency.
     */
    "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest;
    /**
     * Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency,
     * supplied for a delivery method.
     */
    "fixed"?: DeliveryFixedPricingStrategy;
    /**
     * Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing
     * strategy you supply when creating a delivery method: a list of prioritized rates, each with
     * a condition and prices.
     */
    "rate_table"?: DeliveryRateTablePricingStrategyCreateRequest;
    /**
     * Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you
     * supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit`
     * when the basis is total weight.
     */
    "tiered"?: DeliveryTieredPricingStrategy;
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "callback".
     */
    "type": "callback" | (string & {});
})
    & (({
    /**
     * How the method sets its price. Set the property named by this value. Value enum: "callback".
     */
    "type": unknown;
    /**
     * Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you
     * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum
     * and maximum fees by currency.
     */
    "callback": DeliveryCallbackPricingStrategyRequest;
}));
