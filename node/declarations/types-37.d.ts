import type { MoneyMovementBlockedReason, MoneyValue, NextAction, ModifierSet, MoneyValueInput } from './types-31.js';
import type { InputValue } from '../runtime.js';
import type { ResponseMeta } from './types-40.js';
import type {
    UpdatePayoutSettingsRequestInput,
    UpdatePayoutDestinationRequestInput,
    UpdateProductRequestInput,
    UpdateProductVariantRequestInput
} from './types-48.js';
import type { CancelPayoutRequestInput, CategoryReference } from './types-3.js';
import type { CreatePayoutRequestInput, CreateProductRequestInput } from './types-8.js';
import type { PaymentClientAction } from './types-35.js';
import type { Address } from './types-0.js';
import type {
    ReturnProcessDecision,
    ReturnProcessDispositionRequest,
    ReturnProcessInspectionRequest,
    ReturnProcessResolutionRequest,
    ReturnProcessDecisionInput,
    ReturnProcessDispositionRequestInput,
    ReturnProcessInspectionRequestInput,
    ReturnProcessResolutionRequestInput,
    ReturnProcessReceiptRequest,
    ReturnProcessReceiptRequestInput,
    ReturnProcessResult
} from './types-41.js';
import type {
    ImageAttachment,
    GiftCardProductConfiguration,
    ImageRequest,
    GiftCardProductConfigurationInput,
    ImageRequestInput
} from './types-19.js';
import type { Dimensions, DimensionsInput } from './types-16.js';
import type { SelectedProductOption } from './types-43.js';
import type { Weight, WeightInput } from './types-61.js';
import type { InventoryItemCreateRequest, InventoryItemCreateRequestInput } from './types-24.js';
import type {
    PromotionCode,
    PromotionCodesSummary,
    PromotionCombinesWith,
    PromotionExclusivity,
    PromotionRuleGroup,
    PromotionSchedule,
    PromotionRecurrence,
    PromotionRuleGroupRequest,
    PromotionRecurrenceInput,
    PromotionRuleGroupRequestInput,
    PromotionPercentOffMethod,
    PromotionPercentOffMethodRequest,
    PromotionBuyXGetYMethodRequestInput,
    PromotionPercentOffMethodRequestInput
} from './types-38.js';
/** Shape $ (Value): {@link PayoutSettings}. The merchant's payout schedule and preferences. */
export type PayoutSettings = {
    /**
     * Shape $ (Value): Array of {@link MoneyMovementBlockedReason}. Shape $[] (Value): {@link
     * MoneyMovementBlockedReason}. Why a money movement action is blocked, with an error code, a
     * message, next steps, and who can resolve it.
     */
    "blocked_reasons": Array<MoneyMovementBlockedReason>;
    /**
     * Shape $ (Value): string or null. When Flint stored the payout settings record, as an RFC
     * 3339 UTC instant at second precision. Null when no stored settings record exists. Format:
     * date-time.
     */
    "created_at": string | null;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "default_payout_destinations"?: Record<string, string>;
    /** Shape $ (Value): integer. Format: int32. */
    "delay_days": number;
    /** Shape $ (Value): integer. Format: int32. */
    "delay_days_override"?: number;
    /**
     * Shape $ (Value): string. Payout schedule interval. Unmapped intervals are returned as other.
     * Value enum: "manual", "daily", "weekly", "monthly", "other".
     */
    "interval": "manual" | "daily" | "weekly" | "monthly" | "other" | (string & {});
    /** Shape $ (Value): string. */
    "merchant_id": string;
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "minimum_balance_by_currency"?: Record<string, MoneyValue>;
    /** Shape $ (Value): Array of integer. Shape $[] (Value): integer. Format: int32. */
    "monthly_payout_days": Array<number>;
    /**
     * Shape $ (Value): Array of {@link NextAction}. Shape $[] (Value): {@link NextAction}. A
     * suggested next step for resolving an error, warning, or blocked state, such as the API
     * operation to call or the scope it needs.
     */
    "next_actions": Array<NextAction>;
    /** Shape $ (Value): string. */
    "payout_settings_id": string;
    /** Shape $ (Value): string. */
    "statement_descriptor"?: string;
    /** Shape $ (Value): string.  Value enum: "enabled", "disabled", "blocked", "pending". */
    "status": "enabled" | "disabled" | "blocked" | "pending" | (string & {});
    /**
     * Shape $ (Value): string or null. When the stored payout settings record was last updated, as
     * an RFC 3339 UTC instant at second precision. Without a stored record, this is the provider's
     * update time when supplied, otherwise null. Format: date-time.
     */
    "updated_at": string | null;
    /**
     * Shape $ (Value): Array of string. Days of the week on which weekly payouts are sent. Allowed
     * values are monday, tuesday, wednesday, thursday, friday, saturday, and sunday. [] enum:
     * "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday". Shape $[]
     * (Value): string. Value enum: "monday", "tuesday", "wednesday", "thursday", "friday",
     * "saturday", "sunday".
     */
    "weekly_payout_days": Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | (string & {})>;
};
export type PayoutSettingsDeletePayoutDestinationInput = {
    /** Shape $ (Value): string. */
    "payout_destination_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type PayoutSettingsGetInput = {};
export type PayoutSettingsGetPayoutDestinationInput = {
    /** Shape $ (Value): string. */
    "payout_destination_id": InputValue<string>;
};
export type PayoutSettingsListPayoutDestinationsInput = {
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "bank_account", "debit_card". Shape
     * $[] (Value): string. Value enum: "bank_account", "debit_card".
     */
    "type"?: InputValue<Array<"bank_account" | "debit_card">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "active",
     * "verification_required", "disabled", "archived", "failed". Shape $[] (Value): string. Value
     * enum: "pending", "active", "verification_required", "disabled", "archived", "failed".
     */
    "status"?: InputValue<Array<"pending" | "active" | "verification_required" | "disabled" | "archived" | "failed">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "standard". Shape $[] (Value):
     * string. Value enum: "standard".
     */
    "available_payout_method"?: InputValue<Array<"standard">>;
    /** Shape $ (Value): boolean. */
    "default_for_currency"?: InputValue<boolean>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
/** Shape $ (Value): {@link PayoutSettingsResponse}. A response containing `PayoutSettings` data. */
export type PayoutSettingsResponse = {
    /** Shape $ (Value): {@link PayoutSettings}. The merchant's payout schedule and preferences. */
    "data": PayoutSettings;
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
export type PayoutSettingsUpdateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdatePayoutSettingsRequestInput}. The request body for: Update
     * payout settings.
     */
    "body": InputValue<UpdatePayoutSettingsRequestInput>;
};
export type PayoutSettingsUpdatePayoutDestinationInput = {
    /** Shape $ (Value): string. */
    "payout_destination_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdatePayoutDestinationRequestInput}. The request body for: Update
     * payout destination metadata.
     */
    "body": InputValue<UpdatePayoutDestinationRequestInput>;
};
/**
 * Shape $ (Value): {@link PayoutTraceID}. A payout's bank trace ID, with whether it is pending,
 * available, or unsupported.
 */
export type PayoutTraceID = {
    /**
     * Shape $ (Value): string. Whether a bank trace ID is available. Unmapped trace states are
     * returned as unsupported. Value enum: "pending", "available", "unsupported".
     */
    "status": "pending" | "available" | "unsupported" | (string & {});
    /** Shape $ (Value): string. */
    "value"?: string;
};
export type PayoutsCancelInput = {
    /** Shape $ (Value): string. */
    "payout_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CancelPayoutRequestInput}. The request body for: Cancel a payout. */
    "body"?: InputValue<CancelPayoutRequestInput>;
};
export type PayoutsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CreatePayoutRequestInput}. The request body for: Create a payout. */
    "body": InputValue<CreatePayoutRequestInput>;
};
export type PayoutsGetInput = {
    /** Shape $ (Value): string. */
    "payout_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "original_payout", "payout_destination",
     * "reversed_by_payout". Shape $[] (Value): string. Value enum: "original_payout",
     * "payout_destination", "reversed_by_payout".
     */
    "expand"?: InputValue<Array<"original_payout" | "payout_destination" | "reversed_by_payout">>;
};
export type PayoutsListInput = {
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "original_payout", "payout_destination",
     * "reversed_by_payout". Shape $[] (Value): string. Value enum: "original_payout",
     * "payout_destination", "reversed_by_payout".
     */
    "expand"?: InputValue<Array<"original_payout" | "payout_destination" | "reversed_by_payout">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "standard". Shape $[] (Value):
     * string. Value enum: "standard".
     */
    "method"?: InputValue<Array<"standard">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "card", "bank_account". Shape $[]
     * (Value): string. Value enum: "card", "bank_account".
     */
    "balance_source_type"?: InputValue<Array<"card" | "bank_account">>;
    /** Shape $ (Value): string. */
    "payout_destination_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "in_transit", "paid",
     * "failed", "canceled". Shape $[] (Value): string. Value enum: "pending", "in_transit",
     * "paid", "failed", "canceled".
     */
    "status"?: InputValue<Array<"pending" | "in_transit" | "paid" | "failed" | "canceled">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date. */
    "arrival_date_from"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date. */
    "arrival_date_to"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
/**
 * Shape $ (Value): {@link PendingPaymentAction}. Client-side action required before continuing a
 * payment. Resume an order through PayOrder with order_payment_attempt_id, or continue a
 * standalone PaymentIntent through its confirm endpoint without a replacement credential.
 */
export type PendingPaymentAction = {
    /**
     * Shape $ (Value): string. Product-level action type. payment_authentication applies to a
     * payment leg; payment_method_authentication applies to saving a future-billing payment
     * method. Value enum: "payment_authentication", "payment_method_authentication".
     */
    "action_type": "payment_authentication" | "payment_method_authentication" | (string & {});
    /**
     * Shape $ (Value): {@link PaymentClientAction}. Direct browser authority required to finish
     * this action before continuing through Flint. Unlike collection guidance, this payload
     * includes a client secret. Typed provider-specific browser action payload. Execute the
     * selected provider action before continuing the owning payment through Flint.
     */
    "client_action": PaymentClientAction;
    /**
     * Shape $ (Value): string. Stable Flint action ID. Use this to deduplicate a repeated action
     * projection while resuming an attempt.
     */
    "pending_action_id": string;
    /**
     * Shape $ (Value): {@link PendingPaymentActionSubject}. The attempt subject that requires
     * browser action. Exactly one of payment_intent or setup_payment_source is present. Typed
     * subject for a pending order payment action. Exactly one subject is present.
     */
    "subject": PendingPaymentActionSubject;
};
/**
 * Shape $ (Value): {@link PendingPaymentActionPaymentIntentSubject}. The payment intent that needs
 * buyer authentication in a pending payment action.
 */
export type PendingPaymentActionPaymentIntentSubject = {
    /** Shape $ (Value): string. */
    "payment_intent_id": string;
};
/**
 * Shape $ (Value): {@link PendingPaymentActionSetupPaymentSourceSubject}. The payment method setup
 * that needs buyer authentication in a pending payment action.
 */
export type PendingPaymentActionSetupPaymentSourceSubject = {
    /** Shape $ (Value): string. */
    "payment_method_id": string;
};
/**
 * Shape $ (Value): {@link PendingPaymentActionSubject}. Typed subject for a pending order payment
 * action. Exactly one subject is present.
 */
export type PendingPaymentActionSubject = {
    /**
     * Shape $ (Value): {@link PendingPaymentActionPaymentIntentSubject}. PaymentIntent that
     * requires buyer authentication. It can be a standalone intent or an order-owned payment leg.
     * The payment intent that needs buyer authentication in a pending payment action.
     */
    "payment_intent"?: PendingPaymentActionPaymentIntentSubject;
    /**
     * Shape $ (Value): {@link PendingPaymentActionSetupPaymentSourceSubject}. Future-billing
     * payment method setup that requires buyer authentication. The payment method setup that needs
     * buyer authentication in a pending payment action.
     */
    "setup_payment_source"?: PendingPaymentActionSetupPaymentSourceSubject;
};
/**
 * Shape $ (Value): {@link PickupFulfillmentDetails}. Pickup details. For a pickup that checkout
 * creates, location_name, address, and instructions name the store the buyer chose and the
 * delivery method's pickup instructions. The note the buyer left for the store is in
 * recipient.instructions.
 */
export type PickupFulfillmentDetails = {
    /**
     * Shape $ (Value): {@link Address}. Address where the buyer collects the order. A postal
     * address, as returned on customers, invoices, tax locations, and fulfillment recipients.
     */
    "address"?: Address;
    /** Shape $ (Value): string. Instructions specific to curbside handoff. maxLength: 2048. */
    "curbside_instructions"?: string;
    /**
     * Shape $ (Value): string. Buyer-reported arrival time for curbside or counter pickup. Format:
     * date-time.
     */
    "customer_arrived_at"?: string;
    /**
     * Shape $ (Value): string. Deadline after which an uncollected pickup should enter merchant
     * review. Format: date-time.
     */
    "expires_at"?: string;
    /**
     * Shape $ (Value): string. Pickup instructions for the buyer, such as where to go on arrival.
     */
    "instructions"?: string;
    /** Shape $ (Value): string. Name of the store or place where the buyer collects the order. */
    "location_name"?: string;
    /**
     * Shape $ (Value): string. When the recipient collected the items, in RFC3339 format. Format:
     * date-time.
     */
    "picked_up_at"?: string;
    /**
     * Shape $ (Value): string. How the buyer collects the items, such as in store or curbside.
     * Value enum: "in_store", "curbside", "locker", "other".
     */
    "pickup_mode"?: "in_store" | "curbside" | "locker" | "other" | (string & {});
    /**
     * Shape $ (Value): integer string. Width of the promised pickup window, from 0 to 86400
     * seconds. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "pickup_window_duration_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Expected preparation time for restaurant and made-to-order
     * pickup, from 0 to 86400 seconds. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): string. When the items became ready for pickup, in RFC3339 format. Format:
     * date-time.
     */
    "ready_at"?: string;
    /** Shape $ (Value): string. Timezone used to display the pickup window. */
    "timezone"?: string;
    /**
     * Shape $ (Value): string. Buyer vehicle description used for curbside handoff. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified. maxLength:
     * 500.
     */
    "vehicle_description"?: string;
    /**
     * Shape $ (Value): string. End of the promised pickup window, in RFC3339 format. Format:
     * date-time.
     */
    "window_end_at"?: string;
    /**
     * Shape $ (Value): string. Start of the promised pickup window, in RFC3339 format. Format:
     * date-time.
     */
    "window_start_at"?: string;
};
/**
 * Shape $ (Value): {@link PostalAddressInput}. A postal address for a customer, with line 1,
 * optional line 2, city, state, postal code, and country.
 */
export type PostalAddressInput = {
    /**
     * Shape $ (Value): string. Limited to 255 characters (Unicode code points) on input, counted
     * before surrounding whitespace is trimmed. minLength: 1. maxLength: 255.
     */
    "city": string;
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. Surrounding whitespace is trimmed
     * and letters are converted to uppercase before validation. The normalized code has 2 ASCII
     * characters; no length limit applies before trimming. minLength: 2. Example: "US".
     */
    "country": string;
    /**
     * Shape $ (Value): string. Limited to 255 characters (Unicode code points) on input, counted
     * before surrounding whitespace is trimmed. minLength: 1. maxLength: 255.
     */
    "line1": string;
    /**
     * Shape $ (Value): string. Limited to 255 characters (Unicode code points) on input, counted
     * before surrounding whitespace is trimmed. minLength: 1. maxLength: 255.
     */
    "line2"?: string;
    /**
     * Shape $ (Value): string. Limited to 32 characters (Unicode code points) on input, counted
     * before surrounding whitespace is trimmed. minLength: 1. maxLength: 32.
     */
    "postal_code": string;
    /**
     * Shape $ (Value): string. Limited to 255 characters (Unicode code points) on input, counted
     * before surrounding whitespace is trimmed. maxLength: 255.
     */
    "state": string;
};
/**
 * Shape $ (Value): {@link PricingAmounts}. The money totals for an order or invoice: subtotal,
 * discounts, charges, tax, requested tip, and total.
 */
export type PricingAmounts = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Tax added on top of prices, included in total_money.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "additive_tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Total of the order's service charges after
     * service-charge discounts. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "charge_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Total of order and line-item discounts. Service-charge
     * discounts, such as free shipping, are not included; they reduce charge_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Tax already included in subtotal_money and
     * charge_money. Informational; it is not added again to total_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "inclusive_tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Tip money in the total: the requested tip before
     * payment, and settled tips net of refunds after. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "requested_tip_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Sum of the line items' subtotal_money: prices with
     * modifiers, before discounts. Lines with tax-inclusive prices include their tax here.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Total tax, equal to additive_tax_money +
     * inclusive_tax_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. subtotal_money - discount_money + charge_money +
     * additive_tax_money + requested_tip_money, never below zero. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link ProcessExistingReturnLineItemRequest}. How to process one line of an
 * existing return: the received quantity, inspection, decision, disposition, and resolution.
 */
export type ProcessExistingReturnLineItemRequest = {
    /**
     * Shape $ (Value): {@link ReturnProcessDecision}. Start from the pinned policy proposal
     * recomputed for approved_quantity when the line has a policy evaluation and the proposal can
     * be built. Otherwise start with return_required_quantity equal to approved_quantity,
     * allowed_resolution_types containing refund, exchange, replacement, no_monetary_action, and
     * store_credit in that order regardless of whether the original payment is refundable, no
     * automatic_resolution_type, is_inspection_required false, and no receiving_location_id. Each
     * supplied field replaces its starting value; allowed_resolution_types replaces the whole
     * list. Omit automatic_resolution_type to keep its starting value, or send null to resolve
     * manually. Then fill an omitted release_timing with after_inspection when merchandise is
     * required and inspection is required, after_receipt when merchandise is required without
     * inspection, or after_approval when no merchandise is required. Validate the merged decision
     * for quantity bounds, allowed resolution types, and reachable timing and inspection
     * requirements. A pinned policy always requires override_reason when approved_quantity exceeds
     * evaluated eligible_quantity, even when no proposal can be built. With a pinned policy but no
     * proposal, other decision fields use these defaults and override_reason is otherwise
     * optional. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}.
     */
    "decision"?: ReturnProcessDecision;
    /**
     * Shape $ (Value): {@link ReturnProcessDispositionRequest}. What was done with a returned
     * item, such as restocked as sellable or sent for repair, supplied when processing an existing
     * return.
     */
    "disposition"?: ReturnProcessDispositionRequest;
    /**
     * Shape $ (Value): {@link ReturnProcessInspectionRequest}. An inspection result for a returned
     * item, supplied when processing an existing return.
     */
    "inspection"?: ReturnProcessInspectionRequest;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "received_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link ReturnProcessResolutionRequest}. The resolution to apply to a
     * returned item, such as refund or exchange, with the quantity and any replacement items.
     */
    "resolution"?: ReturnProcessResolutionRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
};
/**
 * Shape $ (Value): {@link ProcessExistingReturnLineItemRequestInput}. How to process one line of
 * an existing return: the received quantity, inspection, decision, disposition, and resolution.
 */
export type ProcessExistingReturnLineItemRequestInput = {
    /**
     * Shape $ (Value): {@link ReturnProcessDecisionInput}. Start from the pinned policy proposal
     * recomputed for approved_quantity when the line has a policy evaluation and the proposal can
     * be built. Otherwise start with return_required_quantity equal to approved_quantity,
     * allowed_resolution_types containing refund, exchange, replacement, no_monetary_action, and
     * store_credit in that order regardless of whether the original payment is refundable, no
     * automatic_resolution_type, is_inspection_required false, and no receiving_location_id. Each
     * supplied field replaces its starting value; allowed_resolution_types replaces the whole
     * list. Omit automatic_resolution_type to keep its starting value, or send null to resolve
     * manually. Then fill an omitted release_timing with after_inspection when merchandise is
     * required and inspection is required, after_receipt when merchandise is required without
     * inspection, or after_approval when no merchandise is required. Validate the merged decision
     * for quantity bounds, allowed resolution types, and reachable timing and inspection
     * requirements. A pinned policy always requires override_reason when approved_quantity exceeds
     * evaluated eligible_quantity, even when no proposal can be built. With a pinned policy but no
     * proposal, other decision fields use these defaults and override_reason is otherwise
     * optional. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}.
     */
    "decision"?: ReturnProcessDecisionInput;
    /**
     * Shape $ (Value): {@link ReturnProcessDispositionRequestInput}. What was done with a returned
     * item, such as restocked as sellable or sent for repair, supplied when processing an existing
     * return.
     */
    "disposition"?: ReturnProcessDispositionRequestInput;
    /**
     * Shape $ (Value): {@link ReturnProcessInspectionRequestInput}. An inspection result for a
     * returned item, supplied when processing an existing return.
     */
    "inspection"?: ReturnProcessInspectionRequestInput;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "received_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link ReturnProcessResolutionRequestInput}. The resolution to apply to a
     * returned item, such as refund or exchange, with the quantity and any replacement items.
     */
    "resolution"?: ReturnProcessResolutionRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
};
/**
 * Shape $ (Value): {@link ProcessExistingReturnRequest}. The request body for: Process existing
 * return.
 */
export type ProcessExistingReturnRequest = {
    /**
     * Shape $ (Value): string. Omit to use the mode shared by all pinned policies that set
     * completion_mode, or automatic when no pinned policy sets one. Conflicting pinned policy
     * modes return 400 naming completion_mode only when completion_mode is omitted. An explicit
     * manual or automatic value is used as sent. On an open Return, omit to keep its committed
     * mode. Sending that mode is accepted; a different mode returns 409 ACTION_NOT_ALLOWED with
     * reason field_locked and param completion_mode. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link ProcessExistingReturnLineItemRequest}. minItems: 1. Shape
     * $[] (Value): {@link ProcessExistingReturnLineItemRequest}. How to process one line of an
     * existing return: the received quantity, inspection, decision, disposition, and resolution.
     */
    "line_items": Array<ProcessExistingReturnLineItemRequest>;
    /**
     * Shape $ (Value): {@link ReturnProcessReceiptRequest}. The receipt of returned merchandise,
     * with when and where it was received, supplied when processing an existing return.
     */
    "receipt"?: ReturnProcessReceiptRequest;
};
/**
 * Shape $ (Value): {@link ProcessExistingReturnRequestInput}. The request body for: Process
 * existing return.
 */
export type ProcessExistingReturnRequestInput = {
    /**
     * Shape $ (Value): string. Omit to use the mode shared by all pinned policies that set
     * completion_mode, or automatic when no pinned policy sets one. Conflicting pinned policy
     * modes return 400 naming completion_mode only when completion_mode is omitted. An explicit
     * manual or automatic value is used as sent. On an open Return, omit to keep its committed
     * mode. Sending that mode is accepted; a different mode returns 409 ACTION_NOT_ALLOWED with
     * reason field_locked and param completion_mode. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic";
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of {@link ProcessExistingReturnLineItemRequestInput}. minItems: 1.
     * Shape $[] (Value): {@link ProcessExistingReturnLineItemRequestInput}. How to process one
     * line of an existing return: the received quantity, inspection, decision, disposition, and
     * resolution.
     */
    "line_items": Array<ProcessExistingReturnLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link ReturnProcessReceiptRequestInput}. The receipt of returned
     * merchandise, with when and where it was received, supplied when processing an existing
     * return.
     */
    "receipt"?: ReturnProcessReceiptRequestInput;
};
/**
 * Shape $ (Value): {@link ProcessExistingReturnResponse}. A response containing
 * `ReturnProcessResult` data.
 */
export type ProcessExistingReturnResponse = {
    /**
     * Shape $ (Value): {@link ReturnProcessResult}. The return is the primary resource and
     * expected_version target; the other resources report the processing effects.
     */
    "data": ReturnProcessResult;
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
/** Shape $ (Value): {@link Product}. An item offered in the merchant's catalog. */
export type Product = {
    /**
     * Shape $ (Value): integer. Number of active variants belonging to the product. Format: int32.
     */
    "active_variant_count"?: number;
    /**
     * Shape $ (Value): boolean. Whether the product is active and has at least one active variant.
     */
    "available_for_sale"?: boolean;
    /**
     * Shape $ (Value): Array of {@link CategoryReference}. Always present. Empty collections are
     * returned as []. Shape $[] (Value): {@link CategoryReference}. A reference to a product
     * category by ID, handle, and name.
     */
    "categories": Array<CategoryReference>;
    /**
     * Shape $ (Value): string. When this resource was created, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): {@link ProductVariant}. The product's default variant, when one is set. A
     * specific purchasable version of a product.
     */
    "default_variant"?: ProductVariant;
    /**
     * Shape $ (Value): string. Identifier of the variant chosen as this product's default, when
     * one is set.
     */
    "default_variant_id"?: string;
    /**
     * Shape $ (Value): string. Delivery readiness aggregated across the product's non-archived
     * variants. Value enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /** Shape $ (Value): string. Description of the product shown to buyers. */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ImageAttachment}. Images attached to this resource, in
     * display order. The first image is primary. Shape $[] (Value): {@link ImageAttachment}. An
     * image attached to a resource, with its display properties and attachment metadata.
     */
    "images": Array<ImageAttachment>;
    /**
     * Shape $ (Value): {@link ProductVariantMatch}. On product list rows, the first non-archived
     * variant by position, then variant_id, that matches all exact variant filters. Without exact
     * variant filters, identifies the first variant whose SKU matches query. Omitted when no
     * variant matches; a product name or description match alone does not set it. Page the
     * product's variants to find all matches. A single variant witness on product list rows only.
     * With exact variant filters, the first variant by position, then variant_id, satisfying every
     * exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use the
     * paginated nested variant list to enumerate every match.
     */
    "matched_variant"?: ProductVariantMatch;
    /** Shape $ (Value): string. Identifier of the merchant that owns this resource. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata stored on this resource. Shape $.*
     * (Value): string.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link ModifierSet} or null. Attached modifier set, included when
     * expand=modifier_set is requested. Requires commerce.catalog.read in addition to the
     * resource's read scope. Shape $.anyOf[1] (Value): {@link ModifierSet}. A reusable collection
     * of customization groups. Shape $.anyOf[2] (Value): null.
     */
    "modifier_set"?: ((ModifierSet) | (null));
    /** Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it. */
    "modifier_set_id": string | null;
    /** Shape $ (Value): string. Product name shown to buyers. */
    "name": string;
    /**
     * Shape $ (Value): integer. Number of active options belonging to the product. Format: int32.
     */
    "option_count"?: number;
    /**
     * Shape $ (Value): Array of {@link ProductOption}. Product options and their non-archived
     * values. Empty when the product has no options. Shape $[] (Value): {@link ProductOption}. A
     * choice that defines a product's variants.
     */
    "options": Array<ProductOption>;
    /**
     * Shape $ (Value): {@link ProductPriceRange}. Lowest and highest unit prices among active
     * variants. Omitted when there are no active variants or their currencies differ. The lowest
     * and highest unit prices across a product's variants.
     */
    "price_range"?: ProductPriceRange;
    /** Shape $ (Value): string. Stable identifier of the product. */
    "product_id": string;
    /**
     * Shape $ (Value): string. Kind of goods or service this product represents. Value enum:
     * "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
    /**
     * Shape $ (Value): string. Product lifecycle status. Archived products remain readable and
     * cannot be edited. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): string. When this resource last changed, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer. Number of non-archived variants belonging to the product. Format:
     * int32.
     */
    "variant_count"?: number;
    /**
     * Shape $ (Value): Array of {@link ProductVariant}. The variants this request created, ordered
     * by `position` and then `variant_id`. Present only on the `POST /v1/products` response. Read
     * variants later with `GET /v1/products/{product_id}/variants`. Shape $[] (Value): {@link
     * ProductVariant}. A specific purchasable version of a product.
     */
    "variants"?: Array<ProductVariant>;
    /**
     * Shape $ (Value): integer string. Current resource version. Send it as expected_version to
     * reject a write if the resource has changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 0.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link ProductListResponse}. A page of `Product` objects. */
export type ProductListResponse = {
    /**
     * Shape $ (Value): Array of {@link Product}. The requested product data. Shape $[] (Value):
     * {@link Product}. An item offered in the merchant's catalog.
     */
    "data": Array<Product>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link ProductOption}. A choice that defines a product's variants. */
export type ProductOption = {
    /**
     * Shape $ (Value): string. When this resource was created, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata stored on this resource. Shape $.*
     * (Value): string.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. Option name, such as Size or Color. */
    "name": string;
    /** Shape $ (Value): string. Stable identifier of the product option. */
    "option_id": string;
    /**
     * Shape $ (Value): integer. Display order among the product's options, starting at zero.
     * Format: int32.
     */
    "position": number;
    /** Shape $ (Value): string. Identifier of the product this option belongs to. */
    "product_id": string;
    /**
     * Shape $ (Value): string. Option lifecycle status. Every active variant must select an active
     * value for each active option. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): string. When this resource last changed, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "updated_at"?: string;
    /**
     * Shape $ (Value): Array of {@link ProductOptionValue}. Values offered for this option, such
     * as Small, Medium, and Large for Size. Shape $[] (Value): {@link ProductOptionValue}. One
     * value of a product option, such as a size or color, with its position and status.
     */
    "values"?: Array<ProductOptionValue>;
};
/** Shape $ (Value): {@link ProductOptionListResponse}. A page of `ProductOption` objects. */
export type ProductOptionListResponse = {
    /**
     * Shape $ (Value): Array of {@link ProductOption}. The requested product option data. Shape
     * $[] (Value): {@link ProductOption}. A choice that defines a product's variants.
     */
    "data": Array<ProductOption>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link ProductOptionResponse}. A response containing `ProductOption` data. */
export type ProductOptionResponse = {
    /**
     * Shape $ (Value): {@link ProductOption}. The requested product option data. A choice that
     * defines a product's variants.
     */
    "data": ProductOption;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link ProductOptionValue}. One value of a product option, such as a size or
 * color, with its position and status.
 */
export type ProductOptionValue = {
    /**
     * Shape $ (Value): string. When this resource was created, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata stored on this resource. Shape $.*
     * (Value): string.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. Stable identifier of the option value. */
    "option_value_id": string;
    /**
     * Shape $ (Value): integer. Display order among the option's values, starting at zero. Format:
     * int32.
     */
    "position": number;
    /**
     * Shape $ (Value): string. Option value lifecycle status. Only active values can be newly
     * selected by active variants. Value enum: "active", "inactive", "archived".
     */
    "status"?: "active" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): string. When this resource last changed, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "updated_at"?: string;
    /** Shape $ (Value): string. Option value shown to buyers, such as Medium. */
    "value": string;
};
/**
 * Shape $ (Value): {@link ProductPriceRange}. The lowest and highest unit prices across a
 * product's variants.
 */
export type ProductPriceRange = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Highest unit price among the product's active variants.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Lowest unit price among the product's active variants.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money": MoneyValue;
};
/** Shape $ (Value): {@link ProductResponse}. A response containing `Product` data. */
export type ProductResponse = {
    /**
     * Shape $ (Value): {@link Product}. The requested product data. An item offered in the
     * merchant's catalog.
     */
    "data": Product;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link ProductVariant}. A specific purchasable version of a product. */
export type ProductVariant = {
    /** Shape $ (Value): boolean. Whether the variant and its product are both active. */
    "available_for_sale": boolean;
    /** Shape $ (Value): string. Barcode assigned to this sellable item. */
    "barcode"?: string;
    /**
     * Shape $ (Value): string. When this resource was created, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. Reason the variant's delivery configuration needs attention. Value
     * enum: "delivery_profile_missing", "delivery_profile_inactive".
     */
    "delivery_configuration_reason"?: "delivery_profile_missing" | "delivery_profile_inactive" | (string & {});
    /**
     * Shape $ (Value): string. Whether the variant's delivery configuration is ready, needs
     * attention, or does not apply. Value enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /** Shape $ (Value): string. Identifier of the delivery profile assigned to this variant. */
    "delivery_profile_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ImageAttachment}. Images shown for the variant: its own
     * gallery when nonempty, otherwise the product's gallery. Shape $[] (Value): {@link
     * ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata.
     */
    "effective_images": Array<ImageAttachment>;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link GiftCardProductConfiguration}. Gift card issuance terms.
     * face_value_money is the reference denomination; unit_price_money is its price. Custom
     * amounts use that price-to-value ratio, rounded to the nearest cent with ties up. Gift card
     * settings on a product variant: its `face_value_money`, price mode (face value or
     * discounted), and bounds for custom amounts.
     */
    "gift_card_configuration"?: GiftCardProductConfiguration;
    /**
     * Shape $ (Value): Array of {@link ImageAttachment}. The variant's own images in display
     * order. An empty gallery inherits the product's images. Shape $[] (Value): {@link
     * ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata.
     */
    "images": Array<ImageAttachment>;
    /**
     * Shape $ (Value): boolean. Whether effective_images comes from the product's gallery because
     * this variant's gallery is empty.
     */
    "images_inherited": boolean;
    /**
     * Shape $ (Value): string. The inventory item this variant consumes. Present exactly when
     * inventory_tracking is tracked. Several variants may share one inventory item.
     */
    "inventory_item_id"?: string;
    /**
     * Shape $ (Value): string. Whether sales of this variant consume an inventory item. Value
     * enum: "not_tracked", "tracked".
     */
    "inventory_tracking": "not_tracked" | "tracked" | (string & {});
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /** Shape $ (Value): string. Identifier of the merchant that owns this resource. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata stored on this resource. Shape $.*
     * (Value): string.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link ModifierSet} or null. Attached modifier set, included when
     * expand=modifier_set is requested. Requires commerce.catalog.read in addition to the
     * resource's read scope. Shape $.anyOf[1] (Value): {@link ModifierSet}. A reusable collection
     * of customization groups. Shape $.anyOf[2] (Value): null.
     */
    "modifier_set"?: ((ModifierSet) | (null));
    /** Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it. */
    "modifier_set_id": string | null;
    /**
     * Shape $ (Value): string. Variant name that distinguishes it from the product's other
     * variants.
     */
    "name"?: string;
    /**
     * Shape $ (Value): integer. Display order among the product's variants, starting at zero.
     * Format: int32.
     */
    "position": number;
    /** Shape $ (Value): string. Identifier of the product this variant belongs to. */
    "product_id": string;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Always present. Empty collections
     * are returned as []. Shape $[] (Value): {@link SelectedProductOption}. An option and value
     * chosen for a product variant, such as size Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Shape $ (Value): string. Stock keeping unit assigned to this sellable item. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. Variant lifecycle status. Archived variants remain readable and
     * cannot be edited. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Shape $ (Value): boolean. Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link Dimensions}. Per-unit measurement. Omitted when unknown. Package or
     * item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Shape $ (Value): {@link MoneyValue}. Price charged for one unit, in the currency's smallest
     * unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Shape $ (Value): {@link Weight}. Per-unit measurement. Omitted when unknown. A weight value
     * in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
    /**
     * Shape $ (Value): string. When this resource last changed, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "updated_at"?: string;
    /** Shape $ (Value): string. Stable identifier of the product variant. */
    "variant_id": string;
    /**
     * Shape $ (Value): integer string. Current resource version. Send it as expected_version to
     * reject a write if the resource has changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 0.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link ProductVariantListResponse}. A page of `ProductVariant` objects. */
export type ProductVariantListResponse = {
    /**
     * Shape $ (Value): Array of {@link ProductVariant}. The requested product variant data. Shape
     * $[] (Value): {@link ProductVariant}. A specific purchasable version of a product.
     */
    "data": Array<ProductVariant>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link ProductVariantMatch}. A single variant witness on product list rows
 * only. With exact variant filters, the first variant by position, then variant_id, satisfying
 * every exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use
 * the paginated nested variant list to enumerate every match.
 */
export type ProductVariantMatch = {
    /** Shape $ (Value): string. Name of the matching variant, when set. */
    "name"?: string;
    /** Shape $ (Value): string. Stock keeping unit of the matching variant, when set. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. Identifier of the variant that matched the product list's variant
     * filters or query.
     */
    "variant_id": string;
};
/** Shape $ (Value): {@link ProductVariantRequest}. The request body for: Create product variant. */
export type ProductVariantRequest = {
    /**
     * Shape $ (Value): string. Barcode assigned to this sellable item. minLength: 1. maxLength:
     * 100.
     */
    "barcode"?: string;
    /**
     * Shape $ (Value): string. Identifier of the delivery profile to assign to this variant.
     * minLength: 1.
     */
    "delivery_profile_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link GiftCardProductConfiguration}. Only valid for product_type
     * gift_card. Omission creates a fixed denomination at unit_price_money. Discounted pricing
     * requires an explicit face_value_money and price_mode discounted. Gift card settings on a
     * product variant: its `face_value_money`, price mode (face value or discounted), and bounds
     * for custom amounts.
     */
    "gift_card_configuration"?: GiftCardProductConfiguration;
    /**
     * Shape $ (Value): Array of {@link ImageRequest}. The complete desired gallery in display
     * order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8.
     * Shape $[] (Value): {@link ImageRequest}. An image you supply by `source_url`, with optional
     * `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Shape $ (Value): {@link InventoryItemCreateRequest}. New inventory item to create and track
     * for this variant. Send either inventory_item or inventory_item_id. Inventory item details
     * you supply when creating an inventory item for a product variant: `name`, `sku`, `barcode`,
     * and metadata.
     */
    "inventory_item"?: InventoryItemCreateRequest;
    /**
     * Shape $ (Value): string. Identifier of an existing inventory item to track for this variant.
     * Send either inventory_item_id or inventory_item. minLength: 1.
     */
    "inventory_item_id"?: string;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it.
     * minLength: 1.
     */
    "modifier_set_id"?: string | null;
    /**
     * Shape $ (Value): string. Variant name that distinguishes it from the product's other
     * variants. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Shape $ (Value): integer. Display order among the product's variants, starting at zero.
     * Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): Array of {@link ProductVariantSelectedOptionRequest}. Option name and value
     * selections for this variant. When present on an update, replaces the entire selection. Omit
     * to leave unchanged. Select one active value for every active option. null is invalid. Shape
     * $[] (Value): {@link ProductVariantSelectedOptionRequest}. An option name and value you
     * choose to identify a product variant, such as Size and Large.
     */
    "selected_options"?: Array<ProductVariantSelectedOptionRequest>;
    /**
     * Shape $ (Value): string. Stock keeping unit assigned to this sellable item. minLength: 1.
     * maxLength: 100.
     */
    "sku"?: string;
    /**
     * Shape $ (Value): string. Whether the variant is active or inactive. An inactive variant
     * cannot be sold. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Shape $ (Value): boolean. Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link Dimensions}. Per-unit measurement. Omitted when unknown. Package or
     * item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Shape $ (Value): {@link MoneyValue}. Price charged for one unit, in the currency's smallest
     * unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Shape $ (Value): {@link Weight}. Per-unit measurement. Omitted when unknown. A weight value
     * in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
};
/**
 * Shape $ (Value): {@link ProductVariantRequestInput}. The request body for: Create product
 * variant.
 */
export type ProductVariantRequestInput = {
    /**
     * Shape $ (Value): string. Barcode assigned to this sellable item. minLength: 1. maxLength:
     * 100.
     */
    "barcode"?: string;
    /**
     * Shape $ (Value): string. Identifier of the delivery profile to assign to this variant.
     * minLength: 1.
     */
    "delivery_profile_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link GiftCardProductConfigurationInput}. Only valid for product_type
     * gift_card. Omission creates a fixed denomination at unit_price_money. Discounted pricing
     * requires an explicit face_value_money and price_mode discounted. Gift card settings on a
     * product variant: its `face_value_money`, price mode (face value or discounted), and bounds
     * for custom amounts.
     */
    "gift_card_configuration"?: GiftCardProductConfigurationInput;
    /**
     * Shape $ (Value): Array of {@link ImageRequestInput}. The complete desired gallery in display
     * order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8.
     * Shape $[] (Value): {@link ImageRequestInput}. An image you supply by `source_url`, with
     * optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * Shape $ (Value): {@link InventoryItemCreateRequestInput}. New inventory item to create and
     * track for this variant. Send either inventory_item or inventory_item_id. Inventory item
     * details you supply when creating an inventory item for a product variant: `name`, `sku`,
     * `barcode`, and metadata.
     */
    "inventory_item"?: InventoryItemCreateRequestInput;
    /**
     * Shape $ (Value): string. Identifier of an existing inventory item to track for this variant.
     * Send either inventory_item_id or inventory_item. minLength: 1.
     */
    "inventory_item_id"?: string;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission";
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it.
     * minLength: 1.
     */
    "modifier_set_id"?: string | null;
    /**
     * Shape $ (Value): string. Variant name that distinguishes it from the product's other
     * variants. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Shape $ (Value): integer. Display order among the product's variants, starting at zero.
     * Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): Array of {@link ProductVariantSelectedOptionRequestInput}. Option name and
     * value selections for this variant. When present on an update, replaces the entire selection.
     * Omit to leave unchanged. Select one active value for every active option. null is invalid.
     * Shape $[] (Value): {@link ProductVariantSelectedOptionRequestInput}. An option name and
     * value you choose to identify a product variant, such as Size and Large.
     */
    "selected_options"?: Array<ProductVariantSelectedOptionRequestInput>;
    /**
     * Shape $ (Value): string. Stock keeping unit assigned to this sellable item. minLength: 1.
     * maxLength: 100.
     */
    "sku"?: string;
    /**
     * Shape $ (Value): string. Whether the variant is active or inactive. An inactive variant
     * cannot be sold. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Shape $ (Value): boolean. Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link DimensionsInput}. Per-unit measurement. Omitted when unknown.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsInput;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Price charged for one unit, in the currency's
     * smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * Shape $ (Value): {@link WeightInput}. Per-unit measurement. Omitted when unknown. A weight
     * value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "unit_weight"?: WeightInput;
};
/** Shape $ (Value): {@link ProductVariantResponse}. A response containing `ProductVariant` data. */
export type ProductVariantResponse = {
    /**
     * Shape $ (Value): {@link ProductVariant}. The requested product variant data. A specific
     * purchasable version of a product.
     */
    "data": ProductVariant;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link ProductVariantSelectedOptionRequest}. An option name and value you
 * choose to identify a product variant, such as Size and Large.
 */
export type ProductVariantSelectedOptionRequest = {
    /**
     * Shape $ (Value): string. Name of one of the product's options. Limited to 255 characters
     * (Unicode code points) before trimming surrounding whitespace. Matches case-insensitively
     * after trimming surrounding whitespace. On a variant update, an option that is no longer
     * active is accepted only when the entry matches the variant's current selection for that
     * option; omit it to keep that selection. minLength: 1. maxLength: 255.
     */
    "option_name": string;
    /**
     * Shape $ (Value): string. Value of the named option. Limited to 255 characters (Unicode code
     * points) before trimming surrounding whitespace. Matches the option's values
     * case-insensitively after trimming surrounding whitespace. A value that is no longer active
     * is accepted only on a variant update, when it matches the variant's current selection for
     * that option. minLength: 1. maxLength: 255.
     */
    "value": string;
};
/**
 * Shape $ (Value): {@link ProductVariantSelectedOptionRequestInput}. An option name and value you
 * choose to identify a product variant, such as Size and Large.
 */
export type ProductVariantSelectedOptionRequestInput = ProductVariantSelectedOptionRequest;
export type ProductsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CreateProductRequestInput}. The request body for: Create product. */
    "body": InputValue<CreateProductRequestInput>;
};
export type ProductsCreateVariantInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ProductVariantRequestInput}. The request body for: Create product
     * variant.
     */
    "body": InputValue<ProductVariantRequestInput>;
};
export type ProductsDeleteVariantInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "variant_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type ProductsGetInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "modifier_set". Shape $[] (Value): string. Value
     * enum: "modifier_set".
     */
    "expand"?: InputValue<Array<"modifier_set">>;
};
export type ProductsGetOptionInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "option_id": InputValue<string>;
};
export type ProductsGetVariantInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "variant_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "modifier_set". Shape $[] (Value): string. Value
     * enum: "modifier_set".
     */
    "expand"?: InputValue<Array<"modifier_set">>;
};
export type ProductsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "physical", "service", "fee",
     * "digital", "gift_card". Shape $[] (Value): string. Value enum: "physical", "service", "fee",
     * "digital", "gift_card".
     */
    "product_type"?: InputValue<Array<"physical" | "service" | "fee" | "digital" | "gift_card">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /** Shape $ (Value): string. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$. */
    "category_handle"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "sku"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "variant_external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. pattern: ^invi_[0-9A-HJKMNP-TV-Z]{26}$. */
    "inventory_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "delivery_profile_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "configured", "action_required",
     * "not_applicable". Shape $[] (Value): string. Value enum: "configured", "action_required",
     * "not_applicable".
     */
    "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "name", "created_at",
     * "updated_at".
     */
    "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. [] enum: "modifier_set". Shape $[] (Value): string. Value
     * enum: "modifier_set".
     */
    "expand"?: InputValue<Array<"modifier_set">>;
};
export type ProductsListOptionsInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
};
export type ProductsListVariantsInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "sku"?: InputValue<string>;
    /** Shape $ (Value): string. pattern: ^invi_[0-9A-HJKMNP-TV-Z]{26}$. */
    "inventory_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "position". Value enum: "position", "created_at",
     * "updated_at", "unit_price_money".
     */
    "sort_by"?: InputValue<"position" | "created_at" | "updated_at" | "unit_price_money">;
    /** Shape $ (Value): string. Default: "asc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. */
    "delivery_profile_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "configured", "action_required",
     * "not_applicable". Shape $[] (Value): string. Value enum: "configured", "action_required",
     * "not_applicable".
     */
    "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. [] enum: "modifier_set". Shape $[] (Value): string. Value
     * enum: "modifier_set".
     */
    "expand"?: InputValue<Array<"modifier_set">>;
};
export type ProductsRemoveInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type ProductsUpdateInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateProductRequestInput}. Send only fields to change. Omitted
     * fields keep their stored values. null clears nullable fields; null on any other field
     * returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with
     * at most 50 keys after merging.
     */
    "body": InputValue<UpdateProductRequestInput>;
};
export type ProductsUpdateVariantInput = {
    /** Shape $ (Value): string. */
    "product_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "variant_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateProductVariantRequestInput}. Send only fields to change.
     * Omitted fields keep their stored values. null clears nullable fields; null on any other
     * field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by
     * key, with at most 50 keys after merging.
     */
    "body": InputValue<UpdateProductVariantRequestInput>;
};
/**
 * Shape $ (Value): {@link Promotion}. Promotion evaluation order: manual discounts stay, do not
 * count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are
 * admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include
 * codes being applied, existing promotion discounts, and qualifying automatic promotions. Each
 * exclusivity group keeps its highest-priority member, then the larger standalone discount,
 * earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount,
 * then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order
 * is reached or both promotions do not allow each other's discount class. Admitted promotions
 * price line item first, then order, then service charge. A zero-value promotion is dropped and
 * selection runs again.
 */
export type Promotion = {
    /**
     * Shape $ (Value): {@link PromotionApplicationMethod}. Discount effect and how it applies to
     * eligible items or charges. A flat application method whose type selects its effect fields.
     */
    "application_method": PromotionApplicationMethod;
    /**
     * Shape $ (Value): boolean. Whether the promotion can apply right now: it is active, inside
     * its schedule, under its max_uses, and, when code-gated, has at least one redeemable code.
     */
    "available": boolean;
    /**
     * Shape $ (Value): Array of {@link PromotionCode}. The codes this request created, in request
     * order. Present only on the `POST /v1/promotions` response, where it is `[]` for a promotion
     * created without codes. Read codes later with `GET /v1/promotion-codes?promotion_id=`. Shape
     * $[] (Value): {@link PromotionCode}. A code a buyer enters to claim a promotion.
     */
    "codes"?: Array<PromotionCode>;
    /**
     * Shape $ (Value): {@link PromotionCodesSummary}. Read-only rollup of this promotion's codes.
     * Present only on code-gated promotions; automatic promotions omit it. A count of a
     * promotion's codes, including how many are redeemable now and the newest redeemable code.
     */
    "codes_summary"?: PromotionCodesSummary;
    /**
     * Shape $ (Value): {@link PromotionCombinesWith}. Which promotion discount classes this
     * promotion may share an order with. Both promotions must allow each other's class. Manual
     * discounts are ignored. See Promotion for the evaluation order. Which kinds of discounts a
     * promotion can combine with: line item, order, and service charge discounts.
     */
    "combines_with": PromotionCombinesWith;
    /**
     * Shape $ (Value): string. When the promotion was created, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "created_at"?: string;
    /** Shape $ (Value): string. Optional description of the promotion for your own records. */
    "description"?: string;
    /**
     * Shape $ (Value): string. Whether the promotion discounts the order, individual line items,
     * or service charges. Value enum: "order", "line_item", "service_charge".
     */
    "discount_class": "order" | "line_item" | "service_charge" | (string & {});
    /**
     * Shape $ (Value): string. Buyer-facing promotion name shown in checkout and order discount
     * surfaces.
     */
    "display_name": string;
    /**
     * Shape $ (Value): {@link PromotionRuleGroup}. Conditions an order must satisfy for the
     * promotion to apply. Omitted when the promotion has no eligibility conditions. A rule group
     * is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested
     * groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or
     * send null where the field is clearable. Responses list rules before nested groups. Under
     * any, a nested group containing only one rule reads back as that rule. Under all, nested
     * groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic
     * normalizations stabilize after one round trip. matched_items.subtotal sums the line items
     * matched by the line_item.* rules in the same all group, including its nested groups.
     */
    "eligibility_rules"?: PromotionRuleGroup;
    /**
     * Shape $ (Value): {@link PromotionExclusivity}. Optional group and priority used to choose
     * one promotion from competing promotions in the same group. See Promotion for the evaluation
     * order. Only one promotion in an exclusivity group continues. See Promotion for the
     * evaluation order.
     */
    "exclusivity"?: PromotionExclusivity;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): integer string. Maximum number of redemptions across all codes and
     * automatic applications. Omitted when there is no redemption limit. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "max_uses"?: `${bigint}`;
    /** Shape $ (Value): string. Identifier of the merchant that owns the promotion. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): Map of string. Key-value data you attach to the promotion. Shape $.*
     * (Value): string.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Internal promotion name for dashboards, searching, and reporting.
     */
    "name": string;
    /** Shape $ (Value): string. Unique identifier for the promotion. */
    "promotion_id": string;
    /**
     * Shape $ (Value): string. Whether the promotion applies automatically when its rules match or
     * requires a promotion code. Value enum: "automatic", "code".
     */
    "redemption_type": "automatic" | "code" | (string & {});
    /**
     * Shape $ (Value): {@link PromotionSchedule}. Optional start and end times that limit when the
     * promotion can apply. When a promotion is active, with a start time, an end time, and the
     * time zone it was entered in.
     */
    "schedule"?: PromotionSchedule;
    /**
     * Shape $ (Value): string. Lifecycle status. Set active or inactive with PATCH; DELETE sets
     * archived. An active promotion can still be unavailable: read available. Value enum:
     * "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): string. Why available is false. Present only when available is false. Value
     * enum: "inactive", "archived", "not_yet_started", "expired", "exhausted", "no_active_codes".
     */
    "unavailable_reason"?: "inactive"
        | "archived"
        | "not_yet_started"
        | "expired"
        | "exhausted"
        | "no_active_codes"
        | (string & {});
    /**
     * Shape $ (Value): string. When the promotion was last updated, as an RFC3339 timestamp.
     * Format: date-time.
     */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Number of times the promotion has been redeemed. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "uses_count": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Persisted owned-state version. Clock-based availability and
     * expanded resources do not advance this counter. Use an integer string (decimal digits), not
     * a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link PromotionAmountOffMethod}. The `amount_off` variant of
 * `PromotionApplicationMethod`.
 */
export type PromotionAmountOffMethod = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Positive fixed discount in the primary currency.
     * allocation determines whether it applies to each matched item or once across the matched
     * set. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_off_money": MoneyValue;
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Alternative positive fixed discounts, keyed by
     * currency code. Each Money currency must match its key. Shape $.* (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "currency_options"?: Record<string, MoneyValue>;
    /**
     * Shape $ (Value): {@link PromotionRuleGroup}. Which line items receive the discount. Required
     * for service_charge promotions, and for line_item promotions whose eligibility_rules include
     * any non-line-item condition (for example order.subtotal or a customer condition). It is
     * optional only when eligibility_rules consist entirely of line_item.* conditions (plus
     * matched_items.subtotal), in which case the matched items are used as the target. Omitting it
     * otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one
     * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
     * rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "discounted_item_rules"?: PromotionRuleGroup;
    /**
     * Shape $ (Value): {@link PromotionRecurrence}. Optional recurrence for subscription payments:
     * once applies to the first charged payment, repeating applies for period_count charged
     * payments, and forever applies to every payment. One-time orders apply the promotion once.
     * How often a promotion's discount repeats on a subscription: once, for a number of charged
     * payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Shape $ (Value): string. Selects the amount_off discount effect and its allowed fields.
     * Value enum: "amount_off".
     */
    "type": "amount_off" | (string & {});
};
/**
 * Shape $ (Value): {@link PromotionAmountOffMethodRequest}. The `amount_off` variant of
 * `PromotionApplicationMethodInput`.
 */
export type PromotionAmountOffMethodRequest = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Positive fixed discount in the primary currency.
     * allocation determines whether it applies to each matched item or once across the matched
     * set. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_off_money": MoneyValue;
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Alternative positive fixed discounts, keyed by
     * currency code. Each Money currency must match its key. Shape $.* (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "currency_options"?: Record<string, MoneyValue>;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequest}. Which line items receive the discount.
     * Required for service_charge promotions, and for line_item promotions whose eligibility_rules
     * include any non-line-item condition (for example order.subtotal or a customer condition). It
     * is optional only when eligibility_rules consist entirely of line_item.* conditions (plus
     * matched_items.subtotal), in which case the matched items are used as the target. Omitting it
     * otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one
     * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
     * rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "discounted_item_rules"?: PromotionRuleGroupRequest;
    /**
     * Shape $ (Value): {@link PromotionRecurrence}. Optional recurrence for subscription payments:
     * once applies to the first charged payment, repeating applies for period_count charged
     * payments, and forever applies to every payment. One-time orders apply the promotion once.
     * How often a promotion's discount repeats on a subscription: once, for a number of charged
     * payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Shape $ (Value): string. Selects the amount_off discount effect and its allowed fields.
     * Value enum: "amount_off".
     */
    "type": "amount_off" | (string & {});
};
/**
 * Shape $ (Value): {@link PromotionAmountOffMethodRequestInput}. The `amount_off` variant of
 * `PromotionApplicationMethodInput`.
 */
export type PromotionAmountOffMethodRequestInput = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Positive fixed discount in the primary currency.
     * allocation determines whether it applies to each matched item or once across the matched
     * set. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_off_money": MoneyValueInput;
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax";
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Alternative positive fixed discounts, keyed
     * by currency code. Each Money currency must match its key. Shape $.* (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "currency_options"?: Record<string, MoneyValueInput>;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequestInput}. Which line items receive the
     * discount. Required for service_charge promotions, and for line_item promotions whose
     * eligibility_rules include any non-line-item condition (for example order.subtotal or a
     * customer condition). It is optional only when eligibility_rules consist entirely of
     * line_item.* conditions (plus matched_items.subtotal), in which case the matched items are
     * used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule
     * group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested
     * groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or
     * send null where the field is clearable. Responses list rules before nested groups. Under
     * any, a nested group containing only one rule reads back as that rule. Under all, nested
     * groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic
     * normalizations stabilize after one round trip. matched_items.subtotal sums the line items
     * matched by the line_item.* rules in the same all group, including its nested groups.
     */
    "discounted_item_rules"?: PromotionRuleGroupRequestInput;
    /**
     * Shape $ (Value): {@link PromotionRecurrenceInput}. Optional recurrence for subscription
     * payments: once applies to the first charged payment, repeating applies for period_count
     * charged payments, and forever applies to every payment. One-time orders apply the promotion
     * once. How often a promotion's discount repeats on a subscription: once, for a number of
     * charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrenceInput;
    /**
     * Shape $ (Value): string. Selects the amount_off discount effect and its allowed fields.
     * Value enum: "amount_off".
     */
    "type": "amount_off";
};
/**
 * Shape $ (Value): {@link PromotionApplicationMethod}. A flat application method whose type
 * selects its effect fields.
 */
export type PromotionApplicationMethod = ((PromotionPercentOffMethod)
    | (PromotionAmountOffMethod)
    | (PromotionBuyXGetYMethod)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link PromotionApplicationMethodPatch}. Send only application_method fields to
 * change. Omitted fields keep their stored values. Sending a different type replaces the effect
 * with the supplied effect fields; allocation, calculation_basis, recurrence, and
 * discounted_item_rules are preserved unless sent, and discounted_item_rules: null clears the
 * stored rules. Money, recurrence, currency_options, and each rule group are replaced whole when
 * present. null clears only nullable fields. discounted_item_rules cannot be null for buy_x_get_y.
 * minProperties: 1.
 */
export type PromotionApplicationMethodPatch = {
    /**
     * Shape $ (Value): string. How the effect is allocated. Omitted allocation keeps its stored
     * value; it defaults by discount_class only when no allocation is stored. Changing
     * discount_class does not reset allocation. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Positive fixed discount in the primary currency.
     * allocation determines whether it applies to each matched item or once across the matched
     * set. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_off_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer. Number of qualifying units needed for one application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "buy_min_quantity"?: number;
    /**
     * Shape $ (Value): string or null. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Send null to clear it. Value enum: "subtotal_pre_tax", "subtotal_post_tax", null.
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | null | (string & {}) | null;
    /**
     * Shape $ (Value): Map of {@link MoneyValue} or null. Alternative positive fixed discounts,
     * keyed by currency code. Each Money currency must match its key. Shape $.* (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "currency_options"?: Record<string, MoneyValue> | null;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequest} or null. Which line items receive the
     * discount. Required for service_charge promotions, and for line_item promotions whose
     * eligibility_rules include any non-line-item condition (for example order.subtotal or a
     * customer condition). It is optional only when eligibility_rules consist entirely of
     * line_item.* conditions (plus matched_items.subtotal), in which case the matched items are
     * used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. Shape
     * $.anyOf[1] (Value): {@link PromotionRuleGroupRequest}. A rule group is an object with
     * exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty
     * groups, and a rules key are invalid. Omit the field for no rules, or send null where the
     * field is clearable. Responses list rules before nested groups. Under any, a nested group
     * containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups. Shape $.anyOf[2]
     * (Value): null.
     */
    "discounted_item_rules"?: ((PromotionRuleGroupRequest) | (null) | (unknown));
    /**
     * Shape $ (Value): number. Percentage to discount from reward items, from 1 to 100. Use 100 to
     * make the reward items free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off"?: number;
    /**
     * Shape $ (Value): integer. Maximum number of reward units discounted per application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "get_quantity"?: number;
    /**
     * Shape $ (Value): integer or null. Maximum number of times the buy_x_get_y promotion can
     * apply to one order. Omit for no limit beyond the qualifying and reward quantities. Format:
     * int32. minimum: 1.
     */
    "max_applications_per_order"?: number | null;
    /**
     * Shape $ (Value): integer or null. Maximum matched units discounted, valid only for
     * percent_off with allocation each. null clears the limit. Fields belonging to another effect
     * return INVALID_REQUEST; send type to change effects. Format: int32. minimum: 1.
     */
    "max_discounted_quantity"?: number | null;
    /**
     * Shape $ (Value): number. Percentage to discount, from 1 to 100. minimum: 1. maximum: 100.
     * multipleOf: 0.0001.
     */
    "percent_off"?: number;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequest}. Rules that identify the items counted
     * toward buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with exactly
     * one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups,
     * and a rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "qualifying_item_rules"?: PromotionRuleGroupRequest;
    /**
     * Shape $ (Value): {@link PromotionRecurrence} or null. Optional recurrence for subscription
     * payments: once applies to the first charged payment, repeating applies for period_count
     * charged payments, and forever applies to every payment. One-time orders apply the promotion
     * once. Shape $.anyOf[1] (Value): {@link PromotionRecurrence}. How often a promotion's
     * discount repeats on a subscription: once, for a number of charged payments, or forever.
     * Shape $.anyOf[2] (Value): null.
     */
    "recurrence"?: ((PromotionRecurrence) | (null) | (unknown));
    /**
     * Shape $ (Value): string. Which matching reward items receive the discount: the cheapest, the
     * highest priced, or those added first to the order. Defaults to cheapest. Default:
     * "cheapest". Value enum: "cheapest", "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added" | (string & {});
    /**
     * Shape $ (Value): string. Discount effect: a percentage, a fixed amount, or a discount on
     * reward items after qualifying purchases. Value enum: "percent_off", "amount_off",
     * "buy_x_get_y".
     */
    "type"?: "percent_off" | "amount_off" | "buy_x_get_y" | (string & {});
};
/**
 * Shape $ (Value): {@link PromotionApplicationMethodPatchInput}. Send only application_method
 * fields to change. Omitted fields keep their stored values. Sending a different type replaces the
 * effect with the supplied effect fields; allocation, calculation_basis, recurrence, and
 * discounted_item_rules are preserved unless sent, and discounted_item_rules: null clears the
 * stored rules. Money, recurrence, currency_options, and each rule group are replaced whole when
 * present. null clears only nullable fields. discounted_item_rules cannot be null for buy_x_get_y.
 * minProperties: 1.
 */
export type PromotionApplicationMethodPatchInput = {
    /**
     * Shape $ (Value): string. How the effect is allocated. Omitted allocation keeps its stored
     * value; it defaults by discount_class only when no allocation is stored. Changing
     * discount_class does not reset allocation. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Positive fixed discount in the primary currency.
     * allocation determines whether it applies to each matched item or once across the matched
     * set. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_off_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): integer. Number of qualifying units needed for one application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "buy_min_quantity"?: number;
    /**
     * Shape $ (Value): string or null. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Send null to clear it. Value enum: "subtotal_pre_tax", "subtotal_post_tax", null.
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | null;
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput} or null. Alternative positive fixed
     * discounts, keyed by currency code. Each Money currency must match its key. Shape $.*
     * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "currency_options"?: Record<string, MoneyValueInput> | null;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequestInput} or null. Which line items receive
     * the discount. Required for service_charge promotions, and for line_item promotions whose
     * eligibility_rules include any non-line-item condition (for example order.subtotal or a
     * customer condition). It is optional only when eligibility_rules consist entirely of
     * line_item.* conditions (plus matched_items.subtotal), in which case the matched items are
     * used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. Shape
     * $.anyOf[1] (Value): {@link PromotionRuleGroupRequestInput}. A rule group is an object with
     * exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty
     * groups, and a rules key are invalid. Omit the field for no rules, or send null where the
     * field is clearable. Responses list rules before nested groups. Under any, a nested group
     * containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups. Shape $.anyOf[2]
     * (Value): null.
     */
    "discounted_item_rules"?: ((PromotionRuleGroupRequestInput) | (null));
    /**
     * Shape $ (Value): number. Percentage to discount from reward items, from 1 to 100. Use 100 to
     * make the reward items free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off"?: number;
    /**
     * Shape $ (Value): integer. Maximum number of reward units discounted per application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "get_quantity"?: number;
    /**
     * Shape $ (Value): integer or null. Maximum number of times the buy_x_get_y promotion can
     * apply to one order. Omit for no limit beyond the qualifying and reward quantities. Format:
     * int32. minimum: 1.
     */
    "max_applications_per_order"?: number | null;
    /**
     * Shape $ (Value): integer or null. Maximum matched units discounted, valid only for
     * percent_off with allocation each. null clears the limit. Fields belonging to another effect
     * return INVALID_REQUEST; send type to change effects. Format: int32. minimum: 1.
     */
    "max_discounted_quantity"?: number | null;
    /**
     * Shape $ (Value): number. Percentage to discount, from 1 to 100. minimum: 1. maximum: 100.
     * multipleOf: 0.0001.
     */
    "percent_off"?: number;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequestInput}. Rules that identify the items
     * counted toward buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with
     * exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty
     * groups, and a rules key are invalid. Omit the field for no rules, or send null where the
     * field is clearable. Responses list rules before nested groups. Under any, a nested group
     * containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups.
     */
    "qualifying_item_rules"?: PromotionRuleGroupRequestInput;
    /**
     * Shape $ (Value): {@link PromotionRecurrenceInput} or null. Optional recurrence for
     * subscription payments: once applies to the first charged payment, repeating applies for
     * period_count charged payments, and forever applies to every payment. One-time orders apply
     * the promotion once. Shape $.anyOf[1] (Value): {@link PromotionRecurrenceInput}. How often a
     * promotion's discount repeats on a subscription: once, for a number of charged payments, or
     * forever. Shape $.anyOf[2] (Value): null.
     */
    "recurrence"?: ((PromotionRecurrenceInput) | (null));
    /**
     * Shape $ (Value): string. Which matching reward items receive the discount: the cheapest, the
     * highest priced, or those added first to the order. Defaults to cheapest. Default:
     * "cheapest". Value enum: "cheapest", "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added";
    /**
     * Shape $ (Value): string. Discount effect: a percentage, a fixed amount, or a discount on
     * reward items after qualifying purchases. Value enum: "percent_off", "amount_off",
     * "buy_x_get_y".
     */
    "type"?: "percent_off" | "amount_off" | "buy_x_get_y";
};
/**
 * Shape $ (Value): {@link PromotionApplicationMethodRequest}. A flat application method whose type
 * selects its effect fields.
 */
export type PromotionApplicationMethodRequest = ((PromotionPercentOffMethodRequest)
    | (PromotionAmountOffMethodRequest)
    | (PromotionBuyXGetYMethodRequest)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link PromotionApplicationMethodRequestInput}. A flat application method whose
 * type selects its effect fields.
 */
export type PromotionApplicationMethodRequestInput = ((PromotionPercentOffMethodRequestInput)
    | (PromotionAmountOffMethodRequestInput)
    | (PromotionBuyXGetYMethodRequestInput));
/**
 * Shape $ (Value): {@link PromotionBuyXGetYMethod}. The `buy_x_get_y` variant of
 * `PromotionApplicationMethod`.
 */
export type PromotionBuyXGetYMethod = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Shape $ (Value): integer. Number of qualifying units needed for one application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "buy_min_quantity": number;
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Shape $ (Value): {@link PromotionRuleGroup}. Which line items receive the discount. Required
     * for service_charge promotions, and for line_item promotions whose eligibility_rules include
     * any non-line-item condition (for example order.subtotal or a customer condition). It is
     * optional only when eligibility_rules consist entirely of line_item.* conditions (plus
     * matched_items.subtotal), in which case the matched items are used as the target. Omitting it
     * otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one
     * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
     * rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "discounted_item_rules": PromotionRuleGroup;
    /**
     * Shape $ (Value): number. Percentage to discount from reward items, from 1 to 100. Use 100 to
     * make the reward items free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off": number;
    /**
     * Shape $ (Value): integer. Maximum number of reward units discounted per application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "get_quantity": number;
    /**
     * Shape $ (Value): integer. Maximum number of times the buy_x_get_y promotion can apply to one
     * order. Omit for no limit beyond the qualifying and reward quantities. Format: int32.
     * minimum: 1.
     */
    "max_applications_per_order"?: number;
    /**
     * Shape $ (Value): {@link PromotionRuleGroup}. Rules that identify the items counted toward
     * buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with exactly one
     * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
     * rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "qualifying_item_rules": PromotionRuleGroup;
    /**
     * Shape $ (Value): {@link PromotionRecurrence}. Optional recurrence for subscription payments:
     * once applies to the first charged payment, repeating applies for period_count charged
     * payments, and forever applies to every payment. One-time orders apply the promotion once.
     * How often a promotion's discount repeats on a subscription: once, for a number of charged
     * payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Shape $ (Value): string. Which matching reward items receive the discount: the cheapest, the
     * highest priced, or those added first to the order. Defaults to cheapest. Default:
     * "cheapest". Value enum: "cheapest", "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added" | (string & {});
    /**
     * Shape $ (Value): string. Selects the buy_x_get_y discount effect and its allowed fields.
     * Value enum: "buy_x_get_y".
     */
    "type": "buy_x_get_y" | (string & {});
};
/**
 * Shape $ (Value): {@link PromotionBuyXGetYMethodRequest}. The `buy_x_get_y` variant of
 * `PromotionApplicationMethodInput`.
 */
export type PromotionBuyXGetYMethodRequest = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Shape $ (Value): integer. Number of qualifying units needed for one application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "buy_min_quantity": number;
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequest}. Which line items receive the discount.
     * Required for service_charge promotions, and for line_item promotions whose eligibility_rules
     * include any non-line-item condition (for example order.subtotal or a customer condition). It
     * is optional only when eligibility_rules consist entirely of line_item.* conditions (plus
     * matched_items.subtotal), in which case the matched items are used as the target. Omitting it
     * otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one
     * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
     * rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "discounted_item_rules": PromotionRuleGroupRequest;
    /**
     * Shape $ (Value): number. Percentage to discount from reward items, from 1 to 100. Use 100 to
     * make the reward items free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off": number;
    /**
     * Shape $ (Value): integer. Maximum number of reward units discounted per application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "get_quantity": number;
    /**
     * Shape $ (Value): integer. Maximum number of times the buy_x_get_y promotion can apply to one
     * order. Omit for no limit beyond the qualifying and reward quantities. Format: int32.
     * minimum: 1.
     */
    "max_applications_per_order"?: number;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequest}. Rules that identify the items counted
     * toward buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with exactly
     * one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups,
     * and a rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "qualifying_item_rules": PromotionRuleGroupRequest;
    /**
     * Shape $ (Value): {@link PromotionRecurrence}. Optional recurrence for subscription payments:
     * once applies to the first charged payment, repeating applies for period_count charged
     * payments, and forever applies to every payment. One-time orders apply the promotion once.
     * How often a promotion's discount repeats on a subscription: once, for a number of charged
     * payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Shape $ (Value): string. Which matching reward items receive the discount: the cheapest, the
     * highest priced, or those added first to the order. Defaults to cheapest. Default:
     * "cheapest". Value enum: "cheapest", "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added" | (string & {});
    /**
     * Shape $ (Value): string. Selects the buy_x_get_y discount effect and its allowed fields.
     * Value enum: "buy_x_get_y".
     */
    "type": "buy_x_get_y" | (string & {});
};
