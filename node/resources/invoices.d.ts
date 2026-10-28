import type { Result, InputValue } from '../runtime.js';
import type { AssessInvoiceLateFeeRequestInput } from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CollectInvoiceRequestInput, CollectInvoiceResponse, CollectInvoiceResult } from '../declarations/types-5.js';
import type { CreateInvoiceManualPaymentRequestInput, CreateInvoiceRequestInput } from '../declarations/types-7.js';
import type {
    Invoice,
    InvoiceActivity,
    InvoiceActivityListResponse,
    InvoiceCheckoutSessionRequestInput,
    InvoiceCheckoutSessionResponse,
    InvoiceCheckoutSessionResult,
    InvoiceDeliveryAttempt,
    InvoiceDeliveryAttemptListResponse,
    InvoiceListResponse,
    InvoiceManualPayment,
    InvoiceManualPaymentListResponse,
    InvoiceManualPaymentResponse,
    InvoiceManualPaymentResult,
    InvoiceManualPaymentResultResponse,
    InvoicePaymentAttempt,
    InvoicePaymentAttemptListResponse,
    InvoicePaymentAttemptResponse
} from '../declarations/types-28.js';
import type { InvoiceResponse } from '../declarations/types-29.js';
import type {
    InvoicesAssessLateFeeInput,
    InvoicesCancelPaymentAttemptInput,
    InvoicesCollectInput,
    InvoicesCreateCheckoutSessionInput,
    InvoicesCreateInput,
    InvoicesGetInput,
    InvoicesGetManualPaymentInput,
    InvoicesGetPDFInput,
    InvoicesGetPDFResponse,
    InvoicesGetPaymentAttemptInput,
    InvoicesIssueInput,
    InvoicesListActivitiesInput,
    InvoicesListDeliveryAttemptsInput,
    InvoicesListInput,
    InvoicesListManualPaymentsInput,
    InvoicesListPaymentAttemptsInput,
    InvoicesMarkUncollectibleInput,
    InvoicesRecordManualPaymentInput,
    InvoicesRegeneratePublicLinkInput,
    InvoicesReverseManualPaymentInput,
    InvoicesSendReminderInput,
    InvoicesUpdateInput,
    InvoicesVoidResourceInput,
    InvoicesWaiveLateFeeInput,
    IssueInvoiceRequestInput
} from '../declarations/types-30.js';
import type { RequestOptions, ResourceVersionRequestInput } from '../declarations/types-42.js';
import type { ReverseInvoiceManualPaymentRequestInput } from '../declarations/types-45.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { UpdateInvoiceRequestInput } from '../declarations/types-51.js';
import type { WaiveInvoiceLateFeeRequestInput } from '../declarations/types-53.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-65.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type { RequestOptions, ResourceVersionRequestInput, ResponseMeta, ResourceReference, ResourceType } from '../declarations/types-42.js';
export type {
    InvoicePaymentAttempt,
    InvoicePaymentAttemptResponse,
    Invoice,
    InvoiceCheckoutSessionRequestInput,
    InvoiceCheckoutSessionResult,
    InvoiceCheckoutSessionResponse,
    InvoiceManualPaymentResult,
    InvoiceManualPaymentResultResponse,
    InvoiceManualPayment,
    InvoiceManualPaymentResponse,
    InvoiceActivityListResponse,
    InvoiceActivity,
    InvoiceDeliveryAttemptListResponse,
    InvoiceDeliveryAttempt,
    InvoiceManualPaymentListResponse,
    InvoicePaymentAttemptListResponse,
    InvoiceListResponse,
    InvoiceCollectionRequestInput,
    InvoiceCollectionInputMerchantDefaultInput,
    InvoiceCollectionInputBuyerInitiatedInput,
    InvoiceCollectionInputAutomaticInput,
    InvoiceCollectionInputExternalInput,
    InvoicePaymentDueInputNoneInput,
    InvoicePaymentDueInputDateInput,
    InvoicePaymentDueInputPaymentTermsInput,
    InvoicePaymentDueInputCustomerDefaultInput,
    InvoicePaymentDueInputMerchantDefaultInput,
    InvoiceCollection,
    InvoiceCollectionBuyerInitiated,
    InvoiceCollectionAutomatic,
    InvoiceCollectionExternal,
    InvoiceLateFee,
    InvoiceLateFeePolicy,
    InvoiceLateFeePolicyFixed,
    InvoiceLateFeePolicyPercentage,
    InvoicePaymentDue,
    InvoicePaymentDueNone,
    InvoicePaymentDueDate,
    InvoicePaymentDuePaymentTerms,
    InvoiceDiscount,
    InvoiceLineItem
} from '../declarations/types-28.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type {
    CollectInvoiceRequestInput,
    CollectInvoiceResult,
    CollectInvoiceResponse,
    CollectInvoiceRequest,
    ConfirmReturnResolutionRequestInput
} from '../declarations/types-5.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency, WeightInput } from '../declarations/types-65.js';
export type {
    CreateInvoiceRequestInput,
    CreateInvoiceManualPaymentRequestInput,
    CreateInvoiceIssueRequestInput,
    CreateInvoiceQuickPayRequestInput
} from '../declarations/types-7.js';
export type {
    InvoiceResponse,
    InvoicePaymentPolicyInput,
    InvoicePaymentOptionLimitInput,
    InvoicePaymentDueRequestInput,
    InvoiceScheduleEntryWriteInput,
    InvoiceScheduleAmountSpecificationInput,
    InvoiceScheduleAmountSpecificationFixedInput,
    InvoiceScheduleAmountSpecificationPercentageInput,
    InvoiceScheduleAmountSpecificationRemainingBalanceInput,
    InvoiceScheduleDueWriteInput,
    InvoiceScheduleDueWriteAtIssueInput,
    InvoiceScheduleDueWriteDateInput,
    InvoiceScheduleDueWriteInvoiceDueDateInput,
    InvoiceScheduleEntryWriteDepositInput,
    InvoiceScheduleEntryWriteInstallmentInput,
    InvoiceScheduleEntryWriteBalanceInput,
    InvoicePaymentPolicy,
    InvoicePaymentOptionLimit,
    InvoicePaymentTermsSnapshot,
    InvoicePaymentTermCalculation,
    InvoicePaymentTermCalculationOnReceipt,
    InvoicePaymentTermCalculationNetDays,
    InvoicePaymentTermCalculationDaysAfterMonthEnd,
    InvoicePaymentTermCalculationDayOfMonth,
    InvoicePaymentTermCalculationDayOfNextMonth,
    InvoiceScheduleEntry,
    InvoiceScheduleAmountSpecification,
    InvoiceScheduleAmountSpecificationFixed,
    InvoiceScheduleAmountSpecificationPercentage,
    InvoiceScheduleAmountSpecificationRemainingBalance,
    InvoiceScheduleDue,
    InvoiceScheduleDueAtIssue,
    InvoiceScheduleDueDate,
    InvoiceScheduleDueInvoiceDueDate
} from '../declarations/types-29.js';
export type {
    AssessInvoiceLateFeeRequestInput,
    AuthMode,
    AddressRequestInput,
    Address,
    AssessInvoiceLateFeeRequest,
    AddressRequest
} from '../declarations/types-0.js';
export type {
    InvoicesGetPDFResponse,
    IssueInvoiceRequestInput,
    InvoicesCancelPaymentAttemptInput,
    InvoicesCollectInput,
    InvoicesCreateInput,
    InvoicesCreateCheckoutSessionInput,
    InvoicesAssessLateFeeInput,
    InvoicesRecordManualPaymentInput,
    InvoicesGetInput,
    InvoicesGetManualPaymentInput,
    InvoicesGetPaymentAttemptInput,
    InvoicesGetPDFInput,
    InvoicesIssueInput,
    InvoicesListActivitiesInput,
    InvoicesListDeliveryAttemptsInput,
    InvoicesListManualPaymentsInput,
    InvoicesListPaymentAttemptsInput,
    InvoicesListInput,
    InvoicesMarkUncollectibleInput,
    InvoicesRegeneratePublicLinkInput,
    InvoicesReverseManualPaymentInput,
    InvoicesSendReminderInput,
    InvoicesUpdateInput,
    InvoicesVoidResourceInput,
    InvoicesWaiveLateFeeInput,
    LineItemFulfillmentRequestInput,
    LineItemFulfillmentOriginRequestInput,
    InvoiceSnapshot,
    InvoiceTip,
    LegalSettings
} from '../declarations/types-30.js';
export type { ReverseInvoiceManualPaymentRequestInput } from '../declarations/types-45.js';
export type { UpdateInvoiceRequestInput } from '../declarations/types-51.js';
export type { WaiveInvoiceLateFeeRequestInput, WaiveInvoiceLateFeeRequest } from '../declarations/types-53.js';
export type {
    ClientOptions,
    CheckoutBuyerContact,
    CheckoutRedirectsRequestInput,
    CheckoutSession,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutCustomerPrefill,
    CheckoutDerivedDeliveryResource,
    CheckoutDeliveryPinnedDependency,
    CheckoutGiftCardChallenge,
    CheckoutMerchantSupport,
    CheckoutPaymentMethodSave,
    CheckoutPaymentConfig,
    CheckoutPrefill,
    CheckoutProblemResource,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CheckoutSubscriptionTerms,
    CheckoutSubscriptionRecurringShipping,
    CheckoutSessionTax,
    CheckoutTheme,
    CheckoutTipConfig
} from '../declarations/types-4.js';
export type { Credentials } from '../declarations/types-11.js';
export type {
    MoneyValue,
    NextAction,
    NextActionMerchantAccountSession,
    MoneyValueInput,
    OrderCharge,
    OrderCalculatedChargeTax
} from '../declarations/types-33.js';
export type {
    PaymentErrorSummary,
    PaymentAttemptGiftCardRedemption,
    PaymentAttemptPaymentIntent,
    PaymentClientAction,
    PaymentCollection,
    PaymentCollectionStripe,
    PaymentCollectionStripeElements
} from '../declarations/types-37.js';
export type {
    ErrorRemediation,
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    DocumentTaxID,
    ExpandedInvoiceSummary,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentLinkSummary
} from '../declarations/types-18.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-32.js';
export type {
    OrderDeliveryDestinationRequestInput,
    OrderDeliveryDestinationRecipientRequestInput,
    OrderInventoryRoutingSourceRequestInput,
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderLineItemModifierRequestInput,
    OrderLineItemModifierInputCatalogInput,
    OrderLineItemModifierInputTextInput,
    OrderDraftLineItemTaxRequestInput,
    OrderDraftLineItemTaxCalculationRequestInput,
    OrderDraftTaxComponentRequestInput,
    OrderDraftTaxJurisdictionRequestInput,
    OrderLineItemModifier,
    OrderPaymentAttempt,
    OrderPaymentAttemptPaymentMethodSave,
    OrderDeliveryDestinationRecipientRequest
} from '../declarations/types-34.js';
export type {
    CreateOrderDiscountInput,
    CreateOrderDiscountPromotionInput,
    CreateOrderDiscountManualInput,
    CreateOrderLineItemRequestInput,
    CreateOrderLineItemInputVariantInput,
    CreateOrderLineItemInputBundleInput,
    CreateOrderLineItemInputCustomInput,
    CreateOrderTipInput,
    CreateOrderTipAmountInput,
    CreateOrderTipPercentInput,
    CreateInvoiceRequestOrderInput,
    CreateInvoiceRequestQuickPayInput
} from '../declarations/types-8.js';
export type { ManualDiscountRequestInput } from '../declarations/types-31.js';
export type { PromotionRefRequestInput, PromotionRefInputPromotionIDInput, PromotionRefInputPromotionCodeInput } from '../declarations/types-40.js';
export type { GiftCardPurchaseDetailsRequestInput } from '../declarations/types-20.js';
export type { GiftCardPurchaseRecipientRequestInput, ImageReferenceRequestInput, Image, ImageReferenceRequest } from '../declarations/types-21.js';
export type { TextModifierRequestInput, TaxIdentity, TextModifierRequest, TaxJurisdiction } from '../declarations/types-50.js';
export type {
    SubscribedLineRequestInput,
    SettlementAmounts,
    SelectedProductOption,
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    SelectableOrderPaymentIntent
} from '../declarations/types-47.js';
export type { DimensionsInput } from '../declarations/types-17.js';
export type {
    OrderTaxRequestInput,
    OrderTaxCalculationRequestInput,
    OrderTaxComponentRequestInput,
    OrderTaxJurisdictionRequestInput,
    OrderTaxCalculationInputAutomaticInput,
    OrderTaxCalculationInputExternalInput,
    OrderTaxLocationRequestInput,
    OrderTaxLocationInputPostalCodeInput,
    OrderTaxLocationPostalAddressRequestInput,
    OrderTaxLocationInputFullAddressInput,
    OrderTaxLocationFullAddressRequestInput
} from '../declarations/types-35.js';
export type {
    PricingAmounts,
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject,
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary
} from '../declarations/types-39.js';
export type { BundleComponent, BundleComponentVariantSummary, BuyerInstructionsConfig } from '../declarations/types-1.js';
export type { CategoryReference } from '../declarations/types-3.js';
export type { TaxBreakdown, TaxBreakdownPercentage, TaxBreakdownFlatAmount } from '../declarations/types-49.js';
export type {
    DeliveryQuoteChoiceGroupResource,
    DeliveryQuoteExecutionLegResource,
    DeliveryQuoteLineItemResource
} from '../declarations/types-15.js';
export type {
    DeliveryAddressAdvisoryResource,
    DeliveryCandidateOutcomeResource,
    DeliveryArrivalEstimate,
    DeliveryCandidateOutcomeResourceAvailable
} from '../declarations/types-12.js';
export type {
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryLocationSummaryResource,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext,
    DeliveryMerchantDiagnostic,
    DeliveryEligibilityMismatch
} from '../declarations/types-13.js';
export type { DeliveryWindowRequest, DeliveryShipmentDetails, DeliveryRecipientRequirement } from '../declarations/types-16.js';
export type { DeliveryOptionProjection, DeliveryPlan, DeliveryPickupDetails, DeliveryPreviewRoutingSourceInput } from '../declarations/types-14.js';
export type { SubscriptionIntervalOption } from '../declarations/types-48.js';
export { makeAddressRequest, makeAssessInvoiceLateFeeRequest } from '../declarations/types-65.js';
export { makeCheckoutRedirectsRequest, makeCollectInvoiceRequest, makeConfirmReturnResolutionRequest } from '../declarations/types-66.js';
export {
    makeCreateInvoiceIssueRequest,
    makeCreateInvoiceManualPaymentRequest,
    makeCreateInvoiceQuickPayRequest,
    makeCreateInvoiceRequest,
    makeCreateInvoiceRequestOrder,
    makeCreateInvoiceRequestQuickPay,
    makeCreateOrderDiscount,
    makeCreateOrderDiscountManual,
    makeCreateOrderDiscountPromotion
} from '../declarations/types-67.js';
export {
    makeCreateOrderLineItemInputBundle,
    makeCreateOrderLineItemInputCustom,
    makeCreateOrderLineItemInputVariant,
    makeCreateOrderLineItemRequest,
    makeCreateOrderTip,
    makeCreateOrderTipAmount,
    makeCreateOrderTipPercent
} from '../declarations/types-68.js';
export {
    makeDeliveryPreviewRoutingSource,
    makeDeliveryRecipientRequirement,
    makeDeliveryWindowRequest,
    makeDimensions
} from '../declarations/types-70.js';
export {
    makeGiftCardPurchaseDetailsRequest,
    makeGiftCardPurchaseRecipientRequest,
    makeImageReferenceRequest
} from '../declarations/types-71.js';
export {
    makeInvoiceCheckoutSessionRequest,
    makeInvoiceCollectionInputAutomatic,
    makeInvoiceCollectionInputBuyerInitiated,
    makeInvoiceCollectionInputExternal,
    makeInvoiceCollectionInputMerchantDefault,
    makeInvoiceCollectionRequest,
    makeInvoiceLateFeePolicy,
    makeInvoiceLateFeePolicyFixed,
    makeInvoiceLateFeePolicyPercentage,
    makeInvoicePaymentDueInputCustomerDefault,
    makeInvoicePaymentDueInputDate,
    makeInvoicePaymentDueInputMerchantDefault,
    makeInvoicePaymentDueInputNone,
    makeInvoicePaymentDueInputPaymentTerms,
    makeInvoicePaymentDueRequest,
    makeInvoicePaymentOptionLimit,
    makeInvoicePaymentPolicy,
    makeInvoicePaymentTermCalculation,
    makeInvoicePaymentTermCalculationDayOfMonth,
    makeInvoicePaymentTermCalculationDayOfNextMonth,
    makeInvoicePaymentTermCalculationDaysAfterMonthEnd,
    makeInvoicePaymentTermCalculationNetDays,
    makeInvoicePaymentTermCalculationOnReceipt,
    makeInvoiceScheduleAmountSpecification,
    makeInvoiceScheduleAmountSpecificationFixed,
    makeInvoiceScheduleAmountSpecificationPercentage,
    makeInvoiceScheduleAmountSpecificationRemainingBalance,
    makeInvoiceScheduleDueWrite,
    makeInvoiceScheduleDueWriteAtIssue,
    makeInvoiceScheduleDueWriteDate,
    makeInvoiceScheduleDueWriteInvoiceDueDate,
    makeInvoiceScheduleEntryWrite,
    makeInvoiceScheduleEntryWriteBalance,
    makeInvoiceScheduleEntryWriteDeposit,
    makeInvoiceScheduleEntryWriteInstallment,
    makeIssueInvoiceRequest,
    makeLineItemFulfillmentOriginRequest,
    makeLineItemFulfillmentRequest,
    makeManualDiscountRequest,
    makeMetadataPatchRequest,
    makeMetadataRequest
} from '../declarations/types-72.js';
export {
    makeMoneyValue,
    makeOrderCalculatedChargeTax,
    makeOrderDeliveryDestinationRecipientRequest,
    makeOrderDeliveryDestinationRequest,
    makeOrderDraftLineItemInventoryDemandRequest,
    makeOrderDraftLineItemTaxCalculationRequest,
    makeOrderDraftLineItemTaxRequest,
    makeOrderDraftTaxComponentRequest,
    makeOrderDraftTaxJurisdictionRequest,
    makeOrderInventoryRoutingSourceRequest,
    makeOrderLineItemModifierInputCatalog,
    makeOrderLineItemModifierInputText,
    makeOrderLineItemModifierRequest,
    makeOrderTaxCalculationInputAutomatic,
    makeOrderTaxCalculationInputExternal,
    makeOrderTaxCalculationRequest,
    makeOrderTaxComponentRequest,
    makeOrderTaxJurisdictionRequest,
    makeOrderTaxLocationFullAddressRequest,
    makeOrderTaxLocationInputFullAddress,
    makeOrderTaxLocationInputPostalCode,
    makeOrderTaxLocationPostalAddressRequest,
    makeOrderTaxLocationRequest,
    makeOrderTaxRequest
} from '../declarations/types-73.js';
export { makePromotionRefInputPromotionCode, makePromotionRefInputPromotionID, makePromotionRefRequest } from '../declarations/types-74.js';
export { makeResourceVersionRequest, makeReverseInvoiceManualPaymentRequest } from '../declarations/types-75.js';
export { makeSubscribedLineRequest, makeSubscriptionIntervalOption, makeTaxJurisdiction } from '../declarations/types-76.js';
export { makeTextModifierRequest, makeUpdateInvoiceRequest } from '../declarations/types-77.js';
export { makeWaiveInvoiceLateFeeRequest, makeWeight } from '../declarations/types-78.js';
export interface InvoicesResource {
    /**
 * Cancels an active invoice payment attempt and its payment intent. A processing ACH debit can be
 * canceled only until the payment processor sends it to the bank; after that the request returns
 * 409 ACTION_NOT_ALLOWED with reason in_progress and the attempt stays processing. Safe to retry
 * with the same Idempotency-Key. Accepts an empty body or {}.
 * @see reference/invoices.md#invoicescancelpaymentattempt
 * POST /v1/invoices/{invoice_id}/payment-attempts/{invoice_payment_attempt_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.cancelPaymentAttempt("example", "example", {}, { idempotencyKey: idempotencyKey
 * })
 */
    cancelPaymentAttempt(invoice_id: InputValue<string>, invoice_payment_attempt_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<InvoicePaymentAttempt>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoicescancelpaymentattempt
     */
    cancelPaymentAttemptWithResponse(invoice_id: InputValue<string>, invoice_payment_attempt_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InvoicePaymentAttemptResponse>>;
    /**
 * Charges the invoice's saved payment method or the supplied saved payment method. This command
 * requires a caller-chosen Idempotency-Key that is reused for retries of the same collection
 * request.
 * @see reference/invoices.md#invoicescollect
 * POST /v1/invoices/{invoice_id}/collect
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.collect("example", {}, { idempotencyKey: idempotencyKey })
 */
    collect(invoice_id: InputValue<string>, params: (InputValue<CollectInvoiceRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<CollectInvoiceResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoicescollect
     */
    collectWithResponse(invoice_id: InputValue<string>, params: (InputValue<CollectInvoiceRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<CollectInvoiceResponse>>;
    /**
 * Creates an invoice draft from exactly one source: order_id for an order-backed invoice, or
 * quick_pay for an invoice with a new backing order. Include issue to issue it immediately, using
 * merchant_default delivery when issue is empty. Idempotency-Key is required for every request
 * because issuing an automatic-collection invoice can charge the buyer. Replays preserve the
 * original invoice result and recover its current public_url only within 24 hours of the original
 * request; later replays omit public_url. Use GET /v1/invoices/{invoice_id} for the current
 * invoice. If Flint returns IDEMPOTENCY_RECOVERY_REQUIRED, contact Flint support with the original
 * Idempotency-Key and request ID. Never retry with a new key.
 * @see reference/invoices.md#invoicescreate
 * POST /v1/invoices
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.create({type: "order", order_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateInvoiceRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<Invoice>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoicescreate
     */
    createWithResponse(params: (InputValue<CreateInvoiceRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InvoiceResponse>>;
    /**
 * Returns the current open invoice checkout session and aligned card attempt when they still match
 * the invoice balance and collection run. A newly created session and attempt share the fixed
 * expiration of the active invoice public-link generation. Unexpired sessions are reused
 * regardless of remaining lifetime; active payment work returns a resolving conflict instead of
 * creating competing collection. When the invoice's order has items to deliver, a new session
 * offers the delivery methods in settings.checkout.default_delivery_method_ids, and the request
 * fails with a validation error when those methods cannot deliver every item. return_url sets
 * where the checkout sends the buyer after paying. A reused session takes a new return_url only
 * until a payment starts on it, and keeps the one it has after that.
 * @see reference/invoices.md#invoicescreatecheckoutsession
 * POST /v1/invoices/{invoice_id}/checkout-sessions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.createCheckoutSession("example", undefined, { idempotencyKey: idempotencyKey })
 */
    createCheckoutSession(invoice_id: InputValue<string>, params?: (InputValue<InvoiceCheckoutSessionRequestInput>
        | {
        "invoice_schedule_entry_id"?: never;
        "page_origin"?: never;
        "payment_return_url"?: never;
        "redirects"?: never;
        "return_url"?: never;
        "surface"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<InvoiceCheckoutSessionResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoicescreatecheckoutsession
     */
    createCheckoutSessionWithResponse(invoice_id: InputValue<string>, params?: (InputValue<InvoiceCheckoutSessionRequestInput>
        | {
        "invoice_schedule_entry_id"?: never;
        "page_origin"?: never;
        "payment_return_url"?: never;
        "redirects"?: never;
        "return_url"?: never;
        "surface"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InvoiceCheckoutSessionResponse>>;
    /**
 * Returns the current open invoice checkout session and aligned card attempt when they still match
 * the invoice balance and collection run. A newly created session and attempt share the fixed
 * expiration of the active invoice public-link generation. Unexpired sessions are reused
 * regardless of remaining lifetime; active payment work returns a resolving conflict instead of
 * creating competing collection. When the invoice's order has items to deliver, a new session
 * offers the delivery methods in settings.checkout.default_delivery_method_ids, and the request
 * fails with a validation error when those methods cannot deliver every item. return_url sets
 * where the checkout sends the buyer after paying. A reused session takes a new return_url only
 * until a payment starts on it, and keeps the one it has after that.
 * @see reference/invoices.md#invoicescreatecheckoutsession
 * POST /v1/invoices/{invoice_id}/checkout-sessions
 * @deprecated Use invoices.createCheckoutSession; HTTP behavior is unchanged.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.getOrCreateCheckoutSession("example", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    getOrCreateCheckoutSession(invoice_id: InputValue<string>, params?: (InputValue<InvoiceCheckoutSessionRequestInput>
        | {
        "invoice_schedule_entry_id"?: never;
        "page_origin"?: never;
        "payment_return_url"?: never;
        "redirects"?: never;
        "return_url"?: never;
        "surface"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<InvoiceCheckoutSessionResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoicescreatecheckoutsession
     */
    getOrCreateCheckoutSessionWithResponse(invoice_id: InputValue<string>, params?: (InputValue<InvoiceCheckoutSessionRequestInput>
        | {
        "invoice_schedule_entry_id"?: never;
        "page_origin"?: never;
        "payment_return_url"?: never;
        "redirects"?: never;
        "return_url"?: never;
        "surface"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InvoiceCheckoutSessionResponse>>;
    /**
 * Assesses the frozen late fee policy once per invoice or overdue schedule entry. The issued
 * document remains unchanged.
 * @see reference/invoices.md#invoicesassesslatefee
 * POST /v1/invoices/{invoice_id}/late-fees
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.assessLateFee("example", {}, { idempotencyKey: idempotencyKey })
 */
    assessLateFee(invoice_id: InputValue<string>, params: (InputValue<AssessInvoiceLateFeeRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Invoice>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoicesassesslatefee
     */
    assessLateFeeWithResponse(invoice_id: InputValue<string>, params: (InputValue<AssessInvoiceLateFeeRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InvoiceResponse>>;
    /**
 * Applies an offline/manual payment to an issued invoice. Recording is rejected with
 * OPERATION_IN_PROGRESS while an online payment is still resolving; an idle open checkout does not
 * block. A payment that clears the balance invalidates the open checkout session. Safe to retry
 * with the same Idempotency-Key.
 * @see reference/invoices.md#invoicesrecordmanualpayment
 * POST /v1/invoices/{invoice_id}/manual-payments
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.recordManualPayment("example", {amount_money: {amount: "100", currency: "USD"}},
 * { idempotencyKey: idempotencyKey })
 */
    recordManualPayment(invoice_id: InputValue<string>, params: (InputValue<CreateInvoiceManualPaymentRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<InvoiceManualPaymentResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoicesrecordmanualpayment
     */
    recordManualPaymentWithResponse(invoice_id: InputValue<string>, params: (InputValue<CreateInvoiceManualPaymentRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InvoiceManualPaymentResultResponse>>;
    /**
 * Returns a single invoice by ID.
 * @see reference/invoices.md#invoicesget
 * GET /v1/invoices/{invoice_id}
 * @example
 * client.invoices.get("example")
 */
    get(invoice_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Invoice>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoicesget
     */
    getWithResponse(invoice_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InvoiceResponse>>;
    /**
 * Returns one recorded or reversed manual payment for the invoice.
 * @see reference/invoices.md#invoicesgetmanualpayment
 * GET /v1/invoices/{invoice_id}/manual-payments/{invoice_manual_payment_id}
 * @example
 * client.invoices.getManualPayment("example", "example")
 */
    getManualPayment(invoice_id: InputValue<string>, invoice_manual_payment_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InvoiceManualPayment>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoicesgetmanualpayment
     */
    getManualPaymentWithResponse(invoice_id: InputValue<string>, invoice_manual_payment_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InvoiceManualPaymentResponse>>;
    /**
 * Returns one card or ACH collection attempt for the invoice.
 * @see reference/invoices.md#invoicesgetpaymentattempt
 * GET /v1/invoices/{invoice_id}/payment-attempts/{invoice_payment_attempt_id}
 * @example
 * client.invoices.getPaymentAttempt("example", "example")
 */
    getPaymentAttempt(invoice_id: InputValue<string>, invoice_payment_attempt_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InvoicePaymentAttempt>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoicesgetpaymentattempt
     */
    getPaymentAttemptWithResponse(invoice_id: InputValue<string>, invoice_payment_attempt_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InvoicePaymentAttemptResponse>>;
    /**
 * Downloads the merchant-authenticated PDF artifact generated from the invoice snapshot.
 * @see reference/invoices.md#invoicesgetpdf
 * GET /v1/invoices/{invoice_id}/pdf
 * @example
 * client.invoices.getPDF("example")
 */
    getPDF(invoice_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Result<InvoicesGetPDFResponse>>;
    /**
 * Issues the invoice, creates the buyer-access link, and uses the selected delivery mode. Safe to
 * retry with the same Idempotency-Key.
 * @see reference/invoices.md#invoicesissue
 * POST /v1/invoices/{invoice_id}/issue
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.issue("example", {}, { idempotencyKey: idempotencyKey })
 */
    issue(invoice_id: InputValue<string>, params: (InputValue<IssueInvoiceRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Invoice>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoicesissue
     */
    issueWithResponse(invoice_id: InputValue<string>, params: (InputValue<IssueInvoiceRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InvoiceResponse>>;
    /**
 * Returns a read-only history of an invoice for timelines and debugging, newest first. Use
 * sort_direction=asc for chronological order. Read the invoice and the resources each row
 * references for authoritative state. Default order: created_at descending, then
 * invoice_activity_id descending.
 * @see reference/invoices.md#invoiceslistactivities
 * GET /v1/invoices/{invoice_id}/activities
 * @example
 * client.invoices.listActivities("example")
 */
    listActivities(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
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
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InvoiceActivityListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoiceslistactivities
     */
    listActivitiesWithResponse(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
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
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InvoiceActivityListResponse>>;
    /** Iterate pages lazily.
     * @see reference/invoices.md#invoiceslistactivities
     */
    listActivitiesPages(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
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
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InvoiceActivityListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/invoices.md#invoiceslistactivities
     */
    listActivitiesPagesWithResponse(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
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
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<InvoiceActivityListResponse>>;
    /** Iterate items lazily.
     * @see reference/invoices.md#invoiceslistactivities
     */
    listActivitiesItems(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
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
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InvoiceActivity>;
    /**
 * Returns email delivery attempts for send and reminder actions. Default order: created_at
 * descending, then invoice_delivery_attempt_id ascending.
 * @see reference/invoices.md#invoiceslistdeliveryattempts
 * GET /v1/invoices/{invoice_id}/delivery-attempts
 * @example
 * client.invoices.listDeliveryAttempts("example")
 */
    listDeliveryAttempts(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InvoiceDeliveryAttemptListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoiceslistdeliveryattempts
     */
    listDeliveryAttemptsWithResponse(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InvoiceDeliveryAttemptListResponse>>;
    /** Iterate pages lazily.
     * @see reference/invoices.md#invoiceslistdeliveryattempts
     */
    listDeliveryAttemptsPages(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InvoiceDeliveryAttemptListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/invoices.md#invoiceslistdeliveryattempts
     */
    listDeliveryAttemptsPagesWithResponse(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<InvoiceDeliveryAttemptListResponse>>;
    /** Iterate items lazily.
     * @see reference/invoices.md#invoiceslistdeliveryattempts
     */
    listDeliveryAttemptsItems(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InvoiceDeliveryAttempt>;
    /**
 * Lists every manual payment, including reversed payments, ordered by received_at descending with
 * invoice_manual_payment_id descending as the tiebreaker. Default order: received_at descending,
 * then invoice_manual_payment_id descending.
 * @see reference/invoices.md#invoiceslistmanualpayments
 * GET /v1/invoices/{invoice_id}/manual-payments
 * @example
 * client.invoices.listManualPayments("example")
 */
    listManualPayments(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InvoiceManualPaymentListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoiceslistmanualpayments
     */
    listManualPaymentsWithResponse(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InvoiceManualPaymentListResponse>>;
    /** Iterate pages lazily.
     * @see reference/invoices.md#invoiceslistmanualpayments
     */
    listManualPaymentsPages(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InvoiceManualPaymentListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/invoices.md#invoiceslistmanualpayments
     */
    listManualPaymentsPagesWithResponse(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<InvoiceManualPaymentListResponse>>;
    /** Iterate items lazily.
     * @see reference/invoices.md#invoiceslistmanualpayments
     */
    listManualPaymentsItems(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InvoiceManualPayment>;
    /**
 * Lists card and ACH collection attempts for an invoice in reverse chronological order. Default
 * order: started_at descending, then invoice_payment_attempt_id descending.
 * @see reference/invoices.md#invoiceslistpaymentattempts
 * GET /v1/invoices/{invoice_id}/payment-attempts
 * @example
 * client.invoices.listPaymentAttempts("example")
 */
    listPaymentAttempts(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InvoicePaymentAttemptListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoiceslistpaymentattempts
     */
    listPaymentAttemptsWithResponse(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InvoicePaymentAttemptListResponse>>;
    /** Iterate pages lazily.
     * @see reference/invoices.md#invoiceslistpaymentattempts
     */
    listPaymentAttemptsPages(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InvoicePaymentAttemptListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/invoices.md#invoiceslistpaymentattempts
     */
    listPaymentAttemptsPagesWithResponse(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<InvoicePaymentAttemptListResponse>>;
    /** Iterate items lazily.
     * @see reference/invoices.md#invoiceslistpaymentattempts
     */
    listPaymentAttemptsItems(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InvoicePaymentAttempt>;
    /**
 * Returns a paginated list of invoices for the authenticated merchant. Default order: created_at
 * descending, then invoice_id descending.
 * @see reference/invoices.md#invoiceslist
 * GET /v1/invoices
 * @example
 * client.invoices.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited">>;
        "idempotency_key"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "subscription_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "invoice_number"?: InputValue<string>;
        "collection_mode"?: InputValue<Array<"buyer_initiated" | "automatic" | "external">>;
        "issued_after"?: InputValue<string | globalThis.Date>;
        "issued_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "due_after"?: InputValue<string | globalThis.Date>;
        "due_before"?: InputValue<string | globalThis.Date>;
        "is_overdue"?: InputValue<boolean>;
        "has_outstanding_balance"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "query"?: InputValue<string>;
        "expand"?: InputValue<Array<"customer" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InvoiceListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoiceslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited">>;
        "idempotency_key"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "subscription_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "invoice_number"?: InputValue<string>;
        "collection_mode"?: InputValue<Array<"buyer_initiated" | "automatic" | "external">>;
        "issued_after"?: InputValue<string | globalThis.Date>;
        "issued_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "due_after"?: InputValue<string | globalThis.Date>;
        "due_before"?: InputValue<string | globalThis.Date>;
        "is_overdue"?: InputValue<boolean>;
        "has_outstanding_balance"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "query"?: InputValue<string>;
        "expand"?: InputValue<Array<"customer" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InvoiceListResponse>>;
    /** Iterate pages lazily.
     * @see reference/invoices.md#invoiceslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited">>;
        "idempotency_key"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "subscription_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "invoice_number"?: InputValue<string>;
        "collection_mode"?: InputValue<Array<"buyer_initiated" | "automatic" | "external">>;
        "issued_after"?: InputValue<string | globalThis.Date>;
        "issued_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "due_after"?: InputValue<string | globalThis.Date>;
        "due_before"?: InputValue<string | globalThis.Date>;
        "is_overdue"?: InputValue<boolean>;
        "has_outstanding_balance"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "query"?: InputValue<string>;
        "expand"?: InputValue<Array<"customer" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InvoiceListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/invoices.md#invoiceslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited">>;
        "idempotency_key"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "subscription_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "invoice_number"?: InputValue<string>;
        "collection_mode"?: InputValue<Array<"buyer_initiated" | "automatic" | "external">>;
        "issued_after"?: InputValue<string | globalThis.Date>;
        "issued_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "due_after"?: InputValue<string | globalThis.Date>;
        "due_before"?: InputValue<string | globalThis.Date>;
        "is_overdue"?: InputValue<boolean>;
        "has_outstanding_balance"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "query"?: InputValue<string>;
        "expand"?: InputValue<Array<"customer" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<InvoiceListResponse>>;
    /** Iterate items lazily.
     * @see reference/invoices.md#invoiceslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited">>;
        "idempotency_key"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "subscription_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "invoice_number"?: InputValue<string>;
        "collection_mode"?: InputValue<Array<"buyer_initiated" | "automatic" | "external">>;
        "issued_after"?: InputValue<string | globalThis.Date>;
        "issued_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "due_after"?: InputValue<string | globalThis.Date>;
        "due_before"?: InputValue<string | globalThis.Date>;
        "is_overdue"?: InputValue<boolean>;
        "has_outstanding_balance"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "query"?: InputValue<string>;
        "expand"?: InputValue<Array<"customer" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Invoice>;
    /**
 * Closes the outstanding balance as a write-off and releases the order's invoice collection
 * authority. Safe to retry with the same Idempotency-Key.
 * @see reference/invoices.md#invoicesmarkuncollectible
 * POST /v1/invoices/{invoice_id}/mark-uncollectible
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.markUncollectible("example", undefined, { idempotencyKey: idempotencyKey })
 */
    markUncollectible(invoice_id: InputValue<string>, params?: (InputValue<ResourceVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Invoice>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoicesmarkuncollectible
     */
    markUncollectibleWithResponse(invoice_id: InputValue<string>, params?: (InputValue<ResourceVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InvoiceResponse>>;
    /**
 * Revokes the current buyer-access link and all checkout credentials derived from it, then returns
 * a new public_url. The current checkout session and its payment lineage are preserved. Returns
 * 409 CUSTOMER_DELETION_PROCESSING if the customer is being deleted or was deleted. Safe to retry
 * with the same Idempotency-Key.
 * @see reference/invoices.md#invoicesregeneratepubliclink
 * POST /v1/invoices/{invoice_id}/regenerate-public-link
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.regeneratePublicLink("example", undefined, { idempotencyKey: idempotencyKey })
 */
    regeneratePublicLink(invoice_id: InputValue<string>, params?: (InputValue<ResourceVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Invoice>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoicesregeneratepubliclink
     */
    regeneratePublicLinkWithResponse(invoice_id: InputValue<string>, params?: (InputValue<ResourceVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InvoiceResponse>>;
    /**
 * Reverses the named manual payment in full and returns its amount to the invoice balance. To
 * correct an amount, reverse the payment and record the correct payment. Retries with the same
 * Idempotency-Key replay the result; retries without a key return 409 once the payment is
 * reversed.
 * @see reference/invoices.md#invoicesreversemanualpayment
 * POST /v1/invoices/{invoice_id}/manual-payments/{invoice_manual_payment_id}/reverse
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.reverseManualPayment("example", "example", {}, { idempotencyKey: idempotencyKey
 * })
 */
    reverseManualPayment(invoice_id: InputValue<string>, invoice_manual_payment_id: InputValue<string>, params: (InputValue<ReverseInvoiceManualPaymentRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<InvoiceManualPaymentResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoicesreversemanualpayment
     */
    reverseManualPaymentWithResponse(invoice_id: InputValue<string>, invoice_manual_payment_id: InputValue<string>, params: (InputValue<ReverseInvoiceManualPaymentRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InvoiceManualPaymentResultResponse>>;
    /**
 * Attempts a reminder email for an already issued collectible invoice. Safe to retry with the same
 * Idempotency-Key. Accepts an empty body or {}.
 * @see reference/invoices.md#invoicessendreminder
 * POST /v1/invoices/{invoice_id}/send-reminder
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.sendReminder("example", {}, { idempotencyKey: idempotencyKey })
 */
    sendReminder(invoice_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Invoice>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoicessendreminder
     */
    sendReminderWithResponse(invoice_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InvoiceResponse>>;
    /**
 * Updates mutable fields on a draft invoice. Null is rejected for cc_emails, collection,
 * payment_due, schedule_entries, reminders_paused, and expected_version; omit them to leave them
 * unchanged. Send [] to clear cc_emails or the authored schedule. After issue, the only writable
 * field is reminders_paused, which pauses or resumes automatic reminders on an open or partially
 * paid invoice.
 * @see reference/invoices.md#invoicesupdate
 * PATCH /v1/invoices/{invoice_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(invoice_id: InputValue<string>, params: (InputValue<UpdateInvoiceRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Invoice>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoicesupdate
     */
    updateWithResponse(invoice_id: InputValue<string>, params: (InputValue<UpdateInvoiceRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InvoiceResponse>>;
    /**
 * Voids an unpaid invoice so the associated order can be edited or collected again. An invoice
 * with an issued credit note against it cannot be voided until that credit note is voided.
 * @see reference/invoices.md#invoicesvoidresource
 * POST /v1/invoices/{invoice_id}/void
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.voidResource("example", undefined, { idempotencyKey: idempotencyKey })
 */
    voidResource(invoice_id: InputValue<string>, params?: (InputValue<ResourceVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Invoice>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoicesvoidresource
     */
    voidResourceWithResponse(invoice_id: InputValue<string>, params?: (InputValue<ResourceVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InvoiceResponse>>;
    /**
 * Waives the unpaid remainder of an assessed late fee. Collected money is not refunded. The reason
 * is visible only to the merchant.
 * @see reference/invoices.md#invoiceswaivelatefee
 * POST /v1/invoices/{invoice_id}/late-fees/{invoice_late_fee_id}/waive
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.waiveLateFee("example", "example", {reason_message: "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    waiveLateFee(invoice_id: InputValue<string>, invoice_late_fee_id: InputValue<string>, params: (InputValue<WaiveInvoiceLateFeeRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Invoice>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/invoices.md#invoiceswaivelatefee
     */
    waiveLateFeeWithResponse(invoice_id: InputValue<string>, invoice_late_fee_id: InputValue<string>, params: (InputValue<WaiveInvoiceLateFeeRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InvoiceResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly invoices: InvoicesResource;
}
