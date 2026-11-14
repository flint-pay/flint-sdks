import type { Result, WithResponseInfo, InputValue } from '../runtime.js';
import type { AccessLink, AccessLinkResponse } from '../declarations/types-0.js';
import type { CancelOrderPaymentAttemptResponse } from '../declarations/types-4.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { CreateOrderEditResponse, CreateOrderEditResult } from '../declarations/types-11.js';
import type { Order, OrderActivity, OrderActivityListResponse, OrderCharge } from '../declarations/types-39.js';
import type { OrderChargesListResponse, OrderEdit, OrderEditListResponse, OrderEditResponse, OrderLineItem } from '../declarations/types-40.js';
import type {
    OrderLineItemsListResponse,
    OrderListResponse,
    OrderPaymentAttempt,
    OrderPaymentAttemptListResponse,
    OrderPaymentAttemptResponse,
    OrderResponse
} from '../declarations/types-41.js';
import type {
    OrdersApplyDiscountParams,
    OrdersApplyGiftCardParams,
    OrdersCancelPaymentAttemptParams,
    OrdersCloseParams,
    OrdersCreateAccessLinkParams,
    OrdersCreateChargeParams,
    OrdersCreateEditParams,
    OrdersCreateLineItemsParams,
    OrdersCreateParams,
    OrdersDeleteChargeParams,
    OrdersDeleteLineItemParams,
    OrdersGetEditParams,
    OrdersGetParams,
    OrdersGetPaymentAttemptParams,
    OrdersGetReceiptPDFParams,
    OrdersGetReceiptPDFResponse,
    OrdersListActivitiesParams,
    OrdersListChargesParams,
    OrdersListEditsParams,
    OrdersListLineItemsParams,
    OrdersListParams,
    OrdersListPaymentAttemptsParams,
    OrdersPayParams,
    OrdersRemoveDiscountsParams,
    OrdersRemoveGiftCardParams,
    OrdersRepriceDiscountsParams,
    OrdersResolveInventoryExceptionParams,
    OrdersRetryEditRefundParams,
    OrdersSendReceiptParams,
    OrdersUpdateChargeParams,
    OrdersUpdateLineItemParams,
    OrdersUpdateParams
} from '../declarations/types-42.js';
import type { PayOrderResponse, PayOrderResult } from '../declarations/types-44.js';
import type { RequestOptions, RetryOrderEditRefundResponse, RetryOrderEditRefundResult } from '../declarations/types-54.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
    OrdersApplyDiscountParams,
    OrdersApplyGiftCardParams,
    OrdersCancelPaymentAttemptParams,
    OrdersCloseParams,
    OrdersCreateParams,
    OrdersCreateAccessLinkParams,
    OrdersCreateChargeParams,
    OrdersCreateEditParams,
    OrdersCreateLineItemsParams,
    OrdersDeleteChargeParams,
    OrdersDeleteLineItemParams,
    OrdersGetParams,
    OrdersGetEditParams,
    OrdersGetPaymentAttemptParams,
    OrdersGetReceiptPDFParams,
    OrdersGetReceiptPDFResponse,
    OrdersListActivitiesParams,
    OrdersListChargesParams,
    OrdersListEditsParams,
    OrdersListLineItemsParams,
    OrdersListPaymentAttemptsParams,
    OrdersListParams,
    OrdersPayParams,
    OrdersRemoveDiscountsParams,
    OrdersRemoveGiftCardParams,
    OrdersRepriceDiscountsParams,
    OrdersResolveInventoryExceptionParams,
    OrdersRetryEditRefundParams,
    OrdersSendReceiptParams,
    OrdersUpdateParams,
    OrdersUpdateChargeParams,
    OrdersUpdateLineItemParams,
    OrderTaxLocation,
    OrderTaxRequestInput,
    OrderTaxJurisdictionRequestInput,
    OrderTaxExemptionRequestInput,
    OrderTaxExemptionInputCustomerInput,
    OrderTaxExemptionInputNoneInput,
    OrderTaxExemptionInputOrderInput,
    OrderTaxLocationRequestInput,
    OrderTaxLocationInputPostalCodeInput,
    OrderTaxLocationPostalAddressRequestInput,
    OrderTaxLocationInputFullAddressInput,
    OrderTaxLocationFullAddressRequestInput,
    OrderTaxUpdateRequestInput,
    OrderTaxLocationPostalAddressRequest,
    OrderTaxLocationFullAddressRequest
} from '../declarations/types-42.js';
export type {
    RequestOptions,
    RetryOrderEditRefundResult,
    RetryOrderEditRefundResponse,
    ResourceReference,
    ResponseMeta,
    ResponseWarning,
    RemoveDiscountsRequestInput,
    RepriceDiscountsRequestInput,
    ResolveOrderInventoryExceptionRequestInput,
    RetryOrderEditRefundRequestInput
} from '../declarations/types-54.js';
export type {
    Order,
    OrderActivityListResponse,
    OrderActivity,
    OrderCharge,
    MoneyValueInput,
    OrderAuthorizationAmounts,
    MoneyValue,
    NextAction,
    OrderCalculatedChargeTaxRequestInput,
    OrderCalculatedChargeTax,
    OrderCalculatedLineItemTax,
    OrderCalculatedLineItemTaxRequestInput
} from '../declarations/types-39.js';
export type {
    OrderResponse,
    OrderPaymentAttempt,
    OrderPaymentAttemptResponse,
    OrderLineItemsListResponse,
    OrderPaymentAttemptListResponse,
    OrderListResponse,
    OrderLineItemModifier,
    OrderSettlementAmounts,
    OrderReturnCreditSettlement,
    OrderLineItemTax,
    OrderTax,
    OrderTaxCallbackEvaluation,
    OrderTaxExemption,
    OrderLineItemModifierRequestModelInput,
    OrderLineItemModifierInputCatalogRequestInput,
    OrderLineItemModifierInputTextRequestInput,
    OrderTaxCalculationRequestInput,
    OrderTaxComponentRequestInput,
    OrderTaxCalculationInputAutomaticInput,
    OrderTaxCalculationInputExternalInput,
    OrderPaymentAttemptPaymentMethodSave,
    OrderLineItemFulfillmentQuantities,
    OrderLineItemFulfillmentRequirements,
    OrderLineItemFulfillmentProfile,
    OrderLineSubscriptionOfferSummary,
    OrderLineSubscriptionOfferDiscount,
    OrderPaymentIntentSelectionInput,
    OrderPaymentIntentSelectionTokenInput,
    OrderPaymentIntentSelectionPaymentMethodInput,
    OrderPaymentIntentSelectionStripeConfirmationTokenInput,
    OrderPaymentIntentSelectionAttachedInput,
    OrderPaymentIntentSelectionReaderInput,
    OrderLineItemTaxAssignmentInput
} from '../declarations/types-41.js';
export type {
    PayOrderResult,
    PayOrderResponse,
    PaymentCollection,
    PaymentCollectionStripe,
    PaymentCollectionStripeElements,
    PaymentErrorSummary,
    PaymentAttemptGiftCardRedemption,
    PaymentAttemptPaymentIntent,
    PaymentClientAction,
    PaymentClientActionURL,
    PaymentClientActionStripe,
    PayOrderRequestInput,
    PayOrderRequestPayInput,
    PayOrderRequestConfirmPaymentIntentsInput,
    PayOrderRequestSetupInput,
    PayOrderRequestResumeInput
} from '../declarations/types-44.js';
export type { CancelOrderPaymentAttemptResponse, CancelOrderPaymentAttemptRequestInput } from '../declarations/types-4.js';
export type {
    AccessLink,
    AccessLinkResponse,
    ApplyDiscountRequestInput,
    ApplyDiscountRequestPromotionInput,
    ApplyDiscountRequestManualInput,
    Address,
    ApplyOrderGiftCardRequestInput,
    AddressRequestInput,
    AddOrderChargeRequestInput,
    AddLineItemsRequestInput,
    AddressRequest
} from '../declarations/types-0.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency, WeightRequestInput, Weight } from '../declarations/types-70.js';
export type {
    CreateOrderEditResult,
    CreateOrderEditResponse,
    CreateOrderRequestInput,
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
    CreateOrderEditRequestInput
} from '../declarations/types-11.js';
export type {
    OrderEdit,
    OrderEditResponse,
    OrderChargesListResponse,
    OrderEditListResponse,
    OrderLineItem,
    OrderDeliverySummary,
    OrderDeliveryDestination,
    OrderDeliveryDestinationRecipient,
    OrderDiscount,
    OrderGiftCardEstimate,
    OrderGiftCardAllocation,
    OrderGiftCardSettlement,
    OrderGiftCardSelection,
    OrderHandover,
    OrderDeliveryRequestInput,
    OrderDeliveryDestinationRequestInput,
    OrderDeliveryDestinationRecipientRequestInput,
    OrderHandoverRequestInput,
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderDraftLineItemTaxRequestModelInput,
    OrderDraftLineItemTaxCalculationRequestModelInput,
    OrderDraftTaxComponentRequestModelInput,
    OrderDraftTaxJurisdictionRequestModelInput,
    OrderChargeRequestInput,
    OrderChargeInputAmountInput,
    OrderChargeInputPercentInput,
    OrderEditRemovalRequestInput,
    OrderEditLineAddition,
    OrderEditChargeRefund,
    OrderEditLineRemoval,
    OrderLineItemFulfillmentComponent,
    OrderGiftCardAllocationAcceptanceInput,
    OrderChargeTaxAssignmentInput,
    OrderDeliveryDestinationRecipientRequest,
    OrderDraftLineItemInventoryDemandRequest,
    OrderEditRemovalRequest
} from '../declarations/types-40.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type {
    ManualDiscountRequestInput,
    LineItemFulfillmentRequestModelInput,
    LineItemFulfillmentOriginRequestModelInput,
    LineItemInventorySnapshot,
    LineItemInventoryDemand
} from '../declarations/types-35.js';
export type { PromotionRefRequestInput, PromotionRefInputPromotionIDInput, PromotionRefInputPromotionCodeInput } from '../declarations/types-51.js';
export type { AuthMode, BundleComponent, BundleComponentVariantSummary } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type {
    CheckoutBuyerContact,
    CategoryReference,
    CatalogPricing,
    CheckoutBuyerContactRequestInput,
    CheckoutBuyerContactRequest
} from '../declarations/types-5.js';
export type {
    CustomFieldAnswer,
    CustomFieldAnswerText,
    CustomFieldAnswerTextarea,
    CustomFieldAnswerDropdown,
    CustomFieldAnswerCheckbox
} from '../declarations/types-15.js';
export type {
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedShipmentSummary,
    ErrorRemediation,
    ExpandedPaymentIntentSummary,
    ExpandedSubscriptionSummary,
    ExpandedSubscriptionPlanSummary,
    FilesCompleteParams,
    DisputesAcceptParams
} from '../declarations/types-24.js';
export type {
    DeferredPromotion,
    DeliveryFulfillmentDetails,
    DeliveryChargeTaxCalculationRequest,
    DeliveryChargeTaxCalculationRequestModelInput
} from '../declarations/types-17.js';
export type { DeliveryRecipientResource } from '../declarations/types-21.js';
export type {
    Fulfillment,
    FulfillmentHold,
    FulfillmentChargeLink,
    FulfillmentLineItem,
    FulfillmentOutcome,
    FulfillmentRecipient
} from '../declarations/types-25.js';
export type { DigitalFulfillmentDetails, DimensionsRequestInput, Dimensions } from '../declarations/types-23.js';
export type { MetadataMap, MetadataRequestInput, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-38.js';
export type {
    TextModifierRequest,
    TaxJurisdiction,
    TaxReverseCharge,
    TextModifierRequestInput,
    TaxComponentRequestModelInput,
    TaxJurisdictionRequestModelInput,
    TaxComponentRequestRequestInput,
    TaxJurisdictionRequestInput
} from '../declarations/types-65.js';
export type {
    PricingAmounts,
    PickupFulfillmentDetails,
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject,
    PlatformFeeRequestInput
} from '../declarations/types-49.js';
export type {
    SettlementAmounts,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    SelectableOrderPaymentIntent,
    SetupCollection,
    SetupCollectionStripe,
    SelectedProductOption,
    SendOrderReceiptRequestInput,
    SendOrderReceiptRequest
} from '../declarations/types-59.js';
export type {
    InventoryRoutingSource,
    InventoryRoutingSourceRequestInput,
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput
} from '../declarations/types-30.js';
export type {
    ReadinessMerchantAccountSession,
    Refund,
    PurchasedGiftCard,
    ReaderPaymentSourceTipInput,
    ReaderPaymentSourceTip
} from '../declarations/types-52.js';
export type {
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PaymentSourceCardPresentDetails,
    PaymentRefund,
    PaymentSourceCredentialInput,
    PaymentSourceCredentialTokenInput,
    PaymentSourceCredentialPaymentMethodInput,
    PaymentSourceCredentialStripeConfirmationTokenInput,
    PaymentSourceCredentialReaderInput
} from '../declarations/types-47.js';
export type {
    SubscriptionIntervalOption,
    SubscriptionPlanLineItem,
    SubscriptionPlanLineItemBundle,
    SubscriptionPlanLineItemCustom
} from '../declarations/types-62.js';
export type { Image, ImageReferenceRequestInput, ImageReferenceRequest } from '../declarations/types-28.js';
export type { SubscriptionPlanSwapVariant, SubscriptionPlanLineItemVariant } from '../declarations/types-63.js';
export type {
    TaxComponentRequest,
    TaxBreakdown,
    TaxBreakdownPercentage,
    TaxBreakdownFlatAmount,
    TaxCalculationRequestRequestInput,
    TaxCalculationRequest,
    TaxCalculationRequestModelInput
} from '../declarations/types-64.js';
export type {
    CustomerTaxExemptionCoverage,
    CustomerTaxExemptionCoverageAllStates,
    CustomerTaxExemptionCoverageStates,
    CustomerTaxID,
    CustomerTaxExemptionCoverageRequestInput,
    CustomerTaxExemptionCoverageAllStatesRequestInput,
    CustomerTaxExemptionCoverageStatesRequestInput,
    CustomersListAddressesParams
} from '../declarations/types-16.js';
export type { TicketedEvent, Tip, TipPaymentIntentAllocation, TipValueSettlementAllocation } from '../declarations/types-66.js';
export type { CloseOrderRequestInput } from '../declarations/types-7.js';
export type {
    SubscriptionDeliveryDestinationRequestInput,
    SubscriptionDeliveryDestinationInputCustomerAddressInput,
    SubscriptionDeliveryDestinationInputAddressInput
} from '../declarations/types-61.js';
export type { DeliverySelectionRecipientRequestInput, DeliverySelectionRecipientRequest } from '../declarations/types-22.js';
export type {
    GiftCardPurchaseDetailsRequestInput,
    GiftCardPurchaseRecipientRequestInput,
    GiftCardPurchaseSnapshot,
    GiftCardProductConfiguration,
    GiftCardPurchaseRecipient,
    GiftCardPurchaseRecipientPatchRequestInput
} from '../declarations/types-27.js';
export type {
    SubscribedLineRequestModelInput,
    SplitReversalReference,
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    StripeTerminalPaymentIntentClientAction,
    SubscribedLine
} from '../declarations/types-60.js';
export type {
    RefundChargeInput,
    RefundDestinationsInput,
    RefundLineItemAllocation,
    RefundLineItemAdjustmentRefund,
    RefundLineItemAdjustment,
    RefundAdjustmentReason,
    RefundLineItemAutomaticRefund,
    RefundLineItemModifierAllocation,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation,
    RefundUnissuedGiftCardRecovery
} from '../declarations/types-53.js';
export type { GiftCardCustomAmountBounds } from '../declarations/types-26.js';
export type { PaymentSplitRequestInput } from '../declarations/types-48.js';
export type { UpdateOrderRequestInput, UpdateOrderChargeRequestInput, UpdateLineItemRequestInput } from '../declarations/types-67.js';
export {
    makeAddLineItemsRequest,
    makeAddOrderChargeRequest,
    makeAddressRequest,
    makeApplyDiscountRequest,
    makeApplyDiscountRequestManual,
    makeApplyDiscountRequestPromotion,
    makeApplyOrderGiftCardRequest
} from '../declarations/types-70.js';
export { makeCancelOrderPaymentAttemptRequest, makeCheckoutBuyerContactRequest, makeCloseOrderRequest } from '../declarations/types-71.js';
export {
    makeCreateOrderDiscount,
    makeCreateOrderDiscountManual,
    makeCreateOrderDiscountPromotion,
    makeCreateOrderEditRequest,
    makeCreateOrderLineItemInputBundle,
    makeCreateOrderLineItemInputCustom,
    makeCreateOrderLineItemInputVariant,
    makeCreateOrderLineItemRequest
} from '../declarations/types-73.js';
export { makeCreateOrderRequest, makeCreateOrderTip, makeCreateOrderTipAmount, makeCreateOrderTipPercent } from '../declarations/types-74.js';
export {
    makeCustomerTaxExemptionCoverageAllStatesRequest,
    makeCustomerTaxExemptionCoverageRequest,
    makeCustomerTaxExemptionCoverageStatesRequest,
    makeDeliveryChargeTaxCalculationRequestModel
} from '../declarations/types-75.js';
export { makeDeliverySelectionRecipientRequest } from '../declarations/types-76.js';
export {
    makeDimensionsRequest,
    makeGiftCardPurchaseDetailsRequest,
    makeGiftCardPurchaseRecipientPatchRequest,
    makeGiftCardPurchaseRecipientRequest,
    makeImageReferenceRequest,
    makeInventoryRoutingSourceInputFixedLocation,
    makeInventoryRoutingSourceInputPolicy,
    makeInventoryRoutingSourceInputPolicyRevision,
    makeInventoryRoutingSourceRequest
} from '../declarations/types-77.js';
export {
    makeLineItemFulfillmentOriginRequestModel,
    makeLineItemFulfillmentRequestModel,
    makeManualDiscountRequest
} from '../declarations/types-78.js';
export {
    makeMetadataPatchRequest,
    makeMetadataRequest,
    makeMoneyValue,
    makeOrderCalculatedChargeTaxRequest,
    makeOrderCalculatedLineItemTaxRequest,
    makeOrderChargeInputAmount,
    makeOrderChargeInputPercent,
    makeOrderChargeRequest,
    makeOrderChargeTaxAssignment,
    makeOrderDeliveryDestinationRecipientRequest,
    makeOrderDeliveryDestinationRequest,
    makeOrderDeliveryRequest,
    makeOrderDraftLineItemInventoryDemandRequest,
    makeOrderDraftLineItemTaxCalculationRequestModel,
    makeOrderDraftLineItemTaxRequestModel,
    makeOrderDraftTaxComponentRequestModel,
    makeOrderDraftTaxJurisdictionRequestModel,
    makeOrderEditRemovalRequest,
    makeOrderGiftCardAllocationAcceptance,
    makeOrderHandoverRequest,
    makeOrderLineItemModifierInputCatalogRequest,
    makeOrderLineItemModifierInputTextRequest,
    makeOrderLineItemModifierRequestModel,
    makeOrderLineItemTaxAssignment,
    makeOrderPaymentIntentSelection,
    makeOrderPaymentIntentSelectionAttached,
    makeOrderPaymentIntentSelectionPaymentMethod,
    makeOrderPaymentIntentSelectionReader,
    makeOrderPaymentIntentSelectionStripeConfirmationToken,
    makeOrderPaymentIntentSelectionToken,
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
    makeOrderTaxLocationRequest
} from '../declarations/types-79.js';
export {
    makeOrderTaxRequest,
    makeOrderTaxUpdateRequest,
    makePaymentSourceCredential,
    makePaymentSourceCredentialPaymentMethod,
    makePaymentSourceCredentialReader,
    makePaymentSourceCredentialStripeConfirmationToken,
    makePaymentSourceCredentialToken,
    makePaymentSplitRequest,
    makePayOrderRequest,
    makePayOrderRequestConfirmPaymentIntents,
    makePayOrderRequestPay,
    makePayOrderRequestResume,
    makePayOrderRequestSetup,
    makePlatformFeeRequest
} from '../declarations/types-80.js';
export {
    makePromotionRefInputPromotionCode,
    makePromotionRefInputPromotionID,
    makePromotionRefRequest,
    makeReaderPaymentSourceTip,
    makeRefundCharge,
    makeRefundDestinations,
    makeRemoveDiscountsRequest,
    makeRepriceDiscountsRequest,
    makeResolveOrderInventoryExceptionRequest,
    makeRetryOrderEditRefundRequest
} from '../declarations/types-81.js';
export { makeSendOrderReceiptRequest, makeSubscribedLineRequestModel } from '../declarations/types-82.js';
export {
    makeSubscriptionDeliveryDestinationInputAddress,
    makeSubscriptionDeliveryDestinationInputCustomerAddress,
    makeSubscriptionDeliveryDestinationRequest,
    makeTaxCalculationRequestModel,
    makeTaxCalculationRequestRequest,
    makeTaxComponentRequestModel,
    makeTaxComponentRequestRequest,
    makeTaxJurisdictionRequest,
    makeTaxJurisdictionRequestModel,
    makeTextModifierRequest
} from '../declarations/types-83.js';
export { makeUpdateLineItemRequest, makeUpdateOrderChargeRequest, makeUpdateOrderRequest } from '../declarations/types-84.js';
export { makeWeightRequest } from '../declarations/types-85.js';
export interface OrdersResource {
    /**
 * Applies a promotion-backed or manual discount to an order. Checkout-authenticated buyers must
 * provide a promotion code; resource IDs and manual discounts require merchant authentication.
 *
 * `POST /v1/orders/{order_id}/discounts`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#applyOrderDiscount
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.applyDiscount("ord_01KEZF7C0054GQKJ142A8X367A", {promotion: {promotion_id:
 * "promo_01KEZF7C00QQ8EZ74BDYSZ315V"}}, { idempotencyKey: idempotencyKey })
 */
    applyDiscount(order_id: InputValue<string>, params: OrdersApplyDiscountParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Selects a gift card by its current code and returns masked selections and an unreserved
 * estimate. No value is held or debited. Optional expected_version must match the order version
 * returned by the last read. An order may select at most 20 gift cards. Gift card value cannot pay
 * for subscription orders. Retry a lost response with the same idempotency key to recover the
 * original selection result.
 *
 * `POST /v1/orders/{order_id}/gift-cards`
 * @param order_id Order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#applyOrderGiftCard
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.applyGiftCard("ord_01KEZF7C0054GQKJ142A8X367A", {code: "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    applyGiftCard(order_id: InputValue<string>, params: OrdersApplyGiftCardParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Cancels an active order payment attempt, its unsettled payment legs, and its attempt-owned holds.
 *
 * `POST /v1/orders/{order_id}/payment-attempts/{order_payment_attempt_id}/cancel`
 * @param order_id Flint order ID.
 * @param order_payment_attempt_id Flint order payment attempt ID.
 * @see https://developers.withflintpay.com/docs/api/orders#cancelOrderPaymentAttempt
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.cancelPaymentAttempt("ord_01KEZF7C0054GQKJ142A8X367A",
 * "opat_01KEZF7C00B5PW9F2R8A4YSH5D", undefined, { idempotencyKey: idempotencyKey })
 */
    cancelPaymentAttempt(order_id: InputValue<string>, order_payment_attempt_id: InputValue<string>, params?: OrdersCancelPaymentAttemptParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<PayOrderResult, CancelOrderPaymentAttemptResponse>>;
    /**
 * Closes an open order and stops further payment. Cancels pending discounts, releases their
 * reservations, and recalculates totals; canceled discounts remain visible with status: "canceled"
 * but no longer reduce the total. Unused order-owned payment intents are canceled. When collected
 * money remains refundable, send collected_money_behavior: keep to close and keep it, or refund it
 * first with `client.refunds.create` and order_id. Closing does not refund money; refunds remain
 * available afterwards. Closing is blocked while payment collection is in progress. To complete a
 * zero-balance order as paid, use `client.orders.pay`. closed_reason and closed_at record why and
 * when the order closed. The request body is optional. Send expected_version to reject a mutation
 * based on an outdated order read.
 *
 * `POST /v1/orders/{order_id}/close`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#closeOrder
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.close("ord_01KEZF7C0054GQKJ142A8X367A", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    close(order_id: InputValue<string>, params?: OrdersCloseParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Creates an order for the authenticated merchant. For USD orders, an effective requested tip may
 * be up to the larger of $1,000 or 100% of the post-discount merchandise subtotal.
 *
 * `POST /v1/orders`
 * @see https://developers.withflintpay.com/docs/api/orders#createOrder
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.create({line_items: [{type: "variant", variant_id:
 * "var_01KEZF7C004GSH2KT8CNYVMHGX"}]}, { idempotencyKey: idempotencyKey })
 */
    create(params: OrdersCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Creates the link Flint's receipt email carries, to put in buyer email or messages you send
 * yourself. It opens the order in your Flint-hosted customer account without a sign-in, and lets
 * the buyer have the receipt sent again to the order's email. It works for 30 days or 10 opens,
 * whichever comes first; after that the buyer signs in to see the order. The url is a bearer
 * credential. Flint returns it only in this response and in a retry with the same idempotency key,
 * so send it only to the buyer and keep it out of logs. A call with a new key creates another
 * link; earlier links keep working until they expire. When customer_account.mode is
 * merchant_hosted it fails with `ACTION_NOT_ALLOWED` and reason
 * `merchant_hosted_customer_accounts`, and for an order without a customer, with reason
 * `configuration_required`. Dashboard sessions may create links when the staff member can view
 * orders. Send no request body or an empty object ({}). Idempotency is scoped to the merchant,
 * credential, environment, and this resource's route. A replay returns the original link without
 * extending its lifetime or replenishing its opens. Without an idempotency key, each call creates
 * a new link and has no replay result. If Flint cannot retain a result after minting, contact
 * support with the request ID before sending a new request.
 *
 * `POST /v1/orders/{order_id}/access-links`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#createOrderAccessLink
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.createAccessLink("ord_01KEZF7C0054GQKJ142A8X367A", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    createAccessLink(order_id: InputValue<string>, params?: OrdersCreateAccessLinkParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<AccessLink, AccessLinkResponse>>;
    /**
 * Adds a service charge, fee, or surcharge to an order.
 *
 * `POST /v1/orders/{order_id}/charges`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#createOrderCharge
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.createCharge("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", {charge: {amount_money: {amount:
 * "100", currency: "USD"}, calculation_type: "amount", name: "example", type: "service_fee"}}, {
 * idempotencyKey: idempotencyKey })
 */
    createCharge(order_id: InputValue<string>, params: OrdersCreateChargeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Removes unassigned units from a paid order, adds items the removed value and released charges
 * pay for, or does both, and queues any remaining refund atomically. Removed value and released
 * charges pay for added lines first; only the remainder is refunded. Added lines are priced and
 * taxed as usual, without promotions, and must be variant, bundle, or custom lines with a delivery
 * requirement. They do not join the order's delivery selection. An edit that would leave a balance
 * due writes nothing and returns LIMIT_EXCEEDED with reason order_edit_balance_due, with
 * maximum_money equal to the removed value plus released charges. Bundle components must all be
 * unassigned; dispatched quantities use Returns. Original quantities and pricing remain the sale
 * record. The edit, added stock commitments, committed tax, and release of removed stock commit
 * together; refund processing can continue afterward. Invoice-collected, subscription-owned,
 * return-owned, disputed orders and unresolved inventory exceptions cannot be edited. Charges
 * change only through charge_refunds. A zero-value edit creates no refund. Refund processing may
 * still be pending, so refunds can be empty and refund.created follows later. Refund failures
 * leave this immutable edit recorded. When supported_actions contains retry, use
 * `client.orders.retryEditRefund` to refund the remaining money. On VERSION_CONFLICT, keep the
 * draft, fetch the order, preview again, and reconcile it before committing with the new
 * expected_order_version and a new key. Retry a lost response with the original Idempotency-Key
 * and unchanged body: Flint recovers the committed edit and its current order and refunds, without
 * repeating the edit. If recovery cannot complete, retain the key and request ID for support; do
 * not change keys to retry an uncertain result.
 *
 * `POST /v1/orders/{order_id}/edits`
 * @param order_id The order that owns the edit.
 * @see https://developers.withflintpay.com/docs/api/orders#createOrderEdit
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.createEdit("ord_01KEZF7C0054GQKJ142A8X367A", {expected_order_version: 1,
 * remove_line_items: [{order_line_item_id: "li_01KEZF7C008YPRCK7VDKTGWR31", quantity: 1}]}, {
 * idempotencyKey: idempotencyKey })
 */
    createEdit(order_id: InputValue<string>, params: OrdersCreateEditParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CreateOrderEditResult, CreateOrderEditResponse>>;
    /**
 * Adds one or more line items to an order.
 *
 * `POST /v1/orders/{order_id}/line-items`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#createOrderLineItems
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.createLineItems("ord_01KEZF7C0054GQKJ142A8X367A", {line_items: [{type: "variant",
 * variant_id: "var_01KEZF7C004GSH2KT8CNYVMHGX"}]}, { idempotencyKey: idempotencyKey })
 */
    createLineItems(order_id: InputValue<string>, params: OrdersCreateLineItemsParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Removes a single service charge, fee, or surcharge from an order.
 *
 * `DELETE /v1/orders/{order_id}/charges/{order_charge_id}`
 * @param order_id Flint order ID.
 * @param order_charge_id Flint order charge ID.
 * @see https://developers.withflintpay.com/docs/api/orders#deleteOrderCharge
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.deleteCharge("ord_01KEZF7C0054GQKJ142A8X367A", "och_01KEZF7C00XX8AKACP0GHKFWWT",
 * {}, { idempotencyKey: idempotencyKey })
 */
    deleteCharge(order_id: InputValue<string>, order_charge_id: InputValue<string>, params?: OrdersDeleteChargeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Removes a single line item from an order.
 *
 * `DELETE /v1/orders/{order_id}/line-items/{order_line_item_id}`
 * @param order_id Flint order ID.
 * @param order_line_item_id Flint order line item ID.
 * @see https://developers.withflintpay.com/docs/api/orders#deleteOrderLineItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.deleteLineItem("ord_01KEZF7C0054GQKJ142A8X367A", "li_01KEZF7C008YPRCK7VDKTGWR31",
 * {}, { idempotencyKey: idempotencyKey })
 */
    deleteLineItem(order_id: InputValue<string>, order_line_item_id: InputValue<string>, params?: OrdersDeleteLineItemParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Returns a single order by ID.
 *
 * `GET /v1/orders/{order_id}`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#getOrder
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.orders.get("ord_01KEZF7C0054GQKJ142A8X367A")
 */
    get(order_id: InputValue<string>, params?: OrdersGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Returns an immutable edit with its frozen refund amounts and current refund IDs. The internal
 * note is visible to merchant callers only.
 *
 * `GET /v1/orders/{order_id}/edits/{order_edit_id}`
 * @param order_id The order that owns the edit.
 * @param order_edit_id The edit belonging to this order.
 * @see https://developers.withflintpay.com/docs/api/orders#getOrderEdit
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.orders.getEdit("ord_01KEZF7C0054GQKJ142A8X367A", "oed_01KEZF7C00A6BQ4TBGWFDJ944A")
 */
    getEdit(order_id: InputValue<string>, order_edit_id: InputValue<string>, params?: OrdersGetEditParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<OrderEdit, OrderEditResponse>>;
    /**
 * Returns one durable payment attempt for the order. Checkout-session callers can read only
 * attempts created by their own session.
 *
 * `GET /v1/orders/{order_id}/payment-attempts/{order_payment_attempt_id}`
 * @param order_id Flint order ID.
 * @param order_payment_attempt_id Flint order payment attempt ID.
 * @see https://developers.withflintpay.com/docs/api/orders#getOrderPaymentAttempt
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.orders.getPaymentAttempt("ord_01KEZF7C0054GQKJ142A8X367A",
 * "opat_01KEZF7C00B5PW9F2R8A4YSH5D")
 */
    getPaymentAttempt(order_id: InputValue<string>, order_payment_attempt_id: InputValue<string>, params?: OrdersGetPaymentAttemptParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<OrderPaymentAttempt, OrderPaymentAttemptResponse>>;
    /**
 * Downloads a numbered receipt for an order with collected money, covering successful payment
 * intents and gift card redemptions, including payments and refunds. Orders paid only by manual
 * cash, check, or wire invoice payments return 409 ACTION_NOT_ALLOWED with reason
 * unsupported_state; download the invoice PDF instead. Mixed orders list only successful payment
 * intents and gift card redemptions. Available under either order_receipts email delivery mode.
 * Buyer and seller identity is frozen on the first snapshot write; payments, refunds, and branding
 * are current.
 *
 * `GET /v1/orders/{order_id}/receipt-pdf`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#getOrderReceiptPDF
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.orders.getReceiptPDF("ord_01KEZF7C0054GQKJ142A8X367A")
 */
    getReceiptPDF(order_id: InputValue<string>, params?: OrdersGetReceiptPDFParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<Result<OrdersGetReceiptPDFResponse>>;
    /**
 * Returns a read-only, human-readable history log for an order. Use it to render timelines and
 * debug what happened, not as a source of truth, ledger, or webhook replacement. Read the owning
 * resource for authoritative state: the order for balances and status, the payment for payment
 * state, the refund for refund outcomes, and the checkout session for checkout state. Do not sum
 * balance_delta_money to compute an order balance. Informational rows such as payment_failed,
 * refund_failed, and checkout_session_expired have a zero balance delta. The default order is
 * newest first. Use sort_direction=asc for chronological timeline rendering. A typical
 * chronological log might show created, payment_failed, payment, refund, then refund_failed; each
 * row gives one reference to click through for the authoritative resource. Default order:
 * created_at descending, then order_activity_id descending.
 *
 * `GET /v1/orders/{order_id}/activities`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#listOrderActivities
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.orders.listActivities("ord_01KEZF7C0054GQKJ142A8X367A")
 */
    listActivities(order_id: InputValue<string>, params?: OrdersListActivitiesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<OrderActivityListResponse, OrderActivityListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/orders#listOrderActivities
     */
    listActivitiesPages(order_id: InputValue<string>, params?: OrdersListActivitiesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<OrderActivityListResponse, OrderActivityListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/orders#listOrderActivities
     */
    listActivitiesItems(order_id: InputValue<string>, params?: OrdersListActivitiesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<OrderActivity>;
    /**
 * Returns the order's charges sorted by ID in ascending order. Default order: order_charge_id
 * ascending.
 *
 * `GET /v1/orders/{order_id}/charges`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#listOrderCharges
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.orders.listCharges("ord_01KEZF7C0054GQKJ142A8X367A")
 */
    listCharges(order_id: InputValue<string>, params?: OrdersListChargesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<OrderChargesListResponse, OrderChargesListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/orders#listOrderCharges
     */
    listChargesPages(order_id: InputValue<string>, params?: OrdersListChargesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<OrderChargesListResponse, OrderChargesListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/orders#listOrderCharges
     */
    listChargesItems(order_id: InputValue<string>, params?: OrdersListChargesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<OrderCharge>;
    /**
 * Lists immutable edits for this order, newest created_at first, with descending order_edit_id as
 * the tiebreaker. Defaults to 20 results. Keep filters unchanged when using a page token. Default
 * order: created_at descending, then order_edit_id descending.
 *
 * `GET /v1/orders/{order_id}/edits`
 * @param order_id The order that owns the edit.
 * @see https://developers.withflintpay.com/docs/api/orders#listOrderEdits
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.orders.listEdits("ord_01KEZF7C0054GQKJ142A8X367A")
 */
    listEdits(order_id: InputValue<string>, params?: OrdersListEditsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<OrderEditListResponse, OrderEditListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/orders#listOrderEdits
     */
    listEditsPages(order_id: InputValue<string>, params?: OrdersListEditsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<OrderEditListResponse, OrderEditListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/orders#listOrderEdits
     */
    listEditsItems(order_id: InputValue<string>, params?: OrdersListEditsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<OrderEdit>;
    /**
 * Returns the order's line items sorted by ID in ascending order. Default order:
 * order_line_item_id ascending.
 *
 * `GET /v1/orders/{order_id}/line-items`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#listOrderLineItems
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.orders.listLineItems("ord_01KEZF7C0054GQKJ142A8X367A")
 */
    listLineItems(order_id: InputValue<string>, params?: OrdersListLineItemsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<OrderLineItemsListResponse, OrderLineItemsListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/orders#listOrderLineItems
     */
    listLineItemsPages(order_id: InputValue<string>, params?: OrdersListLineItemsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<OrderLineItemsListResponse, OrderLineItemsListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/orders#listOrderLineItems
     */
    listLineItemsItems(order_id: InputValue<string>, params?: OrdersListLineItemsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<OrderLineItem>;
    /**
 * Returns payment attempts for the order, newest first. Checkout-session callers see only attempts
 * created by their own session. A list filtered by idempotency_key omits pending_actions; read the
 * attempt by ID to get them. Default order: started_at descending, then order_payment_attempt_id
 * descending.
 *
 * `GET /v1/orders/{order_id}/payment-attempts`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#listOrderPaymentAttempts
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.orders.listPaymentAttempts("ord_01KEZF7C0054GQKJ142A8X367A")
 */
    listPaymentAttempts(order_id: InputValue<string>, params?: OrdersListPaymentAttemptsParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<OrderPaymentAttemptListResponse, OrderPaymentAttemptListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/orders#listOrderPaymentAttempts
     */
    listPaymentAttemptsPages(order_id: InputValue<string>, params?: OrdersListPaymentAttemptsParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<WithResponseInfo<OrderPaymentAttemptListResponse, OrderPaymentAttemptListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/orders#listOrderPaymentAttempts
     */
    listPaymentAttemptsItems(order_id: InputValue<string>, params?: OrdersListPaymentAttemptsParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<OrderPaymentAttempt>;
    /**
 * Returns a paginated list of orders for the authenticated merchant. Default order: created_at
 * descending, then order_id descending.
 *
 * `GET /v1/orders`
 * @see https://developers.withflintpay.com/docs/api/orders#listOrders
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.orders.list()
 */
    list(params?: OrdersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<OrderListResponse, OrderListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/orders#listOrders
     */
    listPages(params?: OrdersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<OrderListResponse, OrderListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/orders#listOrders
     */
    listItems(params?: OrdersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Order>;
    /**
 * Starts or resumes a payment attempt on the order. Starting a subscription requires
 * buyer_contact.email or an email already saved on the checkout session or order. Set action to
 * pay to charge the full outstanding balance, confirm_payment_intents to confirm order-owned
 * payment intents, setup to save a newly collected token on a zero-balance order, or resume to
 * continue an attempt after a pending client action. Each action accepts only its own fields. Only
 * confirm_payment_intents accepts completion_behavior. A pay action without payment_source is
 * valid only when the outstanding balance is zero. To continue a resumable attempt, send action:
 * resume with order_payment_attempt_id and a new Idempotency-Key. A Tap to Pay reader returns
 * requires_action, is_resumable true, and a card_presentment pending action with
 * stripe.terminal_payment_intent authority for the Stripe Terminal SDK. After the app collects and
 * confirms, resume reads the outcome: authorization or capture applies it, processing keeps the
 * attempt processing, and no card or a decline keeps it requires_action with the same authority. A
 * decline updates last_payment_error without ending the attempt; cancel to give up. An exact retry
 * of the original request with its Idempotency-Key returns the stored response if the request
 * completed, or recovers the same attempt if it was interrupted. Payment intents with manual
 * capture return an active authorization instead of settling immediately. A replay preserves the
 * original HTTP status and domain result. Replays return no URL token or Stripe client secret;
 * pending_actions is empty when action authority was stripped. Read the attempt to recover its
 * current permitted actions. Read `client.orders.getPaymentAttempt` for the attempt's current
 * state.
 *
 * `POST /v1/orders/{order_id}/pay`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#payOrder
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.pay("ord_01KEZF7C0054GQKJ142A8X367A", {action: "pay"}, { idempotencyKey:
 * idempotencyKey })
 */
    pay(order_id: InputValue<string>, params: OrdersPayParams, options: _SdkRequiredIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<PayOrderResult, PayOrderResponse>>;
    /**
 * Removes pending applied discounts or deferred promotions from an order. Send at least one ID
 * across order_discount_ids and deferred_promotion_ids. Deferred promotions can be removed before
 * payment. Redeemed or canceled discounts are settlement history and cannot be removed.
 *
 * `POST /v1/orders/{order_id}/discounts/remove`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#removeOrderDiscounts
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.removeDiscounts("ord_01KEZF7C0054GQKJ142A8X367A", {order_discount_ids:
 * ["ad_01JFXH8Z2K7QF9V3MB0N4T6RCP"]}, { idempotencyKey: idempotencyKey })
 */
    removeDiscounts(order_id: InputValue<string>, params: OrdersRemoveDiscountsParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Removes a selected gift card without moving value. The expected_version must still match the
 * order version. Selections cannot change during an active payment attempt. Retry a lost response
 * with the same idempotency key to recover the original selection result.
 *
 * `DELETE /v1/orders/{order_id}/gift-cards/{gift_card_id}`
 * @param order_id Order ID.
 * @param gift_card_id Selected gift card ID.
 * @see https://developers.withflintpay.com/docs/api/orders#removeOrderGiftCard
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.removeGiftCard("ord_01KEZF7C0054GQKJ142A8X367A", "gc_01KEZF7C00RT1618WYBM1Y94CG",
 * {expected_version: 1}, { idempotencyKey: idempotencyKey })
 */
    removeGiftCard(order_id: InputValue<string>, gift_card_id: InputValue<string>, params: OrdersRemoveGiftCardParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Recalculates pending discounts and automatic promotions for a mutable order. The request body is
 * optional. Send expected_version to reject a mutation based on an outdated order read.
 *
 * `POST /v1/orders/{order_id}/discounts/reprice`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#repriceOrderDiscounts
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.repriceDiscounts("ord_01KEZF7C0054GQKJ142A8X367A", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    repriceDiscounts(order_id: InputValue<string>, params?: OrdersRepriceDiscountsParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Marks a paid inventory failure as resolved after an operator has completed manual inventory
 * remediation.
 *
 * `POST /v1/orders/{order_id}/resolve-inventory-exception`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#resolveOrderInventoryException
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.resolveInventoryException("ord_01KEZF7C0054GQKJ142A8X367A", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    resolveInventoryException(order_id: InputValue<string>, params?: OrdersResolveInventoryExceptionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Refunds the edit's remaining frozen money after refund processing has failed. Pending and
 * succeeded linked refunds count toward the edit's refunded value. Omit the body or destinations
 * to reuse the edit's original destinations. Retry is unavailable while a linked refund is
 * pending, when nothing remains, or when a payment is disputed. While Flint is still processing
 * the original refund and no linked refund exists, supported_actions is empty and retry returns
 * in_progress. If processing ends without creating a refund, retry becomes available. Use a new
 * Idempotency-Key for a new retry attempt, and the same key and body to recover its lost response.
 * The response contains only refunds created by this attempt.
 *
 * `POST /v1/orders/{order_id}/edits/{order_edit_id}/retry`
 * @param order_id The order that owns the edit.
 * @param order_edit_id The edit belonging to this order.
 * @see https://developers.withflintpay.com/docs/api/orders#retryOrderEditRefund
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.retryEditRefund("ord_01KEZF7C0054GQKJ142A8X367A",
 * "oed_01KEZF7C00A6BQ4TBGWFDJ944A", undefined, { idempotencyKey: idempotencyKey })
 */
    retryEditRefund(order_id: InputValue<string>, order_edit_id: InputValue<string>, params: OrdersRetryEditRefundParams | undefined, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<RetryOrderEditRefundResult, RetryOrderEditRefundResponse>>;
    /**
 * Queues a receipt for a paid order, including gift card payments and settled payments, and
 * returns the order unchanged. Send email to choose a recipient, or omit it to use the order's
 * email. If no receipt email is on file, email is required when your credential can set it.
 * Otherwise, the request returns ACTION_NOT_ALLOWED with reason configuration_required. Requires
 * Flint-managed receipt delivery. Sending is limited to once every five minutes per order and
 * normalized recipient. Checkout credentials can send only to the address on file. If no address
 * is on file, checkout credentials can send to at most three distinct addresses over the order's
 * lifetime. Receipts sent for this order through this route count toward this limit, including
 * failed deliveries and receipts sent with a secret API key. Merchant callers can choose any
 * address.
 *
 * `POST /v1/orders/{order_id}/send-receipt`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#sendOrderReceipt
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.sendReceipt("ord_01KEZF7C0054GQKJ142A8X367A", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    sendReceipt(order_id: InputValue<string>, params?: OrdersSendReceiptParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Applies a sparse update to mutable order fields such as customer_id, notes, metadata, tax, the
 * delivery destination, and the requested tip. catalog_price_behavior defaults to keep. Send
 * reprice with an explicit non-null customer_id to refresh every catalog variant line on an open,
 * unpaid order; reassignment resolves the new customer’s direct list, then segment list, then
 * variant prices. Customer removal is not supported. Checkout verification never reprices existing
 * lines. A request containing only metadata, internal_note, buyer_note, or external_reference_id,
 * with optional expected_version, can update open, closed, paid, and invoice-locked orders without
 * changing totals. Other merchant edits keep hosted and headless checkout sessions open unless an
 * edit closes or completes the order, which ends the session with order_mutated. Edits can also
 * end invoice, return-resolution, and subscription-plan sessions with order_mutated. A session
 * already past expires_at ends with expired before the edit is applied. These annotation updates
 * are blocked while any order payment attempt remains non-terminal, including an authorization
 * awaiting capture, or checkout payment work is still resolving. Requests combining annotations
 * with other fields use the financial mutation rules for the entire request. Send requested_tip:
 * null to clear the current requested tip. Once a payment's capture sets its own tip with
 * tip_money, the order's tip is set per payment: setting or clearing requested_tip returns
 * ACTION_NOT_ALLOWED with reason payment_collected. A merchant can correct a paid subscription
 * signup or renewal destination before shipment by sending delivery_destination and the current
 * order version as expected_version. The committed delivery methods must remain eligible, and
 * shipping and tax totals must stay unchanged. When the correction would change the paid totals,
 * the request fails with `ACTION_NOT_ALLOWED` and reason `payment_collected`. The detail can
 * include shipping_money, requoted_shipping_money, tax_money, and requoted_tax_money.
 *
 * `PATCH /v1/orders/{order_id}`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#updateOrder
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.update("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", {buyer_note: "Please include a gift
 * receipt"}, { idempotencyKey: idempotencyKey })
 */
    update(order_id: InputValue<string>, params: OrdersUpdateParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Updates a single service charge, fee, or surcharge on an order.
 *
 * `PATCH /v1/orders/{order_id}/charges/{order_charge_id}`
 * @param order_id Flint order ID.
 * @param order_charge_id Flint order charge ID.
 * @see https://developers.withflintpay.com/docs/api/orders#updateOrderCharge
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.updateCharge("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", "och_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * {name: "Priority delivery"}, { idempotencyKey: idempotencyKey })
 */
    updateCharge(order_id: InputValue<string>, order_charge_id: InputValue<string>, params: OrdersUpdateChargeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Updates a single line item on an order. On paid orders, send expected_ship_date as a YYYY-MM-DD
 * calendar date or null to clear it. It must be the only field apart from expected_version.
 * expected_version is the order version returned in data.version. Send gift_card_face_value_money
 * and expected_version to select an unpaid gift card line's face value within its frozen offer and
 * reprice the order before any purchase funding. Send gift_card_recipient and expected_version to
 * replace or clear recipient delivery details before any purchase funding. Checkout credentials
 * can update gift card face value and recipient details together, modifiers, or a line
 * subscription offer selection, each with expected_version. Repeating the current gift card face
 * value does not change the order version. Set subscription to null to buy the line once.
 *
 * `PATCH /v1/orders/{order_id}/line-items/{order_line_item_id}`
 * @param order_id Flint order ID.
 * @param order_line_item_id Flint order line item ID.
 * @see https://developers.withflintpay.com/docs/api/orders#updateOrderLineItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.updateLineItem("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", "li_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * {name: "Gift item"}, { idempotencyKey: idempotencyKey })
 */
    updateLineItem(order_id: InputValue<string>, order_line_item_id: InputValue<string>, params: OrdersUpdateLineItemParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly orders: OrdersResource;
}
