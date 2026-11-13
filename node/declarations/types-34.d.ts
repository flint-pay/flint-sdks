import type {
    InvoiceScheduleDueDate,
    InvoiceScheduleAmountSpecification,
    InvoiceScheduleDue,
    InvoiceScheduleAmountSpecificationRequestInput,
    InvoicePaymentDue,
    InvoicePaymentTermsSnapshot,
    InvoicePaymentPolicy,
    InvoiceReminderPolicy,
    InvoicePaymentPolicyRequestInput,
    InvoiceReminderPolicyInput,
    InvoiceRefundedEvent,
    InvoiceReminderDueEvent,
    InvoiceReopenedEvent
} from './types-33.js';
import type {
    MoneyValue,
    ModifierGroupArchivedEvent,
    ModifierGroupCreatedEvent,
    ModifierGroupUpdatedEvent,
    ModifierSetArchivedEvent,
    ModifierSetCreatedEvent,
    ModifierSetUpdatedEvent
} from './types-38.js';
import type {
    Address,
    AddressRequest,
    AddressRequestInput,
    AssessInvoiceLateFeeRequestInput,
    ApiKeyCreatedEvent,
    ApiKeyRevokedEvent,
    ApiKeyUpdatedEvent
} from './types-0.js';
import type {
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    EnvironmentGrantCreatedEvent,
    EnvironmentGrantRevokedEvent,
    EnvironmentGrantUpdatedEvent,
    FraudWarningCreatedEvent,
    FraudWarningUpdatedEvent,
    FulfillmentCanceledEvent,
    FulfillmentCompletedEvent,
    FulfillmentCreatedEvent
} from './types-24.js';
import type {
    Invoice,
    InvoiceCollection,
    InvoiceAutopayRetryPolicy,
    InvoiceAutopayRetryPolicyInput,
    InvoiceDiscount,
    InventoryTransferReturnedEvent,
    InventoryTransferUpdatedEvent,
    InvoiceCollectionBlockResolvedEvent,
    InvoiceCollectionBlockedEvent,
    InvoiceCreatedEvent,
    InvoiceCreditedEvent,
    InvoiceDeliveryAttemptFailedEvent,
    InvoiceDeliveryAttemptSentEvent,
    InvoiceDeliveryAttemptSuppressedEvent,
    InvoiceIssueFailedEvent,
    InvoiceIssuedEvent
} from './types-31.js';
import type {
    InvoiceLateFee,
    InvoiceLineItem,
    InvoiceLateFeeAssessedEvent,
    InvoiceLateFeeDueEvent,
    InvoiceLateFeeWaivedEvent,
    InvoiceManualPaymentCreatedEvent,
    InvoiceManualPaymentReversedEvent,
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
} from './types-32.js';
import type {
    MerchantWebhookEnvelope,
    MetadataMap,
    MerchantBillingBalanceUpdatedEvent,
    MerchantBillingInvoiceIssuedEvent,
    MerchantBillingInvoiceUpdatedEvent,
    MerchantReadinessUpdatedEvent,
    MerchantUpdatedEvent
} from './types-37.js';
import type {
    PartnerWebhookEnvelope,
    PaymentIntentAuthorizationExpiringEvent,
    PaymentIntentCanceledEvent,
    PaymentIntentCreatedEvent,
    PaymentIntentExpiredEvent,
    PaymentIntentFulfillmentHoldUpdatedEvent,
    PaymentIntentPaymentFailedEvent
} from './types-44.js';
import type { OrderCharge, OrderClosedEvent, OrderCreatedEvent } from './types-39.js';
import type { OrderTaxExemption, OrderPartiallyPaidEvent, OrderPartiallyRefundedEvent, OrderRefundedEvent } from './types-41.js';
import type {
    PricingAmounts,
    PlatformFeePayoutCreatedEvent,
    PlatformFeePayoutFailedEvent,
    PlatformFeePayoutSucceededEvent,
    PlatformFeeSucceededEvent,
    PlatformFeeUpdatedEvent,
    PriceListArchivedEvent,
    PriceListCreatedEvent,
    PriceListUpdatedEvent,
    ProductArchivedEvent,
    ProductCreatedEvent,
    ProductUpdatedEvent
} from './types-49.js';
import type {
    TaxBreakdown,
    TaxCurrencyConversion,
    TaxIdentity,
    TaxCalculationCallbackActivatedEvent,
    TaxCalculationCallbackArchivedEvent,
    TaxCalculationCallbackCreatedEvent,
    TaxCalculationCallbackDeactivatedEvent,
    TaxCalculationCallbackUpdatedEvent,
    TaxConnectionUpdatedEvent
} from './types-64.js';
import type {
    TaxReverseCharge,
    TestClockAdvancingEvent,
    TestClockArchivedEvent,
    TestClockCreatedEvent,
    TestClockFailedEvent,
    TestClockReadyEvent,
    TicketCheckedInEvent,
    TicketCreatedEvent,
    TicketUpdatedEvent,
    TicketVoidedEvent
} from './types-65.js';
import type { InputValue } from '../runtime.js';
import type {
    DisputesAcceptParams,
    DisputeCreatedEvent,
    DisputeInquiryClosedEvent,
    DisputeLostEvent,
    DisputeNeedsResponseEvent,
    DisputePreventedEvent,
    DisputeUpdatedEvent,
    DisputeWonEvent
} from './types-23.js';
import type {
    CollectInvoiceRequestInput,
    CheckoutSessionClosedEvent,
    CheckoutSessionCreatedEvent,
    CheckoutSessionExpiredEvent,
    CheckoutSessionInvalidatedEvent,
    CheckoutSessionPaidEvent,
    CheckoutSessionPartiallyPaidEvent,
    CheckoutSessionUpdatedEvent
} from './types-6.js';
import type { CreateInvoiceManualPaymentRequestInput, CreateInvoiceRequestInput } from './types-10.js';
import type { CustomersListAddressesParams, CustomerUpdatedEvent } from './types-16.js';
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
    CreditNoteVoidedEvent
} from './types-14.js';
import type {
    ResourceVersionRequestInput,
    ResponseMeta,
    ReturnCanceledEvent,
    ReturnCompletedEvent,
    ReturnCreatedEvent,
    ReturnDecisionRecordedEvent,
    ReturnDispositionCreatedEvent,
    ReturnDispositionUpdatedEvent
} from './types-54.js';
import type { ReverseInvoiceManualPaymentRequestInput, ReturnResolutionUpdatedEvent, ReturnUpdatedEvent } from './types-57.js';
import type { UpdateInvoiceRequestInput } from './types-66.js';
import type { WaiveInvoiceLateFeeRequestInput } from './types-68.js';
import type {
    Refund,
    ReaderArchivedEvent,
    ReaderCreatedEvent,
    ReaderUpdatedEvent,
    RefundCreatedEvent,
    RefundFailedEvent
} from './types-52.js';
import type {
    BalanceTransactionCreatedEvent,
    BalanceTransactionUpdatedEvent,
    BalanceUpdatedEvent,
    BundleArchivedEvent,
    BundleCreatedEvent,
    BundleUpdatedEvent
} from './types-1.js';
import type { CategoryCreatedEvent, CategoryDeletedEvent, CategoryUpdatedEvent } from './types-5.js';
import type {
    CustomDomainArchivedEvent,
    CustomDomainUpdatedEvent,
    CustomerCreatedEvent,
    CustomerDeletedEvent,
    CustomerDeletionRequestCompletedEvent,
    CustomerDeletionRequestCreatedEvent,
    CustomerDeletionRequestFailedEvent,
    CustomerDeletionRequestProcessingEvent,
    CustomerDeletionRequestRejectedEvent,
    CustomerEmailPreferencesUpdatedEvent
} from './types-15.js';
import type {
    DeliveryLocationSetArchivedEvent,
    DeliveryLocationSetCreatedEvent,
    DeliveryLocationSetUpdatedEvent
} from './types-17.js';
import type {
    DeliveryMethodActivatedEvent,
    DeliveryMethodArchivedEvent,
    DeliveryMethodCreatedEvent,
    DeliveryMethodDeactivatedEvent,
    DeliveryMethodUpdatedEvent
} from './types-18.js';
import type { DeliveryProfileArchivedEvent } from './types-19.js';
import type {
    DeliveryProfileCreatedEvent,
    DeliveryProfileUpdatedEvent,
    DeliveryRateCallbackActivatedEvent,
    DeliveryRateCallbackArchivedEvent,
    DeliveryRateCallbackCreatedEvent,
    DeliveryRateCallbackDeactivatedEvent
} from './types-20.js';
import type {
    DeliveryRateCallbackUpdatedEvent,
    DeliveryRevocationCreatedEvent,
    DeliverySelectionCommittedEvent
} from './types-21.js';
import type { DeliveryZoneArchivedEvent, DeliveryZoneCreatedEvent, DeliveryZoneUpdatedEvent } from './types-22.js';
import type { FulfillmentEventCreatedEvent, FulfillmentFailedEvent, FulfillmentUpdatedEvent } from './types-25.js';
import type {
    GiftCardCreatedEvent,
    GiftCardLoadCreatedEvent,
    GiftCardLoadUpdatedEvent,
    GiftCardNotificationCreatedEvent,
    GiftCardNotificationUpdatedEvent
} from './types-26.js';
import type {
    GiftCardRedemptionCreatedEvent,
    GiftCardRedemptionUpdatedEvent,
    GiftCardTransactionCreatedEvent,
    GiftCardUpdatedEvent
} from './types-27.js';
import type { InventoryCountAppliedEvent, InventoryCountUpdatedEvent } from './types-28.js';
import type {
    InventoryLevelShortageDetectedEvent,
    InventoryLevelUpdatedEvent,
    InventoryReceiptCreatedEvent,
    InventoryReservationActionRequiredEvent,
    InventoryReservationAtRiskEvent,
    InventoryReservationClosedEvent,
    InventoryReservationCommittedEvent,
    InventoryReservationConsumedEvent,
    InventoryReservationCreatedEvent
} from './types-29.js';
import type {
    InventoryReservationHoldExpiredEvent,
    InventoryReservationReleasedEvent,
    InventoryReservationUpdatedEvent,
    InventoryTransferClosedEvent,
    InventoryTransferDepartedEvent,
    InventoryTransferLostEvent,
    InventoryTransferReceivedEvent
} from './types-30.js';
import type {
    OrderEditCreatedEvent,
    OrderInventoryExceptionCreatedEvent,
    OrderInventoryExceptionResolvedEvent,
    OrderPaidEvent
} from './types-40.js';
import type { OrderUpdatedEvent, PackageCreatedEvent, PackageUpdatedEvent } from './types-42.js';
import type {
    PartnerAppInstallCreatedEvent,
    PartnerAppInstallPermissionsUpdatedEvent,
    PartnerAppInstallRevokedEvent,
    PartnerAppInstallUpdatedEvent,
    PartnerAppPlatformApprovedEvent,
    PartnerAppPlatformLimitedEvent,
    PartnerAppPlatformRejectedEvent,
    PartnerAppUpdatedEvent
} from './types-43.js';
import type {
    PaymentIntentProcessingEvent,
    PaymentIntentRequiresActionEvent,
    PaymentIntentRequiresCaptureEvent,
    PaymentIntentSucceededEvent,
    PaymentIntentUpdatedEvent,
    PaymentLinkCreatedEvent
} from './types-45.js';
import type {
    PaymentLinkUpdatedEvent,
    PaymentMethodActivatedEvent,
    PaymentMethodArchivedEvent,
    PaymentMethodFailedEvent,
    PaymentMethodUpdatedEvent
} from './types-46.js';
import type {
    PaymentReviewClosedEvent,
    PaymentReviewOpenedEvent,
    PaymentReviewReopenedEvent,
    PaymentSplitCanceledEvent,
    PaymentSplitCreatedEvent,
    PaymentSplitFailedEvent,
    PaymentSplitSucceededEvent,
    PaymentSplitUpdatedEvent,
    PayoutCanceledEvent,
    PayoutCreatedEvent
} from './types-47.js';
import type {
    PayoutDestinationArchivedEvent,
    PayoutDestinationCreatedEvent,
    PayoutDestinationDisabledEvent,
    PayoutDestinationUpdatedEvent,
    PayoutFailedEvent,
    PayoutReversedEvent,
    PayoutSettingsUpdatedEvent,
    PayoutSucceededEvent,
    PayoutUpdatedEvent,
    PlatformFeeCanceledEvent,
    PlatformFeeCreatedEvent
} from './types-48.js';
import type {
    ProductVariantArchivedEvent,
    ProductVariantCreatedEvent,
    ProductVariantUpdatedEvent,
    PromotionArchivedEvent,
    PromotionCodeArchivedEvent,
    PromotionCodeCreatedEvent,
    PromotionCodeUpdatedEvent
} from './types-50.js';
import type { PromotionCreatedEvent, PromotionUpdatedEvent } from './types-51.js';
import type {
    RefundPartiallySucceededEvent,
    RefundSucceededEvent,
    RefundUpdatedEvent,
    ReportFailedEvent,
    ReportSucceededEvent
} from './types-53.js';
import type {
    ReturnInspectionAcceptanceDecidedEvent,
    ReturnInspectionCreatedEvent,
    ReturnInspectionSupersededEvent
} from './types-55.js';
import type {
    ReturnReceiptCreatedEvent,
    ReturnReceiptSupersededEvent,
    ReturnReceiptVerifiedEvent,
    ReturnReopenedEvent,
    ReturnResolutionCreatedEvent
} from './types-56.js';
import type { ShipmentCreatedEvent, ShipmentUpdatedEvent } from './types-59.js';
import type {
    SubscriptionActivatedEvent,
    SubscriptionCanceledEvent,
    SubscriptionCancellationScheduledEvent,
    SubscriptionCreatedEvent,
    SubscriptionCycleSkippedEvent,
    SubscriptionDeliveryActionRequiredEvent
} from './types-60.js';
import type {
    SubscriptionDeliveryMigrationCompletedEvent,
    SubscriptionDeliveryPauseUpcomingEvent,
    SubscriptionDeliveryUpdatedEvent,
    SubscriptionDunningExhaustedEvent,
    SubscriptionEndUpcomingEvent,
    SubscriptionPastDueEvent,
    SubscriptionPausedEvent
} from './types-61.js';
import type {
    SubscriptionPaymentRetryCreatedEvent,
    SubscriptionPaymentRetryFailedEvent,
    SubscriptionPaymentRetrySucceededEvent,
    SubscriptionPaymentSucceededEvent,
    SubscriptionPlanChangeCanceledEvent,
    SubscriptionPlanChangeScheduledEvent,
    SubscriptionPlanChangedEvent
} from './types-62.js';
import type {
    SubscriptionReactivatedEvent,
    SubscriptionRenewalUpcomingEvent,
    SubscriptionResumedEvent,
    SubscriptionTrialEndingEvent,
    SubscriptionUpdatedEvent
} from './types-63.js';
/** The `invoice_due_date` variant of `InvoiceScheduleDue`. */
export type InvoiceScheduleDueInvoiceDueDate = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent).
     * Collectible from the start of this date, overdue only after it ends. Always present for
     * date; for at_issue and invoice_due_date, omitted on drafts and resolved at issue to the
     * issue date or invoice due_date. Format: date. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due date is set. Value enum: "invoice_due_date". */
    "type": "invoice_due_date" | (string & {});
})
    & ({
    /** Value enum: "invoice_due_date". */
    "type": "invoice_due_date" | (string & {});
});
/**
 * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
 * issue, on a set date, or on the invoice due date.
 */
export type InvoiceScheduleDueWrite = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due time is set. Value enum: "at_issue", "date", "invoice_due_date". */
    "type": "at_issue" | "date" | "invoice_due_date" | (string & {});
})
    & ((Exclude<InvoiceScheduleDueWriteAtIssue & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueDate & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueWriteInvoiceDueDate & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `at_issue` variant of `InvoiceScheduleDueWrite`. */
export type InvoiceScheduleDueWriteAtIssue = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due time is set. Value enum: "at_issue". */
    "type": "at_issue" | (string & {});
})
    & (({
    /** Value enum: "at_issue". */
    "type": "at_issue" | (string & {});
}));
/** The `at_issue` variant of `InvoiceScheduleDueWrite`. */
export type InvoiceScheduleDueWriteAtIssueInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due time is set. Value enum: "at_issue". */
    "type": "at_issue";
})
    & (({
    /** Value enum: "at_issue". */
    "type": "at_issue";
}) & ({
    "due_date"?: never;
}));
/** The `date` variant of `InvoiceScheduleDueWrite`. */
export type InvoiceScheduleDueWriteDateInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date": string;
    /** How the entry's due time is set. Value enum: "date". */
    "type": "date";
})
    & ({
    /** Value enum: "date". */
    "type": "date";
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date": string;
});
/**
 * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
 * issue, on a set date, or on the invoice due date.
 */
export type InvoiceScheduleDueWriteInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due time is set. Value enum: "at_issue", "date", "invoice_due_date". */
    "type": "at_issue" | "date" | "invoice_due_date";
})
    & ((Exclude<InvoiceScheduleDueWriteAtIssueInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueWriteDateInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleDueWriteInvoiceDueDateInput & object, readonly unknown[]>));
/** The `invoice_due_date` variant of `InvoiceScheduleDueWrite`. */
export type InvoiceScheduleDueWriteInvoiceDueDate = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due time is set. Value enum: "invoice_due_date". */
    "type": "invoice_due_date" | (string & {});
})
    & (({
    /** Value enum: "invoice_due_date". */
    "type": "invoice_due_date" | (string & {});
}));
/** The `invoice_due_date` variant of `InvoiceScheduleDueWrite`. */
export type InvoiceScheduleDueWriteInvoiceDueDateInput = ({
    /**
     * Calendar due date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required
     * for date and must be today or later. Not accepted for at_issue or invoice_due_date, which
     * resolve when the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "due_date"?: string;
    /** How the entry's due time is set. Value enum: "invoice_due_date". */
    "type": "invoice_due_date";
})
    & (({
    /** Value enum: "invoice_due_date". */
    "type": "invoice_due_date";
})
    & ({
    "due_date"?: never;
}));
/**
 * One payment on an invoice's payment schedule, such as a deposit, installment, or balance, with
 * its due time, amounts, and status.
 */
export type InvoiceScheduleEntry = {
    /**
     * How the entry's amount is set: a fixed amount, a percent of the invoice total, or the
     * remaining balance. How much a payment schedule entry collects: a fixed amount, a percentage
     * of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * Credit note credit allocated to this entry, minus reversed allocations. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * When the entry is due. When a payment schedule entry on an invoice is due: at issue, on a
     * set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDue;
    /**
     * Flint invoice schedule entry ID. Kept across draft edits that send it back with the entry.
     * Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id": string;
    /** The entry's role in the schedule. Value enum: "deposit", "installment", "balance". */
    "kind": "deposit" | "installment" | "balance" | (string & {});
    /**
     * What is still owed on this entry, including its unpaid late fee, never below zero. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Payments applied to this entry, minus reversed payments, including payments toward its late
     * fee. Dispute losses don't reduce it. It can exceed total_money when the entry carries a late
     * fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * The entry's payment status, computed when the invoice is read. It follows the entry's
     * balance and due time, not the invoice's status. Value enum: "pending", "due",
     * "partially_satisfied", "satisfied", "overdue".
     */
    "status": "pending" | "due" | "partially_satisfied" | "satisfied" | "overdue" | (string & {});
    /**
     * The entry's share of the invoice total, resolved from amount_specification against
     * snapshot.pricing_amounts.total_money. Recomputed on draft edits and fixed at issue. Excludes
     * late fees. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "total_money": MoneyValue;
    /**
     * The part of this entry written off when the invoice was marked uncollectible, including its
     * unpaid late fee. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "written_off_money": MoneyValue;
};
/**
 * One payment schedule entry you supply when creating or updating an invoice. Set its kind, how
 * much it collects, and when it is due.
 */
export type InvoiceScheduleEntryWrite = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWrite;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "deposit", "installment", "balance". */
    "kind": "deposit" | "installment" | "balance" | (string & {});
})
    & ((Exclude<InvoiceScheduleEntryWriteDeposit & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleEntryWriteInstallment & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleEntryWriteBalance & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `balance` variant of `InvoiceScheduleEntryWrite`. */
export type InvoiceScheduleEntryWriteBalance = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWrite;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "balance". */
    "kind": "balance" | (string & {});
})
    & ({
    /**
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance. amount_money (Optional): {@link MoneyValue}. The amount to
     * collect, in the invoice currency. Required with fixed and not accepted with any other type.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. percent
     * (Optional): number. Percentage of snapshot.pricing_amounts.total_money to collect, greater
     * than 0 and at most 100, with up to four decimal places. Required with percentage and not
     * accepted with any other type. multipleOf: 0.0001. type (Required): string. How the entry's
     * amount is set. Value enum: "remaining_balance". oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixed}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentage}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalance}. The `remaining_balance` variant of
     * `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecification & object, readonly unknown[]>)
        & ({
        /** Value enum: "remaining_balance". */
        "type"?: "remaining_balance" | (string & {});
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_date (Optional): string. Calendar due
     * date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and
     * must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when
     * the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02". type (Required):
     * string. How the entry's due time is set. Value enum: "date", "invoice_due_date". oneOf[1]
     * (Value): {@link InvoiceScheduleDueWriteAtIssue}. The `at_issue` variant of
     * `InvoiceScheduleDueWrite`. oneOf[2] (Value): {@link InvoiceScheduleDueDate}. The `date`
     * variant of `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@link
     * InvoiceScheduleDueWriteInvoiceDueDate}. The `invoice_due_date` variant of
     * `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWrite & object, readonly unknown[]>)
        & ({
        /** Value enum: "invoice_due_date", "date". */
        "type"?: "invoice_due_date" | "date" | (string & {});
    });
    /** Value enum: "balance". */
    "kind"?: "balance" | (string & {});
});
/** The `balance` variant of `InvoiceScheduleEntryWrite`. */
export type InvoiceScheduleEntryWriteBalanceInput = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecificationRequestInput;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "balance". */
    "kind": "balance";
})
    & ({
    /**
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance. amount_money (Optional): {@link MoneyValueInput}. The
     * amount to collect, in the invoice currency. Required with fixed and not accepted with any
     * other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. percent (Optional): number. Percentage of snapshot.pricing_amounts.total_money to
     * collect, greater than 0 and at most 100, with up to four decimal places. Required with
     * percentage and not accepted with any other type. multipleOf: 0.0001. type (Required):
     * string. How the entry's amount is set. Value enum: "remaining_balance". oneOf[1] (Value):
     * {@link InvoiceScheduleAmountSpecificationFixedRequestInput}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentageRequestInput}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput}. The `remaining_balance`
     * variant of `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecificationRequestInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "remaining_balance". */
        "type"?: "remaining_balance";
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_date (Optional): string. Calendar due
     * date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and
     * must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when
     * the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02". type (Required):
     * string. How the entry's due time is set. Value enum: "date", "invoice_due_date". oneOf[1]
     * (Value): {@link InvoiceScheduleDueWriteAtIssueInput}. The `at_issue` variant of
     * `InvoiceScheduleDueWrite`. oneOf[2] (Value): {@link InvoiceScheduleDueWriteDateInput}. The
     * `date` variant of `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@link
     * InvoiceScheduleDueWriteInvoiceDueDateInput}. The `invoice_due_date` variant of
     * `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWriteInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "invoice_due_date", "date". */
        "type"?: "invoice_due_date" | "date";
    });
    /** Value enum: "balance". */
    "kind"?: "balance";
});
/** The `deposit` variant of `InvoiceScheduleEntryWrite`. */
export type InvoiceScheduleEntryWriteDeposit = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWrite;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "deposit". */
    "kind": "deposit" | (string & {});
})
    & ({
    /**
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance. amount_money (Optional): {@link MoneyValue}. The amount to
     * collect, in the invoice currency. Required with fixed and not accepted with any other type.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. percent
     * (Optional): number. Percentage of snapshot.pricing_amounts.total_money to collect, greater
     * than 0 and at most 100, with up to four decimal places. Required with percentage and not
     * accepted with any other type. multipleOf: 0.0001. type (Required): string. How the entry's
     * amount is set. Value enum: "fixed", "percentage". oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixed}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentage}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalance}. The `remaining_balance` variant of
     * `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecification & object, readonly unknown[]>)
        & ({
        /** Value enum: "fixed", "percentage". */
        "type"?: "fixed" | "percentage" | (string & {});
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_date (Optional): string. Calendar due
     * date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and
     * must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when
     * the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02". type (Required):
     * string. How the entry's due time is set. Value enum: "at_issue", "date". oneOf[1] (Value):
     * {@link InvoiceScheduleDueWriteAtIssue}. The `at_issue` variant of `InvoiceScheduleDueWrite`.
     * oneOf[2] (Value): {@link InvoiceScheduleDueDate}. The `date` variant of
     * `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@link InvoiceScheduleDueWriteInvoiceDueDate}.
     * The `invoice_due_date` variant of `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWrite & object, readonly unknown[]>)
        & ({
        /** Value enum: "at_issue", "date". */
        "type"?: "at_issue" | "date" | (string & {});
    });
    /** Value enum: "deposit". */
    "kind"?: "deposit" | (string & {});
});
/** The `deposit` variant of `InvoiceScheduleEntryWrite`. */
export type InvoiceScheduleEntryWriteDepositInput = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecificationRequestInput;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "deposit". */
    "kind": "deposit";
})
    & ({
    /**
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance. amount_money (Optional): {@link MoneyValueInput}. The
     * amount to collect, in the invoice currency. Required with fixed and not accepted with any
     * other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. percent (Optional): number. Percentage of snapshot.pricing_amounts.total_money to
     * collect, greater than 0 and at most 100, with up to four decimal places. Required with
     * percentage and not accepted with any other type. multipleOf: 0.0001. type (Required):
     * string. How the entry's amount is set. Value enum: "fixed", "percentage". oneOf[1] (Value):
     * {@link InvoiceScheduleAmountSpecificationFixedRequestInput}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentageRequestInput}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput}. The `remaining_balance`
     * variant of `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecificationRequestInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "fixed", "percentage". */
        "type"?: "fixed" | "percentage";
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_date (Optional): string. Calendar due
     * date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and
     * must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when
     * the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02". type (Required):
     * string. How the entry's due time is set. Value enum: "at_issue", "date". oneOf[1] (Value):
     * {@link InvoiceScheduleDueWriteAtIssueInput}. The `at_issue` variant of
     * `InvoiceScheduleDueWrite`. oneOf[2] (Value): {@link InvoiceScheduleDueWriteDateInput}. The
     * `date` variant of `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@link
     * InvoiceScheduleDueWriteInvoiceDueDateInput}. The `invoice_due_date` variant of
     * `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWriteInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "at_issue", "date". */
        "type"?: "at_issue" | "date";
    });
    /** Value enum: "deposit". */
    "kind"?: "deposit";
});
/**
 * One payment schedule entry you supply when creating or updating an invoice. Set its kind, how
 * much it collects, and when it is due.
 */
export type InvoiceScheduleEntryWriteInput = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecificationRequestInput;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "deposit", "installment", "balance". */
    "kind": "deposit" | "installment" | "balance";
})
    & ((Exclude<InvoiceScheduleEntryWriteDepositInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleEntryWriteInstallmentInput & object, readonly unknown[]>)
    | (Exclude<InvoiceScheduleEntryWriteBalanceInput & object, readonly unknown[]>));
/** The `installment` variant of `InvoiceScheduleEntryWrite`. */
export type InvoiceScheduleEntryWriteInstallment = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecification;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWrite;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "installment". */
    "kind": "installment" | (string & {});
})
    & ({
    /**
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance. amount_money (Optional): {@link MoneyValue}. The amount to
     * collect, in the invoice currency. Required with fixed and not accepted with any other type.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. percent
     * (Optional): number. Percentage of snapshot.pricing_amounts.total_money to collect, greater
     * than 0 and at most 100, with up to four decimal places. Required with percentage and not
     * accepted with any other type. multipleOf: 0.0001. type (Required): string. How the entry's
     * amount is set. Value enum: "fixed", "percentage". oneOf[1] (Value): {@link
     * InvoiceScheduleAmountSpecificationFixed}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentage}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalance}. The `remaining_balance` variant of
     * `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecification & object, readonly unknown[]>)
        & ({
        /** Value enum: "fixed", "percentage". */
        "type"?: "fixed" | "percentage" | (string & {});
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_date (Optional): string. Calendar due
     * date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and
     * must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when
     * the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02". type (Required):
     * string. How the entry's due time is set. Value enum: "date". oneOf[1] (Value): {@link
     * InvoiceScheduleDueWriteAtIssue}. The `at_issue` variant of `InvoiceScheduleDueWrite`.
     * oneOf[2] (Value): {@link InvoiceScheduleDueDate}. The `date` variant of
     * `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@link InvoiceScheduleDueWriteInvoiceDueDate}.
     * The `invoice_due_date` variant of `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWrite & object, readonly unknown[]>)
        & ({
        /** Value enum: "date". */
        "type"?: "date" | (string & {});
    });
    /** Value enum: "installment". */
    "kind"?: "installment" | (string & {});
});
/** The `installment` variant of `InvoiceScheduleEntryWrite`. */
export type InvoiceScheduleEntryWriteInstallmentInput = ({
    /**
     * How much the entry collects. Deposits and installments use fixed or percentage, and the
     * balance uses remaining_balance. How much a payment schedule entry collects: a fixed amount,
     * a percentage of the invoice total, or the remaining balance.
     */
    "amount_specification": InvoiceScheduleAmountSpecificationRequestInput;
    /**
     * When the entry is due. Deposits use at_issue or date, installments use date, and the balance
     * uses invoice_due_date or date. When a payment schedule entry is due, as supplied when
     * creating or updating an invoice: at issue, on a set date, or on the invoice due date.
     */
    "due": InvoiceScheduleDueWriteInput;
    /**
     * An existing entry's ID, to keep that entry when you replace the schedule on PATCH. Omit it
     * to add a new entry. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** The entry's role in the schedule. Value enum: "installment". */
    "kind": "installment";
})
    & ({
    /**
     * How much a payment schedule entry collects: a fixed amount, a percentage of the invoice
     * total, or the remaining balance. amount_money (Optional): {@link MoneyValueInput}. The
     * amount to collect, in the invoice currency. Required with fixed and not accepted with any
     * other type. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. percent (Optional): number. Percentage of snapshot.pricing_amounts.total_money to
     * collect, greater than 0 and at most 100, with up to four decimal places. Required with
     * percentage and not accepted with any other type. multipleOf: 0.0001. type (Required):
     * string. How the entry's amount is set. Value enum: "fixed", "percentage". oneOf[1] (Value):
     * {@link InvoiceScheduleAmountSpecificationFixedRequestInput}. The `fixed` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[2] (Value): {@link
     * InvoiceScheduleAmountSpecificationPercentageRequestInput}. The `percentage` variant of
     * `InvoiceScheduleAmountSpecification`. oneOf[3] (Value): {@link
     * InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput}. The `remaining_balance`
     * variant of `InvoiceScheduleAmountSpecification`.
     */
    "amount_specification"?: (Exclude<InvoiceScheduleAmountSpecificationRequestInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "fixed", "percentage". */
        "type"?: "fixed" | "percentage";
    });
    /**
     * When a payment schedule entry is due, as supplied when creating or updating an invoice: at
     * issue, on a set date, or on the invoice due date. due_date (Optional): string. Calendar due
     * date in YYYY-MM-DD format in the invoice timezone (UTC when absent). Required for date and
     * must be today or later. Not accepted for at_issue or invoice_due_date, which resolve when
     * the invoice is issued. Format: date. minLength: 1. Example: "2026-08-02". type (Required):
     * string. How the entry's due time is set. Value enum: "date". oneOf[1] (Value): {@link
     * InvoiceScheduleDueWriteAtIssueInput}. The `at_issue` variant of `InvoiceScheduleDueWrite`.
     * oneOf[2] (Value): {@link InvoiceScheduleDueWriteDateInput}. The `date` variant of
     * `InvoiceScheduleDueWrite`. oneOf[3] (Value): {@link
     * InvoiceScheduleDueWriteInvoiceDueDateInput}. The `invoice_due_date` variant of
     * `InvoiceScheduleDueWrite`.
     */
    "due"?: (Exclude<InvoiceScheduleDueWriteInput & object, readonly unknown[]>)
        & ({
        /** Value enum: "date". */
        "type"?: "date";
    });
    /** Value enum: "installment". */
    "kind"?: "installment";
});
export type InvoiceSentEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "cc_emails": Array<string>;
            "closed_at"?: string;
            "collection": InvoiceCollection;
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            "created_at": string;
            "credit_money": MoneyValue;
            "currently_due_money": MoneyValue;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            "due_date"?: string;
            "external_reference_id": string | null;
            "footer": string | null;
            "invoice_id": string;
            "invoice_number"?: string;
            "is_overdue": boolean;
            "issued_at"?: string;
            "late_fee_money": MoneyValue;
            "late_fees": Array<InvoiceLateFee>;
            "memo": string | null;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "paid_money": MoneyValue;
            "payment_due": InvoicePaymentDue;
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            "po_number": string | null;
            "public_url"?: string;
            "recipient_email": string | null;
            "reference": string | null;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money": MoneyValue;
            "reminders_paused": boolean;
            "reminders_paused_at"?: string;
            "remit_to_address"?: Address;
            "schedule_entries": Array<InvoiceScheduleEntry>;
            "scheduled_issue_at": string | null;
            "service_date": string | null;
            "snapshot"?: InvoiceSnapshot;
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            "subscription_id": string | null;
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            "timezone"?: string;
            "total_money": MoneyValue;
            "uncollectible_at"?: string;
            "updated_at": string;
            "version": number;
            "viewed_at"?: string;
            "voided_at"?: string;
            "written_off_money": MoneyValue;
        };
        "previous_attributes"?: Partial<Invoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.sent";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "cc_emails": Array<string>;
            "closed_at"?: string;
            "collection": InvoiceCollection;
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            "created_at": string;
            "credit_money": MoneyValue;
            "currently_due_money": MoneyValue;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            "due_date"?: string;
            "external_reference_id": string | null;
            "footer": string | null;
            "invoice_id": string;
            "invoice_number"?: string;
            "is_overdue": boolean;
            "issued_at"?: string;
            "late_fee_money": MoneyValue;
            "late_fees": Array<InvoiceLateFee>;
            "memo": string | null;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "paid_money": MoneyValue;
            "payment_due": InvoicePaymentDue;
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            "po_number": string | null;
            "public_url"?: string;
            "recipient_email": string | null;
            "reference": string | null;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money": MoneyValue;
            "reminders_paused": boolean;
            "reminders_paused_at"?: string;
            "remit_to_address"?: Address;
            "schedule_entries": Array<InvoiceScheduleEntry>;
            "scheduled_issue_at": string | null;
            "service_date": string | null;
            "snapshot"?: InvoiceSnapshot;
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            "subscription_id": string | null;
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            "timezone"?: string;
            "total_money": MoneyValue;
            "uncollectible_at"?: string;
            "updated_at": string;
            "version": number;
            "viewed_at"?: string;
            "voided_at"?: string;
            "written_off_money": MoneyValue;
        };
        "previous_attributes"?: Partial<Invoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.sent";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.sent";
});
/**
 * The `invoice.sent` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type InvoiceSentInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds and dispute losses don't change it.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.paid_at (Optional): string. When the invoice most recently became paid. Cleared when
     * status leaves paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Disputes, including losses, don't
     * reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.payment_due (Required): {@link
     * InvoicePaymentDue}. The resolved due-date policy. Send this object back when updating the
     * draft; payment_terms captures the term's current revision again. The invoice due-date policy
     * resolved at write time. The object can be sent back when updating a draft.
     * object.payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment
     * term captured on the draft, with its due date rule and late fee policy. Later changes to the
     * payment term don't affect this invoice. The payment terms saved on an invoice: the term's
     * name, version, due date calculation, and late fee policy. object.po_number (Required):
     * string or null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
     * change after issue. `null` when unset. object.public_url (Optional): string. The hosted
     * invoice link where the buyer views and pays the invoice. Present after issue on API reads,
     * except a list filtered by idempotency_key; webhook payloads leave it out.
     * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat it
     * as a secret. object.recipient_email (Required): string or null. Where Flint emails the
     * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
     * object.reference (Required): string or null. Your reference for the invoice, printed on the
     * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after
     * issue. `null` when unset. object.refund_status (Required): string. How much of the collected
     * money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". object.refunded_money (Required): {@link MoneyValue}. Money refunded to the
     * buyer after collection. Refunds don't reopen the balance; refund_status summarizes them.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
     * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. object.reminders_paused_at
     * (Optional): string. When automatic reminders were paused. Absent while reminders are active.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.remit_to_address (Optional):
     * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults to
     * the invoice settings remit-to address. A postal address. Every address has country.
     * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
     * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
     * addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. object.schedule_entries (Required): Array of
     * {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
     * invoice has no schedule and is collected in one balance. object.schedule_entries[] (Value):
     * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
     * deposit, installment, or balance, with its due time, amounts, and status.
     * object.scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
     * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
     * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". object.service_date
     * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD format.
     * The invoice and PDF print it as written, without timezone conversion. `null` when unset.
     * Format: date. Example: "2026-08-02". object.snapshot (Optional): {@link InvoiceSnapshot}.
     * The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A
     * draft previews the backing order; issue freezes it, and later order changes don't reach an
     * issued invoice. A frozen copy of an issued invoice's content, including line items, charges,
     * discounts, tax identities, and pricing amounts. object.status (Required): string. Current
     * invoice status. paid and credited close the current balance and can reopen to open or
     * partially_paid after a payment or credit allocation reversal; invoice.reopened reports that
     * change. An uncollectible invoice accepts manual recovery payments and becomes paid when
     * fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. A lost dispute leaves paid_money, the balance,
     * and status unchanged; collecting it again requires a new invoice. Value enum: "draft",
     * "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
     * object.subscription_id (Required): string or null. The subscription the backing order
     * belongs to, copied when the draft is created and never changed. `null` when the order isn't
     * part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.supported_actions
     * (Required): Array of string. Lifecycle actions Flint accepts for this resource now, based on
     * stored state. Independent of the caller's permissions; each action still requires its
     * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
     * "mark_uncollectible", "void". object.supported_actions[] (Value): string. Value enum:
     * "collect", "issue", "mark_uncollectible", "void". object.timezone (Optional): string. IANA
     * time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
     * the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes
     * do not alter this invoice's calendar. object.total_money (Required): {@link MoneyValue}.
     * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed at
     * issue; a draft previews the backing order total. Late fees are in late_fee_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.uncollectible_at (Optional): string. When the invoice was marked uncollectible.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.updated_at (Required): string.
     * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current invoice version. Send this as expected_version
     * when updating the draft. Format: int64. minimum: 1. object.viewed_at (Optional): string.
     * When the buyer first opened the invoice through its hosted invoice link. Recorded on a
     * best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z". object.voided_at
     * (Optional): string. When the invoice was voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.written_off_money (Required): {@link MoneyValue}. The balance
     * written off when the invoice was marked uncollectible, including unpaid late fees. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds and dispute losses don't change it. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. paid_at (Optional): string. When the invoice most
         * recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required):
         * {@link MoneyValue}. Payments collected toward this invoice, online or as recorded manual
         * payments, minus reversed payments, including payments toward late fees. Never below
         * zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in
         * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. The invoice due-date policy resolved at write time. The object
         * can be sent back when updating a draft. payment_terms_snapshot (Optional): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * The payment terms saved on an invoice: the term's name, version, due date calculation,
         * and late fee policy. po_number (Required): string or null. The buyer's purchase order
         * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * public_url (Optional): string. The hosted invoice link where the buyer views and pays
         * the invoice. Present after issue on API reads, except a list filtered by
         * idempotency_key; webhook payloads leave it out. regenerate-public-link replaces it.
         * Anyone with the link can open the invoice, so treat it as a secret. recipient_email
         * (Required): string or null. Where Flint emails the invoice and its reminders. Email
         * delivery requires it at issue. `null` when unset. reference (Required): string or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * refund_status (Required): string. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refunded_money (Required): {@link MoneyValue}. Money refunded to the buyer after
         * collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
         * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. reminders_paused_at
         * (Optional): string. When automatic reminders were paused. Absent while reminders are
         * active. Format: date-time. Example: "2026-08-02T16:00:00Z". remit_to_address (Optional):
         * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults
         * to the invoice settings remit-to address. A postal address. Every address has country.
         * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
         * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
         * addresses) always have line1 and city, and US ones always have state and postal_code.
         * Delivery quote destinations, buyer locations and postal-code tax locations hold only
         * what was provided, such as postal_code and country. schedule_entries (Required): Array
         * of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries[] (Value):
         * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
         * deposit, installment, or balance, with its due time, amounts, and status.
         * scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
         * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
         * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". service_date
         * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD
         * format. The invoice and PDF print it as written, without timezone conversion. `null`
         * when unset. Format: date. Example: "2026-08-02". snapshot (Optional): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, tax, and totals. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. A frozen copy of an issued invoice's
         * content, including line items, charges, discounts, tax identities, and pricing amounts.
         * status (Required): string. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". subscription_id (Required): string or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts for this resource now, based on stored state.
         * Independent of the caller's permissions; each action still requires its route's scope.
         * Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds and dispute losses don't change
             * it. Monetary amount represented as integer minor units plus an ISO 4217 currency
             * code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Disputes,
             * including losses, don't reduce it. Refunds don't reduce it; they are in
             * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Invoice>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.sent". */
    "event_type"?: "invoice.sent";
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
 * The `invoice.sent` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoiceSentMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds and dispute losses don't change it.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.paid_at (Optional): string. When the invoice most recently became paid. Cleared when
     * status leaves paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Disputes, including losses, don't
     * reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.payment_due (Required): {@link
     * InvoicePaymentDue}. The resolved due-date policy. Send this object back when updating the
     * draft; payment_terms captures the term's current revision again. The invoice due-date policy
     * resolved at write time. The object can be sent back when updating a draft.
     * object.payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment
     * term captured on the draft, with its due date rule and late fee policy. Later changes to the
     * payment term don't affect this invoice. The payment terms saved on an invoice: the term's
     * name, version, due date calculation, and late fee policy. object.po_number (Required):
     * string or null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
     * change after issue. `null` when unset. object.public_url (Optional): string. The hosted
     * invoice link where the buyer views and pays the invoice. Present after issue on API reads,
     * except a list filtered by idempotency_key; webhook payloads leave it out.
     * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat it
     * as a secret. object.recipient_email (Required): string or null. Where Flint emails the
     * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
     * object.reference (Required): string or null. Your reference for the invoice, printed on the
     * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after
     * issue. `null` when unset. object.refund_status (Required): string. How much of the collected
     * money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". object.refunded_money (Required): {@link MoneyValue}. Money refunded to the
     * buyer after collection. Refunds don't reopen the balance; refund_status summarizes them.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
     * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. object.reminders_paused_at
     * (Optional): string. When automatic reminders were paused. Absent while reminders are active.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.remit_to_address (Optional):
     * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults to
     * the invoice settings remit-to address. A postal address. Every address has country.
     * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
     * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
     * addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. object.schedule_entries (Required): Array of
     * {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
     * invoice has no schedule and is collected in one balance. object.schedule_entries[] (Value):
     * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
     * deposit, installment, or balance, with its due time, amounts, and status.
     * object.scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
     * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
     * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". object.service_date
     * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD format.
     * The invoice and PDF print it as written, without timezone conversion. `null` when unset.
     * Format: date. Example: "2026-08-02". object.snapshot (Optional): {@link InvoiceSnapshot}.
     * The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A
     * draft previews the backing order; issue freezes it, and later order changes don't reach an
     * issued invoice. A frozen copy of an issued invoice's content, including line items, charges,
     * discounts, tax identities, and pricing amounts. object.status (Required): string. Current
     * invoice status. paid and credited close the current balance and can reopen to open or
     * partially_paid after a payment or credit allocation reversal; invoice.reopened reports that
     * change. An uncollectible invoice accepts manual recovery payments and becomes paid when
     * fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. A lost dispute leaves paid_money, the balance,
     * and status unchanged; collecting it again requires a new invoice. Value enum: "draft",
     * "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
     * object.subscription_id (Required): string or null. The subscription the backing order
     * belongs to, copied when the draft is created and never changed. `null` when the order isn't
     * part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.supported_actions
     * (Required): Array of string. Lifecycle actions Flint accepts for this resource now, based on
     * stored state. Independent of the caller's permissions; each action still requires its
     * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
     * "mark_uncollectible", "void". object.supported_actions[] (Value): string. Value enum:
     * "collect", "issue", "mark_uncollectible", "void". object.timezone (Optional): string. IANA
     * time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
     * the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes
     * do not alter this invoice's calendar. object.total_money (Required): {@link MoneyValue}.
     * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed at
     * issue; a draft previews the backing order total. Late fees are in late_fee_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.uncollectible_at (Optional): string. When the invoice was marked uncollectible.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.updated_at (Required): string.
     * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current invoice version. Send this as expected_version
     * when updating the draft. Format: int64. minimum: 1. object.viewed_at (Optional): string.
     * When the buyer first opened the invoice through its hosted invoice link. Recorded on a
     * best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z". object.voided_at
     * (Optional): string. When the invoice was voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.written_off_money (Required): {@link MoneyValue}. The balance
     * written off when the invoice was marked uncollectible, including unpaid late fees. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds and dispute losses don't change it. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. paid_at (Optional): string. When the invoice most
         * recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required):
         * {@link MoneyValue}. Payments collected toward this invoice, online or as recorded manual
         * payments, minus reversed payments, including payments toward late fees. Never below
         * zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in
         * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. The invoice due-date policy resolved at write time. The object
         * can be sent back when updating a draft. payment_terms_snapshot (Optional): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * The payment terms saved on an invoice: the term's name, version, due date calculation,
         * and late fee policy. po_number (Required): string or null. The buyer's purchase order
         * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * public_url (Optional): string. The hosted invoice link where the buyer views and pays
         * the invoice. Present after issue on API reads, except a list filtered by
         * idempotency_key; webhook payloads leave it out. regenerate-public-link replaces it.
         * Anyone with the link can open the invoice, so treat it as a secret. recipient_email
         * (Required): string or null. Where Flint emails the invoice and its reminders. Email
         * delivery requires it at issue. `null` when unset. reference (Required): string or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * refund_status (Required): string. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refunded_money (Required): {@link MoneyValue}. Money refunded to the buyer after
         * collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
         * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. reminders_paused_at
         * (Optional): string. When automatic reminders were paused. Absent while reminders are
         * active. Format: date-time. Example: "2026-08-02T16:00:00Z". remit_to_address (Optional):
         * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults
         * to the invoice settings remit-to address. A postal address. Every address has country.
         * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
         * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
         * addresses) always have line1 and city, and US ones always have state and postal_code.
         * Delivery quote destinations, buyer locations and postal-code tax locations hold only
         * what was provided, such as postal_code and country. schedule_entries (Required): Array
         * of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries[] (Value):
         * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
         * deposit, installment, or balance, with its due time, amounts, and status.
         * scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
         * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
         * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". service_date
         * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD
         * format. The invoice and PDF print it as written, without timezone conversion. `null`
         * when unset. Format: date. Example: "2026-08-02". snapshot (Optional): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, tax, and totals. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. A frozen copy of an issued invoice's
         * content, including line items, charges, discounts, tax identities, and pricing amounts.
         * status (Required): string. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". subscription_id (Required): string or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts for this resource now, based on stored state.
         * Independent of the caller's permissions; each action still requires its route's scope.
         * Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds and dispute losses don't change
             * it. Monetary amount represented as integer minor units plus an ISO 4217 currency
             * code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Disputes,
             * including losses, don't reduce it. Refunds don't reduce it; they are in
             * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Invoice>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.sent". */
    "event_type"?: "invoice.sent";
});
/**
 * Merchant defaults for invoices, including numbering prefixes, default memo and footer,
 * collection mode, reminders, and autopay retries.
 */
export type InvoiceSettings = {
    /**
     * Replaced as a whole: send every field you want to keep. When to retry a failed automatic
     * invoice payment, as a list of day offsets.
     */
    "autopay_retry_policy"?: InvoiceAutopayRetryPolicy;
    /**
     * Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization.
     * maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "credit_note_number_prefix"?: string;
    /**
     * How new invoices that ask for `merchant_default` collection are collected. Defaults to
     * `buyer_initiated`. Value enum: "buyer_initiated", "automatic", "external".
     */
    "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | (string & {});
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. maxLength:
     * 4096.
     */
    "default_footer"?: string;
    /**
     * ID of the invoice payment term that applies to your invoices created with `payment_due.type`
     * set to `merchant_default`. pattern: ^ipt_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "default_invoice_payment_term_id"?: string;
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. maxLength:
     * 4096.
     */
    "default_memo"?: string;
    /**
     * Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization.
     * maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "invoice_number_prefix"?: string;
    /**
     * Replaced as a whole: send every field you want to keep. Which payment options an invoice
     * accepts, any per-option total limits, and whether to show a cost comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
    /**
     * Replaced as a whole: send every field you want to keep. Rules for automatic invoice
     * reminders, each sent a set number of days before or after the due date.
     */
    "reminder_policy"?: InvoiceReminderPolicy;
    /**
     * Replaced as a whole: send every field you want to keep. A postal address. Every address has
     * country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "remit_to_address"?: Address;
    /**
     * Limited to 255 characters (Unicode code points), counted before normalization. Format:
     * email. maxLength: 255. Example: "buyer@example.com".
     */
    "reply_to_email"?: string;
};
/**
 * Changes to a merchant's invoice settings. Send only the fields to change, and send null on a
 * nullable field to clear it. minProperties: 1.
 */
export type InvoiceSettingsPatch = {
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * InvoiceAutopayRetryPolicy}. When to retry a failed automatic invoice payment, as a list of
     * day offsets. anyOf[2] (Value): null.
     */
    "autopay_retry_policy"?: ((InvoiceAutopayRetryPolicy) | (null));
    /**
     * Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. Send
     * null to clear it. minLength: 1. maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "credit_note_number_prefix"?: string | null;
    /**
     * How new invoices that ask for `merchant_default` collection are collected. Defaults to
     * `buyer_initiated`. Value enum: "buyer_initiated", "automatic", "external", null.
     */
    "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | null | (string & {}) | null;
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. Send null to
     * clear it. minLength: 1. maxLength: 4096.
     */
    "default_footer"?: string | null;
    /**
     * ID of the invoice payment term that applies to your invoices created with `payment_due.type`
     * set to `merchant_default`. minLength: 1. pattern: ^ipt_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "default_invoice_payment_term_id"?: string | null;
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. Send null to
     * clear it. minLength: 1. maxLength: 4096.
     */
    "default_memo"?: string | null;
    /**
     * Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. Send
     * null to clear it. minLength: 1. maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "invoice_number_prefix"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * InvoicePaymentPolicy}. Which payment options an invoice accepts, any per-option total
     * limits, and whether to show a cost comparison. anyOf[2] (Value): null.
     */
    "payment_policy"?: ((InvoicePaymentPolicy) | (null));
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * InvoiceReminderPolicy}. Rules for automatic invoice reminders, each sent a set number of
     * days before or after the due date. anyOf[2] (Value): null.
     */
    "reminder_policy"?: ((InvoiceReminderPolicy) | (null));
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * AddressRequest}. A complete postal address. State and postal_code are required for US
     * addresses and optional for other countries. Send null or omit line2, state, and postal_code
     * when the address has none. anyOf[2] (Value): null.
     */
    "remit_to_address"?: ((AddressRequest) | (null));
    /**
     * Limited to 255 characters (Unicode code points), counted before normalization. Send null to
     * clear it. Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
     */
    "reply_to_email"?: string | null;
};
/**
 * Changes to a merchant's invoice settings. Send only the fields to change, and send null on a
 * nullable field to clear it. minProperties: 1.
 */
export type InvoiceSettingsPatchInput = {
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * InvoiceAutopayRetryPolicyInput}. When to retry a failed automatic invoice payment, as a list
     * of day offsets. anyOf[2] (Value): null.
     */
    "autopay_retry_policy"?: ((InvoiceAutopayRetryPolicyInput) | (null));
    /**
     * Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. Send
     * null to clear it. minLength: 1. maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "credit_note_number_prefix"?: string | null;
    /**
     * How new invoices that ask for `merchant_default` collection are collected. Defaults to
     * `buyer_initiated`. Value enum: "buyer_initiated", "automatic", "external", null.
     */
    "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | null;
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. Send null to
     * clear it. minLength: 1. maxLength: 4096.
     */
    "default_footer"?: string | null;
    /**
     * ID of the invoice payment term that applies to your invoices created with `payment_due.type`
     * set to `merchant_default`. minLength: 1. pattern: ^ipt_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "default_invoice_payment_term_id"?: string | null;
    /**
     * Limited to 4096 characters (Unicode code points), counted before normalization. Send null to
     * clear it. minLength: 1. maxLength: 4096.
     */
    "default_memo"?: string | null;
    /**
     * Up to 12 ASCII letters, digits, underscores, or hyphens. Counted before normalization. Send
     * null to clear it. minLength: 1. maxLength: 12. pattern: ^[A-Za-z0-9_-]*$.
     */
    "invoice_number_prefix"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * InvoicePaymentPolicyRequestInput}. Which payment options an invoice accepts, any per-option
     * total limits, and whether to show a cost comparison. anyOf[2] (Value): null.
     */
    "payment_policy"?: ((InvoicePaymentPolicyRequestInput) | (null));
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * InvoiceReminderPolicyInput}. Rules for automatic invoice reminders, each sent a set number
     * of days before or after the due date. anyOf[2] (Value): null.
     */
    "reminder_policy"?: ((InvoiceReminderPolicyInput) | (null));
    /**
     * Replaced as a whole: send every field you want to keep. anyOf[1] (Value): {@link
     * AddressRequestInput}. A complete postal address. State and postal_code are required for US
     * addresses and optional for other countries. Send null or omit line2, state, and postal_code
     * when the address has none. anyOf[2] (Value): null.
     */
    "remit_to_address"?: ((AddressRequestInput) | (null));
    /**
     * Limited to 255 characters (Unicode code points), counted before normalization. Send null to
     * clear it. Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
     */
    "reply_to_email"?: string | null;
};
/**
 * A frozen copy of an issued invoice's content, including line items, charges, discounts, tax
 * identities, and pricing amounts.
 */
export type InvoiceSnapshot = {
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
     * Buyer tax identity for this invoice. Drafts preview the customer's current identity. Issue
     * freezes the identity, which later profile edits and customer deletion preserve. `null` when
     * no buyer tax identity is available, including after customer deletion while the invoice is a
     * draft. anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on
     * invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the
     * tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse
     * charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display
     * order; replacing the array requires the parent's expected_version. Existing entries retain
     * their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2]
     * (Value): null.
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
     * Exemption assessment captured on this invoice. A draft previews the backing order's
     * assessment; issue freezes it. Omitted when no assessment was recorded, including on older
     * invoices. Buyer views omit evidence_reference. An exemption and a reverse charge never apply
     * to the same invoice: when an exemption applies, Flint calculates no tax, so
     * tax_reverse_charge is null. The exemption assessment recorded for an order or invoice,
     * frozen when tax commits. Fields absent from historical snapshots stay omitted.
     */
    "tax_exemption"?: OrderTaxExemption;
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
/**
 * A tip requested on an invoice, set as a fixed amount or a percentage, with an optional name and
 * description.
 */
export type InvoiceTip = {
    /**
     * Fixed tip amount, when the tip is set as an amount. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Optional description that stays on the tip for your reporting. */
    "description"?: string;
    /** Optional name that stays on the tip for your reporting. */
    "name"?: string;
    /**
     * Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
};
export type InvoiceUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "cc_emails": Array<string>;
            "closed_at"?: string;
            "collection": InvoiceCollection;
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            "created_at": string;
            "credit_money": MoneyValue;
            "currently_due_money": MoneyValue;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            "due_date"?: string;
            "external_reference_id": string | null;
            "footer": string | null;
            "invoice_id": string;
            "invoice_number"?: string;
            "is_overdue": boolean;
            "issued_at"?: string;
            "late_fee_money": MoneyValue;
            "late_fees": Array<InvoiceLateFee>;
            "memo": string | null;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "paid_money": MoneyValue;
            "payment_due": InvoicePaymentDue;
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            "po_number": string | null;
            "public_url"?: string;
            "recipient_email": string | null;
            "reference": string | null;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money": MoneyValue;
            "reminders_paused": boolean;
            "reminders_paused_at"?: string;
            "remit_to_address"?: Address;
            "schedule_entries": Array<InvoiceScheduleEntry>;
            "scheduled_issue_at": string | null;
            "service_date": string | null;
            "snapshot"?: InvoiceSnapshot;
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            "subscription_id": string | null;
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            "timezone"?: string;
            "total_money": MoneyValue;
            "uncollectible_at"?: string;
            "updated_at": string;
            "version": number;
            "viewed_at"?: string;
            "voided_at"?: string;
            "written_off_money": MoneyValue;
        };
        "previous_attributes"?: Partial<Invoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "cc_emails": Array<string>;
            "closed_at"?: string;
            "collection": InvoiceCollection;
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            "created_at": string;
            "credit_money": MoneyValue;
            "currently_due_money": MoneyValue;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            "due_date"?: string;
            "external_reference_id": string | null;
            "footer": string | null;
            "invoice_id": string;
            "invoice_number"?: string;
            "is_overdue": boolean;
            "issued_at"?: string;
            "late_fee_money": MoneyValue;
            "late_fees": Array<InvoiceLateFee>;
            "memo": string | null;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "paid_money": MoneyValue;
            "payment_due": InvoicePaymentDue;
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            "po_number": string | null;
            "public_url"?: string;
            "recipient_email": string | null;
            "reference": string | null;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money": MoneyValue;
            "reminders_paused": boolean;
            "reminders_paused_at"?: string;
            "remit_to_address"?: Address;
            "schedule_entries": Array<InvoiceScheduleEntry>;
            "scheduled_issue_at": string | null;
            "service_date": string | null;
            "snapshot"?: InvoiceSnapshot;
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            "subscription_id": string | null;
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            "timezone"?: string;
            "total_money": MoneyValue;
            "uncollectible_at"?: string;
            "updated_at": string;
            "version": number;
            "viewed_at"?: string;
            "voided_at"?: string;
            "written_off_money": MoneyValue;
        };
        "previous_attributes"?: Partial<Invoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.updated";
});
/**
 * The `invoice.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds and dispute losses don't change it.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.paid_at (Optional): string. When the invoice most recently became paid. Cleared when
     * status leaves paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Disputes, including losses, don't
     * reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.payment_due (Required): {@link
     * InvoicePaymentDue}. The resolved due-date policy. Send this object back when updating the
     * draft; payment_terms captures the term's current revision again. The invoice due-date policy
     * resolved at write time. The object can be sent back when updating a draft.
     * object.payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment
     * term captured on the draft, with its due date rule and late fee policy. Later changes to the
     * payment term don't affect this invoice. The payment terms saved on an invoice: the term's
     * name, version, due date calculation, and late fee policy. object.po_number (Required):
     * string or null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
     * change after issue. `null` when unset. object.public_url (Optional): string. The hosted
     * invoice link where the buyer views and pays the invoice. Present after issue on API reads,
     * except a list filtered by idempotency_key; webhook payloads leave it out.
     * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat it
     * as a secret. object.recipient_email (Required): string or null. Where Flint emails the
     * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
     * object.reference (Required): string or null. Your reference for the invoice, printed on the
     * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after
     * issue. `null` when unset. object.refund_status (Required): string. How much of the collected
     * money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". object.refunded_money (Required): {@link MoneyValue}. Money refunded to the
     * buyer after collection. Refunds don't reopen the balance; refund_status summarizes them.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
     * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. object.reminders_paused_at
     * (Optional): string. When automatic reminders were paused. Absent while reminders are active.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.remit_to_address (Optional):
     * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults to
     * the invoice settings remit-to address. A postal address. Every address has country.
     * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
     * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
     * addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. object.schedule_entries (Required): Array of
     * {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
     * invoice has no schedule and is collected in one balance. object.schedule_entries[] (Value):
     * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
     * deposit, installment, or balance, with its due time, amounts, and status.
     * object.scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
     * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
     * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". object.service_date
     * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD format.
     * The invoice and PDF print it as written, without timezone conversion. `null` when unset.
     * Format: date. Example: "2026-08-02". object.snapshot (Optional): {@link InvoiceSnapshot}.
     * The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A
     * draft previews the backing order; issue freezes it, and later order changes don't reach an
     * issued invoice. A frozen copy of an issued invoice's content, including line items, charges,
     * discounts, tax identities, and pricing amounts. object.status (Required): string. Current
     * invoice status. paid and credited close the current balance and can reopen to open or
     * partially_paid after a payment or credit allocation reversal; invoice.reopened reports that
     * change. An uncollectible invoice accepts manual recovery payments and becomes paid when
     * fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. A lost dispute leaves paid_money, the balance,
     * and status unchanged; collecting it again requires a new invoice. Value enum: "draft",
     * "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
     * object.subscription_id (Required): string or null. The subscription the backing order
     * belongs to, copied when the draft is created and never changed. `null` when the order isn't
     * part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.supported_actions
     * (Required): Array of string. Lifecycle actions Flint accepts for this resource now, based on
     * stored state. Independent of the caller's permissions; each action still requires its
     * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
     * "mark_uncollectible", "void". object.supported_actions[] (Value): string. Value enum:
     * "collect", "issue", "mark_uncollectible", "void". object.timezone (Optional): string. IANA
     * time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
     * the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes
     * do not alter this invoice's calendar. object.total_money (Required): {@link MoneyValue}.
     * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed at
     * issue; a draft previews the backing order total. Late fees are in late_fee_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.uncollectible_at (Optional): string. When the invoice was marked uncollectible.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.updated_at (Required): string.
     * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current invoice version. Send this as expected_version
     * when updating the draft. Format: int64. minimum: 1. object.viewed_at (Optional): string.
     * When the buyer first opened the invoice through its hosted invoice link. Recorded on a
     * best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z". object.voided_at
     * (Optional): string. When the invoice was voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.written_off_money (Required): {@link MoneyValue}. The balance
     * written off when the invoice was marked uncollectible, including unpaid late fees. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds and dispute losses don't change it. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. paid_at (Optional): string. When the invoice most
         * recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required):
         * {@link MoneyValue}. Payments collected toward this invoice, online or as recorded manual
         * payments, minus reversed payments, including payments toward late fees. Never below
         * zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in
         * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. The invoice due-date policy resolved at write time. The object
         * can be sent back when updating a draft. payment_terms_snapshot (Optional): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * The payment terms saved on an invoice: the term's name, version, due date calculation,
         * and late fee policy. po_number (Required): string or null. The buyer's purchase order
         * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * public_url (Optional): string. The hosted invoice link where the buyer views and pays
         * the invoice. Present after issue on API reads, except a list filtered by
         * idempotency_key; webhook payloads leave it out. regenerate-public-link replaces it.
         * Anyone with the link can open the invoice, so treat it as a secret. recipient_email
         * (Required): string or null. Where Flint emails the invoice and its reminders. Email
         * delivery requires it at issue. `null` when unset. reference (Required): string or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * refund_status (Required): string. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refunded_money (Required): {@link MoneyValue}. Money refunded to the buyer after
         * collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
         * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. reminders_paused_at
         * (Optional): string. When automatic reminders were paused. Absent while reminders are
         * active. Format: date-time. Example: "2026-08-02T16:00:00Z". remit_to_address (Optional):
         * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults
         * to the invoice settings remit-to address. A postal address. Every address has country.
         * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
         * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
         * addresses) always have line1 and city, and US ones always have state and postal_code.
         * Delivery quote destinations, buyer locations and postal-code tax locations hold only
         * what was provided, such as postal_code and country. schedule_entries (Required): Array
         * of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries[] (Value):
         * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
         * deposit, installment, or balance, with its due time, amounts, and status.
         * scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
         * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
         * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". service_date
         * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD
         * format. The invoice and PDF print it as written, without timezone conversion. `null`
         * when unset. Format: date. Example: "2026-08-02". snapshot (Optional): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, tax, and totals. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. A frozen copy of an issued invoice's
         * content, including line items, charges, discounts, tax identities, and pricing amounts.
         * status (Required): string. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". subscription_id (Required): string or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts for this resource now, based on stored state.
         * Independent of the caller's permissions; each action still requires its route's scope.
         * Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds and dispute losses don't change
             * it. Monetary amount represented as integer minor units plus an ISO 4217 currency
             * code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Disputes,
             * including losses, don't reduce it. Refunds don't reduce it; they are in
             * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Invoice>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.updated". */
    "event_type"?: "invoice.updated";
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
 * The `invoice.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoiceUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds and dispute losses don't change it.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.paid_at (Optional): string. When the invoice most recently became paid. Cleared when
     * status leaves paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Disputes, including losses, don't
     * reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.payment_due (Required): {@link
     * InvoicePaymentDue}. The resolved due-date policy. Send this object back when updating the
     * draft; payment_terms captures the term's current revision again. The invoice due-date policy
     * resolved at write time. The object can be sent back when updating a draft.
     * object.payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment
     * term captured on the draft, with its due date rule and late fee policy. Later changes to the
     * payment term don't affect this invoice. The payment terms saved on an invoice: the term's
     * name, version, due date calculation, and late fee policy. object.po_number (Required):
     * string or null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
     * change after issue. `null` when unset. object.public_url (Optional): string. The hosted
     * invoice link where the buyer views and pays the invoice. Present after issue on API reads,
     * except a list filtered by idempotency_key; webhook payloads leave it out.
     * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat it
     * as a secret. object.recipient_email (Required): string or null. Where Flint emails the
     * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
     * object.reference (Required): string or null. Your reference for the invoice, printed on the
     * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after
     * issue. `null` when unset. object.refund_status (Required): string. How much of the collected
     * money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". object.refunded_money (Required): {@link MoneyValue}. Money refunded to the
     * buyer after collection. Refunds don't reopen the balance; refund_status summarizes them.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
     * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. object.reminders_paused_at
     * (Optional): string. When automatic reminders were paused. Absent while reminders are active.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.remit_to_address (Optional):
     * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults to
     * the invoice settings remit-to address. A postal address. Every address has country.
     * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
     * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
     * addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. object.schedule_entries (Required): Array of
     * {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
     * invoice has no schedule and is collected in one balance. object.schedule_entries[] (Value):
     * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
     * deposit, installment, or balance, with its due time, amounts, and status.
     * object.scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
     * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
     * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". object.service_date
     * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD format.
     * The invoice and PDF print it as written, without timezone conversion. `null` when unset.
     * Format: date. Example: "2026-08-02". object.snapshot (Optional): {@link InvoiceSnapshot}.
     * The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A
     * draft previews the backing order; issue freezes it, and later order changes don't reach an
     * issued invoice. A frozen copy of an issued invoice's content, including line items, charges,
     * discounts, tax identities, and pricing amounts. object.status (Required): string. Current
     * invoice status. paid and credited close the current balance and can reopen to open or
     * partially_paid after a payment or credit allocation reversal; invoice.reopened reports that
     * change. An uncollectible invoice accepts manual recovery payments and becomes paid when
     * fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. A lost dispute leaves paid_money, the balance,
     * and status unchanged; collecting it again requires a new invoice. Value enum: "draft",
     * "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
     * object.subscription_id (Required): string or null. The subscription the backing order
     * belongs to, copied when the draft is created and never changed. `null` when the order isn't
     * part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.supported_actions
     * (Required): Array of string. Lifecycle actions Flint accepts for this resource now, based on
     * stored state. Independent of the caller's permissions; each action still requires its
     * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
     * "mark_uncollectible", "void". object.supported_actions[] (Value): string. Value enum:
     * "collect", "issue", "mark_uncollectible", "void". object.timezone (Optional): string. IANA
     * time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
     * the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes
     * do not alter this invoice's calendar. object.total_money (Required): {@link MoneyValue}.
     * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed at
     * issue; a draft previews the backing order total. Late fees are in late_fee_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.uncollectible_at (Optional): string. When the invoice was marked uncollectible.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.updated_at (Required): string.
     * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current invoice version. Send this as expected_version
     * when updating the draft. Format: int64. minimum: 1. object.viewed_at (Optional): string.
     * When the buyer first opened the invoice through its hosted invoice link. Recorded on a
     * best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z". object.voided_at
     * (Optional): string. When the invoice was voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.written_off_money (Required): {@link MoneyValue}. The balance
     * written off when the invoice was marked uncollectible, including unpaid late fees. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds and dispute losses don't change it. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. paid_at (Optional): string. When the invoice most
         * recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required):
         * {@link MoneyValue}. Payments collected toward this invoice, online or as recorded manual
         * payments, minus reversed payments, including payments toward late fees. Never below
         * zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in
         * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. The invoice due-date policy resolved at write time. The object
         * can be sent back when updating a draft. payment_terms_snapshot (Optional): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * The payment terms saved on an invoice: the term's name, version, due date calculation,
         * and late fee policy. po_number (Required): string or null. The buyer's purchase order
         * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * public_url (Optional): string. The hosted invoice link where the buyer views and pays
         * the invoice. Present after issue on API reads, except a list filtered by
         * idempotency_key; webhook payloads leave it out. regenerate-public-link replaces it.
         * Anyone with the link can open the invoice, so treat it as a secret. recipient_email
         * (Required): string or null. Where Flint emails the invoice and its reminders. Email
         * delivery requires it at issue. `null` when unset. reference (Required): string or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * refund_status (Required): string. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refunded_money (Required): {@link MoneyValue}. Money refunded to the buyer after
         * collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
         * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. reminders_paused_at
         * (Optional): string. When automatic reminders were paused. Absent while reminders are
         * active. Format: date-time. Example: "2026-08-02T16:00:00Z". remit_to_address (Optional):
         * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults
         * to the invoice settings remit-to address. A postal address. Every address has country.
         * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
         * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
         * addresses) always have line1 and city, and US ones always have state and postal_code.
         * Delivery quote destinations, buyer locations and postal-code tax locations hold only
         * what was provided, such as postal_code and country. schedule_entries (Required): Array
         * of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries[] (Value):
         * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
         * deposit, installment, or balance, with its due time, amounts, and status.
         * scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
         * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
         * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". service_date
         * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD
         * format. The invoice and PDF print it as written, without timezone conversion. `null`
         * when unset. Format: date. Example: "2026-08-02". snapshot (Optional): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, tax, and totals. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. A frozen copy of an issued invoice's
         * content, including line items, charges, discounts, tax identities, and pricing amounts.
         * status (Required): string. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". subscription_id (Required): string or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts for this resource now, based on stored state.
         * Independent of the caller's permissions; each action still requires its route's scope.
         * Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds and dispute losses don't change
             * it. Monetary amount represented as integer minor units plus an ISO 4217 currency
             * code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Disputes,
             * including losses, don't reduce it. Refunds don't reduce it; they are in
             * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Invoice>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.updated". */
    "event_type"?: "invoice.updated";
});
export type InvoiceVoidedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "cc_emails": Array<string>;
            "closed_at"?: string;
            "collection": InvoiceCollection;
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            "created_at": string;
            "credit_money": MoneyValue;
            "currently_due_money": MoneyValue;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            "due_date"?: string;
            "external_reference_id": string | null;
            "footer": string | null;
            "invoice_id": string;
            "invoice_number"?: string;
            "is_overdue": boolean;
            "issued_at"?: string;
            "late_fee_money": MoneyValue;
            "late_fees": Array<InvoiceLateFee>;
            "memo": string | null;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "paid_money": MoneyValue;
            "payment_due": InvoicePaymentDue;
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            "po_number": string | null;
            "public_url"?: string;
            "recipient_email": string | null;
            "reference": string | null;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money": MoneyValue;
            "reminders_paused": boolean;
            "reminders_paused_at"?: string;
            "remit_to_address"?: Address;
            "schedule_entries": Array<InvoiceScheduleEntry>;
            "scheduled_issue_at": string | null;
            "service_date": string | null;
            "snapshot"?: InvoiceSnapshot;
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            "subscription_id": string | null;
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            "timezone"?: string;
            "total_money": MoneyValue;
            "uncollectible_at"?: string;
            "updated_at": string;
            "version": number;
            "viewed_at"?: string;
            "voided_at"?: string;
            "written_off_money": MoneyValue;
        };
        "previous_attributes"?: Partial<Invoice>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.voided";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "cc_emails": Array<string>;
            "closed_at"?: string;
            "collection": InvoiceCollection;
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            "created_at": string;
            "credit_money": MoneyValue;
            "currently_due_money": MoneyValue;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            "due_date"?: string;
            "external_reference_id": string | null;
            "footer": string | null;
            "invoice_id": string;
            "invoice_number"?: string;
            "is_overdue": boolean;
            "issued_at"?: string;
            "late_fee_money": MoneyValue;
            "late_fees": Array<InvoiceLateFee>;
            "memo": string | null;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "outstanding_money": MoneyValue;
            "paid_at"?: string;
            "paid_money": MoneyValue;
            "payment_due": InvoicePaymentDue;
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            "po_number": string | null;
            "public_url"?: string;
            "recipient_email": string | null;
            "reference": string | null;
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money": MoneyValue;
            "reminders_paused": boolean;
            "reminders_paused_at"?: string;
            "remit_to_address"?: Address;
            "schedule_entries": Array<InvoiceScheduleEntry>;
            "scheduled_issue_at": string | null;
            "service_date": string | null;
            "snapshot"?: InvoiceSnapshot;
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            "subscription_id": string | null;
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            "timezone"?: string;
            "total_money": MoneyValue;
            "uncollectible_at"?: string;
            "updated_at": string;
            "version": number;
            "viewed_at"?: string;
            "voided_at"?: string;
            "written_off_money": MoneyValue;
        };
        "previous_attributes"?: Partial<Invoice>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.voided";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "invoice.voided";
});
/**
 * The `invoice.voided` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type InvoiceVoidedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds and dispute losses don't change it.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.paid_at (Optional): string. When the invoice most recently became paid. Cleared when
     * status leaves paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Disputes, including losses, don't
     * reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.payment_due (Required): {@link
     * InvoicePaymentDue}. The resolved due-date policy. Send this object back when updating the
     * draft; payment_terms captures the term's current revision again. The invoice due-date policy
     * resolved at write time. The object can be sent back when updating a draft.
     * object.payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment
     * term captured on the draft, with its due date rule and late fee policy. Later changes to the
     * payment term don't affect this invoice. The payment terms saved on an invoice: the term's
     * name, version, due date calculation, and late fee policy. object.po_number (Required):
     * string or null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
     * change after issue. `null` when unset. object.public_url (Optional): string. The hosted
     * invoice link where the buyer views and pays the invoice. Present after issue on API reads,
     * except a list filtered by idempotency_key; webhook payloads leave it out.
     * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat it
     * as a secret. object.recipient_email (Required): string or null. Where Flint emails the
     * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
     * object.reference (Required): string or null. Your reference for the invoice, printed on the
     * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after
     * issue. `null` when unset. object.refund_status (Required): string. How much of the collected
     * money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". object.refunded_money (Required): {@link MoneyValue}. Money refunded to the
     * buyer after collection. Refunds don't reopen the balance; refund_status summarizes them.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
     * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. object.reminders_paused_at
     * (Optional): string. When automatic reminders were paused. Absent while reminders are active.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.remit_to_address (Optional):
     * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults to
     * the invoice settings remit-to address. A postal address. Every address has country.
     * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
     * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
     * addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. object.schedule_entries (Required): Array of
     * {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
     * invoice has no schedule and is collected in one balance. object.schedule_entries[] (Value):
     * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
     * deposit, installment, or balance, with its due time, amounts, and status.
     * object.scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
     * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
     * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". object.service_date
     * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD format.
     * The invoice and PDF print it as written, without timezone conversion. `null` when unset.
     * Format: date. Example: "2026-08-02". object.snapshot (Optional): {@link InvoiceSnapshot}.
     * The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A
     * draft previews the backing order; issue freezes it, and later order changes don't reach an
     * issued invoice. A frozen copy of an issued invoice's content, including line items, charges,
     * discounts, tax identities, and pricing amounts. object.status (Required): string. Current
     * invoice status. paid and credited close the current balance and can reopen to open or
     * partially_paid after a payment or credit allocation reversal; invoice.reopened reports that
     * change. An uncollectible invoice accepts manual recovery payments and becomes paid when
     * fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. A lost dispute leaves paid_money, the balance,
     * and status unchanged; collecting it again requires a new invoice. Value enum: "draft",
     * "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
     * object.subscription_id (Required): string or null. The subscription the backing order
     * belongs to, copied when the draft is created and never changed. `null` when the order isn't
     * part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.supported_actions
     * (Required): Array of string. Lifecycle actions Flint accepts for this resource now, based on
     * stored state. Independent of the caller's permissions; each action still requires its
     * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
     * "mark_uncollectible", "void". object.supported_actions[] (Value): string. Value enum:
     * "collect", "issue", "mark_uncollectible", "void". object.timezone (Optional): string. IANA
     * time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
     * the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes
     * do not alter this invoice's calendar. object.total_money (Required): {@link MoneyValue}.
     * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed at
     * issue; a draft previews the backing order total. Late fees are in late_fee_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.uncollectible_at (Optional): string. When the invoice was marked uncollectible.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.updated_at (Required): string.
     * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current invoice version. Send this as expected_version
     * when updating the draft. Format: int64. minimum: 1. object.viewed_at (Optional): string.
     * When the buyer first opened the invoice through its hosted invoice link. Recorded on a
     * best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z". object.voided_at
     * (Optional): string. When the invoice was voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.written_off_money (Required): {@link MoneyValue}. The balance
     * written off when the invoice was marked uncollectible, including unpaid late fees. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds and dispute losses don't change it. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. paid_at (Optional): string. When the invoice most
         * recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required):
         * {@link MoneyValue}. Payments collected toward this invoice, online or as recorded manual
         * payments, minus reversed payments, including payments toward late fees. Never below
         * zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in
         * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. The invoice due-date policy resolved at write time. The object
         * can be sent back when updating a draft. payment_terms_snapshot (Optional): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * The payment terms saved on an invoice: the term's name, version, due date calculation,
         * and late fee policy. po_number (Required): string or null. The buyer's purchase order
         * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * public_url (Optional): string. The hosted invoice link where the buyer views and pays
         * the invoice. Present after issue on API reads, except a list filtered by
         * idempotency_key; webhook payloads leave it out. regenerate-public-link replaces it.
         * Anyone with the link can open the invoice, so treat it as a secret. recipient_email
         * (Required): string or null. Where Flint emails the invoice and its reminders. Email
         * delivery requires it at issue. `null` when unset. reference (Required): string or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * refund_status (Required): string. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refunded_money (Required): {@link MoneyValue}. Money refunded to the buyer after
         * collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
         * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. reminders_paused_at
         * (Optional): string. When automatic reminders were paused. Absent while reminders are
         * active. Format: date-time. Example: "2026-08-02T16:00:00Z". remit_to_address (Optional):
         * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults
         * to the invoice settings remit-to address. A postal address. Every address has country.
         * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
         * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
         * addresses) always have line1 and city, and US ones always have state and postal_code.
         * Delivery quote destinations, buyer locations and postal-code tax locations hold only
         * what was provided, such as postal_code and country. schedule_entries (Required): Array
         * of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries[] (Value):
         * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
         * deposit, installment, or balance, with its due time, amounts, and status.
         * scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
         * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
         * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". service_date
         * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD
         * format. The invoice and PDF print it as written, without timezone conversion. `null`
         * when unset. Format: date. Example: "2026-08-02". snapshot (Optional): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, tax, and totals. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. A frozen copy of an issued invoice's
         * content, including line items, charges, discounts, tax identities, and pricing amounts.
         * status (Required): string. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". subscription_id (Required): string or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts for this resource now, based on stored state.
         * Independent of the caller's permissions; each action still requires its route's scope.
         * Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds and dispute losses don't change
             * it. Monetary amount represented as integer minor units plus an ISO 4217 currency
             * code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Disputes,
             * including losses, don't reduce it. Refunds don't reduce it; they are in
             * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Invoice>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.voided". */
    "event_type"?: "invoice.voided";
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
 * The `invoice.voided` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type InvoiceVoidedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `public_url`. object.cc_emails (Required): Array of string. Additional recipients
     * copied on the invoice email and every reminder. object.cc_emails[] (Value): string.
     * object.closed_at (Optional): string. When the current closed interval began. Cleared when
     * status returns to open or partially_paid. A direct move between closed statuses preserves
     * this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.collection
     * (Required): {@link InvoiceCollection}. How this invoice is collected, resolved when the
     * draft is written. Send this object back when updating its collection policy. The invoice
     * collection policy resolved at write time. The object can be sent back when updating a draft.
     * object.collection_block_status (Required): string. Whether collection is blocked. While it
     * is inventory_blocked, collection attempts return 409 ACTION_NOT_ALLOWED with
     * details[0].reason inventory_wait. Value enum: "none", "inventory_blocked", "resolved".
     * object.created_at (Required): string. When the invoice was created. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.credit_money (Required): {@link MoneyValue}. Credit
     * note credit allocated to this invoice, minus reversed allocations. Unallocated credit isn't
     * included. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.currently_due_money (Required): {@link MoneyValue}. The part of the balance due now.
     * Without schedule_entries, it equals outstanding_money. With schedule_entries, it is the
     * outstanding amount of the first entry, in schedule order, whose due date has started and
     * that still has a balance, or 0 when there is none. It is the amount the next collect call or
     * checkout session charges. To total everything overdue, add the outstanding_money of the
     * entries whose status is overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of the billed
     * customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. object.customer.anyOf[1]
     * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place of
     * a customer ID when the customer is expanded. object.customer.anyOf[2] (Value): null.
     * object.customer_id (Optional): string. Customer billed by this invoice. Absent when the
     * invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_mode
     * (Optional): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
     * object.due_date (Optional): string. Calendar due date in YYYY-MM-DD format, interpreted in
     * timezone (UTC when absent). The outstanding balance becomes overdue only after this date
     * ends. Automatic collection runs at the later of issue and the start of this date. With
     * payment terms, issue computes this date from issued_at. Absent when there is no due date.
     * Format: date. Example: "2026-08-02". object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Use it as your sync
     * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". object.footer (Required): string or null. Fine print at the
     * bottom of the invoice and PDF. It cannot change after issue. `null` when unset.
     * object.invoice_id (Required): string. Flint invoice ID. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.invoice_number (Optional): string. Sequential
     * document number assigned when the invoice is issued. Numbering is per merchant, with test
     * and live mode numbered independently. object.is_overdue (Required): boolean. Whether the
     * invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     * object.issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.late_fee_money (Required): {@link
     * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid or
     * written off. Itemized in late_fees. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.late_fees (Required): Array of {@link InvoiceLateFee}.
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. object.late_fees[] (Value):
     * {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue. object.memo
     * (Required): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. `null` when unset. object.merchant_id (Required): string.
     * Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Summary
     * of the backing order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. The order this
     * invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Required): {@link MoneyValue}.
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to total_money on a draft. Refunds and dispute losses don't change it.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.paid_at (Optional): string. When the invoice most recently became paid. Cleared when
     * status leaves paid and set again on a later paid transition. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.paid_money (Required): {@link MoneyValue}. Payments collected
     * toward this invoice, online or as recorded manual payments, minus reversed payments,
     * including payments toward late fees. Never below zero. Disputes, including losses, don't
     * reduce it. Refunds don't reduce it; they are in refunded_money. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.payment_due (Required): {@link
     * InvoicePaymentDue}. The resolved due-date policy. Send this object back when updating the
     * draft; payment_terms captures the term's current revision again. The invoice due-date policy
     * resolved at write time. The object can be sent back when updating a draft.
     * object.payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshot}. The payment
     * term captured on the draft, with its due date rule and late fee policy. Later changes to the
     * payment term don't affect this invoice. The payment terms saved on an invoice: the term's
     * name, version, due date calculation, and late fee policy. object.po_number (Required):
     * string or null. The buyer's purchase order number, printed on the invoice and PDF. It cannot
     * change after issue. `null` when unset. object.public_url (Optional): string. The hosted
     * invoice link where the buyer views and pays the invoice. Present after issue on API reads,
     * except a list filtered by idempotency_key; webhook payloads leave it out.
     * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat it
     * as a secret. object.recipient_email (Required): string or null. Where Flint emails the
     * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
     * object.reference (Required): string or null. Your reference for the invoice, printed on the
     * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change after
     * issue. `null` when unset. object.refund_status (Required): string. How much of the collected
     * money has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". object.refunded_money (Required): {@link MoneyValue}. Money refunded to the
     * buyer after collection. Refunds don't reopen the balance; refund_status summarizes them.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
     * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. object.reminders_paused_at
     * (Optional): string. When automatic reminders were paused. Absent while reminders are active.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.remit_to_address (Optional):
     * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults to
     * the invoice settings remit-to address. A postal address. Every address has country.
     * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
     * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
     * addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country. object.schedule_entries (Required): Array of
     * {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when the
     * invoice has no schedule and is collected in one balance. object.schedule_entries[] (Value):
     * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
     * deposit, installment, or balance, with its due time, amounts, and status.
     * object.scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
     * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
     * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". object.service_date
     * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD format.
     * The invoice and PDF print it as written, without timezone conversion. `null` when unset.
     * Format: date. Example: "2026-08-02". object.snapshot (Optional): {@link InvoiceSnapshot}.
     * The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A
     * draft previews the backing order; issue freezes it, and later order changes don't reach an
     * issued invoice. A frozen copy of an issued invoice's content, including line items, charges,
     * discounts, tax identities, and pricing amounts. object.status (Required): string. Current
     * invoice status. paid and credited close the current balance and can reopen to open or
     * partially_paid after a payment or credit allocation reversal; invoice.reopened reports that
     * change. An uncollectible invoice accepts manual recovery payments and becomes paid when
     * fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. A lost dispute leaves paid_money, the balance,
     * and status unchanged; collecting it again requires a new invoice. Value enum: "draft",
     * "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
     * object.subscription_id (Required): string or null. The subscription the backing order
     * belongs to, copied when the draft is created and never changed. `null` when the order isn't
     * part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.supported_actions
     * (Required): Array of string. Lifecycle actions Flint accepts for this resource now, based on
     * stored state. Independent of the caller's permissions; each action still requires its
     * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
     * "mark_uncollectible", "void". object.supported_actions[] (Value): string. Value enum:
     * "collect", "issue", "mark_uncollectible", "void". object.timezone (Optional): string. IANA
     * time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
     * the merchant's timezone when the draft is written, or UTC when unset. Later merchant changes
     * do not alter this invoice's calendar. object.total_money (Required): {@link MoneyValue}.
     * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed at
     * issue; a draft previews the backing order total. Late fees are in late_fee_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.uncollectible_at (Optional): string. When the invoice was marked uncollectible.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.updated_at (Required): string.
     * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current invoice version. Send this as expected_version
     * when updating the draft. Format: int64. minimum: 1. object.viewed_at (Optional): string.
     * When the buyer first opened the invoice through its hosted invoice link. Recorded on a
     * best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z". object.voided_at
     * (Optional): string. When the invoice was voided. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.written_off_money (Required): {@link MoneyValue}. The balance
     * written off when the invoice was marked uncollectible, including unpaid late fees. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `public_url`.
         * cc_emails (Required): Array of string. Additional recipients copied on the invoice email
         * and every reminder. cc_emails[] (Value): string. closed_at (Optional): string. When the
         * current closed interval began. Cleared when status returns to open or partially_paid. A
         * direct move between closed statuses preserves this timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". collection (Required): {@link InvoiceCollection}. How
         * this invoice is collected, resolved when the draft is written. Send this object back
         * when updating its collection policy. The invoice collection policy resolved at write
         * time. The object can be sent back when updating a draft. collection_block_status
         * (Required): string. Whether collection is blocked. While it is inventory_blocked,
         * collection attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait.
         * Value enum: "none", "inventory_blocked", "resolved". created_at (Required): string. When
         * the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * credit_money (Required): {@link MoneyValue}. Credit note credit allocated to this
         * invoice, minus reversed allocations. Unallocated credit isn't included. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. currently_due_money
         * (Required): {@link MoneyValue}. The part of the balance due now. Without
         * schedule_entries, it equals outstanding_money. With schedule_entries, it is the
         * outstanding amount of the first entry, in schedule order, whose due date has started and
         * that still has a balance, or 0 when there is none. It is the amount the next collect
         * call or checkout session charges. To total everything overdue, add the outstanding_money
         * of the entries whose status is overdue. Always 0 unless the invoice is open or
         * partially_paid. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. customer (Optional): {@link ExpandedCustomerSummary} or null. Summary of
         * the billed customer. Returned only with expand=customer. Present only when `expand`
         * includes `customer`; `null` when expanded and there is no related customer.
         * customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
         * returned in place of a customer ID when the customer is expanded. customer.anyOf[2]
         * (Value): null. customer_id (Optional): string. Customer billed by this invoice. Absent
         * when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * delivery_mode (Optional): string. How issue delivered the invoice. Value enum: "email",
         * "caller_managed". due_date (Optional): string. Calendar due date in YYYY-MM-DD format,
         * interpreted in timezone (UTC when absent). The outstanding balance becomes overdue only
         * after this date ends. Automatic collection runs at the later of issue and the start of
         * this date. With payment terms, issue computes this date from issued_at. Absent when
         * there is no due date. Format: date. Example: "2026-08-02". external_reference_id
         * (Required): string or null. Caller-owned identifier for this resource in an external
         * system. Use it as your sync key: it isn't printed on the invoice. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". footer (Required): string or
         * null. Fine print at the bottom of the invoice and PDF. It cannot change after issue.
         * `null` when unset. invoice_id (Required): string. Flint invoice ID. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_number (Optional): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. is_overdue (Required): boolean. Whether the invoice is
         * open or partially_paid and past due with a balance remaining. Without schedule_entries,
         * the due_date has ended in timezone (UTC when absent) and outstanding_money is above
         * zero; with them, at least one entry is overdue. Computed when the invoice is read.
         * issued_at (Optional): string. When the invoice was issued. Absent on a draft. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". late_fee_money (Required): {@link
         * MoneyValue}. Late fees assessed after issue, minus waivers, including amounts since paid
         * or written off. Itemized in late_fees. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. late_fees (Required): Array of {@link
         * InvoiceLateFee}. Late fees assessed on this invoice, each with its paid, waived,
         * written-off, and outstanding amounts. late_fee_money is their assessed total minus
         * waivers. late_fees[] (Value): {@link InvoiceLateFee}. A charge assessed because an
         * invoice payment is overdue. memo (Required): string or null. Message to the customer,
         * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * merchant_id (Required): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. The order this invoice bills.
         * Every invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * outstanding_money (Required): {@link MoneyValue}. What is still owed: total_money +
         * late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on
         * paid, credited, uncollectible, and voided invoices; equal to total_money on a draft.
         * Refunds and dispute losses don't change it. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. paid_at (Optional): string. When the invoice most
         * recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". paid_money (Required):
         * {@link MoneyValue}. Payments collected toward this invoice, online or as recorded manual
         * payments, minus reversed payments, including payments toward late fees. Never below
         * zero. Disputes, including losses, don't reduce it. Refunds don't reduce it; they are in
         * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. payment_due (Required): {@link InvoicePaymentDue}. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. The invoice due-date policy resolved at write time. The object
         * can be sent back when updating a draft. payment_terms_snapshot (Optional): {@link
         * InvoicePaymentTermsSnapshot}. The payment term captured on the draft, with its due date
         * rule and late fee policy. Later changes to the payment term don't affect this invoice.
         * The payment terms saved on an invoice: the term's name, version, due date calculation,
         * and late fee policy. po_number (Required): string or null. The buyer's purchase order
         * number, printed on the invoice and PDF. It cannot change after issue. `null` when unset.
         * public_url (Optional): string. The hosted invoice link where the buyer views and pays
         * the invoice. Present after issue on API reads, except a list filtered by
         * idempotency_key; webhook payloads leave it out. regenerate-public-link replaces it.
         * Anyone with the link can open the invoice, so treat it as a secret. recipient_email
         * (Required): string or null. Where Flint emails the invoice and its reminders. Email
         * delivery requires it at issue. `null` when unset. reference (Required): string or null.
         * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
         * order number goes in po_number. It cannot change after issue. `null` when unset.
         * refund_status (Required): string. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refunded_money (Required): {@link MoneyValue}. Money refunded to the buyer after
         * collection. Refunds don't reopen the balance; refund_status summarizes them. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * reminders_paused (Required): boolean. Whether automatic reminders are paused. Set
         * reminders_paused on PATCH /v1/invoices/{invoice_id} to change it. reminders_paused_at
         * (Optional): string. When automatic reminders were paused. Absent while reminders are
         * active. Format: date-time. Example: "2026-08-02T16:00:00Z". remit_to_address (Optional):
         * {@link Address}. Where the buyer sends offline payments, shown on the invoice. Defaults
         * to the invoice settings remit-to address. A postal address. Every address has country.
         * Addresses Flint checked as complete (customer and saved addresses, merchant, location,
         * invoice, order delivery destination, tax identity, fulfillment recipient and pickup
         * addresses) always have line1 and city, and US ones always have state and postal_code.
         * Delivery quote destinations, buyer locations and postal-code tax locations hold only
         * what was provided, such as postal_code and country. schedule_entries (Required): Array
         * of {@link InvoiceScheduleEntry}. The payment schedule, in schedule order. Always [] when
         * the invoice has no schedule and is collected in one balance. schedule_entries[] (Value):
         * {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as a
         * deposit, installment, or balance, with its due time, amounts, and status.
         * scheduled_issue_at (Required): string or null. When Flint will issue and deliver this
         * draft. `null` when no issue is scheduled. Cleared when the draft is issued or voided, or
         * when you send null. Format: date-time. Example: "2026-08-02T16:00:00Z". service_date
         * (Required): string or null. The calendar date of the billed service, in YYYY-MM-DD
         * format. The invoice and PDF print it as written, without timezone conversion. `null`
         * when unset. Format: date. Example: "2026-08-02". snapshot (Optional): {@link
         * InvoiceSnapshot}. The billing content of the invoice: line items, discounts, charges,
         * tip, tax, and totals. A draft previews the backing order; issue freezes it, and later
         * order changes don't reach an issued invoice. A frozen copy of an issued invoice's
         * content, including line items, charges, discounts, tax identities, and pricing amounts.
         * status (Required): string. Current invoice status. paid and credited close the current
         * balance and can reopen to open or partially_paid after a payment or credit allocation
         * reversal; invoice.reopened reports that change. An uncollectible invoice accepts manual
         * recovery payments and becomes paid when fully recovered; reversals restore the
         * write-off. voided is final. Refunds change refund_status without reopening the balance.
         * A lost dispute leaves paid_money, the balance, and status unchanged; collecting it again
         * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
         * "uncollectible", "credited". subscription_id (Required): string or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts for this resource now, based on stored state.
         * Independent of the caller's permissions; each action still requires its route's scope.
         * Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions[] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". timezone (Optional): string. IANA time
         * zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken from
         * the merchant's timezone when the draft is written, or UTC when unset. Later merchant
         * changes do not alter this invoice's calendar. total_money (Required): {@link
         * MoneyValue}. What the issued invoice bills, equal to
         * snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order
         * total. Late fees are in late_fee_money. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. uncollectible_at (Optional): string. When the
         * invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at (Required): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current invoice version.
         * Send this as expected_version when updating the draft. Format: int64. minimum: 1.
         * viewed_at (Optional): string. When the buyer first opened the invoice through its hosted
         * invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". voided_at (Optional): string. When the invoice was voided.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". written_off_money (Required): {@link
         * MoneyValue}. The balance written off when the invoice was marked uncollectible,
         * including unpaid late fees. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code.
         */
        "object": {
            /**
             * Additional recipients copied on the invoice email and every reminder. [] (Value):
             * string.
             */
            "cc_emails": Array<string>;
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "closed_at"?: string;
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. The invoice collection policy resolved at
             * write time. The object can be sent back when updating a draft.
             */
            "collection": InvoiceCollection;
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved".
             */
            "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
            /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Credit note credit allocated to this invoice, minus reversed allocations.
             * Unallocated credit isn't included. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "credit_money": MoneyValue;
            /**
             * The part of the balance due now. Without schedule_entries, it equals
             * outstanding_money. With schedule_entries, it is the outstanding amount of the first
             * entry, in schedule order, whose due date has started and that still has a balance,
             * or 0 when there is none. It is the amount the next collect call or checkout session
             * charges. To total everything overdue, add the outstanding_money of the entries whose
             * status is overdue. Always 0 unless the invoice is open or partially_paid. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "currently_due_money": MoneyValue;
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
             * fields, returned in place of a customer ID when the customer is expanded. anyOf[2]
             * (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
            "delivery_mode"?: "email" | "caller_managed" | (string & {});
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * Format: date. Example: "2026-08-02".
             */
            "due_date"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset.
             */
            "footer": string | null;
            /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
            "invoice_id": string;
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently.
             */
            "invoice_number"?: string;
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read.
             */
            "is_overdue": boolean;
            /**
             * When the invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "issued_at"?: string;
            /**
             * Late fees assessed after issue, minus waivers, including amounts since paid or
             * written off. Itemized in late_fees. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "late_fee_money": MoneyValue;
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. late_fee_money is their assessed total minus waivers. []
             * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is
             * overdue.
             */
            "late_fees": Array<InvoiceLateFee>;
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset.
             */
            "memo": string | null;
            /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys
             * starting with flint_ are reserved for Flint and are not returned. Writes follow the
             * limits on MetadataInput and MetadataPatchInput; maps written before those limits may
             * not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * What is still owed: total_money + late_fee_money - paid_money - credit_money -
             * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
             * invoices; equal to total_money on a draft. Refunds and dispute losses don't change
             * it. Monetary amount represented as integer minor units plus an ISO 4217 currency
             * code.
             */
            "outstanding_money": MoneyValue;
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "paid_at"?: string;
            /**
             * Payments collected toward this invoice, online or as recorded manual payments, minus
             * reversed payments, including payments toward late fees. Never below zero. Disputes,
             * including losses, don't reduce it. Refunds don't reduce it; they are in
             * refunded_money. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "paid_money": MoneyValue;
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. The invoice due-date
             * policy resolved at write time. The object can be sent back when updating a draft.
             */
            "payment_due": InvoicePaymentDue;
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. The payment terms saved
             * on an invoice: the term's name, version, due date calculation, and late fee policy.
             */
            "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset.
             */
            "po_number": string | null;
            /**
             * The hosted invoice link where the buyer views and pays the invoice. Present after
             * issue on API reads, except a list filtered by idempotency_key; webhook payloads
             * leave it out. regenerate-public-link replaces it. Anyone with the link can open the
             * invoice, so treat it as a secret.
             */
            "public_url"?: string;
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset.
             */
            "recipient_email": string | null;
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             */
            "reference": string | null;
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded".
             */
            "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Money refunded to the buyer after collection. Refunds don't reopen the balance;
             * refund_status summarizes them. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money": MoneyValue;
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it.
             */
            "reminders_paused": boolean;
            /**
             * When automatic reminders were paused. Absent while reminders are active. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "reminders_paused_at"?: string;
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "remit_to_address"?: Address;
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One
             * payment on an invoice's payment schedule, such as a deposit, installment, or
             * balance, with its due time, amounts, and status.
             */
            "schedule_entries": Array<InvoiceScheduleEntry>;
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_issue_at": string | null;
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. Format: date.
             * Example: "2026-08-02".
             */
            "service_date": string | null;
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, tax, and
             * totals. A draft previews the backing order; issue freezes it, and later order
             * changes don't reach an issued invoice. A frozen copy of an issued invoice's content,
             * including line items, charges, discounts, tax identities, and pricing amounts.
             */
            "snapshot"?: InvoiceSnapshot;
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. A lost dispute leaves paid_money, the balance, and status unchanged;
             * collecting it again requires a new invoice. Value enum: "draft", "open",
             * "partially_paid", "paid", "voided", "uncollectible", "credited".
             */
            "status": "draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {});
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. Example:
             * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id": string | null;
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". [] (Value): string. Value enum: "collect", "issue",
             * "mark_uncollectible", "void".
             */
            "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar.
             */
            "timezone"?: string;
            /**
             * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed
             * at issue; a draft previews the backing order total. Late fees are in late_fee_money.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "total_money": MoneyValue;
            /**
             * When the invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "uncollectible_at"?: string;
            /**
             * When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * Format: int64. minimum: 1.
             */
            "version": number;
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "viewed_at"?: string;
            /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "voided_at"?: string;
            /**
             * The balance written off when the invoice was marked uncollectible, including unpaid
             * late fees. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "written_off_money": MoneyValue;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Invoice>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.voided". */
    "event_type"?: "invoice.voided";
});
export type InvoicesCancelPaymentAttemptParams = DisputesAcceptParams;
export type InvoicesCollectParams = (InputValue<CollectInvoiceRequestInput>
    | {
    "invoice_schedule_entry_id"?: never;
    "payment_method_id"?: never;
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
export type InvoicesCreateLateFeeParams = (InputValue<AssessInvoiceLateFeeRequestInput> | {
    "invoice_schedule_entry_id"?: never;
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
export type InvoicesCreateManualPaymentParams = (InputValue<CreateInvoiceManualPaymentRequestInput>)
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
export type InvoicesCreateParams = (CreateInvoiceRequestInput)
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
export type InvoicesGetManualPaymentParams = DisputesAcceptParams;
export type InvoicesGetPDFParams = DisputesAcceptParams;
export type InvoicesGetPDFResponse = Uint8Array;
export type InvoicesGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer, order. Expansion
     * requires commerce.invoices.read plus the read scope for each expanded resource. Limits: at
     * most 10 unique expand paths per request. [] enum: "customer", "order". Value enum:
     * "customer", "order". anyOf[1] (Value): Array of string. [] enum: "customer", "order".
     * anyOf[1][] (Value): string. Value enum: "customer", "order". anyOf[2] (Value): string. Value
     * enum: "customer", "order".
     */
    "expand"?: InputValue<("customer" | "order") | readonly ("customer" | "order")[]>;
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
export type InvoicesGetPaymentAttemptParams = DisputesAcceptParams;
export type InvoicesIssueParams = (InputValue<IssueInvoiceRequestInput>
    | {
    "delivery_mode"?: never;
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
export type InvoicesListActivitiesParams = {
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
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Filter by activity_type. The output-only catch-all other is not accepted. Values are trimmed
     * and deduplicated in first-seen order; empty or unknown entries are rejected. Values within
     * this filter are ORed; separate filters are ANDed. [] enum: "draft_created", "issued",
     * "sent", "delivery_sent", "reminder_sent", "viewed", "payment_attempt_started",
     * "payment_applied", "manual_payment_recorded", "manual_payment_reversed", "refund_succeeded",
     * "voided", "token_regenerated", "collection_blocked", "collection_block_resolved", "updated",
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
export type InvoicesListDeliveryAttemptsParams = CustomersListAddressesParams;
export type InvoicesListManualPaymentsParams = CreditNotesListAllocationsParams;
export type InvoicesListParams = {
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
     * Filter by invoice status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible",
     * "credited". Value enum: "draft", "open", "partially_paid", "paid", "voided",
     * "uncollectible", "credited". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[1][]
     * (Value): string. Value enum: "draft", "open", "partially_paid", "paid", "voided",
     * "uncollectible", "credited". anyOf[2] (Value): string. Value enum: "draft", "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited".
     */
    "status"?: InputValue<("draft" | "open" | "partially_paid" | "paid" | "voided" | "uncollectible" | "credited")
        | readonly ("draft" | "open" | "partially_paid" | "paid" | "voided" | "uncollectible" | "credited")[]>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Filter by Flint customer ID. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
    /**
     * Filter by Flint order ID. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Exact-match filter on the backing order subscription ID. pattern:
     * ^sub_[0-9A-HJKMNP-TV-Z]{26}$. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Exact, byte-sensitive whole invoice number. Preserves casing, accents, and whitespace;
     * drafts without a number do not match. minLength: 1. maxLength: 255.
     */
    "invoice_number"?: InputValue<string>;
    /**
     * Filter by the effective collection mode. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "buyer_initiated", "automatic", "external". Value enum:
     * "buyer_initiated", "automatic", "external". anyOf[1] (Value): Array of string. minItems: 1.
     * [] enum: "buyer_initiated", "automatic", "external". anyOf[1][] (Value): string. Value enum:
     * "buyer_initiated", "automatic", "external". anyOf[2] (Value): string. Value enum:
     * "buyer_initiated", "automatic", "external".
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
    /**
     * Inclusive lower bound on due_date, in YYYY-MM-DD format. Compares each invoice calendar date
     * in its timezone (UTC when absent). Format: date. Example: "2026-08-02".
     */
    "due_date_from"?: InputValue<string>;
    /**
     * Exclusive upper bound on due_date, in YYYY-MM-DD format. Compares each invoice calendar date
     * in its timezone (UTC when absent). Format: date. Example: "2026-08-02".
     */
    "due_date_to"?: InputValue<string>;
    /**
     * Filter by whether an open or partially_paid invoice has an outstanding balance after its due
     * date ends in its timezone (UTC when absent). With a schedule, matches when any entry is
     * overdue.
     */
    "is_overdue"?: InputValue<boolean>;
    /** Filter by whether outstanding_money is greater than zero. */
    "has_outstanding_balance"?: InputValue<boolean>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by invoice_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "due_date", "invoice_number",
     * "outstanding_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "due_date" | "invoice_number" | "outstanding_money">;
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
     * Include related objects in the response. Supported expansions: customer, order. Include the
     * requested related resources using scoped batch reads for this page. Each relationship
     * requires its existing target read scopes. Expansion changes the representation without
     * changing pagination tokens. Limits: at most 10 unique expand paths per request. [] enum:
     * "customer", "order". Value enum: "customer", "order". anyOf[1] (Value): Array of string. []
     * enum: "customer", "order". anyOf[1][] (Value): string. Value enum: "customer", "order".
     * anyOf[2] (Value): string. Value enum: "customer", "order".
     */
    "expand"?: InputValue<("customer" | "order") | readonly ("customer" | "order")[]>;
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
export type InvoicesListPaymentAttemptsParams = CreditNotesListAllocationsParams;
export type InvoicesMarkUncollectibleParams = (InputValue<ResourceVersionRequestInput> | {
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
export type InvoicesRegeneratePublicLinkParams = InvoicesMarkUncollectibleParams;
export type InvoicesReverseManualPaymentParams = (InputValue<ReverseInvoiceManualPaymentRequestInput>
    | {
    "expected_version"?: never;
    "reversal_note"?: never;
    "reversed_at"?: never;
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
export type InvoicesSendReminderParams = DisputesAcceptParams;
export type InvoicesUpdateParams = (InputValue<UpdateInvoiceRequestInput>)
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
export type InvoicesVoidParams = InvoicesMarkUncollectibleParams;
export type InvoicesWaiveLateFeeParams = (InputValue<WaiveInvoiceLateFeeRequestInput>)
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
     * Resource, collection, or operation result returned by this request. The issued credit note,
     * its invoice after issue, and the linked allocation or refund when requested.
     */
    "data": IssueCreditNoteResult;
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
     * The linked allocation, present when allocation was requested. Its idempotency_key is the
     * issue request's Idempotency-Key. One application of credit to the invoice. Allocations are
     * append-only: a reversal sets reversed_at rather than removing the row.
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
export type KnownWebhookEvent = ApiKeyCreatedEvent
    | ApiKeyRevokedEvent
    | ApiKeyUpdatedEvent
    | BalanceTransactionCreatedEvent
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
    | CheckoutSessionUpdatedEvent
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
    | CustomerEmailPreferencesUpdatedEvent
    | CustomerCreatedEvent
    | CustomerDeletedEvent
    | CustomerUpdatedEvent
    | DeliveryLocationSetArchivedEvent
    | DeliveryLocationSetCreatedEvent
    | DeliveryLocationSetUpdatedEvent
    | DeliveryMethodActivatedEvent
    | DeliveryMethodArchivedEvent
    | DeliveryMethodCreatedEvent
    | DeliveryMethodDeactivatedEvent
    | DeliveryMethodUpdatedEvent
    | DeliveryProfileArchivedEvent
    | DeliveryProfileCreatedEvent
    | DeliveryProfileUpdatedEvent
    | DeliveryRateCallbackActivatedEvent
    | DeliveryRateCallbackArchivedEvent
    | DeliveryRateCallbackCreatedEvent
    | DeliveryRateCallbackDeactivatedEvent
    | DeliveryRateCallbackUpdatedEvent
    | DeliveryRevocationCreatedEvent
    | DeliverySelectionCommittedEvent
    | DeliveryZoneArchivedEvent
    | DeliveryZoneCreatedEvent
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
    | EnvironmentGrantUpdatedEvent
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
    | InventoryCountUpdatedEvent
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
    | InventoryReservationUpdatedEvent
    | InventoryTransferClosedEvent
    | InventoryTransferDepartedEvent
    | InventoryTransferLostEvent
    | InventoryTransferReceivedEvent
    | InventoryTransferReturnedEvent
    | InventoryTransferUpdatedEvent
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
    | OrderEditCreatedEvent
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
    | PartnerAppPlatformApprovedEvent
    | PartnerAppPlatformLimitedEvent
    | PartnerAppPlatformRejectedEvent
    | PartnerAppUpdatedEvent
    | PaymentIntentAuthorizationExpiringEvent
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
    | PaymentMethodUpdatedEvent
    | PaymentReviewClosedEvent
    | PaymentReviewOpenedEvent
    | PaymentReviewReopenedEvent
    | PaymentSplitCanceledEvent
    | PaymentSplitCreatedEvent
    | PaymentSplitFailedEvent
    | PaymentSplitSucceededEvent
    | PaymentSplitUpdatedEvent
    | PayoutDestinationArchivedEvent
    | PayoutDestinationCreatedEvent
    | PayoutDestinationDisabledEvent
    | PayoutDestinationUpdatedEvent
    | PayoutSettingsUpdatedEvent
    | PayoutCanceledEvent
    | PayoutCreatedEvent
    | PayoutFailedEvent
    | PayoutReversedEvent
    | PayoutSucceededEvent
    | PayoutUpdatedEvent
    | PlatformFeePayoutCreatedEvent
    | PlatformFeePayoutFailedEvent
    | PlatformFeePayoutSucceededEvent
    | PlatformFeeCanceledEvent
    | PlatformFeeCreatedEvent
    | PlatformFeeSucceededEvent
    | PlatformFeeUpdatedEvent
    | PriceListArchivedEvent
    | PriceListCreatedEvent
    | PriceListUpdatedEvent
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
    | ReaderArchivedEvent
    | ReaderCreatedEvent
    | ReaderUpdatedEvent
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
    | SubscriptionEndUpcomingEvent
    | SubscriptionPastDueEvent
    | SubscriptionPausedEvent
    | SubscriptionPaymentSucceededEvent
    | SubscriptionPlanChangeCanceledEvent
    | SubscriptionPlanChangeScheduledEvent
    | SubscriptionPlanChangedEvent
    | SubscriptionReactivatedEvent
    | SubscriptionRenewalUpcomingEvent
    | SubscriptionResumedEvent
    | SubscriptionTrialEndingEvent
    | SubscriptionUpdatedEvent
    | TaxCalculationCallbackActivatedEvent
    | TaxCalculationCallbackArchivedEvent
    | TaxCalculationCallbackCreatedEvent
    | TaxCalculationCallbackDeactivatedEvent
    | TaxCalculationCallbackUpdatedEvent
    | TaxConnectionUpdatedEvent
    | TestClockAdvancingEvent
    | TestClockArchivedEvent
    | TestClockCreatedEvent
    | TestClockFailedEvent
    | TestClockReadyEvent
    | TicketCheckedInEvent
    | TicketCreatedEvent
    | TicketUpdatedEvent
    | TicketVoidedEvent;
/**
 * Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms of
 * service URLs, and whether buyers must accept the terms.
 */
export type LegalSettings = {
    /** An `https://` URL of at most 2,048 bytes. */
    "contract_url"?: string;
    /** An `https://` URL of at most 2,048 bytes. */
    "refund_policy_url"?: string;
    /** Whether the buyer must accept the terms of service before paying. */
    "require_terms_of_service"?: boolean;
    /** An `https://` URL of at most 2,048 bytes. */
    "shipping_policy_url"?: string;
    /** An `https://` URL of at most 2,048 bytes. */
    "terms_of_service_url"?: string;
};
/** Changes to a merchant's legal settings. Send null on a URL to clear it. */
export type LegalSettingsRequest = {
    /** An `https://` URL of at most 2,048 bytes. Send null to clear it. minLength: 1. */
    "contract_url"?: string | null;
    /** An `https://` URL of at most 2,048 bytes. Send null to clear it. minLength: 1. */
    "refund_policy_url"?: string | null;
    /** Whether the buyer must accept the terms of service before paying. */
    "require_terms_of_service"?: boolean;
    /** An `https://` URL of at most 2,048 bytes. Send null to clear it. minLength: 1. */
    "shipping_policy_url"?: string | null;
    /** An `https://` URL of at most 2,048 bytes. Send null to clear it. minLength: 1. */
    "terms_of_service_url"?: string | null;
};
/** Changes to a merchant's legal settings. Send null on a URL to clear it. */
export type LegalSettingsRequestInput = LegalSettingsRequest;
