import type {
    SubscriptionBillingScheduleInputExternal,
    SubscriptionAddressVerification,
    SelectedProductOption,
    Subscription
} from './types-44.js';
import type { DeliveryRecipientResource } from './types-14.js';
import type { MoneyValue } from './types-31.js';
import type { Address, BundleComponent } from './types-0.js';
import type {
    OrderDeliveryDestinationAddressRequest,
    OrderDeliveryDestinationAddressRequestInput,
    OrderLineItemModifier
} from './types-32.js';
import type { ResponseMeta } from './types-40.js';
import type { InputValue } from '../runtime.js';
import type { CreateSubscriptionDeliveryMigrationRequestInput, CreateSubscriptionOfferRequestInput } from './types-9.js';
import type { DeliverySelectionRecipientRequest, DeliverySelectionRecipientRequestInput } from './types-15.js';
import type { CategoryReference } from './types-3.js';
import type { Image } from './types-19.js';
import type { UpdateSubscriptionOfferRequestInput } from './types-49.js';
import type { PaymentErrorSummary } from './types-35.js';
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleInputExternalInput}. The `external` variant
 * of `SubscriptionBillingScheduleInput`.
 */
export type SubscriptionBillingScheduleInputExternalInput = {
    /** Shape $ (Value): string.  Value enum: "external". */
    "owner": "external";
};
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleInputFlint}. The `flint` variant of
 * `SubscriptionBillingScheduleInput`.
 */
export type SubscriptionBillingScheduleInputFlint = {
    /** Shape $ (Value): string.  Value enum: "flint". */
    "owner": "flint" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleInputFlintInput}. The `flint` variant of
 * `SubscriptionBillingScheduleInput`.
 */
export type SubscriptionBillingScheduleInputFlintInput = {
    /** Shape $ (Value): string.  Value enum: "flint". */
    "owner": "flint";
};
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleRequest}. Who owns the billing schedule when
 * creating a subscription: Flint or an external system.
 */
export type SubscriptionBillingScheduleRequest = ({
    /** Shape $ (Value): string.  Value enum: "flint", "external". */
    "owner": "flint" | "external" | (string & {});
})
    & ((Exclude<SubscriptionBillingScheduleInputFlint & object, readonly unknown[]>)
    | (Exclude<SubscriptionBillingScheduleInputExternal & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleRequestInput}. Who owns the billing schedule
 * when creating a subscription: Flint or an external system.
 */
export type SubscriptionBillingScheduleRequestInput = ({
    /** Shape $ (Value): string.  Value enum: "flint", "external". */
    "owner": "flint" | "external";
})
    & ((Exclude<SubscriptionBillingScheduleInputFlintInput & object, readonly unknown[]>)
    | (Exclude<SubscriptionBillingScheduleInputExternalInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleUpdateInputExternal}. The `external` variant
 * of `SubscriptionBillingScheduleUpdateInput`.
 */
export type SubscriptionBillingScheduleUpdateInputExternal = {
    /**
     * Shape $ (Value): string or null. Future date at which Flint attempts the next charge. Omit
     * to preserve the date or send null to clear it. Format: date-time. minLength: 1.
     */
    "next_billing_at"?: string | null;
    /** Shape $ (Value): string.  Value enum: "external". */
    "owner": "external" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleUpdateInputExternalInput}. The `external`
 * variant of `SubscriptionBillingScheduleUpdateInput`.
 */
export type SubscriptionBillingScheduleUpdateInputExternalInput = {
    /**
     * Shape $ (Value): string or null. Future date at which Flint attempts the next charge. Omit
     * to preserve the date or send null to clear it. Format: date-time. minLength: 1.
     */
    "next_billing_at"?: string | globalThis.Date | null;
    /** Shape $ (Value): string.  Value enum: "external". */
    "owner": "external";
};
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleUpdateInputFlint}. The `flint` variant of
 * `SubscriptionBillingScheduleUpdateInput`.
 */
export type SubscriptionBillingScheduleUpdateInputFlint = {
    /**
     * Shape $ (Value): integer. UTC day of the month used for monthly and yearly billing.
     * Overrides the day inferred from a moved next_billing_at. Format: int32. minimum: 1. maximum:
     * 31.
     */
    "billing_anchor_day"?: number;
    /**
     * Shape $ (Value): string. Future date at which Flint attempts the next charge. Format:
     * date-time. minLength: 1.
     */
    "next_billing_at": string;
    /** Shape $ (Value): string.  Value enum: "flint". */
    "owner": "flint" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleUpdateInputFlintInput}. The `flint` variant
 * of `SubscriptionBillingScheduleUpdateInput`.
 */
export type SubscriptionBillingScheduleUpdateInputFlintInput = {
    /**
     * Shape $ (Value): integer. UTC day of the month used for monthly and yearly billing.
     * Overrides the day inferred from a moved next_billing_at. Format: int32. minimum: 1. maximum:
     * 31.
     */
    "billing_anchor_day"?: number;
    /**
     * Shape $ (Value): string. Future date at which Flint attempts the next charge. Format:
     * date-time. minLength: 1.
     */
    "next_billing_at": string | globalThis.Date;
    /** Shape $ (Value): string.  Value enum: "flint". */
    "owner": "flint";
};
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleUpdateRequest}. A closed owner-specific
 * billing schedule update.
 */
export type SubscriptionBillingScheduleUpdateRequest = ((SubscriptionBillingScheduleUpdateInputFlint)
    | (SubscriptionBillingScheduleUpdateInputExternal)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link SubscriptionBillingScheduleUpdateRequestInput}. A closed owner-specific
 * billing schedule update.
 */
export type SubscriptionBillingScheduleUpdateRequestInput = ((SubscriptionBillingScheduleUpdateInputFlintInput)
    | (SubscriptionBillingScheduleUpdateInputExternalInput));
/**
 * Shape $ (Value): {@link SubscriptionBillingStartInputImmediate}. The `immediate` variant of
 * `SubscriptionBillingStartInput`.
 */
export type SubscriptionBillingStartInputImmediate = {
    /** Shape $ (Value): string.  Value enum: "immediate". */
    "type": "immediate" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionBillingStartInputImmediateInput}. The `immediate` variant of
 * `SubscriptionBillingStartInput`.
 */
export type SubscriptionBillingStartInputImmediateInput = {
    /** Shape $ (Value): string.  Value enum: "immediate". */
    "type": "immediate";
};
/**
 * Shape $ (Value): {@link SubscriptionBillingStartInputImported}. The `imported` variant of
 * `SubscriptionBillingStartInput`.
 */
export type SubscriptionBillingStartInputImported = {
    /**
     * Shape $ (Value): integer. Number of billing cycles already charged on the previous billing
     * system, including the current imported period. The subscription's completed_cycles starts
     * here, and the next renewal's subscription_cycle is this number plus one. minimum: 0.
     * Default: 0.
     */
    "completed_cycles"?: number;
    /**
     * Shape $ (Value): string. Start of the already-running billing period being imported. Format:
     * date-time. minLength: 1.
     */
    "period_started_at": string;
    /** Shape $ (Value): string.  Value enum: "imported". */
    "type": "imported" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionBillingStartInputImportedInput}. The `imported` variant of
 * `SubscriptionBillingStartInput`.
 */
export type SubscriptionBillingStartInputImportedInput = {
    /**
     * Shape $ (Value): integer. Number of billing cycles already charged on the previous billing
     * system, including the current imported period. The subscription's completed_cycles starts
     * here, and the next renewal's subscription_cycle is this number plus one. minimum: 0.
     * Default: 0.
     */
    "completed_cycles"?: number;
    /**
     * Shape $ (Value): string. Start of the already-running billing period being imported. Format:
     * date-time. minLength: 1.
     */
    "period_started_at": string | globalThis.Date;
    /** Shape $ (Value): string.  Value enum: "imported". */
    "type": "imported";
};
/**
 * Shape $ (Value): {@link SubscriptionBillingStartInputScheduled}. The `scheduled` variant of
 * `SubscriptionBillingStartInput`.
 */
export type SubscriptionBillingStartInputScheduled = {
    /**
     * Shape $ (Value): string. Future instant when the first billing period starts. Format:
     * date-time. minLength: 1.
     */
    "starts_at": string;
    /** Shape $ (Value): string.  Value enum: "scheduled". */
    "type": "scheduled" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionBillingStartInputScheduledInput}. The `scheduled` variant of
 * `SubscriptionBillingStartInput`.
 */
export type SubscriptionBillingStartInputScheduledInput = {
    /**
     * Shape $ (Value): string. Future instant when the first billing period starts. Format:
     * date-time. minLength: 1.
     */
    "starts_at": string | globalThis.Date;
    /** Shape $ (Value): string.  Value enum: "scheduled". */
    "type": "scheduled";
};
/**
 * Shape $ (Value): {@link SubscriptionBillingStartRequest}. How billing begins. Send exactly one
 * closed tagged-union branch.
 */
export type SubscriptionBillingStartRequest = ((SubscriptionBillingStartInputImmediate)
    | (SubscriptionBillingStartInputScheduled)
    | (SubscriptionBillingStartInputImported)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link SubscriptionBillingStartRequestInput}. How billing begins. Send exactly
 * one closed tagged-union branch.
 */
export type SubscriptionBillingStartRequestInput = ((SubscriptionBillingStartInputImmediateInput)
    | (SubscriptionBillingStartInputScheduledInput)
    | (SubscriptionBillingStartInputImportedInput));
/**
 * Shape $ (Value): {@link SubscriptionCancellationDetails}. The cancellation request behind a
 * scheduled or completed cancellation.
 */
export type SubscriptionCancellationDetails = {
    /**
     * Shape $ (Value): string. What the requester wrote. Only merchant credentials read it; buyers
     * never receive it. Omitted when none was given, and cleared when the customer is deleted.
     * maxLength: 500.
     */
    "comment"?: string;
    /**
     * Shape $ (Value): string. The reason the requester chose. Omitted when none was given. Value
     * enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service",
     * "too_complex", "low_quality", "other".
     */
    "reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. When the cancellation was requested. Format: date-time. */
    "requested_at": string;
    /**
     * Shape $ (Value): string. buyer: the buyer, in Flint's buyer account or with a customer
     * session. merchant: a merchant credential, such as an API key or the dashboard. Value enum:
     * "buyer", "merchant".
     */
    "requested_by": "buyer" | "merchant" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionCounts}. Counts of subscriptions by status: active, past
 * due, and paused.
 */
export type SubscriptionCounts = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "active": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "past_due": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "paused": `${bigint}`;
};
/**
 * Shape $ (Value): {@link SubscriptionDelivery}. A subscription's saved delivery preference:
 * method, destination, recipient, shipping cost, and who last changed it.
 */
export type SubscriptionDelivery = {
    /**
     * Shape $ (Value): {@link SubscriptionAddressVerification}. The verification state of a
     * subscription's delivery address: `verified`, `unverified`, `needs_review`, or
     * `unverifiable`.
     */
    "address_verification"?: SubscriptionAddressVerification;
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryMethodSummary}. A short summary of a
     * subscription's delivery method: name, description, type, and whether its price is fixed or
     * quoted.
     */
    "delivery_method"?: SubscriptionDeliveryMethodSummary;
    /** Shape $ (Value): string. */
    "delivery_method_id": string;
    /**
     * Shape $ (Value): integer string. Version of the subscription's saved delivery preference.
     * Use an integer string (decimal digits), not a floating-point number. Format: uint64.
     * minimum: 0.
     */
    "delivery_version": `${bigint}`;
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryDestination}. The delivery address for a
     * subscription's future shipments, with the saved customer address it came from.
     */
    "destination": SubscriptionDeliveryDestination;
    /**
     * Shape $ (Value): {@link DeliveryRecipientResource}. The person receiving a delivery
     * selection, with optional `name`, `email`, and `phone`.
     */
    "recipient"?: DeliveryRecipientResource;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "shipping_money"?: MoneyValue;
    /** Shape $ (Value): string.  Value enum: "shipment", "local_delivery". */
    "type": "shipment" | "local_delivery" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): string. Who last changed the delivery preference. Omitted until the
     * preference changes after creation. Pairs with updated_at. Value enum: "buyer", "merchant",
     * "migration".
     */
    "updated_by"?: "buyer" | "merchant" | "migration" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionDeliveryDestination}. The delivery address for a
 * subscription's future shipments, with the saved customer address it came from.
 */
export type SubscriptionDeliveryDestination = {
    /**
     * Shape $ (Value): {@link Address} or null. Resolved delivery address used by future
     * shipments. Shape $.anyOf[1] (Value): {@link Address}. A postal address, as returned on
     * customers, invoices, tax locations, and fulfillment recipients. Shape $.anyOf[2] (Value):
     * null.
     */
    "address": ((Address) | (null));
    /**
     * Shape $ (Value): string. Display reference to the saved customer address used when this
     * destination was written. Editing that saved address does not change the subscription
     * destination.
     */
    "customer_address_id"?: string;
};
/**
 * Shape $ (Value): {@link SubscriptionDeliveryDestinationInputAddress}. The `address` variant of
 * `SubscriptionDeliveryDestinationInput`.
 */
export type SubscriptionDeliveryDestinationInputAddress = {
    /**
     * Shape $ (Value): {@link OrderDeliveryDestinationAddressRequest}. The delivery address you
     * supply on an order. Postal code and state are required for US addresses.
     */
    "address": OrderDeliveryDestinationAddressRequest;
    /** Shape $ (Value): string.  Value enum: "address". */
    "type": "address" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionDeliveryDestinationInputAddressInput}. The `address` variant
 * of `SubscriptionDeliveryDestinationInput`.
 */
export type SubscriptionDeliveryDestinationInputAddressInput = {
    /**
     * Shape $ (Value): {@link OrderDeliveryDestinationAddressRequestInput}. The delivery address
     * you supply on an order. Postal code and state are required for US addresses.
     */
    "address": OrderDeliveryDestinationAddressRequestInput;
    /** Shape $ (Value): string.  Value enum: "address". */
    "type": "address";
};
/**
 * Shape $ (Value): {@link SubscriptionDeliveryDestinationInputCustomerAddress}. The
 * `customer_address` variant of `SubscriptionDeliveryDestinationInput`.
 */
export type SubscriptionDeliveryDestinationInputCustomerAddress = {
    /** Shape $ (Value): string. minLength: 1. pattern: ^caddr_[0-9A-HJKMNP-TV-Z]{26}$. */
    "customer_address_id": string;
    /** Shape $ (Value): string.  Value enum: "customer_address". */
    "type": "customer_address" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionDeliveryDestinationInputCustomerAddressInput}. The
 * `customer_address` variant of `SubscriptionDeliveryDestinationInput`.
 */
export type SubscriptionDeliveryDestinationInputCustomerAddressInput = {
    /** Shape $ (Value): string. minLength: 1. pattern: ^caddr_[0-9A-HJKMNP-TV-Z]{26}$. */
    "customer_address_id": string;
    /** Shape $ (Value): string.  Value enum: "customer_address". */
    "type": "customer_address";
};
/**
 * Shape $ (Value): {@link SubscriptionDeliveryDestinationRequest}. Where to deliver a
 * subscription: a saved customer address by ID, or a new address.
 */
export type SubscriptionDeliveryDestinationRequest = ((SubscriptionDeliveryDestinationInputCustomerAddress)
    | (SubscriptionDeliveryDestinationInputAddress)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link SubscriptionDeliveryDestinationRequestInput}. Where to deliver a
 * subscription: a saved customer address by ID, or a new address.
 */
export type SubscriptionDeliveryDestinationRequestInput = ((SubscriptionDeliveryDestinationInputCustomerAddressInput)
    | (SubscriptionDeliveryDestinationInputAddressInput));
/**
 * Shape $ (Value): {@link SubscriptionDeliveryHold}. A hold on a subscription's deliveries because
 * its delivery method or destination no longer works, and who can fix it.
 */
export type SubscriptionDeliveryHold = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "ends_at": string;
    /** Shape $ (Value): string.  Value enum: "buyer", "merchant". */
    "fixable_by": "buyer" | "merchant" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "method_unavailable", "destination_not_served",
     * "rate_unavailable".
     */
    "reason": "method_unavailable" | "destination_not_served" | "rate_unavailable" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "started_at": string;
};
/**
 * Shape $ (Value): {@link SubscriptionDeliveryMethodCounts}. Subscription counts by status for one
 * delivery method.
 */
export type SubscriptionDeliveryMethodCounts = {
    /** Shape $ (Value): string. */
    "delivery_method_id": string;
    /**
     * Shape $ (Value): {@link SubscriptionCounts}. Counts of subscriptions by status: active, past
     * due, and paused.
     */
    "subscription_counts": SubscriptionCounts;
};
/**
 * Shape $ (Value): {@link SubscriptionDeliveryMethodImpact}. How a delivery method change affects
 * subscriptions: current counts and how many would no longer be eligible.
 */
export type SubscriptionDeliveryMethodImpact = {
    /** Shape $ (Value): string. */
    "delivery_method_id": string;
    /** Shape $ (Value): string.  Value enum: "delivery_method_update". */
    "mode": "delivery_method_update" | (string & {});
    /**
     * Shape $ (Value): {@link SubscriptionCounts}. Counts of subscriptions by status: active, past
     * due, and paused.
     */
    "no_longer_eligible_counts": SubscriptionCounts;
    /**
     * Shape $ (Value): {@link SubscriptionCounts}. Counts of subscriptions by status: active, past
     * due, and paused.
     */
    "subscription_counts": SubscriptionCounts;
};
/**
 * Shape $ (Value): {@link SubscriptionDeliveryMethodSummary}. A short summary of a subscription's
 * delivery method: name, description, type, and whether its price is fixed or quoted.
 */
export type SubscriptionDeliveryMethodSummary = {
    /** Shape $ (Value): string. */
    "description"?: string;
    /** Shape $ (Value): string. */
    "name"?: string;
    /** Shape $ (Value): string.  Value enum: "fixed", "quoted". */
    "price_type"?: "fixed" | "quoted" | (string & {});
    /** Shape $ (Value): string.  Value enum: "shipment", "local_delivery". */
    "type"?: "shipment" | "local_delivery" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionDeliveryMigration}. A move of subscribers from one delivery
 * method to another.
 */
export type SubscriptionDeliveryMigration = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "failed_count": `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link SubscriptionDeliveryMigrationFailureReasonCount}. Shape $[]
     * (Value): {@link SubscriptionDeliveryMigrationFailureReasonCount}. The number of
     * subscriptions that failed a delivery method migration for one reason.
     */
    "failure_reason_counts": Array<SubscriptionDeliveryMigrationFailureReasonCount>;
    /** Shape $ (Value): string. */
    "from_delivery_method_id": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "moved_count": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "pending_count": `${bigint}`;
    /** Shape $ (Value): string.  Value enum: "pending", "running", "completed". */
    "status": "pending" | "running" | "completed" | (string & {});
    /** Shape $ (Value): string. */
    "subscription_delivery_migration_id": string;
    /** Shape $ (Value): string. */
    "subscription_plan_id"?: string;
    /** Shape $ (Value): string. */
    "to_delivery_method_id": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "total_count": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
/**
 * Shape $ (Value): {@link SubscriptionDeliveryMigrationFailure}. A subscription that could not be
 * moved to a new delivery method, with the reason.
 */
export type SubscriptionDeliveryMigrationFailure = {
    /** Shape $ (Value): string. */
    "message": string;
    /**
     * Shape $ (Value): string. Value enum: "method_not_offered", "destination_not_served",
     * "rate_unavailable", "method_unavailable", "no_longer_applicable", "not_movable".
     */
    "reason": "method_not_offered"
        | "destination_not_served"
        | "rate_unavailable"
        | "method_unavailable"
        | "no_longer_applicable"
        | "not_movable"
        | (string & {});
    /** Shape $ (Value): string. */
    "subscription_id": string;
};
/**
 * Shape $ (Value): {@link SubscriptionDeliveryMigrationFailureListResponse}. A page of
 * `SubscriptionDeliveryMigrationFailure` objects.
 */
export type SubscriptionDeliveryMigrationFailureListResponse = {
    /**
     * Shape $ (Value): Array of {@link SubscriptionDeliveryMigrationFailure}. Shape $[] (Value):
     * {@link SubscriptionDeliveryMigrationFailure}. A subscription that could not be moved to a
     * new delivery method, with the reason.
     */
    "data": Array<SubscriptionDeliveryMigrationFailure>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link SubscriptionDeliveryMigrationFailureReasonCount}. The number of
 * subscriptions that failed a delivery method migration for one reason.
 */
export type SubscriptionDeliveryMigrationFailureReasonCount = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "count": `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "method_not_offered", "destination_not_served",
     * "rate_unavailable", "method_unavailable", "no_longer_applicable", "not_movable".
     */
    "reason": "method_not_offered"
        | "destination_not_served"
        | "rate_unavailable"
        | "method_unavailable"
        | "no_longer_applicable"
        | "not_movable"
        | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionDeliveryMigrationListResponse}. A page of
 * `SubscriptionDeliveryMigration` objects.
 */
export type SubscriptionDeliveryMigrationListResponse = {
    /**
     * Shape $ (Value): Array of {@link SubscriptionDeliveryMigration}. Shape $[] (Value): {@link
     * SubscriptionDeliveryMigration}. A move of subscribers from one delivery method to another.
     */
    "data": Array<SubscriptionDeliveryMigration>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link SubscriptionDeliveryMigrationResponse}. A response containing
 * `SubscriptionDeliveryMigration` data.
 */
export type SubscriptionDeliveryMigrationResponse = {
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryMigration}. A move of subscribers from one
     * delivery method to another.
     */
    "data": SubscriptionDeliveryMigration;
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
export type SubscriptionDeliveryMigrationsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateSubscriptionDeliveryMigrationRequestInput}. The request body
     * for: Move subscribers to another delivery method.
     */
    "body": InputValue<CreateSubscriptionDeliveryMigrationRequestInput>;
};
export type SubscriptionDeliveryMigrationsGetInput = {
    /** Shape $ (Value): string. */
    "subscription_delivery_migration_id": InputValue<string>;
};
export type SubscriptionDeliveryMigrationsListFailuresInput = {
    /** Shape $ (Value): string. */
    "subscription_delivery_migration_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "method_not_offered",
     * "destination_not_served", "rate_unavailable", "method_unavailable", "no_longer_applicable",
     * "not_movable". Shape $[] (Value): string. Value enum: "method_not_offered",
     * "destination_not_served", "rate_unavailable", "method_unavailable", "no_longer_applicable",
     * "not_movable".
     */
    "reason"?: InputValue<Array<"method_not_offered"
        | "destination_not_served"
        | "rate_unavailable"
        | "method_unavailable"
        | "no_longer_applicable"
        | "not_movable">>;
};
export type SubscriptionDeliveryMigrationsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "from_delivery_method_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "running", "completed".
     * Shape $[] (Value): string. Value enum: "pending", "running", "completed".
     */
    "status"?: InputValue<Array<"pending" | "running" | "completed">>;
};
/**
 * Shape $ (Value): {@link SubscriptionDeliveryOption}. A delivery method offered for a
 * subscription, with its availability, price, and the reason it is unavailable if it is.
 */
export type SubscriptionDeliveryOption = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string.  Value enum: "available", "unavailable", "cannot_calculate". */
    "availability": "available" | "unavailable" | "cannot_calculate" | (string & {});
    /**
     * Shape $ (Value): boolean. True when this is the subscription's saved preferred delivery
     * method, including when unavailable.
     */
    "current": boolean;
    /** Shape $ (Value): string. */
    "delivery_method_id": string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): string. Reason the method cannot serve this subscription destination.
     * Values can expand as delivery capabilities change. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "callback_transport_failure", "callback_circuit_open",
     * "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure",
     * "option_lifetime_too_short", "geography_failure", "routing_failure",
     * "invalid_configuration", "invalid_buyer_input", "address_verification_failed",
     * "address_could_not_be_verified".
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
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string.  Value enum: "fixed", "quoted". */
    "price_type": "fixed" | "quoted" | (string & {});
    /**
     * Shape $ (Value): boolean. True when this method is offered, renewable, and currently serves
     * the destination.
     */
    "selectable": boolean;
    /** Shape $ (Value): string.  Value enum: "shipment", "local_delivery". */
    "type": "shipment" | "local_delivery" | (string & {});
    /**
     * Shape $ (Value): string. Reason the method cannot serve this subscription destination.
     * Values can expand as delivery capabilities change. Value enum: "destination_not_served",
     * "pickup_unavailable", "no_window_available", "eligibility_no_match",
     * "method_type_not_allowed", "pricing_unavailable", "inventory_unavailable".
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
/**
 * Shape $ (Value): {@link SubscriptionDeliveryRequest}. The delivery preference to set on a
 * subscription: delivery method, type, destination, and recipient.
 */
export type SubscriptionDeliveryRequest = {
    /** Shape $ (Value): string. minLength: 1. pattern: ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. */
    "delivery_method_id": string;
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryDestinationRequest}. Where to deliver a
     * subscription: a saved customer address by ID, or a new address.
     */
    "destination": SubscriptionDeliveryDestinationRequest;
    /**
     * Shape $ (Value): {@link DeliverySelectionRecipientRequest}. Recipient details you supply
     * with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`.
     */
    "recipient"?: DeliverySelectionRecipientRequest;
    /** Shape $ (Value): string.  Value enum: "shipment", "local_delivery". */
    "type": "shipment" | "local_delivery" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionDeliveryRequestInput}. The delivery preference to set on a
 * subscription: delivery method, type, destination, and recipient.
 */
export type SubscriptionDeliveryRequestInput = {
    /** Shape $ (Value): string. minLength: 1. pattern: ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. */
    "delivery_method_id": string;
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryDestinationRequestInput}. Where to deliver a
     * subscription: a saved customer address by ID, or a new address.
     */
    "destination": SubscriptionDeliveryDestinationRequestInput;
    /**
     * Shape $ (Value): {@link DeliverySelectionRecipientRequestInput}. Recipient details you
     * supply with a delivery selection or subscription delivery: optional `name`, `email`, and
     * `phone`.
     */
    "recipient"?: DeliverySelectionRecipientRequestInput;
    /** Shape $ (Value): string.  Value enum: "shipment", "local_delivery". */
    "type": "shipment" | "local_delivery";
};
/**
 * Shape $ (Value): {@link SubscriptionIntervalOption}. A billing interval, such as every 2 months,
 * offered by a subscription plan.
 */
export type SubscriptionIntervalOption = {
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
};
/**
 * Shape $ (Value): {@link SubscriptionIntervalOptionInput}. A billing interval, such as every 2
 * months, offered by a subscription plan.
 */
export type SubscriptionIntervalOptionInput = {
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly";
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
};
/**
 * Shape $ (Value): {@link SubscriptionInventoryWait}. Shows that a subscription renewal is waiting
 * for inventory, with the order and invoice involved and when the wait started.
 */
export type SubscriptionInventoryWait = {
    /** Shape $ (Value): string. */
    "invoice_id": string;
    /** Shape $ (Value): string. */
    "order_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "started_at": string;
};
/**
 * Shape $ (Value): {@link SubscriptionLineItem}. An item included in a customer's recurring
 * purchase.
 */
export type SubscriptionLineItem = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "base_subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link BundleComponent}. Shape $[] (Value): {@link
     * BundleComponent}. An item included in a bundle.
     */
    "bundle_components"?: Array<BundleComponent>;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): Array of {@link CategoryReference}. Shape $[] (Value): {@link
     * CategoryReference}. A reference to a product category by ID, handle, and name.
     */
    "categories"?: Array<CategoryReference>;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "modifier_total_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifier}. Shape $[] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item, with its quantity, price
     * change, total, and display flags.
     */
    "modifiers"?: Array<OrderLineItemModifier>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "quantity": number;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /** Shape $ (Value): string.  Value enum: "variant", "bundle". */
    "source_type"?: "variant" | "bundle" | (string & {});
    /** Shape $ (Value): string. */
    "subscription_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "subscription_offer_id"?: string;
    /** Shape $ (Value): string. */
    "subscription_plan_line_item_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/** Shape $ (Value): {@link SubscriptionListResponse}. A page of `Subscription` objects. */
export type SubscriptionListResponse = {
    /**
     * Shape $ (Value): Array of {@link Subscription}. Shape $[] (Value): {@link Subscription}. A
     * customer's recurring purchase.
     */
    "data": Array<Subscription>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link SubscriptionOffer}. Recurring terms offered on catalog products or
 * variants. Updates affect new signups; existing subscriptions keep their paid signup terms.
 */
export type SubscriptionOffer = {
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOption}. minItems: 1. maxItems: 12.
     * uniqueItems: true. Shape $[] (Value): {@link SubscriptionIntervalOption}. A billing
     * interval, such as every 2 months, offered by a subscription plan.
     */
    "billing_interval_options": Array<SubscriptionIntervalOption>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata": Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. Catalog targets for new signups. At least one product or
     * variant is required. maxItems: 100. uniqueItems: true. Shape $[] (Value): string.
     */
    "product_ids": Array<string>;
    /**
     * Shape $ (Value): string or null. An active promotion with forever recurrence. On PATCH, null
     * removes the discount for new signups; omission keeps it.
     */
    "promotion_id": string | null;
    /** Shape $ (Value): string.  Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): Array of string. Delivery methods offered at signup. An empty array uses
     * the store's checkout defaults. Existing subscriptions keep their selected method. maxItems:
     * 25. uniqueItems: true. Shape $[] (Value): string.
     */
    "subscription_delivery_method_ids": Array<string>;
    /** Shape $ (Value): string. */
    "subscription_offer_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): Array of string. Catalog targets for new signups. At least one product or
     * variant is required. maxItems: 100. uniqueItems: true. Shape $[] (Value): string.
     */
    "variant_ids": Array<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 0.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link SubscriptionOfferLineItemRequest}. A subscription offer and variant to
 * include in subscription offer terms.
 */
export type SubscriptionOfferLineItemRequest = {
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /** Shape $ (Value): string. minLength: 1. */
    "subscription_offer_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
};
/**
 * Shape $ (Value): {@link SubscriptionOfferLineItemRequestInput}. A subscription offer and variant
 * to include in subscription offer terms.
 */
export type SubscriptionOfferLineItemRequestInput = SubscriptionOfferLineItemRequest;
/**
 * Shape $ (Value): {@link SubscriptionOfferListResponse}. A page of `SubscriptionOffer` objects.
 */
export type SubscriptionOfferListResponse = {
    /**
     * Shape $ (Value): Array of {@link SubscriptionOffer}. Shape $[] (Value): {@link
     * SubscriptionOffer}. Recurring terms offered on catalog products or variants. Updates affect
     * new signups; existing subscriptions keep their paid signup terms.
     */
    "data": Array<SubscriptionOffer>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link SubscriptionOfferResponse}. A response containing `SubscriptionOffer`
 * data.
 */
export type SubscriptionOfferResponse = {
    /**
     * Shape $ (Value): {@link SubscriptionOffer}. Recurring terms offered on catalog products or
     * variants. Updates affect new signups; existing subscriptions keep their paid signup terms.
     */
    "data": SubscriptionOffer;
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
 * Shape $ (Value): {@link SubscriptionOfferTermsRequest}. The `subscription_offer` variant of
 * `SubscriptionTermsInput`.
 */
export type SubscriptionOfferTermsRequest = {
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
    /**
     * Shape $ (Value): Array of {@link SubscriptionOfferLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link SubscriptionOfferLineItemRequest}. A subscription offer and variant to
     * include in subscription offer terms.
     */
    "line_items": Array<SubscriptionOfferLineItemRequest>;
    /** Shape $ (Value): string.  Value enum: "subscription_offer". */
    "type": "subscription_offer" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionOfferTermsRequestInput}. The `subscription_offer` variant of
 * `SubscriptionTermsInput`.
 */
export type SubscriptionOfferTermsRequestInput = {
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly";
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
    /**
     * Shape $ (Value): Array of {@link SubscriptionOfferLineItemRequestInput}. minItems: 1. Shape
     * $[] (Value): {@link SubscriptionOfferLineItemRequestInput}. A subscription offer and variant
     * to include in subscription offer terms.
     */
    "line_items": Array<SubscriptionOfferLineItemRequestInput>;
    /** Shape $ (Value): string.  Value enum: "subscription_offer". */
    "type": "subscription_offer";
};
export type SubscriptionOffersCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateSubscriptionOfferRequestInput}. The request body for: Create
     * subscription offer.
     */
    "body": InputValue<CreateSubscriptionOfferRequestInput>;
};
export type SubscriptionOffersGetInput = {
    /** Shape $ (Value): string. */
    "subscription_offer_id": InputValue<string>;
};
export type SubscriptionOffersListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /** Shape $ (Value): string. */
    "product_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "variant_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at",
     * "name".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type SubscriptionOffersRemoveInput = {
    /** Shape $ (Value): string. */
    "subscription_offer_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type SubscriptionOffersUpdateInput = {
    /** Shape $ (Value): string. */
    "subscription_offer_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateSubscriptionOfferRequestInput}. The request body for: Update
     * subscription offer. minProperties: 1.
     */
    "body": InputValue<UpdateSubscriptionOfferRequestInput>;
};
/**
 * Shape $ (Value): {@link SubscriptionPaymentRetry}. An attempt to collect a subscription's
 * overdue payment.
 */
export type SubscriptionPaymentRetry = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "idempotency_key": string;
    /**
     * Shape $ (Value): {@link PaymentErrorSummary}. A summary of why a payment attempt failed,
     * with a normalized error code, a message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /** Shape $ (Value): string. */
    "order_id"?: string;
    /** Shape $ (Value): string. */
    "order_payment_attempt_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "started_at"?: string;
    /** Shape $ (Value): string.  Value enum: "pending", "processing", "succeeded", "failed". */
    "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
    /** Shape $ (Value): string. */
    "subscription_id": string;
    /** Shape $ (Value): string. */
    "subscription_payment_retry_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
