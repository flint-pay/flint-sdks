import type {
    MerchantWebhookEnvelope,
    MetadataMap,
    MoneyValue,
    MoneyValueInput,
    MetadataPatchRequest,
    MetadataPatchRequestInput
} from './types-35.js';
import type { ResponseMeta } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { AdvanceTestClockRequestInput, AddressRequest, AddressRequestInput } from './types-0.js';
import type { CreateTestClockRequestInput, CreditNoteLineItemRequest, CreditNoteLineItemRequestInput } from './types-12.js';
import type { ImageRequest, ImageRequestInput } from './types-25.js';
import type { CheckoutBuyerContactRequest, CheckoutBuyerContactRequestInput } from './types-4.js';
import type { CheckoutSubscriptionTermsRequest, CheckoutSubscriptionTermsRequestInput } from './types-5.js';
import type { TaxIdentityPatch, TaxIdentityPatchInput } from './types-57.js';
import type {
    DeliveryLocationSetConfiguration,
    DeliveryLocationSetConfigurationInput,
    DeliveryMethodConfigurationPatchRequest,
    DeliveryMethodConfigurationPatchRequestInput
} from './types-15.js';
import type { DeliveryProfileConfigurationRequest, DeliveryProfileConfigurationRequestInput } from './types-17.js';
import type {
    DeliveryRateCallbackConfigurationPatchRequest,
    DeliveryRateCallbackConfigurationPatchRequestInput
} from './types-18.js';
import type { WebhookSigningMethod, WebhookSigningMethodInput } from './types-61.js';
import type { DeliveryZoneConfiguration } from './types-20.js';
/**
 * A sandbox clock that customers created on it, and their subscriptions, read as the current time.
 */
export type TestClock = {
    /** When the test clock was created, in real time. Format: date-time. */
    "created_at": string;
    /**
     * The time the test clock shows. Customers created on the clock, and their subscriptions,
     * treat it as the current time. After you advance the clock, `frozen_at` is the time you
     * advanced it to, while `status` is `advancing` and after. Format: date-time.
     */
    "frozen_at": string;
    /**
     * Your label for the test clock. Omitted when you didn't set one. minLength: 1. maxLength:
     * 255.
     */
    "name"?: string;
    /**
     * Where the test clock is in its lifecycle. Read it before advancing, and after an advance
     * until it's `ready` or `failed`. Value enum: "ready", "advancing", "failed", "archived".
     */
    "status": "ready" | "advancing" | "failed" | "archived" | (string & {});
    /** Unique identifier for the test clock. */
    "test_clock_id": string;
    /** When the test clock last changed, in real time. Format: date-time. */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type TestClockAdvancingEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": TestClock;
    };
    "event_type"?: "test_clock.advancing";
})
    & {
    "event_type": "test_clock.advancing";
});
export type TestClockArchivedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": TestClock;
    };
    "event_type"?: "test_clock.archived";
})
    & {
    "event_type": "test_clock.archived";
});
export type TestClockCreatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": TestClock;
    };
    "event_type"?: "test_clock.created";
})
    & {
    "event_type": "test_clock.created";
});
export type TestClockFailedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": TestClock;
    };
    "event_type"?: "test_clock.failed";
})
    & {
    "event_type": "test_clock.failed";
});
/** A page of `TestClock` objects. */
export type TestClockListResponse = {
    /**
     *  [] (Value): {@link TestClock}. A sandbox clock that customers created on it, and their
     * subscriptions, read as the current time.
     */
    "data": Array<TestClock>;
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
export type TestClockReadyEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": TestClock;
    };
    "event_type"?: "test_clock.ready";
})
    & {
    "event_type": "test_clock.ready";
});
/** A response containing `TestClock` data. */
export type TestClockResponse = {
    /**
     * A sandbox clock that customers created on it, and their subscriptions, read as the current
     * time.
     */
    "data": TestClock;
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
export type TestClocksAdvanceParams = (InputValue<AdvanceTestClockRequestInput>);
export type TestClocksCreateParams = (InputValue<CreateTestClockRequestInput>);
export type TestClocksDeleteParams = {
    /**
     * Optional version most recently read. A stale value returns 409 VERSION_CONFLICT with the
     * current version. Format: int64. minimum: 1.
     */
    "expected_version"?: InputValue<number>;
};
export type TestClocksGetParams = {};
export type TestClocksListParams = {
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "ready", "advancing", "failed", "archived". Value enum:
     * "ready", "advancing", "failed", "archived". anyOf[1] (Value): Array of string. minItems: 1.
     * [] enum: "ready", "advancing", "failed", "archived". anyOf[1][] (Value): string. Value enum:
     * "ready", "advancing", "failed", "archived". anyOf[2] (Value): string. Value enum: "ready",
     * "advancing", "failed", "archived".
     */
    "status"?: InputValue<("ready" | "advancing" | "failed" | "archived")
        | readonly ("ready" | "advancing" | "failed" | "archived")[]>;
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
};
/**
 * Settings for a text modifier group: whether input is required or multiline, and its length
 * limits.
 */
export type TextModifierConfig = {
    /**
     * Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace.
     * Format: int32.
     */
    "max_length"?: number;
    /**
     * Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace.
     * Format: int32.
     */
    "min_length"?: number;
    /** Whether the buyer's text can include line breaks. */
    "multiline": boolean;
    /**
     * Whether buyers must enter text for this group. A modifier set's required override takes
     * precedence.
     */
    "required": boolean;
};
/**
 * Send only text fields to change. Omitted fields keep their stored values. null clears min_length
 * or max_length. An empty object is invalid. The merged configuration is validated. minProperties:
 * 1.
 */
export type TextModifierConfigPatchRequest = {
    /**
     * Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace.
     * Omit it to keep the current limit; send null to clear it. Format: int32. minimum: 1.
     * maximum: 500.
     */
    "max_length"?: number | null;
    /**
     * Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace.
     * Omit it to keep the current minimum; send null to clear it. Format: int32. minimum: 0.
     */
    "min_length"?: number | null;
    /** Whether the buyer's text can include line breaks. */
    "multiline"?: boolean;
    /**
     * Whether buyers must enter text for this group. A modifier set's required override takes
     * precedence.
     */
    "required"?: boolean;
};
/**
 * Send only text fields to change. Omitted fields keep their stored values. null clears min_length
 * or max_length. An empty object is invalid. The merged configuration is validated. minProperties:
 * 1.
 */
export type TextModifierConfigPatchRequestInput = TextModifierConfigPatchRequest;
/**
 * Settings for a text modifier group when creating or updating one: required, multiline, and
 * length limits.
 */
export type TextModifierConfigRequest = {
    /**
     * Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace.
     * Format: int32.
     */
    "max_length"?: number;
    /**
     * Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace.
     * Format: int32.
     */
    "min_length"?: number;
    /** Whether the buyer's text can include line breaks. Default: false. */
    "multiline"?: boolean;
    /**
     * Whether buyers must enter text for this group. A modifier set's required override takes
     * precedence. Default: false.
     */
    "required"?: boolean;
};
/**
 * Settings for a text modifier group when creating or updating one: required, multiline, and
 * length limits.
 */
export type TextModifierConfigRequestInput = TextModifierConfigRequest;
/** Text a buyer entered for a text modifier group on an order line item. */
export type TextModifierRequest = {
    /**
     * Identifier of the text modifier group. For a group a modifier set owns (source: inline),
     * read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return
     * it. minLength: 1.
     */
    "modifier_group_id": string;
    /** Text entered by the buyer, subject to the group's text rules. minLength: 1. */
    "value": string;
};
/** Text a buyer entered for a text modifier group on an order line item. */
export type TextModifierRequestInput = TextModifierRequest;
/** Colors and title applied to a payment link's checkout page. */
export type ThemeConfig = {
    "accent_color"?: string;
    "primary_color"?: string;
    "title"?: string;
};
/** Colors and title to apply to a checkout session's page. */
export type ThemeConfigRequestInput = {
    /** minLength: 1. */
    "accent_color"?: string;
    /** minLength: 1. */
    "primary_color"?: string;
    /** minLength: 1. */
    "title"?: string;
};
/**
 * Event details for a ticketed order: name, location, start time, time zone, and the tickets
 * issued.
 */
export type TicketedEvent = {
    /** Where the event takes place. */
    "location"?: string;
    /** Event name when the order was placed. */
    "name": string;
    /** When the event starts. RFC 3339 timestamp. Format: date-time. */
    "starts_at"?: string;
    /**
     * Ticket numbers issued for this order. Empty while ticket_status is pending. [] (Value):
     * string.
     */
    "ticket_numbers": Array<string>;
    /** Value enum: "pending", "issued", "void". */
    "ticket_status": "pending" | "issued" | "void" | (string & {});
    /** IANA time zone Flint shows the event in. */
    "timezone"?: string;
};
/**
 * A tip on an order, with its requested, settled, and refunded amounts, status, and how it was
 * paid.
 */
export type Tip = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "description"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "effective_amount_money": MoneyValue;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    "name"?: string;
    "order_tip_id": string;
    /**
     *  [] (Value): {@link TipPaymentIntentAllocation}. The part of a tip paid through one payment
     * intent.
     */
    "payment_intent_allocations": Array<TipPaymentIntentAllocation>;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "refunded_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "settled_amount_money": MoneyValue;
    /** Value enum: "requested", "settled", "partially_refunded", "refunded", "canceled". */
    "status": "requested" | "settled" | "partially_refunded" | "refunded" | "canceled" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     *  [] (Value): {@link TipValueSettlementAllocation}. The part of a tip paid through one value
     * settlement.
     */
    "value_settlement_allocations": Array<TipValueSettlementAllocation>;
};
/** The part of a tip paid through one payment intent. */
export type TipPaymentIntentAllocation = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    "payment_intent_id": string;
};
/** The part of a tip paid through one value settlement. */
export type TipValueSettlementAllocation = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    "value_settlement_id": string;
};
/**
 * Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips
 * are allowed.
 */
export type TippingSettings = {
    /** Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    "default_enabled"?: boolean;
    /**
     * Replaced as a whole: send every field you want to keep. The preselected fixed tip. Its
     * amount and currency must match one of the effective smart_tip_money_options. Null means no
     * preselection is set; effective settings use Flint's default. anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. anyOf[1].amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. anyOf[1].currency (Required): string. ISO 4217 currency code for
     * this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     */
    "default_smart_tip_money": ((({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>))
        | (null)
        | (unknown));
    /**
     * The preselected tip percent, from 1 through 100 with at most four decimal places. It must
     * match one of the effective tip_percent_options. Null means no preselection is set; effective
     * settings use Flint's default. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "default_tip_percent": number | null;
    /**
     * minItems: 3. maxItems: 3. [] (Value): {@link MoneyValue}. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. [].amount (Required): integer string.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. Amount in the currency's minor unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. [].currency
     * (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$.
     */
    "smart_tip_money_options"?: Array<({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>)>;
    /** Whether checkout offers fixed tip amounts instead of tip percentages. */
    "smart_tips_enabled"?: boolean;
    /**
     * Three tip percents to offer, each from 1 through 100 with at most four decimal places.
     * minItems: 3. maxItems: 3. [] (Value): number. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "tip_percent_options"?: Array<number>;
};
/**
 * Tipping settings to change when updating settings. Omit a field to keep it; send null to clear a
 * preselected tip. minProperties: 1.
 */
export type TippingSettingsPatch = {
    /** Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    "default_enabled"?: boolean;
    /**
     * Replaced as a whole: send every field you want to keep. Omit to preserve the current value.
     * Send null to clear the preselection and use Flint's default. When replacing presets,
     * explicitly replace or clear a preselection that is no longer offered. anyOf[1] (Value):
     * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. anyOf[1].amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. anyOf[1].currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * anyOf[2] (Value): null.
     */
    "default_smart_tip_money"?: ((({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>))
        | (null)
        | (unknown));
    /**
     * Omit to preserve the current value. Send null to clear the preselection and use Flint's
     * default. When replacing presets, explicitly replace or clear a preselection that is no
     * longer offered. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "default_tip_percent"?: number | null;
    /**
     * minItems: 3. maxItems: 3. [] (Value): {@link MoneyValue}. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. [].amount (Required): integer string.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. Amount in the currency's minor unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. [].currency
     * (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$.
     */
    "smart_tip_money_options"?: Array<({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>)>;
    /** Whether checkout offers fixed tip amounts instead of tip percentages. */
    "smart_tips_enabled"?: boolean;
    /**
     * Three tip percents to offer, each from 1 through 100 with at most four decimal places.
     * minItems: 3. maxItems: 3. [] (Value): number. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "tip_percent_options"?: Array<number>;
};
/**
 * Tipping settings to change when updating settings. Omit a field to keep it; send null to clear a
 * preselected tip. minProperties: 1.
 */
export type TippingSettingsPatchInput = {
    /** Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    "default_enabled"?: boolean;
    /**
     * Replaced as a whole: send every field you want to keep. Omit to preserve the current value.
     * Send null to clear the preselection and use Flint's default. When replacing presets,
     * explicitly replace or clear a preselection that is no longer offered. anyOf[1] (Value):
     * {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. anyOf[1].amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. anyOf[1].currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * anyOf[2] (Value): null.
     */
    "default_smart_tip_money"?: ((({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>))
        | (null));
    /**
     * Omit to preserve the current value. Send null to clear the preselection and use Flint's
     * default. When replacing presets, explicitly replace or clear a preselection that is no
     * longer offered. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "default_tip_percent"?: number | null;
    /**
     * minItems: 3. maxItems: 3. [] (Value): {@link MoneyValueInput}. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. [].amount (Required): integer string.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. Amount in the currency's minor unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. [].currency
     * (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$.
     */
    "smart_tip_money_options"?: Array<({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>)>;
    /** Whether checkout offers fixed tip amounts instead of tip percentages. */
    "smart_tips_enabled"?: boolean;
    /**
     * Three tip percents to offer, each from 1 through 100 with at most four decimal places.
     * minItems: 3. maxItems: 3. [] (Value): number. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "tip_percent_options"?: Array<number>;
};
/** The request body for: Transition a gift card. */
export type TransitionGiftCardRequest = ({
    /** Value enum: "freeze", "unfreeze", "close". */
    "action": "freeze" | "unfreeze" | "close" | (string & {});
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Value enum: "suspicious_activity", "customer_request", "support_issue". */
    "reason"?: "suspicious_activity" | "customer_request" | "support_issue" | (string & {});
})
    & ((Exclude<TransitionGiftCardRequestFreeze & object, readonly unknown[]>)
    | (Exclude<TransitionGiftCardRequestWithoutReason & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `freeze` variant of `TransitionGiftCardRequest`. */
export type TransitionGiftCardRequestFreeze = ({
    /** Value enum: "freeze". */
    "action": "freeze" | (string & {});
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Value enum: "suspicious_activity", "customer_request", "support_issue". */
    "reason": "suspicious_activity" | "customer_request" | "support_issue" | (string & {});
})
    & ({
    /** Value enum: "freeze". */
    "action": unknown;
    /** Value enum: "suspicious_activity", "customer_request", "support_issue". */
    "reason": "suspicious_activity" | "customer_request" | "support_issue" | (string & {});
});
/** The `freeze` variant of `TransitionGiftCardRequest`. */
export type TransitionGiftCardRequestFreezeInput = ({
    /** Value enum: "freeze". */
    "action": "freeze";
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Value enum: "suspicious_activity", "customer_request", "support_issue". */
    "reason": "suspicious_activity" | "customer_request" | "support_issue";
})
    & ({
    /** Value enum: "freeze". */
    "action": ("freeze") & ("freeze");
    /** Value enum: "suspicious_activity", "customer_request", "support_issue". */
    "reason": "suspicious_activity" | "customer_request" | "support_issue";
});
/** The request body for: Transition a gift card. */
export type TransitionGiftCardRequestInput = ({
    /** Value enum: "freeze", "unfreeze", "close". */
    "action": "freeze" | "unfreeze" | "close";
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Value enum: "suspicious_activity", "customer_request", "support_issue". */
    "reason"?: "suspicious_activity" | "customer_request" | "support_issue";
})
    & ((Exclude<TransitionGiftCardRequestFreezeInput & object, readonly unknown[]>)
    | (Exclude<TransitionGiftCardRequestWithoutReasonInput & object, readonly unknown[]>));
/**
 * The `close` variant of `TransitionGiftCardRequest`. The `unfreeze` variant of
 * `TransitionGiftCardRequest`.
 */
export type TransitionGiftCardRequestWithoutReason = ({
    /** Value enum: "unfreeze", "close". */
    "action": "unfreeze" | "close" | (string & {});
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Value enum: "suspicious_activity", "customer_request", "support_issue". */
    "reason"?: "suspicious_activity" | "customer_request" | "support_issue" | (string & {});
})
    & (({
    /** Value enum: "unfreeze", "close". */
    "action": unknown;
}));
/**
 * The `close` variant of `TransitionGiftCardRequest`. The `unfreeze` variant of
 * `TransitionGiftCardRequest`.
 */
export type TransitionGiftCardRequestWithoutReasonInput = ({
    /** Value enum: "unfreeze", "close". */
    "action": "unfreeze" | "close";
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Value enum: "suspicious_activity", "customer_request", "support_issue". */
    "reason"?: "suspicious_activity" | "customer_request" | "support_issue";
})
    & (({
    /** Value enum: "unfreeze", "close". */
    "action": "unfreeze" | "close";
})
    & ({
    "reason"?: never;
}));
/** The request body for: Update an API key. */
export type UpdateAPIKeyRequest = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session or a full-access API key. Value enum: "full", "read_only",
     * "restricted".
     */
    "access"?: "full" | "read_only" | "restricted" | (string & {});
    /**
     * Resource version last read by the caller. Required when access or scopes is present.
     * Optional for scalar updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format:
     * date-time. minLength: 1.
     */
    "expires_at"?: string | null;
    /** minLength: 1. maxLength: 100. */
    "name"?: string;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". [] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {})>;
})
    & ((({
    /** Value enum: "full". */
    "access": unknown;
}))
    | (({
    /** Value enum: "read_only". */
    "access": unknown;
}))
    | ({
    /** Value enum: "restricted". */
    "access": unknown;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". [] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {})>;
})
    | (unknown)
    | (Record<string, unknown>));
/** The request body for: Update an API key. */
export type UpdateAPIKeyRequestInput = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session or a full-access API key. Value enum: "full", "read_only",
     * "restricted".
     */
    "access"?: "full" | "read_only" | "restricted";
    /**
     * Resource version last read by the caller. Required when access or scopes is present.
     * Optional for scalar updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format:
     * date-time. minLength: 1.
     */
    "expires_at"?: string | globalThis.Date | null;
    /** minLength: 1. maxLength: 100. */
    "name"?: string;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". [] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write">;
})
    & ((({
    /** Value enum: "full". */
    "access": ("full") & ("full");
})
    & ({
    "scopes"?: never;
}))
    | (({
    /** Value enum: "read_only". */
    "access": ("read_only") & ("read_only");
})
    & ({
    "scopes"?: never;
}))
    | ({
    /** Value enum: "restricted". */
    "access": ("restricted") & ("restricted");
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". [] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write">;
})
    | ((({
    "access"?: never;
}) & ({
    "scopes"?: never;
}))));
/**
 * A component to keep or add when updating a bundle, with its variant, quantity, position, and
 * delivery profile.
 */
export type UpdateBundleComponentRequest = {
    /**
     * Identifier of an existing component to retain. Omit it to add a new component. minLength: 1.
     * pattern: ^bunc_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "bundle_component_id"?: string;
    /**
     * Component delivery profile override. Omit to inherit the variant's profile. Send null to
     * clear it. minLength: 1.
     */
    "delivery_profile_id"?: string | null;
    /** Display order among the bundle's components, starting at zero. Format: int32. minimum: 0. */
    "position"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Identifier of the product variant included in the bundle. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_id": string;
};
/**
 * A component to keep or add when updating a bundle, with its variant, quantity, position, and
 * delivery profile.
 */
export type UpdateBundleComponentRequestInput = UpdateBundleComponentRequest;
/**
 * Send only fields to change. Omitted fields keep their stored values. null clears nullable
 * fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE.
 * Metadata merges by key, with at most 50 keys after merging.
 */
export type UpdateBundleRequest = ({
    /** Send null to clear it. minLength: 1. maxLength: 100. */
    "barcode"?: string | null;
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * Replaces all bundle components atomically. Include an existing bundle_component_id to retain
     * a member. Omitted members are removed. All must share taxable and line_item_tax_category; an
     * unset category equals only another unset category. Components are compared with the first
     * input component, with a NOT_ALLOWED detail at each differing components[index].variant_id.
     * Null is not accepted. [] (Value): {@link UpdateBundleComponentRequest}. A component to keep
     * or add when updating a bundle, with its variant, quantity, position, and delivery profile.
     */
    "components"?: Array<UpdateBundleComponentRequest>;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Resource version last read by the caller. Required when components or images is present.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequest}. An image you supply
     * by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to
     * a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value): string or null.
     * minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequest & object, readonly unknown[]>)) | (null) | (unknown));
    /** Attached modifier set. Send null on update to remove it. minLength: 1. */
    "modifier_set_id"?: string | null;
    /** Bundle name shown to buyers. minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Send null to clear it. minLength: 1. maxLength: 100. */
    "sku"?: string | null;
    /**
     * Whether the bundle is active or inactive. An inactive bundle cannot be sold. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
});
/**
 * Send only fields to change. Omitted fields keep their stored values. null clears nullable
 * fields; null on any other field returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE.
 * Metadata merges by key, with at most 50 keys after merging.
 */
export type UpdateBundleRequestInput = ({
    /** Send null to clear it. minLength: 1. maxLength: 100. */
    "barcode"?: string | null;
    /**
     * Relationship set of category handles that must already exist. Each handle has 1 to 100
     * characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the
     * whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does
     * not require expected_version. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * Replaces all bundle components atomically. Include an existing bundle_component_id to retain
     * a member. Omitted members are removed. All must share taxable and line_item_tax_category; an
     * unset category equals only another unset category. Components are compared with the first
     * input component, with a NOT_ALLOWED detail at each differing components[index].variant_id.
     * Null is not accepted. [] (Value): {@link UpdateBundleComponentRequestInput}. A component to
     * keep or add when updating a bundle, with its variant, quantity, position, and delivery
     * profile.
     */
    "components"?: Array<UpdateBundleComponentRequestInput>;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Resource version last read by the caller. Required when components or images is present.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequestInput}. An image you
     * supply by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequestInput}.
     * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
     * sets a value, a null value deletes the key, and an empty object makes no change; send null
     * for the whole field to clear all caller-owned metadata. The resulting map is limited the
     * same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Deleting a key that does not exist is allowed, so the number of operations is not
     * itself the stored-map limit. Values can't be empty strings, and keys starting with flint_
     * are reserved for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the
     * field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and
     * an empty object makes no change; send null for the whole field to clear all caller-owned
     * metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value
     * pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and
     * keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is
     * allowed, so the number of operations is not itself the stored-map limit. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value):
     * string or null. minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /** Attached modifier set. Send null on update to remove it. minLength: 1. */
    "modifier_set_id"?: string | null;
    /** Bundle name shown to buyers. minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Send null to clear it. minLength: 1. maxLength: 100. */
    "sku"?: string | null;
    /**
     * Whether the bundle is active or inactive. An inactive bundle cannot be sold. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
});
/** The request body for: Update category. */
export type UpdateCategoryRequest = {
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Category version last read by the caller. Optional for updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to
     * a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value): string or null.
     * minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequest & object, readonly unknown[]>)) | (null) | (unknown));
    /** Category name shown to buyers. minLength: 1. maxLength: 100. */
    "name"?: string;
};
/** The request body for: Update category. */
export type UpdateCategoryRequestInput = {
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Category version last read by the caller. Optional for updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequestInput}.
     * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
     * sets a value, a null value deletes the key, and an empty object makes no change; send null
     * for the whole field to clear all caller-owned metadata. The resulting map is limited the
     * same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Deleting a key that does not exist is allowed, so the number of operations is not
     * itself the stored-map limit. Values can't be empty strings, and keys starting with flint_
     * are reserved for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the
     * field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and
     * an empty object makes no change; send null for the whole field to clear all caller-owned
     * metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value
     * pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and
     * keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is
     * allowed, so the number of operations is not itself the stored-map limit. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value):
     * string or null. minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /** Category name shown to buyers. minLength: 1. maxLength: 100. */
    "name"?: string;
};
/** The request body for: Update checkout session. */
export type UpdateCheckoutSessionRequest = {
    /**
     * Checkout session credentials only. Saves the contact the buyer entered while the session is
     * open. A patch object: omitted fields are unchanged, and null clears a field. A merchant
     * credential that sends buyer_contact receives CHECKOUT_SESSION_UPDATE_FIELD_NOT_ALLOWED.
     * Buyer contact to supply with payment or save during checkout. Send at least one field.
     * Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout
     * session updates keep omitted fields and accept null to clear a field. Payment requests do
     * not accept null. minProperties: 1.
     */
    "buyer_contact"?: CheckoutBuyerContactRequest;
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omit to leave unchanged;
     * send null to clear. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /**
     * Subscription plan sessions only. The billing interval and quantity the buyer chose from
     * subscription_terms.billing_interval_options and quantity_options. Send billing_interval and
     * billing_interval_count together. Accepted from your API key or the checkout credential.
     * Subscription terms you set on a checkout session: billing interval, interval count, and
     * quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequest;
    /**
     * Checkout credentials only. A valid IANA timezone, such as America/Toronto, used for
     * Flint-sent receipts. Omission keeps the previous observation; null is invalid. minLength: 1.
     * maxLength: 64.
     */
    "timezone"?: string;
};
/** The request body for: Update checkout session. */
export type UpdateCheckoutSessionRequestInput = {
    /**
     * Checkout session credentials only. Saves the contact the buyer entered while the session is
     * open. A patch object: omitted fields are unchanged, and null clears a field. A merchant
     * credential that sends buyer_contact receives CHECKOUT_SESSION_UPDATE_FIELD_NOT_ALLOWED.
     * Buyer contact to supply with payment or save during checkout. Send at least one field.
     * Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout
     * session updates keep omitted fields and accept null to clear a field. Payment requests do
     * not accept null. minProperties: 1.
     */
    "buyer_contact"?: CheckoutBuyerContactRequestInput;
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omit to leave unchanged;
     * send null to clear. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /**
     * Subscription plan sessions only. The billing interval and quantity the buyer chose from
     * subscription_terms.billing_interval_options and quantity_options. Send billing_interval and
     * billing_interval_count together. Accepted from your API key or the checkout credential.
     * Subscription terms you set on a checkout session: billing interval, interval count, and
     * quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequestInput;
    /**
     * Checkout credentials only. A valid IANA timezone, such as America/Toronto, used for
     * Flint-sent receipts. Omission keeps the previous observation; null is invalid. minLength: 1.
     * maxLength: 64.
     */
    "timezone"?: string;
};
/** The request body for: Update credit note. */
export type UpdateCreditNoteRequest = ({
    /**
     * Credit note version last read. Required when line_items is present. Required when any of
     * these fields is present: line_items. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Full replacement of the draft's owned line collection; requires expected_version.
     * Recalculates corrections from current remaining creditable pools. After
     * CONCURRENT_MODIFICATION with reason credit_note_creditable_value_changed, replace the
     * existing corrections using the credit note's current version, review the new amounts, and
     * issue again. Scalar memo or reason changes do not reprice lines. [] (Value): {@link
     * CreditNoteLineItemRequest}. A credit note line you supply when creating or updating a credit
     * note: the invoice line item it credits and how much, or an existing line to keep.
     */
    "line_items"?: Array<CreditNoteLineItemRequest>;
    /** Send null to clear it. minLength: 1. maxLength: 4096. */
    "memo"?: string | null;
    /**
     * Why the invoice is being corrected: returned_goods, order_adjustment, billing_error,
     * goodwill, or other. Cannot be null; omit it to keep the current reason. Value enum:
     * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     */
    "reason"?: "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
});
/** The request body for: Update credit note. */
export type UpdateCreditNoteRequestInput = ({
    /**
     * Credit note version last read. Required when line_items is present. Required when any of
     * these fields is present: line_items. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Full replacement of the draft's owned line collection; requires expected_version.
     * Recalculates corrections from current remaining creditable pools. After
     * CONCURRENT_MODIFICATION with reason credit_note_creditable_value_changed, replace the
     * existing corrections using the credit note's current version, review the new amounts, and
     * issue again. Scalar memo or reason changes do not reprice lines. [] (Value): {@link
     * CreditNoteLineItemRequestInput}. A credit note line you supply when creating or updating a
     * credit note: the invoice line item it credits and how much, or an existing line to keep.
     */
    "line_items"?: Array<CreditNoteLineItemRequestInput>;
    /** Send null to clear it. minLength: 1. maxLength: 4096. */
    "memo"?: string | null;
    /**
     * Why the invoice is being corrected: returned_goods, order_adjustment, billing_error,
     * goodwill, or other. Cannot be null; omit it to keep the current reason. Value enum:
     * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     */
    "reason"?: "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other";
});
/**
 * The request body for: Update a customer address; Update one of the current buyer's addresses.
 * minProperties: 1.
 */
export type UpdateCustomerAddressRequest = {
    /**
     * Replaces the whole postal address. Send every field you want to keep; omitted optional
     * fields such as line2 are removed. A complete postal address. State and postal_code are
     * required for US addresses and optional for other countries. Send null or omit line2, state,
     * and postal_code when the address has none.
     */
    "address"?: AddressRequest;
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Set true to make this the default billing address and remove that default from any other
     * saved address. Set false to clear this default if this address holds it; no other address
     * becomes the default.
     */
    "is_default_billing"?: boolean;
    /**
     * Set true to make this the default shipping address and remove that default from any other
     * saved address. Set false to clear this default if this address holds it; no other address
     * becomes the default.
     */
    "is_default_shipping"?: boolean;
    /**
     * Limited to 100 characters (Unicode code points), counted before surrounding whitespace is
     * trimmed. Send null to clear it. minLength: 1. maxLength: 100.
     */
    "label"?: string | null;
    /**
     * E.164 phone number. Limited to 30 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. Send null to clear it. minLength: 1. maxLength: 30.
     */
    "phone"?: string | null;
    /**
     * Limited to 255 characters (Unicode code points), counted before surrounding whitespace is
     * trimmed. minLength: 1. maxLength: 255.
     */
    "recipient_name"?: string;
};
/**
 * The request body for: Update a customer address; Update one of the current buyer's addresses.
 * minProperties: 1.
 */
export type UpdateCustomerAddressRequestInput = {
    /**
     * Replaces the whole postal address. Send every field you want to keep; omitted optional
     * fields such as line2 are removed. A complete postal address. State and postal_code are
     * required for US addresses and optional for other countries. Send null or omit line2, state,
     * and postal_code when the address has none.
     */
    "address"?: AddressRequestInput;
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Set true to make this the default billing address and remove that default from any other
     * saved address. Set false to clear this default if this address holds it; no other address
     * becomes the default.
     */
    "is_default_billing"?: boolean;
    /**
     * Set true to make this the default shipping address and remove that default from any other
     * saved address. Set false to clear this default if this address holds it; no other address
     * becomes the default.
     */
    "is_default_shipping"?: boolean;
    /**
     * Limited to 100 characters (Unicode code points), counted before surrounding whitespace is
     * trimmed. Send null to clear it. minLength: 1. maxLength: 100.
     */
    "label"?: string | null;
    /**
     * E.164 phone number. Limited to 30 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. Send null to clear it. minLength: 1. maxLength: 30.
     */
    "phone"?: string | null;
    /**
     * Limited to 255 characters (Unicode code points), counted before surrounding whitespace is
     * trimmed. minLength: 1. maxLength: 255.
     */
    "recipient_name"?: string;
};
/** The request body for: Update the current buyer's email preferences. minProperties: 1. */
export type UpdateCustomerEmailPreferencesRequest = {
    /** A reminder after leaving checkout without paying. */
    "checkout_reminders"?: boolean;
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** Emails about shipments and deliveries, such as shipped, out for delivery, and delivered. */
    "shipping_updates"?: boolean;
};
/** The request body for: Update the current buyer's email preferences. minProperties: 1. */
export type UpdateCustomerEmailPreferencesRequestInput = UpdateCustomerEmailPreferencesRequest;
/** The request body for: Update customer. */
export type UpdateCustomerRequest = ({
    /** Default payment term for this customer's invoices. Send null to clear it. minLength: 1. */
    "default_invoice_payment_term_id"?: string | null;
    /**
     * The active off_session payment method to use by default. Omit to leave unchanged; null
     * clears it. A change sends customer.updated. minLength: 1.
     */
    "default_payment_method_id"?: string | null;
    /**
     * The customer's email. Omit to leave unchanged; null clears it. Changing it is allowed only
     * when your store hosts its own customer accounts (`customer_account.mode` is
     * `merchant_hosted`). Format: email. minLength: 1. maxLength: 320.
     */
    "email"?: string | null;
    /**
     * Required when tax_identity is null or tax_identity.tax_ids is present. Stale versions return
     * a conflict. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omit to leave unchanged;
     * null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** Internal note about this customer. Omit to leave unchanged; null clears it. minLength: 1. */
    "internal_note"?: string | null;
    /**
     * Flag you set on the customer, for example after checking ID in store. Promotion and delivery
     * rules can match it. Flint does not set it; it is unrelated to customer verifications, which
     * prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to
     * a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value): string or null.
     * minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequest & object, readonly unknown[]>)) | (null) | (unknown));
    /** Customer name. Omit to leave unchanged; null clears it. minLength: 1. */
    "name"?: string | null;
    /** Customer phone number. Omit to leave unchanged; null clears it. minLength: 1. */
    "phone"?: string | null;
    /**
     * Free-form label you assign, such as wholesale, so promotion and delivery rules can match
     * groups of customers. It is not an ID; Flint does not check it against any resource. Omit to
     * leave unchanged; null clears it. minLength: 1.
     */
    "segment"?: string | null;
    "tax_exempt"?: boolean;
    /**
     *  anyOf[1] (Value): {@link TaxIdentityPatch}. Merchant-provided legal identity displayed on
     * invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
     * collection in display order; replacing the array requires the parent's expected_version.
     * Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to
     * add one. anyOf[2] (Value): null.
     */
    "tax_identity"?: ((TaxIdentityPatch) | (null));
});
/** The request body for: Update customer. */
export type UpdateCustomerRequestInput = ({
    /** Default payment term for this customer's invoices. Send null to clear it. minLength: 1. */
    "default_invoice_payment_term_id"?: string | null;
    /**
     * The active off_session payment method to use by default. Omit to leave unchanged; null
     * clears it. A change sends customer.updated. minLength: 1.
     */
    "default_payment_method_id"?: string | null;
    /**
     * The customer's email. Omit to leave unchanged; null clears it. Changing it is allowed only
     * when your store hosts its own customer accounts (`customer_account.mode` is
     * `merchant_hosted`). Format: email. minLength: 1. maxLength: 320.
     */
    "email"?: string | null;
    /**
     * Required when tax_identity is null or tax_identity.tax_ids is present. Stale versions return
     * a conflict. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omit to leave unchanged;
     * null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** Internal note about this customer. Omit to leave unchanged; null clears it. minLength: 1. */
    "internal_note"?: string | null;
    /**
     * Flag you set on the customer, for example after checking ID in store. Promotion and delivery
     * rules can match it. Flint does not set it; it is unrelated to customer verifications, which
     * prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequestInput}.
     * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
     * sets a value, a null value deletes the key, and an empty object makes no change; send null
     * for the whole field to clear all caller-owned metadata. The resulting map is limited the
     * same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Deleting a key that does not exist is allowed, so the number of operations is not
     * itself the stored-map limit. Values can't be empty strings, and keys starting with flint_
     * are reserved for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the
     * field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and
     * an empty object makes no change; send null for the whole field to clear all caller-owned
     * metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value
     * pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and
     * keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is
     * allowed, so the number of operations is not itself the stored-map limit. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value):
     * string or null. minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /** Customer name. Omit to leave unchanged; null clears it. minLength: 1. */
    "name"?: string | null;
    /** Customer phone number. Omit to leave unchanged; null clears it. minLength: 1. */
    "phone"?: string | null;
    /**
     * Free-form label you assign, such as wholesale, so promotion and delivery rules can match
     * groups of customers. It is not an ID; Flint does not check it against any resource. Omit to
     * leave unchanged; null clears it. minLength: 1.
     */
    "segment"?: string | null;
    "tax_exempt"?: boolean;
    /**
     *  anyOf[1] (Value): {@link TaxIdentityPatchInput}. Merchant-provided legal identity displayed
     * on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. anyOf[2] (Value): null.
     */
    "tax_identity"?: ((TaxIdentityPatchInput) | (null));
});
/**
 * Delivery fulfillment fields to change when updating a fulfillment, such as courier, tracking,
 * and delivery times. Send null to clear a field.
 */
export type UpdateDeliveryFulfillmentDetails = {
    /** Send null to clear it. minLength: 1. */
    "carrier"?: string | null;
    /**
     * Time at which the courier collected the order. Send null to clear it. Format: date-time.
     * minLength: 1.
     */
    "courier_pickup_at"?: string | null;
    /**
     * Width of the promised courier pickup window, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: number | null;
    /**
     * Delivery network or merchant fleet provider handling the job. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "courier_provider_name"?: string | null;
    /**
     * Buyer-safe support number for the courier or merchant fleet. Send null to clear it.
     * minLength: 1. maxLength: 30.
     */
    "courier_support_phone"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "delivered_at"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "dispatched_at"?: string | null;
    /**
     * Driver-facing notes for the final handoff. Send null to clear it. minLength: 1. maxLength:
     * 2048.
     */
    "dropoff_notes"?: string | null;
    /**
     * Deadline after which an undelivered job should enter merchant review. Send null to clear it.
     * Format: date-time. minLength: 1.
     */
    "expires_at"?: string | null;
    /**
     * Stable delivery job ID owned by the courier or merchant dispatch system. Send null to clear
     * it. minLength: 1. maxLength: 255.
     */
    "external_delivery_id"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "instructions"?: string | null;
    /** Whether the buyer requested a no-contact handoff. */
    "no_contact"?: boolean | null;
    /**
     * Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number | null;
    /**
     * Time at which the order became ready for courier pickup. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "ready_at"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "service_area_id"?: string | null;
    /** minLength: 1. */
    "timezone"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Send null to
     * clear it. minLength: 1.
     */
    "tracking_url"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "window_end_at"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "window_start_at"?: string | null;
};
/**
 * Delivery fulfillment fields to change when updating a fulfillment, such as courier, tracking,
 * and delivery times. Send null to clear a field.
 */
export type UpdateDeliveryFulfillmentDetailsInput = {
    /** Send null to clear it. minLength: 1. */
    "carrier"?: string | null;
    /**
     * Time at which the courier collected the order. Send null to clear it. Format: date-time.
     * minLength: 1.
     */
    "courier_pickup_at"?: string | globalThis.Date | null;
    /**
     * Width of the promised courier pickup window, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: number | null;
    /**
     * Delivery network or merchant fleet provider handling the job. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "courier_provider_name"?: string | null;
    /**
     * Buyer-safe support number for the courier or merchant fleet. Send null to clear it.
     * minLength: 1. maxLength: 30.
     */
    "courier_support_phone"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "delivered_at"?: string | globalThis.Date | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "dispatched_at"?: string | globalThis.Date | null;
    /**
     * Driver-facing notes for the final handoff. Send null to clear it. minLength: 1. maxLength:
     * 2048.
     */
    "dropoff_notes"?: string | null;
    /**
     * Deadline after which an undelivered job should enter merchant review. Send null to clear it.
     * Format: date-time. minLength: 1.
     */
    "expires_at"?: string | globalThis.Date | null;
    /**
     * Stable delivery job ID owned by the courier or merchant dispatch system. Send null to clear
     * it. minLength: 1. maxLength: 255.
     */
    "external_delivery_id"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "instructions"?: string | null;
    /** Whether the buyer requested a no-contact handoff. */
    "no_contact"?: boolean | null;
    /**
     * Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number | null;
    /**
     * Time at which the order became ready for courier pickup. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "ready_at"?: string | globalThis.Date | null;
    /** Send null to clear it. minLength: 1. */
    "service_area_id"?: string | null;
    /** minLength: 1. */
    "timezone"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Send null to
     * clear it. minLength: 1.
     */
    "tracking_url"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date | null;
};
/** The request body for: Update delivery location set. */
export type UpdateDeliveryLocationSetRequest = ({
    /**
     * location_ids replaces the set's Locations when present; leave configuration out to keep
     * them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The
     * location IDs in a delivery location set.
     */
    "configuration"?: DeliveryLocationSetConfiguration;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /** minLength: 1. */
    "name"?: string;
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * location_ids replaces the set's Locations when present; leave configuration out to keep
     * them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The
     * location IDs in a delivery location set.
     */
    "configuration": DeliveryLocationSetConfiguration;
})
    | ({
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata": ((MetadataPatchRequest) | (null));
})
    | (Record<string, unknown>));
/** The request body for: Update delivery location set. */
export type UpdateDeliveryLocationSetRequestInput = ({
    /**
     * location_ids replaces the set's Locations when present; leave configuration out to keep
     * them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The
     * location IDs in a delivery location set.
     */
    "configuration"?: DeliveryLocationSetConfigurationInput;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /** minLength: 1. */
    "name"?: string;
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * location_ids replaces the set's Locations when present; leave configuration out to keep
     * them. Null, an empty list, and duplicate IDs are invalid. Requires expected_version. The
     * location IDs in a delivery location set.
     */
    "configuration": DeliveryLocationSetConfigurationInput;
})
    | ({
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata": ((MetadataPatchRequestInput) | (null));
}));
/** The request body for: Update delivery method. */
export type UpdateDeliveryMethodRequest = ({
    /**
     * Only the keys you send change; keys you leave out keep their current values. Each key you
     * send replaces that part of the configuration whole. Null removes an optional key, as each
     * field describes. Arrays can't be null: send [] to clear recipient_requirements or
     * quote_input_fields. pricing.rate_table.rates is an owned child collection: include
     * delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to
     * remove it. The result must be a configuration you could create, including pickup_mode for
     * pickup methods. Requires expected_version. An empty configuration is invalid. Only the keys
     * you send change; keys you leave out keep their current values. Each key you send replaces
     * that part of the configuration whole. Null removes an optional key, as each field describes.
     * Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. minProperties: 1.
     */
    "configuration"?: DeliveryMethodConfigurationPatchRequest;
    /** Delivery method description. Send null to clear it. minLength: 1. */
    "description"?: string | null;
    /** Format: int32. */
    "display_position"?: number;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration, name, description, display_position,
     * recommendation_priority. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /** minLength: 1. */
    "name"?: string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Send null to clear it. Format: int32.
     */
    "recommendation_priority"?: number | null;
    /** Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Only the keys you send change; keys you leave out keep their current values. Each key you
     * send replaces that part of the configuration whole. Null removes an optional key, as each
     * field describes. Arrays can't be null: send [] to clear recipient_requirements or
     * quote_input_fields. pricing.rate_table.rates is an owned child collection: include
     * delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to
     * remove it. The result must be a configuration you could create, including pickup_mode for
     * pickup methods. Requires expected_version. An empty configuration is invalid. Only the keys
     * you send change; keys you leave out keep their current values. Each key you send replaces
     * that part of the configuration whole. Null removes an optional key, as each field describes.
     * Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. minProperties: 1.
     */
    "configuration": DeliveryMethodConfigurationPatchRequest;
})
    | ({
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata": ((MetadataPatchRequest) | (null));
})
    | ({
    /** Delivery method description. Send null to clear it. minLength: 1. */
    "description": string | null;
})
    | ({
    /** Format: int32. */
    "display_position": number;
})
    | ({
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Send null to clear it. Format: int32.
     */
    "recommendation_priority": number | null;
})
    | ({
    /** Value enum: "inactive", "active". */
    "status": "inactive" | "active" | (string & {});
})
    | (Record<string, unknown>));
/** The request body for: Update delivery method. */
export type UpdateDeliveryMethodRequestInput = ({
    /**
     * Only the keys you send change; keys you leave out keep their current values. Each key you
     * send replaces that part of the configuration whole. Null removes an optional key, as each
     * field describes. Arrays can't be null: send [] to clear recipient_requirements or
     * quote_input_fields. pricing.rate_table.rates is an owned child collection: include
     * delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to
     * remove it. The result must be a configuration you could create, including pickup_mode for
     * pickup methods. Requires expected_version. An empty configuration is invalid. Only the keys
     * you send change; keys you leave out keep their current values. Each key you send replaces
     * that part of the configuration whole. Null removes an optional key, as each field describes.
     * Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. minProperties: 1.
     */
    "configuration"?: DeliveryMethodConfigurationPatchRequestInput;
    /** Delivery method description. Send null to clear it. minLength: 1. */
    "description"?: string | null;
    /** Format: int32. */
    "display_position"?: number;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration, name, description, display_position,
     * recommendation_priority. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /** minLength: 1. */
    "name"?: string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Send null to clear it. Format: int32.
     */
    "recommendation_priority"?: number | null;
    /** Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Only the keys you send change; keys you leave out keep their current values. Each key you
     * send replaces that part of the configuration whole. Null removes an optional key, as each
     * field describes. Arrays can't be null: send [] to clear recipient_requirements or
     * quote_input_fields. pricing.rate_table.rates is an owned child collection: include
     * delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to
     * remove it. The result must be a configuration you could create, including pickup_mode for
     * pickup methods. Requires expected_version. An empty configuration is invalid. Only the keys
     * you send change; keys you leave out keep their current values. Each key you send replaces
     * that part of the configuration whole. Null removes an optional key, as each field describes.
     * Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. minProperties: 1.
     */
    "configuration": DeliveryMethodConfigurationPatchRequestInput;
})
    | ({
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata": ((MetadataPatchRequestInput) | (null));
})
    | ({
    /** Delivery method description. Send null to clear it. minLength: 1. */
    "description": string | null;
})
    | ({
    /** Format: int32. */
    "display_position": number;
})
    | ({
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Send null to clear it. Format: int32.
     */
    "recommendation_priority": number | null;
})
    | ({
    /** Value enum: "inactive", "active". */
    "status": "inactive" | "active";
}));
/** The request body for: Update delivery profile. */
export type UpdateDeliveryProfileRequest = ({
    /**
     * Send the whole profile configuration. It replaces the current one; leave configuration out
     * to keep it. requirement none allows no other keys, and quote profiles require origin_policy,
     * combination_policy, and splitting_policy. Null and an empty object are invalid. Requires
     * expected_version. Delivery planning settings you supply when creating or updating a delivery
     * profile. Which fields are allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration"?: DeliveryProfileConfigurationRequest;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Send true to make this active profile the physical catalog default. Can be combined with
     * other mutable fields in one atomic update. Send expected_version to fence the update against
     * this profile's current version. Sending only is_default true for the current default is a
     * no-op: its version stays unchanged and no events are emitted. False is invalid; make another
     * profile the default instead. Value enum: true.
     */
    "is_default"?: boolean;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /** minLength: 1. */
    "name"?: string;
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Send the whole profile configuration. It replaces the current one; leave configuration out
     * to keep it. requirement none allows no other keys, and quote profiles require origin_policy,
     * combination_policy, and splitting_policy. Null and an empty object are invalid. Requires
     * expected_version. Delivery planning settings you supply when creating or updating a delivery
     * profile. Which fields are allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration": DeliveryProfileConfigurationRequest;
})
    | ({
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata": ((MetadataPatchRequest) | (null));
})
    | ({
    /**
     * Send true to make this active profile the physical catalog default. Can be combined with
     * other mutable fields in one atomic update. Send expected_version to fence the update against
     * this profile's current version. Sending only is_default true for the current default is a
     * no-op: its version stays unchanged and no events are emitted. False is invalid; make another
     * profile the default instead. Value enum: true.
     */
    "is_default": boolean;
})
    | (Record<string, unknown>));
/** The request body for: Update delivery profile. */
export type UpdateDeliveryProfileRequestInput = ({
    /**
     * Send the whole profile configuration. It replaces the current one; leave configuration out
     * to keep it. requirement none allows no other keys, and quote profiles require origin_policy,
     * combination_policy, and splitting_policy. Null and an empty object are invalid. Requires
     * expected_version. Delivery planning settings you supply when creating or updating a delivery
     * profile. Which fields are allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration"?: DeliveryProfileConfigurationRequestInput;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Send true to make this active profile the physical catalog default. Can be combined with
     * other mutable fields in one atomic update. Send expected_version to fence the update against
     * this profile's current version. Sending only is_default true for the current default is a
     * no-op: its version stays unchanged and no events are emitted. False is invalid; make another
     * profile the default instead. Value enum: true.
     */
    "is_default"?: true;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /** minLength: 1. */
    "name"?: string;
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Send the whole profile configuration. It replaces the current one; leave configuration out
     * to keep it. requirement none allows no other keys, and quote profiles require origin_policy,
     * combination_policy, and splitting_policy. Null and an empty object are invalid. Requires
     * expected_version. Delivery planning settings you supply when creating or updating a delivery
     * profile. Which fields are allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration": DeliveryProfileConfigurationRequestInput;
})
    | ({
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata": ((MetadataPatchRequestInput) | (null));
})
    | ({
    /**
     * Send true to make this active profile the physical catalog default. Can be combined with
     * other mutable fields in one atomic update. Send expected_version to fence the update against
     * this profile's current version. Sending only is_default true for the current default is a
     * no-op: its version stays unchanged and no events are emitted. False is invalid; make another
     * profile the default instead. Value enum: true.
     */
    "is_default": true;
}));
/** The request body for: Update delivery rate callback. */
export type UpdateDeliveryRateCallbackRequest = ({
    /**
     * Only the keys you send change; keys you leave out keep their current values. Null restores a
     * key's default, as each field describes. The result must be a configuration you could create.
     * Requires expected_version. An empty configuration is invalid. Only the keys you send change;
     * keys you leave out keep their current values. Null restores a key's default, as each field
     * describes. The result must be a configuration you could create. Requires expected_version.
     * An empty configuration is invalid. minProperties: 1.
     */
    "configuration"?: DeliveryRateCallbackConfigurationPatchRequest;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration, signing_methods. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Replaces the signing methods. Removing hmac deletes all shared secrets. Use rotate-secret to
     * add hmac when no secret has been issued. Omit to leave unchanged. Requires expected_version.
     * minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link
     * WebhookSigningMethod}. jwt uses Flint's public JWKS. hmac uses a shared secret and Standard
     * Webhooks v1. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethod>;
    /** Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Only the keys you send change; keys you leave out keep their current values. Null restores a
     * key's default, as each field describes. The result must be a configuration you could create.
     * Requires expected_version. An empty configuration is invalid. Only the keys you send change;
     * keys you leave out keep their current values. Null restores a key's default, as each field
     * describes. The result must be a configuration you could create. Requires expected_version.
     * An empty configuration is invalid. minProperties: 1.
     */
    "configuration": DeliveryRateCallbackConfigurationPatchRequest;
})
    | ({
    /**
     * Replaces the signing methods. Removing hmac deletes all shared secrets. Use rotate-secret to
     * add hmac when no secret has been issued. Omit to leave unchanged. Requires expected_version.
     * minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link
     * WebhookSigningMethod}. jwt uses Flint's public JWKS. hmac uses a shared secret and Standard
     * Webhooks v1. Value enum: "jwt", "hmac".
     */
    "signing_methods": Array<WebhookSigningMethod>;
})
    | ({
    /** Value enum: "inactive", "active". */
    "status": "inactive" | "active" | (string & {});
})
    | (Record<string, unknown>));
/** The request body for: Update delivery rate callback. */
export type UpdateDeliveryRateCallbackRequestInput = ({
    /**
     * Only the keys you send change; keys you leave out keep their current values. Null restores a
     * key's default, as each field describes. The result must be a configuration you could create.
     * Requires expected_version. An empty configuration is invalid. Only the keys you send change;
     * keys you leave out keep their current values. Null restores a key's default, as each field
     * describes. The result must be a configuration you could create. Requires expected_version.
     * An empty configuration is invalid. minProperties: 1.
     */
    "configuration"?: DeliveryRateCallbackConfigurationPatchRequestInput;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration, signing_methods. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Replaces the signing methods. Removing hmac deletes all shared secrets. Use rotate-secret to
     * add hmac when no secret has been issued. Omit to leave unchanged. Requires expected_version.
     * minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link
     * WebhookSigningMethodInput}. jwt uses Flint's public JWKS. hmac uses a shared secret and
     * Standard Webhooks v1. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethodInput>;
    /** Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Only the keys you send change; keys you leave out keep their current values. Null restores a
     * key's default, as each field describes. The result must be a configuration you could create.
     * Requires expected_version. An empty configuration is invalid. Only the keys you send change;
     * keys you leave out keep their current values. Null restores a key's default, as each field
     * describes. The result must be a configuration you could create. Requires expected_version.
     * An empty configuration is invalid. minProperties: 1.
     */
    "configuration": DeliveryRateCallbackConfigurationPatchRequestInput;
})
    | ({
    /**
     * Replaces the signing methods. Removing hmac deletes all shared secrets. Use rotate-secret to
     * add hmac when no secret has been issued. Omit to leave unchanged. Requires expected_version.
     * minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link
     * WebhookSigningMethodInput}. jwt uses Flint's public JWKS. hmac uses a shared secret and
     * Standard Webhooks v1. Value enum: "jwt", "hmac".
     */
    "signing_methods": Array<WebhookSigningMethodInput>;
})
    | ({
    /** Value enum: "inactive", "active". */
    "status": "inactive" | "active";
}));
/** The request body for: Update delivery zone. */
export type UpdateDeliveryZoneRequest = ({
    /**
     * Send the whole geography. It replaces the zone's current geography; leave configuration out
     * to keep it. Null and an empty object are invalid. Requires expected_version. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "configuration"?: DeliveryZoneConfiguration;
    /**
     * Current resource version. Required for configuration, owned-rate replacement, and
     * quote-pinned method presentation; optional for other scalar and status updates. Required
     * when any of these fields is present: configuration. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /** minLength: 1. */
    "name"?: string;
})
    & (({
    /** minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Send the whole geography. It replaces the zone's current geography; leave configuration out
     * to keep it. Null and an empty object are invalid. Requires expected_version. A reusable
     * geographic predicate containing only country, state, postal_code, and radius conditions.
     */
    "configuration": DeliveryZoneConfiguration;
})
    | ({
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata": ((MetadataPatchRequest) | (null));
})
    | (Record<string, unknown>));
