import type {
    CreditNoteIssueAllocationRequest,
    CreditNoteIssueAllocationRequestInput,
    CreditNote,
    CreditNoteAllocation,
    CreditNoteAllocationCreatedEvent,
    CreditNoteAllocationReversedEvent,
    CreditNoteCreatedEvent,
    CreditNoteIssuedEvent
} from './types-13.js';
import type {
    CreditNoteRefundRequest,
    CreditNoteRefundRequestInput,
    CreditNoteUpdatedEvent,
    CreditNoteVoidedEvent,
    CustomDomainArchivedEvent,
    CustomDomainUpdatedEvent,
    CustomerCreatedEvent,
    CustomerDeletedEvent,
    CustomerDeletionRequestCompletedEvent,
    CustomerDeletionRequestCreatedEvent,
    CustomerDeletionRequestFailedEvent,
    CustomerDeletionRequestProcessingEvent,
    CustomerDeletionRequestRejectedEvent
} from './types-14.js';
import type { ResponseMeta, ReportFailedEvent, ReportSucceededEvent, ReturnActivity } from './types-51.js';
import type {
    Invoice,
    InventoryTransferLostEvent,
    InventoryTransferReceivedEvent,
    InventoryTransferReturnedEvent,
    InvoiceCollectionBlockResolvedEvent,
    InvoiceCollectionBlockedEvent,
    InvoiceCreatedEvent,
    InvoiceCreditedEvent,
    InvoiceDeliveryAttemptFailedEvent,
    InvoiceDeliveryAttemptSentEvent
} from './types-30.js';
import type {
    Refund,
    RefundCreatedEvent,
    RefundFailedEvent,
    RefundPartiallySucceededEvent,
    RefundSucceededEvent,
    RefundUpdatedEvent
} from './types-50.js';
import type {
    BalanceTransactionCreatedEvent,
    BalanceTransactionUpdatedEvent,
    BalanceUpdatedEvent,
    BundleArchivedEvent,
    BundleCreatedEvent,
    BundleUpdatedEvent
} from './types-1.js';
import type {
    CategoryCreatedEvent,
    CategoryDeletedEvent,
    CategoryUpdatedEvent,
    CheckoutSessionClosedEvent,
    CheckoutSessionCreatedEvent,
    CheckoutSessionExpiredEvent
} from './types-5.js';
import type {
    CheckoutSessionInvalidatedEvent,
    CheckoutSessionPaidEvent,
    CheckoutSessionPartiallyPaidEvent,
    CheckoutSessionUpdatedEvent
} from './types-6.js';
import type { CustomerEmailPreferencesUpdatedEvent, CustomerUpdatedEvent } from './types-15.js';
import type { DeliveryLocationSetActivatedEvent } from './types-16.js';
import type {
    DeliveryLocationSetArchivedEvent,
    DeliveryLocationSetCreatedEvent,
    DeliveryLocationSetDeactivatedEvent,
    DeliveryLocationSetUpdatedEvent,
    DeliveryMethodActivatedEvent,
    DeliveryMethodArchivedEvent,
    DeliveryMethodCreatedEvent,
    DeliveryMethodDeactivatedEvent
} from './types-17.js';
import type { DeliveryMethodUpdatedEvent } from './types-18.js';
import type {
    DeliveryProfileActivatedEvent,
    DeliveryProfileArchivedEvent,
    DeliveryProfileCreatedEvent,
    DeliveryProfileDeactivatedEvent,
    DeliveryProfileUpdatedEvent
} from './types-19.js';
import type {
    DeliveryRateCallbackActivatedEvent,
    DeliveryRateCallbackArchivedEvent,
    DeliveryRateCallbackCreatedEvent,
    DeliveryRateCallbackDeactivatedEvent,
    DeliveryRateCallbackUpdatedEvent,
    DeliveryRevocationCreatedEvent
} from './types-20.js';
import type {
    DeliverySelectionCommittedEvent,
    DeliveryZoneActivatedEvent,
    DeliveryZoneArchivedEvent,
    DeliveryZoneCreatedEvent,
    DeliveryZoneDeactivatedEvent,
    DeliveryZoneUpdatedEvent
} from './types-21.js';
import type {
    DisputeCreatedEvent,
    DisputeInquiryClosedEvent,
    DisputeLostEvent,
    DisputeNeedsResponseEvent,
    DisputePreventedEvent,
    DisputeUpdatedEvent,
    DisputeWonEvent,
    DisputesAcceptParams
} from './types-22.js';
import type {
    EnvironmentGrantCreatedEvent,
    EnvironmentGrantRevokedEvent,
    FraudWarningCreatedEvent,
    FraudWarningUpdatedEvent
} from './types-23.js';
import type {
    FulfillmentCanceledEvent,
    FulfillmentCompletedEvent,
    FulfillmentCreatedEvent,
    FulfillmentEventCreatedEvent,
    FulfillmentFailedEvent,
    FulfillmentUpdatedEvent
} from './types-24.js';
import type {
    GiftCardCreatedEvent,
    GiftCardLoadCreatedEvent,
    GiftCardLoadUpdatedEvent,
    GiftCardNotificationCreatedEvent
} from './types-25.js';
import type {
    GiftCardNotificationUpdatedEvent,
    GiftCardRedemptionCreatedEvent,
    GiftCardRedemptionUpdatedEvent,
    GiftCardTransactionCreatedEvent,
    GiftCardUpdatedEvent
} from './types-26.js';
import type { InventoryCountAppliedEvent, InventoryAllocationPoliciesDeleteParams } from './types-27.js';
import type {
    InventoryLevelShortageDetectedEvent,
    InventoryLevelUpdatedEvent,
    InventoryReceiptCreatedEvent,
    InventoryReservationActionRequiredEvent,
    InventoryReservationAtRiskEvent,
    InventoryReservationClosedEvent
} from './types-28.js';
import type {
    InventoryReservationCommittedEvent,
    InventoryReservationConsumedEvent,
    InventoryReservationCreatedEvent,
    InventoryReservationHoldExpiredEvent,
    InventoryReservationReleasedEvent,
    InventoryTransferClosedEvent,
    InventoryTransferDepartedEvent
} from './types-29.js';
import type {
    InvoiceDeliveryAttemptSuppressedEvent,
    InvoiceIssueFailedEvent,
    InvoiceIssuedEvent,
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
    InvoicePaymentAttemptFailedEvent
} from './types-31.js';
import type {
    InvoicePaymentAttemptProcessingEvent,
    InvoicePaymentAttemptSettledEvent,
    InvoiceRefundedEvent,
    InvoiceReminderDueEvent,
    InvoiceReopenedEvent
} from './types-32.js';
import type { InvoiceSentEvent, InvoiceUpdatedEvent, InvoiceVoidedEvent } from './types-33.js';
import type {
    MerchantBillingBalanceUpdatedEvent,
    MerchantBillingInvoiceIssuedEvent,
    MerchantBillingInvoiceUpdatedEvent,
    MerchantReadinessUpdatedEvent,
    MerchantUpdatedEvent,
    MetadataMap
} from './types-36.js';
import type {
    ModifierGroupArchivedEvent,
    ModifierGroupCreatedEvent,
    ModifierGroupUpdatedEvent,
    ModifierSetArchivedEvent,
    ModifierSetCreatedEvent,
    ModifierSetUpdatedEvent,
    MoneyValue,
    MoneyValueInput
} from './types-37.js';
import type { OrderClosedEvent, OrderCreatedEvent } from './types-38.js';
import type {
    OrderEditCreatedEvent,
    OrderInventoryExceptionCreatedEvent,
    OrderInventoryExceptionResolvedEvent,
    OrderPaidEvent,
    OrderPartiallyPaidEvent,
    OrderPartiallyRefundedEvent
} from './types-39.js';
import type { OrderRefundedEvent, OrderUpdatedEvent } from './types-40.js';
import type { PackageCreatedEvent, PackageUpdatedEvent } from './types-41.js';
import type {
    PartnerAppInstallCreatedEvent,
    PartnerAppInstallPermissionsUpdatedEvent,
    PartnerAppInstallRevokedEvent,
    PartnerAppInstallUpdatedEvent,
    PartnerAppPlatformApprovedEvent,
    PartnerAppPlatformLimitedEvent,
    PartnerAppPlatformRejectedEvent,
    PartnerAppUpdatedEvent
} from './types-42.js';
import type {
    PaymentIntentAuthorizationExpiringEvent,
    PaymentIntentCanceledEvent,
    PaymentIntentCreatedEvent,
    PaymentIntentExpiredEvent,
    PaymentIntentFulfillmentHoldUpdatedEvent,
    PaymentIntentPaymentFailedEvent,
    PaymentIntentProcessingEvent,
    PaymentIntentRequiresActionEvent,
    PaymentIntentRequiresCaptureEvent,
    PaymentIntentSucceededEvent,
    PaymentIntentUpdatedEvent
} from './types-43.js';
import type { PaymentLinkCreatedEvent, PaymentLinkUpdatedEvent } from './types-44.js';
import type {
    PaymentMethodActivatedEvent,
    PaymentMethodArchivedEvent,
    PaymentMethodFailedEvent,
    PaymentMethodUpdatedEvent,
    PaymentReviewClosedEvent,
    PaymentReviewOpenedEvent,
    PaymentReviewReopenedEvent
} from './types-45.js';
import type {
    PayoutCanceledEvent,
    PayoutCreatedEvent,
    PayoutDestinationArchivedEvent,
    PayoutDestinationCreatedEvent,
    PayoutDestinationDisabledEvent,
    PayoutDestinationUpdatedEvent,
    PayoutFailedEvent,
    PayoutReversedEvent,
    PayoutSettingsUpdatedEvent,
    PayoutSucceededEvent,
    PayoutUpdatedEvent
} from './types-46.js';
import type {
    PriceListArchivedEvent,
    PriceListCreatedEvent,
    PriceListUpdatedEvent,
    ProductArchivedEvent,
    ProductCreatedEvent,
    ProductUpdatedEvent,
    ProductVariantArchivedEvent,
    ProductVariantCreatedEvent
} from './types-47.js';
import type {
    ProductVariantUpdatedEvent,
    PromotionArchivedEvent,
    PromotionCodeArchivedEvent,
    PromotionCodeCreatedEvent,
    PromotionCodeUpdatedEvent,
    PromotionCreatedEvent
} from './types-48.js';
import type { PromotionUpdatedEvent } from './types-49.js';
import type {
    ReturnCanceledEvent,
    ReturnCompletedEvent,
    ReturnCreatedEvent,
    ReturnDecisionRecordedEvent,
    ReturnDispositionCreatedEvent,
    ReturnDispositionUpdatedEvent,
    ReturnInspectionAcceptanceDecidedEvent,
    ReturnInspectionCreatedEvent,
    ReturnInspectionSupersededEvent,
    ReturnDisposition,
    ReturnInspection,
    ReturnLineItem
} from './types-52.js';
import type {
    ReturnReceiptCreatedEvent,
    ReturnReceiptSupersededEvent,
    ReturnReceiptVerifiedEvent,
    ReturnPolicy,
    ReturnPolicyRevision,
    ReturnReason,
    ReturnReceipt
} from './types-53.js';
import type {
    ReturnReopenedEvent,
    ReturnResolutionCreatedEvent,
    ReturnResolutionUpdatedEvent,
    ReturnUpdatedEvent,
    ReturnResolution,
    ReturnResource
} from './types-54.js';
import type { ShipmentCreatedEvent, ShipmentUpdatedEvent } from './types-56.js';
import type {
    SubscriptionActivatedEvent,
    SubscriptionCanceledEvent,
    SubscriptionCancellationScheduledEvent,
    SubscriptionCreatedEvent,
    SubscriptionCycleSkippedEvent
} from './types-57.js';
import type {
    SubscriptionDeliveryActionRequiredEvent,
    SubscriptionDeliveryMigrationCompletedEvent,
    SubscriptionDeliveryPauseUpcomingEvent,
    SubscriptionDeliveryUpdatedEvent,
    SubscriptionDunningExhaustedEvent,
    SubscriptionEndUpcomingEvent
} from './types-58.js';
import type {
    SubscriptionPastDueEvent,
    SubscriptionPausedEvent,
    SubscriptionPaymentRetryCreatedEvent,
    SubscriptionPaymentRetryFailedEvent,
    SubscriptionPaymentRetrySucceededEvent,
    SubscriptionPaymentSucceededEvent,
    SubscriptionPlanChangeCanceledEvent,
    SubscriptionPlanChangeScheduledEvent,
    SubscriptionPlanChangedEvent
} from './types-59.js';
import type {
    SubscriptionReactivatedEvent,
    SubscriptionRenewalUpcomingEvent,
    SubscriptionResumedEvent,
    SubscriptionTrialEndingEvent,
    SubscriptionUpdatedEvent
} from './types-60.js';
import type {
    TaxCalculationCallbackActivatedEvent,
    TaxCalculationCallbackArchivedEvent,
    TaxCalculationCallbackCreatedEvent,
    TaxCalculationCallbackDeactivatedEvent,
    TaxCalculationCallbackUpdatedEvent,
    TaxConnectionUpdatedEvent
} from './types-61.js';
import type {
    TestClockAdvancingEvent,
    TestClockArchivedEvent,
    TestClockCreatedEvent,
    TestClockFailedEvent,
    TestClockReadyEvent,
    TicketCheckedInEvent,
    TicketCreatedEvent,
    TicketUpdatedEvent,
    TicketVoidedEvent
} from './types-62.js';
import type { Address, AcceptFulfillmentRequestInput } from './types-0.js';
import type { InputValue } from '../runtime.js';
import type { CreateLocationRequestInput } from './types-10.js';
import type { UpdateLocationRequestInput } from './types-63.js';
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
/** The request body for: Issue sandbox test key. */
export type IssueSandboxAPIKeyRequest = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "full", "read_only", "restricted".
     */
    "access": "full" | "read_only" | "restricted" | (string & {});
    /** minLength: 1. maxLength: 100. */
    "name": string;
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
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
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
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
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
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
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
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "full".
     */
    "access": "full" | (string & {});
    /** minLength: 1. maxLength: 100. */
    "name": string;
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
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
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
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
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
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
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
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "full".
     */
    "access": "full";
    /** minLength: 1. maxLength: 100. */
    "name": string;
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
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
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
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
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
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
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
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "full", "read_only", "restricted".
     */
    "access": "full" | "read_only" | "restricted";
    /** minLength: 1. maxLength: 100. */
    "name": string;
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
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
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
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
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
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
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
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "read_only".
     */
    "access": "read_only" | (string & {});
    /** minLength: 1. maxLength: 100. */
    "name": string;
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
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
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
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
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
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
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
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "read_only".
     */
    "access": "read_only";
    /** minLength: 1. maxLength: 100. */
    "name": string;
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
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
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
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
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
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
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
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "restricted".
     */
    "access": "restricted" | (string & {});
    /** minLength: 1. maxLength: 100. */
    "name": string;
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
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
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
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
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
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
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
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "restricted".
     */
    "access": "restricted";
    /** minLength: 1. maxLength: 100. */
    "name": string;
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
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
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
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
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
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
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
/**
 * Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin
 * of the fulfillment method.
 */
export type LineItemFulfillmentOriginRequest = {
    /**
     * ID of the location the item ships from. Required for `fixed_location`; not accepted for
     * other policies. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * How Flint picks the location the item ships from. Value enum: "fixed_location",
     * "inventory_routing", "method_origin".
     */
    "origin_policy_type": "fixed_location" | "inventory_routing" | "method_origin" | (string & {});
};
/**
 * Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin
 * of the fulfillment method.
 */
export type LineItemFulfillmentOriginRequestModelInput = {
    /**
     * ID of the location the item ships from. Required for `fixed_location`; not accepted for
     * other policies. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * How Flint picks the location the item ships from. Value enum: "fixed_location",
     * "inventory_routing", "method_origin".
     */
    "origin_policy_type": "fixed_location" | "inventory_routing" | "method_origin";
};
/**
 * Fulfillment requirements you supply for an order line item, such as allowed fulfillment types,
 * package size and weight, and origin.
 */
export type LineItemFulfillmentRequest = {
    /**
     * Fulfillment types allowed for this item. Send a non-empty unique list when `requirement` is
     * `required`. `quote` accepts shipment, pickup, and local_delivery. `manual` accepts digital
     * and service. [] (Value): string. minLength: 1.
     */
    "allowed_types"?: Array<string>;
    /**
     * Controls which delivery obligations can share a choice group. Required for `quote`
     * resolution; not accepted when `requirement` is `none` or `resolution_mode` is `manual`.
     * Value enum: "combine_when_compatible", "separate_profile", "separate_line_item",
     * "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible"
        | "separate_profile"
        | "separate_line_item"
        | "fulfill_alone"
        | (string & {});
    /**
     * Where the item ships from. Required for `quote` resolution; not accepted for `none` or
     * `manual` resolution. Where a line item ships or is fulfilled from: a fixed location,
     * inventory routing, or the origin of the fulfillment method.
     */
    "origin_policy"?: LineItemFulfillmentOriginRequest;
    /**
     * Whether this item needs fulfillment. `none` forbids every other fulfillment field. Value
     * enum: "none", "required".
     */
    "requirement": "none" | "required" | (string & {});
    /**
     * How Flint resolves fulfillment. Required when `requirement` is `required`. Value enum:
     * "quote", "manual".
     */
    "resolution_mode"?: "quote" | "manual" | (string & {});
    /**
     * Controls whether a line item's quantity can be split across delivery assignments. Required
     * for `quote` resolution; not accepted when `requirement` is `none` or `resolution_mode` is
     * `manual`. Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed" | (string & {});
};
/**
 * Fulfillment requirements you supply for an order line item, such as allowed fulfillment types,
 * package size and weight, and origin.
 */
export type LineItemFulfillmentRequestModelInput = {
    /**
     * Fulfillment types allowed for this item. Send a non-empty unique list when `requirement` is
     * `required`. `quote` accepts shipment, pickup, and local_delivery. `manual` accepts digital
     * and service. [] (Value): string. minLength: 1.
     */
    "allowed_types"?: Array<string>;
    /**
     * Controls which delivery obligations can share a choice group. Required for `quote`
     * resolution; not accepted when `requirement` is `none` or `resolution_mode` is `manual`.
     * Value enum: "combine_when_compatible", "separate_profile", "separate_line_item",
     * "fulfill_alone".
     */
    "combination_policy"?: "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone";
    /**
     * Where the item ships from. Required for `quote` resolution; not accepted for `none` or
     * `manual` resolution. Where a line item ships or is fulfilled from: a fixed location,
     * inventory routing, or the origin of the fulfillment method.
     */
    "origin_policy"?: LineItemFulfillmentOriginRequestModelInput;
    /**
     * Whether this item needs fulfillment. `none` forbids every other fulfillment field. Value
     * enum: "none", "required".
     */
    "requirement": "none" | "required";
    /**
     * How Flint resolves fulfillment. Required when `requirement` is `required`. Value enum:
     * "quote", "manual".
     */
    "resolution_mode"?: "quote" | "manual";
    /**
     * Controls whether a line item's quantity can be split across delivery assignments. Required
     * for `quote` resolution; not accepted when `requirement` is `none` or `resolution_mode` is
     * `manual`. Value enum: "whole_line_item", "quantity_split_allowed".
     */
    "splitting_policy"?: "whole_line_item" | "quantity_split_allowed";
};
/** The quantity of one inventory item that each unit of an order line item uses. */
export type LineItemInventoryDemand = {
    /** Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1". */
    "bundle_component_id"?: string;
    /** Example: "component-1842". */
    "component_snapshot_id"?: string;
    /**
     * ID of the inventory item each unit of the line item uses. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
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
     * The inventory items and quantities each unit of the line item uses. [] (Value): {@link
     * LineItemInventoryDemand}. The quantity of one inventory item that each unit of an order line
     * item uses.
     */
    "demands": Array<LineItemInventoryDemand>;
    /** Whether the line item draws on tracked stock. Value enum: "not_tracked", "tracked". */
    "inventory_tracking": "not_tracked" | "tracked" | (string & {});
};
/** The request body for: Link guest purchases to a customer. */
export type LinkCustomerGuestPurchasesRequest = {
    /**
     * ID of a confirmed customer verification with purpose `link_guest_purchases`. Linking uses it
     * up. minLength: 1. Example: "cver_01KEZF7C00E7S01991S7457CVK".
     */
    "customer_verification_id": string;
};
/** The request body for: Link guest purchases to a customer. */
export type LinkCustomerGuestPurchasesRequestInput = LinkCustomerGuestPurchasesRequest;
/** A page of `ReturnActivity` objects. */
export type ListReturnActivitiesResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnActivity}. One entry in a return's activity history.
     */
    "data": Array<ReturnActivity>;
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
/** A page of `ReturnDisposition` objects. */
export type ListReturnDispositionsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     */
    "data": Array<ReturnDisposition>;
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
/** A page of `ReturnInspection` objects. */
export type ListReturnInspectionsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items.
     */
    "data": Array<ReturnInspection>;
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
/** A page of `ReturnLineItem` objects. */
export type ListReturnLineItemsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnLineItem}. An item included in a return request.
     */
    "data": Array<ReturnLineItem>;
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
/** A page of `ReturnPolicy` objects. */
export type ListReturnPoliciesResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnPolicy}. Rules governing whether and how purchased items can be returned.
     */
    "data": Array<ReturnPolicy>;
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
/** A page of `ReturnPolicyRevision` objects. */
export type ListReturnPolicyRevisionsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnPolicyRevision}. A saved revision of a return policy.
     */
    "data": Array<ReturnPolicyRevision>;
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
/** A page of `ReturnReason` objects. */
export type ListReturnReasonsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnReason}. A reason customers can select when requesting a return.
     */
    "data": Array<ReturnReason>;
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
/** A page of `ReturnReceipt` objects. */
export type ListReturnReceiptsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnReceipt}. A record of returned items arriving at a location.
     */
    "data": Array<ReturnReceipt>;
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
/** A page of `ReturnResolution` objects. */
export type ListReturnResolutionsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return.
     */
    "data": Array<ReturnResolution>;
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
/** A page of `Return` objects. */
export type ListReturnsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * ReturnResource}. A request to send purchased items back.
     */
    "data": Array<ReturnResource>;
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
 * A physical or logical place a merchant operates from. Every Location can hold stock.
 * inventory_allocation_enabled controls whether it accepts inventory allocation.
 */
export type Location = {
    /**
     * Published postal address. `null` when the Location has no address on record. anyOf[1]
     * (Value): {@link Address}. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country. anyOf[2] (Value): null.
     */
    "address": ((Address) | (null));
    /**
     * Latitude and longitude of the Location. Omitted when none was sent. A latitude and longitude
     * for a merchant location.
     */
    "coordinate"?: LocationCoordinate;
    /**
     * Where `coordinate` came from. Omitted when the Location has no coordinate. Value enum:
     * "merchant_supplied", "geocoded".
     */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | (string & {});
    /** Time the Location was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
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
    /** Stable Location ID. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id": string;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /** Merchant-facing Location name. minLength: 1. maxLength: 255. */
    "name": string;
    /** Current Location lifecycle status. Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** IANA timezone for local schedules. */
    "timezone": string;
    /** Time the Location last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
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
/** A latitude and longitude for a merchant location. */
export type LocationCoordinateRequestInput = LocationCoordinate;
/** A page of `Location` objects. */
export type LocationListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Location}. A physical or logical place a merchant operates from. Every Location can hold
     * stock. inventory_allocation_enabled controls whether it accepts inventory allocation.
     */
    "data": Array<Location>;
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
/** A response containing `Location` data. */
export type LocationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A physical or logical
     * place a merchant operates from. Every Location can hold stock. inventory_allocation_enabled
     * controls whether it accepts inventory allocation.
     */
    "data": Location;
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
export type LocationsCreateParams = (InputValue<CreateLocationRequestInput>)
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
export type LocationsDeleteParams = InventoryAllocationPoliciesDeleteParams;
export type LocationsGetParams = DisputesAcceptParams;
export type LocationsListParams = {
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
    /**
     * Filter by whether the Location accepts inventory allocation. false includes Locations
     * without an inventory allocation configuration.
     */
    "inventory_allocation_enabled"?: InputValue<boolean>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /** Search Location ID, external reference ID, or name. maxLength: 255. */
    "query"?: InputValue<string>;
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
export type LocationsUpdateParams = (InputValue<UpdateLocationRequestInput>)
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
/** The request body for: Look up email preferences. */
export type LookupEmailPreferencesRequest = {
    /**
     * Email address to look up. Matched after trimming surrounding whitespace and ignoring case,
     * the way Flint matches unsubscribes. minLength: 1. maxLength: 320.
     */
    "email": string;
};
/** The request body for: Look up email preferences. */
export type LookupEmailPreferencesRequestInput = LookupEmailPreferencesRequest;
/** The request body for: Look up a gift card code. */
export type LookupGiftCardRequest = {
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code": string;
};
/** The request body for: Look up a gift card code. */
export type LookupGiftCardRequestInput = LookupGiftCardRequest;
/** Look up a ticket using its bearer admission credential. */
export type LookupTicketRequest = {
    /**
     * The 16-character Crockford base32 admission code. Spaces, hyphens and ASCII lowercase are
     * normalized. minLength: 16.
     */
    "admission_code": string;
};
/** Look up a ticket using its bearer admission credential. */
export type LookupTicketRequestInput = LookupTicketRequest;
/**
 * A discount you apply by hand to an order, with a name, an amount, and the order, line items, or
 * charges it applies to.
 */
export type ManualDiscountRequest = {
    /**
     * Fixed discount to apply to the order. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Which part of the order the discount reduces. Value enum: "order", "line_item",
     * "service_charge".
     */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /** Name of the discount. minLength: 1. */
    "name": string;
    /**
     * IDs of the charges this discount reduces. [] (Value): string. minLength: 1. Example:
     * "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_ids"?: Array<string>;
    /**
     * IDs of the order line items this discount applies to. [] (Value): string. minLength: 1.
     * Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_ids"?: Array<string>;
    /**
     * Whether the discount applies to the whole order or to specific line items. Send
     * `discount_class` instead of `scope`; a conflicting pair is refused. Value enum: "order",
     * "line_item".
     */
    "scope"?: "order" | "line_item" | (string & {});
};
/**
 * A discount you apply by hand to an order, with a name, an amount, and the order, line items, or
 * charges it applies to.
 */
export type ManualDiscountRequestInput = {
    /**
     * Fixed discount to apply to the order. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Which part of the order the discount reduces. Value enum: "order", "line_item",
     * "service_charge".
     */
    "discount_class"?: "order" | "line_item" | "service_charge";
    /** Name of the discount. minLength: 1. */
    "name": string;
    /**
     * IDs of the charges this discount reduces. [] (Value): string. minLength: 1. Example:
     * "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_ids"?: Array<string>;
    /**
     * IDs of the order line items this discount applies to. [] (Value): string. minLength: 1.
     * Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_ids"?: Array<string>;
    /**
     * Whether the discount applies to the whole order or to specific line items. Send
     * `discount_class` instead of `scope`; a conflicting pair is refused. Value enum: "order",
     * "line_item".
     */
    "scope"?: "order" | "line_item";
};
/** Records a missed service appointment with a required no-show reason. */
export type MarkFulfillmentNoShowRequest = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /**
     * Why fulfillment work is paused or the service appointment was missed. Value enum:
     * "customer_no_show", "provider_no_show", "location_unavailable", "scheduling_error", "other".
     */
    "reason": "customer_no_show"
        | "provider_no_show"
        | "location_unavailable"
        | "scheduling_error"
        | "other"
        | (string & {});
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** Records a missed service appointment with a required no-show reason. */
export type MarkFulfillmentNoShowRequestInput = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Why fulfillment work is paused or the service appointment was missed. Value enum:
     * "customer_no_show", "provider_no_show", "location_unavailable", "scheduling_error", "other".
     */
    "reason": "customer_no_show" | "provider_no_show" | "location_unavailable" | "scheduling_error" | "other";
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** Records that the items for a shipment fulfillment have been packed. */
export type MarkFulfillmentPackedRequestInput = AcceptFulfillmentRequestInput;
/** Records that the items for a shipment fulfillment have been picked. */
export type MarkFulfillmentPickedRequestInput = AcceptFulfillmentRequestInput;
/** Records that preparation of a pickup or delivery fulfillment has begun. */
export type MarkFulfillmentPreparingRequestInput = AcceptFulfillmentRequestInput;
/** Records that a pickup is ready for collection or a delivery is ready for dispatch. */
export type MarkFulfillmentReadyRequestInput = AcceptFulfillmentRequestInput;
/** Records the package action mark_delivered. */
export type MarkPackageDeliveredRequestInput = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the carrier scan or package action occurred, as an RFC 3339 timestamp. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** Records the package action mark_delivery_attempted. */
export type MarkPackageDeliveryAttemptedRequestInput = MarkPackageDeliveredRequestInput;
/** Records the package action mark_exception. */
export type MarkPackageExceptionRequestInput = MarkPackageDeliveredRequestInput;
/** Records the package action mark_in_transit. */
export type MarkPackageInTransitRequest = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the carrier scan or package action occurred, as an RFC 3339 timestamp. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
