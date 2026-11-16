import type { PaymentClientActionPreviousAttributes, PartnerWebhookEnvelope } from './types-49.js';
import type { Address, AddressPreviousAttributes } from './types-0.js';
import type { MoneyValue, MoneyValuePreviousAttributes, MoneyValueInput } from './types-42.js';
import type { ResponseMeta, ResourceReference } from './types-60.js';
import type { InputValue } from '../runtime.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-41.js';
import type { QuantityPriceBreak, QuantityPriceBreakRequestInput } from './types-57.js';
import type { CreatePriceListRequestInput, CreatePriceListPricesRequestInput } from './types-12.js';
import type { DisputesAcceptParams } from './types-25.js';
/** The payment intent that needs buyer authentication in a pending payment action. */
export type PendingPaymentActionPaymentIntentSubject = {
    /**
     * ID of the payment intent that needs the buyer's action. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
};
export type PendingPaymentActionPaymentIntentSubjectPreviousAttributes = {
    /**
     * ID of the payment intent that needs the buyer's action. anyOf[1] (Value): string. ID of the
     * payment intent that needs the buyer's action. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * anyOf[2] (Value): null.
     */
    "payment_intent_id"?: ((string) | (null));
};
export type PendingPaymentActionPreviousAttributes = {
    /**
     * Product-level action type. payment_authentication applies to a payment leg;
     * payment_method_authentication applies to saving a future-billing payment method.
     * card_presentment means present the card on the Tap to Pay reader in your app. Value enum:
     * "payment_authentication", "payment_method_authentication", "card_presentment". anyOf[1]
     * (Value): string. Product-level action type. payment_authentication applies to a payment leg;
     * payment_method_authentication applies to saving a future-billing payment method.
     * card_presentment means present the card on the Tap to Pay reader in your app. Value enum:
     * "payment_authentication", "payment_method_authentication", "card_presentment". anyOf[2]
     * (Value): null.
     */
    "action_type"?: (("payment_authentication" | "payment_method_authentication" | "card_presentment" | (string & {}))
        | (null));
    /**
     * How to finish this step before continuing through Flint. Flint's API returns a Stripe client
     * secret only for client_action_type stripe. The url branch carries a bearer URL; Stripe's
     * authentication page receives what it needs to run the challenge. anyOf[1] (Value): {@link
     * PaymentClientActionPreviousAttributes}. How to finish a payment step. Flint's API returns a
     * Stripe client secret only for client_action_type stripe. With url, Stripe's authentication
     * page receives what it needs to run the challenge, including the client secret for hosted
     * 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint doesn't
     * count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. anyOf[2] (Value): null.
     */
    "client_action"?: ((PaymentClientActionPreviousAttributes) | (null) | (unknown));
    /**
     * When this step stops working. For a standalone payment intent, 12 hours after the step was
     * created; for an order payment, when its attempt is canceled. anyOf[1] (Value): string. When
     * this step stops working. For a standalone payment intent, 12 hours after the step was
     * created; for an order payment, when its attempt is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "expires_at"?: ((string) | (null));
    /**
     * Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming
     * an attempt. anyOf[1] (Value): string. Stable Flint action ID. Use this to deduplicate a
     * repeated action projection while resuming an attempt. Example:
     * "pendact_01KEZF7C00SVMRXWKVZX6R9822". anyOf[2] (Value): null.
     */
    "pending_action_id"?: ((string) | (null));
    /**
     * The attempt subject that requires client action. Exactly one of payment_intent or
     * setup_payment_source is present. anyOf[1] (Value): {@link
     * PendingPaymentActionSubjectPreviousAttributes}. anyOf[2] (Value): null.
     */
    "subject"?: ((PendingPaymentActionSubjectPreviousAttributes) | (null) | (unknown));
};
/** The payment method setup that needs buyer authentication in a pending payment action. */
export type PendingPaymentActionSetupPaymentSourceSubject = {
    /**
     * ID of the payment method being saved, which needs the buyer's authentication first. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string;
};
export type PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributes = {
    /**
     * ID of the payment method being saved, which needs the buyer's authentication first. anyOf[1]
     * (Value): string. ID of the payment method being saved, which needs the buyer's
     * authentication first. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
     */
    "payment_method_id"?: ((string) | (null));
};
/** Typed subject for a pending order payment action. Exactly one subject is present. */
export type PendingPaymentActionSubject = {
    /**
     * PaymentIntent that requires buyer authentication or card presentment. It can be a standalone
     * intent or an order-owned payment leg. The payment intent that needs buyer authentication in
     * a pending payment action.
     */
    "payment_intent"?: PendingPaymentActionPaymentIntentSubject;
    /**
     * Future-billing payment method setup that requires buyer authentication. The payment method
     * setup that needs buyer authentication in a pending payment action.
     */
    "setup_payment_source"?: PendingPaymentActionSetupPaymentSourceSubject;
};
export type PendingPaymentActionSubjectPreviousAttributes = {
    /**
     * PaymentIntent that requires buyer authentication or card presentment. It can be a standalone
     * intent or an order-owned payment leg. anyOf[1] (Value): {@link
     * PendingPaymentActionPaymentIntentSubjectPreviousAttributes}. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((PendingPaymentActionPaymentIntentSubjectPreviousAttributes) | (null) | (unknown));
    /**
     * Future-billing payment method setup that requires buyer authentication. anyOf[1] (Value):
     * {@link PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "setup_payment_source"?: ((PendingPaymentActionSetupPaymentSourceSubjectPreviousAttributes) | (null) | (unknown));
};
/**
 * Pickup details. For a pickup that checkout creates, location_name, address, and instructions
 * name the store the buyer chose and the delivery method's pickup instructions. The note the buyer
 * left for the store is in recipient.instructions.
 */
export type PickupFulfillmentDetails = {
    /**
     * Address where the buyer collects the order. A postal address. Every address has country.
     * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
     * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
     * addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "address"?: Address;
    /** Instructions specific to curbside handoff. maxLength: 2048. */
    "curbside_instructions"?: string;
    /**
     * Buyer-reported arrival time for curbside or counter pickup. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "customer_arrived_at"?: string;
    /** Pickup instructions for the buyer, such as where to go on arrival. */
    "instructions"?: string;
    /** Name of the store or place where the buyer collects the order. */
    "location_name"?: string;
    /**
     * When the recipient collected the items, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "picked_up_at"?: string;
    /**
     * Time by which the buyer should collect the order. Passing it does not change status or emit
     * an event automatically; the merchant decides how to follow up. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "pickup_due_at"?: string;
    /**
     * How the buyer collects the items, such as in store or curbside. Value enum: "in_store",
     * "curbside", "locker", "other".
     */
    "pickup_mode"?: "in_store" | "curbside" | "locker" | "other" | (string & {});
    /**
     * Width of the promised pickup window, from 0 to 86400 seconds. Format: int64. minimum: 0.
     * maximum: 86400.
     */
    "pickup_window_duration_seconds"?: number;
    /**
     * Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds.
     * Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number;
    /**
     * When the items became ready for pickup, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "ready_at"?: string;
    /** Timezone used to display the pickup window. Uses an IANA time zone name. */
    "timezone"?: string;
    /**
     * Buyer vehicle description used for curbside handoff. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. maxLength: 500.
     */
    "vehicle_description"?: string;
    /**
     * End of the promised pickup window, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string;
    /**
     * Start of the promised pickup window, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string;
};
export type PickupFulfillmentDetailsPreviousAttributes = {
    /**
     * Address where the buyer collects the order. anyOf[1] (Value): {@link
     * AddressPreviousAttributes}. anyOf[2] (Value): null.
     */
    "address"?: ((AddressPreviousAttributes) | (null) | (unknown));
    /**
     * Instructions specific to curbside handoff. anyOf[1] (Value): string. Instructions specific
     * to curbside handoff. maxLength: 2048. anyOf[2] (Value): null.
     */
    "curbside_instructions"?: ((string) | (null));
    /**
     * Buyer-reported arrival time for curbside or counter pickup. anyOf[1] (Value): string.
     * Buyer-reported arrival time for curbside or counter pickup. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "customer_arrived_at"?: ((string) | (null));
    /**
     * Pickup instructions for the buyer, such as where to go on arrival. anyOf[1] (Value): string.
     * Pickup instructions for the buyer, such as where to go on arrival. anyOf[2] (Value): null.
     */
    "instructions"?: ((string) | (null));
    /**
     * Name of the store or place where the buyer collects the order. anyOf[1] (Value): string.
     * Name of the store or place where the buyer collects the order. anyOf[2] (Value): null.
     */
    "location_name"?: ((string) | (null));
    /**
     * When the recipient collected the items, in RFC3339 format. anyOf[1] (Value): string. When
     * the recipient collected the items, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "picked_up_at"?: ((string) | (null));
    /**
     * Time by which the buyer should collect the order. Passing it does not change status or emit
     * an event automatically; the merchant decides how to follow up. anyOf[1] (Value): string.
     * Time by which the buyer should collect the order. Passing it does not change status or emit
     * an event automatically; the merchant decides how to follow up. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "pickup_due_at"?: ((string) | (null));
    /**
     * How the buyer collects the items, such as in store or curbside. Value enum: "in_store",
     * "curbside", "locker", "other". anyOf[1] (Value): string. How the buyer collects the items,
     * such as in store or curbside. Value enum: "in_store", "curbside", "locker", "other".
     * anyOf[2] (Value): null.
     */
    "pickup_mode"?: (("in_store" | "curbside" | "locker" | "other" | (string & {})) | (null));
    /**
     * Width of the promised pickup window, from 0 to 86400 seconds. anyOf[1] (Value): integer.
     * Width of the promised pickup window, from 0 to 86400 seconds. Format: int64. minimum: 0.
     * maximum: 86400. anyOf[2] (Value): null.
     */
    "pickup_window_duration_seconds"?: ((number) | (null));
    /**
     * Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds.
     * anyOf[1] (Value): integer. Expected preparation time for restaurant and made-to-order
     * pickup, from 0 to 86400 seconds. Format: int64. minimum: 0. maximum: 86400. anyOf[2]
     * (Value): null.
     */
    "prep_time_duration_seconds"?: ((number) | (null));
    /**
     * When the items became ready for pickup, in RFC3339 format. anyOf[1] (Value): string. When
     * the items became ready for pickup, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "ready_at"?: ((string) | (null));
    /**
     * Timezone used to display the pickup window. Uses an IANA time zone name. anyOf[1] (Value):
     * string. Timezone used to display the pickup window. Uses an IANA time zone name. anyOf[2]
     * (Value): null.
     */
    "timezone"?: ((string) | (null));
    /**
     * Buyer vehicle description used for curbside handoff. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): string.
     * Buyer vehicle description used for curbside handoff. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. maxLength: 500. anyOf[2]
     * (Value): null.
     */
    "vehicle_description"?: ((string) | (null));
    /**
     * End of the promised pickup window, in RFC3339 format. anyOf[1] (Value): string. End of the
     * promised pickup window, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "window_end_at"?: ((string) | (null));
    /**
     * Start of the promised pickup window, in RFC3339 format. anyOf[1] (Value): string. Start of
     * the promised pickup window, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "window_start_at"?: ((string) | (null));
};
/**
 * A platform fee your partner app charged, or asked to charge, on a payment it created for an
 * installed merchant. Owned by the merchant that owns the partner app.
 */
export type PlatformFee = {
    /**
     * The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it
     * at confirm and capture to fit the merchant's cap and Flint's own fees; 0 once canceled.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Why Flint collected no fee. Present only when status is canceled. Can gain values. Value
     * enum: "payment_not_completed", "install_revoked", "platform_capability_inactive",
     * "uncollectible".
     */
    "canceled_reason"?: "payment_not_completed"
        | "install_revoked"
        | "platform_capability_inactive"
        | "uncollectible"
        | (string & {});
    /**
     * The checkout session the payment came from. Absent when the fee was sent with the payment
     * itself. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id"?: string;
    /**
     * When Flint collected the fee with the payment. Absent unless status is succeeded. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "collected_at"?: string;
    /**
     * When the payment's create recorded the fee. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * The installed merchant charged the fee, as on the install. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id": string;
    /** The partner app that charged the fee. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id": string;
    /**
     * The install whose partner app token created the payment. Example:
     * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id": string;
    /**
     * The payment the fee rides on, owned by the installed merchant. After that merchant resets
     * the sandbox the payment was in, the ID no longer resolves. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /**
     * Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id.
     * Example: "pfee_01KEZF7C00JHAZN19B3MMW0R3A".
     */
    "platform_fee_id": string;
    /**
     * The fee debited from the platform for returns so far, including opted-in payment refunds and
     * returns of the whole application fee. Matches the platform ledger, including returns
     * awaiting completion; reversals reduce the total. 0 when nothing has been debited. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * The fee the request asked for. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "requested_amount_money": MoneyValue;
    /**
     * When the held share is due to return to your available balance. Absent until the fee posts,
     * and when nothing was held. Setting it sends no event. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "reserve_available_at"?: string;
    /**
     * The share of the fee Flint held in your reserve when it posted the fee to your ledger.
     * Absent until then. A snapshot: loss coverage draws on the reserve as a whole, so read
     * PlatformFeeBalance.reserve_money for what is held now. Setting it sends no event. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "reserve_hold_money"?: MoneyValue;
    /** Where the fee stands. canceled is final. Value enum: "pending", "succeeded", "canceled". */
    "status": "pending" | "succeeded" | "canceled" | (string & {});
    /** When the fee last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** One partner app's platform fee balance in one currency. */
export type PlatformFeeBalance = {
    /**
     * Fees Flint holds as available funds, net of the reserve. It can be negative: a fee returned
     * after payout is owed back from your next fees. available_money plus pending_money equals the
     * sum of amount_money over the app's balance transactions in this currency. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "available_money": MoneyValue;
    /**
     * ISO 4217 currency code of every amount on the balance. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * The next scheduled payout run. Absent until scheduled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "next_payout_at"?: string;
    /** The partner app the balance belongs to. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id": string;
    /**
     * Why payouts wait. Present only when payouts_enabled is false. Can gain values. Value enum:
     * "platform_paused", "merchant_payouts_unavailable".
     */
    "payouts_disabled_reason"?: "platform_paused" | "merchant_payouts_unavailable" | (string & {});
    /**
     * Whether your platform and merchant account can receive payouts. Flint deferring a run for
     * cash safety doesn't disable payouts.
     */
    "payouts_enabled": boolean;
    /**
     * Fees Flint hasn't received as available funds yet, net of their reserve holds. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "pending_money": MoneyValue;
    /** Unique identifier for the balance. Example: "pfbal_01KEZF7C005QNZBGFAR0NNPEQ4". */
    "platform_fee_balance_id": string;
    /**
     * What Flint holds in your reserve now: reserve holds minus releases. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "reserve_money": MoneyValue;
    /** When the balance last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
/** A page of `PlatformFeeBalance` objects. */
export type PlatformFeeBalanceListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PlatformFeeBalance}. One partner app's platform fee balance in one currency.
     */
    "data": Array<PlatformFeeBalance>;
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
 * One entry of a partner app's platform fee ledger. Entries keep their amounts; status,
 * available_at and the payout link can be filled later.
 */
export type PlatformFeeBalanceTransaction = {
    /**
     * The signed effect on available_money plus pending_money: positive for money in, negative for
     * money out. Signed monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money": MoneyValue;
    /**
     * When the entry becomes, or became, available. Absent while Flint hasn't verified the
     * application fee that carries it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "available_at"?: string;
    /** When Flint recorded the entry. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Display text, not for matching. */
    "description"?: string;
    /** When the movement happened. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /** The partner app the entry belongs to. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id": string;
    /**
     * Unique identifier for the balance transaction. Example: "pfbt_01KEZF7C0079KPKMAHC7C60G1T".
     */
    "platform_fee_balance_transaction_id": string;
    /**
     * The fee the entry concerns, when it concerns one. Example:
     * "pfee_01KEZF7C00JHAZN19B3MMW0R3A".
     */
    "platform_fee_id"?: string;
    /**
     * The payout that carried the entry. Set once when a payout is prepared, and never changed.
     * Example: "pfpo_01KEZF7C00H58B147FK286D4A4".
     */
    "platform_fee_payout_id"?: string;
    /**
     * Earlier entries this one is linked to. Empty when none. [] (Value): string. Example:
     * "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
     */
    "related_balance_transaction_ids": Array<string>;
    /**
     * The Flint resource behind the entry, when it has one other than the fee. A reference to
     * another resource by `resource_type` and `resource_id`.
     */
    "related_resource"?: ResourceReference;
    /** Whether the amount counts toward available_money yet. Value enum: "pending", "available". */
    "status": "pending" | "available" | (string & {});
    /**
     * What the entry records. Can gain values; treat an unknown value as other. Value enum:
     * "platform_fee", "reserve_hold", "reserve_release", "loss_coverage",
     * "loss_coverage_reversal", "platform_fee_refund", "platform_fee_refund_reversal",
     * "platform_fee_payout", "platform_fee_payout_reversal", "other".
     */
    "type": "platform_fee"
        | "reserve_hold"
        | "reserve_release"
        | "loss_coverage"
        | "loss_coverage_reversal"
        | "platform_fee_refund"
        | "platform_fee_refund_reversal"
        | "platform_fee_payout"
        | "platform_fee_payout_reversal"
        | "other"
        | (string & {});
};
/** A page of `PlatformFeeBalanceTransaction` objects. */
export type PlatformFeeBalanceTransactionListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PlatformFeeBalanceTransaction}. One entry of a partner app's platform fee ledger. Entries
     * keep their amounts; status, available_at and the payout link can be filled later.
     */
    "data": Array<PlatformFeeBalanceTransaction>;
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
/** A response containing `PlatformFeeBalanceTransaction` data. */
export type PlatformFeeBalanceTransactionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. One entry of a partner
     * app's platform fee ledger. Entries keep their amounts; status, available_at and the payout
     * link can be filled later.
     */
    "data": PlatformFeeBalanceTransaction;
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
export type PlatformFeeBalanceTransactionsGetParams = {};
export type PlatformFeeBalanceTransactionsListParams = {
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
     * Exact match on the partner app. minLength: 1. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /**
     * Exact match on the fee the entry concerns. minLength: 1. pattern:
     * ^pfee_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pfee_01KEZF7C00JHAZN19B3MMW0R3A".
     */
    "platform_fee_id"?: InputValue<string>;
    /**
     * Exact match on the payout that carried the entry. minLength: 1. pattern:
     * ^pfpo_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pfpo_01KEZF7C00H58B147FK286D4A4".
     */
    "platform_fee_payout_id"?: InputValue<string>;
    /**
     * Types to include. Omit it to list every type. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "platform_fee", "reserve_hold", "reserve_release",
     * "loss_coverage", "loss_coverage_reversal", "platform_fee_refund",
     * "platform_fee_refund_reversal", "platform_fee_payout", "platform_fee_payout_reversal". Value
     * enum: "platform_fee", "reserve_hold", "reserve_release", "loss_coverage",
     * "loss_coverage_reversal", "platform_fee_refund", "platform_fee_refund_reversal",
     * "platform_fee_payout", "platform_fee_payout_reversal". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "platform_fee", "reserve_hold", "reserve_release", "loss_coverage",
     * "loss_coverage_reversal", "platform_fee_refund", "platform_fee_refund_reversal",
     * "platform_fee_payout", "platform_fee_payout_reversal". anyOf[1][] (Value): string. Value
     * enum: "platform_fee", "reserve_hold", "reserve_release", "loss_coverage",
     * "loss_coverage_reversal", "platform_fee_refund", "platform_fee_refund_reversal",
     * "platform_fee_payout", "platform_fee_payout_reversal". anyOf[2] (Value): string. Value enum:
     * "platform_fee", "reserve_hold", "reserve_release", "loss_coverage",
     * "loss_coverage_reversal", "platform_fee_refund", "platform_fee_refund_reversal",
     * "platform_fee_payout", "platform_fee_payout_reversal".
     */
    "type"?: InputValue<("platform_fee"
        | "reserve_hold"
        | "reserve_release"
        | "loss_coverage"
        | "loss_coverage_reversal"
        | "platform_fee_refund"
        | "platform_fee_refund_reversal"
        | "platform_fee_payout"
        | "platform_fee_payout_reversal")
        | readonly ("platform_fee"
        | "reserve_hold"
        | "reserve_release"
        | "loss_coverage"
        | "loss_coverage_reversal"
        | "platform_fee_refund"
        | "platform_fee_refund_reversal"
        | "platform_fee_payout"
        | "platform_fee_payout_reversal")[]>;
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
};
export type PlatformFeeBalancesListParams = {
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
     * Exact match on the partner app. minLength: 1. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
};
export type PlatformFeeCanceledEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed"
                | "install_revoked"
                | "platform_capability_inactive"
                | "uncollectible"
                | (string & {});
            "checkout_session_id"?: string;
            "collected_at"?: string;
            "created_at": string;
            "merchant_id": string;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "platform_fee_id": string;
            "refunded_money": MoneyValue;
            "requested_amount_money": MoneyValue;
            "reserve_available_at"?: string;
            "reserve_hold_money"?: MoneyValue;
            "status": "pending" | "succeeded" | "canceled" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "canceled_reason"?: (("payment_not_completed"
                | "install_revoked"
                | "platform_capability_inactive"
                | "uncollectible"
                | (string & {}))
                | (null));
            "checkout_session_id"?: ((string) | (null));
            "collected_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "partner_app_id"?: ((string) | (null));
            "partner_app_install_id"?: ((string) | (null));
            "payment_intent_id"?: ((string) | (null));
            "platform_fee_id"?: ((string) | (null));
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "requested_amount_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "reserve_available_at"?: ((string) | (null));
            "reserve_hold_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "status"?: (("pending" | "succeeded" | "canceled" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "platform_fee.canceled";
})
    & {
    "event_type": "platform_fee.canceled";
});
/**
 * The most a platform fee can take from one payment. The largest platform fee on a payment is
 * percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed
 * part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a
 * 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum
 * can't carry a platform fee.
 */
export type PlatformFeeCap = {
    /**
     * The fixed part of the cap per payment, keyed by currency code, added to the percentage part.
     * Omitted when no currency has one. Only USD today. * (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "fixed_fee_currency_options"?: Record<string, MoneyValue>;
    /**
     * The maximum fee on one payment, keyed by currency code. Only USD today. * (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "maximum_fee_currency_options": Record<string, MoneyValue>;
    /**
     * The percentage part of the cap, in percent: 2.5 means 2.5%. 0 when the cap is a fixed part
     * alone. minimum: 0. maximum: 25. multipleOf: 0.0001.
     */
    "percent": number;
};
export type PlatformFeeCapPreviousAttributes = {
    /**
     * The fixed part of the cap per payment, keyed by currency code, added to the percentage part.
     * Omitted when no currency has one. Only USD today. anyOf[1] (Value): Map of {@link
     * MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "fixed_fee_currency_options"?: ((Record<string, MoneyValuePreviousAttributes>) | (null));
    /**
     * The maximum fee on one payment, keyed by currency code. Only USD today. anyOf[1] (Value):
     * Map of {@link MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "maximum_fee_currency_options"?: ((Record<string, MoneyValuePreviousAttributes>) | (null));
    /**
     * The percentage part of the cap, in percent: 2.5 means 2.5%. 0 when the cap is a fixed part
     * alone. anyOf[1] (Value): number. The percentage part of the cap, in percent: 2.5 means 2.5%.
     * 0 when the cap is a fixed part alone. minimum: 0. maximum: 25. multipleOf: 0.0001. anyOf[2]
     * (Value): null.
     */
    "percent"?: ((number) | (null));
};
/**
 * The whole platform fee cap. The largest platform fee on a payment is percent of the amount it
 * collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and
 * never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up
 * to 1.30 USD on a 100.00 USD payment. percent and maximum_fee_currency_options are required. A
 * write replaces the cap whole, so a cap sent without fixed_fee_currency_options has no fixed
 * part.
 */
export type PlatformFeeCapRequestInput = {
    /**
     * The fixed part of the cap per payment, keyed by currency code, added to the percentage part:
     * 30 USD minor units with percent 1 is 1% + 0.30 USD. Optional. Each is from 1 minor unit to
     * the same currency's maximum, and a currency needs a maximum to have one; otherwise
     * INVALID_REQUEST with INVALID_VALUE on the entry. Each key must equal its Money's currency.
     * Only USD today. * (Value): {@link MoneyValueInput}. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "fixed_fee_currency_options"?: Record<string, MoneyValueInput>;
    /**
     * The maximum fee on one payment, keyed by currency code: from 1 to 1,000,000 minor units
     * ($0.01 to $10,000.00). Each key must equal its Money's currency. Only USD today.
     * minProperties: 1. * (Value): {@link MoneyValueInput}. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "maximum_fee_currency_options": Record<string, MoneyValueInput>;
    /**
     * The percentage part of the cap, in percent: from 0 to 25, with up to four decimal places.
     * 2.5 means 2.5%. 0 needs a fixed part in every currency with a maximum, so the cap is a flat
     * fee per payment; otherwise INVALID_REQUEST with INVALID_VALUE on the maximum of the currency
     * without one. minimum: 0. maximum: 25. multipleOf: 0.0001.
     */
    "percent": number;
};
export type PlatformFeeCreatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed"
                | "install_revoked"
                | "platform_capability_inactive"
                | "uncollectible"
                | (string & {});
            "checkout_session_id"?: string;
            "collected_at"?: string;
            "created_at": string;
            "merchant_id": string;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "platform_fee_id": string;
            "refunded_money": MoneyValue;
            "requested_amount_money": MoneyValue;
            "reserve_available_at"?: string;
            "reserve_hold_money"?: MoneyValue;
            "status": "pending" | "succeeded" | "canceled" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "platform_fee.created";
})
    & {
    "event_type": "platform_fee.created";
});
/** A page of `PlatformFee` objects. */
export type PlatformFeeListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PlatformFee}. A platform fee your partner app charged, or asked to charge, on a payment it
     * created for an installed merchant. Owned by the merchant that owns the partner app.
     */
    "data": Array<PlatformFee>;
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
 * A payout from your partner app's platform fee balance to your merchant balance. Owned by the
 * merchant that owns the partner app.
 */
export type PlatformFeePayout = {
    /**
     * The amount transferred to your merchant balance. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * The credit on your merchant ledger. Present once Flint observes it; linking it sends no
     * payout event and doesn't advance version. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
     */
    "balance_transaction_id"?: string;
    /** When Flint prepared the payout. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Why the payout failed. Present only when status is failed. Can gain values; treat unknown
     * values as payout_failed. Value enum: "merchant_cannot_receive", "payout_failed".
     */
    "failure_reason"?: "merchant_cannot_receive" | "payout_failed" | (string & {});
    /**
     * The partner app whose fee balance funded the payout. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id": string;
    /**
     * Unique identifier for the platform fee payout. Example: "pfpo_01KEZF7C00H58B147FK286D4A4".
     */
    "platform_fee_payout_id": string;
    /**
     * Where the payout stands. succeeded and failed are final. Value enum: "pending", "succeeded",
     * "failed".
     */
    "status": "pending" | "succeeded" | "failed" | (string & {});
    /**
     * When the transfer succeeded. Present only when status is succeeded. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "succeeded_at"?: string;
    /**
     * When the payout's owned state last changed. Retry bookkeeping and observing the credit don't
     * change it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type PlatformFeePayoutCreatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "balance_transaction_id"?: string;
            "created_at": string;
            "failure_reason"?: "merchant_cannot_receive" | "payout_failed" | (string & {});
            "partner_app_id": string;
            "platform_fee_payout_id": string;
            "status": "pending" | "succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "platform_fee_payout.created";
})
    & {
    "event_type": "platform_fee_payout.created";
});
export type PlatformFeePayoutFailedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "balance_transaction_id"?: string;
            "created_at": string;
            "failure_reason"?: "merchant_cannot_receive" | "payout_failed" | (string & {});
            "partner_app_id": string;
            "platform_fee_payout_id": string;
            "status": "pending" | "succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "balance_transaction_id"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "failure_reason"?: (("merchant_cannot_receive" | "payout_failed" | (string & {})) | (null));
            "partner_app_id"?: ((string) | (null));
            "platform_fee_payout_id"?: ((string) | (null));
            "status"?: (("pending" | "succeeded" | "failed" | (string & {})) | (null));
            "succeeded_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "platform_fee_payout.failed";
})
    & {
    "event_type": "platform_fee_payout.failed";
});
/** A page of `PlatformFeePayout` objects. */
export type PlatformFeePayoutListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PlatformFeePayout}. A payout from your partner app's platform fee balance to your merchant
     * balance. Owned by the merchant that owns the partner app.
     */
    "data": Array<PlatformFeePayout>;
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
/** A response containing `PlatformFeePayout` data. */
export type PlatformFeePayoutResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A payout from your
     * partner app's platform fee balance to your merchant balance. Owned by the merchant that owns
     * the partner app.
     */
    "data": PlatformFeePayout;
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
export type PlatformFeePayoutSucceededEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "balance_transaction_id"?: string;
            "created_at": string;
            "failure_reason"?: "merchant_cannot_receive" | "payout_failed" | (string & {});
            "partner_app_id": string;
            "platform_fee_payout_id": string;
            "status": "pending" | "succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "balance_transaction_id"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "failure_reason"?: (("merchant_cannot_receive" | "payout_failed" | (string & {})) | (null));
            "partner_app_id"?: ((string) | (null));
            "platform_fee_payout_id"?: ((string) | (null));
            "status"?: (("pending" | "succeeded" | "failed" | (string & {})) | (null));
            "succeeded_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "platform_fee_payout.succeeded";
})
    & {
    "event_type": "platform_fee_payout.succeeded";
});
export type PlatformFeePayoutsGetParams = {};
export type PlatformFeePayoutsListParams = {
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
     * Exact match on the partner app. minLength: 1. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /**
     * Statuses to include. Omit it to list every status. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "pending", "succeeded", "failed". Value enum:
     * "pending", "succeeded", "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending", "succeeded", "failed". anyOf[1][] (Value): string. Value enum: "pending",
     * "succeeded", "failed". anyOf[2] (Value): string. Value enum: "pending", "succeeded",
     * "failed".
     */
    "status"?: InputValue<("pending" | "succeeded" | "failed") | readonly ("pending" | "succeeded" | "failed")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
/**
 * A platform fee the partner app charges on the payment, beside Flint's fees. The installed
 * merchant pays it, and Flint takes no share of it.
 */
export type PlatformFeeRequest = {
    /**
     * The fee in minor units, in the payment's currency. A fixed amount: compute any percentage
     * yourself. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
};
/**
 * A platform fee the partner app charges on the payment, beside Flint's fees. The installed
 * merchant pays it, and Flint takes no share of it.
 */
export type PlatformFeeRequestInput = {
    /**
     * The fee in minor units, in the payment's currency. A fixed amount: compute any percentage
     * yourself. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
};
/** A response containing `PlatformFee` data. */
export type PlatformFeeResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A platform fee your
     * partner app charged, or asked to charge, on a payment it created for an installed merchant.
     * Owned by the merchant that owns the partner app.
     */
    "data": PlatformFee;
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
export type PlatformFeeSucceededEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed"
                | "install_revoked"
                | "platform_capability_inactive"
                | "uncollectible"
                | (string & {});
            "checkout_session_id"?: string;
            "collected_at"?: string;
            "created_at": string;
            "merchant_id": string;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "platform_fee_id": string;
            "refunded_money": MoneyValue;
            "requested_amount_money": MoneyValue;
            "reserve_available_at"?: string;
            "reserve_hold_money"?: MoneyValue;
            "status": "pending" | "succeeded" | "canceled" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "canceled_reason"?: (("payment_not_completed"
                | "install_revoked"
                | "platform_capability_inactive"
                | "uncollectible"
                | (string & {}))
                | (null));
            "checkout_session_id"?: ((string) | (null));
            "collected_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "partner_app_id"?: ((string) | (null));
            "partner_app_install_id"?: ((string) | (null));
            "payment_intent_id"?: ((string) | (null));
            "platform_fee_id"?: ((string) | (null));
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "requested_amount_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "reserve_available_at"?: ((string) | (null));
            "reserve_hold_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "status"?: (("pending" | "succeeded" | "canceled" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "platform_fee.succeeded";
})
    & {
    "event_type": "platform_fee.succeeded";
});
export type PlatformFeeUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed"
                | "install_revoked"
                | "platform_capability_inactive"
                | "uncollectible"
                | (string & {});
            "checkout_session_id"?: string;
            "collected_at"?: string;
            "created_at": string;
            "merchant_id": string;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "platform_fee_id": string;
            "refunded_money": MoneyValue;
            "requested_amount_money": MoneyValue;
            "reserve_available_at"?: string;
            "reserve_hold_money"?: MoneyValue;
            "status": "pending" | "succeeded" | "canceled" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "canceled_reason"?: (("payment_not_completed"
                | "install_revoked"
                | "platform_capability_inactive"
                | "uncollectible"
                | (string & {}))
                | (null));
            "checkout_session_id"?: ((string) | (null));
            "collected_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "partner_app_id"?: ((string) | (null));
            "partner_app_install_id"?: ((string) | (null));
            "payment_intent_id"?: ((string) | (null));
            "platform_fee_id"?: ((string) | (null));
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "requested_amount_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "reserve_available_at"?: ((string) | (null));
            "reserve_hold_money"?: ((MoneyValuePreviousAttributes) | (null) | (unknown));
            "status"?: (("pending" | "succeeded" | "canceled" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "platform_fee.updated";
})
    & {
    "event_type": "platform_fee.updated";
});
export type PlatformFeesGetParams = {};
export type PlatformFeesListParams = {
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
     * Exact match on the partner app. minLength: 1. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /**
     * Exact match on the install whose token created the payment. minLength: 1. pattern:
     * ^pinst_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: InputValue<string>;
    /**
     * Exact match on the installed merchant charged the fee. minLength: 1. pattern:
     * ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: InputValue<string>;
    /**
     * Exact match on the payment the fee rides on. minLength: 1. pattern:
     * ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: InputValue<string>;
    /**
     * Statuses to include. Omit it to list every status. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "pending", "succeeded", "canceled". Value enum:
     * "pending", "succeeded", "canceled". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending", "succeeded", "canceled". anyOf[1][] (Value): string. Value enum: "pending",
     * "succeeded", "canceled". anyOf[2] (Value): string. Value enum: "pending", "succeeded",
     * "canceled".
     */
    "status"?: InputValue<("pending" | "succeeded" | "canceled") | readonly ("pending" | "succeeded" | "canceled")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
/** A merchant-only set of variant prices for individual customers or customer segments. */
export type PriceList = {
    /**
     * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been
     * archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "archived_at": string | null;
    /**
     * When this price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * Immutable currency of every price in this list. Currently USD. Uses ISO 4217 currency codes.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. [] (Value): string.
     */
    "customer_segments": Array<string>;
    /**
     * Caller-owned identifier for this resource in an external system. `null` when unset.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string | null;
    /**
     * Identifier of the merchant that owns this price list. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id": string;
    /**
     * Caller-owned metadata stored on this price list. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata": MetadataMap;
    /** Name used to identify this price list. */
    "name": string;
    /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
    "price_count": number;
    /**
     * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     */
    "price_list_id": string;
    /**
     * Availability or retirement state. Derived as archived when archived_at is set; otherwise
     * active or inactive. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * When this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
    /**
     * Aggregate version, increased once for a request that changes the list or its prices. No-op
     * writes preserve it. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type PriceListArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "archived_at": string | null;
            "created_at": string;
            "currency": string;
            "customer_segments": Array<string>;
            "external_reference_id": string | null;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "price_count": number;
            "price_list_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "archived_at"?: ((string | null) | (null) | (unknown));
            "created_at"?: ((string) | (null));
            "currency"?: ((string) | (null));
            "customer_segments"?: ((Array<string>) | (null));
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "name"?: ((string) | (null));
            "price_count"?: ((number) | (null));
            "price_list_id"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "price_list.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "archived_at": string | null;
            "created_at": string;
            "currency": string;
            "customer_segments": Array<string>;
            "external_reference_id": string | null;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "price_count": number;
            "price_list_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "archived_at"?: ((string | null) | (null) | (unknown));
            "created_at"?: ((string) | (null));
            "currency"?: ((string) | (null));
            "customer_segments"?: ((Array<string>) | (null));
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "name"?: ((string) | (null));
            "price_count"?: ((number) | (null));
            "price_list_id"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "price_list.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "price_list.archived";
});
/**
 * The `price_list.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PriceListArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.archived_at (Required): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When this
     * price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.currency (Required): string. Immutable currency of every
     * price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.customer_segments (Required): Array of string.
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. object.customer_segments[] (Value): string.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". object.merchant_id (Required): string. Identifier of the merchant that
     * owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required):
     * {@link MetadataMap}. Caller-owned metadata stored on this price list. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.name (Required): string. Name used to
     * identify this price list. object.price_count (Required): integer. Number of variant prices
     * in the list. Format: int64. minimum: 0. maximum: 10000. object.price_list_id (Required):
     * string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". object.status (Required): string. Availability or
     * retirement state. Derived as archived when archived_at is set; otherwise active or inactive.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. When
     * this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events. previous_attributes.archived_at (Optional): string or null or null. When this price
     * list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived.
     * previous_attributes.archived_at.anyOf[1] (Value): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.archived_at.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. When this price
     * list was created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1] (Value):
     * string. When this price list was created, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.currency (Optional): string or null. Immutable currency of every price
     * in this list. Currently USD. Uses ISO 4217 currency codes.
     * previous_attributes.currency.anyOf[1] (Value): string. Immutable currency of every price in
     * this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD". previous_attributes.currency.anyOf[2] (Value): null.
     * previous_attributes.customer_segments (Optional): Array of string or null. Customer.segment
     * labels assigned to this list. Empty when no segments are assigned.
     * previous_attributes.customer_segments.anyOf[1] (Value): Array of string. Customer.segment
     * labels assigned to this list. Empty when no segments are assigned. maxItems: 20.
     * uniqueItems: true. previous_attributes.customer_segments.anyOf[1][] (Value): string.
     * previous_attributes.customer_segments.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null or null. Caller-owned
     * identifier for this resource in an external system. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string or null. Caller-owned
     * identifier for this resource in an external system. `null` when unset. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this price list. previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier
     * of the merchant that owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on this price list.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Name used to identify this price list. previous_attributes.name.anyOf[1]
     * (Value): string. Name used to identify this price list. previous_attributes.name.anyOf[2]
     * (Value): null. previous_attributes.price_count (Optional): integer or null. Number of
     * variant prices in the list. previous_attributes.price_count.anyOf[1] (Value): integer.
     * Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000.
     * previous_attributes.price_count.anyOf[2] (Value): null. previous_attributes.price_list_id
     * (Optional): string or null. Stable identifier of this price list.
     * previous_attributes.price_list_id.anyOf[1] (Value): string. Stable identifier of this price
     * list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * previous_attributes.price_list_id.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Availability or retirement state. Derived as archived when
     * archived_at is set; otherwise active or inactive. Value enum: "active", "inactive",
     * "archived". previous_attributes.status.anyOf[1] (Value): string. Availability or retirement
     * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
     * enum: "active", "inactive", "archived". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When this price list or its
     * prices last changed, as an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. When this price list or its prices last changed, as an RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * previous_attributes.version.anyOf[1] (Value): integer. Aggregate version, increased once for
     * a request that changes the list or its prices. No-op writes preserve it. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * archived_at (Required): string or null. When this price list was soft-deleted, as an
         * RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When this price list was created,
         * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency
         * (Required): string. Immutable currency of every price in this list. Currently USD. Uses
         * ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
         * "USD". customer_segments (Required): Array of string. Customer.segment labels assigned
         * to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments[] (Value): string. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". merchant_id (Required): string.
         * Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata stored on this price list. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string. Name used to identify this price list.
         * price_count (Required): integer. Number of variant prices in the list. Format: int64.
         * minimum: 0. maximum: 10000. price_list_id (Required): string. Stable identifier of this
         * price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". status (Required): string. Availability or retirement
         * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
         * enum: "active", "inactive", "archived". updated_at (Required): string. When this price
         * list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Aggregate version, increased once
         * for a request that changes the list or its prices. No-op writes preserve it. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "archived_at": string | null;
            /**
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string;
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * maxItems: 20. uniqueItems: true. [] (Value): string.
             */
            "customer_segments": Array<string>;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this price list. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /** Name used to identify this price list. */
            "name": string;
            /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
            "price_count": number;
            /**
             * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string;
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. archived_at (Optional): string or null or null.
         * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
         * been archived. archived_at.anyOf[1] (Value): string or null. When this price list was
         * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". archived_at.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When this price list was created, as an RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. When this price list was created, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. currency (Optional): string or null. Immutable
         * currency of every price in this list. Currently USD. Uses ISO 4217 currency codes.
         * currency.anyOf[1] (Value): string. Immutable currency of every price in this list.
         * Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern:
         * ^[A-Z]{3}$. Example: "USD". currency.anyOf[2] (Value): null. customer_segments
         * (Optional): Array of string or null. Customer.segment labels assigned to this list.
         * Empty when no segments are assigned. customer_segments.anyOf[1] (Value): Array of
         * string. Customer.segment labels assigned to this list. Empty when no segments are
         * assigned. maxItems: 20. uniqueItems: true. customer_segments.anyOf[1][] (Value): string.
         * customer_segments.anyOf[2] (Value): null. external_reference_id (Optional): string or
         * null or null. Caller-owned identifier for this resource in an external system. `null`
         * when unset. external_reference_id.anyOf[1] (Value): string or null. Caller-owned
         * identifier for this resource in an external system. `null` when unset. minLength: 1.
         * maxLength: 255. Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * merchant_id (Optional): string or null. Identifier of the merchant that owns this price
         * list. merchant_id.anyOf[1] (Value): string. Identifier of the merchant that owns this
         * price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value):
         * null. metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on
         * this price list. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2]
         * (Value): null. name (Optional): string or null. Name used to identify this price list.
         * name.anyOf[1] (Value): string. Name used to identify this price list. name.anyOf[2]
         * (Value): null. price_count (Optional): integer or null. Number of variant prices in the
         * list. price_count.anyOf[1] (Value): integer. Number of variant prices in the list.
         * Format: int64. minimum: 0. maximum: 10000. price_count.anyOf[2] (Value): null.
         * price_list_id (Optional): string or null. Stable identifier of this price list.
         * price_list_id.anyOf[1] (Value): string. Stable identifier of this price list. pattern:
         * ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
         * price_list_id.anyOf[2] (Value): null. status (Optional): string or null. Availability or
         * retirement state. Derived as archived when archived_at is set; otherwise active or
         * inactive. Value enum: "active", "inactive", "archived". status.anyOf[1] (Value): string.
         * Availability or retirement state. Derived as archived when archived_at is set; otherwise
         * active or inactive. Value enum: "active", "inactive", "archived". status.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. When this price list or its prices
         * last changed, as an RFC3339 timestamp. updated_at.anyOf[1] (Value): string. When this
         * price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Aggregate version, increased once for a request that changes the list
         * or its prices. No-op writes preserve it. version.anyOf[1] (Value): integer. Aggregate
         * version, increased once for a request that changes the list or its prices. No-op writes
         * preserve it. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. anyOf[1] (Value): string or null. When this price list was
             * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "archived_at"?: ((string | null) | (null) | (unknown));
            /**
             * When this price list was created, as an RFC3339 timestamp. anyOf[1] (Value): string.
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. anyOf[1] (Value): string. Immutable currency of every price in this
             * list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
             * pattern: ^[A-Z]{3}$. Example: "USD". anyOf[2] (Value): null.
             */
            "currency"?: ((string) | (null));
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * anyOf[1] (Value): Array of string. Customer.segment labels assigned to this list.
             * Empty when no segments are assigned. maxItems: 20. uniqueItems: true. anyOf[1][]
             * (Value): string. anyOf[2] (Value): null.
             */
            "customer_segments"?: ((Array<string>) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * anyOf[1] (Value): string or null. Caller-owned identifier for this resource in an
             * external system. `null` when unset. minLength: 1. maxLength: 255. Example:
             * "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            /**
             * Identifier of the merchant that owns this price list. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata stored on this price list. anyOf[1] (Value): {@link
             * MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * Name used to identify this price list. anyOf[1] (Value): string. Name used to
             * identify this price list. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Number of variant prices in the list. anyOf[1] (Value): integer. Number of variant
             * prices in the list. Format: int64. minimum: 0. maximum: 10000. anyOf[2] (Value):
             * null.
             */
            "price_count"?: ((number) | (null));
            /**
             * Stable identifier of this price list. anyOf[1] (Value): string. Stable identifier of
             * this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "prl_01KEZF7C00EH39P59GN3XMGS2Q". anyOf[2] (Value): null.
             */
            "price_list_id"?: ((string) | (null));
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived". anyOf[1]
             * (Value): string. Availability or retirement state. Derived as archived when
             * archived_at is set; otherwise active or inactive. Value enum: "active", "inactive",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. anyOf[1]
             * (Value): string. When this price list or its prices last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. anyOf[1] (Value): integer. Aggregate version, increased
             * once for a request that changes the list or its prices. No-op writes preserve it.
             * Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "price_list.archived". */
    "event_type"?: "price_list.archived";
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
 * The `price_list.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PriceListArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.archived_at (Required): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When this
     * price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.currency (Required): string. Immutable currency of every
     * price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.customer_segments (Required): Array of string.
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. object.customer_segments[] (Value): string.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". object.merchant_id (Required): string. Identifier of the merchant that
     * owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required):
     * {@link MetadataMap}. Caller-owned metadata stored on this price list. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.name (Required): string. Name used to
     * identify this price list. object.price_count (Required): integer. Number of variant prices
     * in the list. Format: int64. minimum: 0. maximum: 10000. object.price_list_id (Required):
     * string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". object.status (Required): string. Availability or
     * retirement state. Derived as archived when archived_at is set; otherwise active or inactive.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. When
     * this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events. previous_attributes.archived_at (Optional): string or null or null. When this price
     * list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived.
     * previous_attributes.archived_at.anyOf[1] (Value): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.archived_at.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. When this price
     * list was created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1] (Value):
     * string. When this price list was created, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.currency (Optional): string or null. Immutable currency of every price
     * in this list. Currently USD. Uses ISO 4217 currency codes.
     * previous_attributes.currency.anyOf[1] (Value): string. Immutable currency of every price in
     * this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD". previous_attributes.currency.anyOf[2] (Value): null.
     * previous_attributes.customer_segments (Optional): Array of string or null. Customer.segment
     * labels assigned to this list. Empty when no segments are assigned.
     * previous_attributes.customer_segments.anyOf[1] (Value): Array of string. Customer.segment
     * labels assigned to this list. Empty when no segments are assigned. maxItems: 20.
     * uniqueItems: true. previous_attributes.customer_segments.anyOf[1][] (Value): string.
     * previous_attributes.customer_segments.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null or null. Caller-owned
     * identifier for this resource in an external system. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string or null. Caller-owned
     * identifier for this resource in an external system. `null` when unset. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this price list. previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier
     * of the merchant that owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on this price list.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Name used to identify this price list. previous_attributes.name.anyOf[1]
     * (Value): string. Name used to identify this price list. previous_attributes.name.anyOf[2]
     * (Value): null. previous_attributes.price_count (Optional): integer or null. Number of
     * variant prices in the list. previous_attributes.price_count.anyOf[1] (Value): integer.
     * Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000.
     * previous_attributes.price_count.anyOf[2] (Value): null. previous_attributes.price_list_id
     * (Optional): string or null. Stable identifier of this price list.
     * previous_attributes.price_list_id.anyOf[1] (Value): string. Stable identifier of this price
     * list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * previous_attributes.price_list_id.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Availability or retirement state. Derived as archived when
     * archived_at is set; otherwise active or inactive. Value enum: "active", "inactive",
     * "archived". previous_attributes.status.anyOf[1] (Value): string. Availability or retirement
     * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
     * enum: "active", "inactive", "archived". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When this price list or its
     * prices last changed, as an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. When this price list or its prices last changed, as an RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * previous_attributes.version.anyOf[1] (Value): integer. Aggregate version, increased once for
     * a request that changes the list or its prices. No-op writes preserve it. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * archived_at (Required): string or null. When this price list was soft-deleted, as an
         * RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When this price list was created,
         * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency
         * (Required): string. Immutable currency of every price in this list. Currently USD. Uses
         * ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
         * "USD". customer_segments (Required): Array of string. Customer.segment labels assigned
         * to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments[] (Value): string. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". merchant_id (Required): string.
         * Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata stored on this price list. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string. Name used to identify this price list.
         * price_count (Required): integer. Number of variant prices in the list. Format: int64.
         * minimum: 0. maximum: 10000. price_list_id (Required): string. Stable identifier of this
         * price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". status (Required): string. Availability or retirement
         * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
         * enum: "active", "inactive", "archived". updated_at (Required): string. When this price
         * list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Aggregate version, increased once
         * for a request that changes the list or its prices. No-op writes preserve it. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "archived_at": string | null;
            /**
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string;
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * maxItems: 20. uniqueItems: true. [] (Value): string.
             */
            "customer_segments": Array<string>;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this price list. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /** Name used to identify this price list. */
            "name": string;
            /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
            "price_count": number;
            /**
             * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string;
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. archived_at (Optional): string or null or null.
         * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
         * been archived. archived_at.anyOf[1] (Value): string or null. When this price list was
         * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". archived_at.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When this price list was created, as an RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. When this price list was created, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. currency (Optional): string or null. Immutable
         * currency of every price in this list. Currently USD. Uses ISO 4217 currency codes.
         * currency.anyOf[1] (Value): string. Immutable currency of every price in this list.
         * Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern:
         * ^[A-Z]{3}$. Example: "USD". currency.anyOf[2] (Value): null. customer_segments
         * (Optional): Array of string or null. Customer.segment labels assigned to this list.
         * Empty when no segments are assigned. customer_segments.anyOf[1] (Value): Array of
         * string. Customer.segment labels assigned to this list. Empty when no segments are
         * assigned. maxItems: 20. uniqueItems: true. customer_segments.anyOf[1][] (Value): string.
         * customer_segments.anyOf[2] (Value): null. external_reference_id (Optional): string or
         * null or null. Caller-owned identifier for this resource in an external system. `null`
         * when unset. external_reference_id.anyOf[1] (Value): string or null. Caller-owned
         * identifier for this resource in an external system. `null` when unset. minLength: 1.
         * maxLength: 255. Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * merchant_id (Optional): string or null. Identifier of the merchant that owns this price
         * list. merchant_id.anyOf[1] (Value): string. Identifier of the merchant that owns this
         * price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value):
         * null. metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on
         * this price list. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2]
         * (Value): null. name (Optional): string or null. Name used to identify this price list.
         * name.anyOf[1] (Value): string. Name used to identify this price list. name.anyOf[2]
         * (Value): null. price_count (Optional): integer or null. Number of variant prices in the
         * list. price_count.anyOf[1] (Value): integer. Number of variant prices in the list.
         * Format: int64. minimum: 0. maximum: 10000. price_count.anyOf[2] (Value): null.
         * price_list_id (Optional): string or null. Stable identifier of this price list.
         * price_list_id.anyOf[1] (Value): string. Stable identifier of this price list. pattern:
         * ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
         * price_list_id.anyOf[2] (Value): null. status (Optional): string or null. Availability or
         * retirement state. Derived as archived when archived_at is set; otherwise active or
         * inactive. Value enum: "active", "inactive", "archived". status.anyOf[1] (Value): string.
         * Availability or retirement state. Derived as archived when archived_at is set; otherwise
         * active or inactive. Value enum: "active", "inactive", "archived". status.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. When this price list or its prices
         * last changed, as an RFC3339 timestamp. updated_at.anyOf[1] (Value): string. When this
         * price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Aggregate version, increased once for a request that changes the list
         * or its prices. No-op writes preserve it. version.anyOf[1] (Value): integer. Aggregate
         * version, increased once for a request that changes the list or its prices. No-op writes
         * preserve it. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. anyOf[1] (Value): string or null. When this price list was
             * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "archived_at"?: ((string | null) | (null) | (unknown));
            /**
             * When this price list was created, as an RFC3339 timestamp. anyOf[1] (Value): string.
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. anyOf[1] (Value): string. Immutable currency of every price in this
             * list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
             * pattern: ^[A-Z]{3}$. Example: "USD". anyOf[2] (Value): null.
             */
            "currency"?: ((string) | (null));
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * anyOf[1] (Value): Array of string. Customer.segment labels assigned to this list.
             * Empty when no segments are assigned. maxItems: 20. uniqueItems: true. anyOf[1][]
             * (Value): string. anyOf[2] (Value): null.
             */
            "customer_segments"?: ((Array<string>) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * anyOf[1] (Value): string or null. Caller-owned identifier for this resource in an
             * external system. `null` when unset. minLength: 1. maxLength: 255. Example:
             * "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            /**
             * Identifier of the merchant that owns this price list. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata stored on this price list. anyOf[1] (Value): {@link
             * MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * Name used to identify this price list. anyOf[1] (Value): string. Name used to
             * identify this price list. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Number of variant prices in the list. anyOf[1] (Value): integer. Number of variant
             * prices in the list. Format: int64. minimum: 0. maximum: 10000. anyOf[2] (Value):
             * null.
             */
            "price_count"?: ((number) | (null));
            /**
             * Stable identifier of this price list. anyOf[1] (Value): string. Stable identifier of
             * this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "prl_01KEZF7C00EH39P59GN3XMGS2Q". anyOf[2] (Value): null.
             */
            "price_list_id"?: ((string) | (null));
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived". anyOf[1]
             * (Value): string. Availability or retirement state. Derived as archived when
             * archived_at is set; otherwise active or inactive. Value enum: "active", "inactive",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. anyOf[1]
             * (Value): string. When this price list or its prices last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. anyOf[1] (Value): integer. Aggregate version, increased
             * once for a request that changes the list or its prices. No-op writes preserve it.
             * Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "price_list.archived". */
    "event_type"?: "price_list.archived";
});
export type PriceListCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "archived_at": string | null;
            "created_at": string;
            "currency": string;
            "customer_segments": Array<string>;
            "external_reference_id": string | null;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "price_count": number;
            "price_list_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "price_list.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "archived_at": string | null;
            "created_at": string;
            "currency": string;
            "customer_segments": Array<string>;
            "external_reference_id": string | null;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "price_count": number;
            "price_list_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "price_list.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "price_list.created";
});
/**
 * The `price_list.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PriceListCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.archived_at (Required): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When this
     * price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.currency (Required): string. Immutable currency of every
     * price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.customer_segments (Required): Array of string.
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. object.customer_segments[] (Value): string.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". object.merchant_id (Required): string. Identifier of the merchant that
     * owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required):
     * {@link MetadataMap}. Caller-owned metadata stored on this price list. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.name (Required): string. Name used to
     * identify this price list. object.price_count (Required): integer. Number of variant prices
     * in the list. Format: int64. minimum: 0. maximum: 10000. object.price_list_id (Required):
     * string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". object.status (Required): string. Availability or
     * retirement state. Derived as archived when archived_at is set; otherwise active or inactive.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. When
     * this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * archived_at (Required): string or null. When this price list was soft-deleted, as an
         * RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When this price list was created,
         * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency
         * (Required): string. Immutable currency of every price in this list. Currently USD. Uses
         * ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
         * "USD". customer_segments (Required): Array of string. Customer.segment labels assigned
         * to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments[] (Value): string. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". merchant_id (Required): string.
         * Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata stored on this price list. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string. Name used to identify this price list.
         * price_count (Required): integer. Number of variant prices in the list. Format: int64.
         * minimum: 0. maximum: 10000. price_list_id (Required): string. Stable identifier of this
         * price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". status (Required): string. Availability or retirement
         * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
         * enum: "active", "inactive", "archived". updated_at (Required): string. When this price
         * list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Aggregate version, increased once
         * for a request that changes the list or its prices. No-op writes preserve it. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "archived_at": string | null;
            /**
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string;
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * maxItems: 20. uniqueItems: true. [] (Value): string.
             */
            "customer_segments": Array<string>;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this price list. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /** Name used to identify this price list. */
            "name": string;
            /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
            "price_count": number;
            /**
             * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string;
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "price_list.created". */
    "event_type"?: "price_list.created";
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
 * The `price_list.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PriceListCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.archived_at (Required): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When this
     * price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.currency (Required): string. Immutable currency of every
     * price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.customer_segments (Required): Array of string.
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. object.customer_segments[] (Value): string.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". object.merchant_id (Required): string. Identifier of the merchant that
     * owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required):
     * {@link MetadataMap}. Caller-owned metadata stored on this price list. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.name (Required): string. Name used to
     * identify this price list. object.price_count (Required): integer. Number of variant prices
     * in the list. Format: int64. minimum: 0. maximum: 10000. object.price_list_id (Required):
     * string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". object.status (Required): string. Availability or
     * retirement state. Derived as archived when archived_at is set; otherwise active or inactive.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. When
     * this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * archived_at (Required): string or null. When this price list was soft-deleted, as an
         * RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When this price list was created,
         * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency
         * (Required): string. Immutable currency of every price in this list. Currently USD. Uses
         * ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
         * "USD". customer_segments (Required): Array of string. Customer.segment labels assigned
         * to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments[] (Value): string. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". merchant_id (Required): string.
         * Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata stored on this price list. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string. Name used to identify this price list.
         * price_count (Required): integer. Number of variant prices in the list. Format: int64.
         * minimum: 0. maximum: 10000. price_list_id (Required): string. Stable identifier of this
         * price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". status (Required): string. Availability or retirement
         * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
         * enum: "active", "inactive", "archived". updated_at (Required): string. When this price
         * list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Aggregate version, increased once
         * for a request that changes the list or its prices. No-op writes preserve it. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "archived_at": string | null;
            /**
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string;
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * maxItems: 20. uniqueItems: true. [] (Value): string.
             */
            "customer_segments": Array<string>;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this price list. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /** Name used to identify this price list. */
            "name": string;
            /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
            "price_count": number;
            /**
             * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string;
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "price_list.created". */
    "event_type"?: "price_list.created";
});
/** A page of `PriceList` objects. */
export type PriceListListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PriceList}. A merchant-only set of variant prices for individual customers or customer
     * segments.
     */
    "data": Array<PriceList>;
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
/** One variant's base net unit price and quantity schedule within a price list. */
export type PriceListPrice = {
    /**
     * When this price was added, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * Identifier of the price list that owns this price. Example:
     * "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     */
    "price_list_id": string;
    /**
     * Stable identifier of this price within its list. pattern: ^prlp_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prlp_01KEZF7C007DQ721A29CDR73DN".
     */
    "price_list_price_id": string;
    /**
     * Identifier of the product that owns this variant. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /**
     * Up to 10 quantity breaks, ordered by increasing minimum_quantity and strictly decreasing
     * unit price. [] means the base price applies at every quantity. maxItems: 10. [] (Value):
     * {@link QuantityPriceBreak}. A net unit price that applies when one catalog line reaches
     * minimum_quantity.
     */
    "quantity_price_breaks": Array<QuantityPriceBreak>;
    /**
     * Positive base net unit price in the price list's currency, in the currency's smallest unit.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * When this price last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
    /**
     * Identifier of the priced product variant. Bundles and gift cards are not supported. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
    /**
     * Version of this variant price and its quantity schedule. No-op writes preserve it. Format:
     * uint64. minimum: 1.
     */
    "version": number;
};
/** Outcome for one requested variant price. */
export type PriceListPriceAddition = {
    /**
     * Whether the price was created, returned unchanged, or updated. Value enum: "created",
     * "existing", "updated".
     */
    "outcome": "created" | "existing" | "updated" | (string & {});
    /**
     * Price stored for this variant after the request. One variant's base net unit price and
     * quantity schedule within a price list.
     */
    "price_list_price": PriceListPrice;
};
/** A page of `PriceListPrice` objects. */
export type PriceListPriceListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PriceListPrice}. One variant's base net unit price and quantity schedule within a price
     * list.
     */
    "data": Array<PriceListPrice>;
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
/** A variant price to add to a price list. */
export type PriceListPriceRequest = {
    /**
     * Complete quantity schedule, up to 10 breaks. Omit or send [] for no quantity breaks. Each
     * price must be lower than the preceding one. maxItems: 10. [] (Value): {@link
     * QuantityPriceBreak}. A net unit price that applies when one catalog line reaches
     * minimum_quantity.
     */
    "quantity_price_breaks"?: Array<QuantityPriceBreak>;
    /**
     * Positive base net unit price, in the price list's currency. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Product variant to price. Bundles and gift cards are refused. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
};
/** A variant price to add to a price list. */
export type PriceListPriceRequestInput = {
    /**
     * Complete quantity schedule, up to 10 breaks. Omit or send [] for no quantity breaks. Each
     * price must be lower than the preceding one. maxItems: 10. [] (Value): {@link
     * QuantityPriceBreakRequestInput}. A net unit price that applies when one catalog line reaches
     * minimum_quantity.
     */
    "quantity_price_breaks"?: Array<QuantityPriceBreakRequestInput>;
    /**
     * Positive base net unit price, in the price list's currency. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * Product variant to price. Bundles and gift cards are refused. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
};
/** A response containing `PriceListPrice` data. */
export type PriceListPriceResponse = {
    /**
     * Resource, collection, or operation result returned by this request. One variant's base net
     * unit price and quantity schedule within a price list.
     */
    "data": PriceListPrice;
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
/** A response containing `PriceList` data. */
export type PriceListResourceResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A merchant-only set of
     * variant prices for individual customers or customer segments.
     */
    "data": PriceList;
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
export type PriceListUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "archived_at": string | null;
            "created_at": string;
            "currency": string;
            "customer_segments": Array<string>;
            "external_reference_id": string | null;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "price_count": number;
            "price_list_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "archived_at"?: ((string | null) | (null) | (unknown));
            "created_at"?: ((string) | (null));
            "currency"?: ((string) | (null));
            "customer_segments"?: ((Array<string>) | (null));
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "name"?: ((string) | (null));
            "price_count"?: ((number) | (null));
            "price_list_id"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "price_list.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "archived_at": string | null;
            "created_at": string;
            "currency": string;
            "customer_segments": Array<string>;
            "external_reference_id": string | null;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "price_count": number;
            "price_list_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "archived_at"?: ((string | null) | (null) | (unknown));
            "created_at"?: ((string) | (null));
            "currency"?: ((string) | (null));
            "customer_segments"?: ((Array<string>) | (null));
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            "name"?: ((string) | (null));
            "price_count"?: ((number) | (null));
            "price_list_id"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "price_list.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "price_list.updated";
});
/**
 * The `price_list.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PriceListUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.archived_at (Required): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When this
     * price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.currency (Required): string. Immutable currency of every
     * price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.customer_segments (Required): Array of string.
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. object.customer_segments[] (Value): string.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". object.merchant_id (Required): string. Identifier of the merchant that
     * owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required):
     * {@link MetadataMap}. Caller-owned metadata stored on this price list. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.name (Required): string. Name used to
     * identify this price list. object.price_count (Required): integer. Number of variant prices
     * in the list. Format: int64. minimum: 0. maximum: 10000. object.price_list_id (Required):
     * string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". object.status (Required): string. Availability or
     * retirement state. Derived as archived when archived_at is set; otherwise active or inactive.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. When
     * this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events. previous_attributes.archived_at (Optional): string or null or null. When this price
     * list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived.
     * previous_attributes.archived_at.anyOf[1] (Value): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.archived_at.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. When this price
     * list was created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1] (Value):
     * string. When this price list was created, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.currency (Optional): string or null. Immutable currency of every price
     * in this list. Currently USD. Uses ISO 4217 currency codes.
     * previous_attributes.currency.anyOf[1] (Value): string. Immutable currency of every price in
     * this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD". previous_attributes.currency.anyOf[2] (Value): null.
     * previous_attributes.customer_segments (Optional): Array of string or null. Customer.segment
     * labels assigned to this list. Empty when no segments are assigned.
     * previous_attributes.customer_segments.anyOf[1] (Value): Array of string. Customer.segment
     * labels assigned to this list. Empty when no segments are assigned. maxItems: 20.
     * uniqueItems: true. previous_attributes.customer_segments.anyOf[1][] (Value): string.
     * previous_attributes.customer_segments.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null or null. Caller-owned
     * identifier for this resource in an external system. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string or null. Caller-owned
     * identifier for this resource in an external system. `null` when unset. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this price list. previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier
     * of the merchant that owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on this price list.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Name used to identify this price list. previous_attributes.name.anyOf[1]
     * (Value): string. Name used to identify this price list. previous_attributes.name.anyOf[2]
     * (Value): null. previous_attributes.price_count (Optional): integer or null. Number of
     * variant prices in the list. previous_attributes.price_count.anyOf[1] (Value): integer.
     * Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000.
     * previous_attributes.price_count.anyOf[2] (Value): null. previous_attributes.price_list_id
     * (Optional): string or null. Stable identifier of this price list.
     * previous_attributes.price_list_id.anyOf[1] (Value): string. Stable identifier of this price
     * list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * previous_attributes.price_list_id.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Availability or retirement state. Derived as archived when
     * archived_at is set; otherwise active or inactive. Value enum: "active", "inactive",
     * "archived". previous_attributes.status.anyOf[1] (Value): string. Availability or retirement
     * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
     * enum: "active", "inactive", "archived". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When this price list or its
     * prices last changed, as an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. When this price list or its prices last changed, as an RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * previous_attributes.version.anyOf[1] (Value): integer. Aggregate version, increased once for
     * a request that changes the list or its prices. No-op writes preserve it. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * archived_at (Required): string or null. When this price list was soft-deleted, as an
         * RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When this price list was created,
         * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency
         * (Required): string. Immutable currency of every price in this list. Currently USD. Uses
         * ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
         * "USD". customer_segments (Required): Array of string. Customer.segment labels assigned
         * to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments[] (Value): string. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". merchant_id (Required): string.
         * Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata stored on this price list. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string. Name used to identify this price list.
         * price_count (Required): integer. Number of variant prices in the list. Format: int64.
         * minimum: 0. maximum: 10000. price_list_id (Required): string. Stable identifier of this
         * price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". status (Required): string. Availability or retirement
         * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
         * enum: "active", "inactive", "archived". updated_at (Required): string. When this price
         * list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Aggregate version, increased once
         * for a request that changes the list or its prices. No-op writes preserve it. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "archived_at": string | null;
            /**
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string;
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * maxItems: 20. uniqueItems: true. [] (Value): string.
             */
            "customer_segments": Array<string>;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this price list. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /** Name used to identify this price list. */
            "name": string;
            /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
            "price_count": number;
            /**
             * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string;
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. archived_at (Optional): string or null or null.
         * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
         * been archived. archived_at.anyOf[1] (Value): string or null. When this price list was
         * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". archived_at.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When this price list was created, as an RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. When this price list was created, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. currency (Optional): string or null. Immutable
         * currency of every price in this list. Currently USD. Uses ISO 4217 currency codes.
         * currency.anyOf[1] (Value): string. Immutable currency of every price in this list.
         * Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern:
         * ^[A-Z]{3}$. Example: "USD". currency.anyOf[2] (Value): null. customer_segments
         * (Optional): Array of string or null. Customer.segment labels assigned to this list.
         * Empty when no segments are assigned. customer_segments.anyOf[1] (Value): Array of
         * string. Customer.segment labels assigned to this list. Empty when no segments are
         * assigned. maxItems: 20. uniqueItems: true. customer_segments.anyOf[1][] (Value): string.
         * customer_segments.anyOf[2] (Value): null. external_reference_id (Optional): string or
         * null or null. Caller-owned identifier for this resource in an external system. `null`
         * when unset. external_reference_id.anyOf[1] (Value): string or null. Caller-owned
         * identifier for this resource in an external system. `null` when unset. minLength: 1.
         * maxLength: 255. Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * merchant_id (Optional): string or null. Identifier of the merchant that owns this price
         * list. merchant_id.anyOf[1] (Value): string. Identifier of the merchant that owns this
         * price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value):
         * null. metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on
         * this price list. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2]
         * (Value): null. name (Optional): string or null. Name used to identify this price list.
         * name.anyOf[1] (Value): string. Name used to identify this price list. name.anyOf[2]
         * (Value): null. price_count (Optional): integer or null. Number of variant prices in the
         * list. price_count.anyOf[1] (Value): integer. Number of variant prices in the list.
         * Format: int64. minimum: 0. maximum: 10000. price_count.anyOf[2] (Value): null.
         * price_list_id (Optional): string or null. Stable identifier of this price list.
         * price_list_id.anyOf[1] (Value): string. Stable identifier of this price list. pattern:
         * ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
         * price_list_id.anyOf[2] (Value): null. status (Optional): string or null. Availability or
         * retirement state. Derived as archived when archived_at is set; otherwise active or
         * inactive. Value enum: "active", "inactive", "archived". status.anyOf[1] (Value): string.
         * Availability or retirement state. Derived as archived when archived_at is set; otherwise
         * active or inactive. Value enum: "active", "inactive", "archived". status.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. When this price list or its prices
         * last changed, as an RFC3339 timestamp. updated_at.anyOf[1] (Value): string. When this
         * price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Aggregate version, increased once for a request that changes the list
         * or its prices. No-op writes preserve it. version.anyOf[1] (Value): integer. Aggregate
         * version, increased once for a request that changes the list or its prices. No-op writes
         * preserve it. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. anyOf[1] (Value): string or null. When this price list was
             * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "archived_at"?: ((string | null) | (null) | (unknown));
            /**
             * When this price list was created, as an RFC3339 timestamp. anyOf[1] (Value): string.
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. anyOf[1] (Value): string. Immutable currency of every price in this
             * list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
             * pattern: ^[A-Z]{3}$. Example: "USD". anyOf[2] (Value): null.
             */
            "currency"?: ((string) | (null));
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * anyOf[1] (Value): Array of string. Customer.segment labels assigned to this list.
             * Empty when no segments are assigned. maxItems: 20. uniqueItems: true. anyOf[1][]
             * (Value): string. anyOf[2] (Value): null.
             */
            "customer_segments"?: ((Array<string>) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * anyOf[1] (Value): string or null. Caller-owned identifier for this resource in an
             * external system. `null` when unset. minLength: 1. maxLength: 255. Example:
             * "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            /**
             * Identifier of the merchant that owns this price list. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata stored on this price list. anyOf[1] (Value): {@link
             * MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * Name used to identify this price list. anyOf[1] (Value): string. Name used to
             * identify this price list. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Number of variant prices in the list. anyOf[1] (Value): integer. Number of variant
             * prices in the list. Format: int64. minimum: 0. maximum: 10000. anyOf[2] (Value):
             * null.
             */
            "price_count"?: ((number) | (null));
            /**
             * Stable identifier of this price list. anyOf[1] (Value): string. Stable identifier of
             * this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "prl_01KEZF7C00EH39P59GN3XMGS2Q". anyOf[2] (Value): null.
             */
            "price_list_id"?: ((string) | (null));
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived". anyOf[1]
             * (Value): string. Availability or retirement state. Derived as archived when
             * archived_at is set; otherwise active or inactive. Value enum: "active", "inactive",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. anyOf[1]
             * (Value): string. When this price list or its prices last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. anyOf[1] (Value): integer. Aggregate version, increased
             * once for a request that changes the list or its prices. No-op writes preserve it.
             * Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "price_list.updated". */
    "event_type"?: "price_list.updated";
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
 * The `price_list.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PriceListUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.archived_at (Required): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When this
     * price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.currency (Required): string. Immutable currency of every
     * price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.customer_segments (Required): Array of string.
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. object.customer_segments[] (Value): string.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". object.merchant_id (Required): string. Identifier of the merchant that
     * owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required):
     * {@link MetadataMap}. Caller-owned metadata stored on this price list. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.name (Required): string. Name used to
     * identify this price list. object.price_count (Required): integer. Number of variant prices
     * in the list. Format: int64. minimum: 0. maximum: 10000. object.price_list_id (Required):
     * string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". object.status (Required): string. Availability or
     * retirement state. Derived as archived when archived_at is set; otherwise active or inactive.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. When
     * this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events. previous_attributes.archived_at (Optional): string or null or null. When this price
     * list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived.
     * previous_attributes.archived_at.anyOf[1] (Value): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.archived_at.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. When this price
     * list was created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1] (Value):
     * string. When this price list was created, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.currency (Optional): string or null. Immutable currency of every price
     * in this list. Currently USD. Uses ISO 4217 currency codes.
     * previous_attributes.currency.anyOf[1] (Value): string. Immutable currency of every price in
     * this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD". previous_attributes.currency.anyOf[2] (Value): null.
     * previous_attributes.customer_segments (Optional): Array of string or null. Customer.segment
     * labels assigned to this list. Empty when no segments are assigned.
     * previous_attributes.customer_segments.anyOf[1] (Value): Array of string. Customer.segment
     * labels assigned to this list. Empty when no segments are assigned. maxItems: 20.
     * uniqueItems: true. previous_attributes.customer_segments.anyOf[1][] (Value): string.
     * previous_attributes.customer_segments.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null or null. Caller-owned
     * identifier for this resource in an external system. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string or null. Caller-owned
     * identifier for this resource in an external system. `null` when unset. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this price list. previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier
     * of the merchant that owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on this price list.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Name used to identify this price list. previous_attributes.name.anyOf[1]
     * (Value): string. Name used to identify this price list. previous_attributes.name.anyOf[2]
     * (Value): null. previous_attributes.price_count (Optional): integer or null. Number of
     * variant prices in the list. previous_attributes.price_count.anyOf[1] (Value): integer.
     * Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000.
     * previous_attributes.price_count.anyOf[2] (Value): null. previous_attributes.price_list_id
     * (Optional): string or null. Stable identifier of this price list.
     * previous_attributes.price_list_id.anyOf[1] (Value): string. Stable identifier of this price
     * list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * previous_attributes.price_list_id.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Availability or retirement state. Derived as archived when
     * archived_at is set; otherwise active or inactive. Value enum: "active", "inactive",
     * "archived". previous_attributes.status.anyOf[1] (Value): string. Availability or retirement
     * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
     * enum: "active", "inactive", "archived". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When this price list or its
     * prices last changed, as an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. When this price list or its prices last changed, as an RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * previous_attributes.version.anyOf[1] (Value): integer. Aggregate version, increased once for
     * a request that changes the list or its prices. No-op writes preserve it. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * archived_at (Required): string or null. When this price list was soft-deleted, as an
         * RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When this price list was created,
         * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency
         * (Required): string. Immutable currency of every price in this list. Currently USD. Uses
         * ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
         * "USD". customer_segments (Required): Array of string. Customer.segment labels assigned
         * to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments[] (Value): string. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". merchant_id (Required): string.
         * Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata stored on this price list. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string. Name used to identify this price list.
         * price_count (Required): integer. Number of variant prices in the list. Format: int64.
         * minimum: 0. maximum: 10000. price_list_id (Required): string. Stable identifier of this
         * price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". status (Required): string. Availability or retirement
         * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
         * enum: "active", "inactive", "archived". updated_at (Required): string. When this price
         * list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Aggregate version, increased once
         * for a request that changes the list or its prices. No-op writes preserve it. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "archived_at": string | null;
            /**
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string;
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * maxItems: 20. uniqueItems: true. [] (Value): string.
             */
            "customer_segments": Array<string>;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this price list. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /** Name used to identify this price list. */
            "name": string;
            /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
            "price_count": number;
            /**
             * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string;
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. archived_at (Optional): string or null or null.
         * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
         * been archived. archived_at.anyOf[1] (Value): string or null. When this price list was
         * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". archived_at.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When this price list was created, as an RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. When this price list was created, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. currency (Optional): string or null. Immutable
         * currency of every price in this list. Currently USD. Uses ISO 4217 currency codes.
         * currency.anyOf[1] (Value): string. Immutable currency of every price in this list.
         * Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern:
         * ^[A-Z]{3}$. Example: "USD". currency.anyOf[2] (Value): null. customer_segments
         * (Optional): Array of string or null. Customer.segment labels assigned to this list.
         * Empty when no segments are assigned. customer_segments.anyOf[1] (Value): Array of
         * string. Customer.segment labels assigned to this list. Empty when no segments are
         * assigned. maxItems: 20. uniqueItems: true. customer_segments.anyOf[1][] (Value): string.
         * customer_segments.anyOf[2] (Value): null. external_reference_id (Optional): string or
         * null or null. Caller-owned identifier for this resource in an external system. `null`
         * when unset. external_reference_id.anyOf[1] (Value): string or null. Caller-owned
         * identifier for this resource in an external system. `null` when unset. minLength: 1.
         * maxLength: 255. Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * merchant_id (Optional): string or null. Identifier of the merchant that owns this price
         * list. merchant_id.anyOf[1] (Value): string. Identifier of the merchant that owns this
         * price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value):
         * null. metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on
         * this price list. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2]
         * (Value): null. name (Optional): string or null. Name used to identify this price list.
         * name.anyOf[1] (Value): string. Name used to identify this price list. name.anyOf[2]
         * (Value): null. price_count (Optional): integer or null. Number of variant prices in the
         * list. price_count.anyOf[1] (Value): integer. Number of variant prices in the list.
         * Format: int64. minimum: 0. maximum: 10000. price_count.anyOf[2] (Value): null.
         * price_list_id (Optional): string or null. Stable identifier of this price list.
         * price_list_id.anyOf[1] (Value): string. Stable identifier of this price list. pattern:
         * ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
         * price_list_id.anyOf[2] (Value): null. status (Optional): string or null. Availability or
         * retirement state. Derived as archived when archived_at is set; otherwise active or
         * inactive. Value enum: "active", "inactive", "archived". status.anyOf[1] (Value): string.
         * Availability or retirement state. Derived as archived when archived_at is set; otherwise
         * active or inactive. Value enum: "active", "inactive", "archived". status.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. When this price list or its prices
         * last changed, as an RFC3339 timestamp. updated_at.anyOf[1] (Value): string. When this
         * price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Aggregate version, increased once for a request that changes the list
         * or its prices. No-op writes preserve it. version.anyOf[1] (Value): integer. Aggregate
         * version, increased once for a request that changes the list or its prices. No-op writes
         * preserve it. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. anyOf[1] (Value): string or null. When this price list was
             * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "archived_at"?: ((string | null) | (null) | (unknown));
            /**
             * When this price list was created, as an RFC3339 timestamp. anyOf[1] (Value): string.
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. anyOf[1] (Value): string. Immutable currency of every price in this
             * list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
             * pattern: ^[A-Z]{3}$. Example: "USD". anyOf[2] (Value): null.
             */
            "currency"?: ((string) | (null));
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * anyOf[1] (Value): Array of string. Customer.segment labels assigned to this list.
             * Empty when no segments are assigned. maxItems: 20. uniqueItems: true. anyOf[1][]
             * (Value): string. anyOf[2] (Value): null.
             */
            "customer_segments"?: ((Array<string>) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * anyOf[1] (Value): string or null. Caller-owned identifier for this resource in an
             * external system. `null` when unset. minLength: 1. maxLength: 255. Example:
             * "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string | null) | (null) | (unknown));
            /**
             * Identifier of the merchant that owns this price list. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata stored on this price list. anyOf[1] (Value): {@link
             * MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null) | (unknown));
            /**
             * Name used to identify this price list. anyOf[1] (Value): string. Name used to
             * identify this price list. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Number of variant prices in the list. anyOf[1] (Value): integer. Number of variant
             * prices in the list. Format: int64. minimum: 0. maximum: 10000. anyOf[2] (Value):
             * null.
             */
            "price_count"?: ((number) | (null));
            /**
             * Stable identifier of this price list. anyOf[1] (Value): string. Stable identifier of
             * this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "prl_01KEZF7C00EH39P59GN3XMGS2Q". anyOf[2] (Value): null.
             */
            "price_list_id"?: ((string) | (null));
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived". anyOf[1]
             * (Value): string. Availability or retirement state. Derived as archived when
             * archived_at is set; otherwise active or inactive. Value enum: "active", "inactive",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. anyOf[1]
             * (Value): string. When this price list or its prices last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. anyOf[1] (Value): integer. Aggregate version, increased
             * once for a request that changes the list or its prices. No-op writes preserve it.
             * Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "price_list.updated". */
    "event_type"?: "price_list.updated";
});
export type PriceListsCreateParams = (InputValue<CreatePriceListRequestInput>)
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
export type PriceListsCreatePricesParams = (InputValue<CreatePriceListPricesRequestInput>)
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
export type PriceListsDeleteParams = {
    /** Version last read by the caller. Format: uint64. minimum: 1. maximum: 9007199254740991. */
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
export type PriceListsDeletePriceParams = PriceListsDeleteParams;
export type PriceListsGetParams = DisputesAcceptParams;
export type PriceListsGetPriceParams = DisputesAcceptParams;
export type PriceListsListParams = {
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
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /** Exact match on a Customer.segment label assigned to this price list. */
    "customer_segment"?: InputValue<string>;
    /**
     * Exact match on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across price list ID, name, and external reference ID. Text fields match any part of
     * the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start
     * and need the type prefix, such as prl_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by price_list_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "name".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
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
