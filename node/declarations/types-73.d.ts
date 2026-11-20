import type {
    SubscriptionTaxCalculationRequestInput,
    SubscriptionPlanTermsRequest,
    SubscriptionPlanTermsRequestInput,
    SubscriptionPromotion,
    SubscriptionScheduledPlanChange,
    SubscriptionServiceLocation,
    SubscriptionTax,
    SubscriptionPromotionPreviousAttributes,
    SubscriptionScheduledPlanChangePreviousAttributes,
    SubscriptionServiceLocationPreviousAttributes,
    SubscriptionTaxPreviousAttributes
} from './types-72.js';
import type {
    SubscriptionOfferTermsRequest,
    SubscriptionOfferTermsRequestInput,
    SubscriptionPausedDeliveryHold,
    SubscriptionPausedDeliveryHoldPreviousAttributes
} from './types-71.js';
import type {
    ExpandedCustomerSummary,
    ExpandedPaymentMethodSummary,
    ExpandedCustomerSummaryPreviousAttributes,
    ExpandedPaymentMethodSummaryPreviousAttributes,
    DisputesAcceptParams
} from './types-26.js';
import type {
    ExpandedSubscriptionPlanSummary,
    ExpandedSubscriptionPlanSummaryPreviousAttributes,
    FilesCompleteParams
} from './types-27.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-43.js';
import type { MoneyValue, MoneyValuePreviousAttributes } from './types-44.js';
import type { PartnerWebhookEnvelope, PauseSubscriptionRequestInput } from './types-50.js';
import type { PaymentErrorSummary, PaymentErrorSummaryPreviousAttributes } from './types-51.js';
import type { ReturnActor, ResponseMeta } from './types-62.js';
import type {
    SubscriptionBillingHold,
    SubscriptionCancellationDetails,
    SubscriptionDelivery,
    SubscriptionBillingHoldPreviousAttributes,
    SubscriptionCancellationDetailsPreviousAttributes
} from './types-69.js';
import type {
    SubscriptionDeliveryHold,
    SubscriptionEndAfter,
    SubscriptionGiftRecipient,
    SubscriptionIntervalOption,
    SubscriptionInventoryWait,
    SubscriptionLineItem,
    SubscriptionDeliveryHoldPreviousAttributes,
    SubscriptionDeliveryPreviousAttributes,
    SubscriptionEndAfterPreviousAttributes,
    SubscriptionGiftRecipientPreviousAttributes,
    SubscriptionIntervalOptionPreviousAttributes,
    SubscriptionInventoryWaitPreviousAttributes,
    SubscriptionLineItemPreviousAttributes
} from './types-70.js';
import type { InputValue } from '../runtime.js';
import type { ApplySubscriptionPromotionRequestInput } from './types-0.js';
import type { CancelSubscriptionRequestInput } from './types-5.js';
import type { ChangeSubscriptionPlanRequestInput, ChangeSubscriptionQuantityRequestInput } from './types-6.js';
import type {
    CreateSubscriptionAccessLinkRequestInput,
    CreateSubscriptionLineItemRequestInput,
    CreateSubscriptionRequestInput,
    CreateTaxCalculationCallbackRequestInput
} from './types-14.js';
import type { CustomersListAddressesParams } from './types-17.js';
import type { CreditNotesListAllocationsParams } from './types-15.js';
import type { RemoveSubscriptionPromotionsRequestInput, RenewSubscriptionRequestInput } from './types-61.js';
import type { InvoicesMarkUncollectibleParams } from './types-38.js';
import type { SkipSubscriptionCycleRequestInput } from './types-68.js';
import type { UpdateSubscriptionLineItemRequestInput, UpdateSubscriptionRequestInput } from './types-78.js';
import type { TaxJurisdiction, TaxJurisdictionPreviousAttributes } from './types-74.js';
/** Replaced as a whole: send every field you want to keep. */
export type SubscriptionTaxRequestInput = {
    /**
     * How the subscription's orders calculate tax while `enabled` is `true`. Omit it, or send
     * `null`, to use `tax.default_calculation` from your settings, where a `provided` default
     * means automatic. Not allowed while `enabled` is `false`. anyOf[1] (Value): {@link
     * SubscriptionTaxCalculationRequestInput}. Replaced as a whole: send every field you want to
     * keep. `automatic` calculates tax through your tax connection. `external` takes the tax your
     * tax calculation callback returns, and requires `components_source: callback`, because Flint
     * creates the subscription's orders and nobody can send their components. anyOf[2] (Value):
     * null.
     */
    "calculation"?: ((SubscriptionTaxCalculationRequestInput) | (null));
    /** Whether the subscription's orders calculate tax. */
    "enabled": boolean;
};
/**
 * Subscription terms from either a subscription plan or subscription offers, selected by `type`.
 */
export type SubscriptionTermsRequest = ((SubscriptionPlanTermsRequest) | (SubscriptionOfferTermsRequest) | (Record<string, unknown>));
/**
 * Subscription terms from either a subscription plan or subscription offers, selected by `type`.
 */
export type SubscriptionTermsRequestInput = ((SubscriptionPlanTermsRequestInput) | (SubscriptionOfferTermsRequestInput));
export type SubscriptionTrialEndingEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "actor"?: ReturnActor;
        "object": {
            "billing_anchor_day"?: number;
            "billing_hold"?: SubscriptionBillingHold;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            "completed_cycles": number;
            "contract_end_at"?: string;
            "contract_start_at"?: string;
            "created_at": string;
            "current_period_end_at"?: string;
            "current_period_start_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "deliveries_per_period": number;
            "delivery"?: SubscriptionDelivery;
            "delivery_hold"?: SubscriptionDeliveryHold;
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            "delivery_interval_count": number | null;
            "early_termination_fee_money"?: MoneyValue;
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            "expires_at": string | null;
            "external_reference_id"?: string;
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            "idempotency_key"?: string | null;
            "inventory_wait"?: SubscriptionInventoryWait;
            "is_awaiting_billing_schedule"?: boolean;
            "last_payment_error"?: PaymentErrorSummary;
            "line_items": Array<SubscriptionLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "missed_billing_at"?: string;
            "next_billing_at"?: string;
            "next_delivery_at": string | null;
            "next_retry_at": string | null;
            "open_renewal_order_id"?: string;
            "outstanding_money"?: MoneyValue;
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            "paused_at"?: string;
            "paused_delivery_hold": ((SubscriptionPausedDeliveryHold) | (null));
            "payment_link_id"?: string;
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "payment_method_due_at": string | null;
            "payment_method_id": string | null;
            "promotions": Array<SubscriptionPromotion>;
            "prorate_first_period": boolean;
            "recurring_subtotal_money": ((MoneyValue) | (null));
            "remaining_cycles": number | null;
            "remaining_prepaid_deliveries": number;
            "resume_requested_at": string | null;
            "scheduled_cancel_at": string | null;
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            "scheduled_promotions": Array<SubscriptionPromotion>;
            "scheduled_resume_at": string | null;
            "service_location"?: SubscriptionServiceLocation;
            "starts_at"?: string;
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            "subscription_id": string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions"?: Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            "tax"?: ((SubscriptionTax) | (null));
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            "test_clock_id"?: string;
            "trial_end_at"?: string;
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "subscription.trial_ending";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "actor"?: ReturnActor;
        "object": {
            "billing_anchor_day"?: number;
            "billing_hold"?: SubscriptionBillingHold;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            "completed_cycles": number;
            "contract_end_at"?: string;
            "contract_start_at"?: string;
            "created_at": string;
            "current_period_end_at"?: string;
            "current_period_start_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "deliveries_per_period": number;
            "delivery"?: SubscriptionDelivery;
            "delivery_hold"?: SubscriptionDeliveryHold;
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            "delivery_interval_count": number | null;
            "early_termination_fee_money"?: MoneyValue;
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            "expires_at": string | null;
            "external_reference_id"?: string;
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            "idempotency_key"?: string | null;
            "inventory_wait"?: SubscriptionInventoryWait;
            "is_awaiting_billing_schedule"?: boolean;
            "last_payment_error"?: PaymentErrorSummary;
            "line_items": Array<SubscriptionLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "missed_billing_at"?: string;
            "next_billing_at"?: string;
            "next_delivery_at": string | null;
            "next_retry_at": string | null;
            "open_renewal_order_id"?: string;
            "outstanding_money"?: MoneyValue;
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            "paused_at"?: string;
            "paused_delivery_hold": ((SubscriptionPausedDeliveryHold) | (null));
            "payment_link_id"?: string;
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "payment_method_due_at": string | null;
            "payment_method_id": string | null;
            "promotions": Array<SubscriptionPromotion>;
            "prorate_first_period": boolean;
            "recurring_subtotal_money": ((MoneyValue) | (null));
            "remaining_cycles": number | null;
            "remaining_prepaid_deliveries": number;
            "resume_requested_at": string | null;
            "scheduled_cancel_at": string | null;
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            "scheduled_promotions": Array<SubscriptionPromotion>;
            "scheduled_resume_at": string | null;
            "service_location"?: SubscriptionServiceLocation;
            "starts_at"?: string;
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            "subscription_id": string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions"?: Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            "tax"?: ((SubscriptionTax) | (null));
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            "test_clock_id"?: string;
            "trial_end_at"?: string;
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "subscription.trial_ending";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "subscription.trial_ending";
});
/**
 * The `subscription.trial_ending` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type SubscriptionTrialEndingInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  actor (Optional): {@link ReturnActor}. Who caused this event, captured when the change
     * commits. Omitted when the event predates actor attribution or attribution is unavailable.
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID. object (Required): object. The resource snapshot, without expansions. Webhooks
     * omit no additional fields. object.billing_anchor_day (Optional): integer. UTC day of the
     * month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format:
     * int32. minimum: 1. maximum: 31. object.billing_hold (Optional): {@link
     * SubscriptionBillingHold}. Configuration issue or automatic retry delaying billing, with the
     * first detection time. Flint retries automatically without starting payment recovery. Cleared
     * when billing succeeds, the schedule is replaced, the subscription is paused or canceled, or
     * a card decline starts payment recovery. Included only in merchant responses. Why
     * subscription billing is delayed, with the time Flint first detected it. A billing hold does
     * not mean the card was declined. object.billing_interval (Required): string. How often the
     * subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills
     * quarterly. A change applies from the next renewal that has not been paid; next_billing_at
     * does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * object.billing_interval_count (Required): integer. Number of billing_interval units between
     * charges. Changes with billing_interval. Format: int32. object.billing_interval_options
     * (Optional): Array of {@link SubscriptionIntervalOption}. Billing interval and count pairs
     * the subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * maxItems: 12. uniqueItems: true. object.billing_interval_options[] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer,
     * or subscription lets buyers choose. Prices of lines that ship are per delivery, and each
     * option charges for all deliveries in its period. Without a delivery cadence there is one
     * delivery per period, so every option bills the same line prices once per period. With a
     * delivery cadence, a longer period bills more deliveries of the lines that ship; other lines
     * bill once per period. For a different price per interval with no delivery cadence, create
     * separate plans. object.billing_schedule_owner (Required): string. Who supplies billing
     * dates: flint advances the schedule after each paid renewal; external uses dates you supply.
     * Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum:
     * "flint", "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancel_at_period_end
     * (Required): boolean. True when the subscription is scheduled to cancel at
     * scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo
     * with PATCH and cancel_at_period_end false. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_details
     * (Optional): {@link SubscriptionCancellationDetails}. Who asked to cancel, when, and why.
     * Present once a cancellation is requested, whether it takes effect at the end of the billing
     * period or right away. Omitted when no one asked, and removed when a scheduled cancellation
     * is undone. See cancellation_reason for voluntary and payment-related cancellations. The
     * cancellation request behind a scheduled or completed cancellation.
     * object.cancellation_reason (Optional): string. Why the subscription is canceled or scheduled
     * to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the
     * signup order, end_after_reached when the automatic ending agreement is reached,
     * cancellation_details.requested_by when recorded, payment_failed for other canceled
     * subscriptions without a requester, and other for a scheduled cancellation without a
     * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
     * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * object.completed_cycles (Required): integer. Billing cycles charged so far, including cycles
     * imported with `billing_start.completed_cycles`. The next renewal order's
     * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * object.contract_end_at (Optional): string. When the recorded contract term ends. Does not
     * move when the subscription pauses or changes plan. Flint does not stop the buyer from
     * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.contract_start_at (Optional): string. When the recorded contract term started. Does
     * not move when the subscription pauses or changes plan. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_period_end_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_period_start_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link ExpandedCustomerSummary}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. The customer
     * this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deliveries_per_period (Required): integer. Deliveries paid for by one billing period,
     * from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are
     * per delivery. Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
     * SubscriptionDelivery}. Saved delivery preference with the current delivery method display.
     * Write responses use the same display as GET: fixed shipping reflects the current method
     * configuration, and quoted shipping shows the last paid shipping amount when available. A
     * subscription's saved delivery preference: method, destination, recipient, shipping cost, and
     * who last changed it. object.delivery_hold (Optional): {@link SubscriptionDeliveryHold}.
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it. object.delivery_interval (Required): string
     * or null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is
     * set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly",
     * "yearly", null. object.delivery_interval_count (Required): integer or null. Number of
     * delivery intervals between deliveries. Null when no separate delivery cadence is set.
     * Format: int32. minimum: 1. object.early_termination_fee_money (Optional): {@link
     * MoneyValue}. The fee in the recorded contract terms. Present whenever those terms include a
     * fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later
     * plan changes do not change this fee. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.end_after (Required): {@link SubscriptionEndAfter} or
     * null. Recorded automatic end condition. Null when no automatic end is set. Cycles count
     * charged billing periods, including imported completed_cycles. Pauses and skips do not use
     * cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
     * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
     * without consuming its entitlement. Ending never refunds. object.end_after.anyOf[1] (Value):
     * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
     * charged billing cycles or a saved local calendar date. object.end_after.anyOf[2] (Value):
     * null. object.expires_at (Required): string or null. Projected end under the current schedule
     * and committed plan changes, including an earlier scheduled cancellation. A date limit
     * preserves already-paid entitlement without requiring a future charge schedule. A reached
     * cycle limit uses the last paid period end, or current_period_end_at when no paid history
     * exists; that fallback includes any skip or pause extension. A cycle limit with cycles left
     * needs a future charge schedule unless a known scheduled cancellation determines the end.
     * Paid deliveries extend the end to the last paid delivery when it is later. An indefinite
     * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
     * determined or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_recipient (Required): {@link SubscriptionGiftRecipient} or
     * null. Who receives the gift, when this is a gift subscription. customer_id stays the
     * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
     * erased. Null when the subscription isn't a gift. object.gift_recipient.anyOf[1] (Value):
     * {@link SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
     * purchaser, who pays, gets receipts and reminders, and manages the subscription.
     * delivery.recipient stays the ship-to address. object.gift_recipient.anyOf[2] (Value): null.
     * object.idempotency_key (Optional): string or null. The Idempotency-Key of the request that
     * created this resource. `null` when that request sent no key, Flint created the resource, the
     * reader isn't the caller that created it (another app install, a buyer, or the merchant
     * reading an app's or buyer's record), or the caller that created an older record is unknown.
     * Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed
     * responses and webhook events, can return `null`. To find a key that a replay returns as
     * `null`, read the resource. Buyer sessions on routes shared with merchants get `null`.
     * `/v1/me` responses do not include this field. object.inventory_wait (Optional): {@link
     * SubscriptionInventoryWait}. Renewal waiting for stock. Buyers receive only started_at. Shows
     * that a subscription renewal is waiting for inventory, with the order and invoice involved
     * and when the wait started. object.is_awaiting_billing_schedule (Optional): boolean. True
     * while an active or trialing subscription on an external billing schedule has no next billing
     * date. object.last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal
     * payment failure, present only while status is past_due and the latest payment failed. Buyer
     * responses omit merchant remediation and sensitive decline signals. A summary of why a
     * payment attempt failed, with a normalized error code, a message, the failure time, and
     * remediation. object.line_items (Required): Array of {@link SubscriptionLineItem}. What each
     * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that
     * variant's current catalog price, which then stays until the line changes again.
     * object.line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
     * recurring purchase. object.merchant_id (Required): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and
     * size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.missed_billing_at (Optional): string. The billing date whose payment failed, as an
     * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_billing_at (Optional): string. When Flint next starts a
     * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active
     * subscription has a billing date and isn't set to cancel at the end of its period. Absent
     * when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at,
     * a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed
     * billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at
     * next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at
     * scheduled_cancel_at, and an external schedule awaiting a date reports
     * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.next_delivery_at (Required): string or null. When the next prepaid delivery order is
     * due, shifted by a timed pause. Null when the subscription has an indefinite pause, no
     * delivery is scheduled, or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_retry_at (Required): string or null. Recorded automatic
     * payment retry time. Null when no retry time is available. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.open_renewal_order_id (Optional): string. ID of the paid
     * renewal order whose shipment has not been dispatched. It keeps its committed delivery
     * destination after preference changes and cancellation. Absent when no such renewal order
     * exists. Only renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Optional): {@link MoneyValue}.
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.pause_reason (Optional): string. Why the subscription is paused: merchant for a pause
     * made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed". object.paused_at (Optional):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.paused_delivery_hold (Required): {@link SubscriptionPausedDeliveryHold} or null. The
     * delivery hold that expired and paused the subscription. Null when no stored expiry reason
     * exists, including a manual pause during an active hold, or the subscription is no longer
     * paused for delivery action. object.paused_delivery_hold.anyOf[1] (Value): {@link
     * SubscriptionPausedDeliveryHold}. The delivery hold that expired and paused this
     * subscription. A manual pause during an active hold is not an expiry. This field does not
     * imply a refund. object.paused_delivery_hold.anyOf[2] (Value): null. object.payment_link_id
     * (Optional): string. The payment link that started this subscription, when there was one.
     * Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_method (Optional): {@link
     * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes `payment_method`;
     * `null` when expanded and there is no related payment method. object.payment_method.anyOf[1]
     * (Value): {@link ExpandedPaymentMethodSummary}. A payment method's summary fields, including
     * type, status, and card details, returned when the payment method is expanded.
     * object.payment_method.anyOf[2] (Value): null. object.payment_method_due_at (Required):
     * string or null. First charge boundary while no card is bound: the later of trial_end_at and
     * next_billing_at during a trial, or the next billing date for an imported period, even when
     * that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a
     * card at its boundary cancels without an order or payment attempt. At that boundary, an
     * imported subscription with a positive charge that still has no card enters its normal
     * dunning schedule without a payment attempt. For an imported subscription, a zero charge
     * completes the renewal without a card and the deadline advances to the following boundary.
     * Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel
     * at period end), an active or trialing subscription is in its final end_after cycle, or an
     * external schedule has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method_id (Required): string or null. Saved payment method used for renewal
     * charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing
     * the customer's default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * object.promotions (Required): Array of {@link SubscriptionPromotion}. Recurring promotions
     * applying to the next charged cycle. Scheduled attachments are listed in
     * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
     * excluded. object.promotions[] (Value): {@link SubscriptionPromotion}. A recurring promotion
     * applied to a subscription, including its recurrence and remaining discounted cycles.
     * object.prorate_first_period (Required): boolean. Whether this subscription was created to
     * prorate its first anchored paid period. Set at creation and never changes; starting on the
     * anchor day still bills a normal full period. object.recurring_subtotal_money (Required):
     * {@link MoneyValue} or null. What one billing period's items cost before discounts, shipping,
     * and tax: each line's price with modifiers, times quantity. It changes when items, quantity,
     * or the plan change; editing the plan doesn't change it. For the next charge, use a
     * subscription preview in next_renewal mode. `null` when a cancellation succeeds but Flint
     * couldn't load the billing snapshot afterward, so the cancel response returns it as null.
     * Retrieve the subscription again to get it. object.recurring_subtotal_money.anyOf[1] (Value):
     * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.recurring_subtotal_money.anyOf[2] (Value): null.
     * object.remaining_cycles (Required): integer or null. Charges left for a cycle limit, bounded
     * by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription
     * is canceled. Format: uint64. minimum: 0. object.remaining_prepaid_deliveries (Required):
     * integer. Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
     * with deliveries_per_period minus one. When delivery_hold is present and this count is
     * positive, fixing delivery releases an already-paid delivery with shipping waived and no new
     * charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds,
     * and pauses consume none. Frozen on cancellation for manual refunds. Format: int32. minimum:
     * 0. maximum: 23. object.resume_requested_at (Required): string or null. When Flint accepted a
     * pending resume request. Set only while paused with a resume Flint has not applied yet.
     * Clears when Flint resumes the subscription or refuses the request. `null` when the
     * subscription isn't paused or no resume request is pending. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.scheduled_cancel_at (Required): string or null. When the
     * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
     * while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
     * delivery when it is later. Null when cancel_at_period_end is false or no cancellation time
     * is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
     * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
     * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
     * object.scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}.
     * Frozen target terms that apply at the next charged renewal.
     * object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions (Required):
     * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after the
     * next charged cycle, completed_cycles + 1. Always present; empty when no promotions are
     * scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A recurring
     * promotion applied to a subscription, including its recurrence and remaining discounted
     * cycles. object.scheduled_resume_at (Required): string or null. When a pause with a length
     * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on
     * a prepaid subscription, or billing intervals otherwise. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_location (Optional): {@link SubscriptionServiceLocation}. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified. The
     * address where a subscription's service is delivered, with the saved customer address it came
     * from. object.starts_at (Optional): string. When a scheduled start's first billing period
     * begins. Present only until that first payment succeeds. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Where the subscription is in its
     * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". object.subscription_id (Required):
     * string. Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Optional): Array of string.
     * Merchant actions allowed by the subscription's state. A route can still refuse a listed
     * action for a transient reason, such as a renewal already in progress, with its own error.
     * Always present with merchant credentials. [] enum: "cancel", "pause", "resume",
     * "skip_cycle", "renew", "change_plan", "change_quantity". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
     * "change_quantity". object.tax (Optional): {@link SubscriptionTax} or null. The tax the
     * subscription's renewal, setup fee and plan change orders use. `null` when they follow
     * `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to
     * merchant credentials; omitted for buyer credentials. Always present with merchant
     * credentials. object.tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax the
     * subscription's renewal, setup fee and plan change orders use. Returned only to merchant
     * credentials; omitted for buyer credentials. object.tax.anyOf[2] (Value): null.
     * object.terms_type (Required): string. Terms come from the subscription plan in
     * subscription_plan_id, or from subscription offers identified on each offer line by
     * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * object.test_clock_id (Optional): string. ID of the test clock the subscription's customer
     * was created on. The subscription bills at the clock's time. Present only when the customer
     * is on a test clock. Included only in merchant responses and omitted from buyer responses.
     * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.trial_end_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.upcoming_delivery_hold
     * (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next
     * renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected
     * for an upcoming renewal that will hold the subscription's delivery, and who can fix it.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with every change to the
     * subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     */
    "data"?: {
        /**
         * Who caused this event, captured when the change commits. Omitted when the event predates
         * actor attribution or attribution is unavailable. Who performed a return action: a buyer,
         * merchant, integration, or the system, with an optional ID.
         */
        "actor"?: ReturnActor;
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_anchor_day (Optional): integer. UTC day of the month used for monthly and yearly
         * billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
         * billing_hold (Optional): {@link SubscriptionBillingHold}. Configuration issue or
         * automatic retry delaying billing, with the first detection time. Flint retries
         * automatically without starting payment recovery. Cleared when billing succeeds, the
         * schedule is replaced, the subscription is paused or canceled, or a card decline starts
         * payment recovery. Included only in merchant responses. Why subscription billing is
         * delayed, with the time Flint first detected it. A billing hold does not mean the card
         * was declined. billing_interval (Required): string. How often the subscription bills now.
         * Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change
         * applies from the next renewal that has not been paid; next_billing_at does not move.
         * Value enum: "daily", "weekly", "monthly", "yearly". billing_interval_count (Required):
         * integer. Number of billing_interval units between charges. Changes with
         * billing_interval. Format: int32. billing_interval_options (Optional): Array of {@link
         * SubscriptionIntervalOption}. Billing interval and count pairs the subscription can
         * switch to. For a subscription on a plan, they follow the plan's current
         * billing_interval_options. A subscription that came from an offer keeps the pairs the
         * offer had at signup. Prices of lines that ship are per delivery. Each option charges for
         * all deliveries in its period. Changing the interval does not change the per-delivery
         * price. maxItems: 12. uniqueItems: true. billing_interval_options[] (Value): {@link
         * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan,
         * offer, or subscription lets buyers choose. Prices of lines that ship are per delivery,
         * and each option charges for all deliveries in its period. Without a delivery cadence
         * there is one delivery per period, so every option bills the same line prices once per
         * period. With a delivery cadence, a longer period bills more deliveries of the lines that
         * ship; other lines bill once per period. For a different price per interval with no
         * delivery cadence, create separate plans. billing_schedule_owner (Required): string. Who
         * supplies billing dates: flint advances the schedule after each paid renewal; external
         * uses dates you supply. Change it with billing_schedule on PATCH
         * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
         * billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". cancel_at_period_end (Required): boolean.
         * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with
         * POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
         * cancel_at_period_end false. canceled_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * signup_order_refunded when an automatic inventory refund fully refunds the signup order,
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * completed_cycles (Required): integer. Billing cycles charged so far, including cycles
         * imported with `billing_start.completed_cycles`. The next renewal order's
         * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
         * contract_end_at (Optional): string. When the recorded contract term ends. Does not move
         * when the subscription pauses or changes plan. Flint does not stop the buyer from
         * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". contract_start_at
         * (Optional): string. When the recorded contract term started. Does not move when the
         * subscription pauses or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_end_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_start_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
         * delivery (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the
         * current delivery method display. Write responses use the same display as GET: fixed
         * shipping reflects the current method configuration, and quoted shipping shows the last
         * paid shipping amount when available. A subscription's saved delivery preference: method,
         * destination, recipient, shipping cost, and who last changed it. delivery_hold
         * (Optional): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
         * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
         * deliveries because its delivery method or destination no longer works, and who can fix
         * it. delivery_interval (Required): string or null. Delivery cadence frozen from the plan.
         * Null when no separate delivery cadence is set; one delivery is made per billing period.
         * Value enum: "daily", "weekly", "monthly", "yearly", null. delivery_interval_count
         * (Required): integer or null. Number of delivery intervals between deliveries. Null when
         * no separate delivery cadence is set. Format: int32. minimum: 1.
         * early_termination_fee_money (Optional): {@link MoneyValue}. The fee in the recorded
         * contract terms. Present whenever those terms include a fee. It applies only to a
         * cancellation before contract_end_at. Flint never charges it. Later plan changes do not
         * change this fee. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. end_after (Required): {@link SubscriptionEndAfter} or null. Recorded
         * automatic end condition. Null when no automatic end is set. Cycles count charged billing
         * periods, including imported completed_cycles. Pauses and skips do not use cycles.
         * Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
         * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
         * without consuming its entitlement. Ending never refunds. end_after.anyOf[1] (Value):
         * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
         * charged billing cycles or a saved local calendar date. end_after.anyOf[2] (Value): null.
         * expires_at (Required): string or null. Projected end under the current schedule and
         * committed plan changes, including an earlier scheduled cancellation. A date limit
         * preserves already-paid entitlement without requiring a future charge schedule. A reached
         * cycle limit uses the last paid period end, or current_period_end_at when no paid history
         * exists; that fallback includes any skip or pause extension. A cycle limit with cycles
         * left needs a future charge schedule unless a known scheduled cancellation determines the
         * end. Paid deliveries extend the end to the last paid delivery when it is later. An
         * indefinite pause with paid deliveries owed makes the end unknown. Null when the end
         * cannot be determined or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". gift_recipient (Required): {@link SubscriptionGiftRecipient} or null.
         * Who receives the gift, when this is a gift subscription. customer_id stays the
         * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
         * erased. Null when the subscription isn't a gift. gift_recipient.anyOf[1] (Value): {@link
         * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
         * purchaser, who pays, gets receipts and reminders, and manages the subscription.
         * delivery.recipient stays the ship-to address. gift_recipient.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource. `null` when that request sent no key, Flint created the resource,
         * the reader isn't the caller that created it (another app install, a buyer, or the
         * merchant reading an app's or buyer's record), or the caller that created an older record
         * is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer sessions on routes shared with
         * merchants get `null`. `/v1/me` responses do not include this field. inventory_wait
         * (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for stock. Buyers receive
         * only started_at. Shows that a subscription renewal is waiting for inventory, with the
         * order and invoice involved and when the wait started. is_awaiting_billing_schedule
         * (Optional): boolean. True while an active or trialing subscription on an external
         * billing schedule has no next billing date. last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Latest renewal payment failure, present only while status is
         * past_due and the latest payment failed. Buyer responses omit merchant remediation and
         * sensitive decline signals. A summary of why a payment attempt failed, with a normalized
         * error code, a message, the failure time, and remediation. line_items (Required): Array
         * of {@link SubscriptionLineItem}. What each renewal bills. Plan edits do not change it.
         * Adding, changing or swapping a line takes that variant's current catalog price, which
         * then stays until the line changes again. line_items[] (Value): {@link
         * SubscriptionLineItem}. An item included in a customer's recurring purchase. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them.
         * missed_billing_at (Optional): string. The billing date whose payment failed, as an
         * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_billing_at (Optional): string. When Flint next starts a
         * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or
         * active subscription has a billing date and isn't set to cancel at the end of its period.
         * Absent when no renewal is scheduled: a subscription in its final billing cycle ends at
         * expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports
         * the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete
         * one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel
         * ends at scheduled_cancel_at, and an external schedule awaiting a date reports
         * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * next_delivery_at (Required): string or null. When the next prepaid delivery order is
         * due, shifted by a timed pause. Null when the subscription has an indefinite pause, no
         * delivery is scheduled, or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_retry_at (Required): string or null. Recorded automatic
         * payment retry time. Null when no retry time is available. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". open_renewal_order_id (Optional): string. ID of the paid renewal
         * order whose shipment has not been dispatched. It keeps its committed delivery
         * destination after preference changes and cancellation. Absent when no such renewal order
         * exists. Only renewal orders count; the signup order is not included. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". outstanding_money (Optional): {@link MoneyValue}.
         * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
         * payments and credits. Present only while status is past_due and a positive balance
         * remains. Monetary amount represented as integer minor units plus an ISO 4217 currency
         * code. pause_reason (Optional): string. Why the subscription is paused: merchant for a
         * pause made with your API key or dashboard, buyer for the buyer's own pause,
         * delivery_action_required for a pause during or after a delivery hold, and payment_failed
         * when renewal payment retries ran out and your dunning settings pause the subscription.
         * Omitted when the subscription is not paused. Value enum: "buyer",
         * "delivery_action_required", "merchant", "payment_failed". paused_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * paused_delivery_hold (Required): {@link SubscriptionPausedDeliveryHold} or null. The
         * delivery hold that expired and paused the subscription. Null when no stored expiry
         * reason exists, including a manual pause during an active hold, or the subscription is no
         * longer paused for delivery action. paused_delivery_hold.anyOf[1] (Value): {@link
         * SubscriptionPausedDeliveryHold}. The delivery hold that expired and paused this
         * subscription. A manual pause during an active hold is not an expiry. This field does not
         * imply a refund. paused_delivery_hold.anyOf[2] (Value): null. payment_link_id (Optional):
         * string. The payment link that started this subscription, when there was one. Example:
         * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_method (Optional): {@link
         * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes
         * `payment_method`; `null` when expanded and there is no related payment method.
         * payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. payment_method.anyOf[2] (Value): null. payment_method_due_at
         * (Required): string or null. First charge boundary while no card is bound: the later of
         * trial_end_at and next_billing_at during a trial, or the next billing date for an
         * imported period, even when that cycle's charge is zero. Recomputed when the schedule
         * changes. A trial still without a card at its boundary cancels without an order or
         * payment attempt. At that boundary, an imported subscription with a positive charge that
         * still has no card enters its normal dunning schedule without a payment attempt. For an
         * imported subscription, a zero charge completes the renewal without a card and the
         * deadline advances to the following boundary. Null when a card is bound, collection is
         * not scheduled (paused, canceled, or set to cancel at period end), an active or trialing
         * subscription is in its final end_after cycle, or an external schedule has no known
         * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method_id
         * (Required): string or null. Saved payment method used for renewal charges. Null when no
         * card is bound. Bind a card to this subscription with PATCH; changing the customer's
         * default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". promotions
         * (Required): Array of {@link SubscriptionPromotion}. Recurring promotions applying to the
         * next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when
         * none apply; signup-only and exhausted promotions are excluded. promotions[] (Value):
         * {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. prorate_first_period
         * (Required): boolean. Whether this subscription was created to prorate its first anchored
         * paid period. Set at creation and never changes; starting on the anchor day still bills a
         * normal full period. recurring_subtotal_money (Required): {@link MoneyValue} or null.
         * What one billing period's items cost before discounts, shipping, and tax: each line's
         * price with modifiers, times quantity. It changes when items, quantity, or the plan
         * change; editing the plan doesn't change it. For the next charge, use a subscription
         * preview in next_renewal mode. `null` when a cancellation succeeds but Flint couldn't
         * load the billing snapshot afterward, so the cancel response returns it as null. Retrieve
         * the subscription again to get it. recurring_subtotal_money.anyOf[1] (Value): {@link
         * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. recurring_subtotal_money.anyOf[2] (Value): null. remaining_cycles
         * (Required): integer or null. Charges left for a cycle limit, bounded by an earlier
         * scheduled cancellation. Null when there is no cycle limit or the subscription is
         * canceled. Format: uint64. minimum: 0. remaining_prepaid_deliveries (Required): integer.
         * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with
         * deliveries_per_period minus one. When delivery_hold is present and this count is
         * positive, fixing delivery releases an already-paid delivery with shipping waived and no
         * new charge. A next_renewal preview still estimates the next paid billing cycle. Skips,
         * holds, and pauses consume none. Frozen on cancellation for manual refunds. Format:
         * int32. minimum: 0. maximum: 23. resume_requested_at (Required): string or null. When
         * Flint accepted a pending resume request. Set only while paused with a resume Flint has
         * not applied yet. Clears when Flint resumes the subscription or refuses the request.
         * `null` when the subscription isn't paused or no resume request is pending. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". scheduled_cancel_at (Required): string or
         * null. When the scheduled cancellation takes effect: trial_end_at while trialing,
         * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
         * extend it to the last paid delivery when it is later. Null when cancel_at_period_end is
         * false or no cancellation time is available. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_plan_change (Required): {@link
         * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged
         * renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null
         * on PATCH; replace through change-plan. scheduled_plan_change.anyOf[1] (Value): {@link
         * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
         * renewal. scheduled_plan_change.anyOf[2] (Value): null. scheduled_promotions (Required):
         * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after
         * the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
         * are scheduled. scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
         * recurring promotion applied to a subscription, including its recurrence and remaining
         * discounted cycles. scheduled_resume_at (Required): string or null. When a pause with a
         * length (pause_duration_cycles) resumes on its own: that many delivery intervals after
         * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
         * subscription is not paused or the pause has no length, such as a pause until you resume
         * it or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_location (Optional): {@link
         * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. The address where a subscription's service is
         * delivered, with the saved customer address it came from. starts_at (Optional): string.
         * When a scheduled start's first billing period begins. Present only until that first
         * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Where the subscription is in its lifecycle. Each value says what it means. Value
         * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
         * subscription_id (Required): string. Stable identifier of the subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_plan (Optional): {@link
         * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. Subscription plan ID. Omitted when terms_type
         * is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions
         * (Optional): Array of string. Merchant actions allowed by the subscription's state. A
         * route can still refuse a listed action for a transient reason, such as a renewal already
         * in progress, with its own error. Always present with merchant credentials. [] enum:
         * "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
         * supported_actions[] (Value): string. Value enum: "cancel", "pause", "resume",
         * "skip_cycle", "renew", "change_plan", "change_quantity". tax (Optional): {@link
         * SubscriptionTax} or null. The tax the subscription's renewal, setup fee and plan change
         * orders use. `null` when they follow `tax.default_enabled` and `tax.default_calculation`
         * from your settings. Returned only to merchant credentials; omitted for buyer
         * credentials. Always present with merchant credentials. tax.anyOf[1] (Value): {@link
         * SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change orders
         * use. Returned only to merchant credentials; omitted for buyer credentials. tax.anyOf[2]
         * (Value): null. terms_type (Required): string. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * test_clock_id (Optional): string. ID of the test clock the subscription's customer was
         * created on. The subscription bills at the clock's time. Present only when the customer
         * is on a test clock. Included only in merchant responses and omitted from buyer
         * responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". trial_end_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * upcoming_delivery_hold (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery
         * issue forecast for the next renewal at renewal_at. Mutually exclusive with
         * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
         * subscription's delivery, and who can fix it. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the subscription, including renewals and other
         * changes Flint makes. Send it as `expected_version` to apply an update only if nothing
         * changed. Format: uint64. minimum: 0.
         */
        "object": {
            /**
             * UTC day of the month used for monthly and yearly billing. Applies only to
             * Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
             */
            "billing_anchor_day"?: number;
            /**
             * Configuration issue or automatic retry delaying billing, with the first detection
             * time. Flint retries automatically without starting payment recovery. Cleared when
             * billing succeeds, the schedule is replaced, the subscription is paused or canceled,
             * or a card decline starts payment recovery. Included only in merchant responses. Why
             * subscription billing is delayed, with the time Flint first detected it. A billing
             * hold does not mean the card was declined.
             */
            "billing_hold"?: SubscriptionBillingHold;
            /**
             * How often the subscription bills now. Read with billing_interval_count: monthly with
             * a count of 3 bills quarterly. A change applies from the next renewal that has not
             * been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly",
             * "yearly".
             */
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            /**
             * Number of billing_interval units between charges. Changes with billing_interval.
             * Format: int32.
             */
            "billing_interval_count": number;
            /**
             * Billing interval and count pairs the subscription can switch to. For a subscription
             * on a plan, they follow the plan's current billing_interval_options. A subscription
             * that came from an offer keeps the pairs the offer had at signup. Prices of lines
             * that ship are per delivery. Each option charges for all deliveries in its period.
             * Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
             * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
             * choose. Prices of lines that ship are per delivery, and each option charges for all
             * deliveries in its period. Without a delivery cadence there is one delivery per
             * period, so every option bills the same line prices once per period. With a delivery
             * cadence, a longer period bills more deliveries of the lines that ship; other lines
             * bill once per period. For a different price per interval with no delivery cadence,
             * create separate plans.
             */
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            /**
             * Who supplies billing dates: flint advances the schedule after each paid renewal;
             * external uses dates you supply. Change it with billing_schedule on PATCH
             * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
             */
            "billing_schedule_owner": "flint" | "external" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "billing_schedule_waiting_started_at"?: string;
            /**
             * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule
             * with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
             * cancel_at_period_end false.
             */
            "cancel_at_period_end": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who asked to cancel, when, and why. Present once a cancellation is requested,
             * whether it takes effect at the end of the billing period or right away. Omitted when
             * no one asked, and removed when a scheduled cancellation is undone. See
             * cancellation_reason for voluntary and payment-related cancellations. The
             * cancellation request behind a scheduled or completed cancellation.
             */
            "cancellation_details"?: SubscriptionCancellationDetails;
            /**
             * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
             * when an automatic inventory refund fully refunds the signup order, end_after_reached
             * when the automatic ending agreement is reached, cancellation_details.requested_by
             * when recorded, payment_failed for other canceled subscriptions without a requester,
             * and other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            /**
             * Billing cycles charged so far, including cycles imported with
             * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is
             * this number plus one. Format: uint64. minimum: 0.
             */
            "completed_cycles": number;
            /**
             * When the recorded contract term ends. Does not move when the subscription pauses or
             * changes plan. Flint does not stop the buyer from canceling earlier. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_end_at"?: string;
            /**
             * When the recorded contract term started. Does not move when the subscription pauses
             * or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_start_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_end_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_start_at"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * Deliveries paid for by one billing period, from 1 to 24. One when no separate
             * delivery cadence is set. Prices of lines that ship are per delivery. Format: int32.
             * minimum: 1. maximum: 24.
             */
            "deliveries_per_period": number;
            /**
             * Saved delivery preference with the current delivery method display. Write responses
             * use the same display as GET: fixed shipping reflects the current method
             * configuration, and quoted shipping shows the last paid shipping amount when
             * available. A subscription's saved delivery preference: method, destination,
             * recipient, shipping cost, and who last changed it.
             */
            "delivery"?: SubscriptionDelivery;
            /**
             * Current delivery issue that blocks collection. Mutually exclusive with
             * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery
             * method or destination no longer works, and who can fix it.
             */
            "delivery_hold"?: SubscriptionDeliveryHold;
            /**
             * Delivery cadence frozen from the plan. Null when no separate delivery cadence is
             * set; one delivery is made per billing period. Value enum: "daily", "weekly",
             * "monthly", "yearly", null.
             */
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            /**
             * Number of delivery intervals between deliveries. Null when no separate delivery
             * cadence is set. Format: int32. minimum: 1.
             */
            "delivery_interval_count": number | null;
            /**
             * The fee in the recorded contract terms. Present whenever those terms include a fee.
             * It applies only to a cancellation before contract_end_at. Flint never charges it.
             * Later plan changes do not change this fee. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "early_termination_fee_money"?: MoneyValue;
            /**
             * Recorded automatic end condition. Null when no automatic end is set. Cycles count
             * charged billing periods, including imported completed_cycles. Pauses and skips do
             * not use cycles. Already-paid prepaid deliveries continue on their shifted dates,
             * even beyond the end date, and cancellation waits for the last remaining delivery.
             * Skipping defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1] (Value): {@link SubscriptionEndAfter}. The subscription's automatic end
             * condition, measured by charged billing cycles or a saved local calendar date.
             * anyOf[2] (Value): null.
             */
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            /**
             * Projected end under the current schedule and committed plan changes, including an
             * earlier scheduled cancellation. A date limit preserves already-paid entitlement
             * without requiring a future charge schedule. A reached cycle limit uses the last paid
             * period end, or current_period_end_at when no paid history exists; that fallback
             * includes any skip or pause extension. A cycle limit with cycles left needs a future
             * charge schedule unless a known scheduled cancellation determines the end. Paid
             * deliveries extend the end to the last paid delivery when it is later. An indefinite
             * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
             * determined or the subscription is canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Who receives the gift, when this is a gift subscription. customer_id stays the
             * purchaser. Flint clears it when the subscription ends and when the purchaser's data
             * is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@link
             * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
             * purchaser, who pays, gets receipts and reminders, and manages the subscription.
             * delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
             */
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer sessions on routes shared with merchants get
             * `null`. `/v1/me` responses do not include this field.
             */
            "idempotency_key"?: string | null;
            /**
             * Renewal waiting for stock. Buyers receive only started_at. Shows that a subscription
             * renewal is waiting for inventory, with the order and invoice involved and when the
             * wait started.
             */
            "inventory_wait"?: SubscriptionInventoryWait;
            /**
             * True while an active or trialing subscription on an external billing schedule has no
             * next billing date.
             */
            "is_awaiting_billing_schedule"?: boolean;
            /**
             * Latest renewal payment failure, present only while status is past_due and the latest
             * payment failed. Buyer responses omit merchant remediation and sensitive decline
             * signals. A summary of why a payment attempt failed, with a normalized error code, a
             * message, the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a
             * line takes that variant's current catalog price, which then stays until the line
             * changes again. [] (Value): {@link SubscriptionLineItem}. An item included in a
             * customer's recurring purchase.
             */
            "line_items": Array<SubscriptionLineItem>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The billing date whose payment failed, as an RFC3339 timestamp. Present only while
             * status is past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "missed_billing_at"?: string;
            /**
             * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present
             * only while a trialing or active subscription has a billing date and isn't set to
             * cancel at the end of its period. Absent when no renewal is scheduled: a subscription
             * in its final billing cycle ends at expires_at, a paused subscription resumes at
             * scheduled_resume_at, a past_due one reports the failed billing date in
             * missed_billing_at and retries at next_retry_at, an incomplete one retries at
             * next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at
             * scheduled_cancel_at, and an external schedule awaiting a date reports
             * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_billing_at"?: string;
            /**
             * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
             * subscription has an indefinite pause, no delivery is scheduled, or the subscription
             * is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_delivery_at": string | null;
            /**
             * Recorded automatic payment retry time. Null when no retry time is available. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_retry_at": string | null;
            /**
             * ID of the paid renewal order whose shipment has not been dispatched. It keeps its
             * committed delivery destination after preference changes and cancellation. Absent
             * when no such renewal order exists. Only renewal orders count; the signup order is
             * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "open_renewal_order_id"?: string;
            /**
             * Unpaid balance of the failed renewal order, including tax, shipping and discounts,
             * after payments and credits. Present only while status is past_due and a positive
             * balance remains. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "outstanding_money"?: MoneyValue;
            /**
             * Why the subscription is paused: merchant for a pause made with your API key or
             * dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
             * during or after a delivery hold, and payment_failed when renewal payment retries ran
             * out and your dunning settings pause the subscription. Omitted when the subscription
             * is not paused. Value enum: "buyer", "delivery_action_required", "merchant",
             * "payment_failed".
             */
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "paused_at"?: string;
            /**
             * The delivery hold that expired and paused the subscription. Null when no stored
             * expiry reason exists, including a manual pause during an active hold, or the
             * subscription is no longer paused for delivery action. anyOf[1] (Value): {@link
             * SubscriptionPausedDeliveryHold}. The delivery hold that expired and paused this
             * subscription. A manual pause during an active hold is not an expiry. This field does
             * not imply a refund. anyOf[2] (Value): null.
             */
            "paused_delivery_hold": ((SubscriptionPausedDeliveryHold) | (null));
            /**
             * The payment link that started this subscription, when there was one. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * Present only when `expand` includes `payment_method`; `null` when expanded and there
             * is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * First charge boundary while no card is bound: the later of trial_end_at and
             * next_billing_at during a trial, or the next billing date for an imported period,
             * even when that cycle's charge is zero. Recomputed when the schedule changes. A trial
             * still without a card at its boundary cancels without an order or payment attempt. At
             * that boundary, an imported subscription with a positive charge that still has no
             * card enters its normal dunning schedule without a payment attempt. For an imported
             * subscription, a zero charge completes the renewal without a card and the deadline
             * advances to the following boundary. Null when a card is bound, collection is not
             * scheduled (paused, canceled, or set to cancel at period end), an active or trialing
             * subscription is in its final end_after cycle, or an external schedule has no known
             * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "payment_method_due_at": string | null;
            /**
             * Saved payment method used for renewal charges. Null when no card is bound. Bind a
             * card to this subscription with PATCH; changing the customer's default alone does not
             * bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string | null;
            /**
             * Recurring promotions applying to the next charged cycle. Scheduled attachments are
             * listed in scheduled_promotions. Empty when none apply; signup-only and exhausted
             * promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A recurring
             * promotion applied to a subscription, including its recurrence and remaining
             * discounted cycles.
             */
            "promotions": Array<SubscriptionPromotion>;
            /**
             * Whether this subscription was created to prorate its first anchored paid period. Set
             * at creation and never changes; starting on the anchor day still bills a normal full
             * period.
             */
            "prorate_first_period": boolean;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. `null` when a cancellation succeeds but
             * Flint couldn't load the billing snapshot afterward, so the cancel response returns
             * it as null. Retrieve the subscription again to get it. anyOf[1] (Value): {@link
             * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code. anyOf[2] (Value): null.
             */
            "recurring_subtotal_money": ((MoneyValue) | (null));
            /**
             * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
             * when there is no cycle limit or the subscription is canceled. Format: uint64.
             * minimum: 0.
             */
            "remaining_cycles": number | null;
            /**
             * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
             * with deliveries_per_period minus one. When delivery_hold is present and this count
             * is positive, fixing delivery releases an already-paid delivery with shipping waived
             * and no new charge. A next_renewal preview still estimates the next paid billing
             * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual
             * refunds. Format: int32. minimum: 0. maximum: 23.
             */
            "remaining_prepaid_deliveries": number;
            /**
             * When Flint accepted a pending resume request. Set only while paused with a resume
             * Flint has not applied yet. Clears when Flint resumes the subscription or refuses the
             * request. `null` when the subscription isn't paused or no resume request is pending.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "resume_requested_at": string | null;
            /**
             * When the scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_cancel_at": string | null;
            /**
             * Frozen target terms for the next charged renewal. Null when no plan change is
             * scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through
             * change-plan. anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
             * target terms that apply at the next charged renewal. anyOf[2] (Value): null.
             */
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            /**
             * Attached promotions whose first_cycle is after the next charged cycle,
             * completed_cycles + 1. Always present; empty when no promotions are scheduled. []
             * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a
             * subscription, including its recurrence and remaining discounted cycles.
             */
            "scheduled_promotions": Array<SubscriptionPromotion>;
            /**
             * When a pause with a length (pause_duration_cycles) resumes on its own: that many
             * delivery intervals after paused_at on a prepaid subscription, or billing intervals
             * otherwise. Null when the subscription is not paused or the pause has no length, such
             * as a pause until you resume it or the pause Flint starts when a delivery hold runs
             * out. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_resume_at": string | null;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The address where a subscription's service is delivered, with the
             * saved customer address it came from.
             */
            "service_location"?: SubscriptionServiceLocation;
            /**
             * When a scheduled start's first billing period begins. Present only until that first
             * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "starts_at"?: string;
            /**
             * Where the subscription is in its lifecycle. Each value says what it means. Value
             * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
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
            /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Merchant actions allowed by the subscription's state. A route can still refuse a
             * listed action for a transient reason, such as a renewal already in progress, with
             * its own error. Always present with merchant credentials. [] enum: "cancel", "pause",
             * "resume", "skip_cycle", "renew", "change_plan", "change_quantity". [] (Value):
             * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew",
             * "change_plan", "change_quantity".
             */
            "supported_actions"?: Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            /**
             * The tax the subscription's renewal, setup fee and plan change orders use. `null`
             * when they follow `tax.default_enabled` and `tax.default_calculation` from your
             * settings. Returned only to merchant credentials; omitted for buyer credentials.
             * Always present with merchant credentials. anyOf[1] (Value): {@link SubscriptionTax}.
             * The tax the subscription's renewal, setup fee and plan change orders use. Returned
             * only to merchant credentials; omitted for buyer credentials. anyOf[2] (Value): null.
             */
            "tax"?: ((SubscriptionTax) | (null));
            /**
             * Terms come from the subscription plan in subscription_plan_id, or from subscription
             * offers identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer".
             */
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            /**
             * ID of the test clock the subscription's customer was created on. The subscription
             * bills at the clock's time. Present only when the customer is on a test clock.
             * Included only in merchant responses and omitted from buyer responses. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "trial_end_at"?: string;
            /**
             * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
             * delivery_hold. A delivery problem detected for an upcoming renewal that will hold
             * the subscription's delivery, and who can fix it.
             */
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the subscription, including renewals and other changes
             * Flint makes. Send it as `expected_version` to apply an update only if nothing
             * changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "subscription.trial_ending". */
    "event_type"?: "subscription.trial_ending";
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
 * The `subscription.trial_ending` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type SubscriptionTrialEndingMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  actor (Optional): {@link ReturnActor}. Who caused this event, captured when the change
     * commits. Omitted when the event predates actor attribution or attribution is unavailable.
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID. object (Required): object. The resource snapshot, without expansions. Webhooks
     * omit no additional fields. object.billing_anchor_day (Optional): integer. UTC day of the
     * month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format:
     * int32. minimum: 1. maximum: 31. object.billing_hold (Optional): {@link
     * SubscriptionBillingHold}. Configuration issue or automatic retry delaying billing, with the
     * first detection time. Flint retries automatically without starting payment recovery. Cleared
     * when billing succeeds, the schedule is replaced, the subscription is paused or canceled, or
     * a card decline starts payment recovery. Included only in merchant responses. Why
     * subscription billing is delayed, with the time Flint first detected it. A billing hold does
     * not mean the card was declined. object.billing_interval (Required): string. How often the
     * subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills
     * quarterly. A change applies from the next renewal that has not been paid; next_billing_at
     * does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * object.billing_interval_count (Required): integer. Number of billing_interval units between
     * charges. Changes with billing_interval. Format: int32. object.billing_interval_options
     * (Optional): Array of {@link SubscriptionIntervalOption}. Billing interval and count pairs
     * the subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * maxItems: 12. uniqueItems: true. object.billing_interval_options[] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer,
     * or subscription lets buyers choose. Prices of lines that ship are per delivery, and each
     * option charges for all deliveries in its period. Without a delivery cadence there is one
     * delivery per period, so every option bills the same line prices once per period. With a
     * delivery cadence, a longer period bills more deliveries of the lines that ship; other lines
     * bill once per period. For a different price per interval with no delivery cadence, create
     * separate plans. object.billing_schedule_owner (Required): string. Who supplies billing
     * dates: flint advances the schedule after each paid renewal; external uses dates you supply.
     * Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum:
     * "flint", "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancel_at_period_end
     * (Required): boolean. True when the subscription is scheduled to cancel at
     * scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo
     * with PATCH and cancel_at_period_end false. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_details
     * (Optional): {@link SubscriptionCancellationDetails}. Who asked to cancel, when, and why.
     * Present once a cancellation is requested, whether it takes effect at the end of the billing
     * period or right away. Omitted when no one asked, and removed when a scheduled cancellation
     * is undone. See cancellation_reason for voluntary and payment-related cancellations. The
     * cancellation request behind a scheduled or completed cancellation.
     * object.cancellation_reason (Optional): string. Why the subscription is canceled or scheduled
     * to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the
     * signup order, end_after_reached when the automatic ending agreement is reached,
     * cancellation_details.requested_by when recorded, payment_failed for other canceled
     * subscriptions without a requester, and other for a scheduled cancellation without a
     * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
     * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * object.completed_cycles (Required): integer. Billing cycles charged so far, including cycles
     * imported with `billing_start.completed_cycles`. The next renewal order's
     * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * object.contract_end_at (Optional): string. When the recorded contract term ends. Does not
     * move when the subscription pauses or changes plan. Flint does not stop the buyer from
     * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.contract_start_at (Optional): string. When the recorded contract term started. Does
     * not move when the subscription pauses or changes plan. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_period_end_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_period_start_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link ExpandedCustomerSummary}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. The customer
     * this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deliveries_per_period (Required): integer. Deliveries paid for by one billing period,
     * from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are
     * per delivery. Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
     * SubscriptionDelivery}. Saved delivery preference with the current delivery method display.
     * Write responses use the same display as GET: fixed shipping reflects the current method
     * configuration, and quoted shipping shows the last paid shipping amount when available. A
     * subscription's saved delivery preference: method, destination, recipient, shipping cost, and
     * who last changed it. object.delivery_hold (Optional): {@link SubscriptionDeliveryHold}.
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it. object.delivery_interval (Required): string
     * or null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is
     * set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly",
     * "yearly", null. object.delivery_interval_count (Required): integer or null. Number of
     * delivery intervals between deliveries. Null when no separate delivery cadence is set.
     * Format: int32. minimum: 1. object.early_termination_fee_money (Optional): {@link
     * MoneyValue}. The fee in the recorded contract terms. Present whenever those terms include a
     * fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later
     * plan changes do not change this fee. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.end_after (Required): {@link SubscriptionEndAfter} or
     * null. Recorded automatic end condition. Null when no automatic end is set. Cycles count
     * charged billing periods, including imported completed_cycles. Pauses and skips do not use
     * cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
     * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
     * without consuming its entitlement. Ending never refunds. object.end_after.anyOf[1] (Value):
     * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
     * charged billing cycles or a saved local calendar date. object.end_after.anyOf[2] (Value):
     * null. object.expires_at (Required): string or null. Projected end under the current schedule
     * and committed plan changes, including an earlier scheduled cancellation. A date limit
     * preserves already-paid entitlement without requiring a future charge schedule. A reached
     * cycle limit uses the last paid period end, or current_period_end_at when no paid history
     * exists; that fallback includes any skip or pause extension. A cycle limit with cycles left
     * needs a future charge schedule unless a known scheduled cancellation determines the end.
     * Paid deliveries extend the end to the last paid delivery when it is later. An indefinite
     * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
     * determined or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_recipient (Required): {@link SubscriptionGiftRecipient} or
     * null. Who receives the gift, when this is a gift subscription. customer_id stays the
     * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
     * erased. Null when the subscription isn't a gift. object.gift_recipient.anyOf[1] (Value):
     * {@link SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
     * purchaser, who pays, gets receipts and reminders, and manages the subscription.
     * delivery.recipient stays the ship-to address. object.gift_recipient.anyOf[2] (Value): null.
     * object.idempotency_key (Optional): string or null. The Idempotency-Key of the request that
     * created this resource. `null` when that request sent no key, Flint created the resource, the
     * reader isn't the caller that created it (another app install, a buyer, or the merchant
     * reading an app's or buyer's record), or the caller that created an older record is unknown.
     * Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed
     * responses and webhook events, can return `null`. To find a key that a replay returns as
     * `null`, read the resource. Buyer sessions on routes shared with merchants get `null`.
     * `/v1/me` responses do not include this field. object.inventory_wait (Optional): {@link
     * SubscriptionInventoryWait}. Renewal waiting for stock. Buyers receive only started_at. Shows
     * that a subscription renewal is waiting for inventory, with the order and invoice involved
     * and when the wait started. object.is_awaiting_billing_schedule (Optional): boolean. True
     * while an active or trialing subscription on an external billing schedule has no next billing
     * date. object.last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal
     * payment failure, present only while status is past_due and the latest payment failed. Buyer
     * responses omit merchant remediation and sensitive decline signals. A summary of why a
     * payment attempt failed, with a normalized error code, a message, the failure time, and
     * remediation. object.line_items (Required): Array of {@link SubscriptionLineItem}. What each
     * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that
     * variant's current catalog price, which then stays until the line changes again.
     * object.line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
     * recurring purchase. object.merchant_id (Required): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and
     * size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.missed_billing_at (Optional): string. The billing date whose payment failed, as an
     * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_billing_at (Optional): string. When Flint next starts a
     * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active
     * subscription has a billing date and isn't set to cancel at the end of its period. Absent
     * when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at,
     * a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed
     * billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at
     * next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at
     * scheduled_cancel_at, and an external schedule awaiting a date reports
     * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.next_delivery_at (Required): string or null. When the next prepaid delivery order is
     * due, shifted by a timed pause. Null when the subscription has an indefinite pause, no
     * delivery is scheduled, or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_retry_at (Required): string or null. Recorded automatic
     * payment retry time. Null when no retry time is available. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.open_renewal_order_id (Optional): string. ID of the paid
     * renewal order whose shipment has not been dispatched. It keeps its committed delivery
     * destination after preference changes and cancellation. Absent when no such renewal order
     * exists. Only renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Optional): {@link MoneyValue}.
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.pause_reason (Optional): string. Why the subscription is paused: merchant for a pause
     * made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed". object.paused_at (Optional):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.paused_delivery_hold (Required): {@link SubscriptionPausedDeliveryHold} or null. The
     * delivery hold that expired and paused the subscription. Null when no stored expiry reason
     * exists, including a manual pause during an active hold, or the subscription is no longer
     * paused for delivery action. object.paused_delivery_hold.anyOf[1] (Value): {@link
     * SubscriptionPausedDeliveryHold}. The delivery hold that expired and paused this
     * subscription. A manual pause during an active hold is not an expiry. This field does not
     * imply a refund. object.paused_delivery_hold.anyOf[2] (Value): null. object.payment_link_id
     * (Optional): string. The payment link that started this subscription, when there was one.
     * Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_method (Optional): {@link
     * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes `payment_method`;
     * `null` when expanded and there is no related payment method. object.payment_method.anyOf[1]
     * (Value): {@link ExpandedPaymentMethodSummary}. A payment method's summary fields, including
     * type, status, and card details, returned when the payment method is expanded.
     * object.payment_method.anyOf[2] (Value): null. object.payment_method_due_at (Required):
     * string or null. First charge boundary while no card is bound: the later of trial_end_at and
     * next_billing_at during a trial, or the next billing date for an imported period, even when
     * that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a
     * card at its boundary cancels without an order or payment attempt. At that boundary, an
     * imported subscription with a positive charge that still has no card enters its normal
     * dunning schedule without a payment attempt. For an imported subscription, a zero charge
     * completes the renewal without a card and the deadline advances to the following boundary.
     * Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel
     * at period end), an active or trialing subscription is in its final end_after cycle, or an
     * external schedule has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method_id (Required): string or null. Saved payment method used for renewal
     * charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing
     * the customer's default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * object.promotions (Required): Array of {@link SubscriptionPromotion}. Recurring promotions
     * applying to the next charged cycle. Scheduled attachments are listed in
     * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
     * excluded. object.promotions[] (Value): {@link SubscriptionPromotion}. A recurring promotion
     * applied to a subscription, including its recurrence and remaining discounted cycles.
     * object.prorate_first_period (Required): boolean. Whether this subscription was created to
     * prorate its first anchored paid period. Set at creation and never changes; starting on the
     * anchor day still bills a normal full period. object.recurring_subtotal_money (Required):
     * {@link MoneyValue} or null. What one billing period's items cost before discounts, shipping,
     * and tax: each line's price with modifiers, times quantity. It changes when items, quantity,
     * or the plan change; editing the plan doesn't change it. For the next charge, use a
     * subscription preview in next_renewal mode. `null` when a cancellation succeeds but Flint
     * couldn't load the billing snapshot afterward, so the cancel response returns it as null.
     * Retrieve the subscription again to get it. object.recurring_subtotal_money.anyOf[1] (Value):
     * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.recurring_subtotal_money.anyOf[2] (Value): null.
     * object.remaining_cycles (Required): integer or null. Charges left for a cycle limit, bounded
     * by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription
     * is canceled. Format: uint64. minimum: 0. object.remaining_prepaid_deliveries (Required):
     * integer. Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
     * with deliveries_per_period minus one. When delivery_hold is present and this count is
     * positive, fixing delivery releases an already-paid delivery with shipping waived and no new
     * charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds,
     * and pauses consume none. Frozen on cancellation for manual refunds. Format: int32. minimum:
     * 0. maximum: 23. object.resume_requested_at (Required): string or null. When Flint accepted a
     * pending resume request. Set only while paused with a resume Flint has not applied yet.
     * Clears when Flint resumes the subscription or refuses the request. `null` when the
     * subscription isn't paused or no resume request is pending. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.scheduled_cancel_at (Required): string or null. When the
     * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
     * while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
     * delivery when it is later. Null when cancel_at_period_end is false or no cancellation time
     * is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
     * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
     * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
     * object.scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}.
     * Frozen target terms that apply at the next charged renewal.
     * object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions (Required):
     * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after the
     * next charged cycle, completed_cycles + 1. Always present; empty when no promotions are
     * scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A recurring
     * promotion applied to a subscription, including its recurrence and remaining discounted
     * cycles. object.scheduled_resume_at (Required): string or null. When a pause with a length
     * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on
     * a prepaid subscription, or billing intervals otherwise. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_location (Optional): {@link SubscriptionServiceLocation}. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified. The
     * address where a subscription's service is delivered, with the saved customer address it came
     * from. object.starts_at (Optional): string. When a scheduled start's first billing period
     * begins. Present only until that first payment succeeds. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Where the subscription is in its
     * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". object.subscription_id (Required):
     * string. Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Optional): Array of string.
     * Merchant actions allowed by the subscription's state. A route can still refuse a listed
     * action for a transient reason, such as a renewal already in progress, with its own error.
     * Always present with merchant credentials. [] enum: "cancel", "pause", "resume",
     * "skip_cycle", "renew", "change_plan", "change_quantity". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
     * "change_quantity". object.tax (Optional): {@link SubscriptionTax} or null. The tax the
     * subscription's renewal, setup fee and plan change orders use. `null` when they follow
     * `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to
     * merchant credentials; omitted for buyer credentials. Always present with merchant
     * credentials. object.tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax the
     * subscription's renewal, setup fee and plan change orders use. Returned only to merchant
     * credentials; omitted for buyer credentials. object.tax.anyOf[2] (Value): null.
     * object.terms_type (Required): string. Terms come from the subscription plan in
     * subscription_plan_id, or from subscription offers identified on each offer line by
     * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * object.test_clock_id (Optional): string. ID of the test clock the subscription's customer
     * was created on. The subscription bills at the clock's time. Present only when the customer
     * is on a test clock. Included only in merchant responses and omitted from buyer responses.
     * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.trial_end_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.upcoming_delivery_hold
     * (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next
     * renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected
     * for an upcoming renewal that will hold the subscription's delivery, and who can fix it.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with every change to the
     * subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     */
    "data"?: {
        /**
         * Who caused this event, captured when the change commits. Omitted when the event predates
         * actor attribution or attribution is unavailable. Who performed a return action: a buyer,
         * merchant, integration, or the system, with an optional ID.
         */
        "actor"?: ReturnActor;
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_anchor_day (Optional): integer. UTC day of the month used for monthly and yearly
         * billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
         * billing_hold (Optional): {@link SubscriptionBillingHold}. Configuration issue or
         * automatic retry delaying billing, with the first detection time. Flint retries
         * automatically without starting payment recovery. Cleared when billing succeeds, the
         * schedule is replaced, the subscription is paused or canceled, or a card decline starts
         * payment recovery. Included only in merchant responses. Why subscription billing is
         * delayed, with the time Flint first detected it. A billing hold does not mean the card
         * was declined. billing_interval (Required): string. How often the subscription bills now.
         * Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change
         * applies from the next renewal that has not been paid; next_billing_at does not move.
         * Value enum: "daily", "weekly", "monthly", "yearly". billing_interval_count (Required):
         * integer. Number of billing_interval units between charges. Changes with
         * billing_interval. Format: int32. billing_interval_options (Optional): Array of {@link
         * SubscriptionIntervalOption}. Billing interval and count pairs the subscription can
         * switch to. For a subscription on a plan, they follow the plan's current
         * billing_interval_options. A subscription that came from an offer keeps the pairs the
         * offer had at signup. Prices of lines that ship are per delivery. Each option charges for
         * all deliveries in its period. Changing the interval does not change the per-delivery
         * price. maxItems: 12. uniqueItems: true. billing_interval_options[] (Value): {@link
         * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan,
         * offer, or subscription lets buyers choose. Prices of lines that ship are per delivery,
         * and each option charges for all deliveries in its period. Without a delivery cadence
         * there is one delivery per period, so every option bills the same line prices once per
         * period. With a delivery cadence, a longer period bills more deliveries of the lines that
         * ship; other lines bill once per period. For a different price per interval with no
         * delivery cadence, create separate plans. billing_schedule_owner (Required): string. Who
         * supplies billing dates: flint advances the schedule after each paid renewal; external
         * uses dates you supply. Change it with billing_schedule on PATCH
         * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
         * billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". cancel_at_period_end (Required): boolean.
         * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with
         * POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
         * cancel_at_period_end false. canceled_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * signup_order_refunded when an automatic inventory refund fully refunds the signup order,
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * completed_cycles (Required): integer. Billing cycles charged so far, including cycles
         * imported with `billing_start.completed_cycles`. The next renewal order's
         * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
         * contract_end_at (Optional): string. When the recorded contract term ends. Does not move
         * when the subscription pauses or changes plan. Flint does not stop the buyer from
         * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". contract_start_at
         * (Optional): string. When the recorded contract term started. Does not move when the
         * subscription pauses or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_end_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_start_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
         * delivery (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the
         * current delivery method display. Write responses use the same display as GET: fixed
         * shipping reflects the current method configuration, and quoted shipping shows the last
         * paid shipping amount when available. A subscription's saved delivery preference: method,
         * destination, recipient, shipping cost, and who last changed it. delivery_hold
         * (Optional): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
         * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
         * deliveries because its delivery method or destination no longer works, and who can fix
         * it. delivery_interval (Required): string or null. Delivery cadence frozen from the plan.
         * Null when no separate delivery cadence is set; one delivery is made per billing period.
         * Value enum: "daily", "weekly", "monthly", "yearly", null. delivery_interval_count
         * (Required): integer or null. Number of delivery intervals between deliveries. Null when
         * no separate delivery cadence is set. Format: int32. minimum: 1.
         * early_termination_fee_money (Optional): {@link MoneyValue}. The fee in the recorded
         * contract terms. Present whenever those terms include a fee. It applies only to a
         * cancellation before contract_end_at. Flint never charges it. Later plan changes do not
         * change this fee. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. end_after (Required): {@link SubscriptionEndAfter} or null. Recorded
         * automatic end condition. Null when no automatic end is set. Cycles count charged billing
         * periods, including imported completed_cycles. Pauses and skips do not use cycles.
         * Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
         * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
         * without consuming its entitlement. Ending never refunds. end_after.anyOf[1] (Value):
         * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
         * charged billing cycles or a saved local calendar date. end_after.anyOf[2] (Value): null.
         * expires_at (Required): string or null. Projected end under the current schedule and
         * committed plan changes, including an earlier scheduled cancellation. A date limit
         * preserves already-paid entitlement without requiring a future charge schedule. A reached
         * cycle limit uses the last paid period end, or current_period_end_at when no paid history
         * exists; that fallback includes any skip or pause extension. A cycle limit with cycles
         * left needs a future charge schedule unless a known scheduled cancellation determines the
         * end. Paid deliveries extend the end to the last paid delivery when it is later. An
         * indefinite pause with paid deliveries owed makes the end unknown. Null when the end
         * cannot be determined or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". gift_recipient (Required): {@link SubscriptionGiftRecipient} or null.
         * Who receives the gift, when this is a gift subscription. customer_id stays the
         * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
         * erased. Null when the subscription isn't a gift. gift_recipient.anyOf[1] (Value): {@link
         * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
         * purchaser, who pays, gets receipts and reminders, and manages the subscription.
         * delivery.recipient stays the ship-to address. gift_recipient.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource. `null` when that request sent no key, Flint created the resource,
         * the reader isn't the caller that created it (another app install, a buyer, or the
         * merchant reading an app's or buyer's record), or the caller that created an older record
         * is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer sessions on routes shared with
         * merchants get `null`. `/v1/me` responses do not include this field. inventory_wait
         * (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for stock. Buyers receive
         * only started_at. Shows that a subscription renewal is waiting for inventory, with the
         * order and invoice involved and when the wait started. is_awaiting_billing_schedule
         * (Optional): boolean. True while an active or trialing subscription on an external
         * billing schedule has no next billing date. last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Latest renewal payment failure, present only while status is
         * past_due and the latest payment failed. Buyer responses omit merchant remediation and
         * sensitive decline signals. A summary of why a payment attempt failed, with a normalized
         * error code, a message, the failure time, and remediation. line_items (Required): Array
         * of {@link SubscriptionLineItem}. What each renewal bills. Plan edits do not change it.
         * Adding, changing or swapping a line takes that variant's current catalog price, which
         * then stays until the line changes again. line_items[] (Value): {@link
         * SubscriptionLineItem}. An item included in a customer's recurring purchase. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them.
         * missed_billing_at (Optional): string. The billing date whose payment failed, as an
         * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_billing_at (Optional): string. When Flint next starts a
         * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or
         * active subscription has a billing date and isn't set to cancel at the end of its period.
         * Absent when no renewal is scheduled: a subscription in its final billing cycle ends at
         * expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports
         * the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete
         * one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel
         * ends at scheduled_cancel_at, and an external schedule awaiting a date reports
         * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * next_delivery_at (Required): string or null. When the next prepaid delivery order is
         * due, shifted by a timed pause. Null when the subscription has an indefinite pause, no
         * delivery is scheduled, or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_retry_at (Required): string or null. Recorded automatic
         * payment retry time. Null when no retry time is available. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". open_renewal_order_id (Optional): string. ID of the paid renewal
         * order whose shipment has not been dispatched. It keeps its committed delivery
         * destination after preference changes and cancellation. Absent when no such renewal order
         * exists. Only renewal orders count; the signup order is not included. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". outstanding_money (Optional): {@link MoneyValue}.
         * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
         * payments and credits. Present only while status is past_due and a positive balance
         * remains. Monetary amount represented as integer minor units plus an ISO 4217 currency
         * code. pause_reason (Optional): string. Why the subscription is paused: merchant for a
         * pause made with your API key or dashboard, buyer for the buyer's own pause,
         * delivery_action_required for a pause during or after a delivery hold, and payment_failed
         * when renewal payment retries ran out and your dunning settings pause the subscription.
         * Omitted when the subscription is not paused. Value enum: "buyer",
         * "delivery_action_required", "merchant", "payment_failed". paused_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * paused_delivery_hold (Required): {@link SubscriptionPausedDeliveryHold} or null. The
         * delivery hold that expired and paused the subscription. Null when no stored expiry
         * reason exists, including a manual pause during an active hold, or the subscription is no
         * longer paused for delivery action. paused_delivery_hold.anyOf[1] (Value): {@link
         * SubscriptionPausedDeliveryHold}. The delivery hold that expired and paused this
         * subscription. A manual pause during an active hold is not an expiry. This field does not
         * imply a refund. paused_delivery_hold.anyOf[2] (Value): null. payment_link_id (Optional):
         * string. The payment link that started this subscription, when there was one. Example:
         * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_method (Optional): {@link
         * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes
         * `payment_method`; `null` when expanded and there is no related payment method.
         * payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. payment_method.anyOf[2] (Value): null. payment_method_due_at
         * (Required): string or null. First charge boundary while no card is bound: the later of
         * trial_end_at and next_billing_at during a trial, or the next billing date for an
         * imported period, even when that cycle's charge is zero. Recomputed when the schedule
         * changes. A trial still without a card at its boundary cancels without an order or
         * payment attempt. At that boundary, an imported subscription with a positive charge that
         * still has no card enters its normal dunning schedule without a payment attempt. For an
         * imported subscription, a zero charge completes the renewal without a card and the
         * deadline advances to the following boundary. Null when a card is bound, collection is
         * not scheduled (paused, canceled, or set to cancel at period end), an active or trialing
         * subscription is in its final end_after cycle, or an external schedule has no known
         * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method_id
         * (Required): string or null. Saved payment method used for renewal charges. Null when no
         * card is bound. Bind a card to this subscription with PATCH; changing the customer's
         * default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". promotions
         * (Required): Array of {@link SubscriptionPromotion}. Recurring promotions applying to the
         * next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when
         * none apply; signup-only and exhausted promotions are excluded. promotions[] (Value):
         * {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. prorate_first_period
         * (Required): boolean. Whether this subscription was created to prorate its first anchored
         * paid period. Set at creation and never changes; starting on the anchor day still bills a
         * normal full period. recurring_subtotal_money (Required): {@link MoneyValue} or null.
         * What one billing period's items cost before discounts, shipping, and tax: each line's
         * price with modifiers, times quantity. It changes when items, quantity, or the plan
         * change; editing the plan doesn't change it. For the next charge, use a subscription
         * preview in next_renewal mode. `null` when a cancellation succeeds but Flint couldn't
         * load the billing snapshot afterward, so the cancel response returns it as null. Retrieve
         * the subscription again to get it. recurring_subtotal_money.anyOf[1] (Value): {@link
         * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. recurring_subtotal_money.anyOf[2] (Value): null. remaining_cycles
         * (Required): integer or null. Charges left for a cycle limit, bounded by an earlier
         * scheduled cancellation. Null when there is no cycle limit or the subscription is
         * canceled. Format: uint64. minimum: 0. remaining_prepaid_deliveries (Required): integer.
         * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with
         * deliveries_per_period minus one. When delivery_hold is present and this count is
         * positive, fixing delivery releases an already-paid delivery with shipping waived and no
         * new charge. A next_renewal preview still estimates the next paid billing cycle. Skips,
         * holds, and pauses consume none. Frozen on cancellation for manual refunds. Format:
         * int32. minimum: 0. maximum: 23. resume_requested_at (Required): string or null. When
         * Flint accepted a pending resume request. Set only while paused with a resume Flint has
         * not applied yet. Clears when Flint resumes the subscription or refuses the request.
         * `null` when the subscription isn't paused or no resume request is pending. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". scheduled_cancel_at (Required): string or
         * null. When the scheduled cancellation takes effect: trial_end_at while trialing,
         * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
         * extend it to the last paid delivery when it is later. Null when cancel_at_period_end is
         * false or no cancellation time is available. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_plan_change (Required): {@link
         * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged
         * renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null
         * on PATCH; replace through change-plan. scheduled_plan_change.anyOf[1] (Value): {@link
         * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
         * renewal. scheduled_plan_change.anyOf[2] (Value): null. scheduled_promotions (Required):
         * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after
         * the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
         * are scheduled. scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
         * recurring promotion applied to a subscription, including its recurrence and remaining
         * discounted cycles. scheduled_resume_at (Required): string or null. When a pause with a
         * length (pause_duration_cycles) resumes on its own: that many delivery intervals after
         * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
         * subscription is not paused or the pause has no length, such as a pause until you resume
         * it or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_location (Optional): {@link
         * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. The address where a subscription's service is
         * delivered, with the saved customer address it came from. starts_at (Optional): string.
         * When a scheduled start's first billing period begins. Present only until that first
         * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Where the subscription is in its lifecycle. Each value says what it means. Value
         * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
         * subscription_id (Required): string. Stable identifier of the subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_plan (Optional): {@link
         * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. Subscription plan ID. Omitted when terms_type
         * is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions
         * (Optional): Array of string. Merchant actions allowed by the subscription's state. A
         * route can still refuse a listed action for a transient reason, such as a renewal already
         * in progress, with its own error. Always present with merchant credentials. [] enum:
         * "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
         * supported_actions[] (Value): string. Value enum: "cancel", "pause", "resume",
         * "skip_cycle", "renew", "change_plan", "change_quantity". tax (Optional): {@link
         * SubscriptionTax} or null. The tax the subscription's renewal, setup fee and plan change
         * orders use. `null` when they follow `tax.default_enabled` and `tax.default_calculation`
         * from your settings. Returned only to merchant credentials; omitted for buyer
         * credentials. Always present with merchant credentials. tax.anyOf[1] (Value): {@link
         * SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change orders
         * use. Returned only to merchant credentials; omitted for buyer credentials. tax.anyOf[2]
         * (Value): null. terms_type (Required): string. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * test_clock_id (Optional): string. ID of the test clock the subscription's customer was
         * created on. The subscription bills at the clock's time. Present only when the customer
         * is on a test clock. Included only in merchant responses and omitted from buyer
         * responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". trial_end_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * upcoming_delivery_hold (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery
         * issue forecast for the next renewal at renewal_at. Mutually exclusive with
         * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
         * subscription's delivery, and who can fix it. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the subscription, including renewals and other
         * changes Flint makes. Send it as `expected_version` to apply an update only if nothing
         * changed. Format: uint64. minimum: 0.
         */
        "object": {
            /**
             * UTC day of the month used for monthly and yearly billing. Applies only to
             * Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
             */
            "billing_anchor_day"?: number;
            /**
             * Configuration issue or automatic retry delaying billing, with the first detection
             * time. Flint retries automatically without starting payment recovery. Cleared when
             * billing succeeds, the schedule is replaced, the subscription is paused or canceled,
             * or a card decline starts payment recovery. Included only in merchant responses. Why
             * subscription billing is delayed, with the time Flint first detected it. A billing
             * hold does not mean the card was declined.
             */
            "billing_hold"?: SubscriptionBillingHold;
            /**
             * How often the subscription bills now. Read with billing_interval_count: monthly with
             * a count of 3 bills quarterly. A change applies from the next renewal that has not
             * been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly",
             * "yearly".
             */
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            /**
             * Number of billing_interval units between charges. Changes with billing_interval.
             * Format: int32.
             */
            "billing_interval_count": number;
            /**
             * Billing interval and count pairs the subscription can switch to. For a subscription
             * on a plan, they follow the plan's current billing_interval_options. A subscription
             * that came from an offer keeps the pairs the offer had at signup. Prices of lines
             * that ship are per delivery. Each option charges for all deliveries in its period.
             * Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
             * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
             * choose. Prices of lines that ship are per delivery, and each option charges for all
             * deliveries in its period. Without a delivery cadence there is one delivery per
             * period, so every option bills the same line prices once per period. With a delivery
             * cadence, a longer period bills more deliveries of the lines that ship; other lines
             * bill once per period. For a different price per interval with no delivery cadence,
             * create separate plans.
             */
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            /**
             * Who supplies billing dates: flint advances the schedule after each paid renewal;
             * external uses dates you supply. Change it with billing_schedule on PATCH
             * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
             */
            "billing_schedule_owner": "flint" | "external" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "billing_schedule_waiting_started_at"?: string;
            /**
             * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule
             * with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
             * cancel_at_period_end false.
             */
            "cancel_at_period_end": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who asked to cancel, when, and why. Present once a cancellation is requested,
             * whether it takes effect at the end of the billing period or right away. Omitted when
             * no one asked, and removed when a scheduled cancellation is undone. See
             * cancellation_reason for voluntary and payment-related cancellations. The
             * cancellation request behind a scheduled or completed cancellation.
             */
            "cancellation_details"?: SubscriptionCancellationDetails;
            /**
             * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
             * when an automatic inventory refund fully refunds the signup order, end_after_reached
             * when the automatic ending agreement is reached, cancellation_details.requested_by
             * when recorded, payment_failed for other canceled subscriptions without a requester,
             * and other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            /**
             * Billing cycles charged so far, including cycles imported with
             * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is
             * this number plus one. Format: uint64. minimum: 0.
             */
            "completed_cycles": number;
            /**
             * When the recorded contract term ends. Does not move when the subscription pauses or
             * changes plan. Flint does not stop the buyer from canceling earlier. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_end_at"?: string;
            /**
             * When the recorded contract term started. Does not move when the subscription pauses
             * or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_start_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_end_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_start_at"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * Deliveries paid for by one billing period, from 1 to 24. One when no separate
             * delivery cadence is set. Prices of lines that ship are per delivery. Format: int32.
             * minimum: 1. maximum: 24.
             */
            "deliveries_per_period": number;
            /**
             * Saved delivery preference with the current delivery method display. Write responses
             * use the same display as GET: fixed shipping reflects the current method
             * configuration, and quoted shipping shows the last paid shipping amount when
             * available. A subscription's saved delivery preference: method, destination,
             * recipient, shipping cost, and who last changed it.
             */
            "delivery"?: SubscriptionDelivery;
            /**
             * Current delivery issue that blocks collection. Mutually exclusive with
             * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery
             * method or destination no longer works, and who can fix it.
             */
            "delivery_hold"?: SubscriptionDeliveryHold;
            /**
             * Delivery cadence frozen from the plan. Null when no separate delivery cadence is
             * set; one delivery is made per billing period. Value enum: "daily", "weekly",
             * "monthly", "yearly", null.
             */
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            /**
             * Number of delivery intervals between deliveries. Null when no separate delivery
             * cadence is set. Format: int32. minimum: 1.
             */
            "delivery_interval_count": number | null;
            /**
             * The fee in the recorded contract terms. Present whenever those terms include a fee.
             * It applies only to a cancellation before contract_end_at. Flint never charges it.
             * Later plan changes do not change this fee. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "early_termination_fee_money"?: MoneyValue;
            /**
             * Recorded automatic end condition. Null when no automatic end is set. Cycles count
             * charged billing periods, including imported completed_cycles. Pauses and skips do
             * not use cycles. Already-paid prepaid deliveries continue on their shifted dates,
             * even beyond the end date, and cancellation waits for the last remaining delivery.
             * Skipping defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1] (Value): {@link SubscriptionEndAfter}. The subscription's automatic end
             * condition, measured by charged billing cycles or a saved local calendar date.
             * anyOf[2] (Value): null.
             */
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            /**
             * Projected end under the current schedule and committed plan changes, including an
             * earlier scheduled cancellation. A date limit preserves already-paid entitlement
             * without requiring a future charge schedule. A reached cycle limit uses the last paid
             * period end, or current_period_end_at when no paid history exists; that fallback
             * includes any skip or pause extension. A cycle limit with cycles left needs a future
             * charge schedule unless a known scheduled cancellation determines the end. Paid
             * deliveries extend the end to the last paid delivery when it is later. An indefinite
             * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
             * determined or the subscription is canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Who receives the gift, when this is a gift subscription. customer_id stays the
             * purchaser. Flint clears it when the subscription ends and when the purchaser's data
             * is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@link
             * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
             * purchaser, who pays, gets receipts and reminders, and manages the subscription.
             * delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
             */
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer sessions on routes shared with merchants get
             * `null`. `/v1/me` responses do not include this field.
             */
            "idempotency_key"?: string | null;
            /**
             * Renewal waiting for stock. Buyers receive only started_at. Shows that a subscription
             * renewal is waiting for inventory, with the order and invoice involved and when the
             * wait started.
             */
            "inventory_wait"?: SubscriptionInventoryWait;
            /**
             * True while an active or trialing subscription on an external billing schedule has no
             * next billing date.
             */
            "is_awaiting_billing_schedule"?: boolean;
            /**
             * Latest renewal payment failure, present only while status is past_due and the latest
             * payment failed. Buyer responses omit merchant remediation and sensitive decline
             * signals. A summary of why a payment attempt failed, with a normalized error code, a
             * message, the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a
             * line takes that variant's current catalog price, which then stays until the line
             * changes again. [] (Value): {@link SubscriptionLineItem}. An item included in a
             * customer's recurring purchase.
             */
            "line_items": Array<SubscriptionLineItem>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The billing date whose payment failed, as an RFC3339 timestamp. Present only while
             * status is past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "missed_billing_at"?: string;
            /**
             * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present
             * only while a trialing or active subscription has a billing date and isn't set to
             * cancel at the end of its period. Absent when no renewal is scheduled: a subscription
             * in its final billing cycle ends at expires_at, a paused subscription resumes at
             * scheduled_resume_at, a past_due one reports the failed billing date in
             * missed_billing_at and retries at next_retry_at, an incomplete one retries at
             * next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at
             * scheduled_cancel_at, and an external schedule awaiting a date reports
             * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_billing_at"?: string;
            /**
             * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
             * subscription has an indefinite pause, no delivery is scheduled, or the subscription
             * is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_delivery_at": string | null;
            /**
             * Recorded automatic payment retry time. Null when no retry time is available. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_retry_at": string | null;
            /**
             * ID of the paid renewal order whose shipment has not been dispatched. It keeps its
             * committed delivery destination after preference changes and cancellation. Absent
             * when no such renewal order exists. Only renewal orders count; the signup order is
             * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "open_renewal_order_id"?: string;
            /**
             * Unpaid balance of the failed renewal order, including tax, shipping and discounts,
             * after payments and credits. Present only while status is past_due and a positive
             * balance remains. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "outstanding_money"?: MoneyValue;
            /**
             * Why the subscription is paused: merchant for a pause made with your API key or
             * dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
             * during or after a delivery hold, and payment_failed when renewal payment retries ran
             * out and your dunning settings pause the subscription. Omitted when the subscription
             * is not paused. Value enum: "buyer", "delivery_action_required", "merchant",
             * "payment_failed".
             */
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "paused_at"?: string;
            /**
             * The delivery hold that expired and paused the subscription. Null when no stored
             * expiry reason exists, including a manual pause during an active hold, or the
             * subscription is no longer paused for delivery action. anyOf[1] (Value): {@link
             * SubscriptionPausedDeliveryHold}. The delivery hold that expired and paused this
             * subscription. A manual pause during an active hold is not an expiry. This field does
             * not imply a refund. anyOf[2] (Value): null.
             */
            "paused_delivery_hold": ((SubscriptionPausedDeliveryHold) | (null));
            /**
             * The payment link that started this subscription, when there was one. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * Present only when `expand` includes `payment_method`; `null` when expanded and there
             * is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * First charge boundary while no card is bound: the later of trial_end_at and
             * next_billing_at during a trial, or the next billing date for an imported period,
             * even when that cycle's charge is zero. Recomputed when the schedule changes. A trial
             * still without a card at its boundary cancels without an order or payment attempt. At
             * that boundary, an imported subscription with a positive charge that still has no
             * card enters its normal dunning schedule without a payment attempt. For an imported
             * subscription, a zero charge completes the renewal without a card and the deadline
             * advances to the following boundary. Null when a card is bound, collection is not
             * scheduled (paused, canceled, or set to cancel at period end), an active or trialing
             * subscription is in its final end_after cycle, or an external schedule has no known
             * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "payment_method_due_at": string | null;
            /**
             * Saved payment method used for renewal charges. Null when no card is bound. Bind a
             * card to this subscription with PATCH; changing the customer's default alone does not
             * bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string | null;
            /**
             * Recurring promotions applying to the next charged cycle. Scheduled attachments are
             * listed in scheduled_promotions. Empty when none apply; signup-only and exhausted
             * promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A recurring
             * promotion applied to a subscription, including its recurrence and remaining
             * discounted cycles.
             */
            "promotions": Array<SubscriptionPromotion>;
            /**
             * Whether this subscription was created to prorate its first anchored paid period. Set
             * at creation and never changes; starting on the anchor day still bills a normal full
             * period.
             */
            "prorate_first_period": boolean;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. `null` when a cancellation succeeds but
             * Flint couldn't load the billing snapshot afterward, so the cancel response returns
             * it as null. Retrieve the subscription again to get it. anyOf[1] (Value): {@link
             * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code. anyOf[2] (Value): null.
             */
            "recurring_subtotal_money": ((MoneyValue) | (null));
            /**
             * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
             * when there is no cycle limit or the subscription is canceled. Format: uint64.
             * minimum: 0.
             */
            "remaining_cycles": number | null;
            /**
             * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
             * with deliveries_per_period minus one. When delivery_hold is present and this count
             * is positive, fixing delivery releases an already-paid delivery with shipping waived
             * and no new charge. A next_renewal preview still estimates the next paid billing
             * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual
             * refunds. Format: int32. minimum: 0. maximum: 23.
             */
            "remaining_prepaid_deliveries": number;
            /**
             * When Flint accepted a pending resume request. Set only while paused with a resume
             * Flint has not applied yet. Clears when Flint resumes the subscription or refuses the
             * request. `null` when the subscription isn't paused or no resume request is pending.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "resume_requested_at": string | null;
            /**
             * When the scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_cancel_at": string | null;
            /**
             * Frozen target terms for the next charged renewal. Null when no plan change is
             * scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through
             * change-plan. anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
             * target terms that apply at the next charged renewal. anyOf[2] (Value): null.
             */
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            /**
             * Attached promotions whose first_cycle is after the next charged cycle,
             * completed_cycles + 1. Always present; empty when no promotions are scheduled. []
             * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a
             * subscription, including its recurrence and remaining discounted cycles.
             */
            "scheduled_promotions": Array<SubscriptionPromotion>;
            /**
             * When a pause with a length (pause_duration_cycles) resumes on its own: that many
             * delivery intervals after paused_at on a prepaid subscription, or billing intervals
             * otherwise. Null when the subscription is not paused or the pause has no length, such
             * as a pause until you resume it or the pause Flint starts when a delivery hold runs
             * out. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_resume_at": string | null;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The address where a subscription's service is delivered, with the
             * saved customer address it came from.
             */
            "service_location"?: SubscriptionServiceLocation;
            /**
             * When a scheduled start's first billing period begins. Present only until that first
             * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "starts_at"?: string;
            /**
             * Where the subscription is in its lifecycle. Each value says what it means. Value
             * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
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
            /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Merchant actions allowed by the subscription's state. A route can still refuse a
             * listed action for a transient reason, such as a renewal already in progress, with
             * its own error. Always present with merchant credentials. [] enum: "cancel", "pause",
             * "resume", "skip_cycle", "renew", "change_plan", "change_quantity". [] (Value):
             * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew",
             * "change_plan", "change_quantity".
             */
            "supported_actions"?: Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            /**
             * The tax the subscription's renewal, setup fee and plan change orders use. `null`
             * when they follow `tax.default_enabled` and `tax.default_calculation` from your
             * settings. Returned only to merchant credentials; omitted for buyer credentials.
             * Always present with merchant credentials. anyOf[1] (Value): {@link SubscriptionTax}.
             * The tax the subscription's renewal, setup fee and plan change orders use. Returned
             * only to merchant credentials; omitted for buyer credentials. anyOf[2] (Value): null.
             */
            "tax"?: ((SubscriptionTax) | (null));
            /**
             * Terms come from the subscription plan in subscription_plan_id, or from subscription
             * offers identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer".
             */
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            /**
             * ID of the test clock the subscription's customer was created on. The subscription
             * bills at the clock's time. Present only when the customer is on a test clock.
             * Included only in merchant responses and omitted from buyer responses. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "trial_end_at"?: string;
            /**
             * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
             * delivery_hold. A delivery problem detected for an upcoming renewal that will hold
             * the subscription's delivery, and who can fix it.
             */
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the subscription, including renewals and other changes
             * Flint makes. Send it as `expected_version` to apply an update only if nothing
             * changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "subscription.trial_ending". */
    "event_type"?: "subscription.trial_ending";
});
/**
 * A delivery problem detected for an upcoming renewal that will hold the subscription's delivery,
 * and who can fix it.
 */
export type SubscriptionUpcomingDeliveryHold = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "detected_at": string;
    /**
     * Who can clear the problem. `method_unavailable` problems are `buyer` when buyers can update
     * delivery and another offered method can serve the subscription. They are `merchant` when
     * your `customer_account.buyer_capabilities.can_update_delivery` is false, or when the method
     * was revoked and no other offered method can serve the subscription. Value enum: "buyer",
     * "merchant".
     */
    "fixable_by": "buyer" | "merchant" | (string & {});
    /**
     * Why the subscription's delivery needs attention. Value enum: "method_unavailable",
     * "destination_not_served", "rate_unavailable".
     */
    "reason": "method_unavailable" | "destination_not_served" | "rate_unavailable" | (string & {});
    /**
     * Time of the next renewal affected by this delivery issue. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "renewal_at": string;
};
export type SubscriptionUpcomingDeliveryHoldPreviousAttributes = {
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "detected_at"?: ((string) | (null));
    /**
     * Who can clear the problem. `method_unavailable` problems are `buyer` when buyers can update
     * delivery and another offered method can serve the subscription. They are `merchant` when
     * your `customer_account.buyer_capabilities.can_update_delivery` is false, or when the method
     * was revoked and no other offered method can serve the subscription. Value enum: "buyer",
     * "merchant". anyOf[1] (Value): string. Who can clear the problem. `method_unavailable`
     * problems are `buyer` when buyers can update delivery and another offered method can serve
     * the subscription. They are `merchant` when your
     * `customer_account.buyer_capabilities.can_update_delivery` is false, or when the method was
     * revoked and no other offered method can serve the subscription. Value enum: "buyer",
     * "merchant". anyOf[2] (Value): null.
     */
    "fixable_by"?: (("buyer" | "merchant" | (string & {})) | (null));
    /**
     * Why the subscription's delivery needs attention. Value enum: "method_unavailable",
     * "destination_not_served", "rate_unavailable". anyOf[1] (Value): string. Why the
     * subscription's delivery needs attention. Value enum: "method_unavailable",
     * "destination_not_served", "rate_unavailable". anyOf[2] (Value): null.
     */
    "reason"?: (("method_unavailable" | "destination_not_served" | "rate_unavailable" | (string & {})) | (null));
    /**
     * Time of the next renewal affected by this delivery issue. anyOf[1] (Value): string. Time of
     * the next renewal affected by this delivery issue. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "renewal_at"?: ((string) | (null));
};
export type SubscriptionUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "actor"?: ReturnActor;
        "object": {
            "billing_anchor_day"?: number;
            "billing_hold"?: SubscriptionBillingHold;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            "completed_cycles": number;
            "contract_end_at"?: string;
            "contract_start_at"?: string;
            "created_at": string;
            "current_period_end_at"?: string;
            "current_period_start_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "deliveries_per_period": number;
            "delivery"?: SubscriptionDelivery;
            "delivery_hold"?: SubscriptionDeliveryHold;
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            "delivery_interval_count": number | null;
            "early_termination_fee_money"?: MoneyValue;
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            "expires_at": string | null;
            "external_reference_id"?: string;
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            "idempotency_key"?: string | null;
            "inventory_wait"?: SubscriptionInventoryWait;
            "is_awaiting_billing_schedule"?: boolean;
            "last_payment_error"?: PaymentErrorSummary;
            "line_items": Array<SubscriptionLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "missed_billing_at"?: string;
            "next_billing_at"?: string;
            "next_delivery_at": string | null;
            "next_retry_at": string | null;
            "open_renewal_order_id"?: string;
            "outstanding_money"?: MoneyValue;
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            "paused_at"?: string;
            "paused_delivery_hold": ((SubscriptionPausedDeliveryHold) | (null));
            "payment_link_id"?: string;
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "payment_method_due_at": string | null;
            "payment_method_id": string | null;
            "promotions": Array<SubscriptionPromotion>;
            "prorate_first_period": boolean;
            "recurring_subtotal_money": ((MoneyValue) | (null));
            "remaining_cycles": number | null;
            "remaining_prepaid_deliveries": number;
            "resume_requested_at": string | null;
            "scheduled_cancel_at": string | null;
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            "scheduled_promotions": Array<SubscriptionPromotion>;
            "scheduled_resume_at": string | null;
            "service_location"?: SubscriptionServiceLocation;
            "starts_at"?: string;
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            "subscription_id": string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions"?: Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            "tax"?: ((SubscriptionTax) | (null));
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            "test_clock_id"?: string;
            "trial_end_at"?: string;
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "billing_anchor_day"?: ((number) | (null));
            "billing_hold"?: ((SubscriptionBillingHoldPreviousAttributes) | (null));
            "billing_interval"?: (("daily" | "weekly" | "monthly" | "yearly" | (string & {})) | (null));
            "billing_interval_count"?: ((number) | (null));
            "billing_interval_options"?: ((Array<SubscriptionIntervalOptionPreviousAttributes>) | (null));
            "billing_schedule_owner"?: (("flint" | "external" | (string & {})) | (null));
            "billing_schedule_waiting_started_at"?: ((string) | (null));
            "cancel_at_period_end"?: ((boolean) | (null));
            "canceled_at"?: ((string) | (null));
            "cancellation_details"?: ((SubscriptionCancellationDetailsPreviousAttributes) | (null));
            "cancellation_reason"?: (("buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {}))
                | (null));
            "completed_cycles"?: ((number) | (null));
            "contract_end_at"?: ((string) | (null));
            "contract_start_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "current_period_end_at"?: ((string) | (null));
            "current_period_start_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "deliveries_per_period"?: ((number) | (null));
            "delivery"?: ((SubscriptionDeliveryPreviousAttributes) | (null));
            "delivery_hold"?: ((SubscriptionDeliveryHoldPreviousAttributes) | (null));
            "delivery_interval"?: (("daily" | "weekly" | "monthly" | "yearly" | null | (string & {})) | (null));
            "delivery_interval_count"?: ((number) | (null));
            "early_termination_fee_money"?: ((MoneyValuePreviousAttributes) | (null));
            "end_after"?: (((((SubscriptionEndAfterPreviousAttributes) | (null) | (unknown)))) | (null) | (unknown));
            "expires_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "gift_recipient"?: ((SubscriptionGiftRecipientPreviousAttributes) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_wait"?: ((SubscriptionInventoryWaitPreviousAttributes) | (null));
            "is_awaiting_billing_schedule"?: ((boolean) | (null));
            "last_payment_error"?: ((PaymentErrorSummaryPreviousAttributes) | (null));
            "line_items"?: ((Array<SubscriptionLineItemPreviousAttributes>) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "missed_billing_at"?: ((string) | (null));
            "next_billing_at"?: ((string) | (null));
            "next_delivery_at"?: ((string) | (null));
            "next_retry_at"?: ((string) | (null));
            "open_renewal_order_id"?: ((string) | (null));
            "outstanding_money"?: ((MoneyValuePreviousAttributes) | (null));
            "pause_reason"?: (("buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {})) | (null));
            "paused_at"?: ((string) | (null));
            "paused_delivery_hold"?: ((SubscriptionPausedDeliveryHoldPreviousAttributes) | (null));
            "payment_link_id"?: ((string) | (null));
            "payment_method"?: ((ExpandedPaymentMethodSummaryPreviousAttributes) | (null));
            "payment_method_due_at"?: ((string) | (null));
            "payment_method_id"?: ((string) | (null));
            "promotions"?: ((Array<SubscriptionPromotionPreviousAttributes>) | (null));
            "prorate_first_period"?: ((boolean) | (null));
            "recurring_subtotal_money"?: ((MoneyValuePreviousAttributes) | (null));
            "remaining_cycles"?: ((number) | (null));
            "remaining_prepaid_deliveries"?: ((number) | (null));
            "resume_requested_at"?: ((string) | (null));
            "scheduled_cancel_at"?: ((string) | (null));
            "scheduled_plan_change"?: ((SubscriptionScheduledPlanChangePreviousAttributes) | (null));
            "scheduled_promotions"?: ((Array<SubscriptionPromotionPreviousAttributes>) | (null));
            "scheduled_resume_at"?: ((string) | (null));
            "service_location"?: ((SubscriptionServiceLocationPreviousAttributes) | (null));
            "starts_at"?: ((string) | (null));
            "status"?: (("trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {}))
                | (null));
            "subscription_id"?: ((string) | (null));
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null));
            "subscription_plan_id"?: ((string) | (null));
            "supported_actions"?: ((Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>)
                | (null));
            "tax"?: ((SubscriptionTaxPreviousAttributes) | (null));
            "terms_type"?: (("subscription_plan" | "subscription_offer" | (string & {})) | (null));
            "test_clock_id"?: ((string) | (null));
            "trial_end_at"?: ((string) | (null));
            "upcoming_delivery_hold"?: ((SubscriptionUpcomingDeliveryHoldPreviousAttributes) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "subscription.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "actor"?: ReturnActor;
        "object": {
            "billing_anchor_day"?: number;
            "billing_hold"?: SubscriptionBillingHold;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            "completed_cycles": number;
            "contract_end_at"?: string;
            "contract_start_at"?: string;
            "created_at": string;
            "current_period_end_at"?: string;
            "current_period_start_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "deliveries_per_period": number;
            "delivery"?: SubscriptionDelivery;
            "delivery_hold"?: SubscriptionDeliveryHold;
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            "delivery_interval_count": number | null;
            "early_termination_fee_money"?: MoneyValue;
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            "expires_at": string | null;
            "external_reference_id"?: string;
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            "idempotency_key"?: string | null;
            "inventory_wait"?: SubscriptionInventoryWait;
            "is_awaiting_billing_schedule"?: boolean;
            "last_payment_error"?: PaymentErrorSummary;
            "line_items": Array<SubscriptionLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "missed_billing_at"?: string;
            "next_billing_at"?: string;
            "next_delivery_at": string | null;
            "next_retry_at": string | null;
            "open_renewal_order_id"?: string;
            "outstanding_money"?: MoneyValue;
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            "paused_at"?: string;
            "paused_delivery_hold": ((SubscriptionPausedDeliveryHold) | (null));
            "payment_link_id"?: string;
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "payment_method_due_at": string | null;
            "payment_method_id": string | null;
            "promotions": Array<SubscriptionPromotion>;
            "prorate_first_period": boolean;
            "recurring_subtotal_money": ((MoneyValue) | (null));
            "remaining_cycles": number | null;
            "remaining_prepaid_deliveries": number;
            "resume_requested_at": string | null;
            "scheduled_cancel_at": string | null;
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            "scheduled_promotions": Array<SubscriptionPromotion>;
            "scheduled_resume_at": string | null;
            "service_location"?: SubscriptionServiceLocation;
            "starts_at"?: string;
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            "subscription_id": string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions"?: Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            "tax"?: ((SubscriptionTax) | (null));
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            "test_clock_id"?: string;
            "trial_end_at"?: string;
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "billing_anchor_day"?: ((number) | (null));
            "billing_hold"?: ((SubscriptionBillingHoldPreviousAttributes) | (null));
            "billing_interval"?: (("daily" | "weekly" | "monthly" | "yearly" | (string & {})) | (null));
            "billing_interval_count"?: ((number) | (null));
            "billing_interval_options"?: ((Array<SubscriptionIntervalOptionPreviousAttributes>) | (null));
            "billing_schedule_owner"?: (("flint" | "external" | (string & {})) | (null));
            "billing_schedule_waiting_started_at"?: ((string) | (null));
            "cancel_at_period_end"?: ((boolean) | (null));
            "canceled_at"?: ((string) | (null));
            "cancellation_details"?: ((SubscriptionCancellationDetailsPreviousAttributes) | (null));
            "cancellation_reason"?: (("buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {}))
                | (null));
            "completed_cycles"?: ((number) | (null));
            "contract_end_at"?: ((string) | (null));
            "contract_start_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "current_period_end_at"?: ((string) | (null));
            "current_period_start_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "deliveries_per_period"?: ((number) | (null));
            "delivery"?: ((SubscriptionDeliveryPreviousAttributes) | (null));
            "delivery_hold"?: ((SubscriptionDeliveryHoldPreviousAttributes) | (null));
            "delivery_interval"?: (("daily" | "weekly" | "monthly" | "yearly" | null | (string & {})) | (null));
            "delivery_interval_count"?: ((number) | (null));
            "early_termination_fee_money"?: ((MoneyValuePreviousAttributes) | (null));
            "end_after"?: (((((SubscriptionEndAfterPreviousAttributes) | (null) | (unknown)))) | (null) | (unknown));
            "expires_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "gift_recipient"?: ((SubscriptionGiftRecipientPreviousAttributes) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_wait"?: ((SubscriptionInventoryWaitPreviousAttributes) | (null));
            "is_awaiting_billing_schedule"?: ((boolean) | (null));
            "last_payment_error"?: ((PaymentErrorSummaryPreviousAttributes) | (null));
            "line_items"?: ((Array<SubscriptionLineItemPreviousAttributes>) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "missed_billing_at"?: ((string) | (null));
            "next_billing_at"?: ((string) | (null));
            "next_delivery_at"?: ((string) | (null));
            "next_retry_at"?: ((string) | (null));
            "open_renewal_order_id"?: ((string) | (null));
            "outstanding_money"?: ((MoneyValuePreviousAttributes) | (null));
            "pause_reason"?: (("buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {})) | (null));
            "paused_at"?: ((string) | (null));
            "paused_delivery_hold"?: ((SubscriptionPausedDeliveryHoldPreviousAttributes) | (null));
            "payment_link_id"?: ((string) | (null));
            "payment_method"?: ((ExpandedPaymentMethodSummaryPreviousAttributes) | (null));
            "payment_method_due_at"?: ((string) | (null));
            "payment_method_id"?: ((string) | (null));
            "promotions"?: ((Array<SubscriptionPromotionPreviousAttributes>) | (null));
            "prorate_first_period"?: ((boolean) | (null));
            "recurring_subtotal_money"?: ((MoneyValuePreviousAttributes) | (null));
            "remaining_cycles"?: ((number) | (null));
            "remaining_prepaid_deliveries"?: ((number) | (null));
            "resume_requested_at"?: ((string) | (null));
            "scheduled_cancel_at"?: ((string) | (null));
            "scheduled_plan_change"?: ((SubscriptionScheduledPlanChangePreviousAttributes) | (null));
            "scheduled_promotions"?: ((Array<SubscriptionPromotionPreviousAttributes>) | (null));
            "scheduled_resume_at"?: ((string) | (null));
            "service_location"?: ((SubscriptionServiceLocationPreviousAttributes) | (null));
            "starts_at"?: ((string) | (null));
            "status"?: (("trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {}))
                | (null));
            "subscription_id"?: ((string) | (null));
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null));
            "subscription_plan_id"?: ((string) | (null));
            "supported_actions"?: ((Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>)
                | (null));
            "tax"?: ((SubscriptionTaxPreviousAttributes) | (null));
            "terms_type"?: (("subscription_plan" | "subscription_offer" | (string & {})) | (null));
            "test_clock_id"?: ((string) | (null));
            "trial_end_at"?: ((string) | (null));
            "upcoming_delivery_hold"?: ((SubscriptionUpcomingDeliveryHoldPreviousAttributes) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "subscription.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "subscription.updated";
});
/**
 * The `subscription.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type SubscriptionUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  actor (Optional): {@link ReturnActor}. Who caused this event, captured when the change
     * commits. Omitted when the event predates actor attribution or attribution is unavailable.
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID. object (Required): object. The resource snapshot, without expansions. Webhooks
     * omit no additional fields. object.billing_anchor_day (Optional): integer. UTC day of the
     * month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format:
     * int32. minimum: 1. maximum: 31. object.billing_hold (Optional): {@link
     * SubscriptionBillingHold}. Configuration issue or automatic retry delaying billing, with the
     * first detection time. Flint retries automatically without starting payment recovery. Cleared
     * when billing succeeds, the schedule is replaced, the subscription is paused or canceled, or
     * a card decline starts payment recovery. Included only in merchant responses. Why
     * subscription billing is delayed, with the time Flint first detected it. A billing hold does
     * not mean the card was declined. object.billing_interval (Required): string. How often the
     * subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills
     * quarterly. A change applies from the next renewal that has not been paid; next_billing_at
     * does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * object.billing_interval_count (Required): integer. Number of billing_interval units between
     * charges. Changes with billing_interval. Format: int32. object.billing_interval_options
     * (Optional): Array of {@link SubscriptionIntervalOption}. Billing interval and count pairs
     * the subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * maxItems: 12. uniqueItems: true. object.billing_interval_options[] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer,
     * or subscription lets buyers choose. Prices of lines that ship are per delivery, and each
     * option charges for all deliveries in its period. Without a delivery cadence there is one
     * delivery per period, so every option bills the same line prices once per period. With a
     * delivery cadence, a longer period bills more deliveries of the lines that ship; other lines
     * bill once per period. For a different price per interval with no delivery cadence, create
     * separate plans. object.billing_schedule_owner (Required): string. Who supplies billing
     * dates: flint advances the schedule after each paid renewal; external uses dates you supply.
     * Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum:
     * "flint", "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancel_at_period_end
     * (Required): boolean. True when the subscription is scheduled to cancel at
     * scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo
     * with PATCH and cancel_at_period_end false. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_details
     * (Optional): {@link SubscriptionCancellationDetails}. Who asked to cancel, when, and why.
     * Present once a cancellation is requested, whether it takes effect at the end of the billing
     * period or right away. Omitted when no one asked, and removed when a scheduled cancellation
     * is undone. See cancellation_reason for voluntary and payment-related cancellations. The
     * cancellation request behind a scheduled or completed cancellation.
     * object.cancellation_reason (Optional): string. Why the subscription is canceled or scheduled
     * to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the
     * signup order, end_after_reached when the automatic ending agreement is reached,
     * cancellation_details.requested_by when recorded, payment_failed for other canceled
     * subscriptions without a requester, and other for a scheduled cancellation without a
     * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
     * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * object.completed_cycles (Required): integer. Billing cycles charged so far, including cycles
     * imported with `billing_start.completed_cycles`. The next renewal order's
     * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * object.contract_end_at (Optional): string. When the recorded contract term ends. Does not
     * move when the subscription pauses or changes plan. Flint does not stop the buyer from
     * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.contract_start_at (Optional): string. When the recorded contract term started. Does
     * not move when the subscription pauses or changes plan. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_period_end_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_period_start_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link ExpandedCustomerSummary}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. The customer
     * this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deliveries_per_period (Required): integer. Deliveries paid for by one billing period,
     * from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are
     * per delivery. Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
     * SubscriptionDelivery}. Saved delivery preference with the current delivery method display.
     * Write responses use the same display as GET: fixed shipping reflects the current method
     * configuration, and quoted shipping shows the last paid shipping amount when available. A
     * subscription's saved delivery preference: method, destination, recipient, shipping cost, and
     * who last changed it. object.delivery_hold (Optional): {@link SubscriptionDeliveryHold}.
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it. object.delivery_interval (Required): string
     * or null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is
     * set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly",
     * "yearly", null. object.delivery_interval_count (Required): integer or null. Number of
     * delivery intervals between deliveries. Null when no separate delivery cadence is set.
     * Format: int32. minimum: 1. object.early_termination_fee_money (Optional): {@link
     * MoneyValue}. The fee in the recorded contract terms. Present whenever those terms include a
     * fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later
     * plan changes do not change this fee. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.end_after (Required): {@link SubscriptionEndAfter} or
     * null. Recorded automatic end condition. Null when no automatic end is set. Cycles count
     * charged billing periods, including imported completed_cycles. Pauses and skips do not use
     * cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
     * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
     * without consuming its entitlement. Ending never refunds. object.end_after.anyOf[1] (Value):
     * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
     * charged billing cycles or a saved local calendar date. object.end_after.anyOf[2] (Value):
     * null. object.expires_at (Required): string or null. Projected end under the current schedule
     * and committed plan changes, including an earlier scheduled cancellation. A date limit
     * preserves already-paid entitlement without requiring a future charge schedule. A reached
     * cycle limit uses the last paid period end, or current_period_end_at when no paid history
     * exists; that fallback includes any skip or pause extension. A cycle limit with cycles left
     * needs a future charge schedule unless a known scheduled cancellation determines the end.
     * Paid deliveries extend the end to the last paid delivery when it is later. An indefinite
     * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
     * determined or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_recipient (Required): {@link SubscriptionGiftRecipient} or
     * null. Who receives the gift, when this is a gift subscription. customer_id stays the
     * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
     * erased. Null when the subscription isn't a gift. object.gift_recipient.anyOf[1] (Value):
     * {@link SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
     * purchaser, who pays, gets receipts and reminders, and manages the subscription.
     * delivery.recipient stays the ship-to address. object.gift_recipient.anyOf[2] (Value): null.
     * object.idempotency_key (Optional): string or null. The Idempotency-Key of the request that
     * created this resource. `null` when that request sent no key, Flint created the resource, the
     * reader isn't the caller that created it (another app install, a buyer, or the merchant
     * reading an app's or buyer's record), or the caller that created an older record is unknown.
     * Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed
     * responses and webhook events, can return `null`. To find a key that a replay returns as
     * `null`, read the resource. Buyer sessions on routes shared with merchants get `null`.
     * `/v1/me` responses do not include this field. object.inventory_wait (Optional): {@link
     * SubscriptionInventoryWait}. Renewal waiting for stock. Buyers receive only started_at. Shows
     * that a subscription renewal is waiting for inventory, with the order and invoice involved
     * and when the wait started. object.is_awaiting_billing_schedule (Optional): boolean. True
     * while an active or trialing subscription on an external billing schedule has no next billing
     * date. object.last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal
     * payment failure, present only while status is past_due and the latest payment failed. Buyer
     * responses omit merchant remediation and sensitive decline signals. A summary of why a
     * payment attempt failed, with a normalized error code, a message, the failure time, and
     * remediation. object.line_items (Required): Array of {@link SubscriptionLineItem}. What each
     * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that
     * variant's current catalog price, which then stays until the line changes again.
     * object.line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
     * recurring purchase. object.merchant_id (Required): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and
     * size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.missed_billing_at (Optional): string. The billing date whose payment failed, as an
     * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_billing_at (Optional): string. When Flint next starts a
     * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active
     * subscription has a billing date and isn't set to cancel at the end of its period. Absent
     * when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at,
     * a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed
     * billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at
     * next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at
     * scheduled_cancel_at, and an external schedule awaiting a date reports
     * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.next_delivery_at (Required): string or null. When the next prepaid delivery order is
     * due, shifted by a timed pause. Null when the subscription has an indefinite pause, no
     * delivery is scheduled, or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_retry_at (Required): string or null. Recorded automatic
     * payment retry time. Null when no retry time is available. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.open_renewal_order_id (Optional): string. ID of the paid
     * renewal order whose shipment has not been dispatched. It keeps its committed delivery
     * destination after preference changes and cancellation. Absent when no such renewal order
     * exists. Only renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Optional): {@link MoneyValue}.
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.pause_reason (Optional): string. Why the subscription is paused: merchant for a pause
     * made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed". object.paused_at (Optional):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.paused_delivery_hold (Required): {@link SubscriptionPausedDeliveryHold} or null. The
     * delivery hold that expired and paused the subscription. Null when no stored expiry reason
     * exists, including a manual pause during an active hold, or the subscription is no longer
     * paused for delivery action. object.paused_delivery_hold.anyOf[1] (Value): {@link
     * SubscriptionPausedDeliveryHold}. The delivery hold that expired and paused this
     * subscription. A manual pause during an active hold is not an expiry. This field does not
     * imply a refund. object.paused_delivery_hold.anyOf[2] (Value): null. object.payment_link_id
     * (Optional): string. The payment link that started this subscription, when there was one.
     * Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_method (Optional): {@link
     * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes `payment_method`;
     * `null` when expanded and there is no related payment method. object.payment_method.anyOf[1]
     * (Value): {@link ExpandedPaymentMethodSummary}. A payment method's summary fields, including
     * type, status, and card details, returned when the payment method is expanded.
     * object.payment_method.anyOf[2] (Value): null. object.payment_method_due_at (Required):
     * string or null. First charge boundary while no card is bound: the later of trial_end_at and
     * next_billing_at during a trial, or the next billing date for an imported period, even when
     * that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a
     * card at its boundary cancels without an order or payment attempt. At that boundary, an
     * imported subscription with a positive charge that still has no card enters its normal
     * dunning schedule without a payment attempt. For an imported subscription, a zero charge
     * completes the renewal without a card and the deadline advances to the following boundary.
     * Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel
     * at period end), an active or trialing subscription is in its final end_after cycle, or an
     * external schedule has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method_id (Required): string or null. Saved payment method used for renewal
     * charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing
     * the customer's default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * object.promotions (Required): Array of {@link SubscriptionPromotion}. Recurring promotions
     * applying to the next charged cycle. Scheduled attachments are listed in
     * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
     * excluded. object.promotions[] (Value): {@link SubscriptionPromotion}. A recurring promotion
     * applied to a subscription, including its recurrence and remaining discounted cycles.
     * object.prorate_first_period (Required): boolean. Whether this subscription was created to
     * prorate its first anchored paid period. Set at creation and never changes; starting on the
     * anchor day still bills a normal full period. object.recurring_subtotal_money (Required):
     * {@link MoneyValue} or null. What one billing period's items cost before discounts, shipping,
     * and tax: each line's price with modifiers, times quantity. It changes when items, quantity,
     * or the plan change; editing the plan doesn't change it. For the next charge, use a
     * subscription preview in next_renewal mode. `null` when a cancellation succeeds but Flint
     * couldn't load the billing snapshot afterward, so the cancel response returns it as null.
     * Retrieve the subscription again to get it. object.recurring_subtotal_money.anyOf[1] (Value):
     * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.recurring_subtotal_money.anyOf[2] (Value): null.
     * object.remaining_cycles (Required): integer or null. Charges left for a cycle limit, bounded
     * by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription
     * is canceled. Format: uint64. minimum: 0. object.remaining_prepaid_deliveries (Required):
     * integer. Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
     * with deliveries_per_period minus one. When delivery_hold is present and this count is
     * positive, fixing delivery releases an already-paid delivery with shipping waived and no new
     * charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds,
     * and pauses consume none. Frozen on cancellation for manual refunds. Format: int32. minimum:
     * 0. maximum: 23. object.resume_requested_at (Required): string or null. When Flint accepted a
     * pending resume request. Set only while paused with a resume Flint has not applied yet.
     * Clears when Flint resumes the subscription or refuses the request. `null` when the
     * subscription isn't paused or no resume request is pending. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.scheduled_cancel_at (Required): string or null. When the
     * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
     * while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
     * delivery when it is later. Null when cancel_at_period_end is false or no cancellation time
     * is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
     * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
     * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
     * object.scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}.
     * Frozen target terms that apply at the next charged renewal.
     * object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions (Required):
     * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after the
     * next charged cycle, completed_cycles + 1. Always present; empty when no promotions are
     * scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A recurring
     * promotion applied to a subscription, including its recurrence and remaining discounted
     * cycles. object.scheduled_resume_at (Required): string or null. When a pause with a length
     * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on
     * a prepaid subscription, or billing intervals otherwise. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_location (Optional): {@link SubscriptionServiceLocation}. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified. The
     * address where a subscription's service is delivered, with the saved customer address it came
     * from. object.starts_at (Optional): string. When a scheduled start's first billing period
     * begins. Present only until that first payment succeeds. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Where the subscription is in its
     * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". object.subscription_id (Required):
     * string. Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Optional): Array of string.
     * Merchant actions allowed by the subscription's state. A route can still refuse a listed
     * action for a transient reason, such as a renewal already in progress, with its own error.
     * Always present with merchant credentials. [] enum: "cancel", "pause", "resume",
     * "skip_cycle", "renew", "change_plan", "change_quantity". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
     * "change_quantity". object.tax (Optional): {@link SubscriptionTax} or null. The tax the
     * subscription's renewal, setup fee and plan change orders use. `null` when they follow
     * `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to
     * merchant credentials; omitted for buyer credentials. Always present with merchant
     * credentials. object.tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax the
     * subscription's renewal, setup fee and plan change orders use. Returned only to merchant
     * credentials; omitted for buyer credentials. object.tax.anyOf[2] (Value): null.
     * object.terms_type (Required): string. Terms come from the subscription plan in
     * subscription_plan_id, or from subscription offers identified on each offer line by
     * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * object.test_clock_id (Optional): string. ID of the test clock the subscription's customer
     * was created on. The subscription bills at the clock's time. Present only when the customer
     * is on a test clock. Included only in merchant responses and omitted from buyer responses.
     * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.trial_end_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.upcoming_delivery_hold
     * (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next
     * renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected
     * for an upcoming renewal that will hold the subscription's delivery, and who can fix it.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with every change to the
     * subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.billing_anchor_day (Optional): integer or null. UTC day of the month
     * used for monthly and yearly billing. Applies only to Flint-owned schedules.
     * previous_attributes.billing_anchor_day.anyOf[1] (Value): integer. UTC day of the month used
     * for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32.
     * minimum: 1. maximum: 31. previous_attributes.billing_anchor_day.anyOf[2] (Value): null.
     * previous_attributes.billing_hold (Optional): {@link
     * SubscriptionBillingHoldPreviousAttributes} or null. Configuration issue or automatic retry
     * delaying billing, with the first detection time. Flint retries automatically without
     * starting payment recovery. Cleared when billing succeeds, the schedule is replaced, the
     * subscription is paused or canceled, or a card decline starts payment recovery. Included only
     * in merchant responses. previous_attributes.billing_hold.anyOf[1] (Value): {@link
     * SubscriptionBillingHoldPreviousAttributes}. previous_attributes.billing_hold.anyOf[2]
     * (Value): null. previous_attributes.billing_interval (Optional): string or null. How often
     * the subscription bills now. Read with billing_interval_count: monthly with a count of 3
     * bills quarterly. A change applies from the next renewal that has not been paid;
     * next_billing_at does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * previous_attributes.billing_interval.anyOf[1] (Value): string. How often the subscription
     * bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A
     * change applies from the next renewal that has not been paid; next_billing_at does not move.
     * Value enum: "daily", "weekly", "monthly", "yearly".
     * previous_attributes.billing_interval.anyOf[2] (Value): null.
     * previous_attributes.billing_interval_count (Optional): integer or null. Number of
     * billing_interval units between charges. Changes with billing_interval.
     * previous_attributes.billing_interval_count.anyOf[1] (Value): integer. Number of
     * billing_interval units between charges. Changes with billing_interval. Format: int32.
     * previous_attributes.billing_interval_count.anyOf[2] (Value): null.
     * previous_attributes.billing_interval_options (Optional): Array of {@link
     * SubscriptionIntervalOptionPreviousAttributes} or null. Billing interval and count pairs the
     * subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * previous_attributes.billing_interval_options.anyOf[1] (Value): Array of {@link
     * SubscriptionIntervalOptionPreviousAttributes}. Billing interval and count pairs the
     * subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * maxItems: 12. uniqueItems: true. previous_attributes.billing_interval_options.anyOf[1][]
     * (Value): {@link SubscriptionIntervalOptionPreviousAttributes}.
     * previous_attributes.billing_interval_options.anyOf[2] (Value): null.
     * previous_attributes.billing_schedule_owner (Optional): string or null. Who supplies billing
     * dates: flint advances the schedule after each paid renewal; external uses dates you supply.
     * Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum:
     * "flint", "external". previous_attributes.billing_schedule_owner.anyOf[1] (Value): string.
     * Who supplies billing dates: flint advances the schedule after each paid renewal; external
     * uses dates you supply. Change it with billing_schedule on PATCH
     * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
     * previous_attributes.billing_schedule_owner.anyOf[2] (Value): null.
     * previous_attributes.billing_schedule_waiting_started_at (Optional): string or null. RFC3339
     * timestamp. previous_attributes.billing_schedule_waiting_started_at.anyOf[1] (Value): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.billing_schedule_waiting_started_at.anyOf[2] (Value): null.
     * previous_attributes.cancel_at_period_end (Optional): boolean or null. True when the
     * subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     * previous_attributes.cancel_at_period_end.anyOf[1] (Value): boolean. True when the
     * subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     * previous_attributes.cancel_at_period_end.anyOf[2] (Value): null.
     * previous_attributes.canceled_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.canceled_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2]
     * (Value): null. previous_attributes.cancellation_details (Optional): {@link
     * SubscriptionCancellationDetailsPreviousAttributes} or null. Who asked to cancel, when, and
     * why. Present once a cancellation is requested, whether it takes effect at the end of the
     * billing period or right away. Omitted when no one asked, and removed when a scheduled
     * cancellation is undone. See cancellation_reason for voluntary and payment-related
     * cancellations. previous_attributes.cancellation_details.anyOf[1] (Value): {@link
     * SubscriptionCancellationDetailsPreviousAttributes}.
     * previous_attributes.cancellation_details.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the subscription is
     * canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory
     * refund fully refunds the signup order, end_after_reached when the automatic ending agreement
     * is reached, cancellation_details.requested_by when recorded, payment_failed for other
     * canceled subscriptions without a requester, and other for a scheduled cancellation without a
     * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
     * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * previous_attributes.cancellation_reason.anyOf[1] (Value): string. Why the subscription is
     * canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory
     * refund fully refunds the signup order, end_after_reached when the automatic ending agreement
     * is reached, cancellation_details.requested_by when recorded, payment_failed for other
     * canceled subscriptions without a requester, and other for a scheduled cancellation without a
     * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
     * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.completed_cycles (Optional): integer or null. Billing cycles charged so
     * far, including cycles imported with `billing_start.completed_cycles`. The next renewal
     * order's `subscription_cycle` is this number plus one.
     * previous_attributes.completed_cycles.anyOf[1] (Value): integer. Billing cycles charged so
     * far, including cycles imported with `billing_start.completed_cycles`. The next renewal
     * order's `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * previous_attributes.completed_cycles.anyOf[2] (Value): null.
     * previous_attributes.contract_end_at (Optional): string or null. When the recorded contract
     * term ends. Does not move when the subscription pauses or changes plan. Flint does not stop
     * the buyer from canceling earlier. previous_attributes.contract_end_at.anyOf[1] (Value):
     * string. When the recorded contract term ends. Does not move when the subscription pauses or
     * changes plan. Flint does not stop the buyer from canceling earlier. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.contract_end_at.anyOf[2] (Value): null.
     * previous_attributes.contract_start_at (Optional): string or null. When the recorded contract
     * term started. Does not move when the subscription pauses or changes plan.
     * previous_attributes.contract_start_at.anyOf[1] (Value): string. When the recorded contract
     * term started. Does not move when the subscription pauses or changes plan. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.contract_start_at.anyOf[2] (Value):
     * null. previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.current_period_end_at (Optional): string or null. RFC3339
     * timestamp. previous_attributes.current_period_end_at.anyOf[1] (Value): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.current_period_end_at.anyOf[2] (Value): null.
     * previous_attributes.current_period_start_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.current_period_start_at.anyOf[1] (Value): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.current_period_start_at.anyOf[2] (Value): null.
     * previous_attributes.customer (Optional): {@link ExpandedCustomerSummaryPreviousAttributes}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. The customer this
     * subscription bills. previous_attributes.customer_id.anyOf[1] (Value): string. The customer
     * this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.deliveries_per_period (Optional): integer or null. Deliveries paid for
     * by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of
     * lines that ship are per delivery. previous_attributes.deliveries_per_period.anyOf[1]
     * (Value): integer. Deliveries paid for by one billing period, from 1 to 24. One when no
     * separate delivery cadence is set. Prices of lines that ship are per delivery. Format: int32.
     * minimum: 1. maximum: 24. previous_attributes.deliveries_per_period.anyOf[2] (Value): null.
     * previous_attributes.delivery (Optional): {@link SubscriptionDeliveryPreviousAttributes} or
     * null. Saved delivery preference with the current delivery method display. Write responses
     * use the same display as GET: fixed shipping reflects the current method configuration, and
     * quoted shipping shows the last paid shipping amount when available.
     * previous_attributes.delivery.anyOf[1] (Value): {@link
     * SubscriptionDeliveryPreviousAttributes}. previous_attributes.delivery.anyOf[2] (Value):
     * null. previous_attributes.delivery_hold (Optional): {@link
     * SubscriptionDeliveryHoldPreviousAttributes} or null. Current delivery issue that blocks
     * collection. Mutually exclusive with upcoming_delivery_hold.
     * previous_attributes.delivery_hold.anyOf[1] (Value): {@link
     * SubscriptionDeliveryHoldPreviousAttributes}. previous_attributes.delivery_hold.anyOf[2]
     * (Value): null. previous_attributes.delivery_interval (Optional): string or null. Delivery
     * cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is
     * made per billing period. Value enum: "daily", "weekly", "monthly", "yearly", null.
     * previous_attributes.delivery_interval.anyOf[1] (Value): string. Delivery cadence frozen from
     * the plan. Null when no separate delivery cadence is set; one delivery is made per billing
     * period. Value enum: "daily", "weekly", "monthly", "yearly", null.
     * previous_attributes.delivery_interval.anyOf[2] (Value): null.
     * previous_attributes.delivery_interval_count (Optional): integer or null. Number of delivery
     * intervals between deliveries. Null when no separate delivery cadence is set.
     * previous_attributes.delivery_interval_count.anyOf[1] (Value): integer. Number of delivery
     * intervals between deliveries. Null when no separate delivery cadence is set. Format: int32.
     * minimum: 1. previous_attributes.delivery_interval_count.anyOf[2] (Value): null.
     * previous_attributes.early_termination_fee_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. The fee in the recorded contract terms. Present
     * whenever those terms include a fee. It applies only to a cancellation before
     * contract_end_at. Flint never charges it. Later plan changes do not change this fee.
     * previous_attributes.early_termination_fee_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.early_termination_fee_money.anyOf[2]
     * (Value): null. previous_attributes.end_after (Optional): ({@link
     * SubscriptionEndAfterPreviousAttributes} or null) or null. Recorded automatic end condition.
     * Null when no automatic end is set. Cycles count charged billing periods, including imported
     * completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries
     * continue on their shifted dates, even beyond the end date, and cancellation waits for the
     * last remaining delivery. Skipping defers a delivery without consuming its entitlement.
     * Ending never refunds. previous_attributes.end_after.anyOf[1] (Value): ({@link
     * SubscriptionEndAfterPreviousAttributes} or null). Recorded automatic end condition. Null
     * when no automatic end is set. Cycles count charged billing periods, including imported
     * completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries
     * continue on their shifted dates, even beyond the end date, and cancellation waits for the
     * last remaining delivery. Skipping defers a delivery without consuming its entitlement.
     * Ending never refunds. previous_attributes.end_after.anyOf[1].anyOf[1] (Value): {@link
     * SubscriptionEndAfterPreviousAttributes}. The subscription's automatic end condition,
     * measured by charged billing cycles or a saved local calendar date.
     * previous_attributes.end_after.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.end_after.anyOf[2] (Value): null. previous_attributes.expires_at
     * (Optional): string or null. Projected end under the current schedule and committed plan
     * changes, including an earlier scheduled cancellation. A date limit preserves already-paid
     * entitlement without requiring a future charge schedule. A reached cycle limit uses the last
     * paid period end, or current_period_end_at when no paid history exists; that fallback
     * includes any skip or pause extension. A cycle limit with cycles left needs a future charge
     * schedule unless a known scheduled cancellation determines the end. Paid deliveries extend
     * the end to the last paid delivery when it is later. An indefinite pause with paid deliveries
     * owed makes the end unknown. Null when the end cannot be determined or the subscription is
     * canceled. previous_attributes.expires_at.anyOf[1] (Value): string. Projected end under the
     * current schedule and committed plan changes, including an earlier scheduled cancellation. A
     * date limit preserves already-paid entitlement without requiring a future charge schedule. A
     * reached cycle limit uses the last paid period end, or current_period_end_at when no paid
     * history exists; that fallback includes any skip or pause extension. A cycle limit with
     * cycles left needs a future charge schedule unless a known scheduled cancellation determines
     * the end. Paid deliveries extend the end to the last paid delivery when it is later. An
     * indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot
     * be determined or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.gift_recipient (Optional): {@link
     * SubscriptionGiftRecipientPreviousAttributes} or null. Who receives the gift, when this is a
     * gift subscription. customer_id stays the purchaser. Flint clears it when the subscription
     * ends and when the purchaser's data is erased. Null when the subscription isn't a gift.
     * previous_attributes.gift_recipient.anyOf[1] (Value): {@link
     * SubscriptionGiftRecipientPreviousAttributes}. previous_attributes.gift_recipient.anyOf[2]
     * (Value): null. previous_attributes.idempotency_key (Optional): string or null. The
     * Idempotency-Key of the request that created this resource. `null` when that request sent no
     * key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. Buyer sessions on routes
     * shared with merchants get `null`. `/v1/me` responses do not include this field.
     * previous_attributes.idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. Buyer sessions on routes shared with merchants get
     * `null`. `/v1/me` responses do not include this field.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_wait (Optional): {@link
     * SubscriptionInventoryWaitPreviousAttributes} or null. Renewal waiting for stock. Buyers
     * receive only started_at. previous_attributes.inventory_wait.anyOf[1] (Value): {@link
     * SubscriptionInventoryWaitPreviousAttributes}. previous_attributes.inventory_wait.anyOf[2]
     * (Value): null. previous_attributes.is_awaiting_billing_schedule (Optional): boolean or null.
     * True while an active or trialing subscription on an external billing schedule has no next
     * billing date. previous_attributes.is_awaiting_billing_schedule.anyOf[1] (Value): boolean.
     * True while an active or trialing subscription on an external billing schedule has no next
     * billing date. previous_attributes.is_awaiting_billing_schedule.anyOf[2] (Value): null.
     * previous_attributes.last_payment_error (Optional): {@link
     * PaymentErrorSummaryPreviousAttributes} or null. Latest renewal payment failure, present only
     * while status is past_due and the latest payment failed. Buyer responses omit merchant
     * remediation and sensitive decline signals. previous_attributes.last_payment_error.anyOf[1]
     * (Value): {@link PaymentErrorSummaryPreviousAttributes}.
     * previous_attributes.last_payment_error.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link
     * SubscriptionLineItemPreviousAttributes} or null. What each renewal bills. Plan edits do not
     * change it. Adding, changing or swapping a line takes that variant's current catalog price,
     * which then stays until the line changes again. previous_attributes.line_items.anyOf[1]
     * (Value): Array of {@link SubscriptionLineItemPreviousAttributes}. What each renewal bills.
     * Plan edits do not change it. Adding, changing or swapping a line takes that variant's
     * current catalog price, which then stays until the line changes again.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link
     * SubscriptionLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.merchant_id (Optional): string or null. ID of the merchant this
     * resource belongs to. previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.missed_billing_at (Optional): string or null. The billing date whose
     * payment failed, as an RFC3339 timestamp. Present only while status is past_due.
     * previous_attributes.missed_billing_at.anyOf[1] (Value): string. The billing date whose
     * payment failed, as an RFC3339 timestamp. Present only while status is past_due. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.missed_billing_at.anyOf[2]
     * (Value): null. previous_attributes.next_billing_at (Optional): string or null. When Flint
     * next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a
     * trialing or active subscription has a billing date and isn't set to cancel at the end of its
     * period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends
     * at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports
     * the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one
     * retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at
     * scheduled_cancel_at, and an external schedule awaiting a date reports
     * is_awaiting_billing_schedule. previous_attributes.next_billing_at.anyOf[1] (Value): string.
     * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only
     * while a trialing or active subscription has a billing date and isn't set to cancel at the
     * end of its period. Absent when no renewal is scheduled: a subscription in its final billing
     * cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due
     * one reports the failed billing date in missed_billing_at and retries at next_retry_at, an
     * incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to
     * cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports
     * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.next_billing_at.anyOf[2] (Value): null.
     * previous_attributes.next_delivery_at (Optional): string or null. When the next prepaid
     * delivery order is due, shifted by a timed pause. Null when the subscription has an
     * indefinite pause, no delivery is scheduled, or the subscription is canceled.
     * previous_attributes.next_delivery_at.anyOf[1] (Value): string. When the next prepaid
     * delivery order is due, shifted by a timed pause. Null when the subscription has an
     * indefinite pause, no delivery is scheduled, or the subscription is canceled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.next_delivery_at.anyOf[2]
     * (Value): null. previous_attributes.next_retry_at (Optional): string or null. Recorded
     * automatic payment retry time. Null when no retry time is available.
     * previous_attributes.next_retry_at.anyOf[1] (Value): string. Recorded automatic payment retry
     * time. Null when no retry time is available. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.next_retry_at.anyOf[2] (Value): null.
     * previous_attributes.open_renewal_order_id (Optional): string or null. ID of the paid renewal
     * order whose shipment has not been dispatched. It keeps its committed delivery destination
     * after preference changes and cancellation. Absent when no such renewal order exists. Only
     * renewal orders count; the signup order is not included.
     * previous_attributes.open_renewal_order_id.anyOf[1] (Value): string. ID of the paid renewal
     * order whose shipment has not been dispatched. It keeps its committed delivery destination
     * after preference changes and cancellation. Absent when no such renewal order exists. Only
     * renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.open_renewal_order_id.anyOf[2]
     * (Value): null. previous_attributes.outstanding_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Unpaid balance of the failed renewal order, including
     * tax, shipping and discounts, after payments and credits. Present only while status is
     * past_due and a positive balance remains. previous_attributes.outstanding_money.anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.outstanding_money.anyOf[2] (Value): null.
     * previous_attributes.pause_reason (Optional): string or null. Why the subscription is paused:
     * merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed".
     * previous_attributes.pause_reason.anyOf[1] (Value): string. Why the subscription is paused:
     * merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed".
     * previous_attributes.pause_reason.anyOf[2] (Value): null. previous_attributes.paused_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.paused_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.paused_at.anyOf[2] (Value): null.
     * previous_attributes.paused_delivery_hold (Optional): {@link
     * SubscriptionPausedDeliveryHoldPreviousAttributes} or null. The delivery hold that expired
     * and paused the subscription. Null when no stored expiry reason exists, including a manual
     * pause during an active hold, or the subscription is no longer paused for delivery action.
     * previous_attributes.paused_delivery_hold.anyOf[1] (Value): {@link
     * SubscriptionPausedDeliveryHoldPreviousAttributes}.
     * previous_attributes.paused_delivery_hold.anyOf[2] (Value): null.
     * previous_attributes.payment_link_id (Optional): string or null. The payment link that
     * started this subscription, when there was one. previous_attributes.payment_link_id.anyOf[1]
     * (Value): string. The payment link that started this subscription, when there was one.
     * Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". previous_attributes.payment_link_id.anyOf[2]
     * (Value): null. previous_attributes.payment_method (Optional): {@link
     * ExpandedPaymentMethodSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `payment_method`; `null` when expanded and there is no related payment method.
     * previous_attributes.payment_method.anyOf[1] (Value): {@link
     * ExpandedPaymentMethodSummaryPreviousAttributes}. previous_attributes.payment_method.anyOf[2]
     * (Value): null. previous_attributes.payment_method_due_at (Optional): string or null. First
     * charge boundary while no card is bound: the later of trial_end_at and next_billing_at during
     * a trial, or the next billing date for an imported period, even when that cycle's charge is
     * zero. Recomputed when the schedule changes. A trial still without a card at its boundary
     * cancels without an order or payment attempt. At that boundary, an imported subscription with
     * a positive charge that still has no card enters its normal dunning schedule without a
     * payment attempt. For an imported subscription, a zero charge completes the renewal without a
     * card and the deadline advances to the following boundary. Null when a card is bound,
     * collection is not scheduled (paused, canceled, or set to cancel at period end), an active or
     * trialing subscription is in its final end_after cycle, or an external schedule has no known
     * boundary. previous_attributes.payment_method_due_at.anyOf[1] (Value): string. First charge
     * boundary while no card is bound: the later of trial_end_at and next_billing_at during a
     * trial, or the next billing date for an imported period, even when that cycle's charge is
     * zero. Recomputed when the schedule changes. A trial still without a card at its boundary
     * cancels without an order or payment attempt. At that boundary, an imported subscription with
     * a positive charge that still has no card enters its normal dunning schedule without a
     * payment attempt. For an imported subscription, a zero charge completes the renewal without a
     * card and the deadline advances to the following boundary. Null when a card is bound,
     * collection is not scheduled (paused, canceled, or set to cancel at period end), an active or
     * trialing subscription is in its final end_after cycle, or an external schedule has no known
     * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.payment_method_due_at.anyOf[2] (Value): null.
     * previous_attributes.payment_method_id (Optional): string or null. Saved payment method used
     * for renewal charges. Null when no card is bound. Bind a card to this subscription with
     * PATCH; changing the customer's default alone does not bind it.
     * previous_attributes.payment_method_id.anyOf[1] (Value): string. Saved payment method used
     * for renewal charges. Null when no card is bound. Bind a card to this subscription with
     * PATCH; changing the customer's default alone does not bind it. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ". previous_attributes.payment_method_id.anyOf[2] (Value):
     * null. previous_attributes.promotions (Optional): Array of {@link
     * SubscriptionPromotionPreviousAttributes} or null. Recurring promotions applying to the next
     * charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none
     * apply; signup-only and exhausted promotions are excluded.
     * previous_attributes.promotions.anyOf[1] (Value): Array of {@link
     * SubscriptionPromotionPreviousAttributes}. Recurring promotions applying to the next charged
     * cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply;
     * signup-only and exhausted promotions are excluded. previous_attributes.promotions.anyOf[1][]
     * (Value): {@link SubscriptionPromotionPreviousAttributes}.
     * previous_attributes.promotions.anyOf[2] (Value): null.
     * previous_attributes.prorate_first_period (Optional): boolean or null. Whether this
     * subscription was created to prorate its first anchored paid period. Set at creation and
     * never changes; starting on the anchor day still bills a normal full period.
     * previous_attributes.prorate_first_period.anyOf[1] (Value): boolean. Whether this
     * subscription was created to prorate its first anchored paid period. Set at creation and
     * never changes; starting on the anchor day still bills a normal full period.
     * previous_attributes.prorate_first_period.anyOf[2] (Value): null.
     * previous_attributes.recurring_subtotal_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. What one billing period's items cost before
     * discounts, shipping, and tax: each line's price with modifiers, times quantity. It changes
     * when items, quantity, or the plan change; editing the plan doesn't change it. For the next
     * charge, use a subscription preview in next_renewal mode. `null` when a cancellation succeeds
     * but Flint couldn't load the billing snapshot afterward, so the cancel response returns it as
     * null. Retrieve the subscription again to get it.
     * previous_attributes.recurring_subtotal_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.recurring_subtotal_money.anyOf[2]
     * (Value): null. previous_attributes.remaining_cycles (Optional): integer or null. Charges
     * left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no
     * cycle limit or the subscription is canceled. previous_attributes.remaining_cycles.anyOf[1]
     * (Value): integer. Charges left for a cycle limit, bounded by an earlier scheduled
     * cancellation. Null when there is no cycle limit or the subscription is canceled. Format:
     * uint64. minimum: 0. previous_attributes.remaining_cycles.anyOf[2] (Value): null.
     * previous_attributes.remaining_prepaid_deliveries (Optional): integer or null. Paid
     * deliveries whose delivery order Flint hasn't created yet. A paid period starts with
     * deliveries_per_period minus one. When delivery_hold is present and this count is positive,
     * fixing delivery releases an already-paid delivery with shipping waived and no new charge. A
     * next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses
     * consume none. Frozen on cancellation for manual refunds.
     * previous_attributes.remaining_prepaid_deliveries.anyOf[1] (Value): integer. Paid deliveries
     * whose delivery order Flint hasn't created yet. A paid period starts with
     * deliveries_per_period minus one. When delivery_hold is present and this count is positive,
     * fixing delivery releases an already-paid delivery with shipping waived and no new charge. A
     * next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses
     * consume none. Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum:
     * 23. previous_attributes.remaining_prepaid_deliveries.anyOf[2] (Value): null.
     * previous_attributes.resume_requested_at (Optional): string or null. When Flint accepted a
     * pending resume request. Set only while paused with a resume Flint has not applied yet.
     * Clears when Flint resumes the subscription or refuses the request. `null` when the
     * subscription isn't paused or no resume request is pending.
     * previous_attributes.resume_requested_at.anyOf[1] (Value): string. When Flint accepted a
     * pending resume request. Set only while paused with a resume Flint has not applied yet.
     * Clears when Flint resumes the subscription or refuses the request. `null` when the
     * subscription isn't paused or no resume request is pending. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.resume_requested_at.anyOf[2] (Value): null.
     * previous_attributes.scheduled_cancel_at (Optional): string or null. When the scheduled
     * cancellation takes effect: trial_end_at while trialing, current_period_end_at while active,
     * or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it
     * is later. Null when cancel_at_period_end is false or no cancellation time is available.
     * previous_attributes.scheduled_cancel_at.anyOf[1] (Value): string. When the scheduled
     * cancellation takes effect: trial_end_at while trialing, current_period_end_at while active,
     * or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it
     * is later. Null when cancel_at_period_end is false or no cancellation time is available.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.scheduled_cancel_at.anyOf[2] (Value): null.
     * previous_attributes.scheduled_plan_change (Optional): {@link
     * SubscriptionScheduledPlanChangePreviousAttributes} or null. Frozen target terms for the next
     * charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change:
     * null on PATCH; replace through change-plan.
     * previous_attributes.scheduled_plan_change.anyOf[1] (Value): {@link
     * SubscriptionScheduledPlanChangePreviousAttributes}.
     * previous_attributes.scheduled_plan_change.anyOf[2] (Value): null.
     * previous_attributes.scheduled_promotions (Optional): Array of {@link
     * SubscriptionPromotionPreviousAttributes} or null. Attached promotions whose first_cycle is
     * after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
     * are scheduled. previous_attributes.scheduled_promotions.anyOf[1] (Value): Array of {@link
     * SubscriptionPromotionPreviousAttributes}. Attached promotions whose first_cycle is after the
     * next charged cycle, completed_cycles + 1. Always present; empty when no promotions are
     * scheduled. previous_attributes.scheduled_promotions.anyOf[1][] (Value): {@link
     * SubscriptionPromotionPreviousAttributes}. previous_attributes.scheduled_promotions.anyOf[2]
     * (Value): null. previous_attributes.scheduled_resume_at (Optional): string or null. When a
     * pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals
     * after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
     * subscription is not paused or the pause has no length, such as a pause until you resume it
     * or the pause Flint starts when a delivery hold runs out.
     * previous_attributes.scheduled_resume_at.anyOf[1] (Value): string. When a pause with a length
     * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on
     * a prepaid subscription, or billing intervals otherwise. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.scheduled_resume_at.anyOf[2] (Value): null.
     * previous_attributes.service_location (Optional): {@link
     * SubscriptionServiceLocationPreviousAttributes} or null. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified.
     * previous_attributes.service_location.anyOf[1] (Value): {@link
     * SubscriptionServiceLocationPreviousAttributes}.
     * previous_attributes.service_location.anyOf[2] (Value): null. previous_attributes.starts_at
     * (Optional): string or null. When a scheduled start's first billing period begins. Present
     * only until that first payment succeeds. previous_attributes.starts_at.anyOf[1] (Value):
     * string. When a scheduled start's first billing period begins. Present only until that first
     * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.starts_at.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Where the subscription is in its lifecycle. Each value says what it means.
     * Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
     * "scheduled". previous_attributes.status.anyOf[1] (Value): string. Where the subscription is
     * in its lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". previous_attributes.status.anyOf[2]
     * (Value): null. previous_attributes.subscription_id (Optional): string or null. Stable
     * identifier of the subscription. previous_attributes.subscription_id.anyOf[1] (Value):
     * string. Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * previous_attributes.subscription_id.anyOf[2] (Value): null.
     * previous_attributes.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes} or null. Present only when `expand`
     * includes `subscription_plan`; `null` when expanded and there is no related subscription
     * plan. previous_attributes.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes}.
     * previous_attributes.subscription_plan.anyOf[2] (Value): null.
     * previous_attributes.subscription_plan_id (Optional): string or null. Subscription plan ID.
     * Omitted when terms_type is subscription_offer.
     * previous_attributes.subscription_plan_id.anyOf[1] (Value): string. Subscription plan ID.
     * Omitted when terms_type is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * previous_attributes.subscription_plan_id.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Merchant actions
     * allowed by the subscription's state. A route can still refuse a listed action for a
     * transient reason, such as a renewal already in progress, with its own error. Always present
     * with merchant credentials. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew",
     * "change_plan", "change_quantity". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Merchant actions allowed by the subscription's state. A route can still
     * refuse a listed action for a transient reason, such as a renewal already in progress, with
     * its own error. Always present with merchant credentials. [] enum: "cancel", "pause",
     * "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel",
     * "pause", "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.tax
     * (Optional): {@link SubscriptionTaxPreviousAttributes} or null. The tax the subscription's
     * renewal, setup fee and plan change orders use. `null` when they follow `tax.default_enabled`
     * and `tax.default_calculation` from your settings. Returned only to merchant credentials;
     * omitted for buyer credentials. Always present with merchant credentials.
     * previous_attributes.tax.anyOf[1] (Value): {@link SubscriptionTaxPreviousAttributes}.
     * previous_attributes.tax.anyOf[2] (Value): null. previous_attributes.terms_type (Optional):
     * string or null. Terms come from the subscription plan in subscription_plan_id, or from
     * subscription offers identified on each offer line by subscription_offer_id. Value enum:
     * "subscription_plan", "subscription_offer". previous_attributes.terms_type.anyOf[1] (Value):
     * string. Terms come from the subscription plan in subscription_plan_id, or from subscription
     * offers identified on each offer line by subscription_offer_id. Value enum:
     * "subscription_plan", "subscription_offer". previous_attributes.terms_type.anyOf[2] (Value):
     * null. previous_attributes.test_clock_id (Optional): string or null. ID of the test clock the
     * subscription's customer was created on. The subscription bills at the clock's time. Present
     * only when the customer is on a test clock. Included only in merchant responses and omitted
     * from buyer responses. previous_attributes.test_clock_id.anyOf[1] (Value): string. ID of the
     * test clock the subscription's customer was created on. The subscription bills at the clock's
     * time. Present only when the customer is on a test clock. Included only in merchant responses
     * and omitted from buyer responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
     * previous_attributes.test_clock_id.anyOf[2] (Value): null. previous_attributes.trial_end_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.trial_end_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.trial_end_at.anyOf[2] (Value): null.
     * previous_attributes.upcoming_delivery_hold (Optional): {@link
     * SubscriptionUpcomingDeliveryHoldPreviousAttributes} or null. Delivery issue forecast for the
     * next renewal at renewal_at. Mutually exclusive with delivery_hold.
     * previous_attributes.upcoming_delivery_hold.anyOf[1] (Value): {@link
     * SubscriptionUpcomingDeliveryHoldPreviousAttributes}.
     * previous_attributes.upcoming_delivery_hold.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Goes up with every change to
     * the subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed.
     * previous_attributes.version.anyOf[1] (Value): integer. Goes up with every change to the
     * subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * Who caused this event, captured when the change commits. Omitted when the event predates
         * actor attribution or attribution is unavailable. Who performed a return action: a buyer,
         * merchant, integration, or the system, with an optional ID.
         */
        "actor"?: ReturnActor;
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_anchor_day (Optional): integer. UTC day of the month used for monthly and yearly
         * billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
         * billing_hold (Optional): {@link SubscriptionBillingHold}. Configuration issue or
         * automatic retry delaying billing, with the first detection time. Flint retries
         * automatically without starting payment recovery. Cleared when billing succeeds, the
         * schedule is replaced, the subscription is paused or canceled, or a card decline starts
         * payment recovery. Included only in merchant responses. Why subscription billing is
         * delayed, with the time Flint first detected it. A billing hold does not mean the card
         * was declined. billing_interval (Required): string. How often the subscription bills now.
         * Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change
         * applies from the next renewal that has not been paid; next_billing_at does not move.
         * Value enum: "daily", "weekly", "monthly", "yearly". billing_interval_count (Required):
         * integer. Number of billing_interval units between charges. Changes with
         * billing_interval. Format: int32. billing_interval_options (Optional): Array of {@link
         * SubscriptionIntervalOption}. Billing interval and count pairs the subscription can
         * switch to. For a subscription on a plan, they follow the plan's current
         * billing_interval_options. A subscription that came from an offer keeps the pairs the
         * offer had at signup. Prices of lines that ship are per delivery. Each option charges for
         * all deliveries in its period. Changing the interval does not change the per-delivery
         * price. maxItems: 12. uniqueItems: true. billing_interval_options[] (Value): {@link
         * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan,
         * offer, or subscription lets buyers choose. Prices of lines that ship are per delivery,
         * and each option charges for all deliveries in its period. Without a delivery cadence
         * there is one delivery per period, so every option bills the same line prices once per
         * period. With a delivery cadence, a longer period bills more deliveries of the lines that
         * ship; other lines bill once per period. For a different price per interval with no
         * delivery cadence, create separate plans. billing_schedule_owner (Required): string. Who
         * supplies billing dates: flint advances the schedule after each paid renewal; external
         * uses dates you supply. Change it with billing_schedule on PATCH
         * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
         * billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". cancel_at_period_end (Required): boolean.
         * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with
         * POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
         * cancel_at_period_end false. canceled_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * signup_order_refunded when an automatic inventory refund fully refunds the signup order,
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * completed_cycles (Required): integer. Billing cycles charged so far, including cycles
         * imported with `billing_start.completed_cycles`. The next renewal order's
         * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
         * contract_end_at (Optional): string. When the recorded contract term ends. Does not move
         * when the subscription pauses or changes plan. Flint does not stop the buyer from
         * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". contract_start_at
         * (Optional): string. When the recorded contract term started. Does not move when the
         * subscription pauses or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_end_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_start_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
         * delivery (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the
         * current delivery method display. Write responses use the same display as GET: fixed
         * shipping reflects the current method configuration, and quoted shipping shows the last
         * paid shipping amount when available. A subscription's saved delivery preference: method,
         * destination, recipient, shipping cost, and who last changed it. delivery_hold
         * (Optional): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
         * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
         * deliveries because its delivery method or destination no longer works, and who can fix
         * it. delivery_interval (Required): string or null. Delivery cadence frozen from the plan.
         * Null when no separate delivery cadence is set; one delivery is made per billing period.
         * Value enum: "daily", "weekly", "monthly", "yearly", null. delivery_interval_count
         * (Required): integer or null. Number of delivery intervals between deliveries. Null when
         * no separate delivery cadence is set. Format: int32. minimum: 1.
         * early_termination_fee_money (Optional): {@link MoneyValue}. The fee in the recorded
         * contract terms. Present whenever those terms include a fee. It applies only to a
         * cancellation before contract_end_at. Flint never charges it. Later plan changes do not
         * change this fee. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. end_after (Required): {@link SubscriptionEndAfter} or null. Recorded
         * automatic end condition. Null when no automatic end is set. Cycles count charged billing
         * periods, including imported completed_cycles. Pauses and skips do not use cycles.
         * Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
         * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
         * without consuming its entitlement. Ending never refunds. end_after.anyOf[1] (Value):
         * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
         * charged billing cycles or a saved local calendar date. end_after.anyOf[2] (Value): null.
         * expires_at (Required): string or null. Projected end under the current schedule and
         * committed plan changes, including an earlier scheduled cancellation. A date limit
         * preserves already-paid entitlement without requiring a future charge schedule. A reached
         * cycle limit uses the last paid period end, or current_period_end_at when no paid history
         * exists; that fallback includes any skip or pause extension. A cycle limit with cycles
         * left needs a future charge schedule unless a known scheduled cancellation determines the
         * end. Paid deliveries extend the end to the last paid delivery when it is later. An
         * indefinite pause with paid deliveries owed makes the end unknown. Null when the end
         * cannot be determined or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". gift_recipient (Required): {@link SubscriptionGiftRecipient} or null.
         * Who receives the gift, when this is a gift subscription. customer_id stays the
         * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
         * erased. Null when the subscription isn't a gift. gift_recipient.anyOf[1] (Value): {@link
         * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
         * purchaser, who pays, gets receipts and reminders, and manages the subscription.
         * delivery.recipient stays the ship-to address. gift_recipient.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource. `null` when that request sent no key, Flint created the resource,
         * the reader isn't the caller that created it (another app install, a buyer, or the
         * merchant reading an app's or buyer's record), or the caller that created an older record
         * is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer sessions on routes shared with
         * merchants get `null`. `/v1/me` responses do not include this field. inventory_wait
         * (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for stock. Buyers receive
         * only started_at. Shows that a subscription renewal is waiting for inventory, with the
         * order and invoice involved and when the wait started. is_awaiting_billing_schedule
         * (Optional): boolean. True while an active or trialing subscription on an external
         * billing schedule has no next billing date. last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Latest renewal payment failure, present only while status is
         * past_due and the latest payment failed. Buyer responses omit merchant remediation and
         * sensitive decline signals. A summary of why a payment attempt failed, with a normalized
         * error code, a message, the failure time, and remediation. line_items (Required): Array
         * of {@link SubscriptionLineItem}. What each renewal bills. Plan edits do not change it.
         * Adding, changing or swapping a line takes that variant's current catalog price, which
         * then stays until the line changes again. line_items[] (Value): {@link
         * SubscriptionLineItem}. An item included in a customer's recurring purchase. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them.
         * missed_billing_at (Optional): string. The billing date whose payment failed, as an
         * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_billing_at (Optional): string. When Flint next starts a
         * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or
         * active subscription has a billing date and isn't set to cancel at the end of its period.
         * Absent when no renewal is scheduled: a subscription in its final billing cycle ends at
         * expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports
         * the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete
         * one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel
         * ends at scheduled_cancel_at, and an external schedule awaiting a date reports
         * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * next_delivery_at (Required): string or null. When the next prepaid delivery order is
         * due, shifted by a timed pause. Null when the subscription has an indefinite pause, no
         * delivery is scheduled, or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_retry_at (Required): string or null. Recorded automatic
         * payment retry time. Null when no retry time is available. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". open_renewal_order_id (Optional): string. ID of the paid renewal
         * order whose shipment has not been dispatched. It keeps its committed delivery
         * destination after preference changes and cancellation. Absent when no such renewal order
         * exists. Only renewal orders count; the signup order is not included. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". outstanding_money (Optional): {@link MoneyValue}.
         * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
         * payments and credits. Present only while status is past_due and a positive balance
         * remains. Monetary amount represented as integer minor units plus an ISO 4217 currency
         * code. pause_reason (Optional): string. Why the subscription is paused: merchant for a
         * pause made with your API key or dashboard, buyer for the buyer's own pause,
         * delivery_action_required for a pause during or after a delivery hold, and payment_failed
         * when renewal payment retries ran out and your dunning settings pause the subscription.
         * Omitted when the subscription is not paused. Value enum: "buyer",
         * "delivery_action_required", "merchant", "payment_failed". paused_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * paused_delivery_hold (Required): {@link SubscriptionPausedDeliveryHold} or null. The
         * delivery hold that expired and paused the subscription. Null when no stored expiry
         * reason exists, including a manual pause during an active hold, or the subscription is no
         * longer paused for delivery action. paused_delivery_hold.anyOf[1] (Value): {@link
         * SubscriptionPausedDeliveryHold}. The delivery hold that expired and paused this
         * subscription. A manual pause during an active hold is not an expiry. This field does not
         * imply a refund. paused_delivery_hold.anyOf[2] (Value): null. payment_link_id (Optional):
         * string. The payment link that started this subscription, when there was one. Example:
         * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_method (Optional): {@link
         * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes
         * `payment_method`; `null` when expanded and there is no related payment method.
         * payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. payment_method.anyOf[2] (Value): null. payment_method_due_at
         * (Required): string or null. First charge boundary while no card is bound: the later of
         * trial_end_at and next_billing_at during a trial, or the next billing date for an
         * imported period, even when that cycle's charge is zero. Recomputed when the schedule
         * changes. A trial still without a card at its boundary cancels without an order or
         * payment attempt. At that boundary, an imported subscription with a positive charge that
         * still has no card enters its normal dunning schedule without a payment attempt. For an
         * imported subscription, a zero charge completes the renewal without a card and the
         * deadline advances to the following boundary. Null when a card is bound, collection is
         * not scheduled (paused, canceled, or set to cancel at period end), an active or trialing
         * subscription is in its final end_after cycle, or an external schedule has no known
         * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method_id
         * (Required): string or null. Saved payment method used for renewal charges. Null when no
         * card is bound. Bind a card to this subscription with PATCH; changing the customer's
         * default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". promotions
         * (Required): Array of {@link SubscriptionPromotion}. Recurring promotions applying to the
         * next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when
         * none apply; signup-only and exhausted promotions are excluded. promotions[] (Value):
         * {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. prorate_first_period
         * (Required): boolean. Whether this subscription was created to prorate its first anchored
         * paid period. Set at creation and never changes; starting on the anchor day still bills a
         * normal full period. recurring_subtotal_money (Required): {@link MoneyValue} or null.
         * What one billing period's items cost before discounts, shipping, and tax: each line's
         * price with modifiers, times quantity. It changes when items, quantity, or the plan
         * change; editing the plan doesn't change it. For the next charge, use a subscription
         * preview in next_renewal mode. `null` when a cancellation succeeds but Flint couldn't
         * load the billing snapshot afterward, so the cancel response returns it as null. Retrieve
         * the subscription again to get it. recurring_subtotal_money.anyOf[1] (Value): {@link
         * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. recurring_subtotal_money.anyOf[2] (Value): null. remaining_cycles
         * (Required): integer or null. Charges left for a cycle limit, bounded by an earlier
         * scheduled cancellation. Null when there is no cycle limit or the subscription is
         * canceled. Format: uint64. minimum: 0. remaining_prepaid_deliveries (Required): integer.
         * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with
         * deliveries_per_period minus one. When delivery_hold is present and this count is
         * positive, fixing delivery releases an already-paid delivery with shipping waived and no
         * new charge. A next_renewal preview still estimates the next paid billing cycle. Skips,
         * holds, and pauses consume none. Frozen on cancellation for manual refunds. Format:
         * int32. minimum: 0. maximum: 23. resume_requested_at (Required): string or null. When
         * Flint accepted a pending resume request. Set only while paused with a resume Flint has
         * not applied yet. Clears when Flint resumes the subscription or refuses the request.
         * `null` when the subscription isn't paused or no resume request is pending. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". scheduled_cancel_at (Required): string or
         * null. When the scheduled cancellation takes effect: trial_end_at while trialing,
         * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
         * extend it to the last paid delivery when it is later. Null when cancel_at_period_end is
         * false or no cancellation time is available. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_plan_change (Required): {@link
         * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged
         * renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null
         * on PATCH; replace through change-plan. scheduled_plan_change.anyOf[1] (Value): {@link
         * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
         * renewal. scheduled_plan_change.anyOf[2] (Value): null. scheduled_promotions (Required):
         * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after
         * the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
         * are scheduled. scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
         * recurring promotion applied to a subscription, including its recurrence and remaining
         * discounted cycles. scheduled_resume_at (Required): string or null. When a pause with a
         * length (pause_duration_cycles) resumes on its own: that many delivery intervals after
         * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
         * subscription is not paused or the pause has no length, such as a pause until you resume
         * it or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_location (Optional): {@link
         * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. The address where a subscription's service is
         * delivered, with the saved customer address it came from. starts_at (Optional): string.
         * When a scheduled start's first billing period begins. Present only until that first
         * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Where the subscription is in its lifecycle. Each value says what it means. Value
         * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
         * subscription_id (Required): string. Stable identifier of the subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_plan (Optional): {@link
         * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. Subscription plan ID. Omitted when terms_type
         * is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions
         * (Optional): Array of string. Merchant actions allowed by the subscription's state. A
         * route can still refuse a listed action for a transient reason, such as a renewal already
         * in progress, with its own error. Always present with merchant credentials. [] enum:
         * "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
         * supported_actions[] (Value): string. Value enum: "cancel", "pause", "resume",
         * "skip_cycle", "renew", "change_plan", "change_quantity". tax (Optional): {@link
         * SubscriptionTax} or null. The tax the subscription's renewal, setup fee and plan change
         * orders use. `null` when they follow `tax.default_enabled` and `tax.default_calculation`
         * from your settings. Returned only to merchant credentials; omitted for buyer
         * credentials. Always present with merchant credentials. tax.anyOf[1] (Value): {@link
         * SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change orders
         * use. Returned only to merchant credentials; omitted for buyer credentials. tax.anyOf[2]
         * (Value): null. terms_type (Required): string. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * test_clock_id (Optional): string. ID of the test clock the subscription's customer was
         * created on. The subscription bills at the clock's time. Present only when the customer
         * is on a test clock. Included only in merchant responses and omitted from buyer
         * responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". trial_end_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * upcoming_delivery_hold (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery
         * issue forecast for the next renewal at renewal_at. Mutually exclusive with
         * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
         * subscription's delivery, and who can fix it. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the subscription, including renewals and other
         * changes Flint makes. Send it as `expected_version` to apply an update only if nothing
         * changed. Format: uint64. minimum: 0.
         */
        "object": {
            /**
             * UTC day of the month used for monthly and yearly billing. Applies only to
             * Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
             */
            "billing_anchor_day"?: number;
            /**
             * Configuration issue or automatic retry delaying billing, with the first detection
             * time. Flint retries automatically without starting payment recovery. Cleared when
             * billing succeeds, the schedule is replaced, the subscription is paused or canceled,
             * or a card decline starts payment recovery. Included only in merchant responses. Why
             * subscription billing is delayed, with the time Flint first detected it. A billing
             * hold does not mean the card was declined.
             */
            "billing_hold"?: SubscriptionBillingHold;
            /**
             * How often the subscription bills now. Read with billing_interval_count: monthly with
             * a count of 3 bills quarterly. A change applies from the next renewal that has not
             * been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly",
             * "yearly".
             */
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            /**
             * Number of billing_interval units between charges. Changes with billing_interval.
             * Format: int32.
             */
            "billing_interval_count": number;
            /**
             * Billing interval and count pairs the subscription can switch to. For a subscription
             * on a plan, they follow the plan's current billing_interval_options. A subscription
             * that came from an offer keeps the pairs the offer had at signup. Prices of lines
             * that ship are per delivery. Each option charges for all deliveries in its period.
             * Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
             * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
             * choose. Prices of lines that ship are per delivery, and each option charges for all
             * deliveries in its period. Without a delivery cadence there is one delivery per
             * period, so every option bills the same line prices once per period. With a delivery
             * cadence, a longer period bills more deliveries of the lines that ship; other lines
             * bill once per period. For a different price per interval with no delivery cadence,
             * create separate plans.
             */
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            /**
             * Who supplies billing dates: flint advances the schedule after each paid renewal;
             * external uses dates you supply. Change it with billing_schedule on PATCH
             * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
             */
            "billing_schedule_owner": "flint" | "external" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "billing_schedule_waiting_started_at"?: string;
            /**
             * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule
             * with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
             * cancel_at_period_end false.
             */
            "cancel_at_period_end": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who asked to cancel, when, and why. Present once a cancellation is requested,
             * whether it takes effect at the end of the billing period or right away. Omitted when
             * no one asked, and removed when a scheduled cancellation is undone. See
             * cancellation_reason for voluntary and payment-related cancellations. The
             * cancellation request behind a scheduled or completed cancellation.
             */
            "cancellation_details"?: SubscriptionCancellationDetails;
            /**
             * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
             * when an automatic inventory refund fully refunds the signup order, end_after_reached
             * when the automatic ending agreement is reached, cancellation_details.requested_by
             * when recorded, payment_failed for other canceled subscriptions without a requester,
             * and other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            /**
             * Billing cycles charged so far, including cycles imported with
             * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is
             * this number plus one. Format: uint64. minimum: 0.
             */
            "completed_cycles": number;
            /**
             * When the recorded contract term ends. Does not move when the subscription pauses or
             * changes plan. Flint does not stop the buyer from canceling earlier. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_end_at"?: string;
            /**
             * When the recorded contract term started. Does not move when the subscription pauses
             * or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_start_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_end_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_start_at"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * Deliveries paid for by one billing period, from 1 to 24. One when no separate
             * delivery cadence is set. Prices of lines that ship are per delivery. Format: int32.
             * minimum: 1. maximum: 24.
             */
            "deliveries_per_period": number;
            /**
             * Saved delivery preference with the current delivery method display. Write responses
             * use the same display as GET: fixed shipping reflects the current method
             * configuration, and quoted shipping shows the last paid shipping amount when
             * available. A subscription's saved delivery preference: method, destination,
             * recipient, shipping cost, and who last changed it.
             */
            "delivery"?: SubscriptionDelivery;
            /**
             * Current delivery issue that blocks collection. Mutually exclusive with
             * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery
             * method or destination no longer works, and who can fix it.
             */
            "delivery_hold"?: SubscriptionDeliveryHold;
            /**
             * Delivery cadence frozen from the plan. Null when no separate delivery cadence is
             * set; one delivery is made per billing period. Value enum: "daily", "weekly",
             * "monthly", "yearly", null.
             */
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            /**
             * Number of delivery intervals between deliveries. Null when no separate delivery
             * cadence is set. Format: int32. minimum: 1.
             */
            "delivery_interval_count": number | null;
            /**
             * The fee in the recorded contract terms. Present whenever those terms include a fee.
             * It applies only to a cancellation before contract_end_at. Flint never charges it.
             * Later plan changes do not change this fee. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "early_termination_fee_money"?: MoneyValue;
            /**
             * Recorded automatic end condition. Null when no automatic end is set. Cycles count
             * charged billing periods, including imported completed_cycles. Pauses and skips do
             * not use cycles. Already-paid prepaid deliveries continue on their shifted dates,
             * even beyond the end date, and cancellation waits for the last remaining delivery.
             * Skipping defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1] (Value): {@link SubscriptionEndAfter}. The subscription's automatic end
             * condition, measured by charged billing cycles or a saved local calendar date.
             * anyOf[2] (Value): null.
             */
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            /**
             * Projected end under the current schedule and committed plan changes, including an
             * earlier scheduled cancellation. A date limit preserves already-paid entitlement
             * without requiring a future charge schedule. A reached cycle limit uses the last paid
             * period end, or current_period_end_at when no paid history exists; that fallback
             * includes any skip or pause extension. A cycle limit with cycles left needs a future
             * charge schedule unless a known scheduled cancellation determines the end. Paid
             * deliveries extend the end to the last paid delivery when it is later. An indefinite
             * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
             * determined or the subscription is canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Who receives the gift, when this is a gift subscription. customer_id stays the
             * purchaser. Flint clears it when the subscription ends and when the purchaser's data
             * is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@link
             * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
             * purchaser, who pays, gets receipts and reminders, and manages the subscription.
             * delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
             */
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer sessions on routes shared with merchants get
             * `null`. `/v1/me` responses do not include this field.
             */
            "idempotency_key"?: string | null;
            /**
             * Renewal waiting for stock. Buyers receive only started_at. Shows that a subscription
             * renewal is waiting for inventory, with the order and invoice involved and when the
             * wait started.
             */
            "inventory_wait"?: SubscriptionInventoryWait;
            /**
             * True while an active or trialing subscription on an external billing schedule has no
             * next billing date.
             */
            "is_awaiting_billing_schedule"?: boolean;
            /**
             * Latest renewal payment failure, present only while status is past_due and the latest
             * payment failed. Buyer responses omit merchant remediation and sensitive decline
             * signals. A summary of why a payment attempt failed, with a normalized error code, a
             * message, the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a
             * line takes that variant's current catalog price, which then stays until the line
             * changes again. [] (Value): {@link SubscriptionLineItem}. An item included in a
             * customer's recurring purchase.
             */
            "line_items": Array<SubscriptionLineItem>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The billing date whose payment failed, as an RFC3339 timestamp. Present only while
             * status is past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "missed_billing_at"?: string;
            /**
             * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present
             * only while a trialing or active subscription has a billing date and isn't set to
             * cancel at the end of its period. Absent when no renewal is scheduled: a subscription
             * in its final billing cycle ends at expires_at, a paused subscription resumes at
             * scheduled_resume_at, a past_due one reports the failed billing date in
             * missed_billing_at and retries at next_retry_at, an incomplete one retries at
             * next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at
             * scheduled_cancel_at, and an external schedule awaiting a date reports
             * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_billing_at"?: string;
            /**
             * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
             * subscription has an indefinite pause, no delivery is scheduled, or the subscription
             * is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_delivery_at": string | null;
            /**
             * Recorded automatic payment retry time. Null when no retry time is available. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_retry_at": string | null;
            /**
             * ID of the paid renewal order whose shipment has not been dispatched. It keeps its
             * committed delivery destination after preference changes and cancellation. Absent
             * when no such renewal order exists. Only renewal orders count; the signup order is
             * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "open_renewal_order_id"?: string;
            /**
             * Unpaid balance of the failed renewal order, including tax, shipping and discounts,
             * after payments and credits. Present only while status is past_due and a positive
             * balance remains. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "outstanding_money"?: MoneyValue;
            /**
             * Why the subscription is paused: merchant for a pause made with your API key or
             * dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
             * during or after a delivery hold, and payment_failed when renewal payment retries ran
             * out and your dunning settings pause the subscription. Omitted when the subscription
             * is not paused. Value enum: "buyer", "delivery_action_required", "merchant",
             * "payment_failed".
             */
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "paused_at"?: string;
            /**
             * The delivery hold that expired and paused the subscription. Null when no stored
             * expiry reason exists, including a manual pause during an active hold, or the
             * subscription is no longer paused for delivery action. anyOf[1] (Value): {@link
             * SubscriptionPausedDeliveryHold}. The delivery hold that expired and paused this
             * subscription. A manual pause during an active hold is not an expiry. This field does
             * not imply a refund. anyOf[2] (Value): null.
             */
            "paused_delivery_hold": ((SubscriptionPausedDeliveryHold) | (null));
            /**
             * The payment link that started this subscription, when there was one. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * Present only when `expand` includes `payment_method`; `null` when expanded and there
             * is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * First charge boundary while no card is bound: the later of trial_end_at and
             * next_billing_at during a trial, or the next billing date for an imported period,
             * even when that cycle's charge is zero. Recomputed when the schedule changes. A trial
             * still without a card at its boundary cancels without an order or payment attempt. At
             * that boundary, an imported subscription with a positive charge that still has no
             * card enters its normal dunning schedule without a payment attempt. For an imported
             * subscription, a zero charge completes the renewal without a card and the deadline
             * advances to the following boundary. Null when a card is bound, collection is not
             * scheduled (paused, canceled, or set to cancel at period end), an active or trialing
             * subscription is in its final end_after cycle, or an external schedule has no known
             * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "payment_method_due_at": string | null;
            /**
             * Saved payment method used for renewal charges. Null when no card is bound. Bind a
             * card to this subscription with PATCH; changing the customer's default alone does not
             * bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string | null;
            /**
             * Recurring promotions applying to the next charged cycle. Scheduled attachments are
             * listed in scheduled_promotions. Empty when none apply; signup-only and exhausted
             * promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A recurring
             * promotion applied to a subscription, including its recurrence and remaining
             * discounted cycles.
             */
            "promotions": Array<SubscriptionPromotion>;
            /**
             * Whether this subscription was created to prorate its first anchored paid period. Set
             * at creation and never changes; starting on the anchor day still bills a normal full
             * period.
             */
            "prorate_first_period": boolean;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. `null` when a cancellation succeeds but
             * Flint couldn't load the billing snapshot afterward, so the cancel response returns
             * it as null. Retrieve the subscription again to get it. anyOf[1] (Value): {@link
             * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code. anyOf[2] (Value): null.
             */
            "recurring_subtotal_money": ((MoneyValue) | (null));
            /**
             * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
             * when there is no cycle limit or the subscription is canceled. Format: uint64.
             * minimum: 0.
             */
            "remaining_cycles": number | null;
            /**
             * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
             * with deliveries_per_period minus one. When delivery_hold is present and this count
             * is positive, fixing delivery releases an already-paid delivery with shipping waived
             * and no new charge. A next_renewal preview still estimates the next paid billing
             * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual
             * refunds. Format: int32. minimum: 0. maximum: 23.
             */
            "remaining_prepaid_deliveries": number;
            /**
             * When Flint accepted a pending resume request. Set only while paused with a resume
             * Flint has not applied yet. Clears when Flint resumes the subscription or refuses the
             * request. `null` when the subscription isn't paused or no resume request is pending.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "resume_requested_at": string | null;
            /**
             * When the scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_cancel_at": string | null;
            /**
             * Frozen target terms for the next charged renewal. Null when no plan change is
             * scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through
             * change-plan. anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
             * target terms that apply at the next charged renewal. anyOf[2] (Value): null.
             */
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            /**
             * Attached promotions whose first_cycle is after the next charged cycle,
             * completed_cycles + 1. Always present; empty when no promotions are scheduled. []
             * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a
             * subscription, including its recurrence and remaining discounted cycles.
             */
            "scheduled_promotions": Array<SubscriptionPromotion>;
            /**
             * When a pause with a length (pause_duration_cycles) resumes on its own: that many
             * delivery intervals after paused_at on a prepaid subscription, or billing intervals
             * otherwise. Null when the subscription is not paused or the pause has no length, such
             * as a pause until you resume it or the pause Flint starts when a delivery hold runs
             * out. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_resume_at": string | null;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The address where a subscription's service is delivered, with the
             * saved customer address it came from.
             */
            "service_location"?: SubscriptionServiceLocation;
            /**
             * When a scheduled start's first billing period begins. Present only until that first
             * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "starts_at"?: string;
            /**
             * Where the subscription is in its lifecycle. Each value says what it means. Value
             * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
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
            /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Merchant actions allowed by the subscription's state. A route can still refuse a
             * listed action for a transient reason, such as a renewal already in progress, with
             * its own error. Always present with merchant credentials. [] enum: "cancel", "pause",
             * "resume", "skip_cycle", "renew", "change_plan", "change_quantity". [] (Value):
             * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew",
             * "change_plan", "change_quantity".
             */
            "supported_actions"?: Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            /**
             * The tax the subscription's renewal, setup fee and plan change orders use. `null`
             * when they follow `tax.default_enabled` and `tax.default_calculation` from your
             * settings. Returned only to merchant credentials; omitted for buyer credentials.
             * Always present with merchant credentials. anyOf[1] (Value): {@link SubscriptionTax}.
             * The tax the subscription's renewal, setup fee and plan change orders use. Returned
             * only to merchant credentials; omitted for buyer credentials. anyOf[2] (Value): null.
             */
            "tax"?: ((SubscriptionTax) | (null));
            /**
             * Terms come from the subscription plan in subscription_plan_id, or from subscription
             * offers identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer".
             */
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            /**
             * ID of the test clock the subscription's customer was created on. The subscription
             * bills at the clock's time. Present only when the customer is on a test clock.
             * Included only in merchant responses and omitted from buyer responses. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "trial_end_at"?: string;
            /**
             * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
             * delivery_hold. A delivery problem detected for an upcoming renewal that will hold
             * the subscription's delivery, and who can fix it.
             */
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the subscription, including renewals and other changes
             * Flint makes. Send it as `expected_version` to apply an update only if nothing
             * changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. billing_anchor_day (Optional): integer or null.
         * UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned
         * schedules. billing_anchor_day.anyOf[1] (Value): integer. UTC day of the month used for
         * monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32.
         * minimum: 1. maximum: 31. billing_anchor_day.anyOf[2] (Value): null. billing_hold
         * (Optional): {@link SubscriptionBillingHoldPreviousAttributes} or null. Configuration
         * issue or automatic retry delaying billing, with the first detection time. Flint retries
         * automatically without starting payment recovery. Cleared when billing succeeds, the
         * schedule is replaced, the subscription is paused or canceled, or a card decline starts
         * payment recovery. Included only in merchant responses. billing_hold.anyOf[1] (Value):
         * {@link SubscriptionBillingHoldPreviousAttributes}. billing_hold.anyOf[2] (Value): null.
         * billing_interval (Optional): string or null. How often the subscription bills now. Read
         * with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies
         * from the next renewal that has not been paid; next_billing_at does not move. Value enum:
         * "daily", "weekly", "monthly", "yearly". billing_interval.anyOf[1] (Value): string. How
         * often the subscription bills now. Read with billing_interval_count: monthly with a count
         * of 3 bills quarterly. A change applies from the next renewal that has not been paid;
         * next_billing_at does not move. Value enum: "daily", "weekly", "monthly", "yearly".
         * billing_interval.anyOf[2] (Value): null. billing_interval_count (Optional): integer or
         * null. Number of billing_interval units between charges. Changes with billing_interval.
         * billing_interval_count.anyOf[1] (Value): integer. Number of billing_interval units
         * between charges. Changes with billing_interval. Format: int32.
         * billing_interval_count.anyOf[2] (Value): null. billing_interval_options (Optional):
         * Array of {@link SubscriptionIntervalOptionPreviousAttributes} or null. Billing interval
         * and count pairs the subscription can switch to. For a subscription on a plan, they
         * follow the plan's current billing_interval_options. A subscription that came from an
         * offer keeps the pairs the offer had at signup. Prices of lines that ship are per
         * delivery. Each option charges for all deliveries in its period. Changing the interval
         * does not change the per-delivery price. billing_interval_options.anyOf[1] (Value): Array
         * of {@link SubscriptionIntervalOptionPreviousAttributes}. Billing interval and count
         * pairs the subscription can switch to. For a subscription on a plan, they follow the
         * plan's current billing_interval_options. A subscription that came from an offer keeps
         * the pairs the offer had at signup. Prices of lines that ship are per delivery. Each
         * option charges for all deliveries in its period. Changing the interval does not change
         * the per-delivery price. maxItems: 12. uniqueItems: true.
         * billing_interval_options.anyOf[1][] (Value): {@link
         * SubscriptionIntervalOptionPreviousAttributes}. billing_interval_options.anyOf[2]
         * (Value): null. billing_schedule_owner (Optional): string or null. Who supplies billing
         * dates: flint advances the schedule after each paid renewal; external uses dates you
         * supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}.
         * Value enum: "flint", "external". billing_schedule_owner.anyOf[1] (Value): string. Who
         * supplies billing dates: flint advances the schedule after each paid renewal; external
         * uses dates you supply. Change it with billing_schedule on PATCH
         * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
         * billing_schedule_owner.anyOf[2] (Value): null. billing_schedule_waiting_started_at
         * (Optional): string or null. RFC3339 timestamp.
         * billing_schedule_waiting_started_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". billing_schedule_waiting_started_at.anyOf[2]
         * (Value): null. cancel_at_period_end (Optional): boolean or null. True when the
         * subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
         * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end
         * false. cancel_at_period_end.anyOf[1] (Value): boolean. True when the subscription is
         * scheduled to cancel at scheduled_cancel_at. Schedule with POST
         * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end
         * false. cancel_at_period_end.anyOf[2] (Value): null. canceled_at (Optional): string or
         * null. RFC3339 timestamp. canceled_at.anyOf[1] (Value): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null.
         * cancellation_details (Optional): {@link
         * SubscriptionCancellationDetailsPreviousAttributes} or null. Who asked to cancel, when,
         * and why. Present once a cancellation is requested, whether it takes effect at the end of
         * the billing period or right away. Omitted when no one asked, and removed when a
         * scheduled cancellation is undone. See cancellation_reason for voluntary and
         * payment-related cancellations. cancellation_details.anyOf[1] (Value): {@link
         * SubscriptionCancellationDetailsPreviousAttributes}. cancellation_details.anyOf[2]
         * (Value): null. cancellation_reason (Optional): string or null. Why the subscription is
         * canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory
         * refund fully refunds the signup order, end_after_reached when the automatic ending
         * agreement is reached, cancellation_details.requested_by when recorded, payment_failed
         * for other canceled subscriptions without a requester, and other for a scheduled
         * cancellation without a requester. Omitted otherwise. Value enum: "buyer", "merchant",
         * "integration", "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * cancellation_reason.anyOf[1] (Value): string. Why the subscription is canceled or
         * scheduled to cancel. Uses signup_order_refunded when an automatic inventory refund fully
         * refunds the signup order, end_after_reached when the automatic ending agreement is
         * reached, cancellation_details.requested_by when recorded, payment_failed for other
         * canceled subscriptions without a requester, and other for a scheduled cancellation
         * without a requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * cancellation_reason.anyOf[2] (Value): null. completed_cycles (Optional): integer or
         * null. Billing cycles charged so far, including cycles imported with
         * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this
         * number plus one. completed_cycles.anyOf[1] (Value): integer. Billing cycles charged so
         * far, including cycles imported with `billing_start.completed_cycles`. The next renewal
         * order's `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
         * completed_cycles.anyOf[2] (Value): null. contract_end_at (Optional): string or null.
         * When the recorded contract term ends. Does not move when the subscription pauses or
         * changes plan. Flint does not stop the buyer from canceling earlier.
         * contract_end_at.anyOf[1] (Value): string. When the recorded contract term ends. Does not
         * move when the subscription pauses or changes plan. Flint does not stop the buyer from
         * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * contract_end_at.anyOf[2] (Value): null. contract_start_at (Optional): string or null.
         * When the recorded contract term started. Does not move when the subscription pauses or
         * changes plan. contract_start_at.anyOf[1] (Value): string. When the recorded contract
         * term started. Does not move when the subscription pauses or changes plan. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". contract_start_at.anyOf[2] (Value): null.
         * created_at (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. current_period_end_at (Optional): string or null.
         * RFC3339 timestamp. current_period_end_at.anyOf[1] (Value): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_end_at.anyOf[2]
         * (Value): null. current_period_start_at (Optional): string or null. RFC3339 timestamp.
         * current_period_start_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". current_period_start_at.anyOf[2] (Value): null.
         * customer (Optional): {@link ExpandedCustomerSummaryPreviousAttributes} or null. Present
         * only when `expand` includes `customer`; `null` when expanded and there is no related
         * customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummaryPreviousAttributes}.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. The customer
         * this subscription bills. customer_id.anyOf[1] (Value): string. The customer this
         * subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2]
         * (Value): null. deliveries_per_period (Optional): integer or null. Deliveries paid for by
         * one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices
         * of lines that ship are per delivery. deliveries_per_period.anyOf[1] (Value): integer.
         * Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery
         * cadence is set. Prices of lines that ship are per delivery. Format: int32. minimum: 1.
         * maximum: 24. deliveries_per_period.anyOf[2] (Value): null. delivery (Optional): {@link
         * SubscriptionDeliveryPreviousAttributes} or null. Saved delivery preference with the
         * current delivery method display. Write responses use the same display as GET: fixed
         * shipping reflects the current method configuration, and quoted shipping shows the last
         * paid shipping amount when available. delivery.anyOf[1] (Value): {@link
         * SubscriptionDeliveryPreviousAttributes}. delivery.anyOf[2] (Value): null. delivery_hold
         * (Optional): {@link SubscriptionDeliveryHoldPreviousAttributes} or null. Current delivery
         * issue that blocks collection. Mutually exclusive with upcoming_delivery_hold.
         * delivery_hold.anyOf[1] (Value): {@link SubscriptionDeliveryHoldPreviousAttributes}.
         * delivery_hold.anyOf[2] (Value): null. delivery_interval (Optional): string or null.
         * Delivery cadence frozen from the plan. Null when no separate delivery cadence is set;
         * one delivery is made per billing period. Value enum: "daily", "weekly", "monthly",
         * "yearly", null. delivery_interval.anyOf[1] (Value): string. Delivery cadence frozen from
         * the plan. Null when no separate delivery cadence is set; one delivery is made per
         * billing period. Value enum: "daily", "weekly", "monthly", "yearly", null.
         * delivery_interval.anyOf[2] (Value): null. delivery_interval_count (Optional): integer or
         * null. Number of delivery intervals between deliveries. Null when no separate delivery
         * cadence is set. delivery_interval_count.anyOf[1] (Value): integer. Number of delivery
         * intervals between deliveries. Null when no separate delivery cadence is set. Format:
         * int32. minimum: 1. delivery_interval_count.anyOf[2] (Value): null.
         * early_termination_fee_money (Optional): {@link MoneyValuePreviousAttributes} or null.
         * The fee in the recorded contract terms. Present whenever those terms include a fee. It
         * applies only to a cancellation before contract_end_at. Flint never charges it. Later
         * plan changes do not change this fee. early_termination_fee_money.anyOf[1] (Value):
         * {@link MoneyValuePreviousAttributes}. early_termination_fee_money.anyOf[2] (Value):
         * null. end_after (Optional): ({@link SubscriptionEndAfterPreviousAttributes} or null) or
         * null. Recorded automatic end condition. Null when no automatic end is set. Cycles count
         * charged billing periods, including imported completed_cycles. Pauses and skips do not
         * use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond
         * the end date, and cancellation waits for the last remaining delivery. Skipping defers a
         * delivery without consuming its entitlement. Ending never refunds. end_after.anyOf[1]
         * (Value): ({@link SubscriptionEndAfterPreviousAttributes} or null). Recorded automatic
         * end condition. Null when no automatic end is set. Cycles count charged billing periods,
         * including imported completed_cycles. Pauses and skips do not use cycles. Already-paid
         * prepaid deliveries continue on their shifted dates, even beyond the end date, and
         * cancellation waits for the last remaining delivery. Skipping defers a delivery without
         * consuming its entitlement. Ending never refunds. end_after.anyOf[1].anyOf[1] (Value):
         * {@link SubscriptionEndAfterPreviousAttributes}. The subscription's automatic end
         * condition, measured by charged billing cycles or a saved local calendar date.
         * end_after.anyOf[1].anyOf[2] (Value): null. end_after.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. Projected end under the current schedule and committed plan
         * changes, including an earlier scheduled cancellation. A date limit preserves
         * already-paid entitlement without requiring a future charge schedule. A reached cycle
         * limit uses the last paid period end, or current_period_end_at when no paid history
         * exists; that fallback includes any skip or pause extension. A cycle limit with cycles
         * left needs a future charge schedule unless a known scheduled cancellation determines the
         * end. Paid deliveries extend the end to the last paid delivery when it is later. An
         * indefinite pause with paid deliveries owed makes the end unknown. Null when the end
         * cannot be determined or the subscription is canceled. expires_at.anyOf[1] (Value):
         * string. Projected end under the current schedule and committed plan changes, including
         * an earlier scheduled cancellation. A date limit preserves already-paid entitlement
         * without requiring a future charge schedule. A reached cycle limit uses the last paid
         * period end, or current_period_end_at when no paid history exists; that fallback includes
         * any skip or pause extension. A cycle limit with cycles left needs a future charge
         * schedule unless a known scheduled cancellation determines the end. Paid deliveries
         * extend the end to the last paid delivery when it is later. An indefinite pause with paid
         * deliveries owed makes the end unknown. Null when the end cannot be determined or the
         * subscription is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * expires_at.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. gift_recipient (Optional): {@link
         * SubscriptionGiftRecipientPreviousAttributes} or null. Who receives the gift, when this
         * is a gift subscription. customer_id stays the purchaser. Flint clears it when the
         * subscription ends and when the purchaser's data is erased. Null when the subscription
         * isn't a gift. gift_recipient.anyOf[1] (Value): {@link
         * SubscriptionGiftRecipientPreviousAttributes}. gift_recipient.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource. `null` when that request sent no key, Flint created the resource,
         * the reader isn't the caller that created it (another app install, a buyer, or the
         * merchant reading an app's or buyer's record), or the caller that created an older record
         * is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer sessions on routes shared with
         * merchants get `null`. `/v1/me` responses do not include this field.
         * idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the request that
         * created this resource. `null` when that request sent no key, Flint created the resource,
         * the reader isn't the caller that created it (another app install, a buyer, or the
         * merchant reading an app's or buyer's record), or the caller that created an older record
         * is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer sessions on routes shared with
         * merchants get `null`. `/v1/me` responses do not include this field.
         * idempotency_key.anyOf[2] (Value): null. inventory_wait (Optional): {@link
         * SubscriptionInventoryWaitPreviousAttributes} or null. Renewal waiting for stock. Buyers
         * receive only started_at. inventory_wait.anyOf[1] (Value): {@link
         * SubscriptionInventoryWaitPreviousAttributes}. inventory_wait.anyOf[2] (Value): null.
         * is_awaiting_billing_schedule (Optional): boolean or null. True while an active or
         * trialing subscription on an external billing schedule has no next billing date.
         * is_awaiting_billing_schedule.anyOf[1] (Value): boolean. True while an active or trialing
         * subscription on an external billing schedule has no next billing date.
         * is_awaiting_billing_schedule.anyOf[2] (Value): null. last_payment_error (Optional):
         * {@link PaymentErrorSummaryPreviousAttributes} or null. Latest renewal payment failure,
         * present only while status is past_due and the latest payment failed. Buyer responses
         * omit merchant remediation and sensitive decline signals. last_payment_error.anyOf[1]
         * (Value): {@link PaymentErrorSummaryPreviousAttributes}. last_payment_error.anyOf[2]
         * (Value): null. line_items (Optional): Array of {@link
         * SubscriptionLineItemPreviousAttributes} or null. What each renewal bills. Plan edits do
         * not change it. Adding, changing or swapping a line takes that variant's current catalog
         * price, which then stays until the line changes again. line_items.anyOf[1] (Value): Array
         * of {@link SubscriptionLineItemPreviousAttributes}. What each renewal bills. Plan edits
         * do not change it. Adding, changing or swapping a line takes that variant's current
         * catalog price, which then stays until the line changes again. line_items.anyOf[1][]
         * (Value): {@link SubscriptionLineItemPreviousAttributes}. line_items.anyOf[2] (Value):
         * null. merchant_id (Optional): string or null. ID of the merchant this resource belongs
         * to. merchant_id.anyOf[1] (Value): string. ID of the merchant this resource belongs to.
         * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. missed_billing_at (Optional): string or
         * null. The billing date whose payment failed, as an RFC3339 timestamp. Present only while
         * status is past_due. missed_billing_at.anyOf[1] (Value): string. The billing date whose
         * payment failed, as an RFC3339 timestamp. Present only while status is past_due. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". missed_billing_at.anyOf[2] (Value): null.
         * next_billing_at (Optional): string or null. When Flint next starts a scheduled renewal
         * charge, as an RFC3339 timestamp. Present only while a trialing or active subscription
         * has a billing date and isn't set to cancel at the end of its period. Absent when no
         * renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a
         * paused subscription resumes at scheduled_resume_at, a past_due one reports the failed
         * billing date in missed_billing_at and retries at next_retry_at, an incomplete one
         * retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends
         * at scheduled_cancel_at, and an external schedule awaiting a date reports
         * is_awaiting_billing_schedule. next_billing_at.anyOf[1] (Value): string. When Flint next
         * starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a
         * trialing or active subscription has a billing date and isn't set to cancel at the end of
         * its period. Absent when no renewal is scheduled: a subscription in its final billing
         * cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a
         * past_due one reports the failed billing date in missed_billing_at and retries at
         * next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at
         * starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule
         * awaiting a date reports is_awaiting_billing_schedule. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_billing_at.anyOf[2] (Value): null. next_delivery_at
         * (Optional): string or null. When the next prepaid delivery order is due, shifted by a
         * timed pause. Null when the subscription has an indefinite pause, no delivery is
         * scheduled, or the subscription is canceled. next_delivery_at.anyOf[1] (Value): string.
         * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
         * subscription has an indefinite pause, no delivery is scheduled, or the subscription is
         * canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". next_delivery_at.anyOf[2]
         * (Value): null. next_retry_at (Optional): string or null. Recorded automatic payment
         * retry time. Null when no retry time is available. next_retry_at.anyOf[1] (Value):
         * string. Recorded automatic payment retry time. Null when no retry time is available.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". next_retry_at.anyOf[2] (Value):
         * null. open_renewal_order_id (Optional): string or null. ID of the paid renewal order
         * whose shipment has not been dispatched. It keeps its committed delivery destination
         * after preference changes and cancellation. Absent when no such renewal order exists.
         * Only renewal orders count; the signup order is not included.
         * open_renewal_order_id.anyOf[1] (Value): string. ID of the paid renewal order whose
         * shipment has not been dispatched. It keeps its committed delivery destination after
         * preference changes and cancellation. Absent when no such renewal order exists. Only
         * renewal orders count; the signup order is not included. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". open_renewal_order_id.anyOf[2] (Value): null.
         * outstanding_money (Optional): {@link MoneyValuePreviousAttributes} or null. Unpaid
         * balance of the failed renewal order, including tax, shipping and discounts, after
         * payments and credits. Present only while status is past_due and a positive balance
         * remains. outstanding_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * outstanding_money.anyOf[2] (Value): null. pause_reason (Optional): string or null. Why
         * the subscription is paused: merchant for a pause made with your API key or dashboard,
         * buyer for the buyer's own pause, delivery_action_required for a pause during or after a
         * delivery hold, and payment_failed when renewal payment retries ran out and your dunning
         * settings pause the subscription. Omitted when the subscription is not paused. Value
         * enum: "buyer", "delivery_action_required", "merchant", "payment_failed".
         * pause_reason.anyOf[1] (Value): string. Why the subscription is paused: merchant for a
         * pause made with your API key or dashboard, buyer for the buyer's own pause,
         * delivery_action_required for a pause during or after a delivery hold, and payment_failed
         * when renewal payment retries ran out and your dunning settings pause the subscription.
         * Omitted when the subscription is not paused. Value enum: "buyer",
         * "delivery_action_required", "merchant", "payment_failed". pause_reason.anyOf[2] (Value):
         * null. paused_at (Optional): string or null. RFC3339 timestamp. paused_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * paused_at.anyOf[2] (Value): null. paused_delivery_hold (Optional): {@link
         * SubscriptionPausedDeliveryHoldPreviousAttributes} or null. The delivery hold that
         * expired and paused the subscription. Null when no stored expiry reason exists, including
         * a manual pause during an active hold, or the subscription is no longer paused for
         * delivery action. paused_delivery_hold.anyOf[1] (Value): {@link
         * SubscriptionPausedDeliveryHoldPreviousAttributes}. paused_delivery_hold.anyOf[2]
         * (Value): null. payment_link_id (Optional): string or null. The payment link that started
         * this subscription, when there was one. payment_link_id.anyOf[1] (Value): string. The
         * payment link that started this subscription, when there was one. Example:
         * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_id.anyOf[2] (Value): null. payment_method
         * (Optional): {@link ExpandedPaymentMethodSummaryPreviousAttributes} or null. Present only
         * when `expand` includes `payment_method`; `null` when expanded and there is no related
         * payment method. payment_method.anyOf[1] (Value): {@link
         * ExpandedPaymentMethodSummaryPreviousAttributes}. payment_method.anyOf[2] (Value): null.
         * payment_method_due_at (Optional): string or null. First charge boundary while no card is
         * bound: the later of trial_end_at and next_billing_at during a trial, or the next billing
         * date for an imported period, even when that cycle's charge is zero. Recomputed when the
         * schedule changes. A trial still without a card at its boundary cancels without an order
         * or payment attempt. At that boundary, an imported subscription with a positive charge
         * that still has no card enters its normal dunning schedule without a payment attempt. For
         * an imported subscription, a zero charge completes the renewal without a card and the
         * deadline advances to the following boundary. Null when a card is bound, collection is
         * not scheduled (paused, canceled, or set to cancel at period end), an active or trialing
         * subscription is in its final end_after cycle, or an external schedule has no known
         * boundary. payment_method_due_at.anyOf[1] (Value): string. First charge boundary while no
         * card is bound: the later of trial_end_at and next_billing_at during a trial, or the next
         * billing date for an imported period, even when that cycle's charge is zero. Recomputed
         * when the schedule changes. A trial still without a card at its boundary cancels without
         * an order or payment attempt. At that boundary, an imported subscription with a positive
         * charge that still has no card enters its normal dunning schedule without a payment
         * attempt. For an imported subscription, a zero charge completes the renewal without a
         * card and the deadline advances to the following boundary. Null when a card is bound,
         * collection is not scheduled (paused, canceled, or set to cancel at period end), an
         * active or trialing subscription is in its final end_after cycle, or an external schedule
         * has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * payment_method_due_at.anyOf[2] (Value): null. payment_method_id (Optional): string or
         * null. Saved payment method used for renewal charges. Null when no card is bound. Bind a
         * card to this subscription with PATCH; changing the customer's default alone does not
         * bind it. payment_method_id.anyOf[1] (Value): string. Saved payment method used for
         * renewal charges. Null when no card is bound. Bind a card to this subscription with
         * PATCH; changing the customer's default alone does not bind it. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". payment_method_id.anyOf[2] (Value): null. promotions
         * (Optional): Array of {@link SubscriptionPromotionPreviousAttributes} or null. Recurring
         * promotions applying to the next charged cycle. Scheduled attachments are listed in
         * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
         * excluded. promotions.anyOf[1] (Value): Array of {@link
         * SubscriptionPromotionPreviousAttributes}. Recurring promotions applying to the next
         * charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none
         * apply; signup-only and exhausted promotions are excluded. promotions.anyOf[1][] (Value):
         * {@link SubscriptionPromotionPreviousAttributes}. promotions.anyOf[2] (Value): null.
         * prorate_first_period (Optional): boolean or null. Whether this subscription was created
         * to prorate its first anchored paid period. Set at creation and never changes; starting
         * on the anchor day still bills a normal full period. prorate_first_period.anyOf[1]
         * (Value): boolean. Whether this subscription was created to prorate its first anchored
         * paid period. Set at creation and never changes; starting on the anchor day still bills a
         * normal full period. prorate_first_period.anyOf[2] (Value): null.
         * recurring_subtotal_money (Optional): {@link MoneyValuePreviousAttributes} or null. What
         * one billing period's items cost before discounts, shipping, and tax: each line's price
         * with modifiers, times quantity. It changes when items, quantity, or the plan change;
         * editing the plan doesn't change it. For the next charge, use a subscription preview in
         * next_renewal mode. `null` when a cancellation succeeds but Flint couldn't load the
         * billing snapshot afterward, so the cancel response returns it as null. Retrieve the
         * subscription again to get it. recurring_subtotal_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. recurring_subtotal_money.anyOf[2] (Value): null.
         * remaining_cycles (Optional): integer or null. Charges left for a cycle limit, bounded by
         * an earlier scheduled cancellation. Null when there is no cycle limit or the subscription
         * is canceled. remaining_cycles.anyOf[1] (Value): integer. Charges left for a cycle limit,
         * bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the
         * subscription is canceled. Format: uint64. minimum: 0. remaining_cycles.anyOf[2] (Value):
         * null. remaining_prepaid_deliveries (Optional): integer or null. Paid deliveries whose
         * delivery order Flint hasn't created yet. A paid period starts with deliveries_per_period
         * minus one. When delivery_hold is present and this count is positive, fixing delivery
         * releases an already-paid delivery with shipping waived and no new charge. A next_renewal
         * preview still estimates the next paid billing cycle. Skips, holds, and pauses consume
         * none. Frozen on cancellation for manual refunds. remaining_prepaid_deliveries.anyOf[1]
         * (Value): integer. Paid deliveries whose delivery order Flint hasn't created yet. A paid
         * period starts with deliveries_per_period minus one. When delivery_hold is present and
         * this count is positive, fixing delivery releases an already-paid delivery with shipping
         * waived and no new charge. A next_renewal preview still estimates the next paid billing
         * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds.
         * Format: int32. minimum: 0. maximum: 23. remaining_prepaid_deliveries.anyOf[2] (Value):
         * null. resume_requested_at (Optional): string or null. When Flint accepted a pending
         * resume request. Set only while paused with a resume Flint has not applied yet. Clears
         * when Flint resumes the subscription or refuses the request. `null` when the subscription
         * isn't paused or no resume request is pending. resume_requested_at.anyOf[1] (Value):
         * string. When Flint accepted a pending resume request. Set only while paused with a
         * resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses
         * the request. `null` when the subscription isn't paused or no resume request is pending.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". resume_requested_at.anyOf[2]
         * (Value): null. scheduled_cancel_at (Optional): string or null. When the scheduled
         * cancellation takes effect: trial_end_at while trialing, current_period_end_at while
         * active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
         * delivery when it is later. Null when cancel_at_period_end is false or no cancellation
         * time is available. scheduled_cancel_at.anyOf[1] (Value): string. When the scheduled
         * cancellation takes effect: trial_end_at while trialing, current_period_end_at while
         * active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
         * delivery when it is later. Null when cancel_at_period_end is false or no cancellation
         * time is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_cancel_at.anyOf[2] (Value): null. scheduled_plan_change (Optional): {@link
         * SubscriptionScheduledPlanChangePreviousAttributes} or null. Frozen target terms for the
         * next charged renewal. Null when no plan change is scheduled. Cancel with
         * scheduled_plan_change: null on PATCH; replace through change-plan.
         * scheduled_plan_change.anyOf[1] (Value): {@link
         * SubscriptionScheduledPlanChangePreviousAttributes}. scheduled_plan_change.anyOf[2]
         * (Value): null. scheduled_promotions (Optional): Array of {@link
         * SubscriptionPromotionPreviousAttributes} or null. Attached promotions whose first_cycle
         * is after the next charged cycle, completed_cycles + 1. Always present; empty when no
         * promotions are scheduled. scheduled_promotions.anyOf[1] (Value): Array of {@link
         * SubscriptionPromotionPreviousAttributes}. Attached promotions whose first_cycle is after
         * the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
         * are scheduled. scheduled_promotions.anyOf[1][] (Value): {@link
         * SubscriptionPromotionPreviousAttributes}. scheduled_promotions.anyOf[2] (Value): null.
         * scheduled_resume_at (Optional): string or null. When a pause with a length
         * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at
         * on a prepaid subscription, or billing intervals otherwise. Null when the subscription is
         * not paused or the pause has no length, such as a pause until you resume it or the pause
         * Flint starts when a delivery hold runs out. scheduled_resume_at.anyOf[1] (Value):
         * string. When a pause with a length (pause_duration_cycles) resumes on its own: that many
         * delivery intervals after paused_at on a prepaid subscription, or billing intervals
         * otherwise. Null when the subscription is not paused or the pause has no length, such as
         * a pause until you resume it or the pause Flint starts when a delivery hold runs out.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". scheduled_resume_at.anyOf[2]
         * (Value): null. service_location (Optional): {@link
         * SubscriptionServiceLocationPreviousAttributes} or null. Omitted for a checkout session
         * credential that doesn't act for the customer the buyer verified.
         * service_location.anyOf[1] (Value): {@link
         * SubscriptionServiceLocationPreviousAttributes}. service_location.anyOf[2] (Value): null.
         * starts_at (Optional): string or null. When a scheduled start's first billing period
         * begins. Present only until that first payment succeeds. starts_at.anyOf[1] (Value):
         * string. When a scheduled start's first billing period begins. Present only until that
         * first payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * starts_at.anyOf[2] (Value): null. status (Optional): string or null. Where the
         * subscription is in its lifecycle. Each value says what it means. Value enum: "trialing",
         * "active", "paused", "past_due", "canceled", "incomplete", "scheduled". status.anyOf[1]
         * (Value): string. Where the subscription is in its lifecycle. Each value says what it
         * means. Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
         * "scheduled". status.anyOf[2] (Value): null. subscription_id (Optional): string or null.
         * Stable identifier of the subscription. subscription_id.anyOf[1] (Value): string. Stable
         * identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_id.anyOf[2] (Value): null. subscription_plan (Optional): {@link
         * ExpandedSubscriptionPlanSummaryPreviousAttributes} or null. Present only when `expand`
         * includes `subscription_plan`; `null` when expanded and there is no related subscription
         * plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummaryPreviousAttributes}. subscription_plan.anyOf[2] (Value):
         * null. subscription_plan_id (Optional): string or null. Subscription plan ID. Omitted
         * when terms_type is subscription_offer. subscription_plan_id.anyOf[1] (Value): string.
         * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_plan_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Merchant actions allowed by the
         * subscription's state. A route can still refuse a listed action for a transient reason,
         * such as a renewal already in progress, with its own error. Always present with merchant
         * credentials. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
         * "change_quantity". supported_actions.anyOf[1] (Value): Array of string. Merchant actions
         * allowed by the subscription's state. A route can still refuse a listed action for a
         * transient reason, such as a renewal already in progress, with its own error. Always
         * present with merchant credentials. [] enum: "cancel", "pause", "resume", "skip_cycle",
         * "renew", "change_plan", "change_quantity". supported_actions.anyOf[1][] (Value): string.
         * Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
         * "change_quantity". supported_actions.anyOf[2] (Value): null. tax (Optional): {@link
         * SubscriptionTaxPreviousAttributes} or null. The tax the subscription's renewal, setup
         * fee and plan change orders use. `null` when they follow `tax.default_enabled` and
         * `tax.default_calculation` from your settings. Returned only to merchant credentials;
         * omitted for buyer credentials. Always present with merchant credentials. tax.anyOf[1]
         * (Value): {@link SubscriptionTaxPreviousAttributes}. tax.anyOf[2] (Value): null.
         * terms_type (Optional): string or null. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * terms_type.anyOf[1] (Value): string. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * terms_type.anyOf[2] (Value): null. test_clock_id (Optional): string or null. ID of the
         * test clock the subscription's customer was created on. The subscription bills at the
         * clock's time. Present only when the customer is on a test clock. Included only in
         * merchant responses and omitted from buyer responses. test_clock_id.anyOf[1] (Value):
         * string. ID of the test clock the subscription's customer was created on. The
         * subscription bills at the clock's time. Present only when the customer is on a test
         * clock. Included only in merchant responses and omitted from buyer responses. Example:
         * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". test_clock_id.anyOf[2] (Value): null. trial_end_at
         * (Optional): string or null. RFC3339 timestamp. trial_end_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * trial_end_at.anyOf[2] (Value): null. upcoming_delivery_hold (Optional): {@link
         * SubscriptionUpcomingDeliveryHoldPreviousAttributes} or null. Delivery issue forecast for
         * the next renewal at renewal_at. Mutually exclusive with delivery_hold.
         * upcoming_delivery_hold.anyOf[1] (Value): {@link
         * SubscriptionUpcomingDeliveryHoldPreviousAttributes}. upcoming_delivery_hold.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. RFC3339 timestamp.
         * updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Goes up with every change to the subscription, including renewals and other
         * changes Flint makes. Send it as `expected_version` to apply an update only if nothing
         * changed. version.anyOf[1] (Value): integer. Goes up with every change to the
         * subscription, including renewals and other changes Flint makes. Send it as
         * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum:
         * 0. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * UTC day of the month used for monthly and yearly billing. Applies only to
             * Flint-owned schedules. anyOf[1] (Value): integer. UTC day of the month used for
             * monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32.
             * minimum: 1. maximum: 31. anyOf[2] (Value): null.
             */
            "billing_anchor_day"?: ((number) | (null));
            /**
             * Configuration issue or automatic retry delaying billing, with the first detection
             * time. Flint retries automatically without starting payment recovery. Cleared when
             * billing succeeds, the schedule is replaced, the subscription is paused or canceled,
             * or a card decline starts payment recovery. Included only in merchant responses.
             * anyOf[1] (Value): {@link SubscriptionBillingHoldPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "billing_hold"?: ((SubscriptionBillingHoldPreviousAttributes) | (null));
            /**
             * How often the subscription bills now. Read with billing_interval_count: monthly with
             * a count of 3 bills quarterly. A change applies from the next renewal that has not
             * been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly",
             * "yearly". anyOf[1] (Value): string. How often the subscription bills now. Read with
             * billing_interval_count: monthly with a count of 3 bills quarterly. A change applies
             * from the next renewal that has not been paid; next_billing_at does not move. Value
             * enum: "daily", "weekly", "monthly", "yearly". anyOf[2] (Value): null.
             */
            "billing_interval"?: (("daily" | "weekly" | "monthly" | "yearly" | (string & {})) | (null));
            /**
             * Number of billing_interval units between charges. Changes with billing_interval.
             * anyOf[1] (Value): integer. Number of billing_interval units between charges. Changes
             * with billing_interval. Format: int32. anyOf[2] (Value): null.
             */
            "billing_interval_count"?: ((number) | (null));
            /**
             * Billing interval and count pairs the subscription can switch to. For a subscription
             * on a plan, they follow the plan's current billing_interval_options. A subscription
             * that came from an offer keeps the pairs the offer had at signup. Prices of lines
             * that ship are per delivery. Each option charges for all deliveries in its period.
             * Changing the interval does not change the per-delivery price. anyOf[1] (Value):
             * Array of {@link SubscriptionIntervalOptionPreviousAttributes}. Billing interval and
             * count pairs the subscription can switch to. For a subscription on a plan, they
             * follow the plan's current billing_interval_options. A subscription that came from an
             * offer keeps the pairs the offer had at signup. Prices of lines that ship are per
             * delivery. Each option charges for all deliveries in its period. Changing the
             * interval does not change the per-delivery price. maxItems: 12. uniqueItems: true.
             * anyOf[1][] (Value): {@link SubscriptionIntervalOptionPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "billing_interval_options"?: ((Array<SubscriptionIntervalOptionPreviousAttributes>) | (null));
            /**
             * Who supplies billing dates: flint advances the schedule after each paid renewal;
             * external uses dates you supply. Change it with billing_schedule on PATCH
             * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external". anyOf[1]
             * (Value): string. Who supplies billing dates: flint advances the schedule after each
             * paid renewal; external uses dates you supply. Change it with billing_schedule on
             * PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint", "external". anyOf[2]
             * (Value): null.
             */
            "billing_schedule_owner"?: (("flint" | "external" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "billing_schedule_waiting_started_at"?: ((string) | (null));
            /**
             * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule
             * with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
             * cancel_at_period_end false. anyOf[1] (Value): boolean. True when the subscription is
             * scheduled to cancel at scheduled_cancel_at. Schedule with POST
             * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end
             * false. anyOf[2] (Value): null.
             */
            "cancel_at_period_end"?: ((boolean) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Who asked to cancel, when, and why. Present once a cancellation is requested,
             * whether it takes effect at the end of the billing period or right away. Omitted when
             * no one asked, and removed when a scheduled cancellation is undone. See
             * cancellation_reason for voluntary and payment-related cancellations. anyOf[1]
             * (Value): {@link SubscriptionCancellationDetailsPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "cancellation_details"?: ((SubscriptionCancellationDetailsPreviousAttributes) | (null));
            /**
             * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
             * when an automatic inventory refund fully refunds the signup order, end_after_reached
             * when the automatic ending agreement is reached, cancellation_details.requested_by
             * when recorded, payment_failed for other canceled subscriptions without a requester,
             * and other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded". anyOf[1] (Value): string. Why the
             * subscription is canceled or scheduled to cancel. Uses signup_order_refunded when an
             * automatic inventory refund fully refunds the signup order, end_after_reached when
             * the automatic ending agreement is reached, cancellation_details.requested_by when
             * recorded, payment_failed for other canceled subscriptions without a requester, and
             * other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded". anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {}))
                | (null));
            /**
             * Billing cycles charged so far, including cycles imported with
             * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is
             * this number plus one. anyOf[1] (Value): integer. Billing cycles charged so far,
             * including cycles imported with `billing_start.completed_cycles`. The next renewal
             * order's `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
             * anyOf[2] (Value): null.
             */
            "completed_cycles"?: ((number) | (null));
            /**
             * When the recorded contract term ends. Does not move when the subscription pauses or
             * changes plan. Flint does not stop the buyer from canceling earlier. anyOf[1]
             * (Value): string. When the recorded contract term ends. Does not move when the
             * subscription pauses or changes plan. Flint does not stop the buyer from canceling
             * earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "contract_end_at"?: ((string) | (null));
            /**
             * When the recorded contract term started. Does not move when the subscription pauses
             * or changes plan. anyOf[1] (Value): string. When the recorded contract term started.
             * Does not move when the subscription pauses or changes plan. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "contract_start_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "current_period_end_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "current_period_start_at"?: ((string) | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * The customer this subscription bills. anyOf[1] (Value): string. The customer this
             * subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value):
             * null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Deliveries paid for by one billing period, from 1 to 24. One when no separate
             * delivery cadence is set. Prices of lines that ship are per delivery. anyOf[1]
             * (Value): integer. Deliveries paid for by one billing period, from 1 to 24. One when
             * no separate delivery cadence is set. Prices of lines that ship are per delivery.
             * Format: int32. minimum: 1. maximum: 24. anyOf[2] (Value): null.
             */
            "deliveries_per_period"?: ((number) | (null));
            /**
             * Saved delivery preference with the current delivery method display. Write responses
             * use the same display as GET: fixed shipping reflects the current method
             * configuration, and quoted shipping shows the last paid shipping amount when
             * available. anyOf[1] (Value): {@link SubscriptionDeliveryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "delivery"?: ((SubscriptionDeliveryPreviousAttributes) | (null));
            /**
             * Current delivery issue that blocks collection. Mutually exclusive with
             * upcoming_delivery_hold. anyOf[1] (Value): {@link
             * SubscriptionDeliveryHoldPreviousAttributes}. anyOf[2] (Value): null.
             */
            "delivery_hold"?: ((SubscriptionDeliveryHoldPreviousAttributes) | (null));
            /**
             * Delivery cadence frozen from the plan. Null when no separate delivery cadence is
             * set; one delivery is made per billing period. Value enum: "daily", "weekly",
             * "monthly", "yearly", null. anyOf[1] (Value): string. Delivery cadence frozen from
             * the plan. Null when no separate delivery cadence is set; one delivery is made per
             * billing period. Value enum: "daily", "weekly", "monthly", "yearly", null. anyOf[2]
             * (Value): null.
             */
            "delivery_interval"?: (("daily" | "weekly" | "monthly" | "yearly" | null | (string & {})) | (null));
            /**
             * Number of delivery intervals between deliveries. Null when no separate delivery
             * cadence is set. anyOf[1] (Value): integer. Number of delivery intervals between
             * deliveries. Null when no separate delivery cadence is set. Format: int32. minimum:
             * 1. anyOf[2] (Value): null.
             */
            "delivery_interval_count"?: ((number) | (null));
            /**
             * The fee in the recorded contract terms. Present whenever those terms include a fee.
             * It applies only to a cancellation before contract_end_at. Flint never charges it.
             * Later plan changes do not change this fee. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "early_termination_fee_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Recorded automatic end condition. Null when no automatic end is set. Cycles count
             * charged billing periods, including imported completed_cycles. Pauses and skips do
             * not use cycles. Already-paid prepaid deliveries continue on their shifted dates,
             * even beyond the end date, and cancellation waits for the last remaining delivery.
             * Skipping defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1] (Value): ({@link SubscriptionEndAfterPreviousAttributes} or null). Recorded
             * automatic end condition. Null when no automatic end is set. Cycles count charged
             * billing periods, including imported completed_cycles. Pauses and skips do not use
             * cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond
             * the end date, and cancellation waits for the last remaining delivery. Skipping
             * defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1].anyOf[1] (Value): {@link SubscriptionEndAfterPreviousAttributes}. The
             * subscription's automatic end condition, measured by charged billing cycles or a
             * saved local calendar date. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "end_after"?: (((((SubscriptionEndAfterPreviousAttributes) | (null) | (unknown)))) | (null) | (unknown));
            /**
             * Projected end under the current schedule and committed plan changes, including an
             * earlier scheduled cancellation. A date limit preserves already-paid entitlement
             * without requiring a future charge schedule. A reached cycle limit uses the last paid
             * period end, or current_period_end_at when no paid history exists; that fallback
             * includes any skip or pause extension. A cycle limit with cycles left needs a future
             * charge schedule unless a known scheduled cancellation determines the end. Paid
             * deliveries extend the end to the last paid delivery when it is later. An indefinite
             * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
             * determined or the subscription is canceled. anyOf[1] (Value): string. Projected end
             * under the current schedule and committed plan changes, including an earlier
             * scheduled cancellation. A date limit preserves already-paid entitlement without
             * requiring a future charge schedule. A reached cycle limit uses the last paid period
             * end, or current_period_end_at when no paid history exists; that fallback includes
             * any skip or pause extension. A cycle limit with cycles left needs a future charge
             * schedule unless a known scheduled cancellation determines the end. Paid deliveries
             * extend the end to the last paid delivery when it is later. An indefinite pause with
             * paid deliveries owed makes the end unknown. Null when the end cannot be determined
             * or the subscription is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Who receives the gift, when this is a gift subscription. customer_id stays the
             * purchaser. Flint clears it when the subscription ends and when the purchaser's data
             * is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@link
             * SubscriptionGiftRecipientPreviousAttributes}. anyOf[2] (Value): null.
             */
            "gift_recipient"?: ((SubscriptionGiftRecipientPreviousAttributes) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer sessions on routes shared with merchants get
             * `null`. `/v1/me` responses do not include this field. anyOf[1] (Value): string. The
             * Idempotency-Key of the request that created this resource. `null` when that request
             * sent no key, Flint created the resource, the reader isn't the caller that created it
             * (another app install, a buyer, or the merchant reading an app's or buyer's record),
             * or the caller that created an older record is unknown. Filter its list with
             * `idempotency_key` to find it. Recorded payloads, including replayed responses and
             * webhook events, can return `null`. To find a key that a replay returns as `null`,
             * read the resource. Buyer sessions on routes shared with merchants get `null`.
             * `/v1/me` responses do not include this field. anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Renewal waiting for stock. Buyers receive only started_at. anyOf[1] (Value): {@link
             * SubscriptionInventoryWaitPreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_wait"?: ((SubscriptionInventoryWaitPreviousAttributes) | (null));
            /**
             * True while an active or trialing subscription on an external billing schedule has no
             * next billing date. anyOf[1] (Value): boolean. True while an active or trialing
             * subscription on an external billing schedule has no next billing date. anyOf[2]
             * (Value): null.
             */
            "is_awaiting_billing_schedule"?: ((boolean) | (null));
            /**
             * Latest renewal payment failure, present only while status is past_due and the latest
             * payment failed. Buyer responses omit merchant remediation and sensitive decline
             * signals. anyOf[1] (Value): {@link PaymentErrorSummaryPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "last_payment_error"?: ((PaymentErrorSummaryPreviousAttributes) | (null));
            /**
             * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a
             * line takes that variant's current catalog price, which then stays until the line
             * changes again. anyOf[1] (Value): Array of {@link
             * SubscriptionLineItemPreviousAttributes}. What each renewal bills. Plan edits do not
             * change it. Adding, changing or swapping a line takes that variant's current catalog
             * price, which then stays until the line changes again. anyOf[1][] (Value): {@link
             * SubscriptionLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<SubscriptionLineItemPreviousAttributes>) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The billing date whose payment failed, as an RFC3339 timestamp. Present only while
             * status is past_due. anyOf[1] (Value): string. The billing date whose payment failed,
             * as an RFC3339 timestamp. Present only while status is past_due. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "missed_billing_at"?: ((string) | (null));
            /**
             * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present
             * only while a trialing or active subscription has a billing date and isn't set to
             * cancel at the end of its period. Absent when no renewal is scheduled: a subscription
             * in its final billing cycle ends at expires_at, a paused subscription resumes at
             * scheduled_resume_at, a past_due one reports the failed billing date in
             * missed_billing_at and retries at next_retry_at, an incomplete one retries at
             * next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at
             * scheduled_cancel_at, and an external schedule awaiting a date reports
             * is_awaiting_billing_schedule. anyOf[1] (Value): string. When Flint next starts a
             * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or
             * active subscription has a billing date and isn't set to cancel at the end of its
             * period. Absent when no renewal is scheduled: a subscription in its final billing
             * cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a
             * past_due one reports the failed billing date in missed_billing_at and retries at
             * next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins
             * at starts_at, one set to cancel ends at scheduled_cancel_at, and an external
             * schedule awaiting a date reports is_awaiting_billing_schedule. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "next_billing_at"?: ((string) | (null));
            /**
             * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
             * subscription has an indefinite pause, no delivery is scheduled, or the subscription
             * is canceled. anyOf[1] (Value): string. When the next prepaid delivery order is due,
             * shifted by a timed pause. Null when the subscription has an indefinite pause, no
             * delivery is scheduled, or the subscription is canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "next_delivery_at"?: ((string) | (null));
            /**
             * Recorded automatic payment retry time. Null when no retry time is available.
             * anyOf[1] (Value): string. Recorded automatic payment retry time. Null when no retry
             * time is available. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "next_retry_at"?: ((string) | (null));
            /**
             * ID of the paid renewal order whose shipment has not been dispatched. It keeps its
             * committed delivery destination after preference changes and cancellation. Absent
             * when no such renewal order exists. Only renewal orders count; the signup order is
             * not included. anyOf[1] (Value): string. ID of the paid renewal order whose shipment
             * has not been dispatched. It keeps its committed delivery destination after
             * preference changes and cancellation. Absent when no such renewal order exists. Only
             * renewal orders count; the signup order is not included. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "open_renewal_order_id"?: ((string) | (null));
            /**
             * Unpaid balance of the failed renewal order, including tax, shipping and discounts,
             * after payments and credits. Present only while status is past_due and a positive
             * balance remains. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "outstanding_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Why the subscription is paused: merchant for a pause made with your API key or
             * dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
             * during or after a delivery hold, and payment_failed when renewal payment retries ran
             * out and your dunning settings pause the subscription. Omitted when the subscription
             * is not paused. Value enum: "buyer", "delivery_action_required", "merchant",
             * "payment_failed". anyOf[1] (Value): string. Why the subscription is paused: merchant
             * for a pause made with your API key or dashboard, buyer for the buyer's own pause,
             * delivery_action_required for a pause during or after a delivery hold, and
             * payment_failed when renewal payment retries ran out and your dunning settings pause
             * the subscription. Omitted when the subscription is not paused. Value enum: "buyer",
             * "delivery_action_required", "merchant", "payment_failed". anyOf[2] (Value): null.
             */
            "pause_reason"?: (("buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "paused_at"?: ((string) | (null));
            /**
             * The delivery hold that expired and paused the subscription. Null when no stored
             * expiry reason exists, including a manual pause during an active hold, or the
             * subscription is no longer paused for delivery action. anyOf[1] (Value): {@link
             * SubscriptionPausedDeliveryHoldPreviousAttributes}. anyOf[2] (Value): null.
             */
            "paused_delivery_hold"?: ((SubscriptionPausedDeliveryHoldPreviousAttributes) | (null));
            /**
             * The payment link that started this subscription, when there was one. anyOf[1]
             * (Value): string. The payment link that started this subscription, when there was
             * one. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". anyOf[2] (Value): null.
             */
            "payment_link_id"?: ((string) | (null));
            /**
             * Present only when `expand` includes `payment_method`; `null` when expanded and there
             * is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_method"?: ((ExpandedPaymentMethodSummaryPreviousAttributes) | (null));
            /**
             * First charge boundary while no card is bound: the later of trial_end_at and
             * next_billing_at during a trial, or the next billing date for an imported period,
             * even when that cycle's charge is zero. Recomputed when the schedule changes. A trial
             * still without a card at its boundary cancels without an order or payment attempt. At
             * that boundary, an imported subscription with a positive charge that still has no
             * card enters its normal dunning schedule without a payment attempt. For an imported
             * subscription, a zero charge completes the renewal without a card and the deadline
             * advances to the following boundary. Null when a card is bound, collection is not
             * scheduled (paused, canceled, or set to cancel at period end), an active or trialing
             * subscription is in its final end_after cycle, or an external schedule has no known
             * boundary. anyOf[1] (Value): string. First charge boundary while no card is bound:
             * the later of trial_end_at and next_billing_at during a trial, or the next billing
             * date for an imported period, even when that cycle's charge is zero. Recomputed when
             * the schedule changes. A trial still without a card at its boundary cancels without
             * an order or payment attempt. At that boundary, an imported subscription with a
             * positive charge that still has no card enters its normal dunning schedule without a
             * payment attempt. For an imported subscription, a zero charge completes the renewal
             * without a card and the deadline advances to the following boundary. Null when a card
             * is bound, collection is not scheduled (paused, canceled, or set to cancel at period
             * end), an active or trialing subscription is in its final end_after cycle, or an
             * external schedule has no known boundary. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "payment_method_due_at"?: ((string) | (null));
            /**
             * Saved payment method used for renewal charges. Null when no card is bound. Bind a
             * card to this subscription with PATCH; changing the customer's default alone does not
             * bind it. anyOf[1] (Value): string. Saved payment method used for renewal charges.
             * Null when no card is bound. Bind a card to this subscription with PATCH; changing
             * the customer's default alone does not bind it. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
             */
            "payment_method_id"?: ((string) | (null));
            /**
             * Recurring promotions applying to the next charged cycle. Scheduled attachments are
             * listed in scheduled_promotions. Empty when none apply; signup-only and exhausted
             * promotions are excluded. anyOf[1] (Value): Array of {@link
             * SubscriptionPromotionPreviousAttributes}. Recurring promotions applying to the next
             * charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when
             * none apply; signup-only and exhausted promotions are excluded. anyOf[1][] (Value):
             * {@link SubscriptionPromotionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "promotions"?: ((Array<SubscriptionPromotionPreviousAttributes>) | (null));
            /**
             * Whether this subscription was created to prorate its first anchored paid period. Set
             * at creation and never changes; starting on the anchor day still bills a normal full
             * period. anyOf[1] (Value): boolean. Whether this subscription was created to prorate
             * its first anchored paid period. Set at creation and never changes; starting on the
             * anchor day still bills a normal full period. anyOf[2] (Value): null.
             */
            "prorate_first_period"?: ((boolean) | (null));
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. `null` when a cancellation succeeds but
             * Flint couldn't load the billing snapshot afterward, so the cancel response returns
             * it as null. Retrieve the subscription again to get it. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "recurring_subtotal_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
             * when there is no cycle limit or the subscription is canceled. anyOf[1] (Value):
             * integer. Charges left for a cycle limit, bounded by an earlier scheduled
             * cancellation. Null when there is no cycle limit or the subscription is canceled.
             * Format: uint64. minimum: 0. anyOf[2] (Value): null.
             */
            "remaining_cycles"?: ((number) | (null));
            /**
             * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
             * with deliveries_per_period minus one. When delivery_hold is present and this count
             * is positive, fixing delivery releases an already-paid delivery with shipping waived
             * and no new charge. A next_renewal preview still estimates the next paid billing
             * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual
             * refunds. anyOf[1] (Value): integer. Paid deliveries whose delivery order Flint
             * hasn't created yet. A paid period starts with deliveries_per_period minus one. When
             * delivery_hold is present and this count is positive, fixing delivery releases an
             * already-paid delivery with shipping waived and no new charge. A next_renewal preview
             * still estimates the next paid billing cycle. Skips, holds, and pauses consume none.
             * Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum: 23.
             * anyOf[2] (Value): null.
             */
            "remaining_prepaid_deliveries"?: ((number) | (null));
            /**
             * When Flint accepted a pending resume request. Set only while paused with a resume
             * Flint has not applied yet. Clears when Flint resumes the subscription or refuses the
             * request. `null` when the subscription isn't paused or no resume request is pending.
             * anyOf[1] (Value): string. When Flint accepted a pending resume request. Set only
             * while paused with a resume Flint has not applied yet. Clears when Flint resumes the
             * subscription or refuses the request. `null` when the subscription isn't paused or no
             * resume request is pending. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "resume_requested_at"?: ((string) | (null));
            /**
             * When the scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. anyOf[1] (Value): string. When the
             * scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_cancel_at"?: ((string) | (null));
            /**
             * Frozen target terms for the next charged renewal. Null when no plan change is
             * scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through
             * change-plan. anyOf[1] (Value): {@link
             * SubscriptionScheduledPlanChangePreviousAttributes}. anyOf[2] (Value): null.
             */
            "scheduled_plan_change"?: ((SubscriptionScheduledPlanChangePreviousAttributes) | (null));
            /**
             * Attached promotions whose first_cycle is after the next charged cycle,
             * completed_cycles + 1. Always present; empty when no promotions are scheduled.
             * anyOf[1] (Value): Array of {@link SubscriptionPromotionPreviousAttributes}. Attached
             * promotions whose first_cycle is after the next charged cycle, completed_cycles + 1.
             * Always present; empty when no promotions are scheduled. anyOf[1][] (Value): {@link
             * SubscriptionPromotionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "scheduled_promotions"?: ((Array<SubscriptionPromotionPreviousAttributes>) | (null));
            /**
             * When a pause with a length (pause_duration_cycles) resumes on its own: that many
             * delivery intervals after paused_at on a prepaid subscription, or billing intervals
             * otherwise. Null when the subscription is not paused or the pause has no length, such
             * as a pause until you resume it or the pause Flint starts when a delivery hold runs
             * out. anyOf[1] (Value): string. When a pause with a length (pause_duration_cycles)
             * resumes on its own: that many delivery intervals after paused_at on a prepaid
             * subscription, or billing intervals otherwise. Null when the subscription is not
             * paused or the pause has no length, such as a pause until you resume it or the pause
             * Flint starts when a delivery hold runs out. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_resume_at"?: ((string) | (null));
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. anyOf[1] (Value): {@link
             * SubscriptionServiceLocationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "service_location"?: ((SubscriptionServiceLocationPreviousAttributes) | (null));
            /**
             * When a scheduled start's first billing period begins. Present only until that first
             * payment succeeds. anyOf[1] (Value): string. When a scheduled start's first billing
             * period begins. Present only until that first payment succeeds. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "starts_at"?: ((string) | (null));
            /**
             * Where the subscription is in its lifecycle. Each value says what it means. Value
             * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
             * "scheduled". anyOf[1] (Value): string. Where the subscription is in its lifecycle.
             * Each value says what it means. Value enum: "trialing", "active", "paused",
             * "past_due", "canceled", "incomplete", "scheduled". anyOf[2] (Value): null.
             */
            "status"?: (("trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {}))
                | (null));
            /**
             * Stable identifier of the subscription. anyOf[1] (Value): string. Stable identifier
             * of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value):
             * null.
             */
            "subscription_id"?: ((string) | (null));
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null));
            /**
             * Subscription plan ID. Omitted when terms_type is subscription_offer. anyOf[1]
             * (Value): string. Subscription plan ID. Omitted when terms_type is
             * subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". anyOf[2] (Value):
             * null.
             */
            "subscription_plan_id"?: ((string) | (null));
            /**
             * Merchant actions allowed by the subscription's state. A route can still refuse a
             * listed action for a transient reason, such as a renewal already in progress, with
             * its own error. Always present with merchant credentials. [] enum: "cancel", "pause",
             * "resume", "skip_cycle", "renew", "change_plan", "change_quantity". anyOf[1] (Value):
             * Array of string. Merchant actions allowed by the subscription's state. A route can
             * still refuse a listed action for a transient reason, such as a renewal already in
             * progress, with its own error. Always present with merchant credentials. [] enum:
             * "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
             * "change_quantity". anyOf[1][] (Value): string. Value enum: "cancel", "pause",
             * "resume", "skip_cycle", "renew", "change_plan", "change_quantity". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>)
                | (null));
            /**
             * The tax the subscription's renewal, setup fee and plan change orders use. `null`
             * when they follow `tax.default_enabled` and `tax.default_calculation` from your
             * settings. Returned only to merchant credentials; omitted for buyer credentials.
             * Always present with merchant credentials. anyOf[1] (Value): {@link
             * SubscriptionTaxPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tax"?: ((SubscriptionTaxPreviousAttributes) | (null));
            /**
             * Terms come from the subscription plan in subscription_plan_id, or from subscription
             * offers identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer". anyOf[1] (Value): string. Terms come from
             * the subscription plan in subscription_plan_id, or from subscription offers
             * identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer". anyOf[2] (Value): null.
             */
            "terms_type"?: (("subscription_plan" | "subscription_offer" | (string & {})) | (null));
            /**
             * ID of the test clock the subscription's customer was created on. The subscription
             * bills at the clock's time. Present only when the customer is on a test clock.
             * Included only in merchant responses and omitted from buyer responses. anyOf[1]
             * (Value): string. ID of the test clock the subscription's customer was created on.
             * The subscription bills at the clock's time. Present only when the customer is on a
             * test clock. Included only in merchant responses and omitted from buyer responses.
             * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". anyOf[2] (Value): null.
             */
            "test_clock_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "trial_end_at"?: ((string) | (null));
            /**
             * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
             * delivery_hold. anyOf[1] (Value): {@link
             * SubscriptionUpcomingDeliveryHoldPreviousAttributes}. anyOf[2] (Value): null.
             */
            "upcoming_delivery_hold"?: ((SubscriptionUpcomingDeliveryHoldPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Goes up with every change to the subscription, including renewals and other changes
             * Flint makes. Send it as `expected_version` to apply an update only if nothing
             * changed. anyOf[1] (Value): integer. Goes up with every change to the subscription,
             * including renewals and other changes Flint makes. Send it as `expected_version` to
             * apply an update only if nothing changed. Format: uint64. minimum: 0. anyOf[2]
             * (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "subscription.updated". */
    "event_type"?: "subscription.updated";
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
 * The `subscription.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  actor (Optional): {@link ReturnActor}. Who caused this event, captured when the change
     * commits. Omitted when the event predates actor attribution or attribution is unavailable.
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID. object (Required): object. The resource snapshot, without expansions. Webhooks
     * omit no additional fields. object.billing_anchor_day (Optional): integer. UTC day of the
     * month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format:
     * int32. minimum: 1. maximum: 31. object.billing_hold (Optional): {@link
     * SubscriptionBillingHold}. Configuration issue or automatic retry delaying billing, with the
     * first detection time. Flint retries automatically without starting payment recovery. Cleared
     * when billing succeeds, the schedule is replaced, the subscription is paused or canceled, or
     * a card decline starts payment recovery. Included only in merchant responses. Why
     * subscription billing is delayed, with the time Flint first detected it. A billing hold does
     * not mean the card was declined. object.billing_interval (Required): string. How often the
     * subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills
     * quarterly. A change applies from the next renewal that has not been paid; next_billing_at
     * does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * object.billing_interval_count (Required): integer. Number of billing_interval units between
     * charges. Changes with billing_interval. Format: int32. object.billing_interval_options
     * (Optional): Array of {@link SubscriptionIntervalOption}. Billing interval and count pairs
     * the subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * maxItems: 12. uniqueItems: true. object.billing_interval_options[] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer,
     * or subscription lets buyers choose. Prices of lines that ship are per delivery, and each
     * option charges for all deliveries in its period. Without a delivery cadence there is one
     * delivery per period, so every option bills the same line prices once per period. With a
     * delivery cadence, a longer period bills more deliveries of the lines that ship; other lines
     * bill once per period. For a different price per interval with no delivery cadence, create
     * separate plans. object.billing_schedule_owner (Required): string. Who supplies billing
     * dates: flint advances the schedule after each paid renewal; external uses dates you supply.
     * Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum:
     * "flint", "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancel_at_period_end
     * (Required): boolean. True when the subscription is scheduled to cancel at
     * scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo
     * with PATCH and cancel_at_period_end false. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_details
     * (Optional): {@link SubscriptionCancellationDetails}. Who asked to cancel, when, and why.
     * Present once a cancellation is requested, whether it takes effect at the end of the billing
     * period or right away. Omitted when no one asked, and removed when a scheduled cancellation
     * is undone. See cancellation_reason for voluntary and payment-related cancellations. The
     * cancellation request behind a scheduled or completed cancellation.
     * object.cancellation_reason (Optional): string. Why the subscription is canceled or scheduled
     * to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the
     * signup order, end_after_reached when the automatic ending agreement is reached,
     * cancellation_details.requested_by when recorded, payment_failed for other canceled
     * subscriptions without a requester, and other for a scheduled cancellation without a
     * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
     * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * object.completed_cycles (Required): integer. Billing cycles charged so far, including cycles
     * imported with `billing_start.completed_cycles`. The next renewal order's
     * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * object.contract_end_at (Optional): string. When the recorded contract term ends. Does not
     * move when the subscription pauses or changes plan. Flint does not stop the buyer from
     * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.contract_start_at (Optional): string. When the recorded contract term started. Does
     * not move when the subscription pauses or changes plan. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_period_end_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_period_start_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link ExpandedCustomerSummary}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. The customer
     * this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deliveries_per_period (Required): integer. Deliveries paid for by one billing period,
     * from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are
     * per delivery. Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
     * SubscriptionDelivery}. Saved delivery preference with the current delivery method display.
     * Write responses use the same display as GET: fixed shipping reflects the current method
     * configuration, and quoted shipping shows the last paid shipping amount when available. A
     * subscription's saved delivery preference: method, destination, recipient, shipping cost, and
     * who last changed it. object.delivery_hold (Optional): {@link SubscriptionDeliveryHold}.
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it. object.delivery_interval (Required): string
     * or null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is
     * set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly",
     * "yearly", null. object.delivery_interval_count (Required): integer or null. Number of
     * delivery intervals between deliveries. Null when no separate delivery cadence is set.
     * Format: int32. minimum: 1. object.early_termination_fee_money (Optional): {@link
     * MoneyValue}. The fee in the recorded contract terms. Present whenever those terms include a
     * fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later
     * plan changes do not change this fee. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.end_after (Required): {@link SubscriptionEndAfter} or
     * null. Recorded automatic end condition. Null when no automatic end is set. Cycles count
     * charged billing periods, including imported completed_cycles. Pauses and skips do not use
     * cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
     * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
     * without consuming its entitlement. Ending never refunds. object.end_after.anyOf[1] (Value):
     * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
     * charged billing cycles or a saved local calendar date. object.end_after.anyOf[2] (Value):
     * null. object.expires_at (Required): string or null. Projected end under the current schedule
     * and committed plan changes, including an earlier scheduled cancellation. A date limit
     * preserves already-paid entitlement without requiring a future charge schedule. A reached
     * cycle limit uses the last paid period end, or current_period_end_at when no paid history
     * exists; that fallback includes any skip or pause extension. A cycle limit with cycles left
     * needs a future charge schedule unless a known scheduled cancellation determines the end.
     * Paid deliveries extend the end to the last paid delivery when it is later. An indefinite
     * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
     * determined or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_recipient (Required): {@link SubscriptionGiftRecipient} or
     * null. Who receives the gift, when this is a gift subscription. customer_id stays the
     * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
     * erased. Null when the subscription isn't a gift. object.gift_recipient.anyOf[1] (Value):
     * {@link SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
     * purchaser, who pays, gets receipts and reminders, and manages the subscription.
     * delivery.recipient stays the ship-to address. object.gift_recipient.anyOf[2] (Value): null.
     * object.idempotency_key (Optional): string or null. The Idempotency-Key of the request that
     * created this resource. `null` when that request sent no key, Flint created the resource, the
     * reader isn't the caller that created it (another app install, a buyer, or the merchant
     * reading an app's or buyer's record), or the caller that created an older record is unknown.
     * Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed
     * responses and webhook events, can return `null`. To find a key that a replay returns as
     * `null`, read the resource. Buyer sessions on routes shared with merchants get `null`.
     * `/v1/me` responses do not include this field. object.inventory_wait (Optional): {@link
     * SubscriptionInventoryWait}. Renewal waiting for stock. Buyers receive only started_at. Shows
     * that a subscription renewal is waiting for inventory, with the order and invoice involved
     * and when the wait started. object.is_awaiting_billing_schedule (Optional): boolean. True
     * while an active or trialing subscription on an external billing schedule has no next billing
     * date. object.last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal
     * payment failure, present only while status is past_due and the latest payment failed. Buyer
     * responses omit merchant remediation and sensitive decline signals. A summary of why a
     * payment attempt failed, with a normalized error code, a message, the failure time, and
     * remediation. object.line_items (Required): Array of {@link SubscriptionLineItem}. What each
     * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that
     * variant's current catalog price, which then stays until the line changes again.
     * object.line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
     * recurring purchase. object.merchant_id (Required): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and
     * size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.missed_billing_at (Optional): string. The billing date whose payment failed, as an
     * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_billing_at (Optional): string. When Flint next starts a
     * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active
     * subscription has a billing date and isn't set to cancel at the end of its period. Absent
     * when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at,
     * a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed
     * billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at
     * next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at
     * scheduled_cancel_at, and an external schedule awaiting a date reports
     * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.next_delivery_at (Required): string or null. When the next prepaid delivery order is
     * due, shifted by a timed pause. Null when the subscription has an indefinite pause, no
     * delivery is scheduled, or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_retry_at (Required): string or null. Recorded automatic
     * payment retry time. Null when no retry time is available. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.open_renewal_order_id (Optional): string. ID of the paid
     * renewal order whose shipment has not been dispatched. It keeps its committed delivery
     * destination after preference changes and cancellation. Absent when no such renewal order
     * exists. Only renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Optional): {@link MoneyValue}.
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.pause_reason (Optional): string. Why the subscription is paused: merchant for a pause
     * made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed". object.paused_at (Optional):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.paused_delivery_hold (Required): {@link SubscriptionPausedDeliveryHold} or null. The
     * delivery hold that expired and paused the subscription. Null when no stored expiry reason
     * exists, including a manual pause during an active hold, or the subscription is no longer
     * paused for delivery action. object.paused_delivery_hold.anyOf[1] (Value): {@link
     * SubscriptionPausedDeliveryHold}. The delivery hold that expired and paused this
     * subscription. A manual pause during an active hold is not an expiry. This field does not
     * imply a refund. object.paused_delivery_hold.anyOf[2] (Value): null. object.payment_link_id
     * (Optional): string. The payment link that started this subscription, when there was one.
     * Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_method (Optional): {@link
     * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes `payment_method`;
     * `null` when expanded and there is no related payment method. object.payment_method.anyOf[1]
     * (Value): {@link ExpandedPaymentMethodSummary}. A payment method's summary fields, including
     * type, status, and card details, returned when the payment method is expanded.
     * object.payment_method.anyOf[2] (Value): null. object.payment_method_due_at (Required):
     * string or null. First charge boundary while no card is bound: the later of trial_end_at and
     * next_billing_at during a trial, or the next billing date for an imported period, even when
     * that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a
     * card at its boundary cancels without an order or payment attempt. At that boundary, an
     * imported subscription with a positive charge that still has no card enters its normal
     * dunning schedule without a payment attempt. For an imported subscription, a zero charge
     * completes the renewal without a card and the deadline advances to the following boundary.
     * Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel
     * at period end), an active or trialing subscription is in its final end_after cycle, or an
     * external schedule has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method_id (Required): string or null. Saved payment method used for renewal
     * charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing
     * the customer's default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * object.promotions (Required): Array of {@link SubscriptionPromotion}. Recurring promotions
     * applying to the next charged cycle. Scheduled attachments are listed in
     * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
     * excluded. object.promotions[] (Value): {@link SubscriptionPromotion}. A recurring promotion
     * applied to a subscription, including its recurrence and remaining discounted cycles.
     * object.prorate_first_period (Required): boolean. Whether this subscription was created to
     * prorate its first anchored paid period. Set at creation and never changes; starting on the
     * anchor day still bills a normal full period. object.recurring_subtotal_money (Required):
     * {@link MoneyValue} or null. What one billing period's items cost before discounts, shipping,
     * and tax: each line's price with modifiers, times quantity. It changes when items, quantity,
     * or the plan change; editing the plan doesn't change it. For the next charge, use a
     * subscription preview in next_renewal mode. `null` when a cancellation succeeds but Flint
     * couldn't load the billing snapshot afterward, so the cancel response returns it as null.
     * Retrieve the subscription again to get it. object.recurring_subtotal_money.anyOf[1] (Value):
     * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.recurring_subtotal_money.anyOf[2] (Value): null.
     * object.remaining_cycles (Required): integer or null. Charges left for a cycle limit, bounded
     * by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription
     * is canceled. Format: uint64. minimum: 0. object.remaining_prepaid_deliveries (Required):
     * integer. Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
     * with deliveries_per_period minus one. When delivery_hold is present and this count is
     * positive, fixing delivery releases an already-paid delivery with shipping waived and no new
     * charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds,
     * and pauses consume none. Frozen on cancellation for manual refunds. Format: int32. minimum:
     * 0. maximum: 23. object.resume_requested_at (Required): string or null. When Flint accepted a
     * pending resume request. Set only while paused with a resume Flint has not applied yet.
     * Clears when Flint resumes the subscription or refuses the request. `null` when the
     * subscription isn't paused or no resume request is pending. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.scheduled_cancel_at (Required): string or null. When the
     * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
     * while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
     * delivery when it is later. Null when cancel_at_period_end is false or no cancellation time
     * is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
     * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
     * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
     * object.scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}.
     * Frozen target terms that apply at the next charged renewal.
     * object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions (Required):
     * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after the
     * next charged cycle, completed_cycles + 1. Always present; empty when no promotions are
     * scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A recurring
     * promotion applied to a subscription, including its recurrence and remaining discounted
     * cycles. object.scheduled_resume_at (Required): string or null. When a pause with a length
     * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on
     * a prepaid subscription, or billing intervals otherwise. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_location (Optional): {@link SubscriptionServiceLocation}. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified. The
     * address where a subscription's service is delivered, with the saved customer address it came
     * from. object.starts_at (Optional): string. When a scheduled start's first billing period
     * begins. Present only until that first payment succeeds. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Where the subscription is in its
     * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". object.subscription_id (Required):
     * string. Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Optional): Array of string.
     * Merchant actions allowed by the subscription's state. A route can still refuse a listed
     * action for a transient reason, such as a renewal already in progress, with its own error.
     * Always present with merchant credentials. [] enum: "cancel", "pause", "resume",
     * "skip_cycle", "renew", "change_plan", "change_quantity". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
     * "change_quantity". object.tax (Optional): {@link SubscriptionTax} or null. The tax the
     * subscription's renewal, setup fee and plan change orders use. `null` when they follow
     * `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to
     * merchant credentials; omitted for buyer credentials. Always present with merchant
     * credentials. object.tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax the
     * subscription's renewal, setup fee and plan change orders use. Returned only to merchant
     * credentials; omitted for buyer credentials. object.tax.anyOf[2] (Value): null.
     * object.terms_type (Required): string. Terms come from the subscription plan in
     * subscription_plan_id, or from subscription offers identified on each offer line by
     * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * object.test_clock_id (Optional): string. ID of the test clock the subscription's customer
     * was created on. The subscription bills at the clock's time. Present only when the customer
     * is on a test clock. Included only in merchant responses and omitted from buyer responses.
     * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.trial_end_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.upcoming_delivery_hold
     * (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next
     * renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected
     * for an upcoming renewal that will hold the subscription's delivery, and who can fix it.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with every change to the
     * subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.billing_anchor_day (Optional): integer or null. UTC day of the month
     * used for monthly and yearly billing. Applies only to Flint-owned schedules.
     * previous_attributes.billing_anchor_day.anyOf[1] (Value): integer. UTC day of the month used
     * for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32.
     * minimum: 1. maximum: 31. previous_attributes.billing_anchor_day.anyOf[2] (Value): null.
     * previous_attributes.billing_hold (Optional): {@link
     * SubscriptionBillingHoldPreviousAttributes} or null. Configuration issue or automatic retry
     * delaying billing, with the first detection time. Flint retries automatically without
     * starting payment recovery. Cleared when billing succeeds, the schedule is replaced, the
     * subscription is paused or canceled, or a card decline starts payment recovery. Included only
     * in merchant responses. previous_attributes.billing_hold.anyOf[1] (Value): {@link
     * SubscriptionBillingHoldPreviousAttributes}. previous_attributes.billing_hold.anyOf[2]
     * (Value): null. previous_attributes.billing_interval (Optional): string or null. How often
     * the subscription bills now. Read with billing_interval_count: monthly with a count of 3
     * bills quarterly. A change applies from the next renewal that has not been paid;
     * next_billing_at does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * previous_attributes.billing_interval.anyOf[1] (Value): string. How often the subscription
     * bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A
     * change applies from the next renewal that has not been paid; next_billing_at does not move.
     * Value enum: "daily", "weekly", "monthly", "yearly".
     * previous_attributes.billing_interval.anyOf[2] (Value): null.
     * previous_attributes.billing_interval_count (Optional): integer or null. Number of
     * billing_interval units between charges. Changes with billing_interval.
     * previous_attributes.billing_interval_count.anyOf[1] (Value): integer. Number of
     * billing_interval units between charges. Changes with billing_interval. Format: int32.
     * previous_attributes.billing_interval_count.anyOf[2] (Value): null.
     * previous_attributes.billing_interval_options (Optional): Array of {@link
     * SubscriptionIntervalOptionPreviousAttributes} or null. Billing interval and count pairs the
     * subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * previous_attributes.billing_interval_options.anyOf[1] (Value): Array of {@link
     * SubscriptionIntervalOptionPreviousAttributes}. Billing interval and count pairs the
     * subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * maxItems: 12. uniqueItems: true. previous_attributes.billing_interval_options.anyOf[1][]
     * (Value): {@link SubscriptionIntervalOptionPreviousAttributes}.
     * previous_attributes.billing_interval_options.anyOf[2] (Value): null.
     * previous_attributes.billing_schedule_owner (Optional): string or null. Who supplies billing
     * dates: flint advances the schedule after each paid renewal; external uses dates you supply.
     * Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum:
     * "flint", "external". previous_attributes.billing_schedule_owner.anyOf[1] (Value): string.
     * Who supplies billing dates: flint advances the schedule after each paid renewal; external
     * uses dates you supply. Change it with billing_schedule on PATCH
     * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
     * previous_attributes.billing_schedule_owner.anyOf[2] (Value): null.
     * previous_attributes.billing_schedule_waiting_started_at (Optional): string or null. RFC3339
     * timestamp. previous_attributes.billing_schedule_waiting_started_at.anyOf[1] (Value): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.billing_schedule_waiting_started_at.anyOf[2] (Value): null.
     * previous_attributes.cancel_at_period_end (Optional): boolean or null. True when the
     * subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     * previous_attributes.cancel_at_period_end.anyOf[1] (Value): boolean. True when the
     * subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     * previous_attributes.cancel_at_period_end.anyOf[2] (Value): null.
     * previous_attributes.canceled_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.canceled_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2]
     * (Value): null. previous_attributes.cancellation_details (Optional): {@link
     * SubscriptionCancellationDetailsPreviousAttributes} or null. Who asked to cancel, when, and
     * why. Present once a cancellation is requested, whether it takes effect at the end of the
     * billing period or right away. Omitted when no one asked, and removed when a scheduled
     * cancellation is undone. See cancellation_reason for voluntary and payment-related
     * cancellations. previous_attributes.cancellation_details.anyOf[1] (Value): {@link
     * SubscriptionCancellationDetailsPreviousAttributes}.
     * previous_attributes.cancellation_details.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the subscription is
     * canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory
     * refund fully refunds the signup order, end_after_reached when the automatic ending agreement
     * is reached, cancellation_details.requested_by when recorded, payment_failed for other
     * canceled subscriptions without a requester, and other for a scheduled cancellation without a
     * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
     * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * previous_attributes.cancellation_reason.anyOf[1] (Value): string. Why the subscription is
     * canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory
     * refund fully refunds the signup order, end_after_reached when the automatic ending agreement
     * is reached, cancellation_details.requested_by when recorded, payment_failed for other
     * canceled subscriptions without a requester, and other for a scheduled cancellation without a
     * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
     * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.completed_cycles (Optional): integer or null. Billing cycles charged so
     * far, including cycles imported with `billing_start.completed_cycles`. The next renewal
     * order's `subscription_cycle` is this number plus one.
     * previous_attributes.completed_cycles.anyOf[1] (Value): integer. Billing cycles charged so
     * far, including cycles imported with `billing_start.completed_cycles`. The next renewal
     * order's `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * previous_attributes.completed_cycles.anyOf[2] (Value): null.
     * previous_attributes.contract_end_at (Optional): string or null. When the recorded contract
     * term ends. Does not move when the subscription pauses or changes plan. Flint does not stop
     * the buyer from canceling earlier. previous_attributes.contract_end_at.anyOf[1] (Value):
     * string. When the recorded contract term ends. Does not move when the subscription pauses or
     * changes plan. Flint does not stop the buyer from canceling earlier. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.contract_end_at.anyOf[2] (Value): null.
     * previous_attributes.contract_start_at (Optional): string or null. When the recorded contract
     * term started. Does not move when the subscription pauses or changes plan.
     * previous_attributes.contract_start_at.anyOf[1] (Value): string. When the recorded contract
     * term started. Does not move when the subscription pauses or changes plan. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.contract_start_at.anyOf[2] (Value):
     * null. previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.current_period_end_at (Optional): string or null. RFC3339
     * timestamp. previous_attributes.current_period_end_at.anyOf[1] (Value): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.current_period_end_at.anyOf[2] (Value): null.
     * previous_attributes.current_period_start_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.current_period_start_at.anyOf[1] (Value): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.current_period_start_at.anyOf[2] (Value): null.
     * previous_attributes.customer (Optional): {@link ExpandedCustomerSummaryPreviousAttributes}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. The customer this
     * subscription bills. previous_attributes.customer_id.anyOf[1] (Value): string. The customer
     * this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.deliveries_per_period (Optional): integer or null. Deliveries paid for
     * by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of
     * lines that ship are per delivery. previous_attributes.deliveries_per_period.anyOf[1]
     * (Value): integer. Deliveries paid for by one billing period, from 1 to 24. One when no
     * separate delivery cadence is set. Prices of lines that ship are per delivery. Format: int32.
     * minimum: 1. maximum: 24. previous_attributes.deliveries_per_period.anyOf[2] (Value): null.
     * previous_attributes.delivery (Optional): {@link SubscriptionDeliveryPreviousAttributes} or
     * null. Saved delivery preference with the current delivery method display. Write responses
     * use the same display as GET: fixed shipping reflects the current method configuration, and
     * quoted shipping shows the last paid shipping amount when available.
     * previous_attributes.delivery.anyOf[1] (Value): {@link
     * SubscriptionDeliveryPreviousAttributes}. previous_attributes.delivery.anyOf[2] (Value):
     * null. previous_attributes.delivery_hold (Optional): {@link
     * SubscriptionDeliveryHoldPreviousAttributes} or null. Current delivery issue that blocks
     * collection. Mutually exclusive with upcoming_delivery_hold.
     * previous_attributes.delivery_hold.anyOf[1] (Value): {@link
     * SubscriptionDeliveryHoldPreviousAttributes}. previous_attributes.delivery_hold.anyOf[2]
     * (Value): null. previous_attributes.delivery_interval (Optional): string or null. Delivery
     * cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is
     * made per billing period. Value enum: "daily", "weekly", "monthly", "yearly", null.
     * previous_attributes.delivery_interval.anyOf[1] (Value): string. Delivery cadence frozen from
     * the plan. Null when no separate delivery cadence is set; one delivery is made per billing
     * period. Value enum: "daily", "weekly", "monthly", "yearly", null.
     * previous_attributes.delivery_interval.anyOf[2] (Value): null.
     * previous_attributes.delivery_interval_count (Optional): integer or null. Number of delivery
     * intervals between deliveries. Null when no separate delivery cadence is set.
     * previous_attributes.delivery_interval_count.anyOf[1] (Value): integer. Number of delivery
     * intervals between deliveries. Null when no separate delivery cadence is set. Format: int32.
     * minimum: 1. previous_attributes.delivery_interval_count.anyOf[2] (Value): null.
     * previous_attributes.early_termination_fee_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. The fee in the recorded contract terms. Present
     * whenever those terms include a fee. It applies only to a cancellation before
     * contract_end_at. Flint never charges it. Later plan changes do not change this fee.
     * previous_attributes.early_termination_fee_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.early_termination_fee_money.anyOf[2]
     * (Value): null. previous_attributes.end_after (Optional): ({@link
     * SubscriptionEndAfterPreviousAttributes} or null) or null. Recorded automatic end condition.
     * Null when no automatic end is set. Cycles count charged billing periods, including imported
     * completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries
     * continue on their shifted dates, even beyond the end date, and cancellation waits for the
     * last remaining delivery. Skipping defers a delivery without consuming its entitlement.
     * Ending never refunds. previous_attributes.end_after.anyOf[1] (Value): ({@link
     * SubscriptionEndAfterPreviousAttributes} or null). Recorded automatic end condition. Null
     * when no automatic end is set. Cycles count charged billing periods, including imported
     * completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries
     * continue on their shifted dates, even beyond the end date, and cancellation waits for the
     * last remaining delivery. Skipping defers a delivery without consuming its entitlement.
     * Ending never refunds. previous_attributes.end_after.anyOf[1].anyOf[1] (Value): {@link
     * SubscriptionEndAfterPreviousAttributes}. The subscription's automatic end condition,
     * measured by charged billing cycles or a saved local calendar date.
     * previous_attributes.end_after.anyOf[1].anyOf[2] (Value): null.
     * previous_attributes.end_after.anyOf[2] (Value): null. previous_attributes.expires_at
     * (Optional): string or null. Projected end under the current schedule and committed plan
     * changes, including an earlier scheduled cancellation. A date limit preserves already-paid
     * entitlement without requiring a future charge schedule. A reached cycle limit uses the last
     * paid period end, or current_period_end_at when no paid history exists; that fallback
     * includes any skip or pause extension. A cycle limit with cycles left needs a future charge
     * schedule unless a known scheduled cancellation determines the end. Paid deliveries extend
     * the end to the last paid delivery when it is later. An indefinite pause with paid deliveries
     * owed makes the end unknown. Null when the end cannot be determined or the subscription is
     * canceled. previous_attributes.expires_at.anyOf[1] (Value): string. Projected end under the
     * current schedule and committed plan changes, including an earlier scheduled cancellation. A
     * date limit preserves already-paid entitlement without requiring a future charge schedule. A
     * reached cycle limit uses the last paid period end, or current_period_end_at when no paid
     * history exists; that fallback includes any skip or pause extension. A cycle limit with
     * cycles left needs a future charge schedule unless a known scheduled cancellation determines
     * the end. Paid deliveries extend the end to the last paid delivery when it is later. An
     * indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot
     * be determined or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.gift_recipient (Optional): {@link
     * SubscriptionGiftRecipientPreviousAttributes} or null. Who receives the gift, when this is a
     * gift subscription. customer_id stays the purchaser. Flint clears it when the subscription
     * ends and when the purchaser's data is erased. Null when the subscription isn't a gift.
     * previous_attributes.gift_recipient.anyOf[1] (Value): {@link
     * SubscriptionGiftRecipientPreviousAttributes}. previous_attributes.gift_recipient.anyOf[2]
     * (Value): null. previous_attributes.idempotency_key (Optional): string or null. The
     * Idempotency-Key of the request that created this resource. `null` when that request sent no
     * key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. Buyer sessions on routes
     * shared with merchants get `null`. `/v1/me` responses do not include this field.
     * previous_attributes.idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. Buyer sessions on routes shared with merchants get
     * `null`. `/v1/me` responses do not include this field.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_wait (Optional): {@link
     * SubscriptionInventoryWaitPreviousAttributes} or null. Renewal waiting for stock. Buyers
     * receive only started_at. previous_attributes.inventory_wait.anyOf[1] (Value): {@link
     * SubscriptionInventoryWaitPreviousAttributes}. previous_attributes.inventory_wait.anyOf[2]
     * (Value): null. previous_attributes.is_awaiting_billing_schedule (Optional): boolean or null.
     * True while an active or trialing subscription on an external billing schedule has no next
     * billing date. previous_attributes.is_awaiting_billing_schedule.anyOf[1] (Value): boolean.
     * True while an active or trialing subscription on an external billing schedule has no next
     * billing date. previous_attributes.is_awaiting_billing_schedule.anyOf[2] (Value): null.
     * previous_attributes.last_payment_error (Optional): {@link
     * PaymentErrorSummaryPreviousAttributes} or null. Latest renewal payment failure, present only
     * while status is past_due and the latest payment failed. Buyer responses omit merchant
     * remediation and sensitive decline signals. previous_attributes.last_payment_error.anyOf[1]
     * (Value): {@link PaymentErrorSummaryPreviousAttributes}.
     * previous_attributes.last_payment_error.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link
     * SubscriptionLineItemPreviousAttributes} or null. What each renewal bills. Plan edits do not
     * change it. Adding, changing or swapping a line takes that variant's current catalog price,
     * which then stays until the line changes again. previous_attributes.line_items.anyOf[1]
     * (Value): Array of {@link SubscriptionLineItemPreviousAttributes}. What each renewal bills.
     * Plan edits do not change it. Adding, changing or swapping a line takes that variant's
     * current catalog price, which then stays until the line changes again.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link
     * SubscriptionLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.merchant_id (Optional): string or null. ID of the merchant this
     * resource belongs to. previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.missed_billing_at (Optional): string or null. The billing date whose
     * payment failed, as an RFC3339 timestamp. Present only while status is past_due.
     * previous_attributes.missed_billing_at.anyOf[1] (Value): string. The billing date whose
     * payment failed, as an RFC3339 timestamp. Present only while status is past_due. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.missed_billing_at.anyOf[2]
     * (Value): null. previous_attributes.next_billing_at (Optional): string or null. When Flint
     * next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a
     * trialing or active subscription has a billing date and isn't set to cancel at the end of its
     * period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends
     * at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports
     * the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one
     * retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at
     * scheduled_cancel_at, and an external schedule awaiting a date reports
     * is_awaiting_billing_schedule. previous_attributes.next_billing_at.anyOf[1] (Value): string.
     * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only
     * while a trialing or active subscription has a billing date and isn't set to cancel at the
     * end of its period. Absent when no renewal is scheduled: a subscription in its final billing
     * cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due
     * one reports the failed billing date in missed_billing_at and retries at next_retry_at, an
     * incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to
     * cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports
     * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.next_billing_at.anyOf[2] (Value): null.
     * previous_attributes.next_delivery_at (Optional): string or null. When the next prepaid
     * delivery order is due, shifted by a timed pause. Null when the subscription has an
     * indefinite pause, no delivery is scheduled, or the subscription is canceled.
     * previous_attributes.next_delivery_at.anyOf[1] (Value): string. When the next prepaid
     * delivery order is due, shifted by a timed pause. Null when the subscription has an
     * indefinite pause, no delivery is scheduled, or the subscription is canceled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.next_delivery_at.anyOf[2]
     * (Value): null. previous_attributes.next_retry_at (Optional): string or null. Recorded
     * automatic payment retry time. Null when no retry time is available.
     * previous_attributes.next_retry_at.anyOf[1] (Value): string. Recorded automatic payment retry
     * time. Null when no retry time is available. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.next_retry_at.anyOf[2] (Value): null.
     * previous_attributes.open_renewal_order_id (Optional): string or null. ID of the paid renewal
     * order whose shipment has not been dispatched. It keeps its committed delivery destination
     * after preference changes and cancellation. Absent when no such renewal order exists. Only
     * renewal orders count; the signup order is not included.
     * previous_attributes.open_renewal_order_id.anyOf[1] (Value): string. ID of the paid renewal
     * order whose shipment has not been dispatched. It keeps its committed delivery destination
     * after preference changes and cancellation. Absent when no such renewal order exists. Only
     * renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.open_renewal_order_id.anyOf[2]
     * (Value): null. previous_attributes.outstanding_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Unpaid balance of the failed renewal order, including
     * tax, shipping and discounts, after payments and credits. Present only while status is
     * past_due and a positive balance remains. previous_attributes.outstanding_money.anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.outstanding_money.anyOf[2] (Value): null.
     * previous_attributes.pause_reason (Optional): string or null. Why the subscription is paused:
     * merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed".
     * previous_attributes.pause_reason.anyOf[1] (Value): string. Why the subscription is paused:
     * merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed".
     * previous_attributes.pause_reason.anyOf[2] (Value): null. previous_attributes.paused_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.paused_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.paused_at.anyOf[2] (Value): null.
     * previous_attributes.paused_delivery_hold (Optional): {@link
     * SubscriptionPausedDeliveryHoldPreviousAttributes} or null. The delivery hold that expired
     * and paused the subscription. Null when no stored expiry reason exists, including a manual
     * pause during an active hold, or the subscription is no longer paused for delivery action.
     * previous_attributes.paused_delivery_hold.anyOf[1] (Value): {@link
     * SubscriptionPausedDeliveryHoldPreviousAttributes}.
     * previous_attributes.paused_delivery_hold.anyOf[2] (Value): null.
     * previous_attributes.payment_link_id (Optional): string or null. The payment link that
     * started this subscription, when there was one. previous_attributes.payment_link_id.anyOf[1]
     * (Value): string. The payment link that started this subscription, when there was one.
     * Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". previous_attributes.payment_link_id.anyOf[2]
     * (Value): null. previous_attributes.payment_method (Optional): {@link
     * ExpandedPaymentMethodSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `payment_method`; `null` when expanded and there is no related payment method.
     * previous_attributes.payment_method.anyOf[1] (Value): {@link
     * ExpandedPaymentMethodSummaryPreviousAttributes}. previous_attributes.payment_method.anyOf[2]
     * (Value): null. previous_attributes.payment_method_due_at (Optional): string or null. First
     * charge boundary while no card is bound: the later of trial_end_at and next_billing_at during
     * a trial, or the next billing date for an imported period, even when that cycle's charge is
     * zero. Recomputed when the schedule changes. A trial still without a card at its boundary
     * cancels without an order or payment attempt. At that boundary, an imported subscription with
     * a positive charge that still has no card enters its normal dunning schedule without a
     * payment attempt. For an imported subscription, a zero charge completes the renewal without a
     * card and the deadline advances to the following boundary. Null when a card is bound,
     * collection is not scheduled (paused, canceled, or set to cancel at period end), an active or
     * trialing subscription is in its final end_after cycle, or an external schedule has no known
     * boundary. previous_attributes.payment_method_due_at.anyOf[1] (Value): string. First charge
     * boundary while no card is bound: the later of trial_end_at and next_billing_at during a
     * trial, or the next billing date for an imported period, even when that cycle's charge is
     * zero. Recomputed when the schedule changes. A trial still without a card at its boundary
     * cancels without an order or payment attempt. At that boundary, an imported subscription with
     * a positive charge that still has no card enters its normal dunning schedule without a
     * payment attempt. For an imported subscription, a zero charge completes the renewal without a
     * card and the deadline advances to the following boundary. Null when a card is bound,
     * collection is not scheduled (paused, canceled, or set to cancel at period end), an active or
     * trialing subscription is in its final end_after cycle, or an external schedule has no known
     * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.payment_method_due_at.anyOf[2] (Value): null.
     * previous_attributes.payment_method_id (Optional): string or null. Saved payment method used
     * for renewal charges. Null when no card is bound. Bind a card to this subscription with
     * PATCH; changing the customer's default alone does not bind it.
     * previous_attributes.payment_method_id.anyOf[1] (Value): string. Saved payment method used
     * for renewal charges. Null when no card is bound. Bind a card to this subscription with
     * PATCH; changing the customer's default alone does not bind it. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ". previous_attributes.payment_method_id.anyOf[2] (Value):
     * null. previous_attributes.promotions (Optional): Array of {@link
     * SubscriptionPromotionPreviousAttributes} or null. Recurring promotions applying to the next
     * charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none
     * apply; signup-only and exhausted promotions are excluded.
     * previous_attributes.promotions.anyOf[1] (Value): Array of {@link
     * SubscriptionPromotionPreviousAttributes}. Recurring promotions applying to the next charged
     * cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply;
     * signup-only and exhausted promotions are excluded. previous_attributes.promotions.anyOf[1][]
     * (Value): {@link SubscriptionPromotionPreviousAttributes}.
     * previous_attributes.promotions.anyOf[2] (Value): null.
     * previous_attributes.prorate_first_period (Optional): boolean or null. Whether this
     * subscription was created to prorate its first anchored paid period. Set at creation and
     * never changes; starting on the anchor day still bills a normal full period.
     * previous_attributes.prorate_first_period.anyOf[1] (Value): boolean. Whether this
     * subscription was created to prorate its first anchored paid period. Set at creation and
     * never changes; starting on the anchor day still bills a normal full period.
     * previous_attributes.prorate_first_period.anyOf[2] (Value): null.
     * previous_attributes.recurring_subtotal_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. What one billing period's items cost before
     * discounts, shipping, and tax: each line's price with modifiers, times quantity. It changes
     * when items, quantity, or the plan change; editing the plan doesn't change it. For the next
     * charge, use a subscription preview in next_renewal mode. `null` when a cancellation succeeds
     * but Flint couldn't load the billing snapshot afterward, so the cancel response returns it as
     * null. Retrieve the subscription again to get it.
     * previous_attributes.recurring_subtotal_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.recurring_subtotal_money.anyOf[2]
     * (Value): null. previous_attributes.remaining_cycles (Optional): integer or null. Charges
     * left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no
     * cycle limit or the subscription is canceled. previous_attributes.remaining_cycles.anyOf[1]
     * (Value): integer. Charges left for a cycle limit, bounded by an earlier scheduled
     * cancellation. Null when there is no cycle limit or the subscription is canceled. Format:
     * uint64. minimum: 0. previous_attributes.remaining_cycles.anyOf[2] (Value): null.
     * previous_attributes.remaining_prepaid_deliveries (Optional): integer or null. Paid
     * deliveries whose delivery order Flint hasn't created yet. A paid period starts with
     * deliveries_per_period minus one. When delivery_hold is present and this count is positive,
     * fixing delivery releases an already-paid delivery with shipping waived and no new charge. A
     * next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses
     * consume none. Frozen on cancellation for manual refunds.
     * previous_attributes.remaining_prepaid_deliveries.anyOf[1] (Value): integer. Paid deliveries
     * whose delivery order Flint hasn't created yet. A paid period starts with
     * deliveries_per_period minus one. When delivery_hold is present and this count is positive,
     * fixing delivery releases an already-paid delivery with shipping waived and no new charge. A
     * next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses
     * consume none. Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum:
     * 23. previous_attributes.remaining_prepaid_deliveries.anyOf[2] (Value): null.
     * previous_attributes.resume_requested_at (Optional): string or null. When Flint accepted a
     * pending resume request. Set only while paused with a resume Flint has not applied yet.
     * Clears when Flint resumes the subscription or refuses the request. `null` when the
     * subscription isn't paused or no resume request is pending.
     * previous_attributes.resume_requested_at.anyOf[1] (Value): string. When Flint accepted a
     * pending resume request. Set only while paused with a resume Flint has not applied yet.
     * Clears when Flint resumes the subscription or refuses the request. `null` when the
     * subscription isn't paused or no resume request is pending. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.resume_requested_at.anyOf[2] (Value): null.
     * previous_attributes.scheduled_cancel_at (Optional): string or null. When the scheduled
     * cancellation takes effect: trial_end_at while trialing, current_period_end_at while active,
     * or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it
     * is later. Null when cancel_at_period_end is false or no cancellation time is available.
     * previous_attributes.scheduled_cancel_at.anyOf[1] (Value): string. When the scheduled
     * cancellation takes effect: trial_end_at while trialing, current_period_end_at while active,
     * or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it
     * is later. Null when cancel_at_period_end is false or no cancellation time is available.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.scheduled_cancel_at.anyOf[2] (Value): null.
     * previous_attributes.scheduled_plan_change (Optional): {@link
     * SubscriptionScheduledPlanChangePreviousAttributes} or null. Frozen target terms for the next
     * charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change:
     * null on PATCH; replace through change-plan.
     * previous_attributes.scheduled_plan_change.anyOf[1] (Value): {@link
     * SubscriptionScheduledPlanChangePreviousAttributes}.
     * previous_attributes.scheduled_plan_change.anyOf[2] (Value): null.
     * previous_attributes.scheduled_promotions (Optional): Array of {@link
     * SubscriptionPromotionPreviousAttributes} or null. Attached promotions whose first_cycle is
     * after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
     * are scheduled. previous_attributes.scheduled_promotions.anyOf[1] (Value): Array of {@link
     * SubscriptionPromotionPreviousAttributes}. Attached promotions whose first_cycle is after the
     * next charged cycle, completed_cycles + 1. Always present; empty when no promotions are
     * scheduled. previous_attributes.scheduled_promotions.anyOf[1][] (Value): {@link
     * SubscriptionPromotionPreviousAttributes}. previous_attributes.scheduled_promotions.anyOf[2]
     * (Value): null. previous_attributes.scheduled_resume_at (Optional): string or null. When a
     * pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals
     * after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
     * subscription is not paused or the pause has no length, such as a pause until you resume it
     * or the pause Flint starts when a delivery hold runs out.
     * previous_attributes.scheduled_resume_at.anyOf[1] (Value): string. When a pause with a length
     * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on
     * a prepaid subscription, or billing intervals otherwise. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.scheduled_resume_at.anyOf[2] (Value): null.
     * previous_attributes.service_location (Optional): {@link
     * SubscriptionServiceLocationPreviousAttributes} or null. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified.
     * previous_attributes.service_location.anyOf[1] (Value): {@link
     * SubscriptionServiceLocationPreviousAttributes}.
     * previous_attributes.service_location.anyOf[2] (Value): null. previous_attributes.starts_at
     * (Optional): string or null. When a scheduled start's first billing period begins. Present
     * only until that first payment succeeds. previous_attributes.starts_at.anyOf[1] (Value):
     * string. When a scheduled start's first billing period begins. Present only until that first
     * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.starts_at.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Where the subscription is in its lifecycle. Each value says what it means.
     * Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
     * "scheduled". previous_attributes.status.anyOf[1] (Value): string. Where the subscription is
     * in its lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". previous_attributes.status.anyOf[2]
     * (Value): null. previous_attributes.subscription_id (Optional): string or null. Stable
     * identifier of the subscription. previous_attributes.subscription_id.anyOf[1] (Value):
     * string. Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * previous_attributes.subscription_id.anyOf[2] (Value): null.
     * previous_attributes.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes} or null. Present only when `expand`
     * includes `subscription_plan`; `null` when expanded and there is no related subscription
     * plan. previous_attributes.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummaryPreviousAttributes}.
     * previous_attributes.subscription_plan.anyOf[2] (Value): null.
     * previous_attributes.subscription_plan_id (Optional): string or null. Subscription plan ID.
     * Omitted when terms_type is subscription_offer.
     * previous_attributes.subscription_plan_id.anyOf[1] (Value): string. Subscription plan ID.
     * Omitted when terms_type is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * previous_attributes.subscription_plan_id.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Merchant actions
     * allowed by the subscription's state. A route can still refuse a listed action for a
     * transient reason, such as a renewal already in progress, with its own error. Always present
     * with merchant credentials. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew",
     * "change_plan", "change_quantity". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Merchant actions allowed by the subscription's state. A route can still
     * refuse a listed action for a transient reason, such as a renewal already in progress, with
     * its own error. Always present with merchant credentials. [] enum: "cancel", "pause",
     * "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel",
     * "pause", "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.tax
     * (Optional): {@link SubscriptionTaxPreviousAttributes} or null. The tax the subscription's
     * renewal, setup fee and plan change orders use. `null` when they follow `tax.default_enabled`
     * and `tax.default_calculation` from your settings. Returned only to merchant credentials;
     * omitted for buyer credentials. Always present with merchant credentials.
     * previous_attributes.tax.anyOf[1] (Value): {@link SubscriptionTaxPreviousAttributes}.
     * previous_attributes.tax.anyOf[2] (Value): null. previous_attributes.terms_type (Optional):
     * string or null. Terms come from the subscription plan in subscription_plan_id, or from
     * subscription offers identified on each offer line by subscription_offer_id. Value enum:
     * "subscription_plan", "subscription_offer". previous_attributes.terms_type.anyOf[1] (Value):
     * string. Terms come from the subscription plan in subscription_plan_id, or from subscription
     * offers identified on each offer line by subscription_offer_id. Value enum:
     * "subscription_plan", "subscription_offer". previous_attributes.terms_type.anyOf[2] (Value):
     * null. previous_attributes.test_clock_id (Optional): string or null. ID of the test clock the
     * subscription's customer was created on. The subscription bills at the clock's time. Present
     * only when the customer is on a test clock. Included only in merchant responses and omitted
     * from buyer responses. previous_attributes.test_clock_id.anyOf[1] (Value): string. ID of the
     * test clock the subscription's customer was created on. The subscription bills at the clock's
     * time. Present only when the customer is on a test clock. Included only in merchant responses
     * and omitted from buyer responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
     * previous_attributes.test_clock_id.anyOf[2] (Value): null. previous_attributes.trial_end_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.trial_end_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.trial_end_at.anyOf[2] (Value): null.
     * previous_attributes.upcoming_delivery_hold (Optional): {@link
     * SubscriptionUpcomingDeliveryHoldPreviousAttributes} or null. Delivery issue forecast for the
     * next renewal at renewal_at. Mutually exclusive with delivery_hold.
     * previous_attributes.upcoming_delivery_hold.anyOf[1] (Value): {@link
     * SubscriptionUpcomingDeliveryHoldPreviousAttributes}.
     * previous_attributes.upcoming_delivery_hold.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Goes up with every change to
     * the subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed.
     * previous_attributes.version.anyOf[1] (Value): integer. Goes up with every change to the
     * subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * Who caused this event, captured when the change commits. Omitted when the event predates
         * actor attribution or attribution is unavailable. Who performed a return action: a buyer,
         * merchant, integration, or the system, with an optional ID.
         */
        "actor"?: ReturnActor;
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_anchor_day (Optional): integer. UTC day of the month used for monthly and yearly
         * billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
         * billing_hold (Optional): {@link SubscriptionBillingHold}. Configuration issue or
         * automatic retry delaying billing, with the first detection time. Flint retries
         * automatically without starting payment recovery. Cleared when billing succeeds, the
         * schedule is replaced, the subscription is paused or canceled, or a card decline starts
         * payment recovery. Included only in merchant responses. Why subscription billing is
         * delayed, with the time Flint first detected it. A billing hold does not mean the card
         * was declined. billing_interval (Required): string. How often the subscription bills now.
         * Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change
         * applies from the next renewal that has not been paid; next_billing_at does not move.
         * Value enum: "daily", "weekly", "monthly", "yearly". billing_interval_count (Required):
         * integer. Number of billing_interval units between charges. Changes with
         * billing_interval. Format: int32. billing_interval_options (Optional): Array of {@link
         * SubscriptionIntervalOption}. Billing interval and count pairs the subscription can
         * switch to. For a subscription on a plan, they follow the plan's current
         * billing_interval_options. A subscription that came from an offer keeps the pairs the
         * offer had at signup. Prices of lines that ship are per delivery. Each option charges for
         * all deliveries in its period. Changing the interval does not change the per-delivery
         * price. maxItems: 12. uniqueItems: true. billing_interval_options[] (Value): {@link
         * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan,
         * offer, or subscription lets buyers choose. Prices of lines that ship are per delivery,
         * and each option charges for all deliveries in its period. Without a delivery cadence
         * there is one delivery per period, so every option bills the same line prices once per
         * period. With a delivery cadence, a longer period bills more deliveries of the lines that
         * ship; other lines bill once per period. For a different price per interval with no
         * delivery cadence, create separate plans. billing_schedule_owner (Required): string. Who
         * supplies billing dates: flint advances the schedule after each paid renewal; external
         * uses dates you supply. Change it with billing_schedule on PATCH
         * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
         * billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". cancel_at_period_end (Required): boolean.
         * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with
         * POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
         * cancel_at_period_end false. canceled_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * signup_order_refunded when an automatic inventory refund fully refunds the signup order,
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * completed_cycles (Required): integer. Billing cycles charged so far, including cycles
         * imported with `billing_start.completed_cycles`. The next renewal order's
         * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
         * contract_end_at (Optional): string. When the recorded contract term ends. Does not move
         * when the subscription pauses or changes plan. Flint does not stop the buyer from
         * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". contract_start_at
         * (Optional): string. When the recorded contract term started. Does not move when the
         * subscription pauses or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_end_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_start_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
         * delivery (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the
         * current delivery method display. Write responses use the same display as GET: fixed
         * shipping reflects the current method configuration, and quoted shipping shows the last
         * paid shipping amount when available. A subscription's saved delivery preference: method,
         * destination, recipient, shipping cost, and who last changed it. delivery_hold
         * (Optional): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
         * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
         * deliveries because its delivery method or destination no longer works, and who can fix
         * it. delivery_interval (Required): string or null. Delivery cadence frozen from the plan.
         * Null when no separate delivery cadence is set; one delivery is made per billing period.
         * Value enum: "daily", "weekly", "monthly", "yearly", null. delivery_interval_count
         * (Required): integer or null. Number of delivery intervals between deliveries. Null when
         * no separate delivery cadence is set. Format: int32. minimum: 1.
         * early_termination_fee_money (Optional): {@link MoneyValue}. The fee in the recorded
         * contract terms. Present whenever those terms include a fee. It applies only to a
         * cancellation before contract_end_at. Flint never charges it. Later plan changes do not
         * change this fee. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. end_after (Required): {@link SubscriptionEndAfter} or null. Recorded
         * automatic end condition. Null when no automatic end is set. Cycles count charged billing
         * periods, including imported completed_cycles. Pauses and skips do not use cycles.
         * Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
         * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
         * without consuming its entitlement. Ending never refunds. end_after.anyOf[1] (Value):
         * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
         * charged billing cycles or a saved local calendar date. end_after.anyOf[2] (Value): null.
         * expires_at (Required): string or null. Projected end under the current schedule and
         * committed plan changes, including an earlier scheduled cancellation. A date limit
         * preserves already-paid entitlement without requiring a future charge schedule. A reached
         * cycle limit uses the last paid period end, or current_period_end_at when no paid history
         * exists; that fallback includes any skip or pause extension. A cycle limit with cycles
         * left needs a future charge schedule unless a known scheduled cancellation determines the
         * end. Paid deliveries extend the end to the last paid delivery when it is later. An
         * indefinite pause with paid deliveries owed makes the end unknown. Null when the end
         * cannot be determined or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". gift_recipient (Required): {@link SubscriptionGiftRecipient} or null.
         * Who receives the gift, when this is a gift subscription. customer_id stays the
         * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
         * erased. Null when the subscription isn't a gift. gift_recipient.anyOf[1] (Value): {@link
         * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
         * purchaser, who pays, gets receipts and reminders, and manages the subscription.
         * delivery.recipient stays the ship-to address. gift_recipient.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource. `null` when that request sent no key, Flint created the resource,
         * the reader isn't the caller that created it (another app install, a buyer, or the
         * merchant reading an app's or buyer's record), or the caller that created an older record
         * is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer sessions on routes shared with
         * merchants get `null`. `/v1/me` responses do not include this field. inventory_wait
         * (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for stock. Buyers receive
         * only started_at. Shows that a subscription renewal is waiting for inventory, with the
         * order and invoice involved and when the wait started. is_awaiting_billing_schedule
         * (Optional): boolean. True while an active or trialing subscription on an external
         * billing schedule has no next billing date. last_payment_error (Optional): {@link
         * PaymentErrorSummary}. Latest renewal payment failure, present only while status is
         * past_due and the latest payment failed. Buyer responses omit merchant remediation and
         * sensitive decline signals. A summary of why a payment attempt failed, with a normalized
         * error code, a message, the failure time, and remediation. line_items (Required): Array
         * of {@link SubscriptionLineItem}. What each renewal bills. Plan edits do not change it.
         * Adding, changing or swapping a line takes that variant's current catalog price, which
         * then stays until the line changes again. line_items[] (Value): {@link
         * SubscriptionLineItem}. An item included in a customer's recurring purchase. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them.
         * missed_billing_at (Optional): string. The billing date whose payment failed, as an
         * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_billing_at (Optional): string. When Flint next starts a
         * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or
         * active subscription has a billing date and isn't set to cancel at the end of its period.
         * Absent when no renewal is scheduled: a subscription in its final billing cycle ends at
         * expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports
         * the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete
         * one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel
         * ends at scheduled_cancel_at, and an external schedule awaiting a date reports
         * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * next_delivery_at (Required): string or null. When the next prepaid delivery order is
         * due, shifted by a timed pause. Null when the subscription has an indefinite pause, no
         * delivery is scheduled, or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_retry_at (Required): string or null. Recorded automatic
         * payment retry time. Null when no retry time is available. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". open_renewal_order_id (Optional): string. ID of the paid renewal
         * order whose shipment has not been dispatched. It keeps its committed delivery
         * destination after preference changes and cancellation. Absent when no such renewal order
         * exists. Only renewal orders count; the signup order is not included. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". outstanding_money (Optional): {@link MoneyValue}.
         * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
         * payments and credits. Present only while status is past_due and a positive balance
         * remains. Monetary amount represented as integer minor units plus an ISO 4217 currency
         * code. pause_reason (Optional): string. Why the subscription is paused: merchant for a
         * pause made with your API key or dashboard, buyer for the buyer's own pause,
         * delivery_action_required for a pause during or after a delivery hold, and payment_failed
         * when renewal payment retries ran out and your dunning settings pause the subscription.
         * Omitted when the subscription is not paused. Value enum: "buyer",
         * "delivery_action_required", "merchant", "payment_failed". paused_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * paused_delivery_hold (Required): {@link SubscriptionPausedDeliveryHold} or null. The
         * delivery hold that expired and paused the subscription. Null when no stored expiry
         * reason exists, including a manual pause during an active hold, or the subscription is no
         * longer paused for delivery action. paused_delivery_hold.anyOf[1] (Value): {@link
         * SubscriptionPausedDeliveryHold}. The delivery hold that expired and paused this
         * subscription. A manual pause during an active hold is not an expiry. This field does not
         * imply a refund. paused_delivery_hold.anyOf[2] (Value): null. payment_link_id (Optional):
         * string. The payment link that started this subscription, when there was one. Example:
         * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_method (Optional): {@link
         * ExpandedPaymentMethodSummary} or null. Present only when `expand` includes
         * `payment_method`; `null` when expanded and there is no related payment method.
         * payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. payment_method.anyOf[2] (Value): null. payment_method_due_at
         * (Required): string or null. First charge boundary while no card is bound: the later of
         * trial_end_at and next_billing_at during a trial, or the next billing date for an
         * imported period, even when that cycle's charge is zero. Recomputed when the schedule
         * changes. A trial still without a card at its boundary cancels without an order or
         * payment attempt. At that boundary, an imported subscription with a positive charge that
         * still has no card enters its normal dunning schedule without a payment attempt. For an
         * imported subscription, a zero charge completes the renewal without a card and the
         * deadline advances to the following boundary. Null when a card is bound, collection is
         * not scheduled (paused, canceled, or set to cancel at period end), an active or trialing
         * subscription is in its final end_after cycle, or an external schedule has no known
         * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method_id
         * (Required): string or null. Saved payment method used for renewal charges. Null when no
         * card is bound. Bind a card to this subscription with PATCH; changing the customer's
         * default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". promotions
         * (Required): Array of {@link SubscriptionPromotion}. Recurring promotions applying to the
         * next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when
         * none apply; signup-only and exhausted promotions are excluded. promotions[] (Value):
         * {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. prorate_first_period
         * (Required): boolean. Whether this subscription was created to prorate its first anchored
         * paid period. Set at creation and never changes; starting on the anchor day still bills a
         * normal full period. recurring_subtotal_money (Required): {@link MoneyValue} or null.
         * What one billing period's items cost before discounts, shipping, and tax: each line's
         * price with modifiers, times quantity. It changes when items, quantity, or the plan
         * change; editing the plan doesn't change it. For the next charge, use a subscription
         * preview in next_renewal mode. `null` when a cancellation succeeds but Flint couldn't
         * load the billing snapshot afterward, so the cancel response returns it as null. Retrieve
         * the subscription again to get it. recurring_subtotal_money.anyOf[1] (Value): {@link
         * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. recurring_subtotal_money.anyOf[2] (Value): null. remaining_cycles
         * (Required): integer or null. Charges left for a cycle limit, bounded by an earlier
         * scheduled cancellation. Null when there is no cycle limit or the subscription is
         * canceled. Format: uint64. minimum: 0. remaining_prepaid_deliveries (Required): integer.
         * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with
         * deliveries_per_period minus one. When delivery_hold is present and this count is
         * positive, fixing delivery releases an already-paid delivery with shipping waived and no
         * new charge. A next_renewal preview still estimates the next paid billing cycle. Skips,
         * holds, and pauses consume none. Frozen on cancellation for manual refunds. Format:
         * int32. minimum: 0. maximum: 23. resume_requested_at (Required): string or null. When
         * Flint accepted a pending resume request. Set only while paused with a resume Flint has
         * not applied yet. Clears when Flint resumes the subscription or refuses the request.
         * `null` when the subscription isn't paused or no resume request is pending. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". scheduled_cancel_at (Required): string or
         * null. When the scheduled cancellation takes effect: trial_end_at while trialing,
         * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
         * extend it to the last paid delivery when it is later. Null when cancel_at_period_end is
         * false or no cancellation time is available. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_plan_change (Required): {@link
         * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged
         * renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null
         * on PATCH; replace through change-plan. scheduled_plan_change.anyOf[1] (Value): {@link
         * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
         * renewal. scheduled_plan_change.anyOf[2] (Value): null. scheduled_promotions (Required):
         * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after
         * the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
         * are scheduled. scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
         * recurring promotion applied to a subscription, including its recurrence and remaining
         * discounted cycles. scheduled_resume_at (Required): string or null. When a pause with a
         * length (pause_duration_cycles) resumes on its own: that many delivery intervals after
         * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
         * subscription is not paused or the pause has no length, such as a pause until you resume
         * it or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_location (Optional): {@link
         * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. The address where a subscription's service is
         * delivered, with the saved customer address it came from. starts_at (Optional): string.
         * When a scheduled start's first billing period begins. Present only until that first
         * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Where the subscription is in its lifecycle. Each value says what it means. Value
         * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
         * subscription_id (Required): string. Stable identifier of the subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_plan (Optional): {@link
         * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. Subscription plan ID. Omitted when terms_type
         * is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions
         * (Optional): Array of string. Merchant actions allowed by the subscription's state. A
         * route can still refuse a listed action for a transient reason, such as a renewal already
         * in progress, with its own error. Always present with merchant credentials. [] enum:
         * "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
         * supported_actions[] (Value): string. Value enum: "cancel", "pause", "resume",
         * "skip_cycle", "renew", "change_plan", "change_quantity". tax (Optional): {@link
         * SubscriptionTax} or null. The tax the subscription's renewal, setup fee and plan change
         * orders use. `null` when they follow `tax.default_enabled` and `tax.default_calculation`
         * from your settings. Returned only to merchant credentials; omitted for buyer
         * credentials. Always present with merchant credentials. tax.anyOf[1] (Value): {@link
         * SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change orders
         * use. Returned only to merchant credentials; omitted for buyer credentials. tax.anyOf[2]
         * (Value): null. terms_type (Required): string. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * test_clock_id (Optional): string. ID of the test clock the subscription's customer was
         * created on. The subscription bills at the clock's time. Present only when the customer
         * is on a test clock. Included only in merchant responses and omitted from buyer
         * responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". trial_end_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * upcoming_delivery_hold (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery
         * issue forecast for the next renewal at renewal_at. Mutually exclusive with
         * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
         * subscription's delivery, and who can fix it. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the subscription, including renewals and other
         * changes Flint makes. Send it as `expected_version` to apply an update only if nothing
         * changed. Format: uint64. minimum: 0.
         */
        "object": {
            /**
             * UTC day of the month used for monthly and yearly billing. Applies only to
             * Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
             */
            "billing_anchor_day"?: number;
            /**
             * Configuration issue or automatic retry delaying billing, with the first detection
             * time. Flint retries automatically without starting payment recovery. Cleared when
             * billing succeeds, the schedule is replaced, the subscription is paused or canceled,
             * or a card decline starts payment recovery. Included only in merchant responses. Why
             * subscription billing is delayed, with the time Flint first detected it. A billing
             * hold does not mean the card was declined.
             */
            "billing_hold"?: SubscriptionBillingHold;
            /**
             * How often the subscription bills now. Read with billing_interval_count: monthly with
             * a count of 3 bills quarterly. A change applies from the next renewal that has not
             * been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly",
             * "yearly".
             */
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            /**
             * Number of billing_interval units between charges. Changes with billing_interval.
             * Format: int32.
             */
            "billing_interval_count": number;
            /**
             * Billing interval and count pairs the subscription can switch to. For a subscription
             * on a plan, they follow the plan's current billing_interval_options. A subscription
             * that came from an offer keeps the pairs the offer had at signup. Prices of lines
             * that ship are per delivery. Each option charges for all deliveries in its period.
             * Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
             * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
             * choose. Prices of lines that ship are per delivery, and each option charges for all
             * deliveries in its period. Without a delivery cadence there is one delivery per
             * period, so every option bills the same line prices once per period. With a delivery
             * cadence, a longer period bills more deliveries of the lines that ship; other lines
             * bill once per period. For a different price per interval with no delivery cadence,
             * create separate plans.
             */
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            /**
             * Who supplies billing dates: flint advances the schedule after each paid renewal;
             * external uses dates you supply. Change it with billing_schedule on PATCH
             * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
             */
            "billing_schedule_owner": "flint" | "external" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "billing_schedule_waiting_started_at"?: string;
            /**
             * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule
             * with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
             * cancel_at_period_end false.
             */
            "cancel_at_period_end": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who asked to cancel, when, and why. Present once a cancellation is requested,
             * whether it takes effect at the end of the billing period or right away. Omitted when
             * no one asked, and removed when a scheduled cancellation is undone. See
             * cancellation_reason for voluntary and payment-related cancellations. The
             * cancellation request behind a scheduled or completed cancellation.
             */
            "cancellation_details"?: SubscriptionCancellationDetails;
            /**
             * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
             * when an automatic inventory refund fully refunds the signup order, end_after_reached
             * when the automatic ending agreement is reached, cancellation_details.requested_by
             * when recorded, payment_failed for other canceled subscriptions without a requester,
             * and other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            /**
             * Billing cycles charged so far, including cycles imported with
             * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is
             * this number plus one. Format: uint64. minimum: 0.
             */
            "completed_cycles": number;
            /**
             * When the recorded contract term ends. Does not move when the subscription pauses or
             * changes plan. Flint does not stop the buyer from canceling earlier. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_end_at"?: string;
            /**
             * When the recorded contract term started. Does not move when the subscription pauses
             * or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_start_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_end_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_start_at"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * Deliveries paid for by one billing period, from 1 to 24. One when no separate
             * delivery cadence is set. Prices of lines that ship are per delivery. Format: int32.
             * minimum: 1. maximum: 24.
             */
            "deliveries_per_period": number;
            /**
             * Saved delivery preference with the current delivery method display. Write responses
             * use the same display as GET: fixed shipping reflects the current method
             * configuration, and quoted shipping shows the last paid shipping amount when
             * available. A subscription's saved delivery preference: method, destination,
             * recipient, shipping cost, and who last changed it.
             */
            "delivery"?: SubscriptionDelivery;
            /**
             * Current delivery issue that blocks collection. Mutually exclusive with
             * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery
             * method or destination no longer works, and who can fix it.
             */
            "delivery_hold"?: SubscriptionDeliveryHold;
            /**
             * Delivery cadence frozen from the plan. Null when no separate delivery cadence is
             * set; one delivery is made per billing period. Value enum: "daily", "weekly",
             * "monthly", "yearly", null.
             */
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            /**
             * Number of delivery intervals between deliveries. Null when no separate delivery
             * cadence is set. Format: int32. minimum: 1.
             */
            "delivery_interval_count": number | null;
            /**
             * The fee in the recorded contract terms. Present whenever those terms include a fee.
             * It applies only to a cancellation before contract_end_at. Flint never charges it.
             * Later plan changes do not change this fee. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "early_termination_fee_money"?: MoneyValue;
            /**
             * Recorded automatic end condition. Null when no automatic end is set. Cycles count
             * charged billing periods, including imported completed_cycles. Pauses and skips do
             * not use cycles. Already-paid prepaid deliveries continue on their shifted dates,
             * even beyond the end date, and cancellation waits for the last remaining delivery.
             * Skipping defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1] (Value): {@link SubscriptionEndAfter}. The subscription's automatic end
             * condition, measured by charged billing cycles or a saved local calendar date.
             * anyOf[2] (Value): null.
             */
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            /**
             * Projected end under the current schedule and committed plan changes, including an
             * earlier scheduled cancellation. A date limit preserves already-paid entitlement
             * without requiring a future charge schedule. A reached cycle limit uses the last paid
             * period end, or current_period_end_at when no paid history exists; that fallback
             * includes any skip or pause extension. A cycle limit with cycles left needs a future
             * charge schedule unless a known scheduled cancellation determines the end. Paid
             * deliveries extend the end to the last paid delivery when it is later. An indefinite
             * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
             * determined or the subscription is canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Who receives the gift, when this is a gift subscription. customer_id stays the
             * purchaser. Flint clears it when the subscription ends and when the purchaser's data
             * is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@link
             * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
             * purchaser, who pays, gets receipts and reminders, and manages the subscription.
             * delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
             */
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer sessions on routes shared with merchants get
             * `null`. `/v1/me` responses do not include this field.
             */
            "idempotency_key"?: string | null;
            /**
             * Renewal waiting for stock. Buyers receive only started_at. Shows that a subscription
             * renewal is waiting for inventory, with the order and invoice involved and when the
             * wait started.
             */
            "inventory_wait"?: SubscriptionInventoryWait;
            /**
             * True while an active or trialing subscription on an external billing schedule has no
             * next billing date.
             */
            "is_awaiting_billing_schedule"?: boolean;
            /**
             * Latest renewal payment failure, present only while status is past_due and the latest
             * payment failed. Buyer responses omit merchant remediation and sensitive decline
             * signals. A summary of why a payment attempt failed, with a normalized error code, a
             * message, the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a
             * line takes that variant's current catalog price, which then stays until the line
             * changes again. [] (Value): {@link SubscriptionLineItem}. An item included in a
             * customer's recurring purchase.
             */
            "line_items": Array<SubscriptionLineItem>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The billing date whose payment failed, as an RFC3339 timestamp. Present only while
             * status is past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "missed_billing_at"?: string;
            /**
             * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present
             * only while a trialing or active subscription has a billing date and isn't set to
             * cancel at the end of its period. Absent when no renewal is scheduled: a subscription
             * in its final billing cycle ends at expires_at, a paused subscription resumes at
             * scheduled_resume_at, a past_due one reports the failed billing date in
             * missed_billing_at and retries at next_retry_at, an incomplete one retries at
             * next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at
             * scheduled_cancel_at, and an external schedule awaiting a date reports
             * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_billing_at"?: string;
            /**
             * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
             * subscription has an indefinite pause, no delivery is scheduled, or the subscription
             * is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_delivery_at": string | null;
            /**
             * Recorded automatic payment retry time. Null when no retry time is available. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_retry_at": string | null;
            /**
             * ID of the paid renewal order whose shipment has not been dispatched. It keeps its
             * committed delivery destination after preference changes and cancellation. Absent
             * when no such renewal order exists. Only renewal orders count; the signup order is
             * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "open_renewal_order_id"?: string;
            /**
             * Unpaid balance of the failed renewal order, including tax, shipping and discounts,
             * after payments and credits. Present only while status is past_due and a positive
             * balance remains. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "outstanding_money"?: MoneyValue;
            /**
             * Why the subscription is paused: merchant for a pause made with your API key or
             * dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
             * during or after a delivery hold, and payment_failed when renewal payment retries ran
             * out and your dunning settings pause the subscription. Omitted when the subscription
             * is not paused. Value enum: "buyer", "delivery_action_required", "merchant",
             * "payment_failed".
             */
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "paused_at"?: string;
            /**
             * The delivery hold that expired and paused the subscription. Null when no stored
             * expiry reason exists, including a manual pause during an active hold, or the
             * subscription is no longer paused for delivery action. anyOf[1] (Value): {@link
             * SubscriptionPausedDeliveryHold}. The delivery hold that expired and paused this
             * subscription. A manual pause during an active hold is not an expiry. This field does
             * not imply a refund. anyOf[2] (Value): null.
             */
            "paused_delivery_hold": ((SubscriptionPausedDeliveryHold) | (null));
            /**
             * The payment link that started this subscription, when there was one. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * Present only when `expand` includes `payment_method`; `null` when expanded and there
             * is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * First charge boundary while no card is bound: the later of trial_end_at and
             * next_billing_at during a trial, or the next billing date for an imported period,
             * even when that cycle's charge is zero. Recomputed when the schedule changes. A trial
             * still without a card at its boundary cancels without an order or payment attempt. At
             * that boundary, an imported subscription with a positive charge that still has no
             * card enters its normal dunning schedule without a payment attempt. For an imported
             * subscription, a zero charge completes the renewal without a card and the deadline
             * advances to the following boundary. Null when a card is bound, collection is not
             * scheduled (paused, canceled, or set to cancel at period end), an active or trialing
             * subscription is in its final end_after cycle, or an external schedule has no known
             * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "payment_method_due_at": string | null;
            /**
             * Saved payment method used for renewal charges. Null when no card is bound. Bind a
             * card to this subscription with PATCH; changing the customer's default alone does not
             * bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string | null;
            /**
             * Recurring promotions applying to the next charged cycle. Scheduled attachments are
             * listed in scheduled_promotions. Empty when none apply; signup-only and exhausted
             * promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A recurring
             * promotion applied to a subscription, including its recurrence and remaining
             * discounted cycles.
             */
            "promotions": Array<SubscriptionPromotion>;
            /**
             * Whether this subscription was created to prorate its first anchored paid period. Set
             * at creation and never changes; starting on the anchor day still bills a normal full
             * period.
             */
            "prorate_first_period": boolean;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. `null` when a cancellation succeeds but
             * Flint couldn't load the billing snapshot afterward, so the cancel response returns
             * it as null. Retrieve the subscription again to get it. anyOf[1] (Value): {@link
             * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code. anyOf[2] (Value): null.
             */
            "recurring_subtotal_money": ((MoneyValue) | (null));
            /**
             * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
             * when there is no cycle limit or the subscription is canceled. Format: uint64.
             * minimum: 0.
             */
            "remaining_cycles": number | null;
            /**
             * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
             * with deliveries_per_period minus one. When delivery_hold is present and this count
             * is positive, fixing delivery releases an already-paid delivery with shipping waived
             * and no new charge. A next_renewal preview still estimates the next paid billing
             * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual
             * refunds. Format: int32. minimum: 0. maximum: 23.
             */
            "remaining_prepaid_deliveries": number;
            /**
             * When Flint accepted a pending resume request. Set only while paused with a resume
             * Flint has not applied yet. Clears when Flint resumes the subscription or refuses the
             * request. `null` when the subscription isn't paused or no resume request is pending.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "resume_requested_at": string | null;
            /**
             * When the scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_cancel_at": string | null;
            /**
             * Frozen target terms for the next charged renewal. Null when no plan change is
             * scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through
             * change-plan. anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
             * target terms that apply at the next charged renewal. anyOf[2] (Value): null.
             */
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            /**
             * Attached promotions whose first_cycle is after the next charged cycle,
             * completed_cycles + 1. Always present; empty when no promotions are scheduled. []
             * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a
             * subscription, including its recurrence and remaining discounted cycles.
             */
            "scheduled_promotions": Array<SubscriptionPromotion>;
            /**
             * When a pause with a length (pause_duration_cycles) resumes on its own: that many
             * delivery intervals after paused_at on a prepaid subscription, or billing intervals
             * otherwise. Null when the subscription is not paused or the pause has no length, such
             * as a pause until you resume it or the pause Flint starts when a delivery hold runs
             * out. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_resume_at": string | null;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The address where a subscription's service is delivered, with the
             * saved customer address it came from.
             */
            "service_location"?: SubscriptionServiceLocation;
            /**
             * When a scheduled start's first billing period begins. Present only until that first
             * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "starts_at"?: string;
            /**
             * Where the subscription is in its lifecycle. Each value says what it means. Value
             * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
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
            /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Merchant actions allowed by the subscription's state. A route can still refuse a
             * listed action for a transient reason, such as a renewal already in progress, with
             * its own error. Always present with merchant credentials. [] enum: "cancel", "pause",
             * "resume", "skip_cycle", "renew", "change_plan", "change_quantity". [] (Value):
             * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew",
             * "change_plan", "change_quantity".
             */
            "supported_actions"?: Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            /**
             * The tax the subscription's renewal, setup fee and plan change orders use. `null`
             * when they follow `tax.default_enabled` and `tax.default_calculation` from your
             * settings. Returned only to merchant credentials; omitted for buyer credentials.
             * Always present with merchant credentials. anyOf[1] (Value): {@link SubscriptionTax}.
             * The tax the subscription's renewal, setup fee and plan change orders use. Returned
             * only to merchant credentials; omitted for buyer credentials. anyOf[2] (Value): null.
             */
            "tax"?: ((SubscriptionTax) | (null));
            /**
             * Terms come from the subscription plan in subscription_plan_id, or from subscription
             * offers identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer".
             */
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            /**
             * ID of the test clock the subscription's customer was created on. The subscription
             * bills at the clock's time. Present only when the customer is on a test clock.
             * Included only in merchant responses and omitted from buyer responses. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "trial_end_at"?: string;
            /**
             * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
             * delivery_hold. A delivery problem detected for an upcoming renewal that will hold
             * the subscription's delivery, and who can fix it.
             */
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the subscription, including renewals and other changes
             * Flint makes. Send it as `expected_version` to apply an update only if nothing
             * changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. billing_anchor_day (Optional): integer or null.
         * UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned
         * schedules. billing_anchor_day.anyOf[1] (Value): integer. UTC day of the month used for
         * monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32.
         * minimum: 1. maximum: 31. billing_anchor_day.anyOf[2] (Value): null. billing_hold
         * (Optional): {@link SubscriptionBillingHoldPreviousAttributes} or null. Configuration
         * issue or automatic retry delaying billing, with the first detection time. Flint retries
         * automatically without starting payment recovery. Cleared when billing succeeds, the
         * schedule is replaced, the subscription is paused or canceled, or a card decline starts
         * payment recovery. Included only in merchant responses. billing_hold.anyOf[1] (Value):
         * {@link SubscriptionBillingHoldPreviousAttributes}. billing_hold.anyOf[2] (Value): null.
         * billing_interval (Optional): string or null. How often the subscription bills now. Read
         * with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies
         * from the next renewal that has not been paid; next_billing_at does not move. Value enum:
         * "daily", "weekly", "monthly", "yearly". billing_interval.anyOf[1] (Value): string. How
         * often the subscription bills now. Read with billing_interval_count: monthly with a count
         * of 3 bills quarterly. A change applies from the next renewal that has not been paid;
         * next_billing_at does not move. Value enum: "daily", "weekly", "monthly", "yearly".
         * billing_interval.anyOf[2] (Value): null. billing_interval_count (Optional): integer or
         * null. Number of billing_interval units between charges. Changes with billing_interval.
         * billing_interval_count.anyOf[1] (Value): integer. Number of billing_interval units
         * between charges. Changes with billing_interval. Format: int32.
         * billing_interval_count.anyOf[2] (Value): null. billing_interval_options (Optional):
         * Array of {@link SubscriptionIntervalOptionPreviousAttributes} or null. Billing interval
         * and count pairs the subscription can switch to. For a subscription on a plan, they
         * follow the plan's current billing_interval_options. A subscription that came from an
         * offer keeps the pairs the offer had at signup. Prices of lines that ship are per
         * delivery. Each option charges for all deliveries in its period. Changing the interval
         * does not change the per-delivery price. billing_interval_options.anyOf[1] (Value): Array
         * of {@link SubscriptionIntervalOptionPreviousAttributes}. Billing interval and count
         * pairs the subscription can switch to. For a subscription on a plan, they follow the
         * plan's current billing_interval_options. A subscription that came from an offer keeps
         * the pairs the offer had at signup. Prices of lines that ship are per delivery. Each
         * option charges for all deliveries in its period. Changing the interval does not change
         * the per-delivery price. maxItems: 12. uniqueItems: true.
         * billing_interval_options.anyOf[1][] (Value): {@link
         * SubscriptionIntervalOptionPreviousAttributes}. billing_interval_options.anyOf[2]
         * (Value): null. billing_schedule_owner (Optional): string or null. Who supplies billing
         * dates: flint advances the schedule after each paid renewal; external uses dates you
         * supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}.
         * Value enum: "flint", "external". billing_schedule_owner.anyOf[1] (Value): string. Who
         * supplies billing dates: flint advances the schedule after each paid renewal; external
         * uses dates you supply. Change it with billing_schedule on PATCH
         * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
         * billing_schedule_owner.anyOf[2] (Value): null. billing_schedule_waiting_started_at
         * (Optional): string or null. RFC3339 timestamp.
         * billing_schedule_waiting_started_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". billing_schedule_waiting_started_at.anyOf[2]
         * (Value): null. cancel_at_period_end (Optional): boolean or null. True when the
         * subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
         * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end
         * false. cancel_at_period_end.anyOf[1] (Value): boolean. True when the subscription is
         * scheduled to cancel at scheduled_cancel_at. Schedule with POST
         * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end
         * false. cancel_at_period_end.anyOf[2] (Value): null. canceled_at (Optional): string or
         * null. RFC3339 timestamp. canceled_at.anyOf[1] (Value): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null.
         * cancellation_details (Optional): {@link
         * SubscriptionCancellationDetailsPreviousAttributes} or null. Who asked to cancel, when,
         * and why. Present once a cancellation is requested, whether it takes effect at the end of
         * the billing period or right away. Omitted when no one asked, and removed when a
         * scheduled cancellation is undone. See cancellation_reason for voluntary and
         * payment-related cancellations. cancellation_details.anyOf[1] (Value): {@link
         * SubscriptionCancellationDetailsPreviousAttributes}. cancellation_details.anyOf[2]
         * (Value): null. cancellation_reason (Optional): string or null. Why the subscription is
         * canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory
         * refund fully refunds the signup order, end_after_reached when the automatic ending
         * agreement is reached, cancellation_details.requested_by when recorded, payment_failed
         * for other canceled subscriptions without a requester, and other for a scheduled
         * cancellation without a requester. Omitted otherwise. Value enum: "buyer", "merchant",
         * "integration", "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * cancellation_reason.anyOf[1] (Value): string. Why the subscription is canceled or
         * scheduled to cancel. Uses signup_order_refunded when an automatic inventory refund fully
         * refunds the signup order, end_after_reached when the automatic ending agreement is
         * reached, cancellation_details.requested_by when recorded, payment_failed for other
         * canceled subscriptions without a requester, and other for a scheduled cancellation
         * without a requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * cancellation_reason.anyOf[2] (Value): null. completed_cycles (Optional): integer or
         * null. Billing cycles charged so far, including cycles imported with
         * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this
         * number plus one. completed_cycles.anyOf[1] (Value): integer. Billing cycles charged so
         * far, including cycles imported with `billing_start.completed_cycles`. The next renewal
         * order's `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
         * completed_cycles.anyOf[2] (Value): null. contract_end_at (Optional): string or null.
         * When the recorded contract term ends. Does not move when the subscription pauses or
         * changes plan. Flint does not stop the buyer from canceling earlier.
         * contract_end_at.anyOf[1] (Value): string. When the recorded contract term ends. Does not
         * move when the subscription pauses or changes plan. Flint does not stop the buyer from
         * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * contract_end_at.anyOf[2] (Value): null. contract_start_at (Optional): string or null.
         * When the recorded contract term started. Does not move when the subscription pauses or
         * changes plan. contract_start_at.anyOf[1] (Value): string. When the recorded contract
         * term started. Does not move when the subscription pauses or changes plan. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". contract_start_at.anyOf[2] (Value): null.
         * created_at (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. current_period_end_at (Optional): string or null.
         * RFC3339 timestamp. current_period_end_at.anyOf[1] (Value): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_end_at.anyOf[2]
         * (Value): null. current_period_start_at (Optional): string or null. RFC3339 timestamp.
         * current_period_start_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". current_period_start_at.anyOf[2] (Value): null.
         * customer (Optional): {@link ExpandedCustomerSummaryPreviousAttributes} or null. Present
         * only when `expand` includes `customer`; `null` when expanded and there is no related
         * customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummaryPreviousAttributes}.
         * customer.anyOf[2] (Value): null. customer_id (Optional): string or null. The customer
         * this subscription bills. customer_id.anyOf[1] (Value): string. The customer this
         * subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2]
         * (Value): null. deliveries_per_period (Optional): integer or null. Deliveries paid for by
         * one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices
         * of lines that ship are per delivery. deliveries_per_period.anyOf[1] (Value): integer.
         * Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery
         * cadence is set. Prices of lines that ship are per delivery. Format: int32. minimum: 1.
         * maximum: 24. deliveries_per_period.anyOf[2] (Value): null. delivery (Optional): {@link
         * SubscriptionDeliveryPreviousAttributes} or null. Saved delivery preference with the
         * current delivery method display. Write responses use the same display as GET: fixed
         * shipping reflects the current method configuration, and quoted shipping shows the last
         * paid shipping amount when available. delivery.anyOf[1] (Value): {@link
         * SubscriptionDeliveryPreviousAttributes}. delivery.anyOf[2] (Value): null. delivery_hold
         * (Optional): {@link SubscriptionDeliveryHoldPreviousAttributes} or null. Current delivery
         * issue that blocks collection. Mutually exclusive with upcoming_delivery_hold.
         * delivery_hold.anyOf[1] (Value): {@link SubscriptionDeliveryHoldPreviousAttributes}.
         * delivery_hold.anyOf[2] (Value): null. delivery_interval (Optional): string or null.
         * Delivery cadence frozen from the plan. Null when no separate delivery cadence is set;
         * one delivery is made per billing period. Value enum: "daily", "weekly", "monthly",
         * "yearly", null. delivery_interval.anyOf[1] (Value): string. Delivery cadence frozen from
         * the plan. Null when no separate delivery cadence is set; one delivery is made per
         * billing period. Value enum: "daily", "weekly", "monthly", "yearly", null.
         * delivery_interval.anyOf[2] (Value): null. delivery_interval_count (Optional): integer or
         * null. Number of delivery intervals between deliveries. Null when no separate delivery
         * cadence is set. delivery_interval_count.anyOf[1] (Value): integer. Number of delivery
         * intervals between deliveries. Null when no separate delivery cadence is set. Format:
         * int32. minimum: 1. delivery_interval_count.anyOf[2] (Value): null.
         * early_termination_fee_money (Optional): {@link MoneyValuePreviousAttributes} or null.
         * The fee in the recorded contract terms. Present whenever those terms include a fee. It
         * applies only to a cancellation before contract_end_at. Flint never charges it. Later
         * plan changes do not change this fee. early_termination_fee_money.anyOf[1] (Value):
         * {@link MoneyValuePreviousAttributes}. early_termination_fee_money.anyOf[2] (Value):
         * null. end_after (Optional): ({@link SubscriptionEndAfterPreviousAttributes} or null) or
         * null. Recorded automatic end condition. Null when no automatic end is set. Cycles count
         * charged billing periods, including imported completed_cycles. Pauses and skips do not
         * use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond
         * the end date, and cancellation waits for the last remaining delivery. Skipping defers a
         * delivery without consuming its entitlement. Ending never refunds. end_after.anyOf[1]
         * (Value): ({@link SubscriptionEndAfterPreviousAttributes} or null). Recorded automatic
         * end condition. Null when no automatic end is set. Cycles count charged billing periods,
         * including imported completed_cycles. Pauses and skips do not use cycles. Already-paid
         * prepaid deliveries continue on their shifted dates, even beyond the end date, and
         * cancellation waits for the last remaining delivery. Skipping defers a delivery without
         * consuming its entitlement. Ending never refunds. end_after.anyOf[1].anyOf[1] (Value):
         * {@link SubscriptionEndAfterPreviousAttributes}. The subscription's automatic end
         * condition, measured by charged billing cycles or a saved local calendar date.
         * end_after.anyOf[1].anyOf[2] (Value): null. end_after.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. Projected end under the current schedule and committed plan
         * changes, including an earlier scheduled cancellation. A date limit preserves
         * already-paid entitlement without requiring a future charge schedule. A reached cycle
         * limit uses the last paid period end, or current_period_end_at when no paid history
         * exists; that fallback includes any skip or pause extension. A cycle limit with cycles
         * left needs a future charge schedule unless a known scheduled cancellation determines the
         * end. Paid deliveries extend the end to the last paid delivery when it is later. An
         * indefinite pause with paid deliveries owed makes the end unknown. Null when the end
         * cannot be determined or the subscription is canceled. expires_at.anyOf[1] (Value):
         * string. Projected end under the current schedule and committed plan changes, including
         * an earlier scheduled cancellation. A date limit preserves already-paid entitlement
         * without requiring a future charge schedule. A reached cycle limit uses the last paid
         * period end, or current_period_end_at when no paid history exists; that fallback includes
         * any skip or pause extension. A cycle limit with cycles left needs a future charge
         * schedule unless a known scheduled cancellation determines the end. Paid deliveries
         * extend the end to the last paid delivery when it is later. An indefinite pause with paid
         * deliveries owed makes the end unknown. Null when the end cannot be determined or the
         * subscription is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * expires_at.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. gift_recipient (Optional): {@link
         * SubscriptionGiftRecipientPreviousAttributes} or null. Who receives the gift, when this
         * is a gift subscription. customer_id stays the purchaser. Flint clears it when the
         * subscription ends and when the purchaser's data is erased. Null when the subscription
         * isn't a gift. gift_recipient.anyOf[1] (Value): {@link
         * SubscriptionGiftRecipientPreviousAttributes}. gift_recipient.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource. `null` when that request sent no key, Flint created the resource,
         * the reader isn't the caller that created it (another app install, a buyer, or the
         * merchant reading an app's or buyer's record), or the caller that created an older record
         * is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer sessions on routes shared with
         * merchants get `null`. `/v1/me` responses do not include this field.
         * idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the request that
         * created this resource. `null` when that request sent no key, Flint created the resource,
         * the reader isn't the caller that created it (another app install, a buyer, or the
         * merchant reading an app's or buyer's record), or the caller that created an older record
         * is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer sessions on routes shared with
         * merchants get `null`. `/v1/me` responses do not include this field.
         * idempotency_key.anyOf[2] (Value): null. inventory_wait (Optional): {@link
         * SubscriptionInventoryWaitPreviousAttributes} or null. Renewal waiting for stock. Buyers
         * receive only started_at. inventory_wait.anyOf[1] (Value): {@link
         * SubscriptionInventoryWaitPreviousAttributes}. inventory_wait.anyOf[2] (Value): null.
         * is_awaiting_billing_schedule (Optional): boolean or null. True while an active or
         * trialing subscription on an external billing schedule has no next billing date.
         * is_awaiting_billing_schedule.anyOf[1] (Value): boolean. True while an active or trialing
         * subscription on an external billing schedule has no next billing date.
         * is_awaiting_billing_schedule.anyOf[2] (Value): null. last_payment_error (Optional):
         * {@link PaymentErrorSummaryPreviousAttributes} or null. Latest renewal payment failure,
         * present only while status is past_due and the latest payment failed. Buyer responses
         * omit merchant remediation and sensitive decline signals. last_payment_error.anyOf[1]
         * (Value): {@link PaymentErrorSummaryPreviousAttributes}. last_payment_error.anyOf[2]
         * (Value): null. line_items (Optional): Array of {@link
         * SubscriptionLineItemPreviousAttributes} or null. What each renewal bills. Plan edits do
         * not change it. Adding, changing or swapping a line takes that variant's current catalog
         * price, which then stays until the line changes again. line_items.anyOf[1] (Value): Array
         * of {@link SubscriptionLineItemPreviousAttributes}. What each renewal bills. Plan edits
         * do not change it. Adding, changing or swapping a line takes that variant's current
         * catalog price, which then stays until the line changes again. line_items.anyOf[1][]
         * (Value): {@link SubscriptionLineItemPreviousAttributes}. line_items.anyOf[2] (Value):
         * null. merchant_id (Optional): string or null. ID of the merchant this resource belongs
         * to. merchant_id.anyOf[1] (Value): string. ID of the merchant this resource belongs to.
         * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. missed_billing_at (Optional): string or
         * null. The billing date whose payment failed, as an RFC3339 timestamp. Present only while
         * status is past_due. missed_billing_at.anyOf[1] (Value): string. The billing date whose
         * payment failed, as an RFC3339 timestamp. Present only while status is past_due. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". missed_billing_at.anyOf[2] (Value): null.
         * next_billing_at (Optional): string or null. When Flint next starts a scheduled renewal
         * charge, as an RFC3339 timestamp. Present only while a trialing or active subscription
         * has a billing date and isn't set to cancel at the end of its period. Absent when no
         * renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a
         * paused subscription resumes at scheduled_resume_at, a past_due one reports the failed
         * billing date in missed_billing_at and retries at next_retry_at, an incomplete one
         * retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends
         * at scheduled_cancel_at, and an external schedule awaiting a date reports
         * is_awaiting_billing_schedule. next_billing_at.anyOf[1] (Value): string. When Flint next
         * starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a
         * trialing or active subscription has a billing date and isn't set to cancel at the end of
         * its period. Absent when no renewal is scheduled: a subscription in its final billing
         * cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a
         * past_due one reports the failed billing date in missed_billing_at and retries at
         * next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at
         * starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule
         * awaiting a date reports is_awaiting_billing_schedule. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_billing_at.anyOf[2] (Value): null. next_delivery_at
         * (Optional): string or null. When the next prepaid delivery order is due, shifted by a
         * timed pause. Null when the subscription has an indefinite pause, no delivery is
         * scheduled, or the subscription is canceled. next_delivery_at.anyOf[1] (Value): string.
         * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
         * subscription has an indefinite pause, no delivery is scheduled, or the subscription is
         * canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". next_delivery_at.anyOf[2]
         * (Value): null. next_retry_at (Optional): string or null. Recorded automatic payment
         * retry time. Null when no retry time is available. next_retry_at.anyOf[1] (Value):
         * string. Recorded automatic payment retry time. Null when no retry time is available.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". next_retry_at.anyOf[2] (Value):
         * null. open_renewal_order_id (Optional): string or null. ID of the paid renewal order
         * whose shipment has not been dispatched. It keeps its committed delivery destination
         * after preference changes and cancellation. Absent when no such renewal order exists.
         * Only renewal orders count; the signup order is not included.
         * open_renewal_order_id.anyOf[1] (Value): string. ID of the paid renewal order whose
         * shipment has not been dispatched. It keeps its committed delivery destination after
         * preference changes and cancellation. Absent when no such renewal order exists. Only
         * renewal orders count; the signup order is not included. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". open_renewal_order_id.anyOf[2] (Value): null.
         * outstanding_money (Optional): {@link MoneyValuePreviousAttributes} or null. Unpaid
         * balance of the failed renewal order, including tax, shipping and discounts, after
         * payments and credits. Present only while status is past_due and a positive balance
         * remains. outstanding_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * outstanding_money.anyOf[2] (Value): null. pause_reason (Optional): string or null. Why
         * the subscription is paused: merchant for a pause made with your API key or dashboard,
         * buyer for the buyer's own pause, delivery_action_required for a pause during or after a
         * delivery hold, and payment_failed when renewal payment retries ran out and your dunning
         * settings pause the subscription. Omitted when the subscription is not paused. Value
         * enum: "buyer", "delivery_action_required", "merchant", "payment_failed".
         * pause_reason.anyOf[1] (Value): string. Why the subscription is paused: merchant for a
         * pause made with your API key or dashboard, buyer for the buyer's own pause,
         * delivery_action_required for a pause during or after a delivery hold, and payment_failed
         * when renewal payment retries ran out and your dunning settings pause the subscription.
         * Omitted when the subscription is not paused. Value enum: "buyer",
         * "delivery_action_required", "merchant", "payment_failed". pause_reason.anyOf[2] (Value):
         * null. paused_at (Optional): string or null. RFC3339 timestamp. paused_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * paused_at.anyOf[2] (Value): null. paused_delivery_hold (Optional): {@link
         * SubscriptionPausedDeliveryHoldPreviousAttributes} or null. The delivery hold that
         * expired and paused the subscription. Null when no stored expiry reason exists, including
         * a manual pause during an active hold, or the subscription is no longer paused for
         * delivery action. paused_delivery_hold.anyOf[1] (Value): {@link
         * SubscriptionPausedDeliveryHoldPreviousAttributes}. paused_delivery_hold.anyOf[2]
         * (Value): null. payment_link_id (Optional): string or null. The payment link that started
         * this subscription, when there was one. payment_link_id.anyOf[1] (Value): string. The
         * payment link that started this subscription, when there was one. Example:
         * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_id.anyOf[2] (Value): null. payment_method
         * (Optional): {@link ExpandedPaymentMethodSummaryPreviousAttributes} or null. Present only
         * when `expand` includes `payment_method`; `null` when expanded and there is no related
         * payment method. payment_method.anyOf[1] (Value): {@link
         * ExpandedPaymentMethodSummaryPreviousAttributes}. payment_method.anyOf[2] (Value): null.
         * payment_method_due_at (Optional): string or null. First charge boundary while no card is
         * bound: the later of trial_end_at and next_billing_at during a trial, or the next billing
         * date for an imported period, even when that cycle's charge is zero. Recomputed when the
         * schedule changes. A trial still without a card at its boundary cancels without an order
         * or payment attempt. At that boundary, an imported subscription with a positive charge
         * that still has no card enters its normal dunning schedule without a payment attempt. For
         * an imported subscription, a zero charge completes the renewal without a card and the
         * deadline advances to the following boundary. Null when a card is bound, collection is
         * not scheduled (paused, canceled, or set to cancel at period end), an active or trialing
         * subscription is in its final end_after cycle, or an external schedule has no known
         * boundary. payment_method_due_at.anyOf[1] (Value): string. First charge boundary while no
         * card is bound: the later of trial_end_at and next_billing_at during a trial, or the next
         * billing date for an imported period, even when that cycle's charge is zero. Recomputed
         * when the schedule changes. A trial still without a card at its boundary cancels without
         * an order or payment attempt. At that boundary, an imported subscription with a positive
         * charge that still has no card enters its normal dunning schedule without a payment
         * attempt. For an imported subscription, a zero charge completes the renewal without a
         * card and the deadline advances to the following boundary. Null when a card is bound,
         * collection is not scheduled (paused, canceled, or set to cancel at period end), an
         * active or trialing subscription is in its final end_after cycle, or an external schedule
         * has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * payment_method_due_at.anyOf[2] (Value): null. payment_method_id (Optional): string or
         * null. Saved payment method used for renewal charges. Null when no card is bound. Bind a
         * card to this subscription with PATCH; changing the customer's default alone does not
         * bind it. payment_method_id.anyOf[1] (Value): string. Saved payment method used for
         * renewal charges. Null when no card is bound. Bind a card to this subscription with
         * PATCH; changing the customer's default alone does not bind it. Example:
         * "pm_01KEZF7C0034B248TXXE4NXYFZ". payment_method_id.anyOf[2] (Value): null. promotions
         * (Optional): Array of {@link SubscriptionPromotionPreviousAttributes} or null. Recurring
         * promotions applying to the next charged cycle. Scheduled attachments are listed in
         * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
         * excluded. promotions.anyOf[1] (Value): Array of {@link
         * SubscriptionPromotionPreviousAttributes}. Recurring promotions applying to the next
         * charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none
         * apply; signup-only and exhausted promotions are excluded. promotions.anyOf[1][] (Value):
         * {@link SubscriptionPromotionPreviousAttributes}. promotions.anyOf[2] (Value): null.
         * prorate_first_period (Optional): boolean or null. Whether this subscription was created
         * to prorate its first anchored paid period. Set at creation and never changes; starting
         * on the anchor day still bills a normal full period. prorate_first_period.anyOf[1]
         * (Value): boolean. Whether this subscription was created to prorate its first anchored
         * paid period. Set at creation and never changes; starting on the anchor day still bills a
         * normal full period. prorate_first_period.anyOf[2] (Value): null.
         * recurring_subtotal_money (Optional): {@link MoneyValuePreviousAttributes} or null. What
         * one billing period's items cost before discounts, shipping, and tax: each line's price
         * with modifiers, times quantity. It changes when items, quantity, or the plan change;
         * editing the plan doesn't change it. For the next charge, use a subscription preview in
         * next_renewal mode. `null` when a cancellation succeeds but Flint couldn't load the
         * billing snapshot afterward, so the cancel response returns it as null. Retrieve the
         * subscription again to get it. recurring_subtotal_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. recurring_subtotal_money.anyOf[2] (Value): null.
         * remaining_cycles (Optional): integer or null. Charges left for a cycle limit, bounded by
         * an earlier scheduled cancellation. Null when there is no cycle limit or the subscription
         * is canceled. remaining_cycles.anyOf[1] (Value): integer. Charges left for a cycle limit,
         * bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the
         * subscription is canceled. Format: uint64. minimum: 0. remaining_cycles.anyOf[2] (Value):
         * null. remaining_prepaid_deliveries (Optional): integer or null. Paid deliveries whose
         * delivery order Flint hasn't created yet. A paid period starts with deliveries_per_period
         * minus one. When delivery_hold is present and this count is positive, fixing delivery
         * releases an already-paid delivery with shipping waived and no new charge. A next_renewal
         * preview still estimates the next paid billing cycle. Skips, holds, and pauses consume
         * none. Frozen on cancellation for manual refunds. remaining_prepaid_deliveries.anyOf[1]
         * (Value): integer. Paid deliveries whose delivery order Flint hasn't created yet. A paid
         * period starts with deliveries_per_period minus one. When delivery_hold is present and
         * this count is positive, fixing delivery releases an already-paid delivery with shipping
         * waived and no new charge. A next_renewal preview still estimates the next paid billing
         * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds.
         * Format: int32. minimum: 0. maximum: 23. remaining_prepaid_deliveries.anyOf[2] (Value):
         * null. resume_requested_at (Optional): string or null. When Flint accepted a pending
         * resume request. Set only while paused with a resume Flint has not applied yet. Clears
         * when Flint resumes the subscription or refuses the request. `null` when the subscription
         * isn't paused or no resume request is pending. resume_requested_at.anyOf[1] (Value):
         * string. When Flint accepted a pending resume request. Set only while paused with a
         * resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses
         * the request. `null` when the subscription isn't paused or no resume request is pending.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". resume_requested_at.anyOf[2]
         * (Value): null. scheduled_cancel_at (Optional): string or null. When the scheduled
         * cancellation takes effect: trial_end_at while trialing, current_period_end_at while
         * active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
         * delivery when it is later. Null when cancel_at_period_end is false or no cancellation
         * time is available. scheduled_cancel_at.anyOf[1] (Value): string. When the scheduled
         * cancellation takes effect: trial_end_at while trialing, current_period_end_at while
         * active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
         * delivery when it is later. Null when cancel_at_period_end is false or no cancellation
         * time is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_cancel_at.anyOf[2] (Value): null. scheduled_plan_change (Optional): {@link
         * SubscriptionScheduledPlanChangePreviousAttributes} or null. Frozen target terms for the
         * next charged renewal. Null when no plan change is scheduled. Cancel with
         * scheduled_plan_change: null on PATCH; replace through change-plan.
         * scheduled_plan_change.anyOf[1] (Value): {@link
         * SubscriptionScheduledPlanChangePreviousAttributes}. scheduled_plan_change.anyOf[2]
         * (Value): null. scheduled_promotions (Optional): Array of {@link
         * SubscriptionPromotionPreviousAttributes} or null. Attached promotions whose first_cycle
         * is after the next charged cycle, completed_cycles + 1. Always present; empty when no
         * promotions are scheduled. scheduled_promotions.anyOf[1] (Value): Array of {@link
         * SubscriptionPromotionPreviousAttributes}. Attached promotions whose first_cycle is after
         * the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
         * are scheduled. scheduled_promotions.anyOf[1][] (Value): {@link
         * SubscriptionPromotionPreviousAttributes}. scheduled_promotions.anyOf[2] (Value): null.
         * scheduled_resume_at (Optional): string or null. When a pause with a length
         * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at
         * on a prepaid subscription, or billing intervals otherwise. Null when the subscription is
         * not paused or the pause has no length, such as a pause until you resume it or the pause
         * Flint starts when a delivery hold runs out. scheduled_resume_at.anyOf[1] (Value):
         * string. When a pause with a length (pause_duration_cycles) resumes on its own: that many
         * delivery intervals after paused_at on a prepaid subscription, or billing intervals
         * otherwise. Null when the subscription is not paused or the pause has no length, such as
         * a pause until you resume it or the pause Flint starts when a delivery hold runs out.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". scheduled_resume_at.anyOf[2]
         * (Value): null. service_location (Optional): {@link
         * SubscriptionServiceLocationPreviousAttributes} or null. Omitted for a checkout session
         * credential that doesn't act for the customer the buyer verified.
         * service_location.anyOf[1] (Value): {@link
         * SubscriptionServiceLocationPreviousAttributes}. service_location.anyOf[2] (Value): null.
         * starts_at (Optional): string or null. When a scheduled start's first billing period
         * begins. Present only until that first payment succeeds. starts_at.anyOf[1] (Value):
         * string. When a scheduled start's first billing period begins. Present only until that
         * first payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * starts_at.anyOf[2] (Value): null. status (Optional): string or null. Where the
         * subscription is in its lifecycle. Each value says what it means. Value enum: "trialing",
         * "active", "paused", "past_due", "canceled", "incomplete", "scheduled". status.anyOf[1]
         * (Value): string. Where the subscription is in its lifecycle. Each value says what it
         * means. Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
         * "scheduled". status.anyOf[2] (Value): null. subscription_id (Optional): string or null.
         * Stable identifier of the subscription. subscription_id.anyOf[1] (Value): string. Stable
         * identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_id.anyOf[2] (Value): null. subscription_plan (Optional): {@link
         * ExpandedSubscriptionPlanSummaryPreviousAttributes} or null. Present only when `expand`
         * includes `subscription_plan`; `null` when expanded and there is no related subscription
         * plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummaryPreviousAttributes}. subscription_plan.anyOf[2] (Value):
         * null. subscription_plan_id (Optional): string or null. Subscription plan ID. Omitted
         * when terms_type is subscription_offer. subscription_plan_id.anyOf[1] (Value): string.
         * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_plan_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Merchant actions allowed by the
         * subscription's state. A route can still refuse a listed action for a transient reason,
         * such as a renewal already in progress, with its own error. Always present with merchant
         * credentials. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
         * "change_quantity". supported_actions.anyOf[1] (Value): Array of string. Merchant actions
         * allowed by the subscription's state. A route can still refuse a listed action for a
         * transient reason, such as a renewal already in progress, with its own error. Always
         * present with merchant credentials. [] enum: "cancel", "pause", "resume", "skip_cycle",
         * "renew", "change_plan", "change_quantity". supported_actions.anyOf[1][] (Value): string.
         * Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
         * "change_quantity". supported_actions.anyOf[2] (Value): null. tax (Optional): {@link
         * SubscriptionTaxPreviousAttributes} or null. The tax the subscription's renewal, setup
         * fee and plan change orders use. `null` when they follow `tax.default_enabled` and
         * `tax.default_calculation` from your settings. Returned only to merchant credentials;
         * omitted for buyer credentials. Always present with merchant credentials. tax.anyOf[1]
         * (Value): {@link SubscriptionTaxPreviousAttributes}. tax.anyOf[2] (Value): null.
         * terms_type (Optional): string or null. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * terms_type.anyOf[1] (Value): string. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * terms_type.anyOf[2] (Value): null. test_clock_id (Optional): string or null. ID of the
         * test clock the subscription's customer was created on. The subscription bills at the
         * clock's time. Present only when the customer is on a test clock. Included only in
         * merchant responses and omitted from buyer responses. test_clock_id.anyOf[1] (Value):
         * string. ID of the test clock the subscription's customer was created on. The
         * subscription bills at the clock's time. Present only when the customer is on a test
         * clock. Included only in merchant responses and omitted from buyer responses. Example:
         * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". test_clock_id.anyOf[2] (Value): null. trial_end_at
         * (Optional): string or null. RFC3339 timestamp. trial_end_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * trial_end_at.anyOf[2] (Value): null. upcoming_delivery_hold (Optional): {@link
         * SubscriptionUpcomingDeliveryHoldPreviousAttributes} or null. Delivery issue forecast for
         * the next renewal at renewal_at. Mutually exclusive with delivery_hold.
         * upcoming_delivery_hold.anyOf[1] (Value): {@link
         * SubscriptionUpcomingDeliveryHoldPreviousAttributes}. upcoming_delivery_hold.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. RFC3339 timestamp.
         * updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Goes up with every change to the subscription, including renewals and other
         * changes Flint makes. Send it as `expected_version` to apply an update only if nothing
         * changed. version.anyOf[1] (Value): integer. Goes up with every change to the
         * subscription, including renewals and other changes Flint makes. Send it as
         * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum:
         * 0. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * UTC day of the month used for monthly and yearly billing. Applies only to
             * Flint-owned schedules. anyOf[1] (Value): integer. UTC day of the month used for
             * monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32.
             * minimum: 1. maximum: 31. anyOf[2] (Value): null.
             */
            "billing_anchor_day"?: ((number) | (null));
            /**
             * Configuration issue or automatic retry delaying billing, with the first detection
             * time. Flint retries automatically without starting payment recovery. Cleared when
             * billing succeeds, the schedule is replaced, the subscription is paused or canceled,
             * or a card decline starts payment recovery. Included only in merchant responses.
             * anyOf[1] (Value): {@link SubscriptionBillingHoldPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "billing_hold"?: ((SubscriptionBillingHoldPreviousAttributes) | (null));
            /**
             * How often the subscription bills now. Read with billing_interval_count: monthly with
             * a count of 3 bills quarterly. A change applies from the next renewal that has not
             * been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly",
             * "yearly". anyOf[1] (Value): string. How often the subscription bills now. Read with
             * billing_interval_count: monthly with a count of 3 bills quarterly. A change applies
             * from the next renewal that has not been paid; next_billing_at does not move. Value
             * enum: "daily", "weekly", "monthly", "yearly". anyOf[2] (Value): null.
             */
            "billing_interval"?: (("daily" | "weekly" | "monthly" | "yearly" | (string & {})) | (null));
            /**
             * Number of billing_interval units between charges. Changes with billing_interval.
             * anyOf[1] (Value): integer. Number of billing_interval units between charges. Changes
             * with billing_interval. Format: int32. anyOf[2] (Value): null.
             */
            "billing_interval_count"?: ((number) | (null));
            /**
             * Billing interval and count pairs the subscription can switch to. For a subscription
             * on a plan, they follow the plan's current billing_interval_options. A subscription
             * that came from an offer keeps the pairs the offer had at signup. Prices of lines
             * that ship are per delivery. Each option charges for all deliveries in its period.
             * Changing the interval does not change the per-delivery price. anyOf[1] (Value):
             * Array of {@link SubscriptionIntervalOptionPreviousAttributes}. Billing interval and
             * count pairs the subscription can switch to. For a subscription on a plan, they
             * follow the plan's current billing_interval_options. A subscription that came from an
             * offer keeps the pairs the offer had at signup. Prices of lines that ship are per
             * delivery. Each option charges for all deliveries in its period. Changing the
             * interval does not change the per-delivery price. maxItems: 12. uniqueItems: true.
             * anyOf[1][] (Value): {@link SubscriptionIntervalOptionPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "billing_interval_options"?: ((Array<SubscriptionIntervalOptionPreviousAttributes>) | (null));
            /**
             * Who supplies billing dates: flint advances the schedule after each paid renewal;
             * external uses dates you supply. Change it with billing_schedule on PATCH
             * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external". anyOf[1]
             * (Value): string. Who supplies billing dates: flint advances the schedule after each
             * paid renewal; external uses dates you supply. Change it with billing_schedule on
             * PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint", "external". anyOf[2]
             * (Value): null.
             */
            "billing_schedule_owner"?: (("flint" | "external" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "billing_schedule_waiting_started_at"?: ((string) | (null));
            /**
             * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule
             * with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
             * cancel_at_period_end false. anyOf[1] (Value): boolean. True when the subscription is
             * scheduled to cancel at scheduled_cancel_at. Schedule with POST
             * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end
             * false. anyOf[2] (Value): null.
             */
            "cancel_at_period_end"?: ((boolean) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Who asked to cancel, when, and why. Present once a cancellation is requested,
             * whether it takes effect at the end of the billing period or right away. Omitted when
             * no one asked, and removed when a scheduled cancellation is undone. See
             * cancellation_reason for voluntary and payment-related cancellations. anyOf[1]
             * (Value): {@link SubscriptionCancellationDetailsPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "cancellation_details"?: ((SubscriptionCancellationDetailsPreviousAttributes) | (null));
            /**
             * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
             * when an automatic inventory refund fully refunds the signup order, end_after_reached
             * when the automatic ending agreement is reached, cancellation_details.requested_by
             * when recorded, payment_failed for other canceled subscriptions without a requester,
             * and other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded". anyOf[1] (Value): string. Why the
             * subscription is canceled or scheduled to cancel. Uses signup_order_refunded when an
             * automatic inventory refund fully refunds the signup order, end_after_reached when
             * the automatic ending agreement is reached, cancellation_details.requested_by when
             * recorded, payment_failed for other canceled subscriptions without a requester, and
             * other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded". anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {}))
                | (null));
            /**
             * Billing cycles charged so far, including cycles imported with
             * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is
             * this number plus one. anyOf[1] (Value): integer. Billing cycles charged so far,
             * including cycles imported with `billing_start.completed_cycles`. The next renewal
             * order's `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
             * anyOf[2] (Value): null.
             */
            "completed_cycles"?: ((number) | (null));
            /**
             * When the recorded contract term ends. Does not move when the subscription pauses or
             * changes plan. Flint does not stop the buyer from canceling earlier. anyOf[1]
             * (Value): string. When the recorded contract term ends. Does not move when the
             * subscription pauses or changes plan. Flint does not stop the buyer from canceling
             * earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "contract_end_at"?: ((string) | (null));
            /**
             * When the recorded contract term started. Does not move when the subscription pauses
             * or changes plan. anyOf[1] (Value): string. When the recorded contract term started.
             * Does not move when the subscription pauses or changes plan. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "contract_start_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "current_period_end_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "current_period_start_at"?: ((string) | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * The customer this subscription bills. anyOf[1] (Value): string. The customer this
             * subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value):
             * null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Deliveries paid for by one billing period, from 1 to 24. One when no separate
             * delivery cadence is set. Prices of lines that ship are per delivery. anyOf[1]
             * (Value): integer. Deliveries paid for by one billing period, from 1 to 24. One when
             * no separate delivery cadence is set. Prices of lines that ship are per delivery.
             * Format: int32. minimum: 1. maximum: 24. anyOf[2] (Value): null.
             */
            "deliveries_per_period"?: ((number) | (null));
            /**
             * Saved delivery preference with the current delivery method display. Write responses
             * use the same display as GET: fixed shipping reflects the current method
             * configuration, and quoted shipping shows the last paid shipping amount when
             * available. anyOf[1] (Value): {@link SubscriptionDeliveryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "delivery"?: ((SubscriptionDeliveryPreviousAttributes) | (null));
            /**
             * Current delivery issue that blocks collection. Mutually exclusive with
             * upcoming_delivery_hold. anyOf[1] (Value): {@link
             * SubscriptionDeliveryHoldPreviousAttributes}. anyOf[2] (Value): null.
             */
            "delivery_hold"?: ((SubscriptionDeliveryHoldPreviousAttributes) | (null));
            /**
             * Delivery cadence frozen from the plan. Null when no separate delivery cadence is
             * set; one delivery is made per billing period. Value enum: "daily", "weekly",
             * "monthly", "yearly", null. anyOf[1] (Value): string. Delivery cadence frozen from
             * the plan. Null when no separate delivery cadence is set; one delivery is made per
             * billing period. Value enum: "daily", "weekly", "monthly", "yearly", null. anyOf[2]
             * (Value): null.
             */
            "delivery_interval"?: (("daily" | "weekly" | "monthly" | "yearly" | null | (string & {})) | (null));
            /**
             * Number of delivery intervals between deliveries. Null when no separate delivery
             * cadence is set. anyOf[1] (Value): integer. Number of delivery intervals between
             * deliveries. Null when no separate delivery cadence is set. Format: int32. minimum:
             * 1. anyOf[2] (Value): null.
             */
            "delivery_interval_count"?: ((number) | (null));
            /**
             * The fee in the recorded contract terms. Present whenever those terms include a fee.
             * It applies only to a cancellation before contract_end_at. Flint never charges it.
             * Later plan changes do not change this fee. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "early_termination_fee_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Recorded automatic end condition. Null when no automatic end is set. Cycles count
             * charged billing periods, including imported completed_cycles. Pauses and skips do
             * not use cycles. Already-paid prepaid deliveries continue on their shifted dates,
             * even beyond the end date, and cancellation waits for the last remaining delivery.
             * Skipping defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1] (Value): ({@link SubscriptionEndAfterPreviousAttributes} or null). Recorded
             * automatic end condition. Null when no automatic end is set. Cycles count charged
             * billing periods, including imported completed_cycles. Pauses and skips do not use
             * cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond
             * the end date, and cancellation waits for the last remaining delivery. Skipping
             * defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1].anyOf[1] (Value): {@link SubscriptionEndAfterPreviousAttributes}. The
             * subscription's automatic end condition, measured by charged billing cycles or a
             * saved local calendar date. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
             */
            "end_after"?: (((((SubscriptionEndAfterPreviousAttributes) | (null) | (unknown)))) | (null) | (unknown));
            /**
             * Projected end under the current schedule and committed plan changes, including an
             * earlier scheduled cancellation. A date limit preserves already-paid entitlement
             * without requiring a future charge schedule. A reached cycle limit uses the last paid
             * period end, or current_period_end_at when no paid history exists; that fallback
             * includes any skip or pause extension. A cycle limit with cycles left needs a future
             * charge schedule unless a known scheduled cancellation determines the end. Paid
             * deliveries extend the end to the last paid delivery when it is later. An indefinite
             * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
             * determined or the subscription is canceled. anyOf[1] (Value): string. Projected end
             * under the current schedule and committed plan changes, including an earlier
             * scheduled cancellation. A date limit preserves already-paid entitlement without
             * requiring a future charge schedule. A reached cycle limit uses the last paid period
             * end, or current_period_end_at when no paid history exists; that fallback includes
             * any skip or pause extension. A cycle limit with cycles left needs a future charge
             * schedule unless a known scheduled cancellation determines the end. Paid deliveries
             * extend the end to the last paid delivery when it is later. An indefinite pause with
             * paid deliveries owed makes the end unknown. Null when the end cannot be determined
             * or the subscription is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Who receives the gift, when this is a gift subscription. customer_id stays the
             * purchaser. Flint clears it when the subscription ends and when the purchaser's data
             * is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@link
             * SubscriptionGiftRecipientPreviousAttributes}. anyOf[2] (Value): null.
             */
            "gift_recipient"?: ((SubscriptionGiftRecipientPreviousAttributes) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer sessions on routes shared with merchants get
             * `null`. `/v1/me` responses do not include this field. anyOf[1] (Value): string. The
             * Idempotency-Key of the request that created this resource. `null` when that request
             * sent no key, Flint created the resource, the reader isn't the caller that created it
             * (another app install, a buyer, or the merchant reading an app's or buyer's record),
             * or the caller that created an older record is unknown. Filter its list with
             * `idempotency_key` to find it. Recorded payloads, including replayed responses and
             * webhook events, can return `null`. To find a key that a replay returns as `null`,
             * read the resource. Buyer sessions on routes shared with merchants get `null`.
             * `/v1/me` responses do not include this field. anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Renewal waiting for stock. Buyers receive only started_at. anyOf[1] (Value): {@link
             * SubscriptionInventoryWaitPreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_wait"?: ((SubscriptionInventoryWaitPreviousAttributes) | (null));
            /**
             * True while an active or trialing subscription on an external billing schedule has no
             * next billing date. anyOf[1] (Value): boolean. True while an active or trialing
             * subscription on an external billing schedule has no next billing date. anyOf[2]
             * (Value): null.
             */
            "is_awaiting_billing_schedule"?: ((boolean) | (null));
            /**
             * Latest renewal payment failure, present only while status is past_due and the latest
             * payment failed. Buyer responses omit merchant remediation and sensitive decline
             * signals. anyOf[1] (Value): {@link PaymentErrorSummaryPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "last_payment_error"?: ((PaymentErrorSummaryPreviousAttributes) | (null));
            /**
             * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a
             * line takes that variant's current catalog price, which then stays until the line
             * changes again. anyOf[1] (Value): Array of {@link
             * SubscriptionLineItemPreviousAttributes}. What each renewal bills. Plan edits do not
             * change it. Adding, changing or swapping a line takes that variant's current catalog
             * price, which then stays until the line changes again. anyOf[1][] (Value): {@link
             * SubscriptionLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<SubscriptionLineItemPreviousAttributes>) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The billing date whose payment failed, as an RFC3339 timestamp. Present only while
             * status is past_due. anyOf[1] (Value): string. The billing date whose payment failed,
             * as an RFC3339 timestamp. Present only while status is past_due. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "missed_billing_at"?: ((string) | (null));
            /**
             * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present
             * only while a trialing or active subscription has a billing date and isn't set to
             * cancel at the end of its period. Absent when no renewal is scheduled: a subscription
             * in its final billing cycle ends at expires_at, a paused subscription resumes at
             * scheduled_resume_at, a past_due one reports the failed billing date in
             * missed_billing_at and retries at next_retry_at, an incomplete one retries at
             * next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at
             * scheduled_cancel_at, and an external schedule awaiting a date reports
             * is_awaiting_billing_schedule. anyOf[1] (Value): string. When Flint next starts a
             * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or
             * active subscription has a billing date and isn't set to cancel at the end of its
             * period. Absent when no renewal is scheduled: a subscription in its final billing
             * cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a
             * past_due one reports the failed billing date in missed_billing_at and retries at
             * next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins
             * at starts_at, one set to cancel ends at scheduled_cancel_at, and an external
             * schedule awaiting a date reports is_awaiting_billing_schedule. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "next_billing_at"?: ((string) | (null));
            /**
             * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
             * subscription has an indefinite pause, no delivery is scheduled, or the subscription
             * is canceled. anyOf[1] (Value): string. When the next prepaid delivery order is due,
             * shifted by a timed pause. Null when the subscription has an indefinite pause, no
             * delivery is scheduled, or the subscription is canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "next_delivery_at"?: ((string) | (null));
            /**
             * Recorded automatic payment retry time. Null when no retry time is available.
             * anyOf[1] (Value): string. Recorded automatic payment retry time. Null when no retry
             * time is available. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "next_retry_at"?: ((string) | (null));
            /**
             * ID of the paid renewal order whose shipment has not been dispatched. It keeps its
             * committed delivery destination after preference changes and cancellation. Absent
             * when no such renewal order exists. Only renewal orders count; the signup order is
             * not included. anyOf[1] (Value): string. ID of the paid renewal order whose shipment
             * has not been dispatched. It keeps its committed delivery destination after
             * preference changes and cancellation. Absent when no such renewal order exists. Only
             * renewal orders count; the signup order is not included. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "open_renewal_order_id"?: ((string) | (null));
            /**
             * Unpaid balance of the failed renewal order, including tax, shipping and discounts,
             * after payments and credits. Present only while status is past_due and a positive
             * balance remains. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "outstanding_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Why the subscription is paused: merchant for a pause made with your API key or
             * dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
             * during or after a delivery hold, and payment_failed when renewal payment retries ran
             * out and your dunning settings pause the subscription. Omitted when the subscription
             * is not paused. Value enum: "buyer", "delivery_action_required", "merchant",
             * "payment_failed". anyOf[1] (Value): string. Why the subscription is paused: merchant
             * for a pause made with your API key or dashboard, buyer for the buyer's own pause,
             * delivery_action_required for a pause during or after a delivery hold, and
             * payment_failed when renewal payment retries ran out and your dunning settings pause
             * the subscription. Omitted when the subscription is not paused. Value enum: "buyer",
             * "delivery_action_required", "merchant", "payment_failed". anyOf[2] (Value): null.
             */
            "pause_reason"?: (("buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "paused_at"?: ((string) | (null));
            /**
             * The delivery hold that expired and paused the subscription. Null when no stored
             * expiry reason exists, including a manual pause during an active hold, or the
             * subscription is no longer paused for delivery action. anyOf[1] (Value): {@link
             * SubscriptionPausedDeliveryHoldPreviousAttributes}. anyOf[2] (Value): null.
             */
            "paused_delivery_hold"?: ((SubscriptionPausedDeliveryHoldPreviousAttributes) | (null));
            /**
             * The payment link that started this subscription, when there was one. anyOf[1]
             * (Value): string. The payment link that started this subscription, when there was
             * one. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". anyOf[2] (Value): null.
             */
            "payment_link_id"?: ((string) | (null));
            /**
             * Present only when `expand` includes `payment_method`; `null` when expanded and there
             * is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_method"?: ((ExpandedPaymentMethodSummaryPreviousAttributes) | (null));
            /**
             * First charge boundary while no card is bound: the later of trial_end_at and
             * next_billing_at during a trial, or the next billing date for an imported period,
             * even when that cycle's charge is zero. Recomputed when the schedule changes. A trial
             * still without a card at its boundary cancels without an order or payment attempt. At
             * that boundary, an imported subscription with a positive charge that still has no
             * card enters its normal dunning schedule without a payment attempt. For an imported
             * subscription, a zero charge completes the renewal without a card and the deadline
             * advances to the following boundary. Null when a card is bound, collection is not
             * scheduled (paused, canceled, or set to cancel at period end), an active or trialing
             * subscription is in its final end_after cycle, or an external schedule has no known
             * boundary. anyOf[1] (Value): string. First charge boundary while no card is bound:
             * the later of trial_end_at and next_billing_at during a trial, or the next billing
             * date for an imported period, even when that cycle's charge is zero. Recomputed when
             * the schedule changes. A trial still without a card at its boundary cancels without
             * an order or payment attempt. At that boundary, an imported subscription with a
             * positive charge that still has no card enters its normal dunning schedule without a
             * payment attempt. For an imported subscription, a zero charge completes the renewal
             * without a card and the deadline advances to the following boundary. Null when a card
             * is bound, collection is not scheduled (paused, canceled, or set to cancel at period
             * end), an active or trialing subscription is in its final end_after cycle, or an
             * external schedule has no known boundary. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "payment_method_due_at"?: ((string) | (null));
            /**
             * Saved payment method used for renewal charges. Null when no card is bound. Bind a
             * card to this subscription with PATCH; changing the customer's default alone does not
             * bind it. anyOf[1] (Value): string. Saved payment method used for renewal charges.
             * Null when no card is bound. Bind a card to this subscription with PATCH; changing
             * the customer's default alone does not bind it. Example:
             * "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
             */
            "payment_method_id"?: ((string) | (null));
            /**
             * Recurring promotions applying to the next charged cycle. Scheduled attachments are
             * listed in scheduled_promotions. Empty when none apply; signup-only and exhausted
             * promotions are excluded. anyOf[1] (Value): Array of {@link
             * SubscriptionPromotionPreviousAttributes}. Recurring promotions applying to the next
             * charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when
             * none apply; signup-only and exhausted promotions are excluded. anyOf[1][] (Value):
             * {@link SubscriptionPromotionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "promotions"?: ((Array<SubscriptionPromotionPreviousAttributes>) | (null));
            /**
             * Whether this subscription was created to prorate its first anchored paid period. Set
             * at creation and never changes; starting on the anchor day still bills a normal full
             * period. anyOf[1] (Value): boolean. Whether this subscription was created to prorate
             * its first anchored paid period. Set at creation and never changes; starting on the
             * anchor day still bills a normal full period. anyOf[2] (Value): null.
             */
            "prorate_first_period"?: ((boolean) | (null));
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. `null` when a cancellation succeeds but
             * Flint couldn't load the billing snapshot afterward, so the cancel response returns
             * it as null. Retrieve the subscription again to get it. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "recurring_subtotal_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
             * when there is no cycle limit or the subscription is canceled. anyOf[1] (Value):
             * integer. Charges left for a cycle limit, bounded by an earlier scheduled
             * cancellation. Null when there is no cycle limit or the subscription is canceled.
             * Format: uint64. minimum: 0. anyOf[2] (Value): null.
             */
            "remaining_cycles"?: ((number) | (null));
            /**
             * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
             * with deliveries_per_period minus one. When delivery_hold is present and this count
             * is positive, fixing delivery releases an already-paid delivery with shipping waived
             * and no new charge. A next_renewal preview still estimates the next paid billing
             * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual
             * refunds. anyOf[1] (Value): integer. Paid deliveries whose delivery order Flint
             * hasn't created yet. A paid period starts with deliveries_per_period minus one. When
             * delivery_hold is present and this count is positive, fixing delivery releases an
             * already-paid delivery with shipping waived and no new charge. A next_renewal preview
             * still estimates the next paid billing cycle. Skips, holds, and pauses consume none.
             * Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum: 23.
             * anyOf[2] (Value): null.
             */
            "remaining_prepaid_deliveries"?: ((number) | (null));
            /**
             * When Flint accepted a pending resume request. Set only while paused with a resume
             * Flint has not applied yet. Clears when Flint resumes the subscription or refuses the
             * request. `null` when the subscription isn't paused or no resume request is pending.
             * anyOf[1] (Value): string. When Flint accepted a pending resume request. Set only
             * while paused with a resume Flint has not applied yet. Clears when Flint resumes the
             * subscription or refuses the request. `null` when the subscription isn't paused or no
             * resume request is pending. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "resume_requested_at"?: ((string) | (null));
            /**
             * When the scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. anyOf[1] (Value): string. When the
             * scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_cancel_at"?: ((string) | (null));
            /**
             * Frozen target terms for the next charged renewal. Null when no plan change is
             * scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through
             * change-plan. anyOf[1] (Value): {@link
             * SubscriptionScheduledPlanChangePreviousAttributes}. anyOf[2] (Value): null.
             */
            "scheduled_plan_change"?: ((SubscriptionScheduledPlanChangePreviousAttributes) | (null));
            /**
             * Attached promotions whose first_cycle is after the next charged cycle,
             * completed_cycles + 1. Always present; empty when no promotions are scheduled.
             * anyOf[1] (Value): Array of {@link SubscriptionPromotionPreviousAttributes}. Attached
             * promotions whose first_cycle is after the next charged cycle, completed_cycles + 1.
             * Always present; empty when no promotions are scheduled. anyOf[1][] (Value): {@link
             * SubscriptionPromotionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "scheduled_promotions"?: ((Array<SubscriptionPromotionPreviousAttributes>) | (null));
            /**
             * When a pause with a length (pause_duration_cycles) resumes on its own: that many
             * delivery intervals after paused_at on a prepaid subscription, or billing intervals
             * otherwise. Null when the subscription is not paused or the pause has no length, such
             * as a pause until you resume it or the pause Flint starts when a delivery hold runs
             * out. anyOf[1] (Value): string. When a pause with a length (pause_duration_cycles)
             * resumes on its own: that many delivery intervals after paused_at on a prepaid
             * subscription, or billing intervals otherwise. Null when the subscription is not
             * paused or the pause has no length, such as a pause until you resume it or the pause
             * Flint starts when a delivery hold runs out. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_resume_at"?: ((string) | (null));
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. anyOf[1] (Value): {@link
             * SubscriptionServiceLocationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "service_location"?: ((SubscriptionServiceLocationPreviousAttributes) | (null));
            /**
             * When a scheduled start's first billing period begins. Present only until that first
             * payment succeeds. anyOf[1] (Value): string. When a scheduled start's first billing
             * period begins. Present only until that first payment succeeds. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "starts_at"?: ((string) | (null));
            /**
             * Where the subscription is in its lifecycle. Each value says what it means. Value
             * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
             * "scheduled". anyOf[1] (Value): string. Where the subscription is in its lifecycle.
             * Each value says what it means. Value enum: "trialing", "active", "paused",
             * "past_due", "canceled", "incomplete", "scheduled". anyOf[2] (Value): null.
             */
            "status"?: (("trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {}))
                | (null));
            /**
             * Stable identifier of the subscription. anyOf[1] (Value): string. Stable identifier
             * of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value):
             * null.
             */
            "subscription_id"?: ((string) | (null));
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummaryPreviousAttributes) | (null));
            /**
             * Subscription plan ID. Omitted when terms_type is subscription_offer. anyOf[1]
             * (Value): string. Subscription plan ID. Omitted when terms_type is
             * subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". anyOf[2] (Value):
             * null.
             */
            "subscription_plan_id"?: ((string) | (null));
            /**
             * Merchant actions allowed by the subscription's state. A route can still refuse a
             * listed action for a transient reason, such as a renewal already in progress, with
             * its own error. Always present with merchant credentials. [] enum: "cancel", "pause",
             * "resume", "skip_cycle", "renew", "change_plan", "change_quantity". anyOf[1] (Value):
             * Array of string. Merchant actions allowed by the subscription's state. A route can
             * still refuse a listed action for a transient reason, such as a renewal already in
             * progress, with its own error. Always present with merchant credentials. [] enum:
             * "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
             * "change_quantity". anyOf[1][] (Value): string. Value enum: "cancel", "pause",
             * "resume", "skip_cycle", "renew", "change_plan", "change_quantity". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>)
                | (null));
            /**
             * The tax the subscription's renewal, setup fee and plan change orders use. `null`
             * when they follow `tax.default_enabled` and `tax.default_calculation` from your
             * settings. Returned only to merchant credentials; omitted for buyer credentials.
             * Always present with merchant credentials. anyOf[1] (Value): {@link
             * SubscriptionTaxPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tax"?: ((SubscriptionTaxPreviousAttributes) | (null));
            /**
             * Terms come from the subscription plan in subscription_plan_id, or from subscription
             * offers identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer". anyOf[1] (Value): string. Terms come from
             * the subscription plan in subscription_plan_id, or from subscription offers
             * identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer". anyOf[2] (Value): null.
             */
            "terms_type"?: (("subscription_plan" | "subscription_offer" | (string & {})) | (null));
            /**
             * ID of the test clock the subscription's customer was created on. The subscription
             * bills at the clock's time. Present only when the customer is on a test clock.
             * Included only in merchant responses and omitted from buyer responses. anyOf[1]
             * (Value): string. ID of the test clock the subscription's customer was created on.
             * The subscription bills at the clock's time. Present only when the customer is on a
             * test clock. Included only in merchant responses and omitted from buyer responses.
             * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". anyOf[2] (Value): null.
             */
            "test_clock_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "trial_end_at"?: ((string) | (null));
            /**
             * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
             * delivery_hold. anyOf[1] (Value): {@link
             * SubscriptionUpcomingDeliveryHoldPreviousAttributes}. anyOf[2] (Value): null.
             */
            "upcoming_delivery_hold"?: ((SubscriptionUpcomingDeliveryHoldPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Goes up with every change to the subscription, including renewals and other changes
             * Flint makes. Send it as `expected_version` to apply an update only if nothing
             * changed. anyOf[1] (Value): integer. Goes up with every change to the subscription,
             * including renewals and other changes Flint makes. Send it as `expected_version` to
             * apply an update only if nothing changed. Format: uint64. minimum: 0. anyOf[2]
             * (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "subscription.updated". */
    "event_type"?: "subscription.updated";
});
/**
 * The half-open period [period_start_at, period_end_at) includes its start and excludes its end.
 * Amounts and payments_count use currency; customer and subscription counts span currencies.
 */
export type SubscriptionWindowMetrics = {
    /**
     * Subscriptions selected by canceled_at in the period, across currencies. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. Format:
     * int64.
     */
    "canceled_subscriptions_count": number;
    /**
     * Captured amounts for succeeded subscription payments in the period, including the initial
     * checkout payment, recurring charges, and setup fees, restricted to currency. Each payment is
     * counted once by capture time. The half-open period [period_start_at, period_end_at) includes
     * its start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "collected_money": MoneyValue;
    /**
     * Subscriptions selected by subscription created_at in the period whose current status is
     * trialing, active, paused, or past_due. Excludes incomplete and canceled subscriptions; past
     * counts can change with current status. Spans currencies. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. Format:
     * int64.
     */
    "new_subscriptions_count": number;
};
export type SubscriptionsApplyPromotionParams = (InputValue<ApplySubscriptionPromotionRequestInput>)
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
export type SubscriptionsCancelParams = (InputValue<CancelSubscriptionRequestInput>
    | {
    "cancel_immediately"?: never;
    "cancellation_comment"?: never;
    "cancellation_reason_code"?: never;
    "expected_version"?: never;
    "initiated_by"?: never;
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
export type SubscriptionsChangePlanParams = (InputValue<ChangeSubscriptionPlanRequestInput>)
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
export type SubscriptionsChangeQuantityParams = (InputValue<ChangeSubscriptionQuantityRequestInput>)
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
export type SubscriptionsCreateAccessLinkParams = (InputValue<CreateSubscriptionAccessLinkRequestInput>
    | {
    "purpose"?: never;
    "return_url"?: never;
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
export type SubscriptionsCreateLineItemParams = (CreateSubscriptionLineItemRequestInput)
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
export type SubscriptionsCreateParams = (InputValue<CreateSubscriptionRequestInput>)
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
export type SubscriptionsCreatePaymentRetryParams = FilesCompleteParams;
export type SubscriptionsDeleteLineItemParams = {
    /**
     * Reject the deletion if the subscription version has changed. Format: uint64. minimum: 1.
     * maximum: 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
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
export type SubscriptionsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer, payment_method,
     * subscription_plan. Expansion requires commerce.subscriptions.read plus the read scope for
     * each expanded resource. Limits: at most 10 unique expand paths per request. Checkout session
     * credentials cannot use expand on this route. [] enum: "customer", "payment_method",
     * "subscription_plan". Value enum: "customer", "payment_method", "subscription_plan". anyOf[1]
     * (Value): Array of string. [] enum: "customer", "payment_method", "subscription_plan".
     * anyOf[1][] (Value): string. Value enum: "customer", "payment_method", "subscription_plan".
     * anyOf[2] (Value): string. Value enum: "customer", "payment_method", "subscription_plan".
     */
    "expand"?: InputValue<("customer" | "payment_method" | "subscription_plan")
        | readonly ("customer" | "payment_method" | "subscription_plan")[]>;
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
export type SubscriptionsGetPaymentRetryParams = DisputesAcceptParams;
export type SubscriptionsListLineItemsParams = CustomersListAddressesParams;
export type SubscriptionsListParams = {
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns only resources created in your caller namespace, plus
     * resources created before caller scoping under the original key. Returns current authorized
     * resources, not the recorded response. A pending resource does not prove that the operation
     * succeeded, and an empty list does not prove that it had no effect. A match can show
     * `idempotency_key: null` when that request sent no key, Flint created the resource, the
     * reader isn't the caller that created it (another app install, a buyer, or the merchant
     * reading an app's or buyer's record), or the caller that created an older record is unknown.
     * minLength: 1. maxLength: 255. pattern: ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Filter by where the subscription terms come from: a subscription plan or subscription
     * offers. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "subscription_plan", "subscription_offer". Value enum: "subscription_plan",
     * "subscription_offer". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "subscription_plan", "subscription_offer". anyOf[1][] (Value): string. Value enum:
     * "subscription_plan", "subscription_offer". anyOf[2] (Value): string. Value enum:
     * "subscription_plan", "subscription_offer".
     */
    "terms_type"?: InputValue<("subscription_plan" | "subscription_offer")
        | readonly ("subscription_plan" | "subscription_offer")[]>;
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
     * Filter by subscription status. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
     * "scheduled". Value enum: "trialing", "active", "paused", "past_due", "canceled",
     * "incomplete", "scheduled". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     * anyOf[1][] (Value): string. Value enum: "trialing", "active", "paused", "past_due",
     * "canceled", "incomplete", "scheduled". anyOf[2] (Value): string. Value enum: "trialing",
     * "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     */
    "status"?: InputValue<("trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled")
        | readonly ("trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled")[]>;
    /**
     * Filter by the system that supplies billing dates. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "flint", "external". Value enum: "flint", "external".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "flint", "external". anyOf[1][]
     * (Value): string. Value enum: "flint", "external". anyOf[2] (Value): string. Value enum:
     * "flint", "external".
     */
    "billing_schedule_owner"?: InputValue<("flint" | "external") | readonly ("flint" | "external")[]>;
    /** Filter external schedules by whether they need another billing date. */
    "is_awaiting_billing_schedule"?: InputValue<boolean>;
    /**
     * When true, returns subscriptions scheduled to cancel at the end of the current period that
     * are not yet canceled. When false, returns every other subscription.
     */
    "cancel_at_period_end"?: InputValue<boolean>;
    /**
     * Filter by Flint customer ID. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
    /**
     * Filter by the subscription's selected delivery method. pattern:
     * ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id"?: InputValue<string>;
    /**
     * Filter by the reason of the current delivery_hold. Does not match upcoming delivery issues.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "method_unavailable", "destination_not_served", "rate_unavailable". Value enum:
     * "method_unavailable", "destination_not_served", "rate_unavailable". anyOf[1] (Value): Array
     * of string. minItems: 1. [] enum: "method_unavailable", "destination_not_served",
     * "rate_unavailable". anyOf[1][] (Value): string. Value enum: "method_unavailable",
     * "destination_not_served", "rate_unavailable". anyOf[2] (Value): string. Value enum:
     * "method_unavailable", "destination_not_served", "rate_unavailable".
     */
    "hold_reason"?: InputValue<("method_unavailable" | "destination_not_served" | "rate_unavailable")
        | readonly ("method_unavailable" | "destination_not_served" | "rate_unavailable")[]>;
    /**
     * Filter by Flint subscription offer ID. pattern: ^soffer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "soffer_01KEZF7C00KAA9Y1X1KM70YFAA".
     */
    "subscription_offer_id"?: InputValue<string>;
    /**
     * Filter by Flint subscription plan ID. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Sandbox only. Exact-match filter on `test_clock_id`. A live credential gets `403 FORBIDDEN`
     * with reason `test_mode_required`. minLength: 1. pattern: ^tclk_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
     */
    "test_clock_id"?: InputValue<string>;
    /**
     * Search across subscription ID, external reference ID, customer, and plan. Text fields match
     * any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from
     * the start and need the type prefix, such as sub_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by subscription_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "next_billing_at".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Inclusive lower bound on next_billing_at. Format: date-time. Example:
     * "2026-03-17T14:30:00Z".
     */
    "next_billing_after"?: InputValue<string | globalThis.Date>;
    /**
     * Exclusive upper bound on next_billing_at. Format: date-time. Example:
     * "2026-03-17T14:30:00Z".
     */
    "next_billing_before"?: InputValue<string | globalThis.Date>;
    /**
     * True matches subscriptions with a delivery hold, an upcoming delivery hold, an inventory
     * wait, a billing configuration hold, or a delivery-action-required pause, plus past_due
     * subscriptions and active or incomplete subscriptions whose billing date passed more than 24
     * hours ago without payment. False is the exact complement. Other filters still apply.
     */
    "needs_attention"?: InputValue<boolean>;
    /**
     * Include related objects in the response. Supported expansions: customer, payment_method,
     * subscription_plan. Include the requested related resources using scoped batch reads for this
     * page. Each relationship requires its existing target read scopes. Expansion changes the
     * representation without changing pagination tokens. Limits: at most 10 unique expand paths
     * per request. [] enum: "customer", "payment_method", "subscription_plan". Value enum:
     * "customer", "payment_method", "subscription_plan". anyOf[1] (Value): Array of string. []
     * enum: "customer", "payment_method", "subscription_plan". anyOf[1][] (Value): string. Value
     * enum: "customer", "payment_method", "subscription_plan". anyOf[2] (Value): string. Value
     * enum: "customer", "payment_method", "subscription_plan".
     */
    "expand"?: InputValue<("customer" | "payment_method" | "subscription_plan")
        | readonly ("customer" | "payment_method" | "subscription_plan")[]>;
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
export type SubscriptionsListPaymentRetriesParams = CreditNotesListAllocationsParams;
export type SubscriptionsPauseParams = (InputValue<PauseSubscriptionRequestInput>
    | {
    "expected_version"?: never;
    "pause_duration_cycles"?: never;
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
export type SubscriptionsRemovePromotionsParams = (InputValue<RemoveSubscriptionPromotionsRequestInput>)
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
export type SubscriptionsRenewParams = (InputValue<RenewSubscriptionRequestInput> | {
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
export type SubscriptionsResumeParams = InvoicesMarkUncollectibleParams;
export type SubscriptionsSkipCycleParams = (InputValue<SkipSubscriptionCycleRequestInput>
    | {
    "expected_version"?: never;
    "initiated_by"?: never;
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
export type SubscriptionsUpdateLineItemParams = (InputValue<UpdateSubscriptionLineItemRequestInput>)
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
export type SubscriptionsUpdateParams = (InputValue<UpdateSubscriptionRequestInput>)
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
 * The tax calculated for one jurisdiction on an order, line item, or charge, with the taxable
 * amount, rate or flat amount, and tax.
 */
export type TaxBreakdown = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum:
     * "percentage", "flat_amount".
     */
    "calculation_type": "percentage" | "flat_amount" | (string & {});
    /**
     * The fixed tax amount. Present on `flat_amount` rows. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValue;
    /**
     * ID of the delivery choice group whose delivery this row's tax covers. On a line item row,
     * the row taxes the share of the line item that group delivers. On a charge row, it taxes that
     * group's delivery charge. Set only on automatic tax rows outside the US, and only when
     * delivery was chosen from a delivery quote. A delivery charge's row gets it only when the
     * `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by
     * payment or by issuing an invoice keeps the value it had. A delivery charge priced with
     * `taxable_items_share` after its delivery choice is no longer available can carry the ID of
     * the fulfillment that holds the charge instead. Omitted on external tax rows and on every
     * other row. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     */
    "fulfillment_choice_group_id"?: string;
    /**
     * The taxing authority this row's tax is owed to. A taxing jurisdiction with its level, such
     * as state or city, name, state, and country.
     */
    "jurisdiction": TaxJurisdiction;
    /**
     * ID of the location whose address was the seller origin for this row's tax: the location the
     * goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for
     * goods and charges that a fulfillment sends from one location. Separate shares of a line item
     * can have different origin locations. Omitted when the tax was sourced from the merchant's
     * legal origin, which covers services, goods with no fulfilling location yet, goods whose
     * fulfillments can't be split by location, a charge whose fulfillments leave from more than
     * one location, and every external tax row. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax.
     * Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id"?: string;
    /**
     * ID of the order this tax row belongs to, including the parent of any order_line_item_id or
     * order_charge_id reference. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax.
     * Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id"?: string;
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Present on `percentage` rows. minimum: 0. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * Whether the price this row taxes already includes the tax. Value enum: "additive",
     * "inclusive".
     */
    "price_mode": "additive" | "inclusive" | (string & {});
    /**
     * ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax.
     * Example: "txb_01KEZF7C00SHMN8QWCA8PT1HSB".
     */
    "tax_breakdown_id": string;
    /**
     * The tax this row adds up to. Zero when the amount isn't taxable or the customer is
     * tax-exempt. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "tax_money": MoneyValue;
    /**
     * The kind of tax this row collects. Value enum: "sales_tax", "use_tax",
     * "retail_delivery_fee", "vat", "gst", "hst", "pst", "qst".
     */
    "tax_type": "sales_tax"
        | "use_tax"
        | "retail_delivery_fee"
        | "vat"
        | "gst"
        | "hst"
        | "pst"
        | "qst"
        | (string & {});
    /**
     * Why the row's tax is what it is. Value enum: "standard_rated", "not_taxable",
     * "customer_exempt", "tax_disabled", "location_required", "calculation_incomplete",
     * "reverse_charge".
     */
    "taxability_reason": "standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | "reverse_charge"
        | (string & {});
    /**
     * The amount this row's tax is based on. On an additive percentage row it is the price, on an
     * inclusive row it is the price minus the tax in it, and on a flat row it is the order's
     * taxable amount. Zero when the amount isn't taxable. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "taxable_money": MoneyValue;
})
    & ((Exclude<TaxBreakdownPercentage & object, readonly unknown[]>)
    | (Exclude<TaxBreakdownFlatAmount & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `flat_amount` variant of `TaxBreakdown`. */
export type TaxBreakdownFlatAmount = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum:
     * "flat_amount".
     */
    "calculation_type": "flat_amount" | (string & {});
    /**
     * The fixed tax amount. Present on `flat_amount` rows. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "flat_money": MoneyValue;
    /**
     * ID of the delivery choice group whose delivery this row's tax covers. On a line item row,
     * the row taxes the share of the line item that group delivers. On a charge row, it taxes that
     * group's delivery charge. Set only on automatic tax rows outside the US, and only when
     * delivery was chosen from a delivery quote. A delivery charge's row gets it only when the
     * `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by
     * payment or by issuing an invoice keeps the value it had. A delivery charge priced with
     * `taxable_items_share` after its delivery choice is no longer available can carry the ID of
     * the fulfillment that holds the charge instead. Omitted on external tax rows and on every
     * other row. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     */
    "fulfillment_choice_group_id"?: string;
    /**
     * The taxing authority this row's tax is owed to. A taxing jurisdiction with its level, such
     * as state or city, name, state, and country.
     */
    "jurisdiction": TaxJurisdiction;
    /**
     * ID of the location whose address was the seller origin for this row's tax: the location the
     * goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for
     * goods and charges that a fulfillment sends from one location. Separate shares of a line item
     * can have different origin locations. Omitted when the tax was sourced from the merchant's
     * legal origin, which covers services, goods with no fulfilling location yet, goods whose
     * fulfillments can't be split by location, a charge whose fulfillments leave from more than
     * one location, and every external tax row. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax.
     * Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id"?: string;
    /**
     * ID of the order this tax row belongs to, including the parent of any order_line_item_id or
     * order_charge_id reference. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax.
     * Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id"?: string;
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Present on `percentage` rows. minimum: 0. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * Whether the price this row taxes already includes the tax. Value enum: "additive",
     * "inclusive".
     */
    "price_mode": "additive" | "inclusive" | (string & {});
    /**
     * ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax.
     * Example: "txb_01KEZF7C00SHMN8QWCA8PT1HSB".
     */
    "tax_breakdown_id": string;
    /**
     * The tax this row adds up to. Zero when the amount isn't taxable or the customer is
     * tax-exempt. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "tax_money": MoneyValue;
    /**
     * The kind of tax this row collects. Value enum: "sales_tax", "use_tax",
     * "retail_delivery_fee", "vat", "gst", "hst", "pst", "qst".
     */
    "tax_type": "sales_tax"
        | "use_tax"
        | "retail_delivery_fee"
        | "vat"
        | "gst"
        | "hst"
        | "pst"
        | "qst"
        | (string & {});
    /**
     * Why the row's tax is what it is. Value enum: "standard_rated", "not_taxable",
     * "customer_exempt", "tax_disabled", "location_required", "calculation_incomplete",
     * "reverse_charge".
     */
    "taxability_reason": "standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | "reverse_charge"
        | (string & {});
    /**
     * The amount this row's tax is based on. On an additive percentage row it is the price, on an
     * inclusive row it is the price minus the tax in it, and on a flat row it is the order's
     * taxable amount. Zero when the amount isn't taxable. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "taxable_money": MoneyValue;
})
    & (({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum:
     * "flat_amount".
     */
    "calculation_type"?: "flat_amount" | (string & {});
    /**
     * The fixed tax amount. Present on `flat_amount` rows. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "flat_money": MoneyValue;
}));
export type TaxBreakdownFlatAmountPreviousAttributes = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum:
     * "flat_amount". anyOf[1] (Value): string. How the tax is figured: a percentage of the taxable
     * amount, or a fixed amount. Value enum: "flat_amount". anyOf[2] (Value): null.
     */
    "calculation_type"?: (("flat_amount" | (string & {})) | (null));
    /**
     * The fixed tax amount. Present on `flat_amount` rows. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "flat_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the delivery choice group whose delivery this row's tax covers. On a line item row,
     * the row taxes the share of the line item that group delivers. On a charge row, it taxes that
     * group's delivery charge. Set only on automatic tax rows outside the US, and only when
     * delivery was chosen from a delivery quote. A delivery charge's row gets it only when the
     * `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by
     * payment or by issuing an invoice keeps the value it had. A delivery charge priced with
     * `taxable_items_share` after its delivery choice is no longer available can carry the ID of
     * the fulfillment that holds the charge instead. Omitted on external tax rows and on every
     * other row. anyOf[1] (Value): string. ID of the delivery choice group whose delivery this
     * row's tax covers. On a line item row, the row taxes the share of the line item that group
     * delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax
     * rows outside the US, and only when delivery was chosen from a delivery quote. A delivery
     * charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row
     * was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had.
     * A delivery charge priced with `taxable_items_share` after its delivery choice is no longer
     * available can carry the ID of the fulfillment that holds the charge instead. Omitted on
     * external tax rows and on every other row. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * anyOf[2] (Value): null.
     */
    "fulfillment_choice_group_id"?: ((string) | (null));
    /**
     * The taxing authority this row's tax is owed to. anyOf[1] (Value): {@link
     * TaxJurisdictionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "jurisdiction"?: ((TaxJurisdictionPreviousAttributes) | (null));
    /**
     * ID of the location whose address was the seller origin for this row's tax: the location the
     * goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for
     * goods and charges that a fulfillment sends from one location. Separate shares of a line item
     * can have different origin locations. Omitted when the tax was sourced from the merchant's
     * legal origin, which covers services, goods with no fulfilling location yet, goods whose
     * fulfillments can't be split by location, a charge whose fulfillments leave from more than
     * one location, and every external tax row. anyOf[1] (Value): string. ID of the location whose
     * address was the seller origin for this row's tax: the location the goods leave from, or the
     * pickup location. Set only on automatic tax rows outside the US, for goods and charges that a
     * fulfillment sends from one location. Separate shares of a line item can have different
     * origin locations. Omitted when the tax was sourced from the merchant's legal origin, which
     * covers services, goods with no fulfilling location yet, goods whose fulfillments can't be
     * split by location, a charge whose fulfillments leave from more than one location, and every
     * external tax row. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "location_id"?: ((string) | (null));
    /**
     * ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax.
     * anyOf[1] (Value): string. ID of the order charge this row taxes. Absent on rows for a line
     * item or a flat order tax. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT". anyOf[2] (Value): null.
     */
    "order_charge_id"?: ((string) | (null));
    /**
     * ID of the order this tax row belongs to, including the parent of any order_line_item_id or
     * order_charge_id reference. anyOf[1] (Value): string. ID of the order this tax row belongs
     * to, including the parent of any order_line_item_id or order_charge_id reference. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     */
    "order_id"?: ((string) | (null));
    /**
     * ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax.
     * anyOf[1] (Value): string. ID of the order line item this row taxes. Absent on rows for a
     * charge or a flat order tax. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value):
     * null.
     */
    "order_line_item_id"?: ((string) | (null));
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Present on `percentage` rows. anyOf[1] (Value): number. Tax rate in percentage points, from
     * 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows.
     * minimum: 0. maximum: 100. multipleOf: 0.0001. anyOf[2] (Value): null.
     */
    "percent"?: ((number) | (null));
    /**
     * Whether the price this row taxes already includes the tax. Value enum: "additive",
     * "inclusive". anyOf[1] (Value): string. Whether the price this row taxes already includes the
     * tax. Value enum: "additive", "inclusive". anyOf[2] (Value): null.
     */
    "price_mode"?: (("additive" | "inclusive" | (string & {})) | (null));
    /**
     * ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax.
     * anyOf[1] (Value): string. ID of this tax row. A refund names it in `tax_breakdown_refunds`
     * to reverse this row's tax. Example: "txb_01KEZF7C00SHMN8QWCA8PT1HSB". anyOf[2] (Value):
     * null.
     */
    "tax_breakdown_id"?: ((string) | (null));
    /**
     * The tax this row adds up to. Zero when the amount isn't taxable or the customer is
     * tax-exempt. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The kind of tax this row collects. Value enum: "sales_tax", "use_tax",
     * "retail_delivery_fee", "vat", "gst", "hst", "pst", "qst". anyOf[1] (Value): string. The kind
     * of tax this row collects. Value enum: "sales_tax", "use_tax", "retail_delivery_fee", "vat",
     * "gst", "hst", "pst", "qst". anyOf[2] (Value): null.
     */
    "tax_type"?: (("sales_tax"
        | "use_tax"
        | "retail_delivery_fee"
        | "vat"
        | "gst"
        | "hst"
        | "pst"
        | "qst"
        | (string & {}))
        | (null));
    /**
     * Why the row's tax is what it is. Value enum: "standard_rated", "not_taxable",
     * "customer_exempt", "tax_disabled", "location_required", "calculation_incomplete",
     * "reverse_charge". anyOf[1] (Value): string. Why the row's tax is what it is. Value enum:
     * "standard_rated", "not_taxable", "customer_exempt", "tax_disabled", "location_required",
     * "calculation_incomplete", "reverse_charge". anyOf[2] (Value): null.
     */
    "taxability_reason"?: (("standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | "reverse_charge"
        | (string & {}))
        | (null));
    /**
     * The amount this row's tax is based on. On an additive percentage row it is the price, on an
     * inclusive row it is the price minus the tax in it, and on a flat row it is the order's
     * taxable amount. Zero when the amount isn't taxable. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "taxable_money"?: ((MoneyValuePreviousAttributes) | (null));
})
    & ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum:
     * "flat_amount". anyOf[1] (Value): string. How the tax is figured: a percentage of the taxable
     * amount, or a fixed amount. Value enum: "flat_amount". anyOf[2] (Value): null.
     */
    "calculation_type"?: (("flat_amount" | (string & {})) | (null));
});
/** The `percentage` variant of `TaxBreakdown`. */
export type TaxBreakdownPercentage = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum:
     * "percentage".
     */
    "calculation_type": "percentage" | (string & {});
    /**
     * The fixed tax amount. Present on `flat_amount` rows. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValue;
    /**
     * ID of the delivery choice group whose delivery this row's tax covers. On a line item row,
     * the row taxes the share of the line item that group delivers. On a charge row, it taxes that
     * group's delivery charge. Set only on automatic tax rows outside the US, and only when
     * delivery was chosen from a delivery quote. A delivery charge's row gets it only when the
     * `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by
     * payment or by issuing an invoice keeps the value it had. A delivery charge priced with
     * `taxable_items_share` after its delivery choice is no longer available can carry the ID of
     * the fulfillment that holds the charge instead. Omitted on external tax rows and on every
     * other row. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     */
    "fulfillment_choice_group_id"?: string;
    /**
     * The taxing authority this row's tax is owed to. A taxing jurisdiction with its level, such
     * as state or city, name, state, and country.
     */
    "jurisdiction": TaxJurisdiction;
    /**
     * ID of the location whose address was the seller origin for this row's tax: the location the
     * goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for
     * goods and charges that a fulfillment sends from one location. Separate shares of a line item
     * can have different origin locations. Omitted when the tax was sourced from the merchant's
     * legal origin, which covers services, goods with no fulfilling location yet, goods whose
     * fulfillments can't be split by location, a charge whose fulfillments leave from more than
     * one location, and every external tax row. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax.
     * Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id"?: string;
    /**
     * ID of the order this tax row belongs to, including the parent of any order_line_item_id or
     * order_charge_id reference. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax.
     * Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id"?: string;
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Present on `percentage` rows. minimum: 0. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
    /**
     * Whether the price this row taxes already includes the tax. Value enum: "additive",
     * "inclusive".
     */
    "price_mode": "additive" | "inclusive" | (string & {});
    /**
     * ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax.
     * Example: "txb_01KEZF7C00SHMN8QWCA8PT1HSB".
     */
    "tax_breakdown_id": string;
    /**
     * The tax this row adds up to. Zero when the amount isn't taxable or the customer is
     * tax-exempt. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "tax_money": MoneyValue;
    /**
     * The kind of tax this row collects. Value enum: "sales_tax", "use_tax",
     * "retail_delivery_fee", "vat", "gst", "hst", "pst", "qst".
     */
    "tax_type": "sales_tax"
        | "use_tax"
        | "retail_delivery_fee"
        | "vat"
        | "gst"
        | "hst"
        | "pst"
        | "qst"
        | (string & {});
    /**
     * Why the row's tax is what it is. Value enum: "standard_rated", "not_taxable",
     * "customer_exempt", "tax_disabled", "location_required", "calculation_incomplete",
     * "reverse_charge".
     */
    "taxability_reason": "standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | "reverse_charge"
        | (string & {});
    /**
     * The amount this row's tax is based on. On an additive percentage row it is the price, on an
     * inclusive row it is the price minus the tax in it, and on a flat row it is the order's
     * taxable amount. Zero when the amount isn't taxable. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "taxable_money": MoneyValue;
})
    & (({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum:
     * "percentage".
     */
    "calculation_type"?: "percentage" | (string & {});
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Present on `percentage` rows. minimum: 0. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
}));
export type TaxBreakdownPercentagePreviousAttributes = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum:
     * "percentage". anyOf[1] (Value): string. How the tax is figured: a percentage of the taxable
     * amount, or a fixed amount. Value enum: "percentage". anyOf[2] (Value): null.
     */
    "calculation_type"?: (("percentage" | (string & {})) | (null));
    /**
     * The fixed tax amount. Present on `flat_amount` rows. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "flat_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the delivery choice group whose delivery this row's tax covers. On a line item row,
     * the row taxes the share of the line item that group delivers. On a charge row, it taxes that
     * group's delivery charge. Set only on automatic tax rows outside the US, and only when
     * delivery was chosen from a delivery quote. A delivery charge's row gets it only when the
     * `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by
     * payment or by issuing an invoice keeps the value it had. A delivery charge priced with
     * `taxable_items_share` after its delivery choice is no longer available can carry the ID of
     * the fulfillment that holds the charge instead. Omitted on external tax rows and on every
     * other row. anyOf[1] (Value): string. ID of the delivery choice group whose delivery this
     * row's tax covers. On a line item row, the row taxes the share of the line item that group
     * delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax
     * rows outside the US, and only when delivery was chosen from a delivery quote. A delivery
     * charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row
     * was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had.
     * A delivery charge priced with `taxable_items_share` after its delivery choice is no longer
     * available can carry the ID of the fulfillment that holds the charge instead. Omitted on
     * external tax rows and on every other row. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * anyOf[2] (Value): null.
     */
    "fulfillment_choice_group_id"?: ((string) | (null));
    /**
     * The taxing authority this row's tax is owed to. anyOf[1] (Value): {@link
     * TaxJurisdictionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "jurisdiction"?: ((TaxJurisdictionPreviousAttributes) | (null));
    /**
     * ID of the location whose address was the seller origin for this row's tax: the location the
     * goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for
     * goods and charges that a fulfillment sends from one location. Separate shares of a line item
     * can have different origin locations. Omitted when the tax was sourced from the merchant's
     * legal origin, which covers services, goods with no fulfilling location yet, goods whose
     * fulfillments can't be split by location, a charge whose fulfillments leave from more than
     * one location, and every external tax row. anyOf[1] (Value): string. ID of the location whose
     * address was the seller origin for this row's tax: the location the goods leave from, or the
     * pickup location. Set only on automatic tax rows outside the US, for goods and charges that a
     * fulfillment sends from one location. Separate shares of a line item can have different
     * origin locations. Omitted when the tax was sourced from the merchant's legal origin, which
     * covers services, goods with no fulfilling location yet, goods whose fulfillments can't be
     * split by location, a charge whose fulfillments leave from more than one location, and every
     * external tax row. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "location_id"?: ((string) | (null));
    /**
     * ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax.
     * anyOf[1] (Value): string. ID of the order charge this row taxes. Absent on rows for a line
     * item or a flat order tax. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT". anyOf[2] (Value): null.
     */
    "order_charge_id"?: ((string) | (null));
    /**
     * ID of the order this tax row belongs to, including the parent of any order_line_item_id or
     * order_charge_id reference. anyOf[1] (Value): string. ID of the order this tax row belongs
     * to, including the parent of any order_line_item_id or order_charge_id reference. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     */
    "order_id"?: ((string) | (null));
    /**
     * ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax.
     * anyOf[1] (Value): string. ID of the order line item this row taxes. Absent on rows for a
     * charge or a flat order tax. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value):
     * null.
     */
    "order_line_item_id"?: ((string) | (null));
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Present on `percentage` rows. anyOf[1] (Value): number. Tax rate in percentage points, from
     * 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows.
     * minimum: 0. maximum: 100. multipleOf: 0.0001. anyOf[2] (Value): null.
     */
    "percent"?: ((number) | (null));
    /**
     * Whether the price this row taxes already includes the tax. Value enum: "additive",
     * "inclusive". anyOf[1] (Value): string. Whether the price this row taxes already includes the
     * tax. Value enum: "additive", "inclusive". anyOf[2] (Value): null.
     */
    "price_mode"?: (("additive" | "inclusive" | (string & {})) | (null));
    /**
     * ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax.
     * anyOf[1] (Value): string. ID of this tax row. A refund names it in `tax_breakdown_refunds`
     * to reverse this row's tax. Example: "txb_01KEZF7C00SHMN8QWCA8PT1HSB". anyOf[2] (Value):
     * null.
     */
    "tax_breakdown_id"?: ((string) | (null));
    /**
     * The tax this row adds up to. Zero when the amount isn't taxable or the customer is
     * tax-exempt. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The kind of tax this row collects. Value enum: "sales_tax", "use_tax",
     * "retail_delivery_fee", "vat", "gst", "hst", "pst", "qst". anyOf[1] (Value): string. The kind
     * of tax this row collects. Value enum: "sales_tax", "use_tax", "retail_delivery_fee", "vat",
     * "gst", "hst", "pst", "qst". anyOf[2] (Value): null.
     */
    "tax_type"?: (("sales_tax"
        | "use_tax"
        | "retail_delivery_fee"
        | "vat"
        | "gst"
        | "hst"
        | "pst"
        | "qst"
        | (string & {}))
        | (null));
    /**
     * Why the row's tax is what it is. Value enum: "standard_rated", "not_taxable",
     * "customer_exempt", "tax_disabled", "location_required", "calculation_incomplete",
     * "reverse_charge". anyOf[1] (Value): string. Why the row's tax is what it is. Value enum:
     * "standard_rated", "not_taxable", "customer_exempt", "tax_disabled", "location_required",
     * "calculation_incomplete", "reverse_charge". anyOf[2] (Value): null.
     */
    "taxability_reason"?: (("standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | "reverse_charge"
        | (string & {}))
        | (null));
    /**
     * The amount this row's tax is based on. On an additive percentage row it is the price, on an
     * inclusive row it is the price minus the tax in it, and on a flat row it is the order's
     * taxable amount. Zero when the amount isn't taxable. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "taxable_money"?: ((MoneyValuePreviousAttributes) | (null));
})
    & ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum:
     * "percentage". anyOf[1] (Value): string. How the tax is figured: a percentage of the taxable
     * amount, or a fixed amount. Value enum: "percentage". anyOf[2] (Value): null.
     */
    "calculation_type"?: (("percentage" | (string & {})) | (null));
});
export type TaxBreakdownPreviousAttributes = ({
    /**
     * How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum:
     * "percentage", "flat_amount". anyOf[1] (Value): string. How the tax is figured: a percentage
     * of the taxable amount, or a fixed amount. Value enum: "percentage", "flat_amount". anyOf[2]
     * (Value): null.
     */
    "calculation_type"?: (("percentage" | "flat_amount" | (string & {})) | (null));
    /**
     * The fixed tax amount. Present on `flat_amount` rows. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "flat_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the delivery choice group whose delivery this row's tax covers. On a line item row,
     * the row taxes the share of the line item that group delivers. On a charge row, it taxes that
     * group's delivery charge. Set only on automatic tax rows outside the US, and only when
     * delivery was chosen from a delivery quote. A delivery charge's row gets it only when the
     * `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by
     * payment or by issuing an invoice keeps the value it had. A delivery charge priced with
     * `taxable_items_share` after its delivery choice is no longer available can carry the ID of
     * the fulfillment that holds the charge instead. Omitted on external tax rows and on every
     * other row. anyOf[1] (Value): string. ID of the delivery choice group whose delivery this
     * row's tax covers. On a line item row, the row taxes the share of the line item that group
     * delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax
     * rows outside the US, and only when delivery was chosen from a delivery quote. A delivery
     * charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row
     * was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had.
     * A delivery charge priced with `taxable_items_share` after its delivery choice is no longer
     * available can carry the ID of the fulfillment that holds the charge instead. Omitted on
     * external tax rows and on every other row. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * anyOf[2] (Value): null.
     */
    "fulfillment_choice_group_id"?: ((string) | (null));
    /**
     * The taxing authority this row's tax is owed to. anyOf[1] (Value): {@link
     * TaxJurisdictionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "jurisdiction"?: ((TaxJurisdictionPreviousAttributes) | (null));
    /**
     * ID of the location whose address was the seller origin for this row's tax: the location the
     * goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for
     * goods and charges that a fulfillment sends from one location. Separate shares of a line item
     * can have different origin locations. Omitted when the tax was sourced from the merchant's
     * legal origin, which covers services, goods with no fulfilling location yet, goods whose
     * fulfillments can't be split by location, a charge whose fulfillments leave from more than
     * one location, and every external tax row. anyOf[1] (Value): string. ID of the location whose
     * address was the seller origin for this row's tax: the location the goods leave from, or the
     * pickup location. Set only on automatic tax rows outside the US, for goods and charges that a
     * fulfillment sends from one location. Separate shares of a line item can have different
     * origin locations. Omitted when the tax was sourced from the merchant's legal origin, which
     * covers services, goods with no fulfilling location yet, goods whose fulfillments can't be
     * split by location, a charge whose fulfillments leave from more than one location, and every
     * external tax row. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "location_id"?: ((string) | (null));
    /**
     * ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax.
     * anyOf[1] (Value): string. ID of the order charge this row taxes. Absent on rows for a line
     * item or a flat order tax. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT". anyOf[2] (Value): null.
     */
    "order_charge_id"?: ((string) | (null));
    /**
     * ID of the order this tax row belongs to, including the parent of any order_line_item_id or
     * order_charge_id reference. anyOf[1] (Value): string. ID of the order this tax row belongs
     * to, including the parent of any order_line_item_id or order_charge_id reference. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     */
    "order_id"?: ((string) | (null));
    /**
     * ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax.
     * anyOf[1] (Value): string. ID of the order line item this row taxes. Absent on rows for a
     * charge or a flat order tax. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value):
     * null.
     */
    "order_line_item_id"?: ((string) | (null));
    /**
     * Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%.
     * Present on `percentage` rows. anyOf[1] (Value): number. Tax rate in percentage points, from
     * 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows.
     * minimum: 0. maximum: 100. multipleOf: 0.0001. anyOf[2] (Value): null.
     */
    "percent"?: ((number) | (null));
    /**
     * Whether the price this row taxes already includes the tax. Value enum: "additive",
     * "inclusive". anyOf[1] (Value): string. Whether the price this row taxes already includes the
     * tax. Value enum: "additive", "inclusive". anyOf[2] (Value): null.
     */
    "price_mode"?: (("additive" | "inclusive" | (string & {})) | (null));
    /**
     * ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax.
     * anyOf[1] (Value): string. ID of this tax row. A refund names it in `tax_breakdown_refunds`
     * to reverse this row's tax. Example: "txb_01KEZF7C00SHMN8QWCA8PT1HSB". anyOf[2] (Value):
     * null.
     */
    "tax_breakdown_id"?: ((string) | (null));
    /**
     * The tax this row adds up to. Zero when the amount isn't taxable or the customer is
     * tax-exempt. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The kind of tax this row collects. Value enum: "sales_tax", "use_tax",
     * "retail_delivery_fee", "vat", "gst", "hst", "pst", "qst". anyOf[1] (Value): string. The kind
     * of tax this row collects. Value enum: "sales_tax", "use_tax", "retail_delivery_fee", "vat",
     * "gst", "hst", "pst", "qst". anyOf[2] (Value): null.
     */
    "tax_type"?: (("sales_tax"
        | "use_tax"
        | "retail_delivery_fee"
        | "vat"
        | "gst"
        | "hst"
        | "pst"
        | "qst"
        | (string & {}))
        | (null));
    /**
     * Why the row's tax is what it is. Value enum: "standard_rated", "not_taxable",
     * "customer_exempt", "tax_disabled", "location_required", "calculation_incomplete",
     * "reverse_charge". anyOf[1] (Value): string. Why the row's tax is what it is. Value enum:
     * "standard_rated", "not_taxable", "customer_exempt", "tax_disabled", "location_required",
     * "calculation_incomplete", "reverse_charge". anyOf[2] (Value): null.
     */
    "taxability_reason"?: (("standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | "reverse_charge"
        | (string & {}))
        | (null));
    /**
     * The amount this row's tax is based on. On an additive percentage row it is the price, on an
     * inclusive row it is the price minus the tax in it, and on a flat row it is the order's
     * taxable amount. Zero when the amount isn't taxable. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "taxable_money"?: ((MoneyValuePreviousAttributes) | (null));
})
    & (((Exclude<TaxBreakdownPercentagePreviousAttributes & object, readonly unknown[]>)
    | (Exclude<TaxBreakdownFlatAmountPreviousAttributes & object, readonly unknown[]>)
    | (Record<string, unknown>)));
/** An endpoint that supplies tax calculations. */
export type TaxCalculationCallback = {
    /**
     * Consecutive failed requests to the endpoint for the current revision. A valid response
     * resets it. minimum: 0.
     */
    "circuit_failure_count": number;
    /**
     * Whether Flint is calling the endpoint, for the current revision. - `closed`: Flint calls the
     * endpoint. - `open`: Flint stopped calling the endpoint after 30 consecutive failed requests.
     * - `half_open`: 30 seconds after opening, the next request is a probe: a valid response
     * closes the circuit, and a failure opens it again. Value enum: "closed", "open", "half_open".
     */
    "circuit_state": "closed" | "open" | "half_open" | (string & {});
    /**
     * The endpoint URL and request limits. Settings for a tax calculation callback: the endpoint
     * `url` Flint calls, request timeout, request and response size limits, and redirect policy.
     */
    "configuration": TaxCalculationCallbackConfiguration;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * ID of the callback's current revision, beginning with `tcbr_`. It changes whenever
     * `configuration` or `signing_methods` changes, and each revision has its own circuit.
     * Example: "tcbr_01KEZF7C00V2GHWCXVV2NCWX29".
     */
    "current_tax_calculation_callback_revision_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * ID of the HMAC signing key that goes with `secret`. Returned only in the response that
     * returns `secret`, so it is omitted on reads, lists, and updates, and for a JWT-only
     * callback. Example: "cbkey_00112233445566778899aabb".
     */
    "key_id"?: string;
    /** Your label for the callback. */
    "name": string;
    /** Initial HMAC shared secret, returned once when hmac is included in signing_methods. */
    "secret"?: string;
    /**
     * How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's
     * public keys, `hmac` for a shared secret, or both. minItems: 1. uniqueItems: true. [] enum:
     * "jwt", "hmac". [] (Value): string. How Flint signs requests to this endpoint. Value enum:
     * "jwt", "hmac".
     */
    "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
    /**
     * Whether the callback can be selected in `tax.calculation_callback_id`. - `inactive`: Not
     * selectable in settings. New callbacks start here. Connection checks and test deliveries
     * still run. - `active`: Can be selected in `tax.calculation_callback_id`. - `archived`:
     * Retired with `DELETE`. Still readable by ID, but it can't be changed, activated, or tested
     * again. Value enum: "inactive", "active", "archived".
     */
    "status": "inactive" | "active" | "archived" | (string & {});
    /**
     * Unique identifier for this tax calculation callback, prefixed `tcb_`. Example:
     * "tcb_01KEZF7C00N7SER74Y2E6D1ZGT".
     */
    "tax_calculation_callback_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Advances on every write. Send it as `expected_version` when you update `configuration` or
     * `signing_methods`. Format: uint64. minimum: 0.
     */
    "version": number;
};
export type TaxCalculationCallbackActivatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": TaxCalculationCallbackConfiguration;
            "created_at": string;
            "current_tax_calculation_callback_revision_id": string;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "inactive" | "active" | "archived" | (string & {});
            "tax_calculation_callback_id": string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "circuit_failure_count"?: ((number) | (null));
            "circuit_state"?: (("closed" | "open" | "half_open" | (string & {})) | (null));
            "configuration"?: ((TaxCalculationCallbackConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_tax_calculation_callback_revision_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "key_id"?: ((string) | (null));
            "name"?: ((string) | (null));
            "secret"?: ((string) | (null));
            "signing_methods"?: ((Array<"jwt" | "hmac" | (string & {})>) | (null));
            "status"?: (("inactive" | "active" | "archived" | (string & {})) | (null));
            "tax_calculation_callback_id"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "tax_calculation_callback.activated";
})
    & {
    "event_type": "tax_calculation_callback.activated";
});
export type TaxCalculationCallbackArchivedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": TaxCalculationCallbackConfiguration;
            "created_at": string;
            "current_tax_calculation_callback_revision_id": string;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "inactive" | "active" | "archived" | (string & {});
            "tax_calculation_callback_id": string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "circuit_failure_count"?: ((number) | (null));
            "circuit_state"?: (("closed" | "open" | "half_open" | (string & {})) | (null));
            "configuration"?: ((TaxCalculationCallbackConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_tax_calculation_callback_revision_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "key_id"?: ((string) | (null));
            "name"?: ((string) | (null));
            "secret"?: ((string) | (null));
            "signing_methods"?: ((Array<"jwt" | "hmac" | (string & {})>) | (null));
            "status"?: (("inactive" | "active" | "archived" | (string & {})) | (null));
            "tax_calculation_callback_id"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "tax_calculation_callback.archived";
})
    & {
    "event_type": "tax_calculation_callback.archived";
});
/**
 * Settings for a tax calculation callback: the endpoint `url` Flint calls, request timeout,
 * request and response size limits, and redirect policy.
 */
export type TaxCalculationCallbackConfiguration = {
    /**
     * Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to
     * 262144. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_request_bytes"?: number;
    /**
     * Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576.
     * Defaults to 262144. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_response_bytes"?: number;
    /**
     * How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject`
     * is the only value. Default: "reject". Value enum: "reject".
     */
    "redirect_policy"?: "reject" | (string & {});
    /**
     * How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults
     * to 3. minimum: 0.1. maximum: 10. Default: 3.
     */
    "request_timeout_seconds"?: number;
    /**
     * HTTPS endpoint that receives signed callback requests. Format: uri. minLength: 1. pattern:
     * ^https://. Example: "https://example.com/receipt".
     */
    "url": string;
};
/**
 * Changes to a tax calculation callback's configuration. Only the keys you send change; keys you
 * leave out keep their current values. Null restores an optional key's default. Requires
 * expected_version. minProperties: 1.
 */
export type TaxCalculationCallbackConfigurationPatchRequest = {
    /**
     * Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to
     * 262144. Null restores 262144 bytes. minimum: 1. maximum: 1048576.
     */
    "maximum_request_bytes"?: number | null;
    /**
     * Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576.
     * Defaults to 262144. Null restores 262144 bytes. minimum: 1. maximum: 1048576.
     */
    "maximum_response_bytes"?: number | null;
    /**
     * How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject`
     * is the only value. Value enum: "reject", null.
     */
    "redirect_policy"?: "reject" | null | (string & {}) | null;
    /**
     * How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults
     * to 3. Null restores 3 seconds. minimum: 0.1. maximum: 10.
     */
    "request_timeout_seconds"?: number | null;
    /**
     * HTTPS endpoint that receives signed callback requests. Null is invalid. Format: uri.
     * minLength: 1. pattern: ^https://. Example: "https://example.com/receipt".
     */
    "url"?: string;
};
/**
 * Changes to a tax calculation callback's configuration. Only the keys you send change; keys you
 * leave out keep their current values. Null restores an optional key's default. Requires
 * expected_version. minProperties: 1.
 */
export type TaxCalculationCallbackConfigurationPatchRequestInput = {
    /**
     * Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to
     * 262144. Null restores 262144 bytes. minimum: 1. maximum: 1048576.
     */
    "maximum_request_bytes"?: number | null;
    /**
     * Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576.
     * Defaults to 262144. Null restores 262144 bytes. minimum: 1. maximum: 1048576.
     */
    "maximum_response_bytes"?: number | null;
    /**
     * How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject`
     * is the only value. Value enum: "reject", null.
     */
    "redirect_policy"?: "reject" | null;
    /**
     * How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults
     * to 3. Null restores 3 seconds. minimum: 0.1. maximum: 10.
     */
    "request_timeout_seconds"?: number | null;
    /**
     * HTTPS endpoint that receives signed callback requests. Null is invalid. Format: uri.
     * minLength: 1. pattern: ^https://. Example: "https://example.com/receipt".
     */
    "url"?: string;
};
export type TaxCalculationCallbackConfigurationPreviousAttributes = {
    /**
     * Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to
     * 262144. anyOf[1] (Value): integer. Largest request body Flint sends to your endpoint, in
     * bytes, from 1 to 1048576. Defaults to 262144. minimum: 1. maximum: 1048576. Default: 262144.
     * anyOf[2] (Value): null.
     */
    "maximum_request_bytes"?: ((number) | (null));
    /**
     * Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576.
     * Defaults to 262144. anyOf[1] (Value): integer. Largest response body Flint accepts from your
     * endpoint, in bytes, from 1 to 1048576. Defaults to 262144. minimum: 1. maximum: 1048576.
     * Default: 262144. anyOf[2] (Value): null.
     */
    "maximum_response_bytes"?: ((number) | (null));
    /**
     * How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject`
     * is the only value. Value enum: "reject". anyOf[1] (Value): string. How Flint treats a
     * redirect from your endpoint. Flint never follows redirects, so `reject` is the only value.
     * Default: "reject". Value enum: "reject". anyOf[2] (Value): null.
     */
    "redirect_policy"?: (("reject" | (string & {})) | (null));
    /**
     * How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults
     * to 3. anyOf[1] (Value): number. How long Flint waits for each request to your endpoint, in
     * seconds, from 0.1 to 10. Defaults to 3. minimum: 0.1. maximum: 10. Default: 3. anyOf[2]
     * (Value): null.
     */
    "request_timeout_seconds"?: ((number) | (null));
    /**
     * HTTPS endpoint that receives signed callback requests. anyOf[1] (Value): string. HTTPS
     * endpoint that receives signed callback requests. Format: uri. minLength: 1. pattern:
     * ^https://. Example: "https://example.com/receipt". anyOf[2] (Value): null.
     */
    "url"?: ((string) | (null));
};
/**
 * Settings for a tax calculation callback: the endpoint `url` Flint calls, request timeout,
 * request and response size limits, and redirect policy.
 */
export type TaxCalculationCallbackConfigurationRequestInput = {
    /**
     * Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to
     * 262144. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_request_bytes"?: number;
    /**
     * Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576.
     * Defaults to 262144. minimum: 1. maximum: 1048576. Default: 262144.
     */
    "maximum_response_bytes"?: number;
    /**
     * How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject`
     * is the only value. Default: "reject". Value enum: "reject".
     */
    "redirect_policy"?: "reject";
    /**
     * How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults
     * to 3. minimum: 0.1. maximum: 10. Default: 3.
     */
    "request_timeout_seconds"?: number;
    /**
     * HTTPS endpoint that receives signed callback requests. Format: uri. minLength: 1. pattern:
     * ^https://. Example: "https://example.com/receipt".
     */
    "url": string;
};
/**
 * Result of checking the connection to a tax calculation callback endpoint, with its status,
 * latency, HTTP status code, and failure category if it failed.
 */
export type TaxCalculationCallbackConnectionCheck = {
    /** When Flint sent the connection check. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "checked_at": string;
    /**
     * Why the callback request failed and the action that can make the next one succeed. -
     * `authentication_or_http_error`: Return a 2xx status after verifying the enabled signing
     * methods. For a 401, check JWT verification with Flint's JWKS, issuer,
     * tax_calculation_callback_id audience, expiration, and body_sha256 of the exact request
     * bytes. For HMAC, check the shared secret and verify the raw body before parsing it. -
     * `blocked_target`: Use a public HTTPS callback target allowed by Flint's outbound network
     * policy. - `connection_error`: Restore network connectivity to the callback host, then test
     * again. - `dns_error`: Fix the callback hostname or its DNS records, then test again. -
     * `invalid_response`: Return a 2xx application/json response within maximum_response_bytes.
     * For a test delivery, the body must also echo tax_calculation_evaluation_id with empty
     * line_item_calculations and charge_calculations. Then test again. - `request_error`: Flint
     * couldn't complete the request for another reason. Check the URL and your server logs, then
     * test again. - `timeout`: Acknowledge the callback within its configured timeout, then test
     * again. - `tls_error`: Fix the callback certificate and TLS configuration, then test again.
     * Value enum: "authentication_or_http_error", "blocked_target", "connection_error",
     * "dns_error", "invalid_response", "request_error", "timeout", "tls_error".
     */
    "failure_category"?: "authentication_or_http_error"
        | "blocked_target"
        | "connection_error"
        | "dns_error"
        | "invalid_response"
        | "request_error"
        | "timeout"
        | "tls_error"
        | (string & {});
    /** HTTP status code your endpoint returned. Omitted when it returned no response. */
    "http_status_code"?: number;
    /**
     * ID of the HMAC signing key that signed this request, as sent in the Flint-Signing-Key-Ids
     * header. Empty for a JWT-only callback, which has no shared secret. Example:
     * "cbkey_00112233445566778899aabb".
     */
    "key_id": string;
    /** How long your endpoint took to answer, in milliseconds. Format: int64. */
    "latency_milliseconds": number;
    /**
     * Whether your endpoint answered as the callback requires. - `succeeded`: Your endpoint
     * answered as the request requires. - `failed`: The request failed. See `failure_category`.
     * Value enum: "succeeded", "failed".
     */
    "status": "succeeded" | "failed" | (string & {});
    /**
     * ID of the callback that was called, beginning with `tcb_`. Example:
     * "tcb_01KEZF7C00N7SER74Y2E6D1ZGT".
     */
    "tax_calculation_callback_id": string;
    /**
     * ID of the callback revision that was called, beginning with `tcbr_`. Example:
     * "tcbr_01KEZF7C00V2GHWCXVV2NCWX29".
     */
    "tax_calculation_callback_revision_id": string;
};
/** A response containing `TaxCalculationCallbackConnectionCheck` data. */
export type TaxCalculationCallbackConnectionCheckResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Result of checking the
     * connection to a tax calculation callback endpoint, with its status, latency, HTTP status
     * code, and failure category if it failed.
     */
    "data": TaxCalculationCallbackConnectionCheck;
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
export type TaxCalculationCallbackCreatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": TaxCalculationCallbackConfiguration;
            "created_at": string;
            "current_tax_calculation_callback_revision_id": string;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "inactive" | "active" | "archived" | (string & {});
            "tax_calculation_callback_id": string;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "tax_calculation_callback.created";
})
    & {
    "event_type": "tax_calculation_callback.created";
});
export type TaxCalculationCallbackDeactivatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": TaxCalculationCallbackConfiguration;
            "created_at": string;
            "current_tax_calculation_callback_revision_id": string;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "inactive" | "active" | "archived" | (string & {});
            "tax_calculation_callback_id": string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "circuit_failure_count"?: ((number) | (null));
            "circuit_state"?: (("closed" | "open" | "half_open" | (string & {})) | (null));
            "configuration"?: ((TaxCalculationCallbackConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_tax_calculation_callback_revision_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "key_id"?: ((string) | (null));
            "name"?: ((string) | (null));
            "secret"?: ((string) | (null));
            "signing_methods"?: ((Array<"jwt" | "hmac" | (string & {})>) | (null));
            "status"?: (("inactive" | "active" | "archived" | (string & {})) | (null));
            "tax_calculation_callback_id"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "tax_calculation_callback.deactivated";
})
    & {
    "event_type": "tax_calculation_callback.deactivated";
});
/** A page of `TaxCalculationCallback` objects. */
export type TaxCalculationCallbackListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * TaxCalculationCallback}. An endpoint that supplies tax calculations.
     */
    "data": Array<TaxCalculationCallback>;
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
/** A response containing `TaxCalculationCallback` data. */
export type TaxCalculationCallbackResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An endpoint that
     * supplies tax calculations.
     */
    "data": TaxCalculationCallback;
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
 * Result of rotating a tax calculation callback's HMAC secret, including the new `key_id` and the
 * new `secret`, which is returned only in this response.
 */
export type TaxCalculationCallbackSigningKey = {
    /** ID of the new HMAC signing key. Example: "cbkey_00112233445566778899aabb". */
    "key_id": string;
    /**
     * New HMAC shared secret. Returned only by this response. Returned only to the credential that
     * created it, and omitted when another credential replays the request.
     */
    "secret"?: string;
    /**
     * ID of the callback whose secret was issued or rotated, beginning with `tcb_`. Example:
     * "tcb_01KEZF7C00N7SER74Y2E6D1ZGT".
     */
    "tax_calculation_callback_id": string;
};
/** A response containing `TaxCalculationCallbackSigningKey` data. */
export type TaxCalculationCallbackSigningKeyRotationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Result of rotating a tax
     * calculation callback's HMAC secret, including the new `key_id` and the new `secret`, which
     * is returned only in this response.
     */
    "data": TaxCalculationCallbackSigningKey;
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
 * Result of sending a test delivery to a tax calculation callback, with its status, latency, HTTP
 * status code, and failure category if it failed.
 */
export type TaxCalculationCallbackTestDelivery = {
    /**
     * Why the callback request failed and the action that can make the next one succeed. -
     * `authentication_or_http_error`: Return a 2xx status after verifying the enabled signing
     * methods. For a 401, check JWT verification with Flint's JWKS, issuer,
     * tax_calculation_callback_id audience, expiration, and body_sha256 of the exact request
     * bytes. For HMAC, check the shared secret and verify the raw body before parsing it. -
     * `blocked_target`: Use a public HTTPS callback target allowed by Flint's outbound network
     * policy. - `connection_error`: Restore network connectivity to the callback host, then test
     * again. - `dns_error`: Fix the callback hostname or its DNS records, then test again. -
     * `invalid_response`: Return a 2xx application/json response within maximum_response_bytes.
     * For a test delivery, the body must also echo tax_calculation_evaluation_id with empty
     * line_item_calculations and charge_calculations. Then test again. - `request_error`: Flint
     * couldn't complete the request for another reason. Check the URL and your server logs, then
     * test again. - `timeout`: Acknowledge the callback within its configured timeout, then test
     * again. - `tls_error`: Fix the callback certificate and TLS configuration, then test again.
     * Value enum: "authentication_or_http_error", "blocked_target", "connection_error",
     * "dns_error", "invalid_response", "request_error", "timeout", "tls_error".
     */
    "failure_category"?: "authentication_or_http_error"
        | "blocked_target"
        | "connection_error"
        | "dns_error"
        | "invalid_response"
        | "request_error"
        | "timeout"
        | "tls_error"
        | (string & {});
    /** HTTP status code your endpoint returned. Omitted when it returned no response. */
    "http_status_code"?: number;
    /**
     * ID of the HMAC signing key that signed this request, as sent in the Flint-Signing-Key-Ids
     * header. Empty for a JWT-only callback, which has no shared secret. Example:
     * "cbkey_00112233445566778899aabb".
     */
    "key_id": string;
    /** How long your endpoint took to answer, in milliseconds. Format: int64. */
    "latency_milliseconds": number;
    /**
     * Whether your endpoint answered as the callback requires. - `succeeded`: Your endpoint
     * answered as the request requires. - `failed`: The request failed. See `failure_category`.
     * Value enum: "succeeded", "failed".
     */
    "status": "succeeded" | "failed" | (string & {});
    /**
     * ID of the callback that was called, beginning with `tcb_`. Example:
     * "tcb_01KEZF7C00N7SER74Y2E6D1ZGT".
     */
    "tax_calculation_callback_id": string;
    /**
     * ID of the callback revision that was called, beginning with `tcbr_`. Example:
     * "tcbr_01KEZF7C00V2GHWCXVV2NCWX29".
     */
    "tax_calculation_callback_revision_id": string;
    /** When Flint sent the test delivery. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "tested_at": string;
};
/** A response containing `TaxCalculationCallbackTestDelivery` data. */
export type TaxCalculationCallbackTestDeliveryResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Result of sending a test
     * delivery to a tax calculation callback, with its status, latency, HTTP status code, and
     * failure category if it failed.
     */
    "data": TaxCalculationCallbackTestDelivery;
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
export type TaxCalculationCallbackUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "circuit_failure_count": number;
            "circuit_state": "closed" | "open" | "half_open" | (string & {});
            "configuration": TaxCalculationCallbackConfiguration;
            "created_at": string;
            "current_tax_calculation_callback_revision_id": string;
            "external_reference_id"?: string;
            "key_id"?: string;
            "name": string;
            "secret"?: string;
            "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
            "status": "inactive" | "active" | "archived" | (string & {});
            "tax_calculation_callback_id": string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "circuit_failure_count"?: ((number) | (null));
            "circuit_state"?: (("closed" | "open" | "half_open" | (string & {})) | (null));
            "configuration"?: ((TaxCalculationCallbackConfigurationPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "current_tax_calculation_callback_revision_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "key_id"?: ((string) | (null));
            "name"?: ((string) | (null));
            "secret"?: ((string) | (null));
            "signing_methods"?: ((Array<"jwt" | "hmac" | (string & {})>) | (null));
            "status"?: (("inactive" | "active" | "archived" | (string & {})) | (null));
            "tax_calculation_callback_id"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "tax_calculation_callback.updated";
})
    & {
    "event_type": "tax_calculation_callback.updated";
});
export type TaxCalculationCallbacksCheckConnectionParams = {};
export type TaxCalculationCallbacksCreateParams = (InputValue<CreateTaxCalculationCallbackRequestInput>);
export type TaxCalculationCallbacksCreateTestDeliveryParams = {};
export type TaxCalculationCallbacksDeleteParams = {
    /** Current callback version. Format: uint64. minimum: 1. maximum: 9007199254740991. */
    "expected_version"?: InputValue<number>;
};
export type TaxCalculationCallbacksGetParams = {};
export type TaxCalculationCallbacksListParams = {
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
    /** Search tax_calculation_callback_id, name, and external_reference_id. maxLength: 255. */
    "query"?: InputValue<string>;
    /** Match the external reference ID. minLength: 1. maxLength: 255. Example: "warehouse-1842". */
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
};
