import type {
    Invoice,
    InvoiceCheckoutSessionRequestInput,
    InventoryTransferClosedEvent,
    InventoryTransferDepartedEvent,
    InventoryTransferLostEvent,
    InventoryTransferReceivedEvent,
    InventoryTransferReturnedEvent,
    InvoiceCollectionBlockResolvedEvent,
    InvoiceCollectionBlockedEvent
} from './types-28.js';
import type {
    PartnerWebhookEnvelope,
    PaymentIntentCanceledEvent,
    PaymentIntentCreatedEvent,
    PaymentIntentExpiredEvent,
    PaymentIntentFulfillmentHoldUpdatedEvent,
    PaymentIntentPaymentFailedEvent,
    PaymentIntentProcessingEvent,
    PaymentIntentRequiresActionEvent
} from './types-40.js';
import type {
    MerchantWebhookEnvelope,
    MerchantBillingBalanceUpdatedEvent,
    MerchantBillingInvoiceIssuedEvent,
    MerchantBillingInvoiceUpdatedEvent,
    MerchantReadinessUpdatedEvent,
    MerchantUpdatedEvent,
    ModifierGroupArchivedEvent,
    MetadataMap
} from './types-34.js';
import type { InputValue } from '../runtime.js';
import type {
    CollectInvoiceRequestInput,
    CheckoutSessionsListDeliverySelectionsParams,
    CheckoutSessionClosedEvent,
    CheckoutSessionCreatedEvent,
    CheckoutSessionExpiredEvent,
    CheckoutSessionInvalidatedEvent,
    CheckoutSessionPaidEvent,
    CheckoutSessionPartiallyPaidEvent
} from './types-5.js';
import type { AssessInvoiceLateFeeRequestInput, BalanceTransactionCreatedEvent, Address } from './types-0.js';
import type { CreateInvoiceManualPaymentRequestInput, CreateInvoiceRequestInput } from './types-8.js';
import type {
    CreditNotesListAllocationsParams,
    CreditNoteIssueAllocationRequest,
    CreditNoteRefundRequest,
    CreditNoteIssueAllocationRequestInput,
    CreditNoteRefundRequestInput,
    CreditNote,
    CreditNoteAllocation,
    CreditNoteAllocationCreatedEvent,
    CreditNoteAllocationReversedEvent,
    CreditNoteCreatedEvent,
    CreditNoteIssuedEvent,
    CreditNoteUpdatedEvent,
    CreditNoteVoidedEvent,
    CustomDomainArchivedEvent,
    CustomDomainUpdatedEvent
} from './types-12.js';
import type {
    ResourceVersionRequestInput,
    ResponseMeta,
    ReturnCanceledEvent,
    ReturnCompletedEvent,
    ReturnCreatedEvent,
    ReturnDecisionRecordedEvent,
    ReturnDispositionCreatedEvent,
    ReturnDispositionUpdatedEvent,
    ReturnInspectionAcceptanceDecidedEvent,
    ReturnInspectionCreatedEvent,
    ReturnActivity,
    ReturnDisposition,
    ReturnInspection
} from './types-48.js';
import type { ReverseInvoiceManualPaymentRequestInput, ReturnUpdatedEvent } from './types-51.js';
import type { UpdateInvoiceRequestInput } from './types-58.js';
import type { WaiveInvoiceLateFeeRequestInput } from './types-60.js';
import type {
    Refund,
    RefundCreatedEvent,
    RefundFailedEvent,
    RefundPartiallySucceededEvent,
    RefundSucceededEvent
} from './types-46.js';
import type {
    BalanceTransactionUpdatedEvent,
    BalanceUpdatedEvent,
    BundleArchivedEvent,
    BundleCreatedEvent,
    BundleUpdatedEvent
} from './types-1.js';
import type { CategoryCreatedEvent, CategoryDeletedEvent, CategoryUpdatedEvent } from './types-4.js';
import type {
    CustomerCreatedEvent,
    CustomerDeletedEvent,
    CustomerDeletionRequestCompletedEvent,
    CustomerDeletionRequestCreatedEvent,
    CustomerDeletionRequestFailedEvent,
    CustomerDeletionRequestProcessingEvent,
    CustomerDeletionRequestRejectedEvent,
    CustomerUpdatedEvent
} from './types-13.js';
import type {
    DeliveryLocationSetActivatedEvent,
    DeliveryLocationSetArchivedEvent,
    DeliveryLocationSetCreatedEvent,
    DeliveryLocationSetDeactivatedEvent,
    DeliveryLocationSetUpdatedEvent,
    DeliveryMethodActivatedEvent,
    DeliveryMethodArchivedEvent,
    DeliveryMethodCreatedEvent,
    DeliveryMethodDeactivatedEvent
} from './types-15.js';
import type { DeliveryMethodUpdatedEvent } from './types-16.js';
import type {
    DeliveryProfileActivatedEvent,
    DeliveryProfileArchivedEvent,
    DeliveryProfileCreatedEvent,
    DeliveryProfileDeactivatedEvent,
    DeliveryProfileUpdatedEvent
} from './types-17.js';
import type {
    DeliveryRateCallbackActivatedEvent,
    DeliveryRateCallbackArchivedEvent,
    DeliveryRateCallbackCreatedEvent,
    DeliveryRateCallbackDeactivatedEvent,
    DeliveryRateCallbackUpdatedEvent
} from './types-18.js';
import type {
    DeliveryRevocationCreatedEvent,
    DeliverySelectionCommittedEvent,
    DeliveryZoneActivatedEvent,
    DeliveryZoneArchivedEvent,
    DeliveryZoneCreatedEvent
} from './types-19.js';
import type {
    DeliveryZoneDeactivatedEvent,
    DeliveryZoneUpdatedEvent,
    DisputeCreatedEvent,
    DisputeInquiryClosedEvent,
    DisputeLostEvent,
    DisputeNeedsResponseEvent,
    DisputePreventedEvent,
    DisputeUpdatedEvent,
    DisputeWonEvent
} from './types-20.js';
import type {
    EnvironmentGrantCreatedEvent,
    EnvironmentGrantRevokedEvent,
    FraudWarningCreatedEvent,
    FraudWarningUpdatedEvent,
    FulfillmentCanceledEvent
} from './types-21.js';
import type {
    FulfillmentCompletedEvent,
    FulfillmentCreatedEvent,
    FulfillmentEventCreatedEvent,
    FulfillmentFailedEvent
} from './types-22.js';
import type { FulfillmentUpdatedEvent, GiftCardCreatedEvent, GiftCardLoadCreatedEvent } from './types-23.js';
import type {
    GiftCardLoadUpdatedEvent,
    GiftCardNotificationCreatedEvent,
    GiftCardNotificationUpdatedEvent,
    GiftCardRedemptionCreatedEvent,
    GiftCardRedemptionUpdatedEvent,
    GiftCardTransactionCreatedEvent,
    GiftCardUpdatedEvent
} from './types-24.js';
import type {
    InventoryCountAppliedEvent,
    InventoryLevelShortageDetectedEvent,
    InventoryLevelUpdatedEvent,
    InventoryReceiptCreatedEvent
} from './types-26.js';
import type {
    InventoryReservationActionRequiredEvent,
    InventoryReservationAtRiskEvent,
    InventoryReservationClosedEvent,
    InventoryReservationCommittedEvent,
    InventoryReservationConsumedEvent,
    InventoryReservationCreatedEvent,
    InventoryReservationHoldExpiredEvent,
    InventoryReservationReleasedEvent
} from './types-27.js';
import type {
    InvoiceCreatedEvent,
    InvoiceCreditedEvent,
    InvoiceDeliveryAttemptFailedEvent,
    InvoiceDeliveryAttemptSentEvent,
    InvoiceDeliveryAttemptSuppressedEvent,
    InvoiceIssueFailedEvent,
    InvoiceIssuedEvent,
    InvoiceLateFeeAssessedEvent,
    InvoiceLateFeeDueEvent,
    InvoiceLateFeeWaivedEvent,
    InvoiceManualPaymentCreatedEvent,
    InvoiceManualPaymentReversedEvent
} from './types-29.js';
import type {
    InvoiceMarkedUncollectibleEvent,
    InvoiceOverdueEvent,
    InvoicePaidEvent,
    InvoicePartiallyPaidEvent,
    InvoicePartiallyRefundedEvent,
    InvoicePaymentAttemptCanceledEvent,
    InvoicePaymentAttemptExpiredEvent,
    InvoicePaymentAttemptFailedEvent,
    InvoicePaymentAttemptProcessingEvent,
    InvoicePaymentAttemptSettledEvent
} from './types-30.js';
import type {
    InvoiceRefundedEvent,
    InvoiceReminderDueEvent,
    InvoiceReopenedEvent,
    InvoiceSentEvent,
    InvoiceUpdatedEvent,
    InvoiceVoidedEvent
} from './types-31.js';
import type {
    ModifierGroupCreatedEvent,
    ModifierGroupUpdatedEvent,
    ModifierSetArchivedEvent,
    ModifierSetCreatedEvent,
    ModifierSetUpdatedEvent
} from './types-35.js';
import type {
    OrderClosedEvent,
    OrderCreatedEvent,
    OrderInventoryExceptionCreatedEvent,
    OrderInventoryExceptionResolvedEvent
} from './types-36.js';
import type { OrderPaidEvent, OrderPartiallyPaidEvent, OrderPartiallyRefundedEvent, OrderRefundedEvent } from './types-37.js';
import type { OrderUpdatedEvent, PackageCreatedEvent } from './types-38.js';
import type {
    PackageUpdatedEvent,
    PartnerAppInstallCreatedEvent,
    PartnerAppInstallPermissionsUpdatedEvent,
    PartnerAppInstallRevokedEvent,
    PartnerAppInstallUpdatedEvent
} from './types-39.js';
import type {
    PaymentIntentRequiresCaptureEvent,
    PaymentIntentSucceededEvent,
    PaymentIntentUpdatedEvent,
    PaymentLinkCreatedEvent
} from './types-41.js';
import type {
    PaymentLinkUpdatedEvent,
    PaymentMethodActivatedEvent,
    PaymentMethodArchivedEvent,
    PaymentMethodFailedEvent,
    PaymentReviewClosedEvent,
    PaymentReviewOpenedEvent
} from './types-42.js';
import type {
    PaymentReviewReopenedEvent,
    PayoutCanceledEvent,
    PayoutCreatedEvent,
    PayoutDestinationArchivedEvent,
    PayoutDestinationCreatedEvent,
    PayoutDestinationDisabledEvent,
    PayoutDestinationUpdatedEvent,
    PayoutFailedEvent,
    PayoutPaidEvent,
    PayoutReversedEvent,
    PayoutSettingsUpdatedEvent,
    PayoutUpdatedEvent
} from './types-43.js';
import type {
    ProductArchivedEvent,
    ProductCreatedEvent,
    ProductUpdatedEvent,
    ProductVariantArchivedEvent,
    ProductVariantCreatedEvent,
    ProductVariantUpdatedEvent,
    PromotionArchivedEvent
} from './types-44.js';
import type {
    PromotionCodeArchivedEvent,
    PromotionCodeCreatedEvent,
    PromotionCodeUpdatedEvent,
    PromotionCreatedEvent,
    PromotionUpdatedEvent
} from './types-45.js';
import type { RefundUpdatedEvent, ReportFailedEvent, ReportSucceededEvent } from './types-47.js';
import type {
    ReturnInspectionSupersededEvent,
    ReturnReceiptCreatedEvent,
    ReturnLineItem,
    ReturnPolicy,
    ReturnPolicyRevision,
    ReturnReason,
    ReturnReceipt
} from './types-49.js';
import type {
    ReturnReceiptSupersededEvent,
    ReturnReceiptVerifiedEvent,
    ReturnReopenedEvent,
    ReturnResolutionCreatedEvent,
    ReturnResolutionUpdatedEvent,
    ReturnResolution,
    ReturnResource
} from './types-50.js';
import type { ShipmentCreatedEvent, ShipmentUpdatedEvent, SubscriptionActivatedEvent } from './types-53.js';
import type {
    SubscriptionCanceledEvent,
    SubscriptionCancellationScheduledEvent,
    SubscriptionCreatedEvent,
    SubscriptionCycleSkippedEvent,
    SubscriptionDeliveryActionRequiredEvent,
    SubscriptionDeliveryMigrationCompletedEvent,
    SubscriptionDeliveryPauseUpcomingEvent,
    SubscriptionDeliveryUpdatedEvent,
    SubscriptionDunningExhaustedEvent
} from './types-54.js';
import type {
    SubscriptionPastDueEvent,
    SubscriptionPausedEvent,
    SubscriptionPaymentRetryCreatedEvent,
    SubscriptionPaymentRetryFailedEvent,
    SubscriptionPaymentRetrySucceededEvent,
    SubscriptionPaymentSucceededEvent,
    SubscriptionPlanChangedEvent
} from './types-55.js';
import type {
    SubscriptionReactivatedEvent,
    SubscriptionRenewalUpcomingEvent,
    SubscriptionResumedEvent,
    SubscriptionTrialEndingEvent,
    SubscriptionUpdatedEvent
} from './types-56.js';
import type {
    TaxConnectionUpdatedEvent,
    TestClockAdvancingEvent,
    TestClockArchivedEvent,
    TestClockCreatedEvent,
    TestClockFailedEvent,
    TestClockReadyEvent
} from './types-57.js';
/**
 * The `invoice.voided` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceVoidedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.voided". */
    "event_type"?: "invoice.voided";
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
 * The `invoice.voided` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoiceVoidedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.voided". */
    "event_type"?: "invoice.voided";
});
export type InvoicesCancelPaymentAttemptParams = {};
export type InvoicesCollectParams = (InputValue<CollectInvoiceRequestInput>);
export type InvoicesCreateCheckoutSessionParams = (InputValue<InvoiceCheckoutSessionRequestInput>);
export type InvoicesCreateLateFeeParams = (InputValue<AssessInvoiceLateFeeRequestInput>);
export type InvoicesCreateManualPaymentParams = (InputValue<CreateInvoiceManualPaymentRequestInput>);
export type InvoicesCreateParams = (CreateInvoiceRequestInput);
export type InvoicesGetManualPaymentParams = {};
export type InvoicesGetPDFParams = {};
export type InvoicesGetPDFResponse = Uint8Array;
export type InvoicesGetParams = {
    /**
     * Supported expansions: customer, order. Expansion requires commerce.invoices.read plus the
     * read scope for each expanded resource. Limits: at most 10 unique expand paths per request.
     * Repeat expand, for example expand=customer&expand=order, or pass one comma-separated value.
     * [] enum: "customer", "order". Value enum: "customer", "order". anyOf[1] (Value): Array of
     * string. [] enum: "customer", "order". anyOf[1][] (Value): string. Value enum: "customer",
     * "order". anyOf[2] (Value): string. Value enum: "customer", "order".
     */
    "expand"?: InputValue<("customer" | "order") | readonly ("customer" | "order")[]>;
};
export type InvoicesGetPaymentAttemptParams = {};
export type InvoicesIssueParams = (InputValue<IssueInvoiceRequestInput>);
export type InvoicesListActivitiesParams = {
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
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Filter by activity_type. The output-only catch-all other is not accepted. Repeat the
     * parameter or pass comma-separated values to OR multiple types. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "draft_created", "issued", "sent", "delivery_sent",
     * "reminder_sent", "viewed", "payment_attempt_started", "payment_applied",
     * "manual_payment_recorded", "manual_payment_reversed", "refund_succeeded", "voided",
     * "token_regenerated", "collection_blocked", "collection_block_resolved", "updated",
     * "marked_uncollectible", "payment_processing", "issue_failed", "overdue", "reminder_due",
     * "late_fee_due", "late_fee_assessed", "late_fee_waived", "credited". Value enum:
     * "draft_created", "issued", "sent", "delivery_sent", "reminder_sent", "viewed",
     * "payment_attempt_started", "payment_applied", "manual_payment_recorded",
     * "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated",
     * "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible",
     * "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due",
     * "late_fee_assessed", "late_fee_waived", "credited". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "draft_created", "issued", "sent", "delivery_sent", "reminder_sent",
     * "viewed", "payment_attempt_started", "payment_applied", "manual_payment_recorded",
     * "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated",
     * "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible",
     * "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due",
     * "late_fee_assessed", "late_fee_waived", "credited". anyOf[1][] (Value): string. Value enum:
     * "draft_created", "issued", "sent", "delivery_sent", "reminder_sent", "viewed",
     * "payment_attempt_started", "payment_applied", "manual_payment_recorded",
     * "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated",
     * "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible",
     * "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due",
     * "late_fee_assessed", "late_fee_waived", "credited". anyOf[2] (Value): string. Value enum:
     * "draft_created", "issued", "sent", "delivery_sent", "reminder_sent", "viewed",
     * "payment_attempt_started", "payment_applied", "manual_payment_recorded",
     * "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated",
     * "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible",
     * "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due",
     * "late_fee_assessed", "late_fee_waived", "credited".
     */
    "activity_type"?: InputValue<("draft_created"
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
        | "credited")
        | readonly ("draft_created"
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
        | "credited")[]>;
};
export type InvoicesListDeliveryAttemptsParams = CheckoutSessionsListDeliverySelectionsParams;
export type InvoicesListManualPaymentsParams = CreditNotesListAllocationsParams;
export type InvoicesListParams = {
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
     * Filter by invoice status. Repeat the parameter or pass comma-separated values to match
     * multiple statuses. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "draft", "open",
     * "partially_paid", "paid", "void", "uncollectible", "credited". Value enum: "draft", "open",
     * "partially_paid", "paid", "void", "uncollectible", "credited". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "draft", "open", "partially_paid", "paid", "void",
     * "uncollectible", "credited". anyOf[1][] (Value): string. Value enum: "draft", "open",
     * "partially_paid", "paid", "void", "uncollectible", "credited". anyOf[2] (Value): string.
     * Value enum: "draft", "open", "partially_paid", "paid", "void", "uncollectible", "credited".
     */
    "status"?: InputValue<("draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited")
        | readonly ("draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited")[]>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /** Filter by Flint customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "customer_id"?: InputValue<string>;
    /** Filter by Flint order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /**
     * Exact-match filter on the backing order subscription ID. Example:
     * "sub_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "subscription_id"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Exact, byte-sensitive whole invoice number. Preserves casing, accents, and whitespace;
     * drafts without a number do not match. minLength: 1. maxLength: 255.
     */
    "invoice_number"?: InputValue<string>;
    /**
     * Filter by the effective collection mode. Repeat the parameter or pass comma-separated values
     * to match multiple modes. Accepts repeated keys, comma-separated values, or mixtures. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "buyer_initiated",
     * "automatic", "external". Value enum: "buyer_initiated", "automatic", "external". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "buyer_initiated", "automatic", "external".
     * anyOf[1][] (Value): string. Value enum: "buyer_initiated", "automatic", "external". anyOf[2]
     * (Value): string. Value enum: "buyer_initiated", "automatic", "external".
     */
    "collection_mode"?: InputValue<("buyer_initiated" | "automatic" | "external")
        | readonly ("buyer_initiated" | "automatic" | "external")[]>;
    /** Inclusive lower bound on issued_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "issued_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on issued_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "issued_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on due_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "due_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on due_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "due_before"?: InputValue<string | globalThis.Date>;
    /** Filter by whether the invoice is overdue. */
    "is_overdue"?: InputValue<boolean>;
    /** Filter by whether outstanding_money is greater than zero. */
    "has_outstanding_balance"?: InputValue<boolean>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by invoice_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "due_at", "invoice_number",
     * "outstanding_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Search across invoice_id, invoice_number, external_reference_id, recipient_email, reference,
     * po_number, and the customer name and email on the invoice. Text fields match any part of the
     * value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and
     * need the type prefix, such as inv_01.
     */
    "query"?: InputValue<string>;
    /**
     * Supported expansions: customer, order. Include the requested related resources using scoped
     * batch reads for this page. Each relationship requires its existing target read scopes.
     * Expansion changes the representation without changing pagination tokens. Limits: at most 10
     * unique expand paths per request. Repeat expand, for example expand=customer&expand=order, or
     * pass one comma-separated value. [] enum: "customer", "order". Value enum: "customer",
     * "order". anyOf[1] (Value): Array of string. [] enum: "customer", "order". anyOf[1][]
     * (Value): string. Value enum: "customer", "order". anyOf[2] (Value): string. Value enum:
     * "customer", "order".
     */
    "expand"?: InputValue<("customer" | "order") | readonly ("customer" | "order")[]>;
};
export type InvoicesListPaymentAttemptsParams = CreditNotesListAllocationsParams;
export type InvoicesMarkUncollectibleParams = (InputValue<ResourceVersionRequestInput>);
export type InvoicesRegeneratePublicLinkParams = InvoicesMarkUncollectibleParams;
export type InvoicesReverseManualPaymentParams = (InputValue<ReverseInvoiceManualPaymentRequestInput>);
export type InvoicesSendReminderParams = {};
export type InvoicesUpdateParams = (InputValue<UpdateInvoiceRequestInput>);
export type InvoicesVoidParams = InvoicesMarkUncollectibleParams;
export type InvoicesWaiveLateFeeParams = (InputValue<WaiveInvoiceLateFeeRequestInput>);
/** The request body for: Issue credit note. */
export type IssueCreditNoteRequest = ({
    /**
     * Issue the credit note and apply credit to its invoice atomically. If the allocation fails,
     * the note stays a draft. Omit amount_money to apply the smaller of the credit available after
     * issue and the invoice's outstanding balance. Cannot be combined with refund. Credit to apply
     * to the invoice when issuing a credit note.
     */
    "allocation"?: CreditNoteIssueAllocationRequest;
    /**
     * Credit note version last read. Optional; a stale version returns VERSION_CONFLICT. Format:
     * int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Create a linked refund when the credit note is issued. Requires both credit-note and refund
     * write permissions and a paid invoice. Cannot be combined with allocation. Refund details you
     * supply when issuing a credit note: the reason, an optional message, and an optional amount.
     */
    "refund"?: CreditNoteRefundRequest;
});
/** The request body for: Issue credit note. */
export type IssueCreditNoteRequestInput = ({
    /**
     * Issue the credit note and apply credit to its invoice atomically. If the allocation fails,
     * the note stays a draft. Omit amount_money to apply the smaller of the credit available after
     * issue and the invoice's outstanding balance. Cannot be combined with refund. Credit to apply
     * to the invoice when issuing a credit note.
     */
    "allocation"?: CreditNoteIssueAllocationRequestInput;
    /**
     * Credit note version last read. Optional; a stale version returns VERSION_CONFLICT. Format:
     * int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Create a linked refund when the credit note is issued. Requires both credit-note and refund
     * write permissions and a paid invoice. Cannot be combined with allocation. Refund details you
     * supply when issuing a credit note: the reason, an optional message, and an optional amount.
     */
    "refund"?: CreditNoteRefundRequestInput;
})
    & ({
    "allocation"?: never;
} | {
    "refund"?: never;
});
/** A response containing `IssueCreditNoteResult` data. */
export type IssueCreditNoteResponse = {
    /**
     * The issued credit note, its invoice after issue, and the linked allocation or refund when
     * requested.
     */
    "data": IssueCreditNoteResult;
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
 * The issued credit note, its invoice after issue, and the linked allocation or refund when
 * requested.
 */
export type IssueCreditNoteResult = {
    /**
     * The issued credit note. Its version is the target of expected_version. A correction against
     * an issued invoice. Credit notes reduce what is owed; refunds return what was already
     * collected.
     */
    "credit_note": CreditNote;
    /**
     * The linked allocation, present when allocation was requested. Its idempotency_key is issue:
     * followed by the issue request's Idempotency-Key. One application of credit to the invoice.
     * Allocations are append-only: a reversal sets reversed_at rather than removing the row.
     */
    "credit_note_allocation"?: CreditNoteAllocation;
    /** The invoice state after the credit note was issued. A bill issued to a customer. */
    "invoice": Invoice;
    /**
     * The linked refund, present when refund was requested. A pending refund has been accepted but
     * has not completed. Money returned against a collected payment.
     */
    "refund"?: Refund;
};
/** The request body for: Issue invoice. */
export type IssueInvoiceRequest = {
    /**
     * How the invoice reaches its recipient. Omit it to use merchant_default. Default:
     * "merchant_default". Value enum: "merchant_default", "email", "caller_managed".
     */
    "delivery_mode"?: "merchant_default" | "email" | "caller_managed" | (string & {});
    /**
     * Invoice version last read. Optional; a stale version returns VERSION_CONFLICT. Format:
     * int64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Issue invoice. */
export type IssueInvoiceRequestInput = {
    /**
     * How the invoice reaches its recipient. Omit it to use merchant_default. Default:
     * "merchant_default". Value enum: "merchant_default", "email", "caller_managed".
     */
    "delivery_mode"?: "merchant_default" | "email" | "caller_managed";
    /**
     * Invoice version last read. Optional; a stale version returns VERSION_CONFLICT. Format:
     * int64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Issue sandbox test key. */
export type IssueSandboxAPIKeyRequest = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session or a full-access API key. Value enum: "full", "read_only",
     * "restricted".
     */
    "access": "full" | "read_only" | "restricted" | (string & {});
    /** minLength: 1. maxLength: 100. */
    "name": string;
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
    & ((Exclude<IssueSandboxAPIKeyRequestFull & object, readonly unknown[]>)
    | (Exclude<IssueSandboxAPIKeyRequestReadOnly & object, readonly unknown[]>)
    | (Exclude<IssueSandboxAPIKeyRequestRestricted & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `full` variant of `IssueSandboxAPIKeyRequest`. */
export type IssueSandboxAPIKeyRequestFull = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session or a full-access API key. Value enum: "full".
     */
    "access": "full" | (string & {});
    /** minLength: 1. maxLength: 100. */
    "name": string;
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
});
/** The `full` variant of `IssueSandboxAPIKeyRequest`. */
export type IssueSandboxAPIKeyRequestFullInput = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session or a full-access API key. Value enum: "full".
     */
    "access": "full";
    /** minLength: 1. maxLength: 100. */
    "name": string;
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
    & (({
    "scopes"?: never;
}));
/** The request body for: Issue sandbox test key. */
export type IssueSandboxAPIKeyRequestInput = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session or a full-access API key. Value enum: "full", "read_only",
     * "restricted".
     */
    "access": "full" | "read_only" | "restricted";
    /** minLength: 1. maxLength: 100. */
    "name": string;
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
    & ((Exclude<IssueSandboxAPIKeyRequestFullInput & object, readonly unknown[]>)
    | (Exclude<IssueSandboxAPIKeyRequestReadOnlyInput & object, readonly unknown[]>)
    | (Exclude<IssueSandboxAPIKeyRequestRestrictedInput & object, readonly unknown[]>));
/** The `read_only` variant of `IssueSandboxAPIKeyRequest`. */
export type IssueSandboxAPIKeyRequestReadOnly = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session or a full-access API key. Value enum: "read_only".
     */
    "access": "read_only" | (string & {});
    /** minLength: 1. maxLength: 100. */
    "name": string;
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
});
/** The `read_only` variant of `IssueSandboxAPIKeyRequest`. */
export type IssueSandboxAPIKeyRequestReadOnlyInput = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session or a full-access API key. Value enum: "read_only".
     */
    "access": "read_only";
    /** minLength: 1. maxLength: 100. */
    "name": string;
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
    & (({
    "scopes"?: never;
}));
/** The `restricted` variant of `IssueSandboxAPIKeyRequest`. */
export type IssueSandboxAPIKeyRequestRestricted = {
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session or a full-access API key. Value enum: "restricted".
     */
    "access": "restricted" | (string & {});
    /** minLength: 1. maxLength: 100. */
    "name": string;
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
};
/** The `restricted` variant of `IssueSandboxAPIKeyRequest`. */
export type IssueSandboxAPIKeyRequestRestrictedInput = {
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session or a full-access API key. Value enum: "restricted".
     */
    "access": "restricted";
    /** minLength: 1. maxLength: 100. */
    "name": string;
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
};
export type KnownWebhookEvent = BalanceTransactionCreatedEvent
    | BalanceTransactionUpdatedEvent
    | BalanceUpdatedEvent
    | BundleArchivedEvent
    | BundleCreatedEvent
    | BundleUpdatedEvent
    | CategoryCreatedEvent
    | CategoryDeletedEvent
    | CategoryUpdatedEvent
    | CheckoutSessionClosedEvent
    | CheckoutSessionCreatedEvent
    | CheckoutSessionExpiredEvent
    | CheckoutSessionInvalidatedEvent
    | CheckoutSessionPaidEvent
    | CheckoutSessionPartiallyPaidEvent
    | CreditNoteAllocationCreatedEvent
    | CreditNoteAllocationReversedEvent
    | CreditNoteCreatedEvent
    | CreditNoteIssuedEvent
    | CreditNoteUpdatedEvent
    | CreditNoteVoidedEvent
    | CustomDomainArchivedEvent
    | CustomDomainUpdatedEvent
    | CustomerDeletionRequestCompletedEvent
    | CustomerDeletionRequestCreatedEvent
    | CustomerDeletionRequestFailedEvent
    | CustomerDeletionRequestProcessingEvent
    | CustomerDeletionRequestRejectedEvent
    | CustomerCreatedEvent
    | CustomerDeletedEvent
    | CustomerUpdatedEvent
    | DeliveryLocationSetActivatedEvent
    | DeliveryLocationSetArchivedEvent
    | DeliveryLocationSetCreatedEvent
    | DeliveryLocationSetDeactivatedEvent
    | DeliveryLocationSetUpdatedEvent
    | DeliveryMethodActivatedEvent
    | DeliveryMethodArchivedEvent
    | DeliveryMethodCreatedEvent
    | DeliveryMethodDeactivatedEvent
    | DeliveryMethodUpdatedEvent
    | DeliveryProfileActivatedEvent
    | DeliveryProfileArchivedEvent
    | DeliveryProfileCreatedEvent
    | DeliveryProfileDeactivatedEvent
    | DeliveryProfileUpdatedEvent
    | DeliveryRateCallbackActivatedEvent
    | DeliveryRateCallbackArchivedEvent
    | DeliveryRateCallbackCreatedEvent
    | DeliveryRateCallbackDeactivatedEvent
    | DeliveryRateCallbackUpdatedEvent
    | DeliveryRevocationCreatedEvent
    | DeliverySelectionCommittedEvent
    | DeliveryZoneActivatedEvent
    | DeliveryZoneArchivedEvent
    | DeliveryZoneCreatedEvent
    | DeliveryZoneDeactivatedEvent
    | DeliveryZoneUpdatedEvent
    | DisputeCreatedEvent
    | DisputeInquiryClosedEvent
    | DisputeLostEvent
    | DisputeNeedsResponseEvent
    | DisputePreventedEvent
    | DisputeUpdatedEvent
    | DisputeWonEvent
    | EnvironmentGrantCreatedEvent
    | EnvironmentGrantRevokedEvent
    | FraudWarningCreatedEvent
    | FraudWarningUpdatedEvent
    | FulfillmentEventCreatedEvent
    | FulfillmentCanceledEvent
    | FulfillmentCompletedEvent
    | FulfillmentCreatedEvent
    | FulfillmentFailedEvent
    | FulfillmentUpdatedEvent
    | GiftCardLoadCreatedEvent
    | GiftCardLoadUpdatedEvent
    | GiftCardNotificationCreatedEvent
    | GiftCardNotificationUpdatedEvent
    | GiftCardRedemptionCreatedEvent
    | GiftCardRedemptionUpdatedEvent
    | GiftCardTransactionCreatedEvent
    | GiftCardCreatedEvent
    | GiftCardUpdatedEvent
    | InventoryCountAppliedEvent
    | InventoryLevelShortageDetectedEvent
    | InventoryLevelUpdatedEvent
    | InventoryReceiptCreatedEvent
    | InventoryReservationActionRequiredEvent
    | InventoryReservationAtRiskEvent
    | InventoryReservationClosedEvent
    | InventoryReservationCommittedEvent
    | InventoryReservationConsumedEvent
    | InventoryReservationCreatedEvent
    | InventoryReservationHoldExpiredEvent
    | InventoryReservationReleasedEvent
    | InventoryTransferClosedEvent
    | InventoryTransferDepartedEvent
    | InventoryTransferLostEvent
    | InventoryTransferReceivedEvent
    | InventoryTransferReturnedEvent
    | InvoiceDeliveryAttemptFailedEvent
    | InvoiceDeliveryAttemptSentEvent
    | InvoiceDeliveryAttemptSuppressedEvent
    | InvoiceManualPaymentCreatedEvent
    | InvoiceManualPaymentReversedEvent
    | InvoicePaymentAttemptCanceledEvent
    | InvoicePaymentAttemptExpiredEvent
    | InvoicePaymentAttemptFailedEvent
    | InvoicePaymentAttemptProcessingEvent
    | InvoicePaymentAttemptSettledEvent
    | InvoiceCollectionBlockResolvedEvent
    | InvoiceCollectionBlockedEvent
    | InvoiceCreatedEvent
    | InvoiceCreditedEvent
    | InvoiceIssueFailedEvent
    | InvoiceIssuedEvent
    | InvoiceLateFeeAssessedEvent
    | InvoiceLateFeeDueEvent
    | InvoiceLateFeeWaivedEvent
    | InvoiceMarkedUncollectibleEvent
    | InvoiceOverdueEvent
    | InvoicePaidEvent
    | InvoicePartiallyPaidEvent
    | InvoicePartiallyRefundedEvent
    | InvoiceRefundedEvent
    | InvoiceReminderDueEvent
    | InvoiceReopenedEvent
    | InvoiceSentEvent
    | InvoiceUpdatedEvent
    | InvoiceVoidedEvent
    | MerchantBillingBalanceUpdatedEvent
    | MerchantBillingInvoiceIssuedEvent
    | MerchantBillingInvoiceUpdatedEvent
    | MerchantReadinessUpdatedEvent
    | MerchantUpdatedEvent
    | ModifierGroupArchivedEvent
    | ModifierGroupCreatedEvent
    | ModifierGroupUpdatedEvent
    | ModifierSetArchivedEvent
    | ModifierSetCreatedEvent
    | ModifierSetUpdatedEvent
    | OrderClosedEvent
    | OrderCreatedEvent
    | OrderInventoryExceptionCreatedEvent
    | OrderInventoryExceptionResolvedEvent
    | OrderPaidEvent
    | OrderPartiallyPaidEvent
    | OrderPartiallyRefundedEvent
    | OrderRefundedEvent
    | OrderUpdatedEvent
    | PackageCreatedEvent
    | PackageUpdatedEvent
    | PartnerAppInstallCreatedEvent
    | PartnerAppInstallPermissionsUpdatedEvent
    | PartnerAppInstallRevokedEvent
    | PartnerAppInstallUpdatedEvent
    | PaymentIntentCanceledEvent
    | PaymentIntentCreatedEvent
    | PaymentIntentExpiredEvent
    | PaymentIntentFulfillmentHoldUpdatedEvent
    | PaymentIntentPaymentFailedEvent
    | PaymentIntentProcessingEvent
    | PaymentIntentRequiresActionEvent
    | PaymentIntentRequiresCaptureEvent
    | PaymentIntentSucceededEvent
    | PaymentIntentUpdatedEvent
    | PaymentLinkCreatedEvent
    | PaymentLinkUpdatedEvent
    | PaymentMethodActivatedEvent
    | PaymentMethodArchivedEvent
    | PaymentMethodFailedEvent
    | PaymentReviewClosedEvent
    | PaymentReviewOpenedEvent
    | PaymentReviewReopenedEvent
    | PayoutDestinationArchivedEvent
    | PayoutDestinationCreatedEvent
    | PayoutDestinationDisabledEvent
    | PayoutDestinationUpdatedEvent
    | PayoutSettingsUpdatedEvent
    | PayoutCanceledEvent
    | PayoutCreatedEvent
    | PayoutFailedEvent
    | PayoutPaidEvent
    | PayoutReversedEvent
    | PayoutUpdatedEvent
    | ProductVariantArchivedEvent
    | ProductVariantCreatedEvent
    | ProductVariantUpdatedEvent
    | ProductArchivedEvent
    | ProductCreatedEvent
    | ProductUpdatedEvent
    | PromotionCodeArchivedEvent
    | PromotionCodeCreatedEvent
    | PromotionCodeUpdatedEvent
    | PromotionArchivedEvent
    | PromotionCreatedEvent
    | PromotionUpdatedEvent
    | RefundCreatedEvent
    | RefundFailedEvent
    | RefundPartiallySucceededEvent
    | RefundSucceededEvent
    | RefundUpdatedEvent
    | ReportFailedEvent
    | ReportSucceededEvent
    | ReturnDispositionCreatedEvent
    | ReturnDispositionUpdatedEvent
    | ReturnInspectionAcceptanceDecidedEvent
    | ReturnInspectionCreatedEvent
    | ReturnInspectionSupersededEvent
    | ReturnReceiptCreatedEvent
    | ReturnReceiptSupersededEvent
    | ReturnReceiptVerifiedEvent
    | ReturnResolutionCreatedEvent
    | ReturnResolutionUpdatedEvent
    | ReturnCanceledEvent
    | ReturnCompletedEvent
    | ReturnCreatedEvent
    | ReturnDecisionRecordedEvent
    | ReturnReopenedEvent
    | ReturnUpdatedEvent
    | ShipmentCreatedEvent
    | ShipmentUpdatedEvent
    | SubscriptionDeliveryMigrationCompletedEvent
    | SubscriptionPaymentRetryCreatedEvent
    | SubscriptionPaymentRetryFailedEvent
    | SubscriptionPaymentRetrySucceededEvent
    | SubscriptionActivatedEvent
    | SubscriptionCanceledEvent
    | SubscriptionCancellationScheduledEvent
    | SubscriptionCreatedEvent
    | SubscriptionCycleSkippedEvent
    | SubscriptionDeliveryActionRequiredEvent
    | SubscriptionDeliveryPauseUpcomingEvent
    | SubscriptionDeliveryUpdatedEvent
    | SubscriptionDunningExhaustedEvent
    | SubscriptionPastDueEvent
    | SubscriptionPausedEvent
    | SubscriptionPaymentSucceededEvent
    | SubscriptionPlanChangedEvent
    | SubscriptionReactivatedEvent
    | SubscriptionRenewalUpcomingEvent
    | SubscriptionResumedEvent
    | SubscriptionTrialEndingEvent
    | SubscriptionUpdatedEvent
    | TaxConnectionUpdatedEvent
    | TestClockAdvancingEvent
    | TestClockArchivedEvent
    | TestClockCreatedEvent
    | TestClockFailedEvent
    | TestClockReadyEvent;
/**
 * Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms of
 * service URLs, and whether buyers must accept the terms.
 */
export type LegalSettings = {
    "contract_url"?: string;
    "refund_policy_url"?: string;
    "require_terms_of_service"?: boolean;
    "shipping_policy_url"?: string;
    "terms_of_service_url"?: string;
};
/** Changes to a merchant's legal settings. Send null on a URL to clear it. */
export type LegalSettingsRequest = {
    /** Send null to clear it. minLength: 1. */
    "contract_url"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "refund_policy_url"?: string | null;
    "require_terms_of_service"?: boolean;
    /** Send null to clear it. minLength: 1. */
    "shipping_policy_url"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "terms_of_service_url"?: string | null;
};
/** Changes to a merchant's legal settings. Send null on a URL to clear it. */
export type LegalSettingsRequestInput = LegalSettingsRequest;
/**
 * Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin
 * of the fulfillment method.
 */
export type LineItemFulfillmentOriginRequest = {
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "fixed_location", "inventory_routing", "method_origin". */
    "origin_policy_type": "fixed_location" | "inventory_routing" | "method_origin" | (string & {});
};
/**
 * Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin
 * of the fulfillment method.
 */
export type LineItemFulfillmentOriginRequestInput = {
    /** minLength: 1. */
    "location_id"?: string;
    /** Value enum: "fixed_location", "inventory_routing", "method_origin". */
    "origin_policy_type": "fixed_location" | "inventory_routing" | "method_origin";
};
/**
 * Fulfillment requirements you supply for an order line item, such as allowed fulfillment types,
 * package size and weight, and origin.
 */
export type LineItemFulfillmentRequest = {
    /**  [] (Value): string. minLength: 1. */
    "allowed_types"?: Array<string>;
    /**
     * Value enum: "combine_when_compatible", "separate_profile", "separate_line_item",
     * "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the
     * origin of the fulfillment method.
     */
    "origin_policy"?: LineItemFulfillmentOriginRequest;
    /** Value enum: "none", "required". */
    "requirement": "none" | "required" | (string & {});
    /** Value enum: "quote", "manual". */
    "resolution_mode"?: "quote" | "manual" | (string & {});
    /** Value enum: "whole_line_item", "quantity_split_allowed". */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed" | (string & {});
};
/**
 * Fulfillment requirements you supply for an order line item, such as allowed fulfillment types,
 * package size and weight, and origin.
 */
export type LineItemFulfillmentRequestInput = {
    /**  [] (Value): string. minLength: 1. */
    "allowed_types"?: Array<string>;
    /**
     * Value enum: "combine_when_compatible", "separate_profile", "separate_line_item",
     * "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone";
    /**
     * Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the
     * origin of the fulfillment method.
     */
    "origin_policy"?: LineItemFulfillmentOriginRequestInput;
    /** Value enum: "none", "required". */
    "requirement": "none" | "required";
    /** Value enum: "quote", "manual". */
    "resolution_mode"?: "quote" | "manual";
    /** Value enum: "whole_line_item", "quantity_split_allowed". */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed";
};
/** The quantity of one inventory item that each unit of an order line item uses. */
export type LineItemInventoryDemand = {
    "bundle_component_id"?: string;
    "component_snapshot_id"?: string;
    "inventory_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity_per_line_item_unit": number;
};
/**
 * Whether an order line item tracks inventory, and the inventory item quantities each unit
 * demands.
 */
export type LineItemInventorySnapshot = {
    /**
     *  [] (Value): {@link LineItemInventoryDemand}. The quantity of one inventory item that each
     * unit of an order line item uses.
     */
    "demands": Array<LineItemInventoryDemand>;
    /** Value enum: "not_tracked", "tracked". */
    "inventory_tracking": "not_tracked" | "tracked" | (string & {});
};
/** The request body for: Link guest purchases to a customer. */
export type LinkCustomerGuestPurchasesRequest = {
    /** minLength: 1. */
    "customer_verification_id": string;
};
/** The request body for: Link guest purchases to a customer. */
export type LinkCustomerGuestPurchasesRequestInput = LinkCustomerGuestPurchasesRequest;
/** A page of `ReturnActivity` objects. */
export type ListReturnActivitiesResponse = {
    /**  [] (Value): {@link ReturnActivity}. One entry in a Return's merchant activity history. */
    "data": Array<ReturnActivity>;
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
/** A page of `ReturnDisposition` objects. */
export type ListReturnDispositionsResponse = {
    /**
     *  [] (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled.
     */
    "data": Array<ReturnDisposition>;
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
/** A page of `ReturnInspection` objects. */
export type ListReturnInspectionsResponse = {
    /**  [] (Value): {@link ReturnInspection}. An assessment of the condition of returned items. */
    "data": Array<ReturnInspection>;
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
/** A page of `ReturnLineItem` objects. */
export type ListReturnLineItemsResponse = {
    /**  [] (Value): {@link ReturnLineItem}. An item included in a return request. */
    "data": Array<ReturnLineItem>;
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
/** A page of `ReturnPolicy` objects. */
export type ListReturnPoliciesResponse = {
    /**
     *  [] (Value): {@link ReturnPolicy}. Rules governing whether and how purchased items can be
     * returned.
     */
    "data": Array<ReturnPolicy>;
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
/** A page of `ReturnPolicyRevision` objects. */
export type ListReturnPolicyRevisionsResponse = {
    /**  [] (Value): {@link ReturnPolicyRevision}. A saved revision of a return policy. */
    "data": Array<ReturnPolicyRevision>;
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
/** A page of `ReturnReason` objects. */
export type ListReturnReasonsResponse = {
    /**
     *  [] (Value): {@link ReturnReason}. A reason customers can select when requesting a return.
     */
    "data": Array<ReturnReason>;
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
/** A page of `ReturnReceipt` objects. */
export type ListReturnReceiptsResponse = {
    /**  [] (Value): {@link ReturnReceipt}. A record of returned items arriving at a location. */
    "data": Array<ReturnReceipt>;
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
/** A page of `ReturnResolution` objects. */
export type ListReturnResolutionsResponse = {
    /**
     *  [] (Value): {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
     */
    "data": Array<ReturnResolution>;
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
/** A page of `Return` objects. */
export type ListReturnsResponse = {
    /**  [] (Value): {@link ReturnResource}. A request to send purchased items back. */
    "data": Array<ReturnResource>;
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
 * A physical or logical place a merchant operates from. Every Location can hold stock.
 * inventory_allocation_enabled controls whether it accepts inventory allocation.
 */
export type Location = {
    /**
     * Published postal address. anyOf[1] (Value): {@link Address}. A postal address. Every address
     * has country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. anyOf[2] (Value): null.
     */
    "address": ((Address) | (null));
    /** Published geographic coordinate. A latitude and longitude for a merchant location. */
    "coordinate"?: LocationCoordinate;
    /**
     * Source of the stored latitude and longitude. Value enum: "merchant_supplied", "geocoded",
     * null.
     */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | null | (string & {}) | null;
    /** Time the Location was created. Format: date-time. */
    "created_at": string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Read-only version that advances only on geography changes and is pinned by tax and delivery
     * dependencies. It is not a request fence. Format: uint64. minimum: 0.
     */
    "geography_version": number;
    /**
     * Whether this Location accepts inventory allocation. Always present, including false when
     * allocation is not configured.
     */
    "inventory_allocation_enabled": boolean;
    /** Stable Location ID. */
    "location_id": string;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /** Merchant-facing Location name. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Provider-normalized address used for geography evaluation. A postal address. Every address
     * has country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "normalized_address"?: Address;
    /** Current Location lifecycle status. Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** IANA timezone for local schedules. */
    "timezone": string;
    /** Time the Location last changed. Format: date-time. */
    "updated_at": string;
    /** Address validation status. Value enum: "not_validated", "validated", "merchant_verified". */
    "validation_status": "not_validated" | "validated" | "merchant_verified" | (string & {});
    /**
     * Optimistic-concurrency version that advances on every Location change. Format: uint64.
     * minimum: 1.
     */
    "version": number;
};
/** A latitude and longitude for a merchant location. */
export type LocationCoordinate = {
    /** Latitude between -90 and 90. Responses always include this field, including 0. */
    "latitude": number;
    /** Longitude between -180 and 180. Responses always include this field, including 0. */
    "longitude": number;
};
