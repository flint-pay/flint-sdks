import type { DocumentTaxID, Dispute, DigitalFulfillmentDetails } from './types-20.js';
import type { DeliverySelection } from './types-19.js';
import type { ResponseMeta } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { PartnerEnvironmentGrant, PartnerWebhookEnvelope } from './types-40.js';
import type { CustomDomain } from './types-12.js';
import type { MoneyValue, NextAction } from './types-35.js';
import type { Package } from './types-38.js';
import type { QuotaDetails } from './types-46.js';
import type { ScopeRequirement, SelectableErrorResource } from './types-52.js';
import type { Shipment, SettlementAmounts, ServiceFulfillmentDetails, ShipmentFulfillmentDetails } from './types-53.js';
import type { CheckoutBuyerContact, CardDetails } from './types-4.js';
import type { PricingAmounts, PaymentSourceSummary, PickupFulfillmentDetails } from './types-43.js';
import type { SubscriptionIntervalOption } from './types-54.js';
import type { SubscriptionPlanLineItem } from './types-55.js';
import type { CreateFeedbackReportRequestInput, CreateFileRequestInput } from './types-7.js';
import type { CheckoutSessionsListDeliverySelectionsParams } from './types-5.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-34.js';
import type { DeliveryFulfillmentDetails } from './types-15.js';
import type { FulfillmentHold, FulfillmentLineItem, FulfillmentOutcome, FulfillmentRecipient } from './types-22.js';
/**
 * A tax identifier printed on documents, with its country, optional region, identifier type, and
 * value. Flint does not verify the value.
 */
export type DocumentTaxIDRequestInput = DocumentTaxID;
/**
 * The delivery selection currently in effect for a checkout, with its `source` (none, provisional,
 * or committed) and whether it can still be changed.
 */
export type EffectiveDeliverySelectionResource = {
    /**
     *  anyOf[1] (Value): {@link DeliverySelection}. The delivery choice selected for a checkout or
     * order. anyOf[2] (Value): null.
     */
    "delivery_selection": ((DeliverySelection) | (null));
    "mutable": boolean;
    "originating_checkout_session_id"?: string;
    /** Value enum: "none", "provisional", "committed". */
    "source": "none" | "provisional" | "committed" | (string & {});
};
/** A response containing `EffectiveDeliverySelectionResource` data. */
export type EffectiveDeliverySelectionResponse = {
    /**
     * The delivery selection currently in effect for a checkout, with its `source` (none,
     * provisional, or committed) and whether it can still be changed.
     */
    "data": EffectiveDeliverySelectionResource;
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
/** A request to change a customer's email address. */
export type EmailChangeRequest = {
    "confirmed": boolean;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    "current_email_confirmation_required": boolean;
    "customer_id": string;
    "email_change_request_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at": string;
    "new_email": string;
};
/** A response containing `EmailChangeRequest` data. */
export type EmailChangeRequestResponse = {
    /** A request to change a customer's email address. */
    "data": EmailChangeRequest;
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
 * An email preference for one address, such as shipping updates or checkout reminders, with
 * whether it is enabled and the matching customer if any.
 */
export type EmailPreferenceLink = {
    /**
     * Flint customer ID when the email belongs to an active customer in this merchant environment.
     * Null for a guest email.
     */
    "customer_id": string | null;
    "email": string;
    /** Value enum: "shipping_updates", "checkout_reminders". */
    "email_preference": "shipping_updates" | "checkout_reminders" | (string & {});
    "enabled": boolean;
};
/** The request body for: Look up an email preference link; Unsubscribe an email preference link. */
export type EmailPreferenceLinkRequest = {
    /** minLength: 1. */
    "token": string;
};
/** The request body for: Look up an email preference link; Unsubscribe an email preference link. */
export type EmailPreferenceLinkRequestInput = EmailPreferenceLinkRequest;
/** A response containing `EmailPreferenceLink` data. */
export type EmailPreferenceLinkResponse = {
    /**
     * An email preference for one address, such as shipping updates or checkout reminders, with
     * whether it is enabled and the matching customer if any.
     */
    "data": EmailPreferenceLink;
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
export type EmailPreferenceLinksLookupParams = (InputValue<EmailPreferenceLinkRequestInput>);
export type EmailPreferenceLinksUnsubscribeParams = EmailPreferenceLinksLookupParams;
export type EnvironmentGrantCreatedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PartnerEnvironmentGrant;
    };
    "event_type"?: "environment_grant.created";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
        "type": "partner_app" | (string & {});
    };
})
    & {
    "event_type": "environment_grant.created";
});
export type EnvironmentGrantRevokedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PartnerEnvironmentGrant;
    };
    "event_type"?: "environment_grant.revoked";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
        "type": "partner_app" | (string & {});
    };
})
    & {
    "event_type": "environment_grant.revoked";
});
/**
 * One specific failure within an error, with a `code` and `message` plus fields that depend on the
 * code, such as the `param`, resource, quantity, or amount involved.
 */
export type ErrorDetail = {
    /**
     * API key modes in which this scope may be granted. [] enum: "live", "test". [] (Value):
     * string. Value enum: "live", "test".
     */
    "allowed_key_modes"?: Array<"live" | "test" | (string & {})>;
    /**
     * Signed available amounts grouped by balance source type on INSUFFICIENT_AVAILABLE_BALANCE.
     * Keys are an open set; US accounts use card and bank_account. An empty object means no
     * per-source amounts are reported. * (Value): {@link MoneyValue}. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "available_by_source_type"?: Record<string, MoneyValue>;
    /**
     * Whole-number quantity currently available for the requested operation; fractional quantities
     * are not supported. Format: int64.
     */
    "available_quantity"?: number;
    /**
     * Total number of blocking resources when a dependency refusal publishes a count.
     * blocking_resources lists up to 25 of them. Invoice ownership conflicts use current_resource
     * instead. Format: int64.
     */
    "blocking_resource_count"?: number;
    /**
     * Resources that must transition or be corrected before the operation can succeed. Dependency
     * conflicts list up to 25 resources, with blocking_resource_count as the total when present.
     * OPERATION_IN_PROGRESS identifies work Flint is finishing, and PAYMENT_ATTEMPT_ACTIVE
     * identifies the active attempt. Buyer credentials do not receive merchant-only blocking
     * resources. On ACTION_NOT_ALLOWED with reason in_progress, a subscription payment retry is
     * included when the buyer can read it. Manual payment conflicts identify their owning
     * invoices. [] (Value): {@link ErrorResourceReference}. A reference to a public resource named
     * in an error, with its type, ID, and current status when available.
     */
    "blocking_resources"?: Array<ErrorResourceReference>;
    /**
     * Flint capability associated with this error, when applicable. Value enum:
     * "accept_card_payments", "save_payment_methods", "accept_affirm_payments",
     * "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts",
     * "manage_payout_destinations", "manage_payout_settings", "create_instant_payouts".
     */
    "capability"?: "accept_card_payments"
        | "save_payment_methods"
        | "accept_affirm_payments"
        | "accept_ach_debit_payments"
        | "receive_payouts"
        | "create_standard_payouts"
        | "manage_payout_destinations"
        | "manage_payout_settings"
        | "create_instant_payouts"
        | (string & {});
    /**
     * Physical basis submitted with the observation, or saved on the count line when apply refuses
     * it. Read the current level and physically recount this item before replacing the basis.
     * Format: int64. minimum: 0.
     */
    "captured_physical_version"?: number;
    /**
     * How the inventory reservation ended. Present for INVENTORY_RESERVATION_CLOSED. Value enum:
     * "consumed", "released", "expired", "reallocated", "mixed".
     */
    "closed_reason"?: "consumed" | "released" | "expired" | "reallocated" | "mixed" | (string & {});
    /**
     * Stable Flint error code for this item. Under INVALID_REQUEST, one of REQUIRED,
     * INVALID_VALUE, UNKNOWN_FIELD, NOT_ALLOWED. Every value is listed in the operation's
     * x-flint-error-codes. Value enum: "ACTION_NOT_ALLOWED", "ALREADY_EXISTS",
     * "API_VERSION_RETIRED", "AUTHENTICATION_REQUIRED", "CONCURRENT_MODIFICATION",
     * "DELIVERY_REQUOTE_REQUIRED", "EXTERNAL_SERVICE_ERROR", "FORBIDDEN",
     * "GIFT_CARD_CHALLENGE_REQUIRED", "IDEMPOTENCY_KEY_IN_PROGRESS", "IDEMPOTENCY_KEY_REUSED",
     * "IDEMPOTENCY_RECOVERY_REQUIRED", "IDENTITY_VERIFICATION_REQUIRED", "INSUFFICIENT_SCOPE",
     * "INTERNAL_ERROR", "INVALID_CREDENTIAL", "INVALID_REQUEST", "INVALID_VALUE",
     * "INVENTORY_INSUFFICIENT", "LIMIT_EXCEEDED", "LIMIT_REACHED", "MERCHANT_NOT_READY",
     * "METHOD_NOT_ALLOWED", "NOT_ALLOWED", "OPERATION_IN_PROGRESS", "PAYMENT_ATTEMPT_ACTIVE",
     * "PAYMENT_OPTION_UNAVAILABLE", "PAYMENT_PROCESSING_UNAVAILABLE",
     * "PAYMENT_PROCESSOR_REJECTED", "PAYMENT_REVIEW_OPEN", "PROMOTION_DECLINED",
     * "RATE_LIMIT_EXCEEDED", "REQUEST_BODY_TOO_LARGE", "REQUEST_CANCELED", "REQUEST_TIMEOUT",
     * "REQUIRED", "RESOURCE_IN_USE", "RESOURCE_NOT_FOUND", "ROUTE_NOT_FOUND",
     * "SERVICE_UNAVAILABLE", "UNKNOWN_FIELD", "UNSUPPORTED_CONTENT_TYPE", "VERSION_CONFLICT".
     */
    "code": "ACTION_NOT_ALLOWED"
        | "ALREADY_EXISTS"
        | "API_VERSION_RETIRED"
        | "AUTHENTICATION_REQUIRED"
        | "CONCURRENT_MODIFICATION"
        | "DELIVERY_REQUOTE_REQUIRED"
        | "EXTERNAL_SERVICE_ERROR"
        | "FORBIDDEN"
        | "GIFT_CARD_CHALLENGE_REQUIRED"
        | "IDEMPOTENCY_KEY_IN_PROGRESS"
        | "IDEMPOTENCY_KEY_REUSED"
        | "IDEMPOTENCY_RECOVERY_REQUIRED"
        | "IDENTITY_VERIFICATION_REQUIRED"
        | "INSUFFICIENT_SCOPE"
        | "INTERNAL_ERROR"
        | "INVALID_CREDENTIAL"
        | "INVALID_REQUEST"
        | "INVALID_VALUE"
        | "INVENTORY_INSUFFICIENT"
        | "LIMIT_EXCEEDED"
        | "LIMIT_REACHED"
        | "MERCHANT_NOT_READY"
        | "METHOD_NOT_ALLOWED"
        | "NOT_ALLOWED"
        | "OPERATION_IN_PROGRESS"
        | "PAYMENT_ATTEMPT_ACTIVE"
        | "PAYMENT_OPTION_UNAVAILABLE"
        | "PAYMENT_PROCESSING_UNAVAILABLE"
        | "PAYMENT_PROCESSOR_REJECTED"
        | "PAYMENT_REVIEW_OPEN"
        | "PROMOTION_DECLINED"
        | "RATE_LIMIT_EXCEEDED"
        | "REQUEST_BODY_TOO_LARGE"
        | "REQUEST_CANCELED"
        | "REQUEST_TIMEOUT"
        | "REQUIRED"
        | "RESOURCE_IN_USE"
        | "RESOURCE_NOT_FOUND"
        | "ROUTE_NOT_FOUND"
        | "SERVICE_UNAVAILABLE"
        | "UNKNOWN_FIELD"
        | "UNSUPPORTED_CONTENT_TYPE"
        | "VERSION_CONFLICT"
        | (string & {});
    /**
     * Which inventory count check failed for this line. Sent on VERSION_CONFLICT for physical
     * observations or stale source observation sequences. Value enum: "physical_version",
     * "source_observation_sequence".
     */
    "conflict_type"?: "physical_version" | "source_observation_sequence" | (string & {});
    /**
     * Request field paths that conflict with each other or with the rest of the request. Sent on
     * INVALID_REQUEST with detail NOT_ALLOWED for conflicting payment inputs, and with detail
     * INVALID_VALUE when entries in one product create repeat an option name, identifier, or
     * selected option combination. [] (Value): string.
     */
    "conflicting_fields"?: Array<string>;
    /** Current API version pin on VERSION_CONFLICT when expected_api_version is stale. */
    "current_api_version"?: string;
    /**
     * Current effective delivery selection ID on VERSION_CONFLICT when
     * expected_delivery_selection_id is stale. Present as null when no delivery selection is
     * current.
     */
    "current_delivery_selection_id"?: string | null;
    /**
     * Current disclosure version. Show the seller the current disclosure from GET
     * /v1/tax-connection and get their agreement before sending its version.
     */
    "current_disclosure_version"?: string;
    /**
     * Current payout schedule interval on STANDARD_PAYOUT_REQUIRES_MANUAL_SCHEDULE. Change the
     * payout schedule to manual before creating a standard payout. Value enum: "daily", "weekly",
     * "monthly".
     */
    "current_interval"?: "daily" | "weekly" | "monthly" | (string & {});
    /**
     * Current money amount counted toward the threshold, when the error is threshold-based. On
     * VERSION_CONFLICT, the order's current outstanding balance. On ACTION_NOT_ALLOWED with reason
     * already_applied after a capture amount mismatch, the amount already captured. On an order
     * total floor refusal, the resulting order total. Retained errors keep their captured values.
     * On CREDIT_NOTE_ALLOCATION_EXCEEDS_BALANCE, the outstanding balance the allocation would
     * leave. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "current_money"?: MoneyValue;
    /**
     * Current physical version of the inventory level. This is a physical-value assertion, not the
     * resource version in current_version. Format: int64. minimum: 0.
     */
    "current_physical_version"?: number;
    /**
     * The existing resource reference or custom domain on ALREADY_EXISTS. On VERSION_CONFLICT when
     * replace_checkout_session_id is stale, the current checkout session reference. On
     * ACTION_NOT_ALLOWED with reason in_progress when a checkout surface cannot change, the
     * existing checkout session reference. Also the current fulfillment, shipment, or package when
     * a conditional write conflicts with resource state. oneOf[1] (Value): object and {@link
     * ErrorResourceReference}. A reference to a public resource named in an error, with its type,
     * ID, and current status when available. oneOf[1].resource_id (Required): string. Public Flint
     * ID of the referenced resource. oneOf[1].resource_type (Required): string. Stable public
     * resource name for the referenced resource: a ResourceType value, or resource when the
     * resource has no public type. oneOf[1].status (Optional): string. Current public status of
     * the referenced resource when available. oneOf[2] (Value): object and {@link Fulfillment}.
     * Work required to deliver an order's items. oneOf[2].active_hold (Optional): {@link
     * FulfillmentHold}. Current hold details. Present exactly when status is on_hold. A hold on a
     * fulfillment, with its reason, who placed it, and when it became active. oneOf[2].charges
     * (Optional): Array of {@link FulfillmentChargeLink}. Order charges associated with this
     * fulfillment. oneOf[2].charges[] (Value): {@link FulfillmentChargeLink}. Links a fulfillment
     * to an order charge by `order_charge_id`. oneOf[2].completed_at (Optional): string. When the
     * fulfillment was completed. Mirrors the completion time for its type: delivered_at for
     * shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. oneOf[2].created_at (Optional): string. When the fulfillment
     * was created, in RFC3339 format. Format: date-time. oneOf[2].customer_id (Optional): string.
     * Customer receiving this fulfillment, when one is set. oneOf[2].delivery_choice_group_id
     * (Required): string or null. Delivery choice group that created this fulfillment. Null for
     * fulfillments created by the merchant or through checkout without a delivery quote.
     * oneOf[2].delivery_execution_leg_id (Required): string or null. Execution leg of the selected
     * delivery option that created this fulfillment. Null for fulfillments created by the merchant
     * or through checkout without a delivery quote. oneOf[2].delivery_method_id (Required): string
     * or null. Delivery method chosen for this fulfillment. Null for fulfillments created by the
     * merchant or through checkout without a delivery quote. Also null for fulfillments created
     * before this field was added. oneOf[2].delivery_selection_id (Required): string or null.
     * Delivery selection that created this fulfillment. Null for fulfillments created by the
     * merchant or through checkout without a delivery quote. oneOf[2].device_id (Optional):
     * string. Device associated with the fulfillment, when one is recorded.
     * oneOf[2].digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
     * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
     * delivered (`delivered_at`) and its `delivery_url`. oneOf[2].dispatched_at (Optional):
     * string. First time this fulfillment reached dispatched. Format: date-time.
     * oneOf[2].external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. oneOf[2].fulfillment_id (Required): string. Stable
     * identifier of the fulfillment. oneOf[2].line_items (Required): Array of {@link
     * FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
     * oneOf[2].line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
     * included in a fulfillment, with the modifiers applied to it. oneOf[2].local_delivery_details
     * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
     * details for a local delivery fulfillment. Details of a local delivery fulfillment: courier,
     * timing window, instructions, and tracking. Some fields are omitted for credentials that
     * don't act for the verified customer. oneOf[2].location_id (Optional): string. Merchant
     * location responsible for this fulfillment. oneOf[2].metadata (Optional): {@link
     * MetadataMap}. Caller-owned key-value metadata associated with the fulfillment. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. oneOf[2].order (Optional): {@link
     * ExpandedOrderSummary} or null. Order summary returned when the order relationship is
     * expanded. Present only when `expand` includes `order`; `null` when expanded and there is no
     * related order. oneOf[2].order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. oneOf[2].order.anyOf[2] (Value): null.
     * oneOf[2].order_id (Required): string. Order whose items this fulfillment delivers.
     * oneOf[2].order_number (Optional): string. Human-readable number of the order this
     * fulfillment belongs to. Omitted when the order has no number. oneOf[2].outcome (Optional):
     * {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when status is
     * no_show. The terminal outcome recorded for a fulfillment, such as a no-show, with its
     * reason, notes, and when it occurred. oneOf[2].packages (Optional): Array of {@link
     * ExpandedPackageSummary}. Packages associated with this fulfillment. oneOf[2].packages[]
     * (Value): {@link ExpandedPackageSummary}. A package's summary fields, including carrier,
     * tracking, status, and supported actions, returned when the package is expanded.
     * oneOf[2].packed_at (Optional): string. First time this fulfillment reached packed. Format:
     * date-time. oneOf[2].picked_at (Optional): string. First time this fulfillment reached
     * picked. Format: date-time. oneOf[2].pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. oneOf[2].recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. oneOf[2].scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Nulls sort first ascending and last descending, then by
     * fulfillment_id in the same direction. Format: date-time. oneOf[2].service_details
     * (Optional): {@link ServiceFulfillmentDetails}. Schedule and completion details for a service
     * fulfillment. Details of a service fulfillment: the scheduled start and end, timezone,
     * completion time, and notes. oneOf[2].shipment_details (Optional): {@link
     * ShipmentFulfillmentDetails}. Shipping schedule and ship time for a shipment fulfillment.
     * Present only on shipment fulfillments with at least one value. Details of a shipment
     * fulfillment: the shipping window, timezone, and when the shipment was handed to the carrier.
     * oneOf[2].shipments (Optional): Array of {@link ExpandedShipmentSummary}. Shipments
     * associated with this fulfillment. oneOf[2].shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. oneOf[2].status (Required): string.
     * Current fulfillment lifecycle status. Read supported_actions for available transitions. -
     * `pending`: Work has not started and has not been accepted. Approval may be required before
     * work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. -
     * `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a
     * supported forward action. - `in_progress`: Work has started and is not yet ready or
     * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
     * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was
     * intentionally canceled and will not continue. - `failed`: The fulfillment could not be
     * completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The
     * fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or
     * provider preparation is underway. - `picked`: The assigned items have been picked. -
     * `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its
     * origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome
     * for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
     * "dispatched", "no_show". oneOf[2].supported_actions (Required): Array of string. Read-only
     * actions currently supported for this fulfillment. [] enum: "complete", "cancel", "hold",
     * "start", "mark_ready", "fail", "schedule", "accept", "mark_preparing", "mark_picked",
     * "mark_packed", "dispatch", "mark_no_show", "release_hold". oneOf[2].supported_actions[]
     * (Value): string. Value enum: "complete", "cancel", "hold", "start", "mark_ready", "fail",
     * "schedule", "accept", "mark_preparing", "mark_picked", "mark_packed", "dispatch",
     * "mark_no_show", "release_hold". oneOf[2].terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. oneOf[2].type (Required): string. How the items are delivered: shipment,
     * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
     * "local_delivery", "digital", "service". oneOf[2].updated_at (Optional): string. When the
     * fulfillment was last updated, in RFC3339 format. Format: date-time. oneOf[2].version
     * (Required): integer. Monotonic fulfillment version for expected_version checks. Format:
     * uint64. minimum: 1. oneOf[3] (Value): object and {@link Shipment}. A shipment carrying
     * fulfilled order items. oneOf[3].created_at (Optional): string. Creation timestamp. Format:
     * date-time. oneOf[3].delivered_at (Optional): string. When the shipment was delivered, in
     * RFC3339 format. Format: date-time. oneOf[3].direction (Required): string. Whether the
     * shipment sends items to the buyer or returns items to the merchant. Value enum: "outbound",
     * "return". oneOf[3].external_reference_id (Optional): string. Caller-owned identifier for
     * this resource in an external system. Requires external_system. External references are not
     * unique. Use Idempotency-Key for retries. maxLength: 255. oneOf[3].external_system
     * (Optional): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. oneOf[3].fulfillment_id
     * (Required): string. Fulfillment associated with this shipment. oneOf[3].handed_off_at
     * (Optional): string. Carrier handoff timestamp for outbound and return shipments, using the
     * recorded shipped_at when no separate handoff timestamp exists. For return shipments, this
     * can satisfy an after_handoff execution gate for the declared return_line_items. Format:
     * date-time. oneOf[3].metadata (Optional): {@link MetadataMap}. Caller-owned key-value
     * metadata associated with the shipment. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. oneOf[3].order (Optional): {@link ExpandedOrderSummary} or null. Order summary
     * returned when the order relationship is expanded. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. oneOf[3].order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * oneOf[3].order.anyOf[2] (Value): null. oneOf[3].order_id (Required): string. Order whose
     * items are transported by the shipment. oneOf[3].package_count (Required): integer. Total
     * number of packages attached to the shipment, including voided packages. Format: int32.
     * minimum: 0. oneOf[3].packages (Optional): Array of {@link ExpandedPackageSummary}. Summaries
     * of the shipment's packages in creation order, returned when the packages relationship is
     * expanded or when the shipment is created with packages. oneOf[3].packages[] (Value): {@link
     * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking, status,
     * and supported actions, returned when the package is expanded. oneOf[3].return_id (Optional):
     * string. Return associated with this shipment, when its direction is return.
     * oneOf[3].return_line_items (Optional): Array of {@link ReturnResolutionLineItemRequest}.
     * Return lines and quantities allocated to this return shipment. oneOf[3].return_line_items[]
     * (Value): {@link ReturnResolutionLineItemRequest}. A return line and the quantity placed in a
     * return shipment or package. oneOf[3].shipment_id (Required): string. Stable identifier of
     * the shipment. oneOf[3].shipped_at (Optional): string. When the shipment was shipped, in
     * RFC3339 format. Format: date-time. oneOf[3].status (Required): string. Read-only shipment
     * state derived from the shipment's package states. An empty shipment remains a created draft.
     * - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The
     * shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was
     * handed to the carrier. - `in_transit`: The carrier is moving the shipment through its
     * network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`:
     * The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
     * delivery but did not complete it. Follow the carrier instructions before retrying delivery.
     * - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported
     * issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The
     * shipment was voided and will not continue through delivery. Value enum: "created", "packed",
     * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". oneOf[3].updated_at (Optional): string. Last update timestamp. Format:
     * date-time. oneOf[3].version (Required): integer. Monotonic shipment version for
     * expected_version checks. Format: uint64. minimum: 1. oneOf[4] (Value): object and {@link
     * Package}. A package within a shipment. oneOf[4].carrier (Optional): string. Carrier
     * transporting the package. oneOf[4].created_at (Optional): string. Creation timestamp.
     * Format: date-time. oneOf[4].delivered_at (Optional): string. Package delivery timestamp.
     * Format: date-time. oneOf[4].dimensions (Optional): {@link Dimensions}. Physical length,
     * width, and height of the package. Package or item dimensions as `length`, `width`, and
     * `height` in the given `unit`. oneOf[4].expected_delivery_at (Optional): string or null. When
     * the carrier or merchant expects this package to arrive. Null when no estimate is set.
     * Retained after delivery as history. This estimate is separate from the fulfillment's
     * promised shipment window. Format: date-time. oneOf[4].external_reference_id (Optional):
     * string. Caller-owned identifier for this resource in an external system. Requires
     * external_system. External references are not unique. Use Idempotency-Key for retries.
     * maxLength: 255. oneOf[4].external_system (Optional): string. Name of the external system
     * that external_reference_id belongs to. External references are not unique. Use
     * Idempotency-Key for retries. oneOf[4].fulfillment_id (Required): string. Fulfillment whose
     * items are in the package. oneOf[4].label_url (Optional): string. HTTPS shipping-label URL
     * supplied by your integration. Non-Flint URLs require external_system for provenance. Flint
     * does not host the label file. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. oneOf[4].metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the package. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. oneOf[4].order (Optional): {@link ExpandedOrderSummary} or
     * null. Order summary returned when the order relationship is expanded. Present only when
     * `expand` includes `order`; `null` when expanded and there is no related order.
     * oneOf[4].order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. oneOf[4].order.anyOf[2] (Value): null. oneOf[4].order_id
     * (Required): string. Order whose items are in the package. oneOf[4].package_id (Required):
     * string. Stable identifier of the package. oneOf[4].return_id (Optional): string. Return this
     * package belongs to. Present only on packages of return shipments. oneOf[4].return_line_items
     * (Optional): Array of {@link ReturnResolutionLineItemRequest}. Return line quantities
     * allocated to this parcel. Present only on packages of return shipments.
     * oneOf[4].return_line_items[] (Value): {@link ReturnResolutionLineItemRequest}. A return line
     * and the quantity placed in a return shipment or package. oneOf[4].service_code (Optional):
     * string. Carrier service used for the package. oneOf[4].shipment_id (Required): string.
     * Shipment carrying this package. oneOf[4].shipped_at (Optional): string. Package handoff
     * timestamp. Format: date-time. oneOf[4].status (Required): string. Current package lifecycle
     * state. Package states are the source used to derive shipment status. - `created`: The
     * package record exists but has not been packed or handed off. - `packed`: The package is
     * packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. -
     * `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`:
     * The package is on its final delivery route. - `delivered`: The carrier reported successful
     * delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it.
     * Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception
     * is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package
     * was returned toward or to its origin. - `voided`: The package was voided and will not
     * continue through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * oneOf[4].status_reason (Optional): string. Additional explanation of the package's current
     * status. oneOf[4].supported_actions (Required): Array of string. Read-only actions currently
     * supported for this package. [] enum: "mark_delivered", "mark_delivery_attempted",
     * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
     * "mark_returned", "mark_shipped". oneOf[4].supported_actions[] (Value): string. Value enum:
     * "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
     * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped".
     * oneOf[4].tracking_number (Optional): string. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. oneOf[4].tracking_url (Optional): string.
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     * oneOf[4].updated_at (Optional): string. Last update timestamp. Format: date-time.
     * oneOf[4].version (Required): integer. Monotonic package version for expected_version checks.
     * Format: uint64. minimum: 1. oneOf[4].weight (Optional): {@link Weight}. Physical weight of
     * the package. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration. oneOf[5] (Value): object and {@link CustomDomain}. A merchant hostname for
     * hosted checkout or customer account pages. oneOf[5].active_payment_attempt_count (Required):
     * integer or null. Payment attempts in progress on this checkout hostname; null for customer
     * account domains. Format: int64. oneOf[5].created_at (Required): string. When this domain
     * resource was created, in RFC3339 format. Format: date-time. oneOf[5].custom_domain_id
     * (Required): string. Flint custom domain ID. oneOf[5].dns_records (Required): Array of {@link
     * CustomDomainDNSRecord}. DNS records to add for setup or verification. For an archived
     * hostname, records that can be deleted. oneOf[5].dns_records[] (Value): {@link
     * CustomDomainDNSRecord}. A DNS record for configuring or verifying a custom hostname.
     * oneOf[5].hostname (Required): string. Configured hostname, normalized to lowercase without a
     * trailing dot. oneOf[5].last_checked_at (Required): string or null. When the domain was last
     * checked, in RFC3339 format; null when no check time is available. Format: date-time.
     * oneOf[5].payment_method_domain_id (Required): string or null. Payment method domain
     * associated with this hostname, or null when none is reported. oneOf[5].redirect_expires_at
     * (Required): string or null. End of the redirect window for an archived hostname. After
     * archive, dns_records lists records you can delete. Format: date-time. oneOf[5].status
     * (Required): string. Current setup and availability state of the hostname. Archived domains
     * retain their resource identity. Value enum: "provisioning", "active", "attention_required",
     * "inactive", "archived". oneOf[5].status_reason (Required): string or null. Machine-readable
     * detail for the current status, or null when no reason is reported. Value enum:
     * "dns_record_missing", "dns_record_mismatch", "ownership_record_missing",
     * "ownership_record_mismatch", "caa_record_blocks_certificate", "proxied_by_another_provider",
     * "certificate_pending", "custom_domains_inactive", "other", null. oneOf[5].type (Required):
     * string. Whether the hostname serves checkout pages or the customer account Flint hosts.
     * Value enum: "checkout", "customer_account". oneOf[5].updated_at (Required): string. When
     * this domain resource was last updated, in RFC3339 format. Format: date-time.
     */
    "current_resource"?: ((({
        /**
         * Stable public resource name for the referenced resource: a ResourceType value, or
         * resource when the resource has no public type.
         */
        "resource_type": string;
        /** Public Flint ID of the referenced resource. */
        "resource_id": string;
    })
        & (Exclude<ErrorResourceReference & object, readonly unknown[]>))
        | (({
        /** Stable identifier of the fulfillment. */
        "fulfillment_id": string;
    })
        & (Exclude<Fulfillment & object, readonly unknown[]>))
        | (({
        /** Stable identifier of the shipment. */
        "shipment_id": string;
    })
        & (Exclude<Shipment & object, readonly unknown[]>))
        | (({
        /** Stable identifier of the package. */
        "package_id": string;
    })
        & (Exclude<Package & object, readonly unknown[]>))
        | (({
        /** Flint custom domain ID. */
        "custom_domain_id": string;
    })
        & (Exclude<CustomDomain & object, readonly unknown[]>))
        | (Record<string, unknown>));
    /** Current effective delivery selection ID returned with a selection concurrency conflict. */
    "current_selection_id"?: string;
    /**
     * Latest accepted absolute source sequence for this item and Location. Format: uint64.
     * minimum: 0.
     */
    "current_source_observation_sequence"?: number;
    /** Current lifecycle status of the resource when the requested mutation is not allowed. */
    "current_status"?: string;
    /**
     * Current version of the resource when a write that depends on its version or status is
     * rejected. Sent on VERSION_CONFLICT and on status conflicts such as ACTION_NOT_ALLOWED. On
     * VERSION_CONFLICT, send the order version as expected_version. Read the resource again before
     * you retry. Format: uint64. minimum: 0.
     */
    "current_version"?: number;
    /**
     * Delivery method this failure concerns. On SUBSCRIPTION_DELIVERY_UNAVAILABLE, the method that
     * cannot currently serve the subscription.
     */
    "delivery_method_id"?: string;
    /**
     * Key of the inventory demand this failure concerns. Sent on INVENTORY_INSUFFICIENT, and on
     * INVENTORY_INSUFFICIENT with reason location_ineligible when one demand cannot use the
     * Location.
     */
    "demand_key"?: string;
    /**
     * On INVENTORY_INSUFFICIENT with reason location_ineligible, why the Location in location_id
     * cannot supply the demand. Value enum: "location_not_active",
     * "inventory_allocation_inactive", "forced_location_mismatch", "fulfillment_incompatible",
     * "split_prohibited", "insufficient_quantity".
     */
    "eligibility_reason"?: "location_not_active"
        | "inventory_allocation_inactive"
        | "forced_location_mismatch"
        | "fulfillment_incompatible"
        | "split_prohibited"
        | "insufficient_quantity"
        | (string & {});
    /**
     * On VERSION_CONFLICT when you resume a payment attempt, the outstanding balance the attempt
     * started with. expected_outstanding_money must match it. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "expected_attempt_outstanding_money"?: MoneyValue;
    /**
     * Delivery pricing failure category on SUBSCRIPTION_DELIVERY_UNAVAILABLE, when the rate cannot
     * be calculated. Value enum: "dependency_failure", "timeout", "malformed_response",
     * "callback_transport_failure", "callback_circuit_open", "callback_result_invalid",
     * "callback_unavailable", "pricing_failure", "schedule_failure", "option_lifetime_too_short",
     * "geography_failure", "routing_failure", "invalid_configuration", "invalid_buyer_input",
     * "address_verification_failed", "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "callback_transport_failure"
        | "callback_circuit_open"
        | "callback_result_invalid"
        | "callback_unavailable"
        | "pricing_failure"
        | "schedule_failure"
        | "option_lifetime_too_short"
        | "geography_failure"
        | "routing_failure"
        | "invalid_configuration"
        | "invalid_buyer_input"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     * Decline reason for a failed payment, from the same vocabulary as the payment's
     * last_payment_error.code. Unrecognized provider reasons are payment_failed. Value enum:
     * "card_declined", "insufficient_funds", "bank_account_closed", "bank_account_not_found",
     * "bank_debit_not_authorized", "bank_account_restricted", "bank_debit_limit_exceeded",
     * "authentication_required", "payment_blocked", "expired_card", "incorrect_cvc", "lost_card",
     * "stolen_card", "do_not_honor", "fraudulent", "processing_error",
     * "payment_method_unavailable", "payment_method_declined", "payment_not_completed",
     * "payment_action_expired", "payment_method_temporarily_unavailable", "payment_failed".
     */
    "failure_code"?: "card_declined"
        | "insufficient_funds"
        | "bank_account_closed"
        | "bank_account_not_found"
        | "bank_debit_not_authorized"
        | "bank_account_restricted"
        | "bank_debit_limit_exceeded"
        | "authentication_required"
        | "payment_blocked"
        | "expired_card"
        | "incorrect_cvc"
        | "lost_card"
        | "stolen_card"
        | "do_not_honor"
        | "fraudulent"
        | "processing_error"
        | "payment_method_unavailable"
        | "payment_method_declined"
        | "payment_not_completed"
        | "payment_action_expired"
        | "payment_method_temporarily_unavailable"
        | "payment_failed"
        | (string & {});
    /**
     * Merchant-provided buyer-facing text on PAYMENT_LINK_INACTIVE. Present only when the merchant
     * set an inactive message.
     */
    "inactive_message"?: string;
    /**
     * Inventory count line this conflict concerns. Sent on VERSION_CONFLICT for physical
     * observations or stale source observation sequences.
     */
    "inventory_count_line_id"?: string;
    /**
     * Inventory item this failure concerns. Sent on INVENTORY_INSUFFICIENT and on VERSION_CONFLICT
     * for physical observations or stale source observation sequences.
     */
    "inventory_item_id"?: string;
    /**
     * The limit that was reached. On LIMIT_REACHED with reason enabled_risk_rules, the most active
     * risk rules in the environment. On LIMIT_REACHED with reason partner_app_credentials, the
     * most active credentials a partner app can hold. On LIMIT_REACHED with reason
     * payment_intents_per_order, the most payment intents an order can have over its lifetime. On
     * LIMIT_REACHED with reason payment_retries_per_period, the most payment retries a
     * subscription allows in one billing period. On LIMIT_REACHED with reason
     * test_clock_subscriptions, the most subscriptions that aren't canceled one test clock can
     * hold. Format: int64.
     */
    "limit"?: number;
    /**
     * Location this failure concerns. Sent on INVENTORY_INSUFFICIENT with reason
     * location_ineligible; VERSION_CONFLICT for physical observations or stale source observation
     * sequences; PICKUP_LOCATION_INACTIVE; PICKUP_LOCATION_INVENTORY_UNAVAILABLE;
     * PICKUP_LOCATION_GEOGRAPHY_UNAVAILABLE; and PICKUP_LOCATION_DEPENDENCY_FAILURE.
     */
    "location_id"?: string;
    /**
     * On INVENTORY_INSUFFICIENT with reason location_ineligible, the routing outcome for the
     * Location in location_id: for the demand in demand_key when present, otherwise for every
     * demand. Value enum: "ineligible".
     */
    "location_outcome"?: "ineligible" | (string & {});
    /**
     * RFC 3339 timestamp in UTC of the latest time this advance can reach. Sent on
     * ACTION_NOT_ALLOWED with reason advance_limit_exceeded. Format: date-time.
     */
    "maximum_frozen_at"?: string;
    /**
     * Maximum money amount accepted by the failed validation, calculated from the current resource
     * state. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "maximum_money"?: MoneyValue;
    /**
     * Human-readable explanation of this failure for your logs. The wording can change, so branch
     * on code.
     */
    "message": string;
    /**
     * Smallest money amount the input at param may contain in the resource's current state. On an
     * order total floor refusal without param, the minimum resulting order total, including any
     * unpaid tip. Retained errors keep their captured values. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "minimum_money"?: MoneyValue;
    /**
     * Minimum accepted whole-number quantity for the input at param, based on stored state;
     * fractional quantities are not supported. Sent on LIMIT_EXCEEDED. Format: int64.
     */
    "minimum_quantity"?: number;
    /**
     * Unsatisfied entries from scope_requirement after write-implies-read evaluation. Example:
     * ["accounts.api_keys.write"]. [] (Value): string.
     */
    "missing_scopes"?: Array<string>;
    /**
     * Public JSON request field path associated with this failure. Present on INVALID_REQUEST
     * details except a combined email-change code comparison failure when both codes were
     * required. Uses body for a whole-body failure, or the header name for a header.
     */
    "param"?: string;
    /**
     * Flint payment option associated with this error, when the error is about a specific
     * requested or selected payment option. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
    /**
     * RFC 3339 timestamp in UTC when the new account payout terms end on
     * NEW_ACCOUNT_PAYOUT_TERMS_ACTIVE. Sent at second precision. Choose an allowed schedule or
     * delay, or make the change after this time. Format: date-time.
     */
    "payout_terms_expires_at"?: string;
    /**
     * RFC 3339 timestamp when the previous signing key expires on
     * DELIVERY_RATE_CALLBACK_SECRET_ROTATION_OVERLAP_ACTIVE. Retry after this time, or revoke the
     * current key before rotating if it leaked. Format: date-time.
     */
    "previous_key_expires_at"?: string;
    /**
     * Structured resource quota state when the error is caused by quota exhaustion. Storage usage
     * and limits for a resource, returned in the error details when an image quota is exhausted.
     */
    "quota"?: QuotaDetails;
    /**
     * Stable Flint reason associated with this error. When code is ACTION_NOT_ALLOWED, one of:
     * advance_limit_exceeded, already_applied, archived, authorization_expired,
     * bank_return_not_contestable, cancellation_scheduled, configuration_required,
     * credit_exceeds_charge, credit_note_tax_reconciliation_required,
     * customer_account_mode_conflict, delivery_hold, delivery_requirement_changes,
     * derived_from_packages, destination_not_served, disclosure_changed,
     * dispute_payment_unavailable, existing_order_checkout, external_billing_schedule,
     * field_locked, frozen_at_not_later, image_ingestion_restart_required, in_progress,
     * initial_payment_pending, inventory_wait, invoice_finalized, managed_by_owner,
     * managed_externally, merchant_hosted_customer_accounts, merchant_managed_receipts,
     * method_unavailable, mixed_tax_treatment, not_itemized, not_offered, not_paused,
     * offer_subscription, on_hold, order_owned, payload_expired, payment_collected,
     * payment_disputed, payment_required, payout_defaults_managed_externally, payout_delay,
     * payout_frequency, period_end_unavailable, quantity_not_carried, reconciliation_required,
     * refund_created, refund_unavailable, return_checkout, return_tax_mismatch, secret_not_issued,
     * status_not_reached, store_credit_unavailable, subscription_terms_locked, terminal_status,
     * test_event, trial_in_progress, unsupported_state, verification_required. When code is
     * ALREADY_EXISTS, one of: hardware_fingerprint_already_exists. When code is
     * CONCURRENT_MODIFICATION, one of: credit_note_creditable_value_changed,
     * credit_note_refund_retry_exhausted. When code is DELIVERY_REQUOTE_REQUIRED, one of:
     * calculation_expired, caller_rates_required, destination_changed, option_expired,
     * quote_expired, quote_revoked, quote_stale, selection_changed, selection_expired,
     * window_expired. When code is EXTERNAL_SERVICE_ERROR, one of: outcome_unknown,
     * rate_unavailable. When code is FORBIDDEN, one of: checkout_launch_token_restricted,
     * checkout_recovery_attempt_mismatch, checkout_recovery_restricted,
     * checkout_session_order_mismatch, checkout_session_payment_required,
     * demo_session_route_not_allowed, direct_owner_required, environment_mismatch,
     * expansion_not_permitted, full_access_required, live_mode_required, merchant_access_required,
     * merchant_credential_required, merchant_role_insufficient, not_checkout_session,
     * not_permitted, oauth_context_mismatch, organization_membership_required,
     * organization_role_insufficient, owner_workflow_required, request_blocked,
     * role_not_assignable, sandbox_not_accessible, sandbox_selection_forbidden,
     * self_role_edit_forbidden, test_mode_required. When code is GIFT_CARD_CHALLENGE_REQUIRED, one
     * of: page_origin_required, proof_rejected, proof_required. When code is INTERNAL_ERROR, one
     * of: repair_required. When code is INVALID_CREDENTIAL, one of: expired, malformed,
     * mode_mismatch, revoked, session_ended, unknown, wrong_credential_type. When code is
     * INVENTORY_INSUFFICIENT, one of: location_ineligible, location_limit. When code is
     * LIMIT_EXCEEDED, one of: buyer_daily, card_balance, card_daily, merchant_adjustments_daily,
     * merchant_imports_daily. When code is LIMIT_REACHED, one of: checkout_tax_calculations,
     * consecutive_skips, daily_gift_card_purchases, delivery_selection_replacements,
     * enabled_risk_rules, external_paid_orders, image_storage, monthly_tax_calculations,
     * partner_app_credentials, payment_intents_per_order, payment_link_completions,
     * payment_retries_per_period, receipt_recipients, saved_card_codes, test_clock_subscriptions,
     * verification_attempts, verification_codes, workload_identities. When code is
     * MERCHANT_NOT_READY, one of: account_sessions_unavailable, account_setup_repair_required,
     * account_setup_unavailable, billing_suspended, capability_blocked, capability_not_requested,
     * capability_pending, capability_unavailable, default_environment_required,
     * disabled_by_merchant_settings, disabled_by_platform_policy,
     * merchant_account_action_required, merchant_payments_disabled, onboarding_required,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable,
     * pricing_not_authorized, processing_not_enabled, processing_restricted,
     * processor_not_configured, requirements_due, tax_category_required, under_review. When code
     * is OPERATION_IN_PROGRESS, one of: delivery_selection_materializing. When code is
     * PAYMENT_OPTION_UNAVAILABLE, one of: action_window_too_short, amount_out_of_range,
     * capability_blocked, capability_pending, disabled_by_merchant_settings,
     * disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable,
     * requirements_due, risk_action_unsupported, transaction_purpose_unresolved. When code is
     * PAYMENT_PROCESSING_UNAVAILABLE, one of: capability_blocked, capability_pending,
     * disabled_by_merchant_settings, disabled_by_platform_policy,
     * merchant_account_action_required, merchant_payments_disabled,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable,
     * requirements_due. When code is PROMOTION_DECLINED, one of: already_applied,
     * automatic_disabled, buy_item_missing, code_invalid, code_required, codes_disabled,
     * currency_mismatch, exhausted, expired, inactive, max_promotions_reached, minimum_not_met,
     * no_discountable_balance, not_combinable, not_eligible, not_yet_started, superseded,
     * superseded_by_better_offer, superseded_by_higher_priority, unknown_type. When code is
     * RESOURCE_IN_USE, one of: selected_by_active_variants. When code is SERVICE_UNAVAILABLE, one
     * of: outcome_unknown, processor_unavailable, repair_required. Additional reasons may be
     * added. Value enum: "account_sessions_unavailable", "account_setup_repair_required",
     * "account_setup_unavailable", "action_window_too_short", "advance_limit_exceeded",
     * "already_applied", "amount_out_of_range", "archived", "authorization_expired",
     * "automatic_disabled", "bank_return_not_contestable", "billing_suspended",
     * "buy_item_missing", "buyer_daily", "calculation_expired", "caller_rates_required",
     * "cancellation_scheduled", "capability_blocked", "capability_not_requested",
     * "capability_pending", "capability_unavailable", "card_balance", "card_daily",
     * "checkout_launch_token_restricted", "checkout_recovery_attempt_mismatch",
     * "checkout_recovery_restricted", "checkout_session_order_mismatch",
     * "checkout_session_payment_required", "checkout_tax_calculations", "code_invalid",
     * "code_required", "codes_disabled", "configuration_required", "consecutive_skips",
     * "credit_exceeds_charge", "credit_note_creditable_value_changed",
     * "credit_note_refund_retry_exhausted", "credit_note_tax_reconciliation_required",
     * "currency_mismatch", "customer_account_mode_conflict", "daily_gift_card_purchases",
     * "default_environment_required", "delivery_hold", "delivery_requirement_changes",
     * "delivery_selection_materializing", "delivery_selection_replacements",
     * "demo_session_route_not_allowed", "derived_from_packages", "destination_changed",
     * "destination_not_served", "direct_owner_required", "disabled_by_merchant_settings",
     * "disabled_by_platform_policy", "disclosure_changed", "dispute_payment_unavailable",
     * "enabled_risk_rules", "environment_mismatch", "exhausted", "existing_order_checkout",
     * "expansion_not_permitted", "expired", "external_billing_schedule", "external_paid_orders",
     * "field_locked", "frozen_at_not_later", "full_access_required",
     * "hardware_fingerprint_already_exists", "image_ingestion_restart_required", "image_storage",
     * "in_progress", "inactive", "initial_payment_pending", "inventory_wait", "invoice_finalized",
     * "live_mode_required", "location_ineligible", "location_limit", "malformed",
     * "managed_by_owner", "managed_externally", "max_promotions_reached",
     * "merchant_access_required", "merchant_account_action_required",
     * "merchant_adjustments_daily", "merchant_credential_required",
     * "merchant_hosted_customer_accounts", "merchant_imports_daily", "merchant_managed_receipts",
     * "merchant_payments_disabled", "merchant_role_insufficient", "method_unavailable",
     * "minimum_not_met", "mixed_tax_treatment", "mode_mismatch", "monthly_tax_calculations",
     * "no_discountable_balance", "not_checkout_session", "not_combinable", "not_eligible",
     * "not_itemized", "not_offered", "not_paused", "not_permitted", "not_yet_started",
     * "oauth_context_mismatch", "offer_subscription", "on_hold", "onboarding_required",
     * "option_expired", "order_owned", "organization_membership_required",
     * "organization_role_insufficient", "outcome_unknown", "owner_workflow_required",
     * "page_origin_required", "partner_app_credentials", "payload_expired",
     * "payment_account_context_invalid", "payment_account_setup_incomplete", "payment_collected",
     * "payment_disputed", "payment_intents_per_order", "payment_link_completions",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_available", "payment_option_not_in_plan", "payment_required",
     * "payment_retries_per_period", "payout_defaults_managed_externally", "payout_delay",
     * "payout_frequency", "period_end_unavailable", "platform_funding_unavailable",
     * "pricing_not_authorized", "processing_not_enabled", "processing_restricted",
     * "processor_not_configured", "processor_unavailable", "proof_rejected", "proof_required",
     * "quantity_not_carried", "quote_expired", "quote_revoked", "quote_stale", "rate_unavailable",
     * "receipt_recipients", "reconciliation_required", "refund_created", "refund_unavailable",
     * "repair_required", "request_blocked", "requirements_due", "return_checkout",
     * "return_tax_mismatch", "revoked", "risk_action_unsupported", "role_not_assignable",
     * "sandbox_not_accessible", "sandbox_selection_forbidden", "saved_card_codes",
     * "secret_not_issued", "selected_by_active_variants", "selection_changed",
     * "selection_expired", "self_role_edit_forbidden", "session_ended", "status_not_reached",
     * "store_credit_unavailable", "subscription_terms_locked", "superseded",
     * "superseded_by_better_offer", "superseded_by_higher_priority", "tax_category_required",
     * "terminal_status", "test_clock_subscriptions", "test_event", "test_mode_required",
     * "transaction_purpose_unresolved", "trial_in_progress", "under_review", "unknown",
     * "unknown_type", "unsupported_state", "verification_attempts", "verification_codes",
     * "verification_required", "window_expired", "workload_identities", "wrong_credential_type".
     */
    "reason"?: "account_sessions_unavailable"
        | "account_setup_repair_required"
        | "account_setup_unavailable"
        | "action_window_too_short"
        | "advance_limit_exceeded"
        | "already_applied"
        | "amount_out_of_range"
        | "archived"
        | "authorization_expired"
        | "automatic_disabled"
        | "bank_return_not_contestable"
        | "billing_suspended"
        | "buy_item_missing"
        | "buyer_daily"
        | "calculation_expired"
        | "caller_rates_required"
        | "cancellation_scheduled"
        | "capability_blocked"
        | "capability_not_requested"
        | "capability_pending"
        | "capability_unavailable"
        | "card_balance"
        | "card_daily"
        | "checkout_launch_token_restricted"
        | "checkout_recovery_attempt_mismatch"
        | "checkout_recovery_restricted"
        | "checkout_session_order_mismatch"
        | "checkout_session_payment_required"
        | "checkout_tax_calculations"
        | "code_invalid"
        | "code_required"
        | "codes_disabled"
        | "configuration_required"
        | "consecutive_skips"
        | "credit_exceeds_charge"
        | "credit_note_creditable_value_changed"
        | "credit_note_refund_retry_exhausted"
        | "credit_note_tax_reconciliation_required"
        | "currency_mismatch"
        | "customer_account_mode_conflict"
        | "daily_gift_card_purchases"
        | "default_environment_required"
        | "delivery_hold"
        | "delivery_requirement_changes"
        | "delivery_selection_materializing"
        | "delivery_selection_replacements"
        | "demo_session_route_not_allowed"
        | "derived_from_packages"
        | "destination_changed"
        | "destination_not_served"
        | "direct_owner_required"
        | "disabled_by_merchant_settings"
        | "disabled_by_platform_policy"
        | "disclosure_changed"
        | "dispute_payment_unavailable"
        | "enabled_risk_rules"
        | "environment_mismatch"
        | "exhausted"
        | "existing_order_checkout"
        | "expansion_not_permitted"
        | "expired"
        | "external_billing_schedule"
        | "external_paid_orders"
        | "field_locked"
        | "frozen_at_not_later"
        | "full_access_required"
        | "hardware_fingerprint_already_exists"
        | "image_ingestion_restart_required"
        | "image_storage"
        | "in_progress"
        | "inactive"
        | "initial_payment_pending"
        | "inventory_wait"
        | "invoice_finalized"
        | "live_mode_required"
        | "location_ineligible"
        | "location_limit"
        | "malformed"
        | "managed_by_owner"
        | "managed_externally"
        | "max_promotions_reached"
        | "merchant_access_required"
        | "merchant_account_action_required"
        | "merchant_adjustments_daily"
        | "merchant_credential_required"
        | "merchant_hosted_customer_accounts"
        | "merchant_imports_daily"
        | "merchant_managed_receipts"
        | "merchant_payments_disabled"
        | "merchant_role_insufficient"
        | "method_unavailable"
        | "minimum_not_met"
        | "mixed_tax_treatment"
        | "mode_mismatch"
        | "monthly_tax_calculations"
        | "no_discountable_balance"
        | "not_checkout_session"
        | "not_combinable"
        | "not_eligible"
        | "not_itemized"
        | "not_offered"
        | "not_paused"
        | "not_permitted"
        | "not_yet_started"
        | "oauth_context_mismatch"
        | "offer_subscription"
        | "on_hold"
        | "onboarding_required"
        | "option_expired"
        | "order_owned"
        | "organization_membership_required"
        | "organization_role_insufficient"
        | "outcome_unknown"
        | "owner_workflow_required"
        | "page_origin_required"
        | "partner_app_credentials"
        | "payload_expired"
        | "payment_account_context_invalid"
        | "payment_account_setup_incomplete"
        | "payment_collected"
        | "payment_disputed"
        | "payment_intents_per_order"
        | "payment_link_completions"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_available"
        | "payment_option_not_in_plan"
        | "payment_required"
        | "payment_retries_per_period"
        | "payout_defaults_managed_externally"
        | "payout_delay"
        | "payout_frequency"
        | "period_end_unavailable"
        | "platform_funding_unavailable"
        | "pricing_not_authorized"
        | "processing_not_enabled"
        | "processing_restricted"
        | "processor_not_configured"
        | "processor_unavailable"
        | "proof_rejected"
        | "proof_required"
        | "quantity_not_carried"
        | "quote_expired"
        | "quote_revoked"
        | "quote_stale"
        | "rate_unavailable"
        | "receipt_recipients"
        | "reconciliation_required"
        | "refund_created"
        | "refund_unavailable"
        | "repair_required"
        | "request_blocked"
        | "requirements_due"
        | "return_checkout"
        | "return_tax_mismatch"
        | "revoked"
        | "risk_action_unsupported"
        | "role_not_assignable"
        | "sandbox_not_accessible"
        | "sandbox_selection_forbidden"
        | "saved_card_codes"
        | "secret_not_issued"
        | "selected_by_active_variants"
        | "selection_changed"
        | "selection_expired"
        | "self_role_edit_forbidden"
        | "session_ended"
        | "status_not_reached"
        | "store_credit_unavailable"
        | "subscription_terms_locked"
        | "superseded"
        | "superseded_by_better_offer"
        | "superseded_by_higher_priority"
        | "tax_category_required"
        | "terminal_status"
        | "test_clock_subscriptions"
        | "test_event"
        | "test_mode_required"
        | "transaction_purpose_unresolved"
        | "trial_in_progress"
        | "under_review"
        | "unknown"
        | "unknown_type"
        | "unsupported_state"
        | "verification_attempts"
        | "verification_codes"
        | "verification_required"
        | "window_expired"
        | "workload_identities"
        | "wrong_credential_type"
        | (string & {});
    /**
     * Recovery guidance for this failure: whether retrying can succeed and what to do next.
     * Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested
     * actions.
     */
    "remediation"?: ErrorRemediation;
    /**
     * Whole-number quantity submitted by the caller when a quantity-bearing operation conflicts
     * with current capacity; fractional quantities are not supported. Format: int64.
     */
    "requested_quantity"?: number;
    /**
     * Shipping total computed for the new destination, when available. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "requoted_shipping_money"?: MoneyValue;
    /**
     * Tax total computed for the new destination, when available. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "requoted_tax_money"?: MoneyValue;
    /** ID of the referenced public resource, when available. */
    "resource_id"?: string;
    /**
     * Public resource named by RESOURCE_NOT_FOUND or a generic conflict: a ResourceType value, or
     * resource when the resource has no public type.
     */
    "resource_type"?: string;
    /** Canonical public scope rejected by validation, when the detail concerns one scope. */
    "scope"?: string;
    /**
     * Complete route or delegation scope requirement for an INSUFFICIENT_SCOPE error. The scopes
     * an authorization decision required and whether `all` or `any` of them were needed, returned
     * in error details.
     */
    "scope_requirement"?: ScopeRequirement;
    /**
     * Resources offered for the field named by param under INVALID_REQUEST. Submit one of their
     * resource_id values. [] (Value): {@link SelectableErrorResource}. A resource the caller can
     * select for a request field.
     */
    "selectable_resources"?: Array<SelectableErrorResource>;
    /**
     * Committed shipping total on the paid order when its destination cannot change without
     * repricing. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "shipping_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "shortage_quantity"?: number;
    /**
     * Amount from your request that failed the check. On ACTION_NOT_ALLOWED with
     * reconciliation_required, the unpaid tip the payment would have to carry. On VERSION_CONFLICT
     * or LIMIT_EXCEEDED, the expected_outstanding_money you sent, or the total of the selected
     * payment legs when they do not fit the outstanding balance. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "submitted_money"?: MoneyValue;
    /**
     * Absolute source sequence submitted for this inventory count line. Format: uint64. minimum:
     * 0.
     */
    "submitted_source_observation_sequence"?: number;
    /** Concrete corrective actions for this validation error. [] (Value): string. */
    "suggestions"?: Array<string>;
    /** Actions accepted for the current resource state. [] (Value): string. */
    "supported_actions"?: Array<string>;
    /**
     * On INVALID_REQUEST with param Flint-Version, and on API_VERSION_RETIRED, the API versions
     * you can use now. [] (Value): string.
     */
    "supported_api_versions"?: Array<string>;
    /**
     * Committed tax total on a paid order when its destination cannot change without repricing.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tax_money"?: MoneyValue;
    /**
     * Delivery eligibility reason on SUBSCRIPTION_DELIVERY_UNAVAILABLE, when the selected method
     * is unavailable. Value enum: "destination_not_served", "pickup_unavailable",
     * "no_window_available", "eligibility_no_match", "method_type_not_allowed",
     * "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
};
/** An error response containing `ErrorObject`. */
export type ErrorEnvelope = {
    /**
     * Error code, message, request context, and guidance for resolving the failure. The error
     * returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a
     * list of `details` for individual failures.
     */
    "error": ErrorObject;
};
/**
 * The error returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`,
 * and a list of `details` for individual failures.
 */
export type ErrorObject = {
    /**
     * Stable Flint error code. Each operation lists its codes in x-flint-error-codes, and each
     * error response lists the codes it can carry at that status. Value enum:
     * "ACTION_NOT_ALLOWED", "ALREADY_EXISTS", "API_VERSION_RETIRED", "AUTHENTICATION_REQUIRED",
     * "CONCURRENT_MODIFICATION", "DELIVERY_REQUOTE_REQUIRED", "EXTERNAL_SERVICE_ERROR",
     * "FORBIDDEN", "GIFT_CARD_CHALLENGE_REQUIRED", "IDEMPOTENCY_KEY_IN_PROGRESS",
     * "IDEMPOTENCY_KEY_REUSED", "IDEMPOTENCY_RECOVERY_REQUIRED", "IDENTITY_VERIFICATION_REQUIRED",
     * "INSUFFICIENT_SCOPE", "INTERNAL_ERROR", "INVALID_CREDENTIAL", "INVALID_REQUEST",
     * "INVALID_VALUE", "INVENTORY_INSUFFICIENT", "LIMIT_EXCEEDED", "LIMIT_REACHED",
     * "MERCHANT_NOT_READY", "METHOD_NOT_ALLOWED", "NOT_ALLOWED", "OPERATION_IN_PROGRESS",
     * "PAYMENT_ATTEMPT_ACTIVE", "PAYMENT_OPTION_UNAVAILABLE", "PAYMENT_PROCESSING_UNAVAILABLE",
     * "PAYMENT_PROCESSOR_REJECTED", "PAYMENT_REVIEW_OPEN", "PROMOTION_DECLINED",
     * "RATE_LIMIT_EXCEEDED", "REQUEST_BODY_TOO_LARGE", "REQUEST_CANCELED", "REQUEST_TIMEOUT",
     * "REQUIRED", "RESOURCE_IN_USE", "RESOURCE_NOT_FOUND", "ROUTE_NOT_FOUND",
     * "SERVICE_UNAVAILABLE", "UNKNOWN_FIELD", "UNSUPPORTED_CONTENT_TYPE", "VERSION_CONFLICT".
     */
    "code": "ACTION_NOT_ALLOWED"
        | "ALREADY_EXISTS"
        | "API_VERSION_RETIRED"
        | "AUTHENTICATION_REQUIRED"
        | "CONCURRENT_MODIFICATION"
        | "DELIVERY_REQUOTE_REQUIRED"
        | "EXTERNAL_SERVICE_ERROR"
        | "FORBIDDEN"
        | "GIFT_CARD_CHALLENGE_REQUIRED"
        | "IDEMPOTENCY_KEY_IN_PROGRESS"
        | "IDEMPOTENCY_KEY_REUSED"
        | "IDEMPOTENCY_RECOVERY_REQUIRED"
        | "IDENTITY_VERIFICATION_REQUIRED"
        | "INSUFFICIENT_SCOPE"
        | "INTERNAL_ERROR"
        | "INVALID_CREDENTIAL"
        | "INVALID_REQUEST"
        | "INVALID_VALUE"
        | "INVENTORY_INSUFFICIENT"
        | "LIMIT_EXCEEDED"
        | "LIMIT_REACHED"
        | "MERCHANT_NOT_READY"
        | "METHOD_NOT_ALLOWED"
        | "NOT_ALLOWED"
        | "OPERATION_IN_PROGRESS"
        | "PAYMENT_ATTEMPT_ACTIVE"
        | "PAYMENT_OPTION_UNAVAILABLE"
        | "PAYMENT_PROCESSING_UNAVAILABLE"
        | "PAYMENT_PROCESSOR_REJECTED"
        | "PAYMENT_REVIEW_OPEN"
        | "PROMOTION_DECLINED"
        | "RATE_LIMIT_EXCEEDED"
        | "REQUEST_BODY_TOO_LARGE"
        | "REQUEST_CANCELED"
        | "REQUEST_TIMEOUT"
        | "REQUIRED"
        | "RESOURCE_IN_USE"
        | "RESOURCE_NOT_FOUND"
        | "ROUTE_NOT_FOUND"
        | "SERVICE_UNAVAILABLE"
        | "UNKNOWN_FIELD"
        | "UNSUPPORTED_CONTENT_TYPE"
        | "VERSION_CONFLICT"
        | (string & {});
    /**
     * Individual failures belonging to this error. Present on every validation error and every
     * error carrying facts. On non-validation errors the first item repeats the top-level code and
     * param. Facts appear only in typed detail fields; param contains public request field paths.
     * [] (Value): {@link ErrorDetail}. One specific failure within an error, with a `code` and
     * `message` plus fields that depend on the code, such as the `param`, resource, quantity, or
     * amount involved.
     */
    "details"?: Array<ErrorDetail>;
    /**
     * Error reference at https://developers.withflintpay.com/docs/errors# followed by the
     * lowercase error code.
     */
    "doc_url": string;
    /**
     * System boundary responsible for correcting the failure. Value enum: "merchant",
     * "integration", "flint".
     */
    "error_source": "merchant" | "integration" | "flint" | (string & {});
    /**
     * Human-readable explanation for your logs. The wording can change, so branch on code, and do
     * not show it to buyers as is.
     */
    "message": string;
    /**
     * Public JSON request field path that caused the failure, such as line_items[0].name, when the
     * failure concerns one field.
     */
    "param"?: string;
    /**
     * Recovery guidance: whether retrying can succeed and what to do next. anyOf[1] (Value):
     * {@link ErrorRemediation}. Recovery guidance for an error: whether and how to `retry`, plus
     * next steps and suggested actions. anyOf[2] (Value): null.
     */
    "remediation": ((ErrorRemediation) | (null));
    /**
     * ID of this request, also sent in the X-Request-Id response header. Include it when you
     * contact Flint support. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
    /**
     * Path of this request's log in the request-logs API, present when the credential can read it.
     * Flint writes the log just after responding, so a read sent immediately can return 404
     * RESOURCE_NOT_FOUND; retry after a second.
     */
    "request_log_url"?: string;
    /**
     * Coarse category determined by the HTTP status. 400: validation_error; 401:
     * authentication_error; 403: authorization_error; 404: not_found_error; 405, 410, 413, 415,
     * 499: protocol_error; 409: conflict_error; 429: rate_limit_error; 502:
     * external_service_error; 503: unavailable_error; 504: timeout_error. All other error
     * statuses: internal_error. Value enum: "authentication_error", "authorization_error",
     * "validation_error", "not_found_error", "conflict_error", "rate_limit_error",
     * "external_service_error", "timeout_error", "unavailable_error", "internal_error",
     * "protocol_error".
     */
    "type": "authentication_error"
        | "authorization_error"
        | "validation_error"
        | "not_found_error"
        | "conflict_error"
        | "rate_limit_error"
        | "external_service_error"
        | "timeout_error"
        | "unavailable_error"
        | "internal_error"
        | "protocol_error"
        | (string & {});
};
/**
 * Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested
 * actions.
 */
export type ErrorRemediation = {
    /**
     * Suggested actions for resolving the error, including the target resource and any required
     * input. [] (Value): {@link NextAction}. A suggested next step for resolving an error,
     * warning, or blocked state, such as the API operation to call or the scope it needs.
     */
    "next_actions"?: Array<NextAction>;
    /** What to change or check before attempting the operation again. */
    "next_steps"?: string;
    /**
     * How to recover: same_request resends the identical request with the same Idempotency-Key;
     * after_refresh re-reads the resource and rebuilds the request with a new key; none requires
     * correcting the request or following next_steps or next_actions. Value enum: "same_request",
     * "after_refresh", "none".
     */
    "retry": "same_request" | "after_refresh" | "none" | (string & {});
};
/**
 * A reference to a public resource named in an error, with its type, ID, and current status when
 * available.
 */
export type ErrorResourceReference = {
    /** Public Flint ID of the referenced resource. */
    "resource_id": string;
    /**
     * Stable public resource name for the referenced resource: a ResourceType value, or resource
     * when the resource has no public type.
     */
    "resource_type": string;
    /** Current public status of the referenced resource when available. */
    "status"?: string;
};
/**
 * A customer's summary fields, returned in place of a customer ID when the customer is expanded.
 */
export type ExpandedCustomerSummary = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "customer_id": string;
    /**
     * Customer email, or null when the customer has none. Unique among the environment's
     * customers.
     */
    "email": string | null;
    /** Customer name, or null when none. */
    "name": string | null;
    /** Customer phone number, or null when none. */
    "phone": string | null;
    /** Value enum: "active", "deletion_processing", "deleted". */
    "status": "active" | "deletion_processing" | "deleted" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/**
 * An invoice's summary fields, including status, due date, and paid, outstanding, and refunded
 * amounts, returned when the invoice is expanded.
 */
export type ExpandedInvoiceSummary = {
    /**
     * Whether collection is blocked. While it is inventory_blocked, collection attempts return 409
     * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
     * "inventory_blocked", "resolved".
     */
    "collection_block_status"?: "none" | "inventory_blocked" | "resolved" | (string & {});
    /** When the invoice was created. Format: date-time. */
    "created_at"?: string;
    /** Customer billed by the invoice. Absent when the invoice has no customer. */
    "customer_id"?: string;
    /**
     * When payment is due. With payment terms, issue sets it from issued_at and the terms, counted
     * in the invoice's timezone. Absent when the invoice has no due date. Format: date-time.
     */
    "due_at"?: string;
    /** Flint invoice ID. */
    "invoice_id": string;
    /** Sequential document number assigned when the invoice is issued. Absent on a draft. */
    "invoice_number"?: string;
    /**
     * Whether the invoice is open or partially_paid and past due with a balance remaining, as
     * is_overdue on the full Invoice reports it.
     */
    "is_overdue": boolean;
    /** The order the invoice bills. */
    "order_id"?: string;
    /**
     * What is still owed, as outstanding_money on the full Invoice reports it: never below zero, 0
     * on paid, credited, uncollectible, and void invoices, and equal to total_money on a draft.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Payments collected toward this invoice, online or as recorded manual payments, minus
     * reversed payments, including payments toward late fees. Never below zero. Refunds don't
     * reduce it; they are in refunded_money. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * How much of the collected money has been refunded. It doesn't change status. Value enum:
     * "none", "partially_refunded", "refunded".
     */
    "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Money refunded to the buyer after collection. Refunds don't reopen the balance;
     * refund_status summarizes them. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Current invoice status. paid and credited close the current balance and can reopen to open
     * or partially_paid after a payment or credit allocation reversal; invoice.reopened reports
     * that change. void and uncollectible are final. Refunds change refund_status without
     * reopening the balance. Value enum: "draft", "open", "partially_paid", "paid", "void",
     * "uncollectible", "credited".
     */
    "status": "draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited" | (string & {});
    /**
     * The invoice document total, equal to snapshot.pricing_amounts.total_money. Fixed at issue; a
     * draft previews the backing order total. Late fees are in late_fee_money on the full invoice.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** When the invoice last changed. Format: date-time. */
    "updated_at"?: string;
};
/**
 * An order's summary fields, including status, payment and refund status, and pricing and
 * settlement amounts, returned when the order is expanded.
 */
export type ExpandedOrderSummary = {
    /**
     * Buyer contact recorded on the order, including guest contact when retained. Omitted when the
     * order has no recorded contact. Buyer contact supplied with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /**
     * When the order closed. Present exactly when status is closed. Set once at the transition and
     * never changed. Format: date-time.
     */
    "closed_at"?: string;
    /**
     * Why the order closed. Present exactly when status is closed. Set once at closure.
     * Unrecognized reasons are returned as other; new values may be added. Value enum: "paid",
     * "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other".
     */
    "closed_reason"?: "paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other"
        | (string & {});
    /** When the order was created, in RFC3339 format. Format: date-time. */
    "created_at"?: string;
    /** Customer associated with the order, when one is set. */
    "customer_id"?: string;
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
     * ID of the delivery selection that governs this order. Null when no selection governs the
     * order.
     */
    "governing_delivery_selection_id": string | null;
    /** Stable identifier of the expanded order. */
    "order_id": string;
    /** Human-readable order number for receipts and merchant reference. */
    "order_number"?: string;
    /** Payment intents associated with the order. [] (Value): string. */
    "payment_intent_ids"?: Array<string>;
    /**
     * Collection progress. An invoice write-off also completes collection without receiving the
     * written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
    /**
     * Order totals before accounting for collected payments and refunds. The money totals for an
     * order or invoice: subtotal, discounts, charges, tax, requested tip, and total.
     */
    "pricing_amounts": PricingAmounts;
    /**
     * Refund progress for collected money. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Payments, refunds, credits, and amounts still owed for the order. How much of an order has
     * been paid, refunded, credited, written off, and settled as tips, and what balance and
     * outstanding amount remain.
     */
    "settlement_amounts": SettlementAmounts;
    /**
     * Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes,
     * returns, and metadata or note edits continue on a closed order. Value enum: "open",
     * "closed".
     */
    "status": "open" | "closed" | (string & {});
    /** When the order was last updated, in RFC3339 format. Format: date-time. */
    "updated_at"?: string;
};
/**
 * An organization's summary fields, such as its name, status, and parent, returned when the
 * organization is expanded.
 */
export type ExpandedOrganizationSummary = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "name": string;
    "organization_id": string;
    "parent_organization_id"?: string;
    /**
     * Current status. Archived: deleted. API keys can no longer read or list the organization.
     * Value enum: "active", "archived".
     */
    "status": "active" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Format: uint64. minimum: 1. */
    "version": number;
};
/**
 * A package's summary fields, including carrier, tracking, status, and supported actions, returned
 * when the package is expanded.
 */
export type ExpandedPackageSummary = {
    /** Carrier transporting the package. */
    "carrier"?: string;
    /** When the package was created, in RFC3339 format. Format: date-time. */
    "created_at"?: string;
    /** When the package was delivered, in RFC3339 format. Format: date-time. */
    "delivered_at"?: string;
    /**
     * When the carrier or merchant expects this package to arrive. Null when no estimate is set.
     * Retained after delivery as history. This estimate is separate from the fulfillment's
     * promised shipment window. Format: date-time.
     */
    "expected_delivery_at"?: string | null;
    /** Fulfillment whose items are in the package. */
    "fulfillment_id": string;
    /** Stable identifier of the expanded package. */
    "package_id": string;
    /** Carrier service used for the package. */
    "service_code"?: string;
    /** Shipment carrying this package. */
    "shipment_id": string;
    /** When the package was shipped, in RFC3339 format. Format: date-time. */
    "shipped_at"?: string;
    /**
     * Current package lifecycle state. - `created`: The package record exists but has not been
     * packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. -
     * `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the
     * package through its network. - `out_for_delivery`: The package is on its final delivery
     * route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The
     * carrier attempted delivery but did not complete it. Follow the carrier instructions before
     * retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve
     * the carrier-reported issue. - `returned`: The package was returned toward or to its origin.
     * - `voided`: The package was voided and will not continue through delivery. Value enum:
     * "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "exception", "returned", "voided".
     */
    "status": "created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided"
        | (string & {});
    /**
     * Read-only actions currently supported for this package. [] enum: "mark_delivered",
     * "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery",
     * "mark_packed", "mark_returned", "mark_shipped". [] (Value): string. Value enum:
     * "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
     * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped".
     */
    "supported_actions": Array<"mark_delivered"
        | "mark_delivery_attempted"
        | "mark_exception"
        | "mark_in_transit"
        | "mark_out_for_delivery"
        | "mark_packed"
        | "mark_returned"
        | "mark_shipped"
        | (string & {})>;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified.
     */
    "tracking_number"?: string;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified.
     */
    "tracking_url"?: string;
    /** When the package was last updated, in RFC3339 format. Format: date-time. */
    "updated_at"?: string;
    /** Monotonic package version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
};
/**
 * A payment intent's summary fields, including amount, status, and capture method, returned when
 * the payment intent is expanded.
 */
export type ExpandedPaymentIntentSummary = {
    /**
     * The amount requested from the buyer, including any tip_money. Capturing doesn't change it:
     * after a partial capture it still shows the requested amount, and captured_money shows what
     * was collected. On a standalone payment intent, PATCH can change it only before the first
     * confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money": MoneyValue;
    /** When money is collected. Defaults to automatic. Value enum: "automatic", "manual". */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Customer linked to this payment intent. */
    "customer_id"?: string;
    /**
     * Order this payment intent belongs to. Create it through the order and confirm it with POST
     * /v1/orders/{order_id}/pay. Capture and cancel use POST
     * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
     * Order-owned intents accept PATCH for metadata and external_reference_id.
     */
    "order_id"?: string;
    /** Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Summary of the card or bank account used for the payment. Absent until a payment source is
     * attached. A summary of the payment source used for a payment, by funding-method family, with
     * card or bank account display details.
     */
    "payment_source"?: PaymentSourceSummary;
    /**
     * How much of captured_money has been refunded, including value issued as store credit, based
     * on refunded_money. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Lifecycle status. requires_payment_method covers both a new payment intent and one whose
     * last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired
     * are final. Refunds and disputes never change status. Value enum: "requires_payment_method",
     * "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled",
     * "succeeded", "expired".
     */
    "status": "requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/**
 * A payment link's summary fields, including name, type, status, and URL, returned when the
 * payment link is expanded.
 */
export type ExpandedPaymentLinkSummary = {
    /** Format: int32. */
    "completed_count": number;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "description"?: string;
    "name": string;
    "payment_link_id": string;
    /** Value enum: "standard", "donation", "event". */
    "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
    /** Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
    "subscription_plan_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    "url"?: string;
};
/**
 * A payment method's summary fields, including type, status, and card details, returned when the
 * payment method is expanded.
 */
export type ExpandedPaymentMethodSummary = {
    /**
     * Card details on a payment method: brand, expiration month and year, last four digits, and
     * the wallet when one was used.
     */
    "card"?: CardDetails;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "customer_id"?: string;
    "payment_method_id": string;
    /** Value enum: "pending", "active", "expired", "archived", "failed". */
    "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
    /** Value enum: "card". */
    "type": "card" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/**
 * A payout destination's summary fields, such as type, bank name, last four digits, and status,
 * returned when the destination is expanded.
 */
export type ExpandedPayoutDestinationSummary = {
    /**
     * Payout methods available through Flint for this destination. Only standard is currently
     * available. [] enum: "standard". [] (Value): string. Value enum: "standard".
     */
    "available_payout_methods": Array<"standard" | (string & {})>;
    "bank_name"?: string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    "default_for_currency": boolean;
    "last4"?: string;
    "payout_destination_id": string;
    /**
     * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     */
    "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
    /**
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other".
     */
    "type": "bank_account" | "debit_card" | "other" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/**
 * A payout's summary fields, including amount, method, status, and arrival date, returned when the
 * payout is expanded.
 */
export type ExpandedPayoutSummary = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /**
     * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC
     * date of the expected arrival. Format: date.
     */
    "arrival_date"?: string;
    /**
     * Balance source this payout draws from. Flint chooses the source when balance_source_type is
     * omitted at create. Clients must accept source types added in future releases. Value enum:
     * "card", "bank_account".
     */
    "balance_source_type": "card" | "bank_account" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * Payout method. instant can appear on imported payouts; unmapped methods are returned as
     * other. Value enum: "standard", "instant", "other".
     */
    "method": "standard" | "instant" | "other" | (string & {});
    "payout_destination_id"?: string;
    "payout_id": string;
    /** Value enum: "none", "reversed". */
    "reversal_status": "none" | "reversed" | (string & {});
    /** Value enum: "pending", "in_transit", "paid", "failed", "canceled". */
    "status": "pending" | "in_transit" | "paid" | "failed" | "canceled" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/**
 * A shipment's summary fields, including direction, status, and package count, returned when the
 * shipment is expanded.
 */
export type ExpandedShipmentSummary = {
    /** When the shipment was created, in RFC3339 format. Format: date-time. */
    "created_at"?: string;
    /** When the shipment was delivered, in RFC3339 format. Format: date-time. */
    "delivered_at"?: string;
    /**
     * Whether the shipment sends items to the buyer or returns items to the merchant. Value enum:
     * "outbound", "return".
     */
    "direction": "outbound" | "return" | (string & {});
    /** Fulfillment associated with this shipment. */
    "fulfillment_id": string;
    /** When the carrier accepted the shipment, in RFC3339 format. Format: date-time. */
    "handed_off_at"?: string;
    /**
     * Total number of packages attached to the shipment, including voided packages. Format: int32.
     * minimum: 0.
     */
    "package_count": number;
    /** ID of the Return this shipment sends back. Present only on return shipments. */
    "return_id"?: string;
    /** Stable identifier of the expanded shipment. */
    "shipment_id": string;
    /** When the shipment was shipped, in RFC3339 format. Format: date-time. */
    "shipped_at"?: string;
    /**
     * Read-only shipment state. - `created`: The shipment leg exists but has not been packed or
     * handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. -
     * `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving
     * the shipment through its network. - `out_for_delivery`: The shipment is on its final
     * delivery route. - `delivered`: The carrier reported successful delivery. -
     * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the
     * carrier instructions before retrying delivery. - `exception`: A carrier exception is
     * blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was
     * returned toward or to its origin. - `voided`: The shipment was voided and will not continue
     * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     */
    "status": "created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided"
        | (string & {});
    /** When the shipment was last updated, in RFC3339 format. Format: date-time. */
    "updated_at"?: string;
};
/**
 * A subscription plan's summary fields, including name, billing interval, currency, and status,
 * returned when the plan is expanded.
 */
export type ExpandedSubscriptionPlanSummary = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. */
    "billing_interval_count": number;
    /**
     * maxItems: 12. uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
     * interval, such as every 2 months, offered by a subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    "description"?: string;
    /**
     *  [] (Value): {@link SubscriptionPlanLineItem}. A line item on a subscription plan, from a
     * variant or bundle, with its quantity, price, and variants a subscriber can swap to.
     */
    "line_items"?: Array<SubscriptionPlanLineItem>;
    "name": string;
    /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100. */
    "quantity_options"?: Array<number>;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "setup_fee_money"?: MoneyValue;
    /**
     * Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED
     * while existing subscriptions keep renewing. Archived plans are read-only and their status is
     * set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Value enum: "active",
     * "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    "subscription_plan_id": string;
    /** Format: int32. */
    "trial_period_days"?: number;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/**
 * A subscription's summary fields, including status, billing period, and next billing time,
 * returned when the subscription is expanded.
 */
export type ExpandedSubscriptionSummary = {
    /** Format: int32. */
    "billing_anchor_day": number;
    "cancel_at_period_end": boolean;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "current_period_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "current_period_start_at"?: string;
    "customer_id": string;
    /**
     * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only
     * while a trialing or active subscription has a billing date and isn't set to cancel at the
     * end of its period. Absent when no renewal is scheduled: a paused subscription resumes at
     * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and
     * retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start
     * begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule
     * awaiting a date reports awaiting_billing_schedule. Format: date-time.
     */
    "next_billing_at"?: string;
    /**
     * Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
     * "scheduled".
     */
    "status": "trialing"
        | "active"
        | "paused"
        | "past_due"
        | "canceled"
        | "incomplete"
        | "scheduled"
        | (string & {});
    "subscription_id": string;
    "subscription_plan_id": string;
    /** Value enum: "subscription_plan", "subscription_offer". */
    "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/** Feedback submitted about the developer experience. */
export type FeedbackReport = ({
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
     * Location in the reporting code associated with this feedback. Limited to 500 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Optional feature or subsystem within the product. Limited to 128 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 128.
     */
    "component"?: string;
    /** Server-assigned time when Flint stored the report. Format: date-time. */
    "created_at": string;
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
    /** Server-assigned ID of the stored feedback report. pattern: ^fbr_[0-9A-HJKMNP-TV-Z]{26}$. */
    "feedback_report_id": string;
    /**
     * Classification of the feedback. Value enum: "papercut", "bug", "feature_request", "rating",
     * "praise", "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "rating" | "praise" | "other" | (string & {});
    /**
     * Flint request ID associated with this feedback. Limited to 255 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 255.
     */
    "related_request_id"?: string;
    /**
     * Existing public resources associated with this feedback, with at most 20 unique IDs.
     * maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
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
     * Relevant route in the product being discussed. Limited to 500 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 500.
     */
    "surface_route"?: string;
})
    & ((Exclude<FeedbackReportRating & object, readonly unknown[]>)
    | (Exclude<FeedbackReportNarrative & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** A page of `FeedbackReport` objects. */
export type FeedbackReportListResponse = {
    /**  [] (Value): {@link FeedbackReport}. Feedback submitted about the developer experience. */
    "data": Array<FeedbackReport>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Feedback submitted about the developer experience. */
export type FeedbackReportNarrative = ({
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
     * Location in the reporting code associated with this feedback. Limited to 500 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Optional feature or subsystem within the product. Limited to 128 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 128.
     */
    "component"?: string;
    /** Server-assigned time when Flint stored the report. Format: date-time. */
    "created_at": string;
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
    /** Server-assigned ID of the stored feedback report. pattern: ^fbr_[0-9A-HJKMNP-TV-Z]{26}$. */
    "feedback_report_id": string;
    /**
     * Classification of the feedback. Value enum: "papercut", "bug", "feature_request", "praise",
     * "other".
     */
    "kind": "papercut" | "bug" | "feature_request" | "praise" | "other" | (string & {});
    /**
     * Flint request ID associated with this feedback. Limited to 255 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 255.
     */
    "related_request_id"?: string;
    /**
     * Existing public resources associated with this feedback, with at most 20 unique IDs.
     * maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
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
     * Relevant route in the product being discussed. Limited to 500 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 500.
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
/** Feedback submitted about the developer experience. */
export type FeedbackReportRating = ({
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
     * Location in the reporting code associated with this feedback. Limited to 500 characters
     * (Unicode code points), counted before whitespace and line-ending normalization. minLength:
     * 1. maxLength: 500.
     */
    "code_location"?: string;
    /**
     * Optional feature or subsystem within the product. Limited to 128 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 128.
     */
    "component"?: string;
    /** Server-assigned time when Flint stored the report. Format: date-time. */
    "created_at": string;
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
    /** Server-assigned ID of the stored feedback report. pattern: ^fbr_[0-9A-HJKMNP-TV-Z]{26}$. */
    "feedback_report_id": string;
    /** Classification of the feedback. Value enum: "rating". */
    "kind": "rating" | (string & {});
    /**
     * Flint request ID associated with this feedback. Limited to 255 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 255.
     */
    "related_request_id"?: string;
    /**
     * Existing public resources associated with this feedback, with at most 20 unique IDs.
     * maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
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
     * Relevant route in the product being discussed. Limited to 500 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 500.
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
/** A response containing `FeedbackReport` data. */
export type FeedbackReportResponse = {
    /** Feedback submitted about the developer experience. */
    "data": FeedbackReport;
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
 * The client that submits a feedback report, with its name, platform, version, and schema version.
 */
export type FeedbackReportingClient = {
    /**
     * Name of the submitting tool. Required when reporting_client is present. Limited to 64
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 64.
     */
    "name": string;
    /**
     * Platform on which the submitting client runs. Value enum: "macos", "linux", "windows",
     * "ios", "android", "web", "other".
     */
    "platform"?: "macos" | "linux" | "windows" | "ios" | "android" | "web" | "other" | (string & {});
    /**
     * Feedback schema version used by the submitting tool. Limited to 64 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 64.
     */
    "schema_version"?: string;
    /**
     * Version of the submitting tool. Limited to 64 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 64.
     */
    "version"?: string;
};
/**
 * The client that submits a feedback report, with its name, platform, version, and schema version.
 */
export type FeedbackReportingClientInput = {
    /**
     * Name of the submitting tool. Required when reporting_client is present. Limited to 64
     * characters (Unicode code points), counted before whitespace and line-ending normalization.
     * minLength: 1. maxLength: 64.
     */
    "name": string;
    /**
     * Platform on which the submitting client runs. Value enum: "macos", "linux", "windows",
     * "ios", "android", "web", "other".
     */
    "platform"?: "macos" | "linux" | "windows" | "ios" | "android" | "web" | "other";
    /**
     * Feedback schema version used by the submitting tool. Limited to 64 characters (Unicode code
     * points), counted before whitespace and line-ending normalization. minLength: 1. maxLength:
     * 64.
     */
    "schema_version"?: string;
    /**
     * Version of the submitting tool. Limited to 64 characters (Unicode code points), counted
     * before whitespace and line-ending normalization. minLength: 1. maxLength: 64.
     */
    "version"?: string;
};
export type FeedbackReportsCreateParams = (CreateFeedbackReportRequestInput);
export type FeedbackReportsGetParams = {};
export type FeedbackReportsListParams = CheckoutSessionsListDeliverySelectionsParams;
/**
 * An image uploaded to Flint. Create the file, PUT its bytes to upload.url with upload.headers,
 * then complete it. Attach a ready file with images[].file_id on a catalog resource or file_id in
 * a branding image field. A ready unattached file expires after 24 hours; attachment removes that
 * deadline. Each upload has its own file_id, including uploads of identical bytes.
 */
export type File = {
    /**
     * The stored image media type when ready; the declared upload media type otherwise. Value
     * enum: "image/jpeg", "image/png", "image/webp".
     */
    "content_type": "image/jpeg" | "image/png" | "image/webp" | (string & {});
    /** When the upload was created. Format: date-time. */
    "created_at": string;
    /**
     * When this file expires if it stays in its current status. While awaiting_upload, equals
     * upload.expires_at. While ready and unattached, 24 hours after processing or 7 days after its
     * last detachment. Omitted while attached and in every other status. Format: date-time.
     */
    "expires_at"?: string;
    /**
     * A safe failure category, present only when failed. Unknown processing causes use
     * processing_failed. Value enum: "image_unsupported", "image_too_large", "processing_failed".
     */
    "failure_code"?: "image_unsupported" | "image_too_large" | "processing_failed" | (string & {});
    /** The file's stable Flint ID. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$. */
    "file_id": string;
    /** The stored image height in pixels, present only when ready. Format: int32. */
    "height"?: number;
    /**
     * Value enum: "product", "product_variant", "bundle", "payment_link", "subscription_plan",
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
    /** The stored image size when ready; the declared upload size otherwise. Format: int64. */
    "size_bytes": number;
    /** Value enum: "awaiting_upload", "processing", "ready", "failed", "expired". */
    "status": "awaiting_upload" | "processing" | "ready" | "failed" | "expired" | (string & {});
    /**
     * Present only in the create response while awaiting_upload. GET never returns upload
     * credentials. PUT bytes before upload.expires_at, then complete the file. The signed upload
     * target for a file: the URL, HTTP method, headers to send, and when the URL expires.
     */
    "upload"?: FileUpload;
    /**
     * The canonical image URL, present when ready. Attach the file with images[].file_id, or copy
     * this URL into source_url on another resource. Format: uri.
     */
    "url"?: string;
    /** The stored image width in pixels, present only when ready. Format: int32. */
    "width"?: number;
};
/** A response containing `File` data. */
export type FileResponse = {
    /**
     * An image uploaded to Flint. Create the file, PUT its bytes to upload.url with
     * upload.headers, then complete it. Attach a ready file with images[].file_id on a catalog
     * resource or file_id in a branding image field. A ready unattached file expires after 24
     * hours; attachment removes that deadline. Each upload has its own file_id, including uploads
     * of identical bytes.
     */
    "data": File;
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
 * The signed upload target for a file: the URL, HTTP method, headers to send, and when the URL
 * expires.
 */
export type FileUpload = {
    /**
     * When the signed upload URL expires, 15 minutes after creation. Create a new file if it
     * expires. Format: date-time.
     */
    "expires_at": string;
    /** Headers to send verbatim with the upload. * (Value): string. */
    "headers": Record<string, string>;
    /** Value enum: "PUT". */
    "method": "PUT" | (string & {});
    /**
     * A signed upload target. Send the bytes with method and headers verbatim; keep the URL out of
     * logs. Format: uri.
     */
    "url": string;
};
export type FilesCompleteParams = (InputValue<{}>);
export type FilesCreateParams = (InputValue<CreateFileRequestInput>);
export type FilesGetParams = {};
/** A notice that a payment may be fraudulent. */
export type FraudWarning = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Present only when `expand` includes `dispute`; `null` when expanded and there is no related
     * dispute. anyOf[1] (Value): {@link Dispute}. A challenge to a collected payment. anyOf[2]
     * (Value): null.
     */
    "dispute"?: ((Dispute) | (null));
    /** The dispute that opened on this payment after the warning. `null` until one opens. */
    "dispute_id": string | null;
    /**
     * Value enum: "card_never_received", "fraudulent_card_application",
     * "made_with_counterfeit_card", "made_with_lost_card", "made_with_stolen_card",
     * "unauthorized_use_of_card", "other".
     */
    "fraud_type": "card_never_received"
        | "fraudulent_card_application"
        | "made_with_counterfeit_card"
        | "made_with_lost_card"
        | "made_with_stolen_card"
        | "unauthorized_use_of_card"
        | "other"
        | (string & {});
    "fraud_warning_id": string;
    /**
     * true until the payment is refunded in full, a dispute opens on it, or the card network marks
     * the warning resolved; after that it stays false. A partial refund doesn't change it.
     */
    "is_actionable": boolean;
    /**
     * Present only when `expand` includes `payment_intent`; `null` when expanded and there is no
     * related payment intent. anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
     * intent's summary fields, including amount, status, and capture method, returned when the
     * payment intent is expanded. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    "payment_intent_id": string;
    /**
     * Payment details shown on a public fraud warning: amount, buyer email, card brand, and last
     * four digits.
     */
    "payment_summary": FraudWarningPaymentSummary;
    /** RFC3339 timestamp. Format: date-time. */
    "reported_at": string;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
export type FraudWarningCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": FraudWarning;
    };
    "event_type"?: "fraud_warning.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": FraudWarning;
    };
    "event_type"?: "fraud_warning.created";
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
    "event_type": "fraud_warning.created";
});
/**
 * The `fraud_warning.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type FraudWarningCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link FraudWarning}. A notice that a payment may be fraudulent. */
    "data"?: {
        /** A notice that a payment may be fraudulent. */
        "object": FraudWarning;
    };
    /** Value enum: "fraud_warning.created". */
    "event_type"?: "fraud_warning.created";
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
 * The `fraud_warning.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FraudWarningCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link FraudWarning}. A notice that a payment may be fraudulent. */
    "data"?: {
        /** A notice that a payment may be fraudulent. */
        "object": FraudWarning;
    };
    /** Value enum: "fraud_warning.created". */
    "event_type"?: "fraud_warning.created";
});
/** A page of `FraudWarning` objects. */
export type FraudWarningListResponse = {
    /**  [] (Value): {@link FraudWarning}. A notice that a payment may be fraudulent. */
    "data": Array<FraudWarning>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Payment details shown on a public fraud warning: amount, buyer email, card brand, and last four
 * digits.
 */
export type FraudWarningPaymentSummary = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    "email": string;
    "last4": string;
    /**
     * Value enum: "amex", "discover", "diners", "jcb", "mastercard", "unionpay", "visa",
     * "unknown".
     */
    "payment_method_brand": "amex"
        | "discover"
        | "diners"
        | "jcb"
        | "mastercard"
        | "unionpay"
        | "visa"
        | "unknown"
        | (string & {});
};
/** A response containing `FraudWarning` data. */
export type FraudWarningResponse = {
    /** A notice that a payment may be fraudulent. */
    "data": FraudWarning;
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
export type FraudWarningUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": FraudWarning;
    };
    "event_type"?: "fraud_warning.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": FraudWarning;
    };
    "event_type"?: "fraud_warning.updated";
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
    "event_type": "fraud_warning.updated";
});
/**
 * The `fraud_warning.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type FraudWarningUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link FraudWarning}. A notice that a payment may be fraudulent. */
    "data"?: {
        /** A notice that a payment may be fraudulent. */
        "object": FraudWarning;
    };
    /** Value enum: "fraud_warning.updated". */
    "event_type"?: "fraud_warning.updated";
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
 * The `fraud_warning.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FraudWarningUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link FraudWarning}. A notice that a payment may be fraudulent. */
    "data"?: {
        /** A notice that a payment may be fraudulent. */
        "object": FraudWarning;
    };
    /** Value enum: "fraud_warning.updated". */
    "event_type"?: "fraud_warning.updated";
});
export type FraudWarningsGetParams = {
    /**
     * Supported expansions: dispute, payment_intent. Expansion requires risk.read plus the read
     * scope for each expanded resource. Limits: at most 10 unique expand paths per request. Repeat
     * expand, for example expand=dispute&expand=payment_intent, or pass one comma-separated value.
     * [] enum: "dispute", "payment_intent". Value enum: "dispute", "payment_intent". anyOf[1]
     * (Value): Array of string. [] enum: "dispute", "payment_intent". anyOf[1][] (Value): string.
     * Value enum: "dispute", "payment_intent". anyOf[2] (Value): string. Value enum: "dispute",
     * "payment_intent".
     */
    "expand"?: InputValue<("dispute" | "payment_intent") | readonly ("dispute" | "payment_intent")[]>;
};
export type FraudWarningsListParams = {
    /** Filter by whether a proactive fraudulent refund can still prevent a dispute. */
    "is_actionable"?: InputValue<boolean>;
    /** Filter by Flint payment intent ID. Example: "pi_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "payment_intent_id"?: InputValue<string>;
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
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Supported expansions: dispute, payment_intent. Include the requested related resources using
     * scoped batch reads for this page. Each relationship requires its existing target read
     * scopes. Expansion changes the representation without changing pagination tokens. Limits: at
     * most 10 unique expand paths per request. Repeat expand, for example
     * expand=dispute&expand=payment_intent, or pass one comma-separated value. [] enum: "dispute",
     * "payment_intent". Value enum: "dispute", "payment_intent". anyOf[1] (Value): Array of
     * string. [] enum: "dispute", "payment_intent". anyOf[1][] (Value): string. Value enum:
     * "dispute", "payment_intent". anyOf[2] (Value): string. Value enum: "dispute",
     * "payment_intent".
     */
    "expand"?: InputValue<("dispute" | "payment_intent") | readonly ("dispute" | "payment_intent")[]>;
};
/** Work required to deliver an order's items. */
export type Fulfillment = {
    /**
     * Current hold details. Present exactly when status is on_hold. A hold on a fulfillment, with
     * its reason, who placed it, and when it became active.
     */
    "active_hold"?: FulfillmentHold;
    /**
     * Order charges associated with this fulfillment. [] (Value): {@link FulfillmentChargeLink}.
     * Links a fulfillment to an order charge by `order_charge_id`.
     */
    "charges"?: Array<FulfillmentChargeLink>;
    /**
     * When the fulfillment was completed. Mirrors the completion time for its type: delivered_at
     * for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time.
     */
    "completed_at"?: string;
    /** When the fulfillment was created, in RFC3339 format. Format: date-time. */
    "created_at"?: string;
    /** Customer receiving this fulfillment, when one is set. */
    "customer_id"?: string;
    /**
     * Delivery choice group that created this fulfillment. Null for fulfillments created by the
     * merchant or through checkout without a delivery quote.
     */
    "delivery_choice_group_id": string | null;
    /**
     * Execution leg of the selected delivery option that created this fulfillment. Null for
     * fulfillments created by the merchant or through checkout without a delivery quote.
     */
    "delivery_execution_leg_id": string | null;
    /**
     * Delivery method chosen for this fulfillment. Null for fulfillments created by the merchant
     * or through checkout without a delivery quote. Also null for fulfillments created before this
     * field was added.
     */
    "delivery_method_id": string | null;
    /**
     * Delivery selection that created this fulfillment. Null for fulfillments created by the
     * merchant or through checkout without a delivery quote.
     */
    "delivery_selection_id": string | null;
    /** Device associated with the fulfillment, when one is recorded. */
    "device_id"?: string;
    /**
     * Delivery URL and completion time for a digital fulfillment. Details of a digital
     * fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
     */
    "digital_details"?: DigitalFulfillmentDetails;
    /** First time this fulfillment reached dispatched. Format: date-time. */
    "dispatched_at"?: string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /** Stable identifier of the fulfillment. */
    "fulfillment_id": string;
    /**
     * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
     * FulfillmentLineItem}. An order line item and quantity included in a fulfillment, with the
     * modifiers applied to it.
     */
    "line_items": Array<FulfillmentLineItem>;
    /**
     * Courier, delivery window, and handoff details for a local delivery fulfillment. Details of a
     * local delivery fulfillment: courier, timing window, instructions, and tracking. Some fields
     * are omitted for credentials that don't act for the verified customer.
     */
    "local_delivery_details"?: DeliveryFulfillmentDetails;
    /** Merchant location responsible for this fulfillment. */
    "location_id"?: string;
    /**
     * Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Order whose items this fulfillment delivers. */
    "order_id": string;
    /**
     * Human-readable number of the order this fulfillment belongs to. Omitted when the order has
     * no number.
     */
    "order_number"?: string;
    /**
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     */
    "outcome"?: FulfillmentOutcome;
    /**
     * Packages associated with this fulfillment. [] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded.
     */
    "packages"?: Array<ExpandedPackageSummary>;
    /** First time this fulfillment reached packed. Format: date-time. */
    "packed_at"?: string;
    /** First time this fulfillment reached picked. Format: date-time. */
    "picked_at"?: string;
    /**
     * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup details. For
     * a pickup that checkout creates, location_name, address, and instructions name the store the
     * buyer chose and the delivery method's pickup instructions. The note the buyer left for the
     * store is in recipient.instructions.
     */
    "pickup_details"?: PickupFulfillmentDetails;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. The recipient of a fulfillment, with name, email, phone, address, and handling
     * instructions.
     */
    "recipient"?: FulfillmentRecipient;
    /**
     * Derived start of the service schedule or pickup, local delivery, or shipment window. Null
     * when no schedule is booked, including digital fulfillments. Details remain the authoritative
     * schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in
     * the same direction. Format: date-time.
     */
    "scheduled_start_at": string | null;
    /**
     * Schedule and completion details for a service fulfillment. Details of a service fulfillment:
     * the scheduled start and end, timezone, completion time, and notes.
     */
    "service_details"?: ServiceFulfillmentDetails;
    /**
     * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
     * fulfillments with at least one value. Details of a shipment fulfillment: the shipping
     * window, timezone, and when the shipment was handed to the carrier.
     */
    "shipment_details"?: ShipmentFulfillmentDetails;
    /**
     * Shipments associated with this fulfillment. [] (Value): {@link ExpandedShipmentSummary}. A
     * shipment's summary fields, including direction, status, and package count, returned when the
     * shipment is expanded.
     */
    "shipments"?: Array<ExpandedShipmentSummary>;
    /**
     * Current fulfillment lifecycle status. Read supported_actions for available transitions. -
     * `pending`: Work has not started and has not been accepted. Approval may be required before
     * work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. -
     * `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a
     * supported forward action. - `in_progress`: Work has started and is not yet ready or
     * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
     * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was
     * intentionally canceled and will not continue. - `failed`: The fulfillment could not be
     * completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The
     * fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or
     * provider preparation is underway. - `picked`: The assigned items have been picked. -
     * `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its
     * origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome
     * for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
     * "dispatched", "no_show".
     */
    "status": "pending"
        | "accepted"
        | "on_hold"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show"
        | (string & {});
    /**
     * Read-only actions currently supported for this fulfillment. [] enum: "complete", "cancel",
     * "hold", "start", "mark_ready", "fail", "schedule", "accept", "mark_preparing",
     * "mark_picked", "mark_packed", "dispatch", "mark_no_show", "release_hold". [] (Value):
     * string. Value enum: "complete", "cancel", "hold", "start", "mark_ready", "fail", "schedule",
     * "accept", "mark_preparing", "mark_picked", "mark_packed", "dispatch", "mark_no_show",
     * "release_hold".
     */
    "supported_actions": Array<"complete"
        | "cancel"
        | "hold"
        | "start"
        | "mark_ready"
        | "fail"
        | "schedule"
        | "accept"
        | "mark_preparing"
        | "mark_picked"
        | "mark_packed"
        | "dispatch"
        | "mark_no_show"
        | "release_hold"
        | (string & {})>;
    /**
     * When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
     * records the state transition; completed_at records completion evidence supplied for the
     * fulfillment. Format: date-time.
     */
    "terminal_at"?: string;
    /**
     * How the items are delivered: shipment, pickup, local delivery, digital delivery, or service.
     * Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
    /** When the fulfillment was last updated, in RFC3339 format. Format: date-time. */
    "updated_at"?: string;
    /** Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
};
export type FulfillmentCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.canceled";
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
    "event_type": "fulfillment.canceled";
});
/**
 * The `fulfillment.canceled` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type FulfillmentCanceledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Fulfillment}. Work required to deliver an order's items. */
    "data"?: {
        /** Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Value enum: "fulfillment.canceled". */
    "event_type"?: "fulfillment.canceled";
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
 * The `fulfillment.canceled` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FulfillmentCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Fulfillment}. Work required to deliver an order's items. */
    "data"?: {
        /** Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Value enum: "fulfillment.canceled". */
    "event_type"?: "fulfillment.canceled";
});
/** Links a fulfillment to an order charge by `order_charge_id`. */
export type FulfillmentChargeLink = {
    /** Order charge associated with this fulfillment. */
    "order_charge_id": string;
};
