import type { ReturnLineItemRequestInput } from './types-56.js';
import type {
    BuyerReturnReplacementLineItemRequest,
    BuyerReturnReplacementLineItemRequestInput,
    BuyerSetupCollection,
    BuyerPaymentErrorSummary,
    BuyerPaymentCollectionStripe
} from './types-3.js';
import type { ReturnResolutionLineItemRequest, ReturnResolutionLineItemRequestInput } from './types-57.js';
import type { CreditNoteLineItem } from './types-14.js';
import type { MoneyValue, OrderAuthorizationAmounts, OrderCalculatedChargeTax, OrderCalculatedLineItemTax } from './types-39.js';
import type { TaxCurrencyConversion, TaxIdentity, TaxReverseCharge, TextModifierRequest } from './types-65.js';
import type { ResponseMeta } from './types-54.js';
import type { Address } from './types-0.js';
import type { ErrorResourceReference } from './types-24.js';
import type { DeferredPromotion, DeliveryChargeTaxCalculationRequest } from './types-17.js';
import type {
    OrderSettlementAmounts,
    OrderReturnCreditSettlement,
    OrderLineItemFulfillmentQuantities,
    OrderLineItemFulfillmentRequirements,
    OrderLineSubscriptionOfferSummary,
    OrderPaymentAttemptPaymentMethodSave
} from './types-41.js';
import type { PricingAmounts } from './types-50.js';
import type { BuyerSubscriptionPlanLineItem, BuyerTip } from './types-4.js';
import type { SubscriptionIntervalOption } from './types-62.js';
import type { CardDetails, CheckoutMerchantSupport, CheckoutBuyerContact, CategoryReference } from './types-5.js';
import type { StripeClientSetup, ShipmentFulfillmentDetails, SubscribedLine } from './types-60.js';
import type { FulfillmentChargeLink, FulfillmentRecipient } from './types-25.js';
import type { PickupFulfillmentDetails, PendingPaymentAction } from './types-49.js';
import type { ServiceFulfillmentDetails, SelectedProductOption } from './types-59.js';
import type { BuyerAction, BundleComponent } from './types-1.js';
import type { CheckoutTheme } from './types-6.js';
import type { Image } from './types-28.js';
import type { InvoiceDocumentRow, InvoiceLateFeePolicy, InvoiceDiscount, InvoiceLineItem } from './types-32.js';
import type { InvoicePaymentAttempt, InvoicePaymentOptionCostComparison, InvoicePaymentTermsSnapshot } from './types-33.js';
import type { InvoiceScheduleEntry, InvoiceTip } from './types-34.js';
import type {
    OrderCharge,
    OrderDeliveryDestination,
    OrderDeliverySummary,
    OrderDiscount,
    OrderGiftCardEstimate,
    OrderGiftCardSelection,
    OrderGiftCardSettlement
} from './types-40.js';
import type { TaxBreakdown } from './types-64.js';
import type { TicketedEvent } from './types-66.js';
import type { Dimensions } from './types-23.js';
import type { GiftCardPurchaseSnapshot } from './types-27.js';
import type { LineItemInventorySnapshot } from './types-35.js';
import type { PurchasedGiftCard } from './types-52.js';
import type { Weight } from './types-70.js';
import type { PaymentAttemptGiftCardRedemption } from './types-44.js';
import type { CustomerTaxExemptionCoverage } from './types-16.js';
import type { ReturnHandoffRequirementLineItem } from './types-55.js';
/** The request body for: Create a Return for the current buyer. */
export type BuyerCreateReturnRequestInput = {
    /**
     * The lines to check or return, each naming an order line item. minItems: 1. maxItems: 100. []
     * (Value): {@link ReturnLineItemRequestInput}. An order line item to return, with the
     * quantity, return reason, and optionally a note and the resolution the buyer wants.
     */
    "line_items": Array<ReturnLineItemRequestInput>;
    /**
     * ID of the Order to return items from. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
};
/**
 * The buyer's proposed resolution type, returned quantities, and replacement items to preview for
 * a Return.
 */
export type BuyerCreateReturnResolutionPreviewRequest = ({
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. minItems: 1.
     * [] (Value): {@link ReturnResolutionLineItemRequest}. A return line and quantity to include
     * in a return resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link BuyerReturnReplacementLineItemRequest}. A catalog variant or bundle and
     * quantity the buyer requests as a replacement in a Return resolution preview.
     */
    "replacement_line_items"?: Array<BuyerReturnReplacementLineItemRequest>;
    /**
     * The proposed resolution type. For store_credit, send a nonempty line_items list and omit
     * replacement_line_items. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
});
/**
 * The buyer's proposed resolution type, returned quantities, and replacement items to preview for
 * a Return.
 */
export type BuyerCreateReturnResolutionPreviewRequestInput = ({
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. minItems: 1.
     * [] (Value): {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to
     * include in a return resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link BuyerReturnReplacementLineItemRequestInput}. A catalog variant or bundle and
     * quantity the buyer requests as a replacement in a Return resolution preview.
     */
    "replacement_line_items"?: Array<BuyerReturnReplacementLineItemRequestInput>;
    /**
     * The proposed resolution type. For store_credit, send a nonempty line_items list and omit
     * replacement_line_items. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
});
/**
 * The buyer-visible view of a credit note. Drafts are never returned, and how much credit is left
 * to allocate is omitted.
 */
export type BuyerCreditNote = {
    /**
     * Identity frozen on the source invoice at issue. Later profile edits do not change this
     * document. `null` when no buyer tax identity was captured on the source invoice. Customer
     * deletion preserves identities captured on issued invoices and credit notes. anyOf[1]
     * (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
     * credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for
     * an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other
     * IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing
     * the array requires the parent's expected_version. Existing entries retain their
     * document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value):
     * null.
     */
    "buyer_tax_identity": ((TaxIdentity) | (null));
    /** Unique identifier of the credit note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H". */
    "credit_note_id": string;
    /** Assigned at issue and stable from then on. Absent while the credit note is a draft. */
    "credit_note_number": string;
    /** The invoice this credit note corrects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
    "invoice_id": string;
    /** When the credit note was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "issued_at": string;
    /**
     * Status of the most recent refund linked to this credit note. Absent when no refund has been
     * requested. Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     */
    "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
    /**
     * Itemized corrections against frozen invoice lines. Amount and quantity corrections share
     * each source line's remaining value, discount, and tax across issued credit notes that have
     * not been voided. Drafts reserve no credit. [] (Value): {@link CreditNoteLineItem}. One
     * correction calculated from the frozen invoice line's remaining billed value, discount, and
     * tax. The source line's inclusive or additive tax mode is preserved. Current catalog prices
     * and tax settings do not affect the correction. Stored issued values are never recalculated
     * by a read.
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
     * document. `null` when no seller tax identity was captured. anyOf[1] (Value): {@link
     * TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit notes. Flint
     * does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ
     * destination to its tax provider, which can apply a reverse charge; other IDs do not change
     * tax treatment. Tax IDs are an owned collection in display order; replacing the array
     * requires the parent's expected_version. Existing entries retain their document_tax_id; omit
     * an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     */
    "seller_tax_identity": ((TaxIdentity) | (null));
    /**
     * issued once it is numbered and frozen, voided once withdrawn. Value enum: "issued",
     * "voided".
     */
    "status": "issued" | "voided" | (string & {});
    /**
     * The credit note's VAT stated in the currency of the country that charges it, frozen at
     * issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source
     * from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount
     * converted the same way. Always [] on drafts and when the invoice froze no conversion. The
     * credit note PDF prints the same figures. [] (Value): {@link TaxCurrencyConversion}. VAT on
     * an issued document converted into the currency of the country whose VAT is charged.
     */
    "tax_currency_conversions": Array<TaxCurrencyConversion>;
    /**
     * The face value of the credit note, the sum of its lines. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * When the credit note was voided. Absent unless its status is voided. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "voided_at"?: string;
};
/** A page of `BuyerCreditNote` objects. */
export type BuyerCreditNoteListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerCreditNote}. The buyer-visible view of a credit note. Drafts are never returned, and
     * how much credit is left to allocate is omitted.
     */
    "data": Array<BuyerCreditNote>;
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
/** A response containing `BuyerCreditNote` data. */
export type BuyerCreditNoteResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The buyer-visible view
     * of a credit note. Drafts are never returned, and how much credit is left to allocate is
     * omitted.
     */
    "data": BuyerCreditNote;
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Unique identifier for this customer, prefixed `cus_`. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * ID of the customer's default off-session payment method. `null` when none is set. Example:
     * "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "default_payment_method_id": string | null;
    /**
     * Customer email. `null` when the customer has none. Unique among the environment's customers.
     */
    "email": string | null;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /** Customer name. `null` when none is set. */
    "name": string | null;
    /** Customer phone number. `null` when none is set. */
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
    /**
     * Where the customer is in the deletion lifecycle. Value enum: "active",
     * "deletion_processing", "deleted".
     */
    "status": "active" | "deletion_processing" | "deleted" | (string & {});
    /** `null` when the caller is a customer session, which never sees the tax identity. */
    "tax_identity": null;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** A request to delete a customer's personal information. */
export type BuyerCustomerDeletionRequest = {
    /**
     * Total resources currently preventing approval, including resources beyond the
     * blocking_resources cap. Present only for pending_review, including zero when nothing blocks
     * approval. Computed at read time using the same rule as approval. Format: int64. minimum: 0.
     */
    "blocking_resource_count"?: number;
    /**
     * Resources currently preventing approval, computed when the request is read. Present only for
     * pending_review, including an empty array when nothing blocks approval. Uses the same
     * references as RESOURCE_IN_USE: non-canceled subscriptions and active or pending payment
     * methods, ordered by resource_type then resource_id, capped at 25 of each type. List the
     * customer's subscriptions and payment methods for the remaining resources when
     * blocking_resource_count exceeds this array's length. Approval rechecks the blockers;
     * cancel_subscriptions and remove_payment_methods can clear the matching resources before
     * erasure. [] (Value): {@link ErrorResourceReference}. A reference to a public resource named
     * in an error, with its type, ID, and current status when available.
     */
    "blocking_resources"?: Array<ErrorResourceReference>;
    /**
     * Subscription IDs whose immediate cancellation completed for this request, sorted by ID.
     * Empty when none have completed. Read the request again while processing to see progress. []
     * (Value): string. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "canceled_subscription_ids": Array<string>;
    /**
     * Stable ID of the tracked deletion request. Use it to retrieve the review and erasure status.
     * Example: "cdel_01KEZF7C009P94WEXW5RMRFXAY".
     */
    "customer_deletion_request_id": string;
    /** ID of the customer the request would erase. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id": string;
    /**
     * Time of the most recent approve or reject decision. `null` when the request is
     * pending_review or when a pre-existing decision time cannot be determined. Approval sets this
     * before asynchronous erasure finishes; retry approval sets it again. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "decided_at": string | null;
    /**
     * Merchant's plain-text explanation for rejecting the request, visible to the buyer. `null`
     * when no reason was provided or the customer's personal data has since been erased.
     */
    "decision_reason": string | null;
    /**
     * Payment method IDs whose archival completed for this request, sorted by ID. Empty when none
     * have completed. Read the request again while processing to see progress. [] (Value): string.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "removed_payment_method_ids": Array<string>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "requested_at": string;
    /**
     * Who opened the request: buyer from the buyer account, or merchant on the buyer's behalf.
     * `null` when the source of a pre-existing request cannot be determined. Value enum: "buyer",
     * "merchant", null.
     */
    "requested_by": "buyer" | "merchant" | null | (string & {}) | null;
    /**
     * Unlike decided_at, which records the merchant's decision, this is the time of the most
     * recent resolved outcome: rejected, completed, or failed. Absent while pending_review or
     * processing. Cleared when a failed request is approved again. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "resolved_at"?: string;
    /**
     * Requested time plus one calendar month in UTC, clamped to the last day of that month. This
     * is the deadline for responding to the buyer's request. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "response_due_at": string;
    /**
     * What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes,
     * payments, and refunds stay for accounting, tax, and disputes, without the customer's email
     * address or phone number. Issued invoices and credit notes keep the buyer name, billing
     * address, and tax ID they were issued with, because tax law requires them. Orders keep the
     * delivery recipient's name and address. Contact copies created while deletion is finishing
     * are erased within minutes, with another check about 24 hours later. Value enum:
     * "retain_required_commerce_records".
     */
    "retention_policy": "retain_required_commerce_records" | (string & {});
    /**
     * Where the request is in review and erasure. Value enum: "pending_review", "processing",
     * "completed", "rejected", "failed".
     */
    "status": "pending_review" | "processing" | "completed" | "rejected" | "failed" | (string & {});
};
/** A page of tracked customer deletion requests. */
export type BuyerCustomerDeletionRequestListResponse = {
    /**
     * Deletion requests matching the supplied filters, in the published list order. [] (Value):
     * {@link BuyerCustomerDeletionRequest}. A request to delete a customer's personal information.
     */
    "data": Array<BuyerCustomerDeletionRequest>;
    /**
     * Metadata about this response, including warnings when present. Metadata returned with a
     * response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any
     * warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque cursor to pass as page_token to fetch the next page. Omitted when no more results
     * remain.
     */
    "next_page_token"?: string;
    /**
     * ID of this API request. Include it when asking Flint to investigate the response. maxLength:
     * 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A tracked deletion request and metadata about the API response. */
export type BuyerCustomerDeletionRequestResponse = {
    /**
     * The tracked request to review and erase this customer's personal data. A request to delete a
     * customer's personal information.
     */
    "data": BuyerCustomerDeletionRequest;
    /**
     * Metadata about this response, including idempotency replay and warnings when present.
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * ID of this API request. Include it when asking Flint to investigate the response. maxLength:
     * 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `BuyerCustomer` data. */
export type BuyerCustomerResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A merchant's customer
     * profile.
     */
    "data": BuyerCustomer;
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
 * A credential for the /v1/me routes that acts as one customer. Unless it came from an access
 * link, its secret can read and change that customer's orders, payments, subscriptions, saved
 * payment methods, addresses, returns, and invoices, and request account deletion.
 */
export type BuyerCustomerSession = {
    /** When the session was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** ID of the customer the session acts as. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id": string;
    /**
     * ID of this session. Use it to tell sessions apart; it is not a credential. Example:
     * "cses_01KEZF7C00FBVRP25FZTW7KWZV".
     */
    "customer_session_id": string;
    /**
     * When the current secret stops authenticating account calls. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /** When the refresh token expires. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "refresh_token_expires_at": string;
    /**
     * When the session was first revoked. Present exactly when status is revoked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "revoked_at"?: string;
    /**
     * active means the session can be refreshed and its secret works until expires_at; revoked
     * means none of its credentials work. Value enum: "active", "revoked".
     */
    "status": "active" | "revoked" | (string & {});
};
/** A customer session's state without its authentication credentials. */
export type BuyerCustomerSessionResponse = {
    /**
     * The customer session, including its status and credential expiry times. A credential for the
     * /v1/me routes that acts as one customer. Unless it came from an access link, its secret can
     * read and change that customer's orders, payments, subscriptions, saved payment methods,
     * addresses, returns, and invoices, and request account deletion.
     */
    "data": BuyerCustomerSession;
    /**
     * Metadata about this response, including idempotency replay and warnings when present.
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * ID of this API request. Include it when asking Flint to investigate the response. maxLength:
     * 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
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
    /**
     * Time at which the courier collected the order. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
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
    /**
     * When the items were delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "delivered_at"?: string;
    /**
     * Time by which the order should be delivered. Passing it does not change status or emit an
     * event automatically; the merchant decides how to follow up. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "delivery_due_at"?: string;
    /**
     * When the delivery was dispatched, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "dispatched_at"?: string;
    /**
     * Driver-facing notes for the final handoff. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. maxLength: 2048.
     */
    "dropoff_notes"?: string;
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
    /**
     * Time at which the order became ready for courier pickup. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "ready_at"?: string;
    /** Timezone used to display the local delivery window. Uses an IANA time zone name. */
    "timezone"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     */
    "tracking_url"?: string;
    /**
     * End of the promised delivery window, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string;
    /**
     * Start of the promised delivery window, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string;
};
/**
 * Buyer-facing details of a digital fulfillment: when it was delivered and the download link,
 * which is `null` once the buyer no longer has download access.
 */
export type BuyerDigitalFulfillmentDetails = {
    /**
     * When the digital goods were delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "delivered_at"?: string;
    /**
     * URL where the buyer can access the delivered digital goods. Omitted when the merchant hasn't
     * set one. `null` when the buyer no longer has download access, for example after the covered
     * lines are refunded.
     */
    "delivery_url"?: string | null;
};
/**
 * Nested child of Customer. A request to change this customer's sign-in email. Only one request
 * can be pending per customer.
 */
export type BuyerEmailChangeRequest = {
    /**
     * When a person canceled this request or a newer request replaced it. Null when it has not
     * been canceled or replaced. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "canceled_at": string | null;
    /**
     * When the customer email changed. Null when the request has not been confirmed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "confirmed_at": string | null;
    /** When Flint recorded the request. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Whether the customer must also confirm a code sent to their current address. False for
     * requests started by store staff or integrations.
     */
    "current_email_confirmation_required": boolean;
    /**
     * Flint ID of the customer whose email would change. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * Flint ID of this customer's email change request. Example:
     * "cecr_01KEZF7C00B8VJX4M828K0430H".
     */
    "email_change_request_id": string;
    /**
     * When the request expires if it has not been confirmed or canceled. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Returned only by confirm, to customer sessions that can access cards saved with Flint after
     * a live email-code sign-in at a Flint-hosted account. Omitted when the previous email had no
     * saved cards. Never returned to merchant credentials. Value enum: "moved", "kept",
     * "new_email_has_wallet".
     */
    "flint_wallet_outcome"?: "moved" | "kept" | "new_email_has_wallet" | (string & {});
    /**
     * The proposed email address. Null when the request is confirmed, canceled, or expired.
     * Format: email. Example: "buyer@example.com".
     */
    "new_email": string | null;
    /** Who started this email change request. Value enum: "buyer", "merchant", "integration". */
    "requested_by": "buyer" | "merchant" | "integration" | (string & {});
    /**
     * The request's current confirmation state. Value enum: "pending", "confirmed", "canceled",
     * "expired".
     */
    "status": "pending" | "confirmed" | "canceled" | "expired" | (string & {});
};
/** A response containing `BuyerEmailChangeRequest` data. */
export type BuyerEmailChangeRequestResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Nested child of
     * Customer. A request to change this customer's sign-in email. Only one request can be pending
     * per customer.
     */
    "data": BuyerEmailChangeRequest;
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
 * Guidance for recovering from a payment error: whether and how to retry (`retry`), and optional
 * next steps.
 */
export type BuyerErrorRemediation = {
    /** What to change or check before attempting the operation again. */
    "next_steps"?: string;
    /**
     * Whether sending this request again can succeed, and how. It depends only on code and
     * details[0].reason; the errors reference lists the value for each. Value enum:
     * "same_request", "after_refresh", "none".
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
     * never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "closed_at"?: string;
    /**
     * Why the order closed. Present exactly when status is closed. Set once at closure.
     * Unrecognized reasons are returned as other; new values may be added. Value enum:
     * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
     * "superseded", "return_resolution_canceled", "other".
     */
    "closed_reason"?: "invoice_voided"
        | "paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other"
        | (string & {});
    /**
     * When the order was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * Customer associated with the order, when one is set. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Promotions accepted at subscription signup. They attach when the subscription is provisioned
     * and first discount its first charged cycle. They do not discount this order and are separate
     * from discounts and order totals. Always present; empty when no promotions are deferred. []
     * (Value): {@link DeferredPromotion}. A promotion accepted at subscription signup for the
     * subscription's first charged cycle. It does not discount the signup order.
     */
    "deferred_promotions": Array<DeferredPromotion>;
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
     * order. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "governing_delivery_selection_id": string | null;
    /** Stable identifier of the expanded order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /** Human-readable order number for receipts and merchant reference. */
    "order_number"?: string;
    /**
     * When `payment_status` became `paid`, including a final capture that releases the remaining
     * balance. Set once and never changed, including after refunds. `null` when `payment_status`
     * isn't `paid`, including an order whose balance was written off without being paid. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "paid_at": string | null;
    /**
     * Payment intents associated with the order. [] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
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
     * Refund progress for collected money. Refunds with `reason` `payment_returned` return money
     * the order never received and don't count. Value enum: "none", "partially_refunded",
     * "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Payments, refunds, credits, and amounts still owed for the order. The bill settlement
     * amounts plus order overpayments, settled tips, debt discharged by final capture, and value
     * order edits removed. Money collected, returned, waived, and still owed on a bill.
     */
    "settlement_amounts": OrderSettlementAmounts;
    /**
     * Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes,
     * returns, and metadata or note edits continue on a closed order. Value enum: "open",
     * "closed".
     */
    "status": "open" | "closed" | (string & {});
    /**
     * When the order was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
};
/**
 * A package on a buyer's fulfillment, with its carrier, status, tracking details, and timestamps.
 * Buyer credentials get no supported actions.
 */
export type BuyerExpandedPackageSummary = {
    /** Carrier transporting the package. */
    "carrier"?: string;
    /**
     * When the package was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * When the package was delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "delivered_at"?: string;
    /**
     * When the carrier or merchant expects this package to arrive. Null when no estimate is set.
     * Retained after delivery as history. This estimate is separate from the fulfillment's
     * promised shipment window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /** Fulfillment whose items are in the package. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id": string;
    /** Stable identifier of the expanded package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
    "package_id": string;
    /** Carrier service used for the package. */
    "service_code"?: string;
    /** Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
    /**
     * When the package was shipped, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
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
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified.
     */
    "tracking_number"?: string;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified.
     */
    "tracking_url"?: string;
    /**
     * When the package was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /** Monotonic package version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
};
/** A buyer-visible shipment summary, with its direction, status, and package count. */
export type BuyerExpandedShipmentSummary = {
    /**
     * When the shipment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * When the shipment was delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "delivered_at"?: string;
    /**
     * Whether the shipment sends items to the buyer or returns items to the merchant. Value enum:
     * "outbound", "return".
     */
    "direction": "outbound" | "return" | (string & {});
    /** Fulfillment associated with this shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id": string;
    /**
     * When the carrier accepted the shipment, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "handed_off_at"?: string;
    /**
     * Total number of packages attached to the shipment, including voided packages. Format: int32.
     * minimum: 0.
     */
    "package_count": number;
    /**
     * ID of the Return this shipment sends back. Present only on return shipments. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /** Stable identifier of the expanded shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
    /**
     * When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
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
    /**
     * When the shipment was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
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
     * Offered billing interval and count pairs, including the plan's default pair. Prices of lines
     * that ship are per delivery. Each option charges for all deliveries in its period. Use
     * separate plans or promotions for different prices per interval. maxItems: 12. uniqueItems:
     * true. [] (Value): {@link SubscriptionIntervalOption}. A billing interval, such as every 2
     * months, that a plan, offer, or subscription lets buyers choose. Prices of lines that ship
     * are per delivery, and each option charges for all deliveries in its period. Without a
     * delivery cadence there is one delivery per period, so every option bills the same line
     * prices once per period. With a delivery cadence, a longer period bills more deliveries of
     * the lines that ship; other lines bill once per period. For a different price per interval
     * with no delivery cadence, create separate plans.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at"?: string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    "description"?: string;
    /**  [] (Value): {@link BuyerSubscriptionPlanLineItem}. A line item on a subscription plan. */
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
    /**
     * Unique identifier for this subscription plan, prefixed `plan_`. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
    /** Format: int32. */
    "trial_period_days"?: number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at"?: string;
};
/**
 * An independent card saved with Flint that the current buyer can set up at this store. Store
 * copies have their own consent and lifecycle.
 */
export type BuyerFlintWalletCard = {
    /**
     * Brand, last four digits and expiry of the saved card. Card details on a payment method:
     * brand, expiration month and year, last four digits, and the wallet when one was used.
     */
    "card": CardDetails;
    /**
     * Opaque handle for this card at this store. Handles differ across stores and cannot be used
     * at another store. Example: "fwc_EKAB7CMBXELKYMJUU2LYLJP5J25FESR6YR5WENVFIUZHTTG3BZWA".
     */
    "flint_wallet_card_id": string;
    /**
     * The store's independent card copy. `null` when this store does not hold a copy. A pending
     * copy still needs confirmation before use. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "store_payment_method_id": string | null;
};
/** A list of `BuyerFlintWalletCard` objects. */
export type BuyerFlintWalletCardListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerFlintWalletCard}. An independent card saved with Flint that the current buyer can set
     * up at this store. Store copies have their own consent and lifecycle.
     */
    "data": Array<BuyerFlintWalletCard>;
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
    /**
     * ID of the store's card copy this setup creates. The copy can be used for payments once
     * `status` is `active`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id": string;
    /**
     * Whether the store's copy of the card is ready to use. Value enum: "pending", "active",
     * "failed", "expired".
     */
    "status": "pending" | "active" | "failed" | "expired" | (string & {});
    /**
     * Unique identifier for this flint wallet store setup, prefixed `fwss_`. Example:
     * "fwss_01KEZF7C003N5D2C3AVYZ5VMEQ".
     */
    "store_setup_id": string;
};
/** A response containing `BuyerFlintWalletStoreSetup` data. */
export type BuyerFlintWalletStoreSetupResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The state of a request
     * to save a payment method in the signed-in buyer's Flint wallet, with the client setup data
     * needed to finish it.
     */
    "data": BuyerFlintWalletStoreSetup;
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
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "completed_at"?: string;
    /**
     * When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * Customer receiving this fulfillment, when one is set. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Delivery URL and completion time for a digital fulfillment. Buyer-facing details of a
     * digital fulfillment: when it was delivered and the download link, which is `null` once the
     * buyer no longer has download access.
     */
    "digital_details"?: BuyerDigitalFulfillmentDetails;
    /**
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "dispatched_at"?: string;
    /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
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
    /** Order whose items this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
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
     * Packages associated with this fulfillment. [] (Value): {@link BuyerExpandedPackageSummary}.
     * A package on a buyer's fulfillment, with its carrier, status, tracking details, and
     * timestamps. Buyer credentials get no supported actions.
     */
    "packages"?: Array<BuyerExpandedPackageSummary>;
    /**
     * First time this fulfillment reached packed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "packed_at"?: string;
    /**
     * First time this fulfillment reached picked. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
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
     * the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
     * Shipments associated with this fulfillment. [] (Value): {@link
     * BuyerExpandedShipmentSummary}. A buyer-visible shipment summary, with its direction, status,
     * and package count.
     */
    "shipments"?: Array<BuyerExpandedShipmentSummary>;
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
     * When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
     * records the state transition; completed_at records completion evidence supplied for the
     * fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "terminal_at"?: string;
    /**
     * How the items are delivered: shipment, pickup, local delivery, digital delivery, or service.
     * Value enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     */
    "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
    /**
     * When the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
    /** Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
};
/** An action recorded during an order's fulfillment. */
export type BuyerFulfillmentEvent = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Status of the same subject immediately after this event, using the vocabulary selected by
     * subject_type. This is the status recorded at occurred_at, which may differ from the
     * resource's current status. Omitted when the event does not record a status change. Value
     * enum: "pending", "in_progress", "ready", "completed", "canceled", "failed", "scheduled",
     * "accepted", "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
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
     * The delivery or fulfillment event recorded by this entry. - `carrier_scan`: A carrier
     * reported a tracking observation. - `status_changed`: The fulfillment, shipment, or package
     * changed status; current_status and previous_status identify the transition and subject_type
     * identifies the resource. - `shipped`: The package was handed to the carrier. - `in_transit`:
     * The package is moving through the carrier's network. - `out_for_delivery`: The package is on
     * its final delivery route. - `delivered`: The package reached its destination. -
     * `delivery_attempted`: The carrier attempted delivery without completing it. -
     * `tracking_updated`: The package's tracking information changed. - `exception`: A delivery
     * problem interrupted the package's progress. - `returned`: The package was returned to its
     * sender. - `custom`: The merchant or its integration recorded a custom observation. Value
     * enum: "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery",
     * "delivered", "delivery_attempted", "tracking_updated", "exception", "returned", "custom".
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
        | (string & {});
    /**
     * Unique identifier for this fulfillment event, prefixed `fev_`. Example:
     * "fev_01KEZF7C002XK9D7X3239ERT51".
     */
    "fulfillment_event_id": string;
    /** ID of the fulfillment the event belongs to. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id": string;
    /** Where the event happened, such as `Louisville, KY`. */
    "location_description"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /** ID of the order the fulfillment belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * ID of the package the event is attached to. Absent when it isn't attached to a package.
     * Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     */
    "package_id"?: string;
    /**
     * Status of the subject immediately before this event. subject_type selects the fulfillment,
     * shipment, or package status vocabulary; fulfillment_id, shipment_id, or package_id
     * identifies that resource. Omitted when the event does not record a status change. Value
     * enum: "pending", "in_progress", "ready", "completed", "canceled", "failed", "scheduled",
     * "accepted", "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
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
    /**
     * ID of the shipment the event is attached to. Absent when it isn't attached to a shipment.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: string;
};
/** A page of `BuyerFulfillmentEvent` objects. */
export type BuyerFulfillmentEventListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerFulfillmentEvent}. An action recorded during an order's fulfillment.
     */
    "data": Array<BuyerFulfillmentEvent>;
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
/** An order line item and quantity included in a buyer's fulfillment, with the line's modifiers. */
export type BuyerFulfillmentLineItem = {
    /**
     * Bundle component this row counts, in component units. `null` when the line isn't a bundle
     * component. Look it up in the order line's bundle_components. Example:
     * "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id": string | null;
    /**
     * Modifier selections snapshotted from the order line for fulfillment. [] (Value): {@link
     * BuyerOrderLineItemModifier}. A modifier selected on an order line item.
     */
    "modifiers"?: Array<BuyerOrderLineItemModifier>;
    /** Order that owns the referenced line item. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * Order line whose quantity is allocated to the fulfillment. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /**
     * Whole-number quantity in component units for a bundle component, or line units otherwise;
     * fractional quantities are not supported. Format: int64.
     */
    "quantity": number;
};
/** A page of `BuyerFulfillment` objects. */
export type BuyerFulfillmentListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerFulfillment}. Work required to deliver an order's items.
     */
    "data": Array<BuyerFulfillment>;
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
 * A terminal outcome recorded on a fulfillment, such as a no-show, with its `reason` and when it
 * occurred.
 */
export type BuyerFulfillmentOutcome = {
    /** Time the terminal outcome occurred. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /**
     * Recorded fulfillment outcome, such as a missed service appointment. Value enum: "no_show".
     */
    "outcome_type": "no_show" | (string & {});
    /**
     * Machine-readable reason for the recorded outcome. Value enum: "customer_no_show",
     * "provider_no_show", "location_unavailable", "scheduling_error", "other".
     */
    "reason": "customer_no_show"
        | "provider_no_show"
        | "location_unavailable"
        | "scheduling_error"
        | "other"
        | (string & {});
};
/** A response containing `BuyerFulfillment` data. */
export type BuyerFulfillmentResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Work required to deliver
     * an order's items.
     */
    "data": BuyerFulfillment;
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
/** A prepaid balance a customer can spend with the merchant. */
export type BuyerGiftCard = {
    /**
     * The balance minus reserved value: what can be spent now. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "available_money": MoneyValue;
    /**
     * The posted balance, including value reserved for redemptions in progress. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "balance_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * Unique identifier for this gift card, prefixed `gc_`. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * RFC3339 timestamp. `null` when no value has been loaded onto the card. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "last_loaded_at": string | null;
    /**
     * RFC3339 timestamp. `null` when the card has never been redeemed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "last_redeemed_at": string | null;
    /** Last four characters of the card's current code. minLength: 4. maxLength: 4. */
    "last4": string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Value held for redemptions in progress. It isn't available to other payments until the
     * redemption succeeds or is released. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "reserved_money": MoneyValue;
    /**
     * Where the card is in its lifecycle. Only an `active` card can be spent. Value enum:
     * "pending", "active", "frozen", "closed".
     */
    "status": "pending" | "active" | "frozen" | "closed" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64.
     */
    "version": number;
};
/** A page of `BuyerGiftCard` objects. */
export type BuyerGiftCardListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerGiftCard}. A prepaid balance a customer can spend with the merchant.
     */
    "data": Array<BuyerGiftCard>;
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
/** A response containing `BuyerGiftCard` data. */
export type BuyerGiftCardResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A prepaid balance a
     * customer can spend with the merchant.
     */
    "data": BuyerGiftCard;
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
/** A record of a change to a gift card's balance. */
export type BuyerGiftCardTransaction = {
    /**
     * Signed change to the card's balance: positive amounts add value and negative amounts remove
     * it. `funding_loss_accepted` records a decision and moves 0. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * The card's balance immediately after this transaction. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "balance_after_money": MoneyValue;
    /**
     * The card's balance immediately before this transaction. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "balance_before_money": MoneyValue;
    /**
     * ID of the gift card whose balance this transaction changed. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Unique identifier for this gift card transaction, prefixed `gct_`. Example:
     * "gct_01KEZF7C006Q1VC3M2DXJ6T936".
     */
    "gift_card_transaction_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "posted_at": string;
    /**
     * Position of this transaction in the card's history. It increases by one with each
     * transaction posted to the card. Format: int64.
     */
    "sequence": number;
    /**
     * Kind of movement, such as load, redeem, refund, adjustment, or cash_out. Value enum: "load",
     * "import", "redeem", "refund", "refund_transfer", "adjustment", "cash_out",
     * "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery",
     * "purchase_refund_recovery_transfer".
     */
    "transaction_type": "load"
        | "import"
        | "redeem"
        | "refund"
        | "refund_transfer"
        | "adjustment"
        | "cash_out"
        | "purchase_reversal"
        | "funding_loss_accepted"
        | "purchase_refund_recovery"
        | "purchase_refund_recovery_transfer"
        | (string & {});
};
/** A page of `BuyerGiftCardTransaction` objects. */
export type BuyerGiftCardTransactionListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerGiftCardTransaction}. A record of a change to a gift card's balance.
     */
    "data": Array<BuyerGiftCardTransaction>;
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
 * Controls buyer instructions for a delivery option. Omit it from a method configuration to
 * disable instruction collection.
 */
export type BuyerInstructionsConfig = {
    /** Whether checkout collects buyer instructions. */
    "enabled": boolean;
    /**
     * Checkout field label, without leading or trailing whitespace. Clients use a delivery-type
     * default when omitted. minLength: 1. maxLength: 255.
     */
    "label"?: string;
    /**
     * Checkout field placeholder, without leading or trailing whitespace. Clients use a
     * delivery-type default when omitted. minLength: 1. maxLength: 500.
     */
    "placeholder"?: string;
    /**
     * Whether the buyer must enter instructions before selecting the option. Requires
     * enabled=true.
     */
    "required": boolean;
};
/**
 * Controls buyer instructions for a delivery option. Omit it from a method configuration to
 * disable instruction collection.
 */
export type BuyerInstructionsConfigRequestInput = BuyerInstructionsConfig;
/** A bill issued to a customer. */
export type BuyerInvoice = {
    /**
     * The payment attempt in progress for this invoice, such as a bank debit still processing.
     * Omitted when none is open. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice
     * checkout session result; `GET /v1/me/invoices` omits it. An attempt to collect payment for
     * an invoice.
     */
    "active_payment_attempt"?: InvoicePaymentAttempt;
    /**
     * What changed after the invoice was issued, in display order, such as late fees, payments,
     * credit notes, and write-offs. When present, rows where `is_informational` is `false` sum to
     * `outstanding_money`. The opening `total` row contributes to the sum; the closing
     * `amount_due` row is informational and states it. `[]` when nothing changed or the invoice is
     * voided. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session
     * result; `GET /v1/me/invoices` omits it. [] (Value): {@link InvoiceDocumentRow}. One row of
     * an invoice document, such as a subtotal, discount, tax, late fee, payment, or amount due,
     * with its amount.
     */
    "balance_rows"?: Array<InvoiceDocumentRow>;
    /**
     * What the buyer can do with the invoice: pay. pay is available when a checkout session can
     * take a payment now, and then required. Its due_at deadline is the end of the invoice or
     * installment due_date in the invoice timezone (UTC when absent). [] (Value): {@link
     * BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return they
     * read through /v1/me. Show the actions with is_required as what needs the buyer's attention,
     * and the first available action as the primary action on the resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /** Additional recipients copied on the invoice email and every reminder. [] (Value): string. */
    "cc_emails": Array<string>;
    /**
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "closed_at"?: string;
    /**
     * Whether collection is blocked. While it is inventory_blocked, collection attempts return 409
     * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
     * "inventory_blocked", "resolved".
     */
    "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
    /**
     * How the invoice is collected: buyer_initiated, automatic, or external. Returned by `GET
     * /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET
     * /v1/me/invoices` omits it. Value enum: "buyer_initiated", "automatic", "external".
     */
    "collection_mode"?: "buyer_initiated" | "automatic" | "external" | (string & {});
    /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit
     * isn't included. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "credit_money": MoneyValue;
    /**
     * The part of the balance due now. Without schedule_entries, it equals outstanding_money. With
     * schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose
     * due date has started and that still has a balance, or 0 when there is none. It is the amount
     * the next collect call or checkout session charges. To total everything overdue, add the
     * outstanding_money of the entries whose status is overdue. Always 0 unless the invoice is
     * open or partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "currently_due_money": MoneyValue;
    /**
     * Customer billed by this invoice. Absent when the invoice has no customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The
     * outstanding balance becomes overdue only after this date ends. Automatic collection runs at
     * the later of issue and the start of this date. With payment terms, issue computes this date
     * from issued_at. Absent when there is no due date. Format: date. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when
     * unset.
     */
    "footer": string | null;
    /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
    "invoice_id": string;
    /**
     * Sequential document number assigned when the invoice is issued. Numbering is per merchant,
     * with test and live mode numbered independently.
     */
    "invoice_number"?: string;
    /**
     * Whether the invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     */
    "is_overdue": boolean;
    /**
     * The rows of the invoice's totals as issued, in display order. Rows where `is_informational`
     * is `false` sum to `snapshot.pricing_amounts.total_money`. A closing `total` row is
     * informational and states that sum. Show the rows in order without merging or summing them.
     * Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result;
     * `GET /v1/me/invoices` omits it. [] (Value): {@link InvoiceDocumentRow}. One row of an
     * invoice document, such as a subtotal, discount, tax, late fee, payment, or amount due, with
     * its amount.
     */
    "issue_rows"?: Array<InvoiceDocumentRow>;
    /**
     * When the invoice was issued. Absent on a draft. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "issued_at"?: string;
    /**
     * Late fees assessed after issue, minus waivers, including amounts since paid or written off.
     * Itemized in late_fees. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "late_fee_money": MoneyValue;
    /**
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. [] (Value): {@link
     * BuyerInvoiceLateFee}. A charge assessed because an invoice payment is overdue.
     */
    "late_fees": Array<BuyerInvoiceLateFee>;
    /**
     * Message to the customer, printed on the invoice and PDF. It cannot change after issue.
     * `null` when unset.
     */
    "memo": string | null;
    /**
     * The merchant's square icon, shown in browser tabs and compact headers. Returned by `GET
     * /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET
     * /v1/me/invoices` omits it. An image with its URL, size, and alt text.
     */
    "merchant_icon"?: Image;
    /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * The merchant's logo. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice
     * checkout session result; `GET /v1/me/invoices` omits it. An image with its URL, size, and
     * alt text.
     */
    "merchant_logo"?: Image;
    /**
     * How the buyer can reach the merchant: the support email, phone, and URL the merchant set.
     * Omitted when the merchant set none. Returned by `GET /v1/me/invoices/{invoice_id}` and in
     * the invoice checkout session result; `GET /v1/me/invoices` omits it. The merchant's support
     * contact. Each field is omitted when the merchant has not set it.
     */
    "merchant_support"?: CheckoutMerchantSupport;
    /**
     * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * What is still owed. On an open or partially_paid invoice it is total_money + late_fee_money
     * - paid_money - credit_money, never below zero. 0 on paid, credited, uncollectible, and
     * voided invoices. Refunds and dispute losses don't change it. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * When the invoice most recently became paid. Cleared when status leaves paid and set again on
     * a later paid transition. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "paid_at"?: string;
    /**
     * Payments collected toward this invoice, online or as recorded manual payments, minus
     * reversed payments, including payments toward late fees. Never below zero. Disputes,
     * including losses, don't reduce it. Refunds don't reduce it; they are in refunded_money.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * A payment option that costs the merchant less to accept for this invoice, with the estimated
     * savings. Present when the invoice's payment policy turns on `show_cost_comparison` and Flint
     * can compare the options. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice
     * checkout session result; `GET /v1/me/invoices` omits it. Compares two payment options on an
     * invoice and shows the estimated savings from the lower-cost option.
     */
    "payment_option_cost_comparison"?: InvoicePaymentOptionCostComparison;
    /**
     * Ways the buyer can pay this invoice online, leaving out any option whose limit the amount
     * exceeds. `[]` when it can't be paid online. Returned by `GET /v1/me/invoices/{invoice_id}`
     * and in the invoice checkout session result; `GET /v1/me/invoices` omits it. [] enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * The payment term captured on the draft, with its due date rule and late fee policy. Later
     * changes to the payment term don't affect this invoice. The payment terms saved on an
     * invoice: the term's name, version, due date calculation, and late fee policy.
     */
    "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
    /**
     * The buyer's purchase order number, printed on the invoice and PDF. It cannot change after
     * issue. `null` when unset.
     */
    "po_number": string | null;
    /**
     * Where Flint emails the invoice and its reminders. Email delivery requires it at issue.
     * `null` when unset.
     */
    "recipient_email": string | null;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order
     * number goes in po_number. It cannot change after issue. `null` when unset.
     */
    "reference": string | null;
    /**
     * How much of the collected money has been refunded. It doesn't change status. Value enum:
     * "none", "partially_refunded", "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Money refunded to the buyer after collection. Refunds don't reopen the balance;
     * refund_status summarizes them. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice
     * settings remit-to address. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "remit_to_address"?: Address;
    /**
     * The payment schedule, in schedule order. Always [] when the invoice has no schedule and is
     * collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One payment on an
     * invoice's payment schedule, such as a deposit, installment, or balance, with its due time,
     * amounts, and status.
     */
    "schedule_entries": Array<InvoiceScheduleEntry>;
    /**
     * When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared
     * when the draft is issued or voided, or when you send null. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_issue_at": string | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. `null` when unset. Format: date. Example:
     * "2026-08-02".
     */
    "service_date": string | null;
    /**
     * Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when
     * the merchant's agreement with Flint removes it. Returned by `GET
     * /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET
     * /v1/me/invoices` omits it.
     */
    "show_flint_mark"?: boolean;
    /**
     * The billing content of the invoice: line items, discounts, charges, tip, tax, and totals,
     * frozen at issue. Invoice details captured at issue. Buyer views omit merchant exemption
     * evidence references.
     */
    "snapshot"?: BuyerInvoiceSnapshot;
    /**
     * Current invoice status. paid and credited close the current balance and can reopen to open
     * or partially_paid after a payment or credit allocation reversal; invoice.reopened reports
     * that change. An uncollectible invoice accepts manual recovery payments and becomes paid when
     * fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. A lost dispute leaves paid_money, the balance,
     * and status unchanged; collecting it again requires a new invoice. Value enum: "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited".
     */
    "status": "open" | "partially_paid" | "paid" | "voided" | "uncollectible" | "credited" | (string & {});
    /**
     * The subscription the backing order belongs to, copied when the draft is created and never
     * changed. `null` when the order isn't part of a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string | null;
    /**
     * The theme Flint's hosted invoice page renders with, from your branding settings. Returned by
     * `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET
     * /v1/me/invoices` omits it. Colors, corner radius, font family, and title that style a
     * checkout, taken from the session or link theme or the merchant's branding settings.
     */
    "theme"?: CheckoutTheme;
    /**
     * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken
     * from the merchant's timezone when the draft is written, or UTC when unset. Later merchant
     * changes do not alter this invoice's calendar.
     */
    "timezone"?: string;
    /**
     * What the invoice bills, equal to snapshot.pricing_amounts.total_money and fixed at issue.
     * Late fees are in late_fee_money. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current invoice version. Send this as expected_version when updating the draft. Format:
     * int64. minimum: 1.
     */
    "version": number;
    /**
     * When the buyer first opened the invoice through its hosted invoice link. Recorded on a
     * best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "viewed_at"?: string;
    /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "voided_at"?: string;
};
/** A charge assessed because an invoice payment is overdue. */
export type BuyerInvoiceLateFee = {
    /**
     * The assessed fee: the policy's fixed amount, or its percent of base_outstanding_money.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** When the fee was assessed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "assessed_at": string;
    /**
     * The unpaid balance the fee was calculated from, excluding late fees, captured at assessment.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "base_outstanding_money": MoneyValue;
    /** Invoice that owns this late fee. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
    "invoice_id": string;
    /** Flint invoice late fee ID. Example: "inlf_01KEZF7C00NVR97MBH5AHR4W1X". */
    "invoice_late_fee_id": string;
    /**
     * The schedule entry this fee applies to. Absent on an invoice without a schedule, where the
     * fee applies to the whole invoice. Each invoice, or each entry, takes at most one fee, even
     * after a waiver. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * The late fee policy from payment_terms_snapshot, copied when the fee was assessed. `null`
     * when no policy was captured. anyOf[1] (Value): {@link InvoiceLateFeePolicy}. A late fee for
     * overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint
     * applies it automatically. anyOf[2] (Value): null.
     */
    "late_fee_policy": ((InvoiceLateFeePolicy) | (null) | (unknown));
    /**
     * What is still owed on this fee: amount_money - paid_money - waived_money -
     * written_off_money, never below zero. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Payments applied to this fee, minus reversed payments. Dispute losses don't reduce it.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * When the fee was waived. Absent unless it was waived. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "waived_at"?: string;
    /**
     * The amount waived. A waiver removes the fee's whole outstanding amount at that time, so it
     * is less than amount_money when part of the fee was already paid. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "waived_money": MoneyValue;
    /**
     * The part of this fee written off when the invoice was marked uncollectible. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "written_off_money": MoneyValue;
};
/** A page of `BuyerInvoice` objects. */
export type BuyerInvoiceListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerInvoice}. A bill issued to a customer.
     */
    "data": Array<BuyerInvoice>;
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
/** A response containing `BuyerInvoice` data. */
export type BuyerInvoiceResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A bill issued to a
     * customer.
     */
    "data": BuyerInvoice;
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
/** Invoice details captured at issue. Buyer views omit merchant exemption evidence references. */
export type BuyerInvoiceSnapshot = {
    /**
     * Billing address captured on the invoice. Kept after the customer is deleted, because an
     * issued invoice must keep it. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "billing_address"?: Address;
    /** The backing order's buyer note, captured on the invoice. */
    "buyer_note"?: string;
    /**
     * Buyer tax identity captured on the invoice. Null when none was recorded. anyOf[1] (Value):
     * {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit
     * notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU,
     * GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do
     * not change tax treatment. Tax IDs are an owned collection in display order; replacing the
     * array requires the parent's expected_version. Existing entries retain their document_tax_id;
     * omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     */
    "buyer_tax_identity": ((TaxIdentity) | (null));
    /**
     * The backing order's service charges, frozen at issue. [] (Value): {@link OrderCharge}. An
     * additional charge applied to an order.
     */
    "charges"?: Array<OrderCharge>;
    /**
     * Buyer name captured on the invoice. Kept after the customer is deleted, because an issued
     * invoice must keep it.
     */
    "customer_display_name"?: string;
    /** Buyer email captured on the invoice. */
    "customer_email"?: string;
    /**
     * The discounts applied to the backing order, frozen at issue. [] (Value): {@link
     * InvoiceDiscount}. A discount applied to an invoice, with its source, the discount amount,
     * the amount actually applied, and any promotion.
     */
    "discounts"?: Array<InvoiceDiscount>;
    /**
     * The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads
     * leave it out.
     */
    "internal_note"?: string;
    /**
     * The billed line items, frozen at issue. A draft previews the backing order's lines. []
     * (Value): {@link InvoiceLineItem}. A line item on an invoice.
     */
    "line_items"?: Array<InvoiceLineItem>;
    /**
     * Your business name as shown on the invoice. A draft shows your current name; issue freezes
     * it.
     */
    "merchant_display_name"?: string;
    /**
     * The invoice's pricing totals. Its total_money is the invoice total that the top-level
     * total_money reports. The money totals for an order or invoice: subtotal, discounts, charges,
     * tax, requested tip, and total.
     */
    "pricing_amounts": PricingAmounts;
    /**
     * The tip requested on the backing order, frozen at issue. Absent when none was requested. A
     * tip requested on an invoice, set as a fixed amount or a percentage, with an optional name
     * and description.
     */
    "requested_tip"?: InvoiceTip;
    /**
     * Seller tax identity captured on the invoice. Null when none was recorded. anyOf[1] (Value):
     * {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit
     * notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU,
     * GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do
     * not change tax treatment. Tax IDs are an owned collection in display order; replacing the
     * array requires the parent's expected_version. Existing entries retain their document_tax_id;
     * omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     */
    "seller_tax_identity": ((TaxIdentity) | (null));
    /**
     * Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows;
     * issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax
     * produces these rows. Automatic tax doesn't, so an automatic-tax invoice reports its tax in
     * pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum
     * to pricing_amounts.tax_money, and rows with price_mode inclusive sum to
     * pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on
     * InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows
     * apply. Some older external-tax invoices have no frozen rows. [] (Value): {@link
     * TaxBreakdown}. The tax calculated for one jurisdiction on an order, line item, or charge,
     * with the taxable amount, rate or flat amount, and tax.
     */
    "tax_breakdowns": Array<TaxBreakdown>;
    /**
     * VAT stated in the currency of the country that charges it, one entry per currency, frozen at
     * issue. EU member states require their national currency and the UK requires sterling. Each
     * entry gives the converted VAT, the converted taxable amount, and the rate with its source
     * and date. Present for VAT above zero charged by an EU member state or the UK; always []
     * otherwise, including reverse charge, invoices in that currency already, and invoices issued
     * before conversions were recorded. The invoice PDF prints the same figures. [] (Value):
     * {@link TaxCurrencyConversion}. VAT on an issued document converted into the currency of the
     * country whose VAT is charged.
     */
    "tax_currency_conversions": Array<TaxCurrencyConversion>;
    /**
     * Exemption assessment captured on this invoice, without the merchant's evidence reference.
     * Omitted when no assessment was recorded, including on older invoices. An exemption and a
     * reverse charge never apply to the same invoice: when an exemption applies, Flint calculates
     * no tax, so tax_reverse_charge is null. The recorded exemption assessment, without merchant
     * evidence references.
     */
    "tax_exemption"?: BuyerOrderTaxExemption;
    /**
     * The order's reverse charge, frozen when the invoice is issued: the buyer accounts for the
     * tax, and documents print "Reverse charge" with the buyer's tax ID. `null` when no reverse
     * charge applies, including when an exemption applies: Flint calculates no tax for an exempt
     * sale, so the two never appear on the same invoice. Drafts preview the order's current value.
     * anyOf[1] (Value): {@link TaxReverseCharge}. The buyer accounts for the tax under the reverse
     * charge. Rows that carry it have `taxability_reason` `reverse_charge` and no tax. anyOf[2]
     * (Value): null.
     */
    "tax_reverse_charge"?: ((TaxReverseCharge) | (null));
};
/** A customer's purchase and its payment and fulfillment progress. */
export type BuyerOrder = {
    /**
     * The payment attempt currently collecting this order. Omitted when no attempt is active or
     * its collection surface belongs to another caller. An attempt to pay an order.
     */
    "active_payment_attempt"?: BuyerOrderPaymentAttempt;
    /**
     * The amounts authorized and still capturable on the order's payments. The amounts authorized
     * and still capturable on an order's payments, with the authorization expiry.
     */
    "authorization_amounts"?: OrderAuthorizationAmounts;
    /**
     * What the buyer can do with the order, in this order: start_return, then resend_receipt. A
     * buyer's read through a customer session on /v1/me, or in Flint's buyer account, lists both
     * every time. Merchant order responses omit this field. A list of orders leaves start_return
     * out, since only a read of one order checks return eligibility. start_return is due when the
     * last open return window ends. Example: []. [] (Value): {@link BuyerAction}. One thing a
     * buyer can do with an order, subscription, invoice or return they read through /v1/me. Show
     * the actions with is_required as what needs the buyer's attention, and the first available
     * action as the primary action on the resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /**
     * Email and phone saved when payment started, from the pay request's buyer_contact or the
     * paying checkout session's saved contact. It does not change the linked customer. Buyer
     * contact supplied with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /** A note to the buyer. */
    "buyer_note"?: string;
    /**
     * Charges added to the order, such as delivery or service fees, each with its applied amount,
     * tax, and refunded amount. [] (Value): {@link BuyerOrderCharge}. An additional charge applied
     * to an order.
     */
    "charges": Array<BuyerOrderCharge>;
    /**
     * IDs of the checkout sessions opened for this order. [] (Value): string. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_ids": Array<string>;
    /**
     * When the order closed. Present exactly when status is closed. Set once at the transition and
     * never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "closed_at"?: string;
    /**
     * Why the order closed. Present exactly when status is closed. Set once at closure.
     * Unrecognized reasons are returned as other; new values may be added. Value enum:
     * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
     * "superseded", "return_resolution_canceled", "other".
     */
    "closed_reason"?: "invoice_voided"
        | "paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** ID of the customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id"?: string;
    /**
     * Promotions accepted at subscription signup. They attach when the subscription is provisioned
     * and first discount its first charged cycle. They do not discount this order and are separate
     * from discounts and order totals. Always present; empty when no promotions are deferred. []
     * (Value): {@link DeferredPromotion}. A promotion accepted at subscription signup for the
     * subscription's first charged cycle. It does not discount the signup order.
     */
    "deferred_promotions": Array<DeferredPromotion>;
    /**
     * Method, type and recipient of governing_delivery_selection_id. The address remains in
     * delivery_destination. Omitted when no shipment or local-delivery selection governs the
     * order. Method, type and recipient of governing_delivery_selection_id. delivery_destination
     * contains the resolved address. These values describe the same selection.
     */
    "delivery"?: OrderDeliverySummary;
    /**
     * The shipment or local-delivery destination committed for this order. Payment freezes this
     * value; fulfillment recipient changes do not replace it. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. Where an order is
     * delivered: the address, the recipient, and where the destination came from.
     */
    "delivery_destination"?: OrderDeliveryDestination;
    /**
     * Discounts applied to the order, each with its amount, status, and the line items and charges
     * it covers. [] (Value): {@link OrderDiscount}. A discount applied to an order, with its
     * amount, status, and the line items and charges it covers. It comes from a manual discount or
     * a promotion.
     */
    "discounts": Array<OrderDiscount>;
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
     * Fulfillments created for the order, each covering a set of its line items. [] (Value):
     * {@link BuyerFulfillment}. Work required to deliver an order's items.
     */
    "fulfillments": Array<BuyerFulfillment>;
    /**
     * An estimate of how the order balance splits between gift cards and the payment processor. An
     * estimate of how an order total splits between gift cards and the payment processor, and
     * whether gift cards can pay it.
     */
    "gift_card_estimate"?: OrderGiftCardEstimate;
    /**
     * The gift card redemptions applied to the order's payments. [] (Value): {@link
     * OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with the
     * amount, tip, and gift card.
     */
    "gift_card_settlements": Array<OrderGiftCardSettlement>;
    /**
     * Whether gift cards can pay for this order now. Gift cards pay only USD orders that still
     * accept changes, are not subscription purchases, and whose merchant has at least one gift
     * card that is not closed in this environment. Recomputed on each read; a spent but open card
     * still counts.
     */
    "gift_card_tender_enabled": boolean;
    /**
     * Gift cards available to pay the order, with each card's available balance. [] (Value):
     * {@link OrderGiftCardSelection}. A gift card available to pay an order, with its available
     * balance and the last four characters of its code.
     */
    "gift_cards": Array<OrderGiftCardSelection>;
    /**
     * ID of the delivery selection that governs this order, including pickup choices without a
     * delivery destination: the checkout's provisional selection before payment, and the selection
     * a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}.
     * Null when no selection governs the order. While set, change the destination through the
     * delivery selection. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "governing_delivery_selection_id": string | null;
    /**
     * The invoice associated with this order. Null when the order has no invoice. A replacement
     * invoice replaces this ID; voiding an invoice preserves it. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string | null;
    /**
     * Items the order sells, each with its pricing, tax, and fulfillment quantities. [] (Value):
     * {@link BuyerOrderLineItem}. An item purchased in an order.
     */
    "line_items": Array<BuyerOrderLineItem>;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Unique identifier for this order, prefixed `ord_`. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /** Human-readable order number for receipts and merchant reference. */
    "order_number"?: string;
    /**
     * How the order was created. invoice means a Quick Pay invoice created the order; attaching an
     * invoice to an existing order preserves its origin. Value enum: "virtual_terminal",
     * "payment_link", "checkout", "api", "subscription", "invoice".
     */
    "origin"?: "virtual_terminal"
        | "payment_link"
        | "checkout"
        | "api"
        | "subscription"
        | "invoice"
        | (string & {});
    /**
     * When `payment_status` became `paid`, including a final capture that releases the remaining
     * balance. Set once and never changed, including after refunds. `null` when `payment_status`
     * isn't `paid`, including an order whose balance was written off without being paid. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "paid_at": string | null;
    /**
     * Payment options and collection instructions for the order's outstanding balance. Omitted
     * when collection is unavailable to this caller. What a client needs to collect payment for a
     * buyer's order. The `stripe` field holds the Stripe values.
     */
    "payment_collection"?: BuyerPaymentCollection;
    /**
     * IDs of the payment intents created to collect this order. [] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_ids": Array<string>;
    /**
     * Payment link whose checkout created this order. Absent for orders that did not come from a
     * payment link. Filter GET /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id"?: string;
    /**
     * Collection progress. An invoice write-off also completes collection without receiving the
     * written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
    /**
     * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "prepayment_order_id": string | null;
    /**
     * The order's money totals: subtotal, discounts, charges, tax, requested tip, and total. The
     * money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and
     * total.
     */
    "pricing_amounts": PricingAmounts;
    /**
     * IDs of the refunds that name this order. This includes refunds Flint makes to return a
     * payment it couldn't accept (`reason` `payment_returned`), which never count toward
     * `refund_status` or the order's refunded amounts. [] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_ids": Array<string>;
    /**
     * Refund progress for collected money. Refunds with `reason` `payment_returned` return money
     * the order never received and don't count. Value enum: "none", "partially_refunded",
     * "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Value applied to this order from items the buyer returned, such as an exchange's replacement
     * order. Included in settlement_amounts.paid_money. [] (Value): {@link
     * OrderReturnCreditSettlement}. A return credit applied to an order payment, with the amount
     * and the return and resolution it came from.
     */
    "return_credit_settlements": Array<OrderReturnCreditSettlement>;
    /**
     * ID of the return resolution that created this order as a replacement. Omitted for orders a
     * return did not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
    /**
     * How much of the order has been paid, refunded, credited, written off, and settled as tips,
     * and what is still outstanding. The bill settlement amounts plus order overpayments, settled
     * tips, debt discharged by final capture, and value order edits removed. Money collected,
     * returned, waived, and still owed on a bill.
     */
    "settlement_amounts": OrderSettlementAmounts;
    /**
     * Instructions for saving a payment method for a subscription order. Omitted when setup is
     * unavailable. Client guidance for saving a payment method on the merchant's connected
     * account.
     */
    "setup_collection"?: BuyerSetupCollection;
    /**
     * Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes,
     * returns, and metadata or note edits continue on a closed order. Value enum: "open",
     * "closed".
     */
    "status": "open" | "closed" | (string & {});
    /**
     * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
     * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     */
    "subscription_cycle"?: number;
    /**
     * Time the subscriber changed delivery after this paid renewal was prepared. The order keeps
     * its committed destination until you correct it or refund and replace it. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "subscription_delivery_changed_at"?: string;
    /**
     * Position of this delivery among the deliveries one charge paid for, starting at 2. Null when
     * this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     */
    "subscription_delivery_number": number | null;
    /**
     * ID of the subscription this order bills. Absent on an order that isn't from a subscription.
     * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id"?: string;
    /**
     * ID of the subscription plan this order bills. Absent on an order that isn't from a
     * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: string;
    /**
     * The order's tax state: whether tax is enabled, its status, location, exemption, and
     * per-jurisdiction rows. Tax details on a buyer's order: whether tax is enabled, its mode and
     * status, location, exemption, and tax breakdowns.
     */
    "tax": BuyerOrderTax;
    /**
     * Event and tickets this order sold through an event payment link. Absent on other orders.
     * Event details for a ticketed order: name, location, start time, time zone, and the tickets
     * issued.
     */
    "ticketed_event"?: TicketedEvent;
    /**
     * Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared
     * before payment stays listed as canceled. [] (Value): {@link BuyerTip}. A tip on a buyer's
     * order, with its requested, effective, settled, and refunded amounts and how it was allocated
     * to payments.
     */
    "tips": Array<BuyerTip>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Order version for optimistic concurrency. Send this value as the expected version when
     * changing the order. Increases with every change to the order. Ignore an order webhook
     * snapshot whose version is lower than one you have already applied. Format: int64.
     */
    "version": number;
};
/** An additional charge applied to an order. */
export type BuyerOrderCharge = {
    /**
     * Fixed charge amount before charge discounts and tax. Percentage charges use percent instead.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Resolved charge amount after charge discounts and before additive tax. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "applied_money": MoneyValue;
    /**
     * The amount a percent charge is calculated from. Value enum: "subtotal_pre_discount",
     * "subtotal_post_discount".
     */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Optional description of the charge. */
    "description"?: string;
    /**
     * ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment.
     * Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /** What the buyer sees for this charge at checkout and on receipts. */
    "name": string;
    /**
     * Unique identifier for this order charge, prefixed `och_`. Example:
     * "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_id": string;
    /**
     * Order that owns this charge, including the source order of an invoice snapshot. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges
     * use `amount_money` instead. multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * Charge amount already refunded. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * How tax applies to this charge. Tax settings for an order charge calculated by Flint or
     * supplied by you, including the charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * Tax calculated for the charge, including any tax already included in its price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Applied charge amount plus tax that is not already included in the price. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * What the charge is for. It classifies the charge in reporting and sets its default tax
     * category. Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee",
     * "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee", "installation_fee",
     * "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee",
     * "restocking_fee", "rush_fee", "other".
     */
    "type": "service_fee"
        | "delivery_fee"
        | "shipping_fee"
        | "handling_fee"
        | "packaging_fee"
        | "small_order_fee"
        | "service_area_fee"
        | "setup_fee"
        | "installation_fee"
        | "cleaning_fee"
        | "booking_fee"
        | "reservation_fee"
        | "ticket_fee"
        | "fulfillment_fee"
        | "restocking_fee"
        | "rush_fee"
        | "other"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
/** An item purchased in an order. */
export type BuyerOrderLineItem = ({
    /**
     * Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "backordered_quantity": number;
    /**
     * Unit price multiplied by quantity, before modifiers, discounts, and tax. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "base_subtotal_money": MoneyValue;
    /**
     * Components fixed when the bundle line was added. The line takes their shared taxability and
     * tax category; all component variants must share both stored values. An unset category equals
     * only another unset category. [] (Value): {@link BundleComponent}. An item included in a
     * bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     * Catalog categories of the item. [] (Value): {@link CategoryReference}. A reference to a
     * product category by ID, handle, and name.
     */
    "categories": Array<CategoryReference>;
    /** Description of the item as sold. */
    "description"?: string;
    /**
     * Discount value allocated to this line item. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold
     * exists. Null when no hold exists yet, or when neither a future copied release_date nor the
     * inventory item supplies an applicable date. A future copied release_date takes precedence
     * even when physical stock covers every unit; otherwise the inventory item's expected ship
     * date applies only to backordered units when it is today or later in the merchant's timezone.
     * Past item dates are omitted and never frozen. The estimate may change before payment and
     * freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation
     * preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Format:
     * date. Example: "2026-08-02".
     */
    "expected_ship_date": string | null;
    /**
     * Current quantities for each required fulfillment obligation: one entry for a single item or
     * one per bundle component that requires fulfillment. Quantities use line units for single
     * items and component units for bundles. required_quantity equals unassigned_quantity +
     * assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity +
     * removed_quantity. Omitted when the line needs no fulfillment or the order's obligations
     * cannot be computed, including older lines without recorded requirements. [] (Value): {@link
     * OrderLineItemFulfillmentQuantities}. Counts of how much of an order line item is assigned,
     * fulfilled, failed, canceled, removed, or still unassigned for fulfillment.
     */
    "fulfillment_quantities"?: Array<OrderLineItemFulfillmentQuantities>;
    /**
     * Fulfillment requirements fixed when the line item was created. direct describes a single
     * item; components describes each bundle component. Omitted for older line items without
     * recorded requirements. Fulfillment requirements for an order line item, given for a single
     * item or for each component of a bundle.
     */
    "fulfillment_requirements"?: OrderLineItemFulfillmentRequirements;
    /**
     * Gift card details for a gift card purchase line. The gift card purchase details saved on an
     * order line item: configuration, face value, price paid, and recipient.
     */
    "gift_card_purchase"?: GiftCardPurchaseSnapshot;
    /** Image of the item as sold. An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Whether the line tracks inventory, and the inventory demands fixed when the line was added.
     * `null` when no inventory snapshot was recorded for the line. anyOf[1] (Value): {@link
     * LineItemInventorySnapshot}. Whether an order line item tracks inventory, and the inventory
     * item quantities each unit demands. anyOf[2] (Value): null.
     */
    "inventory_snapshot": ((LineItemInventorySnapshot) | (null));
    /**
     * Sum of the line item's modifier totals. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "modifier_total_money": MoneyValue;
    /**
     * Modifiers selected on the line, with their prices. [] (Value): {@link
     * BuyerOrderLineItemModifier}. A modifier selected on an order line item.
     */
    "modifiers": Array<BuyerOrderLineItemModifier>;
    /** Name of the item as sold. */
    "name": string;
    /**
     * The edit that added this line. Null when the line was not added by an order edit. Example:
     * "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     */
    "order_edit_id": string | null;
    /**
     * Order that owns this record or its referenced line item and charge. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Unique identifier for this order line item, prefixed `li_`. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /**
     * The `key` of the payment link line item this line was created from. Match order lines to the
     * link's line items with it instead of by name. Flint sets it when checkout starts and it
     * never changes; metadata updates don't affect it. `null` when the line didn't come from a
     * payment link line item: the order didn't come from a payment link, the line was added to the
     * order later, or the line came from a subscription plan through a subscription signup link.
     * minLength: 1. maxLength: 100.
     */
    "payment_link_line_item_key": string | null;
    /**
     * ID of the catalog product the item was sold from. Required whenever variant_id is present.
     * Absent on bundle and custom lines, which have no parent product. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Product classification frozen on this line. Null when the line is unclassified. Custom lines
     * accept physical, digital, service, or fee; catalog lines use the product's type when added.
     * Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen
     * classification; void and reissue to change it. Value enum: "physical", "service", "fee",
     * "digital", "gift_card", null.
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {}) | null;
    /**
     * Masked card identities for fully funded units of this purchase line. Partial consideration
     * does not issue a card. [] (Value): {@link PurchasedGiftCard}. A gift card issued for one
     * unit of a purchased order line item, with its last four code characters and any card it
     * replaced.
     */
    "purchased_gift_cards": Array<PurchasedGiftCard>;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Amount of this line already refunded. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "refunded_quantity": number;
    /**
     * Future release date copied when the line was created, in YYYY-MM-DD format. Null when the
     * line is not a pre-order. Earlier fulfillment is permitted. Format: date. Example:
     * "2026-08-02".
     */
    "release_date": string | null;
    /**
     * Whole-number quantity; fractional quantities are not supported. Whole line units removed by
     * paid-order edits. For bundles, each removed line unit removes all of its component units.
     * The original quantity and pricing remain the sale record; refunds are tracked separately.
     * Format: int64.
     */
    "removed_quantity": number;
    /**
     * Variant options selected for the item, such as size and color. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** SKU of the item as sold. */
    "sku"?: string;
    /**
     * Recurring offer and cadence frozen for this line at signup. The subscription offer and
     * billing interval an order line was bought under, with the recurring amount.
     */
    "subscription"?: SubscribedLine;
    /**
     * Subscription created for this line after the order is paid. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id"?: string;
    /**
     * Applicable active offer for a one-time line, or the offer terms frozen for a subscribed
     * line. A subscription offer attached to an order line item, with its name, discount, and
     * billing interval options.
     */
    "subscription_offer"?: OrderLineSubscriptionOfferSummary;
    /**
     * Base subtotal plus modifier total, before discounts and tax. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * How tax was calculated for this line item. Tax settings for an order line item calculated by
     * Flint or supplied by you, including the line item tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /**
     * Tax calculated for this line item, including any tax already included in its price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Subtotal minus discounts, plus tax that is not already included in the price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle
     * lines. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Price of one unit before modifiers, discounts, and tax. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Weight of one unit fixed when the line was created. Omitted when unknown and for bundle
     * lines. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "unit_weight"?: Weight;
    /**
     * ID of the catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
});
/** A modifier selected on an order line item. */
export type BuyerOrderLineItemModifier = {
    /** Name of the modifier group recorded when this selection was added to the order line item. */
    "modifier_group_name": string;
    /**
     * Identifier of the selected catalog modifier. If its group is owned by a modifier set
     * (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id"?: string;
    /** Name of the selected modifier recorded on the order line item. */
    "name": string;
    /**
     * Stable identifier of the selected modifier on this order line item. Example:
     * "olim_01KEZF7C00YP0WSZGRAD25EB1Z".
     */
    "order_line_item_modifier_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** Whether this selection appears in fulfillment details, recorded when selected. */
    "show_on_fulfillment": boolean;
    /** Whether this selection appears on buyer receipts, recorded when selected. */
    "show_on_receipt": boolean;
    /**
     * Whether the selection is a catalog list modifier or buyer-entered text. Value enum:
     * "catalog_modifier", "text".
     */
    "source_type": "catalog_modifier" | "text" | (string & {});
    /**
     * Selected text group and buyer-entered value. Read an inline text group through its owning
     * modifier set. Text a buyer entered for a text modifier group on an order line item.
     */
    "text"?: TextModifierRequest;
    /** Buyer-entered text recorded for a text modifier selection. */
    "text_value"?: string;
    /**
     * Total price this selection adds to the line: `unit_price_delta_money` times the selection's
     * `quantity` times the line item's `quantity`. Always 0 for text selections. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Amount added to the item's unit price for each unit of this selection, recorded when
     * selected. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money": MoneyValue;
};
/** A page of `BuyerOrder` objects. */
export type BuyerOrderListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerOrder}. A customer's purchase and its payment and fulfillment progress.
     */
    "data": Array<BuyerOrder>;
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
/** An attempt to pay an order. */
export type BuyerOrderPaymentAttempt = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "expected_outstanding_money": MoneyValue;
    /**
     *  [] (Value): {@link PaymentAttemptGiftCardRedemption}. A gift card redemption made as part
     * of an order payment attempt, with the amount, tip, and gift card.
     */
    "gift_card_redemptions": Array<PaymentAttemptGiftCardRedemption>;
    /**
     * Whether the attempt can continue through PayOrder with action: resume and this
     * order_payment_attempt_id after any pending client action is complete. If false, check status
     * before starting another payment; the attempt may still be in progress.
     */
    "is_resumable": boolean;
    /**
     * The concluded failure of a payment leg that failed this attempt. Absent for non-payment
     * failures. Why a payment attempt failed: a normalized `code`, a message, when it failed, and
     * recovery guidance.
     */
    "last_payment_error"?: BuyerPaymentErrorSummary;
    /** Value enum: "payment", "setup", "settlement". */
    "mode": "payment" | "setup" | "settlement" | (string & {});
    /**
     * Unique identifier for this order payment attempt, prefixed `opat_`. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
     */
    "order_payment_attempt_id": string;
    /**
     *  [] (Value): {@link BuyerPaymentAttemptPaymentIntent}. The payment intent behind an order
     * payment attempt, with its status, amounts, authorization expiry, and last payment error.
     */
    "payment_intents": Array<BuyerPaymentAttemptPaymentIntent>;
    /**
     * Set when the pay request sent save_payment_method: true and the attempt paid without saving
     * the payment method. A card typed into checkout and saved has no entry here; read
     * payment_method_save on the checkout session for a card waiting for confirmation. What became
     * of the buyer's save_payment_method. The payment does not depend on it.
     */
    "payment_method_save"?: OrderPaymentAttemptPaymentMethodSave;
    /**
     *  [] (Value): {@link PendingPaymentAction}. Client-side action required before continuing a
     * payment. Resume an order through PayOrder with order_payment_attempt_id, or continue a
     * standalone PaymentIntent through its confirm endpoint without a replacement credential.
     */
    "pending_actions": Array<PendingPaymentAction>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /**
     * Value enum: "processing", "requires_action", "requires_capture", "partially_succeeded",
     * "requires_retry", "finalizing", "succeeded", "failed", "expired", "canceled".
     */
    "status": "processing"
        | "requires_action"
        | "requires_capture"
        | "partially_succeeded"
        | "requires_retry"
        | "finalizing"
        | "succeeded"
        | "failed"
        | "expired"
        | "canceled"
        | (string & {});
    /**
     * Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an
     * unmapped non-payment reason report other. Canceled and expired attempts include a reason
     * only when it adds information beyond status. New values may be added. Value enum:
     * "authorization_canceled", "canceled_on_reader", "reader_unavailable",
     * "coupon_reservation_failed", "gift_card_hold_acquisition_failed", "invalid_payment_source",
     * "inventory_unavailable", "order_changed_before_payment", "order_payment_customer_mismatch",
     * "other", "payment_authorization_canceled", "payment_authorization_expired",
     * "payment_confirmation_rejected", "payment_link_capacity_claim_failed",
     * "payment_link_capacity_validation_failed", "payment_method_activation_pending",
     * "payment_method_required", "payment_option_not_allowed", "payment_option_unavailable",
     * "payment_returned", "payment_source_binding_failed", "payment_source_conflict",
     * "payment_source_not_updatable", "payment_source_ownership_mismatch",
     * "resource_guarantee_failed", "setup_action_unavailable", "setup_hold_acquisition_failed",
     * "setup_result_incomplete", "tip_allocation_sync_failed",
     * "zero_balance_hold_acquisition_failed".
     */
    "status_reason"?: "authorization_canceled"
        | "canceled_on_reader"
        | "reader_unavailable"
        | "coupon_reservation_failed"
        | "gift_card_hold_acquisition_failed"
        | "invalid_payment_source"
        | "inventory_unavailable"
        | "order_changed_before_payment"
        | "order_payment_customer_mismatch"
        | "other"
        | "payment_authorization_canceled"
        | "payment_authorization_expired"
        | "payment_confirmation_rejected"
        | "payment_link_capacity_claim_failed"
        | "payment_link_capacity_validation_failed"
        | "payment_method_activation_pending"
        | "payment_method_required"
        | "payment_option_not_allowed"
        | "payment_option_unavailable"
        | "payment_returned"
        | "payment_source_binding_failed"
        | "payment_source_conflict"
        | "payment_source_not_updatable"
        | "payment_source_ownership_mismatch"
        | "resource_guarantee_failed"
        | "setup_action_unavailable"
        | "setup_hold_acquisition_failed"
        | "setup_result_incomplete"
        | "tip_allocation_sync_failed"
        | "zero_balance_hold_acquisition_failed"
        | (string & {});
};
/** A response containing `BuyerOrder` data. */
export type BuyerOrderResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A customer's purchase
     * and its payment and fulfillment progress.
     */
    "data": BuyerOrder;
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
 * Tax details on a buyer's order: whether tax is enabled, its mode and status, location,
 * exemption, and tax breakdowns.
 */
export type BuyerOrderTax = {
    /**
     * Identifies which automatic tax behavior applies to this order. connected means the account's
     * tax connection calculated it. standard marks an order calculated before automatic tax
     * required a tax connection. Value enum: "standard", "connected".
     */
    "automatic_profile"?: "standard" | "connected" | (string & {});
    /**
     * How you can give Flint a tax location while `status` is `requires_location`. `provided`
     * means send `tax.location`. [] (Value): string.
     */
    "available_location_inputs"?: Array<string>;
    /**
     * Where the order's external tax components come from: `provided` when you send them, or
     * `callback` when Flint asks your selected tax calculation callback. Returned only while tax
     * is enabled in external mode; absent for automatic tax and when tax is off. Value enum:
     * "provided", "callback".
     */
    "components_source"?: "provided" | "callback" | (string & {});
    /**
     * The percentage tax template for checkout-generated delivery charges, including paid pickup.
     * Returned only when tax is enabled in external mode with `components_source` `provided` and a
     * template is set. Existing charges retain their own tax.calculation. A percentage tax
     * template for the delivery charges checkout generates, including paid pickup: whether the
     * charge includes the tax, and the tax components. Allowed only on orders that use external
     * tax.
     */
    "delivery_charge_calculation"?: DeliveryChargeTaxCalculationRequest;
    /** Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. */
    "enabled": boolean;
    /**
     * The exemption assessment recorded for this sale, when one exists. Frozen when tax commits;
     * older snapshots omit details that were never recorded. The recorded exemption assessment,
     * without merchant evidence references.
     */
    "exemption"?: BuyerOrderTaxExemption;
    /**
     * The order's tax location, once one is established. Flint taxes items and charges without a
     * fulfillment destination of their own there. Omitted when every taxable item and charge is
     * taxed at its own fulfillment destination and those destinations differ, unless you provided
     * one. The location used to calculate tax on a buyer's order, and where its address came from.
     */
    "location"?: BuyerOrderTaxLocation;
    /**
     * Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum:
     * "automatic", "external".
     */
    "mode": "automatic" | "external" | (string & {});
    /**
     * Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`).
     * Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent
     * retry of an earlier request omits it. Each line item and charge also states its own mode in
     * `tax.calculation.price_mode`, which decides that item's tax. Value enum: "additive",
     * "inclusive".
     */
    "price_mode"?: "additive" | "inclusive" | (string & {});
    /**
     * Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the
     * customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its
     * rows carry no tax. Invoices freeze it. `null` when no reverse charge applies. anyOf[1]
     * (Value): {@link TaxReverseCharge}. The buyer accounts for the tax under the reverse charge.
     * Rows that carry it have `taxability_reason` `reverse_charge` and no tax. anyOf[2] (Value):
     * null.
     */
    "reverse_charge"?: ((TaxReverseCharge) | (null));
    /**
     * Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or
     * `not_required`. Value enum: "not_required", "requires_location", "calculated", "exempt",
     * "incomplete".
     */
    "status": "not_required" | "requires_location" | "calculated" | "exempt" | "incomplete" | (string & {});
    /**
     * Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate
     * every taxable line. Present only when tax is enabled in automatic mode. US destinations are
     * covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods,
     * software and saas are covered; services, professional_services, physical goods and taxable
     * charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect
     * with delivery supported_countries when collecting a shipping address. [] (Value): string.
     */
    "supported_countries"?: Array<string>;
    /**
     * One row per jurisdiction for each line item and charge, plus any flat order taxes. External
     * tax always produces rows. Automatic tax produces rows outside the US, one per national or
     * provincial tax; US automatic tax doesn't produce rows. [] (Value): {@link TaxBreakdown}. The
     * tax calculated for one jurisdiction on an order, line item, or charge, with the taxable
     * amount, rate or flat amount, and tax.
     */
    "tax_breakdowns"?: Array<TaxBreakdown>;
};
/** The recorded exemption assessment, without merchant evidence references. */
export type BuyerOrderTaxExemption = {
    /** Certificate number recorded at assessment. Omitted when none was recorded. */
    "certificate_number"?: string;
    /**
     * Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded.
     * Replaced as a whole: send every field you want to keep. Covers all US states or an explicit
     * list of US states and DC.
     */
    "coverage"?: CustomerTaxExemptionCoverage;
    /**
     * ID of the customer the exemption was assessed from, when one was linked. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Customer exemption record used for this assessment. Omitted for blanket flags, order
     * declarations, and older snapshots. Example: "ctex_01KEZF7C009N0YTK0NMWP1XZPW".
     */
    "customer_tax_exemption_id"?: string;
    /**
     * Last day of the selected record's exemption, inclusive. Omitted when no end date was
     * recorded. Format: date. Example: "2026-08-02".
     */
    "end_date"?: string;
    /**
     * Exemption reason recorded at assessment. Omitted when no reason was recorded. Value enum:
     * "federal_government", "state_or_local_government", "tribal_government", "foreign_diplomat",
     * "charitable_organization", "religious_organization", "educational_organization", "resale",
     * "agricultural_production", "industrial_production", "direct_pay_permit", "direct_mail",
     * "other".
     */
    "reason"?: "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other"
        | (string & {});
    /**
     * The source of the tax exemption assessment. Omitted when the source has not been
     * established. Value enum: "none", "customer", "order".
     */
    "source"?: "none" | "customer" | "order" | (string & {});
    /**
     * First day of the selected record's exemption, inclusive. Omitted when no date was recorded.
     * Format: date. Example: "2026-08-02".
     */
    "start_date"?: string;
    /**
     * Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason
     * customer_exempt.
     */
    "tax_exempt": boolean;
};
/** The location used to calculate tax on a buyer's order, and where its address came from. */
export type BuyerOrderTaxLocation = {
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. A postal address. Every address has country. Addresses Flint checked as complete
     * (customer and saved addresses, merchant, location, invoice, order delivery destination, tax
     * identity, fulfillment recipient and pickup addresses) always have line1 and city, and US
     * ones always have state and postal_code. Delivery quote destinations, buyer locations and
     * postal-code tax locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    /**
     * Where the tax address came from. Value enum: "provided", "fulfillment", "customer",
     * "location", "merchant".
     */
    "address_source": "provided" | "fulfillment" | "customer" | "location" | "merchant" | (string & {});
    /**
     * The kind of address Flint used to calculate tax. Value enum: "postal_code", "tax_address",
     * "billing_address", "shipping_address", "business_address".
     */
    "address_type": "postal_code"
        | "tax_address"
        | "billing_address"
        | "shipping_address"
        | "business_address"
        | (string & {});
    /**
     * ID of the customer whose saved address Flint used, when `address_source` is `customer`.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * ID of the fulfillment whose shipping address Flint used. Absent when the address is the
     * order's `delivery_destination`. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
};
/** A package within a shipment. */
export type BuyerPackage = {
    /** Carrier transporting the package. */
    "carrier"?: string;
    /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Package delivery timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "delivered_at"?: string;
    /**
     * Physical length, width, and height of the package. Package or item dimensions as `length`,
     * `width`, and `height` in the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Null when no estimate is set.
     * Retained after delivery as history. This estimate is separate from the fulfillment's
     * promised shipment window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /** Fulfillment whose items are in the package. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id": string;
    /**
     * Return-label URL supplied by the merchant's integration. Included for return packages;
     * omitted for outbound packages. Omitted for a checkout session credential that doesn't act
     * for the customer the buyer verified.
     */
    "label_url"?: string;
    /** Order whose items are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /** Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
    "package_id": string;
    /**
     * Return this package belongs to. Present only on packages of return shipments. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * Return line quantities allocated to this parcel. Present only on packages of return
     * shipments. [] (Value): {@link ReturnHandoffRequirementLineItem}. A return line and the
     * quantity placed in a return shipment or package.
     */
    "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
    /** Carrier service used for the package. */
    "service_code"?: string;
    /** Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
    /** Package handoff timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "shipped_at"?: string;
    /**
     * Current package lifecycle state. Package states are the source used to derive shipment
     * status. - `created`: The package record exists but has not been packed or handed off. -
     * `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was
     * handed to the carrier. - `in_transit`: The carrier is moving the package through its
     * network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`:
     * The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
     * delivery but did not complete it. Follow the carrier instructions before retrying delivery.
     * - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported
     * issue. - `returned`: The package was returned toward or to its origin. - `voided`: The
     * package was voided and will not continue through delivery. Value enum: "created", "packed",
     * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
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
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified.
     */
    "tracking_number"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     */
    "tracking_url"?: string;
    /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Monotonic package version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
    /**
     * Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds, used
     * in delivery profile configuration.
     */
    "weight"?: Weight;
};
/** A page of `BuyerPackage` objects. */
export type BuyerPackageListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerPackage}. A package within a shipment.
     */
    "data": Array<BuyerPackage>;
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
/** A response containing `BuyerPackage` data. */
export type BuyerPackageResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A package within a
     * shipment.
     */
    "data": BuyerPackage;
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
/** The pause lengths this subscription accepts from its buyer. */
export type BuyerPauseActionOptions = {
    /**
     * When present, pause_duration_cycles is required and must be between 1 and this value. When
     * absent, omit pause_duration_cycles to pause until the buyer resumes. Format: int32. minimum:
     * 1. maximum: 12.
     */
    "max_pause_duration_cycles"?: number;
};
/** Whether buyers may pause their own subscriptions. Send at least one field. minProperties: 1. */
export type BuyerPauseCapability = {
    /**
     * Whether buyers may pause. When false, a buyer's pause returns 409 ACTION_NOT_ALLOWED with
     * reason not_offered. Default: true.
     */
    "enabled"?: boolean;
    /**
     * The longest pause a buyer may choose, in billing periods. When set, a buyer's pause must
     * send pause_duration_cycles from 1 to this value. Omit it for no limit, which also lets a
     * buyer pause until they resume. Format: int32. minimum: 1. maximum: 12.
     */
    "max_cycles"?: number;
};
/** Whether buyers may pause their own subscriptions. Send at least one field. minProperties: 1. */
export type BuyerPauseCapabilityInput = BuyerPauseCapability;
/** The return resolutions the buyer can pay now. */
export type BuyerPayBalanceActionOptions = {
    /**
     * Payable resolutions in creation order. Read each amount with GET
     * /v1/me/return-resolutions/{return_resolution_id}, then create its checkout session with POST
     * /v1/me/checkout-sessions and type return_resolution. minItems: 1. [] (Value): string.
     * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_ids": Array<string>;
};
/**
 * The payment intent behind an order payment attempt, with its status, amounts, authorization
 * expiry, and last payment error.
 */
export type BuyerPaymentAttemptPaymentIntent = {
    /**
     * The amount requested from the buyer, including any tip_money. Capturing doesn't change it:
     * after a partial capture it still shows the requested amount, and captured_money shows what
     * was collected. On a standalone payment intent, PATCH can change it only before the first
     * confirmation attempt. An amount_money or tip_money change that leaves too little for stored
     * splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Effective Flint capture deadline, equal to the earlier of the provider capture deadline and
     * this attempt's sealed resource guarantee. Capture is refused at or after this time, even
     * while status is requires_capture. Omitted until a hold is placed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "authorization_expires_at"?: string;
    /**
     * Payment intent's stored capturable amount. A positive amount does not override
     * authorization_expires_at or the payment status. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "capturable_money"?: MoneyValue;
    /**
     * Money collected through this payment, once nothing more can be collected. Positive when
     * money was collected, including a payment Flint couldn't accept and is refunding (the payment
     * intent's cancellation_reason is payment_returned). Zero when nothing was collected, for
     * example after a decline or a released authorization. Absent while the outcome can still
     * change, such as an ACH debit that hasn't settled or an open hold. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "captured_money"?: MoneyValue;
    /**
     * Why a payment attempt failed: a normalized `code`, a message, when it failed, and recovery
     * guidance.
     */
    "last_payment_error"?: BuyerPaymentErrorSummary;
    /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * Payment option used by this leg, using the same values as
     * PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when
     * no payment option has been selected. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit", "card_present".
     */
    "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
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
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tip_money": MoneyValue;
};
/**
 * What a client needs to collect payment for a buyer's order. The `stripe` field holds the Stripe
 * values.
 */
export type BuyerPaymentCollection = {
    /**
     * Client configuration for collecting the payment through Stripe. Stripe values for collecting
     * payment on a buyer's order: the account ID, publishable key, return URL, and Elements
     * settings.
     */
    "stripe"?: BuyerPaymentCollectionStripe;
};
