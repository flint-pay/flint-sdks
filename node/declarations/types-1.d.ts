import type { BalanceTransaction, Balance, Address } from './types-0.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-34.js';
import type { InputValue } from '../runtime.js';
import type {
    CategoryReference,
    CheckoutBuyerContact,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutCustomerPrefill,
    CheckoutDerivedDeliveryResource,
    CheckoutGiftCardChallenge,
    CheckoutMerchantSupport,
    CheckoutPaymentConfig,
    CheckoutPaymentMethodSave,
    CheckoutPrefill,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CardDetails
} from './types-4.js';
import type { ImageAttachment, Image } from './types-25.js';
import type { ModifierSet, MoneyValue } from './types-35.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { ResponseMeta } from './types-48.js';
import type {
    SelectedProductOption,
    SettlementAmounts,
    StripeClientSetup,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails
} from './types-53.js';
import type { CreateBundleRequestInput } from './types-6.js';
import type { UpdateBundleRequestInput } from './types-58.js';
import type {
    BuyerPauseActionOptions,
    BuyerPayBalanceActionOptions,
    BuyerPauseCapability,
    BuyerRetentionOffer,
    BuyerPauseCapabilityInput,
    BuyerRetentionOfferInput,
    BuyerOrderPaymentAttempt,
    BuyerPaymentCollection,
    BuyerFulfillmentOutcome,
    BuyerOrderLineItemModifier
} from './types-2.js';
import type {
    BuyerSkipCapability,
    BuyerSkipCapabilityInput,
    BuyerReturnReplacementLineItemRequest,
    BuyerReturnReplacementLineItemRequestInput,
    BuyerSubscriptionPlanLineItem
} from './types-3.js';
import type { CheckoutSessionTax, CheckoutSubscriptionTerms, CheckoutTheme, CheckoutTipConfig } from './types-5.js';
import type { LegalSettings } from './types-32.js';
import type { CreateReturnEligibilityPreviewRequest, CreateReturnEligibilityPreviewRequestInput } from './types-10.js';
import type { ReturnLineItemRequest, ReturnLineItemRequestInput } from './types-49.js';
import type { ReturnResolutionLineItemRequest, ReturnResolutionLineItemRequestInput } from './types-50.js';
import type { CreditNoteLineItem } from './types-12.js';
import type { TaxIdentity } from './types-57.js';
import type { PricingAmounts, PickupFulfillmentDetails } from './types-43.js';
import type { SubscriptionIntervalOption } from './types-54.js';
import type { DigitalFulfillmentDetails } from './types-20.js';
import type { ExpandedPackageSummary, ExpandedShipmentSummary, FulfillmentChargeLink } from './types-21.js';
import type { FulfillmentRecipient } from './types-22.js';
export type BalanceTransactionUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": BalanceTransaction;
    };
    "event_type"?: "balance_transaction.updated";
})
    & {
    "event_type": "balance_transaction.updated";
});
export type BalanceTransactionsGetParams = {
    /**
     * Supported expansions: order. Expansion requires money_movement.balance_transactions.read
     * plus commerce.orders.read. Limits: at most 10 unique expand paths per request. Pass
     * expand=order. [] enum: "order". Value enum: "order". anyOf[1] (Value): Array of string. []
     * enum: "order". anyOf[1][] (Value): string. Value enum: "order". anyOf[2] (Value): string.
     * Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
};
export type BalanceTransactionsListParams = {
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Lists the balance transactions this payout carried, newest first. Their `net_money` sums to
     * the payout's `amount_money`. Works in any payout status once the payout's contents are
     * prepared, usually minutes after it is created. Returns `503 SERVICE_UNAVAILABLE` with
     * `Retry-After` while they are prepared, and `409 ACTION_NOT_ALLOWED` with `reason:
     * not_itemized` for a payout that doesn't list its contents, such as a manual payout. Example:
     * "po_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "payout_id"?: InputValue<string>;
    /** Exact-match filter on `order_id`. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /**
     * Supported expansions: order. Each expansion resolves with one batched lookup per page.
     * Expansion requires money_movement.balance_transactions.read plus commerce.orders.read.
     * Limits: at most 10 unique expand paths per request. Pass expand=order. [] enum: "order".
     * Value enum: "order". anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][]
     * (Value): string. Value enum: "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
    /**
     * Optional balance transaction type filter. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout",
     * "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance",
     * "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment",
     * "merchant_billing_collection", "merchant_billing_collection_reversal". Value enum:
     * "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout",
     * "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance",
     * "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment",
     * "merchant_billing_collection", "merchant_billing_collection_reversal". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "payment", "refund", "dispute", "dispute_reversal",
     * "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal",
     * "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment",
     * "merchant_billing_collection", "merchant_billing_collection_reversal". anyOf[1][] (Value):
     * string. Value enum: "payment", "refund", "dispute", "dispute_reversal", "return",
     * "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal",
     * "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment",
     * "merchant_billing_collection", "merchant_billing_collection_reversal". anyOf[2] (Value):
     * string. Value enum: "payment", "refund", "dispute", "dispute_reversal", "return",
     * "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal",
     * "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment",
     * "merchant_billing_collection", "merchant_billing_collection_reversal".
     */
    "type"?: InputValue<("payment"
        | "refund"
        | "dispute"
        | "dispute_reversal"
        | "return"
        | "recovery"
        | "payout"
        | "payout_failure"
        | "payout_cancellation"
        | "payout_reversal"
        | "payout_advance"
        | "payout_advance_funding"
        | "reserve_hold"
        | "reserve_release"
        | "adjustment"
        | "merchant_billing_collection"
        | "merchant_billing_collection_reversal")
        | readonly ("payment"
        | "refund"
        | "dispute"
        | "dispute_reversal"
        | "return"
        | "recovery"
        | "payout"
        | "payout_failure"
        | "payout_cancellation"
        | "payout_reversal"
        | "payout_advance"
        | "payout_advance_funding"
        | "reserve_hold"
        | "reserve_release"
        | "adjustment"
        | "merchant_billing_collection"
        | "merchant_billing_collection_reversal")[]>;
    /**
     * Filter by related_resource.resource_type. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "payment_intent", "refund", "dispute", "payout", "payout_destination",
     * "merchant_billing_invoice". Value enum: "payment_intent", "refund", "dispute", "payout",
     * "payout_destination", "merchant_billing_invoice". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "payment_intent", "refund", "dispute", "payout", "payout_destination",
     * "merchant_billing_invoice". anyOf[1][] (Value): string. Value enum: "payment_intent",
     * "refund", "dispute", "payout", "payout_destination", "merchant_billing_invoice". anyOf[2]
     * (Value): string. Value enum: "payment_intent", "refund", "dispute", "payout",
     * "payout_destination", "merchant_billing_invoice".
     */
    "related_resource_type"?: InputValue<("payment_intent"
        | "refund"
        | "dispute"
        | "payout"
        | "payout_destination"
        | "merchant_billing_invoice")
        | readonly ("payment_intent"
        | "refund"
        | "dispute"
        | "payout"
        | "payout_destination"
        | "merchant_billing_invoice")[]>;
    /** Filter by related_resource.resource_id. */
    "related_resource_id"?: InputValue<string>;
    /**
     * Optional balance transaction status filter. Without it, the list returns transactions in
     * every status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed
     * and deduplicated in first-seen order; empty or unknown entries are rejected. Values within
     * this filter are ORed; separate filters are ANDed. [] enum: "pending", "available". Value
     * enum: "pending", "available". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending", "available". anyOf[1][] (Value): string. Value enum: "pending", "available".
     * anyOf[2] (Value): string. Value enum: "pending", "available".
     */
    "status"?: InputValue<("pending" | "available") | readonly ("pending" | "available")[]>;
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /**
     * Inclusive lower bound on available_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "available_after"?: InputValue<string | globalThis.Date>;
    /**
     * Exclusive upper bound on available_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "available_before"?: InputValue<string | globalThis.Date>;
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
export type BalanceUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Balance;
    };
    "event_type"?: "balance.updated";
})
    & {
    "event_type": "balance.updated";
});
export type BalancesListParams = {
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
};
/**
 * A merchant's branding settings: colors, corner radius, and font family. Checkout uses them as
 * its default theme.
 */
export type BrandingSettings = {
    /** A hex color in the form #RRGGBB, such as #1A73E8. */
    "accent_color"?: string;
    /** A hex color in the form #RRGGBB, such as #1A73E8. */
    "background_color"?: string;
    /** Corner radius in pixels, from 0 to 32. 0 is a square corner. Format: int32. */
    "corner_radius"?: number;
    /** Value enum: "instrument_sans", "system_sans", "system_serif", "monospace". */
    "font_family"?: "instrument_sans" | "system_sans" | "system_serif" | "monospace" | (string & {});
    /** A hex color in the form #RRGGBB, such as #1A73E8. */
    "primary_color"?: string;
    /** A hex color in the form #RRGGBB, such as #1A73E8. */
    "text_color"?: string;
};
/**
 * Branding values to change when updating settings. Send null for a color or `font_family` to
 * clear it.
 */
export type BrandingSettingsRequest = {
    /**
     * A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: 1.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "accent_color"?: string | null;
    /**
     * A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: 1.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "background_color"?: string | null;
    /**
     * Corner radius in pixels, from 0 to 32. 0 is a square corner. Format: int32. minimum: 0.
     * maximum: 32.
     */
    "corner_radius"?: number;
    /**
     * Send null to clear it. Value enum: "instrument_sans", "system_sans", "system_serif",
     * "monospace", null.
     */
    "font_family"?: "instrument_sans" | "system_sans" | "system_serif" | "monospace" | null | (string & {}) | null;
    /**
     * A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: 1.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "primary_color"?: string | null;
    /**
     * A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: 1.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "text_color"?: string | null;
};
/**
 * Branding values to change when updating settings. Send null for a color or `font_family` to
 * clear it.
 */
export type BrandingSettingsRequestInput = {
    /**
     * A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: 1.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "accent_color"?: string | null;
    /**
     * A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: 1.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "background_color"?: string | null;
    /**
     * Corner radius in pixels, from 0 to 32. 0 is a square corner. Format: int32. minimum: 0.
     * maximum: 32.
     */
    "corner_radius"?: number;
    /**
     * Send null to clear it. Value enum: "instrument_sans", "system_sans", "system_serif",
     * "monospace", null.
     */
    "font_family"?: "instrument_sans" | "system_sans" | "system_serif" | "monospace" | null;
    /**
     * A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: 1.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "primary_color"?: string | null;
    /**
     * A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: 1.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "text_color"?: string | null;
};
/**
 * Several variants sold as one line at the bundle's price. A bundle line takes its components'
 * shared taxability and tax category; all components must share both stored values. An unset
 * category uses the merchant default and equals only another unset category.
 */
export type Bundle = {
    /**
     * Whether the bundle can be sold now: it is `active`, has at least one component, every
     * component's variant and product are `active`, and `delivery_configuration_status` isn't
     * `action_required`. Stock isn't considered.
     */
    "available_for_sale": boolean;
    /** Barcode assigned to this sellable item. */
    "barcode"?: string;
    /** Stable identifier of the bundle. */
    "bundle_id": string;
    /**
     * Always present. Empty collections are returned as []. [] (Value): {@link CategoryReference}.
     * A reference to a product category by ID, handle, and name.
     */
    "categories": Array<CategoryReference>;
    /** Number of components in the bundle. Format: int32. */
    "component_count": number;
    /**
     * The bundle's components in position order, on every bundle response including list rows. []
     * only when the bundle has no components. [] (Value): {@link BundleComponent}. An item
     * included in a bundle.
     */
    "components": Array<BundleComponent>;
    /** When this resource was created, as an RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Delivery readiness aggregated across the bundle's components. A bundle with no components
     * reports `not_applicable`. Value enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /** Description of the bundle shown to buyers. */
    "description"?: string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Images attached to this resource, in display order. The first image is primary. [] (Value):
     * {@link ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata.
     */
    "images": Array<ImageAttachment>;
    /** Identifier of the merchant that owns this resource. */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Attached modifier set, included when expand=modifier_set is requested. Requires
     * commerce.catalog.read in addition to the resource's read scope. Present only when `expand`
     * includes `modifier_set`; `null` when expanded and there is no related modifier set. anyOf[1]
     * (Value): {@link ModifierSet}. A reusable collection of customization groups. anyOf[2]
     * (Value): null.
     */
    "modifier_set"?: ((ModifierSet) | (null));
    /** Attached modifier set. Send null on update to remove it. */
    "modifier_set_id": string | null;
    /** Bundle name shown to buyers. */
    "name": string;
    /** Stock keeping unit assigned to this sellable item. */
    "sku"?: string;
    /**
     * Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Value enum:
     * "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** When this resource last changed, as an RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Current resource version. Send it as expected_version to reject a write if the resource has
     * changed. Format: uint64. minimum: 0.
     */
    "version": number;
};
export type BundleArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Bundle;
    };
    "event_type"?: "bundle.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Bundle;
    };
    "event_type"?: "bundle.archived";
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
    "event_type": "bundle.archived";
});
/**
 * The `bundle.archived` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type BundleArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Bundle}. Several variants sold as one line at the bundle's price.
     * A bundle line takes its components' shared taxability and tax category; all components must
     * share both stored values. An unset category uses the merchant default and equals only
     * another unset category.
     */
    "data"?: {
        /**
         * Several variants sold as one line at the bundle's price. A bundle line takes its
         * components' shared taxability and tax category; all components must share both stored
         * values. An unset category uses the merchant default and equals only another unset
         * category.
         */
        "object": Bundle;
    };
    /** Value enum: "bundle.archived". */
    "event_type"?: "bundle.archived";
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
 * The `bundle.archived` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type BundleArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Bundle}. Several variants sold as one line at the bundle's price.
     * A bundle line takes its components' shared taxability and tax category; all components must
     * share both stored values. An unset category uses the merchant default and equals only
     * another unset category.
     */
    "data"?: {
        /**
         * Several variants sold as one line at the bundle's price. A bundle line takes its
         * components' shared taxability and tax category; all components must share both stored
         * values. An unset category uses the merchant default and equals only another unset
         * category.
         */
        "object": Bundle;
    };
    /** Value enum: "bundle.archived". */
    "event_type"?: "bundle.archived";
});
/** An item included in a bundle. */
export type BundleComponent = {
    /** Stable identifier of this component within its bundle. */
    "bundle_component_id": string;
    /**
     * Reason the component's delivery configuration needs attention. Value enum:
     * "delivery_profile_missing", "delivery_profile_inactive".
     */
    "delivery_configuration_reason"?: "delivery_profile_missing" | "delivery_profile_inactive" | (string & {});
    /**
     * Whether the component's delivery configuration is ready, needs attention, or does not apply.
     * Value enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /** Delivery profile used for this component, including any component override. */
    "delivery_profile_id"?: string;
    /** Display order among the bundle's components, starting at zero. Format: int32. */
    "position": number;
    /** Identifier of the product the component's variant belongs to. */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Summary of the component's variant and its selected options. A summary of the variant that
     * fills a bundle component: its names, SKU, selected options, and whether it is available for
     * sale.
     */
    "variant"?: BundleComponentVariantSummary;
    /** Identifier of the product variant included in the bundle. */
    "variant_id": string;
};
/** A page of `BundleComponent` objects. */
export type BundleComponentListResponse = {
    /**
     * The requested bundle component data. [] (Value): {@link BundleComponent}. An item included
     * in a bundle.
     */
    "data": Array<BundleComponent>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * A summary of the variant that fills a bundle component: its names, SKU, selected options, and
 * whether it is available for sale.
 */
export type BundleComponentVariantSummary = {
    /** Whether the component's variant and its product are both active. */
    "available_for_sale": boolean;
    /** Name of the component's variant, when set. */
    "name"?: string;
    /** Name of the product the variant belongs to. */
    "product_name"?: string;
    /**
     * Option names and values selected by the component's variant. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /** Stock keeping unit assigned to the component's variant, when set. */
    "sku"?: string;
    /** Identifier of the product variant included in the component. */
    "variant_id": string;
};
export type BundleCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Bundle;
    };
    "event_type"?: "bundle.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Bundle;
    };
    "event_type"?: "bundle.created";
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
    "event_type": "bundle.created";
});
/**
 * The `bundle.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type BundleCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Bundle}. Several variants sold as one line at the bundle's price.
     * A bundle line takes its components' shared taxability and tax category; all components must
     * share both stored values. An unset category uses the merchant default and equals only
     * another unset category.
     */
    "data"?: {
        /**
         * Several variants sold as one line at the bundle's price. A bundle line takes its
         * components' shared taxability and tax category; all components must share both stored
         * values. An unset category uses the merchant default and equals only another unset
         * category.
         */
        "object": Bundle;
    };
    /** Value enum: "bundle.created". */
    "event_type"?: "bundle.created";
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
 * The `bundle.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type BundleCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Bundle}. Several variants sold as one line at the bundle's price.
     * A bundle line takes its components' shared taxability and tax category; all components must
     * share both stored values. An unset category uses the merchant default and equals only
     * another unset category.
     */
    "data"?: {
        /**
         * Several variants sold as one line at the bundle's price. A bundle line takes its
         * components' shared taxability and tax category; all components must share both stored
         * values. An unset category uses the merchant default and equals only another unset
         * category.
         */
        "object": Bundle;
    };
    /** Value enum: "bundle.created". */
    "event_type"?: "bundle.created";
});
/** A page of `Bundle` objects. */
export type BundleListResponse = {
    /**
     * The requested bundle data. [] (Value): {@link Bundle}. Several variants sold as one line at
     * the bundle's price. A bundle line takes its components' shared taxability and tax category;
     * all components must share both stored values. An unset category uses the merchant default
     * and equals only another unset category.
     */
    "data": Array<Bundle>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `Bundle` data. */
export type BundleResponse = {
    /**
     * The requested bundle data. Several variants sold as one line at the bundle's price. A bundle
     * line takes its components' shared taxability and tax category; all components must share
     * both stored values. An unset category uses the merchant default and equals only another
     * unset category.
     */
    "data": Bundle;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type BundleUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Bundle;
    };
    "event_type"?: "bundle.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Bundle;
    };
    "event_type"?: "bundle.updated";
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
    "event_type": "bundle.updated";
});
/**
 * The `bundle.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type BundleUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Bundle}. Several variants sold as one line at the bundle's price.
     * A bundle line takes its components' shared taxability and tax category; all components must
     * share both stored values. An unset category uses the merchant default and equals only
     * another unset category.
     */
    "data"?: {
        /**
         * Several variants sold as one line at the bundle's price. A bundle line takes its
         * components' shared taxability and tax category; all components must share both stored
         * values. An unset category uses the merchant default and equals only another unset
         * category.
         */
        "object": Bundle;
    };
    /** Value enum: "bundle.updated". */
    "event_type"?: "bundle.updated";
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
 * The `bundle.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type BundleUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Bundle}. Several variants sold as one line at the bundle's price.
     * A bundle line takes its components' shared taxability and tax category; all components must
     * share both stored values. An unset category uses the merchant default and equals only
     * another unset category.
     */
    "data"?: {
        /**
         * Several variants sold as one line at the bundle's price. A bundle line takes its
         * components' shared taxability and tax category; all components must share both stored
         * values. An unset category uses the merchant default and equals only another unset
         * category.
         */
        "object": Bundle;
    };
    /** Value enum: "bundle.updated". */
    "event_type"?: "bundle.updated";
});
export type BundlesCreateParams = (InputValue<CreateBundleRequestInput>);
export type BundlesDeleteParams = {
    /** Optional bundle version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type BundlesGetParams = {
    /**
     * Supported expansions: modifier_set. Expand the attached modifier set. Limits: at most 10
     * unique expand paths per request. Pass expand=modifier_set. [] enum: "modifier_set". Value
     * enum: "modifier_set". anyOf[1] (Value): Array of string. [] enum: "modifier_set". anyOf[1][]
     * (Value): string. Value enum: "modifier_set". anyOf[2] (Value): string. Value enum:
     * "modifier_set".
     */
    "expand"?: InputValue<("modifier_set") | readonly ("modifier_set")[]>;
};
export type BundlesListComponentsParams = {
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
    /** Filter by assigned delivery profile ID. Example: "dprof_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "delivery_profile_id"?: InputValue<string>;
    /**
     * Filter by delivery readiness. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "configured", "action_required", "not_applicable". Value enum: "configured",
     * "action_required", "not_applicable". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "configured", "action_required", "not_applicable". anyOf[1][] (Value): string. Value
     * enum: "configured", "action_required", "not_applicable". anyOf[2] (Value): string. Value
     * enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status"?: InputValue<("configured" | "action_required" | "not_applicable")
        | readonly ("configured" | "action_required" | "not_applicable")[]>;
};
export type BundlesListParams = {
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
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /** Filter by exact SKU. maxLength: 100. */
    "sku"?: InputValue<string>;
    /**
     * Search across bundle ID, external reference ID, name, description, SKU, and barcode. Text
     * fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards.
     * IDs match from the start and need the type prefix, such as bun_01.
     */
    "query"?: InputValue<string>;
    /** Filter by category handle. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$. */
    "category_handle"?: InputValue<string>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "inactive", "archived". Value enum: "active",
     * "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "inactive", "archived". anyOf[1][] (Value): string. Value enum: "active", "inactive",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by bundle_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "name".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Filter bundles with at least one component assigned to this delivery profile. Example:
     * "dprof_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "delivery_profile_id"?: InputValue<string>;
    /**
     * Filter by aggregated delivery readiness across bundle components. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "configured", "action_required", "not_applicable". Value enum:
     * "configured", "action_required", "not_applicable". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "configured", "action_required", "not_applicable". anyOf[1][] (Value):
     * string. Value enum: "configured", "action_required", "not_applicable". anyOf[2] (Value):
     * string. Value enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status"?: InputValue<("configured" | "action_required" | "not_applicable")
        | readonly ("configured" | "action_required" | "not_applicable")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Supported expansions: modifier_set. Include the requested related resources using scoped
     * batch reads for this page. Each relationship requires its existing target read scopes.
     * Expansion changes the representation without changing pagination tokens. Limits: at most 10
     * unique expand paths per request. Pass expand=modifier_set. [] enum: "modifier_set". Value
     * enum: "modifier_set". anyOf[1] (Value): Array of string. [] enum: "modifier_set". anyOf[1][]
     * (Value): string. Value enum: "modifier_set". anyOf[2] (Value): string. Value enum:
     * "modifier_set".
     */
    "expand"?: InputValue<("modifier_set") | readonly ("modifier_set")[]>;
};
export type BundlesUpdateParams = (InputValue<UpdateBundleRequestInput>);
/**
 * One thing a buyer can do with an order, subscription, invoice or return they read through
 * /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first
 * available action as the primary action on the resource's page in your account.
 */
export type BuyerAction = {
    /**
     * Present only on an available cancel action. The cancellation choices this subscription
     * accepts from its buyer.
     */
    "cancel"?: BuyerCancelActionOptions;
    /**
     * When the buyer needs to act by. Omitted when the action has no deadline, or when the
     * resource's state or the store's policy doesn't allow it. Format: date-time.
     */
    "due_at"?: string;
    /** Whether this session can take the action now. */
    "is_available": boolean;
    /**
     * Whether the store needs the buyer to take the action, such as paying a due invoice. It stays
     * true when the only thing in the way is signing in.
     */
    "is_required": boolean;
    /**
     * What the action is. Each resource lists its own kinds in a fixed order. New kinds may be
     * added; ignore kinds you don't recognize. Value enum: "start_return", "resend_receipt",
     * "cancel", "pause", "resume", "reactivate", "update_payment_method", "pay", "withdraw",
     * "ship_items", "pay_balance", "retry_payment", "update_delivery", "skip",
     * "update_billing_interval", "update_quantity", "swap_items", "renew".
     */
    "kind": "start_return"
        | "resend_receipt"
        | "cancel"
        | "pause"
        | "resume"
        | "reactivate"
        | "update_payment_method"
        | "pay"
        | "withdraw"
        | "ship_items"
        | "pay_balance"
        | "retry_payment"
        | "update_delivery"
        | "skip"
        | "update_billing_interval"
        | "update_quantity"
        | "swap_items"
        | "renew"
        | (string & {});
    /**
     * Present only on an available pause action. The pause lengths this subscription accepts from
     * its buyer.
     */
    "pause"?: BuyerPauseActionOptions;
    /**
     * Present only on an available pay_balance action. The return resolutions the buyer can pay
     * now.
     */
    "pay_balance"?: BuyerPayBalanceActionOptions;
    /**
     * Why the action can't be taken now. Present exactly when is_available is false. New reasons
     * may be added; show a general message for a reason you don't recognize. Value enum:
     * "sign_in_required", "store_policy", "not_in_state", "window_closed", "nothing_to_return",
     * "collection_unavailable", "limit_reached".
     */
    "unavailable_reason"?: "sign_in_required"
        | "store_policy"
        | "not_in_state"
        | "window_closed"
        | "nothing_to_return"
        | "collection_unavailable"
        | "limit_reached"
        | (string & {});
};
/** The cancellation choices this subscription accepts from its buyer. */
export type BuyerCancelActionOptions = {
    /**
     * Reasons to offer, in the store's order. Empty means do not ask. Sending a reason is always
     * optional. [] enum: "too_expensive", "missing_features", "switched_service", "unused",
     * "customer_service", "too_complex", "low_quality", "other". [] (Value): string. Value enum:
     * "too_expensive", "missing_features", "switched_service", "unused", "customer_service",
     * "too_complex", "low_quality", "other".
     */
    "cancellation_reasons": Array<"too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {})>;
    /**
     * An available pause the buyer may accept instead of canceling, using POST
     * /v1/me/subscriptions/{subscription_id}/pause. The buyer may always decline and cancel. An
     * optional alternative to cancellation that this subscription can accept.
     */
    "retention_offer"?: BuyerCancelRetentionOffer;
    /**
     * The cancellation timing accepted by this subscription. New values may be added. Value enum:
     * "end_of_period", "immediately", "buyer_chooses".
     */
    "timing": "end_of_period" | "immediately" | "buyer_chooses" | (string & {});
};
/** An optional alternative to cancellation that this subscription can accept. */
export type BuyerCancelRetentionOffer = {
    /** The alternative offered. Ignore kinds you do not recognize. Value enum: "pause_instead". */
    "kind": "pause_instead" | (string & {});
    /**
     * Send this pause_duration_cycles to accept the offer. Format: int32. minimum: 1. maximum: 12.
     */
    "pause_duration_cycles": number;
};
/**
 * What a store lets buyers do to their own subscriptions. Send at least one field; each field you
 * omit takes its default. minProperties: 1.
 */
export type BuyerCapabilities = {
    /**
     * Whether buyers may change the shipping address and delivery method of their physical
     * subscriptions. Default: true.
     */
    "can_update_delivery"?: boolean;
    /**
     * Reasons a buyer is asked to choose from when canceling, in the order shown. Empty: the buyer
     * is not asked. When the list is not empty, a buyer's cancellation_reason_code must be one of
     * them. maxItems: 8. uniqueItems: true. Default: []. [] enum: "too_expensive",
     * "missing_features", "switched_service", "unused", "customer_service", "too_complex",
     * "low_quality", "other". [] (Value): string. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reasons"?: Array<"too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {})>;
    /**
     * When a subscription a buyer cancels ends. end_of_period: at trial_end_at while trialing,
     * current_period_end_at while active, or next_retry_at while past_due. buyer_chooses: the
     * buyer picks the scheduled time or right away. When no scheduled cancellation time is
     * available, including scheduled, incomplete, paused, and past_due without next_retry_at, the
     * buyer may send cancel_immediately: true under either policy. Default: "end_of_period". Value
     * enum: "end_of_period", "buyer_chooses".
     */
    "cancellation_timing"?: "end_of_period" | "buyer_chooses" | (string & {});
    /**
     * Replaced as a whole: send every field you want to keep. Whether buyers may pause, and for
     * how long. Omit it to let buyers pause with no limit. Whether buyers may pause their own
     * subscriptions. Send at least one field. minProperties: 1.
     */
    "pause"?: BuyerPauseCapability;
    /**
     * Replaced as a whole: send every field you want to keep. The offer a buyer sees before
     * canceling. The buyer can always decline it and cancel. Omit it for no offer. The offer a
     * buyer sees before canceling. Send at least one field. minProperties: 1.
     */
    "retention_offer"?: BuyerRetentionOffer;
    /**
     * Replaced as a whole: send every field you want to keep. Whether buyers may skip renewals.
     * Omit it to allow skipping with no consecutive limit. Whether buyers may skip renewals. Send
     * at least one field. minProperties: 1.
     */
    "skip"?: BuyerSkipCapability;
};
/**
 * What a store lets buyers do to their own subscriptions. Send at least one field; each field you
 * omit takes its default. minProperties: 1.
 */
export type BuyerCapabilitiesInput = {
    /**
     * Whether buyers may change the shipping address and delivery method of their physical
     * subscriptions. Default: true.
     */
    "can_update_delivery"?: boolean;
    /**
     * Reasons a buyer is asked to choose from when canceling, in the order shown. Empty: the buyer
     * is not asked. When the list is not empty, a buyer's cancellation_reason_code must be one of
     * them. maxItems: 8. uniqueItems: true. Default: []. [] enum: "too_expensive",
     * "missing_features", "switched_service", "unused", "customer_service", "too_complex",
     * "low_quality", "other". [] (Value): string. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reasons"?: Array<"too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other">;
    /**
     * When a subscription a buyer cancels ends. end_of_period: at trial_end_at while trialing,
     * current_period_end_at while active, or next_retry_at while past_due. buyer_chooses: the
     * buyer picks the scheduled time or right away. When no scheduled cancellation time is
     * available, including scheduled, incomplete, paused, and past_due without next_retry_at, the
     * buyer may send cancel_immediately: true under either policy. Default: "end_of_period". Value
     * enum: "end_of_period", "buyer_chooses".
     */
    "cancellation_timing"?: "end_of_period" | "buyer_chooses";
    /**
     * Replaced as a whole: send every field you want to keep. Whether buyers may pause, and for
     * how long. Omit it to let buyers pause with no limit. Whether buyers may pause their own
     * subscriptions. Send at least one field. minProperties: 1.
     */
    "pause"?: BuyerPauseCapabilityInput;
    /**
     * Replaced as a whole: send every field you want to keep. The offer a buyer sees before
     * canceling. The buyer can always decline it and cancel. Omit it for no offer. The offer a
     * buyer sees before canceling. Send at least one field. minProperties: 1.
     */
    "retention_offer"?: BuyerRetentionOfferInput;
    /**
     * Replaced as a whole: send every field you want to keep. Whether buyers may skip renewals.
     * Omit it to allow skipping with no consecutive limit. Whether buyers may skip renewals. Send
     * at least one field. minProperties: 1.
     */
    "skip"?: BuyerSkipCapabilityInput;
};
/**
 * A checkout problem shown to the buyer, including whether it blocks completion and how to resolve
 * it.
 */
export type BuyerCheckoutProblemResource = {
    "blocks_completion": boolean;
    /**
     * Value enum: "delivery_selection_stale", "delivery_selection_invalid", "delivery_unreadable",
     * "payment_in_progress".
     */
    "code": "delivery_selection_stale"
        | "delivery_selection_invalid"
        | "delivery_unreadable"
        | "payment_in_progress"
        | (string & {});
    /**
     * Guidance for recovering from a payment error: whether and how to retry (`retry`), and
     * optional next steps.
     */
    "remediation"?: BuyerErrorRemediation;
    /** Value enum: "error". */
    "severity": "error" | (string & {});
};
/** A session in which a buyer completes an order's payment. */
export type BuyerCheckoutSession = {
    /** An attempt to pay an order. */
    "active_payment_attempt"?: BuyerOrderPaymentAttempt;
    /**
     * Contact the buyer entered in checkout before paying, saved with the session's checkout
     * credential. Separate from merchant-supplied prefill and customer_prefill from the customer
     * record. Omitted until the buyer saves or clears a field. When a checkout session payment
     * omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the
     * contact 30 days after the session ends, and when a customer linked to the session is
     * deleted. Buyer contact supplied with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Whether checkout offers the buyer the option to save the card they type for faster checkout
     * at this merchant. When true and save_payment_method_requires_verification is false, PayOrder
     * accepts save_payment_method: true for one newly collected card. False when the merchant
     * turned checkout.saved_payment_details off, customer accounts are merchant hosted, card is
     * not an available payment option, the checkout collects an invoice, a subscription, or a
     * return, or the checkout acts for no customer and Flint cannot email the buyer a verification
     * code. Returned only to the checkout credential; never in webhook payloads.
     */
    "can_save_payment_method"?: boolean;
    /**
     * Whether the buyer can save the card they type by giving a US or Canadian mobile phone number
     * with the payment, in save_payment_method_phone on POST /v1/orders/{order_id}/pay, and
     * confirming it with a texted code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     */
    "can_save_payment_method_with_phone"?: boolean;
    "checkout_session_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Custom text shown in checkout: an order summary message and a shipping address label. */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * The customer of the session's order. Omitted when the order has none. A checkout credential
     * issued for this session acts for this customer.
     */
    "customer_id"?: string;
    /**
     * Contact and default addresses of the customer the checkout acts for, with the recipient name
     * on its default shipping address: the customer the merchant created the session for, or the
     * customer whose email the buyer confirmed in it. Present on GET and PATCH responses while the
     * session is open and acts for a customer. Separate from merchant-supplied prefill and
     * buyer_contact saved by the buyer. Returned only to the checkout credential; never in webhook
     * payloads. Details the buyer's checkout can prefill from the customer it acts for.
     */
    "customer_prefill"?: CheckoutCustomerPrefill;
    /**
     * Current delivery choices for Flint-owned pricing. External pricing reports
     * requires_explicit_quote; reading this field does not request a delivery quote. Omitted when
     * the session is not open, has no order, or Flint cannot read its delivery. The delivery
     * options Flint derived for a checkout as a buyer sees them: choice groups, input
     * requirements, and evaluation status.
     */
    "delivery"?: CheckoutDerivedDeliveryResource;
    /**
     * Immutable delivery method assignment captured when the checkout was created. [] (Value):
     * string.
     */
    "delivery_method_ids": Array<string>;
    /**
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment.
     */
    "delivery_selection_required": boolean;
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64.
     */
    "expires_in_seconds"?: number;
    /**
     * Where the buyer completes a gift card challenge for this checkout. Returned on
     * single-session reads, session create and update responses, checkout launch results, and
     * customer verification confirmation results while the session is open and can show the
     * challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results.
     * A URL to load in an iframe when applying a gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`.
     */
    "gift_card_challenge"?: CheckoutGiftCardChallenge;
    "invoice_id"?: string;
    /**
     * Whether this terminal session credential is temporarily restricted to recovering its owning
     * payment attempt.
     */
    "is_in_recovery": boolean;
    /**
     * Legal settings for a checkout: whether buyers must accept terms, and links to the terms,
     * refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * The merchant's square icon, shown in browser tabs and compact headers. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses and
     * webhooks omit it. An image with its `url`, `width`, and `height`, and optional `alt` text.
     */
    "merchant_icon"?: Image;
    "merchant_id"?: string;
    /**
     * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
     * merchant has one; other responses and webhooks omit it. An image with its `url`, `width`,
     * and `height`, and optional `alt` text.
     */
    "merchant_logo"?: Image;
    /**
     * The merchant's business name, which hosted checkout shows when `theme.title` is unset. Reads
     * `Merchant` when the merchant has not set a business name. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
     */
    "merchant_name"?: string;
    /**
     * How the buyer can reach the merchant for help: the support email, phone, and URL the
     * merchant set. Present on GET and PATCH responses when the merchant set at least one of them.
     * Show it where your checkout tells the buyer to contact the merchant, such as an expired or
     * closed checkout, or your receipt. Returned only to the checkout credential; never in webhook
     * payloads. The merchant's support contact. Each field is omitted when the merchant has not
     * set it.
     */
    "merchant_support"?: CheckoutMerchantSupport;
    "order_id"?: string;
    /** Origin of the page that renders this embedded checkout. Omitted when not set. */
    "page_origin"?: string;
    /**
     * Guidance for collecting a payment source. Checkout-credential reads include it only while
     * the session is open. Returned only to the checkout credential; never in webhook payloads.
     * What a client needs to collect payment for a buyer's order. The `stripe` field holds the
     * Stripe values.
     */
    "payment_collection"?: BuyerPaymentCollection;
    /**  [] (Value): string. */
    "payment_intent_ids"?: Array<string>;
    "payment_link_id"?: string;
    /**
     * The current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its `url`, `width`, and `height`, and optional `alt`
     * text.
     */
    "payment_link_image"?: Image;
    /**
     * The card the buyer saved with this checkout's payment by giving a mobile phone number, and
     * whether they confirmed it. Present on GET and PATCH responses after a payment that paid the
     * order in full, or that was approved for the merchant to capture later, and saved a card this
     * way. A checkout whose payment is approved stays open until the capture. Returned only to the
     * checkout credential; never in webhook payloads. A card the buyer saved with the checkout's
     * payment by giving a mobile phone number. It works for nothing until the buyer confirms it
     * with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method.
     */
    "payment_method_save"?: CheckoutPaymentMethodSave;
    /**
     * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Configured payment options for merchant credentials; currently available payment options for
     * the checkout credential. Payment settings for a checkout: the enabled payment options and a
     * note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefill;
    /**
     * Named conditions that affect checkout completion. Follow each problem's remediation action
     * instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means
     * another payment for the order must finish before this checkout can complete. When Flint
     * cannot read the checkout's delivery, the read still succeeds and reports
     * delivery_unreadable; its remediation says whether reading the session again can succeed, and
     * its next action's reason_code names the error. [] (Value): {@link
     * BuyerCheckoutProblemResource}. A checkout problem shown to the buyer, including whether it
     * blocks completion and how to resolve it.
     */
    "problems": Array<BuyerCheckoutProblemResource>;
    /**
     * Promotion settings for a checkout: whether automatic promotions apply and whether the buyer
     * can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /** RFC3339 deadline for the restricted payment-attempt recovery window. Format: date-time. */
    "recovery_expires_at"?: string | null;
    /** Payment attempt that this checkout credential may recover while is_in_recovery is true. */
    "recovery_payment_attempt_id"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Whether the buyer must confirm their email with a code before the checkout can save their
     * card or use their saved cards. True when can_save_payment_method is true and the checkout
     * acts for no customer for this credential: the merchant created it without one, and either
     * the buyer has not confirmed an email with this credential, or the customer whose email they
     * confirmed has since changed that email or been deleted. A credential other than the one a
     * confirmation returned, such as the hosted checkout link opened on another device, reads
     * true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads.
     */
    "save_payment_method_requires_verification"?: boolean;
    /**
     * What save_payment_method keeps, present when can_save_payment_method is true: card, a card
     * the buyer types into checkout. Show the save option with that payment method only. A pay
     * request that sends save_payment_method: true with Apple Pay, Google Pay, a bank account, or
     * Affirm, through a confirmation token created with setup_future_usage none, still pays, and
     * its payment attempt's payment_method_save reports not_saved. The values can grow. Returned
     * only to the checkout credential; never in webhook payloads. [] enum: "card". [] (Value):
     * string. Value enum: "card".
     */
    "save_payment_method_types"?: Array<"card" | (string & {})>;
    /**
     * Guidance for collecting a payment method to save. Checkout-credential reads include it only
     * while the session is open. Returned only to the checkout credential; never in webhook
     * payloads. What a client needs to collect payment for a buyer's order. The `stripe` field
     * holds the Stripe values.
     */
    "setup_collection"?: BuyerPaymentCollection;
    /**
     * Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when
     * the merchant's agreement with Flint removes it. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
     */
    "show_flint_mark"?: boolean;
    /** Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated". */
    "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
    "subscription_plan_id"?: string;
    /**
     * Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order
     * was created, so later plan changes do not alter them. Absent when the checkout starts no
     * subscription. Renewal terms a subscription checkout commits the buyer to. Frozen when the
     * session's order was created, so later plan changes do not alter them.
     */
    "subscription_terms"?: CheckoutSubscriptionTerms;
    "superseding_checkout_session_id"?: string;
    /** Value enum: "hosted", "embedded". */
    "surface": "hosted" | "embedded" | (string & {});
    /**
     * The session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     */
    "tax"?: CheckoutSessionTax;
    /**
     * Value enum: "payment_succeeded", "payment_partially_succeeded", "expired",
     * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
     * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
     * "invoice_balance_changed".
     */
    "terminal_reason"?: "payment_succeeded"
        | "payment_partially_succeeded"
        | "expired"
        | "closed_by_merchant"
        | "order_mutated"
        | "superseded"
        | "order_paid_elsewhere"
        | "invoice_paid_elsewhere"
        | "invoice_voided"
        | "invoice_uncollectible"
        | "invoice_balance_changed"
        | (string & {});
    /**
     * The theme checkout renders with: your branding settings, with the session's `title`,
     * `primary_color`, and `accent_color` over them. A session sets only those three; the other
     * fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings.
     */
    "theme"?: CheckoutTheme;
    /**
     * Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options,
     * the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /** Value enum: "order", "quick_pay", "subscription_plan", "invoice", "payment_link". */
    "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Hosted checkout URL that carries a one-time launch credential. Send the buyer here to pay.
     * Present only for hosted sessions read with a merchant credential that can manage checkout
     * sessions. Launch results include it for hosted sessions: create, payment-link resolve, and
     * invoice and return-resolution checkout. Omitted for embedded sessions.
     */
    "url"?: string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/**
 * The checkout session with its checkout credential. For hosted checkout, send the buyer to url.
 * For embedded checkout, pass checkout_auth_token to your checkout client. A session in which a
 * buyer completes an order's payment.
 */
export type BuyerCheckoutSessionWithSecret = (Exclude<BuyerCheckoutSession & object, readonly unknown[]>)
    & ({
    /**
     * Checkout credential. Send it as Authorization: Bearer <checkout_auth_token>. Present on
     * checkout launch and customer binding confirmation; omitted when a saved-card confirmation
     * keeps the current credential.
     */
    "checkout_auth_token"?: string;
});
/** The request body for: Preview Return eligibility or resolution amounts for the current buyer. */
export type BuyerCreateReturnPreviewRequest = ({
    /**
     * A request to preview which items of an order can be returned, given an order and a
     * selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequest;
    /** Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution" | (string & {});
    /**
     * The buyer's proposed resolution type, returned quantities, and replacement items to preview
     * for a Return.
     */
    "resolution"?: BuyerCreateReturnResolutionPreviewRequest;
})
    & ((Exclude<BuyerCreateReturnPreviewRequestEligibility & object, readonly unknown[]>)
    | (Exclude<BuyerCreateReturnPreviewRequestResolution & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `eligibility` variant of `BuyerCreateReturnPreviewRequest`. */
export type BuyerCreateReturnPreviewRequestEligibility = ({
    /**
     * A request to preview which items of an order can be returned, given an order and a
     * selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequest;
    /** Value enum: "eligibility". */
    "mode": "eligibility" | (string & {});
    /**
     * The buyer's proposed resolution type, returned quantities, and replacement items to preview
     * for a Return.
     */
    "resolution"?: BuyerCreateReturnResolutionPreviewRequest;
})
    & (({
    /** Value enum: "eligibility". */
    "mode": unknown;
    /**
     * A request to preview which items of an order can be returned, given an order and a
     * selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequest;
}));
/** The `eligibility` variant of `BuyerCreateReturnPreviewRequest`. */
export type BuyerCreateReturnPreviewRequestEligibilityInput = ({
    /**
     * A request to preview which items of an order can be returned, given an order and a
     * selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequestInput;
    /** Value enum: "eligibility". */
    "mode": "eligibility";
    /**
     * The buyer's proposed resolution type, returned quantities, and replacement items to preview
     * for a Return.
     */
    "resolution"?: BuyerCreateReturnResolutionPreviewRequestInput;
})
    & (({
    /** Value enum: "eligibility". */
    "mode": "eligibility";
    /**
     * A request to preview which items of an order can be returned, given an order and a
     * selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequestInput;
})
    & ({
    "resolution"?: never;
}));
/** The request body for: Preview Return eligibility or resolution amounts for the current buyer. */
export type BuyerCreateReturnPreviewRequestInput = ({
    /**
     * A request to preview which items of an order can be returned, given an order and a
     * selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequestInput;
    /** Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution";
    /**
     * The buyer's proposed resolution type, returned quantities, and replacement items to preview
     * for a Return.
     */
    "resolution"?: BuyerCreateReturnResolutionPreviewRequestInput;
})
    & ((Exclude<BuyerCreateReturnPreviewRequestEligibilityInput & object, readonly unknown[]>)
    | (Exclude<BuyerCreateReturnPreviewRequestResolutionInput & object, readonly unknown[]>));
/** The `resolution` variant of `BuyerCreateReturnPreviewRequest`. */
export type BuyerCreateReturnPreviewRequestResolution = ({
    /**
     * A request to preview which items of an order can be returned, given an order and a
     * selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequest;
    /** Value enum: "resolution". */
    "mode": "resolution" | (string & {});
    /**
     * The buyer's proposed resolution type, returned quantities, and replacement items to preview
     * for a Return.
     */
    "resolution": BuyerCreateReturnResolutionPreviewRequest;
})
    & (({
    /** Value enum: "resolution". */
    "mode": unknown;
    /**
     * The buyer's proposed resolution type, returned quantities, and replacement items to preview
     * for a Return.
     */
    "resolution": BuyerCreateReturnResolutionPreviewRequest;
}));
/** The `resolution` variant of `BuyerCreateReturnPreviewRequest`. */
export type BuyerCreateReturnPreviewRequestResolutionInput = ({
    /**
     * A request to preview which items of an order can be returned, given an order and a
     * selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequestInput;
    /** Value enum: "resolution". */
    "mode": "resolution";
    /**
     * The buyer's proposed resolution type, returned quantities, and replacement items to preview
     * for a Return.
     */
    "resolution": BuyerCreateReturnResolutionPreviewRequestInput;
})
    & (({
    /** Value enum: "resolution". */
    "mode": "resolution";
    /**
     * The buyer's proposed resolution type, returned quantities, and replacement items to preview
     * for a Return.
     */
    "resolution": BuyerCreateReturnResolutionPreviewRequestInput;
})
    & ({
    "eligibility"?: never;
}));
/** The request body for: Create a Return for the current buyer. */
export type BuyerCreateReturnRequest = {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link ReturnLineItemRequest}. An order line item to
     * return, with the quantity, return reason, and optionally a note and the resolution the buyer
     * wants.
     */
    "line_items": Array<ReturnLineItemRequest>;
    /** minLength: 1. */
    "order_id": string;
};
/** The request body for: Create a Return for the current buyer. */
export type BuyerCreateReturnRequestInput = {
    /**
     * minItems: 1. maxItems: 100. [] (Value): {@link ReturnLineItemRequestInput}. An order line
     * item to return, with the quantity, return reason, and optionally a note and the resolution
     * the buyer wants.
     */
    "line_items": Array<ReturnLineItemRequestInput>;
    /** minLength: 1. */
    "order_id": string;
};
/**
 * The buyer's proposed resolution type, returned quantities, and replacement items to preview for
 * a Return.
 */
export type BuyerCreateReturnResolutionPreviewRequest = ({
    /**
     * minItems: 1. [] (Value): {@link ReturnResolutionLineItemRequest}. A return line and quantity
     * to include in a return resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /**
     *  [] (Value): {@link BuyerReturnReplacementLineItemRequest}. A catalog variant or bundle and
     * quantity the buyer requests as a replacement in a Return resolution preview.
     */
    "replacement_line_items"?: Array<BuyerReturnReplacementLineItemRequest>;
    /**
     * The proposed resolution type. For store_credit, send a nonempty line_items list and omit
     * replacement_line_items. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /** minLength: 1. */
    "return_id": string;
});
/**
 * The buyer's proposed resolution type, returned quantities, and replacement items to preview for
 * a Return.
 */
export type BuyerCreateReturnResolutionPreviewRequestInput = ({
    /**
     * minItems: 1. [] (Value): {@link ReturnResolutionLineItemRequestInput}. A return line and
     * quantity to include in a return resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequestInput>;
    /**
     *  [] (Value): {@link BuyerReturnReplacementLineItemRequestInput}. A catalog variant or bundle
     * and quantity the buyer requests as a replacement in a Return resolution preview.
     */
    "replacement_line_items"?: Array<BuyerReturnReplacementLineItemRequestInput>;
    /**
     * The proposed resolution type. For store_credit, send a nonempty line_items list and omit
     * replacement_line_items. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /** minLength: 1. */
    "return_id": string;
});
/**
 * The buyer-visible view of a credit note. Drafts are never returned, and how much credit is left
 * to allocate is omitted.
 */
export type BuyerCreditNote = {
    /**
     * Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed
     * on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. anyOf[2] (Value): null.
     */
    "buyer_tax_identity": ((TaxIdentity) | (null));
    /** Unique identifier of the credit note. */
    "credit_note_id": string;
    /** Assigned at issue and stable from then on. Absent while the credit note is a draft. */
    "credit_note_number": string;
    /** The invoice this credit note corrects. */
    "invoice_id": string;
    /** When the credit note was issued. Format: date-time. */
    "issued_at": string;
    /**
     * Status of the most recent refund linked to this credit note. Absent when no refund has been
     * requested. Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     */
    "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
    /**
     * Itemized corrections against frozen invoice lines. Amount and quantity corrections share
     * each source line's remaining value, discount, and tax across issued, non-void credit notes.
     * Drafts reserve no credit. [] (Value): {@link CreditNoteLineItem}. One correction calculated
     * from the frozen invoice line's remaining billed value, discount, and tax. The source line's
     * inclusive or additive tax mode is preserved. Current catalog prices and tax settings do not
     * affect the correction. Stored issued values are never recalculated by a read.
     */
    "line_items": Array<CreditNoteLineItem>;
    /** Free text shown on the credit note. Null when none was set. */
    "memo": string | null;
    /**
     * Credit reserved by linked refunds that have not resolved yet. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "pending_refund_money": MoneyValue;
    /**
     * Why the invoice is being corrected. Shown on the credit note document. Value enum:
     * "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     */
    "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
    /**
     * Credit consumed by linked refunds that succeeded. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed
     * on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an
     * owned collection in display order; replacing the array requires the parent's
     * expected_version. Existing entries retain their document_tax_id; omit an entry to remove it,
     * or omit its ID to add one. anyOf[2] (Value): null.
     */
    "seller_tax_identity": ((TaxIdentity) | (null));
    /** issued once it is numbered and frozen, void once retired. Value enum: "issued", "void". */
    "status": "issued" | "void" | (string & {});
    /**
     * The face value of the credit note, the sum of its lines. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** When the credit note was voided. Absent unless it is void. Format: date-time. */
    "voided_at"?: string;
};
/** A page of `BuyerCreditNote` objects. */
export type BuyerCreditNoteListResponse = {
    /**
     *  [] (Value): {@link BuyerCreditNote}. The buyer-visible view of a credit note. Drafts are
     * never returned, and how much credit is left to allocate is omitted.
     */
    "data": Array<BuyerCreditNote>;
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
/** A response containing `BuyerCreditNote` data. */
export type BuyerCreditNoteResponse = {
    /**
     * The buyer-visible view of a credit note. Drafts are never returned, and how much credit is
     * left to allocate is omitted.
     */
    "data": BuyerCreditNote;
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
/** A merchant's customer profile. */
export type BuyerCustomer = {
    /**
     * The customer's default billing address: a copy of the saved address marked
     * is_default_billing. Read-only; change it with is_default_billing through /v1/me/addresses.
     * `null` when no saved address is the billing default. anyOf[1] (Value): {@link Address}. A
     * postal address. Every address has country. Addresses Flint checked as complete (customer and
     * saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country. anyOf[2] (Value):
     * null.
     */
    "billing_address": ((Address) | (null));
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "customer_id": string;
    "default_payment_method_id": string | null;
    /**
     * Customer email, or null when the customer has none. Unique among the environment's
     * customers.
     */
    "email": string | null;
    "merchant_id"?: string;
    /** Customer name, or null when none. */
    "name": string | null;
    /** Customer phone number, or null when none. */
    "phone": string | null;
    /**
     * The customer's default shipping address: a copy of the saved address marked
     * is_default_shipping. Read-only; change it with is_default_shipping through /v1/me/addresses.
     * `null` when no saved address is the shipping default. anyOf[1] (Value): {@link Address}. A
     * postal address. Every address has country. Addresses Flint checked as complete (customer and
     * saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country. anyOf[2] (Value):
     * null.
     */
    "shipping_address": ((Address) | (null));
    /** Value enum: "active", "deletion_processing", "deleted". */
    "status": "active" | "deletion_processing" | "deleted" | (string & {});
    /** Always null for buyer credentials. */
    "tax_identity": null;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Format: uint64. minimum: 1. */
    "version": number;
};
/** A response containing `BuyerCustomer` data. */
export type BuyerCustomerResponse = {
    /** A merchant's customer profile. */
    "data": BuyerCustomer;
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
 * Buyer-facing details of a local delivery fulfillment: courier, timing, and tracking. Some fields
 * are omitted for credentials that don't act for the verified customer.
 */
export type BuyerDeliveryFulfillmentDetails = {
    /** Carrier responsible for the local delivery. */
    "carrier"?: string;
    /** Time at which the courier collected the order. Format: date-time. */
    "courier_pickup_at"?: string;
    /**
     * Width of the promised courier pickup window, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: number;
    /** Delivery network or merchant fleet provider handling the job. maxLength: 255. */
    "courier_provider_name"?: string;
    /** Buyer-safe support number for the courier or merchant fleet. maxLength: 30. */
    "courier_support_phone"?: string;
    /** When the items were delivered, in RFC3339 format. Format: date-time. */
    "delivered_at"?: string;
    /** When the delivery was dispatched, in RFC3339 format. Format: date-time. */
    "dispatched_at"?: string;
    /**
     * Driver-facing notes for the final handoff. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. maxLength: 2048.
     */
    "dropoff_notes"?: string;
    /** Deadline after which an undelivered job should enter merchant review. Format: date-time. */
    "expires_at"?: string;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified.
     */
    "instructions"?: string;
    /**
     * Whether the buyer requested a no-contact handoff. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified.
     */
    "no_contact"?: boolean;
    /**
     * Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number;
    /** Time at which the order became ready for courier pickup. Format: date-time. */
    "ready_at"?: string;
    /** Timezone used to display the local delivery window. */
    "timezone"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     */
    "tracking_url"?: string;
    /** End of the promised delivery window, in RFC3339 format. Format: date-time. */
    "window_end_at"?: string;
    /** Start of the promised delivery window, in RFC3339 format. Format: date-time. */
    "window_start_at"?: string;
};
/**
 * Guidance for recovering from a payment error: whether and how to retry (`retry`), and optional
 * next steps.
 */
export type BuyerErrorRemediation = {
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
 * An order summary in a buyer response, with order status and totals. Recorded buyer contact is
 * omitted.
 */
export type BuyerExpandedOrderSummary = {
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
 * A subscription plan expanded on a buyer's order: billing interval, setup fee, trial length,
 * status, and line items.
 */
export type BuyerExpandedSubscriptionPlanSummary = {
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
     *  [] (Value): {@link BuyerSubscriptionPlanLineItem}. A line item of a subscription plan as a
     * buyer sees it: the product, bundle, or variant, quantity, unit price, and swap variants.
     */
    "line_items"?: Array<BuyerSubscriptionPlanLineItem>;
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
 * An independent card saved with Flint that the current buyer can set up at this store. Store
 * copies have their own consent and lifecycle.
 */
export type BuyerFlintWalletCard = {
    /**
     * Card details on a payment method: brand, expiration month and year, last four digits, and
     * the wallet when one was used.
     */
    "card": CardDetails;
    /**
     * Opaque handle for this card at this store. Handles differ across stores and cannot be used
     * at another store.
     */
    "flint_wallet_card_id": string;
    /**
     * The store's independent card copy, or null when this store does not hold a copy. A pending
     * copy still needs confirmation before use.
     */
    "store_payment_method_id": string | null;
};
/** A page of `BuyerFlintWalletCard` objects. */
export type BuyerFlintWalletCardListResponse = {
    /**
     *  [] (Value): {@link BuyerFlintWalletCard}. An independent card saved with Flint that the
     * current buyer can set up at this store. Store copies have their own consent and lifecycle.
     */
    "data": Array<BuyerFlintWalletCard>;
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
 * The state of a request to save a payment method in the signed-in buyer's Flint wallet, with the
 * client setup data needed to finish it.
 */
export type BuyerFlintWalletStoreSetup = {
    /**
     *  anyOf[1] (Value): {@link StripeClientSetup}. Stripe.js setup authority returned while
     * saving a payment method. Follow its stripe_js_call now. setup_collection is guidance instead
     * and never carries a secret. anyOf[2] (Value): null.
     */
    "client_setup": ((StripeClientSetup) | (null));
    "payment_method_id": string;
    /** Value enum: "pending", "active", "failed", "expired". */
    "status": "pending" | "active" | "failed" | "expired" | (string & {});
    "store_setup_id": string;
};
/** A response containing `BuyerFlintWalletStoreSetup` data. */
export type BuyerFlintWalletStoreSetupResponse = {
    /**
     * The state of a request to save a payment method in the signed-in buyer's Flint wallet, with
     * the client setup data needed to finish it.
     */
    "data": BuyerFlintWalletStoreSetup;
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
/** Work required to deliver an order's items. */
export type BuyerFulfillment = {
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
     * Delivery URL and completion time for a digital fulfillment. Details of a digital
     * fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
     */
    "digital_details"?: DigitalFulfillmentDetails;
    /** First time this fulfillment reached dispatched. Format: date-time. */
    "dispatched_at"?: string;
    /** Stable identifier of the fulfillment. */
    "fulfillment_id": string;
    /**
     * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
     * BuyerFulfillmentLineItem}. An order line item and quantity included in a buyer's
     * fulfillment, with the line's modifiers.
     */
    "line_items": Array<BuyerFulfillmentLineItem>;
    /**
     * Courier, delivery window, and handoff details for a local delivery fulfillment. Buyer-facing
     * details of a local delivery fulfillment: courier, timing, and tracking. Some fields are
     * omitted for credentials that don't act for the verified customer.
     */
    "local_delivery_details"?: BuyerDeliveryFulfillmentDetails;
    /** Order whose items this fulfillment delivers. */
    "order_id": string;
    /**
     * Human-readable number of the order this fulfillment belongs to. Omitted when the order has
     * no number.
     */
    "order_number"?: string;
    /**
     * Terminal outcome details. Present exactly when status is no_show. A terminal outcome
     * recorded on a fulfillment, such as a no-show, with its `reason` and when it occurred.
     */
    "outcome"?: BuyerFulfillmentOutcome;
    /**
     * Packages associated with this fulfillment. [] (Value): {@link ExpandedPackageSummary}. A
     * package on a buyer's fulfillment, with its carrier, status, tracking details, and
     * timestamps. Buyer credentials get no supported actions.
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
     * Buyer-visible fulfillment status. Held fulfillments show their pre-hold status. Value enum:
     * "pending", "in_progress", "ready", "completed", "canceled", "failed", "scheduled",
     * "accepted", "preparing", "picked", "packed", "dispatched", "no_show".
     */
    "status": "pending"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "accepted"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show"
        | (string & {});
    /**
     * Always empty for buyer credentials. maxItems: 0. [] enum: "complete", "cancel", "hold",
     * "start", "mark_ready", "fail", "schedule", "accept", "mark_preparing", "mark_picked",
     * "mark_packed", "dispatch", "mark_no_show", "release_hold". [] (Value): string. Value enum:
     * "complete", "cancel", "hold", "start", "mark_ready", "fail", "schedule", "accept",
     * "mark_preparing", "mark_picked", "mark_packed", "dispatch", "mark_no_show", "release_hold".
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
    /** Value enum: "shipment", "pickup", "local_delivery", "digital", "service". */
    "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
    /** When the fulfillment was last updated, in RFC3339 format. Format: date-time. */
    "updated_at"?: string;
    /** Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
};
/** An action recorded during an order's fulfillment. */
export type BuyerFulfillmentEvent = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Value enum: "pending", "in_progress", "ready", "completed", "canceled", "failed",
     * "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show",
     * "created", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted",
     * "exception", "returned", "voided".
     */
    "current_status"?: "pending"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "accepted"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show"
        | "created"
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
     * Value enum: "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery",
     * "delivered", "delivery_attempted", "tracking_updated", "exception", "returned", "custom",
     * "accepted", "preparing", "picked", "packed", "ready", "dispatched", "completed", "canceled",
     * "failed", "no_show".
     */
    "event_type": "carrier_scan"
        | "status_changed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "tracking_updated"
        | "exception"
        | "returned"
        | "custom"
        | "accepted"
        | "preparing"
        | "picked"
        | "packed"
        | "ready"
        | "dispatched"
        | "completed"
        | "canceled"
        | "failed"
        | "no_show"
        | (string & {});
    "fulfillment_event_id": string;
    "fulfillment_id": string;
    "location_description"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    "order_id": string;
    "package_id"?: string;
    /**
     * Value enum: "pending", "in_progress", "ready", "completed", "canceled", "failed",
     * "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show",
     * "created", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted",
     * "exception", "returned", "voided".
     */
    "previous_status"?: "pending"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "accepted"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show"
        | "created"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided"
        | (string & {});
    "shipment_id"?: string;
};
/** A page of `BuyerFulfillmentEvent` objects. */
export type BuyerFulfillmentEventListResponse = {
    /**
     *  [] (Value): {@link BuyerFulfillmentEvent}. An action recorded during an order's
     * fulfillment.
     */
    "data": Array<BuyerFulfillmentEvent>;
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
/** An order line item and quantity included in a buyer's fulfillment, with the line's modifiers. */
export type BuyerFulfillmentLineItem = {
    /**
     * Modifier selections snapshotted from the order line for fulfillment. [] (Value): {@link
     * BuyerOrderLineItemModifier}. A modifier on a buyer's order line item, either a catalog
     * modifier or entered text, with its quantity and price change.
     */
    "modifiers"?: Array<BuyerOrderLineItemModifier>;
    /** Order line whose quantity is allocated to the fulfillment. */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
};
