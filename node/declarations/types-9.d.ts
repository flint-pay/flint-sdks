import type {
    DeliverySelectionInstructionsRequest,
    DeliverySelectionInstructionsRequestInput,
    DeliverySelectionRecipientRequest,
    DeliverySelectionRecipientRequestInput,
    DeliveryZoneConfigurationRequest,
    DeliveryZoneConfigurationRequestInput
} from './types-22.js';
import type { AddressRequest, AddressRequestInput, APIKey } from './types-0.js';
import type { MetadataMap, MetadataRequestInput } from './types-38.js';
import type { Sandbox } from './types-59.js';
import type { FeedbackReportingClient, FeedbackReportingClientRequestInput } from './types-24.js';
import type { CreateDeliveryFulfillmentDetails, CreateDeliveryFulfillmentDetailsInput } from './types-8.js';
import type { CreatePickupFulfillmentDetails, CreatePickupFulfillmentDetailsInput } from './types-12.js';
import type { CreateServiceFulfillmentDetails, CreateServiceFulfillmentDetailsInput } from './types-13.js';
import type {
    FulfillmentLineItemRequest,
    FulfillmentPackagingRequest,
    FulfillmentRecipientRequest,
    FulfillmentLineItemRequestInput,
    FulfillmentPackagingRequestInput,
    FulfillmentRecipientRequestInput
} from './types-25.js';
import type { GiftCardFundingSource, GiftCardFundingSourceRequestInput, GiftCard, GiftCardLoad } from './types-26.js';
import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type {
    GiftCardTransaction,
    GiftCardPurchaseRecipient,
    GiftCardNotificationRecipientInput,
    GiftCardNotification
} from './types-27.js';
import type { ResponseMeta } from './types-54.js';
import type {
    InitialGiftCardFunding,
    InitialGiftCardFundingInput,
    InventoryAdjustmentConditionChangeLineRequest
} from './types-28.js';
import type { CreateModifierRequestInput } from './types-10.js';
import type { TextModifierConfigRequestInput } from './types-65.js';
import type { InventorySourceSystemRequest } from './types-30.js';
/** Creates a permanent fence for one exact delivery dependency in this merchant and environment. */
export type CreateDeliveryRevocationRequestInput = {
    /** Optional incident context retained with this revocation. minLength: 1. maxLength: 2048. */
    "merchant_note"?: string;
    /**
     * Why this dependency must no longer be used. Value enum: "unsafe_configuration",
     * "location_unavailable", "credential_compromise", "legal_requirement", "other".
     */
    "reason": "unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other";
    /**
     * The parent and exact child identity to fence. Each target_type accepts only its own IDs. The
     * parent and exact child identity to fence. Targets never resolve an alias to a current
     * revision.
     */
    "target": CreateDeliveryRevocationTargetInput;
};
/** Fences one immutable revision of the named delivery method. */
export type CreateDeliveryRevocationTargetDeliveryMethodRevisionInput = {
    /**
     * ID of the delivery method that owns the targeted revision. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id": string;
    /**
     * ID of the immutable revision to fence. It must belong to delivery_method_id. minLength: 1.
     * Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id": string;
    /**
     * Fences one immutable revision of the named delivery method. Value enum:
     * "delivery_method_revision".
     */
    "target_type": ("delivery_method_revision") & ("delivery_method_revision");
};
/** Fences one immutable revision of the named delivery rate callback. */
export type CreateDeliveryRevocationTargetDeliveryRateCallbackRevisionInput = {
    /**
     * ID of the delivery rate callback that owns the targeted revision or signing key. minLength:
     * 1. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id": string;
    /**
     * ID of the immutable revision to fence. It must belong to delivery_rate_callback_id.
     * minLength: 1. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     */
    "delivery_rate_callback_revision_id": string;
    /**
     * Fences one immutable revision of the named delivery rate callback. Value enum:
     * "delivery_rate_callback_revision".
     */
    "target_type": ("delivery_rate_callback_revision") & ("delivery_rate_callback_revision");
};
/** Fences one current or previous HMAC signing key of the named delivery rate callback. */
export type CreateDeliveryRevocationTargetDeliveryRateCallbackSigningKeyInput = {
    /**
     * ID of the delivery rate callback that owns the targeted revision or signing key. minLength:
     * 1. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id": string;
    /**
     * ID of the HMAC signing key to fence. It must be the named callback's current or previous
     * key; secret material is never returned. minLength: 1. Example:
     * "cbkey_00112233445566778899aabb".
     */
    "delivery_rate_callback_signing_key_id": string;
    /**
     * Fences one current or previous HMAC signing key of the named delivery rate callback. Value
     * enum: "delivery_rate_callback_signing_key".
     */
    "target_type": ("delivery_rate_callback_signing_key") & ("delivery_rate_callback_signing_key");
};
/**
 * The parent and exact child identity to fence. Targets never resolve an alias to a current
 * revision.
 */
export type CreateDeliveryRevocationTargetInput = ({
    /**
     * ID of the delivery method that owns the targeted revision. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id"?: string;
    /**
     * ID of the immutable revision to fence. It must belong to delivery_method_id. minLength: 1.
     * Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id"?: string;
    /**
     * ID of the delivery rate callback that owns the targeted revision or signing key. minLength:
     * 1. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id"?: string;
    /**
     * ID of the immutable revision to fence. It must belong to delivery_rate_callback_id.
     * minLength: 1. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     */
    "delivery_rate_callback_revision_id"?: string;
    /**
     * ID of the HMAC signing key to fence. It must be the named callback's current or previous
     * key; secret material is never returned. minLength: 1. Example:
     * "cbkey_00112233445566778899aabb".
     */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact recorded geography version of location_id to fence. Future and unrecorded versions are
     * not accepted. Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /**
     * ID of the Location that recorded the targeted geography version. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * The kind of exact dependency this revocation fences. Value enum: "location_geography",
     * "delivery_rate_callback_signing_key", "delivery_rate_callback_revision",
     * "delivery_method_revision".
     */
    "target_type": "location_geography"
        | "delivery_rate_callback_signing_key"
        | "delivery_rate_callback_revision"
        | "delivery_method_revision";
})
    & ((Exclude<CreateDeliveryRevocationTargetLocationGeographyInput & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryRevocationTargetDeliveryRateCallbackSigningKeyInput & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryRevocationTargetDeliveryRateCallbackRevisionInput & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryRevocationTargetDeliveryMethodRevisionInput & object, readonly unknown[]>));
/** Fences one geography version recorded by the named Location. */
export type CreateDeliveryRevocationTargetLocationGeographyInput = {
    /**
     * Exact recorded geography version of location_id to fence. Future and unrecorded versions are
     * not accepted. Format: int64. minimum: 1.
     */
    "location_geography_version": number;
    /**
     * ID of the Location that recorded the targeted geography version. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Fences one geography version recorded by the named Location. Value enum:
     * "location_geography".
     */
    "target_type": ("location_geography") & ("location_geography");
};
/**
 * The delivery option to select for one choice group when creating a delivery selection, with
 * optional delivery instructions.
 */
export type CreateDeliverySelectionChoiceRequest = {
    /**
     * ID of the choice group in the quote to select for. minLength: 1. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     */
    "delivery_choice_group_id": string;
    /**
     * ID of an unexpired option in this choice group's options. minLength: 1. Example:
     * "dopt_01KEZF7C00JM9TDZQZ5KQJ6923".
     */
    "delivery_option_id": string;
    /**
     * Delivery window choice and buyer instructions for this option. Buyer input for a selected
     * delivery option: a `delivery_window_id` where the option uses delivery windows, and optional
     * `instructions`.
     */
    "input"?: DeliverySelectionInstructionsRequest;
};
/**
 * The delivery option to select for one choice group when creating a delivery selection, with
 * optional delivery instructions.
 */
export type CreateDeliverySelectionChoiceRequestInput = {
    /**
     * ID of the choice group in the quote to select for. minLength: 1. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     */
    "delivery_choice_group_id": string;
    /**
     * ID of an unexpired option in this choice group's options. minLength: 1. Example:
     * "dopt_01KEZF7C00JM9TDZQZ5KQJ6923".
     */
    "delivery_option_id": string;
    /**
     * Delivery window choice and buyer instructions for this option. Buyer input for a selected
     * delivery option: a `delivery_window_id` where the option uses delivery windows, and optional
     * `instructions`.
     */
    "input"?: DeliverySelectionInstructionsRequestInput;
};
/** The request body for: Create delivery selection. */
export type CreateDeliverySelectionRequest = {
    /**
     * One chosen option for every required choice group in the quote. Use group and option IDs
     * from this quote, not an earlier quote. [] (Value): {@link
     * CreateDeliverySelectionChoiceRequest}. The delivery option to select for one choice group
     * when creating a delivery selection, with optional delivery instructions.
     */
    "choices": Array<CreateDeliverySelectionChoiceRequest>;
    /**
     * ID of the quote whose options to choose. The selection belongs to that quote's checkout
     * session. minLength: 1. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     */
    "delivery_quote_id": string;
    /**
     * Destination address for shipment or local delivery. When sent, it must be a complete
     * address. When omitted, Flint keeps the quote's address, even when partial; missing members
     * appear in input_requirements and must be supplied before payment. A complete postal address.
     * State and postal_code are required for US addresses and optional for other countries. Send
     * null or omit line2, state, and postal_code when the address has none.
     */
    "destination_address"?: AddressRequest;
    /**
     * Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no
     * assertion, send null to assert that no selection exists, or send an ID to assert that it is
     * current. minLength: 1. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "expected_delivery_selection_id"?: string | null;
    /**
     * Requires a merchant credential with delivery-write scope. Merchant-created cart reservations
     * to adopt atomically into the selection hold at the selected inventory items and locations.
     * Only matching held units are released; unused units stay held, and any remaining demand uses
     * available stock. At most 100 unique IDs. Explicit IDs, including an empty array, replace the
     * session binding for this request. When omitted, both merchant and buyer requests use
     * eligible session-bound holds; ineligible bound holds are silently skipped. First adopter
     * wins when sessions share a hold. Ineligible explicit IDs are refused as not found. maxItems:
     * 100. [] (Value): string. minLength: 1. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_ids"?: Array<string>;
    /**
     * Recipient details the chosen options ask for. Missing required fields are returned in
     * input_requirements and must be supplied before payment. Recipient details you supply with a
     * delivery selection or subscription delivery: optional `name`, `email`, and `phone`.
     */
    "recipient"?: DeliverySelectionRecipientRequest;
};
/** The request body for: Create delivery selection. */
export type CreateDeliverySelectionRequestInput = {
    /**
     * One chosen option for every required choice group in the quote. Use group and option IDs
     * from this quote, not an earlier quote. [] (Value): {@link
     * CreateDeliverySelectionChoiceRequestInput}. The delivery option to select for one choice
     * group when creating a delivery selection, with optional delivery instructions.
     */
    "choices": Array<CreateDeliverySelectionChoiceRequestInput>;
    /**
     * ID of the quote whose options to choose. The selection belongs to that quote's checkout
     * session. minLength: 1. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     */
    "delivery_quote_id": string;
    /**
     * Destination address for shipment or local delivery. When sent, it must be a complete
     * address. When omitted, Flint keeps the quote's address, even when partial; missing members
     * appear in input_requirements and must be supplied before payment. A complete postal address.
     * State and postal_code are required for US addresses and optional for other countries. Send
     * null or omit line2, state, and postal_code when the address has none.
     */
    "destination_address"?: AddressRequestInput;
    /**
     * Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no
     * assertion, send null to assert that no selection exists, or send an ID to assert that it is
     * current. minLength: 1. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "expected_delivery_selection_id"?: string | null;
    /**
     * Requires a merchant credential with delivery-write scope. Merchant-created cart reservations
     * to adopt atomically into the selection hold at the selected inventory items and locations.
     * Only matching held units are released; unused units stay held, and any remaining demand uses
     * available stock. At most 100 unique IDs. Explicit IDs, including an empty array, replace the
     * session binding for this request. When omitted, both merchant and buyer requests use
     * eligible session-bound holds; ineligible bound holds are silently skipped. First adopter
     * wins when sessions share a hold. Ineligible explicit IDs are refused as not found. maxItems:
     * 100. [] (Value): string. minLength: 1. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_ids"?: Array<string>;
    /**
     * Recipient details the chosen options ask for. Missing required fields are returned in
     * input_requirements and must be supplied before payment. Recipient details you supply with a
     * delivery selection or subscription delivery: optional `name`, `email`, and `phone`.
     */
    "recipient"?: DeliverySelectionRecipientRequestInput;
};
/** The request body for: Create delivery zone. */
export type CreateDeliveryZoneRequest = {
    /**
     * The settings that define this resource. Changing them publishes a new revision. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "configuration": DeliveryZoneConfigurationRequest;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing name. minLength: 1. */
    "name": string;
};
/** The request body for: Create delivery zone. */
export type CreateDeliveryZoneRequestInput = {
    /**
     * The settings that define this resource. Changing them publishes a new revision. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "configuration": DeliveryZoneConfigurationRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Merchant-facing name. minLength: 1. */
    "name": string;
};
/** The request body for: Create demo session. */
export type CreateDemoSessionRequestInput = {
    /**
     * Omit to use quickstart. An explicit empty or unsupported template is invalid. Default:
     * "quickstart". Value enum: "quickstart".
     */
    "template"?: "quickstart";
};
/**
 * The created sandbox is the primary resource, with the API key and one-time secret_key when
 * issue_test_key is true.
 */
export type CreateDeveloperSandboxResult = {
    /**
     * The newly issued test API key. Present exactly when issue_test_key is true. A credential
     * used to authenticate API requests.
     */
    "api_key"?: APIKey;
    /** An isolated environment for testing an integration. */
    "sandbox": Sandbox;
    /** The one-time secret for api_key. Present exactly when issue_test_key is true. */
    "secret_key"?: string;
};
/** The request body for: Create device. */
export type CreateDeviceRequest = {
    /**
     * Stable hardware identity. Must have no leading or trailing whitespace and is compared
     * exactly, including case and accents. Only one active device in this merchant and environment
     * can hold it. minLength: 1. maxLength: 255.
     */
    "hardware_fingerprint"?: string;
    /**
     * An active Location to assign the device to. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Name for the device, such as Front register. minLength: 1. */
    "name": string;
};
/** The request body for: Create device. */
export type CreateDeviceRequestInput = {
    /**
     * Stable hardware identity. Must have no leading or trailing whitespace and is compared
     * exactly, including case and accents. Only one active device in this merchant and environment
     * can hold it. minLength: 1. maxLength: 255.
     */
    "hardware_fingerprint"?: string;
    /**
     * An active Location to assign the device to. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Name for the device, such as Front register. minLength: 1. */
    "name": string;
};
/** Digital fulfillment details you supply when creating a fulfillment: the delivery URL. */
export type CreateDigitalFulfillmentDetails = {
    /** URL where the recipient can access the delivered digital goods. minLength: 1. */
    "delivery_url"?: string;
};
/** Digital fulfillment details you supply when creating a fulfillment: the delivery URL. */
export type CreateDigitalFulfillmentDetailsInput = CreateDigitalFulfillmentDetails;
/** The request body for: Request a customer email change; Request an email change. */
export type CreateEmailChangeRequest = {
    /**
     * The address to change the email to. Flint emails a six-digit code to it. Format: email.
     * minLength: 1. maxLength: 320. Example: "buyer@example.com".
     */
    "new_email": string;
};
/** The request body for: Request a customer email change; Request an email change. */
export type CreateEmailChangeRequestInput = CreateEmailChangeRequest;
/**
 * The `bug` variant of `CreateFeedbackReportRequest`. The `feature_request` variant of
 * `CreateFeedbackReportRequest`. The `other` variant of `CreateFeedbackReportRequest`. The
 * `papercut` variant of `CreateFeedbackReportRequest`. The `praise` variant of
 * `CreateFeedbackReportRequest`.
 */
export type CreateFeedbackReportNarrative = ({
    /**
     * Optional observed outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "actual_behavior"?: string;
    /**
     * Dotted or hyphenated canonical command name, such as payment-intents.create. Limited to 200
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 200. pattern: ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * One file path relative to your repository root, optionally followed by `:line` or
     * `:line:column`, such as `src/sync/products.ts:42`. Absolute paths, `..` segments, and
     * backslashes are rejected. Limited to 500 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Optional feature or subsystem within the product. Limited to 128 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 128.
     */
    "component"?: string;
    /**
     * Optional details about the feedback. Limited to 8000 characters (Unicode code points),
     * counted before whitespace and line-ending normalization. minLength: 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Optional desired outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "expected_behavior"?: string;
    /**
     * Classification of the feedback. Value enum: "papercut", "bug", "feature_request", "praise",
     * "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other" | (string & {});
    /**
     * Flint request ID associated with this feedback. Limited to 255 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 255. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "related_request_id"?: string;
    /**
     * Flint IDs of the resources this feedback is about, at most 20 and all different. Flint
     * checks only that each ID has the format of a Flint resource ID, not that the resource exists
     * or that you can read it. maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "related_resource_ids"?: Array<string>;
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent". */
    "reporter_kind"?: "human" | "ai_agent" | (string & {});
    /**
     * Tool submitting the feedback, independently of the product being discussed. Its name is
     * required when present. The client that submits a feedback report, with its name, platform,
     * version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClient;
    /**
     * Unique steps in reproduction order, with at most 20 entries. maxItems: 20. uniqueItems:
     * true. [] (Value): string. Limited to 1000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Positive, negative, or neutral assessment. Required for rating feedback; optional for
     * narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral" | (string & {});
    /**
     * Brief account of the feedback. Required for every kind except rating; optional for a rating.
     * Limited to 200 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 200.
     */
    "summary": string;
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /**
     * A public API route template exactly as the API reference shows it, such as
     * `/v1/orders/{order_id}`, with no host, query string, or real IDs. Omit it for feedback that
     * isn't about an API route; any other value returns `400 INVALID_REQUEST`. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ({
    /** Value enum: "papercut", "bug", "feature_request", "praise", "other". */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other" | (string & {});
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /**
     * Brief account of the feedback. Required for every kind except rating; optional for a rating.
     * Limited to 200 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 200.
     */
    "summary": string;
});
/**
 * The `bug` variant of `CreateFeedbackReportRequest`. The `feature_request` variant of
 * `CreateFeedbackReportRequest`. The `other` variant of `CreateFeedbackReportRequest`. The
 * `papercut` variant of `CreateFeedbackReportRequest`. The `praise` variant of
 * `CreateFeedbackReportRequest`.
 */
export type CreateFeedbackReportNarrativeInput = ({
    /**
     * Optional observed outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "actual_behavior"?: string;
    /**
     * Dotted or hyphenated canonical command name, such as payment-intents.create. Limited to 200
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 200. pattern: ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * One file path relative to your repository root, optionally followed by `:line` or
     * `:line:column`, such as `src/sync/products.ts:42`. Absolute paths, `..` segments, and
     * backslashes are rejected. Limited to 500 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Optional feature or subsystem within the product. Limited to 128 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 128.
     */
    "component"?: string;
    /**
     * Optional details about the feedback. Limited to 8000 characters (Unicode code points),
     * counted before whitespace and line-ending normalization. minLength: 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Optional desired outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "expected_behavior"?: string;
    /**
     * Classification of the feedback. Value enum: "papercut", "bug", "feature_request", "praise",
     * "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other";
    /**
     * Flint request ID associated with this feedback. Limited to 255 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 255. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "related_request_id"?: string;
    /**
     * Flint IDs of the resources this feedback is about, at most 20 and all different. Flint
     * checks only that each ID has the format of a Flint resource ID, not that the resource exists
     * or that you can read it. maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "related_resource_ids"?: Array<string>;
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent". */
    "reporter_kind"?: "human" | "ai_agent";
    /**
     * Tool submitting the feedback, independently of the product being discussed. Its name is
     * required when present. The client that submits a feedback report, with its name, platform,
     * version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClientRequestInput;
    /**
     * Unique steps in reproduction order, with at most 20 entries. maxItems: 20. uniqueItems:
     * true. [] (Value): string. Limited to 1000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Positive, negative, or neutral assessment. Required for rating feedback; optional for
     * narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral";
    /**
     * Brief account of the feedback. Required for every kind except rating; optional for a rating.
     * Limited to 200 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 200.
     */
    "summary": string;
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other";
    /**
     * A public API route template exactly as the API reference shows it, such as
     * `/v1/orders/{order_id}`, with no host, query string, or real IDs. Omit it for feedback that
     * isn't about an API route; any other value returns `400 INVALID_REQUEST`. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ({
    /** Value enum: "papercut", "bug", "feature_request", "praise", "other". */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other";
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other";
    /**
     * Brief account of the feedback. Required for every kind except rating; optional for a rating.
     * Limited to 200 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 200.
     */
    "summary": string;
});
/** The `rating` variant of `CreateFeedbackReportRequest`. */
export type CreateFeedbackReportRating = ({
    /**
     * Optional observed outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "actual_behavior"?: string;
    /**
     * Dotted or hyphenated canonical command name, such as payment-intents.create. Limited to 200
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 200. pattern: ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * One file path relative to your repository root, optionally followed by `:line` or
     * `:line:column`, such as `src/sync/products.ts:42`. Absolute paths, `..` segments, and
     * backslashes are rejected. Limited to 500 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Optional feature or subsystem within the product. Limited to 128 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 128.
     */
    "component"?: string;
    /**
     * Optional details about the feedback. Limited to 8000 characters (Unicode code points),
     * counted before whitespace and line-ending normalization. minLength: 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Optional desired outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "expected_behavior"?: string;
    /** Classification of the feedback. Value enum: "rating". */
    "kind": "rating" | (string & {});
    /**
     * Flint request ID associated with this feedback. Limited to 255 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 255. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "related_request_id"?: string;
    /**
     * Flint IDs of the resources this feedback is about, at most 20 and all different. Flint
     * checks only that each ID has the format of a Flint resource ID, not that the resource exists
     * or that you can read it. maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "related_resource_ids"?: Array<string>;
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent". */
    "reporter_kind"?: "human" | "ai_agent" | (string & {});
    /**
     * Tool submitting the feedback, independently of the product being discussed. Its name is
     * required when present. The client that submits a feedback report, with its name, platform,
     * version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClient;
    /**
     * Unique steps in reproduction order, with at most 20 entries. maxItems: 20. uniqueItems:
     * true. [] (Value): string. Limited to 1000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Positive, negative, or neutral assessment. Required for rating feedback; optional for
     * narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral" | (string & {});
    /**
     * Brief account of the feedback. Required for every kind except rating; optional for a rating.
     * Limited to 200 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /**
     * A public API route template exactly as the API reference shows it, such as
     * `/v1/orders/{order_id}`, with no host, query string, or real IDs. Omit it for feedback that
     * isn't about an API route; any other value returns `400 INVALID_REQUEST`. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ({
    /** Value enum: "rating". */
    "kind": "rating" | (string & {});
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /**
     * Positive, negative, or neutral assessment. Required for rating feedback; optional for
     * narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral" | (string & {});
});
/** The `rating` variant of `CreateFeedbackReportRequest`. */
export type CreateFeedbackReportRatingInput = ({
    /**
     * Optional observed outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "actual_behavior"?: string;
    /**
     * Dotted or hyphenated canonical command name, such as payment-intents.create. Limited to 200
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 200. pattern: ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * One file path relative to your repository root, optionally followed by `:line` or
     * `:line:column`, such as `src/sync/products.ts:42`. Absolute paths, `..` segments, and
     * backslashes are rejected. Limited to 500 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Optional feature or subsystem within the product. Limited to 128 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 128.
     */
    "component"?: string;
    /**
     * Optional details about the feedback. Limited to 8000 characters (Unicode code points),
     * counted before whitespace and line-ending normalization. minLength: 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Optional desired outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "expected_behavior"?: string;
    /** Classification of the feedback. Value enum: "rating". */
    "kind": "rating";
    /**
     * Flint request ID associated with this feedback. Limited to 255 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 255. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "related_request_id"?: string;
    /**
     * Flint IDs of the resources this feedback is about, at most 20 and all different. Flint
     * checks only that each ID has the format of a Flint resource ID, not that the resource exists
     * or that you can read it. maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "related_resource_ids"?: Array<string>;
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent". */
    "reporter_kind"?: "human" | "ai_agent";
    /**
     * Tool submitting the feedback, independently of the product being discussed. Its name is
     * required when present. The client that submits a feedback report, with its name, platform,
     * version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClientRequestInput;
    /**
     * Unique steps in reproduction order, with at most 20 entries. maxItems: 20. uniqueItems:
     * true. [] (Value): string. Limited to 1000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Positive, negative, or neutral assessment. Required for rating feedback; optional for
     * narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral";
    /**
     * Brief account of the feedback. Required for every kind except rating; optional for a rating.
     * Limited to 200 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other";
    /**
     * A public API route template exactly as the API reference shows it, such as
     * `/v1/orders/{order_id}`, with no host, query string, or real IDs. Omit it for feedback that
     * isn't about an API route; any other value returns `400 INVALID_REQUEST`. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ({
    /** Value enum: "rating". */
    "kind": "rating";
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other";
    /**
     * Positive, negative, or neutral assessment. Required for rating feedback; optional for
     * narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral";
});
/** The request body for: Create a feedback report. */
export type CreateFeedbackReportRequest = ({
    /**
     * Optional observed outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "actual_behavior"?: string;
    /**
     * Dotted or hyphenated canonical command name, such as payment-intents.create. Limited to 200
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 200. pattern: ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * One file path relative to your repository root, optionally followed by `:line` or
     * `:line:column`, such as `src/sync/products.ts:42`. Absolute paths, `..` segments, and
     * backslashes are rejected. Limited to 500 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Optional feature or subsystem within the product. Limited to 128 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 128.
     */
    "component"?: string;
    /**
     * Optional details about the feedback. Limited to 8000 characters (Unicode code points),
     * counted before whitespace and line-ending normalization. minLength: 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Optional desired outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "expected_behavior"?: string;
    /**
     * Classification of the feedback. Value enum: "papercut", "bug", "feature_request", "rating",
     * "praise", "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "rating" | "praise" | "other" | (string & {});
    /**
     * Flint request ID associated with this feedback. Limited to 255 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 255. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "related_request_id"?: string;
    /**
     * Flint IDs of the resources this feedback is about, at most 20 and all different. Flint
     * checks only that each ID has the format of a Flint resource ID, not that the resource exists
     * or that you can read it. maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "related_resource_ids"?: Array<string>;
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent". */
    "reporter_kind"?: "human" | "ai_agent" | (string & {});
    /**
     * Tool submitting the feedback, independently of the product being discussed. Its name is
     * required when present. The client that submits a feedback report, with its name, platform,
     * version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClient;
    /**
     * Unique steps in reproduction order, with at most 20 entries. maxItems: 20. uniqueItems:
     * true. [] (Value): string. Limited to 1000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Positive, negative, or neutral assessment. Required for rating feedback; optional for
     * narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral" | (string & {});
    /**
     * Brief account of the feedback. Required for every kind except rating; optional for a rating.
     * Limited to 200 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other"
        | (string & {});
    /**
     * A public API route template exactly as the API reference shows it, such as
     * `/v1/orders/{order_id}`, with no host, query string, or real IDs. Omit it for feedback that
     * isn't about an API route; any other value returns `400 INVALID_REQUEST`. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ((Exclude<CreateFeedbackReportRating & object, readonly unknown[]>)
    | (Exclude<CreateFeedbackReportNarrative & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The request body for: Create a feedback report. */
export type CreateFeedbackReportRequestInput = ({
    /**
     * Optional observed outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "actual_behavior"?: string;
    /**
     * Dotted or hyphenated canonical command name, such as payment-intents.create. Limited to 200
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 200. pattern: ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * One file path relative to your repository root, optionally followed by `:line` or
     * `:line:column`, such as `src/sync/products.ts:42`. Absolute paths, `..` segments, and
     * backslashes are rejected. Limited to 500 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Optional feature or subsystem within the product. Limited to 128 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 128.
     */
    "component"?: string;
    /**
     * Optional details about the feedback. Limited to 8000 characters (Unicode code points),
     * counted before whitespace and line-ending normalization. minLength: 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Optional desired outcome. Limited to 4000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     */
    "expected_behavior"?: string;
    /**
     * Classification of the feedback. Value enum: "papercut", "bug", "feature_request", "rating",
     * "praise", "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "rating" | "praise" | "other";
    /**
     * Flint request ID associated with this feedback. Limited to 255 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 255. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "related_request_id"?: string;
    /**
     * Flint IDs of the resources this feedback is about, at most 20 and all different. Flint
     * checks only that each ID has the format of a Flint resource ID, not that the resource exists
     * or that you can read it. maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "related_resource_ids"?: Array<string>;
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent". */
    "reporter_kind"?: "human" | "ai_agent";
    /**
     * Tool submitting the feedback, independently of the product being discussed. Its name is
     * required when present. The client that submits a feedback report, with its name, platform,
     * version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClientRequestInput;
    /**
     * Unique steps in reproduction order, with at most 20 entries. maxItems: 20. uniqueItems:
     * true. [] (Value): string. Limited to 1000 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Positive, negative, or neutral assessment. Required for rating feedback; optional for
     * narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral";
    /**
     * Brief account of the feedback. Required for every kind except rating; optional for a rating.
     * Limited to 200 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Product being discussed, independently of how the report is submitted. Value enum: "api",
     * "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks",
     * "onboarding", "mobile", "other".
     */
    "surface": "api"
        | "cli"
        | "mcp"
        | "sdk"
        | "docs"
        | "dashboard"
        | "checkout"
        | "payment_links"
        | "webhooks"
        | "onboarding"
        | "mobile"
        | "other";
    /**
     * A public API route template exactly as the API reference shows it, such as
     * `/v1/orders/{order_id}`, with no host, query string, or real IDs. Omit it for feedback that
     * isn't about an API route; any other value returns `400 INVALID_REQUEST`. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ((Exclude<CreateFeedbackReportRatingInput & object, readonly unknown[]>)
    | (Exclude<CreateFeedbackReportNarrativeInput & object, readonly unknown[]>));
/** The request body for: Create a file. */
export type CreateFileRequest = {
    /**
     * Media type of the image you will upload. Value enum: "image/jpeg", "image/png",
     * "image/webp".
     */
    "content_type": "image/jpeg" | "image/png" | "image/webp" | (string & {});
    /**
     * What the image will be used for. Creating or completing merchant_logo and merchant_icon
     * files changes shared branding and requires a live-mode credential or a Dashboard session in
     * any selected environment. Test credentials receive 403 FORBIDDEN with reason
     * live_mode_required. Partner install tokens need the purpose's scope too; merchant_logo and
     * merchant_icon need merchants.profile.write and a live install token. Value enum: "product",
     * "product_variant", "bundle", "payment_link", "subscription_plan", "merchant_logo",
     * "merchant_icon".
     */
    "purpose": "product"
        | "product_variant"
        | "bundle"
        | "payment_link"
        | "subscription_plan"
        | "merchant_logo"
        | "merchant_icon"
        | (string & {});
    /**
     * Size of the image you will upload, in bytes, from 1 to 5,242,880 (5 MiB). Format: int64.
     * minimum: 1. maximum: 5242880.
     */
    "size_bytes": number;
};
/** The request body for: Create a file. */
export type CreateFileRequestInput = {
    /**
     * Media type of the image you will upload. Value enum: "image/jpeg", "image/png",
     * "image/webp".
     */
    "content_type": "image/jpeg" | "image/png" | "image/webp";
    /**
     * What the image will be used for. Creating or completing merchant_logo and merchant_icon
     * files changes shared branding and requires a live-mode credential or a Dashboard session in
     * any selected environment. Test credentials receive 403 FORBIDDEN with reason
     * live_mode_required. Partner install tokens need the purpose's scope too; merchant_logo and
     * merchant_icon need merchants.profile.write and a live install token. Value enum: "product",
     * "product_variant", "bundle", "payment_link", "subscription_plan", "merchant_logo",
     * "merchant_icon".
     */
    "purpose": "product"
        | "product_variant"
        | "bundle"
        | "payment_link"
        | "subscription_plan"
        | "merchant_logo"
        | "merchant_icon";
    /**
     * Size of the image you will upload, in bytes, from 1 to 5,242,880 (5 MiB). Format: int64.
     * minimum: 1. maximum: 5242880.
     */
    "size_bytes": number;
};
/** The request body for: Create fulfillment event. */
export type CreateFulfillmentEventRequest = {
    /** Free-form details attached to the event. * (Value): string. minLength: 1. */
    "custom_details"?: Record<string, string>;
    /** What kind of event this records. Value enum: "carrier_scan", "custom". */
    "event_type": "carrier_scan" | "custom" | (string & {});
    /**
     * Event identifier assigned by that integration. Flint records a repeated pair of
     * `external_system` and `external_event_id` once. minLength: 1. Example: "warehouse-1842".
     */
    "external_event_id"?: string;
    /** Status supplied by that integration. minLength: 1. */
    "external_status"?: string;
    /** Integration that supplied the event. minLength: 1. */
    "external_system"?: string;
    /**
     * Fulfillment that owns this event. minLength: 1. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id": string;
    /** Where the event happened, such as `Louisville, KY`. minLength: 1. */
    "location_description"?: string;
    /** Human-readable text describing the event. minLength: 1. */
    "message"?: string;
    /**
     * Provider event timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /**
     * Nested package associated with this observational event. Flint resolves and validates its
     * shipment and fulfillment ownership. minLength: 1. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     */
    "package_id"?: string;
    /**
     * Nested shipment associated with this observational event. Flint validates that it belongs to
     * fulfillment_id. minLength: 1. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: string;
};
/** The request body for: Create fulfillment event. */
export type CreateFulfillmentEventRequestInput = {
    /** Free-form details attached to the event. * (Value): string. minLength: 1. */
    "custom_details"?: Record<string, string>;
    /** What kind of event this records. Value enum: "carrier_scan", "custom". */
    "event_type": "carrier_scan" | "custom";
    /**
     * Event identifier assigned by that integration. Flint records a repeated pair of
     * `external_system` and `external_event_id` once. minLength: 1. Example: "warehouse-1842".
     */
    "external_event_id"?: string;
    /** Status supplied by that integration. minLength: 1. */
    "external_status"?: string;
    /** Integration that supplied the event. minLength: 1. */
    "external_system"?: string;
    /**
     * Fulfillment that owns this event. minLength: 1. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id": string;
    /** Where the event happened, such as `Louisville, KY`. minLength: 1. */
    "location_description"?: string;
    /** Human-readable text describing the event. minLength: 1. */
    "message"?: string;
    /**
     * Provider event timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Nested package associated with this observational event. Flint resolves and validates its
     * shipment and fulfillment ownership. minLength: 1. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     */
    "package_id"?: string;
    /**
     * Nested shipment associated with this observational event. Flint validates that it belongs to
     * fulfillment_id. minLength: 1. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: string;
};
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequest = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Paid order whose quantities this fulfillment delivers. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /**
     * The kind of fulfillment. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service".
     */
    "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
})
    & ((Exclude<CreateFulfillmentRequestShipment & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestPickup & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestLocalDelivery & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestDigital & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestService & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestDigital = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Paid order whose quantities this fulfillment delivers. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** The kind of fulfillment. Value enum: "digital". */
    "type": "digital" | (string & {});
});
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestDigitalInput = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Paid order whose quantities this fulfillment delivers. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** The kind of fulfillment. Value enum: "digital". */
    "type": "digital";
})
    & (({
    "shipment"?: never;
}))
    & (({
    "pickup_details"?: never;
}))
    & (({
    "local_delivery_details"?: never;
}))
    & (({
    "service_details"?: never;
}));
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestInput = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Paid order whose quantities this fulfillment delivers. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /**
     * The kind of fulfillment. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service".
     */
    "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service";
})
    & ((Exclude<CreateFulfillmentRequestShipmentInput & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestPickupInput & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestLocalDeliveryInput & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestDigitalInput & object, readonly unknown[]>)
    | (Exclude<CreateFulfillmentRequestServiceInput & object, readonly unknown[]>));
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestLocalDelivery = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Paid order whose quantities this fulfillment delivers. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** The kind of fulfillment. Value enum: "local_delivery". */
    "type": "local_delivery" | (string & {});
});
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestLocalDeliveryInput = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Paid order whose quantities this fulfillment delivers. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** The kind of fulfillment. Value enum: "local_delivery". */
    "type": "local_delivery";
})
    & (({
    "shipment"?: never;
}))
    & (({
    "pickup_details"?: never;
}))
    & (({
    "digital_details"?: never;
}))
    & (({
    "service_details"?: never;
}));
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestPickup = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Paid order whose quantities this fulfillment delivers. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** The kind of fulfillment. Value enum: "pickup". */
    "type": "pickup" | (string & {});
});
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestPickupInput = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Paid order whose quantities this fulfillment delivers. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** The kind of fulfillment. Value enum: "pickup". */
    "type": "pickup";
})
    & (({
    "shipment"?: never;
}))
    & (({
    "local_delivery_details"?: never;
}))
    & (({
    "digital_details"?: never;
}))
    & (({
    "service_details"?: never;
}));
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestService = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Paid order whose quantities this fulfillment delivers. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** The kind of fulfillment. Value enum: "service". */
    "type": "service" | (string & {});
});
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestServiceInput = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Paid order whose quantities this fulfillment delivers. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** The kind of fulfillment. Value enum: "service". */
    "type": "service";
})
    & (({
    "shipment"?: never;
}))
    & (({
    "pickup_details"?: never;
}))
    & (({
    "local_delivery_details"?: never;
}))
    & (({
    "digital_details"?: never;
}));
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestShipment = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Paid order whose quantities this fulfillment delivers. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** The kind of fulfillment. Value enum: "shipment". */
    "type": "shipment" | (string & {});
});
/**
 * Provide at most one fulfillment details object: pickup_details, local_delivery_details,
 * digital_details, or service_details. Shipment execution details belong to shipments and
 * packages.
 */
export type CreateFulfillmentRequestShipmentInput = ({
    /**
     * Customer receiving this fulfillment, when one is set. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Device used for this fulfillment. It must be active. When location_id is also set, the
     * device must belong to that Location. minLength: 1. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Details of a `digital` fulfillment, such as the download link. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Order line items, with the quantity of each, that this fulfillment covers. minItems: 1. []
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Details of a `local_delivery` fulfillment, such as the courier's tracking link. Local
     * delivery details you supply when creating a fulfillment: courier, timing window,
     * instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /**
     * Merchant location responsible for this fulfillment. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Paid order whose quantities this fulfillment delivers. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Details of a `pickup` fulfillment. Pickup details you supply when creating a fulfillment:
     * the pickup address, location, window, instructions, and curbside details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Who receives the fulfillment. Recipient details you supply when creating or updating a
     * fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Details of a `service` fulfillment. Service details you supply when creating a fulfillment:
     * the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Creates an outbound shipment and packages atomically with a shipment fulfillment.
     * single_package assigns every submitted line quantity to package; itemized requires explicit
     * items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in
     * the same call. Creates an outbound shipment with one package using `packaging:
     * single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`.
     * External reference and metadata are optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** The kind of fulfillment. Value enum: "shipment". */
    "type": "shipment";
})
    & (({
    "pickup_details"?: never;
}))
    & (({
    "local_delivery_details"?: never;
}))
    & (({
    "digital_details"?: never;
}))
    & (({
    "service_details"?: never;
}));
/** The request body for: Create a gift card funding disposition. */
export type CreateGiftCardFundingDispositionRequest = {
    /**
     * What the merchant decided about the card's value after the funding payment lost a dispute.
     * Default: "honor_value". Value enum: "honor_value".
     */
    "disposition"?: "honor_value" | (string & {});
    /**
     * The lost dispute on the payment that funded the gift card value. minLength: 1. pattern:
     * ^du_[0-9A-HJKMNP-TV-Z]{26}$. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     */
    "dispute_id": string;
    /**
     * Your reason for honoring the gift card value despite the confirmed funding loss. minLength:
     * 1. maxLength: 200.
     */
    "reason_message": string;
};
/** The request body for: Create a gift card funding disposition. */
export type CreateGiftCardFundingDispositionRequestInput = {
    /**
     * What the merchant decided about the card's value after the funding payment lost a dispute.
     * Default: "honor_value". Value enum: "honor_value".
     */
    "disposition"?: "honor_value";
    /**
     * The lost dispute on the payment that funded the gift card value. minLength: 1. pattern:
     * ^du_[0-9A-HJKMNP-TV-Z]{26}$. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     */
    "dispute_id": string;
    /**
     * Your reason for honoring the gift card value despite the confirmed funding loss. minLength:
     * 1. maxLength: 200.
     */
    "reason_message": string;
};
/** The request body for: Load a gift card. */
export type CreateGiftCardLoadRequest = ({
    /**
     * What the buyer paid for the value, separate from `value_money`. `null` when no payment
     * amount is recorded. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. anyOf[1].amount (Required): integer
     * string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. Amount in the currency's minor unit, such as cents for USD. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * anyOf[1].currency (Required): string. ISO 4217 currency code for this amount. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     */
    "consideration_money"?: ((({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 0.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>))
        | (null)
        | (unknown));
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_gift_card_version"?: number;
    /** The gift card to load. minLength: 1. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id": string;
    /**
     * Where the value came from, with your reference for it. Where the value of a gift card load
     * came from, such as an external payment, a Flint payment, an import, or an adjustment, with
     * your reference for it. funding_source_type (Required): string. Where the value came from.
     * Value enum: "external_payment", "flint_payment", "import". customer_id (Optional): string.
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id (Required): string. Your reference
     * for the payment or import record that funded this value, such as a POS sale ID. Required; 1
     * to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842". order_id
     * (Optional): string. ID of the order that funded the value. Required for
     * `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`.
     * minLength: 1. maxLength: 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * order_manual_payment_id (Optional): string. ID of the manual payment on the order that
     * funded the value. Required for `flint_manual_payment`. minLength: 1. maxLength: 255.
     * Example: "omp_01KEZF7C007J18203RBJKB9TYE". payment_intent_id (Optional): string. The
     * original payment for flint_payment or store_credit value. For standalone paid funding, use a
     * captured payment intent without an order_id. Order-linked payments fund purchased cards or
     * store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". refund_id (Optional): string. Refund that issued this
     * value. Present only when funding_source_type is store_credit. minLength: 1. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". oneOf[1] (Value): {@link
     * GiftCardFundingSourceExternalPayment}. The `external_payment` variant of
     * `GiftCardFundingSource`. oneOf[2] (Value): {@link GiftCardFundingSourceFlintPayment}. The
     * `flint_payment` variant of `GiftCardFundingSource`. oneOf[3] (Value): {@link
     * GiftCardFundingSourceFlintManualPayment}. The `flint_manual_payment` variant of
     * `GiftCardFundingSource`. oneOf[4] (Value): {@link GiftCardFundingSourceImport}. The `import`
     * variant of `GiftCardFundingSource`. oneOf[5] (Value): {@link
     * GiftCardFundingSourceAdjustment}. The `adjustment` variant of `GiftCardFundingSource`.
     * oneOf[6] (Value): {@link GiftCardFundingSourceGiftCardRefund}. The `gift_card_refund`
     * variant of `GiftCardFundingSource`. oneOf[7] (Value): {@link
     * GiftCardFundingSourceGiftCardPurchaseRefundRecovery}. The
     * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. oneOf[8] (Value):
     * {@link GiftCardFundingSourceStoreCredit}. The `store_credit` variant of
     * `GiftCardFundingSource`.
     */
    "source": ({
        /** Value enum: "external_payment", "flint_payment", "import". */
        "funding_source_type"?: unknown;
    })
        & (Exclude<GiftCardFundingSource & object, readonly unknown[]>);
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "source_created_at"?: string;
    /**
     * The face value the load adds to the card. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "value_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
});
/** The request body for: Load a gift card. */
export type CreateGiftCardLoadRequestInput = ({
    /**
     * What the buyer paid for the value, separate from `value_money`. `null` when no payment
     * amount is recorded. anyOf[1] (Value): {@link MoneyValueInput}. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. anyOf[1].amount (Required): integer
     * string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. Amount in the currency's minor unit, such as cents for USD. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * anyOf[1].currency (Required): string. ISO 4217 currency code for this amount. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     */
    "consideration_money"?: ((({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 0.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>))
        | (null));
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_gift_card_version"?: number;
    /** The gift card to load. minLength: 1. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id": string;
    /**
     * Where the value came from, with your reference for it. Where the value of a gift card load
     * came from, such as an external payment, a Flint payment, an import, or an adjustment, with
     * your reference for it. funding_source_type (Required): string. Where the value came from.
     * Value enum: "external_payment", "flint_payment", "import". customer_id (Optional): string.
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id (Required): string. Your reference
     * for the payment or import record that funded this value, such as a POS sale ID. Required; 1
     * to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842". order_id
     * (Optional): string. ID of the order that funded the value. Required for
     * `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`.
     * minLength: 1. maxLength: 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent_id
     * (Optional): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". oneOf[1] (Value): {@link
     * GiftCardFundingSourceExternalPaymentRequestInput}. The `external_payment` variant of
     * `GiftCardFundingSource`. oneOf[2] (Value): {@link
     * GiftCardFundingSourceFlintPaymentRequestInput}. The `flint_payment` variant of
     * `GiftCardFundingSource`. oneOf[3] (Value): {@link
     * GiftCardFundingSourceFlintManualPaymentRequestInput}. The `flint_manual_payment` variant of
     * `GiftCardFundingSource`. oneOf[4] (Value): {@link GiftCardFundingSourceImportRequestInput}.
     * The `import` variant of `GiftCardFundingSource`. oneOf[5] (Value): {@link
     * GiftCardFundingSourceAdjustmentRequestInput}. The `adjustment` variant of
     * `GiftCardFundingSource`. oneOf[6] (Value): {@link
     * GiftCardFundingSourceGiftCardRefundRequestInput}. The `gift_card_refund` variant of
     * `GiftCardFundingSource`. oneOf[7] (Value): {@link
     * GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequestInput}. The
     * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. oneOf[8] (Value):
     * {@link GiftCardFundingSourceStoreCreditRequestInput}. The `store_credit` variant of
     * `GiftCardFundingSource`.
     */
    "source": ({
        /** Value enum: "external_payment", "flint_payment", "import". */
        "funding_source_type"?: "external_payment" | "flint_payment" | "import";
    })
        & (Exclude<GiftCardFundingSourceRequestInput & object, readonly unknown[]>)
        & ({
        "order_manual_payment_id"?: never;
    });
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "source_created_at"?: string | globalThis.Date;
    /**
     * The face value the load adds to the card. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "value_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
});
/**
 * The result of loading a gift card: the updated gift card, the gift card load, and the
 * transactions it created.
 */
export type CreateGiftCardLoadResult = {
    /**
     * The gift card after the command. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * The load the command created. Top-level child of a gift card. Value and consideration are
     * separate. External funding and import provenance are merchant-attested; no payment is
     * collected by recording them. Replacement refund lots retain original funding provenance and
     * do not represent new paid funding.
     */
    "gift_card_load": GiftCardLoad;
    /**
     * The transactions the command posted to the card. [] (Value): {@link GiftCardTransaction}.
     * Immutable posted financial movement with signed amount, per-card sequence, merchant sequence
     * and balance snapshots. Corrections create new transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/** A response containing `CreateGiftCardLoadResult` data. */
export type CreateGiftCardLoadResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The result of loading a
     * gift card: the updated gift card, the gift card load, and the transactions it created.
     */
    "data": CreateGiftCardLoadResult;
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
/** The request body for: Send a gift card notification. */
export type CreateGiftCardNotificationRequest = {
    /**
     * ID of the gift card the notification is about. minLength: 1. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Who the notification is sent to. Who receives a gift card notification: their `email`,
     * optional `name` and `message`, and an optional `send_at` time.
     */
    "recipient": GiftCardPurchaseRecipient;
    /**
     * ID of the earlier notification this one sends again. minLength: 1. Example:
     * "ntf_01KEZF7C00X0DP9KT950FYXHQ1".
     */
    "resend_of_notification_id"?: string;
};
/** The request body for: Send a gift card notification. */
export type CreateGiftCardNotificationRequestInput = {
    /**
     * ID of the gift card the notification is about. minLength: 1. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Who the notification is sent to. Who receives a gift card notification: their `email`,
     * optional `name` and `message`, and an optional `send_at` time.
     */
    "recipient": GiftCardNotificationRecipientInput;
    /**
     * ID of the earlier notification this one sends again. minLength: 1. Example:
     * "ntf_01KEZF7C00X0DP9KT950FYXHQ1".
     */
    "resend_of_notification_id"?: string;
};
/** The request body for: Redeem gift card value. */
export type CreateGiftCardRedemptionRequest = ({
    /**
     * The amount to redeem from the card. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "automatic", "manual".
     */
    "capture_mode": "automatic" | "manual" | (string & {});
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_gift_card_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * ID of the gift card the value is spent from. minLength: 1. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The
     * value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & ((Exclude<CreateGiftCardRedemptionRequestAutomatic & object, readonly unknown[]>)
    | (Exclude<CreateGiftCardRedemptionRequestManual & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `automatic` variant of `CreateGiftCardRedemptionRequest`. */
export type CreateGiftCardRedemptionRequestAutomatic = ({
    /**
     * The amount to redeem from the card. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "automatic".
     */
    "capture_mode": "automatic" | (string & {});
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_gift_card_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * ID of the gift card the value is spent from. minLength: 1. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The
     * value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & (({
    /**
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "automatic".
     */
    "capture_mode": unknown;
}));
/** The `automatic` variant of `CreateGiftCardRedemptionRequest`. */
export type CreateGiftCardRedemptionRequestAutomaticInput = ({
    /**
     * The amount to redeem from the card. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "automatic".
     */
    "capture_mode": "automatic";
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_gift_card_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string | globalThis.Date;
    /**
     * ID of the gift card the value is spent from. minLength: 1. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The
     * value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & (({
    /**
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "automatic".
     */
    "capture_mode": ("automatic") & ("automatic");
})
    & ({
    "expires_at"?: never;
}));
/** The request body for: Redeem gift card value. */
export type CreateGiftCardRedemptionRequestInput = ({
    /**
     * The amount to redeem from the card. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "automatic", "manual".
     */
    "capture_mode": "automatic" | "manual";
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_gift_card_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string | globalThis.Date;
    /**
     * ID of the gift card the value is spent from. minLength: 1. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The
     * value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & ((Exclude<CreateGiftCardRedemptionRequestAutomaticInput & object, readonly unknown[]>)
    | (Exclude<CreateGiftCardRedemptionRequestManualInput & object, readonly unknown[]>));
/** The `manual` variant of `CreateGiftCardRedemptionRequest`. */
export type CreateGiftCardRedemptionRequestManual = ({
    /**
     * The amount to redeem from the card. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "manual".
     */
    "capture_mode": "manual" | (string & {});
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_gift_card_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * ID of the gift card the value is spent from. minLength: 1. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The
     * value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & ({
    /**
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "manual".
     */
    "capture_mode": unknown;
});
/** The `manual` variant of `CreateGiftCardRedemptionRequest`. */
export type CreateGiftCardRedemptionRequestManualInput = ({
    /**
     * The amount to redeem from the card. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "manual".
     */
    "capture_mode": "manual";
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_gift_card_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string | globalThis.Date;
    /**
     * ID of the gift card the value is spent from. minLength: 1. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The
     * value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & ({
    /**
     * Whether the redemption spends the value now or reserves it to capture later. Value enum:
     * "manual".
     */
    "capture_mode": ("manual") & ("manual");
});
/** The request body for: Create a gift card. */
export type CreateGiftCardRequest = {
    /**
     * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * Value enum: "USD".
     */
    "currency": "USD" | (string & {});
    /**
     * ID of the customer to associate with the card. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The card's initial value and where it came from. Omit it to create an unfunded `pending`
     * card. anyOf[1] (Value): {@link InitialGiftCardFunding}. The initial funding for a new gift
     * card: the `source` of the value, the `value_money`, and optional consideration and source
     * time. anyOf[2] (Value): null.
     */
    "funding"?: ((InitialGiftCardFunding) | (null));
    /**
     * Optional recipient notification recorded with issuance. Requires
     * commerce.gift_cards.secrets.write in addition to issuance authority. Who receives a gift
     * card notification: their `email`, optional `name` and `message`, and an optional `send_at`
     * time.
     */
    "notification"?: GiftCardPurchaseRecipient;
};
/** The request body for: Create a gift card. */
export type CreateGiftCardRequestInput = {
    /**
     * Existing gift card code, accepted only with funding.source.funding_source_type import. Must
     * contain 16 gift card alphabet characters after removing spaces and hyphens; O maps to 0 and
     * I/L to 1. The supplied code is never returned. minLength: 1. maxLength: 64.
     */
    "code"?: string;
    /**
     * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * Value enum: "USD".
     */
    "currency": "USD";
    /**
     * ID of the customer to associate with the card. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The card's initial value and where it came from. Omit it to create an unfunded `pending`
     * card. anyOf[1] (Value): {@link InitialGiftCardFundingInput}. The initial funding for a new
     * gift card: the `source` of the value, the `value_money`, and optional consideration and
     * source time. anyOf[2] (Value): null.
     */
    "funding"?: ((InitialGiftCardFundingInput) | (null));
    /**
     * Optional recipient notification recorded with issuance. Requires
     * commerce.gift_cards.secrets.write in addition to issuance authority. Who receives a gift
     * card notification: their `email`, optional `name` and `message`, and an optional `send_at`
     * time.
     */
    "notification"?: GiftCardNotificationRecipientInput;
};
/**
 * The result of creating a gift card: the card, its transactions, any load and notification, and
 * the code while it can still be recovered.
 */
export type CreateGiftCardResult = {
    /**
     * The full current code. Omitted after the 24-hour recovery window or when this code has been
     * replaced.
     */
    "code"?: string;
    /**
     * When recovery of this code expires. Omitted when the code cannot be recovered. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "code_recovery_expires_at"?: string;
    /**
     * The gift card after the command. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * The load the command created. Top-level child of a gift card. Value and consideration are
     * separate. External funding and import provenance are merchant-attested; no payment is
     * collected by recording them. Replacement refund lots retain original funding provenance and
     * do not represent new paid funding.
     */
    "gift_card_load"?: GiftCardLoad;
    /**
     * The notification the command created because the request included `notification`. Omitted
     * otherwise. A message sent to a gift card recipient.
     */
    "gift_card_notification"?: GiftCardNotification;
    /**
     * The transactions the command posted to the card. [] (Value): {@link GiftCardTransaction}.
     * Immutable posted financial movement with signed amount, per-card sequence, merchant sequence
     * and balance snapshots. Corrections create new transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/** A response containing `CreateGiftCardResult` data. */
export type CreateGiftCardResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The result of creating a
     * gift card: the card, its transactions, any load and notification, and the code while it can
     * still be recovered.
     */
    "data": CreateGiftCardResult;
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
 * A modifier group defined inline when creating a modifier set, with its selection limits,
 * modifiers or text rules, and display flags.
 */
export type CreateInlineModifierGroupRequestInput = {
    /** Whether buyers can select more than one unit of a list modifier. Default: false. */
    "allow_quantities"?: boolean;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Maximum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. Format: int64.
     */
    "max_quantity"?: number;
    /**
     * Maximum number of distinct modifiers buyers can select from a list group. Omit it for no
     * limit. A modifier set can override this value. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64.
     */
    "max_total_quantity"?: number;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Minimum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. Format: int64.
     */
    "min_quantity"?: number;
    /**
     * Minimum number of distinct modifiers buyers must select from a list group. Omit it to
     * require no selections. A modifier set can override this value. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Whether buyers choose from a list of modifiers or enter text. On create, inferred as text
     * when text configuration is supplied, otherwise list. Value enum: "list", "text".
     */
    "modifier_group_type"?: "list" | "text";
    /**
     * Choices in a list group. Only active modifiers whose set override's available is not false
     * are offered to buyers. Text groups do not have choices. [] (Value): {@link
     * CreateModifierRequestInput}. A modifier to create in a modifier group, with its name, price
     * change, tax category, and default selection.
     */
    "modifiers"?: Array<CreateModifierRequestInput>;
    /** Name of the modifier group shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Whether selections from this group appear in fulfillment details unless overridden for a
     * modifier set.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Whether selections from this group appear on buyer receipts unless overridden for a modifier
     * set.
     */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
     * archived groups remain readable and cannot be edited. Default: "active". Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Text entry rules for a text group. Use text.required to require a value; list groups use
     * min_selected instead. Settings for a text modifier group when creating or updating one:
     * required, multiline, and length limits.
     */
    "text"?: TextModifierConfigRequestInput;
};
/**
 * The `balance_transactions_itemized_v1` variant of `CreateReportRequest`. The
 * `gift_card_liability_v1` variant of `CreateReportRequest`. The `invoices_itemized_v1` variant of
 * `CreateReportRequest`. The `merchant_billing_itemized_v1` variant of `CreateReportRequest`. The
 * `orders_itemized_v1` variant of `CreateReportRequest`. The `orders_itemized_v2` variant of
 * `CreateReportRequest`. The `payments_itemized_v1` variant of `CreateReportRequest`. The
 * `payouts_itemized_v1` variant of `CreateReportRequest`. The `tax_itemized_v1` variant of
 * `CreateReportRequest`. The `tax_summarized_v1` variant of `CreateReportRequest`. The
 * `tax_transactions_itemized_v1` variant of `CreateReportRequest`. The
 * `tax_transactions_itemized_v2` variant of `CreateReportRequest`.
 */
export type CreateIntervalReportRequest = ({
    /**
     * Required only for receivables_aging_v1. Calendar date in timezone, YYYY-MM-DD, no later than
     * today. Balances are measured at the earlier of the end of that day and report creation.
     * Format: date. minLength: 1. Example: "2026-08-02".
     */
    "as_of_date"?: string;
    /**
     * Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1
     * supports USD only; other currencies return INVALID_REQUEST on currency. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Exclusive report interval end instant. Each report type matches its own occurrence time. At
     * most the same local time 366 calendar days after interval_start_at in timezone. Must not be
     * in the future. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_end_at": string;
    /**
     * Inclusive report interval start instant. Each report type matches its own occurrence time.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_start_at": string;
    /**
     * Which report to generate. The value names the row and the column version, such as
     * payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and
     * columns. Value enum: "invoices_itemized_v1", "gift_card_liability_v1", "orders_itemized_v1",
     * "orders_itemized_v2", "payments_itemized_v1", "balance_transactions_itemized_v1",
     * "payouts_itemized_v1", "tax_itemized_v1", "tax_summarized_v1",
     * "merchant_billing_itemized_v1", "tax_transactions_itemized_v1",
     * "tax_transactions_itemized_v2".
     */
    "report_type": "invoices_itemized_v1"
        | "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | "tax_transactions_itemized_v2"
        | (string & {});
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone. Defaults to the merchant's timezone, then UTC, and is saved
     * on the report at creation. minLength: 1.
     */
    "timezone"?: string;
});
/**
 * The `balance_transactions_itemized_v1` variant of `CreateReportRequest`. The
 * `gift_card_liability_v1` variant of `CreateReportRequest`. The `invoices_itemized_v1` variant of
 * `CreateReportRequest`. The `merchant_billing_itemized_v1` variant of `CreateReportRequest`. The
 * `orders_itemized_v1` variant of `CreateReportRequest`. The `orders_itemized_v2` variant of
 * `CreateReportRequest`. The `payments_itemized_v1` variant of `CreateReportRequest`. The
 * `payouts_itemized_v1` variant of `CreateReportRequest`. The `tax_itemized_v1` variant of
 * `CreateReportRequest`. The `tax_summarized_v1` variant of `CreateReportRequest`. The
 * `tax_transactions_itemized_v1` variant of `CreateReportRequest`. The
 * `tax_transactions_itemized_v2` variant of `CreateReportRequest`.
 */
export type CreateIntervalReportRequestInput = ({
    /**
     * Required only for receivables_aging_v1. Calendar date in timezone, YYYY-MM-DD, no later than
     * today. Balances are measured at the earlier of the end of that day and report creation.
     * Format: date. minLength: 1. Example: "2026-08-02".
     */
    "as_of_date"?: string;
    /**
     * Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1
     * supports USD only; other currencies return INVALID_REQUEST on currency. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Exclusive report interval end instant. Each report type matches its own occurrence time. At
     * most the same local time 366 calendar days after interval_start_at in timezone. Must not be
     * in the future. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_end_at": string | globalThis.Date;
    /**
     * Inclusive report interval start instant. Each report type matches its own occurrence time.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "interval_start_at": string | globalThis.Date;
    /**
     * Which report to generate. The value names the row and the column version, such as
     * payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and
     * columns. Value enum: "invoices_itemized_v1", "gift_card_liability_v1", "orders_itemized_v1",
     * "orders_itemized_v2", "payments_itemized_v1", "balance_transactions_itemized_v1",
     * "payouts_itemized_v1", "tax_itemized_v1", "tax_summarized_v1",
     * "merchant_billing_itemized_v1", "tax_transactions_itemized_v1",
     * "tax_transactions_itemized_v2".
     */
    "report_type": "invoices_itemized_v1"
        | "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | "tax_transactions_itemized_v2";
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone. Defaults to the merchant's timezone, then UTC, and is saved
     * on the report at creation. minLength: 1.
     */
    "timezone"?: string;
})
    & (({
    "as_of_date"?: never;
}));
/** The `condition_changed` variant of `CreateInventoryAdjustmentRequest`. */
export type CreateInventoryAdjustmentConditionChangeRequest = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. minItems: 1.
     * maxItems: 100. [] (Value): {@link InventoryAdjustmentConditionChangeLineRequest}. One line
     * of an inventory condition change: moves a `quantity` of an item at a Location from one
     * condition to another.
     */
    "lines": Array<InventoryAdjustmentConditionChangeLineRequest>;
    /**
     * Free-text note explaining the change. Required when `reason` is `correction`. minLength: 1.
     */
    "note"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /**
     * Why the stock changed. It decides which fields each line takes. Value enum:
     * "condition_changed".
     */
    "reason": "condition_changed" | (string & {});
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
