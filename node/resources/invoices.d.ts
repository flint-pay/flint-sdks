import type { Result, WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions, CollectInvoiceResponse, CollectInvoiceResult } from '../declarations/types-5.js';
import type {
    Invoice,
    InvoiceActivity,
    InvoiceActivityListResponse,
    InvoiceCheckoutSessionResponse,
    InvoiceCheckoutSessionResult
} from '../declarations/types-28.js';
import type {
    InvoiceDeliveryAttempt,
    InvoiceDeliveryAttemptListResponse,
    InvoiceListResponse,
    InvoiceManualPayment,
    InvoiceManualPaymentListResponse,
    InvoiceManualPaymentResponse,
    InvoiceManualPaymentResult,
    InvoiceManualPaymentResultResponse
} from '../declarations/types-29.js';
import type { InvoicePaymentAttempt, InvoicePaymentAttemptListResponse, InvoicePaymentAttemptResponse } from '../declarations/types-30.js';
import type { InvoiceResponse } from '../declarations/types-31.js';
import type {
    InvoicesCancelPaymentAttemptParams,
    InvoicesCollectParams,
    InvoicesCreateCheckoutSessionParams,
    InvoicesCreateLateFeeParams,
    InvoicesCreateManualPaymentParams,
    InvoicesCreateParams,
    InvoicesGetManualPaymentParams,
    InvoicesGetPDFParams,
    InvoicesGetPDFResponse,
    InvoicesGetParams,
    InvoicesGetPaymentAttemptParams,
    InvoicesIssueParams,
    InvoicesListActivitiesParams,
    InvoicesListDeliveryAttemptsParams,
    InvoicesListManualPaymentsParams,
    InvoicesListParams,
    InvoicesListPaymentAttemptsParams,
    InvoicesMarkUncollectibleParams,
    InvoicesRegeneratePublicLinkParams,
    InvoicesReverseManualPaymentParams,
    InvoicesSendReminderParams,
    InvoicesUpdateParams,
    InvoicesVoidParams,
    InvoicesWaiveLateFeeParams
} from '../declarations/types-32.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    ResponseInfo,
    WithResponseInfo,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    InvoicesCancelPaymentAttemptParams,
    InvoicesCollectParams,
    InvoicesCreateParams,
    InvoicesCreateCheckoutSessionParams,
    InvoicesCreateLateFeeParams,
    InvoicesCreateManualPaymentParams,
    InvoicesGetParams,
    InvoicesGetManualPaymentParams,
    InvoicesGetPaymentAttemptParams,
    InvoicesGetPDFParams,
    InvoicesGetPDFResponse,
    InvoicesIssueParams,
    InvoicesListActivitiesParams,
    InvoicesListDeliveryAttemptsParams,
    InvoicesListManualPaymentsParams,
    InvoicesListPaymentAttemptsParams,
    InvoicesListParams,
    InvoicesMarkUncollectibleParams,
    InvoicesRegeneratePublicLinkParams,
    InvoicesReverseManualPaymentParams,
    InvoicesSendReminderParams,
    InvoicesUpdateParams,
    InvoicesVoidParams,
    InvoicesWaiveLateFeeParams,
    LineItemFulfillmentRequestInput,
    LineItemFulfillmentOriginRequestInput,
    LegalSettings,
    IssueInvoiceRequestInput
} from '../declarations/types-32.js';
export type { RequestOptions, ResourceReference } from '../declarations/types-47.js';
export type {
    InvoicePaymentAttempt,
    InvoicePaymentAttemptResponse,
    InvoicePaymentAttemptListResponse,
    InvoicePaymentPolicyInput,
    InvoicePaymentOptionLimitInput,
    InvoicePaymentDueRequestInput,
    InvoicePaymentDueInputNoneInput,
    InvoicePaymentDueInputDateInput,
    InvoicePaymentDueInputPaymentTermsInput,
    InvoicePaymentDueInputCustomerDefaultInput,
    InvoicePaymentDueInputMerchantDefaultInput,
    InvoicePaymentPolicy,
    InvoicePaymentOptionLimit,
    InvoicePaymentDue,
    InvoicePaymentDueNone,
    InvoicePaymentDueDate,
    InvoicePaymentDuePaymentTerms,
    InvoicePaymentTermCalculation,
    InvoicePaymentTermCalculationNetDays,
    InvoicePaymentTermCalculationDaysAfterMonthEnd,
    InvoicePaymentTermCalculationDayOfMonth,
    InvoicePaymentTermCalculationDayOfNextMonth
} from '../declarations/types-30.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency, WeightInput } from '../declarations/types-61.js';
export type {
    CollectInvoiceResult,
    CollectInvoiceResponse,
    ClientOptions,
    CollectInvoiceRequestInput,
    CheckoutSubscriptionTerms,
    CheckoutSubscriptionRecurringShipping,
    CheckoutSessionTax,
    CheckoutTheme,
    CheckoutTipConfig,
    CheckoutSessionsListDeliverySelectionsParams,
    CollectInvoiceRequest
} from '../declarations/types-5.js';
export type {
    Invoice,
    InvoiceCheckoutSessionResult,
    InvoiceCheckoutSessionResponse,
    InvoiceActivityListResponse,
    InvoiceActivity,
    InvoiceCollection,
    InvoiceCollectionAutomatic,
    InvoiceCheckoutSessionRequestInput
} from '../declarations/types-28.js';
export type {
    InvoiceResponse,
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
    InvoicePaymentTermsSnapshot,
    InvoicePaymentTermCalculationOnReceipt,
    InvoiceScheduleEntry,
    InvoiceScheduleAmountSpecification,
    InvoiceScheduleAmountSpecificationFixed,
    InvoiceScheduleAmountSpecificationPercentage,
    InvoiceScheduleAmountSpecificationRemainingBalance,
    InvoiceScheduleDue,
    InvoiceScheduleDueAtIssue,
    InvoiceScheduleDueDate,
    InvoiceScheduleDueInvoiceDueDate,
    InvoiceSnapshot,
    InvoiceTip
} from '../declarations/types-31.js';
export type {
    InvoiceManualPaymentResult,
    InvoiceManualPaymentResultResponse,
    InvoiceManualPayment,
    InvoiceManualPaymentResponse,
    InvoiceDeliveryAttemptListResponse,
    InvoiceDeliveryAttempt,
    InvoiceManualPaymentListResponse,
    InvoiceListResponse,
    InvoiceCollectionRequestInput,
    InvoiceCollectionInputMerchantDefaultInput,
    InvoiceCollectionInputBuyerInitiatedInput,
    InvoiceCollectionInputAutomaticInput,
    InvoiceCollectionInputExternalInput,
    InvoiceCollectionBuyerInitiated,
    InvoiceCollectionExternal,
    InvoiceLateFee,
    InvoiceLateFeePolicy,
    InvoiceLateFeePolicyFixed,
    InvoiceLateFeePolicyPercentage,
    InvoiceDiscount,
    InvoiceLineItem
} from '../declarations/types-29.js';
export type {
    AuthMode,
    AddressRequestInput,
    Address,
    AssessInvoiceLateFeeRequestInput,
    AddressRequest,
    AssessInvoiceLateFeeRequest
} from '../declarations/types-0.js';
export type { Credentials, CreditNotesListAllocationsParams } from '../declarations/types-12.js';
export type { MoneyValue, NextAction, MoneyValueInput } from '../declarations/types-35.js';
export type {
    PaymentErrorSummary,
    PaymentAttemptGiftCardRedemption,
    PaymentAttemptPaymentIntent,
    PaymentClientAction,
    PaymentCollection,
    PaymentCollectionStripe,
    PaymentCollectionStripeElements
} from '../declarations/types-40.js';
export type {
    ErrorRemediation,
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedInvoiceSummary,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentLinkSummary
} from '../declarations/types-21.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { ResponseMeta, ResponseWarning, ResourceType, ResourceVersionRequestInput } from '../declarations/types-48.js';
export type {
    CreateInvoiceRequestInput,
    CreateInvoiceIssueRequestInput,
    CreateInvoiceQuickPayRequestInput,
    CreateInvoiceRequestOrderInput,
    CreateInvoiceRequestQuickPayInput,
    CreateInvoiceManualPaymentRequestInput
} from '../declarations/types-8.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type {
    OrderDeliveryDestinationRequestInput,
    OrderDeliveryDestinationRecipientRequestInput,
    OrderInventoryRoutingSourceRequestInput,
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderDraftLineItemTaxRequestInput,
    OrderDraftLineItemTaxCalculationRequestInput,
    OrderDraftTaxComponentRequestInput,
    OrderDraftTaxJurisdictionRequestInput,
    OrderCharge,
    OrderCalculatedChargeTax,
    OrderDeliveryDestinationRecipientRequest,
    OrderDraftLineItemInventoryDemandRequest
} from '../declarations/types-36.js';
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
    CreateOrderTipPercentInput
} from '../declarations/types-9.js';
export type { ManualDiscountRequestInput } from '../declarations/types-33.js';
export type { PromotionRefRequestInput, PromotionRefInputPromotionIDInput, PromotionRefInputPromotionCodeInput } from '../declarations/types-45.js';
export type { GiftCardPurchaseDetailsRequestInput, GiftCardPurchaseRecipientRequestInput } from '../declarations/types-24.js';
export type { ImageReferenceRequestInput, Image, ImageReferenceRequest } from '../declarations/types-25.js';
export type {
    OrderLineItemModifierRequestInput,
    OrderLineItemModifierInputCatalogInput,
    OrderLineItemModifierInputTextInput,
    OrderTaxCalculationRequestInput,
    OrderTaxComponentRequestInput,
    OrderTaxJurisdictionRequestInput,
    OrderTaxCalculationInputAutomaticInput,
    OrderTaxCalculationInputExternalInput,
    OrderTaxLocationInputFullAddressInput,
    OrderTaxLocationFullAddressRequestInput,
    OrderLineItemModifier,
    OrderPaymentAttempt,
    OrderPaymentAttemptPaymentMethodSave
} from '../declarations/types-37.js';
export type {
    TextModifierRequestInput,
    TaxIdentity,
    TextModifierRequest,
    TaxJurisdiction,
    TaxBreakdownPercentage,
    TaxBreakdownFlatAmount
} from '../declarations/types-57.js';
export type {
    SubscribedLineRequestInput,
    SettlementAmounts,
    SelectedProductOption,
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    SelectableOrderPaymentIntent
} from '../declarations/types-53.js';
export type { DimensionsInput, DocumentTaxID } from '../declarations/types-20.js';
export type {
    OrderTaxRequestInput,
    OrderTaxLocationRequestInput,
    OrderTaxLocationInputPostalCodeInput,
    OrderTaxLocationPostalAddressRequestInput
} from '../declarations/types-38.js';
export type {
    CheckoutBuyerContact,
    CategoryReference,
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
    CheckoutRedirects
} from '../declarations/types-4.js';
export type {
    PricingAmounts,
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject,
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary
} from '../declarations/types-43.js';
export type { BundleComponent, BundleComponentVariantSummary } from '../declarations/types-1.js';
export type { TaxBreakdown } from '../declarations/types-56.js';
export type {
    DeliveryQuoteChoiceGroupResource,
    DeliveryQuoteExecutionLegResource,
    DeliveryRecipientRequirement,
    DeliveryQuoteLineItemResource
} from '../declarations/types-18.js';
export type {
    DeliveryAddressAdvisoryResource,
    DeliveryCandidateOutcomeResource,
    DeliveryArrivalEstimate,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext
} from '../declarations/types-14.js';
export type {
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryLocationSummaryResource,
    DeliveryMerchantDiagnostic,
    DeliveryEligibilityMismatch
} from '../declarations/types-15.js';
export type { DeliveryWindowRequest, DeliveryShipmentDetails } from '../declarations/types-19.js';
export type { DeliveryOptionProjection, DeliveryPlan, DeliveryPickupDetails, DeliveryPreviewRoutingSourceInput } from '../declarations/types-16.js';
export type { BuyerInstructionsConfig } from '../declarations/types-2.js';
export type { SubscriptionIntervalOption } from '../declarations/types-54.js';
export type { ReverseInvoiceManualPaymentRequestInput } from '../declarations/types-51.js';
export type { UpdateInvoiceRequestInput } from '../declarations/types-58.js';
export type { WaiveInvoiceLateFeeRequestInput, WaiveInvoiceLateFeeRequest } from '../declarations/types-60.js';
export type { ConfirmReturnResolutionRequestInput } from '../declarations/types-6.js';
export { makeAddressRequest } from '../declarations/types-61.js';
export {
    makeAssessInvoiceLateFeeRequest,
    makeCheckoutRedirectsRequest,
    makeCollectInvoiceRequest,
    makeConfirmReturnResolutionRequest
} from '../declarations/types-62.js';
export {
    makeCreateInvoiceIssueRequest,
    makeCreateInvoiceManualPaymentRequest,
    makeCreateInvoiceQuickPayRequest,
    makeCreateInvoiceRequest,
    makeCreateInvoiceRequestOrder,
    makeCreateInvoiceRequestQuickPay,
    makeCreateOrderDiscount,
    makeCreateOrderDiscountManual,
    makeCreateOrderDiscountPromotion,
    makeCreateOrderLineItemInputBundle,
    makeCreateOrderLineItemInputCustom,
    makeCreateOrderLineItemInputVariant,
    makeCreateOrderLineItemRequest,
    makeCreateOrderTip,
    makeCreateOrderTipAmount,
    makeCreateOrderTipPercent
} from '../declarations/types-64.js';
export { makeDeliveryPreviewRoutingSource } from '../declarations/types-66.js';
export {
    makeDeliveryRecipientRequirement,
    makeDeliveryWindowRequest,
    makeDimensions,
    makeGiftCardPurchaseDetailsRequest,
    makeGiftCardPurchaseRecipientRequest
} from '../declarations/types-67.js';
export {
    makeImageReferenceRequest,
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
    makeInvoiceScheduleAmountSpecificationFixed
} from '../declarations/types-68.js';
export {
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
    makeMetadataRequest,
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
    makeOrderLineItemModifierRequest
} from '../declarations/types-69.js';
export {
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
} from '../declarations/types-70.js';
export {
    makePromotionRefInputPromotionCode,
    makePromotionRefInputPromotionID,
    makePromotionRefRequest,
    makeResourceVersionRequest
} from '../declarations/types-71.js';
export { makeReverseInvoiceManualPaymentRequest, makeSubscribedLineRequest } from '../declarations/types-72.js';
export { makeSubscriptionIntervalOption, makeTaxJurisdiction, makeTextModifierRequest } from '../declarations/types-73.js';
export { makeUpdateInvoiceRequest, makeWaiveInvoiceLateFeeRequest } from '../declarations/types-74.js';
export { makeWeight } from '../declarations/types-75.js';
export interface InvoicesResource {
    /**
 * Cancels an active invoice payment attempt and its payment intent. A processing ACH debit can be
 * canceled only until the payment processor sends it to the bank; after that the request returns
 * 409 ACTION_NOT_ALLOWED with reason in_progress and the attempt stays processing. Safe to retry
 * with the same Idempotency-Key. Accepts an empty body or {}.
 *
 * `POST /v1/invoices/{invoice_id}/payment-attempts/{invoice_payment_attempt_id}/cancel`
 * @param invoice_id Flint invoice ID.
 * @param invoice_payment_attempt_id Flint invoice payment attempt ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#cancelInvoicePaymentAttempt
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.cancelPaymentAttempt("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "invpa_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    cancelPaymentAttempt(invoice_id: InputValue<string>, invoice_payment_attempt_id: InputValue<string>, params?: InvoicesCancelPaymentAttemptParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InvoicePaymentAttempt, InvoicePaymentAttemptResponse>>;
    /**
 * Charges the invoice's saved payment method or the supplied saved payment method. This command
 * requires a caller-chosen Idempotency-Key that is reused for retries of the same collection
 * request.
 *
 * `POST /v1/invoices/{invoice_id}/collect`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#collectInvoice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.collect("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    collect(invoice_id: InputValue<string>, params: InvoicesCollectParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CollectInvoiceResult, CollectInvoiceResponse>>;
    /**
 * Creates an invoice draft from exactly one source: order_id for an order-backed invoice, or
 * quick_pay for an invoice with a new backing order. Include issue to issue it immediately, using
 * merchant_default delivery when issue is empty. Idempotency-Key is required for every request
 * because issuing an automatic-collection invoice can charge the buyer. Replays preserve the
 * original invoice result and recover its current public_url only within 24 hours of the original
 * request; later replays omit public_url. Use `client.invoices.get` for the current invoice. If
 * Flint returns IDEMPOTENCY_RECOVERY_REQUIRED, contact Flint support with the original
 * Idempotency-Key and request ID. Never retry with a new key.
 *
 * `POST /v1/invoices`
 * @see https://developers.withflintpay.com/docs/api/invoices#createInvoice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.create({type: "order", order_id: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: InvoicesCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Invoice, InvoiceResponse>>;
    /**
 * Returns the current open invoice checkout session and aligned card attempt when they still match
 * the invoice balance and collection run. A newly created session and attempt share the fixed
 * expiration of the active invoice public-link generation. Unexpired sessions are reused
 * regardless of remaining lifetime; active payment work returns a resolving conflict instead of
 * creating competing collection. When the invoice's order has items to deliver, a new session
 * offers the delivery methods in settings.checkout.default_delivery_method_ids, and the request
 * returns 409 ACTION_NOT_ALLOWED with reason configuration_required when those methods cannot
 * deliver every item. return_url sets where the checkout sends the buyer after paying. A reused
 * session takes a new return_url only until a payment starts on it, and keeps the one it has after
 * that.
 *
 * `POST /v1/invoices/{invoice_id}/checkout-sessions`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#createInvoiceCheckoutSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.createCheckoutSession("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    createCheckoutSession(invoice_id: InputValue<string>, params?: InvoicesCreateCheckoutSessionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InvoiceCheckoutSessionResult, InvoiceCheckoutSessionResponse>>;
    /**
 * Assesses the frozen late fee policy once per invoice or overdue schedule entry. The issued
 * document remains unchanged.
 *
 * `POST /v1/invoices/{invoice_id}/late-fees`
 * @param invoice_id Invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#createInvoiceLateFee
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.createLateFee("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    createLateFee(invoice_id: InputValue<string>, params: InvoicesCreateLateFeeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Invoice, InvoiceResponse>>;
    /**
 * Applies an offline/manual payment to an issued invoice. Recording is rejected with
 * OPERATION_IN_PROGRESS while an online payment is still resolving; an idle open checkout does not
 * block. A payment that clears the balance invalidates the open checkout session. Safe to retry
 * with the same Idempotency-Key.
 *
 * `POST /v1/invoices/{invoice_id}/manual-payments`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#createInvoiceManualPayment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.createManualPayment("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV", {amount_money: {amount:
 * "100", currency: "USD"}}, { idempotencyKey: idempotencyKey })
 */
    createManualPayment(invoice_id: InputValue<string>, params: InvoicesCreateManualPaymentParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InvoiceManualPaymentResult, InvoiceManualPaymentResultResponse>>;
    /**
 * Returns a single invoice by ID.
 *
 * `GET /v1/invoices/{invoice_id}`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#getInvoice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.invoices.get("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(invoice_id: InputValue<string>, params?: InvoicesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Invoice, InvoiceResponse>>;
    /**
 * Returns one recorded or reversed manual payment for the invoice.
 *
 * `GET /v1/invoices/{invoice_id}/manual-payments/{invoice_manual_payment_id}`
 * @param invoice_id Flint invoice ID.
 * @param invoice_manual_payment_id Flint invoice manual payment ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#getInvoiceManualPayment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.invoices.getManualPayment("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "omp_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getManualPayment(invoice_id: InputValue<string>, invoice_manual_payment_id: InputValue<string>, params?: InvoicesGetManualPaymentParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InvoiceManualPayment, InvoiceManualPaymentResponse>>;
    /**
 * Returns one card or ACH collection attempt for the invoice.
 *
 * `GET /v1/invoices/{invoice_id}/payment-attempts/{invoice_payment_attempt_id}`
 * @param invoice_id Flint invoice ID.
 * @param invoice_payment_attempt_id Flint invoice payment attempt ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#getInvoicePaymentAttempt
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.invoices.getPaymentAttempt("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "invpa_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getPaymentAttempt(invoice_id: InputValue<string>, invoice_payment_attempt_id: InputValue<string>, params?: InvoicesGetPaymentAttemptParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InvoicePaymentAttempt, InvoicePaymentAttemptResponse>>;
    /**
 * Downloads the merchant-authenticated PDF artifact generated from the invoice snapshot.
 *
 * `GET /v1/invoices/{invoice_id}/pdf`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#getInvoicePDF
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.invoices.getPDF("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getPDF(invoice_id: InputValue<string>, params?: InvoicesGetPDFParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Result<InvoicesGetPDFResponse>>;
    /**
 * Issues the invoice, creates the buyer-access link, and uses the selected delivery mode. Safe to
 * retry with the same Idempotency-Key.
 *
 * `POST /v1/invoices/{invoice_id}/issue`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#issueInvoice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.issue("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV", {delivery_mode: "email"}, {
 * idempotencyKey: idempotencyKey })
 */
    issue(invoice_id: InputValue<string>, params: InvoicesIssueParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Invoice, InvoiceResponse>>;
    /**
 * Returns a read-only history of an invoice for timelines and debugging, newest first. Use
 * sort_direction=asc for chronological order. Read the invoice and the resources each row
 * references for authoritative state. Default order: created_at descending, then
 * invoice_activity_id descending.
 *
 * `GET /v1/invoices/{invoice_id}/activities`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#listInvoiceActivities
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.invoices.listActivities("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listActivities(invoice_id: InputValue<string>, params?: InvoicesListActivitiesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InvoiceActivityListResponse, InvoiceActivityListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/invoices#listInvoiceActivities
     */
    listActivitiesPages(invoice_id: InputValue<string>, params?: InvoicesListActivitiesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<InvoiceActivityListResponse, InvoiceActivityListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/invoices#listInvoiceActivities
     */
    listActivitiesItems(invoice_id: InputValue<string>, params?: InvoicesListActivitiesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InvoiceActivity>;
    /**
 * Returns email delivery attempts for send and reminder actions. Default order: created_at
 * descending, then invoice_delivery_attempt_id ascending.
 *
 * `GET /v1/invoices/{invoice_id}/delivery-attempts`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#listInvoiceDeliveryAttempts
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.invoices.listDeliveryAttempts("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listDeliveryAttempts(invoice_id: InputValue<string>, params?: InvoicesListDeliveryAttemptsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InvoiceDeliveryAttemptListResponse, InvoiceDeliveryAttemptListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/invoices#listInvoiceDeliveryAttempts
     */
    listDeliveryAttemptsPages(invoice_id: InputValue<string>, params?: InvoicesListDeliveryAttemptsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<InvoiceDeliveryAttemptListResponse, InvoiceDeliveryAttemptListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/invoices#listInvoiceDeliveryAttempts
     */
    listDeliveryAttemptsItems(invoice_id: InputValue<string>, params?: InvoicesListDeliveryAttemptsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InvoiceDeliveryAttempt>;
    /**
 * Lists every manual payment, including reversed payments. Default order: received_at descending,
 * then invoice_manual_payment_id descending.
 *
 * `GET /v1/invoices/{invoice_id}/manual-payments`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#listInvoiceManualPayments
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.invoices.listManualPayments("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listManualPayments(invoice_id: InputValue<string>, params?: InvoicesListManualPaymentsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InvoiceManualPaymentListResponse, InvoiceManualPaymentListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/invoices#listInvoiceManualPayments
     */
    listManualPaymentsPages(invoice_id: InputValue<string>, params?: InvoicesListManualPaymentsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<InvoiceManualPaymentListResponse, InvoiceManualPaymentListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/invoices#listInvoiceManualPayments
     */
    listManualPaymentsItems(invoice_id: InputValue<string>, params?: InvoicesListManualPaymentsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InvoiceManualPayment>;
    /**
 * Lists card and ACH collection attempts for an invoice in reverse chronological order. Default
 * order: started_at descending, then invoice_payment_attempt_id descending.
 *
 * `GET /v1/invoices/{invoice_id}/payment-attempts`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#listInvoicePaymentAttempts
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.invoices.listPaymentAttempts("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listPaymentAttempts(invoice_id: InputValue<string>, params?: InvoicesListPaymentAttemptsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InvoicePaymentAttemptListResponse, InvoicePaymentAttemptListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/invoices#listInvoicePaymentAttempts
     */
    listPaymentAttemptsPages(invoice_id: InputValue<string>, params?: InvoicesListPaymentAttemptsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<InvoicePaymentAttemptListResponse, InvoicePaymentAttemptListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/invoices#listInvoicePaymentAttempts
     */
    listPaymentAttemptsItems(invoice_id: InputValue<string>, params?: InvoicesListPaymentAttemptsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InvoicePaymentAttempt>;
    /**
 * Returns a paginated list of invoices for the authenticated merchant. Default order: created_at
 * descending, then invoice_id descending.
 *
 * `GET /v1/invoices`
 * @see https://developers.withflintpay.com/docs/api/invoices#listInvoices
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.invoices.list()
 */
    list(params?: InvoicesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InvoiceListResponse, InvoiceListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/invoices#listInvoices
     */
    listPages(params?: InvoicesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<InvoiceListResponse, InvoiceListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/invoices#listInvoices
     */
    listItems(params?: InvoicesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Invoice>;
    /**
 * Closes the outstanding balance as a write-off and releases the order's invoice collection
 * authority. Safe to retry with the same Idempotency-Key.
 *
 * `POST /v1/invoices/{invoice_id}/mark-uncollectible`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#markInvoiceUncollectible
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.markUncollectible("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    markUncollectible(invoice_id: InputValue<string>, params?: InvoicesMarkUncollectibleParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Invoice, InvoiceResponse>>;
    /**
 * Revokes the current buyer-access link and all checkout credentials derived from it, then returns
 * a new public_url. The current checkout session and its payment lineage are preserved. Returns
 * 409 ACTION_NOT_ALLOWED with details[0].reason in_progress when the invoice's customer is being
 * deleted or has been deleted. Safe to retry with the same Idempotency-Key.
 *
 * `POST /v1/invoices/{invoice_id}/regenerate-public-link`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#regenerateInvoicePublicLink
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.regeneratePublicLink("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    regeneratePublicLink(invoice_id: InputValue<string>, params?: InvoicesRegeneratePublicLinkParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Invoice, InvoiceResponse>>;
    /**
 * Reverses the named manual payment in full and returns its amount to the invoice balance. To
 * correct an amount, reverse the payment and record the correct payment. Retries with the same
 * Idempotency-Key replay the result; retries without a key return 409 once the payment is
 * reversed.
 *
 * `POST /v1/invoices/{invoice_id}/manual-payments/{invoice_manual_payment_id}/reverse`
 * @param invoice_id Flint invoice ID.
 * @param invoice_manual_payment_id Flint invoice manual payment ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#reverseInvoiceManualPayment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.reverseManualPayment("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "omp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reversal_note: "Payment returned by bank"}, { idempotencyKey:
 * idempotencyKey })
 */
    reverseManualPayment(invoice_id: InputValue<string>, invoice_manual_payment_id: InputValue<string>, params: InvoicesReverseManualPaymentParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InvoiceManualPaymentResult, InvoiceManualPaymentResultResponse>>;
    /**
 * Attempts a reminder email for an already issued collectible invoice. Safe to retry with the same
 * Idempotency-Key. Accepts an empty body or {}.
 *
 * `POST /v1/invoices/{invoice_id}/send-reminder`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#sendInvoiceReminder
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.sendReminder("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    sendReminder(invoice_id: InputValue<string>, params?: InvoicesSendReminderParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Invoice, InvoiceResponse>>;
    /**
 * Updates mutable fields on a draft invoice. Null is rejected for cc_emails, collection,
 * payment_due, schedule_entries, reminders_paused, and expected_version; omit them to leave them
 * unchanged. Send [] to clear cc_emails or the authored schedule. After issue, the only writable
 * field is reminders_paused, which pauses or resumes automatic reminders on an open or partially
 * paid invoice.
 *
 * `PATCH /v1/invoices/{invoice_id}`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#updateInvoice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.update("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV", {memo: "Updated delivery
 * instructions"}, { idempotencyKey: idempotencyKey })
 */
    update(invoice_id: InputValue<string>, params: InvoicesUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Invoice, InvoiceResponse>>;
    /**
 * Voids an unpaid invoice so the associated order can be edited or collected again. An invoice
 * with an issued credit note against it cannot be voided until that credit note is voided.
 *
 * `POST /v1/invoices/{invoice_id}/void`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#voidInvoice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.void("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    void(invoice_id: InputValue<string>, params?: InvoicesVoidParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Invoice, InvoiceResponse>>;
    /**
 * Waives the unpaid remainder of an assessed late fee. Collected money is not refunded. The reason
 * is visible only to the merchant.
 *
 * `POST /v1/invoices/{invoice_id}/late-fees/{invoice_late_fee_id}/waive`
 * @param invoice_id Invoice ID.
 * @param invoice_late_fee_id Invoice late fee ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#waiveInvoiceLateFee
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.waiveLateFee("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "inlf_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reason_message: "Courtesy waiver"}, { idempotencyKey:
 * idempotencyKey })
 */
    waiveLateFee(invoice_id: InputValue<string>, invoice_late_fee_id: InputValue<string>, params: InvoicesWaiveLateFeeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Invoice, InvoiceResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly invoices: InvoicesResource;
}
