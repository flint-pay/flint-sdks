import type { Result, WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions, CollectInvoiceResponse } from '../declarations/types-6.js';
import type { CollectInvoiceResult } from '../declarations/types-7.js';
import type {
    Invoice,
    InvoiceActivity,
    InvoiceActivityListResponse,
    InvoiceDeliveryAttempt,
    InvoiceDeliveryAttemptListResponse
} from '../declarations/types-31.js';
import type {
    InvoiceListResponse,
    InvoiceManualPayment,
    InvoiceManualPaymentListResponse,
    InvoiceManualPaymentResponse,
    InvoiceManualPaymentResult,
    InvoiceManualPaymentResultResponse,
    InvoicePaymentAttempt,
    InvoicePaymentAttemptListResponse,
    InvoicePaymentAttemptResponse
} from '../declarations/types-32.js';
import type { InvoiceResponse } from '../declarations/types-33.js';
import type {
    InvoicesCancelPaymentAttemptParams,
    InvoicesCollectParams,
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
} from '../declarations/types-34.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-69.js';
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
    InvoiceScheduleEntryWriteInput,
    InvoiceScheduleDueWriteInput,
    InvoiceScheduleDueWriteAtIssueInput,
    InvoiceScheduleDueWriteDateInput,
    InvoiceScheduleDueWriteInvoiceDueDateInput,
    InvoiceScheduleEntryWriteDepositInput,
    InvoiceScheduleEntryWriteInstallmentInput,
    InvoiceScheduleEntryWriteBalanceInput,
    InvoiceScheduleEntry,
    InvoiceScheduleDueInvoiceDueDate,
    InvoiceSnapshot,
    InvoiceTip,
    IssueInvoiceRequestInput
} from '../declarations/types-34.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type {
    InvoicePaymentAttempt,
    InvoicePaymentAttemptResponse,
    InvoiceManualPaymentResult,
    InvoiceManualPaymentResultResponse,
    InvoiceManualPayment,
    InvoiceManualPaymentResponse,
    InvoiceManualPaymentListResponse,
    InvoicePaymentAttemptListResponse,
    InvoiceListResponse,
    InvoiceLateFee,
    InvoiceLateFeePolicy,
    InvoiceLateFeePolicyFixed,
    InvoiceLateFeePolicyPercentage,
    InvoiceLineItem
} from '../declarations/types-32.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency, WeightRequestInput } from '../declarations/types-69.js';
export type { CollectInvoiceResult, ConfirmReturnResolutionRequestInput } from '../declarations/types-7.js';
export type { CollectInvoiceResponse, ClientOptions, CollectInvoiceRequestInput, CollectInvoiceRequest } from '../declarations/types-6.js';
export type {
    Invoice,
    InvoiceActivityListResponse,
    InvoiceActivity,
    InvoiceDeliveryAttemptListResponse,
    InvoiceDeliveryAttempt,
    InvoiceCollectionRequestInput,
    InvoiceCollectionInputMerchantDefaultInput,
    InvoiceCollectionInputBuyerInitiatedInput,
    InvoiceCollectionInputAutomaticInput,
    InvoiceCollectionInputExternalInput,
    InvoiceCollection,
    InvoiceCollectionBuyerInitiated,
    InvoiceCollectionAutomatic,
    InvoiceCollectionExternal,
    InvoiceDiscount
} from '../declarations/types-31.js';
export type {
    InvoiceResponse,
    InvoicePaymentPolicyRequestInput,
    InvoicePaymentOptionLimitRequestInput,
    InvoicePaymentDueRequestInput,
    InvoicePaymentDueInputNoneInput,
    InvoicePaymentDueInputDateInput,
    InvoicePaymentDueInputPaymentTermsInput,
    InvoicePaymentDueInputCustomerDefaultInput,
    InvoicePaymentDueInputMerchantDefaultInput,
    InvoiceScheduleAmountSpecificationRequestInput,
    InvoiceScheduleAmountSpecificationFixedRequestInput,
    InvoiceScheduleAmountSpecificationPercentageRequestInput,
    InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput,
    InvoicePaymentPolicy,
    InvoicePaymentOptionLimit,
    InvoicePaymentDue,
    InvoicePaymentDueNone,
    InvoicePaymentDueDate,
    InvoicePaymentDuePaymentTerms,
    InvoicePaymentTermsSnapshot,
    InvoicePaymentTermCalculation,
    InvoicePaymentTermCalculationOnReceipt,
    InvoicePaymentTermCalculationNetDays,
    InvoicePaymentTermCalculationDaysAfterMonthEnd,
    InvoicePaymentTermCalculationDayOfMonth,
    InvoicePaymentTermCalculationDayOfNextMonth,
    InvoiceScheduleAmountSpecification,
    InvoiceScheduleAmountSpecificationFixed,
    InvoiceScheduleAmountSpecificationPercentage,
    InvoiceScheduleAmountSpecificationRemainingBalance,
    InvoiceScheduleDue,
    InvoiceScheduleDueAtIssue,
    InvoiceScheduleDueDate
} from '../declarations/types-33.js';
export type { AuthMode, BundleComponent, BundleComponentVariantSummary } from '../declarations/types-1.js';
export type { Credentials, CreditNotesListAllocationsParams } from '../declarations/types-14.js';
export type { MoneyValue, NextAction, MoneyValueInput, MetadataRequestInput } from '../declarations/types-38.js';
export type { PaymentErrorSummary } from '../declarations/types-44.js';
export type { ErrorRemediation, ExpandedCustomerSummary, ExpandedOrderSummary } from '../declarations/types-24.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { ResourceReference, ResponseMeta, ResponseWarning, ResourceVersionRequestInput } from '../declarations/types-54.js';
export type {
    CreateInvoiceRequestInput,
    CreateInvoiceIssueRequestInput,
    CreateInvoiceQuickPayRequestInput,
    CreateOrderDiscountInput,
    CreateOrderDiscountPromotionInput,
    CreateOrderDiscountManualInput,
    CreateInvoiceRequestOrderInput,
    CreateInvoiceRequestQuickPayInput,
    CreateInvoiceManualPaymentRequestInput
} from '../declarations/types-10.js';
export type {
    OrderDeliveryDestinationRequestInput,
    OrderDeliveryDestinationRecipientRequestInput,
    OrderCharge,
    OrderCalculatedChargeTax,
    OrderDeliveryDestinationRecipientRequest
} from '../declarations/types-39.js';
export type {
    AddressRequestInput,
    Address,
    AssessInvoiceLateFeeRequestInput,
    AddressRequest,
    AssessInvoiceLateFeeRequest
} from '../declarations/types-0.js';
export type {
    ManualDiscountRequestInput,
    LineItemFulfillmentRequestModelInput,
    LineItemFulfillmentOriginRequestModelInput
} from '../declarations/types-35.js';
export type { PromotionRefRequestInput, PromotionRefInputPromotionIDInput, PromotionRefInputPromotionCodeInput } from '../declarations/types-51.js';
export type {
    InventoryRoutingSourceRequestInput,
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput
} from '../declarations/types-30.js';
export type {
    CreateOrderLineItemRequestInput,
    CreateOrderLineItemInputVariantInput,
    CreateOrderLineItemInputBundleInput,
    CreateOrderLineItemInputCustomInput,
    CreateOrderTipInput,
    CreateOrderTipAmountInput,
    CreateOrderTipPercentInput
} from '../declarations/types-11.js';
export type { GiftCardPurchaseDetailsRequestInput, GiftCardPurchaseRecipientRequestInput, Image } from '../declarations/types-27.js';
export type { ImageReferenceRequestInput, ImageReferenceRequest } from '../declarations/types-28.js';
export type {
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderLineItemModifierRequestModelInput,
    OrderLineItemModifierInputCatalogRequestInput,
    OrderLineItemModifierInputTextRequestInput,
    OrderDraftLineItemTaxRequestModelInput,
    OrderDraftLineItemTaxCalculationRequestModelInput,
    OrderDraftTaxComponentRequestModelInput,
    OrderDraftTaxJurisdictionRequestModelInput,
    OrderLineItemModifier,
    OrderDraftLineItemInventoryDemandRequest
} from '../declarations/types-40.js';
export type { TextModifierRequestInput, TextModifierRequest, TaxReverseCharge } from '../declarations/types-65.js';
export type { SubscribedLineRequestModelInput } from '../declarations/types-60.js';
export type { DimensionsRequestInput, DocumentTaxID, DisputesAcceptParams } from '../declarations/types-23.js';
export type { OrderTaxRequestInput } from '../declarations/types-42.js';
export type {
    OrderTaxCalculationRequestInput,
    OrderTaxComponentRequestInput,
    OrderTaxJurisdictionRequestInput,
    OrderTaxCalculationInputAutomaticInput,
    OrderTaxCalculationInputExternalInput,
    OrderTaxExemptionRequestInput,
    OrderTaxExemptionInputCustomerInput,
    OrderTaxExemptionInputNoneInput,
    OrderTaxExemptionInputOrderInput,
    OrderTaxLocationRequestInput,
    OrderTaxLocationInputPostalCodeInput,
    OrderTaxLocationPostalAddressRequestInput,
    OrderTaxLocationInputFullAddressInput,
    OrderTaxLocationFullAddressRequestInput,
    OrderSettlementAmounts,
    OrderTaxExemption,
    OrderTaxLocationPostalAddressRequest,
    OrderTaxLocationFullAddressRequest
} from '../declarations/types-41.js';
export type { DeliveryChargeTaxCalculationRequestModelInput } from '../declarations/types-17.js';
export type {
    TaxComponentRequestModelInput,
    TaxJurisdictionRequestModelInput,
    TaxIdentity,
    TaxBreakdown,
    TaxJurisdiction,
    TaxBreakdownPercentage,
    TaxBreakdownFlatAmount,
    TaxCurrencyConversion
} from '../declarations/types-64.js';
export type {
    CustomerTaxExemptionCoverageRequestInput,
    CustomerTaxExemptionCoverageAllStatesRequestInput,
    CustomerTaxExemptionCoverageStatesRequestInput,
    DeferredPromotion,
    CustomerTaxExemptionCoverage,
    CustomerTaxExemptionCoverageAllStates,
    CustomerTaxExemptionCoverageStates,
    CustomerTaxID,
    CustomersListAddressesParams
} from '../declarations/types-16.js';
export type { MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-37.js';
export type { CheckoutBuyerContact, CategoryReference } from '../declarations/types-5.js';
export type { PricingAmounts } from '../declarations/types-49.js';
export type { SettlementAmounts, SelectedProductOption } from '../declarations/types-59.js';
export type { ReverseInvoiceManualPaymentRequestInput } from '../declarations/types-57.js';
export type { UpdateInvoiceRequestInput } from '../declarations/types-66.js';
export type { WaiveInvoiceLateFeeRequestInput, WaiveInvoiceLateFeeRequest } from '../declarations/types-68.js';
export { makeAddressRequest, makeAssessInvoiceLateFeeRequest } from '../declarations/types-70.js';
export { makeCollectInvoiceRequest, makeConfirmReturnResolutionRequest } from '../declarations/types-71.js';
export {
    makeCreateInvoiceIssueRequest,
    makeCreateInvoiceManualPaymentRequest,
    makeCreateInvoiceQuickPayRequest,
    makeCreateInvoiceRequest,
    makeCreateInvoiceRequestOrder,
    makeCreateInvoiceRequestQuickPay
} from '../declarations/types-72.js';
export {
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
} from '../declarations/types-73.js';
export {
    makeCustomerTaxExemptionCoverageAllStatesRequest,
    makeCustomerTaxExemptionCoverageRequest,
    makeCustomerTaxExemptionCoverageStatesRequest
} from '../declarations/types-74.js';
export { makeDeliveryChargeTaxCalculationRequestModel } from '../declarations/types-75.js';
export {
    makeDimensionsRequest,
    makeGiftCardPurchaseDetailsRequest,
    makeGiftCardPurchaseRecipientRequest,
    makeImageReferenceRequest
} from '../declarations/types-76.js';
export {
    makeInventoryRoutingSourceInputFixedLocation,
    makeInventoryRoutingSourceInputPolicy,
    makeInventoryRoutingSourceInputPolicyRevision,
    makeInventoryRoutingSourceRequest,
    makeInvoiceCollectionInputAutomatic,
    makeInvoiceCollectionInputBuyerInitiated,
    makeInvoiceCollectionInputExternal,
    makeInvoiceCollectionInputMerchantDefault,
    makeInvoiceCollectionRequest,
    makeInvoicePaymentDueInputCustomerDefault,
    makeInvoicePaymentDueInputDate,
    makeInvoicePaymentDueInputMerchantDefault,
    makeInvoicePaymentDueInputNone,
    makeInvoicePaymentDueInputPaymentTerms,
    makeInvoicePaymentDueRequest,
    makeInvoicePaymentOptionLimitRequest,
    makeInvoicePaymentPolicyRequest,
    makeInvoiceScheduleAmountSpecificationFixedRequest,
    makeInvoiceScheduleAmountSpecificationPercentageRequest,
    makeInvoiceScheduleAmountSpecificationRemainingBalanceRequest,
    makeInvoiceScheduleAmountSpecificationRequest,
    makeInvoiceScheduleDueWrite,
    makeInvoiceScheduleDueWriteAtIssue,
    makeInvoiceScheduleDueWriteDate,
    makeInvoiceScheduleDueWriteInvoiceDueDate,
    makeInvoiceScheduleEntryWrite,
    makeInvoiceScheduleEntryWriteBalance,
    makeInvoiceScheduleEntryWriteDeposit,
    makeInvoiceScheduleEntryWriteInstallment,
    makeIssueInvoiceRequest,
    makeLineItemFulfillmentOriginRequestModel,
    makeLineItemFulfillmentRequestModel
} from '../declarations/types-77.js';
export {
    makeManualDiscountRequest,
    makeMetadataPatchRequest,
    makeMetadataRequest,
    makeMoneyValue,
    makeOrderDeliveryDestinationRecipientRequest,
    makeOrderDeliveryDestinationRequest,
    makeOrderDraftLineItemInventoryDemandRequest,
    makeOrderDraftLineItemTaxCalculationRequestModel,
    makeOrderDraftLineItemTaxRequestModel,
    makeOrderDraftTaxComponentRequestModel,
    makeOrderDraftTaxJurisdictionRequestModel,
    makeOrderLineItemModifierInputCatalogRequest,
    makeOrderLineItemModifierInputTextRequest,
    makeOrderLineItemModifierRequestModel
} from '../declarations/types-78.js';
export {
    makeOrderTaxCalculationInputAutomatic,
    makeOrderTaxCalculationInputExternal,
    makeOrderTaxCalculationRequest,
    makeOrderTaxComponentRequest,
    makeOrderTaxExemptionInputCustomer,
    makeOrderTaxExemptionInputNone,
    makeOrderTaxExemptionInputOrder,
    makeOrderTaxExemptionRequest,
    makeOrderTaxJurisdictionRequest,
    makeOrderTaxLocationFullAddressRequest,
    makeOrderTaxLocationInputFullAddress,
    makeOrderTaxLocationInputPostalCode,
    makeOrderTaxLocationPostalAddressRequest,
    makeOrderTaxLocationRequest,
    makeOrderTaxRequest
} from '../declarations/types-79.js';
export { makePromotionRefInputPromotionCode, makePromotionRefInputPromotionID, makePromotionRefRequest } from '../declarations/types-80.js';
export { makeResourceVersionRequest, makeReverseInvoiceManualPaymentRequest } from '../declarations/types-81.js';
export {
    makeSubscribedLineRequestModel,
    makeTaxComponentRequestModel,
    makeTaxJurisdictionRequestModel,
    makeTextModifierRequest
} from '../declarations/types-82.js';
export { makeUpdateInvoiceRequest } from '../declarations/types-83.js';
export { makeWaiveInvoiceLateFeeRequest, makeWeightRequest } from '../declarations/types-84.js';
export interface InvoicesResource {
    /**
 * Cancels an active invoice payment attempt and its payment intent. A processing ACH debit can be
 * canceled only until the payment processor sends it to the bank; after that the request returns
 * 409 ACTION_NOT_ALLOWED with reason in_progress and the attempt stays processing. Safe to retry
 * with the same idempotency key. Accepts an empty body or {}.
 *
 * `POST /v1/invoices/{invoice_id}/payment-attempts/{invoice_payment_attempt_id}/cancel`
 * @param invoice_id Flint invoice ID.
 * @param invoice_payment_attempt_id Flint invoice payment attempt ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#cancelInvoicePaymentAttempt
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.cancelPaymentAttempt("inv_01KEZF7C00A5GEBMWHEAJFSAR4",
 * "invpa_01KEZF7C00PMWEDPAYYEKDTPBX", {}, { idempotencyKey: idempotencyKey })
 */
    cancelPaymentAttempt(invoice_id: InputValue<string>, invoice_payment_attempt_id: InputValue<string>, params?: InvoicesCancelPaymentAttemptParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InvoicePaymentAttempt, InvoicePaymentAttemptResponse>>;
    /**
 * Charges the invoice's saved payment method or the supplied saved payment method. Send a
 * caller-chosen idempotency key, and reuse it when you retry the same collection.
 *
 * `POST /v1/invoices/{invoice_id}/collect`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#collectInvoice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.collect("inv_01KEZF7C00A5GEBMWHEAJFSAR4", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    collect(invoice_id: InputValue<string>, params: InvoicesCollectParams | undefined, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CollectInvoiceResult, CollectInvoiceResponse>>;
    /**
 * Creates an invoice draft from exactly one source: order_id for an order-backed invoice, or
 * quick_pay for an invoice with a new backing order. Include issue to issue it immediately, using
 * merchant_default delivery when issue is empty. An idempotency key is required for every request
 * because issuing an automatic-collection invoice can charge the buyer. Replays preserve the
 * original invoice result and recover its current public_url only within 24 hours of the original
 * request; later replays omit public_url. Use `client.invoices.get` for the current invoice. If
 * Flint returns IDEMPOTENCY_RECOVERY_REQUIRED, look up the original with GET
 * /v1/invoices?idempotency_key={key}. Send the create again under a new key only after confirming
 * it created no invoice, and contact Flint support with the request_id if you can't tell.
 *
 * `POST /v1/invoices`
 * @see https://developers.withflintpay.com/docs/api/invoices#createInvoice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.create({type: "order", order_id: "ord_01KEZF7C0054GQKJ142A8X367A"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: InvoicesCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Invoice, InvoiceResponse>>;
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
 * client.invoices.createLateFee("inv_01KEZF7C00A5GEBMWHEAJFSAR4", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    createLateFee(invoice_id: InputValue<string>, params?: InvoicesCreateLateFeeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Invoice, InvoiceResponse>>;
    /**
 * Applies an offline/manual payment to an issued invoice. The monthly allowance for orders paid
 * outside Flint never prevents recording a payment. When the order is above its current allowance,
 * meta.warnings includes external_paid_orders_over_allowance with the order resource_id and the
 * original usage period's resets_at. A replay preserves that original reset time. Recording is
 * rejected with OPERATION_IN_PROGRESS while an online payment is still resolving; an idle open
 * checkout does not block. A payment that clears the balance invalidates the open checkout
 * session. Safe to retry with the same idempotency key.
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
 * client.invoices.get("inv_01KEZF7C00A5GEBMWHEAJFSAR4")
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
 * client.invoices.getManualPayment("inv_01KEZF7C00A5GEBMWHEAJFSAR4",
 * "omp_01KEZF7C007J18203RBJKB9TYE")
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
 * client.invoices.getPaymentAttempt("inv_01KEZF7C00A5GEBMWHEAJFSAR4",
 * "invpa_01KEZF7C00PMWEDPAYYEKDTPBX")
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
 * client.invoices.getPDF("inv_01KEZF7C00A5GEBMWHEAJFSAR4")
 */
    getPDF(invoice_id: InputValue<string>, params?: InvoicesGetPDFParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Result<InvoicesGetPDFResponse>>;
    /**
 * Issues the invoice, creates the buyer-access link, and uses the selected delivery mode. Safe to
 * retry with the same idempotency key.
 *
 * `POST /v1/invoices/{invoice_id}/issue`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#issueInvoice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.issue("inv_01KEZF7C00A5GEBMWHEAJFSAR4", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    issue(invoice_id: InputValue<string>, params: InvoicesIssueParams | undefined, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Invoice, InvoiceResponse>>;
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
 * client.invoices.listActivities("inv_01KEZF7C00A5GEBMWHEAJFSAR4")
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
 * client.invoices.listDeliveryAttempts("inv_01KEZF7C00A5GEBMWHEAJFSAR4")
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
 * client.invoices.listManualPayments("inv_01KEZF7C00A5GEBMWHEAJFSAR4")
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
 * client.invoices.listPaymentAttempts("inv_01KEZF7C00A5GEBMWHEAJFSAR4")
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
 * authority. Safe to retry with the same idempotency key.
 *
 * `POST /v1/invoices/{invoice_id}/mark-uncollectible`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#markInvoiceUncollectible
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.markUncollectible("inv_01KEZF7C00A5GEBMWHEAJFSAR4", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    markUncollectible(invoice_id: InputValue<string>, params?: InvoicesMarkUncollectibleParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Invoice, InvoiceResponse>>;
    /**
 * Revokes the current buyer-access link and all checkout credentials derived from it, then returns
 * a new public_url. The current checkout session and its payment lineage are preserved. Fails with
 * `ACTION_NOT_ALLOWED` and reason `in_progress` when the invoice's customer is being deleted or
 * has been deleted. Safe to retry with the same idempotency key.
 *
 * `POST /v1/invoices/{invoice_id}/regenerate-public-link`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#regenerateInvoicePublicLink
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.regeneratePublicLink("inv_01KEZF7C00A5GEBMWHEAJFSAR4", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    regeneratePublicLink(invoice_id: InputValue<string>, params?: InvoicesRegeneratePublicLinkParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Invoice, InvoiceResponse>>;
    /**
 * Reverses the named manual payment in full and returns its amount to the invoice balance. To
 * correct an amount, reverse the payment and record the correct payment. A retry with the same
 * idempotency key replays the result; a retry without a key fails once the payment is already
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
 * client.invoices.reverseManualPayment("inv_01KEZF7C00A5GEBMWHEAJFSAR4",
 * "omp_01KEZF7C007J18203RBJKB9TYE", undefined, { idempotencyKey: idempotencyKey })
 */
    reverseManualPayment(invoice_id: InputValue<string>, invoice_manual_payment_id: InputValue<string>, params?: InvoicesReverseManualPaymentParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InvoiceManualPaymentResult, InvoiceManualPaymentResultResponse>>;
    /**
 * Attempts a reminder email for an already issued collectible invoice. Safe to retry with the same
 * idempotency key. Accepts an empty body or {}.
 *
 * `POST /v1/invoices/{invoice_id}/send-reminder`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#sendInvoiceReminder
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.sendReminder("inv_01KEZF7C00A5GEBMWHEAJFSAR4", {}, { idempotencyKey:
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
 * Voids an unpaid invoice and releases its collection authority. For a Quick Pay invoice, also
 * closes the order with closed_reason invoice_voided only when it is open with no collected
 * payment and no fulfillment. Otherwise the order is unchanged. An invoice with an issued credit
 * note against it cannot be voided until that credit note is voided.
 *
 * `POST /v1/invoices/{invoice_id}/void`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/invoices#voidInvoice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.invoices.void("inv_01KEZF7C00A5GEBMWHEAJFSAR4", undefined, { idempotencyKey:
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
 * client.invoices.waiveLateFee("inv_01KEZF7C00A5GEBMWHEAJFSAR4",
 * "inlf_01KEZF7C00NVR97MBH5AHR4W1X", {reason_message: "Courtesy waiver"}, { idempotencyKey:
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
