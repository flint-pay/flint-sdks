import type { InputValue } from '../runtime.js';
import type { CreateDeliveryRevocationRequestInput, CreateDeliverySelectionRequestInput } from './types-9.js';
import type {
    DisputesAcceptParams,
    ExpandedCustomerSummary,
    ExpandedPaymentIntentSummary,
    ExpandedSubscriptionPlanSummary,
    ExpandedSubscriptionSummary
} from './types-24.js';
import type {
    DeliveryAvailability,
    DeliveryAvailabilityRequestInput,
    DeliveryBuyerLocationResource,
    DeliveryInputRequirement,
    DeferredPromotion,
    DeliveryInventoryReservationSummary,
    DeliveryBusinessDayRange,
    DeliveryBusinessDayRangeRequestInput,
    DeliveryCountryConditionRequestInput
} from './types-17.js';
import type { Address } from './types-0.js';
import type { DeliveryRecipientResource } from './types-21.js';
import type { MoneyValue, OrderAuthorizationAmounts, OrderCharge, MoneyValueInput } from './types-39.js';
import type {
    DeliveryPickupDetails,
    DeliveryPlan,
    DeliveryPricingTierBand,
    DeliveryPostalCodeCondition,
    DeliveryPostalCodeConditionRequestInput
} from './types-19.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-38.js';
import type { PartnerWebhookEnvelope, PaymentCollection } from './types-44.js';
import type { ResponseMeta } from './types-54.js';
import type { BuyerAction } from './types-1.js';
import type { CheckoutBuyerContact } from './types-5.js';
import type { CustomFieldAnswer } from './types-15.js';
import type { Fulfillment } from './types-25.js';
import type { InventoryRoutingSource } from './types-30.js';
import type {
    OrderDeliveryDestination,
    OrderDeliverySummary,
    OrderDiscount,
    OrderGiftCardEstimate,
    OrderGiftCardSelection,
    OrderGiftCardSettlement,
    OrderHandover,
    OrderLineItem
} from './types-40.js';
import type { OrderPaymentAttempt, OrderReturnCreditSettlement, OrderSettlementAmounts, OrderTax } from './types-41.js';
import type { PricingAmounts } from './types-49.js';
import type { SetupCollection } from './types-59.js';
import type { TicketedEvent, Tip } from './types-66.js';
import type { CheckoutSession } from './types-6.js';
import type {
    DeliveryPricingTierBandRequestInput,
    DeliveryRadiusCondition,
    DeliveryRadiusConditionRequestInput
} from './types-20.js';
/** The parent and exact child identity permanently fenced by this revocation. */
export type DeliveryRevocationTarget = ({
    /**
     * ID of the delivery method that owns the targeted revision. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id"?: string;
    /**
     * ID of the immutable revision to fence. It must belong to delivery_method_id. Example:
     * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id"?: string;
    /**
     * ID of the delivery rate callback that owns the targeted revision or signing key. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id"?: string;
    /**
     * ID of the immutable revision to fence. It must belong to delivery_rate_callback_id. Example:
     * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     */
    "delivery_rate_callback_revision_id"?: string;
    /**
     * ID of the HMAC signing key to fence. It must be the named callback's current or previous
     * key; secret material is never returned. Example: "cbkey_00112233445566778899aabb".
     */
    "delivery_rate_callback_signing_key_id"?: string;
    /**
     * Exact recorded geography version of location_id to fence. Future and unrecorded versions are
     * not accepted. Format: int64. minimum: 1.
     */
    "location_geography_version"?: number;
    /**
     * ID of the Location that recorded the targeted geography version. Example:
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
        | "delivery_method_revision"
        | (string & {});
})
    & ((Exclude<DeliveryRevocationTargetLocationGeography & object, readonly unknown[]>)
    | (Exclude<DeliveryRevocationTargetDeliveryRateCallbackSigningKey & object, readonly unknown[]>)
    | (Exclude<DeliveryRevocationTargetDeliveryRateCallbackRevision & object, readonly unknown[]>)
    | (Exclude<DeliveryRevocationTargetDeliveryMethodRevision & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** Fences one immutable revision of the named delivery method. */
export type DeliveryRevocationTargetDeliveryMethodRevision = {
    /**
     * ID of the delivery method that owns the targeted revision. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id": string;
    /**
     * ID of the immutable revision to fence. It must belong to delivery_method_id. Example:
     * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id": string;
    /**
     * Fences one immutable revision of the named delivery method. Value enum:
     * "delivery_method_revision".
     */
    "target_type": "delivery_method_revision" | (string & {});
};
/** Fences one immutable revision of the named delivery rate callback. */
export type DeliveryRevocationTargetDeliveryRateCallbackRevision = {
    /**
     * ID of the delivery rate callback that owns the targeted revision or signing key. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id": string;
    /**
     * ID of the immutable revision to fence. It must belong to delivery_rate_callback_id. Example:
     * "dcbr_01KEZF7C003QAPFXXMCHC59T5J".
     */
    "delivery_rate_callback_revision_id": string;
    /**
     * Fences one immutable revision of the named delivery rate callback. Value enum:
     * "delivery_rate_callback_revision".
     */
    "target_type": "delivery_rate_callback_revision" | (string & {});
};
/** Fences one current or previous HMAC signing key of the named delivery rate callback. */
export type DeliveryRevocationTargetDeliveryRateCallbackSigningKey = {
    /**
     * ID of the delivery rate callback that owns the targeted revision or signing key. Example:
     * "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1".
     */
    "delivery_rate_callback_id": string;
    /**
     * ID of the HMAC signing key to fence. It must be the named callback's current or previous
     * key; secret material is never returned. Example: "cbkey_00112233445566778899aabb".
     */
    "delivery_rate_callback_signing_key_id": string;
    /**
     * Fences one current or previous HMAC signing key of the named delivery rate callback. Value
     * enum: "delivery_rate_callback_signing_key".
     */
    "target_type": "delivery_rate_callback_signing_key" | (string & {});
};
/** Fences one geography version recorded by the named Location. */
export type DeliveryRevocationTargetLocationGeography = {
    /**
     * Exact recorded geography version of location_id to fence. Future and unrecorded versions are
     * not accepted. Format: int64. minimum: 1.
     */
    "location_geography_version": number;
    /**
     * ID of the Location that recorded the targeted geography version. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Fences one geography version recorded by the named Location. Value enum:
     * "location_geography".
     */
    "target_type": "location_geography" | (string & {});
};
export type DeliveryRevocationsCreateParams = (InputValue<CreateDeliveryRevocationRequestInput>)
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
export type DeliveryRevocationsGetParams = DisputesAcceptParams;
export type DeliveryRevocationsListParams = {
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
     * Filter by revocation target type. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "location_geography", "delivery_rate_callback_signing_key",
     * "delivery_rate_callback_revision", "delivery_method_revision". Value enum:
     * "location_geography", "delivery_rate_callback_signing_key",
     * "delivery_rate_callback_revision", "delivery_method_revision". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "location_geography", "delivery_rate_callback_signing_key",
     * "delivery_rate_callback_revision", "delivery_method_revision". anyOf[1][] (Value): string.
     * Value enum: "location_geography", "delivery_rate_callback_signing_key",
     * "delivery_rate_callback_revision", "delivery_method_revision". anyOf[2] (Value): string.
     * Value enum: "location_geography", "delivery_rate_callback_signing_key",
     * "delivery_rate_callback_revision", "delivery_method_revision".
     */
    "target_type"?: InputValue<("location_geography"
        | "delivery_rate_callback_signing_key"
        | "delivery_rate_callback_revision"
        | "delivery_method_revision")
        | readonly ("location_geography"
        | "delivery_rate_callback_signing_key"
        | "delivery_rate_callback_revision"
        | "delivery_method_revision")[]>;
    /**
     * Filter by revocation reason. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "unsafe_configuration", "location_unavailable", "credential_compromise",
     * "legal_requirement", "other". Value enum: "unsafe_configuration", "location_unavailable",
     * "credential_compromise", "legal_requirement", "other". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "unsafe_configuration", "location_unavailable",
     * "credential_compromise", "legal_requirement", "other". anyOf[1][] (Value): string. Value
     * enum: "unsafe_configuration", "location_unavailable", "credential_compromise",
     * "legal_requirement", "other". anyOf[2] (Value): string. Value enum: "unsafe_configuration",
     * "location_unavailable", "credential_compromise", "legal_requirement", "other".
     */
    "reason"?: InputValue<("unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other")
        | readonly ("unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
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
/** Estimate rule for a scheduled-window delivery method, defined by its `availability` schedule. */
export type DeliveryScheduleWindowRule = {
    /**
     * When windows can be offered. When a delivery method can be scheduled: weekly intervals,
     * blackout intervals, lead time, and how far ahead a buyer can book.
     */
    "availability": DeliveryAvailability;
};
/**
 * Scheduled-window estimate rule you supply for a delivery method, defined by its `availability`
 * schedule.
 */
export type DeliveryScheduleWindowRuleRequestInput = {
    /**
     * When windows can be offered. When a delivery method can be scheduled: weekly intervals,
     * blackout intervals, lead time, and how far ahead a buyer can book.
     */
    "availability": DeliveryAvailabilityRequestInput;
};
/**
 * The delivery choice selected for a checkout or order. Poll GET
 * /v1/delivery-selections/{delivery_selection_id} or list delivery selections to read its current
 * status.
 */
export type DeliverySelection = {
    /**
     * Delivery charge committed by this selection. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or
     * dashboard credential. The normalized buyer address or coordinate used for this quote.
     */
    "buyer_location"?: DeliveryBuyerLocationResource;
    /**
     * Deadline after which calculated pricing evidence is no longer valid. Always present with an
     * API key or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "calculation_expires_at"?: string;
    /**
     * Checkout session that owns the selection. Always present with an API key or dashboard
     * credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id"?: string;
    /**
     * One chosen option for each required choice group. [] (Value): {@link
     * DeliverySelectionChoiceResource}. A delivery option chosen for one choice group in a
     * delivery selection, with its method, amounts, type-specific details, timezone, and any
     * chosen delivery window.
     */
    "choices": Array<DeliverySelectionChoiceResource>;
    /**
     * Time the selection was created. Always present with an API key or dashboard credential.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /** Quote from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV". */
    "delivery_quote_id": string;
    /** Stable delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". */
    "delivery_selection_id": string;
    /**
     * Destination address snapshot used for delivery evaluation. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. A postal address. Every
     * address has country. Addresses Flint checked as complete (customer and saved addresses,
     * merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient
     * and pickup addresses) always have line1 and city, and US ones always have state and
     * postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold
     * only what was provided, such as postal_code and country.
     */
    "destination_address"?: Address;
    /**
     * Deadline after which this provisional selection can no longer be committed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Inputs this selection still needs before payment: each destination_address member a chosen
     * shipment or local delivery needs that the stored address lacks (line1, city, and country,
     * plus state and postal_code in the US), and each recipient field a chosen option requires
     * that the selection does not include. Each entry repeats the quote's requirement for that
     * option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED,
     * reason configuration_required, and the delivery_selection reference until a new delivery
     * selection includes them. Empty when nothing is missing, and always empty unless status is
     * selected. [] (Value): {@link DeliveryInputRequirement}. An input a delivery method needs,
     * such as an address field or time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /** Buyer-provided delivery instructions. Returned with an API key or dashboard credential. */
    "instructions"?: string;
    /**
     * Ordered lifecycle events recorded for this selection. [] (Value): {@link
     * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's history,
     * with the new `status`, the `reason`, and when it happened.
     */
    "lifecycle_events"?: Array<DeliverySelectionLifecycleEventResource>;
    /**
     * Time the selection lifecycle last changed. Always present with an API key or dashboard
     * credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "lifecycle_updated_at"?: string;
    /**
     * The deadline that set expires_at: the earliest of the chosen options' guarantee, the
     * calculation expiry, and the maximum selection lifetime. A tie between the calculation and
     * the guarantee reports calculation_expiry. Always present with an API key or dashboard
     * credential. - `selection_guarantee_expiry`: The earliest guarantee among the chosen options
     * and delivery windows comes first. When the selection holds stock, the hold ends at this
     * deadline too. - `calculation_expiry`: The calculation the selection was priced against
     * expires first. It ends no later than the checkout session's expires_at, and earlier when an
     * applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches the
     * longest a provisional selection can last, 24 hours after it was created. Value enum:
     * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
     */
    "limiting_deadline_reason"?: "selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {});
    /**
     * Order affected by the selection. Always present with an API key or dashboard credential.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Availability state of merchant-private selection evidence. Value enum: "available",
     * "redacted".
     */
    "private_data_status"?: "available" | "redacted" | (string & {});
    /**
     * Recipient details captured with the selection. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified. The person receiving a delivery
     * selection, with optional `name`, `email`, and `phone`.
     */
    "recipient"?: DeliveryRecipientResource;
    /**
     * Time merchant-private selection evidence was redacted. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "redacted_at"?: string;
    /**
     * Current selection lifecycle status. - `selected`: These choices are provisional and can be
     * replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They
     * are frozen until payment finishes. - `committed`: Payment fixed these choices on the order.
     * - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no
     * longer usable because its deadline passed. - `released`: These choices were withdrawn.
     * Create a new selection before paying for delivery. Value enum: "selected",
     * "locked_for_payment", "committed", "superseded", "expired", "released".
     */
    "status": "selected"
        | "locked_for_payment"
        | "committed"
        | "superseded"
        | "expired"
        | "released"
        | (string & {});
    /**
     * Contains release while status is selected and the selection belongs to a checkout session:
     * POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
     * Empty in every other status. Independent of caller permissions. [] enum: "release". []
     * (Value): string. Value enum: "release".
     */
    "supported_actions": Array<"release" | (string & {})>;
};
/**
 * A delivery option chosen for one choice group in a delivery selection, with its method, amounts,
 * type-specific details, timezone, and any chosen delivery window.
 */
export type DeliverySelectionChoiceResource = {
    /**
     * Delivery price before discounts and tax. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * ID of the quote choice group these items belong to. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     */
    "delivery_choice_group_id": string;
    /**
     * ID of the delivery method providing this choice. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id": string;
    /** ID of the option chosen from the quote. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923". */
    "delivery_option_id": string;
    /**
     * Whether this choice delivers the items together or in separate shipments. Whether a delivery
     * option is fulfilled in one delivery or several, with the first arrival time, completion
     * time, and delivery count.
     */
    "delivery_plan": DeliveryPlan;
    /**
     * ID of the chosen offered window. Omitted when no offered window was chosen. Example:
     * "fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d".
     */
    "delivery_window_id"?: string;
    /**
     * Buyer-facing description captured from the chosen method. Omitted when the method had none.
     */
    "description"?: string;
    /**
     * Always present with an API key or dashboard credential. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "discount_money"?: MoneyValue;
    /**
     * Window choice and buyer instructions stored with this selection. Omitted when neither was
     * supplied. Buyer input for a selected delivery option: a `delivery_window_id` where the
     * option uses delivery windows, and optional `instructions`.
     */
    "input"?: DeliverySelectionInstructionsRequest;
    /**
     * Local delivery service details, present for local_delivery choices. Details of a local
     * delivery option: instructions and service level.
     */
    "local_delivery"?: DeliveryShipmentDetails;
    /**
     * Reference supplied by the merchant's rate service for this option. Omitted when none was
     * supplied.
     */
    "merchant_reference"?: string;
    /** Buyer-facing name captured from the chosen method. */
    "name": string;
    /**
     * Always present with an API key or dashboard credential. Null when the choice has no order
     * charge. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id"?: string | null;
    /**
     * ID of the order this delivery choice belongs to, including the parent of order_charge_id
     * when a charge applies. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Pickup Location and collection details, present for pickup choices. Pickup details of a
     * delivery option: the pickup mode and the pickup location.
     */
    "pickup"?: DeliveryPickupDetails;
    /**
     * Shipping service details, present for shipment choices. Shipment-specific details of a
     * delivery option or choice: the `service_level` and buyer `instructions`.
     */
    "shipment"?: DeliveryShipmentDetails;
    /** Key identifying the same items and allowed delivery types across quotes. */
    "stable_key": string;
    /**
     * Always present with an API key or dashboard credential. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tax_money"?: MoneyValue;
    /**
     * IANA timezone for displaying window_start_at and window_end_at. Example: "America/New_York".
     */
    "timezone"?: string;
    /**
     * Delivery price after discounts and tax. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** How this choice delivers the items. Value enum: "shipment", "pickup", "local_delivery". */
    "type": "shipment" | "pickup" | "local_delivery" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string;
};
export type DeliverySelectionCommittedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "buyer_location"?: DeliveryBuyerLocationResource;
            "calculation_expires_at"?: string;
            "checkout_session_id"?: string;
            "choices": Array<DeliverySelectionChoiceResource>;
            "created_at"?: string;
            "delivery_quote_id": string;
            "delivery_selection_id": string;
            "destination_address"?: Address;
            "expires_at": string;
            "input_requirements": Array<DeliveryInputRequirement>;
            "instructions"?: string;
            "lifecycle_events"?: Array<DeliverySelectionLifecycleEventResource>;
            "lifecycle_updated_at"?: string;
            "limiting_deadline_reason"?: "selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {});
            "order_id"?: string;
            "private_data_status"?: "available" | "redacted" | (string & {});
            "recipient"?: DeliveryRecipientResource;
            "redacted_at"?: string;
            "status": "selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {});
            "supported_actions": Array<"release" | (string & {})>;
        };
        "previous_attributes"?: Partial<DeliverySelection>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_selection.committed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "buyer_location"?: DeliveryBuyerLocationResource;
            "calculation_expires_at"?: string;
            "checkout_session_id"?: string;
            "choices": Array<DeliverySelectionChoiceResource>;
            "created_at"?: string;
            "delivery_quote_id": string;
            "delivery_selection_id": string;
            "destination_address"?: Address;
            "expires_at": string;
            "input_requirements": Array<DeliveryInputRequirement>;
            "instructions"?: string;
            "lifecycle_events"?: Array<DeliverySelectionLifecycleEventResource>;
            "lifecycle_updated_at"?: string;
            "limiting_deadline_reason"?: "selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {});
            "order_id"?: string;
            "private_data_status"?: "available" | "redacted" | (string & {});
            "recipient"?: DeliveryRecipientResource;
            "redacted_at"?: string;
            "status": "selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {});
            "supported_actions": Array<"release" | (string & {})>;
        };
        "previous_attributes"?: Partial<DeliverySelection>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_selection.committed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_selection.committed";
});
/**
 * The `delivery_selection.committed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type DeliverySelectionCommittedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Delivery charge
     * committed by this selection. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.buyer_location (Optional): {@link DeliveryBuyerLocationResource}.
     * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or
     * dashboard credential. The normalized buyer address or coordinate used for this quote.
     * object.calculation_expires_at (Optional): string. Deadline after which calculated pricing
     * evidence is no longer valid. Always present with an API key or dashboard credential. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.checkout_session_id (Optional): string.
     * Checkout session that owns the selection. Always present with an API key or dashboard
     * credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.choices (Required): Array of
     * {@link DeliverySelectionChoiceResource}. One chosen option for each required choice group.
     * object.choices[] (Value): {@link DeliverySelectionChoiceResource}. A delivery option chosen
     * for one choice group in a delivery selection, with its method, amounts, type-specific
     * details, timezone, and any chosen delivery window. object.created_at (Optional): string.
     * Time the selection was created. Always present with an API key or dashboard credential.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.delivery_quote_id (Required):
     * string. Quote from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     * object.delivery_selection_id (Required): string. Stable delivery selection ID. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.destination_address (Optional): {@link Address}.
     * Destination address snapshot used for delivery evaluation. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. A postal address. Every
     * address has country. Addresses Flint checked as complete (customer and saved addresses,
     * merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient
     * and pickup addresses) always have line1 and city, and US ones always have state and
     * postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold
     * only what was provided, such as postal_code and country. object.expires_at (Required):
     * string. Deadline after which this provisional selection can no longer be committed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.input_requirements (Required): Array of
     * {@link DeliveryInputRequirement}. Inputs this selection still needs before payment: each
     * destination_address member a chosen shipment or local delivery needs that the stored address
     * lacks (line1, city, and country, plus state and postal_code in the US), and each recipient
     * field a chosen option requires that the selection does not include. Each entry repeats the
     * quote's requirement for that option, with the same delivery_input_requirement_id. Payment
     * fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection
     * reference until a new delivery selection includes them. Empty when nothing is missing, and
     * always empty unless status is selected. object.input_requirements[] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint. object.instructions (Optional):
     * string. Buyer-provided delivery instructions. Returned with an API key or dashboard
     * credential. object.lifecycle_events (Optional): Array of {@link
     * DeliverySelectionLifecycleEventResource}. Ordered lifecycle events recorded for this
     * selection. object.lifecycle_events[] (Value): {@link
     * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's history,
     * with the new `status`, the `reason`, and when it happened. object.lifecycle_updated_at
     * (Optional): string. Time the selection lifecycle last changed. Always present with an API
     * key or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.limiting_deadline_reason (Optional): string. The deadline that set expires_at: the
     * earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection
     * lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always
     * present with an API key or dashboard credential. - `selection_guarantee_expiry`: The
     * earliest guarantee among the chosen options and delivery windows comes first. When the
     * selection holds stock, the hold ends at this deadline too. - `calculation_expiry`: The
     * calculation the selection was priced against expires first. It ends no later than the
     * checkout session's expires_at, and earlier when an applied promotion ends first. -
     * `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can
     * last, 24 hours after it was created. Value enum: "selection_guarantee_expiry",
     * "calculation_expiry", "selection_maximum_lifetime". object.order_id (Optional): string.
     * Order affected by the selection. Always present with an API key or dashboard credential.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.private_data_status (Optional): string.
     * Availability state of merchant-private selection evidence. Value enum: "available",
     * "redacted". object.recipient (Optional): {@link DeliveryRecipientResource}. Recipient
     * details captured with the selection. Omitted for a checkout session credential that doesn't
     * act for the customer the buyer verified. The person receiving a delivery selection, with
     * optional `name`, `email`, and `phone`. object.redacted_at (Optional): string. Time
     * merchant-private selection evidence was redacted. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Current selection lifecycle
     * status. - `selected`: These choices are provisional and can be replaced before payment. -
     * `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment
     * finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer
     * selection replaced these choices. - `expired`: The selection is no longer usable because its
     * deadline passed. - `released`: These choices were withdrawn. Create a new selection before
     * paying for delivery. Value enum: "selected", "locked_for_payment", "committed",
     * "superseded", "expired", "released". object.supported_actions (Required): Array of string.
     * Contains release while status is selected and the selection belongs to a checkout session:
     * POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
     * Empty in every other status. Independent of caller permissions. [] enum: "release".
     * object.supported_actions[] (Value): string. Value enum: "release". previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Delivery charge committed by this
         * selection. Monetary amount represented as integer minor units plus an ISO 4217 currency
         * code. buyer_location (Optional): {@link DeliveryBuyerLocationResource}. Buyer location
         * snapshot used to evaluate pickup proximity. Returned with an API key or dashboard
         * credential. The normalized buyer address or coordinate used for this quote.
         * calculation_expires_at (Optional): string. Deadline after which calculated pricing
         * evidence is no longer valid. Always present with an API key or dashboard credential.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id (Optional):
         * string. Checkout session that owns the selection. Always present with an API key or
         * dashboard credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN". choices (Required):
         * Array of {@link DeliverySelectionChoiceResource}. One chosen option for each required
         * choice group. choices[] (Value): {@link DeliverySelectionChoiceResource}. A delivery
         * option chosen for one choice group in a delivery selection, with its method, amounts,
         * type-specific details, timezone, and any chosen delivery window. created_at (Optional):
         * string. Time the selection was created. Always present with an API key or dashboard
         * credential. Format: date-time. Example: "2026-08-02T16:00:00Z". delivery_quote_id
         * (Required): string. Quote from which this selection was made. Example:
         * "dqt_01KEZF7C009EB1AVCDJBN4BBVV". delivery_selection_id (Required): string. Stable
         * delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". destination_address
         * (Optional): {@link Address}. Destination address snapshot used for delivery evaluation.
         * Omitted for a checkout session credential that doesn't act for the customer the buyer
         * verified. A postal address. Every address has country. Addresses Flint checked as
         * complete (customer and saved addresses, merchant, location, invoice, order delivery
         * destination, tax identity, fulfillment recipient and pickup addresses) always have line1
         * and city, and US ones always have state and postal_code. Delivery quote destinations,
         * buyer locations and postal-code tax locations hold only what was provided, such as
         * postal_code and country. expires_at (Required): string. Deadline after which this
         * provisional selection can no longer be committed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". input_requirements (Required): Array of {@link
         * DeliveryInputRequirement}. Inputs this selection still needs before payment: each
         * destination_address member a chosen shipment or local delivery needs that the stored
         * address lacks (line1, city, and country, plus state and postal_code in the US), and each
         * recipient field a chosen option requires that the selection does not include. Each entry
         * repeats the quote's requirement for that option, with the same
         * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
         * configuration_required, and the delivery_selection reference until a new delivery
         * selection includes them. Empty when nothing is missing, and always empty unless status
         * is selected. input_requirements[] (Value): {@link DeliveryInputRequirement}. An input a
         * delivery method needs, such as an address field or time window, with its `field_path`,
         * purpose, and constraint. instructions (Optional): string. Buyer-provided delivery
         * instructions. Returned with an API key or dashboard credential. lifecycle_events
         * (Optional): Array of {@link DeliverySelectionLifecycleEventResource}. Ordered lifecycle
         * events recorded for this selection. lifecycle_events[] (Value): {@link
         * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's
         * history, with the new `status`, the `reason`, and when it happened. lifecycle_updated_at
         * (Optional): string. Time the selection lifecycle last changed. Always present with an
         * API key or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * limiting_deadline_reason (Optional): string. The deadline that set expires_at: the
         * earliest of the chosen options' guarantee, the calculation expiry, and the maximum
         * selection lifetime. A tie between the calculation and the guarantee reports
         * calculation_expiry. Always present with an API key or dashboard credential. -
         * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and
         * delivery windows comes first. When the selection holds stock, the hold ends at this
         * deadline too. - `calculation_expiry`: The calculation the selection was priced against
         * expires first. It ends no later than the checkout session's expires_at, and earlier when
         * an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches
         * the longest a provisional selection can last, 24 hours after it was created. Value enum:
         * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
         * order_id (Optional): string. Order affected by the selection. Always present with an API
         * key or dashboard credential. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * private_data_status (Optional): string. Availability state of merchant-private selection
         * evidence. Value enum: "available", "redacted". recipient (Optional): {@link
         * DeliveryRecipientResource}. Recipient details captured with the selection. Omitted for a
         * checkout session credential that doesn't act for the customer the buyer verified. The
         * person receiving a delivery selection, with optional `name`, `email`, and `phone`.
         * redacted_at (Optional): string. Time merchant-private selection evidence was redacted.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required): string. Current
         * selection lifecycle status. - `selected`: These choices are provisional and can be
         * replaced before payment. - `locked_for_payment`: A payment attempt owns these choices.
         * They are frozen until payment finishes. - `committed`: Payment fixed these choices on
         * the order. - `superseded`: A newer selection replaced these choices. - `expired`: The
         * selection is no longer usable because its deadline passed. - `released`: These choices
         * were withdrawn. Create a new selection before paying for delivery. Value enum:
         * "selected", "locked_for_payment", "committed", "superseded", "expired", "released".
         * supported_actions (Required): Array of string. Contains release while status is selected
         * and the selection belongs to a checkout session: POST
         * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
         * Empty in every other status. Independent of caller permissions. [] enum: "release".
         * supported_actions[] (Value): string. Value enum: "release".
         */
        "object": {
            /**
             * Delivery charge committed by this selection. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key
             * or dashboard credential. The normalized buyer address or coordinate used for this
             * quote.
             */
            "buyer_location"?: DeliveryBuyerLocationResource;
            /**
             * Deadline after which calculated pricing evidence is no longer valid. Always present
             * with an API key or dashboard credential. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "calculation_expires_at"?: string;
            /**
             * Checkout session that owns the selection. Always present with an API key or
             * dashboard credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * One chosen option for each required choice group. [] (Value): {@link
             * DeliverySelectionChoiceResource}. A delivery option chosen for one choice group in a
             * delivery selection, with its method, amounts, type-specific details, timezone, and
             * any chosen delivery window.
             */
            "choices": Array<DeliverySelectionChoiceResource>;
            /**
             * Time the selection was created. Always present with an API key or dashboard
             * credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Quote from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
             */
            "delivery_quote_id": string;
            /** Stable delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". */
            "delivery_selection_id": string;
            /**
             * Destination address snapshot used for delivery evaluation. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. A postal
             * address. Every address has country. Addresses Flint checked as complete (customer
             * and saved addresses, merchant, location, invoice, order delivery destination, tax
             * identity, fulfillment recipient and pickup addresses) always have line1 and city,
             * and US ones always have state and postal_code. Delivery quote destinations, buyer
             * locations and postal-code tax locations hold only what was provided, such as
             * postal_code and country.
             */
            "destination_address"?: Address;
            /**
             * Deadline after which this provisional selection can no longer be committed. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at": string;
            /**
             * Inputs this selection still needs before payment: each destination_address member a
             * chosen shipment or local delivery needs that the stored address lacks (line1, city,
             * and country, plus state and postal_code in the US), and each recipient field a
             * chosen option requires that the selection does not include. Each entry repeats the
             * quote's requirement for that option, with the same delivery_input_requirement_id.
             * Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the
             * delivery_selection reference until a new delivery selection includes them. Empty
             * when nothing is missing, and always empty unless status is selected. [] (Value):
             * {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
             * address field or time window, with its `field_path`, purpose, and constraint.
             */
            "input_requirements": Array<DeliveryInputRequirement>;
            /**
             * Buyer-provided delivery instructions. Returned with an API key or dashboard
             * credential.
             */
            "instructions"?: string;
            /**
             * Ordered lifecycle events recorded for this selection. [] (Value): {@link
             * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's
             * history, with the new `status`, the `reason`, and when it happened.
             */
            "lifecycle_events"?: Array<DeliverySelectionLifecycleEventResource>;
            /**
             * Time the selection lifecycle last changed. Always present with an API key or
             * dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "lifecycle_updated_at"?: string;
            /**
             * The deadline that set expires_at: the earliest of the chosen options' guarantee, the
             * calculation expiry, and the maximum selection lifetime. A tie between the
             * calculation and the guarantee reports calculation_expiry. Always present with an API
             * key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee
             * among the chosen options and delivery windows comes first. When the selection holds
             * stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation
             * the selection was priced against expires first. It ends no later than the checkout
             * session's expires_at, and earlier when an applied promotion ends first. -
             * `selection_maximum_lifetime`: The selection reaches the longest a provisional
             * selection can last, 24 hours after it was created. Value enum:
             * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
             */
            "limiting_deadline_reason"?: "selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {});
            /**
             * Order affected by the selection. Always present with an API key or dashboard
             * credential. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Availability state of merchant-private selection evidence. Value enum: "available",
             * "redacted".
             */
            "private_data_status"?: "available" | "redacted" | (string & {});
            /**
             * Recipient details captured with the selection. Omitted for a checkout session
             * credential that doesn't act for the customer the buyer verified. The person
             * receiving a delivery selection, with optional `name`, `email`, and `phone`.
             */
            "recipient"?: DeliveryRecipientResource;
            /**
             * Time merchant-private selection evidence was redacted. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "redacted_at"?: string;
            /**
             * Current selection lifecycle status. - `selected`: These choices are provisional and
             * can be replaced before payment. - `locked_for_payment`: A payment attempt owns these
             * choices. They are frozen until payment finishes. - `committed`: Payment fixed these
             * choices on the order. - `superseded`: A newer selection replaced these choices. -
             * `expired`: The selection is no longer usable because its deadline passed. -
             * `released`: These choices were withdrawn. Create a new selection before paying for
             * delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded",
             * "expired", "released".
             */
            "status": "selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {});
            /**
             * Contains release while status is selected and the selection belongs to a checkout
             * session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from
             * the checkout. Empty in every other status. Independent of caller permissions. []
             * enum: "release". [] (Value): string. Value enum: "release".
             */
            "supported_actions": Array<"release" | (string & {})>;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliverySelection>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_selection.committed". */
    "event_type"?: "delivery_selection.committed";
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
 * The `delivery_selection.committed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type DeliverySelectionCommittedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Delivery charge
     * committed by this selection. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.buyer_location (Optional): {@link DeliveryBuyerLocationResource}.
     * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or
     * dashboard credential. The normalized buyer address or coordinate used for this quote.
     * object.calculation_expires_at (Optional): string. Deadline after which calculated pricing
     * evidence is no longer valid. Always present with an API key or dashboard credential. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.checkout_session_id (Optional): string.
     * Checkout session that owns the selection. Always present with an API key or dashboard
     * credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.choices (Required): Array of
     * {@link DeliverySelectionChoiceResource}. One chosen option for each required choice group.
     * object.choices[] (Value): {@link DeliverySelectionChoiceResource}. A delivery option chosen
     * for one choice group in a delivery selection, with its method, amounts, type-specific
     * details, timezone, and any chosen delivery window. object.created_at (Optional): string.
     * Time the selection was created. Always present with an API key or dashboard credential.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.delivery_quote_id (Required):
     * string. Quote from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     * object.delivery_selection_id (Required): string. Stable delivery selection ID. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.destination_address (Optional): {@link Address}.
     * Destination address snapshot used for delivery evaluation. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. A postal address. Every
     * address has country. Addresses Flint checked as complete (customer and saved addresses,
     * merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient
     * and pickup addresses) always have line1 and city, and US ones always have state and
     * postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold
     * only what was provided, such as postal_code and country. object.expires_at (Required):
     * string. Deadline after which this provisional selection can no longer be committed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.input_requirements (Required): Array of
     * {@link DeliveryInputRequirement}. Inputs this selection still needs before payment: each
     * destination_address member a chosen shipment or local delivery needs that the stored address
     * lacks (line1, city, and country, plus state and postal_code in the US), and each recipient
     * field a chosen option requires that the selection does not include. Each entry repeats the
     * quote's requirement for that option, with the same delivery_input_requirement_id. Payment
     * fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection
     * reference until a new delivery selection includes them. Empty when nothing is missing, and
     * always empty unless status is selected. object.input_requirements[] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint. object.instructions (Optional):
     * string. Buyer-provided delivery instructions. Returned with an API key or dashboard
     * credential. object.lifecycle_events (Optional): Array of {@link
     * DeliverySelectionLifecycleEventResource}. Ordered lifecycle events recorded for this
     * selection. object.lifecycle_events[] (Value): {@link
     * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's history,
     * with the new `status`, the `reason`, and when it happened. object.lifecycle_updated_at
     * (Optional): string. Time the selection lifecycle last changed. Always present with an API
     * key or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.limiting_deadline_reason (Optional): string. The deadline that set expires_at: the
     * earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection
     * lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always
     * present with an API key or dashboard credential. - `selection_guarantee_expiry`: The
     * earliest guarantee among the chosen options and delivery windows comes first. When the
     * selection holds stock, the hold ends at this deadline too. - `calculation_expiry`: The
     * calculation the selection was priced against expires first. It ends no later than the
     * checkout session's expires_at, and earlier when an applied promotion ends first. -
     * `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can
     * last, 24 hours after it was created. Value enum: "selection_guarantee_expiry",
     * "calculation_expiry", "selection_maximum_lifetime". object.order_id (Optional): string.
     * Order affected by the selection. Always present with an API key or dashboard credential.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.private_data_status (Optional): string.
     * Availability state of merchant-private selection evidence. Value enum: "available",
     * "redacted". object.recipient (Optional): {@link DeliveryRecipientResource}. Recipient
     * details captured with the selection. Omitted for a checkout session credential that doesn't
     * act for the customer the buyer verified. The person receiving a delivery selection, with
     * optional `name`, `email`, and `phone`. object.redacted_at (Optional): string. Time
     * merchant-private selection evidence was redacted. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Current selection lifecycle
     * status. - `selected`: These choices are provisional and can be replaced before payment. -
     * `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment
     * finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer
     * selection replaced these choices. - `expired`: The selection is no longer usable because its
     * deadline passed. - `released`: These choices were withdrawn. Create a new selection before
     * paying for delivery. Value enum: "selected", "locked_for_payment", "committed",
     * "superseded", "expired", "released". object.supported_actions (Required): Array of string.
     * Contains release while status is selected and the selection belongs to a checkout session:
     * POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
     * Empty in every other status. Independent of caller permissions. [] enum: "release".
     * object.supported_actions[] (Value): string. Value enum: "release". previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Delivery charge committed by this
         * selection. Monetary amount represented as integer minor units plus an ISO 4217 currency
         * code. buyer_location (Optional): {@link DeliveryBuyerLocationResource}. Buyer location
         * snapshot used to evaluate pickup proximity. Returned with an API key or dashboard
         * credential. The normalized buyer address or coordinate used for this quote.
         * calculation_expires_at (Optional): string. Deadline after which calculated pricing
         * evidence is no longer valid. Always present with an API key or dashboard credential.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". checkout_session_id (Optional):
         * string. Checkout session that owns the selection. Always present with an API key or
         * dashboard credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN". choices (Required):
         * Array of {@link DeliverySelectionChoiceResource}. One chosen option for each required
         * choice group. choices[] (Value): {@link DeliverySelectionChoiceResource}. A delivery
         * option chosen for one choice group in a delivery selection, with its method, amounts,
         * type-specific details, timezone, and any chosen delivery window. created_at (Optional):
         * string. Time the selection was created. Always present with an API key or dashboard
         * credential. Format: date-time. Example: "2026-08-02T16:00:00Z". delivery_quote_id
         * (Required): string. Quote from which this selection was made. Example:
         * "dqt_01KEZF7C009EB1AVCDJBN4BBVV". delivery_selection_id (Required): string. Stable
         * delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". destination_address
         * (Optional): {@link Address}. Destination address snapshot used for delivery evaluation.
         * Omitted for a checkout session credential that doesn't act for the customer the buyer
         * verified. A postal address. Every address has country. Addresses Flint checked as
         * complete (customer and saved addresses, merchant, location, invoice, order delivery
         * destination, tax identity, fulfillment recipient and pickup addresses) always have line1
         * and city, and US ones always have state and postal_code. Delivery quote destinations,
         * buyer locations and postal-code tax locations hold only what was provided, such as
         * postal_code and country. expires_at (Required): string. Deadline after which this
         * provisional selection can no longer be committed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". input_requirements (Required): Array of {@link
         * DeliveryInputRequirement}. Inputs this selection still needs before payment: each
         * destination_address member a chosen shipment or local delivery needs that the stored
         * address lacks (line1, city, and country, plus state and postal_code in the US), and each
         * recipient field a chosen option requires that the selection does not include. Each entry
         * repeats the quote's requirement for that option, with the same
         * delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason
         * configuration_required, and the delivery_selection reference until a new delivery
         * selection includes them. Empty when nothing is missing, and always empty unless status
         * is selected. input_requirements[] (Value): {@link DeliveryInputRequirement}. An input a
         * delivery method needs, such as an address field or time window, with its `field_path`,
         * purpose, and constraint. instructions (Optional): string. Buyer-provided delivery
         * instructions. Returned with an API key or dashboard credential. lifecycle_events
         * (Optional): Array of {@link DeliverySelectionLifecycleEventResource}. Ordered lifecycle
         * events recorded for this selection. lifecycle_events[] (Value): {@link
         * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's
         * history, with the new `status`, the `reason`, and when it happened. lifecycle_updated_at
         * (Optional): string. Time the selection lifecycle last changed. Always present with an
         * API key or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * limiting_deadline_reason (Optional): string. The deadline that set expires_at: the
         * earliest of the chosen options' guarantee, the calculation expiry, and the maximum
         * selection lifetime. A tie between the calculation and the guarantee reports
         * calculation_expiry. Always present with an API key or dashboard credential. -
         * `selection_guarantee_expiry`: The earliest guarantee among the chosen options and
         * delivery windows comes first. When the selection holds stock, the hold ends at this
         * deadline too. - `calculation_expiry`: The calculation the selection was priced against
         * expires first. It ends no later than the checkout session's expires_at, and earlier when
         * an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches
         * the longest a provisional selection can last, 24 hours after it was created. Value enum:
         * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
         * order_id (Optional): string. Order affected by the selection. Always present with an API
         * key or dashboard credential. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * private_data_status (Optional): string. Availability state of merchant-private selection
         * evidence. Value enum: "available", "redacted". recipient (Optional): {@link
         * DeliveryRecipientResource}. Recipient details captured with the selection. Omitted for a
         * checkout session credential that doesn't act for the customer the buyer verified. The
         * person receiving a delivery selection, with optional `name`, `email`, and `phone`.
         * redacted_at (Optional): string. Time merchant-private selection evidence was redacted.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required): string. Current
         * selection lifecycle status. - `selected`: These choices are provisional and can be
         * replaced before payment. - `locked_for_payment`: A payment attempt owns these choices.
         * They are frozen until payment finishes. - `committed`: Payment fixed these choices on
         * the order. - `superseded`: A newer selection replaced these choices. - `expired`: The
         * selection is no longer usable because its deadline passed. - `released`: These choices
         * were withdrawn. Create a new selection before paying for delivery. Value enum:
         * "selected", "locked_for_payment", "committed", "superseded", "expired", "released".
         * supported_actions (Required): Array of string. Contains release while status is selected
         * and the selection belongs to a checkout session: POST
         * /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout.
         * Empty in every other status. Independent of caller permissions. [] enum: "release".
         * supported_actions[] (Value): string. Value enum: "release".
         */
        "object": {
            /**
             * Delivery charge committed by this selection. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Buyer location snapshot used to evaluate pickup proximity. Returned with an API key
             * or dashboard credential. The normalized buyer address or coordinate used for this
             * quote.
             */
            "buyer_location"?: DeliveryBuyerLocationResource;
            /**
             * Deadline after which calculated pricing evidence is no longer valid. Always present
             * with an API key or dashboard credential. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "calculation_expires_at"?: string;
            /**
             * Checkout session that owns the selection. Always present with an API key or
             * dashboard credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /**
             * One chosen option for each required choice group. [] (Value): {@link
             * DeliverySelectionChoiceResource}. A delivery option chosen for one choice group in a
             * delivery selection, with its method, amounts, type-specific details, timezone, and
             * any chosen delivery window.
             */
            "choices": Array<DeliverySelectionChoiceResource>;
            /**
             * Time the selection was created. Always present with an API key or dashboard
             * credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Quote from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
             */
            "delivery_quote_id": string;
            /** Stable delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". */
            "delivery_selection_id": string;
            /**
             * Destination address snapshot used for delivery evaluation. Omitted for a checkout
             * session credential that doesn't act for the customer the buyer verified. A postal
             * address. Every address has country. Addresses Flint checked as complete (customer
             * and saved addresses, merchant, location, invoice, order delivery destination, tax
             * identity, fulfillment recipient and pickup addresses) always have line1 and city,
             * and US ones always have state and postal_code. Delivery quote destinations, buyer
             * locations and postal-code tax locations hold only what was provided, such as
             * postal_code and country.
             */
            "destination_address"?: Address;
            /**
             * Deadline after which this provisional selection can no longer be committed. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at": string;
            /**
             * Inputs this selection still needs before payment: each destination_address member a
             * chosen shipment or local delivery needs that the stored address lacks (line1, city,
             * and country, plus state and postal_code in the US), and each recipient field a
             * chosen option requires that the selection does not include. Each entry repeats the
             * quote's requirement for that option, with the same delivery_input_requirement_id.
             * Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the
             * delivery_selection reference until a new delivery selection includes them. Empty
             * when nothing is missing, and always empty unless status is selected. [] (Value):
             * {@link DeliveryInputRequirement}. An input a delivery method needs, such as an
             * address field or time window, with its `field_path`, purpose, and constraint.
             */
            "input_requirements": Array<DeliveryInputRequirement>;
            /**
             * Buyer-provided delivery instructions. Returned with an API key or dashboard
             * credential.
             */
            "instructions"?: string;
            /**
             * Ordered lifecycle events recorded for this selection. [] (Value): {@link
             * DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's
             * history, with the new `status`, the `reason`, and when it happened.
             */
            "lifecycle_events"?: Array<DeliverySelectionLifecycleEventResource>;
            /**
             * Time the selection lifecycle last changed. Always present with an API key or
             * dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "lifecycle_updated_at"?: string;
            /**
             * The deadline that set expires_at: the earliest of the chosen options' guarantee, the
             * calculation expiry, and the maximum selection lifetime. A tie between the
             * calculation and the guarantee reports calculation_expiry. Always present with an API
             * key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee
             * among the chosen options and delivery windows comes first. When the selection holds
             * stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation
             * the selection was priced against expires first. It ends no later than the checkout
             * session's expires_at, and earlier when an applied promotion ends first. -
             * `selection_maximum_lifetime`: The selection reaches the longest a provisional
             * selection can last, 24 hours after it was created. Value enum:
             * "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
             */
            "limiting_deadline_reason"?: "selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | (string & {});
            /**
             * Order affected by the selection. Always present with an API key or dashboard
             * credential. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Availability state of merchant-private selection evidence. Value enum: "available",
             * "redacted".
             */
            "private_data_status"?: "available" | "redacted" | (string & {});
            /**
             * Recipient details captured with the selection. Omitted for a checkout session
             * credential that doesn't act for the customer the buyer verified. The person
             * receiving a delivery selection, with optional `name`, `email`, and `phone`.
             */
            "recipient"?: DeliveryRecipientResource;
            /**
             * Time merchant-private selection evidence was redacted. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "redacted_at"?: string;
            /**
             * Current selection lifecycle status. - `selected`: These choices are provisional and
             * can be replaced before payment. - `locked_for_payment`: A payment attempt owns these
             * choices. They are frozen until payment finishes. - `committed`: Payment fixed these
             * choices on the order. - `superseded`: A newer selection replaced these choices. -
             * `expired`: The selection is no longer usable because its deadline passed. -
             * `released`: These choices were withdrawn. Create a new selection before paying for
             * delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded",
             * "expired", "released".
             */
            "status": "selected"
                | "locked_for_payment"
                | "committed"
                | "superseded"
                | "expired"
                | "released"
                | (string & {});
            /**
             * Contains release while status is selected and the selection belongs to a checkout
             * session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from
             * the checkout. Empty in every other status. Independent of caller permissions. []
             * enum: "release". [] (Value): string. Value enum: "release".
             */
            "supported_actions": Array<"release" | (string & {})>;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliverySelection>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_selection.committed". */
    "event_type"?: "delivery_selection.committed";
});
/**
 * Buyer input for a selected delivery option: a `delivery_window_id` where the option uses
 * delivery windows, and optional `instructions`.
 */
export type DeliverySelectionInstructionsRequest = {
    /**
     * ID from the option's offered_windows. Required when window_selection is offered; omit it
     * otherwise. minLength: 1. Example:
     * "fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d".
     */
    "delivery_window_id"?: string;
    /**
     * Buyer instructions for the selected option, without leading or trailing whitespace. Send
     * this field only when buyer_instructions.enabled is true. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. minLength: 1. maxLength:
     * 2000.
     */
    "instructions"?: string;
};
/**
 * Buyer input for a selected delivery option: a `delivery_window_id` where the option uses
 * delivery windows, and optional `instructions`.
 */
export type DeliverySelectionInstructionsRequestInput = DeliverySelectionInstructionsRequest;
/**
 * A status change in a delivery selection's history, with the new `status`, the `reason`, and when
 * it happened.
 */
export type DeliverySelectionLifecycleEventResource = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** ID of the selection whose status changed. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". */
    "delivery_selection_id": string;
    /** ID of this recorded selection status change. Example: "dsle_01KEZF7C00FR4QPRPMM4T248FD". */
    "delivery_selection_lifecycle_event_id": string;
    /**
     * What caused this selection status change. Value enum: "replacement_selected",
     * "buyer_selected", "payment_started", "payment_failed_selection_restored", "payment_settled",
     * "payment_failed_selection_expired", "calculation_expired", "selection_expired",
     * "selection_not_current", "dependency_revoked", "buyer_cleared",
     * "eligibility_context_refreshed", "checkout_replaced", "checkout_terminal", "order_mutated",
     * "quote_basis_changed", "calculation_changed".
     */
    "reason": "replacement_selected"
        | "buyer_selected"
        | "payment_started"
        | "payment_failed_selection_restored"
        | "payment_settled"
        | "payment_failed_selection_expired"
        | "calculation_expired"
        | "selection_expired"
        | "selection_not_current"
        | "dependency_revoked"
        | "buyer_cleared"
        | "eligibility_context_refreshed"
        | "checkout_replaced"
        | "checkout_terminal"
        | "order_mutated"
        | "quote_basis_changed"
        | "calculation_changed"
        | (string & {});
    /**
     * Selection status after this change. - `selected`: These choices are provisional and can be
     * replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They
     * are frozen until payment finishes. - `committed`: Payment fixed these choices on the order.
     * - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no
     * longer usable because its deadline passed. - `released`: These choices were withdrawn.
     * Create a new selection before paying for delivery. Value enum: "selected",
     * "locked_for_payment", "committed", "superseded", "expired", "released".
     */
    "status": "selected"
        | "locked_for_payment"
        | "committed"
        | "superseded"
        | "expired"
        | "released"
        | (string & {});
};
/** A page of `DeliverySelection` objects. */
export type DeliverySelectionListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * DeliverySelection}. The delivery choice selected for a checkout or order. Poll GET
     * /v1/delivery-selections/{delivery_selection_id} or list delivery selections to read its
     * current status.
     */
    "data": Array<DeliverySelection>;
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
 * The complete order returned with a delivery selection. Credential-specific fields are omitted as
 * annotated.
 */
export type DeliverySelectionOrder = {
    /**
     * The payment attempt currently collecting this order. Omitted when no attempt is active or
     * its collection surface belongs to another caller. An attempt to pay an order.
     */
    "active_payment_attempt"?: OrderPaymentAttempt;
    /**
     * The earliest open or resolving payment review on this order's counted payments. `null` when
     * no review is open or resolving. List reviews with GET
     * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example:
     * "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
     */
    "active_payment_review_id"?: string | null;
    /**
     * The amounts authorized and still capturable on the order's payments. The amounts authorized
     * and still capturable on an order's payments, with the authorization expiry.
     */
    "authorization_amounts"?: OrderAuthorizationAmounts;
    /**
     * What the buyer can do with the order, in this order: start_return, then resend_receipt. A
     * buyer's read through a customer session on /v1/me, or in Flint's buyer account, lists both
     * every time. Merchant order responses omit this field. A list of orders leaves start_return
     * out, since only a read of one order checks return eligibility. start_return is due when the
     * last open return window ends. Example: []. [] (Value): {@link BuyerAction}. One thing a
     * buyer can do with an order, subscription, invoice or return they read through /v1/me. Show
     * the actions with is_required as what needs the buyer's attention, and the first available
     * action as the primary action on the resource's page in your account.
     */
    "buyer_actions"?: Array<BuyerAction>;
    /**
     * Email and phone saved when payment started, from the pay request's buyer_contact or the
     * paying checkout session's saved contact. It does not change the linked customer. Buyer
     * contact supplied with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /** A note to the buyer. */
    "buyer_note"?: string;
    /**
     * Charges added to the order, such as delivery or service fees, each with its applied amount,
     * tax, and refunded amount. [] (Value): {@link OrderCharge}. An additional charge applied to
     * an order.
     */
    "charges": Array<OrderCharge>;
    /**
     * IDs of the checkout sessions opened for this order. [] (Value): string. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_ids": Array<string>;
    /**
     * The reference the payment link URL or resolve request carried, such as your user ID. `null`
     * when none was sent or checkout did not start from a payment link. Returned only to merchant
     * credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a
     * claim, not proof of identity. minLength: 1. maxLength: 255.
     */
    "client_reference"?: string | null;
    /**
     * When the order closed. Present exactly when status is closed. Set once at the transition and
     * never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "closed_at"?: string;
    /**
     * Why the order closed. Present exactly when status is closed. Set once at closure.
     * Unrecognized reasons are returned as other; new values may be added. Value enum:
     * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
     * "superseded", "return_resolution_canceled", "other".
     */
    "closed_reason"?: "invoice_voided"
        | "paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other"
        | (string & {});
    /**
     * The caller note supplied when closing the order. System closures leave it absent. It is not
     * shown to the buyer.
     */
    "closed_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The buyer's answers to the payment link's custom fields, recorded when checkout started, in
     * the order the link showed the fields. Each answer keeps the field's key, label, and type
     * from that moment, so later changes to the link don't change it. Optional fields the buyer
     * left blank are left out. Read-only. Empty when the order didn't come from a payment link,
     * the link had no custom fields, or the buyer answered none. Orders created before Flint
     * recorded answers here also return an empty list and keep their answers in `metadata` as
     * `custom_field_<key>`. Deleting the customer removes the answers. Returned only to merchant
     * credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`.
     */
    "custom_field_answers"?: Array<CustomFieldAnswer>;
    /**
     * Customer summary included when `expand` names `customer`; `null` when expanded and no
     * customer is linked. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded. anyOf[2] (Value):
     * null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** ID of the customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id"?: string;
    /**
     * Promotions accepted at subscription signup. They attach when the subscription is provisioned
     * and first discount its first charged cycle. They do not discount this order and are separate
     * from discounts and order totals. Always present; empty when no promotions are deferred. []
     * (Value): {@link DeferredPromotion}. A promotion accepted at subscription signup for the
     * subscription's first charged cycle. It does not discount the signup order.
     */
    "deferred_promotions": Array<DeferredPromotion>;
    /**
     * Method, type and recipient of governing_delivery_selection_id. The address remains in
     * delivery_destination. Omitted when no shipment or local-delivery selection governs the
     * order. Method, type and recipient of governing_delivery_selection_id. delivery_destination
     * contains the resolved address. These values describe the same selection.
     */
    "delivery"?: OrderDeliverySummary;
    /**
     * The shipment or local-delivery destination committed for this order. Payment freezes this
     * value; fulfillment recipient changes do not replace it. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. Where an order is
     * delivered: the address, the recipient, and where the destination came from.
     */
    "delivery_destination"?: OrderDeliveryDestination;
    /**
     * Discounts applied to the order, each with its amount, status, and the line items and charges
     * it covers. [] (Value): {@link OrderDiscount}. A discount applied to an order, with its
     * amount, status, and the line items and charges it covers. It comes from a manual discount or
     * a promotion.
     */
    "discounts": Array<OrderDiscount>;
    /**
     * Aggregate dispute state across the order's counted payment intents, excluding
     * payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open
     * states take precedence in this order: needs_response, under_review, inquiry_needs_response,
     * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
     * prevented, inquiry_closed; none when no disputes count. List individual cases with GET
     * /v1/disputes?order_id={order_id}. Value enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other".
     */
    "dispute_status"?: "none"
        | "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other"
        | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Aggregate progress across the order's fulfillment quantities. Value enum: "not_fulfilled",
     * "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed".
     */
    "fulfillment_status"?: "not_fulfilled"
        | "partially_fulfilled"
        | "fulfilled"
        | "canceled"
        | "not_applicable"
        | "closed"
        | (string & {});
    /**
     * Fulfillments created for the order, each covering a set of its line items. [] (Value):
     * {@link Fulfillment}. Work required to deliver an order's items.
     */
    "fulfillments": Array<Fulfillment>;
    /**
     * An estimate of how the order balance splits between gift cards and the payment processor. An
     * estimate of how an order total splits between gift cards and the payment processor, and
     * whether gift cards can pay it.
     */
    "gift_card_estimate"?: OrderGiftCardEstimate;
    /**
     * The gift card redemptions applied to the order's payments. [] (Value): {@link
     * OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with the
     * amount, tip, and gift card.
     */
    "gift_card_settlements": Array<OrderGiftCardSettlement>;
    /**
     * Whether gift cards can pay for this order now. Gift cards pay only USD orders that still
     * accept changes, are not subscription purchases, and whose merchant has at least one gift
     * card that is not closed in this environment. Recomputed on each read; a spent but open card
     * still counts.
     */
    "gift_card_tender_enabled": boolean;
    /**
     * Gift cards available to pay the order, with each card's available balance. [] (Value):
     * {@link OrderGiftCardSelection}. A gift card available to pay an order, with its available
     * balance and the last four characters of its code.
     */
    "gift_cards": Array<OrderGiftCardSelection>;
    /**
     * ID of the delivery selection that governs this order, including pickup choices without a
     * delivery destination: the checkout's provisional selection before payment, and the selection
     * a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}.
     * Null when no selection governs the order. While set, change the destination through the
     * delivery selection. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "governing_delivery_selection_id": string | null;
    /**
     * Carry-out handover: every physical item is handed to the buyer at this location when the
     * order is paid, in place of a delivery selection. Payment then creates one completed
     * `handover` fulfillment. Absent without a handover. Every physical item is handed to the
     * buyer at this location when the order is paid. Replaces a delivery selection.
     */
    "handover"?: OrderHandover;
    /** A note for your team. Buyer reads leave it out. */
    "internal_note"?: string;
    /**
     * Why inventory could not be committed after payment. The cause remains after resolution.
     * Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values
     * may be added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
     * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
     */
    "inventory_exception_reason"?: "inventory_deduction_failed"
        | "inventory_handoff_failed"
        | "auto_refund_required"
        | "auto_refund_failed"
        | "policy_resolution_failed"
        | "other"
        | (string & {});
    /**
     * The merchant note supplied when resolving the inventory exception. It is not shown to the
     * buyer.
     */
    "inventory_exception_resolution_message"?: string;
    /**
     * Whether an inventory problem after payment needs attention. Value enum:
     * "paid_inventory_failed", "resolved".
     */
    "inventory_exception_status"?: "paid_inventory_failed" | "resolved" | (string & {});
    /**
     * The reservation holding stock for this order, when one exists. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_id"?: string;
    /**
     * Where this order's tracked demand is routed. Required before an order containing tracked
     * variants can hold stock. Where an order, payment link, or reservation routes inventory from:
     * a fixed Location, an inventory allocation policy, or one policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * The invoice associated with this order. Null when the order has no invoice. A replacement
     * invoice replaces this ID; voiding an invoice preserves it. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string | null;
    /**
     * Items the order sells, each with its pricing, tax, and fulfillment quantities. [] (Value):
     * {@link OrderLineItem}. An item purchased in an order.
     */
    "line_items": Array<OrderLineItem>;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Unique identifier for this order, prefixed `ord_`. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /** Human-readable order number for receipts and merchant reference. */
    "order_number"?: string;
    /**
     * How the order was created. invoice means a Quick Pay invoice created the order; attaching an
     * invoice to an existing order preserves its origin. Value enum: "virtual_terminal",
     * "payment_link", "checkout", "api", "subscription", "invoice".
     */
    "origin"?: "virtual_terminal"
        | "payment_link"
        | "checkout"
        | "api"
        | "subscription"
        | "invoice"
        | (string & {});
    /**
     * When `payment_status` became `paid`, including a final capture that releases the remaining
     * balance. Set once and never changed, including after refunds. `null` when `payment_status`
     * isn't `paid`, including an order whose balance was written off without being paid. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "paid_at": string | null;
    /**
     * Payment options and collection instructions for the order's outstanding balance. Omitted
     * when collection is unavailable to this caller. Client-side details for collecting payment
     * from the buyer, such as the Stripe settings to initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /**
     * IDs of the payment intents created to collect this order. [] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_ids": Array<string>;
    /**
     * Payment intents included when `expand` names `payment_intents`. [] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /**
     * Payment link whose checkout created this order. Absent for orders that did not come from a
     * payment link. Filter GET /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id"?: string;
    /**
     * Collection progress. An invoice write-off also completes collection without receiving the
     * written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
    /**
     * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "prepayment_order_id": string | null;
    /**
     * The order's money totals: subtotal, discounts, charges, tax, requested tip, and total. The
     * money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and
     * total.
     */
    "pricing_amounts": PricingAmounts;
    /**
     * IDs of the refunds that name this order. This includes refunds Flint makes to return a
     * payment it couldn't accept (`reason` `payment_returned`), which never count toward
     * `refund_status` or the order's refunded amounts. [] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_ids": Array<string>;
    /**
     * Refund progress for collected money. Refunds with `reason` `payment_returned` return money
     * the order never received and don't count. Value enum: "none", "partially_refunded",
     * "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Value applied to this order from items the buyer returned, such as an exchange's replacement
     * order. Included in settlement_amounts.paid_money. [] (Value): {@link
     * OrderReturnCreditSettlement}. A return credit applied to an order payment, with the amount
     * and the return and resolution it came from.
     */
    "return_credit_settlements": Array<OrderReturnCreditSettlement>;
    /**
     * ID of the return resolution that created this order as a replacement. Omitted for orders a
     * return did not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
    /**
     * How much of the order has been paid, refunded, credited, written off, and settled as tips,
     * and what is still outstanding. The bill settlement amounts plus order overpayments, settled
     * tips, debt discharged by final capture, and value order edits removed. Money collected,
     * returned, waived, and still owed on a bill.
     */
    "settlement_amounts": OrderSettlementAmounts;
    /**
     * Instructions for saving a payment method for a subscription order. Omitted when setup is
     * unavailable. Client guidance for saving a payment method on the merchant's connected
     * account.
     */
    "setup_collection"?: SetupCollection;
    /**
     * Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes,
     * returns, and metadata or note edits continue on a closed order. Value enum: "open",
     * "closed".
     */
    "status": "open" | "closed" | (string & {});
    /**
     * Subscription summary included when `expand` names `subscription`; `null` when expanded and
     * this order does not bill a subscription. anyOf[1] (Value): {@link
     * ExpandedSubscriptionSummary}. A subscription's summary fields, including status, billing
     * period, and next billing time, returned when the subscription is expanded. anyOf[2] (Value):
     * null.
     */
    "subscription"?: ((ExpandedSubscriptionSummary) | (null));
    /**
     * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
     * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     */
    "subscription_cycle"?: number;
    /**
     * Time the subscriber changed delivery after this paid renewal was prepared. The order keeps
     * its committed destination until you correct it or refund and replace it. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "subscription_delivery_changed_at"?: string;
    /**
     * Position of this delivery among the deliveries one charge paid for, starting at 2. Null when
     * this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     */
    "subscription_delivery_number": number | null;
    /**
     * ID of the subscription this order bills. Absent on an order that isn't from a subscription.
     * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id"?: string;
    /**
     * Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this
     * order does not bill a subscription plan. anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded. anyOf[2]
     * (Value): null.
     */
    "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
    /**
     * ID of the subscription plan this order bills. Absent on an order that isn't from a
     * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: string;
    /**
     * Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure
     * is allowed, and pay while open without an active attempt and with an outstanding balance or
     * payment-method setup available. [] enum: "close", "pay", "resolve_inventory_exception". []
     * (Value): string. Value enum: "close", "pay", "resolve_inventory_exception".
     */
    "supported_actions"?: Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>;
    /**
     * The order's tax state: whether tax is enabled, its status, location, exemption, and
     * per-jurisdiction rows. An order's tax state, including its mode, price mode, status,
     * location, exemption, and tax breakdowns.
     */
    "tax": OrderTax;
    /**
     * Event and tickets this order sold through an event payment link. Absent on other orders.
     * Event details for a ticketed order: name, location, start time, time zone, and the tickets
     * issued.
     */
    "ticketed_event"?: TicketedEvent;
    /**
     * Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared
     * before payment stays listed as canceled. [] (Value): {@link Tip}. A tip on an order, with
     * its requested, settled, and refunded amounts, status, and how it was paid.
     */
    "tips": Array<Tip>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Order version for optimistic concurrency. Send this value as the expected version when
     * changing the order. Increases with every change to the order. Ignore an order webhook
     * snapshot whose version is lower than one you have already applied. Format: int64.
     */
    "version": number;
};
/**
 * Recipient details you supply with a delivery selection or subscription delivery: optional
 * `name`, `email`, and `phone`.
 */
export type DeliverySelectionRecipientRequest = {
    /**
     * Recipient email address. Limited to 254 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. When the selected delivery option requires it, payment
     * needs it: send it with this selection or a later one. Send null to clear it. Format: email.
     * minLength: 1. maxLength: 254. Example: "buyer@example.com".
     */
    "email"?: string | null;
    /**
     * Recipient name. Limited to 200 characters (Unicode code points), counted before surrounding
     * whitespace is trimmed. When the selected delivery option requires it, payment needs it: send
     * it with this selection or a later one. Send null to clear it. minLength: 1. maxLength: 200.
     */
    "name"?: string | null;
    /**
     * Recipient phone number. After surrounding whitespace is trimmed, use + followed by 7 through
     * 15 ASCII digits, with a nonzero first digit. Limited to 16 characters (Unicode code points),
     * counted before trimming. When the selected delivery option requires it, payment needs it:
     * send it with this selection or a later one. Send null to clear it. minLength: 1. maxLength:
     * 16.
     */
    "phone"?: string | null;
};
/**
 * Recipient details you supply with a delivery selection or subscription delivery: optional
 * `name`, `email`, and `phone`.
 */
export type DeliverySelectionRecipientRequestInput = DeliverySelectionRecipientRequest;
/** A response containing `DeliverySelection` data. */
export type DeliverySelectionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The delivery choice
     * selected for a checkout or order. Poll GET /v1/delivery-selections/{delivery_selection_id}
     * or list delivery selections to read its current status.
     */
    "data": DeliverySelection;
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
 * Result of a checkout delivery selection request, returning the checkout session, order, delivery
 * selection, and any inventory reservation summary.
 */
export type DeliverySelectionResult = {
    /**
     * The checkout session after the selection. A session in which a buyer completes an order's
     * payment.
     */
    "checkout_session": CheckoutSession;
    /**
     * The selection now on the checkout. The delivery choice selected for a checkout or order.
     * Poll GET /v1/delivery-selections/{delivery_selection_id} or list delivery selections to read
     * its current status.
     */
    "delivery_selection": DeliverySelection;
    /**
     * The stock held for this selection. Omitted when the order holds no stock reservation, and
     * for checkout credentials. The inventory reservation held for a delivery selection: its
     * owner, status, and expiry.
     */
    "inventory_reservation"?: DeliveryInventoryReservationSummary;
    /**
     * The order after the selection, with delivery charges applied and tax recalculated. Render
     * totals from it instead of reading the order again. When tax still needs input,
     * order.tax.status says so. The complete order returned with a delivery selection.
     * Credential-specific fields are omitted as annotated.
     */
    "order": DeliverySelectionOrder;
};
/** A response containing `DeliverySelectionResult` data. */
export type DeliverySelectionResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Result of a checkout
     * delivery selection request, returning the checkout session, order, delivery selection, and
     * any inventory reservation summary.
     */
    "data": DeliverySelectionResult;
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
export type DeliverySelectionsCreateParams = (InputValue<CreateDeliverySelectionRequestInput>)
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
export type DeliverySelectionsGetParams = DisputesAcceptParams;
export type DeliverySelectionsListParams = {
    /**
     * List this checkout session's selections. Send this or order_id. Required with a checkout
     * credential, and must be the credential's own checkout session. pattern:
     * ^cs_[0-9A-HJKMNP-TV-Z]{26}$. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id"?: InputValue<string>;
    /**
     * List this order's selections. Send this or checkout_session_id. pattern:
     * ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Filter by current lifecycle status. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "selected", "locked_for_payment", "committed", "superseded", "expired",
     * "released". Value enum: "selected", "locked_for_payment", "committed", "superseded",
     * "expired", "released". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "selected",
     * "locked_for_payment", "committed", "superseded", "expired", "released". anyOf[1][] (Value):
     * string. Current selection lifecycle status. - `selected`: These choices are provisional and
     * can be replaced before payment. - `locked_for_payment`: A payment attempt owns these
     * choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices
     * on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The
     * selection is no longer usable because its deadline passed. - `released`: These choices were
     * withdrawn. Create a new selection before paying for delivery. Value enum: "selected",
     * "locked_for_payment", "committed", "superseded", "expired", "released". anyOf[2] (Value):
     * string. Current selection lifecycle status. - `selected`: These choices are provisional and
     * can be replaced before payment. - `locked_for_payment`: A payment attempt owns these
     * choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices
     * on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The
     * selection is no longer usable because its deadline passed. - `released`: These choices were
     * withdrawn. Create a new selection before paying for delivery. Value enum: "selected",
     * "locked_for_payment", "committed", "superseded", "expired", "released".
     */
    "status"?: InputValue<("selected" | "locked_for_payment" | "committed" | "superseded" | "expired" | "released")
        | readonly ("selected" | "locked_for_payment" | "committed" | "superseded" | "expired" | "released")[]>;
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
export type DeliverySelectionsReleaseParams = DisputesAcceptParams;
/**
 * Shipment-specific details of a delivery option or choice: the `service_level` and buyer
 * `instructions`.
 */
export type DeliveryShipmentDetails = {
    /** Buyer-facing instructions for this delivery service. */
    "instructions"?: string;
    /** Merchant's service-level label. Flint does not enforce the timing implied by the label. */
    "service_level"?: string;
};
/**
 * Eligibility condition that matches when the destination or buyer location is in one of the
 * listed states or provinces, given as ISO 3166-2 codes.
 */
export type DeliveryStateCondition = {
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location" | (string & {});
    /**
     * ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province
     * you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS
     * military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An
     * address matches when its state names one of these subdivisions of its country, whether it
     * was sent as NY, US-NY, or New York. If the address country is listed by the condition but
     * state names no subdivision of that country, the condition cannot be decided: the method or
     * rate is left out as cannot_calculate (invalid_buyer_input). [] (Value): string. minLength:
     * 1.
     */
    "values": Array<string>;
};
/**
 * Eligibility condition that matches when the destination or buyer location is in one of the
 * listed states or provinces, given as ISO 3166-2 codes.
 */
export type DeliveryStateConditionRequestInput = {
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location";
    /**
     * ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province
     * you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS
     * military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An
     * address matches when its state names one of these subdivisions of its country, whether it
     * was sent as NY, US-NY, or New York. If the address country is listed by the condition but
     * state names no subdivision of that country, the condition cannot be decided: the method or
     * rate is left out as cannot_calculate (invalid_buyer_input). [] (Value): string. minLength:
     * 1.
     */
    "values": Array<string>;
};
/**
 * Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal,
 * selects a band, and `unit` applies to weight bases.
 */
export type DeliveryTieredPricingStrategy = ({
    /**
     * One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems:
     * 1. maxItems: 25. [] (Value): {@link DeliveryPricingTierBand}. One band of a tiered pricing
     * strategy, covering values of the strategy's `basis` from `from` to `to`, with a price per
     * currency.
     */
    "bands": Array<DeliveryPricingTierBand>;
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.total_weight", "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key".
     */
    "basis": "choice_group.total_weight"
        | "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key"
        | (string & {});
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound" | (string & {});
})
    & ((Exclude<DeliveryTieredPricingStrategyWeight & object, readonly unknown[]>)
    | (Exclude<DeliveryTieredPricingStrategyQuantityOrMoney & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * The `caller.tier_key` variant of `DeliveryTieredPricingStrategyInput`. The
 * `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategyInput`. The
 * `choice_group.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategyInput`. The `choice_group.merchandise_subtotal_before_discounts`
 * variant of `DeliveryTieredPricingStrategyInput`. The
 * `order.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategyInput`. The `order.merchandise_subtotal_before_discounts` variant
 * of `DeliveryTieredPricingStrategyInput`.
 */
export type DeliveryTieredPricingStrategyInputQuantityOrMoneyInput = ({
    /**
     * One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems:
     * 1. maxItems: 25. [] (Value): {@link DeliveryPricingTierBandRequestInput}. One band of a
     * tiered pricing strategy you supply, covering values of the strategy's `basis` from `from` to
     * `to`, with a price per currency.
     */
    "bands": Array<DeliveryPricingTierBandRequestInput>;
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key".
     */
    "basis": "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key";
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound";
})
    & (({
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key".
     */
    "basis"?: "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key";
})
    & ({
    "unit"?: never;
}));
/** The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategyInput`. */
export type DeliveryTieredPricingStrategyInputWeightInput = ({
    /**
     * One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems:
     * 1. maxItems: 25. [] (Value): {@link DeliveryPricingTierBandRequestInput}. One band of a
     * tiered pricing strategy you supply, covering values of the strategy's `basis` from `from` to
     * `to`, with a price per currency.
     */
    "bands": Array<DeliveryPricingTierBandRequestInput>;
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.total_weight".
     */
    "basis": "choice_group.total_weight";
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound";
})
    & ({
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.total_weight".
     */
    "basis"?: "choice_group.total_weight";
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound";
});
/**
 * The `caller.tier_key` variant of `DeliveryTieredPricingStrategy`. The
 * `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategy`. The
 * `choice_group.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_before_discounts`
 * variant of `DeliveryTieredPricingStrategy`. The
 * `order.merchandise_subtotal_after_line_item_discounts` variant of
 * `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_before_discounts` variant of
 * `DeliveryTieredPricingStrategy`.
 */
export type DeliveryTieredPricingStrategyQuantityOrMoney = ({
    /**
     * One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems:
     * 1. maxItems: 25. [] (Value): {@link DeliveryPricingTierBand}. One band of a tiered pricing
     * strategy, covering values of the strategy's `basis` from `from` to `to`, with a price per
     * currency.
     */
    "bands": Array<DeliveryPricingTierBand>;
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key".
     */
    "basis": "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key"
        | (string & {});
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound" | (string & {});
})
    & (({
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key".
     */
    "basis"?: "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key"
        | (string & {});
}));
/**
 * Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with
 * prices, and a weight `unit` when the basis is total weight.
 */
export type DeliveryTieredPricingStrategyRequestInput = ({
    /**
     * One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems:
     * 1. maxItems: 25. [] (Value): {@link DeliveryPricingTierBandRequestInput}. One band of a
     * tiered pricing strategy you supply, covering values of the strategy's `basis` from `from` to
     * `to`, with a price per currency.
     */
    "bands": Array<DeliveryPricingTierBandRequestInput>;
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.total_weight", "choice_group.fulfillment_quantity",
     * "choice_group.merchandise_subtotal_before_discounts",
     * "choice_group.merchandise_subtotal_after_line_item_discounts",
     * "order.merchandise_subtotal_before_discounts",
     * "order.merchandise_subtotal_after_line_item_discounts", "caller.tier_key".
     */
    "basis": "choice_group.total_weight"
        | "choice_group.fulfillment_quantity"
        | "choice_group.merchandise_subtotal_before_discounts"
        | "choice_group.merchandise_subtotal_after_line_item_discounts"
        | "order.merchandise_subtotal_before_discounts"
        | "order.merchandise_subtotal_after_line_item_discounts"
        | "caller.tier_key";
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit"?: "gram" | "kilogram" | "ounce" | "pound";
})
    & ((Exclude<DeliveryTieredPricingStrategyInputWeightInput & object, readonly unknown[]>)
    | (Exclude<DeliveryTieredPricingStrategyInputQuantityOrMoneyInput & object, readonly unknown[]>));
/** The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategy`. */
export type DeliveryTieredPricingStrategyWeight = ({
    /**
     * One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems:
     * 1. maxItems: 25. [] (Value): {@link DeliveryPricingTierBand}. One band of a tiered pricing
     * strategy, covering values of the strategy's `basis` from `from` to `to`, with a price per
     * currency.
     */
    "bands": Array<DeliveryPricingTierBand>;
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.total_weight".
     */
    "basis": "choice_group.total_weight" | (string & {});
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {});
})
    & ({
    /**
     * Value matched against the numeric tier bands. Money subtotal bases use minor currency units;
     * caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery
     * quote. Value enum: "choice_group.total_weight".
     */
    "basis"?: "choice_group.total_weight" | (string & {});
    /**
     * Required only for choice_group.total_weight and forbidden for every other basis. Value enum:
     * "gram", "kilogram", "ounce", "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {});
});
/**
 * Estimate rule giving a delivery method's handling time and transit time as ranges of business
 * days.
 */
export type DeliveryTransitTimeRule = {
    /**
     * Business days the merchant needs to prepare the order. A minimum and maximum number of
     * business days, used in transit time estimates.
     */
    "handling_days": DeliveryBusinessDayRange;
    /**
     * Business days the order spends in transit. A minimum and maximum number of business days,
     * used in transit time estimates.
     */
    "transit_days": DeliveryBusinessDayRange;
};
/**
 * Estimate rule giving a delivery method's handling time and transit time as ranges of business
 * days.
 */
export type DeliveryTransitTimeRuleRequestInput = {
    /**
     * Business days the merchant needs to prepare the order. A minimum and maximum number of
     * business days, used in transit time estimates.
     */
    "handling_days": DeliveryBusinessDayRangeRequestInput;
    /**
     * Business days the order spends in transit. A minimum and maximum number of business days,
     * used in transit time estimates.
     */
    "transit_days": DeliveryBusinessDayRangeRequestInput;
};
/**
 * A recurring weekly span, from a start weekday and minute to an end weekday and minute, used in a
 * delivery method's availability schedule.
 */
export type DeliveryWeeklyInterval = {
    /** Minute of the day the span ends, from 0 to 1439, in the schedule's timezone. */
    "end_minute": number;
    /** Weekday the span ends, from 0 for Sunday to 6 for Saturday. */
    "end_weekday": number;
    /** Minute of the day the span starts, from 0 to 1439, in the schedule's timezone. */
    "start_minute": number;
    /** Weekday the span starts, from 0 for Sunday to 6 for Saturday. */
    "start_weekday": number;
};
/**
 * A recurring weekly span, from a start weekday and minute to an end weekday and minute, used in a
 * delivery method's availability schedule.
 */
export type DeliveryWeeklyIntervalRequestInput = DeliveryWeeklyInterval;
/**
 * Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity`
 * of the chosen weight `unit`.
 */
export type DeliveryWeightUnitPrice = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "currency_options": Record<string, MoneyValue>;
    /** Weight unit used by unit_quantity. Value enum: "gram", "kilogram", "ounce", "pound". */
    "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {});
    /**
     * Whole-number quantity of the selected unit charged at each configured currency price;
     * fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "unit_quantity": number;
};
/**
 * Price per unit of weight you supply for calculated pricing: a price per currency for each
 * `unit_quantity` of the chosen weight `unit`.
 */
export type DeliveryWeightUnitPriceRequestInput = {
    /**
     * Price by ISO 4217 currency code. Each key must equal the currency of its Money value. *
     * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options": Record<string, MoneyValueInput>;
    /** Weight unit used by unit_quantity. Value enum: "gram", "kilogram", "ounce", "pound". */
    "unit": "gram" | "kilogram" | "ounce" | "pound";
    /**
     * Whole-number quantity of the selected unit charged at each configured currency price;
     * fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "unit_quantity": number;
};
/**
 * A delivery window you supply in a caller-supplied delivery outcome, with its time range, price,
 * and the last moment a buyer can choose it.
 */
export type DeliveryWindowRequest = {
    /**
     * Price of delivery in this window. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * ID of this window. The buyer sends it to choose the window. minLength: 1. Example:
     * "fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d".
     */
    "delivery_window_id": string;
    /**
     * End of this delivery window. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "end_at": string;
    /**
     * Last moment a delivery selection can lock this window's price. It must be later than the
     * evaluation time and no later than the outcome's selection_guarantee_expires_at. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Start of this delivery window. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "start_at": string;
};
/**
 * A delivery window you supply in a caller-supplied delivery outcome, with its time range, price,
 * and the last moment a buyer can choose it.
 */
export type DeliveryWindowRequestInput = {
    /**
     * Price of delivery in this window. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * ID of this window. The buyer sends it to choose the window. minLength: 1. Example:
     * "fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d".
     */
    "delivery_window_id": string;
    /**
     * End of this delivery window. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "end_at": string | globalThis.Date;
    /**
     * Last moment a delivery selection can lock this window's price. It must be later than the
     * evaluation time and no later than the outcome's selection_guarantee_expires_at. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string | globalThis.Date;
    /**
     * Start of this delivery window. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "start_at": string | globalThis.Date;
};
/**
 * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the
 * listed `weekdays`.
 */
export type DeliveryWindowTimeCondition = {
    /**
     * Minute of the day at which matching stops, counted from midnight in the window's timezone,
     * from 1 to 1440 and after `start_minute`. The minute itself does not match. Send it with
     * `start_minute`.
     */
    "end_minute"?: number;
    /**
     * First minute of the day that matches, counted from midnight in the window's timezone, from 0
     * to 1439. Send it with `end_minute`.
     */
    "start_minute"?: number;
    /**
     * Lowercase weekday names, such as `monday`, with no duplicates. Omit it to match every
     * weekday. [] (Value): string. minLength: 1.
     */
    "weekdays"?: Array<string>;
};
/**
 * Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the
 * listed `weekdays`.
 */
export type DeliveryWindowTimeConditionInput = DeliveryWindowTimeCondition;
/** A geographic area served by a delivery method. */
export type DeliveryZone = {
    /**
     * Current geographic eligibility conditions. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "configuration": DeliveryZoneConfiguration;
    /** Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Immutable revision used for new quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". */
    "current_delivery_zone_revision_id": string;
    /** Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP". */
    "delivery_zone_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing zone name. */
    "name": string;
    /** Current zone lifecycle status. Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** Time the zone last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1. */
    "version": number;
};
export type DeliveryZoneArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryZoneConfiguration;
            "created_at": string;
            "current_delivery_zone_revision_id": string;
            "delivery_zone_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryZone>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_zone.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryZoneConfiguration;
            "created_at": string;
            "current_delivery_zone_revision_id": string;
            "delivery_zone_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryZone>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_zone.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_zone.archived";
});
/**
 * The `delivery_zone.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type DeliveryZoneArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryZoneConfiguration}.
     * Current geographic eligibility conditions. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions. object.created_at (Required): string.
     * Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_zone_revision_id (Required): string. Immutable revision used for new
     * quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". object.delivery_zone_id (Required):
     * string. Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing zone name.
     * object.status (Required): string. Current zone lifecycle status. Value enum: "active",
     * "archived". object.updated_at (Required): string. Time the zone last changed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryZoneConfiguration}. Current geographic
         * eligibility conditions. A reusable geographic predicate containing only country, state,
         * postal_code, and radius conditions. created_at (Required): string. Time the zone was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_zone_revision_id (Required): string. Immutable revision used for new
         * quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". delivery_zone_id (Required):
         * string. Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". metadata (Optional):
         * {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Merchant-facing zone name. status
         * (Required): string. Current zone lifecycle status. Value enum: "active", "archived".
         * updated_at (Required): string. Time the zone last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * zone writes. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current geographic eligibility conditions. A reusable geographic predicate
             * containing only country, state, postal_code, and radius conditions.
             */
            "configuration": DeliveryZoneConfiguration;
            /** Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example:
             * "dzoner_01KEZF7C00DF2H9VW29JN861K6".
             */
            "current_delivery_zone_revision_id": string;
            /** Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP". */
            "delivery_zone_id": string;
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
            /** Merchant-facing zone name. */
            "name": string;
            /** Current zone lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /** Time the zone last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryZone>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_zone.archived". */
    "event_type"?: "delivery_zone.archived";
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
 * The `delivery_zone.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryZoneArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryZoneConfiguration}.
     * Current geographic eligibility conditions. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions. object.created_at (Required): string.
     * Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_zone_revision_id (Required): string. Immutable revision used for new
     * quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". object.delivery_zone_id (Required):
     * string. Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing zone name.
     * object.status (Required): string. Current zone lifecycle status. Value enum: "active",
     * "archived". object.updated_at (Required): string. Time the zone last changed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryZoneConfiguration}. Current geographic
         * eligibility conditions. A reusable geographic predicate containing only country, state,
         * postal_code, and radius conditions. created_at (Required): string. Time the zone was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_zone_revision_id (Required): string. Immutable revision used for new
         * quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". delivery_zone_id (Required):
         * string. Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". metadata (Optional):
         * {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Merchant-facing zone name. status
         * (Required): string. Current zone lifecycle status. Value enum: "active", "archived".
         * updated_at (Required): string. Time the zone last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * zone writes. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current geographic eligibility conditions. A reusable geographic predicate
             * containing only country, state, postal_code, and radius conditions.
             */
            "configuration": DeliveryZoneConfiguration;
            /** Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example:
             * "dzoner_01KEZF7C00DF2H9VW29JN861K6".
             */
            "current_delivery_zone_revision_id": string;
            /** Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP". */
            "delivery_zone_id": string;
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
            /** Merchant-facing zone name. */
            "name": string;
            /** Current zone lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /** Time the zone last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryZone>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_zone.archived". */
    "event_type"?: "delivery_zone.archived";
});
/**
 * Eligibility condition that matches when the destination or buyer location falls inside the
 * delivery zone `delivery_zone_id`.
 */
export type DeliveryZoneCondition = {
    /**
     * ID of the delivery zone the address must be inside. minLength: 1. Example:
     * "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
     */
    "delivery_zone_id": string;
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location" | (string & {});
};
/**
 * Eligibility condition that matches when the destination or buyer location falls inside the
 * delivery zone `delivery_zone_id`.
 */
export type DeliveryZoneConditionRequestInput = {
    /**
     * ID of the delivery zone the address must be inside. minLength: 1. Example:
     * "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
     */
    "delivery_zone_id": string;
    /**
     * Address facts tested by this condition. destination_address is the shipping destination.
     * buyer_location is the buyer's current pickup or local-delivery location. Default:
     * "destination_address". Value enum: "destination_address", "buyer_location".
     */
    "subject"?: "destination_address" | "buyer_location";
};
/**
 * A reusable geographic predicate containing only country, state, postal_code, and radius
 * conditions.
 */
export type DeliveryZoneConfiguration = ({
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfiguration}. A reusable geographic predicate containing only country, state,
     * postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfiguration>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfiguration}. A reusable geographic predicate containing only country,
     * state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfiguration>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryStateCondition;
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfiguration;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeCondition;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusCondition;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateCondition;
})
    & (({
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfiguration}. A reusable geographic predicate containing only country, state,
     * postal_code, and radius conditions.
     */
    "all": Array<DeliveryZoneConfiguration>;
})
    | ({
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfiguration}. A reusable geographic predicate containing only country,
     * state, postal_code, and radius conditions.
     */
    "any": Array<DeliveryZoneConfiguration>;
})
    | ({
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not": DeliveryZoneConfiguration;
})
    | ({
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country": DeliveryStateCondition;
})
    | ({
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state": DeliveryStateCondition;
})
    | ({
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code": DeliveryPostalCodeCondition;
})
    | ({
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius": DeliveryRadiusCondition;
})
    | (Record<string, unknown>));
/**
 * A reusable geographic predicate containing only country, state, postal_code, and radius
 * conditions.
 */
export type DeliveryZoneConfigurationRequest = ({
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfigurationRequest}. A reusable geographic predicate containing only country,
     * state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationRequest>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfigurationRequest}. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationRequest>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryStateCondition;
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationRequest;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeCondition;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusCondition;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateCondition;
})
    & (({
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfigurationRequest}. A reusable geographic predicate containing only country,
     * state, postal_code, and radius conditions.
     */
    "all": Array<DeliveryZoneConfigurationRequest>;
})
    | ({
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfigurationRequest}. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "any": Array<DeliveryZoneConfigurationRequest>;
})
    | ({
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not": DeliveryZoneConfigurationRequest;
})
    | ({
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country": DeliveryStateCondition;
})
    | ({
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state": DeliveryStateCondition;
})
    | ({
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code": DeliveryPostalCodeCondition;
})
    | ({
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius": DeliveryRadiusCondition;
})
    | (Record<string, unknown>));
/**
 * A reusable geographic predicate containing only country, state, postal_code, and radius
 * conditions.
 */
export type DeliveryZoneConfigurationRequestInput = {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "all": Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing
     * only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing
     * only country, state, postal_code, and radius conditions.
     */
    "any": Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing
     * only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not": DeliveryZoneConfigurationRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing
     * only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country": DeliveryCountryConditionRequestInput;
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing
     * only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state": DeliveryStateConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing
     * only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code": DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius"?: DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
}
    | {
    /**
     * Matches when every nested expression matches. minItems: 1. maxItems: 100. [] (Value): {@link
     * DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "all"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when at least one nested expression matches. minItems: 1. maxItems: 100. [] (Value):
     * {@link DeliveryZoneConfigurationRequestInput}. A reusable geographic predicate containing
     * only country, state, postal_code, and radius conditions.
     */
    "any"?: Array<DeliveryZoneConfigurationRequestInput>;
    /**
     * Matches when the address is in one of the listed countries. A delivery eligibility condition
     * that matches when the address country is one of `values`.
     */
    "country"?: DeliveryCountryConditionRequestInput;
    /**
     * Matches when the nested expression does not match. A reusable geographic predicate
     * containing only country, state, postal_code, and radius conditions.
     */
    "not"?: DeliveryZoneConfigurationRequestInput;
    /**
     * Matches when the address postal code matches one of the listed codes. A delivery eligibility
     * condition that matches the address postal code against exact or prefix `values`.
     */
    "postal_code"?: DeliveryPostalCodeConditionRequestInput;
    /**
     * Matches when the address is within a set distance of an origin. Eligibility condition that
     * matches when the destination or buyer location is within `maximum_distance` of an origin,
     * measured in a straight line.
     */
    "radius": DeliveryRadiusConditionRequestInput;
    /**
     * Matches when the address is in one of the listed states or provinces. Eligibility condition
     * that matches when the destination or buyer location is in one of the listed states or
     * provinces, given as ISO 3166-2 codes.
     */
    "state"?: DeliveryStateConditionRequestInput;
};
export type DeliveryZoneCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryZoneConfiguration;
            "created_at": string;
            "current_delivery_zone_revision_id": string;
            "delivery_zone_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_zone.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryZoneConfiguration;
            "created_at": string;
            "current_delivery_zone_revision_id": string;
            "delivery_zone_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_zone.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_zone.created";
});
/**
 * The `delivery_zone.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type DeliveryZoneCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryZoneConfiguration}.
     * Current geographic eligibility conditions. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions. object.created_at (Required): string.
     * Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_zone_revision_id (Required): string. Immutable revision used for new
     * quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". object.delivery_zone_id (Required):
     * string. Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing zone name.
     * object.status (Required): string. Current zone lifecycle status. Value enum: "active",
     * "archived". object.updated_at (Required): string. Time the zone last changed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryZoneConfiguration}. Current geographic
         * eligibility conditions. A reusable geographic predicate containing only country, state,
         * postal_code, and radius conditions. created_at (Required): string. Time the zone was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_zone_revision_id (Required): string. Immutable revision used for new
         * quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". delivery_zone_id (Required):
         * string. Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". metadata (Optional):
         * {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Merchant-facing zone name. status
         * (Required): string. Current zone lifecycle status. Value enum: "active", "archived".
         * updated_at (Required): string. Time the zone last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * zone writes. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current geographic eligibility conditions. A reusable geographic predicate
             * containing only country, state, postal_code, and radius conditions.
             */
            "configuration": DeliveryZoneConfiguration;
            /** Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example:
             * "dzoner_01KEZF7C00DF2H9VW29JN861K6".
             */
            "current_delivery_zone_revision_id": string;
            /** Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP". */
            "delivery_zone_id": string;
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
            /** Merchant-facing zone name. */
            "name": string;
            /** Current zone lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /** Time the zone last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1. */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_zone.created". */
    "event_type"?: "delivery_zone.created";
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
 * The `delivery_zone.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type DeliveryZoneCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryZoneConfiguration}.
     * Current geographic eligibility conditions. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions. object.created_at (Required): string.
     * Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_zone_revision_id (Required): string. Immutable revision used for new
     * quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". object.delivery_zone_id (Required):
     * string. Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing zone name.
     * object.status (Required): string. Current zone lifecycle status. Value enum: "active",
     * "archived". object.updated_at (Required): string. Time the zone last changed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryZoneConfiguration}. Current geographic
         * eligibility conditions. A reusable geographic predicate containing only country, state,
         * postal_code, and radius conditions. created_at (Required): string. Time the zone was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_zone_revision_id (Required): string. Immutable revision used for new
         * quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". delivery_zone_id (Required):
         * string. Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". metadata (Optional):
         * {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Merchant-facing zone name. status
         * (Required): string. Current zone lifecycle status. Value enum: "active", "archived".
         * updated_at (Required): string. Time the zone last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * zone writes. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current geographic eligibility conditions. A reusable geographic predicate
             * containing only country, state, postal_code, and radius conditions.
             */
            "configuration": DeliveryZoneConfiguration;
            /** Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example:
             * "dzoner_01KEZF7C00DF2H9VW29JN861K6".
             */
            "current_delivery_zone_revision_id": string;
            /** Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP". */
            "delivery_zone_id": string;
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
            /** Merchant-facing zone name. */
            "name": string;
            /** Current zone lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /** Time the zone last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1. */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "delivery_zone.created". */
    "event_type"?: "delivery_zone.created";
});
/** A page of `DeliveryZone` objects. */
export type DeliveryZoneListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * DeliveryZone}. A geographic area served by a delivery method.
     */
    "data": Array<DeliveryZone>;
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
/** A response containing `DeliveryZone` data. */
export type DeliveryZoneResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A geographic area served
     * by a delivery method.
     */
    "data": DeliveryZone;
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
export type DeliveryZoneUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryZoneConfiguration;
            "created_at": string;
            "current_delivery_zone_revision_id": string;
            "delivery_zone_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryZone>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "delivery_zone.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "configuration": DeliveryZoneConfiguration;
            "created_at": string;
            "current_delivery_zone_revision_id": string;
            "delivery_zone_id": string;
            "external_reference_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<DeliveryZone>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "delivery_zone.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "delivery_zone.updated";
});
/**
 * The `delivery_zone.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type DeliveryZoneUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.configuration (Required): {@link DeliveryZoneConfiguration}.
     * Current geographic eligibility conditions. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions. object.created_at (Required): string.
     * Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_delivery_zone_revision_id (Required): string. Immutable revision used for new
     * quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". object.delivery_zone_id (Required):
     * string. Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Merchant-facing zone name.
     * object.status (Required): string. Current zone lifecycle status. Value enum: "active",
     * "archived". object.updated_at (Required): string. Time the zone last changed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer.
     * Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * configuration (Required): {@link DeliveryZoneConfiguration}. Current geographic
         * eligibility conditions. A reusable geographic predicate containing only country, state,
         * postal_code, and radius conditions. created_at (Required): string. Time the zone was
         * created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * current_delivery_zone_revision_id (Required): string. Immutable revision used for new
         * quotes. Example: "dzoner_01KEZF7C00DF2H9VW29JN861K6". delivery_zone_id (Required):
         * string. Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". metadata (Optional):
         * {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Merchant-facing zone name. status
         * (Required): string. Current zone lifecycle status. Value enum: "active", "archived".
         * updated_at (Required): string. Time the zone last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Optimistic-concurrency version for
         * zone writes. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current geographic eligibility conditions. A reusable geographic predicate
             * containing only country, state, postal_code, and radius conditions.
             */
            "configuration": DeliveryZoneConfiguration;
            /** Time the zone was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Immutable revision used for new quotes. Example:
             * "dzoner_01KEZF7C00DF2H9VW29JN861K6".
             */
            "current_delivery_zone_revision_id": string;
            /** Stable delivery zone ID. Example: "dzone_01KEZF7C005RY7KGCN4M2CH5WP". */
            "delivery_zone_id": string;
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
            /** Merchant-facing zone name. */
            "name": string;
            /** Current zone lifecycle status. Value enum: "active", "archived". */
            "status": "active" | "archived" | (string & {});
            /** Time the zone last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** Optimistic-concurrency version for zone writes. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<DeliveryZone>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "delivery_zone.updated". */
    "event_type"?: "delivery_zone.updated";
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
