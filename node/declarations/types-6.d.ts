import type { DeliveryBuyerLocationRequest, DeliveryDistance, DeliveryBuyerLocationRequestInput } from './types-11.js';
import type { DeliveryPickupAvailabilityMaximumDistanceRequestInput } from './types-12.js';
import type {
    CreateDeliveryOptionsPreviewRequest,
    CreateDeliveryOptionsPreviewRequestInput,
    CreateDeliveryFulfillmentDetails,
    CreateDeliveryFulfillmentDetailsInput
} from './types-5.js';
import type { DeliveryProfileConfigurationRequest, DeliveryProfileConfigurationRequestInput } from './types-13.js';
import type { DeliveryRateCallbackConfiguration, DeliveryRateCallbackConfigurationInput } from './types-14.js';
import type {
    DeliverySelectionInstructionsRequest,
    DeliverySelectionInstructionsRequestInput,
    DeliverySelectionRecipientRequest,
    DeliverySelectionRecipientRequestInput,
    DeliveryZoneConfiguration,
    DeliveryZoneConfigurationInput
} from './types-15.js';
import type { AddressRequest, AddressRequestInput, APIKey } from './types-0.js';
import type { DeveloperSandbox } from './types-16.js';
import type {
    FeedbackReportingClient,
    FeedbackReportingClientInput,
    FulfillmentLineItemRequest,
    FulfillmentPackagingRequest,
    FulfillmentRecipientRequest,
    FulfillmentLineItemRequestInput,
    FulfillmentPackagingRequestInput,
    FulfillmentRecipientRequestInput
} from './types-17.js';
import type { CreatePickupFulfillmentDetails, CreatePickupFulfillmentDetailsInput } from './types-8.js';
import type { CreateServiceFulfillmentDetails, CreateServiceFulfillmentDetailsInput } from './types-9.js';
import type { GiftCardFundingSource, GiftCardFundingSourceInput, GiftCard } from './types-18.js';
import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type {
    GiftCardLoad,
    GiftCardTransaction,
    GiftCardPurchaseRecipient,
    GiftCardNotificationRecipientInput,
    GiftCardNotification
} from './types-19.js';
import type { ResponseMeta } from './types-40.js';
import type { InitialGiftCardFunding, InitialGiftCardFundingInput } from './types-23.js';
import type { CreateModifierRequestInput } from './types-7.js';
import type { TextModifierConfigRequestInput } from './types-47.js';
/**
 * Shape $ (Value): {@link CreateDeliveryPickupLocationsPreviewRequest}. The `pickup_locations`
 * variant of `CreateDeliveryPreviewRequest`.
 */
export type CreateDeliveryPickupLocationsPreviewRequest = {
    /**
     * Shape $ (Value): {@link DeliveryBuyerLocationRequest}. The buyer's location for pickup or
     * local delivery, supplied as an address or a coordinate, chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequest;
    /**
     * Shape $ (Value): string. Checkout session whose pickup locations to evaluate. Checkout
     * credentials must identify their own session. minLength: 1.
     */
    "checkout_session_id": string;
    /**
     * Shape $ (Value): string or null. ID of the checkout's current delivery selection, as GET
     * /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current returns it, or null
     * when there is none. Any other value returns 409 DELIVERY_PICKUP_AVAILABILITY_CHANGED. The
     * search does not change or release the selection. minLength: 1.
     */
    "expected_delivery_selection_id"?: string | null;
    /**
     * Shape $ (Value): {@link DeliveryDistance}. A maximum distance from the buyer location, as a
     * value and unit, that limits which pickup locations a preview returns.
     */
    "maximum_distance"?: DeliveryDistance;
    /**
     * Shape $ (Value): string. The delivery question this preview answers. - `pickup_locations`:
     * Lists the checkout session's pickup locations and whether each can supply its items. Value
     * enum: "pickup_locations".
     */
    "mode": "pickup_locations" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateDeliveryPickupLocationsPreviewRequestInput}. The
 * `pickup_locations` variant of `CreateDeliveryPreviewRequest`.
 */
export type CreateDeliveryPickupLocationsPreviewRequestInput = {
    /**
     * Shape $ (Value): {@link DeliveryBuyerLocationRequestInput}. The buyer's location for pickup
     * or local delivery, supplied as an address or a coordinate, chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequestInput;
    /**
     * Shape $ (Value): string. Checkout session whose pickup locations to evaluate. Checkout
     * credentials must identify their own session. minLength: 1.
     */
    "checkout_session_id": string;
    /**
     * Shape $ (Value): string or null. ID of the checkout's current delivery selection, as GET
     * /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current returns it, or null
     * when there is none. Any other value returns 409 DELIVERY_PICKUP_AVAILABILITY_CHANGED. The
     * search does not change or release the selection. minLength: 1.
     */
    "expected_delivery_selection_id"?: string | null;
    /**
     * Shape $ (Value): {@link DeliveryPickupAvailabilityMaximumDistanceRequestInput}. A maximum
     * distance from the buyer location, as a value and unit, that limits which pickup locations a
     * preview returns.
     */
    "maximum_distance"?: DeliveryPickupAvailabilityMaximumDistanceRequestInput;
    /**
     * Shape $ (Value): string. The delivery question this preview answers. - `pickup_locations`:
     * Lists the checkout session's pickup locations and whether each can supply its items. Value
     * enum: "pickup_locations".
     */
    "mode": "pickup_locations";
};
/**
 * Shape $ (Value): {@link CreateDeliveryPreviewRequest}. The request body for: Create delivery
 * preview.
 */
export type CreateDeliveryPreviewRequest = ((CreateDeliveryOptionsPreviewRequest)
    | (CreateDeliveryPickupLocationsPreviewRequest)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateDeliveryPreviewRequestInput}. The request body for: Create
 * delivery preview.
 */
export type CreateDeliveryPreviewRequestInput = ((CreateDeliveryOptionsPreviewRequestInput) | (CreateDeliveryPickupLocationsPreviewRequestInput));
/**
 * Shape $ (Value): {@link CreateDeliveryProfileRequest}. The request body for: Create delivery
 * profile.
 */
export type CreateDeliveryProfileRequest = {
    /**
     * Shape $ (Value): {@link DeliveryProfileConfigurationRequest}. Delivery planning settings you
     * supply when creating or updating a delivery profile. Which fields are allowed depends on
     * `requirement` and `resolution_mode`.
     */
    "configuration": DeliveryProfileConfigurationRequest;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateDeliveryProfileRequestInput}. The request body for: Create
 * delivery profile.
 */
export type CreateDeliveryProfileRequestInput = {
    /**
     * Shape $ (Value): {@link DeliveryProfileConfigurationRequestInput}. Delivery planning
     * settings you supply when creating or updating a delivery profile. Which fields are allowed
     * depends on `requirement` and `resolution_mode`.
     */
    "configuration": DeliveryProfileConfigurationRequestInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateDeliveryRateCallbackRequest}. The request body for: Create
 * delivery rate callback.
 */
export type CreateDeliveryRateCallbackRequest = {
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackConfiguration}. Settings for a delivery rate
     * callback: the endpoint `url` Flint calls, request timeout, request and response size limits,
     * redirect policy, and whether previews can use it.
     */
    "configuration": DeliveryRateCallbackConfiguration;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateDeliveryRateCallbackRequestInput}. The request body for: Create
 * delivery rate callback.
 */
export type CreateDeliveryRateCallbackRequestInput = {
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackConfigurationInput}. Settings for a delivery
     * rate callback: the endpoint `url` Flint calls, request timeout, request and response size
     * limits, redirect policy, and whether previews can use it.
     */
    "configuration": DeliveryRateCallbackConfigurationInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateDeliverySelectionChoiceRequest}. The delivery option to select for
 * one choice group when creating a delivery selection, with optional delivery instructions.
 */
export type CreateDeliverySelectionChoiceRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_choice_group_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_option_id": string;
    /**
     * Shape $ (Value): {@link DeliverySelectionInstructionsRequest}. Buyer input for a selected
     * delivery option: a `delivery_window_id` where the option uses delivery windows, and optional
     * `instructions`.
     */
    "input"?: DeliverySelectionInstructionsRequest;
};
/**
 * Shape $ (Value): {@link CreateDeliverySelectionChoiceRequestInput}. The delivery option to
 * select for one choice group when creating a delivery selection, with optional delivery
 * instructions.
 */
export type CreateDeliverySelectionChoiceRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_choice_group_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_option_id": string;
    /**
     * Shape $ (Value): {@link DeliverySelectionInstructionsRequestInput}. Buyer input for a
     * selected delivery option: a `delivery_window_id` where the option uses delivery windows, and
     * optional `instructions`.
     */
    "input"?: DeliverySelectionInstructionsRequestInput;
};
/**
 * Shape $ (Value): {@link CreateDeliverySelectionRequest}. The request body for: Create delivery
 * selection.
 */
export type CreateDeliverySelectionRequest = {
    /**
     * Shape $ (Value): Array of {@link CreateDeliverySelectionChoiceRequest}. Shape $[] (Value):
     * {@link CreateDeliverySelectionChoiceRequest}. The delivery option to select for one choice
     * group when creating a delivery selection, with optional delivery instructions.
     */
    "choices": Array<CreateDeliverySelectionChoiceRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_quote_id": string;
    /**
     * Shape $ (Value): {@link AddressRequest}. A postal address you supply when creating or
     * updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to
     * clear it.
     */
    "destination_address"?: AddressRequest;
    /**
     * Shape $ (Value): string or null. Current delivery selection ID used for compare-and-swap.
     * Send null to assert that no selection exists. minLength: 1.
     */
    "expected_delivery_selection_id": string | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "external_system"?: string;
    /**
     * Shape $ (Value): {@link DeliverySelectionRecipientRequest}. Recipient details you supply
     * with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`.
     */
    "recipient"?: DeliverySelectionRecipientRequest;
};
/**
 * Shape $ (Value): {@link CreateDeliverySelectionRequestInput}. The request body for: Create
 * delivery selection.
 */
export type CreateDeliverySelectionRequestInput = {
    /**
     * Shape $ (Value): Array of {@link CreateDeliverySelectionChoiceRequestInput}. Shape $[]
     * (Value): {@link CreateDeliverySelectionChoiceRequestInput}. The delivery option to select
     * for one choice group when creating a delivery selection, with optional delivery
     * instructions.
     */
    "choices": Array<CreateDeliverySelectionChoiceRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_quote_id": string;
    /**
     * Shape $ (Value): {@link AddressRequestInput}. A postal address you supply when creating or
     * updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to
     * clear it.
     */
    "destination_address"?: AddressRequestInput;
    /**
     * Shape $ (Value): string or null. Current delivery selection ID used for compare-and-swap.
     * Send null to assert that no selection exists. minLength: 1.
     */
    "expected_delivery_selection_id": string | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "external_system"?: string;
    /**
     * Shape $ (Value): {@link DeliverySelectionRecipientRequestInput}. Recipient details you
     * supply with a delivery selection or subscription delivery: optional `name`, `email`, and
     * `phone`.
     */
    "recipient"?: DeliverySelectionRecipientRequestInput;
};
/**
 * Shape $ (Value): {@link CreateDeliveryZoneRequest}. The request body for: Create delivery zone.
 */
export type CreateDeliveryZoneRequest = {
    /**
     * Shape $ (Value): {@link DeliveryZoneConfiguration}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "configuration": DeliveryZoneConfiguration;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateDeliveryZoneRequestInput}. The request body for: Create delivery
 * zone.
 */
export type CreateDeliveryZoneRequestInput = {
    /**
     * Shape $ (Value): {@link DeliveryZoneConfigurationInput}. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "configuration": DeliveryZoneConfigurationInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/** Shape $ (Value): {@link CreateDemoSessionRequest}. The request body for: Create demo session. */
export type CreateDemoSessionRequest = {
    /**
     * Shape $ (Value): string. Omit to use quickstart. An explicit empty or unsupported template
     * is invalid. Default: "quickstart". Value enum: "quickstart".
     */
    "template"?: "quickstart" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateDemoSessionRequestInput}. The request body for: Create demo
 * session.
 */
export type CreateDemoSessionRequestInput = {
    /**
     * Shape $ (Value): string. Omit to use quickstart. An explicit empty or unsupported template
     * is invalid. Default: "quickstart". Value enum: "quickstart".
     */
    "template"?: "quickstart";
};
/**
 * Shape $ (Value): {@link CreateDeveloperSandboxResult}. The created sandbox is the primary
 * resource, with the API key and one-time secret_key when issue_test_key is true.
 */
export type CreateDeveloperSandboxResult = {
    /**
     * Shape $ (Value): {@link APIKey}. The newly issued test API key. Present exactly when
     * issue_test_key is true. A credential used to authenticate API requests.
     */
    "api_key"?: APIKey;
    /**
     * Shape $ (Value): {@link DeveloperSandbox}. An isolated environment for testing an
     * integration.
     */
    "sandbox": DeveloperSandbox;
    /**
     * Shape $ (Value): string. The one-time secret for api_key. Present exactly when
     * issue_test_key is true.
     */
    "secret_key"?: string;
};
/** Shape $ (Value): {@link CreateDeviceRequest}. The request body for: Create device. */
export type CreateDeviceRequest = {
    /**
     * Shape $ (Value): string. Stable hardware identity. Must have no leading or trailing
     * whitespace and is compared exactly, including case and accents. Only one active device in
     * this merchant and environment can hold it. minLength: 1. maxLength: 255.
     */
    "hardware_fingerprint"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/** Shape $ (Value): {@link CreateDeviceRequestInput}. The request body for: Create device. */
export type CreateDeviceRequestInput = CreateDeviceRequest;
/**
 * Shape $ (Value): {@link CreateDigitalFulfillmentDetails}. Digital fulfillment details you supply
 * when creating a fulfillment: the delivery URL.
 */
export type CreateDigitalFulfillmentDetails = {
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_url"?: string;
};
/**
 * Shape $ (Value): {@link CreateDigitalFulfillmentDetailsInput}. Digital fulfillment details you
 * supply when creating a fulfillment: the delivery URL.
 */
export type CreateDigitalFulfillmentDetailsInput = CreateDigitalFulfillmentDetails;
/**
 * Shape $ (Value): {@link CreateEmailChangeRequest}. The request body for: Request an email
 * change.
 */
export type CreateEmailChangeRequest = {
    /** Shape $ (Value): string. Format: email. minLength: 1. maxLength: 320. */
    "new_email": string;
};
/**
 * Shape $ (Value): {@link CreateEmailChangeRequestInput}. The request body for: Request an email
 * change.
 */
export type CreateEmailChangeRequestInput = CreateEmailChangeRequest;
/**
 * Shape $ (Value): {@link CreateFeedbackReportNarrative}. The `bug` variant of
 * `CreateFeedbackReportRequest`. The `feature_request` variant of `CreateFeedbackReportRequest`.
 * The `other` variant of `CreateFeedbackReportRequest`. The `papercut` variant of
 * `CreateFeedbackReportRequest`. The `praise` variant of `CreateFeedbackReportRequest`.
 */
export type CreateFeedbackReportNarrative = ({
    /**
     * Shape $ (Value): string. Optional observed outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "actual_behavior"?: string;
    /**
     * Shape $ (Value): string. Dotted or hyphenated canonical command name, such as
     * payment-intents.create. Limited to 200 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 200. pattern:
     * ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Shape $ (Value): string. Location in the reporting code associated with this feedback.
     * Limited to 500 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Shape $ (Value): string. Optional feature or subsystem within the product. Limited to 128
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 128.
     */
    "component"?: string;
    /**
     * Shape $ (Value): string. Optional details about the feedback. Limited to 8000 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Optional desired outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "expected_behavior"?: string;
    /**
     * Shape $ (Value): string. Classification of the feedback. Value enum: "papercut", "bug",
     * "feature_request", "praise", "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other" | (string & {});
    /**
     * Shape $ (Value): string. Flint request ID associated with this feedback. Limited to 255
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 255.
     */
    "related_request_id"?: string;
    /**
     * Shape $ (Value): Array of string. Existing public resources associated with this feedback,
     * with at most 20 unique IDs. maxItems: 20. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Whether the reporter is a human or an AI. Value enum: "human",
     * "ai_agent".
     */
    "reporter_kind"?: "human" | "ai_agent" | (string & {});
    /**
     * Shape $ (Value): {@link FeedbackReportingClient}. Tool submitting the feedback,
     * independently of the product being discussed. Its name is required when present. The client
     * that submits a feedback report, with its name, platform, version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClient;
    /**
     * Shape $ (Value): Array of string. Unique steps in reproduction order, with at most 20
     * entries. maxItems: 20. uniqueItems: true. Shape $[] (Value): string. Limited to 1000
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral" | (string & {});
    /**
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary": string;
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Relevant route in the product being discussed. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ({
    /**
     * Shape $ (Value): string. Value enum: "papercut", "bug", "feature_request", "praise",
     * "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other" | (string & {});
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary": string;
});
/**
 * Shape $ (Value): {@link CreateFeedbackReportNarrativeInput}. The `bug` variant of
 * `CreateFeedbackReportRequest`. The `feature_request` variant of `CreateFeedbackReportRequest`.
 * The `other` variant of `CreateFeedbackReportRequest`. The `papercut` variant of
 * `CreateFeedbackReportRequest`. The `praise` variant of `CreateFeedbackReportRequest`.
 */
export type CreateFeedbackReportNarrativeInput = ({
    /**
     * Shape $ (Value): string. Optional observed outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "actual_behavior"?: string;
    /**
     * Shape $ (Value): string. Dotted or hyphenated canonical command name, such as
     * payment-intents.create. Limited to 200 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 200. pattern:
     * ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Shape $ (Value): string. Location in the reporting code associated with this feedback.
     * Limited to 500 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Shape $ (Value): string. Optional feature or subsystem within the product. Limited to 128
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 128.
     */
    "component"?: string;
    /**
     * Shape $ (Value): string. Optional details about the feedback. Limited to 8000 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Optional desired outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "expected_behavior"?: string;
    /**
     * Shape $ (Value): string. Classification of the feedback. Value enum: "papercut", "bug",
     * "feature_request", "praise", "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other";
    /**
     * Shape $ (Value): string. Flint request ID associated with this feedback. Limited to 255
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 255.
     */
    "related_request_id"?: string;
    /**
     * Shape $ (Value): Array of string. Existing public resources associated with this feedback,
     * with at most 20 unique IDs. maxItems: 20. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Whether the reporter is a human or an AI. Value enum: "human",
     * "ai_agent".
     */
    "reporter_kind"?: "human" | "ai_agent";
    /**
     * Shape $ (Value): {@link FeedbackReportingClientInput}. Tool submitting the feedback,
     * independently of the product being discussed. Its name is required when present. The client
     * that submits a feedback report, with its name, platform, version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClientInput;
    /**
     * Shape $ (Value): Array of string. Unique steps in reproduction order, with at most 20
     * entries. maxItems: 20. uniqueItems: true. Shape $[] (Value): string. Limited to 1000
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral";
    /**
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary": string;
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Relevant route in the product being discussed. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ({
    /**
     * Shape $ (Value): string. Value enum: "papercut", "bug", "feature_request", "praise",
     * "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other";
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary": string;
});
/**
 * Shape $ (Value): {@link CreateFeedbackReportRating}. The `rating` variant of
 * `CreateFeedbackReportRequest`.
 */
export type CreateFeedbackReportRating = ({
    /**
     * Shape $ (Value): string. Optional observed outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "actual_behavior"?: string;
    /**
     * Shape $ (Value): string. Dotted or hyphenated canonical command name, such as
     * payment-intents.create. Limited to 200 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 200. pattern:
     * ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Shape $ (Value): string. Location in the reporting code associated with this feedback.
     * Limited to 500 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Shape $ (Value): string. Optional feature or subsystem within the product. Limited to 128
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 128.
     */
    "component"?: string;
    /**
     * Shape $ (Value): string. Optional details about the feedback. Limited to 8000 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Optional desired outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "expected_behavior"?: string;
    /** Shape $ (Value): string. Classification of the feedback. Value enum: "rating". */
    "kind": "rating" | (string & {});
    /**
     * Shape $ (Value): string. Flint request ID associated with this feedback. Limited to 255
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 255.
     */
    "related_request_id"?: string;
    /**
     * Shape $ (Value): Array of string. Existing public resources associated with this feedback,
     * with at most 20 unique IDs. maxItems: 20. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Whether the reporter is a human or an AI. Value enum: "human",
     * "ai_agent".
     */
    "reporter_kind"?: "human" | "ai_agent" | (string & {});
    /**
     * Shape $ (Value): {@link FeedbackReportingClient}. Tool submitting the feedback,
     * independently of the product being discussed. Its name is required when present. The client
     * that submits a feedback report, with its name, platform, version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClient;
    /**
     * Shape $ (Value): Array of string. Unique steps in reproduction order, with at most 20
     * entries. maxItems: 20. uniqueItems: true. Shape $[] (Value): string. Limited to 1000
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral" | (string & {});
    /**
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Relevant route in the product being discussed. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "rating". */
    "kind": "rating" | (string & {});
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral" | (string & {});
});
/**
 * Shape $ (Value): {@link CreateFeedbackReportRatingInput}. The `rating` variant of
 * `CreateFeedbackReportRequest`.
 */
export type CreateFeedbackReportRatingInput = ({
    /**
     * Shape $ (Value): string. Optional observed outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "actual_behavior"?: string;
    /**
     * Shape $ (Value): string. Dotted or hyphenated canonical command name, such as
     * payment-intents.create. Limited to 200 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 200. pattern:
     * ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Shape $ (Value): string. Location in the reporting code associated with this feedback.
     * Limited to 500 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Shape $ (Value): string. Optional feature or subsystem within the product. Limited to 128
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 128.
     */
    "component"?: string;
    /**
     * Shape $ (Value): string. Optional details about the feedback. Limited to 8000 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Optional desired outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "expected_behavior"?: string;
    /** Shape $ (Value): string. Classification of the feedback. Value enum: "rating". */
    "kind": "rating";
    /**
     * Shape $ (Value): string. Flint request ID associated with this feedback. Limited to 255
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 255.
     */
    "related_request_id"?: string;
    /**
     * Shape $ (Value): Array of string. Existing public resources associated with this feedback,
     * with at most 20 unique IDs. maxItems: 20. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Whether the reporter is a human or an AI. Value enum: "human",
     * "ai_agent".
     */
    "reporter_kind"?: "human" | "ai_agent";
    /**
     * Shape $ (Value): {@link FeedbackReportingClientInput}. Tool submitting the feedback,
     * independently of the product being discussed. Its name is required when present. The client
     * that submits a feedback report, with its name, platform, version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClientInput;
    /**
     * Shape $ (Value): Array of string. Unique steps in reproduction order, with at most 20
     * entries. maxItems: 20. uniqueItems: true. Shape $[] (Value): string. Limited to 1000
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral";
    /**
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Relevant route in the product being discussed. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "rating". */
    "kind": "rating";
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment": "positive" | "negative" | "neutral";
});
/**
 * Shape $ (Value): {@link CreateFeedbackReportRequest}. The request body for: Create a feedback
 * report.
 */
export type CreateFeedbackReportRequest = ({
    /**
     * Shape $ (Value): string. Optional observed outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "actual_behavior"?: string;
    /**
     * Shape $ (Value): string. Dotted or hyphenated canonical command name, such as
     * payment-intents.create. Limited to 200 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 200. pattern:
     * ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Shape $ (Value): string. Location in the reporting code associated with this feedback.
     * Limited to 500 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Shape $ (Value): string. Optional feature or subsystem within the product. Limited to 128
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 128.
     */
    "component"?: string;
    /**
     * Shape $ (Value): string. Optional details about the feedback. Limited to 8000 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Optional desired outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "expected_behavior"?: string;
    /**
     * Shape $ (Value): string. Classification of the feedback. Value enum: "papercut", "bug",
     * "feature_request", "rating", "praise", "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "rating" | "praise" | "other" | (string & {});
    /**
     * Shape $ (Value): string. Flint request ID associated with this feedback. Limited to 255
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 255.
     */
    "related_request_id"?: string;
    /**
     * Shape $ (Value): Array of string. Existing public resources associated with this feedback,
     * with at most 20 unique IDs. maxItems: 20. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Whether the reporter is a human or an AI. Value enum: "human",
     * "ai_agent".
     */
    "reporter_kind"?: "human" | "ai_agent" | (string & {});
    /**
     * Shape $ (Value): {@link FeedbackReportingClient}. Tool submitting the feedback,
     * independently of the product being discussed. Its name is required when present. The client
     * that submits a feedback report, with its name, platform, version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClient;
    /**
     * Shape $ (Value): Array of string. Unique steps in reproduction order, with at most 20
     * entries. maxItems: 20. uniqueItems: true. Shape $[] (Value): string. Limited to 1000
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral" | (string & {});
    /**
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Relevant route in the product being discussed. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ((Exclude<CreateFeedbackReportRating & object, readonly unknown[]>)
    | (Exclude<CreateFeedbackReportNarrative & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateFeedbackReportRequestInput}. The request body for: Create a
 * feedback report.
 */
export type CreateFeedbackReportRequestInput = ({
    /**
     * Shape $ (Value): string. Optional observed outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "actual_behavior"?: string;
    /**
     * Shape $ (Value): string. Dotted or hyphenated canonical command name, such as
     * payment-intents.create. Limited to 200 characters (Unicode code points), counted before
     * whitespace and line-ending normalization. minLength: 1. maxLength: 200. pattern:
     * ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     */
    "canonical_command"?: string;
    /**
     * Shape $ (Value): string. Location in the reporting code associated with this feedback.
     * Limited to 500 characters (Unicode code points), counted before whitespace and line-ending
     * normalization. minLength: 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Shape $ (Value): string. Optional feature or subsystem within the product. Limited to 128
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 128.
     */
    "component"?: string;
    /**
     * Shape $ (Value): string. Optional details about the feedback. Limited to 8000 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 8000.
     */
    "description"?: string;
    /**
     * Shape $ (Value): string. Optional desired outcome. Limited to 4000 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 4000.
     */
    "expected_behavior"?: string;
    /**
     * Shape $ (Value): string. Classification of the feedback. Value enum: "papercut", "bug",
     * "feature_request", "rating", "praise", "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "rating" | "praise" | "other";
    /**
     * Shape $ (Value): string. Flint request ID associated with this feedback. Limited to 255
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 255.
     */
    "related_request_id"?: string;
    /**
     * Shape $ (Value): Array of string. Existing public resources associated with this feedback,
     * with at most 20 unique IDs. maxItems: 20. uniqueItems: true. Shape $[] (Value): string.
     * minLength: 1.
     */
    "related_resource_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Whether the reporter is a human or an AI. Value enum: "human",
     * "ai_agent".
     */
    "reporter_kind"?: "human" | "ai_agent";
    /**
     * Shape $ (Value): {@link FeedbackReportingClientInput}. Tool submitting the feedback,
     * independently of the product being discussed. Its name is required when present. The client
     * that submits a feedback report, with its name, platform, version, and schema version.
     */
    "reporting_client"?: FeedbackReportingClientInput;
    /**
     * Shape $ (Value): Array of string. Unique steps in reproduction order, with at most 20
     * entries. maxItems: 20. uniqueItems: true. Shape $[] (Value): string. Limited to 1000
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 1000.
     */
    "reproduction_steps"?: Array<string>;
    /**
     * Shape $ (Value): string. Positive, negative, or neutral assessment. Required for rating
     * feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     */
    "sentiment"?: "positive" | "negative" | "neutral";
    /**
     * Shape $ (Value): string. Brief account of the feedback. Required for every kind except
     * rating; optional for a rating. Limited to 200 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     */
    "summary"?: string;
    /**
     * Shape $ (Value): string. Product being discussed, independently of how the report is
     * submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout",
     * "payment_links", "webhooks", "onboarding", "mobile", "other".
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
     * Shape $ (Value): string. Relevant route in the product being discussed. Limited to 500
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 500.
     */
    "surface_route"?: string;
})
    & ((Exclude<CreateFeedbackReportRatingInput & object, readonly unknown[]>)
    | (Exclude<CreateFeedbackReportNarrativeInput & object, readonly unknown[]>));
/** Shape $ (Value): {@link CreateFileRequest}. The request body for: Create a file. */
export type CreateFileRequest = {
    /** Shape $ (Value): string.  Value enum: "image/jpeg", "image/png", "image/webp". */
    "content_type": "image/jpeg" | "image/png" | "image/webp" | (string & {});
    /**
     * Shape $ (Value): string. What the image will be used for. Partner installs support the five
     * commerce purposes; merchant_logo and merchant_icon require merchants.profile.write, which
     * partner installs cannot grant, and return INSUFFICIENT_SCOPE with scope_requirement. Value
     * enum: "product", "product_variant", "bundle", "payment_link", "subscription_plan",
     * "merchant_logo", "merchant_icon".
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
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 5242880.
     */
    "size_bytes": `${bigint}`;
};
/** Shape $ (Value): {@link CreateFileRequestInput}. The request body for: Create a file. */
export type CreateFileRequestInput = {
    /** Shape $ (Value): string.  Value enum: "image/jpeg", "image/png", "image/webp". */
    "content_type": "image/jpeg" | "image/png" | "image/webp";
    /**
     * Shape $ (Value): string. What the image will be used for. Partner installs support the five
     * commerce purposes; merchant_logo and merchant_icon require merchants.profile.write, which
     * partner installs cannot grant, and return INSUFFICIENT_SCOPE with scope_requirement. Value
     * enum: "product", "product_variant", "bundle", "payment_link", "subscription_plan",
     * "merchant_logo", "merchant_icon".
     */
    "purpose": "product"
        | "product_variant"
        | "bundle"
        | "payment_link"
        | "subscription_plan"
        | "merchant_logo"
        | "merchant_icon";
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 5242880.
     */
    "size_bytes": `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link CreateFulfillmentEventRequest}. The request body for: Create fulfillment
 * event.
 */
export type CreateFulfillmentEventRequest = {
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1. */
    "custom_details"?: Record<string, string>;
    /** Shape $ (Value): string.  Value enum: "carrier_scan", "custom". */
    "event_type": "carrier_scan" | "custom" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "external_event_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "external_status"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "external_system"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "message"?: string;
    /** Shape $ (Value): string. Provider event timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Nested package associated with this observational event. Flint
     * resolves and validates its shipment and fulfillment ownership. minLength: 1.
     */
    "package_id"?: string;
    /**
     * Shape $ (Value): string. Nested shipment associated with this observational event. Flint
     * validates that it belongs to the fulfillment in the path. minLength: 1.
     */
    "shipment_id"?: string;
};
/**
 * Shape $ (Value): {@link CreateFulfillmentEventRequestInput}. The request body for: Create
 * fulfillment event.
 */
export type CreateFulfillmentEventRequestInput = {
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1. */
    "custom_details"?: Record<string, string>;
    /** Shape $ (Value): string.  Value enum: "carrier_scan", "custom". */
    "event_type": "carrier_scan" | "custom";
    /** Shape $ (Value): string. minLength: 1. */
    "external_event_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "external_status"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "external_system"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "location_description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "message"?: string;
    /** Shape $ (Value): string. Provider event timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Nested package associated with this observational event. Flint
     * resolves and validates its shipment and fulfillment ownership. minLength: 1.
     */
    "package_id"?: string;
    /**
     * Shape $ (Value): string. Nested shipment associated with this observational event. Flint
     * validates that it belongs to the fulfillment in the path. minLength: 1.
     */
    "shipment_id"?: string;
};
/**
 * Shape $ (Value): {@link CreateFulfillmentRequest}. Provide at most one fulfillment details
 * object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment
 * execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequest = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetails}. Digital fulfillment details you
     * supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetails}. Local delivery details you supply
     * when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetails}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequest}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetails}. Service details you supply when
     * creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequest}. Creates one outbound shipment and one
     * package atomically with the fulfillment. packaging must be single_package. The package
     * receives the full quantities of only the submitted line_items. Requires type shipment.
     * Omission creates no shipment or package. Set package.status to shipped to report handoff in
     * the same call. Creates one outbound shipment and one package with a shipment fulfillment.
     * Requires `packaging: single_package` and `package`; external reference and metadata are
     * optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /**
     * Shape $ (Value): string. Value enum: "shipment", "pickup", "local_delivery", "digital",
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
 * Shape $ (Value): {@link CreateFulfillmentRequestDigital}. Provide at most one fulfillment
 * details object: pickup_details, local_delivery_details, digital_details, or service_details.
 * Shipment execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestDigital = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetails}. Digital fulfillment details you
     * supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetails}. Local delivery details you supply
     * when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetails}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequest}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetails}. Service details you supply when
     * creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequest}. Creates one outbound shipment and one
     * package atomically with the fulfillment. packaging must be single_package. The package
     * receives the full quantities of only the submitted line_items. Requires type shipment.
     * Omission creates no shipment or package. Set package.status to shipped to report handoff in
     * the same call. Creates one outbound shipment and one package with a shipment fulfillment.
     * Requires `packaging: single_package` and `package`; external reference and metadata are
     * optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** Shape $ (Value): string.  Value enum: "digital". */
    "type": "digital" | (string & {});
});
/**
 * Shape $ (Value): {@link CreateFulfillmentRequestDigitalInput}. Provide at most one fulfillment
 * details object: pickup_details, local_delivery_details, digital_details, or service_details.
 * Shipment execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestDigitalInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetailsInput}. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetailsInput}. Local delivery details you
     * supply when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetailsInput}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequestInput}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetailsInput}. Service details you supply
     * when creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequestInput}. Creates one outbound shipment and
     * one package atomically with the fulfillment. packaging must be single_package. The package
     * receives the full quantities of only the submitted line_items. Requires type shipment.
     * Omission creates no shipment or package. Set package.status to shipped to report handoff in
     * the same call. Creates one outbound shipment and one package with a shipment fulfillment.
     * Requires `packaging: single_package` and `package`; external reference and metadata are
     * optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** Shape $ (Value): string.  Value enum: "digital". */
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
 * Shape $ (Value): {@link CreateFulfillmentRequestInput}. Provide at most one fulfillment details
 * object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment
 * execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetailsInput}. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetailsInput}. Local delivery details you
     * supply when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetailsInput}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequestInput}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetailsInput}. Service details you supply
     * when creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequestInput}. Creates one outbound shipment and
     * one package atomically with the fulfillment. packaging must be single_package. The package
     * receives the full quantities of only the submitted line_items. Requires type shipment.
     * Omission creates no shipment or package. Set package.status to shipped to report handoff in
     * the same call. Creates one outbound shipment and one package with a shipment fulfillment.
     * Requires `packaging: single_package` and `package`; external reference and metadata are
     * optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /**
     * Shape $ (Value): string. Value enum: "shipment", "pickup", "local_delivery", "digital",
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
 * Shape $ (Value): {@link CreateFulfillmentRequestLocalDelivery}. Provide at most one fulfillment
 * details object: pickup_details, local_delivery_details, digital_details, or service_details.
 * Shipment execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestLocalDelivery = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetails}. Digital fulfillment details you
     * supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetails}. Local delivery details you supply
     * when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetails}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequest}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetails}. Service details you supply when
     * creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequest}. Creates one outbound shipment and one
     * package atomically with the fulfillment. packaging must be single_package. The package
     * receives the full quantities of only the submitted line_items. Requires type shipment.
     * Omission creates no shipment or package. Set package.status to shipped to report handoff in
     * the same call. Creates one outbound shipment and one package with a shipment fulfillment.
     * Requires `packaging: single_package` and `package`; external reference and metadata are
     * optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** Shape $ (Value): string.  Value enum: "local_delivery". */
    "type": "local_delivery" | (string & {});
});
/**
 * Shape $ (Value): {@link CreateFulfillmentRequestLocalDeliveryInput}. Provide at most one
 * fulfillment details object: pickup_details, local_delivery_details, digital_details, or
 * service_details. Shipment execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestLocalDeliveryInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetailsInput}. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetailsInput}. Local delivery details you
     * supply when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetailsInput}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequestInput}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetailsInput}. Service details you supply
     * when creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequestInput}. Creates one outbound shipment and
     * one package atomically with the fulfillment. packaging must be single_package. The package
     * receives the full quantities of only the submitted line_items. Requires type shipment.
     * Omission creates no shipment or package. Set package.status to shipped to report handoff in
     * the same call. Creates one outbound shipment and one package with a shipment fulfillment.
     * Requires `packaging: single_package` and `package`; external reference and metadata are
     * optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** Shape $ (Value): string.  Value enum: "local_delivery". */
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
 * Shape $ (Value): {@link CreateFulfillmentRequestPickup}. Provide at most one fulfillment details
 * object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment
 * execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestPickup = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetails}. Digital fulfillment details you
     * supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetails}. Local delivery details you supply
     * when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetails}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequest}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetails}. Service details you supply when
     * creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequest}. Creates one outbound shipment and one
     * package atomically with the fulfillment. packaging must be single_package. The package
     * receives the full quantities of only the submitted line_items. Requires type shipment.
     * Omission creates no shipment or package. Set package.status to shipped to report handoff in
     * the same call. Creates one outbound shipment and one package with a shipment fulfillment.
     * Requires `packaging: single_package` and `package`; external reference and metadata are
     * optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** Shape $ (Value): string.  Value enum: "pickup". */
    "type": "pickup" | (string & {});
});
/**
 * Shape $ (Value): {@link CreateFulfillmentRequestPickupInput}. Provide at most one fulfillment
 * details object: pickup_details, local_delivery_details, digital_details, or service_details.
 * Shipment execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestPickupInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetailsInput}. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetailsInput}. Local delivery details you
     * supply when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetailsInput}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequestInput}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetailsInput}. Service details you supply
     * when creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequestInput}. Creates one outbound shipment and
     * one package atomically with the fulfillment. packaging must be single_package. The package
     * receives the full quantities of only the submitted line_items. Requires type shipment.
     * Omission creates no shipment or package. Set package.status to shipped to report handoff in
     * the same call. Creates one outbound shipment and one package with a shipment fulfillment.
     * Requires `packaging: single_package` and `package`; external reference and metadata are
     * optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** Shape $ (Value): string.  Value enum: "pickup". */
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
 * Shape $ (Value): {@link CreateFulfillmentRequestService}. Provide at most one fulfillment
 * details object: pickup_details, local_delivery_details, digital_details, or service_details.
 * Shipment execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestService = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetails}. Digital fulfillment details you
     * supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetails}. Local delivery details you supply
     * when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetails}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequest}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetails}. Service details you supply when
     * creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequest}. Creates one outbound shipment and one
     * package atomically with the fulfillment. packaging must be single_package. The package
     * receives the full quantities of only the submitted line_items. Requires type shipment.
     * Omission creates no shipment or package. Set package.status to shipped to report handoff in
     * the same call. Creates one outbound shipment and one package with a shipment fulfillment.
     * Requires `packaging: single_package` and `package`; external reference and metadata are
     * optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** Shape $ (Value): string.  Value enum: "service". */
    "type": "service" | (string & {});
});
/**
 * Shape $ (Value): {@link CreateFulfillmentRequestServiceInput}. Provide at most one fulfillment
 * details object: pickup_details, local_delivery_details, digital_details, or service_details.
 * Shipment execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestServiceInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetailsInput}. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetailsInput}. Local delivery details you
     * supply when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetailsInput}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequestInput}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetailsInput}. Service details you supply
     * when creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequestInput}. Creates one outbound shipment and
     * one package atomically with the fulfillment. packaging must be single_package. The package
     * receives the full quantities of only the submitted line_items. Requires type shipment.
     * Omission creates no shipment or package. Set package.status to shipped to report handoff in
     * the same call. Creates one outbound shipment and one package with a shipment fulfillment.
     * Requires `packaging: single_package` and `package`; external reference and metadata are
     * optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** Shape $ (Value): string.  Value enum: "service". */
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
 * Shape $ (Value): {@link CreateFulfillmentRequestShipment}. Provide at most one fulfillment
 * details object: pickup_details, local_delivery_details, digital_details, or service_details.
 * Shipment execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestShipment = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetails}. Digital fulfillment details you
     * supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetails;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include when
     * creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequest>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetails}. Local delivery details you supply
     * when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetails;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetails}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequest}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequest;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetails}. Service details you supply when
     * creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequest}. Creates one outbound shipment and one
     * package atomically with the fulfillment. packaging must be single_package. The package
     * receives the full quantities of only the submitted line_items. Requires type shipment.
     * Omission creates no shipment or package. Set package.status to shipped to report handoff in
     * the same call. Creates one outbound shipment and one package with a shipment fulfillment.
     * Requires `packaging: single_package` and `package`; external reference and metadata are
     * optional.
     */
    "shipment"?: FulfillmentPackagingRequest;
    /** Shape $ (Value): string.  Value enum: "shipment". */
    "type": "shipment" | (string & {});
});
/**
 * Shape $ (Value): {@link CreateFulfillmentRequestShipmentInput}. Provide at most one fulfillment
 * details object: pickup_details, local_delivery_details, digital_details, or service_details.
 * Shipment execution details belong to shipments and packages.
 */
export type CreateFulfillmentRequestShipmentInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link CreateDigitalFulfillmentDetailsInput}. Digital fulfillment details
     * you supply when creating a fulfillment: the delivery URL.
     */
    "digital_details"?: CreateDigitalFulfillmentDetailsInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItemRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to include
     * when creating a fulfillment.
     */
    "line_items": Array<FulfillmentLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link CreateDeliveryFulfillmentDetailsInput}. Local delivery details you
     * supply when creating a fulfillment: courier, timing window, instructions, and tracking.
     */
    "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link CreatePickupFulfillmentDetailsInput}. Pickup details you supply when
     * creating a fulfillment: the pickup address, location, window, instructions, and curbside
     * details.
     */
    "pickup_details"?: CreatePickupFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequestInput}. Recipient details you supply when
     * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipientRequestInput;
    /**
     * Shape $ (Value): {@link CreateServiceFulfillmentDetailsInput}. Service details you supply
     * when creating a fulfillment: the scheduled start and end, timezone, and notes.
     */
    "service_details"?: CreateServiceFulfillmentDetailsInput;
    /**
     * Shape $ (Value): {@link FulfillmentPackagingRequestInput}. Creates one outbound shipment and
     * one package atomically with the fulfillment. packaging must be single_package. The package
     * receives the full quantities of only the submitted line_items. Requires type shipment.
     * Omission creates no shipment or package. Set package.status to shipped to report handoff in
     * the same call. Creates one outbound shipment and one package with a shipment fulfillment.
     * Requires `packaging: single_package` and `package`; external reference and metadata are
     * optional.
     */
    "shipment"?: FulfillmentPackagingRequestInput;
    /** Shape $ (Value): string.  Value enum: "shipment". */
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
/**
 * Shape $ (Value): {@link CreateGiftCardFundingDispositionRequest}. The request body for: Create a
 * gift card funding disposition.
 */
export type CreateGiftCardFundingDispositionRequest = {
    /** Shape $ (Value): string. Default: "honor_value". Value enum: "honor_value". */
    "disposition"?: "honor_value" | (string & {});
    /**
     * Shape $ (Value): string. The lost dispute on the payment that funded the gift card value.
     * minLength: 1. pattern: ^du_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "dispute_id": string;
    /**
     * Shape $ (Value): string. Your reason for honoring the gift card value despite the confirmed
     * funding loss. minLength: 1. maxLength: 200.
     */
    "reason_message": string;
};
/**
 * Shape $ (Value): {@link CreateGiftCardFundingDispositionRequestInput}. The request body for:
 * Create a gift card funding disposition.
 */
export type CreateGiftCardFundingDispositionRequestInput = {
    /** Shape $ (Value): string. Default: "honor_value". Value enum: "honor_value". */
    "disposition"?: "honor_value";
    /**
     * Shape $ (Value): string. The lost dispute on the payment that funded the gift card value.
     * minLength: 1. pattern: ^du_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "dispute_id": string;
    /**
     * Shape $ (Value): string. Your reason for honoring the gift card value despite the confirmed
     * funding loss. minLength: 1. maxLength: 200.
     */
    "reason_message": string;
};
/** Shape $ (Value): {@link CreateGiftCardLoadRequest}. The request body for: Load a gift card. */
export type CreateGiftCardLoadRequest = ({
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Shape $.anyOf[1] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape
     * $.anyOf[1].amount (Required): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Amount in the currency's minor unit, such
     * as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. Shape $.anyOf[1].currency (Required): string. ISO 4217 currency
     * code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Shape $.anyOf[2]
     * (Value): null.
     */
    "consideration_money"?: ((({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 0.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>))
        | (null)
        | (unknown));
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link GiftCardFundingSource}. Where the value of a gift card load came
     * from, such as an external payment, a Flint payment, an import, or an adjustment, with your
     * reference for it. Shape $.funding_source_type (Required): string. Value enum:
     * "external_payment", "flint_payment", "import". Shape $.customer_id (Optional): string.
     * minLength: 1. maxLength: 255. Shape $.external_reference_id (Required): string. Your
     * reference for the payment or import record that funded this value, such as a POS sale ID.
     * Required; 1 to 255 characters. minLength: 1. maxLength: 255. Shape $.order_id (Optional):
     * string. minLength: 1. maxLength: 255. Shape $.order_manual_payment_id (Optional): string.
     * minLength: 1. maxLength: 255. Shape $.payment_intent_id (Optional): string. The original
     * payment for flint_payment or store_credit value. For standalone paid funding, use a captured
     * payment intent without an order_id. Order-linked payments fund purchased cards or store
     * credit through their order. minLength: 1. maxLength: 255. Shape $.refund_id (Optional):
     * string. Refund that issued this value. Present only when funding_source_type is
     * store_credit. minLength: 1. Shape $.oneOf[1] (Value): {@link
     * GiftCardFundingSourceExternalPayment}. The `external_payment` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[2] (Value): {@link
     * GiftCardFundingSourceFlintPayment}. The `flint_payment` variant of `GiftCardFundingSource`.
     * Shape $.oneOf[3] (Value): {@link GiftCardFundingSourceFlintManualPayment}. The
     * `flint_manual_payment` variant of `GiftCardFundingSource`. Shape $.oneOf[4] (Value): {@link
     * GiftCardFundingSourceImport}. The `import` variant of `GiftCardFundingSource`. Shape
     * $.oneOf[5] (Value): {@link GiftCardFundingSourceAdjustment}. The `adjustment` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[6] (Value): {@link
     * GiftCardFundingSourceGiftCardRefund}. The `gift_card_refund` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[7] (Value): {@link
     * GiftCardFundingSourceGiftCardPurchaseRefundRecovery}. The
     * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. Shape $.oneOf[8]
     * (Value): {@link GiftCardFundingSourceStoreCredit}. The `store_credit` variant of
     * `GiftCardFundingSource`.
     */
    "source": ({
        /** Shape $ (Value): any.  Value enum: "external_payment", "flint_payment", "import". */
        "funding_source_type"?: unknown;
    })
        & (Exclude<GiftCardFundingSource & object, readonly unknown[]>);
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "source_created_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "value_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
});
/**
 * Shape $ (Value): {@link CreateGiftCardLoadRequestInput}. The request body for: Load a gift card.
 */
export type CreateGiftCardLoadRequestInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput} or null. Shape $.anyOf[1] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. Shape $.anyOf[1].amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $.anyOf[1].currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Shape $.anyOf[2] (Value): null.
     */
    "consideration_money"?: ((({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 0.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>))
        | (null));
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link GiftCardFundingSourceInput}. Where the value of a gift card load
     * came from, such as an external payment, a Flint payment, an import, or an adjustment, with
     * your reference for it. Shape $.funding_source_type (Required): string. Value enum:
     * "external_payment", "flint_payment", "import". Shape $.customer_id (Optional): string.
     * minLength: 1. maxLength: 255. Shape $.external_reference_id (Required): string. Your
     * reference for the payment or import record that funded this value, such as a POS sale ID.
     * Required; 1 to 255 characters. minLength: 1. maxLength: 255. Shape $.order_id (Optional):
     * string. minLength: 1. maxLength: 255. Shape $.payment_intent_id (Optional): string. The
     * original payment for flint_payment or store_credit value. For standalone paid funding, use a
     * captured payment intent without an order_id. Order-linked payments fund purchased cards or
     * store credit through their order. minLength: 1. maxLength: 255. Shape $.oneOf[1] (Value):
     * {@link GiftCardFundingSourceExternalPaymentInput}. The `external_payment` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[2] (Value): {@link
     * GiftCardFundingSourceFlintPaymentInput}. The `flint_payment` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[3] (Value): {@link
     * GiftCardFundingSourceFlintManualPaymentInput}. The `flint_manual_payment` variant of
     * `GiftCardFundingSource`. Shape $.oneOf[4] (Value): {@link GiftCardFundingSourceImportInput}.
     * The `import` variant of `GiftCardFundingSource`. Shape $.oneOf[5] (Value): {@link
     * GiftCardFundingSourceAdjustmentInput}. The `adjustment` variant of `GiftCardFundingSource`.
     * Shape $.oneOf[6] (Value): {@link GiftCardFundingSourceGiftCardRefundInput}. The
     * `gift_card_refund` variant of `GiftCardFundingSource`. Shape $.oneOf[7] (Value): {@link
     * GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput}. The
     * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. Shape $.oneOf[8]
     * (Value): {@link GiftCardFundingSourceStoreCreditInput}. The `store_credit` variant of
     * `GiftCardFundingSource`.
     */
    "source": ({
        /** Shape $ (Value): any.  Value enum: "external_payment", "flint_payment", "import". */
        "funding_source_type"?: "external_payment" | "flint_payment" | "import";
    })
        & (Exclude<GiftCardFundingSourceInput & object, readonly unknown[]>)
        & ({
        "order_manual_payment_id"?: never;
    });
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "source_created_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "value_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
});
/**
 * Shape $ (Value): {@link CreateGiftCardLoadResult}. The result of loading a gift card: the
 * updated gift card, the gift card load, and the transactions it created.
 */
export type CreateGiftCardLoadResult = {
    /**
     * Shape $ (Value): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * Shape $ (Value): {@link GiftCardLoad}. Independent funding resource. Value and consideration
     * are separate. External funding and import provenance are merchant-attested; no payment is
     * collected by recording them. Replacement refund lots retain original funding provenance and
     * do not represent new paid funding.
     */
    "gift_card_load": GiftCardLoad;
    /**
     * Shape $ (Value): Array of {@link GiftCardTransaction}. Shape $[] (Value): {@link
     * GiftCardTransaction}. Immutable posted financial movement with signed amount, per-card
     * sequence, merchant sequence and balance snapshots. Corrections create new transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/**
 * Shape $ (Value): {@link CreateGiftCardLoadResultResponse}. A response containing
 * `CreateGiftCardLoadResult` data.
 */
export type CreateGiftCardLoadResultResponse = {
    /**
     * Shape $ (Value): {@link CreateGiftCardLoadResult}. The result of loading a gift card: the
     * updated gift card, the gift card load, and the transactions it created.
     */
    "data": CreateGiftCardLoadResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link CreateGiftCardNotificationRequest}. The request body for: Send a gift
 * card notification.
 */
export type CreateGiftCardNotificationRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "gift_card_id": string;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseRecipient}. Who receives a gift card notification:
     * their `email`, optional `name` and `message`, and an optional `send_at` time.
     */
    "recipient": GiftCardPurchaseRecipient;
    /** Shape $ (Value): string. minLength: 1. */
    "resend_of_notification_id"?: string;
};
/**
 * Shape $ (Value): {@link CreateGiftCardNotificationRequestInput}. The request body for: Send a
 * gift card notification.
 */
export type CreateGiftCardNotificationRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "gift_card_id": string;
    /**
     * Shape $ (Value): {@link GiftCardNotificationRecipientInput}. Who receives a gift card
     * notification: their `email`, optional `name` and `message`, and an optional `send_at` time.
     */
    "recipient": GiftCardNotificationRecipientInput;
    /** Shape $ (Value): string. minLength: 1. */
    "resend_of_notification_id"?: string;
};
/**
 * Shape $ (Value): {@link CreateGiftCardRedemptionRequest}. The request body for: Redeem gift card
 * value.
 */
export type CreateGiftCardRedemptionRequest = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "capture_mode": "automatic" | "manual" | (string & {});
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "gift_card_id": string;
    /**
     * Shape $ (Value): string. Your reference for the sale the redemption pays for. Required; 1 to
     * 255 characters. The value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & ((Exclude<CreateGiftCardRedemptionRequestAutomatic & object, readonly unknown[]>)
    | (Exclude<CreateGiftCardRedemptionRequestManual & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateGiftCardRedemptionRequestAutomatic}. The `automatic` variant of
 * `CreateGiftCardRedemptionRequest`.
 */
export type CreateGiftCardRedemptionRequestAutomatic = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Shape $ (Value): string.  Value enum: "automatic". */
    "capture_mode": "automatic" | (string & {});
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "gift_card_id": string;
    /**
     * Shape $ (Value): string. Your reference for the sale the redemption pays for. Required; 1 to
     * 255 characters. The value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "automatic". */
    "capture_mode": unknown;
}));
/**
 * Shape $ (Value): {@link CreateGiftCardRedemptionRequestAutomaticInput}. The `automatic` variant
 * of `CreateGiftCardRedemptionRequest`.
 */
export type CreateGiftCardRedemptionRequestAutomaticInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Shape $ (Value): string.  Value enum: "automatic". */
    "capture_mode": "automatic";
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "gift_card_id": string;
    /**
     * Shape $ (Value): string. Your reference for the sale the redemption pays for. Required; 1 to
     * 255 characters. The value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "automatic". */
    "capture_mode": ("automatic") & ("automatic");
})
    & ({
    "expires_at"?: never;
}));
/**
 * Shape $ (Value): {@link CreateGiftCardRedemptionRequestInput}. The request body for: Redeem gift
 * card value.
 */
export type CreateGiftCardRedemptionRequestInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "capture_mode": "automatic" | "manual";
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "gift_card_id": string;
    /**
     * Shape $ (Value): string. Your reference for the sale the redemption pays for. Required; 1 to
     * 255 characters. The value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & ((Exclude<CreateGiftCardRedemptionRequestAutomaticInput & object, readonly unknown[]>)
    | (Exclude<CreateGiftCardRedemptionRequestManualInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreateGiftCardRedemptionRequestManual}. The `manual` variant of
 * `CreateGiftCardRedemptionRequest`.
 */
export type CreateGiftCardRedemptionRequestManual = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Shape $ (Value): string.  Value enum: "manual". */
    "capture_mode": "manual" | (string & {});
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "gift_card_id": string;
    /**
     * Shape $ (Value): string. Your reference for the sale the redemption pays for. Required; 1 to
     * 255 characters. The value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & ({
    /** Shape $ (Value): any.  Value enum: "manual". */
    "capture_mode": unknown;
});
/**
 * Shape $ (Value): {@link CreateGiftCardRedemptionRequestManualInput}. The `manual` variant of
 * `CreateGiftCardRedemptionRequest`.
 */
export type CreateGiftCardRedemptionRequestManualInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Shape $ (Value): string.  Value enum: "manual". */
    "capture_mode": "manual";
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "gift_card_id": string;
    /**
     * Shape $ (Value): string. Your reference for the sale the redemption pays for. Required; 1 to
     * 255 characters. The value is preserved exactly as sent. minLength: 1. maxLength: 255.
     */
    "sale_reference": string;
})
    & ({
    /** Shape $ (Value): any.  Value enum: "manual". */
    "capture_mode": ("manual") & ("manual");
});
/** Shape $ (Value): {@link CreateGiftCardRequest}. The request body for: Create a gift card. */
export type CreateGiftCardRequest = {
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD". Value enum: "USD".
     */
    "currency": "USD" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link InitialGiftCardFunding} or null. Shape $.anyOf[1] (Value): {@link
     * InitialGiftCardFunding}. The initial funding for a new gift card: the `source` of the value,
     * the `value_money`, and optional consideration and source time. Shape $.anyOf[2] (Value):
     * null.
     */
    "funding"?: ((InitialGiftCardFunding) | (null));
    /**
     * Shape $ (Value): {@link GiftCardPurchaseRecipient}. Optional recipient notification recorded
     * with issuance. Requires commerce.gift_cards.secrets.write in addition to issuance authority.
     * Who receives a gift card notification: their `email`, optional `name` and `message`, and an
     * optional `send_at` time.
     */
    "notification"?: GiftCardPurchaseRecipient;
};
/**
 * Shape $ (Value): {@link CreateGiftCardRequestInput}. The request body for: Create a gift card.
 */
export type CreateGiftCardRequestInput = {
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD". Value enum: "USD".
     */
    "currency": "USD";
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link InitialGiftCardFundingInput} or null. Shape $.anyOf[1] (Value):
     * {@link InitialGiftCardFundingInput}. The initial funding for a new gift card: the `source`
     * of the value, the `value_money`, and optional consideration and source time. Shape
     * $.anyOf[2] (Value): null.
     */
    "funding"?: ((InitialGiftCardFundingInput) | (null));
    /**
     * Shape $ (Value): {@link GiftCardNotificationRecipientInput}. Optional recipient notification
     * recorded with issuance. Requires commerce.gift_cards.secrets.write in addition to issuance
     * authority. Who receives a gift card notification: their `email`, optional `name` and
     * `message`, and an optional `send_at` time.
     */
    "notification"?: GiftCardNotificationRecipientInput;
};
/**
 * Shape $ (Value): {@link CreateGiftCardResult}. The result of creating a gift card: the card, its
 * transactions, any load and notification, and the code while it can still be recovered.
 */
export type CreateGiftCardResult = {
    /**
     * Shape $ (Value): string. The full current code. Omitted after the 24-hour recovery window or
     * when this code has been replaced.
     */
    "code"?: string;
    /**
     * Shape $ (Value): string. When recovery of this code expires. Omitted when the code cannot be
     * recovered. Format: date-time.
     */
    "code_recovery_expires_at"?: string;
    /**
     * Shape $ (Value): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * Shape $ (Value): {@link GiftCardLoad}. Independent funding resource. Value and consideration
     * are separate. External funding and import provenance are merchant-attested; no payment is
     * collected by recording them. Replacement refund lots retain original funding provenance and
     * do not represent new paid funding.
     */
    "gift_card_load"?: GiftCardLoad;
    /** Shape $ (Value): {@link GiftCardNotification}. A message sent to a gift card recipient. */
    "gift_card_notification"?: GiftCardNotification;
    /**
     * Shape $ (Value): Array of {@link GiftCardTransaction}. Shape $[] (Value): {@link
     * GiftCardTransaction}. Immutable posted financial movement with signed amount, per-card
     * sequence, merchant sequence and balance snapshots. Corrections create new transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/**
 * Shape $ (Value): {@link CreateGiftCardResultResponse}. A response containing
 * `CreateGiftCardResult` data.
 */
export type CreateGiftCardResultResponse = {
    /**
     * Shape $ (Value): {@link CreateGiftCardResult}. The result of creating a gift card: the card,
     * its transactions, any load and notification, and the code while it can still be recovered.
     */
    "data": CreateGiftCardResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link CreateInlineModifierGroupRequestInput}. A modifier group defined inline
 * when creating a modifier set, with its selection limits, modifiers or text rules, and display
 * flags.
 */
export type CreateInlineModifierGroupRequestInput = {
    /**
     * Shape $ (Value): boolean. Whether buyers can select more than one unit of a list modifier.
     * Default: false.
     */
    "allow_quantities"?: boolean;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): integer string. Maximum whole-number quantity for each selected list
     * modifier when allow_quantities is true; fractional quantities are not supported. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "max_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer. Maximum number of distinct modifiers buyers can select from a list
     * group. Omit it for no limit. A modifier set can override this value. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer string. Maximum combined whole-number quantity across selected list
     * modifiers; fractional quantities are not supported. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64.
     */
    "max_total_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): integer string. Minimum whole-number quantity for each selected list
     * modifier when allow_quantities is true; fractional quantities are not supported. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "min_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer. Minimum number of distinct modifiers buyers must select from a
     * list group. Omit it to require no selections. A modifier set can override this value.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): string. Whether buyers choose from a list of modifiers or enter text. On
     * create, inferred as text when text configuration is supplied, otherwise list. Value enum:
     * "list", "text".
     */
    "modifier_group_type"?: "list" | "text";
    /**
     * Shape $ (Value): Array of {@link CreateModifierRequestInput}. Choices in a list group. Only
     * active modifiers whose set override's available is not false are offered to buyers. Text
     * groups do not have choices. Shape $[] (Value): {@link CreateModifierRequestInput}. A
     * modifier to create in a modifier group, with its name, price change, tax category, and
     * default selection.
     */
    "modifiers"?: Array<CreateModifierRequestInput>;
    /**
     * Shape $ (Value): string. Name of the modifier group shown to buyers. minLength: 1.
     * maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): boolean. Whether selections from this group appear in fulfillment details
     * unless overridden for a modifier set.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier group. Only active groups can be
     * offered to buyers; archived groups remain readable and cannot be edited. Default: "active".
     * Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): {@link TextModifierConfigRequestInput}. Text entry rules for a text group.
     * Use text.required to require a value; list groups use min_selected instead. Settings for a
     * text modifier group when creating or updating one: required, multiline, and length limits.
     */
    "text"?: TextModifierConfigRequestInput;
};
