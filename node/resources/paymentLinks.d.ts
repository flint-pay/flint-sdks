import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { PaymentLink } from '../declarations/types-52.js';
import type {
    PaymentLinkListResponse,
    PaymentLinkResponse,
    PaymentLinksCreateParams,
    PaymentLinksGetParams,
    PaymentLinksGetPublicParams,
    PaymentLinksListParams,
    PaymentLinksResolveParams,
    PaymentLinksUpdateParams
} from '../declarations/types-53.js';
import type { PublicPaymentLinkResponse, PublicPaymentLinkResult } from '../declarations/types-59.js';
import type { RequestOptions, ResolvePaymentLinkResponse, ResolvedPaymentLinkCheckout } from '../declarations/types-62.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-80.js';
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
    PaymentLinksCreateParams,
    PaymentLinkResponse,
    PaymentLinksGetParams,
    PaymentLinksGetPublicParams,
    PaymentLinksListParams,
    PaymentLinkListResponse,
    PaymentLinksResolveParams,
    PaymentLinksUpdateParams,
    PaymentLinkLineItemRequestInput,
    PaymentLinkPaymentConfigInput,
    PaymentLinkThemeConfigInput,
    PaymentLinkLineItemVariant,
    PaymentLinkSalesSummary,
    PaymentLinkProductOption,
    PaymentLinkProductOptionValue,
    PaymentLinkSubscriptionPreview,
    PaymentLinkResolvePrefillRequestInput,
    PaymentLinkLineItemPatchRequestInput,
    PaymentLinkPaymentPatchRequestInput,
    PaymentLinkRedirectsPatchRequestInput,
    PaymentLinkThemePatchRequestInput,
    PaymentLinkRedirectsPatchRequest,
    PaymentLinkThemePatchRequest
} from '../declarations/types-53.js';
export type {
    RequestOptions,
    ResolvedPaymentLinkCheckout,
    ResolvePaymentLinkResponse,
    ResponseMeta,
    ResponseWarning,
    ResourceReference,
    ResolvePaymentLinkRequestInput,
    ResolvePaymentLinkLineItemModifiersInput,
    ResolvePaymentLinkLineItemModifierRequestInput,
    ResolvePaymentLinkTextModifierRequestInput,
    ResolvePaymentLinkLineItemModifierInputCatalogInput,
    ResolvePaymentLinkLineItemModifierInputTextInput
} from '../declarations/types-62.js';
export type {
    PaymentLink,
    PaymentLinkCustomFieldRequestInput,
    PaymentLinkCustomTextConfigInput,
    PaymentLinkEventConfigRequestInput,
    PaymentLinkLegalConfigInput,
    PaymentLinkLineItemInputVariantInput,
    PaymentLinkLineItemInputBundleInput,
    PaymentLinkLineItemInputCustomFixedInput,
    PaymentLinkLineItemInputCustomVariableInput,
    PaymentLinkCustomField,
    PaymentLinkEventConfig,
    PaymentLinkLineItem,
    PaymentLinkLineItemBundle,
    PaymentLinkLineItemCustomFixed,
    PaymentLinkLineItemCustomVariable,
    PaymentLinkAvailableVariant,
    PaymentLinkCustomFieldPatchRequestInput,
    PaymentLinkCustomTextPatchRequestInput,
    PaymentLinkEventConfigPatchRequestInput,
    PaymentLinkLegalPatchRequestInput,
    PaymentLinkLineItemPatchInputVariantInput,
    PaymentLinkLineItemPatchInputBundleInput,
    PaymentLinkLineItemPatchInputCustomFixedInput,
    PaymentLinkLineItemPatchInputCustomVariableInput,
    PaymentLinkCustomTextPatchRequest
} from '../declarations/types-52.js';
export type { _SdkWithoutIdempotency, Weight } from '../declarations/types-80.js';
export type {
    PublicPaymentLinkResult,
    PublicPaymentLinkResponse,
    PublicPaymentLink,
    PublicResolvedLineItemInfo,
    PublicResolvedModifierGroup,
    PublicResolvedModifierOption,
    QuantityPriceBreak,
    PublicResolvedBundleComponent,
    PurchasedGiftCard
} from '../declarations/types-59.js';
export type {
    ClientOptions,
    CheckoutTaxConfigRequestInput,
    CheckoutTaxCalculationRequestInput,
    CheckoutTipConfigRequestInput,
    CheckoutTaxConfig,
    CheckoutTaxCalculation,
    CheckoutTipConfig,
    CheckoutTheme,
    CheckoutSubscriptionTermsRequestInput,
    CheckoutSubscriptionTerms,
    CheckoutSubscriptionPricePhase,
    CheckoutSubscriptionRecurringShipping,
    CheckoutSessionTax
} from '../declarations/types-7.js';
export type { CreatePaymentLinkRequestInput } from '../declarations/types-12.js';
export type {
    CheckoutBuyerFieldsRequestInput,
    CheckoutPromotionConfigRequestInput,
    CheckoutRedirectsRequestInput,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CheckoutMerchantSupport,
    CheckoutBuyerContact,
    CheckoutCustomerPrefill,
    CheckoutDerivedDeliveryResource,
    CheckoutGiftCardChallenge,
    CheckoutPaymentMethodSave,
    CheckoutPrefill
} from '../declarations/types-6.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-44.js';
export type { ImageRequestInput, ImageInputSourceURLInput, ImageInputFileInput, ImageAttachment, Image } from '../declarations/types-31.js';
export type { InventoryRoutingSourceRequestInput } from '../declarations/types-34.js';
export type {
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput,
    InventoryRoutingSource
} from '../declarations/types-33.js';
export type {
    OrderLineItemTaxRequestInput,
    OrderLineItemTax,
    OrderPaymentAttemptPaymentMethodSave,
    OrderSettlementAmounts,
    OrderLineItemRefundable,
    OrderLineSubscriptionOfferSummary,
    OrderLineSubscriptionOfferDiscount,
    OrderReturnCreditSettlement
} from '../declarations/types-47.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-43.js';
export type {
    AuthMode,
    BundleComponent,
    BundleComponentVariantSummary,
    BuyerCheckoutSession,
    BuyerCheckoutProblemResource,
    BuyerAction,
    BuyerCancelActionOptions,
    BuyerCancelRetentionOffer
} from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-15.js';
export type { LegalSettings } from '../declarations/types-39.js';
export type { ProductPriceRange } from '../declarations/types-57.js';
export type { ExpandedSubscriptionPlanSummary, FulfillmentChargeLink } from '../declarations/types-27.js';
export type {
    SubscriptionIntervalOption,
    SubscriptionGiftRecipientRequestInput,
    SubscriptionEndAfterCycles,
    SubscriptionGiftRecipient,
    SubscriptionGiftRecipientRequest
} from '../declarations/types-70.js';
export type {
    SubscriptionPlanLineItem,
    SubscriptionPlanLineItemBundle,
    SubscriptionPlanLineItemCustom,
    SubscriptionPlanChangeLineItemRequestInput,
    SubscriptionPlanChangeLineItemRequest
} from '../declarations/types-71.js';
export type { SelectedProductOption, SettlementAmounts, ServiceFulfillmentDetails, ShipmentFulfillmentDetails } from '../declarations/types-68.js';
export type { CategoryReference } from '../declarations/types-5.js';
export type {
    OrderLineItemModifier,
    OrderGiftCardAllocation,
    OrderGiftCardEstimate,
    OrderGiftCardSettlement,
    OrderGiftCardSelection,
    OrderLineItemFulfillmentQuantities,
    OrderLineItemFulfillmentRequirements,
    OrderLineItemFulfillmentComponent,
    OrderLineItemFulfillmentProfile
} from '../declarations/types-46.js';
export type {
    TextModifierRequest,
    ThemeConfig,
    TextModifierConfigRequest,
    TicketedEvent,
    TipPaymentIntentAllocation,
    TipValueSettlementAllocation
} from '../declarations/types-75.js';
export type { SubscriptionPlanSwapVariant, SubscriptionPlanLineItemVariant } from '../declarations/types-72.js';
export type {
    ReadinessMerchantAccountSession,
    RefundLineItemAllocation,
    RefundLineItemAdjustmentRefund,
    RefundLineItemAdjustment,
    RefundAdjustmentReason,
    RefundLineItemAutomaticRefund,
    RefundLineItemModifierAllocation
} from '../declarations/types-60.js';
export type {
    BuyerCheckoutSessionWithSecret,
    BuyerErrorRemediation,
    BuyerInstructionsConfig,
    BuyerExpandedOrderSummary,
    BuyerExpandedPaymentIntentSummary,
    BuyerFulfillment,
    BuyerDigitalFulfillmentDetails,
    BuyerFulfillmentLineItem,
    BuyerDeliveryFulfillmentDetails,
    BuyerFulfillmentOutcome,
    BuyerExpandedPackageSummary,
    BuyerExpandedShipmentSummary
} from '../declarations/types-2.js';
export type {
    BuyerOrderPaymentAttempt,
    BuyerPaymentErrorSummary,
    BuyerPaymentAttemptPaymentIntent,
    BuyerPaymentCollection,
    BuyerPaymentCollectionStripe,
    BuyerPaymentCollectionStripeElements,
    BuyerRefund,
    BuyerPaymentRefund,
    BuyerOrder,
    BuyerPauseActionOptions,
    BuyerPayBalanceActionOptions,
    BuyerRetryPaymentActionOptions,
    BuyerOrderCharge,
    BuyerOrderLineItemModifier,
    BuyerOrderLineItem,
    BuyerOrderTax,
    BuyerOrderTaxExemption,
    BuyerOrderTaxLocation
} from '../declarations/types-3.js';
export type {
    PaymentAttemptGiftCardRedemption,
    PaymentClientAction,
    PaymentClientActionURL,
    PaymentClientActionStripe
} from '../declarations/types-51.js';
export type {
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject,
    PickupFulfillmentDetails
} from '../declarations/types-55.js';
export type {
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    StripeTerminalPaymentIntentClientAction,
    SubscribedLine
} from '../declarations/types-69.js';
export type { Address } from '../declarations/types-0.js';
export type {
    DeliveryQuoteChoiceGroupResource,
    DeliveryQuoteExecutionLegResource,
    DeliveryQuoteLineItemResource
} from '../declarations/types-22.js';
export type {
    DeliveryAddressAdvisoryResource,
    DeliveryCandidateOutcomeResource,
    DeliveryArrivalEstimate,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext,
    DeliveryChargeTaxCalculationRequest
} from '../declarations/types-18.js';
export type {
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryLocationSummaryResource,
    DeliveryMerchantDiagnostic,
    DeliveryEligibilityMismatch
} from '../declarations/types-19.js';
export type { DeliveryWindowRequest, DeliveryShipmentDetails } from '../declarations/types-24.js';
export type { DeliveryOptionProjection, DeliveryPlan, DeliveryPickupDetails } from '../declarations/types-20.js';
export type { DeliveryRecipientRequirement, DeliveryRecipientResource } from '../declarations/types-23.js';
export type { BuyerSelectableOrderPaymentIntent, BuyerSetupCollection, BuyerSetupCollectionStripe, BuyerTip } from '../declarations/types-4.js';
export type { ExpandedCustomerSummary } from '../declarations/types-26.js';
export type { RefundTaxBreakdownRefund, RefundTenderAllocation } from '../declarations/types-61.js';
export type {
    DeferredPromotion,
    CustomerTaxExemptionCoverage,
    CustomerTaxExemptionCoverageAllStates,
    CustomerTaxExemptionCoverageStates,
    CustomerTaxID
} from '../declarations/types-17.js';
export type { PricingAmounts } from '../declarations/types-56.js';
export type {
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PaymentSourceCardPresentDetails
} from '../declarations/types-54.js';
export type {
    OrderAuthorizationAmounts,
    OrderCalculatedChargeTax,
    OrderDeliverySummary,
    OrderDeliveryDestination,
    OrderDeliveryDestinationRecipient,
    OrderDiscount,
    OrderCalculatedLineItemTax
} from '../declarations/types-45.js';
export type { FulfillmentRecipient, GiftCardCustomAmountBounds } from '../declarations/types-28.js';
export type { GiftCardPurchaseSnapshot, GiftCardProductConfiguration, GiftCardPurchaseRecipient } from '../declarations/types-30.js';
export type { LineItemInventorySnapshot, LineItemInventoryDemand } from '../declarations/types-40.js';
export type { TaxCalculationRequest, TaxComponentRequest, TaxJurisdiction, TaxReverseCharge } from '../declarations/types-74.js';
export type { Dimensions } from '../declarations/types-25.js';
export type { TaxBreakdown, TaxBreakdownPercentage, TaxBreakdownFlatAmount } from '../declarations/types-73.js';
export type { UpdatePaymentLinkRequestInput } from '../declarations/types-77.js';
export {
    makeCheckoutBuyerFieldsRequest,
    makeCheckoutPromotionConfigRequest,
    makeCheckoutRedirectsRequest,
    makeCheckoutSubscriptionTermsRequest,
    makeCheckoutTaxCalculationRequest,
    makeCheckoutTaxConfigRequest,
    makeCheckoutTipConfigRequest
} from '../declarations/types-81.js';
export { makeCreatePaymentLinkRequest } from '../declarations/types-84.js';
export { makeDeliveryWindowRequest } from '../declarations/types-86.js';
export {
    makeGiftCardPurchaseRecipient,
    makeImageInputFile,
    makeImageInputSourceURL,
    makeImageRequest,
    makeInventoryRoutingSourceInputFixedLocation,
    makeInventoryRoutingSourceInputPolicy,
    makeInventoryRoutingSourceInputPolicyRevision,
    makeInventoryRoutingSourceRequest
} from '../declarations/types-87.js';
export { makeMetadataMap, makeMetadataPatchRequest, makeMetadataRequest } from '../declarations/types-88.js';
export { makeMoneyValue, makeOrderLineItemTaxRequest } from '../declarations/types-89.js';
export {
    makePaymentLinkCustomFieldPatchRequest,
    makePaymentLinkCustomFieldRequest,
    makePaymentLinkCustomTextConfig,
    makePaymentLinkCustomTextPatchRequest,
    makePaymentLinkEventConfigPatchRequest,
    makePaymentLinkEventConfigRequest,
    makePaymentLinkLegalConfig,
    makePaymentLinkLegalPatchRequest,
    makePaymentLinkLineItemInputBundle,
    makePaymentLinkLineItemInputCustomFixed,
    makePaymentLinkLineItemInputCustomVariable,
    makePaymentLinkLineItemInputVariant,
    makePaymentLinkLineItemPatchInputBundle,
    makePaymentLinkLineItemPatchInputCustomFixed,
    makePaymentLinkLineItemPatchInputCustomVariable,
    makePaymentLinkLineItemPatchInputVariant,
    makePaymentLinkLineItemPatchRequest,
    makePaymentLinkLineItemRequest,
    makePaymentLinkPaymentConfig,
    makePaymentLinkPaymentPatchRequest,
    makePaymentLinkRedirectsPatchRequest,
    makePaymentLinkResolvePrefillRequest,
    makePaymentLinkThemeConfig,
    makePaymentLinkThemePatchRequest
} from '../declarations/types-90.js';
export {
    makeResolvePaymentLinkLineItemModifierInputCatalog,
    makeResolvePaymentLinkLineItemModifierInputText,
    makeResolvePaymentLinkLineItemModifierRequest,
    makeResolvePaymentLinkLineItemModifiers,
    makeResolvePaymentLinkRequest,
    makeResolvePaymentLinkTextModifierRequest
} from '../declarations/types-91.js';
export {
    makeSubscriptionGiftRecipientRequest,
    makeSubscriptionPlanChangeLineItemRequest,
    makeTextModifierConfigRequest,
    makeTextModifierRequest
} from '../declarations/types-93.js';
export { makeUpdatePaymentLinkRequest } from '../declarations/types-94.js';
export interface PaymentLinksResource {
    /**
 * Creates a payment link for the authenticated merchant. Line items may use fixed prices,
 * buyer-adjustable amounts, and buyer-adjustable quantities.
 *
 * `POST /v1/payment-links`
 * @see https://developers.withflintpay.com/docs/api/payment-links#createPaymentLink
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentLinks.create({name: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: PaymentLinksCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PaymentLink, PaymentLinkResponse>>;
    /**
 * Returns a single payment link by ID. With expand=sales_summary, includes gross paid totals and
 * refunded totals per currency.
 *
 * `GET /v1/payment-links/{payment_link_id}`
 * @param payment_link_id Flint payment link ID. Must be a valid ID with prefix pl_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/payment-links#getPaymentLink
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.paymentLinks.get("pl_01KEZF7C007WDMA5P9BPZ8J2AM")
 */
    get(payment_link_id: InputValue<string>, params?: PaymentLinksGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PaymentLink, PaymentLinkResponse>>;
    /**
 * Returns the sanitized buyer-facing payment-link snapshot and a private resolution context for
 * this browser operation.
 *
 * `GET /v1/payment-links/{payment_link_id}/public`
 * @param payment_link_id Flint payment link ID. Must be a valid ID with prefix pl_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/payment-links#getPaymentLinkPublic
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.paymentLinks.getPublic("pl_01KEZF7C007WDMA5P9BPZ8J2AM")
 */
    getPublic(payment_link_id: InputValue<string>, params?: PaymentLinksGetPublicParams, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<WithResponseInfo<PublicPaymentLinkResult, PublicPaymentLinkResponse>>;
    /**
 * Returns a paginated list of payment links for the authenticated merchant. Default order:
 * created_at descending, then payment_link_id descending.
 *
 * `GET /v1/payment-links`
 * @see https://developers.withflintpay.com/docs/api/payment-links#listPaymentLinks
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.paymentLinks.list()
 */
    list(params?: PaymentLinksListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PaymentLinkListResponse, PaymentLinkListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/payment-links#listPaymentLinks
     */
    listPages(params?: PaymentLinksListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PaymentLinkListResponse, PaymentLinkListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/payment-links#listPaymentLinks
     */
    listItems(params?: PaymentLinksListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PaymentLink>;
    /**
 * Creates a buyer checkout session from an active payment link. Catalog-backed modifier
 * availability is frozen onto the checkout session and selected modifiers are resolved onto the
 * backing order. For a retry after an uncertain response, reuse the original idempotency key and
 * resolution_context.
 *
 * `POST /v1/payment-links/{payment_link_id}/resolve`
 * @param payment_link_id Flint payment link ID. Must be a valid ID with prefix pl_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/payment-links#resolvePaymentLink
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentLinks.resolve("pl_01KEZF7C007WDMA5P9BPZ8J2AM", {custom_field_values:
 * {meal_preference: "Vegetarian"}, modifiers: {"general-admission": {modifiers: [{modifier_id:
 * "mod_01KEZF7C00HP1041X7TDG6WRV5", quantity: 1, type: "catalog"}, {text: {modifier_group_id:
 * "mg_01KEZF7C00VBHD29DTPF4QBB6V", value: "Extra hot"}, type: "text"}]}}, quantity_overrides:
 * {"general-admission": 2}, resolution_context: "plrc_v1.example_signed_resolution_context"}, {
 * idempotencyKey: idempotencyKey })
 */
    resolve(payment_link_id: InputValue<string>, params: PaymentLinksResolveParams, options?: RequestOptions<never>): Promise<WithResponseInfo<ResolvedPaymentLinkCheckout, ResolvePaymentLinkResponse>>;
    /**
 * Updates a payment link. Setting `status` to `inactive` closes its open, unpaid checkout
 * sessions. Payments already in progress can finish. To replace line items, custom fields, or
 * delivery methods, send the complete array with `expected_version`.
 *
 * `PATCH /v1/payment-links/{payment_link_id}`
 * @param payment_link_id Flint payment link ID. Must be a valid ID with prefix pl_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/payment-links#updatePaymentLink
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentLinks.update("pl_01ARZ3NDEKTSV4RRFFQ69G5FAV", {description: "Updated
 * description"}, { idempotencyKey: idempotencyKey })
 */
    update(payment_link_id: InputValue<string>, params: PaymentLinksUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PaymentLink, PaymentLinkResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly paymentLinks: PaymentLinksResource;
}
