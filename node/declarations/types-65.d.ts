import type { CustomerTaxID } from './types-16.js';
import type { TaxDefaultCalculation, TaxDefaultCalculationRequestInput } from './types-64.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-37.js';
import type { ResponseMeta } from './types-54.js';
import type { InputValue } from '../runtime.js';
import type { AdvanceTestClockRequestInput } from './types-0.js';
import type { CreateTestClockRequestInput } from './types-14.js';
import type { ExpandedOrderSummary } from './types-24.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { CheckInTicketRequestInput } from './types-5.js';
import type { LookupTicketRequestInput } from './types-35.js';
import type { UpdateTicketRequestInput } from './types-68.js';
import type { MoneyValue, MoneyValueInput } from './types-38.js';
import type { CloseGiftCardRequest } from './types-6.js';
/**
 * The buyer accounts for the tax under the reverse charge. Rows that carry it have
 * `taxability_reason` `reverse_charge` and no tax.
 */
export type TaxReverseCharge = {
    /**
     * The customer's tax ID the reverse charge relied on. Frozen once the order is paid;
     * recalculating tax before payment reads the customer's current tax IDs again. `null` when
     * external tax sent a reverse charge and the customer has no tax ID for that country. anyOf[1]
     * (Value): {@link CustomerTaxID}. A copy of one of the customer's `tax_identity.tax_ids`.
     * Frozen once the order is paid; recalculating tax before payment reads the customer again.
     * anyOf[2] (Value): null.
     */
    "customer_tax_id": ((CustomerTaxID) | (null));
};
/**
 * Tax settings: whether tax is calculated by default and the default tax categories for line items
 * and delivery charges.
 */
export type TaxSettings = {
    /**
     * The active tax calculation callback selected for this merchant and environment. Switching
     * IDs is atomic. Omitted when no callback is selected. minLength: 1. Example:
     * "tcb_01KEZF7C00N7SER74Y2E6D1ZGT".
     */
    "calculation_callback_id"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. The calculation an order uses when
     * nothing sets its own: an order created with `POST /v1/orders` without `tax.calculation`, and
     * the orders of checkout sessions, payment links, and subscriptions that set none. A
     * `provided` default applies only to orders you create; the orders Flint creates use automatic
     * tax under it. Omitted when unset, which means automatic. The calculation an order uses when
     * its request leaves `tax.calculation` unset.
     */
    "default_calculation"?: TaxDefaultCalculation;
    /**
     * Charge category inherited by delivery methods that omit charge_tax_category. `null` when no
     * default is set; the category then follows the method type: shipping for shipments, delivery
     * for local delivery, and service_fee for pickup. Value enum: "service_fee", "shipping",
     * "delivery", "handling", "surcharge", null.
     */
    "default_delivery_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Taxability of delivery charges for delivery methods that don't set `taxable`. Defaults to
     * true.
     */
    "default_delivery_taxable"?: boolean;
    /**
     * Whether new checkouts and orders calculate tax by default. This does not decide whether an
     * individual line item or delivery charge is taxable. Turning it on, or changing the default
     * calculation while it is on, needs what the default calculation uses: a selected tax
     * calculation callback for an external `callback` default, and an active tax connection for
     * any other, because the orders Flint creates use automatic tax under an automatic or
     * `provided` default.
     */
    "default_enabled"?: boolean;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
     */
    "default_line_item_tax_category"?: "general"
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
     * Price mode an order takes when it starts calculating tax without its own tax.calculation:
     * when it is created, from a checkout session or payment link, or when tax is turned on later.
     * additive (the default) adds tax to prices, and inclusive treats every line item and charge
     * price as including its tax. Subscription orders, including renewals, stay additive, and
     * orders that already calculate tax keep their mode. Value enum: "additive", "inclusive".
     */
    "default_price_mode"?: "additive" | "inclusive" | (string & {});
    /**
     * Automatic tax basis for delivery-method charges. Defaults to full_charge.
     * taxable_items_share taxes the charge in proportion to discounted gross taxable merchandise
     * in its fulfillment group, rounded half up. Explicit taxable:false wins. Direct order charges
     * and external tax are unchanged. Saved values take effect only when Flint enables this
     * capability; until then the full charge is used. Open orders use the setting at their next
     * calculation; committed tax keeps its basis. Value enum: "full_charge",
     * "taxable_items_share".
     */
    "delivery_charge_tax_basis"?: "full_charge" | "taxable_items_share" | (string & {});
};
/** Tax settings to change when updating settings. Send null for a category to clear it. */
export type TaxSettingsRequest = {
    /**
     * The active tax calculation callback selected for this merchant and environment. Switching
     * IDs is atomic. Omit to preserve the selection; send null to clear it. minLength: 1. Example:
     * "tcb_01KEZF7C00N7SER74Y2E6D1ZGT".
     */
    "calculation_callback_id"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. The calculation an order uses when
     * nothing sets its own: an order created with `POST /v1/orders` without `tax.calculation`, and
     * the orders of checkout sessions, payment links, and subscriptions that set none. A
     * `provided` default applies only to orders you create; the orders Flint creates use automatic
     * tax under it. Send null to clear it, which means automatic. While `default_enabled` is on, a
     * `callback` default needs a selected tax calculation callback, and clearing
     * `calculation_callback_id` is refused; any other default needs an active tax connection.
     * anyOf[1] (Value): {@link TaxDefaultCalculation}. The calculation an order uses when its
     * request leaves `tax.calculation` unset. anyOf[2] (Value): null.
     */
    "default_calculation"?: ((TaxDefaultCalculation) | (null));
    /**
     * Charge category inherited by delivery methods that omit charge_tax_category. `null` when no
     * default is set; the category then follows the method type: shipping for shipments, delivery
     * for local delivery, and service_fee for pickup. Send null to clear it. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "default_delivery_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Taxability of delivery charges for delivery methods that don't set `taxable`. Defaults to
     * true.
     */
    "default_delivery_taxable"?: boolean;
    /**
     * Whether new checkouts and orders calculate tax by default. This does not decide whether an
     * individual line item or delivery charge is taxable. Turning it on, or changing the default
     * calculation while it is on, needs what the default calculation uses: a selected tax
     * calculation callback for an external `callback` default, and an active tax connection for
     * any other, because the orders Flint creates use automatic tax under an automatic or
     * `provided` default.
     */
    "default_enabled"?: boolean;
    /**
     * Flint line-item tax category. Send null to clear it. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission", null.
     */
    "default_line_item_tax_category"?: "general"
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
     * Price mode an order takes when it starts calculating tax without its own tax.calculation:
     * when it is created, from a checkout session or payment link, or when tax is turned on later.
     * additive (the default) adds tax to prices, and inclusive treats every line item and charge
     * price as including its tax. Subscription orders, including renewals, stay additive, and
     * orders that already calculate tax keep their mode. Value enum: "additive", "inclusive".
     */
    "default_price_mode"?: "additive" | "inclusive" | (string & {});
    /**
     * Automatic tax basis for delivery-method charges. Defaults to full_charge.
     * taxable_items_share taxes the charge in proportion to discounted gross taxable merchandise
     * in its fulfillment group, rounded half up. Explicit taxable:false wins. Direct order charges
     * and external tax are unchanged. Saved values take effect only when Flint enables this
     * capability; until then the full charge is used. Open orders use the setting at their next
     * calculation; committed tax keeps its basis. Value enum: "full_charge",
     * "taxable_items_share".
     */
    "delivery_charge_tax_basis"?: "full_charge" | "taxable_items_share" | (string & {});
};
/** Tax settings to change when updating settings. Send null for a category to clear it. */
export type TaxSettingsRequestInput = {
    /**
     * The active tax calculation callback selected for this merchant and environment. Switching
     * IDs is atomic. Omit to preserve the selection; send null to clear it. minLength: 1. Example:
     * "tcb_01KEZF7C00N7SER74Y2E6D1ZGT".
     */
    "calculation_callback_id"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. The calculation an order uses when
     * nothing sets its own: an order created with `POST /v1/orders` without `tax.calculation`, and
     * the orders of checkout sessions, payment links, and subscriptions that set none. A
     * `provided` default applies only to orders you create; the orders Flint creates use automatic
     * tax under it. Send null to clear it, which means automatic. While `default_enabled` is on, a
     * `callback` default needs a selected tax calculation callback, and clearing
     * `calculation_callback_id` is refused; any other default needs an active tax connection.
     * anyOf[1] (Value): {@link TaxDefaultCalculationRequestInput}. The calculation an order uses
     * when its request leaves `tax.calculation` unset. anyOf[2] (Value): null.
     */
    "default_calculation"?: ((TaxDefaultCalculationRequestInput) | (null));
    /**
     * Charge category inherited by delivery methods that omit charge_tax_category. `null` when no
     * default is set; the category then follows the method type: shipping for shipments, delivery
     * for local delivery, and service_fee for pickup. Send null to clear it. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "default_delivery_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null;
    /**
     * Taxability of delivery charges for delivery methods that don't set `taxable`. Defaults to
     * true.
     */
    "default_delivery_taxable"?: boolean;
    /**
     * Whether new checkouts and orders calculate tax by default. This does not decide whether an
     * individual line item or delivery charge is taxable. Turning it on, or changing the default
     * calculation while it is on, needs what the default calculation uses: a selected tax
     * calculation callback for an external `callback` default, and an active tax connection for
     * any other, because the orders Flint creates use automatic tax under an automatic or
     * `provided` default.
     */
    "default_enabled"?: boolean;
    /**
     * Flint line-item tax category. Send null to clear it. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission", null.
     */
    "default_line_item_tax_category"?: "general"
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
     * Price mode an order takes when it starts calculating tax without its own tax.calculation:
     * when it is created, from a checkout session or payment link, or when tax is turned on later.
     * additive (the default) adds tax to prices, and inclusive treats every line item and charge
     * price as including its tax. Subscription orders, including renewals, stay additive, and
     * orders that already calculate tax keep their mode. Value enum: "additive", "inclusive".
     */
    "default_price_mode"?: "additive" | "inclusive";
    /**
     * Automatic tax basis for delivery-method charges. Defaults to full_charge.
     * taxable_items_share taxes the charge in proportion to discounted gross taxable merchandise
     * in its fulfillment group, rounded half up. Explicit taxable:false wins. Direct order charges
     * and external tax are unchanged. Saved values take effect only when Flint enables this
     * capability; until then the full charge is used. Open orders use the setting at their next
     * calculation; committed tax keeps its basis. Value enum: "full_charge",
     * "taxable_items_share".
     */
    "delivery_charge_tax_basis"?: "full_charge" | "taxable_items_share";
};
/**
 * A sandbox clock that customers created on it, and their subscriptions, read as the current time.
 */
export type TestClock = {
    /**
     * When the test clock was created, in real time. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * The time the test clock shows. Customers created on the clock, and their subscriptions,
     * treat it as the current time. After you advance the clock, `frozen_at` is the time you
     * advanced it to, while `status` is `advancing` and after. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
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
    /** Unique identifier for the test clock. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". */
    "test_clock_id": string;
    /**
     * When the test clock last changed, in real time. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
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
        "object": {
            "created_at": string;
            "frozen_at": string;
            "name"?: string;
            "status": "ready" | "advancing" | "failed" | "archived" | (string & {});
            "test_clock_id": string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<TestClock>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "test_clock.advancing";
})
    & {
    "event_type": "test_clock.advancing";
});
export type TestClockArchivedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "frozen_at": string;
            "name"?: string;
            "status": "ready" | "advancing" | "failed" | "archived" | (string & {});
            "test_clock_id": string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<TestClock>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "test_clock.archived";
})
    & {
    "event_type": "test_clock.archived";
});
export type TestClockCreatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "frozen_at": string;
            "name"?: string;
            "status": "ready" | "advancing" | "failed" | "archived" | (string & {});
            "test_clock_id": string;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "test_clock.created";
})
    & {
    "event_type": "test_clock.created";
});
export type TestClockFailedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "frozen_at": string;
            "name"?: string;
            "status": "ready" | "advancing" | "failed" | "archived" | (string & {});
            "test_clock_id": string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<TestClock>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "test_clock.failed";
})
    & {
    "event_type": "test_clock.failed";
});
/** A page of `TestClock` objects. */
export type TestClockListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * TestClock}. A sandbox clock that customers created on it, and their subscriptions, read as
     * the current time.
     */
    "data": Array<TestClock>;
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
export type TestClockReadyEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "frozen_at": string;
            "name"?: string;
            "status": "ready" | "advancing" | "failed" | "archived" | (string & {});
            "test_clock_id": string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<TestClock>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "test_clock.ready";
})
    & {
    "event_type": "test_clock.ready";
});
/** A response containing `TestClock` data. */
export type TestClockResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A sandbox clock that
     * customers created on it, and their subscriptions, read as the current time.
     */
    "data": TestClock;
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
export type TestClocksAdvanceParams = (InputValue<AdvanceTestClockRequestInput>);
export type TestClocksCreateParams = (InputValue<CreateTestClockRequestInput>);
export type TestClocksDeleteParams = {
    /**
     * Optional version most recently read. A stale value fails with `VERSION_CONFLICT` and the
     * current version. Format: int64. minimum: 1. maximum: 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
};
export type TestClocksGetParams = {};
export type TestClocksListParams = {
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "ready",
     * "advancing", "failed", "archived". Value enum: "ready", "advancing", "failed", "archived".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "ready", "advancing", "failed",
     * "archived". anyOf[1][] (Value): string. Value enum: "ready", "advancing", "failed",
     * "archived". anyOf[2] (Value): string. Value enum: "ready", "advancing", "failed",
     * "archived".
     */
    "status"?: InputValue<("ready" | "advancing" | "failed" | "archived")
        | readonly ("ready" | "advancing" | "failed" | "archived")[]>;
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
     * Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace,
     * from 1 to 500. Format: int32. minimum: 1. maximum: 500.
     */
    "max_length"?: number;
    /**
     * Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace.
     * Must be 0 or more, and no more than `max_length`. Format: int32. minimum: 0.
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
     * it. minLength: 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
    /**
     * Text the buyer entered. Flint trims surrounding whitespace, then checks the length in UTF-8
     * bytes against the group's `text.min_length` and `text.max_length`. Line breaks are allowed
     * only when the group's `text.multiline` is true. minLength: 1.
     */
    "value": string;
};
/** Text a buyer entered for a text modifier group on an order line item. */
export type TextModifierRequestInput = TextModifierRequest;
/** Colors and title applied to a payment link's checkout page. */
export type ThemeConfig = {
    /** Accent color of the checkout, such as #1A73E8. */
    "accent_color"?: string;
    /** Primary color of the checkout, such as #1A73E8. */
    "primary_color"?: string;
    /** Title shown in place of the merchant's business name. */
    "title"?: string;
};
/** Colors and title to apply to a checkout session's page. */
export type ThemeConfigRequestInput = {
    /** Accent color of the checkout, such as #1A73E8. minLength: 1. */
    "accent_color"?: string;
    /** Primary color of the checkout, such as #1A73E8. minLength: 1. */
    "primary_color"?: string;
    /** Title shown in place of the merchant's business name. minLength: 1. */
    "title"?: string;
};
/**
 * An individual admission, a top-level child of an order. Merchant reads and webhooks never
 * include the bearer admission code.
 */
export type Ticket = {
    /**
     * The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A
     * bearer secret: only the paid checkout session's own paying credential receives it, on its
     * own order's tickets that aren't voided. A checkout credential from a launch URL a merchant
     * reads or requests after payment never does. Returned only to the checkout credential; never
     * in webhook payloads. minLength: 16.
     */
    "admission_code"?: string;
    /** Last four characters of the current admission code. */
    "admission_code_last4": string;
    /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. */
    "attendee_name": string | null;
    /**
     * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
     * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
     * "manual". anyOf[2] (Value): null.
     */
    "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
    /**
     * When the ticket was admitted. Null when the ticket is not checked in. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "checked_in_at": string | null;
    /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Order summary, present only with expand=order. Requires commerce.orders.read. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded.
     */
    "order"?: ExpandedOrderSummary;
    /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
    "payment_link_id": string;
    /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
    "status": "issued" | "checked_in" | "voided" | (string & {});
    /**
     * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in", "void". []
     * (Value): string. Value enum: "check_in", "undo_check_in", "void".
     */
    "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
    /** Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". */
    "ticket_id": string;
    /**
     * The event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize
     * entry.
     */
    "ticket_number": string;
    /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
    /**
     * When the ticket was permanently voided. Null when the ticket has not been voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "voided_at": string | null;
};
export type TicketCheckedInEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "admission_code"?: string;
            "admission_code_last4": string;
            "attendee_name": string | null;
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at": string | null;
            "created_at": string;
            "order"?: ExpandedOrderSummary;
            "order_id": string;
            "order_line_item_id": string;
            "payment_link_id": string;
            "status": "issued" | "checked_in" | "voided" | (string & {});
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            "ticket_id": string;
            "ticket_number": string;
            "updated_at": string;
            "version": number;
            "voided_at": string | null;
        };
        "previous_attributes"?: Partial<Ticket>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "ticket.checked_in";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "admission_code"?: string;
            "admission_code_last4": string;
            "attendee_name": string | null;
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at": string | null;
            "created_at": string;
            "order"?: ExpandedOrderSummary;
            "order_id": string;
            "order_line_item_id": string;
            "payment_link_id": string;
            "status": "issued" | "checked_in" | "voided" | (string & {});
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            "ticket_id": string;
            "ticket_number": string;
            "updated_at": string;
            "version": number;
            "voided_at": string | null;
        };
        "previous_attributes"?: Partial<Ticket>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "ticket.checked_in";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "ticket.checked_in";
});
/**
 * The `ticket.checked_in` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type TicketCheckedInInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.admission_code (Optional): string. The ticket's 16-character
     * Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid
     * checkout session's own paying credential receives it, on its own order's tickets that aren't
     * voided. A checkout credential from a launch URL a merchant reads or requests after payment
     * never does. Returned only to the checkout credential; never in webhook payloads. minLength:
     * 16. object.admission_code_last4 (Required): string. Last four characters of the current
     * admission code. object.attendee_name (Required): string or null. Optional attendee name.
     * Null when not supplied. minLength: 1. maxLength: 200. object.check_in_method (Required):
     * string or null. How the ticket was admitted. Null when the ticket is not checked in. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[1] (Value): string. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[2] (Value): null.
     * object.checked_in_at (Required): string or null. When the ticket was admitted. Null when the
     * ticket is not checked in. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.created_at (Required): string. When the ticket was issued. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary}.
     * Order summary, present only with expand=order. Requires commerce.orders.read. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order_id (Required): string. The order
     * that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.order_line_item_id (Required): string. The purchased ticket tier. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.payment_link_id (Required): string. The event
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.status (Required): string.
     * The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * object.supported_actions (Required): Array of string. Actions currently offered for this
     * ticket. [] enum: "check_in", "undo_check_in", "void". object.supported_actions[] (Value):
     * string. Value enum: "check_in", "undo_check_in", "void". object.ticket_id (Required):
     * string. Unique ticket identity with the tkt_ prefix. Example:
     * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". object.ticket_number (Required): string. The event prefix
     * and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * object.updated_at (Required): string. When the ticket last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.voided_at (Required): string or null. When
     * the ticket was permanently voided. Null when the ticket has not been voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * admission_code (Optional): string. The ticket's 16-character Crockford base32 admission
         * code, the value its QR code holds. A bearer secret: only the paid checkout session's own
         * paying credential receives it, on its own order's tickets that aren't voided. A checkout
         * credential from a launch URL a merchant reads or requests after payment never does.
         * Returned only to the checkout credential; never in webhook payloads. minLength: 16.
         * admission_code_last4 (Required): string. Last four characters of the current admission
         * code. attendee_name (Required): string or null. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. check_in_method (Required): string or null. How
         * the ticket was admitted. Null when the ticket is not checked in. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[1] (Value): string. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[2] (Value): null. checked_in_at
         * (Required): string or null. When the ticket was admitted. Null when the ticket is not
         * checked in. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at (Required):
         * string. When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * order (Optional): {@link ExpandedOrderSummary}. Order summary, present only with
         * expand=order. Requires commerce.orders.read. An order's summary fields, including
         * status, payment and refund status, and pricing and settlement amounts, returned when the
         * order is expanded. order_id (Required): string. The order that purchased this ticket.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string. The
         * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". payment_link_id
         * (Required): string. The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * status (Required): string. The admission lifecycle. Value enum: "issued", "checked_in",
         * "voided". supported_actions (Required): Array of string. Actions currently offered for
         * this ticket. [] enum: "check_in", "undo_check_in", "void". supported_actions[] (Value):
         * string. Value enum: "check_in", "undo_check_in", "void". ticket_id (Required): string.
         * Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
         * ticket_number (Required): string. The event prefix and sequence, such as GAL001. Numbers
         * are never reused and do not authorize entry. updated_at (Required): string. When the
         * ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1. voided_at (Required): string or null. When the ticket was permanently voided. Null
         * when the ticket has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16.
             */
            "admission_code"?: string;
            /** Last four characters of the current admission code. */
            "admission_code_last4": string;
            /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. */
            "attendee_name": string | null;
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "checked_in_at": string | null;
            /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
            /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
            "order_line_item_id": string;
            /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
            "payment_link_id": string;
            /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
            "status": "issued" | "checked_in" | "voided" | (string & {});
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". [] (Value): string. Value enum: "check_in", "undo_check_in", "void".
             */
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            /**
             * Unique ticket identity with the tkt_ prefix. Example:
             * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
             */
            "ticket_id": string;
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry.
             */
            "ticket_number": string;
            /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at": string | null;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Ticket>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "ticket.checked_in". */
    "event_type"?: "ticket.checked_in";
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
 * The `ticket.checked_in` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type TicketCheckedInMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.admission_code (Optional): string. The ticket's 16-character
     * Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid
     * checkout session's own paying credential receives it, on its own order's tickets that aren't
     * voided. A checkout credential from a launch URL a merchant reads or requests after payment
     * never does. Returned only to the checkout credential; never in webhook payloads. minLength:
     * 16. object.admission_code_last4 (Required): string. Last four characters of the current
     * admission code. object.attendee_name (Required): string or null. Optional attendee name.
     * Null when not supplied. minLength: 1. maxLength: 200. object.check_in_method (Required):
     * string or null. How the ticket was admitted. Null when the ticket is not checked in. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[1] (Value): string. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[2] (Value): null.
     * object.checked_in_at (Required): string or null. When the ticket was admitted. Null when the
     * ticket is not checked in. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.created_at (Required): string. When the ticket was issued. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary}.
     * Order summary, present only with expand=order. Requires commerce.orders.read. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order_id (Required): string. The order
     * that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.order_line_item_id (Required): string. The purchased ticket tier. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.payment_link_id (Required): string. The event
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.status (Required): string.
     * The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * object.supported_actions (Required): Array of string. Actions currently offered for this
     * ticket. [] enum: "check_in", "undo_check_in", "void". object.supported_actions[] (Value):
     * string. Value enum: "check_in", "undo_check_in", "void". object.ticket_id (Required):
     * string. Unique ticket identity with the tkt_ prefix. Example:
     * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". object.ticket_number (Required): string. The event prefix
     * and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * object.updated_at (Required): string. When the ticket last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.voided_at (Required): string or null. When
     * the ticket was permanently voided. Null when the ticket has not been voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * admission_code (Optional): string. The ticket's 16-character Crockford base32 admission
         * code, the value its QR code holds. A bearer secret: only the paid checkout session's own
         * paying credential receives it, on its own order's tickets that aren't voided. A checkout
         * credential from a launch URL a merchant reads or requests after payment never does.
         * Returned only to the checkout credential; never in webhook payloads. minLength: 16.
         * admission_code_last4 (Required): string. Last four characters of the current admission
         * code. attendee_name (Required): string or null. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. check_in_method (Required): string or null. How
         * the ticket was admitted. Null when the ticket is not checked in. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[1] (Value): string. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[2] (Value): null. checked_in_at
         * (Required): string or null. When the ticket was admitted. Null when the ticket is not
         * checked in. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at (Required):
         * string. When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * order (Optional): {@link ExpandedOrderSummary}. Order summary, present only with
         * expand=order. Requires commerce.orders.read. An order's summary fields, including
         * status, payment and refund status, and pricing and settlement amounts, returned when the
         * order is expanded. order_id (Required): string. The order that purchased this ticket.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string. The
         * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". payment_link_id
         * (Required): string. The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * status (Required): string. The admission lifecycle. Value enum: "issued", "checked_in",
         * "voided". supported_actions (Required): Array of string. Actions currently offered for
         * this ticket. [] enum: "check_in", "undo_check_in", "void". supported_actions[] (Value):
         * string. Value enum: "check_in", "undo_check_in", "void". ticket_id (Required): string.
         * Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
         * ticket_number (Required): string. The event prefix and sequence, such as GAL001. Numbers
         * are never reused and do not authorize entry. updated_at (Required): string. When the
         * ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1. voided_at (Required): string or null. When the ticket was permanently voided. Null
         * when the ticket has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16.
             */
            "admission_code"?: string;
            /** Last four characters of the current admission code. */
            "admission_code_last4": string;
            /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. */
            "attendee_name": string | null;
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "checked_in_at": string | null;
            /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
            /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
            "order_line_item_id": string;
            /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
            "payment_link_id": string;
            /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
            "status": "issued" | "checked_in" | "voided" | (string & {});
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". [] (Value): string. Value enum: "check_in", "undo_check_in", "void".
             */
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            /**
             * Unique ticket identity with the tkt_ prefix. Example:
             * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
             */
            "ticket_id": string;
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry.
             */
            "ticket_number": string;
            /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at": string | null;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Ticket>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "ticket.checked_in". */
    "event_type"?: "ticket.checked_in";
});
export type TicketCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "admission_code"?: string;
            "admission_code_last4": string;
            "attendee_name": string | null;
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at": string | null;
            "created_at": string;
            "order"?: ExpandedOrderSummary;
            "order_id": string;
            "order_line_item_id": string;
            "payment_link_id": string;
            "status": "issued" | "checked_in" | "voided" | (string & {});
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            "ticket_id": string;
            "ticket_number": string;
            "updated_at": string;
            "version": number;
            "voided_at": string | null;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "ticket.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "admission_code"?: string;
            "admission_code_last4": string;
            "attendee_name": string | null;
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at": string | null;
            "created_at": string;
            "order"?: ExpandedOrderSummary;
            "order_id": string;
            "order_line_item_id": string;
            "payment_link_id": string;
            "status": "issued" | "checked_in" | "voided" | (string & {});
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            "ticket_id": string;
            "ticket_number": string;
            "updated_at": string;
            "version": number;
            "voided_at": string | null;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "ticket.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "ticket.created";
});
/**
 * The `ticket.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type TicketCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.admission_code (Optional): string. The ticket's 16-character
     * Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid
     * checkout session's own paying credential receives it, on its own order's tickets that aren't
     * voided. A checkout credential from a launch URL a merchant reads or requests after payment
     * never does. Returned only to the checkout credential; never in webhook payloads. minLength:
     * 16. object.admission_code_last4 (Required): string. Last four characters of the current
     * admission code. object.attendee_name (Required): string or null. Optional attendee name.
     * Null when not supplied. minLength: 1. maxLength: 200. object.check_in_method (Required):
     * string or null. How the ticket was admitted. Null when the ticket is not checked in. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[1] (Value): string. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[2] (Value): null.
     * object.checked_in_at (Required): string or null. When the ticket was admitted. Null when the
     * ticket is not checked in. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.created_at (Required): string. When the ticket was issued. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary}.
     * Order summary, present only with expand=order. Requires commerce.orders.read. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order_id (Required): string. The order
     * that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.order_line_item_id (Required): string. The purchased ticket tier. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.payment_link_id (Required): string. The event
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.status (Required): string.
     * The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * object.supported_actions (Required): Array of string. Actions currently offered for this
     * ticket. [] enum: "check_in", "undo_check_in", "void". object.supported_actions[] (Value):
     * string. Value enum: "check_in", "undo_check_in", "void". object.ticket_id (Required):
     * string. Unique ticket identity with the tkt_ prefix. Example:
     * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". object.ticket_number (Required): string. The event prefix
     * and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * object.updated_at (Required): string. When the ticket last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.voided_at (Required): string or null. When
     * the ticket was permanently voided. Null when the ticket has not been voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * admission_code (Optional): string. The ticket's 16-character Crockford base32 admission
         * code, the value its QR code holds. A bearer secret: only the paid checkout session's own
         * paying credential receives it, on its own order's tickets that aren't voided. A checkout
         * credential from a launch URL a merchant reads or requests after payment never does.
         * Returned only to the checkout credential; never in webhook payloads. minLength: 16.
         * admission_code_last4 (Required): string. Last four characters of the current admission
         * code. attendee_name (Required): string or null. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. check_in_method (Required): string or null. How
         * the ticket was admitted. Null when the ticket is not checked in. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[1] (Value): string. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[2] (Value): null. checked_in_at
         * (Required): string or null. When the ticket was admitted. Null when the ticket is not
         * checked in. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at (Required):
         * string. When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * order (Optional): {@link ExpandedOrderSummary}. Order summary, present only with
         * expand=order. Requires commerce.orders.read. An order's summary fields, including
         * status, payment and refund status, and pricing and settlement amounts, returned when the
         * order is expanded. order_id (Required): string. The order that purchased this ticket.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string. The
         * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". payment_link_id
         * (Required): string. The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * status (Required): string. The admission lifecycle. Value enum: "issued", "checked_in",
         * "voided". supported_actions (Required): Array of string. Actions currently offered for
         * this ticket. [] enum: "check_in", "undo_check_in", "void". supported_actions[] (Value):
         * string. Value enum: "check_in", "undo_check_in", "void". ticket_id (Required): string.
         * Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
         * ticket_number (Required): string. The event prefix and sequence, such as GAL001. Numbers
         * are never reused and do not authorize entry. updated_at (Required): string. When the
         * ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1. voided_at (Required): string or null. When the ticket was permanently voided. Null
         * when the ticket has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16.
             */
            "admission_code"?: string;
            /** Last four characters of the current admission code. */
            "admission_code_last4": string;
            /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. */
            "attendee_name": string | null;
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "checked_in_at": string | null;
            /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
            /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
            "order_line_item_id": string;
            /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
            "payment_link_id": string;
            /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
            "status": "issued" | "checked_in" | "voided" | (string & {});
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". [] (Value): string. Value enum: "check_in", "undo_check_in", "void".
             */
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            /**
             * Unique ticket identity with the tkt_ prefix. Example:
             * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
             */
            "ticket_id": string;
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry.
             */
            "ticket_number": string;
            /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at": string | null;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "ticket.created". */
    "event_type"?: "ticket.created";
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
 * The `ticket.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type TicketCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.admission_code (Optional): string. The ticket's 16-character
     * Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid
     * checkout session's own paying credential receives it, on its own order's tickets that aren't
     * voided. A checkout credential from a launch URL a merchant reads or requests after payment
     * never does. Returned only to the checkout credential; never in webhook payloads. minLength:
     * 16. object.admission_code_last4 (Required): string. Last four characters of the current
     * admission code. object.attendee_name (Required): string or null. Optional attendee name.
     * Null when not supplied. minLength: 1. maxLength: 200. object.check_in_method (Required):
     * string or null. How the ticket was admitted. Null when the ticket is not checked in. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[1] (Value): string. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[2] (Value): null.
     * object.checked_in_at (Required): string or null. When the ticket was admitted. Null when the
     * ticket is not checked in. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.created_at (Required): string. When the ticket was issued. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary}.
     * Order summary, present only with expand=order. Requires commerce.orders.read. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order_id (Required): string. The order
     * that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.order_line_item_id (Required): string. The purchased ticket tier. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.payment_link_id (Required): string. The event
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.status (Required): string.
     * The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * object.supported_actions (Required): Array of string. Actions currently offered for this
     * ticket. [] enum: "check_in", "undo_check_in", "void". object.supported_actions[] (Value):
     * string. Value enum: "check_in", "undo_check_in", "void". object.ticket_id (Required):
     * string. Unique ticket identity with the tkt_ prefix. Example:
     * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". object.ticket_number (Required): string. The event prefix
     * and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * object.updated_at (Required): string. When the ticket last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.voided_at (Required): string or null. When
     * the ticket was permanently voided. Null when the ticket has not been voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * admission_code (Optional): string. The ticket's 16-character Crockford base32 admission
         * code, the value its QR code holds. A bearer secret: only the paid checkout session's own
         * paying credential receives it, on its own order's tickets that aren't voided. A checkout
         * credential from a launch URL a merchant reads or requests after payment never does.
         * Returned only to the checkout credential; never in webhook payloads. minLength: 16.
         * admission_code_last4 (Required): string. Last four characters of the current admission
         * code. attendee_name (Required): string or null. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. check_in_method (Required): string or null. How
         * the ticket was admitted. Null when the ticket is not checked in. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[1] (Value): string. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[2] (Value): null. checked_in_at
         * (Required): string or null. When the ticket was admitted. Null when the ticket is not
         * checked in. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at (Required):
         * string. When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * order (Optional): {@link ExpandedOrderSummary}. Order summary, present only with
         * expand=order. Requires commerce.orders.read. An order's summary fields, including
         * status, payment and refund status, and pricing and settlement amounts, returned when the
         * order is expanded. order_id (Required): string. The order that purchased this ticket.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string. The
         * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". payment_link_id
         * (Required): string. The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * status (Required): string. The admission lifecycle. Value enum: "issued", "checked_in",
         * "voided". supported_actions (Required): Array of string. Actions currently offered for
         * this ticket. [] enum: "check_in", "undo_check_in", "void". supported_actions[] (Value):
         * string. Value enum: "check_in", "undo_check_in", "void". ticket_id (Required): string.
         * Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
         * ticket_number (Required): string. The event prefix and sequence, such as GAL001. Numbers
         * are never reused and do not authorize entry. updated_at (Required): string. When the
         * ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1. voided_at (Required): string or null. When the ticket was permanently voided. Null
         * when the ticket has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16.
             */
            "admission_code"?: string;
            /** Last four characters of the current admission code. */
            "admission_code_last4": string;
            /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. */
            "attendee_name": string | null;
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "checked_in_at": string | null;
            /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
            /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
            "order_line_item_id": string;
            /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
            "payment_link_id": string;
            /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
            "status": "issued" | "checked_in" | "voided" | (string & {});
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". [] (Value): string. Value enum: "check_in", "undo_check_in", "void".
             */
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            /**
             * Unique ticket identity with the tkt_ prefix. Example:
             * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
             */
            "ticket_id": string;
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry.
             */
            "ticket_number": string;
            /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at": string | null;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "ticket.created". */
    "event_type"?: "ticket.created";
});
/** A page of `Ticket` objects. */
export type TicketListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Ticket}. An individual admission, a top-level child of an order. Merchant reads and webhooks
     * never include the bearer admission code.
     */
    "data": Array<Ticket>;
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
/** A response containing `Ticket` data. */
export type TicketResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An individual admission,
     * a top-level child of an order. Merchant reads and webhooks never include the bearer
     * admission code.
     */
    "data": Ticket;
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
export type TicketUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "admission_code"?: string;
            "admission_code_last4": string;
            "attendee_name": string | null;
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at": string | null;
            "created_at": string;
            "order"?: ExpandedOrderSummary;
            "order_id": string;
            "order_line_item_id": string;
            "payment_link_id": string;
            "status": "issued" | "checked_in" | "voided" | (string & {});
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            "ticket_id": string;
            "ticket_number": string;
            "updated_at": string;
            "version": number;
            "voided_at": string | null;
        };
        "previous_attributes"?: Partial<Ticket>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "ticket.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "admission_code"?: string;
            "admission_code_last4": string;
            "attendee_name": string | null;
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at": string | null;
            "created_at": string;
            "order"?: ExpandedOrderSummary;
            "order_id": string;
            "order_line_item_id": string;
            "payment_link_id": string;
            "status": "issued" | "checked_in" | "voided" | (string & {});
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            "ticket_id": string;
            "ticket_number": string;
            "updated_at": string;
            "version": number;
            "voided_at": string | null;
        };
        "previous_attributes"?: Partial<Ticket>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "ticket.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "ticket.updated";
});
/**
 * The `ticket.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type TicketUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.admission_code (Optional): string. The ticket's 16-character
     * Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid
     * checkout session's own paying credential receives it, on its own order's tickets that aren't
     * voided. A checkout credential from a launch URL a merchant reads or requests after payment
     * never does. Returned only to the checkout credential; never in webhook payloads. minLength:
     * 16. object.admission_code_last4 (Required): string. Last four characters of the current
     * admission code. object.attendee_name (Required): string or null. Optional attendee name.
     * Null when not supplied. minLength: 1. maxLength: 200. object.check_in_method (Required):
     * string or null. How the ticket was admitted. Null when the ticket is not checked in. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[1] (Value): string. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[2] (Value): null.
     * object.checked_in_at (Required): string or null. When the ticket was admitted. Null when the
     * ticket is not checked in. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.created_at (Required): string. When the ticket was issued. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary}.
     * Order summary, present only with expand=order. Requires commerce.orders.read. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order_id (Required): string. The order
     * that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.order_line_item_id (Required): string. The purchased ticket tier. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.payment_link_id (Required): string. The event
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.status (Required): string.
     * The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * object.supported_actions (Required): Array of string. Actions currently offered for this
     * ticket. [] enum: "check_in", "undo_check_in", "void". object.supported_actions[] (Value):
     * string. Value enum: "check_in", "undo_check_in", "void". object.ticket_id (Required):
     * string. Unique ticket identity with the tkt_ prefix. Example:
     * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". object.ticket_number (Required): string. The event prefix
     * and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * object.updated_at (Required): string. When the ticket last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.voided_at (Required): string or null. When
     * the ticket was permanently voided. Null when the ticket has not been voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * admission_code (Optional): string. The ticket's 16-character Crockford base32 admission
         * code, the value its QR code holds. A bearer secret: only the paid checkout session's own
         * paying credential receives it, on its own order's tickets that aren't voided. A checkout
         * credential from a launch URL a merchant reads or requests after payment never does.
         * Returned only to the checkout credential; never in webhook payloads. minLength: 16.
         * admission_code_last4 (Required): string. Last four characters of the current admission
         * code. attendee_name (Required): string or null. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. check_in_method (Required): string or null. How
         * the ticket was admitted. Null when the ticket is not checked in. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[1] (Value): string. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[2] (Value): null. checked_in_at
         * (Required): string or null. When the ticket was admitted. Null when the ticket is not
         * checked in. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at (Required):
         * string. When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * order (Optional): {@link ExpandedOrderSummary}. Order summary, present only with
         * expand=order. Requires commerce.orders.read. An order's summary fields, including
         * status, payment and refund status, and pricing and settlement amounts, returned when the
         * order is expanded. order_id (Required): string. The order that purchased this ticket.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string. The
         * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". payment_link_id
         * (Required): string. The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * status (Required): string. The admission lifecycle. Value enum: "issued", "checked_in",
         * "voided". supported_actions (Required): Array of string. Actions currently offered for
         * this ticket. [] enum: "check_in", "undo_check_in", "void". supported_actions[] (Value):
         * string. Value enum: "check_in", "undo_check_in", "void". ticket_id (Required): string.
         * Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
         * ticket_number (Required): string. The event prefix and sequence, such as GAL001. Numbers
         * are never reused and do not authorize entry. updated_at (Required): string. When the
         * ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1. voided_at (Required): string or null. When the ticket was permanently voided. Null
         * when the ticket has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16.
             */
            "admission_code"?: string;
            /** Last four characters of the current admission code. */
            "admission_code_last4": string;
            /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. */
            "attendee_name": string | null;
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "checked_in_at": string | null;
            /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
            /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
            "order_line_item_id": string;
            /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
            "payment_link_id": string;
            /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
            "status": "issued" | "checked_in" | "voided" | (string & {});
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". [] (Value): string. Value enum: "check_in", "undo_check_in", "void".
             */
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            /**
             * Unique ticket identity with the tkt_ prefix. Example:
             * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
             */
            "ticket_id": string;
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry.
             */
            "ticket_number": string;
            /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at": string | null;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Ticket>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "ticket.updated". */
    "event_type"?: "ticket.updated";
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
 * The `ticket.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type TicketUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.admission_code (Optional): string. The ticket's 16-character
     * Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid
     * checkout session's own paying credential receives it, on its own order's tickets that aren't
     * voided. A checkout credential from a launch URL a merchant reads or requests after payment
     * never does. Returned only to the checkout credential; never in webhook payloads. minLength:
     * 16. object.admission_code_last4 (Required): string. Last four characters of the current
     * admission code. object.attendee_name (Required): string or null. Optional attendee name.
     * Null when not supplied. minLength: 1. maxLength: 200. object.check_in_method (Required):
     * string or null. How the ticket was admitted. Null when the ticket is not checked in. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[1] (Value): string. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[2] (Value): null.
     * object.checked_in_at (Required): string or null. When the ticket was admitted. Null when the
     * ticket is not checked in. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.created_at (Required): string. When the ticket was issued. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary}.
     * Order summary, present only with expand=order. Requires commerce.orders.read. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order_id (Required): string. The order
     * that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.order_line_item_id (Required): string. The purchased ticket tier. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.payment_link_id (Required): string. The event
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.status (Required): string.
     * The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * object.supported_actions (Required): Array of string. Actions currently offered for this
     * ticket. [] enum: "check_in", "undo_check_in", "void". object.supported_actions[] (Value):
     * string. Value enum: "check_in", "undo_check_in", "void". object.ticket_id (Required):
     * string. Unique ticket identity with the tkt_ prefix. Example:
     * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". object.ticket_number (Required): string. The event prefix
     * and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * object.updated_at (Required): string. When the ticket last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.voided_at (Required): string or null. When
     * the ticket was permanently voided. Null when the ticket has not been voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * admission_code (Optional): string. The ticket's 16-character Crockford base32 admission
         * code, the value its QR code holds. A bearer secret: only the paid checkout session's own
         * paying credential receives it, on its own order's tickets that aren't voided. A checkout
         * credential from a launch URL a merchant reads or requests after payment never does.
         * Returned only to the checkout credential; never in webhook payloads. minLength: 16.
         * admission_code_last4 (Required): string. Last four characters of the current admission
         * code. attendee_name (Required): string or null. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. check_in_method (Required): string or null. How
         * the ticket was admitted. Null when the ticket is not checked in. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[1] (Value): string. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[2] (Value): null. checked_in_at
         * (Required): string or null. When the ticket was admitted. Null when the ticket is not
         * checked in. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at (Required):
         * string. When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * order (Optional): {@link ExpandedOrderSummary}. Order summary, present only with
         * expand=order. Requires commerce.orders.read. An order's summary fields, including
         * status, payment and refund status, and pricing and settlement amounts, returned when the
         * order is expanded. order_id (Required): string. The order that purchased this ticket.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string. The
         * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". payment_link_id
         * (Required): string. The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * status (Required): string. The admission lifecycle. Value enum: "issued", "checked_in",
         * "voided". supported_actions (Required): Array of string. Actions currently offered for
         * this ticket. [] enum: "check_in", "undo_check_in", "void". supported_actions[] (Value):
         * string. Value enum: "check_in", "undo_check_in", "void". ticket_id (Required): string.
         * Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
         * ticket_number (Required): string. The event prefix and sequence, such as GAL001. Numbers
         * are never reused and do not authorize entry. updated_at (Required): string. When the
         * ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1. voided_at (Required): string or null. When the ticket was permanently voided. Null
         * when the ticket has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16.
             */
            "admission_code"?: string;
            /** Last four characters of the current admission code. */
            "admission_code_last4": string;
            /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. */
            "attendee_name": string | null;
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "checked_in_at": string | null;
            /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
            /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
            "order_line_item_id": string;
            /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
            "payment_link_id": string;
            /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
            "status": "issued" | "checked_in" | "voided" | (string & {});
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". [] (Value): string. Value enum: "check_in", "undo_check_in", "void".
             */
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            /**
             * Unique ticket identity with the tkt_ prefix. Example:
             * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
             */
            "ticket_id": string;
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry.
             */
            "ticket_number": string;
            /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at": string | null;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Ticket>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "ticket.updated". */
    "event_type"?: "ticket.updated";
});
/** An optional version fence for the ticket. */
export type TicketVersionRequestInput = {
    /**
     * The ticket version last read. The change applies only while the ticket is at this version; a
     * stale value returns 409 VERSION_CONFLICT, even when the ticket's status would also refuse
     * the change. Door scanners usually omit it. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
export type TicketVoidedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "admission_code"?: string;
            "admission_code_last4": string;
            "attendee_name": string | null;
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at": string | null;
            "created_at": string;
            "order"?: ExpandedOrderSummary;
            "order_id": string;
            "order_line_item_id": string;
            "payment_link_id": string;
            "status": "issued" | "checked_in" | "voided" | (string & {});
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            "ticket_id": string;
            "ticket_number": string;
            "updated_at": string;
            "version": number;
            "voided_at": string | null;
        };
        "previous_attributes"?: Partial<Ticket>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "ticket.voided";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "admission_code"?: string;
            "admission_code_last4": string;
            "attendee_name": string | null;
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            "checked_in_at": string | null;
            "created_at": string;
            "order"?: ExpandedOrderSummary;
            "order_id": string;
            "order_line_item_id": string;
            "payment_link_id": string;
            "status": "issued" | "checked_in" | "voided" | (string & {});
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            "ticket_id": string;
            "ticket_number": string;
            "updated_at": string;
            "version": number;
            "voided_at": string | null;
        };
        "previous_attributes"?: Partial<Ticket>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "ticket.voided";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "ticket.voided";
});
/**
 * The `ticket.voided` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type TicketVoidedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.admission_code (Optional): string. The ticket's 16-character
     * Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid
     * checkout session's own paying credential receives it, on its own order's tickets that aren't
     * voided. A checkout credential from a launch URL a merchant reads or requests after payment
     * never does. Returned only to the checkout credential; never in webhook payloads. minLength:
     * 16. object.admission_code_last4 (Required): string. Last four characters of the current
     * admission code. object.attendee_name (Required): string or null. Optional attendee name.
     * Null when not supplied. minLength: 1. maxLength: 200. object.check_in_method (Required):
     * string or null. How the ticket was admitted. Null when the ticket is not checked in. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[1] (Value): string. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[2] (Value): null.
     * object.checked_in_at (Required): string or null. When the ticket was admitted. Null when the
     * ticket is not checked in. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.created_at (Required): string. When the ticket was issued. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary}.
     * Order summary, present only with expand=order. Requires commerce.orders.read. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order_id (Required): string. The order
     * that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.order_line_item_id (Required): string. The purchased ticket tier. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.payment_link_id (Required): string. The event
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.status (Required): string.
     * The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * object.supported_actions (Required): Array of string. Actions currently offered for this
     * ticket. [] enum: "check_in", "undo_check_in", "void". object.supported_actions[] (Value):
     * string. Value enum: "check_in", "undo_check_in", "void". object.ticket_id (Required):
     * string. Unique ticket identity with the tkt_ prefix. Example:
     * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". object.ticket_number (Required): string. The event prefix
     * and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * object.updated_at (Required): string. When the ticket last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.voided_at (Required): string or null. When
     * the ticket was permanently voided. Null when the ticket has not been voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * admission_code (Optional): string. The ticket's 16-character Crockford base32 admission
         * code, the value its QR code holds. A bearer secret: only the paid checkout session's own
         * paying credential receives it, on its own order's tickets that aren't voided. A checkout
         * credential from a launch URL a merchant reads or requests after payment never does.
         * Returned only to the checkout credential; never in webhook payloads. minLength: 16.
         * admission_code_last4 (Required): string. Last four characters of the current admission
         * code. attendee_name (Required): string or null. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. check_in_method (Required): string or null. How
         * the ticket was admitted. Null when the ticket is not checked in. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[1] (Value): string. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[2] (Value): null. checked_in_at
         * (Required): string or null. When the ticket was admitted. Null when the ticket is not
         * checked in. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at (Required):
         * string. When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * order (Optional): {@link ExpandedOrderSummary}. Order summary, present only with
         * expand=order. Requires commerce.orders.read. An order's summary fields, including
         * status, payment and refund status, and pricing and settlement amounts, returned when the
         * order is expanded. order_id (Required): string. The order that purchased this ticket.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string. The
         * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". payment_link_id
         * (Required): string. The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * status (Required): string. The admission lifecycle. Value enum: "issued", "checked_in",
         * "voided". supported_actions (Required): Array of string. Actions currently offered for
         * this ticket. [] enum: "check_in", "undo_check_in", "void". supported_actions[] (Value):
         * string. Value enum: "check_in", "undo_check_in", "void". ticket_id (Required): string.
         * Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
         * ticket_number (Required): string. The event prefix and sequence, such as GAL001. Numbers
         * are never reused and do not authorize entry. updated_at (Required): string. When the
         * ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1. voided_at (Required): string or null. When the ticket was permanently voided. Null
         * when the ticket has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16.
             */
            "admission_code"?: string;
            /** Last four characters of the current admission code. */
            "admission_code_last4": string;
            /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. */
            "attendee_name": string | null;
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "checked_in_at": string | null;
            /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
            /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
            "order_line_item_id": string;
            /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
            "payment_link_id": string;
            /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
            "status": "issued" | "checked_in" | "voided" | (string & {});
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". [] (Value): string. Value enum: "check_in", "undo_check_in", "void".
             */
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            /**
             * Unique ticket identity with the tkt_ prefix. Example:
             * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
             */
            "ticket_id": string;
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry.
             */
            "ticket_number": string;
            /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at": string | null;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Ticket>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "ticket.voided". */
    "event_type"?: "ticket.voided";
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
 * The `ticket.voided` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type TicketVoidedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.admission_code (Optional): string. The ticket's 16-character
     * Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid
     * checkout session's own paying credential receives it, on its own order's tickets that aren't
     * voided. A checkout credential from a launch URL a merchant reads or requests after payment
     * never does. Returned only to the checkout credential; never in webhook payloads. minLength:
     * 16. object.admission_code_last4 (Required): string. Last four characters of the current
     * admission code. object.attendee_name (Required): string or null. Optional attendee name.
     * Null when not supplied. minLength: 1. maxLength: 200. object.check_in_method (Required):
     * string or null. How the ticket was admitted. Null when the ticket is not checked in. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[1] (Value): string. Value
     * enum: "admission_code", "manual". object.check_in_method.anyOf[2] (Value): null.
     * object.checked_in_at (Required): string or null. When the ticket was admitted. Null when the
     * ticket is not checked in. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.created_at (Required): string. When the ticket was issued. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary}.
     * Order summary, present only with expand=order. Requires commerce.orders.read. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order_id (Required): string. The order
     * that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.order_line_item_id (Required): string. The purchased ticket tier. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". object.payment_link_id (Required): string. The event
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.status (Required): string.
     * The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * object.supported_actions (Required): Array of string. Actions currently offered for this
     * ticket. [] enum: "check_in", "undo_check_in", "void". object.supported_actions[] (Value):
     * string. Value enum: "check_in", "undo_check_in", "void". object.ticket_id (Required):
     * string. Unique ticket identity with the tkt_ prefix. Example:
     * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". object.ticket_number (Required): string. The event prefix
     * and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * object.updated_at (Required): string. When the ticket last changed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. object.voided_at (Required): string or null. When
     * the ticket was permanently voided. Null when the ticket has not been voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * admission_code (Optional): string. The ticket's 16-character Crockford base32 admission
         * code, the value its QR code holds. A bearer secret: only the paid checkout session's own
         * paying credential receives it, on its own order's tickets that aren't voided. A checkout
         * credential from a launch URL a merchant reads or requests after payment never does.
         * Returned only to the checkout credential; never in webhook payloads. minLength: 16.
         * admission_code_last4 (Required): string. Last four characters of the current admission
         * code. attendee_name (Required): string or null. Optional attendee name. Null when not
         * supplied. minLength: 1. maxLength: 200. check_in_method (Required): string or null. How
         * the ticket was admitted. Null when the ticket is not checked in. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[1] (Value): string. Value enum:
         * "admission_code", "manual". check_in_method.anyOf[2] (Value): null. checked_in_at
         * (Required): string or null. When the ticket was admitted. Null when the ticket is not
         * checked in. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at (Required):
         * string. When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * order (Optional): {@link ExpandedOrderSummary}. Order summary, present only with
         * expand=order. Requires commerce.orders.read. An order's summary fields, including
         * status, payment and refund status, and pricing and settlement amounts, returned when the
         * order is expanded. order_id (Required): string. The order that purchased this ticket.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_line_item_id (Required): string. The
         * purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". payment_link_id
         * (Required): string. The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * status (Required): string. The admission lifecycle. Value enum: "issued", "checked_in",
         * "voided". supported_actions (Required): Array of string. Actions currently offered for
         * this ticket. [] enum: "check_in", "undo_check_in", "void". supported_actions[] (Value):
         * string. Value enum: "check_in", "undo_check_in", "void". ticket_id (Required): string.
         * Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
         * ticket_number (Required): string. The event prefix and sequence, such as GAL001. Numbers
         * are never reused and do not authorize entry. updated_at (Required): string. When the
         * ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1. voided_at (Required): string or null. When the ticket was permanently voided. Null
         * when the ticket has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /**
             * The ticket's 16-character Crockford base32 admission code, the value its QR code
             * holds. A bearer secret: only the paid checkout session's own paying credential
             * receives it, on its own order's tickets that aren't voided. A checkout credential
             * from a launch URL a merchant reads or requests after payment never does. Returned
             * only to the checkout credential; never in webhook payloads. minLength: 16.
             */
            "admission_code"?: string;
            /** Last four characters of the current admission code. */
            "admission_code_last4": string;
            /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. */
            "attendee_name": string | null;
            /**
             * How the ticket was admitted. Null when the ticket is not checked in. Value enum:
             * "admission_code", "manual". anyOf[1] (Value): string. Value enum: "admission_code",
             * "manual". anyOf[2] (Value): null.
             */
            "check_in_method": (("admission_code" | "manual" | (string & {})) | (null));
            /**
             * When the ticket was admitted. Null when the ticket is not checked in. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "checked_in_at": string | null;
            /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Order summary, present only with expand=order. Requires commerce.orders.read. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded.
             */
            "order"?: ExpandedOrderSummary;
            /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
            "order_line_item_id": string;
            /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
            "payment_link_id": string;
            /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
            "status": "issued" | "checked_in" | "voided" | (string & {});
            /**
             * Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in",
             * "void". [] (Value): string. Value enum: "check_in", "undo_check_in", "void".
             */
            "supported_actions": Array<"check_in" | "undo_check_in" | "void" | (string & {})>;
            /**
             * Unique ticket identity with the tkt_ prefix. Example:
             * "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
             */
            "ticket_id": string;
            /**
             * The event prefix and sequence, such as GAL001. Numbers are never reused and do not
             * authorize entry.
             */
            "ticket_number": string;
            /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * When the ticket was permanently voided. Null when the ticket has not been voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "voided_at": string | null;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Ticket>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "ticket.voided". */
    "event_type"?: "ticket.voided";
});
/**
 * A ticket with the admission code a rotation just minted. An individual admission, a top-level
 * child of an order. Merchant reads and webhooks never include the bearer admission code.
 */
export type TicketWithAdmissionCode = (Exclude<Ticket & object, readonly unknown[]>)
    & ({
    /**
     * The new bearer admission code, formatted as XXXX-XXXX-XXXX-XXXX. Returned only by the
     * rotation that minted it, and by a retry of that rotation within 24 hours while the ticket is
     * unchanged; omitted otherwise. Encode it in a QR code without hyphens, and treat it like a
     * password. minLength: 19. maxLength: 19.
     */
    "admission_code"?: string;
});
/** A response containing `TicketWithAdmissionCode` data. */
export type TicketWithAdmissionCodeResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A ticket with the
     * admission code a rotation just minted. An individual admission, a top-level child of an
     * order. Merchant reads and webhooks never include the bearer admission code.
     */
    "data": TicketWithAdmissionCode;
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
 * Event details for a ticketed order: name, location, start time, time zone, and the tickets
 * issued.
 */
export type TicketedEvent = {
    /** Where the event takes place. */
    "location"?: string;
    /** Event name when the order was placed. */
    "name": string;
    /**
     * When the event starts. RFC 3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "starts_at"?: string;
    /**
     * Ticket numbers issued for this order. Empty while ticket_status is pending. [] (Value):
     * string.
     */
    "ticket_numbers": Array<string>;
    /** Whether the order's tickets are issued. Value enum: "pending", "issued", "voided". */
    "ticket_status": "pending" | "issued" | "voided" | (string & {});
    /** IANA time zone Flint shows the event in. */
    "timezone"?: string;
};
export type TicketsCheckInParams = (InputValue<CheckInTicketRequestInput>);
export type TicketsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: order. Include the order
     * summary. Limits: at most 10 unique expand paths per request. [] enum: "order". Value enum:
     * "order". anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][] (Value): string.
     * Value enum: "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
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
export type TicketsListParams = {
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
     * Only tickets for this event payment link. pattern: ^pl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id"?: InputValue<string>;
    /**
     * Only tickets belonging to this order. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Filter by ticket status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "issued", "checked_in", "voided". Value enum: "issued", "checked_in",
     * "voided". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "issued", "checked_in",
     * "voided". anyOf[1][] (Value): string. Value enum: "issued", "checked_in", "voided". anyOf[2]
     * (Value): string. Value enum: "issued", "checked_in", "voided".
     */
    "status"?: InputValue<("issued" | "checked_in" | "voided") | readonly ("issued" | "checked_in" | "voided")[]>;
    /**
     * Case-insensitive text search across ticket number, attendee name, buyer name and buyer
     * email. For Dashboard check-in staff it matches ticket number and attendee name only.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by ticket_id. Default:
     * "created_at". Value enum: "created_at", "attendee_name".
     */
    "sort_by"?: InputValue<"created_at" | "attendee_name">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Inclusive lower bound on checked_in_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "checked_in_after"?: InputValue<string | globalThis.Date>;
    /**
     * Exclusive upper bound on checked_in_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "checked_in_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: order. Include the requested
     * related resources using scoped batch reads for this page. Each relationship requires its
     * existing target read scopes. Expansion changes the representation without changing
     * pagination tokens. Limits: at most 10 unique expand paths per request. [] enum: "order".
     * Value enum: "order". anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][]
     * (Value): string. Value enum: "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
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
export type TicketsLookupParams = (InputValue<LookupTicketRequestInput>)
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
export type TicketsRotateCodeParams = (InputValue<TicketVersionRequestInput>);
export type TicketsUndoCheckInParams = TicketsRotateCodeParams;
export type TicketsUpdateParams = (InputValue<UpdateTicketRequestInput>);
export type TicketsVoidParams = TicketsRotateCodeParams;
/**
 * A tip on an order, with its requested, settled, and refunded amounts, status, and how it was
 * paid.
 */
export type Tip = {
    /**
     * Fixed tip amount, when the tip is set as an amount. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Optional description that stays on the tip for your reporting. */
    "description"?: string;
    /**
     * The tip amount the order collects. For a percent tip, the resolved amount. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "effective_amount_money": MoneyValue;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Optional name that stays on the tip for your reporting. */
    "name"?: string;
    /** Example: "tip_01KEZF7C00JRPYP11RTMB97MYH". */
    "order_tip_id": string;
    /**
     *  [] (Value): {@link TipPaymentIntentAllocation}. The part of a tip paid through one payment
     * intent.
     */
    "payment_intent_allocations": Array<TipPaymentIntentAllocation>;
    /**
     * Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * How much of the tip has been refunded. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * How much of the tip has been paid. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "settled_amount_money": MoneyValue;
    /**
     * Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled
     * before collection. Value enum: "requested", "paid", "partially_refunded", "refunded",
     * "canceled".
     */
    "status": "requested" | "paid" | "partially_refunded" | "refunded" | "canceled" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
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
    /** Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
};
/** The part of a tip paid through one value settlement. */
export type TipValueSettlementAllocation = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** Example: "ovst_01KEZF7C00EMVZ016PM34KKFGY". */
    "value_settlement_id": string;
};
/**
 * Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips
 * are allowed.
 */
export type TippingSettings = {
    /** Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    /**
     * Whether hosted checkout offers tips when a checkout session or payment link doesn't set its
     * own `tip`. Defaults to false.
     */
    "default_enabled"?: boolean;
    /**
     * Replaced as a whole: send every field you want to keep. The preselected fixed tip. Its
     * amount and currency must match one of the effective smart_tip_money_options. `null` when no
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
     * match one of the effective tip_percent_options. `null` when no preselection is set;
     * effective settings use Flint's default. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "default_tip_percent": number | null;
    /**
     * Three fixed tip amounts to offer. minItems: 3. maxItems: 3. [] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. [].amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. [].currency (Required): string. ISO 4217 currency code for this amount.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
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
    /**
     * Whether hosted checkout offers tips when a checkout session or payment link doesn't set its
     * own `tip`. Defaults to false.
     */
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
     * Three fixed tip amounts to offer. minItems: 3. maxItems: 3. [] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. [].amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. [].currency (Required): string. ISO 4217 currency code for this amount.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
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
    /**
     * Whether hosted checkout offers tips when a checkout session or payment link doesn't set its
     * own `tip`. Defaults to false.
     */
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
     * Three fixed tip amounts to offer. minItems: 3. maxItems: 3. [] (Value): {@link
     * MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. [].amount (Required): integer string. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 0. [].currency (Required): string. ISO 4217 currency code for this
     * amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
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
/** An optional version fence for removing the merchant freeze. */
export type UnfreezeGiftCardRequestInput = CloseGiftCardRequest;
/** The request body for: Update an API key. minProperties: 1. */
export type UpdateAPIKeyRequest = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "full", "read_only", "restricted".
     */
    "access"?: "full" | "read_only" | "restricted" | (string & {});
    /**
     * Resource version last read by the caller. Required when access or scopes is present.
     * Optional for scalar updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | null;
    /** minLength: 1. maxLength: 100. */
    "name"?: string;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
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
/** The request body for: Update an API key. minProperties: 1. */
export type UpdateAPIKeyRequestInput = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "full", "read_only", "restricted".
     */
    "access"?: "full" | "read_only" | "restricted";
    /**
     * Resource version last read by the caller. Required when access or scopes is present.
     * Optional for scalar updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | globalThis.Date | null;
    /** minLength: 1. maxLength: 100. */
    "name"?: string;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
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
    | (({
    "access"?: never;
})));
/**
 * A component to keep or add when updating a bundle, with its variant, quantity, position, and
 * delivery profile.
 */
export type UpdateBundleComponentRequest = {
    /**
     * Identifier of an existing component to retain. Omit it to add a new component. minLength: 1.
     * pattern: ^bunc_[0-9A-HJKMNP-TV-Z]{26}$. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id"?: string;
    /**
     * Delivery profile for this component. Omit it to copy the variant's current profile when the
     * component is saved; later changes to the variant's profile don't follow. On update, omitting
     * it on a retained component replaces any override with the variant's current profile, so
     * resend it to keep it. Send null to leave the component without a profile, which makes a
     * physical component `action_required` and a digital or service component `not_applicable`
     * with no delivery requirement. Digital and service components never use defaults; explicit
     * and inherited profiles must be required/manual with allowed_types exactly [digital] or
     * [service], matching the component product type. Existing order delivery snapshots do not
     * change. minLength: 1. Example: "dprof_01KEZF7C0020J13FQYNY9854R0".
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
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
};
/**
 * A component to keep or add when updating a bundle, with its variant, quantity, position, and
 * delivery profile.
 */
export type UpdateBundleComponentRequestInput = UpdateBundleComponentRequest;
