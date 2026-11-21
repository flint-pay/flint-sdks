import type {
    DeliveryProfileConfigurationInputManual,
    DeliveryProfileConfigurationInputManualInput,
    DeliveryProfileConfigurationInputNone,
    DeliveryProfileConfigurationInputNoneInput,
    DeliveryProfile
} from './types-21.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-43.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { WebhookDeliveryProfile } from './types-79.js';
import type { ResponseMeta } from './types-62.js';
import type { InputValue } from '../runtime.js';
import type { AssignToUnconfiguredDeliveryProfileRequestInput } from './types-1.js';
import type { CreateDeliveryProfileRequestInput } from './types-9.js';
import type {
    DeliveryLocationSetsDeleteParams,
    DeliveryInputRequirement,
    DeliveryMerchantDiagnostic,
    DeliveryInputRequirementPreviousAttributes,
    DeliveryDistanceRequestInput
} from './types-19.js';
import type { UpdateDeliveryProfileRequestInput } from './types-76.js';
import type { Address } from './types-0.js';
import type {
    DeliveryBuyerLocationResource,
    DeliveryAddressAdvisoryResource,
    DeliveryCandidateOutcomeResource,
    DeliveryAddressAdvisoryResourcePreviousAttributes,
    DeliveryCandidateOutcomeResourcePreviousAttributes,
    DeliveryDistance,
    DeliveryDistancePreviousAttributes
} from './types-18.js';
import type {
    DeliveryPendingCallerRateRequest,
    DeliveryOptionProjection,
    DeliveryPlan,
    DeliveryOptionProjectionPreviousAttributes
} from './types-20.js';
import type { BuyerInstructionsConfig } from './types-2.js';
import type { MoneyValue } from './types-44.js';
import type { CreateCheckoutDeliveryQuoteRequestInput } from './types-8.js';
import type { DisputesAcceptParams } from './types-26.js';
/** The `quote` variant of `DeliveryProfileConfigurationInputRequired`. */
export type DeliveryProfileConfigurationInputQuote = ({
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". [] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy": "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy": DeliveryProfileOriginPolicyRequest;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "required".
     */
    "requirement": "required" | (string & {});
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote".
     */
    "resolution_mode": "quote" | (string & {});
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy": "whole_line_item" | "quantity_split_allowed" | (string & {});
})
    & ({
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery". [] (Value): string. Value enum:
     * "shipment", "pickup", "local_delivery".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery" | (string & {})>;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "required".
     */
    "requirement": unknown;
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote".
     */
    "resolution_mode": unknown;
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy": DeliveryProfileOriginPolicyRequest;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy": "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy": "whole_line_item" | "quantity_split_allowed" | (string & {});
});
/** The `quote` variant of `DeliveryProfileConfigurationInputRequired`. */
export type DeliveryProfileConfigurationInputQuoteInput = ({
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". [] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy": "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone";
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy": DeliveryProfileOriginPolicyRequestInput;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "required".
     */
    "requirement": "required";
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote".
     */
    "resolution_mode": "quote";
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy": "whole_line_item" | "quantity_split_allowed";
})
    & ({
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery". [] (Value): string. Value enum:
     * "shipment", "pickup", "local_delivery".
     */
    "allowed_types": Array<"shipment" | "pickup" | "local_delivery">;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "required".
     */
    "requirement": "required";
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote".
     */
    "resolution_mode": "quote";
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy": DeliveryProfileOriginPolicyRequestInput;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy": "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone";
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy": "whole_line_item" | "quantity_split_allowed";
});
/** The `required` variant of `DeliveryProfileConfigurationInput`. */
export type DeliveryProfileConfigurationInputRequired = ({
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". [] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types"?: Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy"?: DeliveryProfileOriginPolicyRequest;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "required".
     */
    "requirement": "required" | (string & {});
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote", "manual".
     */
    "resolution_mode": "quote" | "manual" | (string & {});
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed" | (string & {});
})
    & ((Exclude<DeliveryProfileConfigurationInputQuote & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileConfigurationInputManual & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `required` variant of `DeliveryProfileConfigurationInput`. */
export type DeliveryProfileConfigurationInputRequiredInput = ({
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". [] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types"?: Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone";
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy"?: DeliveryProfileOriginPolicyRequestInput;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "required".
     */
    "requirement": "required";
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote", "manual".
     */
    "resolution_mode": "quote" | "manual";
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed";
})
    & ((Exclude<DeliveryProfileConfigurationInputQuoteInput & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileConfigurationInputManualInput & object, readonly unknown[]>));
export type DeliveryProfileConfigurationPreviousAttributes = {
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. [] enum: "shipment",
     * "pickup", "local_delivery", "digital", "service". anyOf[1] (Value): Array of string.
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. [] enum: "shipment",
     * "pickup", "local_delivery", "digital", "service". anyOf[1][] (Value): string. Value enum:
     * "shipment", "pickup", "local_delivery", "digital", "service". anyOf[2] (Value): null.
     */
    "allowed_types"?: ((Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>) | (null));
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     * anyOf[1] (Value): string. Required for quote resolution and forbidden when requirement is
     * none or resolution_mode is manual. Controls which delivery obligations can share a choice
     * group. Value enum: "combine_when_compatible", "separate_profile", "separate_line_item",
     * "fulfill_alone". anyOf[2] (Value): null.
     */
    "combination_policy"?: (("combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {}))
        | (null));
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. anyOf[1] (Value): {@link
     * DeliveryProfileOriginPolicyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "origin_policy"?: ((DeliveryProfileOriginPolicyPreviousAttributes) | (null));
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "none", "required". anyOf[1] (Value): string. Whether delivery planning
     * applies. none forbids every other configuration field. required also requires
     * resolution_mode and allowed_types, plus the fields required by that resolution mode. Value
     * enum: "none", "required". anyOf[2] (Value): null.
     */
    "requirement"?: (("none" | "required" | (string & {})) | (null));
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote", "manual". anyOf[1] (Value):
     * string. Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote", "manual". anyOf[2] (Value):
     * null.
     */
    "resolution_mode"?: (("quote" | "manual" | (string & {})) | (null));
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed". anyOf[1] (Value): string. Required
     * for quote resolution and forbidden when requirement is none or resolution_mode is manual.
     * Controls whether a line item quantity can be split across delivery assignments. Value enum:
     * "whole_line_item", "quantity_split_allowed". anyOf[2] (Value): null.
     */
    "splitting_policy"?: (("whole_line_item" | "quantity_split_allowed" | (string & {})) | (null));
};
/**
 * Delivery planning settings you supply when creating or updating a delivery profile. Which fields
 * are allowed depends on `requirement` and `resolution_mode`.
 */
export type DeliveryProfileConfigurationRequest = ({
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". [] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types"?: Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {})>;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy"?: DeliveryProfileOriginPolicyRequest;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "none", "required".
     */
    "requirement"?: "none" | "required" | (string & {});
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote", "manual".
     */
    "resolution_mode"?: "quote" | "manual" | (string & {});
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed" | (string & {});
})
    & ((Exclude<DeliveryProfileConfigurationInputNone & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileConfigurationInputRequired & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Delivery planning settings you supply when creating or updating a delivery profile. Which fields
 * are allowed depends on `requirement` and `resolution_mode`.
 */
export type DeliveryProfileConfigurationRequestInput = ({
    /**
     * Required as a non-empty unique list when requirement is required. quote accepts shipment,
     * pickup, and local_delivery. manual accepts digital and service. minItems: 1. uniqueItems:
     * true. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". [] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "allowed_types"?: Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">;
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls which delivery obligations can share a choice group. Value enum:
     * "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone";
    /**
     * Required for quote resolution and forbidden for none or manual resolution. fixed_location
     * requires location_id. inventory_routing forbids location_id and applies only to tracked
     * inventory. method_origin forbids location_id. Origin policy you supply for a delivery
     * profile: a fixed Location (`location_id`), inventory routing, or the origin set on the
     * delivery method.
     */
    "origin_policy"?: DeliveryProfileOriginPolicyRequestInput;
    /**
     * Whether delivery planning applies. none forbids every other configuration field. required
     * also requires resolution_mode and allowed_types, plus the fields required by that resolution
     * mode. Value enum: "none", "required".
     */
    "requirement"?: "none" | "required";
    /**
     * Required when requirement is required. quote plans physical delivery and requires
     * origin_policy, combination_policy, and splitting_policy. manual supports digital and service
     * items and forbids physical planning fields. Value enum: "quote", "manual".
     */
    "resolution_mode"?: "quote" | "manual";
    /**
     * Required for quote resolution and forbidden when requirement is none or resolution_mode is
     * manual. Controls whether a line item quantity can be split across delivery assignments.
     * Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed";
})
    & ((Exclude<DeliveryProfileConfigurationInputNoneInput & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileConfigurationInputRequiredInput & object, readonly unknown[]>));
export type DeliveryProfileCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookDeliveryProfile;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_profile.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookDeliveryProfile;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_profile.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_profile.created";
});
/**
 * The `delivery_profile.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryProfileCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookDeliveryProfile}. The resource snapshot, without
     * expansions. Webhooks omit these fields: `diagnostics`, `unconfigured_assignment`.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`,
         * `unconfigured_assignment`.
         */
        "object": WebhookDeliveryProfile;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_profile.created". */
    "event_type"?: "delivery_profile.created";
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
 * The `delivery_profile.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryProfileCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookDeliveryProfile}. The resource snapshot, without
     * expansions. Webhooks omit these fields: `diagnostics`, `unconfigured_assignment`.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`,
         * `unconfigured_assignment`.
         */
        "object": WebhookDeliveryProfile;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_profile.created". */
    "event_type"?: "delivery_profile.created";
});
/**
 * Read-only coverage checks for a delivery profile, such as how many active Locations have no
 * compatible delivery method and how many countries its zones name.
 */
export type DeliveryProfileDiagnostics = {
    /** Number of active delivery methods whose type is allowed by this profile. minimum: 0. */
    "active_method_definitions_count": number;
    /**
     * True when this is the physical catalog default and every active physical catalog obligation
     * uses it.
     */
    "covers_all_items": boolean;
    /**
     * Number of active Locations that no active delivery method compatible with this profile can
     * use as an origin. minimum: 0.
     */
    "locations_without_rates_count": number;
    /**
     * Up to 20 active Location IDs that no compatible active delivery method can use as an origin.
     * Use locations_without_rates_count for the complete count. [] (Value): string.
     */
    "unassigned_locations": Array<string>;
    /** True when more matching Locations exist than are returned in unassigned_locations. */
    "unassigned_locations_truncated": boolean;
    /**
     * Number of distinct countries explicitly named by zones referenced from compatible active
     * delivery methods. minimum: 0.
     */
    "zone_country_count": number;
};
/** A page of `DeliveryProfile` objects. */
export type DeliveryProfileListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * DeliveryProfile}. Reusable delivery rules assigned to catalog items.
     */
    "data": Array<DeliveryProfile>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Where items under a delivery profile ship or leave from: a fixed Location (`location_id`),
 * inventory routing, or the origin set on the delivery method.
 */
export type DeliveryProfileOriginPolicy = {
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Where items under the profile leave from. Value enum: "fixed_location", "inventory_routing",
     * "method_origin".
     */
    "type": "fixed_location" | "inventory_routing" | "method_origin" | (string & {});
};
/** The `fixed_location` variant of `DeliveryProfileOriginPolicyInput`. */
export type DeliveryProfileOriginPolicyInputFixedLocation = ({
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /** Where items under the profile leave from. Value enum: "fixed_location". */
    "type": "fixed_location" | (string & {});
})
    & ({
    /** Where items under the profile leave from. Value enum: "fixed_location". */
    "type": unknown;
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
});
/** The `fixed_location` variant of `DeliveryProfileOriginPolicyInput`. */
export type DeliveryProfileOriginPolicyInputFixedLocationInput = ({
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /** Where items under the profile leave from. Value enum: "fixed_location". */
    "type": "fixed_location";
})
    & ({
    /** Where items under the profile leave from. Value enum: "fixed_location". */
    "type": "fixed_location";
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
});
/** The `inventory_routing` variant of `DeliveryProfileOriginPolicyInput`. */
export type DeliveryProfileOriginPolicyInputInventoryRouting = ({
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /** Where items under the profile leave from. Value enum: "inventory_routing". */
    "type": "inventory_routing" | (string & {});
})
    & (({
    /** Where items under the profile leave from. Value enum: "inventory_routing". */
    "type": unknown;
}));
/** The `inventory_routing` variant of `DeliveryProfileOriginPolicyInput`. */
export type DeliveryProfileOriginPolicyInputInventoryRoutingInput = ({
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /** Where items under the profile leave from. Value enum: "inventory_routing". */
    "type": "inventory_routing";
})
    & (({
    /** Where items under the profile leave from. Value enum: "inventory_routing". */
    "type": "inventory_routing";
})
    & (({
    "location_id"?: never;
})));
/** The `method_origin` variant of `DeliveryProfileOriginPolicyInput`. */
export type DeliveryProfileOriginPolicyInputMethodOrigin = ({
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /** Where items under the profile leave from. Value enum: "method_origin". */
    "type": "method_origin" | (string & {});
})
    & (({
    /** Where items under the profile leave from. Value enum: "method_origin". */
    "type": unknown;
}));
/** The `method_origin` variant of `DeliveryProfileOriginPolicyInput`. */
export type DeliveryProfileOriginPolicyInputMethodOriginInput = ({
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /** Where items under the profile leave from. Value enum: "method_origin". */
    "type": "method_origin";
})
    & (({
    /** Where items under the profile leave from. Value enum: "method_origin". */
    "type": "method_origin";
})
    & (({
    "location_id"?: never;
})));
export type DeliveryProfileOriginPolicyPreviousAttributes = {
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. anyOf[1] (Value): string. ID of the Location items leave from. Required for
     * `fixed_location` and not allowed otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * anyOf[2] (Value): null.
     */
    "location_id"?: ((string) | (null));
    /**
     * Where items under the profile leave from. Value enum: "fixed_location", "inventory_routing",
     * "method_origin". anyOf[1] (Value): string. Where items under the profile leave from. Value
     * enum: "fixed_location", "inventory_routing", "method_origin". anyOf[2] (Value): null.
     */
    "type"?: (("fixed_location" | "inventory_routing" | "method_origin" | (string & {})) | (null));
};
/**
 * Origin policy you supply for a delivery profile: a fixed Location (`location_id`), inventory
 * routing, or the origin set on the delivery method.
 */
export type DeliveryProfileOriginPolicyRequest = ({
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Where items under the profile leave from. Value enum: "fixed_location", "inventory_routing",
     * "method_origin".
     */
    "type": "fixed_location" | "inventory_routing" | "method_origin" | (string & {});
})
    & ((Exclude<DeliveryProfileOriginPolicyInputFixedLocation & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileOriginPolicyInputInventoryRouting & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileOriginPolicyInputMethodOrigin & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Origin policy you supply for a delivery profile: a fixed Location (`location_id`), inventory
 * routing, or the origin set on the delivery method.
 */
export type DeliveryProfileOriginPolicyRequestInput = ({
    /**
     * ID of the Location items leave from. Required for `fixed_location` and not allowed
     * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Where items under the profile leave from. Value enum: "fixed_location", "inventory_routing",
     * "method_origin".
     */
    "type": "fixed_location" | "inventory_routing" | "method_origin";
})
    & ((Exclude<DeliveryProfileOriginPolicyInputFixedLocationInput & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileOriginPolicyInputInventoryRoutingInput & object, readonly unknown[]>)
    | (Exclude<DeliveryProfileOriginPolicyInputMethodOriginInput & object, readonly unknown[]>));
/** A response containing `DeliveryProfile` data. */
export type DeliveryProfileResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Reusable delivery rules
     * assigned to catalog items.
     */
    "data": DeliveryProfile;
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
/**
 * Progress of a delivery profile's latest bulk assignment to catalog items that have no delivery
 * profile. It moves from `processing` to `completed`, to `canceled` when it stops early, or to
 * `failed` when Flint can't finish it.
 */
export type DeliveryProfileUnconfiguredAssignment = {
    /**
     * Time Flint accepted the assignment request. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "accepted_at": string;
    /**
     * About how many bundle components the assignment hasn't reached yet, starting from those
     * without a delivery profile when Flint accepted the request. Flint updates it between runs of
     * batches, about every 10 seconds, so it can lag behind, and it is 0 once the assignment is
     * `completed`. Format: int64. minimum: 0.
     */
    "bundle_components_remaining": number;
    /**
     * Why the assignment was canceled. Omitted when `status` isn't `canceled`. Value enum:
     * "superseded", "delivery_profile_archived".
     */
    "cancellation_reason"?: "superseded" | "delivery_profile_archived" | (string & {});
    /**
     * Time the assignment reached `completed`, `canceled`, or `failed`. Omitted when `status` is
     * `processing`. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "completed_at"?: string;
    /**
     * Why the assignment failed. Omitted when `status` isn't `failed`. Value enum:
     * "assignment_failed".
     */
    "failure_reason"?: "assignment_failed" | (string & {});
    /**
     * About how many physical product variants the assignment hasn't reached yet, starting from
     * those without a delivery profile when Flint accepted the request. Flint updates it between
     * runs of batches, about every 10 seconds, so it can lag behind, and it is 0 once the
     * assignment is `completed`. Format: int64. minimum: 0.
     */
    "product_variants_remaining": number;
    /**
     * Progress of the assignment. Poll the profile until it is no longer `processing`. Value enum:
     * "processing", "completed", "canceled", "failed".
     */
    "status": "processing" | "completed" | "canceled" | "failed" | (string & {});
};
export type DeliveryProfileUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookDeliveryProfile;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "configuration"?: ((DeliveryProfileConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_delivery_profile_revision_id"?: ((string) | (null));
            "delivery_profile_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "is_default"?: ((boolean) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_profile.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookDeliveryProfile;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "configuration"?: ((DeliveryProfileConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_delivery_profile_revision_id"?: ((string) | (null));
            "delivery_profile_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "is_default"?: ((boolean) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_profile.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_profile.updated";
});
/**
 * The `delivery_profile.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliveryProfileUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookDeliveryProfile}. The resource snapshot, without
     * expansions. Webhooks omit these fields: `diagnostics`, `unconfigured_assignment`.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.configuration (Optional): {@link
     * DeliveryProfileConfigurationPreviousAttributes} or null. Current delivery requirement and
     * grouping policy. previous_attributes.configuration.anyOf[1] (Value): {@link
     * DeliveryProfileConfigurationPreviousAttributes}. previous_attributes.configuration.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. Time the profile
     * was created. previous_attributes.created_at.anyOf[1] (Value): string. Time the profile was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.current_delivery_profile_revision_id (Optional): string or null.
     * Immutable revision used for new line-item snapshots.
     * previous_attributes.current_delivery_profile_revision_id.anyOf[1] (Value): string. Immutable
     * revision used for new line-item snapshots. Example: "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F".
     * previous_attributes.current_delivery_profile_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_profile_id (Optional): string or null. Stable delivery profile
     * ID. previous_attributes.delivery_profile_id.anyOf[1] (Value): string. Stable delivery
     * profile ID. Example: "dprof_01KEZF7C0020J13FQYNY9854R0".
     * previous_attributes.delivery_profile_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.is_default (Optional): boolean or null. True only when this profile is
     * the current physical catalog default. previous_attributes.is_default.anyOf[1] (Value):
     * boolean. True only when this profile is the current physical catalog default.
     * previous_attributes.is_default.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Merchant-facing profile name. previous_attributes.name.anyOf[1] (Value):
     * string. Merchant-facing profile name. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Current profile lifecycle status.
     * Value enum: "active", "archived". previous_attributes.status.anyOf[1] (Value): string.
     * Current profile lifecycle status. Value enum: "active", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. Time the profile last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. Time the profile last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null.
     * Optimistic-concurrency version for profile writes. previous_attributes.version.anyOf[1]
     * (Value): integer. Optimistic-concurrency version for profile writes. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`,
         * `unconfigured_assignment`.
         */
        "object": WebhookDeliveryProfile;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. configuration (Optional): {@link
         * DeliveryProfileConfigurationPreviousAttributes} or null. Current delivery requirement
         * and grouping policy. configuration.anyOf[1] (Value): {@link
         * DeliveryProfileConfigurationPreviousAttributes}. configuration.anyOf[2] (Value): null.
         * created_at (Optional): string or null. Time the profile was created. created_at.anyOf[1]
         * (Value): string. Time the profile was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * current_delivery_profile_revision_id (Optional): string or null. Immutable revision used
         * for new line-item snapshots. current_delivery_profile_revision_id.anyOf[1] (Value):
         * string. Immutable revision used for new line-item snapshots. Example:
         * "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F". current_delivery_profile_revision_id.anyOf[2]
         * (Value): null. delivery_profile_id (Optional): string or null. Stable delivery profile
         * ID. delivery_profile_id.anyOf[1] (Value): string. Stable delivery profile ID. Example:
         * "dprof_01KEZF7C0020J13FQYNY9854R0". delivery_profile_id.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. is_default
         * (Optional): boolean or null. True only when this profile is the current physical catalog
         * default. is_default.anyOf[1] (Value): boolean. True only when this profile is the
         * current physical catalog default. is_default.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. metadata.anyOf[1]
         * (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string
         * or null. Merchant-facing profile name. name.anyOf[1] (Value): string. Merchant-facing
         * profile name. name.anyOf[2] (Value): null. status (Optional): string or null. Current
         * profile lifecycle status. Value enum: "active", "archived". status.anyOf[1] (Value):
         * string. Current profile lifecycle status. Value enum: "active", "archived".
         * status.anyOf[2] (Value): null. updated_at (Optional): string or null. Time the profile
         * last changed. updated_at.anyOf[1] (Value): string. Time the profile last changed.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         * version (Optional): integer or null. Optimistic-concurrency version for profile writes.
         * version.anyOf[1] (Value): integer. Optimistic-concurrency version for profile writes.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current delivery requirement and grouping policy. anyOf[1] (Value): {@link
             * DeliveryProfileConfigurationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "configuration"?: ((DeliveryProfileConfigurationPreviousAttributes) | (null));
            /**
             * Time the profile was created. anyOf[1] (Value): string. Time the profile was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable revision used for new line-item snapshots. anyOf[1] (Value): string.
             * Immutable revision used for new line-item snapshots. Example:
             * "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F". anyOf[2] (Value): null.
             */
            "current_delivery_profile_revision_id"?: ((string) | (null));
            /**
             * Stable delivery profile ID. anyOf[1] (Value): string. Stable delivery profile ID.
             * Example: "dprof_01KEZF7C0020J13FQYNY9854R0". anyOf[2] (Value): null.
             */
            "delivery_profile_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * True only when this profile is the current physical catalog default. anyOf[1]
             * (Value): boolean. True only when this profile is the current physical catalog
             * default. anyOf[2] (Value): null.
             */
            "is_default"?: ((boolean) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value):
             * null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Merchant-facing profile name. anyOf[1] (Value): string. Merchant-facing profile
             * name. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Current profile lifecycle status. Value enum: "active", "archived". anyOf[1]
             * (Value): string. Current profile lifecycle status. Value enum: "active", "archived".
             * anyOf[2] (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * Time the profile last changed. anyOf[1] (Value): string. Time the profile last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Optimistic-concurrency version for profile writes. anyOf[1] (Value): integer.
             * Optimistic-concurrency version for profile writes. Format: uint64. minimum: 1.
             * anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_profile.updated". */
    "event_type"?: "delivery_profile.updated";
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
 * The `delivery_profile.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryProfileUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookDeliveryProfile}. The resource snapshot, without
     * expansions. Webhooks omit these fields: `diagnostics`, `unconfigured_assignment`.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.configuration (Optional): {@link
     * DeliveryProfileConfigurationPreviousAttributes} or null. Current delivery requirement and
     * grouping policy. previous_attributes.configuration.anyOf[1] (Value): {@link
     * DeliveryProfileConfigurationPreviousAttributes}. previous_attributes.configuration.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. Time the profile
     * was created. previous_attributes.created_at.anyOf[1] (Value): string. Time the profile was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.current_delivery_profile_revision_id (Optional): string or null.
     * Immutable revision used for new line-item snapshots.
     * previous_attributes.current_delivery_profile_revision_id.anyOf[1] (Value): string. Immutable
     * revision used for new line-item snapshots. Example: "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F".
     * previous_attributes.current_delivery_profile_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_profile_id (Optional): string or null. Stable delivery profile
     * ID. previous_attributes.delivery_profile_id.anyOf[1] (Value): string. Stable delivery
     * profile ID. Example: "dprof_01KEZF7C0020J13FQYNY9854R0".
     * previous_attributes.delivery_profile_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.is_default (Optional): boolean or null. True only when this profile is
     * the current physical catalog default. previous_attributes.is_default.anyOf[1] (Value):
     * boolean. True only when this profile is the current physical catalog default.
     * previous_attributes.is_default.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Merchant-facing profile name. previous_attributes.name.anyOf[1] (Value):
     * string. Merchant-facing profile name. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Current profile lifecycle status.
     * Value enum: "active", "archived". previous_attributes.status.anyOf[1] (Value): string.
     * Current profile lifecycle status. Value enum: "active", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. Time the profile last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. Time the profile last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null.
     * Optimistic-concurrency version for profile writes. previous_attributes.version.anyOf[1]
     * (Value): integer. Optimistic-concurrency version for profile writes. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`,
         * `unconfigured_assignment`.
         */
        "object": WebhookDeliveryProfile;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. configuration (Optional): {@link
         * DeliveryProfileConfigurationPreviousAttributes} or null. Current delivery requirement
         * and grouping policy. configuration.anyOf[1] (Value): {@link
         * DeliveryProfileConfigurationPreviousAttributes}. configuration.anyOf[2] (Value): null.
         * created_at (Optional): string or null. Time the profile was created. created_at.anyOf[1]
         * (Value): string. Time the profile was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * current_delivery_profile_revision_id (Optional): string or null. Immutable revision used
         * for new line-item snapshots. current_delivery_profile_revision_id.anyOf[1] (Value):
         * string. Immutable revision used for new line-item snapshots. Example:
         * "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F". current_delivery_profile_revision_id.anyOf[2]
         * (Value): null. delivery_profile_id (Optional): string or null. Stable delivery profile
         * ID. delivery_profile_id.anyOf[1] (Value): string. Stable delivery profile ID. Example:
         * "dprof_01KEZF7C0020J13FQYNY9854R0". delivery_profile_id.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. is_default
         * (Optional): boolean or null. True only when this profile is the current physical catalog
         * default. is_default.anyOf[1] (Value): boolean. True only when this profile is the
         * current physical catalog default. is_default.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. metadata.anyOf[1]
         * (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string
         * or null. Merchant-facing profile name. name.anyOf[1] (Value): string. Merchant-facing
         * profile name. name.anyOf[2] (Value): null. status (Optional): string or null. Current
         * profile lifecycle status. Value enum: "active", "archived". status.anyOf[1] (Value):
         * string. Current profile lifecycle status. Value enum: "active", "archived".
         * status.anyOf[2] (Value): null. updated_at (Optional): string or null. Time the profile
         * last changed. updated_at.anyOf[1] (Value): string. Time the profile last changed.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         * version (Optional): integer or null. Optimistic-concurrency version for profile writes.
         * version.anyOf[1] (Value): integer. Optimistic-concurrency version for profile writes.
         * Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current delivery requirement and grouping policy. anyOf[1] (Value): {@link
             * DeliveryProfileConfigurationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "configuration"?: ((DeliveryProfileConfigurationPreviousAttributes) | (null));
            /**
             * Time the profile was created. anyOf[1] (Value): string. Time the profile was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable revision used for new line-item snapshots. anyOf[1] (Value): string.
             * Immutable revision used for new line-item snapshots. Example:
             * "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F". anyOf[2] (Value): null.
             */
            "current_delivery_profile_revision_id"?: ((string) | (null));
            /**
             * Stable delivery profile ID. anyOf[1] (Value): string. Stable delivery profile ID.
             * Example: "dprof_01KEZF7C0020J13FQYNY9854R0". anyOf[2] (Value): null.
             */
            "delivery_profile_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * True only when this profile is the current physical catalog default. anyOf[1]
             * (Value): boolean. True only when this profile is the current physical catalog
             * default. anyOf[2] (Value): null.
             */
            "is_default"?: ((boolean) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value):
             * null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Merchant-facing profile name. anyOf[1] (Value): string. Merchant-facing profile
             * name. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Current profile lifecycle status. Value enum: "active", "archived". anyOf[1]
             * (Value): string. Current profile lifecycle status. Value enum: "active", "archived".
             * anyOf[2] (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * Time the profile last changed. anyOf[1] (Value): string. Time the profile last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Optimistic-concurrency version for profile writes. anyOf[1] (Value): integer.
             * Optimistic-concurrency version for profile writes. Format: uint64. minimum: 1.
             * anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_profile.updated". */
    "event_type"?: "delivery_profile.updated";
});
export type DeliveryProfilesAssignToUnconfiguredParams = (InputValue<AssignToUnconfiguredDeliveryProfileRequestInput> | {
    "expected_version"?: never;
})
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
export type DeliveryProfilesCreateParams = (InputValue<CreateDeliveryProfileRequestInput>)
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
export type DeliveryProfilesDeleteParams = DeliveryLocationSetsDeleteParams;
export type DeliveryProfilesGetParams = {
    /** Compute catalog and delivery-configuration diagnostics for this profile. Default: false. */
    "include_diagnostics"?: InputValue<boolean>;
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
export type DeliveryProfilesListParams = {
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
     * Search across delivery_profile_id, name, and external_reference_id. Text fields match any
     * part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as dprof_01. maxLength: 255.
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
     * "archived". Value enum: "active", "archived". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "active", "archived". anyOf[1][] (Value): string. Value enum: "active",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<("active" | "archived") | readonly ("active" | "archived")[]>;
    /**
     * Filter by whether the profile is the current physical catalog default. Accepts a single true
     * or false value.
     */
    "is_default"?: InputValue<boolean>;
    /**
     * Filter by profile resolution mode. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "quote", "manual". Value enum: "quote", "manual". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "quote", "manual". anyOf[1][] (Value): string. Value
     * enum: "quote", "manual". anyOf[2] (Value): string. Value enum: "quote", "manual".
     */
    "resolution_mode"?: InputValue<("quote" | "manual") | readonly ("quote" | "manual")[]>;
    /**
     * Compute catalog and delivery-configuration diagnostics for every profile returned. Default:
     * false.
     */
    "include_diagnostics"?: InputValue<boolean>;
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
export type DeliveryProfilesUpdateParams = (UpdateDeliveryProfileRequestInput)
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
/** An estimate of available delivery options and their prices. */
export type DeliveryQuote = {
    /**
     * The earlier delivery quote this quote was priced from. Omitted when it was not priced from
     * one. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     */
    "basis_delivery_quote_id"?: string;
    /**
     * The delivery selection this quote was priced from. Omitted when it was not priced from one.
     * Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "basis_delivery_selection_id"?: string;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. The normalized buyer address or coordinate used for this quote.
     */
    "buyer_location"?: DeliveryBuyerLocationResource;
    /**
     * Buyer-safe reasons a choice group has no available option. Groups with an available option
     * contribute no reasons. Merchant configuration details are never included. [] enum:
     * "address_required", "address_incomplete", "address_needs_review", "outside_delivery_area",
     * "no_pickup_location_nearby", "unavailable_for_these_items", "temporarily_unavailable". []
     * (Value): string. Value enum: "address_required", "address_incomplete",
     * "address_needs_review", "outside_delivery_area", "no_pickup_location_nearby",
     * "unavailable_for_these_items", "temporarily_unavailable".
     */
    "buyer_reasons": Array<"address_required"
        | "address_incomplete"
        | "address_needs_review"
        | "outside_delivery_area"
        | "no_pickup_location_nearby"
        | "unavailable_for_these_items"
        | "temporarily_unavailable"
        | (string & {})>;
    /**
     * Always present with an API key or dashboard credential. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id"?: string;
    /**
     * Groups of order items that each choose their own delivery option. [] (Value): {@link
     * DeliveryQuoteChoiceGroupResource}. One group of order items in a delivery quote, with the
     * delivery options the buyer can choose, its availability status, and any input still needed.
     */
    "choice_groups": Array<DeliveryQuoteChoiceGroupResource>;
    /** When Flint created this quote. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Unique identifier for this delivery quote, prefixed `dqt_`. Example:
     * "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     */
    "delivery_quote_id": string;
    /**
     * The delivery revocation that revoked this quote. `null` when no revocation applies. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B".
     */
    "delivery_revocation_id": string | null;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. A postal address. Every address has country. Addresses Flint checked as complete
     * (customer and saved addresses, merchant, location, invoice, order delivery destination, tax
     * identity, fulfillment recipient and pickup addresses) always have line1 and city, and US
     * ones always have state and postal_code. Delivery quote destinations, buyer locations and
     * postal-code tax locations hold only what was provided, such as postal_code and country.
     */
    "destination_address"?: Address;
    /** Time Flint priced this quote. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "evaluated_at": string;
    /**
     * How completely Flint evaluated the candidate delivery methods. Value enum: "complete",
     * "incomplete", "degraded".
     */
    "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {});
    /**
     * Authoritative expiry for this quote: 24 hours when every method uses fixed, tiered, or
     * rate_table pricing, and at most 15 minutes otherwise. A cart with tracked inventory shortens
     * it to the 5 minutes its stock check stays valid. Read this value from every response.
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
     * The cart reservation IDs the merchant supplied for routing credit. Omitted from
     * checkout-credential responses; reservation quantities and details are never included. []
     * (Value): string. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_ids"?: Array<string>;
    /**
     * True when a required delivery group has no option and a candidate lacks the requested stock.
     */
    "inventory_unavailable"?: boolean;
    /**
     * Always present with an API key or dashboard credential. [] (Value): {@link
     * DeliveryMerchantDiagnostic}. A merchant-only diagnostic explaining why a delivery method
     * produced no option, with its outcome, recommended action, and eligibility mismatches.
     */
    "merchant_diagnostics"?: Array<DeliveryMerchantDiagnostic>;
    /**
     * Delivery methods evaluated for this quote. [] (Value): {@link DeliveryQuoteMethodResource}.
     * A delivery method offered in a delivery quote, with its name, type, display position, and
     * revision.
     */
    "methods"?: Array<DeliveryQuoteMethodResource>;
    /**
     * Always present with an API key or dashboard credential. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Delivery methods that wait for your integration to supply a rate. Supply them with
     * `method_results` in a new quote. [] (Value): {@link DeliveryPendingCallerRateRequest}. A
     * delivery method and choice group still waiting for a caller-supplied rate on a delivery
     * quote.
     */
    "pending_caller_rate_requests"?: Array<DeliveryPendingCallerRateRequest>;
    /**
     * Why the quote was revoked: the reason on the delivery revocation that fenced a dependency
     * this quote used. Present when status is revoked. Value enum: "unsafe_configuration",
     * "location_unavailable", "credential_compromise", "legal_requirement", "other".
     */
    "revocation_reason"?: "unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other"
        | (string & {});
    /**
     * Time the quote was revoked. Omitted until a delivery revocation revokes it. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "revoked_at"?: string;
    /** Whether the buyer must choose a delivery option before paying. */
    "selection_required": boolean;
    /**
     * Why this quote can no longer be used. Request a new quote. Omitted unless `status` is
     * `stale`. Value enum: "checkout_changed", "selection_changed", "eligibility_changed",
     * "inventory_changed", "authority_changed", "superseded_by_priced_quote".
     */
    "stale_reason"?: "checkout_changed"
        | "selection_changed"
        | "eligibility_changed"
        | "inventory_changed"
        | "authority_changed"
        | "superseded_by_priced_quote"
        | (string & {});
    /**
     * Whether the quote can be selected now, derived from the current checkout or renewal order on
     * every read. Value enum: "active", "consumed", "stale", "expired", "revoked".
     */
    "status": "active" | "consumed" | "stale" | "expired" | "revoked" | (string & {});
    /**
     * The priced delivery quote that replaced this quote. Its basis_delivery_quote_id names this
     * quote. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     */
    "superseded_by_delivery_quote_id"?: string;
};
/**
 * One group of order items in a delivery quote, with the delivery options the buyer can choose,
 * its availability status, and any input still needed.
 */
export type DeliveryQuoteChoiceGroupResource = {
    /**
     * Buyer-actionable address verification results that affected this choice group. A
     * suggested_address is an explicit correction the buyer may confirm; Flint does not apply it
     * silently. [] (Value): {@link DeliveryAddressAdvisoryResource}. An address verification
     * result for a delivery address or buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /** Delivery types permitted by this group's items. [] (Value): string. */
    "allowed_types"?: Array<string>;
    /**
     * Whether this group has a delivery option the buyer can choose. Value enum: "ready",
     * "needs_input", "unavailable".
     */
    "availability_status": "ready" | "needs_input" | "unavailable" | (string & {});
    /**
     * Evaluation result for each candidate delivery method, keyed by its method ID. * (Value):
     * {@link DeliveryCandidateOutcomeResource}. The result of evaluating one delivery method for a
     * choice group, selected by `type`: available with an option, unavailable, input required,
     * cannot calculate, or requires checkout context.
     */
    "candidate_outcomes"?: Record<string, DeliveryCandidateOutcomeResource>;
    /**
     * Identifier used to choose one option for this group. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     */
    "delivery_choice_group_id": string;
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
     * Inputs this group's delivery methods need before they can be priced or selected. [] (Value):
     * {@link DeliveryInputRequirement}. An input a delivery method needs, such as an address field
     * or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * Order line items, or bundle components, this group covers, with the quantity covered. []
     * (Value): {@link DeliveryQuoteLineItemResource}. An order line item, or one bundle component
     * of it, and the quantity covered by a delivery choice group.
     */
    "line_items": Array<DeliveryQuoteLineItemResource>;
    /**
     * Types of the delivery methods that can serve this group's items, each listed once, in the
     * order the methods display. A type is listed before its options are priced, such as a local
     * delivery that waits for the buyer's address, and stays listed while its methods need more
     * input or cannot serve the current input. options lists what the buyer can choose now. A
     * method whose type these items do not allow is left out, and the list is empty when no method
     * can serve them. [] enum: "shipment", "pickup", "local_delivery". [] (Value): string. Value
     * enum: "shipment", "pickup", "local_delivery".
     */
    "method_types": Array<"shipment" | "pickup" | "local_delivery" | (string & {})>;
    /**
     * Delivery options the buyer can choose now. [] (Value): {@link DeliveryOptionProjection}. A
     * delivery option in a quote or preview: its price, type, timing, delivery plan, execution
     * legs, and shipment, pickup, or local delivery details. [].amount_money (Required): {@link
     * MoneyValue}. Delivery charge for this option. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. [].arrival_estimate (Optional): {@link
     * DeliveryArrivalEstimate}. Estimated arrival dates. Omitted when the method makes no timing
     * promise. The estimated arrival date range for a delivery option, as calendar dates in the
     * option's timezone. [].buyer_instructions (Required): {@link BuyerInstructionsConfig}. The
     * instructions field checkout collects for this option: whether it is enabled and required,
     * and its label and placeholder. Controls buyer instructions for a delivery option. Omit it
     * from a method configuration to disable instruction collection. [].charge_tax_category
     * (Optional): string. Flint charge tax category. Value enum: "service_fee", "shipping",
     * "delivery", "handling", "surcharge". [].consumed_by_delivery_selection_id (Optional):
     * string. ID of the delivery selection that chose this option. Omitted until a selection does.
     * Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". [].delivery_method_id (Required): string. ID of
     * the delivery method that produced this option. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * [].delivery_method_revision_id (Optional): string. ID of the method revision this option was
     * priced from. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". [].delivery_option_id (Required):
     * string. ID to send when choosing this option in a delivery selection. Omitted on delivery
     * previews, whose options cannot be selected. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923".
     * [].delivery_plan (Required): {@link DeliveryPlan}. How the option divides the items into
     * deliveries. Whether a delivery option is fulfilled in one delivery or several, with the
     * first arrival time, completion time, and delivery count. [].description (Optional): string.
     * Buyer-visible description of the option. Omitted when the method has none.
     * [].display_position (Required): integer. Position in which this option displays among the
     * others. Lower values display first. Format: int32. [].execution_legs (Optional): Array of
     * {@link DeliveryQuoteExecutionLegResource}. Where this option's items leave from, one leg per
     * origin Location. Under method_origin routing each method uses its own origin, so a pickup
     * option leaves from the chosen store while a shipment option can leave from a warehouse.
     * Selecting the option makes these legs the selection's execution legs. [].execution_legs[]
     * (Value): {@link DeliveryQuoteExecutionLegResource}. One leg of a delivery choice group,
     * identifying the origin Location the group's items leave from. [].expires_at (Optional):
     * string. Last moment a delivery selection can choose this option: the quote's expires_at, or
     * earlier when the rate the merchant's callback or server returned expires first. Afterward
     * the option is left out of the quote's options and selecting it requires a new quote. Omitted
     * on delivery previews, whose options can't be selected. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". [].local_delivery (Optional): {@link DeliveryShipmentDetails}. Local
     * delivery details. Set only when `type` is `local_delivery`. Details of a local delivery
     * option: instructions and service level. [].name (Required): string. Buyer-visible name of
     * the option. [].offered_windows (Optional): Array of {@link DeliveryWindowRequest}. Delivery
     * windows the buyer can choose from. Omitted when `window_selection` is `none`.
     * [].offered_windows[] (Value): {@link DeliveryWindowRequest}. A time window a buyer can
     * choose for a delivery, with its start, end, price, and the last moment it can be chosen.
     * [].pickup (Optional): {@link DeliveryPickupDetails}. Pickup details. Set only when `type` is
     * `pickup`. Pickup details of a delivery option: the pickup mode and the pickup location.
     * [].recipient_requirements (Optional): Array of {@link DeliveryRecipientRequirement}.
     * Recipient fields this option asks for. A selection can leave out required fields, but
     * payment needs them. [].recipient_requirements[] (Value): {@link
     * DeliveryRecipientRequirement}. Says whether a recipient field (`name`, `email`, or `phone`)
     * is required for a delivery method, and the format it must use. [].recommended (Required):
     * boolean. Whether Flint recommends this option over the others in the group, based on the
     * methods' `recommendation_priority`. [].shipment (Optional): {@link DeliveryShipmentDetails}.
     * Shipment details. Set only when `type` is `shipment`. Shipment-specific details of a
     * delivery option or choice: the `service_level` and buyer `instructions`. [].taxable
     * (Required): boolean. Whether tax applies to the delivery charge. [].timezone (Optional):
     * string. IANA timezone for displaying window_start_at, window_end_at, and any offered
     * windows. Example: "America/New_York". [].type (Required): string. Delivery type of this
     * option. Value enum: "shipment", "pickup", "local_delivery". [].window_end_at (Optional):
     * string. End of the delivery window for this option. Omitted when the option has no single
     * window; see offered_windows. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * [].window_pricing (Optional): string. Whether the offered windows cost the same. Value enum:
     * "uniform", "varies". [].window_selection (Required): string. Whether the buyer chooses a
     * delivery window. Value enum: "none", "offered". [].window_start_at (Optional): string. Start
     * of the delivery window for this option. Omitted when the option has no single window; see
     * offered_windows. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "options": Array<({
        /**
         * Delivery charge for this option. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code.
         */
        "amount_money": MoneyValue;
        /**
         * The instructions field checkout collects for this option: whether it is enabled and
         * required, and its label and placeholder. Controls buyer instructions for a delivery
         * option. Omit it from a method configuration to disable instruction collection.
         */
        "buyer_instructions": BuyerInstructionsConfig;
        /**
         * ID of the delivery method that produced this option. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
         */
        "delivery_method_id": string;
        /**
         * ID to send when choosing this option in a delivery selection. Omitted on delivery
         * previews, whose options cannot be selected. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923".
         */
        "delivery_option_id": string;
        /**
         * How the option divides the items into deliveries. Whether a delivery option is fulfilled
         * in one delivery or several, with the first arrival time, completion time, and delivery
         * count.
         */
        "delivery_plan": DeliveryPlan;
        /**
         * Position in which this option displays among the others. Lower values display first.
         * Format: int32.
         */
        "display_position": number;
        /** Buyer-visible name of the option. */
        "name": string;
        /**
         * Whether Flint recommends this option over the others in the group, based on the methods'
         * `recommendation_priority`.
         */
        "recommended": boolean;
        /** Whether tax applies to the delivery charge. */
        "taxable": boolean;
        /** Delivery type of this option. Value enum: "shipment", "pickup", "local_delivery". */
        "type": "shipment" | "pickup" | "local_delivery" | (string & {});
        /** Whether the buyer chooses a delivery window. Value enum: "none", "offered". */
        "window_selection": "none" | "offered" | (string & {});
    })
        & (Exclude<DeliveryOptionProjection & object, readonly unknown[]>)>;
    /**
     * The requested pickup Location or the order's fixed inventory Location cannot be served by
     * this group's pickup methods.
     */
    "pickup_unavailable"?: boolean;
    /**
     * Method chosen for this group in the previous selection. Omitted when there is none. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "previously_selected_delivery_method_id"?: string;
    /**
     * Identifies the same group across quotes for the same delivery demands and compatible
     * delivery types. It can change when the grouping inputs change.
     */
    "stable_key": string;
};
export type DeliveryQuoteChoiceGroupResourcePreviousAttributes = {
    /**
     * Buyer-actionable address verification results that affected this choice group. A
     * suggested_address is an explicit correction the buyer may confirm; Flint does not apply it
     * silently. anyOf[1] (Value): Array of {@link
     * DeliveryAddressAdvisoryResourcePreviousAttributes}. Buyer-actionable address verification
     * results that affected this choice group. A suggested_address is an explicit correction the
     * buyer may confirm; Flint does not apply it silently. anyOf[1][] (Value): {@link
     * DeliveryAddressAdvisoryResourcePreviousAttributes}. anyOf[2] (Value): null.
     */
    "address_advisories"?: ((Array<DeliveryAddressAdvisoryResourcePreviousAttributes>) | (null));
    /**
     * Delivery types permitted by this group's items. anyOf[1] (Value): Array of string. Delivery
     * types permitted by this group's items. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     */
    "allowed_types"?: ((Array<string>) | (null));
    /**
     * Whether this group has a delivery option the buyer can choose. Value enum: "ready",
     * "needs_input", "unavailable". anyOf[1] (Value): string. Whether this group has a delivery
     * option the buyer can choose. Value enum: "ready", "needs_input", "unavailable". anyOf[2]
     * (Value): null.
     */
    "availability_status"?: (("ready" | "needs_input" | "unavailable" | (string & {})) | (null));
    /**
     * Evaluation result for each candidate delivery method, keyed by its method ID. anyOf[1]
     * (Value): Map of {@link DeliveryCandidateOutcomeResourcePreviousAttributes}. anyOf[1].*
     * (Value): {@link DeliveryCandidateOutcomeResourcePreviousAttributes}. anyOf[2] (Value): null.
     */
    "candidate_outcomes"?: ((Record<string, DeliveryCandidateOutcomeResourcePreviousAttributes>) | (null));
    /**
     * Identifier used to choose one option for this group. anyOf[1] (Value): string. Identifier
     * used to choose one option for this group. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * anyOf[2] (Value): null.
     */
    "delivery_choice_group_id"?: ((string) | (null));
    /**
     * How completely Flint evaluated the group's candidate delivery methods. Value enum:
     * "complete", "incomplete", "degraded". anyOf[1] (Value): string. How completely Flint
     * evaluated the group's candidate delivery methods. Value enum: "complete", "incomplete",
     * "degraded". anyOf[2] (Value): null.
     */
    "evaluation_status"?: (("complete" | "incomplete" | "degraded" | (string & {})) | (null));
    /**
     * Where the group's items leave from, one leg per origin Location, when all of its methods
     * leave from the same Locations. Omitted when the origin depends on the chosen method, such as
     * shipping from a warehouse or picking up at a store. Each option then lists its own
     * execution_legs. anyOf[1] (Value): Array of {@link
     * DeliveryQuoteExecutionLegResourcePreviousAttributes}. Where the group's items leave from,
     * one leg per origin Location, when all of its methods leave from the same Locations. Omitted
     * when the origin depends on the chosen method, such as shipping from a warehouse or picking
     * up at a store. Each option then lists its own execution_legs. anyOf[1][] (Value): {@link
     * DeliveryQuoteExecutionLegResourcePreviousAttributes}. anyOf[2] (Value): null.
     */
    "execution_legs"?: ((Array<DeliveryQuoteExecutionLegResourcePreviousAttributes>) | (null));
    /**
     * Inputs this group's delivery methods need before they can be priced or selected. anyOf[1]
     * (Value): Array of {@link DeliveryInputRequirementPreviousAttributes}. Inputs this group's
     * delivery methods need before they can be priced or selected. anyOf[1][] (Value): {@link
     * DeliveryInputRequirementPreviousAttributes}. anyOf[2] (Value): null.
     */
    "input_requirements"?: ((Array<DeliveryInputRequirementPreviousAttributes>) | (null));
    /**
     * Order line items, or bundle components, this group covers, with the quantity covered.
     * anyOf[1] (Value): Array of {@link DeliveryQuoteLineItemResourcePreviousAttributes}. Order
     * line items, or bundle components, this group covers, with the quantity covered. anyOf[1][]
     * (Value): {@link DeliveryQuoteLineItemResourcePreviousAttributes}. anyOf[2] (Value): null.
     */
    "line_items"?: ((Array<DeliveryQuoteLineItemResourcePreviousAttributes>) | (null));
    /**
     * Types of the delivery methods that can serve this group's items, each listed once, in the
     * order the methods display. A type is listed before its options are priced, such as a local
     * delivery that waits for the buyer's address, and stays listed while its methods need more
     * input or cannot serve the current input. options lists what the buyer can choose now. A
     * method whose type these items do not allow is left out, and the list is empty when no method
     * can serve them. [] enum: "shipment", "pickup", "local_delivery". anyOf[1] (Value): Array of
     * string. Types of the delivery methods that can serve this group's items, each listed once,
     * in the order the methods display. A type is listed before its options are priced, such as a
     * local delivery that waits for the buyer's address, and stays listed while its methods need
     * more input or cannot serve the current input. options lists what the buyer can choose now. A
     * method whose type these items do not allow is left out, and the list is empty when no method
     * can serve them. [] enum: "shipment", "pickup", "local_delivery". anyOf[1][] (Value): string.
     * Value enum: "shipment", "pickup", "local_delivery". anyOf[2] (Value): null.
     */
    "method_types"?: ((Array<"shipment" | "pickup" | "local_delivery" | (string & {})>) | (null));
    /**
     * Delivery options the buyer can choose now. anyOf[1] (Value): Array of {@link
     * DeliveryOptionProjectionPreviousAttributes}. Delivery options the buyer can choose now.
     * anyOf[1][] (Value): {@link DeliveryOptionProjectionPreviousAttributes}. A delivery option in
     * a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment,
     * pickup, or local delivery details. anyOf[1][].amount_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Delivery charge for this option.
     * anyOf[1][].amount_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[1][].amount_money.anyOf[2] (Value): null. anyOf[1][].arrival_estimate (Optional):
     * {@link DeliveryArrivalEstimatePreviousAttributes} or null. Estimated arrival dates. Omitted
     * when the method makes no timing promise. anyOf[1][].arrival_estimate.anyOf[1] (Value):
     * {@link DeliveryArrivalEstimatePreviousAttributes}. anyOf[1][].arrival_estimate.anyOf[2]
     * (Value): null. anyOf[1][].buyer_instructions (Optional): {@link
     * BuyerInstructionsConfigPreviousAttributes} or null. The instructions field checkout collects
     * for this option: whether it is enabled and required, and its label and placeholder.
     * anyOf[1][].buyer_instructions.anyOf[1] (Value): {@link
     * BuyerInstructionsConfigPreviousAttributes}. anyOf[1][].buyer_instructions.anyOf[2] (Value):
     * null. anyOf[1][].charge_tax_category (Optional): string or null. Flint charge tax category.
     * Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge".
     * anyOf[1][].charge_tax_category.anyOf[1] (Value): string. Flint charge tax category. Value
     * enum: "service_fee", "shipping", "delivery", "handling", "surcharge".
     * anyOf[1][].charge_tax_category.anyOf[2] (Value): null.
     * anyOf[1][].consumed_by_delivery_selection_id (Optional): string or null. ID of the delivery
     * selection that chose this option. Omitted until a selection does.
     * anyOf[1][].consumed_by_delivery_selection_id.anyOf[1] (Value): string. ID of the delivery
     * selection that chose this option. Omitted until a selection does. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[1][].consumed_by_delivery_selection_id.anyOf[2]
     * (Value): null. anyOf[1][].delivery_method_id (Optional): string or null. ID of the delivery
     * method that produced this option. anyOf[1][].delivery_method_id.anyOf[1] (Value): string. ID
     * of the delivery method that produced this option. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[1][].delivery_method_id.anyOf[2] (Value): null.
     * anyOf[1][].delivery_method_revision_id (Optional): string or null. ID of the method revision
     * this option was priced from. anyOf[1][].delivery_method_revision_id.anyOf[1] (Value):
     * string. ID of the method revision this option was priced from. Example:
     * "dmetr_01KEZF7C001ZF9D92DY1G51GV9". anyOf[1][].delivery_method_revision_id.anyOf[2] (Value):
     * null. anyOf[1][].delivery_option_id (Optional): string or null. ID to send when choosing
     * this option in a delivery selection. Omitted on delivery previews, whose options cannot be
     * selected. anyOf[1][].delivery_option_id.anyOf[1] (Value): string. ID to send when choosing
     * this option in a delivery selection. Omitted on delivery previews, whose options cannot be
     * selected. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923". anyOf[1][].delivery_option_id.anyOf[2]
     * (Value): null. anyOf[1][].delivery_plan (Optional): {@link DeliveryPlanPreviousAttributes}
     * or null. How the option divides the items into deliveries. anyOf[1][].delivery_plan.anyOf[1]
     * (Value): {@link DeliveryPlanPreviousAttributes}. anyOf[1][].delivery_plan.anyOf[2] (Value):
     * null. anyOf[1][].description (Optional): string or null. Buyer-visible description of the
     * option. Omitted when the method has none. anyOf[1][].description.anyOf[1] (Value): string.
     * Buyer-visible description of the option. Omitted when the method has none.
     * anyOf[1][].description.anyOf[2] (Value): null. anyOf[1][].display_position (Optional):
     * integer or null. Position in which this option displays among the others. Lower values
     * display first. anyOf[1][].display_position.anyOf[1] (Value): integer. Position in which this
     * option displays among the others. Lower values display first. Format: int32.
     * anyOf[1][].display_position.anyOf[2] (Value): null. anyOf[1][].execution_legs (Optional):
     * Array of {@link DeliveryQuoteExecutionLegResourcePreviousAttributes} or null. Where this
     * option's items leave from, one leg per origin Location. Under method_origin routing each
     * method uses its own origin, so a pickup option leaves from the chosen store while a shipment
     * option can leave from a warehouse. Selecting the option makes these legs the selection's
     * execution legs. anyOf[1][].execution_legs.anyOf[1] (Value): Array of {@link
     * DeliveryQuoteExecutionLegResourcePreviousAttributes}. Where this option's items leave from,
     * one leg per origin Location. Under method_origin routing each method uses its own origin, so
     * a pickup option leaves from the chosen store while a shipment option can leave from a
     * warehouse. Selecting the option makes these legs the selection's execution legs.
     * anyOf[1][].execution_legs.anyOf[1][] (Value): {@link
     * DeliveryQuoteExecutionLegResourcePreviousAttributes}. anyOf[1][].execution_legs.anyOf[2]
     * (Value): null. anyOf[1][].expires_at (Optional): string or null. Last moment a delivery
     * selection can choose this option: the quote's expires_at, or earlier when the rate the
     * merchant's callback or server returned expires first. Afterward the option is left out of
     * the quote's options and selecting it requires a new quote. Omitted on delivery previews,
     * whose options can't be selected. anyOf[1][].expires_at.anyOf[1] (Value): string. Last moment
     * a delivery selection can choose this option: the quote's expires_at, or earlier when the
     * rate the merchant's callback or server returned expires first. Afterward the option is left
     * out of the quote's options and selecting it requires a new quote. Omitted on delivery
     * previews, whose options can't be selected. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[1][].expires_at.anyOf[2] (Value): null.
     * anyOf[1][].local_delivery (Optional): {@link DeliveryShipmentDetailsPreviousAttributes} or
     * null. Local delivery details. Set only when `type` is `local_delivery`.
     * anyOf[1][].local_delivery.anyOf[1] (Value): {@link
     * DeliveryShipmentDetailsPreviousAttributes}. anyOf[1][].local_delivery.anyOf[2] (Value):
     * null. anyOf[1][].name (Optional): string or null. Buyer-visible name of the option.
     * anyOf[1][].name.anyOf[1] (Value): string. Buyer-visible name of the option.
     * anyOf[1][].name.anyOf[2] (Value): null. anyOf[1][].offered_windows (Optional): Array of
     * {@link DeliveryWindowResourcePreviousAttributes} or null. Delivery windows the buyer can
     * choose from. Omitted when `window_selection` is `none`. anyOf[1][].offered_windows.anyOf[1]
     * (Value): Array of {@link DeliveryWindowResourcePreviousAttributes}. Delivery windows the
     * buyer can choose from. Omitted when `window_selection` is `none`.
     * anyOf[1][].offered_windows.anyOf[1][] (Value): {@link
     * DeliveryWindowResourcePreviousAttributes}. anyOf[1][].offered_windows.anyOf[2] (Value):
     * null. anyOf[1][].pickup (Optional): {@link DeliveryPickupDetailsPreviousAttributes} or null.
     * Pickup details. Set only when `type` is `pickup`. anyOf[1][].pickup.anyOf[1] (Value): {@link
     * DeliveryPickupDetailsPreviousAttributes}. anyOf[1][].pickup.anyOf[2] (Value): null.
     * anyOf[1][].recipient_requirements (Optional): Array of {@link
     * DeliveryRecipientRequirementPreviousAttributes} or null. Recipient fields this option asks
     * for. A selection can leave out required fields, but payment needs them.
     * anyOf[1][].recipient_requirements.anyOf[1] (Value): Array of {@link
     * DeliveryRecipientRequirementPreviousAttributes}. Recipient fields this option asks for. A
     * selection can leave out required fields, but payment needs them.
     * anyOf[1][].recipient_requirements.anyOf[1][] (Value): {@link
     * DeliveryRecipientRequirementPreviousAttributes}. anyOf[1][].recipient_requirements.anyOf[2]
     * (Value): null. anyOf[1][].recommended (Optional): boolean or null. Whether Flint recommends
     * this option over the others in the group, based on the methods' `recommendation_priority`.
     * anyOf[1][].recommended.anyOf[1] (Value): boolean. Whether Flint recommends this option over
     * the others in the group, based on the methods' `recommendation_priority`.
     * anyOf[1][].recommended.anyOf[2] (Value): null. anyOf[1][].shipment (Optional): {@link
     * DeliveryShipmentDetailsPreviousAttributes} or null. Shipment details. Set only when `type`
     * is `shipment`. anyOf[1][].shipment.anyOf[1] (Value): {@link
     * DeliveryShipmentDetailsPreviousAttributes}. anyOf[1][].shipment.anyOf[2] (Value): null.
     * anyOf[1][].taxable (Optional): boolean or null. Whether tax applies to the delivery charge.
     * anyOf[1][].taxable.anyOf[1] (Value): boolean. Whether tax applies to the delivery charge.
     * anyOf[1][].taxable.anyOf[2] (Value): null. anyOf[1][].timezone (Optional): string or null.
     * IANA timezone for displaying window_start_at, window_end_at, and any offered windows.
     * anyOf[1][].timezone.anyOf[1] (Value): string. IANA timezone for displaying window_start_at,
     * window_end_at, and any offered windows. Example: "America/New_York".
     * anyOf[1][].timezone.anyOf[2] (Value): null. anyOf[1][].type (Optional): string or null.
     * Delivery type of this option. Value enum: "shipment", "pickup", "local_delivery".
     * anyOf[1][].type.anyOf[1] (Value): string. Delivery type of this option. Value enum:
     * "shipment", "pickup", "local_delivery". anyOf[1][].type.anyOf[2] (Value): null.
     * anyOf[1][].window_end_at (Optional): string or null. End of the delivery window for this
     * option. Omitted when the option has no single window; see offered_windows.
     * anyOf[1][].window_end_at.anyOf[1] (Value): string. End of the delivery window for this
     * option. Omitted when the option has no single window; see offered_windows. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". anyOf[1][].window_end_at.anyOf[2] (Value): null.
     * anyOf[1][].window_pricing (Optional): string or null. Whether the offered windows cost the
     * same. Value enum: "uniform", "varies". anyOf[1][].window_pricing.anyOf[1] (Value): string.
     * Whether the offered windows cost the same. Value enum: "uniform", "varies".
     * anyOf[1][].window_pricing.anyOf[2] (Value): null. anyOf[1][].window_selection (Optional):
     * string or null. Whether the buyer chooses a delivery window. Value enum: "none", "offered".
     * anyOf[1][].window_selection.anyOf[1] (Value): string. Whether the buyer chooses a delivery
     * window. Value enum: "none", "offered". anyOf[1][].window_selection.anyOf[2] (Value): null.
     * anyOf[1][].window_start_at (Optional): string or null. Start of the delivery window for this
     * option. Omitted when the option has no single window; see offered_windows.
     * anyOf[1][].window_start_at.anyOf[1] (Value): string. Start of the delivery window for this
     * option. Omitted when the option has no single window; see offered_windows. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". anyOf[1][].window_start_at.anyOf[2] (Value):
     * null. anyOf[2] (Value): null.
     */
    "options"?: ((Array<(DeliveryOptionProjectionPreviousAttributes)>) | (null));
    /**
     * The requested pickup Location or the order's fixed inventory Location cannot be served by
     * this group's pickup methods. anyOf[1] (Value): boolean. The requested pickup Location or the
     * order's fixed inventory Location cannot be served by this group's pickup methods. anyOf[2]
     * (Value): null.
     */
    "pickup_unavailable"?: ((boolean) | (null));
    /**
     * Method chosen for this group in the previous selection. Omitted when there is none. anyOf[1]
     * (Value): string. Method chosen for this group in the previous selection. Omitted when there
     * is none. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
     */
    "previously_selected_delivery_method_id"?: ((string) | (null));
    /**
     * Identifies the same group across quotes for the same delivery demands and compatible
     * delivery types. It can change when the grouping inputs change. anyOf[1] (Value): string.
     * Identifies the same group across quotes for the same delivery demands and compatible
     * delivery types. It can change when the grouping inputs change. anyOf[2] (Value): null.
     */
    "stable_key"?: ((string) | (null));
};
/**
 * One leg of a delivery choice group, identifying the origin Location the group's items leave
 * from.
 */
export type DeliveryQuoteExecutionLegResource = {
    /** Unique ID of this leg. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". */
    "delivery_execution_leg_id": string;
    /** ID of the Location the items leave from. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "origin_location_id": string;
};
export type DeliveryQuoteExecutionLegResourcePreviousAttributes = {
    /**
     * Unique ID of this leg. anyOf[1] (Value): string. Unique ID of this leg. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". anyOf[2] (Value): null.
     */
    "delivery_execution_leg_id"?: ((string) | (null));
    /**
     * ID of the Location the items leave from. anyOf[1] (Value): string. ID of the Location the
     * items leave from. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "origin_location_id"?: ((string) | (null));
};
/**
 * An order line item, or one bundle component of it, and the quantity covered by a delivery choice
 * group.
 */
export type DeliveryQuoteLineItemResource = {
    /**
     * ID of the bundle component the quantity belongs to. Omitted when the line item is not a
     * bundle. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id"?: string;
    /**
     * ID of the order that owns this line item. Checkout credentials receive only their own
     * session's order ID. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /** ID of the order line item. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
};
export type DeliveryQuoteLineItemResourcePreviousAttributes = {
    /**
     * ID of the bundle component the quantity belongs to. Omitted when the line item is not a
     * bundle. anyOf[1] (Value): string. ID of the bundle component the quantity belongs to.
     * Omitted when the line item is not a bundle. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     * anyOf[2] (Value): null.
     */
    "bundle_component_id"?: ((string) | (null));
    /**
     * ID of the order that owns this line item. Checkout credentials receive only their own
     * session's order ID. anyOf[1] (Value): string. ID of the order that owns this line item.
     * Checkout credentials receive only their own session's order ID. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     */
    "order_id"?: ((string) | (null));
    /**
     * ID of the order line item. anyOf[1] (Value): string. ID of the order line item. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
     */
    "order_line_item_id"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
};
/** A page of `DeliveryQuote` objects. */
export type DeliveryQuoteListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * DeliveryQuote}. An estimate of available delivery options and their prices.
     */
    "data": Array<DeliveryQuote>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * A delivery method offered in a delivery quote, with its name, type, display position, and
 * revision.
 */
export type DeliveryQuoteMethodResource = {
    /** ID of the delivery method. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
    "delivery_method_id": string;
    /**
     * ID of the method revision that was evaluated. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id": string;
    /** Buyer-visible description of the method. Omitted when it has none. */
    "description"?: string;
    /**
     * Position in which this method displays among the others. Lower values display first. Format:
     * int32.
     */
    "display_position": number;
    /** Buyer-visible name of the method. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /** Delivery type of the method. Value enum: "shipment", "pickup", "local_delivery". */
    "type": "shipment" | "pickup" | "local_delivery" | (string & {});
};
/** A response containing `DeliveryQuote` data. */
export type DeliveryQuoteResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An estimate of available
     * delivery options and their prices.
     */
    "data": DeliveryQuote;
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
export type DeliveryQuotesCreateParams = (InputValue<CreateCheckoutDeliveryQuoteRequestInput>)
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
export type DeliveryQuotesGetParams = DisputesAcceptParams;
export type DeliveryQuotesListParams = {
    /**
     * Filter by checkout session. Required with a checkout credential, and must be the
     * credential's own checkout session. pattern: ^cs_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id"?: InputValue<string>;
    /**
     * Filter by order. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Filter by lifecycle status. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "active", "consumed", "stale", "expired", "revoked". Value enum: "active",
     * "consumed", "stale", "expired", "revoked". anyOf[1] (Value): Array of string. minItems: 1.
     * [] enum: "active", "consumed", "stale", "expired", "revoked". anyOf[1][] (Value): string.
     * Value enum: "active", "consumed", "stale", "expired", "revoked". anyOf[2] (Value): string.
     * Value enum: "active", "consumed", "stale", "expired", "revoked".
     */
    "status"?: InputValue<("active" | "consumed" | "stale" | "expired" | "revoked")
        | readonly ("active" | "consumed" | "stale" | "expired" | "revoked")[]>;
    /**
     * Filter by evaluation status. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "complete", "incomplete", "degraded". Value enum: "complete", "incomplete",
     * "degraded". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "complete",
     * "incomplete", "degraded". anyOf[1][] (Value): string. Value enum: "complete", "incomplete",
     * "degraded". anyOf[2] (Value): string. Value enum: "complete", "incomplete", "degraded".
     */
    "evaluation_status"?: InputValue<("complete" | "incomplete" | "degraded") | readonly ("complete" | "incomplete" | "degraded")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
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
 * Eligibility condition that matches when the destination or buyer location is within
 * `maximum_distance` of an origin, measured in a straight line.
 */
export type DeliveryRadiusCondition = {
    /**
     * The largest distance from the origin that still matches. A distance as a `value` in meters,
     * kilometers, or miles.
     */
    "maximum_distance": DeliveryDistance;
    /** How Flint measures the distance. Default: "straight_line". Value enum: "straight_line". */
    "measurement"?: "straight_line" | (string & {});
    /**
     * The point to measure the distance from. The point a radius condition measures from: a
     * specific Location (`location_id`) or the delivery method's own origin (`method_origin`).
     */
    "origin": DeliveryRadiusOrigin;
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location" | (string & {});
};
export type DeliveryRadiusConditionPreviousAttributes = {
    /**
     * The largest distance from the origin that still matches. anyOf[1] (Value): {@link
     * DeliveryDistancePreviousAttributes}. anyOf[2] (Value): null.
     */
    "maximum_distance"?: ((DeliveryDistancePreviousAttributes) | (null));
    /**
     * How Flint measures the distance. Value enum: "straight_line". anyOf[1] (Value): string. How
     * Flint measures the distance. Default: "straight_line". Value enum: "straight_line". anyOf[2]
     * (Value): null.
     */
    "measurement"?: (("straight_line" | (string & {})) | (null));
    /**
     * The point to measure the distance from. anyOf[1] (Value): {@link
     * DeliveryRadiusOriginPreviousAttributes}. anyOf[2] (Value): null.
     */
    "origin"?: ((DeliveryRadiusOriginPreviousAttributes) | (null));
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Value enum:
     * "destination_address", "buyer_location". anyOf[1] (Value): string. Address facts tested by
     * this condition. destination_address is the shipping destination. buyer_location is the
     * buyer's current pickup or local-delivery location. Default: "destination_address". Value
     * enum: "destination_address", "buyer_location". anyOf[2] (Value): null.
     */
    "subject"?: (("destination_address" | "buyer_location" | (string & {})) | (null));
};
/**
 * Eligibility condition that matches when the destination or buyer location is within
 * `maximum_distance` of an origin, measured in a straight line.
 */
export type DeliveryRadiusConditionRequestInput = {
    /**
     * The largest distance from the origin that still matches. A distance as a `value` in meters,
     * kilometers, or miles.
     */
    "maximum_distance": DeliveryDistanceRequestInput;
    /** How Flint measures the distance. Default: "straight_line". Value enum: "straight_line". */
    "measurement"?: "straight_line";
    /**
     * The point to measure the distance from. The point a radius condition measures from: a
     * specific Location (`location_id`) or the delivery method's own origin (`method_origin`).
     */
    "origin": DeliveryRadiusOriginInput;
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location";
};
/**
 * The point a radius condition measures from: a specific Location (`location_id`) or the delivery
 * method's own origin (`method_origin`).
 */
export type DeliveryRadiusOrigin = {
    /**
     * ID of the Location to measure from. Send either `location_id` or `method_origin`. minLength:
     * 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Send `true` to measure from the origin of the delivery method. Send either `location_id` or
     * `method_origin`.
     */
    "method_origin"?: boolean;
};
/**
 * The point a radius condition measures from: a specific Location (`location_id`) or the delivery
 * method's own origin (`method_origin`).
 */
export type DeliveryRadiusOriginInput = DeliveryRadiusOrigin;
export type DeliveryRadiusOriginPreviousAttributes = {
    /**
     * ID of the Location to measure from. Send either `location_id` or `method_origin`. anyOf[1]
     * (Value): string. ID of the Location to measure from. Send either `location_id` or
     * `method_origin`. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
     * null.
     */
    "location_id"?: ((string) | (null));
    /**
     * Send `true` to measure from the origin of the delivery method. Send either `location_id` or
     * `method_origin`. anyOf[1] (Value): boolean. Send `true` to measure from the origin of the
     * delivery method. Send either `location_id` or `method_origin`. anyOf[2] (Value): null.
     */
    "method_origin"?: ((boolean) | (null));
};
/** An endpoint that supplies delivery rates. */
export type DeliveryRateCallback = {
    /** Consecutive callback failures since the last successful response. minimum: 0. */
    "circuit_failure_count": number;
    /**
     * Whether Flint is currently calling the callback, based on recent failures. Value enum:
     * "closed", "open", "half_open".
     */
    "circuit_state": "closed" | "open" | "half_open" | (string & {});
    /**
     * Current settings of the rate callback. Settings for a delivery rate callback: the endpoint
     * `url` Flint calls, request timeout, request and response size limits, redirect policy, and
     * whether previews can use it.
     */
    "configuration": DeliveryRateCallbackConfiguration;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * ID of the current revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     */
    "current_delivery_rate_callback_revision_id": string;
    /**
     * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id": string;
    /**
     * The revocation fencing this resource's own current revision. `null` when the current
     * revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this
     * is `null` because its rate callback revision, signing key, or a Location's address is
     * revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B".
     */
    "delivery_revocation_id": string | null;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Merchant-facing name of the rate callback. */
    "name": string;
    /**
     * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a
     * Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature
     * and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt",
     * "hmac". [] (Value): string. How Flint signs requests to this endpoint. Value enum: "jwt",
     * "hmac".
     */
    "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
    /** Whether the rate callback is in use. Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type DeliveryRateCallbackActivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": DeliveryRateCallbackConfiguration;
            "created_at": string;
            "current_delivery_rate_callback_revision_id": string;
            "delivery_rate_callback_id": string;
            "delivery_revocation_id": string | null;
            "external_reference_id"?: string;
            "name": string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "circuit_failure_count"?: ((number) | (null));
            "circuit_state"?: (("closed" | "open" | "half_open" | (string & {})) | (null));
            "configuration"?: ((DeliveryRateCallbackConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_delivery_rate_callback_revision_id"?: ((string) | (null));
            "delivery_rate_callback_id"?: ((string) | (null));
            "delivery_revocation_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "name"?: ((string) | (null));
            "signing_methods"?: ((Array<"jwt" | "hmac" | (string & {})>) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_rate_callback.activated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": DeliveryRateCallbackConfiguration;
            "created_at": string;
            "current_delivery_rate_callback_revision_id": string;
            "delivery_rate_callback_id": string;
            "delivery_revocation_id": string | null;
            "external_reference_id"?: string;
            "name": string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "circuit_failure_count"?: ((number) | (null));
            "circuit_state"?: (("closed" | "open" | "half_open" | (string & {})) | (null));
            "configuration"?: ((DeliveryRateCallbackConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_delivery_rate_callback_revision_id"?: ((string) | (null));
            "delivery_rate_callback_id"?: ((string) | (null));
            "delivery_revocation_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "name"?: ((string) | (null));
            "signing_methods"?: ((Array<"jwt" | "hmac" | (string & {})>) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_rate_callback.activated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_rate_callback.activated";
});
/**
 * The `delivery_rate_callback.activated` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type DeliveryRateCallbackActivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.circuit_failure_count (Required): integer. Consecutive callback
     * failures since the last successful response. minimum: 0. object.circuit_state (Required):
     * string. Whether Flint is currently calling the callback, based on recent failures. Value
     * enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Current settings of the rate callback. Settings for a
     * delivery rate callback: the endpoint `url` Flint calls, request timeout, request and
     * response size limits, redirect policy, and whether previews can use it. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. ID of the current
     * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * object.delivery_rate_callback_id (Required): string. Unique identifier for this delivery
     * rate callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.name (Required):
     * string. Merchant-facing name of the rate callback. object.signing_methods (Required): Array
     * of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization:
     * Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
     * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. []
     * enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs requests to
     * this endpoint. Value enum: "jwt", "hmac". object.status (Required): string. Whether the rate
     * callback is in use. Value enum: "active", "inactive", "archived". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.circuit_failure_count (Optional): integer or null. Consecutive callback
     * failures since the last successful response.
     * previous_attributes.circuit_failure_count.anyOf[1] (Value): integer. Consecutive callback
     * failures since the last successful response. minimum: 0.
     * previous_attributes.circuit_failure_count.anyOf[2] (Value): null.
     * previous_attributes.circuit_state (Optional): string or null. Whether Flint is currently
     * calling the callback, based on recent failures. Value enum: "closed", "open", "half_open".
     * previous_attributes.circuit_state.anyOf[1] (Value): string. Whether Flint is currently
     * calling the callback, based on recent failures. Value enum: "closed", "open", "half_open".
     * previous_attributes.circuit_state.anyOf[2] (Value): null. previous_attributes.configuration
     * (Optional): {@link DeliveryRateCallbackConfigurationPreviousAttributes} or null. Current
     * settings of the rate callback. previous_attributes.configuration.anyOf[1] (Value): {@link
     * DeliveryRateCallbackConfigurationPreviousAttributes}.
     * previous_attributes.configuration.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.current_delivery_rate_callback_revision_id (Optional): string or null.
     * ID of the current revision. New quotes use it.
     * previous_attributes.current_delivery_rate_callback_revision_id.anyOf[1] (Value): string. ID
     * of the current revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * previous_attributes.current_delivery_rate_callback_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_rate_callback_id (Optional): string or null. Unique identifier
     * for this delivery rate callback, prefixed `dcb_`.
     * previous_attributes.delivery_rate_callback_id.anyOf[1] (Value): string. Unique identifier
     * for this delivery rate callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * previous_attributes.delivery_rate_callback_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_revocation_id (Optional): string or null. The revocation
     * fencing this resource's own current revision. `null` when the current revision isn't
     * revoked. It doesn't cover dependencies: a method can be unusable while this is `null`
     * because its rate callback revision, signing key, or a Location's address is revoked. A
     * revocation doesn't change `status`; publish a new revision to clear it.
     * previous_attributes.delivery_revocation_id.anyOf[1] (Value): string. The revocation fencing
     * this resource's own current revision. `null` when the current revision isn't revoked. It
     * doesn't cover dependencies: a method can be unusable while this is `null` because its rate
     * callback revision, signing key, or a Location's address is revoked. A revocation doesn't
     * change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". previous_attributes.delivery_revocation_id.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null.
     * Caller-owned identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null. previous_attributes.name
     * (Optional): string or null. Merchant-facing name of the rate callback.
     * previous_attributes.name.anyOf[1] (Value): string. Merchant-facing name of the rate
     * callback. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.signing_methods (Optional): Array of string or null. Signing methods
     * enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed
     * token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing
     * key IDs. [] enum: "jwt", "hmac". previous_attributes.signing_methods.anyOf[1] (Value): Array
     * of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization:
     * Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
     * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. []
     * enum: "jwt", "hmac". previous_attributes.signing_methods.anyOf[1][] (Value): string. How
     * Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     * previous_attributes.signing_methods.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Whether the rate callback is in use. Value enum: "active",
     * "inactive", "archived". previous_attributes.status.anyOf[1] (Value): string. Whether the
     * rate callback is in use. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Whether Flint is
         * currently calling the callback, based on recent failures. Value enum: "closed", "open",
         * "half_open". configuration (Required): {@link DeliveryRateCallbackConfiguration}.
         * Current settings of the rate callback. Settings for a delivery rate callback: the
         * endpoint `url` Flint calls, request timeout, request and response size limits, redirect
         * policy, and whether previews can use it. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. ID of the current
         * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
         * delivery_rate_callback_id (Required): string. Unique identifier for this delivery rate
         * callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
         * delivery_revocation_id (Required): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". name (Required): string. Merchant-facing name of the rate
         * callback. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Whether the rate callback is in use.
         * Value enum: "active", "inactive", "archived". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /**
             * Whether Flint is currently calling the callback, based on recent failures. Value
             * enum: "closed", "open", "half_open".
             */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Current settings of the rate callback. Settings for a delivery rate callback: the
             * endpoint `url` Flint calls, request timeout, request and response size limits,
             * redirect policy, and whether previews can use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the current revision. New quotes use it. Example:
             * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
             */
            "current_delivery_rate_callback_revision_id": string;
            /**
             * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
             * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
             */
            "delivery_rate_callback_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Merchant-facing name of the rate callback. */
            "name": string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /**
             * Whether the rate callback is in use. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. circuit_failure_count (Optional): integer or
         * null. Consecutive callback failures since the last successful response.
         * circuit_failure_count.anyOf[1] (Value): integer. Consecutive callback failures since the
         * last successful response. minimum: 0. circuit_failure_count.anyOf[2] (Value): null.
         * circuit_state (Optional): string or null. Whether Flint is currently calling the
         * callback, based on recent failures. Value enum: "closed", "open", "half_open".
         * circuit_state.anyOf[1] (Value): string. Whether Flint is currently calling the callback,
         * based on recent failures. Value enum: "closed", "open", "half_open".
         * circuit_state.anyOf[2] (Value): null. configuration (Optional): {@link
         * DeliveryRateCallbackConfigurationPreviousAttributes} or null. Current settings of the
         * rate callback. configuration.anyOf[1] (Value): {@link
         * DeliveryRateCallbackConfigurationPreviousAttributes}. configuration.anyOf[2] (Value):
         * null. created_at (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. current_delivery_rate_callback_revision_id
         * (Optional): string or null. ID of the current revision. New quotes use it.
         * current_delivery_rate_callback_revision_id.anyOf[1] (Value): string. ID of the current
         * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
         * current_delivery_rate_callback_revision_id.anyOf[2] (Value): null.
         * delivery_rate_callback_id (Optional): string or null. Unique identifier for this
         * delivery rate callback, prefixed `dcb_`. delivery_rate_callback_id.anyOf[1] (Value):
         * string. Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
         * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". delivery_rate_callback_id.anyOf[2] (Value): null.
         * delivery_revocation_id (Optional): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it.
         * delivery_revocation_id.anyOf[1] (Value): string. The revocation fencing this resource's
         * own current revision. `null` when the current revision isn't revoked. It doesn't cover
         * dependencies: a method can be unusable while this is `null` because its rate callback
         * revision, signing key, or a Location's address is revoked. A revocation doesn't change
         * `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". delivery_revocation_id.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. name
         * (Optional): string or null. Merchant-facing name of the rate callback. name.anyOf[1]
         * (Value): string. Merchant-facing name of the rate callback. name.anyOf[2] (Value): null.
         * signing_methods (Optional): Array of string or null. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * [] enum: "jwt", "hmac". signing_methods.anyOf[1] (Value): Array of string. Signing
         * methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a
         * Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
         * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"].
         * [] enum: "jwt", "hmac". signing_methods.anyOf[1][] (Value): string. How Flint signs
         * requests to this endpoint. Value enum: "jwt", "hmac". signing_methods.anyOf[2] (Value):
         * null. status (Optional): string or null. Whether the rate callback is in use. Value
         * enum: "active", "inactive", "archived". status.anyOf[1] (Value): string. Whether the
         * rate callback is in use. Value enum: "active", "inactive", "archived". status.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. RFC3339 timestamp.
         * updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. version.anyOf[1] (Value): integer.
         * Current version of this resource's owned state. Send it as `expected_version` when
         * changing the resource to reject a stale write. Format: uint64. minimum: 1.
         * version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Consecutive callback failures since the last successful response. anyOf[1] (Value):
             * integer. Consecutive callback failures since the last successful response. minimum:
             * 0. anyOf[2] (Value): null.
             */
            "circuit_failure_count"?: ((number) | (null));
            /**
             * Whether Flint is currently calling the callback, based on recent failures. Value
             * enum: "closed", "open", "half_open". anyOf[1] (Value): string. Whether Flint is
             * currently calling the callback, based on recent failures. Value enum: "closed",
             * "open", "half_open". anyOf[2] (Value): null.
             */
            "circuit_state"?: (("closed" | "open" | "half_open" | (string & {})) | (null));
            /**
             * Current settings of the rate callback. anyOf[1] (Value): {@link
             * DeliveryRateCallbackConfigurationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "configuration"?: ((DeliveryRateCallbackConfigurationPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * ID of the current revision. New quotes use it. anyOf[1] (Value): string. ID of the
             * current revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
             * anyOf[2] (Value): null.
             */
            "current_delivery_rate_callback_revision_id"?: ((string) | (null));
            /**
             * Unique identifier for this delivery rate callback, prefixed `dcb_`. anyOf[1]
             * (Value): string. Unique identifier for this delivery rate callback, prefixed `dcb_`.
             * Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". anyOf[2] (Value): null.
             */
            "delivery_rate_callback_id"?: ((string) | (null));
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. anyOf[1] (Value): string. The revocation fencing this
             * resource's own current revision. `null` when the current revision isn't revoked. It
             * doesn't cover dependencies: a method can be unusable while this is `null` because
             * its rate callback revision, signing key, or a Location's address is revoked. A
             * revocation doesn't change `status`; publish a new revision to clear it. Example:
             * "drev_01KEZF7C007Q141XJ28YAAC87B". anyOf[2] (Value): null.
             */
            "delivery_revocation_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Merchant-facing name of the rate callback. anyOf[1] (Value): string. Merchant-facing
             * name of the rate callback. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. [] enum: "jwt", "hmac". anyOf[1] (Value):
             * Array of string. Signing methods enabled for callback HTTP requests. jwt sends
             * Authorization: Bearer with a Flint-signed token whose aud is this
             * delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
             * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac". anyOf[1][]
             * (Value): string. How Flint signs requests to this endpoint. Value enum: "jwt",
             * "hmac". anyOf[2] (Value): null.
             */
            "signing_methods"?: ((Array<"jwt" | "hmac" | (string & {})>) | (null));
            /**
             * Whether the rate callback is in use. Value enum: "active", "inactive", "archived".
             * anyOf[1] (Value): string. Whether the rate callback is in use. Value enum: "active",
             * "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_rate_callback.activated". */
    "event_type"?: "delivery_rate_callback.activated";
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
 * The `delivery_rate_callback.activated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryRateCallbackActivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.circuit_failure_count (Required): integer. Consecutive callback
     * failures since the last successful response. minimum: 0. object.circuit_state (Required):
     * string. Whether Flint is currently calling the callback, based on recent failures. Value
     * enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Current settings of the rate callback. Settings for a
     * delivery rate callback: the endpoint `url` Flint calls, request timeout, request and
     * response size limits, redirect policy, and whether previews can use it. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. ID of the current
     * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * object.delivery_rate_callback_id (Required): string. Unique identifier for this delivery
     * rate callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.name (Required):
     * string. Merchant-facing name of the rate callback. object.signing_methods (Required): Array
     * of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization:
     * Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
     * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. []
     * enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs requests to
     * this endpoint. Value enum: "jwt", "hmac". object.status (Required): string. Whether the rate
     * callback is in use. Value enum: "active", "inactive", "archived". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.circuit_failure_count (Optional): integer or null. Consecutive callback
     * failures since the last successful response.
     * previous_attributes.circuit_failure_count.anyOf[1] (Value): integer. Consecutive callback
     * failures since the last successful response. minimum: 0.
     * previous_attributes.circuit_failure_count.anyOf[2] (Value): null.
     * previous_attributes.circuit_state (Optional): string or null. Whether Flint is currently
     * calling the callback, based on recent failures. Value enum: "closed", "open", "half_open".
     * previous_attributes.circuit_state.anyOf[1] (Value): string. Whether Flint is currently
     * calling the callback, based on recent failures. Value enum: "closed", "open", "half_open".
     * previous_attributes.circuit_state.anyOf[2] (Value): null. previous_attributes.configuration
     * (Optional): {@link DeliveryRateCallbackConfigurationPreviousAttributes} or null. Current
     * settings of the rate callback. previous_attributes.configuration.anyOf[1] (Value): {@link
     * DeliveryRateCallbackConfigurationPreviousAttributes}.
     * previous_attributes.configuration.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.current_delivery_rate_callback_revision_id (Optional): string or null.
     * ID of the current revision. New quotes use it.
     * previous_attributes.current_delivery_rate_callback_revision_id.anyOf[1] (Value): string. ID
     * of the current revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * previous_attributes.current_delivery_rate_callback_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_rate_callback_id (Optional): string or null. Unique identifier
     * for this delivery rate callback, prefixed `dcb_`.
     * previous_attributes.delivery_rate_callback_id.anyOf[1] (Value): string. Unique identifier
     * for this delivery rate callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * previous_attributes.delivery_rate_callback_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_revocation_id (Optional): string or null. The revocation
     * fencing this resource's own current revision. `null` when the current revision isn't
     * revoked. It doesn't cover dependencies: a method can be unusable while this is `null`
     * because its rate callback revision, signing key, or a Location's address is revoked. A
     * revocation doesn't change `status`; publish a new revision to clear it.
     * previous_attributes.delivery_revocation_id.anyOf[1] (Value): string. The revocation fencing
     * this resource's own current revision. `null` when the current revision isn't revoked. It
     * doesn't cover dependencies: a method can be unusable while this is `null` because its rate
     * callback revision, signing key, or a Location's address is revoked. A revocation doesn't
     * change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". previous_attributes.delivery_revocation_id.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null.
     * Caller-owned identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null. previous_attributes.name
     * (Optional): string or null. Merchant-facing name of the rate callback.
     * previous_attributes.name.anyOf[1] (Value): string. Merchant-facing name of the rate
     * callback. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.signing_methods (Optional): Array of string or null. Signing methods
     * enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed
     * token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing
     * key IDs. [] enum: "jwt", "hmac". previous_attributes.signing_methods.anyOf[1] (Value): Array
     * of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization:
     * Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
     * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. []
     * enum: "jwt", "hmac". previous_attributes.signing_methods.anyOf[1][] (Value): string. How
     * Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     * previous_attributes.signing_methods.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Whether the rate callback is in use. Value enum: "active",
     * "inactive", "archived". previous_attributes.status.anyOf[1] (Value): string. Whether the
     * rate callback is in use. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Whether Flint is
         * currently calling the callback, based on recent failures. Value enum: "closed", "open",
         * "half_open". configuration (Required): {@link DeliveryRateCallbackConfiguration}.
         * Current settings of the rate callback. Settings for a delivery rate callback: the
         * endpoint `url` Flint calls, request timeout, request and response size limits, redirect
         * policy, and whether previews can use it. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. ID of the current
         * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
         * delivery_rate_callback_id (Required): string. Unique identifier for this delivery rate
         * callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
         * delivery_revocation_id (Required): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". name (Required): string. Merchant-facing name of the rate
         * callback. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Whether the rate callback is in use.
         * Value enum: "active", "inactive", "archived". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /**
             * Whether Flint is currently calling the callback, based on recent failures. Value
             * enum: "closed", "open", "half_open".
             */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Current settings of the rate callback. Settings for a delivery rate callback: the
             * endpoint `url` Flint calls, request timeout, request and response size limits,
             * redirect policy, and whether previews can use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the current revision. New quotes use it. Example:
             * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
             */
            "current_delivery_rate_callback_revision_id": string;
            /**
             * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
             * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
             */
            "delivery_rate_callback_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Merchant-facing name of the rate callback. */
            "name": string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /**
             * Whether the rate callback is in use. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. circuit_failure_count (Optional): integer or
         * null. Consecutive callback failures since the last successful response.
         * circuit_failure_count.anyOf[1] (Value): integer. Consecutive callback failures since the
         * last successful response. minimum: 0. circuit_failure_count.anyOf[2] (Value): null.
         * circuit_state (Optional): string or null. Whether Flint is currently calling the
         * callback, based on recent failures. Value enum: "closed", "open", "half_open".
         * circuit_state.anyOf[1] (Value): string. Whether Flint is currently calling the callback,
         * based on recent failures. Value enum: "closed", "open", "half_open".
         * circuit_state.anyOf[2] (Value): null. configuration (Optional): {@link
         * DeliveryRateCallbackConfigurationPreviousAttributes} or null. Current settings of the
         * rate callback. configuration.anyOf[1] (Value): {@link
         * DeliveryRateCallbackConfigurationPreviousAttributes}. configuration.anyOf[2] (Value):
         * null. created_at (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. current_delivery_rate_callback_revision_id
         * (Optional): string or null. ID of the current revision. New quotes use it.
         * current_delivery_rate_callback_revision_id.anyOf[1] (Value): string. ID of the current
         * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
         * current_delivery_rate_callback_revision_id.anyOf[2] (Value): null.
         * delivery_rate_callback_id (Optional): string or null. Unique identifier for this
         * delivery rate callback, prefixed `dcb_`. delivery_rate_callback_id.anyOf[1] (Value):
         * string. Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
         * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". delivery_rate_callback_id.anyOf[2] (Value): null.
         * delivery_revocation_id (Optional): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it.
         * delivery_revocation_id.anyOf[1] (Value): string. The revocation fencing this resource's
         * own current revision. `null` when the current revision isn't revoked. It doesn't cover
         * dependencies: a method can be unusable while this is `null` because its rate callback
         * revision, signing key, or a Location's address is revoked. A revocation doesn't change
         * `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". delivery_revocation_id.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. name
         * (Optional): string or null. Merchant-facing name of the rate callback. name.anyOf[1]
         * (Value): string. Merchant-facing name of the rate callback. name.anyOf[2] (Value): null.
         * signing_methods (Optional): Array of string or null. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * [] enum: "jwt", "hmac". signing_methods.anyOf[1] (Value): Array of string. Signing
         * methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a
         * Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
         * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"].
         * [] enum: "jwt", "hmac". signing_methods.anyOf[1][] (Value): string. How Flint signs
         * requests to this endpoint. Value enum: "jwt", "hmac". signing_methods.anyOf[2] (Value):
         * null. status (Optional): string or null. Whether the rate callback is in use. Value
         * enum: "active", "inactive", "archived". status.anyOf[1] (Value): string. Whether the
         * rate callback is in use. Value enum: "active", "inactive", "archived". status.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. RFC3339 timestamp.
         * updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. version.anyOf[1] (Value): integer.
         * Current version of this resource's owned state. Send it as `expected_version` when
         * changing the resource to reject a stale write. Format: uint64. minimum: 1.
         * version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Consecutive callback failures since the last successful response. anyOf[1] (Value):
             * integer. Consecutive callback failures since the last successful response. minimum:
             * 0. anyOf[2] (Value): null.
             */
            "circuit_failure_count"?: ((number) | (null));
            /**
             * Whether Flint is currently calling the callback, based on recent failures. Value
             * enum: "closed", "open", "half_open". anyOf[1] (Value): string. Whether Flint is
             * currently calling the callback, based on recent failures. Value enum: "closed",
             * "open", "half_open". anyOf[2] (Value): null.
             */
            "circuit_state"?: (("closed" | "open" | "half_open" | (string & {})) | (null));
            /**
             * Current settings of the rate callback. anyOf[1] (Value): {@link
             * DeliveryRateCallbackConfigurationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "configuration"?: ((DeliveryRateCallbackConfigurationPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * ID of the current revision. New quotes use it. anyOf[1] (Value): string. ID of the
             * current revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
             * anyOf[2] (Value): null.
             */
            "current_delivery_rate_callback_revision_id"?: ((string) | (null));
            /**
             * Unique identifier for this delivery rate callback, prefixed `dcb_`. anyOf[1]
             * (Value): string. Unique identifier for this delivery rate callback, prefixed `dcb_`.
             * Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". anyOf[2] (Value): null.
             */
            "delivery_rate_callback_id"?: ((string) | (null));
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. anyOf[1] (Value): string. The revocation fencing this
             * resource's own current revision. `null` when the current revision isn't revoked. It
             * doesn't cover dependencies: a method can be unusable while this is `null` because
             * its rate callback revision, signing key, or a Location's address is revoked. A
             * revocation doesn't change `status`; publish a new revision to clear it. Example:
             * "drev_01KEZF7C007Q141XJ28YAAC87B". anyOf[2] (Value): null.
             */
            "delivery_revocation_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Merchant-facing name of the rate callback. anyOf[1] (Value): string. Merchant-facing
             * name of the rate callback. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. [] enum: "jwt", "hmac". anyOf[1] (Value):
             * Array of string. Signing methods enabled for callback HTTP requests. jwt sends
             * Authorization: Bearer with a Flint-signed token whose aud is this
             * delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
             * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac". anyOf[1][]
             * (Value): string. How Flint signs requests to this endpoint. Value enum: "jwt",
             * "hmac". anyOf[2] (Value): null.
             */
            "signing_methods"?: ((Array<"jwt" | "hmac" | (string & {})>) | (null));
            /**
             * Whether the rate callback is in use. Value enum: "active", "inactive", "archived".
             * anyOf[1] (Value): string. Whether the rate callback is in use. Value enum: "active",
             * "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_rate_callback.activated". */
    "event_type"?: "delivery_rate_callback.activated";
});
export type DeliveryRateCallbackArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": DeliveryRateCallbackConfiguration;
            "created_at": string;
            "current_delivery_rate_callback_revision_id": string;
            "delivery_rate_callback_id": string;
            "delivery_revocation_id": string | null;
            "external_reference_id"?: string;
            "name": string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "circuit_failure_count"?: ((number) | (null));
            "circuit_state"?: (("closed" | "open" | "half_open" | (string & {})) | (null));
            "configuration"?: ((DeliveryRateCallbackConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_delivery_rate_callback_revision_id"?: ((string) | (null));
            "delivery_rate_callback_id"?: ((string) | (null));
            "delivery_revocation_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "name"?: ((string) | (null));
            "signing_methods"?: ((Array<"jwt" | "hmac" | (string & {})>) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_rate_callback.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": DeliveryRateCallbackConfiguration;
            "created_at": string;
            "current_delivery_rate_callback_revision_id": string;
            "delivery_rate_callback_id": string;
            "delivery_revocation_id": string | null;
            "external_reference_id"?: string;
            "name": string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "circuit_failure_count"?: ((number) | (null));
            "circuit_state"?: (("closed" | "open" | "half_open" | (string & {})) | (null));
            "configuration"?: ((DeliveryRateCallbackConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_delivery_rate_callback_revision_id"?: ((string) | (null));
            "delivery_rate_callback_id"?: ((string) | (null));
            "delivery_revocation_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "name"?: ((string) | (null));
            "signing_methods"?: ((Array<"jwt" | "hmac" | (string & {})>) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_rate_callback.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_rate_callback.archived";
});
/**
 * The `delivery_rate_callback.archived` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type DeliveryRateCallbackArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.circuit_failure_count (Required): integer. Consecutive callback
     * failures since the last successful response. minimum: 0. object.circuit_state (Required):
     * string. Whether Flint is currently calling the callback, based on recent failures. Value
     * enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Current settings of the rate callback. Settings for a
     * delivery rate callback: the endpoint `url` Flint calls, request timeout, request and
     * response size limits, redirect policy, and whether previews can use it. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. ID of the current
     * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * object.delivery_rate_callback_id (Required): string. Unique identifier for this delivery
     * rate callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.name (Required):
     * string. Merchant-facing name of the rate callback. object.signing_methods (Required): Array
     * of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization:
     * Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
     * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. []
     * enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs requests to
     * this endpoint. Value enum: "jwt", "hmac". object.status (Required): string. Whether the rate
     * callback is in use. Value enum: "active", "inactive", "archived". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.circuit_failure_count (Optional): integer or null. Consecutive callback
     * failures since the last successful response.
     * previous_attributes.circuit_failure_count.anyOf[1] (Value): integer. Consecutive callback
     * failures since the last successful response. minimum: 0.
     * previous_attributes.circuit_failure_count.anyOf[2] (Value): null.
     * previous_attributes.circuit_state (Optional): string or null. Whether Flint is currently
     * calling the callback, based on recent failures. Value enum: "closed", "open", "half_open".
     * previous_attributes.circuit_state.anyOf[1] (Value): string. Whether Flint is currently
     * calling the callback, based on recent failures. Value enum: "closed", "open", "half_open".
     * previous_attributes.circuit_state.anyOf[2] (Value): null. previous_attributes.configuration
     * (Optional): {@link DeliveryRateCallbackConfigurationPreviousAttributes} or null. Current
     * settings of the rate callback. previous_attributes.configuration.anyOf[1] (Value): {@link
     * DeliveryRateCallbackConfigurationPreviousAttributes}.
     * previous_attributes.configuration.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.current_delivery_rate_callback_revision_id (Optional): string or null.
     * ID of the current revision. New quotes use it.
     * previous_attributes.current_delivery_rate_callback_revision_id.anyOf[1] (Value): string. ID
     * of the current revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * previous_attributes.current_delivery_rate_callback_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_rate_callback_id (Optional): string or null. Unique identifier
     * for this delivery rate callback, prefixed `dcb_`.
     * previous_attributes.delivery_rate_callback_id.anyOf[1] (Value): string. Unique identifier
     * for this delivery rate callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * previous_attributes.delivery_rate_callback_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_revocation_id (Optional): string or null. The revocation
     * fencing this resource's own current revision. `null` when the current revision isn't
     * revoked. It doesn't cover dependencies: a method can be unusable while this is `null`
     * because its rate callback revision, signing key, or a Location's address is revoked. A
     * revocation doesn't change `status`; publish a new revision to clear it.
     * previous_attributes.delivery_revocation_id.anyOf[1] (Value): string. The revocation fencing
     * this resource's own current revision. `null` when the current revision isn't revoked. It
     * doesn't cover dependencies: a method can be unusable while this is `null` because its rate
     * callback revision, signing key, or a Location's address is revoked. A revocation doesn't
     * change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". previous_attributes.delivery_revocation_id.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null.
     * Caller-owned identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null. previous_attributes.name
     * (Optional): string or null. Merchant-facing name of the rate callback.
     * previous_attributes.name.anyOf[1] (Value): string. Merchant-facing name of the rate
     * callback. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.signing_methods (Optional): Array of string or null. Signing methods
     * enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed
     * token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing
     * key IDs. [] enum: "jwt", "hmac". previous_attributes.signing_methods.anyOf[1] (Value): Array
     * of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization:
     * Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
     * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. []
     * enum: "jwt", "hmac". previous_attributes.signing_methods.anyOf[1][] (Value): string. How
     * Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     * previous_attributes.signing_methods.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Whether the rate callback is in use. Value enum: "active",
     * "inactive", "archived". previous_attributes.status.anyOf[1] (Value): string. Whether the
     * rate callback is in use. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Whether Flint is
         * currently calling the callback, based on recent failures. Value enum: "closed", "open",
         * "half_open". configuration (Required): {@link DeliveryRateCallbackConfiguration}.
         * Current settings of the rate callback. Settings for a delivery rate callback: the
         * endpoint `url` Flint calls, request timeout, request and response size limits, redirect
         * policy, and whether previews can use it. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. ID of the current
         * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
         * delivery_rate_callback_id (Required): string. Unique identifier for this delivery rate
         * callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
         * delivery_revocation_id (Required): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". name (Required): string. Merchant-facing name of the rate
         * callback. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Whether the rate callback is in use.
         * Value enum: "active", "inactive", "archived". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /**
             * Whether Flint is currently calling the callback, based on recent failures. Value
             * enum: "closed", "open", "half_open".
             */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Current settings of the rate callback. Settings for a delivery rate callback: the
             * endpoint `url` Flint calls, request timeout, request and response size limits,
             * redirect policy, and whether previews can use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the current revision. New quotes use it. Example:
             * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
             */
            "current_delivery_rate_callback_revision_id": string;
            /**
             * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
             * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
             */
            "delivery_rate_callback_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Merchant-facing name of the rate callback. */
            "name": string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /**
             * Whether the rate callback is in use. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. circuit_failure_count (Optional): integer or
         * null. Consecutive callback failures since the last successful response.
         * circuit_failure_count.anyOf[1] (Value): integer. Consecutive callback failures since the
         * last successful response. minimum: 0. circuit_failure_count.anyOf[2] (Value): null.
         * circuit_state (Optional): string or null. Whether Flint is currently calling the
         * callback, based on recent failures. Value enum: "closed", "open", "half_open".
         * circuit_state.anyOf[1] (Value): string. Whether Flint is currently calling the callback,
         * based on recent failures. Value enum: "closed", "open", "half_open".
         * circuit_state.anyOf[2] (Value): null. configuration (Optional): {@link
         * DeliveryRateCallbackConfigurationPreviousAttributes} or null. Current settings of the
         * rate callback. configuration.anyOf[1] (Value): {@link
         * DeliveryRateCallbackConfigurationPreviousAttributes}. configuration.anyOf[2] (Value):
         * null. created_at (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. current_delivery_rate_callback_revision_id
         * (Optional): string or null. ID of the current revision. New quotes use it.
         * current_delivery_rate_callback_revision_id.anyOf[1] (Value): string. ID of the current
         * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
         * current_delivery_rate_callback_revision_id.anyOf[2] (Value): null.
         * delivery_rate_callback_id (Optional): string or null. Unique identifier for this
         * delivery rate callback, prefixed `dcb_`. delivery_rate_callback_id.anyOf[1] (Value):
         * string. Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
         * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". delivery_rate_callback_id.anyOf[2] (Value): null.
         * delivery_revocation_id (Optional): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it.
         * delivery_revocation_id.anyOf[1] (Value): string. The revocation fencing this resource's
         * own current revision. `null` when the current revision isn't revoked. It doesn't cover
         * dependencies: a method can be unusable while this is `null` because its rate callback
         * revision, signing key, or a Location's address is revoked. A revocation doesn't change
         * `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". delivery_revocation_id.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. name
         * (Optional): string or null. Merchant-facing name of the rate callback. name.anyOf[1]
         * (Value): string. Merchant-facing name of the rate callback. name.anyOf[2] (Value): null.
         * signing_methods (Optional): Array of string or null. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * [] enum: "jwt", "hmac". signing_methods.anyOf[1] (Value): Array of string. Signing
         * methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a
         * Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
         * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"].
         * [] enum: "jwt", "hmac". signing_methods.anyOf[1][] (Value): string. How Flint signs
         * requests to this endpoint. Value enum: "jwt", "hmac". signing_methods.anyOf[2] (Value):
         * null. status (Optional): string or null. Whether the rate callback is in use. Value
         * enum: "active", "inactive", "archived". status.anyOf[1] (Value): string. Whether the
         * rate callback is in use. Value enum: "active", "inactive", "archived". status.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. RFC3339 timestamp.
         * updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. version.anyOf[1] (Value): integer.
         * Current version of this resource's owned state. Send it as `expected_version` when
         * changing the resource to reject a stale write. Format: uint64. minimum: 1.
         * version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Consecutive callback failures since the last successful response. anyOf[1] (Value):
             * integer. Consecutive callback failures since the last successful response. minimum:
             * 0. anyOf[2] (Value): null.
             */
            "circuit_failure_count"?: ((number) | (null));
            /**
             * Whether Flint is currently calling the callback, based on recent failures. Value
             * enum: "closed", "open", "half_open". anyOf[1] (Value): string. Whether Flint is
             * currently calling the callback, based on recent failures. Value enum: "closed",
             * "open", "half_open". anyOf[2] (Value): null.
             */
            "circuit_state"?: (("closed" | "open" | "half_open" | (string & {})) | (null));
            /**
             * Current settings of the rate callback. anyOf[1] (Value): {@link
             * DeliveryRateCallbackConfigurationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "configuration"?: ((DeliveryRateCallbackConfigurationPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * ID of the current revision. New quotes use it. anyOf[1] (Value): string. ID of the
             * current revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
             * anyOf[2] (Value): null.
             */
            "current_delivery_rate_callback_revision_id"?: ((string) | (null));
            /**
             * Unique identifier for this delivery rate callback, prefixed `dcb_`. anyOf[1]
             * (Value): string. Unique identifier for this delivery rate callback, prefixed `dcb_`.
             * Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". anyOf[2] (Value): null.
             */
            "delivery_rate_callback_id"?: ((string) | (null));
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. anyOf[1] (Value): string. The revocation fencing this
             * resource's own current revision. `null` when the current revision isn't revoked. It
             * doesn't cover dependencies: a method can be unusable while this is `null` because
             * its rate callback revision, signing key, or a Location's address is revoked. A
             * revocation doesn't change `status`; publish a new revision to clear it. Example:
             * "drev_01KEZF7C007Q141XJ28YAAC87B". anyOf[2] (Value): null.
             */
            "delivery_revocation_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Merchant-facing name of the rate callback. anyOf[1] (Value): string. Merchant-facing
             * name of the rate callback. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. [] enum: "jwt", "hmac". anyOf[1] (Value):
             * Array of string. Signing methods enabled for callback HTTP requests. jwt sends
             * Authorization: Bearer with a Flint-signed token whose aud is this
             * delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
             * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac". anyOf[1][]
             * (Value): string. How Flint signs requests to this endpoint. Value enum: "jwt",
             * "hmac". anyOf[2] (Value): null.
             */
            "signing_methods"?: ((Array<"jwt" | "hmac" | (string & {})>) | (null));
            /**
             * Whether the rate callback is in use. Value enum: "active", "inactive", "archived".
             * anyOf[1] (Value): string. Whether the rate callback is in use. Value enum: "active",
             * "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_rate_callback.archived". */
    "event_type"?: "delivery_rate_callback.archived";
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
 * The `delivery_rate_callback.archived` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliveryRateCallbackArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.circuit_failure_count (Required): integer. Consecutive callback
     * failures since the last successful response. minimum: 0. object.circuit_state (Required):
     * string. Whether Flint is currently calling the callback, based on recent failures. Value
     * enum: "closed", "open", "half_open". object.configuration (Required): {@link
     * DeliveryRateCallbackConfiguration}. Current settings of the rate callback. Settings for a
     * delivery rate callback: the endpoint `url` Flint calls, request timeout, request and
     * response size limits, redirect policy, and whether previews can use it. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_rate_callback_revision_id (Required): string. ID of the current
     * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * object.delivery_rate_callback_id (Required): string. Unique identifier for this delivery
     * rate callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * object.delivery_revocation_id (Required): string or null. The revocation fencing this
     * resource's own current revision. `null` when the current revision isn't revoked. It doesn't
     * cover dependencies: a method can be unusable while this is `null` because its rate callback
     * revision, signing key, or a Location's address is revoked. A revocation doesn't change
     * `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.name (Required):
     * string. Merchant-facing name of the rate callback. object.signing_methods (Required): Array
     * of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization:
     * Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
     * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. []
     * enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs requests to
     * this endpoint. Value enum: "jwt", "hmac". object.status (Required): string. Whether the rate
     * callback is in use. Value enum: "active", "inactive", "archived". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.circuit_failure_count (Optional): integer or null. Consecutive callback
     * failures since the last successful response.
     * previous_attributes.circuit_failure_count.anyOf[1] (Value): integer. Consecutive callback
     * failures since the last successful response. minimum: 0.
     * previous_attributes.circuit_failure_count.anyOf[2] (Value): null.
     * previous_attributes.circuit_state (Optional): string or null. Whether Flint is currently
     * calling the callback, based on recent failures. Value enum: "closed", "open", "half_open".
     * previous_attributes.circuit_state.anyOf[1] (Value): string. Whether Flint is currently
     * calling the callback, based on recent failures. Value enum: "closed", "open", "half_open".
     * previous_attributes.circuit_state.anyOf[2] (Value): null. previous_attributes.configuration
     * (Optional): {@link DeliveryRateCallbackConfigurationPreviousAttributes} or null. Current
     * settings of the rate callback. previous_attributes.configuration.anyOf[1] (Value): {@link
     * DeliveryRateCallbackConfigurationPreviousAttributes}.
     * previous_attributes.configuration.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.current_delivery_rate_callback_revision_id (Optional): string or null.
     * ID of the current revision. New quotes use it.
     * previous_attributes.current_delivery_rate_callback_revision_id.anyOf[1] (Value): string. ID
     * of the current revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     * previous_attributes.current_delivery_rate_callback_revision_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_rate_callback_id (Optional): string or null. Unique identifier
     * for this delivery rate callback, prefixed `dcb_`.
     * previous_attributes.delivery_rate_callback_id.anyOf[1] (Value): string. Unique identifier
     * for this delivery rate callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     * previous_attributes.delivery_rate_callback_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_revocation_id (Optional): string or null. The revocation
     * fencing this resource's own current revision. `null` when the current revision isn't
     * revoked. It doesn't cover dependencies: a method can be unusable while this is `null`
     * because its rate callback revision, signing key, or a Location's address is revoked. A
     * revocation doesn't change `status`; publish a new revision to clear it.
     * previous_attributes.delivery_revocation_id.anyOf[1] (Value): string. The revocation fencing
     * this resource's own current revision. `null` when the current revision isn't revoked. It
     * doesn't cover dependencies: a method can be unusable while this is `null` because its rate
     * callback revision, signing key, or a Location's address is revoked. A revocation doesn't
     * change `status`; publish a new revision to clear it. Example:
     * "drev_01KEZF7C007Q141XJ28YAAC87B". previous_attributes.delivery_revocation_id.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null.
     * Caller-owned identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null. previous_attributes.name
     * (Optional): string or null. Merchant-facing name of the rate callback.
     * previous_attributes.name.anyOf[1] (Value): string. Merchant-facing name of the rate
     * callback. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.signing_methods (Optional): Array of string or null. Signing methods
     * enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed
     * token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing
     * key IDs. [] enum: "jwt", "hmac". previous_attributes.signing_methods.anyOf[1] (Value): Array
     * of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization:
     * Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
     * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. []
     * enum: "jwt", "hmac". previous_attributes.signing_methods.anyOf[1][] (Value): string. How
     * Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     * previous_attributes.signing_methods.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Whether the rate callback is in use. Value enum: "active",
     * "inactive", "archived". previous_attributes.status.anyOf[1] (Value): string. Whether the
     * rate callback is in use. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * circuit_failure_count (Required): integer. Consecutive callback failures since the last
         * successful response. minimum: 0. circuit_state (Required): string. Whether Flint is
         * currently calling the callback, based on recent failures. Value enum: "closed", "open",
         * "half_open". configuration (Required): {@link DeliveryRateCallbackConfiguration}.
         * Current settings of the rate callback. Settings for a delivery rate callback: the
         * endpoint `url` Flint calls, request timeout, request and response size limits, redirect
         * policy, and whether previews can use it. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_rate_callback_revision_id (Required): string. ID of the current
         * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
         * delivery_rate_callback_id (Required): string. Unique identifier for this delivery rate
         * callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
         * delivery_revocation_id (Required): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". name (Required): string. Merchant-facing name of the rate
         * callback. signing_methods (Required): Array of string. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac".
         * signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value
         * enum: "jwt", "hmac". status (Required): string. Whether the rate callback is in use.
         * Value enum: "active", "inactive", "archived". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** Consecutive callback failures since the last successful response. minimum: 0. */
            "circuit_failure_count": number;
            /**
             * Whether Flint is currently calling the callback, based on recent failures. Value
             * enum: "closed", "open", "half_open".
             */
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            /**
             * Current settings of the rate callback. Settings for a delivery rate callback: the
             * endpoint `url` Flint calls, request timeout, request and response size limits,
             * redirect policy, and whether previews can use it.
             */
            "configuration": DeliveryRateCallbackConfiguration;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ID of the current revision. New quotes use it. Example:
             * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
             */
            "current_delivery_rate_callback_revision_id": string;
            /**
             * Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
             * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
             */
            "delivery_rate_callback_id": string;
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B".
             */
            "delivery_revocation_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Merchant-facing name of the rate callback. */
            "name": string;
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example:
             * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to
             * this endpoint. Value enum: "jwt", "hmac".
             */
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            /**
             * Whether the rate callback is in use. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. circuit_failure_count (Optional): integer or
         * null. Consecutive callback failures since the last successful response.
         * circuit_failure_count.anyOf[1] (Value): integer. Consecutive callback failures since the
         * last successful response. minimum: 0. circuit_failure_count.anyOf[2] (Value): null.
         * circuit_state (Optional): string or null. Whether Flint is currently calling the
         * callback, based on recent failures. Value enum: "closed", "open", "half_open".
         * circuit_state.anyOf[1] (Value): string. Whether Flint is currently calling the callback,
         * based on recent failures. Value enum: "closed", "open", "half_open".
         * circuit_state.anyOf[2] (Value): null. configuration (Optional): {@link
         * DeliveryRateCallbackConfigurationPreviousAttributes} or null. Current settings of the
         * rate callback. configuration.anyOf[1] (Value): {@link
         * DeliveryRateCallbackConfigurationPreviousAttributes}. configuration.anyOf[2] (Value):
         * null. created_at (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. current_delivery_rate_callback_revision_id
         * (Optional): string or null. ID of the current revision. New quotes use it.
         * current_delivery_rate_callback_revision_id.anyOf[1] (Value): string. ID of the current
         * revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
         * current_delivery_rate_callback_revision_id.anyOf[2] (Value): null.
         * delivery_rate_callback_id (Optional): string or null. Unique identifier for this
         * delivery rate callback, prefixed `dcb_`. delivery_rate_callback_id.anyOf[1] (Value):
         * string. Unique identifier for this delivery rate callback, prefixed `dcb_`. Example:
         * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". delivery_rate_callback_id.anyOf[2] (Value): null.
         * delivery_revocation_id (Optional): string or null. The revocation fencing this
         * resource's own current revision. `null` when the current revision isn't revoked. It
         * doesn't cover dependencies: a method can be unusable while this is `null` because its
         * rate callback revision, signing key, or a Location's address is revoked. A revocation
         * doesn't change `status`; publish a new revision to clear it.
         * delivery_revocation_id.anyOf[1] (Value): string. The revocation fencing this resource's
         * own current revision. `null` when the current revision isn't revoked. It doesn't cover
         * dependencies: a method can be unusable while this is `null` because its rate callback
         * revision, signing key, or a Location's address is revoked. A revocation doesn't change
         * `status`; publish a new revision to clear it. Example:
         * "drev_01KEZF7C007Q141XJ28YAAC87B". delivery_revocation_id.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. name
         * (Optional): string or null. Merchant-facing name of the rate callback. name.anyOf[1]
         * (Value): string. Merchant-facing name of the rate callback. name.anyOf[2] (Value): null.
         * signing_methods (Optional): Array of string or null. Signing methods enabled for
         * callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose
         * aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
         * [] enum: "jwt", "hmac". signing_methods.anyOf[1] (Value): Array of string. Signing
         * methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a
         * Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
         * webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"].
         * [] enum: "jwt", "hmac". signing_methods.anyOf[1][] (Value): string. How Flint signs
         * requests to this endpoint. Value enum: "jwt", "hmac". signing_methods.anyOf[2] (Value):
         * null. status (Optional): string or null. Whether the rate callback is in use. Value
         * enum: "active", "inactive", "archived". status.anyOf[1] (Value): string. Whether the
         * rate callback is in use. Value enum: "active", "inactive", "archived". status.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. RFC3339 timestamp.
         * updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. version.anyOf[1] (Value): integer.
         * Current version of this resource's owned state. Send it as `expected_version` when
         * changing the resource to reject a stale write. Format: uint64. minimum: 1.
         * version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Consecutive callback failures since the last successful response. anyOf[1] (Value):
             * integer. Consecutive callback failures since the last successful response. minimum:
             * 0. anyOf[2] (Value): null.
             */
            "circuit_failure_count"?: ((number) | (null));
            /**
             * Whether Flint is currently calling the callback, based on recent failures. Value
             * enum: "closed", "open", "half_open". anyOf[1] (Value): string. Whether Flint is
             * currently calling the callback, based on recent failures. Value enum: "closed",
             * "open", "half_open". anyOf[2] (Value): null.
             */
            "circuit_state"?: (("closed" | "open" | "half_open" | (string & {})) | (null));
            /**
             * Current settings of the rate callback. anyOf[1] (Value): {@link
             * DeliveryRateCallbackConfigurationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "configuration"?: ((DeliveryRateCallbackConfigurationPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * ID of the current revision. New quotes use it. anyOf[1] (Value): string. ID of the
             * current revision. New quotes use it. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
             * anyOf[2] (Value): null.
             */
            "current_delivery_rate_callback_revision_id"?: ((string) | (null));
            /**
             * Unique identifier for this delivery rate callback, prefixed `dcb_`. anyOf[1]
             * (Value): string. Unique identifier for this delivery rate callback, prefixed `dcb_`.
             * Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". anyOf[2] (Value): null.
             */
            "delivery_rate_callback_id"?: ((string) | (null));
            /**
             * The revocation fencing this resource's own current revision. `null` when the current
             * revision isn't revoked. It doesn't cover dependencies: a method can be unusable
             * while this is `null` because its rate callback revision, signing key, or a
             * Location's address is revoked. A revocation doesn't change `status`; publish a new
             * revision to clear it. anyOf[1] (Value): string. The revocation fencing this
             * resource's own current revision. `null` when the current revision isn't revoked. It
             * doesn't cover dependencies: a method can be unusable while this is `null` because
             * its rate callback revision, signing key, or a Location's address is revoked. A
             * revocation doesn't change `status`; publish a new revision to clear it. Example:
             * "drev_01KEZF7C007Q141XJ28YAAC87B". anyOf[2] (Value): null.
             */
            "delivery_revocation_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Merchant-facing name of the rate callback. anyOf[1] (Value): string. Merchant-facing
             * name of the rate callback. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer
             * with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends
             * webhook-signature and signing key IDs. [] enum: "jwt", "hmac". anyOf[1] (Value):
             * Array of string. Signing methods enabled for callback HTTP requests. jwt sends
             * Authorization: Bearer with a Flint-signed token whose aud is this
             * delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs.
             * minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac". anyOf[1][]
             * (Value): string. How Flint signs requests to this endpoint. Value enum: "jwt",
             * "hmac". anyOf[2] (Value): null.
             */
            "signing_methods"?: ((Array<"jwt" | "hmac" | (string & {})>) | (null));
            /**
             * Whether the rate callback is in use. Value enum: "active", "inactive", "archived".
             * anyOf[1] (Value): string. Whether the rate callback is in use. Value enum: "active",
             * "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_rate_callback.archived". */
    "event_type"?: "delivery_rate_callback.archived";
});
/**
 * Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request
 * and response size limits, redirect policy, and whether previews can use it.
 */
export type DeliveryRateCallbackConfiguration = {
    /**
     * Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576.
     * Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_request_bytes"?: number;
    /**
     * Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576.
     * Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_response_bytes"?: number;
    /**
     * Whether delivery previews call this callback. Previews call it only when this setting and
     * `preview_enabled` on the delivery method are both `true`. Defaults to `false`. Default:
     * false.
     */
    "preview_enabled"?: boolean;
    /**
     * What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`.
     * Default: "reject". Value enum: "reject".
     */
    "redirect_policy"?: "reject" | (string & {});
    /**
     * Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1
     * through 10. minimum: 0.1. maximum: 10. Default: 2.
     */
    "request_timeout_seconds"?: number;
    /** HTTPS URL that Flint calls to get a delivery rate. minLength: 1. */
    "url": string;
};
/**
 * Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's
 * default, as each field describes. The result must be a configuration you could create. An empty
 * configuration is invalid. Publishes a new immutable revision, even when the values are
 * unchanged, and requires expected_version. minProperties: 1.
 */
export type DeliveryRateCallbackConfigurationPatchRequest = {
    /**
     * Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576.
     * Null restores 262144 bytes. Format: int64. minimum: 1. maximum: 1048576.
     */
    "maximum_request_bytes"?: number | null;
    /**
     * Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576.
     * Null restores 262144 bytes. Format: int64. minimum: 1. maximum: 1048576.
     */
    "maximum_response_bytes"?: number | null;
    /**
     * Whether delivery previews call this callback. Previews call it only when this setting and
     * `preview_enabled` on the delivery method are both `true`. Defaults to `false`. Null restores
     * false.
     */
    "preview_enabled"?: boolean | null;
    /**
     * What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. Null
     * restores reject. Value enum: "reject", null.
     */
    "redirect_policy"?: "reject" | null | (string & {}) | null;
    /**
     * Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1
     * through 10. Null restores 2 seconds. minimum: 0.1. maximum: 10.
     */
    "request_timeout_seconds"?: number | null;
    /** HTTPS URL that Flint calls to get a delivery rate. Null is invalid. minLength: 1. */
    "url"?: string;
};
/**
 * Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's
 * default, as each field describes. The result must be a configuration you could create. An empty
 * configuration is invalid. Publishes a new immutable revision, even when the values are
 * unchanged, and requires expected_version. minProperties: 1.
 */
export type DeliveryRateCallbackConfigurationPatchRequestInput = {
    /**
     * Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576.
     * Null restores 262144 bytes. Format: int64. minimum: 1. maximum: 1048576.
     */
    "maximum_request_bytes"?: number | null;
    /**
     * Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576.
     * Null restores 262144 bytes. Format: int64. minimum: 1. maximum: 1048576.
     */
    "maximum_response_bytes"?: number | null;
    /**
     * Whether delivery previews call this callback. Previews call it only when this setting and
     * `preview_enabled` on the delivery method are both `true`. Defaults to `false`. Null restores
     * false.
     */
    "preview_enabled"?: boolean | null;
    /**
     * What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. Null
     * restores reject. Value enum: "reject", null.
     */
    "redirect_policy"?: "reject" | null;
    /**
     * Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1
     * through 10. Null restores 2 seconds. minimum: 0.1. maximum: 10.
     */
    "request_timeout_seconds"?: number | null;
    /** HTTPS URL that Flint calls to get a delivery rate. Null is invalid. minLength: 1. */
    "url"?: string;
};
export type DeliveryRateCallbackConfigurationPreviousAttributes = {
    /**
     * Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576.
     * anyOf[1] (Value): integer. Maximum callback request body size in bytes. Defaults to 262144;
     * accepts 1 through 1048576. Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     * anyOf[2] (Value): null.
     */
    "maximum_request_bytes"?: ((number) | (null));
    /**
     * Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576.
     * anyOf[1] (Value): integer. Maximum callback response body size in bytes. Defaults to 262144;
     * accepts 1 through 1048576. Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     * anyOf[2] (Value): null.
     */
    "maximum_response_bytes"?: ((number) | (null));
    /**
     * Whether delivery previews call this callback. Previews call it only when this setting and
     * `preview_enabled` on the delivery method are both `true`. Defaults to `false`. anyOf[1]
     * (Value): boolean. Whether delivery previews call this callback. Previews call it only when
     * this setting and `preview_enabled` on the delivery method are both `true`. Defaults to
     * `false`. Default: false. anyOf[2] (Value): null.
     */
    "preview_enabled"?: ((boolean) | (null));
    /**
     * What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`.
     * Value enum: "reject". anyOf[1] (Value): string. What Flint does when the callback responds
     * with an HTTP redirect. Defaults to `reject`. Default: "reject". Value enum: "reject".
     * anyOf[2] (Value): null.
     */
    "redirect_policy"?: (("reject" | (string & {})) | (null));
    /**
     * Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1
     * through 10. anyOf[1] (Value): number. Maximum time to wait for the callback response, in
     * seconds. Defaults to 2; accepts 0.1 through 10. minimum: 0.1. maximum: 10. Default: 2.
     * anyOf[2] (Value): null.
     */
    "request_timeout_seconds"?: ((number) | (null));
    /**
     * HTTPS URL that Flint calls to get a delivery rate. anyOf[1] (Value): string. HTTPS URL that
     * Flint calls to get a delivery rate. minLength: 1. anyOf[2] (Value): null.
     */
    "url"?: ((string) | (null));
};
/**
 * Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request
 * and response size limits, redirect policy, and whether previews can use it.
 */
export type DeliveryRateCallbackConfigurationRequestInput = {
    /**
     * Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576.
     * Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_request_bytes"?: number;
    /**
     * Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576.
     * Format: int64. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_response_bytes"?: number;
    /**
     * Whether delivery previews call this callback. Previews call it only when this setting and
     * `preview_enabled` on the delivery method are both `true`. Defaults to `false`. Default:
     * false.
     */
    "preview_enabled"?: boolean;
    /**
     * What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`.
     * Default: "reject". Value enum: "reject".
     */
    "redirect_policy"?: "reject";
    /**
     * Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1
     * through 10. minimum: 0.1. maximum: 10. Default: 2.
     */
    "request_timeout_seconds"?: number;
    /** HTTPS URL that Flint calls to get a delivery rate. minLength: 1. */
    "url": string;
};
