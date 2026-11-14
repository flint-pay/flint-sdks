import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { BuyerCheckoutSessionWithSecret } from '../declarations/types-1.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { PaymentLink } from '../declarations/types-45.js';
import type {
    PaymentLinkListResponse,
    PaymentLinkResponse,
    PaymentLinksCreateParams,
    PaymentLinksGetParams,
    PaymentLinksGetPublicParams,
    PaymentLinksListParams,
    PaymentLinksResolveParams,
    PaymentLinksUpdateParams
} from '../declarations/types-46.js';
import type { PublicPaymentLinkResponse, PublicPaymentLinkResult } from '../declarations/types-52.js';
import type { RequestOptions, ResolvePaymentLinkResponse } from '../declarations/types-54.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
    PaymentLinkCustomTextConfigInput,
    PaymentLinkEventConfigRequestInput,
    PaymentLinkLegalConfigInput,
    PaymentLinkLineItemRequestInput,
    PaymentLinkLineItemInputVariantInput,
    PaymentLinkLineItemInputBundleInput,
    PaymentLinkLineItemInputCustomFixedInput,
    PaymentLinkLineItemInputCustomVariableInput,
    PaymentLinkPaymentConfigInput,
    PaymentLinkThemeConfigInput,
    PaymentLinkEventConfig,
    PaymentLinkLineItem,
    PaymentLinkLineItemVariant,
    PaymentLinkLineItemBundle,
    PaymentLinkLineItemCustomFixed,
    PaymentLinkLineItemCustomVariable,
    PaymentLinkSalesSummary,
    PaymentLinkProductOption,
    PaymentLinkProductOptionValue,
    PaymentLinkSubscriptionPreview,
    PaymentLinkResolvePrefillRequestInput,
    PaymentLinkCustomTextPatchRequestInput,
    PaymentLinkEventConfigPatchRequestInput,
    PaymentLinkLegalPatchRequestInput,
    PaymentLinkLineItemPatchRequestInput,
    PaymentLinkLineItemPatchInputVariantInput,
    PaymentLinkLineItemPatchInputBundleInput,
    PaymentLinkLineItemPatchInputCustomFixedInput,
    PaymentLinkLineItemPatchInputCustomVariableInput,
    PaymentLinkPaymentPatchRequestInput,
    PaymentLinkRedirectsPatchRequestInput,
    PaymentLinkThemePatchRequestInput,
    PaymentLinkCustomTextPatchRequest,
    PaymentLinkRedirectsPatchRequest,
    PaymentLinkThemePatchRequest
} from '../declarations/types-46.js';
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
} from '../declarations/types-54.js';
export type {
    PaymentLink,
    PaymentLinkCustomFieldRequestInput,
    PaymentLinkCustomField,
    PaymentLinkAvailableVariant,
    PaymentLinkCustomFieldPatchRequestInput
} from '../declarations/types-45.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type {
    PublicPaymentLinkResult,
    PublicPaymentLinkResponse,
    ReadinessMerchantAccountSession,
    PublicPaymentLink,
    PublicResolvedLineItemInfo,
    PublicResolvedModifierGroup,
    PublicResolvedModifierOption,
    QuantityPriceBreak,
    PublicResolvedBundleComponent,
    PublicResolvedBundleVariantSummary
} from '../declarations/types-52.js';
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
    CheckoutRedirectsRequestInput,
    CheckoutTaxConfigRequestInput,
    CheckoutTaxCalculationRequestInput,
    CheckoutTipConfigRequestInput,
    CheckoutRedirects,
    CheckoutTaxConfig,
    CheckoutTaxCalculation,
    CheckoutTipConfig,
    CheckoutTheme,
    CheckoutSubscriptionTerms,
    CheckoutSubscriptionRecurringShipping,
    CheckoutSessionTax
} from '../declarations/types-6.js';
export type { CreatePaymentLinkRequestInput } from '../declarations/types-11.js';
export type {
    CheckoutBuyerFieldsRequestInput,
    CheckoutPromotionConfigRequestInput,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CategoryReference,
    CheckoutMerchantSupport,
    CheckoutBuyerContact,
    CheckoutCustomerPrefill,
    CheckoutDerivedDeliveryResource,
    CheckoutGiftCardChallenge,
    CheckoutPaymentMethodSave,
    CheckoutPrefill
} from '../declarations/types-5.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-39.js';
export type { ImageRequestInput, ImageInputSourceURLInput, ImageInputFileInput, ImageAttachment, Image } from '../declarations/types-28.js';
export type {
    InventoryRoutingSourceRequestInput,
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput,
    InventoryRoutingSource
} from '../declarations/types-30.js';
export type {
    OrderLineItemTaxRequestInput,
    OrderLineItemTax,
    OrderLineItemModifier,
    OrderPaymentAttemptPaymentMethodSave,
    OrderSettlementAmounts
} from '../declarations/types-41.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-38.js';
export type { Credentials } from '../declarations/types-14.js';
export type { LegalSettings } from '../declarations/types-35.js';
export type { ProductPriceRange } from '../declarations/types-50.js';
export type { ExpandedSubscriptionPlanSummary, ExpandedCustomerSummary, ExpandedPaymentIntentSummary } from '../declarations/types-24.js';
export type {
    SubscriptionIntervalOption,
    SubscriptionPlanLineItem,
    SubscriptionPlanLineItemBundle,
    SubscriptionPlanLineItemCustom,
    SubscriptionGiftRecipient
} from '../declarations/types-62.js';
export type { SelectedProductOption, SettlementAmounts } from '../declarations/types-59.js';
export type { TextModifierRequest, ThemeConfig, TextModifierConfigRequest } from '../declarations/types-65.js';
export type { SubscriptionPlanSwapVariant, SubscriptionPlanLineItemVariant } from '../declarations/types-63.js';
export type {
    BuyerOrderPaymentAttempt,
    BuyerErrorRemediation,
    BuyerPaymentAttemptPaymentIntent,
    BuyerInstructionsConfig,
    BuyerPaymentCollection,
    BuyerExpandedOrderSummary
} from '../declarations/types-2.js';
export type {
    PaymentAttemptGiftCardRedemption,
    PaymentClientAction,
    PaymentClientActionURL,
    PaymentClientActionStripe
} from '../declarations/types-44.js';
export type {
    BuyerPaymentErrorSummary,
    BuyerPaymentCollectionStripe,
    BuyerPaymentCollectionStripeElements,
    BuyerSelectableOrderPaymentIntent,
    BuyerRefund,
    BuyerPaymentRefund,
    BuyerSetupCollection,
    BuyerSetupCollectionStripe
} from '../declarations/types-3.js';
export type {
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject,
    PricingAmounts
} from '../declarations/types-49.js';
export type {
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    StripeTerminalPaymentIntentClientAction
} from '../declarations/types-60.js';
export type { Address } from '../declarations/types-0.js';
export type {
    DeliveryQuoteChoiceGroupResource,
    DeliveryQuoteExecutionLegResource,
    DeliveryQuoteLineItemResource
} from '../declarations/types-20.js';
export type {
    DeliveryAddressAdvisoryResource,
    DeliveryCandidateOutcomeResource,
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryArrivalEstimate,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext,
    DeliveryEligibilityMismatch,
    DeferredPromotion
} from '../declarations/types-17.js';
export type { DeliveryWindowRequest, DeliveryShipmentDetails } from '../declarations/types-22.js';
export type { DeliveryOptionProjection, DeliveryPlan, DeliveryPickupDetails } from '../declarations/types-19.js';
export type { DeliveryLocationSummaryResource, DeliveryMerchantDiagnostic } from '../declarations/types-18.js';
export type { DeliveryRecipientRequirement } from '../declarations/types-21.js';
export type {
    RefundLineItemAllocation,
    RefundLineItemAdjustmentRefund,
    RefundLineItemAdjustment,
    RefundAdjustmentReason,
    RefundLineItemAutomaticRefund,
    RefundLineItemModifierAllocation,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation
} from '../declarations/types-53.js';
export type {
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PaymentSourceCardPresentDetails
} from '../declarations/types-47.js';
export type { OrderGiftCardAllocation } from '../declarations/types-40.js';
export type { UpdatePaymentLinkRequestInput } from '../declarations/types-67.js';
export {
    makeCheckoutBuyerFieldsRequest,
    makeCheckoutPromotionConfigRequest,
    makeCheckoutRedirectsRequest,
    makeCheckoutTaxCalculationRequest,
    makeCheckoutTaxConfigRequest,
    makeCheckoutTipConfigRequest
} from '../declarations/types-71.js';
export { makeCreatePaymentLinkRequest } from '../declarations/types-74.js';
export { makeDeliveryWindowRequest } from '../declarations/types-76.js';
export {
    makeImageInputFile,
    makeImageInputSourceURL,
    makeImageRequest,
    makeInventoryRoutingSourceInputFixedLocation,
    makeInventoryRoutingSourceInputPolicy,
    makeInventoryRoutingSourceInputPolicyRevision,
    makeInventoryRoutingSourceRequest
} from '../declarations/types-77.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue, makeOrderLineItemTaxRequest } from '../declarations/types-79.js';
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
} from '../declarations/types-80.js';
export {
    makeResolvePaymentLinkLineItemModifierRequest,
    makeResolvePaymentLinkLineItemModifiers,
    makeResolvePaymentLinkRequest,
    makeResolvePaymentLinkTextModifierRequest
} from '../declarations/types-81.js';
export { makeTextModifierConfigRequest, makeTextModifierRequest } from '../declarations/types-83.js';
export { makeUpdatePaymentLinkRequest } from '../declarations/types-84.js';
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
