import type { Address, AssessInvoiceLateFeeRequestInput } from './types-0.js';
import type { InvoiceDiscount, InvoiceLineItem, InvoiceCheckoutSessionRequestInput, Invoice } from './types-28.js';
import type { OrderCharge, MoneyValue } from './types-33.js';
import type { PricingAmounts } from './types-39.js';
import type { TaxBreakdown } from './types-49.js';
import type { TaxIdentity } from './types-50.js';
import type { InputValue } from '../runtime.js';
import type { CollectInvoiceRequestInput } from './types-5.js';
import type { CreateInvoiceRequestInput, CreateInvoiceManualPaymentRequestInput } from './types-7.js';
import type { ResourceVersionRequestInput, ResponseMeta } from './types-42.js';
import type { ReverseInvoiceManualPaymentRequestInput } from './types-45.js';
import type { UpdateInvoiceRequestInput } from './types-51.js';
import type {
    WaiveInvoiceLateFeeRequestInput,
    WebhookEventBalanceTransactionCreated,
    WebhookEventBalanceTransactionUpdated,
    WebhookEventBalanceUpdated,
    WebhookEventBundleArchived,
    WebhookEventBundleCreated,
    WebhookEventBundleUpdated,
    WebhookEventCategoryCreated,
    WebhookEventCategoryDeleted,
    WebhookEventCategoryUpdated,
    WebhookEventCheckoutSessionClosed
} from './types-53.js';
import type {
    CreditNoteIssueAllocationRequest,
    CreditNoteRefundRequest,
    CreditNoteIssueAllocationRequestInput,
    CreditNoteRefundRequestInput,
    CreditNote,
    CreditNoteAllocation
} from './types-11.js';
import type { Refund } from './types-41.js';
import type {
    WebhookEventCheckoutSessionCreated,
    WebhookEventCheckoutSessionExpired,
    WebhookEventCheckoutSessionInvalidated,
    WebhookEventCheckoutSessionPaid,
    WebhookEventCheckoutSessionPartiallyPaid,
    WebhookEventCreditNoteAllocationCreated,
    WebhookEventCreditNoteAllocationReversed,
    WebhookEventCreditNoteCreated,
    WebhookEventCreditNoteIssued,
    WebhookEventCreditNoteUpdated,
    WebhookEventCreditNoteVoided,
    WebhookEventCustomDomainArchived,
    WebhookEventCustomDomainUpdated,
    WebhookEventCustomerCreated,
    WebhookEventCustomerDeleted,
    WebhookEventCustomerDeletionRequestCompleted,
    WebhookEventCustomerDeletionRequestCreated,
    WebhookEventCustomerDeletionRequestFailed,
    WebhookEventCustomerDeletionRequestProcessing,
    WebhookEventCustomerDeletionRequestRejected,
    WebhookEventCustomerUpdated,
    WebhookEventDeliveryLocationSetActivated,
    WebhookEventDeliveryLocationSetArchived,
    WebhookEventDeliveryLocationSetCreated,
    WebhookEventDeliveryLocationSetDeactivated,
    WebhookEventDeliveryLocationSetUpdated,
    WebhookEventDeliveryMethodActivated,
    WebhookEventDeliveryMethodArchived,
    WebhookEventDeliveryMethodCreated,
    WebhookEventDeliveryMethodDeactivated,
    WebhookEventDeliveryMethodUpdated,
    WebhookEventDeliveryProfileActivated,
    WebhookEventDeliveryProfileArchived,
    WebhookEventDeliveryProfileCreated,
    WebhookEventDeliveryProfileDeactivated,
    WebhookEventDeliveryProfileUpdated,
    WebhookEventDeliveryRateCallbackActivated,
    WebhookEventDeliveryRateCallbackArchived,
    WebhookEventDeliveryRateCallbackCreated,
    WebhookEventDeliveryRateCallbackDeactivated,
    WebhookEventDeliveryRateCallbackUpdated,
    WebhookEventDeliveryRevocationCreated,
    WebhookEventDeliverySelectionCommitted,
    WebhookEventDeliveryZoneActivated,
    WebhookEventDeliveryZoneArchived,
    WebhookEventDeliveryZoneCreated,
    WebhookEventDeliveryZoneDeactivated,
    WebhookEventDeliveryZoneUpdated,
    WebhookEventDisputeCreated,
    WebhookEventDisputeInquiryClosed,
    WebhookEventDisputeLost,
    WebhookEventDisputeNeedsResponse,
    WebhookEventDisputePrevented,
    WebhookEventDisputeUpdated,
    WebhookEventDisputeWon,
    WebhookEventEnvironmentGrantCreated,
    WebhookEventEnvironmentGrantRevoked,
    WebhookEventFraudWarningCreated,
    WebhookEventFraudWarningUpdated,
    WebhookEventFulfillmentCanceled,
    WebhookEventFulfillmentCompleted,
    WebhookEventFulfillmentCreated,
    WebhookEventFulfillmentEventCreated,
    WebhookEventFulfillmentFailed
} from './types-54.js';
import type {
    WebhookEventFulfillmentUpdated,
    WebhookEventGiftCardCreated,
    WebhookEventGiftCardLoadCreated,
    WebhookEventGiftCardLoadUpdated,
    WebhookEventGiftCardNotificationCreated,
    WebhookEventGiftCardNotificationUpdated,
    WebhookEventGiftCardRedemptionCreated,
    WebhookEventGiftCardRedemptionUpdated,
    WebhookEventGiftCardTransactionCreated,
    WebhookEventGiftCardUpdated,
    WebhookEventInventoryCountApplied,
    WebhookEventInventoryLevelShortageDetected,
    WebhookEventInventoryLevelUpdated,
    WebhookEventInventoryReceiptCreated,
    WebhookEventInventoryReservationActionRequired,
    WebhookEventInventoryReservationAtRisk,
    WebhookEventInventoryReservationClosed,
    WebhookEventInventoryReservationCommitted,
    WebhookEventInventoryReservationConsumed,
    WebhookEventInventoryReservationCreated,
    WebhookEventInventoryReservationHoldExpired,
    WebhookEventInventoryReservationReleased,
    WebhookEventInventoryTransferClosed,
    WebhookEventInventoryTransferDeparted,
    WebhookEventInventoryTransferLost,
    WebhookEventInventoryTransferReceived,
    WebhookEventInventoryTransferReturned,
    WebhookEventInvoiceCollectionBlockResolved,
    WebhookEventInvoiceCollectionBlocked,
    WebhookEventInvoiceCreated,
    WebhookEventInvoiceCredited,
    WebhookEventInvoiceDeliveryAttemptFailed,
    WebhookEventInvoiceDeliveryAttemptSent,
    WebhookEventInvoiceDeliveryAttemptSuppressed,
    WebhookEventInvoiceIssueFailed,
    WebhookEventInvoiceIssued,
    WebhookEventInvoiceLateFeeAssessed,
    WebhookEventInvoiceLateFeeDue,
    WebhookEventInvoiceLateFeeWaived,
    WebhookEventInvoiceManualPaymentCreated,
    WebhookEventInvoiceManualPaymentReversed,
    WebhookEventInvoiceMarkedUncollectible,
    WebhookEventInvoiceOverdue,
    WebhookEventInvoicePaid,
    WebhookEventInvoicePartiallyPaid,
    WebhookEventInvoicePartiallyRefunded,
    WebhookEventInvoicePaymentAttemptCanceled,
    WebhookEventInvoicePaymentAttemptExpired,
    WebhookEventInvoicePaymentAttemptFailed,
    WebhookEventInvoicePaymentAttemptProcessing,
    WebhookEventInvoicePaymentAttemptSettled,
    WebhookEventInvoiceRefunded,
    WebhookEventInvoiceReminderDue,
    WebhookEventInvoiceReopened,
    WebhookEventInvoiceSent,
    WebhookEventInvoiceUpdated,
    WebhookEventInvoiceVoided,
    WebhookEventMerchantBillingBalanceUpdated,
    WebhookEventMerchantBillingInvoiceIssued,
    WebhookEventMerchantBillingInvoiceUpdated,
    WebhookEventMerchantReadinessUpdated,
    WebhookEventMerchantUpdated,
    WebhookEventModifierGroupArchived
} from './types-55.js';
import type {
    WebhookEventModifierGroupCreated,
    WebhookEventModifierGroupUpdated,
    WebhookEventModifierSetArchived,
    WebhookEventModifierSetCreated,
    WebhookEventModifierSetUpdated,
    WebhookEventOrderClosed,
    WebhookEventOrderCreated,
    WebhookEventOrderInventoryExceptionCreated,
    WebhookEventOrderInventoryExceptionResolved,
    WebhookEventOrderPaid,
    WebhookEventOrderPartiallyPaid,
    WebhookEventOrderPartiallyRefunded,
    WebhookEventOrderRefunded,
    WebhookEventOrderUpdated,
    WebhookEventPackageCreated,
    WebhookEventPackageUpdated,
    WebhookEventPartnerAppInstallCreated,
    WebhookEventPartnerAppInstallPermissionsUpdated,
    WebhookEventPartnerAppInstallRevoked,
    WebhookEventPartnerAppInstallUpdated,
    WebhookEventPaymentIntentCanceled,
    WebhookEventPaymentIntentCreated,
    WebhookEventPaymentIntentExpired,
    WebhookEventPaymentIntentFulfillmentHoldUpdated,
    WebhookEventPaymentIntentPaymentFailed,
    WebhookEventPaymentIntentProcessing,
    WebhookEventPaymentIntentRequiresAction,
    WebhookEventPaymentIntentRequiresCapture,
    WebhookEventPaymentIntentSucceeded,
    WebhookEventPaymentIntentUpdated,
    WebhookEventPaymentLinkCreated,
    WebhookEventPaymentLinkUpdated,
    WebhookEventPaymentMethodActivated,
    WebhookEventPaymentMethodArchived,
    WebhookEventPaymentMethodFailed,
    WebhookEventPaymentReviewClosed,
    WebhookEventPaymentReviewOpened,
    WebhookEventPaymentReviewReopened,
    WebhookEventPayoutCanceled,
    WebhookEventPayoutCreated,
    WebhookEventPayoutDestinationArchived,
    WebhookEventPayoutDestinationCreated,
    WebhookEventPayoutDestinationDisabled,
    WebhookEventPayoutDestinationUpdated,
    WebhookEventPayoutFailed,
    WebhookEventPayoutPaid,
    WebhookEventPayoutReversed,
    WebhookEventPayoutSettingsUpdated,
    WebhookEventPayoutUpdated,
    WebhookEventProductArchived,
    WebhookEventProductCreated,
    WebhookEventProductUpdated,
    WebhookEventProductVariantArchived,
    WebhookEventProductVariantCreated,
    WebhookEventProductVariantUpdated,
    WebhookEventPromotionArchived,
    WebhookEventPromotionCodeArchived,
    WebhookEventPromotionCodeCreated,
    WebhookEventPromotionCodeUpdated,
    WebhookEventPromotionCreated,
    WebhookEventPromotionUpdated,
    WebhookEventRefundCreated,
    WebhookEventRefundFailed,
    WebhookEventRefundPartiallySucceeded
} from './types-56.js';
import type {
    WebhookEventRefundSucceeded,
    WebhookEventRefundUpdated,
    WebhookEventReportFailed,
    WebhookEventReportSucceeded,
    WebhookEventReturnCanceled,
    WebhookEventReturnCompleted,
    WebhookEventReturnCreated,
    WebhookEventReturnDecisionRecorded,
    WebhookEventReturnDispositionCreated,
    WebhookEventReturnDispositionUpdated,
    WebhookEventReturnInspectionAcceptanceDecided,
    WebhookEventReturnInspectionCreated,
    WebhookEventReturnInspectionSuperseded,
    WebhookEventReturnReceiptCreated,
    WebhookEventReturnReceiptSuperseded,
    WebhookEventReturnReceiptVerified,
    WebhookEventReturnReopened,
    WebhookEventReturnResolutionCreated,
    WebhookEventReturnResolutionUpdated,
    WebhookEventReturnUpdated,
    WebhookEventShipmentCreated,
    WebhookEventShipmentUpdated,
    WebhookEventSubscriptionActivated,
    WebhookEventSubscriptionCanceled,
    WebhookEventSubscriptionCancellationScheduled,
    WebhookEventSubscriptionCreated,
    WebhookEventSubscriptionCycleSkipped,
    WebhookEventSubscriptionDeliveryActionRequired,
    WebhookEventSubscriptionDeliveryMigrationCompleted,
    WebhookEventSubscriptionDeliveryPauseUpcoming,
    WebhookEventSubscriptionDeliveryUpdated,
    WebhookEventSubscriptionDunningExhausted,
    WebhookEventSubscriptionPastDue,
    WebhookEventSubscriptionPaused,
    WebhookEventSubscriptionPaymentRetryCreated,
    WebhookEventSubscriptionPaymentRetryFailed,
    WebhookEventSubscriptionPaymentRetrySucceeded,
    WebhookEventSubscriptionPaymentSucceeded,
    WebhookEventSubscriptionPlanChanged,
    WebhookEventSubscriptionReactivated,
    WebhookEventSubscriptionRenewalUpcoming,
    WebhookEventSubscriptionResumed,
    WebhookEventSubscriptionTrialEnding,
    WebhookEventSubscriptionUpdated,
    WebhookEventTaxConnectionUpdated
} from './types-57.js';
import type {
    ReturnActivity,
    ReturnDisposition,
    ReturnInspection,
    ReturnLineItem,
    ReturnPolicy,
    ReturnPolicyRevision
} from './types-43.js';
import type { ReturnReason, ReturnReceipt, ReturnResolution, ReturnResource } from './types-44.js';
import type { MetadataMap } from './types-32.js';
/**
 * Shape $ (Value): {@link InvoiceSnapshot}. A frozen copy of an issued invoice's content,
 * including line items, charges, discounts, tax identities, and pricing amounts.
 */
export type InvoiceSnapshot = {
    /**
     * Shape $ (Value): {@link Address}. Billing address captured on the invoice. Kept after the
     * customer is deleted, because an issued invoice must keep it. A postal address. Every address
     * has country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "billing_address"?: Address;
    /** Shape $ (Value): string. The backing order's buyer note, captured on the invoice. */
    "buyer_note"?: string;
    /**
     * Shape $ (Value): {@link TaxIdentity} or null. Buyer tax identity captured on the invoice.
     * Kept after the customer is deleted, because an issued invoice must keep it. Shape $.anyOf[1]
     * (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
     * credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection
     * in display order; replacing the array requires the parent's expected_version. Existing
     * entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one.
     * Shape $.anyOf[2] (Value): null.
     */
    "buyer_tax_identity": ((TaxIdentity) | (null));
    /**
     * Shape $ (Value): Array of {@link OrderCharge}. The backing order's service charges, frozen
     * at issue. Shape $[] (Value): {@link OrderCharge}. An additional charge applied to an order.
     */
    "charges"?: Array<OrderCharge>;
    /**
     * Shape $ (Value): string. Buyer name captured on the invoice. Kept after the customer is
     * deleted, because an issued invoice must keep it.
     */
    "customer_display_name"?: string;
    /** Shape $ (Value): string. Buyer email captured on the invoice. */
    "customer_email"?: string;
    /**
     * Shape $ (Value): Array of {@link InvoiceDiscount}. The discounts applied to the backing
     * order, frozen at issue. Shape $[] (Value): {@link InvoiceDiscount}. A discount applied to an
     * invoice, with its source, the discount amount, the amount actually applied, and any
     * promotion.
     */
    "discounts"?: Array<InvoiceDiscount>;
    /**
     * Shape $ (Value): string. The backing order's internal note, captured on the invoice.
     * Merchant reads only; buyer reads leave it out.
     */
    "internal_note"?: string;
    /**
     * Shape $ (Value): Array of {@link InvoiceLineItem}. The billed line items, frozen at issue. A
     * draft previews the backing order's lines. Shape $[] (Value): {@link InvoiceLineItem}. A line
     * item on an invoice, with its quantity, unit price, discount, tax, and totals, and the
     * product, variant, or bundle it came from.
     */
    "line_items"?: Array<InvoiceLineItem>;
    /**
     * Shape $ (Value): string. Your business name as shown on the invoice. A draft shows your
     * current name; issue freezes it.
     */
    "merchant_display_name"?: string;
    /**
     * Shape $ (Value): {@link PricingAmounts}. The invoice's pricing totals. Its total_money is
     * the invoice total that the top-level total_money reports. The money totals for an order or
     * invoice: subtotal, discounts, charges, tax, requested tip, and total.
     */
    "pricing_amounts": PricingAmounts;
    /**
     * Shape $ (Value): {@link InvoiceTip}. The tip requested on the backing order, frozen at
     * issue. Absent when none was requested. A tip requested on an invoice, set as a fixed amount
     * or a percentage, with an optional name and description.
     */
    "requested_tip"?: InvoiceTip;
    /**
     * Shape $ (Value): {@link TaxIdentity} or null. Identity frozen on the source invoice at
     * issue. Later profile edits do not change this document. Shape $.anyOf[1] (Value): {@link
     * TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit notes. Does
     * not verify IDs or change tax treatment. Tax IDs are an owned collection in display order;
     * replacing the array requires the parent's expected_version. Existing entries retain their
     * document_tax_id; omit an entry to remove it, or omit its ID to add one. Shape $.anyOf[2]
     * (Value): null.
     */
    "seller_tax_identity": ((TaxIdentity) | (null));
    /**
     * Shape $ (Value): Array of {@link TaxBreakdown}. Tax jurisdiction rows for this invoice. A
     * draft previews the backing order's current rows; issue freezes them, and the API, hosted
     * invoice, and PDF share the frozen rows. External tax produces these rows. Automatic tax
     * doesn't, so an automatic-tax invoice reports its tax in pricing_amounts and each line's
     * tax_money. On a newly issued external-tax invoice, rows sum to pricing_amounts.tax_money,
     * and rows with price_mode inclusive sum to pricing_amounts.inclusive_tax_money. A row's
     * order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge
     * in charges. Always [] when no tax rows apply. Some older external-tax invoices have no
     * frozen rows. Shape $[] (Value): {@link TaxBreakdown}. The tax calculated for one
     * jurisdiction on an order, line item, or charge, with the taxable amount, rate or flat
     * amount, and tax.
     */
    "tax_breakdowns": Array<TaxBreakdown>;
};
/**
 * Shape $ (Value): {@link InvoiceTip}. A tip requested on an invoice, set as a fixed amount or a
 * percentage, with an optional name and description.
 */
export type InvoiceTip = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string. */
    "description"?: string;
    /** Shape $ (Value): string. */
    "name"?: string;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
};
export type InvoicesAssessLateFeeInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link AssessInvoiceLateFeeRequestInput}. The request body for: Assess an
     * invoice late fee.
     */
    "body": InputValue<AssessInvoiceLateFeeRequestInput>;
};
export type InvoicesCancelPaymentAttemptInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "invoice_payment_attempt_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type InvoicesCollectInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CollectInvoiceRequestInput}. The request body for: Collect invoice.
     */
    "body": InputValue<CollectInvoiceRequestInput>;
};
export type InvoicesCreateCheckoutSessionInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link InvoiceCheckoutSessionRequestInput}. The request body for: Create an
     * invoice checkout session for the current buyer; Get or create invoice checkout collection.
     */
    "body"?: InputValue<InvoiceCheckoutSessionRequestInput>;
};
export type InvoicesCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CreateInvoiceRequestInput}. The request body for: Create invoice. */
    "body": InputValue<CreateInvoiceRequestInput>;
};
export type InvoicesGetInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "order". Shape $[] (Value): string.
     * Value enum: "customer", "order".
     */
    "expand"?: InputValue<Array<"customer" | "order">>;
};
export type InvoicesGetManualPaymentInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "invoice_manual_payment_id": InputValue<string>;
};
export type InvoicesGetPDFInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
};
export type InvoicesGetPDFResponse = Uint8Array;
export type InvoicesGetPaymentAttemptInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "invoice_payment_attempt_id": InputValue<string>;
};
export type InvoicesIssueInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link IssueInvoiceRequestInput}. The request body for: Issue invoice. */
    "body": InputValue<IssueInvoiceRequestInput>;
};
export type InvoicesListActivitiesInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "draft_created", "issued", "sent",
     * "delivery_sent", "reminder_sent", "viewed", "payment_attempt_started", "payment_applied",
     * "manual_payment_recorded", "manual_payment_reversed", "refund_succeeded", "voided",
     * "token_regenerated", "collection_blocked", "collection_block_resolved", "updated",
     * "marked_uncollectible", "payment_processing", "issue_failed", "overdue", "reminder_due",
     * "late_fee_due", "late_fee_assessed", "late_fee_waived", "credited". Shape $[] (Value):
     * string. Value enum: "draft_created", "issued", "sent", "delivery_sent", "reminder_sent",
     * "viewed", "payment_attempt_started", "payment_applied", "manual_payment_recorded",
     * "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated",
     * "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible",
     * "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due",
     * "late_fee_assessed", "late_fee_waived", "credited".
     */
    "activity_type"?: InputValue<Array<"draft_created"
        | "issued"
        | "sent"
        | "delivery_sent"
        | "reminder_sent"
        | "viewed"
        | "payment_attempt_started"
        | "payment_applied"
        | "manual_payment_recorded"
        | "manual_payment_reversed"
        | "refund_succeeded"
        | "voided"
        | "token_regenerated"
        | "collection_blocked"
        | "collection_block_resolved"
        | "updated"
        | "marked_uncollectible"
        | "payment_processing"
        | "issue_failed"
        | "overdue"
        | "reminder_due"
        | "late_fee_due"
        | "late_fee_assessed"
        | "late_fee_waived"
        | "credited">>;
};
export type InvoicesListDeliveryAttemptsInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type InvoicesListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "draft", "open", "partially_paid",
     * "paid", "void", "uncollectible", "credited". Shape $[] (Value): string. Value enum: "draft",
     * "open", "partially_paid", "paid", "void", "uncollectible", "credited".
     */
    "status"?: InputValue<Array<"draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "customer_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "subscription_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "invoice_number"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "buyer_initiated", "automatic",
     * "external". Shape $[] (Value): string. Value enum: "buyer_initiated", "automatic",
     * "external".
     */
    "collection_mode"?: InputValue<Array<"buyer_initiated" | "automatic" | "external">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "issued_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "issued_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "due_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "due_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): boolean. */
    "is_overdue"?: InputValue<boolean>;
    /** Shape $ (Value): boolean. */
    "has_outstanding_balance"?: InputValue<boolean>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at",
     * "due_at", "invoice_number", "outstanding_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "order". Shape $[] (Value): string.
     * Value enum: "customer", "order".
     */
    "expand"?: InputValue<Array<"customer" | "order">>;
};
export type InvoicesListManualPaymentsInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
};
export type InvoicesListPaymentAttemptsInput = InvoicesListManualPaymentsInput;
export type InvoicesMarkUncollectibleInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ResourceVersionRequestInput}. The request body for: Mark invoice
     * uncollectible; Regenerate invoice public link; Resume one of the current buyer's
     * subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void
     * invoice.
     */
    "body"?: InputValue<ResourceVersionRequestInput>;
};
export type InvoicesRecordManualPaymentInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateInvoiceManualPaymentRequestInput}. The request body for:
     * Create invoice manual payment.
     */
    "body": InputValue<CreateInvoiceManualPaymentRequestInput>;
};
export type InvoicesRegeneratePublicLinkInput = InvoicesMarkUncollectibleInput;
export type InvoicesReverseManualPaymentInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "invoice_manual_payment_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ReverseInvoiceManualPaymentRequestInput}. The request body for:
     * Reverse manual invoice payment.
     */
    "body": InputValue<ReverseInvoiceManualPaymentRequestInput>;
};
export type InvoicesSendReminderInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type InvoicesUpdateInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link UpdateInvoiceRequestInput}. The request body for: Update invoice. */
    "body": InputValue<UpdateInvoiceRequestInput>;
};
export type InvoicesVoidResourceInput = InvoicesMarkUncollectibleInput;
export type InvoicesWaiveLateFeeInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "invoice_late_fee_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link WaiveInvoiceLateFeeRequestInput}. The request body for: Waive an
     * unpaid invoice late fee.
     */
    "body": InputValue<WaiveInvoiceLateFeeRequestInput>;
};
/** Shape $ (Value): {@link IssueCreditNoteRequest}. The request body for: Issue credit note. */
export type IssueCreditNoteRequest = ({
    /**
     * Shape $ (Value): {@link CreditNoteIssueAllocationRequest}. Issue the credit note and apply
     * credit to its invoice atomically. If the allocation fails, the note stays a draft. Omit
     * amount_money to apply the smaller of the credit available after issue and the invoice's
     * outstanding balance. Cannot be combined with refund. Credit to apply to the invoice when
     * issuing a credit note.
     */
    "allocation"?: CreditNoteIssueAllocationRequest;
    /**
     * Shape $ (Value): integer string. Credit note version last read. Optional; a stale version
     * returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link CreditNoteRefundRequest}. Create a linked refund when the credit
     * note is issued. Requires both credit-note and refund write permissions and a paid invoice.
     * Cannot be combined with allocation. Refund details you supply when issuing a credit note:
     * the reason, an optional message, and an optional amount.
     */
    "refund"?: CreditNoteRefundRequest;
});
/**
 * Shape $ (Value): {@link IssueCreditNoteRequestInput}. The request body for: Issue credit note.
 */
export type IssueCreditNoteRequestInput = ({
    /**
     * Shape $ (Value): {@link CreditNoteIssueAllocationRequestInput}. Issue the credit note and
     * apply credit to its invoice atomically. If the allocation fails, the note stays a draft.
     * Omit amount_money to apply the smaller of the credit available after issue and the invoice's
     * outstanding balance. Cannot be combined with refund. Credit to apply to the invoice when
     * issuing a credit note.
     */
    "allocation"?: CreditNoteIssueAllocationRequestInput;
    /**
     * Shape $ (Value): integer string. Credit note version last read. Optional; a stale version
     * returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link CreditNoteRefundRequestInput}. Create a linked refund when the
     * credit note is issued. Requires both credit-note and refund write permissions and a paid
     * invoice. Cannot be combined with allocation. Refund details you supply when issuing a credit
     * note: the reason, an optional message, and an optional amount.
     */
    "refund"?: CreditNoteRefundRequestInput;
})
    & ({
    "allocation"?: never;
} | {
    "refund"?: never;
});
/**
 * Shape $ (Value): {@link IssueCreditNoteResponse}. A response containing `IssueCreditNoteResult`
 * data.
 */
export type IssueCreditNoteResponse = {
    /**
     * Shape $ (Value): {@link IssueCreditNoteResult}. The issued credit note, its invoice after
     * issue, and the linked allocation or refund when requested.
     */
    "data": IssueCreditNoteResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link IssueCreditNoteResult}. The issued credit note, its invoice after issue,
 * and the linked allocation or refund when requested.
 */
export type IssueCreditNoteResult = {
    /**
     * Shape $ (Value): {@link CreditNote}. The issued credit note. Its version is the target of
     * expected_version. A correction against an issued invoice. Credit notes reduce what is owed;
     * refunds return what was already collected.
     */
    "credit_note": CreditNote;
    /**
     * Shape $ (Value): {@link CreditNoteAllocation}. The linked allocation, present when
     * allocation was requested. Its idempotency_key is issue: followed by the issue request's
     * Idempotency-Key. One application of credit to the invoice. Allocations are append-only: a
     * reversal sets reversed_at rather than removing the row.
     */
    "credit_note_allocation"?: CreditNoteAllocation;
    /**
     * Shape $ (Value): {@link Invoice}. The invoice state after the credit note was issued. A bill
     * issued to a customer.
     */
    "invoice": Invoice;
    /**
     * Shape $ (Value): {@link Refund}. The linked refund, present when refund was requested. A
     * pending refund has been accepted but has not completed. Money returned against a collected
     * payment.
     */
    "refund"?: Refund;
};
/** Shape $ (Value): {@link IssueInvoiceRequest}. The request body for: Issue invoice. */
export type IssueInvoiceRequest = {
    /**
     * Shape $ (Value): string. How the invoice reaches its recipient. Omit it to use
     * merchant_default. Default: "merchant_default". Value enum: "merchant_default", "email",
     * "caller_managed".
     */
    "delivery_mode"?: "merchant_default" | "email" | "caller_managed" | (string & {});
    /**
     * Shape $ (Value): integer string. Invoice version last read. Optional; a stale version
     * returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
};
/** Shape $ (Value): {@link IssueInvoiceRequestInput}. The request body for: Issue invoice. */
export type IssueInvoiceRequestInput = {
    /**
     * Shape $ (Value): string. How the invoice reaches its recipient. Omit it to use
     * merchant_default. Default: "merchant_default". Value enum: "merchant_default", "email",
     * "caller_managed".
     */
    "delivery_mode"?: "merchant_default" | "email" | "caller_managed";
    /**
     * Shape $ (Value): integer string. Invoice version last read. Optional; a stale version
     * returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link IssueSandboxAPIKeyRequest}. The request body for: Issue sandbox test
 * key.
 */
export type IssueSandboxAPIKeyRequest = ({
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "full", "read_only", "restricted".
     */
    "access": "full" | "read_only" | "restricted" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
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
    & ((Exclude<IssueSandboxAPIKeyRequestFull & object, readonly unknown[]>)
    | (Exclude<IssueSandboxAPIKeyRequestReadOnly & object, readonly unknown[]>)
    | (Exclude<IssueSandboxAPIKeyRequestRestricted & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link IssueSandboxAPIKeyRequestFull}. The `full` variant of
 * `IssueSandboxAPIKeyRequest`.
 */
export type IssueSandboxAPIKeyRequestFull = ({
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "full".
     */
    "access": "full" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
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
});
/**
 * Shape $ (Value): {@link IssueSandboxAPIKeyRequestFullInput}. The `full` variant of
 * `IssueSandboxAPIKeyRequest`.
 */
export type IssueSandboxAPIKeyRequestFullInput = ({
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "full".
     */
    "access": "full";
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
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
    & (({
    "scopes"?: never;
}));
/**
 * Shape $ (Value): {@link IssueSandboxAPIKeyRequestInput}. The request body for: Issue sandbox
 * test key.
 */
export type IssueSandboxAPIKeyRequestInput = ({
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "full", "read_only", "restricted".
     */
    "access": "full" | "read_only" | "restricted";
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
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
    & ((Exclude<IssueSandboxAPIKeyRequestFullInput & object, readonly unknown[]>)
    | (Exclude<IssueSandboxAPIKeyRequestReadOnlyInput & object, readonly unknown[]>)
    | (Exclude<IssueSandboxAPIKeyRequestRestrictedInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link IssueSandboxAPIKeyRequestReadOnly}. The `read_only` variant of
 * `IssueSandboxAPIKeyRequest`.
 */
export type IssueSandboxAPIKeyRequestReadOnly = ({
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "read_only".
     */
    "access": "read_only" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
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
});
/**
 * Shape $ (Value): {@link IssueSandboxAPIKeyRequestReadOnlyInput}. The `read_only` variant of
 * `IssueSandboxAPIKeyRequest`.
 */
export type IssueSandboxAPIKeyRequestReadOnlyInput = ({
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "read_only".
     */
    "access": "read_only";
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
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
    & (({
    "scopes"?: never;
}));
/**
 * Shape $ (Value): {@link IssueSandboxAPIKeyRequestRestricted}. The `restricted` variant of
 * `IssueSandboxAPIKeyRequest`.
 */
export type IssueSandboxAPIKeyRequestRestricted = {
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "restricted".
     */
    "access": "restricted" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
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
};
/**
 * Shape $ (Value): {@link IssueSandboxAPIKeyRequestRestrictedInput}. The `restricted` variant of
 * `IssueSandboxAPIKeyRequest`.
 */
export type IssueSandboxAPIKeyRequestRestrictedInput = {
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "restricted".
     */
    "access": "restricted";
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
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
};
export type KnownWebhookEvent = WebhookEventBalanceTransactionCreated
    | WebhookEventBalanceTransactionUpdated
    | WebhookEventBalanceUpdated
    | WebhookEventBundleArchived
    | WebhookEventBundleCreated
    | WebhookEventBundleUpdated
    | WebhookEventCategoryCreated
    | WebhookEventCategoryDeleted
    | WebhookEventCategoryUpdated
    | WebhookEventCheckoutSessionClosed
    | WebhookEventCheckoutSessionCreated
    | WebhookEventCheckoutSessionExpired
    | WebhookEventCheckoutSessionInvalidated
    | WebhookEventCheckoutSessionPaid
    | WebhookEventCheckoutSessionPartiallyPaid
    | WebhookEventCreditNoteAllocationCreated
    | WebhookEventCreditNoteAllocationReversed
    | WebhookEventCreditNoteCreated
    | WebhookEventCreditNoteIssued
    | WebhookEventCreditNoteUpdated
    | WebhookEventCreditNoteVoided
    | WebhookEventCustomDomainArchived
    | WebhookEventCustomDomainUpdated
    | WebhookEventCustomerDeletionRequestCompleted
    | WebhookEventCustomerDeletionRequestCreated
    | WebhookEventCustomerDeletionRequestFailed
    | WebhookEventCustomerDeletionRequestProcessing
    | WebhookEventCustomerDeletionRequestRejected
    | WebhookEventCustomerCreated
    | WebhookEventCustomerDeleted
    | WebhookEventCustomerUpdated
    | WebhookEventDeliveryLocationSetActivated
    | WebhookEventDeliveryLocationSetArchived
    | WebhookEventDeliveryLocationSetCreated
    | WebhookEventDeliveryLocationSetDeactivated
    | WebhookEventDeliveryLocationSetUpdated
    | WebhookEventDeliveryMethodActivated
    | WebhookEventDeliveryMethodArchived
    | WebhookEventDeliveryMethodCreated
    | WebhookEventDeliveryMethodDeactivated
    | WebhookEventDeliveryMethodUpdated
    | WebhookEventDeliveryProfileActivated
    | WebhookEventDeliveryProfileArchived
    | WebhookEventDeliveryProfileCreated
    | WebhookEventDeliveryProfileDeactivated
    | WebhookEventDeliveryProfileUpdated
    | WebhookEventDeliveryRateCallbackActivated
    | WebhookEventDeliveryRateCallbackArchived
    | WebhookEventDeliveryRateCallbackCreated
    | WebhookEventDeliveryRateCallbackDeactivated
    | WebhookEventDeliveryRateCallbackUpdated
    | WebhookEventDeliveryRevocationCreated
    | WebhookEventDeliverySelectionCommitted
    | WebhookEventDeliveryZoneActivated
    | WebhookEventDeliveryZoneArchived
    | WebhookEventDeliveryZoneCreated
    | WebhookEventDeliveryZoneDeactivated
    | WebhookEventDeliveryZoneUpdated
    | WebhookEventDisputeCreated
    | WebhookEventDisputeInquiryClosed
    | WebhookEventDisputeLost
    | WebhookEventDisputeNeedsResponse
    | WebhookEventDisputePrevented
    | WebhookEventDisputeUpdated
    | WebhookEventDisputeWon
    | WebhookEventEnvironmentGrantCreated
    | WebhookEventEnvironmentGrantRevoked
    | WebhookEventFraudWarningCreated
    | WebhookEventFraudWarningUpdated
    | WebhookEventFulfillmentEventCreated
    | WebhookEventFulfillmentCanceled
    | WebhookEventFulfillmentCompleted
    | WebhookEventFulfillmentCreated
    | WebhookEventFulfillmentFailed
    | WebhookEventFulfillmentUpdated
    | WebhookEventGiftCardLoadCreated
    | WebhookEventGiftCardLoadUpdated
    | WebhookEventGiftCardNotificationCreated
    | WebhookEventGiftCardNotificationUpdated
    | WebhookEventGiftCardRedemptionCreated
    | WebhookEventGiftCardRedemptionUpdated
    | WebhookEventGiftCardTransactionCreated
    | WebhookEventGiftCardCreated
    | WebhookEventGiftCardUpdated
    | WebhookEventInventoryCountApplied
    | WebhookEventInventoryLevelShortageDetected
    | WebhookEventInventoryLevelUpdated
    | WebhookEventInventoryReceiptCreated
    | WebhookEventInventoryReservationActionRequired
    | WebhookEventInventoryReservationAtRisk
    | WebhookEventInventoryReservationClosed
    | WebhookEventInventoryReservationCommitted
    | WebhookEventInventoryReservationConsumed
    | WebhookEventInventoryReservationCreated
    | WebhookEventInventoryReservationHoldExpired
    | WebhookEventInventoryReservationReleased
    | WebhookEventInventoryTransferClosed
    | WebhookEventInventoryTransferDeparted
    | WebhookEventInventoryTransferLost
    | WebhookEventInventoryTransferReceived
    | WebhookEventInventoryTransferReturned
    | WebhookEventInvoiceDeliveryAttemptFailed
    | WebhookEventInvoiceDeliveryAttemptSent
    | WebhookEventInvoiceDeliveryAttemptSuppressed
    | WebhookEventInvoiceManualPaymentCreated
    | WebhookEventInvoiceManualPaymentReversed
    | WebhookEventInvoicePaymentAttemptCanceled
    | WebhookEventInvoicePaymentAttemptExpired
    | WebhookEventInvoicePaymentAttemptFailed
    | WebhookEventInvoicePaymentAttemptProcessing
    | WebhookEventInvoicePaymentAttemptSettled
    | WebhookEventInvoiceCollectionBlockResolved
    | WebhookEventInvoiceCollectionBlocked
    | WebhookEventInvoiceCreated
    | WebhookEventInvoiceCredited
    | WebhookEventInvoiceIssueFailed
    | WebhookEventInvoiceIssued
    | WebhookEventInvoiceLateFeeAssessed
    | WebhookEventInvoiceLateFeeDue
    | WebhookEventInvoiceLateFeeWaived
    | WebhookEventInvoiceMarkedUncollectible
    | WebhookEventInvoiceOverdue
    | WebhookEventInvoicePaid
    | WebhookEventInvoicePartiallyPaid
    | WebhookEventInvoicePartiallyRefunded
    | WebhookEventInvoiceRefunded
    | WebhookEventInvoiceReminderDue
    | WebhookEventInvoiceReopened
    | WebhookEventInvoiceSent
    | WebhookEventInvoiceUpdated
    | WebhookEventInvoiceVoided
    | WebhookEventMerchantBillingBalanceUpdated
    | WebhookEventMerchantBillingInvoiceIssued
    | WebhookEventMerchantBillingInvoiceUpdated
    | WebhookEventMerchantReadinessUpdated
    | WebhookEventMerchantUpdated
    | WebhookEventModifierGroupArchived
    | WebhookEventModifierGroupCreated
    | WebhookEventModifierGroupUpdated
    | WebhookEventModifierSetArchived
    | WebhookEventModifierSetCreated
    | WebhookEventModifierSetUpdated
    | WebhookEventOrderClosed
    | WebhookEventOrderCreated
    | WebhookEventOrderInventoryExceptionCreated
    | WebhookEventOrderInventoryExceptionResolved
    | WebhookEventOrderPaid
    | WebhookEventOrderPartiallyPaid
    | WebhookEventOrderPartiallyRefunded
    | WebhookEventOrderRefunded
    | WebhookEventOrderUpdated
    | WebhookEventPackageCreated
    | WebhookEventPackageUpdated
    | WebhookEventPartnerAppInstallCreated
    | WebhookEventPartnerAppInstallPermissionsUpdated
    | WebhookEventPartnerAppInstallRevoked
    | WebhookEventPartnerAppInstallUpdated
    | WebhookEventPaymentIntentCanceled
    | WebhookEventPaymentIntentCreated
    | WebhookEventPaymentIntentExpired
    | WebhookEventPaymentIntentFulfillmentHoldUpdated
    | WebhookEventPaymentIntentPaymentFailed
    | WebhookEventPaymentIntentProcessing
    | WebhookEventPaymentIntentRequiresAction
    | WebhookEventPaymentIntentRequiresCapture
    | WebhookEventPaymentIntentSucceeded
    | WebhookEventPaymentIntentUpdated
    | WebhookEventPaymentLinkCreated
    | WebhookEventPaymentLinkUpdated
    | WebhookEventPaymentMethodActivated
    | WebhookEventPaymentMethodArchived
    | WebhookEventPaymentMethodFailed
    | WebhookEventPaymentReviewClosed
    | WebhookEventPaymentReviewOpened
    | WebhookEventPaymentReviewReopened
    | WebhookEventPayoutDestinationArchived
    | WebhookEventPayoutDestinationCreated
    | WebhookEventPayoutDestinationDisabled
    | WebhookEventPayoutDestinationUpdated
    | WebhookEventPayoutSettingsUpdated
    | WebhookEventPayoutCanceled
    | WebhookEventPayoutCreated
    | WebhookEventPayoutFailed
    | WebhookEventPayoutPaid
    | WebhookEventPayoutReversed
    | WebhookEventPayoutUpdated
    | WebhookEventProductVariantArchived
    | WebhookEventProductVariantCreated
    | WebhookEventProductVariantUpdated
    | WebhookEventProductArchived
    | WebhookEventProductCreated
    | WebhookEventProductUpdated
    | WebhookEventPromotionCodeArchived
    | WebhookEventPromotionCodeCreated
    | WebhookEventPromotionCodeUpdated
    | WebhookEventPromotionArchived
    | WebhookEventPromotionCreated
    | WebhookEventPromotionUpdated
    | WebhookEventRefundCreated
    | WebhookEventRefundFailed
    | WebhookEventRefundPartiallySucceeded
    | WebhookEventRefundSucceeded
    | WebhookEventRefundUpdated
    | WebhookEventReportFailed
    | WebhookEventReportSucceeded
    | WebhookEventReturnDispositionCreated
    | WebhookEventReturnDispositionUpdated
    | WebhookEventReturnInspectionAcceptanceDecided
    | WebhookEventReturnInspectionCreated
    | WebhookEventReturnInspectionSuperseded
    | WebhookEventReturnReceiptCreated
    | WebhookEventReturnReceiptSuperseded
    | WebhookEventReturnReceiptVerified
    | WebhookEventReturnResolutionCreated
    | WebhookEventReturnResolutionUpdated
    | WebhookEventReturnCanceled
    | WebhookEventReturnCompleted
    | WebhookEventReturnCreated
    | WebhookEventReturnDecisionRecorded
    | WebhookEventReturnReopened
    | WebhookEventReturnUpdated
    | WebhookEventShipmentCreated
    | WebhookEventShipmentUpdated
    | WebhookEventSubscriptionDeliveryMigrationCompleted
    | WebhookEventSubscriptionPaymentRetryCreated
    | WebhookEventSubscriptionPaymentRetryFailed
    | WebhookEventSubscriptionPaymentRetrySucceeded
    | WebhookEventSubscriptionActivated
    | WebhookEventSubscriptionCanceled
    | WebhookEventSubscriptionCancellationScheduled
    | WebhookEventSubscriptionCreated
    | WebhookEventSubscriptionCycleSkipped
    | WebhookEventSubscriptionDeliveryActionRequired
    | WebhookEventSubscriptionDeliveryPauseUpcoming
    | WebhookEventSubscriptionDeliveryUpdated
    | WebhookEventSubscriptionDunningExhausted
    | WebhookEventSubscriptionPastDue
    | WebhookEventSubscriptionPaused
    | WebhookEventSubscriptionPaymentSucceeded
    | WebhookEventSubscriptionPlanChanged
    | WebhookEventSubscriptionReactivated
    | WebhookEventSubscriptionRenewalUpcoming
    | WebhookEventSubscriptionResumed
    | WebhookEventSubscriptionTrialEnding
    | WebhookEventSubscriptionUpdated
    | WebhookEventTaxConnectionUpdated;
/**
 * Shape $ (Value): {@link LegalSettings}. Merchant legal links and terms settings: contract,
 * refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the
 * terms.
 */
export type LegalSettings = {
    /** Shape $ (Value): string. */
    "contract_url"?: string;
    /** Shape $ (Value): string. */
    "refund_policy_url"?: string;
    /** Shape $ (Value): boolean. */
    "require_terms_of_service"?: boolean;
    /** Shape $ (Value): string. */
    "shipping_policy_url"?: string;
    /** Shape $ (Value): string. */
    "terms_of_service_url"?: string;
};
/**
 * Shape $ (Value): {@link LegalSettingsRequest}. Changes to a merchant's legal settings. Send null
 * on a URL to clear it.
 */
export type LegalSettingsRequest = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "contract_url"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "refund_policy_url"?: string | null;
    /** Shape $ (Value): boolean. */
    "require_terms_of_service"?: boolean;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "shipping_policy_url"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "terms_of_service_url"?: string | null;
};
/**
 * Shape $ (Value): {@link LegalSettingsRequestInput}. Changes to a merchant's legal settings. Send
 * null on a URL to clear it.
 */
export type LegalSettingsRequestInput = LegalSettingsRequest;
/**
 * Shape $ (Value): {@link LineItemFulfillmentOriginRequest}. Where a line item ships or is
 * fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment method.
 */
export type LineItemFulfillmentOriginRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "fixed_location", "inventory_routing", "method_origin".
     */
    "origin_policy_type": "fixed_location" | "inventory_routing" | "method_origin" | (string & {});
};
/**
 * Shape $ (Value): {@link LineItemFulfillmentOriginRequestInput}. Where a line item ships or is
 * fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment method.
 */
export type LineItemFulfillmentOriginRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "location_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "fixed_location", "inventory_routing", "method_origin".
     */
    "origin_policy_type": "fixed_location" | "inventory_routing" | "method_origin";
};
/**
 * Shape $ (Value): {@link LineItemFulfillmentRequest}. Fulfillment requirements you supply for an
 * order line item, such as allowed fulfillment types, package size and weight, and origin.
 */
export type LineItemFulfillmentRequest = {
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "allowed_types"?: Array<string>;
    /**
     * Shape $ (Value): string. Value enum: "combine_when_compatible", "separate_profile",
     * "separate_line_item", "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Shape $ (Value): {@link LineItemFulfillmentOriginRequest}. Where a line item ships or is
     * fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment
     * method.
     */
    "origin_policy"?: LineItemFulfillmentOriginRequest;
    /** Shape $ (Value): string.  Value enum: "none", "required". */
    "requirement": "none" | "required" | (string & {});
    /** Shape $ (Value): string.  Value enum: "quote", "manual". */
    "resolution_mode"?: "quote" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "whole_line_item", "quantity_split_allowed". */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed" | (string & {});
};
/**
 * Shape $ (Value): {@link LineItemFulfillmentRequestInput}. Fulfillment requirements you supply
 * for an order line item, such as allowed fulfillment types, package size and weight, and origin.
 */
export type LineItemFulfillmentRequestInput = {
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "allowed_types"?: Array<string>;
    /**
     * Shape $ (Value): string. Value enum: "combine_when_compatible", "separate_profile",
     * "separate_line_item", "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone";
    /**
     * Shape $ (Value): {@link LineItemFulfillmentOriginRequestInput}. Where a line item ships or
     * is fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment
     * method.
     */
    "origin_policy"?: LineItemFulfillmentOriginRequestInput;
    /** Shape $ (Value): string.  Value enum: "none", "required". */
    "requirement": "none" | "required";
    /** Shape $ (Value): string.  Value enum: "quote", "manual". */
    "resolution_mode"?: "quote" | "manual";
    /** Shape $ (Value): string.  Value enum: "whole_line_item", "quantity_split_allowed". */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed";
};
/**
 * Shape $ (Value): {@link LineItemInventoryDemand}. The quantity of one inventory item that each
 * unit of an order line item uses.
 */
export type LineItemInventoryDemand = {
    /** Shape $ (Value): string. */
    "bundle_component_id"?: string;
    /** Shape $ (Value): string. */
    "component_snapshot_id"?: string;
    /** Shape $ (Value): string. */
    "inventory_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity_per_line_item_unit": `${bigint}`;
};
/**
 * Shape $ (Value): {@link LineItemInventorySnapshot}. Whether an order line item tracks inventory,
 * and the inventory item quantities each unit demands.
 */
export type LineItemInventorySnapshot = {
    /**
     * Shape $ (Value): Array of {@link LineItemInventoryDemand}. Shape $[] (Value): {@link
     * LineItemInventoryDemand}. The quantity of one inventory item that each unit of an order line
     * item uses.
     */
    "demands": Array<LineItemInventoryDemand>;
    /** Shape $ (Value): string.  Value enum: "not_tracked", "tracked". */
    "inventory_tracking": "not_tracked" | "tracked" | (string & {});
};
/**
 * Shape $ (Value): {@link LinkCustomerGuestPurchasesRequest}. The request body for: Link guest
 * purchases to a customer.
 */
export type LinkCustomerGuestPurchasesRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "customer_verification_id": string;
};
/**
 * Shape $ (Value): {@link LinkCustomerGuestPurchasesRequestInput}. The request body for: Link
 * guest purchases to a customer.
 */
export type LinkCustomerGuestPurchasesRequestInput = LinkCustomerGuestPurchasesRequest;
/** Shape $ (Value): {@link ListReturnActivitiesResponse}. A page of `ReturnActivity` objects. */
export type ListReturnActivitiesResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnActivity}. Shape $[] (Value): {@link ReturnActivity}.
     * One entry in a Return's merchant activity history.
     */
    "data": Array<ReturnActivity>;
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
    "request_id": string;
};
/**
 * Shape $ (Value): {@link ListReturnDispositionsResponse}. A page of `ReturnDisposition` objects.
 */
export type ListReturnDispositionsResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnDisposition}. Shape $[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     */
    "data": Array<ReturnDisposition>;
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
    "request_id": string;
};
/** Shape $ (Value): {@link ListReturnInspectionsResponse}. A page of `ReturnInspection` objects. */
export type ListReturnInspectionsResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnInspection}. Shape $[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items.
     */
    "data": Array<ReturnInspection>;
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
    "request_id": string;
};
/** Shape $ (Value): {@link ListReturnLineItemsResponse}. A page of `ReturnLineItem` objects. */
export type ListReturnLineItemsResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnLineItem}. Shape $[] (Value): {@link ReturnLineItem}.
     * An item included in a return request.
     */
    "data": Array<ReturnLineItem>;
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
    "request_id": string;
};
/** Shape $ (Value): {@link ListReturnPoliciesResponse}. A page of `ReturnPolicy` objects. */
export type ListReturnPoliciesResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnPolicy}. Shape $[] (Value): {@link ReturnPolicy}.
     * Rules governing whether and how purchased items can be returned.
     */
    "data": Array<ReturnPolicy>;
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
    "request_id": string;
};
/**
 * Shape $ (Value): {@link ListReturnPolicyRevisionsResponse}. A page of `ReturnPolicyRevision`
 * objects.
 */
export type ListReturnPolicyRevisionsResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnPolicyRevision}. Shape $[] (Value): {@link
     * ReturnPolicyRevision}. A saved revision of a return policy.
     */
    "data": Array<ReturnPolicyRevision>;
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
    "request_id": string;
};
/** Shape $ (Value): {@link ListReturnReasonsResponse}. A page of `ReturnReason` objects. */
export type ListReturnReasonsResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnReason}. Shape $[] (Value): {@link ReturnReason}. A
     * reason customers can select when requesting a return.
     */
    "data": Array<ReturnReason>;
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
    "request_id": string;
};
/** Shape $ (Value): {@link ListReturnReceiptsResponse}. A page of `ReturnReceipt` objects. */
export type ListReturnReceiptsResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnReceipt}. Shape $[] (Value): {@link ReturnReceipt}. A
     * record of returned items arriving at a location.
     */
    "data": Array<ReturnReceipt>;
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
    "request_id": string;
};
/** Shape $ (Value): {@link ListReturnResolutionsResponse}. A page of `ReturnResolution` objects. */
export type ListReturnResolutionsResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnResolution}. Shape $[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return.
     */
    "data": Array<ReturnResolution>;
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
    "request_id": string;
};
/** Shape $ (Value): {@link ListReturnsResponse}. A page of `Return` objects. */
export type ListReturnsResponse = {
    /**
     * Shape $ (Value): Array of {@link ReturnResource}. Shape $[] (Value): {@link ReturnResource}.
     * A request to send purchased items back.
     */
    "data": Array<ReturnResource>;
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
    "request_id": string;
};
/**
 * Shape $ (Value): {@link Location}. A physical or logical place a merchant operates from. Every
 * Location can hold stock. inventory_allocation_enabled controls whether it accepts inventory
 * allocation.
 */
export type Location = {
    /**
     * Shape $ (Value): {@link Address} or null. Published postal address. Shape $.anyOf[1]
     * (Value): {@link Address}. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country. Shape $.anyOf[2] (Value): null.
     */
    "address": ((Address) | (null));
    /**
     * Shape $ (Value): {@link LocationCoordinate}. Published geographic coordinate. A latitude and
     * longitude for a merchant location.
     */
    "coordinate"?: LocationCoordinate;
    /**
     * Shape $ (Value): string or null. Source of the stored latitude and longitude. Value enum:
     * "merchant_supplied", "geocoded", null.
     */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | null | (string & {}) | null;
    /** Shape $ (Value): string. Time the Location was created. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): integer string. Read-only version that advances only on geography changes
     * and is pinned by tax and delivery dependencies. It is not a request fence. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     */
    "geography_version": `${bigint}`;
    /**
     * Shape $ (Value): boolean. Whether this Location accepts inventory allocation. Always
     * present, including false when allocation is not configured.
     */
    "inventory_allocation_enabled": boolean;
    /** Shape $ (Value): string. Stable Location ID. */
    "location_id": string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /** Shape $ (Value): string. Merchant-facing Location name. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): {@link Address}. Provider-normalized address used for geography evaluation.
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "normalized_address"?: Address;
    /**
     * Shape $ (Value): string. Current Location lifecycle status. Value enum: "active",
     * "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Shape $ (Value): string. IANA timezone for local schedules. */
    "timezone": string;
    /** Shape $ (Value): string. Time the Location last changed. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): string. Address validation status. Value enum: "not_validated",
     * "validated", "merchant_verified".
     */
    "validation_status": "not_validated" | "validated" | "merchant_verified" | (string & {});
    /**
     * Shape $ (Value): integer string. Optimistic-concurrency version that advances on every
     * Location change. Use an integer string (decimal digits), not a floating-point number.
     * Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link LocationCoordinate}. A latitude and longitude for a merchant location.
 */
export type LocationCoordinate = {
    /**
     * Shape $ (Value): number. Latitude between -90 and 90. Responses always include this field,
     * including 0.
     */
    "latitude": number;
    /**
     * Shape $ (Value): number. Longitude between -180 and 180. Responses always include this
     * field, including 0.
     */
    "longitude": number;
};
