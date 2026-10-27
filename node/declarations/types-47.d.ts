import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type { ImageRequest, ImageRequestInput } from './types-19.js';
import type { CheckoutBuyerContactRequest, CheckoutBuyerContactRequestInput } from './types-3.js';
import type { CheckoutSubscriptionTermsRequest, CheckoutSubscriptionTermsRequestInput } from './types-4.js';
import type { CreditNoteLineItemRequest, CreditNoteLineItemRequestInput } from './types-9.js';
import type { Address, AddressRequest, AddressRequestInput } from './types-0.js';
import type { PostalAddressInput } from './types-37.js';
import type { TaxIdentityPatch, TaxIdentityPatchInput } from './types-46.js';
import type {
    DeliveryLocationSetConfiguration,
    DeliveryLocationSetConfigurationInput,
    DeliveryMethodConfigurationPatchRequest,
    DeliveryMethodConfigurationPatchRequestInput
} from './types-12.js';
import type { DeliveryProfileConfigurationRequest, DeliveryProfileConfigurationRequestInput } from './types-13.js';
import type {
    DeliveryRateCallbackConfigurationPatchRequest,
    DeliveryRateCallbackConfigurationPatchRequestInput
} from './types-14.js';
import type { DeliveryZoneConfiguration, DeliveryZoneConfigurationInput } from './types-15.js';
import type { FulfillmentRecipientRequest, FulfillmentRecipientRequestInput } from './types-17.js';
import type { UpdatePickupFulfillmentDetails, UpdatePickupFulfillmentDetailsInput } from './types-48.js';
import type { UpdateServiceFulfillmentDetails, UpdateServiceFulfillmentDetailsInput } from './types-49.js';
import type {
    InventoryAllocationConfigurationValue,
    InventoryAllocationConfigurationValueInput,
    InventoryCountObservationRequest,
    InventoryCountObservationRequestInput
} from './types-24.js';
import type { InventorySourceSystemRequest, InventorySourceSystemRequestInput } from './types-25.js';
/**
 * Shape $ (Value): {@link TextModifierConfig}. Settings for a text modifier group: whether input
 * is required or multiline, and its length limits.
 */
export type TextModifierConfig = {
    /**
     * Shape $ (Value): integer. Maximum length of the buyer's text in UTF-8 bytes after trimming
     * surrounding whitespace. Format: int32.
     */
    "max_length"?: number;
    /**
     * Shape $ (Value): integer. Minimum length of the buyer's text in UTF-8 bytes after trimming
     * surrounding whitespace. Format: int32.
     */
    "min_length"?: number;
    /** Shape $ (Value): boolean. Whether the buyer's text can include line breaks. */
    "multiline": boolean;
    /**
     * Shape $ (Value): boolean. Whether buyers must enter text for this group. A modifier set's
     * required override takes precedence.
     */
    "required": boolean;
};
/**
 * Shape $ (Value): {@link TextModifierConfigPatchRequest}. Send only text fields to change.
 * Omitted fields keep their stored values. null clears min_length or max_length. An empty object
 * is invalid. The merged configuration is validated. minProperties: 1.
 */
export type TextModifierConfigPatchRequest = {
    /**
     * Shape $ (Value): integer or null. Maximum length of the buyer's text in UTF-8 bytes after
     * trimming surrounding whitespace. Omit it to keep the current limit; send null to clear it.
     * Format: int32. minimum: 1. maximum: 500.
     */
    "max_length"?: number | null;
    /**
     * Shape $ (Value): integer or null. Minimum length of the buyer's text in UTF-8 bytes after
     * trimming surrounding whitespace. Omit it to keep the current minimum; send null to clear it.
     * Format: int32. minimum: 0.
     */
    "min_length"?: number | null;
    /** Shape $ (Value): boolean. Whether the buyer's text can include line breaks. */
    "multiline"?: boolean;
    /**
     * Shape $ (Value): boolean. Whether buyers must enter text for this group. A modifier set's
     * required override takes precedence.
     */
    "required"?: boolean;
};
/**
 * Shape $ (Value): {@link TextModifierConfigPatchRequestInput}. Send only text fields to change.
 * Omitted fields keep their stored values. null clears min_length or max_length. An empty object
 * is invalid. The merged configuration is validated. minProperties: 1.
 */
export type TextModifierConfigPatchRequestInput = TextModifierConfigPatchRequest;
/**
 * Shape $ (Value): {@link TextModifierConfigRequest}. Settings for a text modifier group when
 * creating or updating one: required, multiline, and length limits.
 */
export type TextModifierConfigRequest = {
    /**
     * Shape $ (Value): integer. Maximum length of the buyer's text in UTF-8 bytes after trimming
     * surrounding whitespace. Format: int32.
     */
    "max_length"?: number;
    /**
     * Shape $ (Value): integer. Minimum length of the buyer's text in UTF-8 bytes after trimming
     * surrounding whitespace. Format: int32.
     */
    "min_length"?: number;
    /**
     * Shape $ (Value): boolean. Whether the buyer's text can include line breaks. Default: false.
     */
    "multiline"?: boolean;
    /**
     * Shape $ (Value): boolean. Whether buyers must enter text for this group. A modifier set's
     * required override takes precedence. Default: false.
     */
    "required"?: boolean;
};
/**
 * Shape $ (Value): {@link TextModifierConfigRequestInput}. Settings for a text modifier group when
 * creating or updating one: required, multiline, and length limits.
 */
export type TextModifierConfigRequestInput = TextModifierConfigRequest;
/**
 * Shape $ (Value): {@link TextModifierRequest}. Text a buyer entered for a text modifier group on
 * an order line item.
 */
export type TextModifierRequest = {
    /**
     * Shape $ (Value): string. Identifier of the text modifier group. For a group a modifier set
     * owns (source: inline), read it through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. minLength: 1.
     */
    "modifier_group_id": string;
    /**
     * Shape $ (Value): string. Text entered by the buyer, subject to the group's text rules.
     * minLength: 1.
     */
    "value": string;
};
/**
 * Shape $ (Value): {@link TextModifierRequestInput}. Text a buyer entered for a text modifier
 * group on an order line item.
 */
export type TextModifierRequestInput = TextModifierRequest;
/**
 * Shape $ (Value): {@link ThemeConfig}. Colors and title applied to a payment link's checkout
 * page.
 */
export type ThemeConfig = {
    /** Shape $ (Value): string. */
    "accent_color"?: string;
    /** Shape $ (Value): string. */
    "primary_color"?: string;
    /** Shape $ (Value): string. */
    "title"?: string;
};
/**
 * Shape $ (Value): {@link ThemeConfigRequestInput}. Colors and title to apply to a checkout
 * session's page.
 */
export type ThemeConfigRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "accent_color"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "primary_color"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "title"?: string;
};
/**
 * Shape $ (Value): {@link TicketedEvent}. Event details for a ticketed order: name, location,
 * start time, time zone, and the tickets issued.
 */
export type TicketedEvent = {
    /** Shape $ (Value): string. Where the event takes place. */
    "location"?: string;
    /** Shape $ (Value): string. Event name when the order was placed. */
    "name": string;
    /** Shape $ (Value): string. When the event starts. RFC 3339 timestamp. Format: date-time. */
    "starts_at"?: string;
    /**
     * Shape $ (Value): Array of string. Ticket numbers issued for this order. Empty while
     * ticket_status is pending. Shape $[] (Value): string.
     */
    "ticket_numbers": Array<string>;
    /** Shape $ (Value): string.  Value enum: "pending", "issued", "void". */
    "ticket_status": "pending" | "issued" | "void" | (string & {});
    /** Shape $ (Value): string. IANA time zone Flint shows the event in. */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link Tip}. A tip on an order, with its requested, settled, and refunded
 * amounts, status, and how it was paid.
 */
export type Tip = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "effective_amount_money": MoneyValue;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. */
    "name"?: string;
    /** Shape $ (Value): string. */
    "order_tip_id": string;
    /**
     * Shape $ (Value): Array of {@link TipPaymentIntentAllocation}. Shape $[] (Value): {@link
     * TipPaymentIntentAllocation}. The part of a tip paid through one payment intent.
     */
    "payment_intent_allocations": Array<TipPaymentIntentAllocation>;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "settled_amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "requested", "settled", "partially_refunded",
     * "refunded", "canceled".
     */
    "status": "requested" | "settled" | "partially_refunded" | "refunded" | "canceled" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): Array of {@link TipValueSettlementAllocation}. Shape $[] (Value): {@link
     * TipValueSettlementAllocation}. The part of a tip paid through one value settlement.
     */
    "value_settlement_allocations": Array<TipValueSettlementAllocation>;
};
/**
 * Shape $ (Value): {@link TipPaymentIntentAllocation}. The part of a tip paid through one payment
 * intent.
 */
export type TipPaymentIntentAllocation = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. */
    "payment_intent_id": string;
};
/**
 * Shape $ (Value): {@link TipValueSettlementAllocation}. The part of a tip paid through one value
 * settlement.
 */
export type TipValueSettlementAllocation = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. */
    "value_settlement_id": string;
};
/**
 * Shape $ (Value): {@link TippingSettings}. Tipping settings: percent and fixed tip options, the
 * preselected tip, and whether custom tips are allowed.
 */
export type TippingSettings = {
    /** Shape $ (Value): boolean. Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    /** Shape $ (Value): boolean. */
    "default_enabled"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Replaced as a whole: send every field you want
     * to keep. The preselected fixed tip. Its amount and currency must match one of the effective
     * smart_tip_money_options. Null means no preselection is set; effective settings use Flint's
     * default. Shape $.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. Shape $.anyOf[1].amount (Required):
     * integer string. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. Amount in the currency's minor unit, such as cents for USD. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * Shape $.anyOf[1].currency (Required): string. ISO 4217 currency code for this amount.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Shape $.anyOf[2] (Value): null.
     */
    "default_smart_tip_money": ((({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>))
        | (null)
        | (unknown));
    /**
     * Shape $ (Value): number or null. The preselected tip percent, from 1 through 100 with at
     * most four decimal places. It must match one of the effective tip_percent_options. Null means
     * no preselection is set; effective settings use Flint's default. minimum: 1. maximum: 100.
     * multipleOf: 0.0001.
     */
    "default_tip_percent": number | null;
    /**
     * Shape $ (Value): Array of {@link MoneyValue}. minItems: 3. maxItems: 3. Shape $[] (Value):
     * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. Shape $[].amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $[].currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "smart_tip_money_options"?: Array<({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>)>;
    /**
     * Shape $ (Value): boolean. Whether checkout offers fixed tip amounts instead of tip
     * percentages.
     */
    "smart_tips_enabled"?: boolean;
    /**
     * Shape $ (Value): Array of number. Three tip percents to offer, each from 1 through 100 with
     * at most four decimal places. minItems: 3. maxItems: 3. Shape $[] (Value): number. minimum:
     * 1. maximum: 100. multipleOf: 0.0001.
     */
    "tip_percent_options"?: Array<number>;
};
/**
 * Shape $ (Value): {@link TippingSettingsPatch}. Tipping settings to change when updating
 * settings. Omit a field to keep it; send null to clear a preselected tip. minProperties: 1.
 */
export type TippingSettingsPatch = {
    /** Shape $ (Value): boolean. Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    /** Shape $ (Value): boolean. */
    "default_enabled"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Replaced as a whole: send every field you want
     * to keep. Omit to preserve the current value. Send null to clear the preselection and use
     * Flint's default. When replacing presets, explicitly replace or clear a preselection that is
     * no longer offered. Shape $.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. Shape $.anyOf[1].amount (Required):
     * integer string. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. Amount in the currency's minor unit, such as cents for USD. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * Shape $.anyOf[1].currency (Required): string. ISO 4217 currency code for this amount.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Shape $.anyOf[2] (Value): null.
     */
    "default_smart_tip_money"?: ((({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>))
        | (null)
        | (unknown));
    /**
     * Shape $ (Value): number or null. Omit to preserve the current value. Send null to clear the
     * preselection and use Flint's default. When replacing presets, explicitly replace or clear a
     * preselection that is no longer offered. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "default_tip_percent"?: number | null;
    /**
     * Shape $ (Value): Array of {@link MoneyValue}. minItems: 3. maxItems: 3. Shape $[] (Value):
     * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. Shape $[].amount (Required): integer string. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's
     * minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $[].currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "smart_tip_money_options"?: Array<({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>)>;
    /**
     * Shape $ (Value): boolean. Whether checkout offers fixed tip amounts instead of tip
     * percentages.
     */
    "smart_tips_enabled"?: boolean;
    /**
     * Shape $ (Value): Array of number. Three tip percents to offer, each from 1 through 100 with
     * at most four decimal places. minItems: 3. maxItems: 3. Shape $[] (Value): number. minimum:
     * 1. maximum: 100. multipleOf: 0.0001.
     */
    "tip_percent_options"?: Array<number>;
};
/**
 * Shape $ (Value): {@link TippingSettingsPatchInput}. Tipping settings to change when updating
 * settings. Omit a field to keep it; send null to clear a preselected tip. minProperties: 1.
 */
export type TippingSettingsPatchInput = {
    /** Shape $ (Value): boolean. Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    /** Shape $ (Value): boolean. */
    "default_enabled"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValueInput} or null. Replaced as a whole: send every field you
     * want to keep. Omit to preserve the current value. Send null to clear the preselection and
     * use Flint's default. When replacing presets, explicitly replace or clear a preselection that
     * is no longer offered. Shape $.anyOf[1] (Value): {@link MoneyValueInput}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. Shape $.anyOf[1].amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. Shape $.anyOf[1].currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Shape $.anyOf[2] (Value): null.
     */
    "default_smart_tip_money"?: ((({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>))
        | (null));
    /**
     * Shape $ (Value): number or null. Omit to preserve the current value. Send null to clear the
     * preselection and use Flint's default. When replacing presets, explicitly replace or clear a
     * preselection that is no longer offered. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "default_tip_percent"?: number | null;
    /**
     * Shape $ (Value): Array of {@link MoneyValueInput}. minItems: 3. maxItems: 3. Shape $[]
     * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code. Shape $[].amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $[].currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "smart_tip_money_options"?: Array<({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>)>;
    /**
     * Shape $ (Value): boolean. Whether checkout offers fixed tip amounts instead of tip
     * percentages.
     */
    "smart_tips_enabled"?: boolean;
    /**
     * Shape $ (Value): Array of number. Three tip percents to offer, each from 1 through 100 with
     * at most four decimal places. minItems: 3. maxItems: 3. Shape $[] (Value): number. minimum:
     * 1. maximum: 100. multipleOf: 0.0001.
     */
    "tip_percent_options"?: Array<number>;
};
/**
 * Shape $ (Value): {@link TransitionGiftCardRequest}. The request body for: Transition a gift
 * card.
 */
export type TransitionGiftCardRequest = ({
    /** Shape $ (Value): string.  Value enum: "freeze", "unfreeze", "close". */
    "action": "freeze" | "unfreeze" | "close" | (string & {});
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "suspicious_activity", "customer_request",
     * "support_issue".
     */
    "reason"?: "suspicious_activity" | "customer_request" | "support_issue" | (string & {});
})
    & ((Exclude<TransitionGiftCardRequestFreeze & object, readonly unknown[]>)
    | (Exclude<TransitionGiftCardRequestWithoutReason & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link TransitionGiftCardRequestFreeze}. The `freeze` variant of
 * `TransitionGiftCardRequest`.
 */
export type TransitionGiftCardRequestFreeze = ({
    /** Shape $ (Value): string.  Value enum: "freeze". */
    "action": "freeze" | (string & {});
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "suspicious_activity", "customer_request",
     * "support_issue".
     */
    "reason": "suspicious_activity" | "customer_request" | "support_issue" | (string & {});
})
    & ({
    /** Shape $ (Value): any.  Value enum: "freeze". */
    "action": unknown;
    /**
     * Shape $ (Value): string. Value enum: "suspicious_activity", "customer_request",
     * "support_issue".
     */
    "reason": "suspicious_activity" | "customer_request" | "support_issue" | (string & {});
});
/**
 * Shape $ (Value): {@link TransitionGiftCardRequestFreezeInput}. The `freeze` variant of
 * `TransitionGiftCardRequest`.
 */
export type TransitionGiftCardRequestFreezeInput = ({
    /** Shape $ (Value): string.  Value enum: "freeze". */
    "action": "freeze";
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "suspicious_activity", "customer_request",
     * "support_issue".
     */
    "reason": "suspicious_activity" | "customer_request" | "support_issue";
})
    & ({
    /** Shape $ (Value): any.  Value enum: "freeze". */
    "action": ("freeze") & ("freeze");
    /**
     * Shape $ (Value): string. Value enum: "suspicious_activity", "customer_request",
     * "support_issue".
     */
    "reason": "suspicious_activity" | "customer_request" | "support_issue";
});
/**
 * Shape $ (Value): {@link TransitionGiftCardRequestInput}. The request body for: Transition a gift
 * card.
 */
export type TransitionGiftCardRequestInput = ({
    /** Shape $ (Value): string.  Value enum: "freeze", "unfreeze", "close". */
    "action": "freeze" | "unfreeze" | "close";
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "suspicious_activity", "customer_request",
     * "support_issue".
     */
    "reason"?: "suspicious_activity" | "customer_request" | "support_issue";
})
    & ((Exclude<TransitionGiftCardRequestFreezeInput & object, readonly unknown[]>)
    | (Exclude<TransitionGiftCardRequestWithoutReasonInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link TransitionGiftCardRequestWithoutReason}. The `close` variant of
 * `TransitionGiftCardRequest`. The `unfreeze` variant of `TransitionGiftCardRequest`.
 */
export type TransitionGiftCardRequestWithoutReason = ({
    /** Shape $ (Value): string.  Value enum: "unfreeze", "close". */
    "action": "unfreeze" | "close" | (string & {});
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "suspicious_activity", "customer_request",
     * "support_issue".
     */
    "reason"?: "suspicious_activity" | "customer_request" | "support_issue" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "unfreeze", "close". */
    "action": unknown;
}));
/**
 * Shape $ (Value): {@link TransitionGiftCardRequestWithoutReasonInput}. The `close` variant of
 * `TransitionGiftCardRequest`. The `unfreeze` variant of `TransitionGiftCardRequest`.
 */
export type TransitionGiftCardRequestWithoutReasonInput = ({
    /** Shape $ (Value): string.  Value enum: "unfreeze", "close". */
    "action": "unfreeze" | "close";
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "suspicious_activity", "customer_request",
     * "support_issue".
     */
    "reason"?: "suspicious_activity" | "customer_request" | "support_issue";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "unfreeze", "close". */
    "action": "unfreeze" | "close";
})
    & ({
    "reason"?: never;
}));
/** Shape $ (Value): {@link UpdateAPIKeyRequest}. The request body for: Update an API key. */
export type UpdateAPIKeyRequest = ({
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Required when
     * scopes is present, including an empty array. Optional for scalar updates. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Future RFC3339 timestamp. Send null to clear an existing
     * API-key expiration. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | null;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name"?: string;
    /**
     * Shape $ (Value): Array of string. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.read",
     * "commerce.inventory.write", "commerce.inventory_locations.write",
     * "commerce.inventory_policies.write", "commerce.invoices.read", "commerce.invoices.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.return_policies.write", "commerce.return_reasons.write",
     * "commerce.returns.operations.write", "commerce.returns.read",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "merchant_billing.read",
     * "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write",
     * "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read",
     * "merchants.profile.write", "money_movement.balance_transactions.read",
     * "money_movement.balances.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "payments.disputes.read", "payments.disputes.write",
     * "payments.payment_intents.read", "payments.payment_intents.write",
     * "payments.payment_method_domains.read", "payments.payment_method_domains.write",
     * "payments.payment_methods.read", "payments.payment_methods.write",
     * "payments.payment_options.read", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.read",
     * "commerce.inventory.write", "commerce.inventory_locations.write",
     * "commerce.inventory_policies.write", "commerce.invoices.read", "commerce.invoices.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.return_policies.write", "commerce.return_reasons.write",
     * "commerce.returns.operations.write", "commerce.returns.read",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "merchant_billing.read",
     * "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write",
     * "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read",
     * "merchants.profile.write", "money_movement.balance_transactions.read",
     * "money_movement.balances.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "payments.disputes.read", "payments.disputes.write",
     * "payments.payment_intents.read", "payments.payment_intents.write",
     * "payments.payment_method_domains.read", "payments.payment_method_domains.write",
     * "payments.payment_methods.read", "payments.payment_methods.write",
     * "payments.payment_options.read", "reports.read", "reports.write", "risk.controls.write",
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
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.inventory_locations.write"
        | "commerce.inventory_policies.write"
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
        | "commerce.return_policies.write"
        | "commerce.return_reasons.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.read"
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
        | "payments.payment_options.read"
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
});
/** Shape $ (Value): {@link UpdateAPIKeyRequestInput}. The request body for: Update an API key. */
export type UpdateAPIKeyRequestInput = ({
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Required when
     * scopes is present, including an empty array. Optional for scalar updates. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Future RFC3339 timestamp. Send null to clear an existing
     * API-key expiration. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | globalThis.Date | null;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name"?: string;
    /**
     * Shape $ (Value): Array of string. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.read",
     * "commerce.inventory.write", "commerce.inventory_locations.write",
     * "commerce.inventory_policies.write", "commerce.invoices.read", "commerce.invoices.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.return_policies.write", "commerce.return_reasons.write",
     * "commerce.returns.operations.write", "commerce.returns.read",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "merchant_billing.read",
     * "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write",
     * "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read",
     * "merchants.profile.write", "money_movement.balance_transactions.read",
     * "money_movement.balances.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "payments.disputes.read", "payments.disputes.write",
     * "payments.payment_intents.read", "payments.payment_intents.write",
     * "payments.payment_method_domains.read", "payments.payment_method_domains.write",
     * "payments.payment_methods.read", "payments.payment_methods.write",
     * "payments.payment_options.read", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.read",
     * "commerce.inventory.write", "commerce.inventory_locations.write",
     * "commerce.inventory_policies.write", "commerce.invoices.read", "commerce.invoices.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.return_policies.write", "commerce.return_reasons.write",
     * "commerce.returns.operations.write", "commerce.returns.read",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "merchant_billing.read",
     * "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write",
     * "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read",
     * "merchants.profile.write", "money_movement.balance_transactions.read",
     * "money_movement.balances.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "payments.disputes.read", "payments.disputes.write",
     * "payments.payment_intents.read", "payments.payment_intents.write",
     * "payments.payment_method_domains.read", "payments.payment_method_domains.write",
     * "payments.payment_methods.read", "payments.payment_methods.write",
     * "payments.payment_options.read", "reports.read", "reports.write", "risk.controls.write",
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
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.inventory_locations.write"
        | "commerce.inventory_policies.write"
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
        | "commerce.return_policies.write"
        | "commerce.return_reasons.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.read"
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
        | "payments.payment_options.read"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write">;
});
/**
 * Shape $ (Value): {@link UpdateBundleComponentRequest}. A component to keep or add when updating
 * a bundle, with its variant, quantity, position, and delivery profile.
 */
export type UpdateBundleComponentRequest = {
    /**
     * Shape $ (Value): string. Identifier of an existing component to retain. Omit it to add a new
     * component. minLength: 1. pattern: ^bunc_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "bundle_component_id"?: string;
    /**
     * Shape $ (Value): string or null. Component delivery profile override. Omit to inherit the
     * variant's profile. Send null to clear it. minLength: 1.
     */
    "delivery_profile_id"?: string | null;
    /**
     * Shape $ (Value): integer. Display order among the bundle's components, starting at zero.
     * Format: int32. minimum: 0.
     */
    "position"?: number;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Shape $ (Value): string. Identifier of the product variant included in the bundle.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_id": string;
};
/**
 * Shape $ (Value): {@link UpdateBundleComponentRequestInput}. A component to keep or add when
 * updating a bundle, with its variant, quantity, position, and delivery profile.
 */
export type UpdateBundleComponentRequestInput = UpdateBundleComponentRequest;
/**
 * Shape $ (Value): {@link UpdateBundleRequest}. Send only fields to change. Omitted fields keep
 * their stored values. null clears nullable fields; null on any other field returns 400
 * INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50 keys
 * after merging.
 */
export type UpdateBundleRequest = ({
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 100. */
    "barcode"?: string | null;
    /**
     * Shape $ (Value): Array of string. Relationship set of category handles that must already
     * exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return
     * RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH,
     * omission leaves it unchanged. Does not require expected_version. maxItems: 100. uniqueItems:
     * true. Shape $[] (Value): string. minLength: 1. maxLength: 100. pattern:
     * ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * Shape $ (Value): Array of {@link UpdateBundleComponentRequest}. Replaces all bundle
     * components atomically. Include an existing bundle_component_id to retain a member. Omitted
     * members are removed. Null is not accepted. Shape $[] (Value): {@link
     * UpdateBundleComponentRequest}. A component to keep or add when updating a bundle, with its
     * variant, quantity, position, and delivery profile.
     */
    "components"?: Array<UpdateBundleComponentRequest>;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Required when
     * components or images is present. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Array of {@link ImageRequest}. The complete desired gallery in display
     * order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8.
     * Shape $[] (Value): {@link ImageRequest}. An image you supply by `source_url`, with optional
     * `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Shape $ (Value): string or null. Flint line-item tax category. Send null to clear it. Value
     * enum: "general", "physical_goods", "digital_goods", "software", "saas", "services",
     * "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission",
     * null.
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
        | null
        | (string & {})
        | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it.
     * minLength: 1.
     */
    "modifier_set_id"?: string | null;
    /** Shape $ (Value): string. Bundle name shown to buyers. minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 100. */
    "sku"?: string | null;
    /**
     * Shape $ (Value): string. Whether the bundle is active or inactive. An inactive bundle cannot
     * be sold. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Shape $ (Value): boolean. Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValue}. Price charged for one unit, in the currency's smallest
     * unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
});
/**
 * Shape $ (Value): {@link UpdateBundleRequestInput}. Send only fields to change. Omitted fields
 * keep their stored values. null clears nullable fields; null on any other field returns 400
 * INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with at most 50 keys
 * after merging.
 */
export type UpdateBundleRequestInput = ({
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 100. */
    "barcode"?: string | null;
    /**
     * Shape $ (Value): Array of string. Relationship set of category handles that must already
     * exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return
     * RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH,
     * omission leaves it unchanged. Does not require expected_version. maxItems: 100. uniqueItems:
     * true. Shape $[] (Value): string. minLength: 1. maxLength: 100. pattern:
     * ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handles"?: Array<string>;
    /**
     * Shape $ (Value): Array of {@link UpdateBundleComponentRequestInput}. Replaces all bundle
     * components atomically. Include an existing bundle_component_id to retain a member. Omitted
     * members are removed. Null is not accepted. Shape $[] (Value): {@link
     * UpdateBundleComponentRequestInput}. A component to keep or add when updating a bundle, with
     * its variant, quantity, position, and delivery profile.
     */
    "components"?: Array<UpdateBundleComponentRequestInput>;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Required when
     * components or images is present. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Array of {@link ImageRequestInput}. The complete desired gallery in display
     * order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8.
     * Shape $[] (Value): {@link ImageRequestInput}. An image you supply by `source_url`, with
     * optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * Shape $ (Value): string or null. Flint line-item tax category. Send null to clear it. Value
     * enum: "general", "physical_goods", "digital_goods", "software", "saas", "services",
     * "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission",
     * null.
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
        | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it.
     * minLength: 1.
     */
    "modifier_set_id"?: string | null;
    /** Shape $ (Value): string. Bundle name shown to buyers. minLength: 1. maxLength: 255. */
    "name"?: string;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 100. */
    "sku"?: string | null;
    /**
     * Shape $ (Value): string. Whether the bundle is active or inactive. An inactive bundle cannot
     * be sold. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Shape $ (Value): boolean. Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Price charged for one unit, in the currency's
     * smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "unit_price_money"?: MoneyValueInput;
});
/** Shape $ (Value): {@link UpdateCategoryRequest}. The request body for: Update category. */
export type UpdateCategoryRequest = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Shape $ (Value): integer string. Category version last read by the caller. Optional for
     * updates. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. Category name shown to buyers. minLength: 1. maxLength: 100. */
    "name"?: string;
};
/** Shape $ (Value): {@link UpdateCategoryRequestInput}. The request body for: Update category. */
export type UpdateCategoryRequestInput = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 2048. */
    "description"?: string | null;
    /**
     * Shape $ (Value): integer string. Category version last read by the caller. Optional for
     * updates. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. Category name shown to buyers. minLength: 1. maxLength: 100. */
    "name"?: string;
};
/**
 * Shape $ (Value): {@link UpdateCheckoutSessionRequest}. The request body for: Update checkout
 * session.
 */
export type UpdateCheckoutSessionRequest = {
    /**
     * Shape $ (Value): {@link CheckoutBuyerContactRequest}. Checkout session credentials only.
     * Saves the contact the buyer entered while the session is open. A patch object: omitted
     * fields are unchanged, and null clears a field. A merchant credential that sends
     * buyer_contact receives CHECKOUT_SESSION_UPDATE_FIELD_NOT_ALLOWED. Buyer contact to supply
     * with payment or save during checkout. Send at least one field. Values are stored exactly as
     * sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted
     * fields and accept null to clear a field. Payment requests do not accept null. minProperties:
     * 1.
     */
    "buyer_contact"?: CheckoutBuyerContactRequest;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Omit to leave unchanged; send null to clear. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): {@link CheckoutSubscriptionTermsRequest}. Subscription plan sessions only.
     * The billing interval and quantity the buyer chose from
     * subscription_terms.billing_interval_options and quantity_options. Send billing_interval and
     * billing_interval_count together. Accepted from your API key or the checkout credential.
     * Subscription terms you set on a checkout session: billing interval, interval count, and
     * quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequest;
    /**
     * Shape $ (Value): string. Checkout credentials only. A valid IANA timezone, such as
     * America/Toronto, used for Flint-sent receipts. Omission keeps the previous observation; null
     * is invalid. minLength: 1. maxLength: 64.
     */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link UpdateCheckoutSessionRequestInput}. The request body for: Update
 * checkout session.
 */
export type UpdateCheckoutSessionRequestInput = {
    /**
     * Shape $ (Value): {@link CheckoutBuyerContactRequestInput}. Checkout session credentials
     * only. Saves the contact the buyer entered while the session is open. A patch object: omitted
     * fields are unchanged, and null clears a field. A merchant credential that sends
     * buyer_contact receives CHECKOUT_SESSION_UPDATE_FIELD_NOT_ALLOWED. Buyer contact to supply
     * with payment or save during checkout. Send at least one field. Values are stored exactly as
     * sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted
     * fields and accept null to clear a field. Payment requests do not accept null. minProperties:
     * 1.
     */
    "buyer_contact"?: CheckoutBuyerContactRequestInput;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Omit to leave unchanged; send null to clear. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): {@link CheckoutSubscriptionTermsRequestInput}. Subscription plan sessions
     * only. The billing interval and quantity the buyer chose from
     * subscription_terms.billing_interval_options and quantity_options. Send billing_interval and
     * billing_interval_count together. Accepted from your API key or the checkout credential.
     * Subscription terms you set on a checkout session: billing interval, interval count, and
     * quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequestInput;
    /**
     * Shape $ (Value): string. Checkout credentials only. A valid IANA timezone, such as
     * America/Toronto, used for Flint-sent receipts. Omission keeps the previous observation; null
     * is invalid. minLength: 1. maxLength: 64.
     */
    "timezone"?: string;
};
/** Shape $ (Value): {@link UpdateCreditNoteRequest}. The request body for: Update credit note. */
export type UpdateCreditNoteRequest = ({
    /**
     * Shape $ (Value): integer string. Credit note version last read. Required when line_items is
     * present. Required when any of these fields is present: line_items. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Array of {@link CreditNoteLineItemRequest}. Full replacement of the draft's
     * owned line collection; requires expected_version. Recalculates corrections from current
     * remaining creditable pools. After CONCURRENT_MODIFICATION with reason
     * credit_note_creditable_value_changed, replace the existing corrections using the credit
     * note's current version, review the new amounts, and issue again. Scalar memo or reason
     * changes do not reprice lines. Shape $[] (Value): {@link CreditNoteLineItemRequest}. A credit
     * note line you supply when creating or updating a credit note: the invoice line item it
     * credits and how much, or an existing line to keep.
     */
    "line_items"?: Array<CreditNoteLineItemRequest>;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 4096. */
    "memo"?: string | null;
    /**
     * Shape $ (Value): string. Why the invoice is being corrected: returned_goods,
     * order_adjustment, billing_error, goodwill, or other. Cannot be null; omit it to keep the
     * current reason. Value enum: "returned_goods", "order_adjustment", "billing_error",
     * "goodwill", "other".
     */
    "reason"?: "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
});
/**
 * Shape $ (Value): {@link UpdateCreditNoteRequestInput}. The request body for: Update credit note.
 */
export type UpdateCreditNoteRequestInput = ({
    /**
     * Shape $ (Value): integer string. Credit note version last read. Required when line_items is
     * present. Required when any of these fields is present: line_items. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Array of {@link CreditNoteLineItemRequestInput}. Full replacement of the
     * draft's owned line collection; requires expected_version. Recalculates corrections from
     * current remaining creditable pools. After CONCURRENT_MODIFICATION with reason
     * credit_note_creditable_value_changed, replace the existing corrections using the credit
     * note's current version, review the new amounts, and issue again. Scalar memo or reason
     * changes do not reprice lines. Shape $[] (Value): {@link CreditNoteLineItemRequestInput}. A
     * credit note line you supply when creating or updating a credit note: the invoice line item
     * it credits and how much, or an existing line to keep.
     */
    "line_items"?: Array<CreditNoteLineItemRequestInput>;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 4096. */
    "memo"?: string | null;
    /**
     * Shape $ (Value): string. Why the invoice is being corrected: returned_goods,
     * order_adjustment, billing_error, goodwill, or other. Cannot be null; omit it to keep the
     * current reason. Value enum: "returned_goods", "order_adjustment", "billing_error",
     * "goodwill", "other".
     */
    "reason"?: "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other";
});
/**
 * Shape $ (Value): {@link UpdateCustomerAddressRequest}. The request body for: Update a customer
 * address; Update one of the current buyer's addresses. minProperties: 1.
 */
export type UpdateCustomerAddressRequest = {
    /**
     * Shape $ (Value): {@link Address}. Replaces the whole postal address. Send every field you
     * want to keep; omitted optional fields such as line2 are removed. A postal address for a
     * customer, with line 1, optional line 2, city, state, postal code, and country.
     */
    "address"?: Address;
    /**
     * Shape $ (Value): string or null. Limited to 100 characters (Unicode code points), counted
     * before surrounding whitespace is trimmed. Send null to clear it. minLength: 1. maxLength:
     * 100.
     */
    "label"?: string | null;
    /**
     * Shape $ (Value): string or null. E.164 phone number. Limited to 30 characters (Unicode code
     * points), counted before surrounding whitespace is trimmed. Send null to clear it. minLength:
     * 1. maxLength: 30.
     */
    "phone"?: string | null;
    /**
     * Shape $ (Value): string. Limited to 255 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. minLength: 1. maxLength: 255.
     */
    "recipient_name"?: string;
};
/**
 * Shape $ (Value): {@link UpdateCustomerAddressRequestInput}. The request body for: Update a
 * customer address; Update one of the current buyer's addresses. minProperties: 1.
 */
export type UpdateCustomerAddressRequestInput = {
    /**
     * Shape $ (Value): {@link PostalAddressInput}. Replaces the whole postal address. Send every
     * field you want to keep; omitted optional fields such as line2 are removed. A postal address
     * for a customer, with line 1, optional line 2, city, state, postal code, and country.
     */
    "address"?: PostalAddressInput;
    /**
     * Shape $ (Value): string or null. Limited to 100 characters (Unicode code points), counted
     * before surrounding whitespace is trimmed. Send null to clear it. minLength: 1. maxLength:
     * 100.
     */
    "label"?: string | null;
    /**
     * Shape $ (Value): string or null. E.164 phone number. Limited to 30 characters (Unicode code
     * points), counted before surrounding whitespace is trimmed. Send null to clear it. minLength:
     * 1. maxLength: 30.
     */
    "phone"?: string | null;
    /**
     * Shape $ (Value): string. Limited to 255 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. minLength: 1. maxLength: 255.
     */
    "recipient_name"?: string;
};
/**
 * Shape $ (Value): {@link UpdateCustomerEmailPreferencesRequest}. The request body for: Update the
 * current buyer's email preferences. minProperties: 1.
 */
export type UpdateCustomerEmailPreferencesRequest = {
    /** Shape $ (Value): boolean. A reminder after leaving checkout without paying. */
    "checkout_reminders"?: boolean;
    /**
     * Shape $ (Value): boolean. Emails about shipments and deliveries, such as shipped, out for
     * delivery, and delivered.
     */
    "shipping_updates"?: boolean;
};
/**
 * Shape $ (Value): {@link UpdateCustomerEmailPreferencesRequestInput}. The request body for:
 * Update the current buyer's email preferences. minProperties: 1.
 */
export type UpdateCustomerEmailPreferencesRequestInput = UpdateCustomerEmailPreferencesRequest;
/** Shape $ (Value): {@link UpdateCustomerRequest}. The request body for: Update customer. */
export type UpdateCustomerRequest = ({
    /**
     * Shape $ (Value): {@link AddressRequest} or null. Billing address. Omit to leave unchanged;
     * null clears it. Writing or clearing it also clears the saved billing-address default. Shape
     * $.anyOf[1] (Value): {@link AddressRequest}. A postal address you supply when creating or
     * updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to
     * clear it. Shape $.anyOf[2] (Value): null.
     */
    "billing_address"?: ((AddressRequest) | (null));
    /**
     * Shape $ (Value): string or null. Default payment term for this customer's invoices. Send
     * null to clear it. minLength: 1.
     */
    "default_invoice_payment_term_id"?: string | null;
    /**
     * Shape $ (Value): string or null. The active off_session payment method to use by default.
     * Omit to leave unchanged; null clears it. A change sends customer.updated. minLength: 1.
     */
    "default_payment_method_id"?: string | null;
    /**
     * Shape $ (Value): string or null. The customer's email. Omit to leave unchanged; null clears
     * it. Changing it is allowed only when your store hosts its own customer accounts
     * (`customer_account.mode` is `merchant_hosted`). Format: email. minLength: 1. maxLength: 320.
     */
    "email"?: string | null;
    /**
     * Shape $ (Value): integer string. Required when tax_identity is null or tax_identity.tax_ids
     * is present. Stale versions return a conflict. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Omit to leave unchanged; null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): string or null. Internal note about this customer. Omit to leave unchanged;
     * null clears it. minLength: 1.
     */
    "internal_note"?: string | null;
    /**
     * Shape $ (Value): boolean. Flag you set on the customer, for example after checking ID in
     * store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to
     * customer verifications, which prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): string or null. Customer name. Omit to leave unchanged; null clears it.
     * minLength: 1.
     */
    "name"?: string | null;
    /**
     * Shape $ (Value): string or null. Customer phone number. Omit to leave unchanged; null clears
     * it. minLength: 1.
     */
    "phone"?: string | null;
    /**
     * Shape $ (Value): string or null. Free-form label you assign, such as wholesale, so promotion
     * and delivery rules can match groups of customers. It is not an ID; Flint does not check it
     * against any resource. Omit to leave unchanged; null clears it. minLength: 1.
     */
    "segment"?: string | null;
    /**
     * Shape $ (Value): {@link AddressRequest} or null. Shipping address. Omit to leave unchanged;
     * null clears it. Writing or clearing it also clears the saved shipping-address default. Shape
     * $.anyOf[1] (Value): {@link AddressRequest}. A postal address you supply when creating or
     * updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to
     * clear it. Shape $.anyOf[2] (Value): null.
     */
    "shipping_address"?: ((AddressRequest) | (null));
    /** Shape $ (Value): boolean. */
    "tax_exempt"?: boolean;
    /**
     * Shape $ (Value): {@link TaxIdentityPatch} or null. Shape $.anyOf[1] (Value): {@link
     * TaxIdentityPatch}. Merchant-provided legal identity displayed on invoices and credit notes.
     * Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display
     * order; replacing the array requires the parent's expected_version. Existing entries retain
     * their document_tax_id; omit an entry to remove it, or omit its ID to add one. Shape
     * $.anyOf[2] (Value): null.
     */
    "tax_identity"?: ((TaxIdentityPatch) | (null));
});
/** Shape $ (Value): {@link UpdateCustomerRequestInput}. The request body for: Update customer. */
export type UpdateCustomerRequestInput = ({
    /**
     * Shape $ (Value): {@link AddressRequestInput} or null. Billing address. Omit to leave
     * unchanged; null clears it. Writing or clearing it also clears the saved billing-address
     * default. Shape $.anyOf[1] (Value): {@link AddressRequestInput}. A postal address you supply
     * when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null
     * for `line2` to clear it. Shape $.anyOf[2] (Value): null.
     */
    "billing_address"?: ((AddressRequestInput) | (null));
    /**
     * Shape $ (Value): string or null. Default payment term for this customer's invoices. Send
     * null to clear it. minLength: 1.
     */
    "default_invoice_payment_term_id"?: string | null;
    /**
     * Shape $ (Value): string or null. The active off_session payment method to use by default.
     * Omit to leave unchanged; null clears it. A change sends customer.updated. minLength: 1.
     */
    "default_payment_method_id"?: string | null;
    /**
     * Shape $ (Value): string or null. The customer's email. Omit to leave unchanged; null clears
     * it. Changing it is allowed only when your store hosts its own customer accounts
     * (`customer_account.mode` is `merchant_hosted`). Format: email. minLength: 1. maxLength: 320.
     */
    "email"?: string | null;
    /**
     * Shape $ (Value): integer string. Required when tax_identity is null or tax_identity.tax_ids
     * is present. Stale versions return a conflict. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Omit to leave unchanged; null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): string or null. Internal note about this customer. Omit to leave unchanged;
     * null clears it. minLength: 1.
     */
    "internal_note"?: string | null;
    /**
     * Shape $ (Value): boolean. Flag you set on the customer, for example after checking ID in
     * store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to
     * customer verifications, which prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): string or null. Customer name. Omit to leave unchanged; null clears it.
     * minLength: 1.
     */
    "name"?: string | null;
    /**
     * Shape $ (Value): string or null. Customer phone number. Omit to leave unchanged; null clears
     * it. minLength: 1.
     */
    "phone"?: string | null;
    /**
     * Shape $ (Value): string or null. Free-form label you assign, such as wholesale, so promotion
     * and delivery rules can match groups of customers. It is not an ID; Flint does not check it
     * against any resource. Omit to leave unchanged; null clears it. minLength: 1.
     */
    "segment"?: string | null;
    /**
     * Shape $ (Value): {@link AddressRequestInput} or null. Shipping address. Omit to leave
     * unchanged; null clears it. Writing or clearing it also clears the saved shipping-address
     * default. Shape $.anyOf[1] (Value): {@link AddressRequestInput}. A postal address you supply
     * when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null
     * for `line2` to clear it. Shape $.anyOf[2] (Value): null.
     */
    "shipping_address"?: ((AddressRequestInput) | (null));
    /** Shape $ (Value): boolean. */
    "tax_exempt"?: boolean;
    /**
     * Shape $ (Value): {@link TaxIdentityPatchInput} or null. Shape $.anyOf[1] (Value): {@link
     * TaxIdentityPatchInput}. Merchant-provided legal identity displayed on invoices and credit
     * notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in
     * display order; replacing the array requires the parent's expected_version. Existing entries
     * retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. Shape
     * $.anyOf[2] (Value): null.
     */
    "tax_identity"?: ((TaxIdentityPatchInput) | (null));
});
/**
 * Shape $ (Value): {@link UpdateDeliveryFulfillmentDetails}. Delivery fulfillment fields to change
 * when updating a fulfillment, such as courier, tracking, and delivery times. Send null to clear a
 * field.
 */
export type UpdateDeliveryFulfillmentDetails = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "carrier"?: string | null;
    /**
     * Shape $ (Value): string or null. Time at which the courier collected the order. Send null to
     * clear it. Format: date-time. minLength: 1.
     */
    "courier_pickup_at"?: string | null;
    /**
     * Shape $ (Value): integer string or null. Width of the promised courier pickup window, from 0
     * to 86400 seconds. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: `${bigint}` | null;
    /**
     * Shape $ (Value): string or null. Delivery network or merchant fleet provider handling the
     * job. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "courier_provider_name"?: string | null;
    /**
     * Shape $ (Value): string or null. Buyer-safe support number for the courier or merchant
     * fleet. Send null to clear it. minLength: 1. maxLength: 30.
     */
    "courier_support_phone"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "delivered_at"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "dispatched_at"?: string | null;
    /**
     * Shape $ (Value): string or null. Driver-facing notes for the final handoff. Send null to
     * clear it. minLength: 1. maxLength: 2048.
     */
    "dropoff_notes"?: string | null;
    /**
     * Shape $ (Value): string or null. Deadline after which an undelivered job should enter
     * merchant review. Send null to clear it. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | null;
    /**
     * Shape $ (Value): string or null. Stable delivery job ID owned by the courier or merchant
     * dispatch system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_delivery_id"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "instructions"?: string | null;
    /** Shape $ (Value): boolean or null. Whether the buyer requested a no-contact handoff. */
    "no_contact"?: boolean | null;
    /**
     * Shape $ (Value): integer string or null. Expected preparation time before courier pickup,
     * from 0 to 86400 seconds. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: `${bigint}` | null;
    /**
     * Shape $ (Value): string or null. Time at which the order became ready for courier pickup.
     * Send null to clear it. Format: date-time. minLength: 1.
     */
    "ready_at"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "service_area_id"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
    /**
     * Shape $ (Value): string or null. Absolute HTTPS carrier tracking URL. Embedded URL
     * credentials are rejected. Send null to clear it. minLength: 1.
     */
    "tracking_url"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "window_end_at"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "window_start_at"?: string | null;
};
/**
 * Shape $ (Value): {@link UpdateDeliveryFulfillmentDetailsInput}. Delivery fulfillment fields to
 * change when updating a fulfillment, such as courier, tracking, and delivery times. Send null to
 * clear a field.
 */
export type UpdateDeliveryFulfillmentDetailsInput = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "carrier"?: string | null;
    /**
     * Shape $ (Value): string or null. Time at which the courier collected the order. Send null to
     * clear it. Format: date-time. minLength: 1.
     */
    "courier_pickup_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): integer string or null. Width of the promised courier pickup window, from 0
     * to 86400 seconds. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: `${bigint}` | bigint | null;
    /**
     * Shape $ (Value): string or null. Delivery network or merchant fleet provider handling the
     * job. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "courier_provider_name"?: string | null;
    /**
     * Shape $ (Value): string or null. Buyer-safe support number for the courier or merchant
     * fleet. Send null to clear it. minLength: 1. maxLength: 30.
     */
    "courier_support_phone"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "delivered_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "dispatched_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string or null. Driver-facing notes for the final handoff. Send null to
     * clear it. minLength: 1. maxLength: 2048.
     */
    "dropoff_notes"?: string | null;
    /**
     * Shape $ (Value): string or null. Deadline after which an undelivered job should enter
     * merchant review. Send null to clear it. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string or null. Stable delivery job ID owned by the courier or merchant
     * dispatch system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_delivery_id"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "instructions"?: string | null;
    /** Shape $ (Value): boolean or null. Whether the buyer requested a no-contact handoff. */
    "no_contact"?: boolean | null;
    /**
     * Shape $ (Value): integer string or null. Expected preparation time before courier pickup,
     * from 0 to 86400 seconds. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: `${bigint}` | bigint | null;
    /**
     * Shape $ (Value): string or null. Time at which the order became ready for courier pickup.
     * Send null to clear it. Format: date-time. minLength: 1.
     */
    "ready_at"?: string | globalThis.Date | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "service_area_id"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
    /**
     * Shape $ (Value): string or null. Absolute HTTPS carrier tracking URL. Embedded URL
     * credentials are rejected. Send null to clear it. minLength: 1.
     */
    "tracking_url"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "window_end_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "window_start_at"?: string | globalThis.Date | null;
};
/**
 * Shape $ (Value): {@link UpdateDeliveryLocationSetRequest}. The request body for: Update delivery
 * location set.
 */
export type UpdateDeliveryLocationSetRequest = ({
    /**
     * Shape $ (Value): {@link DeliveryLocationSetConfiguration}. location_ids replaces the set's
     * Locations when present; leave configuration out to keep them. Null, an empty list, and
     * duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery
     * location set.
     */
    "configuration"?: DeliveryLocationSetConfiguration;
    /**
     * Shape $ (Value): integer string. Current resource version. Required for configuration,
     * owned-rate replacement, and quote-pinned method presentation; optional for other scalar and
     * status updates. Required when any of these fields is present: configuration. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryLocationSetConfiguration}. location_ids replaces the set's
     * Locations when present; leave configuration out to keep them. Null, an empty list, and
     * duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery
     * location set.
     */
    "configuration": DeliveryLocationSetConfiguration;
})
    | ({
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata": Record<string, string | null> | null;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link UpdateDeliveryLocationSetRequestInput}. The request body for: Update
 * delivery location set.
 */
export type UpdateDeliveryLocationSetRequestInput = ({
    /**
     * Shape $ (Value): {@link DeliveryLocationSetConfigurationInput}. location_ids replaces the
     * set's Locations when present; leave configuration out to keep them. Null, an empty list, and
     * duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery
     * location set.
     */
    "configuration"?: DeliveryLocationSetConfigurationInput;
    /**
     * Shape $ (Value): integer string. Current resource version. Required for configuration,
     * owned-rate replacement, and quote-pinned method presentation; optional for other scalar and
     * status updates. Required when any of these fields is present: configuration. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryLocationSetConfigurationInput}. location_ids replaces the
     * set's Locations when present; leave configuration out to keep them. Null, an empty list, and
     * duplicate IDs are invalid. Requires expected_version. The location IDs in a delivery
     * location set.
     */
    "configuration": DeliveryLocationSetConfigurationInput;
})
    | ({
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata": Record<string, string | null> | null;
}));
/**
 * Shape $ (Value): {@link UpdateDeliveryMethodRequest}. The request body for: Update delivery
 * method.
 */
export type UpdateDeliveryMethodRequest = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationPatchRequest}. Only the keys you send
     * change; keys you leave out keep their current values. Each key you send replaces that part
     * of the configuration whole. Null removes an optional key, as each field describes. Arrays
     * can't be null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. Only the keys you send change; keys you
     * leave out keep their current values. Each key you send replaces that part of the
     * configuration whole. Null removes an optional key, as each field describes. Arrays can't be
     * null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. minProperties: 1.
     */
    "configuration"?: DeliveryMethodConfigurationPatchRequest;
    /**
     * Shape $ (Value): string or null. Delivery method description. Send null to clear it.
     * minLength: 1.
     */
    "description"?: string | null;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): integer string. Current resource version. Required for configuration,
     * owned-rate replacement, and quote-pinned method presentation; optional for other scalar and
     * status updates. Required when any of these fields is present: configuration, name,
     * description, display_position, recommendation_priority. Use an integer string (decimal
     * digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer or null. Marks this method as recommended. Within each choice
     * group, the available method with the lowest value is recommended and listed first. Ties go
     * to the lower display_position, then the method ID. Null never recommends the method. Send
     * null to clear it. Format: int32.
     */
    "recommendation_priority"?: number | null;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationPatchRequest}. Only the keys you send
     * change; keys you leave out keep their current values. Each key you send replaces that part
     * of the configuration whole. Null removes an optional key, as each field describes. Arrays
     * can't be null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. Only the keys you send change; keys you
     * leave out keep their current values. Each key you send replaces that part of the
     * configuration whole. Null removes an optional key, as each field describes. Arrays can't be
     * null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. minProperties: 1.
     */
    "configuration": DeliveryMethodConfigurationPatchRequest;
})
    | ({
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata": Record<string, string | null> | null;
})
    | ({
    /**
     * Shape $ (Value): string or null. Delivery method description. Send null to clear it.
     * minLength: 1.
     */
    "description": string | null;
})
    | ({
    /** Shape $ (Value): integer. Format: int32. */
    "display_position": number;
})
    | ({
    /**
     * Shape $ (Value): integer or null. Marks this method as recommended. Within each choice
     * group, the available method with the lowest value is recommended and listed first. Ties go
     * to the lower display_position, then the method ID. Null never recommends the method. Send
     * null to clear it. Format: int32.
     */
    "recommendation_priority": number | null;
})
    | ({
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status": "inactive" | "active" | (string & {});
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link UpdateDeliveryMethodRequestInput}. The request body for: Update delivery
 * method.
 */
export type UpdateDeliveryMethodRequestInput = ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationPatchRequestInput}. Only the keys you
     * send change; keys you leave out keep their current values. Each key you send replaces that
     * part of the configuration whole. Null removes an optional key, as each field describes.
     * Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. Only the keys you send change; keys you
     * leave out keep their current values. Each key you send replaces that part of the
     * configuration whole. Null removes an optional key, as each field describes. Arrays can't be
     * null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. minProperties: 1.
     */
    "configuration"?: DeliveryMethodConfigurationPatchRequestInput;
    /**
     * Shape $ (Value): string or null. Delivery method description. Send null to clear it.
     * minLength: 1.
     */
    "description"?: string | null;
    /** Shape $ (Value): integer. Format: int32. */
    "display_position"?: number;
    /**
     * Shape $ (Value): integer string. Current resource version. Required for configuration,
     * owned-rate replacement, and quote-pinned method presentation; optional for other scalar and
     * status updates. Required when any of these fields is present: configuration, name,
     * description, display_position, recommendation_priority. Use an integer string (decimal
     * digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer or null. Marks this method as recommended. Within each choice
     * group, the available method with the lowest value is recommended and listed first. Ties go
     * to the lower display_position, then the method ID. Null never recommends the method. Send
     * null to clear it. Format: int32.
     */
    "recommendation_priority"?: number | null;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryMethodConfigurationPatchRequestInput}. Only the keys you
     * send change; keys you leave out keep their current values. Each key you send replaces that
     * part of the configuration whole. Null removes an optional key, as each field describes.
     * Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. Only the keys you send change; keys you
     * leave out keep their current values. Each key you send replaces that part of the
     * configuration whole. Null removes an optional key, as each field describes. Arrays can't be
     * null: send [] to clear recipient_requirements or quote_input_fields.
     * pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a
     * rate, leave out the ID to create one, and leave out a rate to remove it. The result must be
     * a configuration you could create, including pickup_mode for pickup methods. Requires
     * expected_version. An empty configuration is invalid. minProperties: 1.
     */
    "configuration": DeliveryMethodConfigurationPatchRequestInput;
})
    | ({
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata": Record<string, string | null> | null;
})
    | ({
    /**
     * Shape $ (Value): string or null. Delivery method description. Send null to clear it.
     * minLength: 1.
     */
    "description": string | null;
})
    | ({
    /** Shape $ (Value): integer. Format: int32. */
    "display_position": number;
})
    | ({
    /**
     * Shape $ (Value): integer or null. Marks this method as recommended. Within each choice
     * group, the available method with the lowest value is recommended and listed first. Ties go
     * to the lower display_position, then the method ID. Null never recommends the method. Send
     * null to clear it. Format: int32.
     */
    "recommendation_priority": number | null;
})
    | ({
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status": "inactive" | "active";
}));
/**
 * Shape $ (Value): {@link UpdateDeliveryProfileRequest}. The request body for: Update delivery
 * profile.
 */
export type UpdateDeliveryProfileRequest = ({
    /**
     * Shape $ (Value): {@link DeliveryProfileConfigurationRequest}. Send the whole profile
     * configuration. It replaces the current one; leave configuration out to keep it. requirement
     * none allows no other keys, and quote profiles require origin_policy, combination_policy, and
     * splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery
     * planning settings you supply when creating or updating a delivery profile. Which fields are
     * allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration"?: DeliveryProfileConfigurationRequest;
    /**
     * Shape $ (Value): integer string. Current resource version. Required for configuration,
     * owned-rate replacement, and quote-pinned method presentation; optional for other scalar and
     * status updates. Required when any of these fields is present: configuration. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): boolean. Send true to make this active profile the physical catalog
     * default. Can be combined with other mutable fields in one atomic update. Send
     * expected_version to fence the update against this profile's current version. Sending only
     * is_default true for the current default is a no-op: its version stays unchanged and no
     * events are emitted. False is invalid; make another profile the default instead. Value enum:
     * true.
     */
    "is_default"?: boolean;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryProfileConfigurationRequest}. Send the whole profile
     * configuration. It replaces the current one; leave configuration out to keep it. requirement
     * none allows no other keys, and quote profiles require origin_policy, combination_policy, and
     * splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery
     * planning settings you supply when creating or updating a delivery profile. Which fields are
     * allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration": DeliveryProfileConfigurationRequest;
})
    | ({
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata": Record<string, string | null> | null;
})
    | ({
    /**
     * Shape $ (Value): boolean. Send true to make this active profile the physical catalog
     * default. Can be combined with other mutable fields in one atomic update. Send
     * expected_version to fence the update against this profile's current version. Sending only
     * is_default true for the current default is a no-op: its version stays unchanged and no
     * events are emitted. False is invalid; make another profile the default instead. Value enum:
     * true.
     */
    "is_default": boolean;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link UpdateDeliveryProfileRequestInput}. The request body for: Update
 * delivery profile.
 */
export type UpdateDeliveryProfileRequestInput = ({
    /**
     * Shape $ (Value): {@link DeliveryProfileConfigurationRequestInput}. Send the whole profile
     * configuration. It replaces the current one; leave configuration out to keep it. requirement
     * none allows no other keys, and quote profiles require origin_policy, combination_policy, and
     * splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery
     * planning settings you supply when creating or updating a delivery profile. Which fields are
     * allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration"?: DeliveryProfileConfigurationRequestInput;
    /**
     * Shape $ (Value): integer string. Current resource version. Required for configuration,
     * owned-rate replacement, and quote-pinned method presentation; optional for other scalar and
     * status updates. Required when any of these fields is present: configuration. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): boolean. Send true to make this active profile the physical catalog
     * default. Can be combined with other mutable fields in one atomic update. Send
     * expected_version to fence the update against this profile's current version. Sending only
     * is_default true for the current default is a no-op: its version stays unchanged and no
     * events are emitted. False is invalid; make another profile the default instead. Value enum:
     * true.
     */
    "is_default"?: true;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryProfileConfigurationRequestInput}. Send the whole profile
     * configuration. It replaces the current one; leave configuration out to keep it. requirement
     * none allows no other keys, and quote profiles require origin_policy, combination_policy, and
     * splitting_policy. Null and an empty object are invalid. Requires expected_version. Delivery
     * planning settings you supply when creating or updating a delivery profile. Which fields are
     * allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration": DeliveryProfileConfigurationRequestInput;
})
    | ({
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata": Record<string, string | null> | null;
})
    | ({
    /**
     * Shape $ (Value): boolean. Send true to make this active profile the physical catalog
     * default. Can be combined with other mutable fields in one atomic update. Send
     * expected_version to fence the update against this profile's current version. Sending only
     * is_default true for the current default is a no-op: its version stays unchanged and no
     * events are emitted. False is invalid; make another profile the default instead. Value enum:
     * true.
     */
    "is_default": true;
}));
/**
 * Shape $ (Value): {@link UpdateDeliveryRateCallbackRequest}. The request body for: Update
 * delivery rate callback.
 */
export type UpdateDeliveryRateCallbackRequest = ({
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackConfigurationPatchRequest}. Only the keys you
     * send change; keys you leave out keep their current values. Null restores a key's default, as
     * each field describes. The result must be a configuration you could create. Requires
     * expected_version. An empty configuration is invalid. Only the keys you send change; keys you
     * leave out keep their current values. Null restores a key's default, as each field describes.
     * The result must be a configuration you could create. Requires expected_version. An empty
     * configuration is invalid. minProperties: 1.
     */
    "configuration"?: DeliveryRateCallbackConfigurationPatchRequest;
    /**
     * Shape $ (Value): integer string. Current resource version. Required for configuration,
     * owned-rate replacement, and quote-pinned method presentation; optional for other scalar and
     * status updates. Required when any of these fields is present: configuration. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active" | (string & {});
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackConfigurationPatchRequest}. Only the keys you
     * send change; keys you leave out keep their current values. Null restores a key's default, as
     * each field describes. The result must be a configuration you could create. Requires
     * expected_version. An empty configuration is invalid. Only the keys you send change; keys you
     * leave out keep their current values. Null restores a key's default, as each field describes.
     * The result must be a configuration you could create. Requires expected_version. An empty
     * configuration is invalid. minProperties: 1.
     */
    "configuration": DeliveryRateCallbackConfigurationPatchRequest;
})
    | ({
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status": "inactive" | "active" | (string & {});
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link UpdateDeliveryRateCallbackRequestInput}. The request body for: Update
 * delivery rate callback.
 */
export type UpdateDeliveryRateCallbackRequestInput = ({
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackConfigurationPatchRequestInput}. Only the keys
     * you send change; keys you leave out keep their current values. Null restores a key's
     * default, as each field describes. The result must be a configuration you could create.
     * Requires expected_version. An empty configuration is invalid. Only the keys you send change;
     * keys you leave out keep their current values. Null restores a key's default, as each field
     * describes. The result must be a configuration you could create. Requires expected_version.
     * An empty configuration is invalid. minProperties: 1.
     */
    "configuration"?: DeliveryRateCallbackConfigurationPatchRequestInput;
    /**
     * Shape $ (Value): integer string. Current resource version. Required for configuration,
     * owned-rate replacement, and quote-pinned method presentation; optional for other scalar and
     * status updates. Required when any of these fields is present: configuration. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status"?: "inactive" | "active";
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryRateCallbackConfigurationPatchRequestInput}. Only the keys
     * you send change; keys you leave out keep their current values. Null restores a key's
     * default, as each field describes. The result must be a configuration you could create.
     * Requires expected_version. An empty configuration is invalid. Only the keys you send change;
     * keys you leave out keep their current values. Null restores a key's default, as each field
     * describes. The result must be a configuration you could create. Requires expected_version.
     * An empty configuration is invalid. minProperties: 1.
     */
    "configuration": DeliveryRateCallbackConfigurationPatchRequestInput;
})
    | ({
    /** Shape $ (Value): string.  Value enum: "inactive", "active". */
    "status": "inactive" | "active";
}));
/**
 * Shape $ (Value): {@link UpdateDeliveryZoneRequest}. The request body for: Update delivery zone.
 */
export type UpdateDeliveryZoneRequest = ({
    /**
     * Shape $ (Value): {@link DeliveryZoneConfiguration}. Send the whole geography. It replaces
     * the zone's current geography; leave configuration out to keep it. Null and an empty object
     * are invalid. Requires expected_version. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "configuration"?: DeliveryZoneConfiguration;
    /**
     * Shape $ (Value): integer string. Current resource version. Required for configuration,
     * owned-rate replacement, and quote-pinned method presentation; optional for other scalar and
     * status updates. Required when any of these fields is present: configuration. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryZoneConfiguration}. Send the whole geography. It replaces
     * the zone's current geography; leave configuration out to keep it. Null and an empty object
     * are invalid. Requires expected_version. A reusable geographic predicate containing only
     * country, state, postal_code, and radius conditions.
     */
    "configuration": DeliveryZoneConfiguration;
})
    | ({
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata": Record<string, string | null> | null;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link UpdateDeliveryZoneRequestInput}. The request body for: Update delivery
 * zone.
 */
export type UpdateDeliveryZoneRequestInput = ({
    /**
     * Shape $ (Value): {@link DeliveryZoneConfigurationInput}. Send the whole geography. It
     * replaces the zone's current geography; leave configuration out to keep it. Null and an empty
     * object are invalid. Requires expected_version. A reusable geographic predicate containing
     * only country, state, postal_code, and radius conditions.
     */
    "configuration"?: DeliveryZoneConfigurationInput;
    /**
     * Shape $ (Value): integer string. Current resource version. Required for configuration,
     * owned-rate replacement, and quote-pinned method presentation; optional for other scalar and
     * status updates. Required when any of these fields is present: configuration. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
})
    & (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Shape $ (Value): {@link DeliveryZoneConfigurationInput}. Send the whole geography. It
     * replaces the zone's current geography; leave configuration out to keep it. Null and an empty
     * object are invalid. Requires expected_version. A reusable geographic predicate containing
     * only country, state, postal_code, and radius conditions.
     */
    "configuration": DeliveryZoneConfigurationInput;
})
    | ({
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata": Record<string, string | null> | null;
}));
/** Shape $ (Value): {@link UpdateDeviceRequest}. The request body for: Update device. */
export type UpdateDeviceRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "location_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
};
/** Shape $ (Value): {@link UpdateDeviceRequestInput}. The request body for: Update device. */
export type UpdateDeviceRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "location_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
};
/**
 * Shape $ (Value): {@link UpdateDigitalFulfillmentDetails}. Digital fulfillment fields to change
 * when updating a fulfillment: delivery time and URL. Send null to clear a field.
 */
export type UpdateDigitalFulfillmentDetails = {
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "delivered_at"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "delivery_url"?: string | null;
};
/**
 * Shape $ (Value): {@link UpdateDigitalFulfillmentDetailsInput}. Digital fulfillment fields to
 * change when updating a fulfillment: delivery time and URL. Send null to clear a field.
 */
export type UpdateDigitalFulfillmentDetailsInput = {
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "delivered_at"?: string | globalThis.Date | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "delivery_url"?: string | null;
};
/**
 * Shape $ (Value): {@link UpdateFulfillmentRequest}. Provide at most one fulfillment details
 * object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment
 * execution details belong to shipments and packages. A supplied detail field must match the
 * stored fulfillment type. Omit details for metadata-only updates. Even null detail fields count
 * toward exclusivity.
 */
export type UpdateFulfillmentRequest = ({
    /**
     * Shape $ (Value): string or null. Completion evidence timestamp. Use only to correct
     * completion evidence on an already completed fulfillment; complete pending fulfillments with
     * POST /transitions. Send null to clear it. Format: date-time. minLength: 1.
     */
    "completed_at"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "customer_id"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "device_id"?: string | null;
    /**
     * Shape $ (Value): {@link UpdateDigitalFulfillmentDetails} or null. Shape $.anyOf[1] (Value):
     * {@link UpdateDigitalFulfillmentDetails}. Digital fulfillment fields to change when updating
     * a fulfillment: delivery time and URL. Send null to clear a field. Shape $.anyOf[2] (Value):
     * null.
     */
    "digital_details"?: ((UpdateDigitalFulfillmentDetails) | (null));
    /**
     * Shape $ (Value): integer string. Optional resource version last read by the caller. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link UpdateDeliveryFulfillmentDetails} or null. Shape $.anyOf[1] (Value):
     * {@link UpdateDeliveryFulfillmentDetails}. Delivery fulfillment fields to change when
     * updating a fulfillment, such as courier, tracking, and delivery times. Send null to clear a
     * field. Shape $.anyOf[2] (Value): null.
     */
    "local_delivery_details"?: ((UpdateDeliveryFulfillmentDetails) | (null));
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "location_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): {@link UpdatePickupFulfillmentDetails} or null. Shape $.anyOf[1] (Value):
     * {@link UpdatePickupFulfillmentDetails}. Pickup fulfillment fields to change when updating a
     * fulfillment, such as location, pickup window, and curbside details. Send null to clear a
     * field. Shape $.anyOf[2] (Value): null.
     */
    "pickup_details"?: ((UpdatePickupFulfillmentDetails) | (null));
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequest} or null. Shape $.anyOf[1] (Value):
     * {@link FulfillmentRecipientRequest}. Recipient details you supply when creating or updating
     * a fulfillment: name, email, phone, address, and handling instructions. Shape $.anyOf[2]
     * (Value): null.
     */
    "recipient"?: ((FulfillmentRecipientRequest) | (null));
    /**
     * Shape $ (Value): {@link UpdateServiceFulfillmentDetails} or null. Shape $.anyOf[1] (Value):
     * {@link UpdateServiceFulfillmentDetails}. Service fulfillment fields to change when updating
     * a fulfillment: scheduled times, completion time, and notes. Send null to clear a field.
     * Shape $.anyOf[2] (Value): null.
     */
    "service_details"?: ((UpdateServiceFulfillmentDetails) | (null));
});
/**
 * Shape $ (Value): {@link UpdateFulfillmentRequestInput}. Provide at most one fulfillment details
 * object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment
 * execution details belong to shipments and packages. A supplied detail field must match the
 * stored fulfillment type. Omit details for metadata-only updates. Even null detail fields count
 * toward exclusivity.
 */
export type UpdateFulfillmentRequestInput = ({
    /**
     * Shape $ (Value): string or null. Completion evidence timestamp. Use only to correct
     * completion evidence on an already completed fulfillment; complete pending fulfillments with
     * POST /transitions. Send null to clear it. Format: date-time. minLength: 1.
     */
    "completed_at"?: string | globalThis.Date | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "customer_id"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "device_id"?: string | null;
    /**
     * Shape $ (Value): {@link UpdateDigitalFulfillmentDetailsInput} or null. Shape $.anyOf[1]
     * (Value): {@link UpdateDigitalFulfillmentDetailsInput}. Digital fulfillment fields to change
     * when updating a fulfillment: delivery time and URL. Send null to clear a field. Shape
     * $.anyOf[2] (Value): null.
     */
    "digital_details"?: ((UpdateDigitalFulfillmentDetailsInput) | (null));
    /**
     * Shape $ (Value): integer string. Optional resource version last read by the caller. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link UpdateDeliveryFulfillmentDetailsInput} or null. Shape $.anyOf[1]
     * (Value): {@link UpdateDeliveryFulfillmentDetailsInput}. Delivery fulfillment fields to
     * change when updating a fulfillment, such as courier, tracking, and delivery times. Send null
     * to clear a field. Shape $.anyOf[2] (Value): null.
     */
    "local_delivery_details"?: ((UpdateDeliveryFulfillmentDetailsInput) | (null));
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "location_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): {@link UpdatePickupFulfillmentDetailsInput} or null. Shape $.anyOf[1]
     * (Value): {@link UpdatePickupFulfillmentDetailsInput}. Pickup fulfillment fields to change
     * when updating a fulfillment, such as location, pickup window, and curbside details. Send
     * null to clear a field. Shape $.anyOf[2] (Value): null.
     */
    "pickup_details"?: ((UpdatePickupFulfillmentDetailsInput) | (null));
    /**
     * Shape $ (Value): {@link FulfillmentRecipientRequestInput} or null. Shape $.anyOf[1] (Value):
     * {@link FulfillmentRecipientRequestInput}. Recipient details you supply when creating or
     * updating a fulfillment: name, email, phone, address, and handling instructions. Shape
     * $.anyOf[2] (Value): null.
     */
    "recipient"?: ((FulfillmentRecipientRequestInput) | (null));
    /**
     * Shape $ (Value): {@link UpdateServiceFulfillmentDetailsInput} or null. Shape $.anyOf[1]
     * (Value): {@link UpdateServiceFulfillmentDetailsInput}. Service fulfillment fields to change
     * when updating a fulfillment: scheduled times, completion time, and notes. Send null to clear
     * a field. Shape $.anyOf[2] (Value): null.
     */
    "service_details"?: ((UpdateServiceFulfillmentDetailsInput) | (null));
})
    & (({
    "pickup_details"?: never;
} | {
    "local_delivery_details"?: never;
}))
    & (({
    "pickup_details"?: never;
} | {
    "digital_details"?: never;
}))
    & (({
    "pickup_details"?: never;
} | {
    "service_details"?: never;
}))
    & (({
    "local_delivery_details"?: never;
} | {
    "digital_details"?: never;
}))
    & (({
    "local_delivery_details"?: never;
} | {
    "service_details"?: never;
}))
    & (({
    "digital_details"?: never;
} | {
    "service_details"?: never;
}));
/** Shape $ (Value): {@link UpdateGiftCardRequest}. The request body for: Update a gift card. */
export type UpdateGiftCardRequest = {
    /**
     * Shape $ (Value): string or null. Omission preserves the association; null clears it.
     * minLength: 1.
     */
    "customer_id"?: string | null;
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Omission preserves the association; null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
};
/**
 * Shape $ (Value): {@link UpdateGiftCardRequestInput}. The request body for: Update a gift card.
 */
export type UpdateGiftCardRequestInput = {
    /**
     * Shape $ (Value): string or null. Omission preserves the association; null clears it.
     * minLength: 1.
     */
    "customer_id"?: string | null;
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Omission preserves the association; null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
};
/**
 * Shape $ (Value): {@link UpdateInventoryAllocationPolicyRequest}. The request body for: Update
 * inventory allocation policy.
 */
export type UpdateInventoryAllocationPolicyRequest = ({
    /**
     * Shape $ (Value): {@link InventoryAllocationConfigurationValue}. Requires expected_version.
     * Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand
     * can be split, and how many Locations one assignment may use.
     */
    "configuration"?: InventoryAllocationConfigurationValue;
    /**
     * Shape $ (Value): integer string. Required when any of these fields is present:
     * configuration. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
});
/**
 * Shape $ (Value): {@link UpdateInventoryAllocationPolicyRequestInput}. The request body for:
 * Update inventory allocation policy.
 */
export type UpdateInventoryAllocationPolicyRequestInput = ({
    /**
     * Shape $ (Value): {@link InventoryAllocationConfigurationValueInput}. Requires
     * expected_version. Routing rules for an inventory allocation policy: ranked groups of
     * Locations, whether demand can be split, and how many Locations one assignment may use.
     */
    "configuration"?: InventoryAllocationConfigurationValueInput;
    /**
     * Shape $ (Value): integer string. Required when any of these fields is present:
     * configuration. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
});
/**
 * Shape $ (Value): {@link UpdateInventoryCountRequest}. The request body for: Update inventory
 * count.
 */
export type UpdateInventoryCountRequest = ({
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version": `${bigint}`;
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryCountObservationRequest}. Complete replacement
     * containing every count item exactly once. Every physical version must match current stock or
     * the entire save is refused. Recount affected items before submitting fresh fences. minItems:
     * 1. maxItems: 100. Shape $[] (Value): {@link InventoryCountObservationRequest}. A counted
     * quantity for one item in an inventory count, with the physical version it was read at.
     */
    "observations": Array<InventoryCountObservationRequest>;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequest}. The source system you report for an
     * inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
/**
 * Shape $ (Value): {@link UpdateInventoryCountRequestInput}. The request body for: Update
 * inventory count.
 */
export type UpdateInventoryCountRequestInput = ({
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryCountObservationRequestInput}. Complete
     * replacement containing every count item exactly once. Every physical version must match
     * current stock or the entire save is refused. Recount affected items before submitting fresh
     * fences. minItems: 1. maxItems: 100. Shape $[] (Value): {@link
     * InventoryCountObservationRequestInput}. A counted quantity for one item in an inventory
     * count, with the physical version it was read at.
     */
    "observations": Array<InventoryCountObservationRequestInput>;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequestInput}. The source system you report for
     * an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
