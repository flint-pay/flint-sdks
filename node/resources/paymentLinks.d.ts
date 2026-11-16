import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { BuyerCheckoutSessionWithSecret } from '../declarations/types-1.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { PaymentLink } from '../declarations/types-50.js';
import type {
    PaymentLinkListResponse,
    PaymentLinkResponse,
    PaymentLinksCreateParams,
    PaymentLinksGetParams,
    PaymentLinksGetPublicParams,
    PaymentLinksListParams,
    PaymentLinksResolveParams,
    PaymentLinksUpdateParams
} from '../declarations/types-51.js';
import type { PublicPaymentLinkResponse, PublicPaymentLinkResult } from '../declarations/types-57.js';
import type { RequestOptions, ResolvePaymentLinkResponse } from '../declarations/types-60.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-77.js';
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
    PaymentLinkLineItemInputVariantInput,
    PaymentLinkLineItemInputCustomFixedInput,
    PaymentLinkLineItemInputCustomVariableInput,
    PaymentLinkPaymentConfigInput,
    PaymentLinkThemeConfigInput,
    PaymentLinkLineItemVariant,
    PaymentLinkSalesSummary,
    PaymentLinkProductOption,
    PaymentLinkProductOptionValue,
    PaymentLinkSubscriptionPreview,
    PaymentLinkResolvePrefillRequestInput,
    PaymentLinkLineItemPatchRequestInput,
    PaymentLinkLineItemPatchInputVariantInput,
    PaymentLinkLineItemPatchInputBundleInput,
    PaymentLinkLineItemPatchInputCustomFixedInput,
    PaymentLinkLineItemPatchInputCustomVariableInput,
    PaymentLinkPaymentPatchRequestInput,
    PaymentLinkRedirectsPatchRequestInput,
    PaymentLinkThemePatchRequestInput,
    PaymentLinkRedirectsPatchRequest,
    PaymentLinkThemePatchRequest
} from '../declarations/types-51.js';
export type {
    RequestOptions,
    ResolvePaymentLinkResponse,
    ResponseMeta,
    ResponseWarning,
    ResourceReference,
    ResolvePaymentLinkRequestInput,
    ResolvePaymentLinkLineItemModifiersInput,
    ResolvePaymentLinkLineItemModifierRequestInput,
    ResolvePaymentLinkTextModifierRequestInput
} from '../declarations/types-60.js';
export type {
    PaymentLink,
    PaymentLinkCustomFieldRequestInput,
    PaymentLinkCustomTextConfigInput,
    PaymentLinkEventConfigRequestInput,
    PaymentLinkLegalConfigInput,
    PaymentLinkLineItemInputBundleInput,
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
    PaymentLinkCustomTextPatchRequest
} from '../declarations/types-50.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-77.js';
export type {
    PublicPaymentLinkResult,
    PublicPaymentLinkResponse,
    PublicPaymentLink,
    PublicResolvedLineItemInfo,
    PublicResolvedModifierGroup,
    PublicResolvedModifierOption,
    QuantityPriceBreak,
    PublicResolvedBundleComponent
} from '../declarations/types-57.js';
export type {
    BuyerCheckoutSessionWithSecret,
    AuthMode,
    BundleComponent,
    BundleComponentVariantSummary,
    BuyerCheckoutSession,
    BuyerCheckoutProblemResource
} from '../declarations/types-1.js';
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
    CheckoutSubscriptionRecurringShipping
} from '../declarations/types-7.js';
export type { CreatePaymentLinkRequestInput } from '../declarations/types-12.js';
export type {
    CheckoutBuyerFieldsRequestInput,
    CheckoutPromotionConfigRequestInput,
    CheckoutRedirectsRequestInput,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CheckoutMerchantSupport,
    CheckoutCustomerPrefill,
    CheckoutDerivedDeliveryResource,
    CheckoutGiftCardChallenge,
    CheckoutPaymentMethodSave,
    CheckoutPrefill,
    CheckoutSessionTax
} from '../declarations/types-6.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-42.js';
export type { ImageRequestInput, ImageInputSourceURLInput } from '../declarations/types-31.js';
export type { ImageInputFileInput, ImageAttachment, Image } from '../declarations/types-30.js';
export type {
    InventoryRoutingSourceRequestInput,
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput,
    InventoryRoutingSource
} from '../declarations/types-33.js';
export type {
    OrderLineItemTaxRequestInput,
    OrderLineItemTax,
    OrderLineItemModifier,
    OrderPaymentAttemptPaymentMethodSave,
    OrderSettlementAmounts
} from '../declarations/types-45.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-41.js';
export type { Credentials } from '../declarations/types-14.js';
export type { CheckoutBuyerFields, CategoryReference, CheckoutBuyerContact } from '../declarations/types-5.js';
export type { LegalSettings } from '../declarations/types-38.js';
export type { ProductPriceRange, PricingAmounts } from '../declarations/types-55.js';
export type { ExpandedSubscriptionPlanSummary, ExpandedCustomerSummary } from '../declarations/types-26.js';
export type {
    SubscriptionIntervalOption,
    SubscriptionGiftRecipientRequestInput,
    SubscriptionGiftRecipient,
    SubscriptionGiftRecipientRequest
} from '../declarations/types-68.js';
export type {
    SubscriptionPlanLineItem,
    SubscriptionPlanSwapVariant,
    SubscriptionPlanLineItemVariant,
    SubscriptionPlanLineItemBundle,
    SubscriptionPlanLineItemCustom,
    SubscriptionPlanChangeLineItemRequestInput,
    SubscriptionPlanChangeLineItemRequest
} from '../declarations/types-69.js';
export type { SelectedProductOption } from '../declarations/types-65.js';
export type { TextModifierRequest, ThemeConfig, TextModifierConfigRequest } from '../declarations/types-72.js';
export type {
    ReadinessMerchantAccountSession,
    RefundLineItemAllocation,
    RefundLineItemAdjustmentRefund,
    RefundLineItemAdjustment,
    RefundAdjustmentReason,
    RefundLineItemAutomaticRefund,
    RefundLineItemModifierAllocation
} from '../declarations/types-58.js';
export type {
    BuyerOrderPaymentAttempt,
    BuyerErrorRemediation,
    BuyerInstructionsConfig,
    BuyerExpandedOrderSummary,
    BuyerExpandedPaymentIntentSummary
} from '../declarations/types-2.js';
export type {
    PaymentAttemptGiftCardRedemption,
    PaymentClientAction,
    PaymentClientActionURL,
    PaymentClientActionStripe
} from '../declarations/types-49.js';
export type {
    BuyerPaymentErrorSummary,
    BuyerPaymentAttemptPaymentIntent,
    BuyerPaymentCollection,
    BuyerPaymentCollectionStripe,
    BuyerPaymentCollectionStripeElements,
    BuyerSelectableOrderPaymentIntent,
    BuyerRefund,
    BuyerPaymentRefund,
    BuyerSetupCollection,
    BuyerSetupCollectionStripe
} from '../declarations/types-3.js';
export type { PendingPaymentAction } from '../declarations/types-53.js';
export type {
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    StripeTerminalPaymentIntentClientAction,
    SettlementAmounts
} from '../declarations/types-66.js';
export type {
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject
} from '../declarations/types-54.js';
export type { Address } from '../declarations/types-0.js';
export type {
    DeliveryQuoteChoiceGroupResource,
    DeliveryQuoteExecutionLegResource,
    DeliveryQuoteLineItemResource
} from '../declarations/types-22.js';
export type { DeliveryAddressAdvisoryResource, DeliveryArrivalEstimate, DeferredPromotion } from '../declarations/types-17.js';
export type {
    DeliveryCandidateOutcomeResource,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext,
    DeliveryEligibilityMismatch
} from '../declarations/types-18.js';
export type {
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryLocationSummaryResource,
    DeliveryMerchantDiagnostic
} from '../declarations/types-19.js';
export type { DeliveryWindowRequest, DeliveryShipmentDetails } from '../declarations/types-24.js';
export type { DeliveryOptionProjection, DeliveryPlan, DeliveryPickupDetails } from '../declarations/types-20.js';
export type { DeliveryRecipientRequirement } from '../declarations/types-23.js';
export type { RefundTaxBreakdownRefund, RefundTenderAllocation } from '../declarations/types-59.js';
export type {
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PaymentSourceCardPresentDetails
} from '../declarations/types-52.js';
export type { OrderGiftCardAllocation } from '../declarations/types-44.js';
export type { UpdatePaymentLinkRequestInput } from '../declarations/types-74.js';
export {
    makeCheckoutBuyerFieldsRequest,
    makeCheckoutPromotionConfigRequest,
    makeCheckoutRedirectsRequest,
    makeCheckoutSubscriptionTermsRequest,
    makeCheckoutTaxCalculationRequest,
    makeCheckoutTaxConfigRequest,
    makeCheckoutTipConfigRequest
} from '../declarations/types-78.js';
export { makeCreatePaymentLinkRequest } from '../declarations/types-81.js';
export { makeDeliveryWindowRequest } from '../declarations/types-83.js';
export {
    makeImageInputFile,
    makeImageInputSourceURL,
    makeImageRequest,
    makeInventoryRoutingSourceInputFixedLocation,
    makeInventoryRoutingSourceInputPolicy,
    makeInventoryRoutingSourceInputPolicyRevision,
    makeInventoryRoutingSourceRequest
} from '../declarations/types-84.js';
export { makeMetadataPatchRequest } from '../declarations/types-85.js';
export { makeMetadataRequest, makeMoneyValue, makeOrderLineItemTaxRequest } from '../declarations/types-86.js';
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
} from '../declarations/types-87.js';
export {
    makeResolvePaymentLinkLineItemModifierRequest,
    makeResolvePaymentLinkLineItemModifiers,
    makeResolvePaymentLinkRequest,
    makeResolvePaymentLinkTextModifierRequest
} from '../declarations/types-88.js';
export {
    makeSubscriptionGiftRecipientRequest,
    makeSubscriptionPlanChangeLineItemRequest,
    makeTextModifierConfigRequest,
    makeTextModifierRequest
} from '../declarations/types-90.js';
export { makeUpdatePaymentLinkRequest } from '../declarations/types-91.js';
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
 * @param payment_link_id Flint payment link ID.
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
 * @param payment_link_id Flint payment link ID.
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
 * @param payment_link_id Flint payment link ID.
 * @see https://developers.withflintpay.com/docs/api/payment-links#resolvePaymentLink
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentLinks.resolve("pl_01KEZF7C007WDMA5P9BPZ8J2AM", {resolution_context: "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    resolve(payment_link_id: InputValue<string>, params: PaymentLinksResolveParams, options?: RequestOptions<never>): Promise<WithResponseInfo<BuyerCheckoutSessionWithSecret, ResolvePaymentLinkResponse>>;
    /**
 * Updates a payment link. To replace line items, custom fields, or delivery methods, send the
 * complete array with `expected_version`.
 *
 * `PATCH /v1/payment-links/{payment_link_id}`
 * @param payment_link_id Flint payment link ID.
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
