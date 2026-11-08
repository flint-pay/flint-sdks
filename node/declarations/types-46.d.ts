import type { PaymentSourceAchDebitSummary, PaymentSourceCardSummary } from './types-45.js';
import type { MoneyValue, MoneyMovementListMeta, MoneyMovementBlockedReason, NextAction } from './types-37.js';
import type { ResponseMeta } from './types-51.js';
import type { ExpandedPayoutDestinationSummary, ExpandedPayoutSummary } from './types-23.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-36.js';
import type { PartnerWebhookEnvelope } from './types-42.js';
import type { InputValue } from '../runtime.js';
import type { DisputesAcceptParams } from './types-22.js';
import type { UpdatePayoutDestinationRequestInput, UpdatePayoutSettingsRequestInput } from './types-64.js';
import type { CancelPayoutRequestInput } from './types-4.js';
import type { CreatePayoutRequestInput } from './types-11.js';
import type { PaymentClientAction } from './types-43.js';
import type { PendingPaymentActionSubject } from './types-47.js';
/** The `payment_method` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialPaymentMethodInput = {
    /** Value enum: "payment_method". */
    "credential_type": "payment_method";
    /**
     * Whether the customer is present for this payment. Defaults to present. Send absent to charge
     * a saved card while the customer is away, such as for a no-show fee, damages, or a top-up.
     * Flint then sends the charge to the card network as merchant-initiated, using the card's
     * stored credential, so the bank can't ask the customer to authenticate. absent can be sent
     * only with an API key or partner token, and only for a saved card whose usage is off_session;
     * a card the customer saved for checkout only returns 409 ACTION_NOT_ALLOWED with reason
     * payment_method_not_reusable. If the bank still requires authentication, the payment fails
     * with status requires_payment_method and last_payment_error.code authentication_required. Ask
     * the customer to pay while present instead of retrying. Default: "present". Value enum:
     * "present", "absent".
     */
    "customer_presence"?: "present" | "absent";
    /**
     * Saved Flint payment method ID belonging to the customer making this payment. minLength: 1.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string;
};
/** The `stripe_confirmation_token` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialStripeConfirmationToken = {
    /** Value enum: "stripe_confirmation_token". */
    "credential_type": "stripe_confirmation_token" | (string & {});
    /**
     * Stripe credential collected for this payment. confirmation_token (Required): string. Stripe
     * confirmation token you created with Stripe.js from `payment_collection.stripe`. minLength:
     * 1.
     */
    "stripe": {
        /**
         * Stripe confirmation token you created with Stripe.js from `payment_collection.stripe`.
         * minLength: 1.
         */
        "confirmation_token": string;
    };
};
/** The `stripe_confirmation_token` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialStripeConfirmationTokenInput = {
    /** Value enum: "stripe_confirmation_token". */
    "credential_type": "stripe_confirmation_token";
    /**
     * Stripe credential collected for this payment. confirmation_token (Required): string. Stripe
     * confirmation token you created with Stripe.js from `payment_collection.stripe`. minLength:
     * 1.
     */
    "stripe": {
        /**
         * Stripe confirmation token you created with Stripe.js from `payment_collection.stripe`.
         * minLength: 1.
         */
        "confirmation_token": string;
    };
};
/** The `token` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialToken = {
    /** Value enum: "token". */
    "credential_type": "token" | (string & {});
    /** Opaque processor or browser payment source token. minLength: 1. */
    "token": string;
};
/** The `token` variant of `PaymentSourceCredential`. */
export type PaymentSourceCredentialTokenInput = {
    /** Value enum: "token". */
    "credential_type": "token";
    /** Opaque processor or browser payment source token. minLength: 1. */
    "token": string;
};
/**
 * A summary of the payment source used for a payment, by funding-method family, with card or bank
 * account display details.
 */
export type PaymentSourceSummary = {
    /**
     * Display details for a bank account payment source: account type, bank name, and last four
     * digits.
     */
    "ach_debit"?: PaymentSourceAchDebitSummary;
    /**
     * Display details for a card payment source: brand, last four digits, and payment method ID.
     */
    "card"?: PaymentSourceCardSummary;
    /**
     * Funding-method family. Wallet payment options use card because their underlying funding
     * source is a card. Value enum: "card", "ach_debit", "affirm".
     */
    "type": "card" | "ach_debit" | "affirm" | (string & {});
};
/**
 * The half-open period [period_start_at, period_end_at) includes its start and excludes its end.
 * Amounts and payments_count use currency; customer and subscription counts span currencies.
 */
export type PaymentVolumeBucket = {
    /**
     * Succeeded payments selected by payment created_at within this bucket, restricted to the
     * response currency. The half-open period [period_start_at, period_end_at) includes its start
     * and excludes its end. Amounts and payments_count use currency; customer and subscription
     * counts span currencies. Format: int64.
     */
    "payments_count": number;
    /**
     * Exclusive bucket end instant, clipped to the resolved period. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "period_end_at": string;
    /**
     * Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "period_start_at": string;
    /**
     * Succeeded payment amounts selected by payment created_at within this bucket, in the response
     * currency. The half-open period [period_start_at, period_end_at) includes its start and
     * excludes its end. Amounts and payments_count use currency; customer and subscription counts
     * span currencies. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "volume_money": MoneyValue;
};
/**
 * The half-open period [period_start_at, period_end_at) includes its start and excludes its end.
 * Amounts and payments_count use currency; customer and subscription counts span currencies.
 */
export type PaymentVolumeTimeseries = {
    /**
     * Payment created_at buckets clipped to the period, including empty buckets. Repeated local
     * hours produce two buckets; skipped hours and days produce none. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. [] (Value):
     * {@link PaymentVolumeBucket}. The half-open period [period_start_at, period_end_at) includes
     * its start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies.
     */
    "buckets": Array<PaymentVolumeBucket>;
    /**
     * Currencies of succeeded payments selected by payment created_at or counted refunds selected
     * by refund created_at in the period, regardless of the currency filter. Empty when neither
     * has rows. The half-open period [period_start_at, period_end_at) includes its start and
     * excludes its end. Amounts and payments_count use currency; customer and subscription counts
     * span currencies. [] (Value): string.
     */
    "currencies": Array<string>;
    /**
     * ISO 4217 currency for amounts and payment counts. Defaults to the merchant's default
     * currency. The half-open period [period_start_at, period_end_at) includes its start and
     * excludes its end. Amounts and payments_count use currency; customer and subscription counts
     * span currencies. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Local bucket size: hour, day, week starting Monday, or month. Defaults to day. The half-open
     * period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. Value enum:
     * "hour", "day", "week", "month".
     */
    "granularity": "hour" | "day" | "week" | "month" | (string & {});
    /**
     * Exclusive resolved end instant. Omitted or future request ends resolve to the request time
     * truncated to the second. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "period_end_at": string;
    /**
     * Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "period_start_at": string;
    /**
     * IANA timezone used only for local bucket boundaries. Defaults to the merchant's timezone,
     * then UTC. The half-open period [period_start_at, period_end_at) includes its start and
     * excludes its end. Amounts and payments_count use currency; customer and subscription counts
     * span currencies.
     */
    "timezone": string;
};
/** A response containing `PaymentVolumeTimeseries` data. */
export type PaymentVolumeTimeseriesResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies.
     */
    "data": PaymentVolumeTimeseries;
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
/** Funds sent from a merchant balance to a payout destination. */
export type Payout = {
    /**
     * Amount sent to your bank. Always positive. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC
     * date of the expected arrival. Format: date. Example: "2026-08-02".
     */
    "arrival_date"?: string;
    /**
     * Balance source this payout draws from. Flint chooses the source when balance_source_type is
     * omitted at create. Clients must accept source types added in future releases. Value enum:
     * "card", "bank_account".
     */
    "balance_source_type": "card" | "bank_account" | (string & {});
    /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /** Description sent when the payout was created. Absent when there is none. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Flint-normalized payout failure code. Unknown provider values are returned as payout_failed.
     * Value enum: "account_closed", "account_frozen", "bank_account_restricted",
     * "bank_ownership_changed", "could_not_process", "debit_not_authorized", "declined",
     * "insufficient_funds", "invalid_account_number", "incorrect_account_holder_name",
     * "incorrect_account_holder_address", "incorrect_account_holder_tax_id", "invalid_currency",
     * "no_account", "unsupported_card", "payout_failed".
     */
    "failure_code"?: "account_closed"
        | "account_frozen"
        | "bank_account_restricted"
        | "bank_ownership_changed"
        | "could_not_process"
        | "debit_not_authorized"
        | "declined"
        | "insufficient_funds"
        | "invalid_account_number"
        | "incorrect_account_holder_name"
        | "incorrect_account_holder_address"
        | "incorrect_account_holder_tax_id"
        | "invalid_currency"
        | "no_account"
        | "unsupported_card"
        | "payout_failed"
        | (string & {});
    /**
     * Flint-authored payout failure message. This is stable explanatory text, not a raw provider
     * message.
     */
    "failure_message"?: string;
    /**
     * Whether the payout fee is estimated or final. not_applicable means no applicable fee status
     * is known, including unmapped fee states. Value enum: "estimated", "final", "not_applicable".
     */
    "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
    /**
     * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your processor
     * records the payout. `null` when your processor hasn't recorded the payout yet. anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. anyOf[2] (Value): null.
     */
    "fee_money": ((MoneyValue) | (null));
    /**
     * What started the payout. A payout imported from your processor follows the processor:
     * scheduled when it sent the payout automatically, otherwise manual. Only scheduled payouts
     * list their balance transactions through GET /v1/balance-transactions?payout_id=; other
     * payouts return 409 with reason not_itemized. Unmapped sources are returned as other. Value
     * enum: "manual", "scheduled", "platform", "other".
     */
    "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
    /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears
     * only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a
     * method Flint doesn't map. Value enum: "standard", "instant", "other".
     */
    "method": "standard" | "instant" | "other" | (string & {});
    /**
     * Signed effect of this payout on your Flint balance. It is negative because the payout takes
     * money out: a 25000 payout with no fee has net_money -25000. `null` when your processor
     * hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "net_money": ((MoneyValue) | (null));
    /**
     * The payout this one reverses, inlined when you request expand=original_payout. null when
     * expanded and original_payout_id is absent. Present only when `expand` includes
     * `original_payout`; `null` when expanded and there is no related payout. anyOf[1] (Value):
     * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status,
     * and arrival date, returned when the payout is expanded. anyOf[2] (Value): null.
     */
    "original_payout"?: ((ExpandedPayoutSummary) | (null));
    /**
     * On a payout that reverses another payout, the payout it reverses. Present only when Flint
     * has the matching original payout. A payout has at most one of original_payout_id and
     * reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     */
    "original_payout_id"?: string;
    /**
     * The payout destination, inlined when you request expand=payout_destination. null when
     * expanded and payout_destination_id is absent. Present only when `expand` includes
     * `payout_destination`; `null` when expanded and there is no related payout destination.
     * anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout destination's summary
     * fields, such as type, bank name, last four digits, and status, returned when the destination
     * is expanded. anyOf[2] (Value): null.
     */
    "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
    /**
     * Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
     */
    "payout_destination_id"?: string;
    /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
    "payout_id": string;
    /**
     * Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed".
     */
    "reversal_status": "none" | "reversed" | (string & {});
    /**
     * The payout reversing this one, inlined when you request expand=reversed_by_payout. null when
     * expanded and reversed_by_payout_id is absent. Present only when `expand` includes
     * `reversed_by_payout`; `null` when expanded and there is no related payout. anyOf[1] (Value):
     * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status,
     * and arrival date, returned when the payout is expanded. anyOf[2] (Value): null.
     */
    "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
    /**
     * The separate payout reversing this one, when Flint has the matching payout. Its presence
     * does not mean the reversal has completed; read reversal_status. A payout has at most one of
     * original_payout_id and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     */
    "reversed_by_payout_id"?: string;
    /** Text shown on your bank statement for the deposit, when one was set. */
    "statement_descriptor"?: string;
    /**
     * Where the payout is: pending until it is sent, in_transit on its way to your bank, then
     * succeeded or failed. A succeeded payout can still become failed if the bank returns the
     * deposit, and canceled means a manual payout was canceled while pending. Value enum:
     * "pending", "in_transit", "succeeded", "failed", "canceled".
     */
    "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
    /**
     * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending unless it
     * was scheduled automatically. [] enum: "cancel". [] (Value): string. Value enum: "cancel".
     */
    "supported_actions": Array<"cancel" | (string & {})>;
    /**
     * The bank's trace number for the deposit, which your bank can use to locate a late deposit.
     * Its status says whether the number is pending, available, or unsupported, and value holds
     * the number when Flint has it. Absent when Flint has no trace information. A payout's bank
     * trace ID, with whether it is pending, available, or unsupported.
     */
    "trace_id"?: PayoutTraceID;
    /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
export type PayoutCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout.canceled";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout.canceled";
});
/**
 * The `payout.canceled` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type PayoutCanceledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout.canceled". */
    "event_type"?: "payout.canceled";
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
 * The `payout.canceled` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type PayoutCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout.canceled". */
    "event_type"?: "payout.canceled";
});
export type PayoutCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout.created";
});
/**
 * The `payout.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type PayoutCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout.created". */
    "event_type"?: "payout.created";
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
 * The `payout.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type PayoutCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout.created". */
    "event_type"?: "payout.created";
});
/** The account that receives merchant payouts. */
export type PayoutDestination = {
    /**
     * Payout methods available through Flint for this destination. Only standard is currently
     * available. [] enum: "standard". [] (Value): string. Value enum: "standard".
     */
    "available_payout_methods": Array<"standard" | (string & {})>;
    /** Name of the bank, when your processor reports it. */
    "bank_name"?: string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country"?: string;
    /** When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * When the destination was last disabled or archived. Absent if it never was. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "disabled_at"?: string;
    /**
     * Flint-normalized reason the payout destination cannot currently be used. Unknown
     * provider/backend values are returned as destination_unavailable. Value enum:
     * "destination_disabled", "destination_removed", "destination_unavailable",
     * "destination_rejected", "destination_under_review", "requirements_past_due",
     * "requirements_pending_verification".
     */
    "disabled_reason"?: "destination_disabled"
        | "destination_removed"
        | "destination_unavailable"
        | "destination_rejected"
        | "destination_under_review"
        | "requirements_past_due"
        | "requirements_pending_verification"
        | (string & {});
    /**
     * Whether this is the default destination for its currency. Scheduled payouts, and payouts
     * created without payout_destination_id, go to the default, and only an active destination can
     * be it.
     */
    "is_default_for_currency": boolean;
    /** Last four digits of the account or card number. */
    "last4"?: string;
    /** Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Stable identifier of the payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". */
    "payout_destination_id": string;
    /**
     * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     */
    "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
    /**
     * When Flint last recorded the destination's status. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "status_updated_at"?: string;
    /**
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other".
     */
    "type": "bank_account" | "debit_card" | "other" | (string & {});
    /** When the destination last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type PayoutDestinationArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_payout_methods": Array<"standard" | (string & {})>;
            "bank_name"?: string;
            "country"?: string;
            "created_at": string;
            "currency": string;
            "disabled_at"?: string;
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            "is_default_for_currency": boolean;
            "last4"?: string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "payout_destination_id": string;
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            "status_updated_at"?: string;
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout_destination.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_payout_methods": Array<"standard" | (string & {})>;
            "bank_name"?: string;
            "country"?: string;
            "created_at": string;
            "currency": string;
            "disabled_at"?: string;
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            "is_default_for_currency": boolean;
            "last4"?: string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "payout_destination_id": string;
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            "status_updated_at"?: string;
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout_destination.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout_destination.archived";
});
/**
 * The `payout_destination.archived` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PayoutDestinationArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_payout_methods (Required): Array of string. Payout
     * methods available through Flint for this destination. Only standard is currently available.
     * [] enum: "standard". object.available_payout_methods[] (Value): string. Value enum:
     * "standard". object.bank_name (Optional): string. Name of the bank, when your processor
     * reports it. object.country (Optional): string. ISO 3166-1 alpha-2 country code. minLength:
     * 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". object.created_at (Required): string.
     * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.disabled_at (Optional): string. When the
     * destination was last disabled or archived. Absent if it never was. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.disabled_reason (Optional): string. Flint-normalized
     * reason the payout destination cannot currently be used. Unknown provider/backend values are
     * returned as destination_unavailable. Value enum: "destination_disabled",
     * "destination_removed", "destination_unavailable", "destination_rejected",
     * "destination_under_review", "requirements_past_due", "requirements_pending_verification".
     * object.is_default_for_currency (Required): boolean. Whether this is the default destination
     * for its currency. Scheduled payouts, and payouts created without payout_destination_id, go
     * to the default, and only an active destination can be it. object.last4 (Optional): string.
     * Last four digits of the account or card number. object.merchant_id (Required): string.
     * Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.payout_destination_id (Required): string. Stable identifier of the
     * payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.status (Required):
     * string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     * object.status_updated_at (Optional): string. When Flint last recorded the destination's
     * status. Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string.
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other". object.updated_at (Required): string. When the
     * destination last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Persisted version of this resource's owned state. Expanded resources
     * and external observations can change independently. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_payout_methods (Required): Array of string. Payout methods available through
         * Flint for this destination. Only standard is currently available. [] enum: "standard".
         * available_payout_methods[] (Value): string. Value enum: "standard". bank_name
         * (Optional): string. Name of the bank, when your processor reports it. country
         * (Optional): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
         * pattern: ^[A-Z]{2}$. Example: "US". created_at (Required): string. When the destination
         * was added. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". disabled_at (Optional): string. When the destination was last disabled
         * or archived. Absent if it never was. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * disabled_reason (Optional): string. Flint-normalized reason the payout destination
         * cannot currently be used. Unknown provider/backend values are returned as
         * destination_unavailable. Value enum: "destination_disabled", "destination_removed",
         * "destination_unavailable", "destination_rejected", "destination_under_review",
         * "requirements_past_due", "requirements_pending_verification". is_default_for_currency
         * (Required): boolean. Whether this is the default destination for its currency. Scheduled
         * payouts, and payouts created without payout_destination_id, go to the default, and only
         * an active destination can be it. last4 (Optional): string. Last four digits of the
         * account or card number. merchant_id (Required): string. Merchant that owns the
         * destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * payout_destination_id (Required): string. Stable identifier of the payout destination.
         * Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". status (Required): string. Current status.
         * Archived: deleted, and still readable by ID. Value enum: "pending", "active",
         * "verification_required", "disabled", "archived", "failed". status_updated_at (Optional):
         * string. When Flint last recorded the destination's status. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. Destination type. Unmapped destination
         * types are returned as other. Value enum: "bank_account", "debit_card", "other".
         * updated_at (Required): string. When the destination last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Payout methods available through Flint for this destination. Only standard is
             * currently available. [] enum: "standard". [] (Value): string. Value enum:
             * "standard".
             */
            "available_payout_methods": Array<"standard" | (string & {})>;
            /** Name of the bank, when your processor reports it. */
            "bank_name"?: string;
            /**
             * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
             * Example: "US".
             */
            "country"?: string;
            /**
             * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * When the destination was last disabled or archived. Absent if it never was. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "disabled_at"?: string;
            /**
             * Flint-normalized reason the payout destination cannot currently be used. Unknown
             * provider/backend values are returned as destination_unavailable. Value enum:
             * "destination_disabled", "destination_removed", "destination_unavailable",
             * "destination_rejected", "destination_under_review", "requirements_past_due",
             * "requirements_pending_verification".
             */
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            /**
             * Whether this is the default destination for its currency. Scheduled payouts, and
             * payouts created without payout_destination_id, go to the default, and only an active
             * destination can be it.
             */
            "is_default_for_currency": boolean;
            /** Last four digits of the account or card number. */
            "last4"?: string;
            /** Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Stable identifier of the payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id": string;
            /**
             * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
             * "active", "verification_required", "disabled", "archived", "failed".
             */
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            /**
             * When Flint last recorded the destination's status. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "status_updated_at"?: string;
            /**
             * Destination type. Unmapped destination types are returned as other. Value enum:
             * "bank_account", "debit_card", "other".
             */
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            /**
             * When the destination last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout_destination.archived". */
    "event_type"?: "payout_destination.archived";
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
 * The `payout_destination.archived` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type PayoutDestinationArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_payout_methods (Required): Array of string. Payout
     * methods available through Flint for this destination. Only standard is currently available.
     * [] enum: "standard". object.available_payout_methods[] (Value): string. Value enum:
     * "standard". object.bank_name (Optional): string. Name of the bank, when your processor
     * reports it. object.country (Optional): string. ISO 3166-1 alpha-2 country code. minLength:
     * 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". object.created_at (Required): string.
     * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.disabled_at (Optional): string. When the
     * destination was last disabled or archived. Absent if it never was. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.disabled_reason (Optional): string. Flint-normalized
     * reason the payout destination cannot currently be used. Unknown provider/backend values are
     * returned as destination_unavailable. Value enum: "destination_disabled",
     * "destination_removed", "destination_unavailable", "destination_rejected",
     * "destination_under_review", "requirements_past_due", "requirements_pending_verification".
     * object.is_default_for_currency (Required): boolean. Whether this is the default destination
     * for its currency. Scheduled payouts, and payouts created without payout_destination_id, go
     * to the default, and only an active destination can be it. object.last4 (Optional): string.
     * Last four digits of the account or card number. object.merchant_id (Required): string.
     * Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.payout_destination_id (Required): string. Stable identifier of the
     * payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.status (Required):
     * string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     * object.status_updated_at (Optional): string. When Flint last recorded the destination's
     * status. Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string.
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other". object.updated_at (Required): string. When the
     * destination last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Persisted version of this resource's owned state. Expanded resources
     * and external observations can change independently. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_payout_methods (Required): Array of string. Payout methods available through
         * Flint for this destination. Only standard is currently available. [] enum: "standard".
         * available_payout_methods[] (Value): string. Value enum: "standard". bank_name
         * (Optional): string. Name of the bank, when your processor reports it. country
         * (Optional): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
         * pattern: ^[A-Z]{2}$. Example: "US". created_at (Required): string. When the destination
         * was added. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". disabled_at (Optional): string. When the destination was last disabled
         * or archived. Absent if it never was. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * disabled_reason (Optional): string. Flint-normalized reason the payout destination
         * cannot currently be used. Unknown provider/backend values are returned as
         * destination_unavailable. Value enum: "destination_disabled", "destination_removed",
         * "destination_unavailable", "destination_rejected", "destination_under_review",
         * "requirements_past_due", "requirements_pending_verification". is_default_for_currency
         * (Required): boolean. Whether this is the default destination for its currency. Scheduled
         * payouts, and payouts created without payout_destination_id, go to the default, and only
         * an active destination can be it. last4 (Optional): string. Last four digits of the
         * account or card number. merchant_id (Required): string. Merchant that owns the
         * destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * payout_destination_id (Required): string. Stable identifier of the payout destination.
         * Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". status (Required): string. Current status.
         * Archived: deleted, and still readable by ID. Value enum: "pending", "active",
         * "verification_required", "disabled", "archived", "failed". status_updated_at (Optional):
         * string. When Flint last recorded the destination's status. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. Destination type. Unmapped destination
         * types are returned as other. Value enum: "bank_account", "debit_card", "other".
         * updated_at (Required): string. When the destination last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Payout methods available through Flint for this destination. Only standard is
             * currently available. [] enum: "standard". [] (Value): string. Value enum:
             * "standard".
             */
            "available_payout_methods": Array<"standard" | (string & {})>;
            /** Name of the bank, when your processor reports it. */
            "bank_name"?: string;
            /**
             * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
             * Example: "US".
             */
            "country"?: string;
            /**
             * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * When the destination was last disabled or archived. Absent if it never was. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "disabled_at"?: string;
            /**
             * Flint-normalized reason the payout destination cannot currently be used. Unknown
             * provider/backend values are returned as destination_unavailable. Value enum:
             * "destination_disabled", "destination_removed", "destination_unavailable",
             * "destination_rejected", "destination_under_review", "requirements_past_due",
             * "requirements_pending_verification".
             */
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            /**
             * Whether this is the default destination for its currency. Scheduled payouts, and
             * payouts created without payout_destination_id, go to the default, and only an active
             * destination can be it.
             */
            "is_default_for_currency": boolean;
            /** Last four digits of the account or card number. */
            "last4"?: string;
            /** Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Stable identifier of the payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id": string;
            /**
             * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
             * "active", "verification_required", "disabled", "archived", "failed".
             */
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            /**
             * When Flint last recorded the destination's status. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "status_updated_at"?: string;
            /**
             * Destination type. Unmapped destination types are returned as other. Value enum:
             * "bank_account", "debit_card", "other".
             */
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            /**
             * When the destination last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout_destination.archived". */
    "event_type"?: "payout_destination.archived";
});
export type PayoutDestinationCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_payout_methods": Array<"standard" | (string & {})>;
            "bank_name"?: string;
            "country"?: string;
            "created_at": string;
            "currency": string;
            "disabled_at"?: string;
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            "is_default_for_currency": boolean;
            "last4"?: string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "payout_destination_id": string;
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            "status_updated_at"?: string;
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout_destination.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_payout_methods": Array<"standard" | (string & {})>;
            "bank_name"?: string;
            "country"?: string;
            "created_at": string;
            "currency": string;
            "disabled_at"?: string;
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            "is_default_for_currency": boolean;
            "last4"?: string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "payout_destination_id": string;
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            "status_updated_at"?: string;
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout_destination.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout_destination.created";
});
/**
 * The `payout_destination.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PayoutDestinationCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_payout_methods (Required): Array of string. Payout
     * methods available through Flint for this destination. Only standard is currently available.
     * [] enum: "standard". object.available_payout_methods[] (Value): string. Value enum:
     * "standard". object.bank_name (Optional): string. Name of the bank, when your processor
     * reports it. object.country (Optional): string. ISO 3166-1 alpha-2 country code. minLength:
     * 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". object.created_at (Required): string.
     * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.disabled_at (Optional): string. When the
     * destination was last disabled or archived. Absent if it never was. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.disabled_reason (Optional): string. Flint-normalized
     * reason the payout destination cannot currently be used. Unknown provider/backend values are
     * returned as destination_unavailable. Value enum: "destination_disabled",
     * "destination_removed", "destination_unavailable", "destination_rejected",
     * "destination_under_review", "requirements_past_due", "requirements_pending_verification".
     * object.is_default_for_currency (Required): boolean. Whether this is the default destination
     * for its currency. Scheduled payouts, and payouts created without payout_destination_id, go
     * to the default, and only an active destination can be it. object.last4 (Optional): string.
     * Last four digits of the account or card number. object.merchant_id (Required): string.
     * Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.payout_destination_id (Required): string. Stable identifier of the
     * payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.status (Required):
     * string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     * object.status_updated_at (Optional): string. When Flint last recorded the destination's
     * status. Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string.
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other". object.updated_at (Required): string. When the
     * destination last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Persisted version of this resource's owned state. Expanded resources
     * and external observations can change independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_payout_methods (Required): Array of string. Payout methods available through
         * Flint for this destination. Only standard is currently available. [] enum: "standard".
         * available_payout_methods[] (Value): string. Value enum: "standard". bank_name
         * (Optional): string. Name of the bank, when your processor reports it. country
         * (Optional): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
         * pattern: ^[A-Z]{2}$. Example: "US". created_at (Required): string. When the destination
         * was added. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". disabled_at (Optional): string. When the destination was last disabled
         * or archived. Absent if it never was. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * disabled_reason (Optional): string. Flint-normalized reason the payout destination
         * cannot currently be used. Unknown provider/backend values are returned as
         * destination_unavailable. Value enum: "destination_disabled", "destination_removed",
         * "destination_unavailable", "destination_rejected", "destination_under_review",
         * "requirements_past_due", "requirements_pending_verification". is_default_for_currency
         * (Required): boolean. Whether this is the default destination for its currency. Scheduled
         * payouts, and payouts created without payout_destination_id, go to the default, and only
         * an active destination can be it. last4 (Optional): string. Last four digits of the
         * account or card number. merchant_id (Required): string. Merchant that owns the
         * destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * payout_destination_id (Required): string. Stable identifier of the payout destination.
         * Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". status (Required): string. Current status.
         * Archived: deleted, and still readable by ID. Value enum: "pending", "active",
         * "verification_required", "disabled", "archived", "failed". status_updated_at (Optional):
         * string. When Flint last recorded the destination's status. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. Destination type. Unmapped destination
         * types are returned as other. Value enum: "bank_account", "debit_card", "other".
         * updated_at (Required): string. When the destination last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Payout methods available through Flint for this destination. Only standard is
             * currently available. [] enum: "standard". [] (Value): string. Value enum:
             * "standard".
             */
            "available_payout_methods": Array<"standard" | (string & {})>;
            /** Name of the bank, when your processor reports it. */
            "bank_name"?: string;
            /**
             * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
             * Example: "US".
             */
            "country"?: string;
            /**
             * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * When the destination was last disabled or archived. Absent if it never was. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "disabled_at"?: string;
            /**
             * Flint-normalized reason the payout destination cannot currently be used. Unknown
             * provider/backend values are returned as destination_unavailable. Value enum:
             * "destination_disabled", "destination_removed", "destination_unavailable",
             * "destination_rejected", "destination_under_review", "requirements_past_due",
             * "requirements_pending_verification".
             */
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            /**
             * Whether this is the default destination for its currency. Scheduled payouts, and
             * payouts created without payout_destination_id, go to the default, and only an active
             * destination can be it.
             */
            "is_default_for_currency": boolean;
            /** Last four digits of the account or card number. */
            "last4"?: string;
            /** Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Stable identifier of the payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id": string;
            /**
             * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
             * "active", "verification_required", "disabled", "archived", "failed".
             */
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            /**
             * When Flint last recorded the destination's status. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "status_updated_at"?: string;
            /**
             * Destination type. Unmapped destination types are returned as other. Value enum:
             * "bank_account", "debit_card", "other".
             */
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            /**
             * When the destination last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout_destination.created". */
    "event_type"?: "payout_destination.created";
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
 * The `payout_destination.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type PayoutDestinationCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_payout_methods (Required): Array of string. Payout
     * methods available through Flint for this destination. Only standard is currently available.
     * [] enum: "standard". object.available_payout_methods[] (Value): string. Value enum:
     * "standard". object.bank_name (Optional): string. Name of the bank, when your processor
     * reports it. object.country (Optional): string. ISO 3166-1 alpha-2 country code. minLength:
     * 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". object.created_at (Required): string.
     * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.disabled_at (Optional): string. When the
     * destination was last disabled or archived. Absent if it never was. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.disabled_reason (Optional): string. Flint-normalized
     * reason the payout destination cannot currently be used. Unknown provider/backend values are
     * returned as destination_unavailable. Value enum: "destination_disabled",
     * "destination_removed", "destination_unavailable", "destination_rejected",
     * "destination_under_review", "requirements_past_due", "requirements_pending_verification".
     * object.is_default_for_currency (Required): boolean. Whether this is the default destination
     * for its currency. Scheduled payouts, and payouts created without payout_destination_id, go
     * to the default, and only an active destination can be it. object.last4 (Optional): string.
     * Last four digits of the account or card number. object.merchant_id (Required): string.
     * Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.payout_destination_id (Required): string. Stable identifier of the
     * payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.status (Required):
     * string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     * object.status_updated_at (Optional): string. When Flint last recorded the destination's
     * status. Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string.
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other". object.updated_at (Required): string. When the
     * destination last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Persisted version of this resource's owned state. Expanded resources
     * and external observations can change independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_payout_methods (Required): Array of string. Payout methods available through
         * Flint for this destination. Only standard is currently available. [] enum: "standard".
         * available_payout_methods[] (Value): string. Value enum: "standard". bank_name
         * (Optional): string. Name of the bank, when your processor reports it. country
         * (Optional): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
         * pattern: ^[A-Z]{2}$. Example: "US". created_at (Required): string. When the destination
         * was added. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". disabled_at (Optional): string. When the destination was last disabled
         * or archived. Absent if it never was. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * disabled_reason (Optional): string. Flint-normalized reason the payout destination
         * cannot currently be used. Unknown provider/backend values are returned as
         * destination_unavailable. Value enum: "destination_disabled", "destination_removed",
         * "destination_unavailable", "destination_rejected", "destination_under_review",
         * "requirements_past_due", "requirements_pending_verification". is_default_for_currency
         * (Required): boolean. Whether this is the default destination for its currency. Scheduled
         * payouts, and payouts created without payout_destination_id, go to the default, and only
         * an active destination can be it. last4 (Optional): string. Last four digits of the
         * account or card number. merchant_id (Required): string. Merchant that owns the
         * destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * payout_destination_id (Required): string. Stable identifier of the payout destination.
         * Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". status (Required): string. Current status.
         * Archived: deleted, and still readable by ID. Value enum: "pending", "active",
         * "verification_required", "disabled", "archived", "failed". status_updated_at (Optional):
         * string. When Flint last recorded the destination's status. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. Destination type. Unmapped destination
         * types are returned as other. Value enum: "bank_account", "debit_card", "other".
         * updated_at (Required): string. When the destination last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Payout methods available through Flint for this destination. Only standard is
             * currently available. [] enum: "standard". [] (Value): string. Value enum:
             * "standard".
             */
            "available_payout_methods": Array<"standard" | (string & {})>;
            /** Name of the bank, when your processor reports it. */
            "bank_name"?: string;
            /**
             * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
             * Example: "US".
             */
            "country"?: string;
            /**
             * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * When the destination was last disabled or archived. Absent if it never was. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "disabled_at"?: string;
            /**
             * Flint-normalized reason the payout destination cannot currently be used. Unknown
             * provider/backend values are returned as destination_unavailable. Value enum:
             * "destination_disabled", "destination_removed", "destination_unavailable",
             * "destination_rejected", "destination_under_review", "requirements_past_due",
             * "requirements_pending_verification".
             */
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            /**
             * Whether this is the default destination for its currency. Scheduled payouts, and
             * payouts created without payout_destination_id, go to the default, and only an active
             * destination can be it.
             */
            "is_default_for_currency": boolean;
            /** Last four digits of the account or card number. */
            "last4"?: string;
            /** Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Stable identifier of the payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id": string;
            /**
             * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
             * "active", "verification_required", "disabled", "archived", "failed".
             */
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            /**
             * When Flint last recorded the destination's status. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "status_updated_at"?: string;
            /**
             * Destination type. Unmapped destination types are returned as other. Value enum:
             * "bank_account", "debit_card", "other".
             */
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            /**
             * When the destination last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout_destination.created". */
    "event_type"?: "payout_destination.created";
});
export type PayoutDestinationDisabledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_payout_methods": Array<"standard" | (string & {})>;
            "bank_name"?: string;
            "country"?: string;
            "created_at": string;
            "currency": string;
            "disabled_at"?: string;
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            "is_default_for_currency": boolean;
            "last4"?: string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "payout_destination_id": string;
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            "status_updated_at"?: string;
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout_destination.disabled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_payout_methods": Array<"standard" | (string & {})>;
            "bank_name"?: string;
            "country"?: string;
            "created_at": string;
            "currency": string;
            "disabled_at"?: string;
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            "is_default_for_currency": boolean;
            "last4"?: string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "payout_destination_id": string;
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            "status_updated_at"?: string;
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout_destination.disabled";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout_destination.disabled";
});
/**
 * The `payout_destination.disabled` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PayoutDestinationDisabledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_payout_methods (Required): Array of string. Payout
     * methods available through Flint for this destination. Only standard is currently available.
     * [] enum: "standard". object.available_payout_methods[] (Value): string. Value enum:
     * "standard". object.bank_name (Optional): string. Name of the bank, when your processor
     * reports it. object.country (Optional): string. ISO 3166-1 alpha-2 country code. minLength:
     * 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". object.created_at (Required): string.
     * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.disabled_at (Optional): string. When the
     * destination was last disabled or archived. Absent if it never was. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.disabled_reason (Optional): string. Flint-normalized
     * reason the payout destination cannot currently be used. Unknown provider/backend values are
     * returned as destination_unavailable. Value enum: "destination_disabled",
     * "destination_removed", "destination_unavailable", "destination_rejected",
     * "destination_under_review", "requirements_past_due", "requirements_pending_verification".
     * object.is_default_for_currency (Required): boolean. Whether this is the default destination
     * for its currency. Scheduled payouts, and payouts created without payout_destination_id, go
     * to the default, and only an active destination can be it. object.last4 (Optional): string.
     * Last four digits of the account or card number. object.merchant_id (Required): string.
     * Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.payout_destination_id (Required): string. Stable identifier of the
     * payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.status (Required):
     * string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     * object.status_updated_at (Optional): string. When Flint last recorded the destination's
     * status. Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string.
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other". object.updated_at (Required): string. When the
     * destination last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Persisted version of this resource's owned state. Expanded resources
     * and external observations can change independently. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_payout_methods (Required): Array of string. Payout methods available through
         * Flint for this destination. Only standard is currently available. [] enum: "standard".
         * available_payout_methods[] (Value): string. Value enum: "standard". bank_name
         * (Optional): string. Name of the bank, when your processor reports it. country
         * (Optional): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
         * pattern: ^[A-Z]{2}$. Example: "US". created_at (Required): string. When the destination
         * was added. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". disabled_at (Optional): string. When the destination was last disabled
         * or archived. Absent if it never was. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * disabled_reason (Optional): string. Flint-normalized reason the payout destination
         * cannot currently be used. Unknown provider/backend values are returned as
         * destination_unavailable. Value enum: "destination_disabled", "destination_removed",
         * "destination_unavailable", "destination_rejected", "destination_under_review",
         * "requirements_past_due", "requirements_pending_verification". is_default_for_currency
         * (Required): boolean. Whether this is the default destination for its currency. Scheduled
         * payouts, and payouts created without payout_destination_id, go to the default, and only
         * an active destination can be it. last4 (Optional): string. Last four digits of the
         * account or card number. merchant_id (Required): string. Merchant that owns the
         * destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * payout_destination_id (Required): string. Stable identifier of the payout destination.
         * Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". status (Required): string. Current status.
         * Archived: deleted, and still readable by ID. Value enum: "pending", "active",
         * "verification_required", "disabled", "archived", "failed". status_updated_at (Optional):
         * string. When Flint last recorded the destination's status. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. Destination type. Unmapped destination
         * types are returned as other. Value enum: "bank_account", "debit_card", "other".
         * updated_at (Required): string. When the destination last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Payout methods available through Flint for this destination. Only standard is
             * currently available. [] enum: "standard". [] (Value): string. Value enum:
             * "standard".
             */
            "available_payout_methods": Array<"standard" | (string & {})>;
            /** Name of the bank, when your processor reports it. */
            "bank_name"?: string;
            /**
             * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
             * Example: "US".
             */
            "country"?: string;
            /**
             * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * When the destination was last disabled or archived. Absent if it never was. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "disabled_at"?: string;
            /**
             * Flint-normalized reason the payout destination cannot currently be used. Unknown
             * provider/backend values are returned as destination_unavailable. Value enum:
             * "destination_disabled", "destination_removed", "destination_unavailable",
             * "destination_rejected", "destination_under_review", "requirements_past_due",
             * "requirements_pending_verification".
             */
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            /**
             * Whether this is the default destination for its currency. Scheduled payouts, and
             * payouts created without payout_destination_id, go to the default, and only an active
             * destination can be it.
             */
            "is_default_for_currency": boolean;
            /** Last four digits of the account or card number. */
            "last4"?: string;
            /** Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Stable identifier of the payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id": string;
            /**
             * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
             * "active", "verification_required", "disabled", "archived", "failed".
             */
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            /**
             * When Flint last recorded the destination's status. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "status_updated_at"?: string;
            /**
             * Destination type. Unmapped destination types are returned as other. Value enum:
             * "bank_account", "debit_card", "other".
             */
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            /**
             * When the destination last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout_destination.disabled". */
    "event_type"?: "payout_destination.disabled";
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
 * The `payout_destination.disabled` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type PayoutDestinationDisabledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_payout_methods (Required): Array of string. Payout
     * methods available through Flint for this destination. Only standard is currently available.
     * [] enum: "standard". object.available_payout_methods[] (Value): string. Value enum:
     * "standard". object.bank_name (Optional): string. Name of the bank, when your processor
     * reports it. object.country (Optional): string. ISO 3166-1 alpha-2 country code. minLength:
     * 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". object.created_at (Required): string.
     * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.disabled_at (Optional): string. When the
     * destination was last disabled or archived. Absent if it never was. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.disabled_reason (Optional): string. Flint-normalized
     * reason the payout destination cannot currently be used. Unknown provider/backend values are
     * returned as destination_unavailable. Value enum: "destination_disabled",
     * "destination_removed", "destination_unavailable", "destination_rejected",
     * "destination_under_review", "requirements_past_due", "requirements_pending_verification".
     * object.is_default_for_currency (Required): boolean. Whether this is the default destination
     * for its currency. Scheduled payouts, and payouts created without payout_destination_id, go
     * to the default, and only an active destination can be it. object.last4 (Optional): string.
     * Last four digits of the account or card number. object.merchant_id (Required): string.
     * Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.payout_destination_id (Required): string. Stable identifier of the
     * payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.status (Required):
     * string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     * object.status_updated_at (Optional): string. When Flint last recorded the destination's
     * status. Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string.
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other". object.updated_at (Required): string. When the
     * destination last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Persisted version of this resource's owned state. Expanded resources
     * and external observations can change independently. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_payout_methods (Required): Array of string. Payout methods available through
         * Flint for this destination. Only standard is currently available. [] enum: "standard".
         * available_payout_methods[] (Value): string. Value enum: "standard". bank_name
         * (Optional): string. Name of the bank, when your processor reports it. country
         * (Optional): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
         * pattern: ^[A-Z]{2}$. Example: "US". created_at (Required): string. When the destination
         * was added. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". disabled_at (Optional): string. When the destination was last disabled
         * or archived. Absent if it never was. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * disabled_reason (Optional): string. Flint-normalized reason the payout destination
         * cannot currently be used. Unknown provider/backend values are returned as
         * destination_unavailable. Value enum: "destination_disabled", "destination_removed",
         * "destination_unavailable", "destination_rejected", "destination_under_review",
         * "requirements_past_due", "requirements_pending_verification". is_default_for_currency
         * (Required): boolean. Whether this is the default destination for its currency. Scheduled
         * payouts, and payouts created without payout_destination_id, go to the default, and only
         * an active destination can be it. last4 (Optional): string. Last four digits of the
         * account or card number. merchant_id (Required): string. Merchant that owns the
         * destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * payout_destination_id (Required): string. Stable identifier of the payout destination.
         * Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". status (Required): string. Current status.
         * Archived: deleted, and still readable by ID. Value enum: "pending", "active",
         * "verification_required", "disabled", "archived", "failed". status_updated_at (Optional):
         * string. When Flint last recorded the destination's status. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. Destination type. Unmapped destination
         * types are returned as other. Value enum: "bank_account", "debit_card", "other".
         * updated_at (Required): string. When the destination last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Payout methods available through Flint for this destination. Only standard is
             * currently available. [] enum: "standard". [] (Value): string. Value enum:
             * "standard".
             */
            "available_payout_methods": Array<"standard" | (string & {})>;
            /** Name of the bank, when your processor reports it. */
            "bank_name"?: string;
            /**
             * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
             * Example: "US".
             */
            "country"?: string;
            /**
             * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * When the destination was last disabled or archived. Absent if it never was. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "disabled_at"?: string;
            /**
             * Flint-normalized reason the payout destination cannot currently be used. Unknown
             * provider/backend values are returned as destination_unavailable. Value enum:
             * "destination_disabled", "destination_removed", "destination_unavailable",
             * "destination_rejected", "destination_under_review", "requirements_past_due",
             * "requirements_pending_verification".
             */
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            /**
             * Whether this is the default destination for its currency. Scheduled payouts, and
             * payouts created without payout_destination_id, go to the default, and only an active
             * destination can be it.
             */
            "is_default_for_currency": boolean;
            /** Last four digits of the account or card number. */
            "last4"?: string;
            /** Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Stable identifier of the payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id": string;
            /**
             * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
             * "active", "verification_required", "disabled", "archived", "failed".
             */
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            /**
             * When Flint last recorded the destination's status. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "status_updated_at"?: string;
            /**
             * Destination type. Unmapped destination types are returned as other. Value enum:
             * "bank_account", "debit_card", "other".
             */
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            /**
             * When the destination last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout_destination.disabled". */
    "event_type"?: "payout_destination.disabled";
});
/** A page of `PayoutDestination` objects. */
export type PayoutDestinationListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PayoutDestination}. The account that receives merchant payouts.
     */
    "data": Array<PayoutDestination>;
    /**
     * Additional information about this response. Response metadata for money movement lists,
     * including request and trace IDs, warnings, and the state of the available history.
     */
    "meta"?: MoneyMovementListMeta;
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
/** A response containing `PayoutDestination` data. */
export type PayoutDestinationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The account that
     * receives merchant payouts.
     */
    "data": PayoutDestination;
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
export type PayoutDestinationUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_payout_methods": Array<"standard" | (string & {})>;
            "bank_name"?: string;
            "country"?: string;
            "created_at": string;
            "currency": string;
            "disabled_at"?: string;
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            "is_default_for_currency": boolean;
            "last4"?: string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "payout_destination_id": string;
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            "status_updated_at"?: string;
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout_destination.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_payout_methods": Array<"standard" | (string & {})>;
            "bank_name"?: string;
            "country"?: string;
            "created_at": string;
            "currency": string;
            "disabled_at"?: string;
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            "is_default_for_currency": boolean;
            "last4"?: string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "payout_destination_id": string;
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            "status_updated_at"?: string;
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout_destination.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout_destination.updated";
});
/**
 * The `payout_destination.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PayoutDestinationUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_payout_methods (Required): Array of string. Payout
     * methods available through Flint for this destination. Only standard is currently available.
     * [] enum: "standard". object.available_payout_methods[] (Value): string. Value enum:
     * "standard". object.bank_name (Optional): string. Name of the bank, when your processor
     * reports it. object.country (Optional): string. ISO 3166-1 alpha-2 country code. minLength:
     * 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". object.created_at (Required): string.
     * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.disabled_at (Optional): string. When the
     * destination was last disabled or archived. Absent if it never was. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.disabled_reason (Optional): string. Flint-normalized
     * reason the payout destination cannot currently be used. Unknown provider/backend values are
     * returned as destination_unavailable. Value enum: "destination_disabled",
     * "destination_removed", "destination_unavailable", "destination_rejected",
     * "destination_under_review", "requirements_past_due", "requirements_pending_verification".
     * object.is_default_for_currency (Required): boolean. Whether this is the default destination
     * for its currency. Scheduled payouts, and payouts created without payout_destination_id, go
     * to the default, and only an active destination can be it. object.last4 (Optional): string.
     * Last four digits of the account or card number. object.merchant_id (Required): string.
     * Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.payout_destination_id (Required): string. Stable identifier of the
     * payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.status (Required):
     * string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     * object.status_updated_at (Optional): string. When Flint last recorded the destination's
     * status. Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string.
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other". object.updated_at (Required): string. When the
     * destination last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Persisted version of this resource's owned state. Expanded resources
     * and external observations can change independently. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_payout_methods (Required): Array of string. Payout methods available through
         * Flint for this destination. Only standard is currently available. [] enum: "standard".
         * available_payout_methods[] (Value): string. Value enum: "standard". bank_name
         * (Optional): string. Name of the bank, when your processor reports it. country
         * (Optional): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
         * pattern: ^[A-Z]{2}$. Example: "US". created_at (Required): string. When the destination
         * was added. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". disabled_at (Optional): string. When the destination was last disabled
         * or archived. Absent if it never was. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * disabled_reason (Optional): string. Flint-normalized reason the payout destination
         * cannot currently be used. Unknown provider/backend values are returned as
         * destination_unavailable. Value enum: "destination_disabled", "destination_removed",
         * "destination_unavailable", "destination_rejected", "destination_under_review",
         * "requirements_past_due", "requirements_pending_verification". is_default_for_currency
         * (Required): boolean. Whether this is the default destination for its currency. Scheduled
         * payouts, and payouts created without payout_destination_id, go to the default, and only
         * an active destination can be it. last4 (Optional): string. Last four digits of the
         * account or card number. merchant_id (Required): string. Merchant that owns the
         * destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * payout_destination_id (Required): string. Stable identifier of the payout destination.
         * Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". status (Required): string. Current status.
         * Archived: deleted, and still readable by ID. Value enum: "pending", "active",
         * "verification_required", "disabled", "archived", "failed". status_updated_at (Optional):
         * string. When Flint last recorded the destination's status. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. Destination type. Unmapped destination
         * types are returned as other. Value enum: "bank_account", "debit_card", "other".
         * updated_at (Required): string. When the destination last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Payout methods available through Flint for this destination. Only standard is
             * currently available. [] enum: "standard". [] (Value): string. Value enum:
             * "standard".
             */
            "available_payout_methods": Array<"standard" | (string & {})>;
            /** Name of the bank, when your processor reports it. */
            "bank_name"?: string;
            /**
             * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
             * Example: "US".
             */
            "country"?: string;
            /**
             * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * When the destination was last disabled or archived. Absent if it never was. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "disabled_at"?: string;
            /**
             * Flint-normalized reason the payout destination cannot currently be used. Unknown
             * provider/backend values are returned as destination_unavailable. Value enum:
             * "destination_disabled", "destination_removed", "destination_unavailable",
             * "destination_rejected", "destination_under_review", "requirements_past_due",
             * "requirements_pending_verification".
             */
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            /**
             * Whether this is the default destination for its currency. Scheduled payouts, and
             * payouts created without payout_destination_id, go to the default, and only an active
             * destination can be it.
             */
            "is_default_for_currency": boolean;
            /** Last four digits of the account or card number. */
            "last4"?: string;
            /** Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Stable identifier of the payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id": string;
            /**
             * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
             * "active", "verification_required", "disabled", "archived", "failed".
             */
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            /**
             * When Flint last recorded the destination's status. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "status_updated_at"?: string;
            /**
             * Destination type. Unmapped destination types are returned as other. Value enum:
             * "bank_account", "debit_card", "other".
             */
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            /**
             * When the destination last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout_destination.updated". */
    "event_type"?: "payout_destination.updated";
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
 * The `payout_destination.updated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type PayoutDestinationUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_payout_methods (Required): Array of string. Payout
     * methods available through Flint for this destination. Only standard is currently available.
     * [] enum: "standard". object.available_payout_methods[] (Value): string. Value enum:
     * "standard". object.bank_name (Optional): string. Name of the bank, when your processor
     * reports it. object.country (Optional): string. ISO 3166-1 alpha-2 country code. minLength:
     * 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". object.created_at (Required): string.
     * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.disabled_at (Optional): string. When the
     * destination was last disabled or archived. Absent if it never was. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.disabled_reason (Optional): string. Flint-normalized
     * reason the payout destination cannot currently be used. Unknown provider/backend values are
     * returned as destination_unavailable. Value enum: "destination_disabled",
     * "destination_removed", "destination_unavailable", "destination_rejected",
     * "destination_under_review", "requirements_past_due", "requirements_pending_verification".
     * object.is_default_for_currency (Required): boolean. Whether this is the default destination
     * for its currency. Scheduled payouts, and payouts created without payout_destination_id, go
     * to the default, and only an active destination can be it. object.last4 (Optional): string.
     * Last four digits of the account or card number. object.merchant_id (Required): string.
     * Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.payout_destination_id (Required): string. Stable identifier of the
     * payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.status (Required):
     * string. Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
     * "active", "verification_required", "disabled", "archived", "failed".
     * object.status_updated_at (Optional): string. When Flint last recorded the destination's
     * status. Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string.
     * Destination type. Unmapped destination types are returned as other. Value enum:
     * "bank_account", "debit_card", "other". object.updated_at (Required): string. When the
     * destination last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Persisted version of this resource's owned state. Expanded resources
     * and external observations can change independently. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_payout_methods (Required): Array of string. Payout methods available through
         * Flint for this destination. Only standard is currently available. [] enum: "standard".
         * available_payout_methods[] (Value): string. Value enum: "standard". bank_name
         * (Optional): string. Name of the bank, when your processor reports it. country
         * (Optional): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
         * pattern: ^[A-Z]{2}$. Example: "US". created_at (Required): string. When the destination
         * was added. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". disabled_at (Optional): string. When the destination was last disabled
         * or archived. Absent if it never was. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * disabled_reason (Optional): string. Flint-normalized reason the payout destination
         * cannot currently be used. Unknown provider/backend values are returned as
         * destination_unavailable. Value enum: "destination_disabled", "destination_removed",
         * "destination_unavailable", "destination_rejected", "destination_under_review",
         * "requirements_past_due", "requirements_pending_verification". is_default_for_currency
         * (Required): boolean. Whether this is the default destination for its currency. Scheduled
         * payouts, and payouts created without payout_destination_id, go to the default, and only
         * an active destination can be it. last4 (Optional): string. Last four digits of the
         * account or card number. merchant_id (Required): string. Merchant that owns the
         * destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * payout_destination_id (Required): string. Stable identifier of the payout destination.
         * Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". status (Required): string. Current status.
         * Archived: deleted, and still readable by ID. Value enum: "pending", "active",
         * "verification_required", "disabled", "archived", "failed". status_updated_at (Optional):
         * string. When Flint last recorded the destination's status. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. Destination type. Unmapped destination
         * types are returned as other. Value enum: "bank_account", "debit_card", "other".
         * updated_at (Required): string. When the destination last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Payout methods available through Flint for this destination. Only standard is
             * currently available. [] enum: "standard". [] (Value): string. Value enum:
             * "standard".
             */
            "available_payout_methods": Array<"standard" | (string & {})>;
            /** Name of the bank, when your processor reports it. */
            "bank_name"?: string;
            /**
             * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
             * Example: "US".
             */
            "country"?: string;
            /**
             * When the destination was added. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * When the destination was last disabled or archived. Absent if it never was. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "disabled_at"?: string;
            /**
             * Flint-normalized reason the payout destination cannot currently be used. Unknown
             * provider/backend values are returned as destination_unavailable. Value enum:
             * "destination_disabled", "destination_removed", "destination_unavailable",
             * "destination_rejected", "destination_under_review", "requirements_past_due",
             * "requirements_pending_verification".
             */
            "disabled_reason"?: "destination_disabled"
                | "destination_removed"
                | "destination_unavailable"
                | "destination_rejected"
                | "destination_under_review"
                | "requirements_past_due"
                | "requirements_pending_verification"
                | (string & {});
            /**
             * Whether this is the default destination for its currency. Scheduled payouts, and
             * payouts created without payout_destination_id, go to the default, and only an active
             * destination can be it.
             */
            "is_default_for_currency": boolean;
            /** Last four digits of the account or card number. */
            "last4"?: string;
            /** Merchant that owns the destination. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Stable identifier of the payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id": string;
            /**
             * Current status. Archived: deleted, and still readable by ID. Value enum: "pending",
             * "active", "verification_required", "disabled", "archived", "failed".
             */
            "status": "pending" | "active" | "verification_required" | "disabled" | "archived" | "failed" | (string & {});
            /**
             * When Flint last recorded the destination's status. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "status_updated_at"?: string;
            /**
             * Destination type. Unmapped destination types are returned as other. Value enum:
             * "bank_account", "debit_card", "other".
             */
            "type": "bank_account" | "debit_card" | "other" | (string & {});
            /**
             * When the destination last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PayoutDestination>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout_destination.updated". */
    "event_type"?: "payout_destination.updated";
});
export type PayoutDestinationsDeleteParams = {
    /** Optional payout destination version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type PayoutDestinationsGetParams = DisputesAcceptParams;
export type PayoutDestinationsListParams = {
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Optional payout destination type filter. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "bank_account", "debit_card". Value enum: "bank_account",
     * "debit_card". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "bank_account",
     * "debit_card". anyOf[1][] (Value): string. Value enum: "bank_account", "debit_card". anyOf[2]
     * (Value): string. Value enum: "bank_account", "debit_card".
     */
    "type"?: InputValue<("bank_account" | "debit_card") | readonly ("bank_account" | "debit_card")[]>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "pending", "active", "verification_required", "disabled", "archived", "failed". Value enum:
     * "pending", "active", "verification_required", "disabled", "archived", "failed". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "pending", "active",
     * "verification_required", "disabled", "archived", "failed". anyOf[1][] (Value): string. Value
     * enum: "pending", "active", "verification_required", "disabled", "archived", "failed".
     * anyOf[2] (Value): string. Value enum: "pending", "active", "verification_required",
     * "disabled", "archived", "failed".
     */
    "status"?: InputValue<("pending" | "active" | "verification_required" | "disabled" | "archived" | "failed")
        | readonly ("pending" | "active" | "verification_required" | "disabled" | "archived" | "failed")[]>;
    /**
     * Optional available payout method filter. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "standard". Value enum: "standard". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "standard". anyOf[1][] (Value): string. Value enum:
     * "standard". anyOf[2] (Value): string. Value enum: "standard".
     */
    "available_payout_methods"?: InputValue<("standard") | readonly ("standard")[]>;
    /** Whether to return only destinations that are the default for their currency. */
    "is_default_for_currency"?: InputValue<boolean>;
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
export type PayoutDestinationsUpdateParams = (InputValue<UpdatePayoutDestinationRequestInput>);
export type PayoutFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout.failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout.failed";
});
/**
 * The `payout.failed` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type PayoutFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout.failed". */
    "event_type"?: "payout.failed";
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
 * The `payout.failed` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type PayoutFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout.failed". */
    "event_type"?: "payout.failed";
});
/** A page of `Payout` objects. */
export type PayoutListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Payout}. Funds sent from a merchant balance to a payout destination.
     */
    "data": Array<Payout>;
    /**
     * Additional information about this response. Response metadata for money movement lists,
     * including request and trace IDs, warnings, and the state of the available history.
     */
    "meta"?: MoneyMovementListMeta;
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
/** A response containing `Payout` data. */
export type PayoutResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Funds sent from a
     * merchant balance to a payout destination.
     */
    "data": Payout;
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
export type PayoutReversedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout.reversed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout.reversed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout.reversed";
});
/**
 * The `payout.reversed` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type PayoutReversedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout.reversed". */
    "event_type"?: "payout.reversed";
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
 * The `payout.reversed` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type PayoutReversedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout.reversed". */
    "event_type"?: "payout.reversed";
});
/** The merchant's payout schedule and preferences. */
export type PayoutSettings = {
    /**
     * Why payouts can't run. Empty when nothing blocks them. [] (Value): {@link
     * MoneyMovementBlockedReason}. Why a money movement action is blocked, with an error code, a
     * message, next steps, and who can resolve it.
     */
    "blocked_reasons": Array<MoneyMovementBlockedReason>;
    /**
     * When Flint stored the payout settings record, as an RFC 3339 UTC instant at second
     * precision. Null when no stored settings record exists. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string | null;
    /**
     * Default payout destination for each currency, as a map from currency code to
     * payout_destination_id. Empty when no defaults are configured. Change a currency's default
     * with `default_payout_destinations` on PATCH /v1/payout-settings, or in the payouts embedded
     * component. * (Value): string.
     */
    "default_payout_destinations": Record<string, string>;
    /**
     * Normal settlement delay in days before a payment's funds become available to pay out. A new
     * account's first payments can stay pending longer; each balance transaction's available_at is
     * when its funds become available. Format: int32.
     */
    "delay_days": number;
    /**
     * Settlement delay in days you set in place of the account's default, 0 through 31. It doesn't
     * guarantee the pending time of every payment; see available_at on each balance transaction.
     * Absent when none is set. Format: int32.
     */
    "delay_days_override"?: number;
    /**
     * Payout schedule interval. Unmapped intervals are returned as other. Value enum: "manual",
     * "daily", "weekly", "monthly", "other".
     */
    "interval": "manual" | "daily" | "weekly" | "monthly" | "other" | (string & {});
    /** Merchant these settings belong to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Amount kept in your balance instead of paid out, keyed by currency code. Absent when no
     * minimum is set. * (Value): {@link MoneyValue}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "minimum_balance_currency_options"?: Record<string, MoneyValue>;
    /**
     * Days of the month, 1 through 31, on which monthly payouts are sent. [] (Value): integer.
     * Format: int32.
     */
    "monthly_payout_days": Array<number>;
    /**
     * Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. []
     * (Value): {@link NextAction}. A follow-up action. When target_resource is present, send its
     * resource_id in the target request field named {resource_type}_id.
     */
    "next_actions": Array<NextAction>;
    /** Stable identifier of your payout settings. Example: "pset_01KEZF7C0027X093301CQ36WSZ". */
    "payout_settings_id": string;
    /** Text shown on your bank statement for payouts. Absent when none is set. */
    "statement_descriptor"?: string;
    /**
     * Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled,
     * blocked_reasons says why and next_actions lists any steps Flint can suggest. Value enum:
     * "enabled", "disabled", "blocked", "pending".
     */
    "status": "enabled" | "disabled" | "blocked" | "pending" | (string & {});
    /**
     * When the stored payout settings record was last updated, as an RFC 3339 UTC instant at
     * second precision. Without a stored record, this is your processor's update time. `null` when
     * there is no stored record and your processor supplied no update time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "updated_at": string | null;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
    /**
     * Days of the week weekly payouts are sent. Accounts set up outside Flint can report saturday
     * or sunday; when you change the schedule, Flint accepts monday through friday. [] enum:
     * "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday". [] (Value):
     * string. Value enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
     * "sunday".
     */
    "weekly_payout_days": Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | (string & {})>;
};
export type PayoutSettingsGetParams = DisputesAcceptParams;
/** A response containing `PayoutSettings` data. */
export type PayoutSettingsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The merchant's payout
     * schedule and preferences.
     */
    "data": PayoutSettings;
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
export type PayoutSettingsUpdateParams = (InputValue<UpdatePayoutSettingsRequestInput>);
export type PayoutSettingsUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "blocked_reasons": Array<MoneyMovementBlockedReason>;
            "created_at": string | null;
            "default_payout_destinations": Record<string, string>;
            "delay_days": number;
            "delay_days_override"?: number;
            "interval": "manual" | "daily" | "weekly" | "monthly" | "other" | (string & {});
            "merchant_id": string;
            "minimum_balance_currency_options"?: Record<string, MoneyValue>;
            "monthly_payout_days": Array<number>;
            "next_actions": Array<NextAction>;
            "payout_settings_id": string;
            "statement_descriptor"?: string;
            "status": "enabled" | "disabled" | "blocked" | "pending" | (string & {});
            "updated_at": string | null;
            "version": number;
            "weekly_payout_days": Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | (string & {})>;
        };
        "previous_attributes"?: Partial<PayoutSettings>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout_settings.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "blocked_reasons": Array<MoneyMovementBlockedReason>;
            "created_at": string | null;
            "default_payout_destinations": Record<string, string>;
            "delay_days": number;
            "delay_days_override"?: number;
            "interval": "manual" | "daily" | "weekly" | "monthly" | "other" | (string & {});
            "merchant_id": string;
            "minimum_balance_currency_options"?: Record<string, MoneyValue>;
            "monthly_payout_days": Array<number>;
            "next_actions": Array<NextAction>;
            "payout_settings_id": string;
            "statement_descriptor"?: string;
            "status": "enabled" | "disabled" | "blocked" | "pending" | (string & {});
            "updated_at": string | null;
            "version": number;
            "weekly_payout_days": Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | (string & {})>;
        };
        "previous_attributes"?: Partial<PayoutSettings>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout_settings.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout_settings.updated";
});
/**
 * The `payout_settings.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PayoutSettingsUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.blocked_reasons (Required): Array of {@link
     * MoneyMovementBlockedReason}. Why payouts can't run. Empty when nothing blocks them.
     * object.blocked_reasons[] (Value): {@link MoneyMovementBlockedReason}. Why a money movement
     * action is blocked, with an error code, a message, next steps, and who can resolve it.
     * object.created_at (Required): string or null. When Flint stored the payout settings record,
     * as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.default_payout_destinations
     * (Required): Map of string. Default payout destination for each currency, as a map from
     * currency code to payout_destination_id. Empty when no defaults are configured. Change a
     * currency's default with `default_payout_destinations` on PATCH /v1/payout-settings, or in
     * the payouts embedded component. object.default_payout_destinations.* (Value): string.
     * object.delay_days (Required): integer. Normal settlement delay in days before a payment's
     * funds become available to pay out. A new account's first payments can stay pending longer;
     * each balance transaction's available_at is when its funds become available. Format: int32.
     * object.delay_days_override (Optional): integer. Settlement delay in days you set in place of
     * the account's default, 0 through 31. It doesn't guarantee the pending time of every payment;
     * see available_at on each balance transaction. Absent when none is set. Format: int32.
     * object.interval (Required): string. Payout schedule interval. Unmapped intervals are
     * returned as other. Value enum: "manual", "daily", "weekly", "monthly", "other".
     * object.merchant_id (Required): string. Merchant these settings belong to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.minimum_balance_currency_options (Optional): Map of
     * {@link MoneyValue}. Amount kept in your balance instead of paid out, keyed by currency code.
     * Absent when no minimum is set. object.minimum_balance_currency_options.* (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.monthly_payout_days (Required): Array of integer. Days of the month, 1 through
     * 31, on which monthly payouts are sent. object.monthly_payout_days[] (Value): integer.
     * Format: int32. object.next_actions (Required): Array of {@link NextAction}. Steps that would
     * let payouts run, when Flint has one to suggest. Empty otherwise. object.next_actions[]
     * (Value): {@link NextAction}. A follow-up action. When target_resource is present, send its
     * resource_id in the target request field named {resource_type}_id. object.payout_settings_id
     * (Required): string. Stable identifier of your payout settings. Example:
     * "pset_01KEZF7C0027X093301CQ36WSZ". object.statement_descriptor (Optional): string. Text
     * shown on your bank statement for payouts. Absent when none is set. object.status (Required):
     * string. Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't
     * enabled, blocked_reasons says why and next_actions lists any steps Flint can suggest. Value
     * enum: "enabled", "disabled", "blocked", "pending". object.updated_at (Required): string or
     * null. When the stored payout settings record was last updated, as an RFC 3339 UTC instant at
     * second precision. Without a stored record, this is your processor's update time. `null` when
     * there is no stored record and your processor supplied no update time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.weekly_payout_days (Required): Array of
     * string. Days of the week weekly payouts are sent. Accounts set up outside Flint can report
     * saturday or sunday; when you change the schedule, Flint accepts monday through friday. []
     * enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday".
     * object.weekly_payout_days[] (Value): string. Value enum: "monday", "tuesday", "wednesday",
     * "thursday", "friday", "saturday", "sunday". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * blocked_reasons (Required): Array of {@link MoneyMovementBlockedReason}. Why payouts
         * can't run. Empty when nothing blocks them. blocked_reasons[] (Value): {@link
         * MoneyMovementBlockedReason}. Why a money movement action is blocked, with an error code,
         * a message, next steps, and who can resolve it. created_at (Required): string or null.
         * When Flint stored the payout settings record, as an RFC 3339 UTC instant at second
         * precision. Null when no stored settings record exists. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". default_payout_destinations (Required): Map of string. Default
         * payout destination for each currency, as a map from currency code to
         * payout_destination_id. Empty when no defaults are configured. Change a currency's
         * default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the
         * payouts embedded component. default_payout_destinations.* (Value): string. delay_days
         * (Required): integer. Normal settlement delay in days before a payment's funds become
         * available to pay out. A new account's first payments can stay pending longer; each
         * balance transaction's available_at is when its funds become available. Format: int32.
         * delay_days_override (Optional): integer. Settlement delay in days you set in place of
         * the account's default, 0 through 31. It doesn't guarantee the pending time of every
         * payment; see available_at on each balance transaction. Absent when none is set. Format:
         * int32. interval (Required): string. Payout schedule interval. Unmapped intervals are
         * returned as other. Value enum: "manual", "daily", "weekly", "monthly", "other".
         * merchant_id (Required): string. Merchant these settings belong to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". minimum_balance_currency_options (Optional): Map of
         * {@link MoneyValue}. Amount kept in your balance instead of paid out, keyed by currency
         * code. Absent when no minimum is set. minimum_balance_currency_options.* (Value): {@link
         * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. monthly_payout_days (Required): Array of integer. Days of the month, 1
         * through 31, on which monthly payouts are sent. monthly_payout_days[] (Value): integer.
         * Format: int32. next_actions (Required): Array of {@link NextAction}. Steps that would
         * let payouts run, when Flint has one to suggest. Empty otherwise. next_actions[] (Value):
         * {@link NextAction}. A follow-up action. When target_resource is present, send its
         * resource_id in the target request field named {resource_type}_id. payout_settings_id
         * (Required): string. Stable identifier of your payout settings. Example:
         * "pset_01KEZF7C0027X093301CQ36WSZ". statement_descriptor (Optional): string. Text shown
         * on your bank statement for payouts. Absent when none is set. status (Required): string.
         * Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled,
         * blocked_reasons says why and next_actions lists any steps Flint can suggest. Value enum:
         * "enabled", "disabled", "blocked", "pending". updated_at (Required): string or null. When
         * the stored payout settings record was last updated, as an RFC 3339 UTC instant at second
         * precision. Without a stored record, this is your processor's update time. `null` when
         * there is no stored record and your processor supplied no update time. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1. weekly_payout_days (Required): Array of
         * string. Days of the week weekly payouts are sent. Accounts set up outside Flint can
         * report saturday or sunday; when you change the schedule, Flint accepts monday through
         * friday. [] enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
         * "sunday". weekly_payout_days[] (Value): string. Value enum: "monday", "tuesday",
         * "wednesday", "thursday", "friday", "saturday", "sunday".
         */
        "object": {
            /**
             * Why payouts can't run. Empty when nothing blocks them. [] (Value): {@link
             * MoneyMovementBlockedReason}. Why a money movement action is blocked, with an error
             * code, a message, next steps, and who can resolve it.
             */
            "blocked_reasons": Array<MoneyMovementBlockedReason>;
            /**
             * When Flint stored the payout settings record, as an RFC 3339 UTC instant at second
             * precision. Null when no stored settings record exists. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string | null;
            /**
             * Default payout destination for each currency, as a map from currency code to
             * payout_destination_id. Empty when no defaults are configured. Change a currency's
             * default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the
             * payouts embedded component. * (Value): string.
             */
            "default_payout_destinations": Record<string, string>;
            /**
             * Normal settlement delay in days before a payment's funds become available to pay
             * out. A new account's first payments can stay pending longer; each balance
             * transaction's available_at is when its funds become available. Format: int32.
             */
            "delay_days": number;
            /**
             * Settlement delay in days you set in place of the account's default, 0 through 31. It
             * doesn't guarantee the pending time of every payment; see available_at on each
             * balance transaction. Absent when none is set. Format: int32.
             */
            "delay_days_override"?: number;
            /**
             * Payout schedule interval. Unmapped intervals are returned as other. Value enum:
             * "manual", "daily", "weekly", "monthly", "other".
             */
            "interval": "manual" | "daily" | "weekly" | "monthly" | "other" | (string & {});
            /** Merchant these settings belong to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Amount kept in your balance instead of paid out, keyed by currency code. Absent when
             * no minimum is set. * (Value): {@link MoneyValue}. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "minimum_balance_currency_options"?: Record<string, MoneyValue>;
            /**
             * Days of the month, 1 through 31, on which monthly payouts are sent. [] (Value):
             * integer. Format: int32.
             */
            "monthly_payout_days": Array<number>;
            /**
             * Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. []
             * (Value): {@link NextAction}. A follow-up action. When target_resource is present,
             * send its resource_id in the target request field named {resource_type}_id.
             */
            "next_actions": Array<NextAction>;
            /**
             * Stable identifier of your payout settings. Example:
             * "pset_01KEZF7C0027X093301CQ36WSZ".
             */
            "payout_settings_id": string;
            /** Text shown on your bank statement for payouts. Absent when none is set. */
            "statement_descriptor"?: string;
            /**
             * Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't
             * enabled, blocked_reasons says why and next_actions lists any steps Flint can
             * suggest. Value enum: "enabled", "disabled", "blocked", "pending".
             */
            "status": "enabled" | "disabled" | "blocked" | "pending" | (string & {});
            /**
             * When the stored payout settings record was last updated, as an RFC 3339 UTC instant
             * at second precision. Without a stored record, this is your processor's update time.
             * `null` when there is no stored record and your processor supplied no update time.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string | null;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * Days of the week weekly payouts are sent. Accounts set up outside Flint can report
             * saturday or sunday; when you change the schedule, Flint accepts monday through
             * friday. [] enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
             * "sunday". [] (Value): string. Value enum: "monday", "tuesday", "wednesday",
             * "thursday", "friday", "saturday", "sunday".
             */
            "weekly_payout_days": Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | (string & {})>;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PayoutSettings>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout_settings.updated". */
    "event_type"?: "payout_settings.updated";
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
 * The `payout_settings.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PayoutSettingsUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.blocked_reasons (Required): Array of {@link
     * MoneyMovementBlockedReason}. Why payouts can't run. Empty when nothing blocks them.
     * object.blocked_reasons[] (Value): {@link MoneyMovementBlockedReason}. Why a money movement
     * action is blocked, with an error code, a message, next steps, and who can resolve it.
     * object.created_at (Required): string or null. When Flint stored the payout settings record,
     * as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.default_payout_destinations
     * (Required): Map of string. Default payout destination for each currency, as a map from
     * currency code to payout_destination_id. Empty when no defaults are configured. Change a
     * currency's default with `default_payout_destinations` on PATCH /v1/payout-settings, or in
     * the payouts embedded component. object.default_payout_destinations.* (Value): string.
     * object.delay_days (Required): integer. Normal settlement delay in days before a payment's
     * funds become available to pay out. A new account's first payments can stay pending longer;
     * each balance transaction's available_at is when its funds become available. Format: int32.
     * object.delay_days_override (Optional): integer. Settlement delay in days you set in place of
     * the account's default, 0 through 31. It doesn't guarantee the pending time of every payment;
     * see available_at on each balance transaction. Absent when none is set. Format: int32.
     * object.interval (Required): string. Payout schedule interval. Unmapped intervals are
     * returned as other. Value enum: "manual", "daily", "weekly", "monthly", "other".
     * object.merchant_id (Required): string. Merchant these settings belong to. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.minimum_balance_currency_options (Optional): Map of
     * {@link MoneyValue}. Amount kept in your balance instead of paid out, keyed by currency code.
     * Absent when no minimum is set. object.minimum_balance_currency_options.* (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.monthly_payout_days (Required): Array of integer. Days of the month, 1 through
     * 31, on which monthly payouts are sent. object.monthly_payout_days[] (Value): integer.
     * Format: int32. object.next_actions (Required): Array of {@link NextAction}. Steps that would
     * let payouts run, when Flint has one to suggest. Empty otherwise. object.next_actions[]
     * (Value): {@link NextAction}. A follow-up action. When target_resource is present, send its
     * resource_id in the target request field named {resource_type}_id. object.payout_settings_id
     * (Required): string. Stable identifier of your payout settings. Example:
     * "pset_01KEZF7C0027X093301CQ36WSZ". object.statement_descriptor (Optional): string. Text
     * shown on your bank statement for payouts. Absent when none is set. object.status (Required):
     * string. Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't
     * enabled, blocked_reasons says why and next_actions lists any steps Flint can suggest. Value
     * enum: "enabled", "disabled", "blocked", "pending". object.updated_at (Required): string or
     * null. When the stored payout settings record was last updated, as an RFC 3339 UTC instant at
     * second precision. Without a stored record, this is your processor's update time. `null` when
     * there is no stored record and your processor supplied no update time. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.weekly_payout_days (Required): Array of
     * string. Days of the week weekly payouts are sent. Accounts set up outside Flint can report
     * saturday or sunday; when you change the schedule, Flint accepts monday through friday. []
     * enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday".
     * object.weekly_payout_days[] (Value): string. Value enum: "monday", "tuesday", "wednesday",
     * "thursday", "friday", "saturday", "sunday". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * blocked_reasons (Required): Array of {@link MoneyMovementBlockedReason}. Why payouts
         * can't run. Empty when nothing blocks them. blocked_reasons[] (Value): {@link
         * MoneyMovementBlockedReason}. Why a money movement action is blocked, with an error code,
         * a message, next steps, and who can resolve it. created_at (Required): string or null.
         * When Flint stored the payout settings record, as an RFC 3339 UTC instant at second
         * precision. Null when no stored settings record exists. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". default_payout_destinations (Required): Map of string. Default
         * payout destination for each currency, as a map from currency code to
         * payout_destination_id. Empty when no defaults are configured. Change a currency's
         * default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the
         * payouts embedded component. default_payout_destinations.* (Value): string. delay_days
         * (Required): integer. Normal settlement delay in days before a payment's funds become
         * available to pay out. A new account's first payments can stay pending longer; each
         * balance transaction's available_at is when its funds become available. Format: int32.
         * delay_days_override (Optional): integer. Settlement delay in days you set in place of
         * the account's default, 0 through 31. It doesn't guarantee the pending time of every
         * payment; see available_at on each balance transaction. Absent when none is set. Format:
         * int32. interval (Required): string. Payout schedule interval. Unmapped intervals are
         * returned as other. Value enum: "manual", "daily", "weekly", "monthly", "other".
         * merchant_id (Required): string. Merchant these settings belong to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". minimum_balance_currency_options (Optional): Map of
         * {@link MoneyValue}. Amount kept in your balance instead of paid out, keyed by currency
         * code. Absent when no minimum is set. minimum_balance_currency_options.* (Value): {@link
         * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. monthly_payout_days (Required): Array of integer. Days of the month, 1
         * through 31, on which monthly payouts are sent. monthly_payout_days[] (Value): integer.
         * Format: int32. next_actions (Required): Array of {@link NextAction}. Steps that would
         * let payouts run, when Flint has one to suggest. Empty otherwise. next_actions[] (Value):
         * {@link NextAction}. A follow-up action. When target_resource is present, send its
         * resource_id in the target request field named {resource_type}_id. payout_settings_id
         * (Required): string. Stable identifier of your payout settings. Example:
         * "pset_01KEZF7C0027X093301CQ36WSZ". statement_descriptor (Optional): string. Text shown
         * on your bank statement for payouts. Absent when none is set. status (Required): string.
         * Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled,
         * blocked_reasons says why and next_actions lists any steps Flint can suggest. Value enum:
         * "enabled", "disabled", "blocked", "pending". updated_at (Required): string or null. When
         * the stored payout settings record was last updated, as an RFC 3339 UTC instant at second
         * precision. Without a stored record, this is your processor's update time. `null` when
         * there is no stored record and your processor supplied no update time. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Persisted version of this
         * resource's owned state. Expanded resources and external observations can change
         * independently. Format: uint64. minimum: 1. weekly_payout_days (Required): Array of
         * string. Days of the week weekly payouts are sent. Accounts set up outside Flint can
         * report saturday or sunday; when you change the schedule, Flint accepts monday through
         * friday. [] enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
         * "sunday". weekly_payout_days[] (Value): string. Value enum: "monday", "tuesday",
         * "wednesday", "thursday", "friday", "saturday", "sunday".
         */
        "object": {
            /**
             * Why payouts can't run. Empty when nothing blocks them. [] (Value): {@link
             * MoneyMovementBlockedReason}. Why a money movement action is blocked, with an error
             * code, a message, next steps, and who can resolve it.
             */
            "blocked_reasons": Array<MoneyMovementBlockedReason>;
            /**
             * When Flint stored the payout settings record, as an RFC 3339 UTC instant at second
             * precision. Null when no stored settings record exists. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string | null;
            /**
             * Default payout destination for each currency, as a map from currency code to
             * payout_destination_id. Empty when no defaults are configured. Change a currency's
             * default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the
             * payouts embedded component. * (Value): string.
             */
            "default_payout_destinations": Record<string, string>;
            /**
             * Normal settlement delay in days before a payment's funds become available to pay
             * out. A new account's first payments can stay pending longer; each balance
             * transaction's available_at is when its funds become available. Format: int32.
             */
            "delay_days": number;
            /**
             * Settlement delay in days you set in place of the account's default, 0 through 31. It
             * doesn't guarantee the pending time of every payment; see available_at on each
             * balance transaction. Absent when none is set. Format: int32.
             */
            "delay_days_override"?: number;
            /**
             * Payout schedule interval. Unmapped intervals are returned as other. Value enum:
             * "manual", "daily", "weekly", "monthly", "other".
             */
            "interval": "manual" | "daily" | "weekly" | "monthly" | "other" | (string & {});
            /** Merchant these settings belong to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Amount kept in your balance instead of paid out, keyed by currency code. Absent when
             * no minimum is set. * (Value): {@link MoneyValue}. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "minimum_balance_currency_options"?: Record<string, MoneyValue>;
            /**
             * Days of the month, 1 through 31, on which monthly payouts are sent. [] (Value):
             * integer. Format: int32.
             */
            "monthly_payout_days": Array<number>;
            /**
             * Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. []
             * (Value): {@link NextAction}. A follow-up action. When target_resource is present,
             * send its resource_id in the target request field named {resource_type}_id.
             */
            "next_actions": Array<NextAction>;
            /**
             * Stable identifier of your payout settings. Example:
             * "pset_01KEZF7C0027X093301CQ36WSZ".
             */
            "payout_settings_id": string;
            /** Text shown on your bank statement for payouts. Absent when none is set. */
            "statement_descriptor"?: string;
            /**
             * Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't
             * enabled, blocked_reasons says why and next_actions lists any steps Flint can
             * suggest. Value enum: "enabled", "disabled", "blocked", "pending".
             */
            "status": "enabled" | "disabled" | "blocked" | "pending" | (string & {});
            /**
             * When the stored payout settings record was last updated, as an RFC 3339 UTC instant
             * at second precision. Without a stored record, this is your processor's update time.
             * `null` when there is no stored record and your processor supplied no update time.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string | null;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * Days of the week weekly payouts are sent. Accounts set up outside Flint can report
             * saturday or sunday; when you change the schedule, Flint accepts monday through
             * friday. [] enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
             * "sunday". [] (Value): string. Value enum: "monday", "tuesday", "wednesday",
             * "thursday", "friday", "saturday", "sunday".
             */
            "weekly_payout_days": Array<"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | (string & {})>;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PayoutSettings>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout_settings.updated". */
    "event_type"?: "payout_settings.updated";
});
export type PayoutSucceededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout.succeeded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout.succeeded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout.succeeded";
});
/**
 * The `payout.succeeded` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type PayoutSucceededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout.succeeded". */
    "event_type"?: "payout.succeeded";
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
 * The `payout.succeeded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PayoutSucceededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout.succeeded". */
    "event_type"?: "payout.succeeded";
});
/** A payout's bank trace ID, with whether it is pending, available, or unsupported. */
export type PayoutTraceID = {
    /**
     * Whether a bank trace ID is available. Unmapped trace states are returned as unsupported.
     * Value enum: "pending", "available", "unsupported".
     */
    "status": "pending" | "available" | "unsupported" | (string & {});
    /** The bank's trace number for the deposit, when Flint has it. */
    "value"?: string;
};
export type PayoutUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payout.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "arrival_date"?: string;
            "balance_source_type": "card" | "bank_account" | (string & {});
            "created_at": string;
            "currency": string;
            "description"?: string;
            "external_reference_id"?: string;
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            "failure_message"?: string;
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            "fee_money": ((MoneyValue) | (null));
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "method": "standard" | "instant" | "other" | (string & {});
            "net_money": ((MoneyValue) | (null));
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            "original_payout_id"?: string;
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            "payout_destination_id"?: string;
            "payout_id": string;
            "reversal_status": "none" | "reversed" | (string & {});
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            "reversed_by_payout_id"?: string;
            "statement_descriptor"?: string;
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | (string & {})>;
            "trace_id"?: PayoutTraceID;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<Payout>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payout.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payout.updated";
});
/**
 * The `payout.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type PayoutUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payout.updated". */
    "event_type"?: "payout.updated";
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
 * The `payout.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type PayoutUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Amount sent to your
     * bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.arrival_date (Optional): string. Calendar date the bank is expected to
     * receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format:
     * date. Example: "2026-08-02". object.balance_source_type (Required): string. Balance source
     * this payout draws from. Flint chooses the source when balance_source_type is omitted at
     * create. Clients must accept source types added in future releases. Value enum: "card",
     * "bank_account". object.created_at (Required): string. When the payout was created. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217
     * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * object.description (Optional): string. Description sent when the payout was created. Absent
     * when there is none. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Flint-normalized payout failure code. Unknown
     * provider values are returned as payout_failed. Value enum: "account_closed",
     * "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process",
     * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
     * "incorrect_account_holder_name", "incorrect_account_holder_address",
     * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
     * "payout_failed". object.failure_message (Optional): string. Flint-authored payout failure
     * message. This is stable explanatory text, not a raw provider message.
     * object.fee_amount_status (Required): string. Whether the payout fee is estimated or final.
     * not_applicable means no applicable fee status is known, including unmapped fee states. Value
     * enum: "estimated", "final", "not_applicable". object.fee_money (Required): {@link
     * MoneyValue} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0
     * once your processor records the payout. `null` when your processor hasn't recorded the
     * payout yet. object.fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.fee_money.anyOf[2]
     * (Value): null. object.initiated_by (Required): string. What started the payout. A payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled payouts list their balance transactions
     * through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason
     * not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled",
     * "platform", "other". object.merchant_id (Required): string. Merchant receiving the payout.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.method (Required): string. Payouts
     * Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on
     * a payout Flint recorded from the processor that was sent outside Flint. `other` is a method
     * Flint doesn't map. Value enum: "standard", "instant", "other". object.net_money (Required):
     * {@link MoneyValue} or null. Signed effect of this payout on your Flint balance. It is
     * negative because the payout takes money out: a 25000 payout with no fee has net_money
     * -25000. `null` when your processor hasn't recorded the payout yet. object.net_money.anyOf[1]
     * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.net_money.anyOf[2] (Value): null. object.original_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout this one reverses, inlined
     * when you request expand=original_payout. null when expanded and original_payout_id is
     * absent. Present only when `expand` includes `original_payout`; `null` when expanded and
     * there is no related payout. object.original_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.original_payout.anyOf[2] (Value):
     * null. object.original_payout_id (Optional): string. On a payout that reverses another
     * payout, the payout it reverses. Present only when Flint has the matching original payout. A
     * payout has at most one of original_payout_id and reversed_by_payout_id. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV". object.payout_destination (Optional): {@link
     * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you request
     * expand=payout_destination. null when expanded and payout_destination_id is absent. Present
     * only when `expand` includes `payout_destination`; `null` when expanded and there is no
     * related payout destination. object.payout_destination.anyOf[1] (Value): {@link
     * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank
     * name, last four digits, and status, returned when the destination is expanded.
     * object.payout_destination.anyOf[2] (Value): null. object.payout_destination_id (Optional):
     * string. Bank account or debit card receiving the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". object.payout_id (Required): string. Stable identifier
     * of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.reversal_status (Required):
     * string. Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed". object.reversed_by_payout
     * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one, inlined
     * when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is
     * absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and
     * there is no related payout. object.reversed_by_payout.anyOf[1] (Value): {@link
     * ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and
     * arrival date, returned when the payout is expanded. object.reversed_by_payout.anyOf[2]
     * (Value): null. object.reversed_by_payout_id (Optional): string. The separate payout
     * reversing this one, when Flint has the matching payout. Its presence does not mean the
     * reversal has completed; read reversal_status. A payout has at most one of original_payout_id
     * and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * object.statement_descriptor (Optional): string. Text shown on your bank statement for the
     * deposit, when one was set. object.status (Required): string. Where the payout is: pending
     * until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded
     * payout can still become failed if the bank returns the deposit, and canceled means a manual
     * payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now. cancel is offered while a payout is pending unless it was
     * scheduled automatically. [] enum: "cancel". object.supported_actions[] (Value): string.
     * Value enum: "cancel". object.trace_id (Optional): {@link PayoutTraceID}. The bank's trace
     * number for the deposit, which your bank can use to locate a late deposit. Its status says
     * whether the number is pending, available, or unsupported, and value holds the number when
     * Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with
     * whether it is pending, available, or unsupported. object.updated_at (Required): string. When
     * the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Amount sent to your bank. Always positive.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * arrival_date (Optional): string. Calendar date the bank is expected to receive the
         * funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
         * Example: "2026-08-02". balance_source_type (Required): string. Balance source this
         * payout draws from. Flint chooses the source when balance_source_type is omitted at
         * create. Clients must accept source types added in future releases. Value enum: "card",
         * "bank_account". created_at (Required): string. When the payout was created. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string. ISO 4217
         * currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * description (Optional): string. Description sent when the payout was created. Absent
         * when there is none. external_reference_id (Optional): string. Caller-owned identifier
         * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * failure_code (Optional): string. Flint-normalized payout failure code. Unknown provider
         * values are returned as payout_failed. Value enum: "account_closed", "account_frozen",
         * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
         * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
         * "incorrect_account_holder_name", "incorrect_account_holder_address",
         * "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card",
         * "payout_failed". failure_message (Optional): string. Flint-authored payout failure
         * message. This is stable explanatory text, not a raw provider message. fee_amount_status
         * (Required): string. Whether the payout fee is estimated or final. not_applicable means
         * no applicable fee status is known, including unmapped fee states. Value enum:
         * "estimated", "final", "not_applicable". fee_money (Required): {@link MoneyValue} or
         * null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
         * processor records the payout. `null` when your processor hasn't recorded the payout yet.
         * fee_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. fee_money.anyOf[2] (Value): null.
         * initiated_by (Required): string. What started the payout. A payout imported from your
         * processor follows the processor: scheduled when it sent the payout automatically,
         * otherwise manual. Only scheduled payouts list their balance transactions through GET
         * /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized.
         * Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform",
         * "other". merchant_id (Required): string. Merchant receiving the payout. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for
         * Flint, are not returned, and cannot be written through the public API. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. method (Required): string.
         * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
         * appears only on a payout Flint recorded from the processor that was sent outside Flint.
         * `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
         * net_money (Required): {@link MoneyValue} or null. Signed effect of this payout on your
         * Flint balance. It is negative because the payout takes money out: a 25000 payout with no
         * fee has net_money -25000. `null` when your processor hasn't recorded the payout yet.
         * net_money.anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. net_money.anyOf[2] (Value): null.
         * original_payout (Optional): {@link ExpandedPayoutSummary} or null. The payout this one
         * reverses, inlined when you request expand=original_payout. null when expanded and
         * original_payout_id is absent. Present only when `expand` includes `original_payout`;
         * `null` when expanded and there is no related payout. original_payout.anyOf[1] (Value):
         * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method,
         * status, and arrival date, returned when the payout is expanded. original_payout.anyOf[2]
         * (Value): null. original_payout_id (Optional): string. On a payout that reverses another
         * payout, the payout it reverses. Present only when Flint has the matching original
         * payout. A payout has at most one of original_payout_id and reversed_by_payout_id.
         * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". payout_destination (Optional): {@link
         * ExpandedPayoutDestinationSummary} or null. The payout destination, inlined when you
         * request expand=payout_destination. null when expanded and payout_destination_id is
         * absent. Present only when `expand` includes `payout_destination`; `null` when expanded
         * and there is no related payout destination. payout_destination.anyOf[1] (Value): {@link
         * ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type,
         * bank name, last four digits, and status, returned when the destination is expanded.
         * payout_destination.anyOf[2] (Value): null. payout_destination_id (Optional): string.
         * Bank account or debit card receiving the payout. Absent when Flint can't match your
         * processor's destination to a payout destination. Example:
         * "pdest_01KEZF7C00M55HZDZXZP6YVE6B". payout_id (Required): string. Stable identifier of
         * the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". reversal_status (Required):
         * string. Whether Flint has pulled a paid payout back from your bank: none until the
         * reversal completes, then reversed. A payout_reversal balance transaction returns the
         * money, and status stays succeeded. Value enum: "none", "reversed". reversed_by_payout
         * (Optional): {@link ExpandedPayoutSummary} or null. The payout reversing this one,
         * inlined when you request expand=reversed_by_payout. null when expanded and
         * reversed_by_payout_id is absent. Present only when `expand` includes
         * `reversed_by_payout`; `null` when expanded and there is no related payout.
         * reversed_by_payout.anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary
         * fields, including amount, method, status, and arrival date, returned when the payout is
         * expanded. reversed_by_payout.anyOf[2] (Value): null. reversed_by_payout_id (Optional):
         * string. The separate payout reversing this one, when Flint has the matching payout. Its
         * presence does not mean the reversal has completed; read reversal_status. A payout has at
         * most one of original_payout_id and reversed_by_payout_id. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". statement_descriptor (Optional): string. Text shown on
         * your bank statement for the deposit, when one was set. status (Required): string. Where
         * the payout is: pending until it is sent, in_transit on its way to your bank, then
         * succeeded or failed. A succeeded payout can still become failed if the bank returns the
         * deposit, and canceled means a manual payout was canceled while pending. Value enum:
         * "pending", "in_transit", "succeeded", "failed", "canceled". supported_actions
         * (Required): Array of string. Lifecycle actions Flint accepts now. cancel is offered
         * while a payout is pending unless it was scheduled automatically. [] enum: "cancel".
         * supported_actions[] (Value): string. Value enum: "cancel". trace_id (Optional): {@link
         * PayoutTraceID}. The bank's trace number for the deposit, which your bank can use to
         * locate a late deposit. Its status says whether the number is pending, available, or
         * unsupported, and value holds the number when Flint has it. Absent when Flint has no
         * trace information. A payout's bank trace ID, with whether it is pending, available, or
         * unsupported. updated_at (Required): string. When the payout last changed. Format:
         * date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * Amount sent to your bank. Always positive. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using
             * the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
             */
            "arrival_date"?: string;
            /**
             * Balance source this payout draws from. Flint chooses the source when
             * balance_source_type is omitted at create. Clients must accept source types added in
             * future releases. Value enum: "card", "bank_account".
             */
            "balance_source_type": "card" | "bank_account" | (string & {});
            /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /** Description sent when the payout was created. Absent when there is none. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Flint-normalized payout failure code. Unknown provider values are returned as
             * payout_failed. Value enum: "account_closed", "account_frozen",
             * "bank_account_restricted", "bank_ownership_changed", "could_not_process",
             * "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number",
             * "incorrect_account_holder_name", "incorrect_account_holder_address",
             * "incorrect_account_holder_tax_id", "invalid_currency", "no_account",
             * "unsupported_card", "payout_failed".
             */
            "failure_code"?: "account_closed"
                | "account_frozen"
                | "bank_account_restricted"
                | "bank_ownership_changed"
                | "could_not_process"
                | "debit_not_authorized"
                | "declined"
                | "insufficient_funds"
                | "invalid_account_number"
                | "incorrect_account_holder_name"
                | "incorrect_account_holder_address"
                | "incorrect_account_holder_tax_id"
                | "invalid_currency"
                | "no_account"
                | "unsupported_card"
                | "payout_failed"
                | (string & {});
            /**
             * Flint-authored payout failure message. This is stable explanatory text, not a raw
             * provider message.
             */
            "failure_message"?: string;
            /**
             * Whether the payout fee is estimated or final. not_applicable means no applicable fee
             * status is known, including unmapped fee states. Value enum: "estimated", "final",
             * "not_applicable".
             */
            "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
            /**
             * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your
             * processor records the payout. `null` when your processor hasn't recorded the payout
             * yet. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "fee_money": ((MoneyValue) | (null));
            /**
             * What started the payout. A payout imported from your processor follows the
             * processor: scheduled when it sent the payout automatically, otherwise manual. Only
             * scheduled payouts list their balance transactions through GET
             * /v1/balance-transactions?payout_id=; other payouts return 409 with reason
             * not_itemized. Unmapped sources are returned as other. Value enum: "manual",
             * "scheduled", "platform", "other".
             */
            "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
            /** Merchant receiving the payout. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant`
             * appears only on a payout Flint recorded from the processor that was sent outside
             * Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant",
             * "other".
             */
            "method": "standard" | "instant" | "other" | (string & {});
            /**
             * Signed effect of this payout on your Flint balance. It is negative because the
             * payout takes money out: a 25000 payout with no fee has net_money -25000. `null` when
             * your processor hasn't recorded the payout yet. anyOf[1] (Value): {@link MoneyValue}.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code. anyOf[2] (Value): null.
             */
            "net_money": ((MoneyValue) | (null));
            /**
             * The payout this one reverses, inlined when you request expand=original_payout. null
             * when expanded and original_payout_id is absent. Present only when `expand` includes
             * `original_payout`; `null` when expanded and there is no related payout. anyOf[1]
             * (Value): {@link ExpandedPayoutSummary}. A payout's summary fields, including amount,
             * method, status, and arrival date, returned when the payout is expanded. anyOf[2]
             * (Value): null.
             */
            "original_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * On a payout that reverses another payout, the payout it reverses. Present only when
             * Flint has the matching original payout. A payout has at most one of
             * original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "original_payout_id"?: string;
            /**
             * The payout destination, inlined when you request expand=payout_destination. null
             * when expanded and payout_destination_id is absent. Present only when `expand`
             * includes `payout_destination`; `null` when expanded and there is no related payout
             * destination. anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout
             * destination's summary fields, such as type, bank name, last four digits, and status,
             * returned when the destination is expanded. anyOf[2] (Value): null.
             */
            "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
            /**
             * Bank account or debit card receiving the payout. Absent when Flint can't match your
             * processor's destination to a payout destination. Example:
             * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
             */
            "payout_destination_id"?: string;
            /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
            "payout_id": string;
            /**
             * Whether Flint has pulled a paid payout back from your bank: none until the reversal
             * completes, then reversed. A payout_reversal balance transaction returns the money,
             * and status stays succeeded. Value enum: "none", "reversed".
             */
            "reversal_status": "none" | "reversed" | (string & {});
            /**
             * The payout reversing this one, inlined when you request expand=reversed_by_payout.
             * null when expanded and reversed_by_payout_id is absent. Present only when `expand`
             * includes `reversed_by_payout`; `null` when expanded and there is no related payout.
             * anyOf[1] (Value): {@link ExpandedPayoutSummary}. A payout's summary fields,
             * including amount, method, status, and arrival date, returned when the payout is
             * expanded. anyOf[2] (Value): null.
             */
            "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
            /**
             * The separate payout reversing this one, when Flint has the matching payout. Its
             * presence does not mean the reversal has completed; read reversal_status. A payout
             * has at most one of original_payout_id and reversed_by_payout_id. Example:
             * "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "reversed_by_payout_id"?: string;
            /** Text shown on your bank statement for the deposit, when one was set. */
            "statement_descriptor"?: string;
            /**
             * Where the payout is: pending until it is sent, in_transit on its way to your bank,
             * then succeeded or failed. A succeeded payout can still become failed if the bank
             * returns the deposit, and canceled means a manual payout was canceled while pending.
             * Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
             */
            "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Lifecycle actions Flint accepts now. cancel is offered while a payout is pending
             * unless it was scheduled automatically. [] enum: "cancel". [] (Value): string. Value
             * enum: "cancel".
             */
            "supported_actions": Array<"cancel" | (string & {})>;
            /**
             * The bank's trace number for the deposit, which your bank can use to locate a late
             * deposit. Its status says whether the number is pending, available, or unsupported,
             * and value holds the number when Flint has it. Absent when Flint has no trace
             * information. A payout's bank trace ID, with whether it is pending, available, or
             * unsupported.
             */
            "trace_id"?: PayoutTraceID;
            /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Payout>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payout.updated". */
    "event_type"?: "payout.updated";
});
export type PayoutsCancelParams = (InputValue<CancelPayoutRequestInput>);
export type PayoutsCreateParams = (InputValue<CreatePayoutRequestInput>);
export type PayoutsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: original_payout,
     * payout_destination, reversed_by_payout. Expansion requires money_movement.payouts.read plus
     * the read scope for each expanded resource. Limits: at most 10 unique expand paths per
     * request. [] enum: "original_payout", "payout_destination", "reversed_by_payout". Value enum:
     * "original_payout", "payout_destination", "reversed_by_payout". anyOf[1] (Value): Array of
     * string. [] enum: "original_payout", "payout_destination", "reversed_by_payout". anyOf[1][]
     * (Value): string. Value enum: "original_payout", "payout_destination", "reversed_by_payout".
     * anyOf[2] (Value): string. Value enum: "original_payout", "payout_destination",
     * "reversed_by_payout".
     */
    "expand"?: InputValue<("original_payout" | "payout_destination" | "reversed_by_payout")
        | readonly ("original_payout" | "payout_destination" | "reversed_by_payout")[]>;
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
export type PayoutsListParams = {
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Include related objects in the response. Supported expansions: original_payout,
     * payout_destination, reversed_by_payout. Include the requested related resources using scoped
     * batch reads for this page. Each relationship requires its existing target read scopes.
     * Expansion changes the representation without changing pagination tokens. Limits: at most 10
     * unique expand paths per request. [] enum: "original_payout", "payout_destination",
     * "reversed_by_payout". Value enum: "original_payout", "payout_destination",
     * "reversed_by_payout". anyOf[1] (Value): Array of string. [] enum: "original_payout",
     * "payout_destination", "reversed_by_payout". anyOf[1][] (Value): string. Value enum:
     * "original_payout", "payout_destination", "reversed_by_payout". anyOf[2] (Value): string.
     * Value enum: "original_payout", "payout_destination", "reversed_by_payout".
     */
    "expand"?: InputValue<("original_payout" | "payout_destination" | "reversed_by_payout")
        | readonly ("original_payout" | "payout_destination" | "reversed_by_payout")[]>;
    /**
     * Filter recorded payouts by method. Flint sends only standard payouts. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "standard", "instant", "other". Value
     * enum: "standard", "instant", "other". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "standard", "instant", "other". anyOf[1][] (Value): string. Value enum: "standard",
     * "instant", "other". anyOf[2] (Value): string. Value enum: "standard", "instant", "other".
     */
    "method"?: InputValue<("standard" | "instant" | "other") | readonly ("standard" | "instant" | "other")[]>;
    /**
     * Optional Flint balance source type filter. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "card", "bank_account". Value enum: "card", "bank_account".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "card", "bank_account". anyOf[1][]
     * (Value): string. Value enum: "card", "bank_account". anyOf[2] (Value): string. Value enum:
     * "card", "bank_account".
     */
    "balance_source_type"?: InputValue<("card" | "bank_account") | readonly ("card" | "bank_account")[]>;
    /** Optional payout destination ID filter. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B". */
    "payout_destination_id"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across payout ID, external reference ID, description, and statement descriptor. Text
     * fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards.
     * IDs match from the start and need the type prefix, such as po_01.
     */
    "query"?: InputValue<string>;
    /**
     * Optional payout status filter. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "pending", "in_transit", "succeeded", "failed", "canceled". Value enum:
     * "pending", "in_transit", "succeeded", "failed", "canceled". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "pending", "in_transit", "succeeded", "failed", "canceled".
     * anyOf[1][] (Value): string. Value enum: "pending", "in_transit", "succeeded", "failed",
     * "canceled". anyOf[2] (Value): string. Value enum: "pending", "in_transit", "succeeded",
     * "failed", "canceled".
     */
    "status"?: InputValue<("pending" | "in_transit" | "succeeded" | "failed" | "canceled")
        | readonly ("pending" | "in_transit" | "succeeded" | "failed" | "canceled")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Inclusive lower bound on arrival_date at midnight UTC. Use YYYY-MM-DD. Format: date.
     * Example: "2026-08-02".
     */
    "arrival_date_from"?: InputValue<string>;
    /**
     * Exclusive upper bound on arrival_date at midnight UTC. Use YYYY-MM-DD. Format: date.
     * Example: "2026-08-02".
     */
    "arrival_date_to"?: InputValue<string>;
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
 * Client-side action required before continuing a payment. Resume an order through PayOrder with
 * order_payment_attempt_id, or continue a standalone PaymentIntent through its confirm endpoint
 * without a replacement credential.
 */
export type PendingPaymentAction = {
    /**
     * Product-level action type. payment_authentication applies to a payment leg;
     * payment_method_authentication applies to saving a future-billing payment method. Value enum:
     * "payment_authentication", "payment_method_authentication".
     */
    "action_type": "payment_authentication" | "payment_method_authentication" | (string & {});
    /**
     * Direct browser authority required to finish this action before continuing through Flint.
     * Unlike collection guidance, this payload includes a client secret. Typed provider-specific
     * browser action payload. Execute the selected provider action before continuing the owning
     * payment through Flint.
     */
    "client_action": PaymentClientAction;
    /**
     * Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming
     * an attempt. Example: "pendact_01KEZF7C00SVMRXWKVZX6R9822".
     */
    "pending_action_id": string;
    /**
     * The attempt subject that requires browser action. Exactly one of payment_intent or
     * setup_payment_source is present. Typed subject for a pending order payment action. Exactly
     * one subject is present.
     */
    "subject": PendingPaymentActionSubject;
};
/** The payment intent that needs buyer authentication in a pending payment action. */
export type PendingPaymentActionPaymentIntentSubject = {
    /** Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
};
/** The payment method setup that needs buyer authentication in a pending payment action. */
export type PendingPaymentActionSetupPaymentSourceSubject = {
    /** Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". */
    "payment_method_id": string;
};
