import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { CheckoutSessionWithSecret, ClientOptions } from '../declarations/types-5.js';
import type { PaymentLink } from '../declarations/types-41.js';
import type {
    PaymentLinkListResponse,
    PaymentLinkResponse,
    PaymentLinksCreateParams,
    PaymentLinksGetParams,
    PaymentLinksGetPublicParams,
    PaymentLinksListParams,
    PaymentLinksResolveParams,
    PaymentLinksUpdateParams
} from '../declarations/types-42.js';
import type { PublicPaymentLinkResponse, PublicPaymentLinkResult } from '../declarations/types-46.js';
import type { RequestOptions, ResolvePaymentLinkResponse } from '../declarations/types-47.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    PaymentLinkLineItemPatchRequestInput,
    PaymentLinkLineItemPatchInputVariantInput,
    PaymentLinkLineItemPatchInputCustomVariableInput,
    PaymentLinkPaymentPatchRequestInput,
    PaymentLinkRedirectsPatchRequestInput,
    PaymentLinkThemePatchRequestInput,
    PaymentLinkRedirectsPatchRequest,
    PaymentLinkThemePatchRequest
} from '../declarations/types-42.js';
export type {
    RequestOptions,
    ResolvePaymentLinkResponse,
    ResolvePaymentLinkRequestInput,
    ResolvePaymentLinkLineItemModifiersInput,
    ResolvePaymentLinkLineItemModifierRequestInput,
    ResolvePaymentLinkTextModifierRequestInput,
    ResourceReference
} from '../declarations/types-47.js';
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
    PaymentLinkLineItemPatchInputBundleInput,
    PaymentLinkLineItemPatchInputCustomFixedInput,
    PaymentLinkCustomTextPatchRequest
} from '../declarations/types-41.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type {
    PublicPaymentLinkResult,
    PublicPaymentLinkResponse,
    ReadinessMerchantAccountSession,
    PublicPaymentLink,
    PublicResolvedLineItemInfo,
    PublicResolvedModifierGroup,
    PublicResolvedModifierOption,
    PublicResolvedBundleComponent,
    PublicResolvedBundleVariantSummary
} from '../declarations/types-46.js';
export type {
    CheckoutSessionWithSecret,
    ClientOptions,
    CheckoutTaxConfigRequestInput,
    CheckoutTipConfigRequestInput,
    CheckoutTaxConfig,
    CheckoutTipConfig,
    CheckoutTheme,
    CheckoutSubscriptionTerms,
    CheckoutSubscriptionRecurringShipping,
    CheckoutSessionTax
} from '../declarations/types-5.js';
export type { CreatePaymentLinkRequestInput } from '../declarations/types-9.js';
export type {
    CheckoutBuyerFieldsRequestInput,
    CheckoutPromotionConfigRequestInput,
    CheckoutRedirectsRequestInput,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CategoryReference,
    CheckoutSession,
    CheckoutBuyerContact,
    CheckoutCustomerPrefill,
    CheckoutDerivedDeliveryResource,
    CheckoutDeliveryPinnedDependency,
    CheckoutGiftCardChallenge,
    CheckoutMerchantSupport,
    CheckoutPaymentMethodSave,
    CheckoutPrefill,
    CheckoutProblemResource
} from '../declarations/types-4.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-35.js';
export type { ImageRequestInput, ImageInputSourceURLInput, ImageInputFileInput, ImageAttachment, Image } from '../declarations/types-25.js';
export type {
    InventoryRoutingSourceRequestInput,
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput,
    InventoryRoutingSource
} from '../declarations/types-27.js';
export type {
    OrderLineItemTaxInput,
    OrderLineItemTax,
    OrderLineItemModifier,
    OrderPaymentAttempt,
    OrderPaymentAttemptPaymentMethodSave
} from '../declarations/types-37.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type { AuthMode, Address } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { LegalSettings } from '../declarations/types-32.js';
export type { ProductPriceRange } from '../declarations/types-44.js';
export type {
    ExpandedSubscriptionPlanSummary,
    ErrorRemediation,
    ExpandedCustomerSummary,
    ExpandedInvoiceSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentLinkSummary
} from '../declarations/types-21.js';
export type { SubscriptionIntervalOption } from '../declarations/types-54.js';
export type {
    SubscriptionPlanLineItem,
    SubscriptionPlanSwapVariant,
    SubscriptionPlanLineItemVariant,
    SubscriptionPlanLineItemBundle,
    SubscriptionPlanLineItemCustom
} from '../declarations/types-55.js';
export type { BundleComponent, BundleComponentVariantSummary } from '../declarations/types-1.js';
export type {
    SelectedProductOption,
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    SettlementAmounts,
    SelectableOrderPaymentIntent
} from '../declarations/types-53.js';
export type { TextModifierRequest, ThemeConfig, TextModifierConfigRequest } from '../declarations/types-57.js';
export type { ResponseMeta, ResponseWarning, ResourceType } from '../declarations/types-48.js';
export type {
    PaymentAttemptGiftCardRedemption,
    PaymentErrorSummary,
    PaymentAttemptPaymentIntent,
    PaymentClientAction,
    PaymentCollection,
    PaymentCollectionStripe,
    PaymentCollectionStripeElements
} from '../declarations/types-40.js';
export type {
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject,
    PricingAmounts,
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary
} from '../declarations/types-43.js';
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
export type { DeliveryOptionProjection, DeliveryPlan, DeliveryPickupDetails } from '../declarations/types-16.js';
export type { BuyerInstructionsConfig } from '../declarations/types-2.js';
export type { UpdatePaymentLinkRequestInput } from '../declarations/types-59.js';
export {
    makeCheckoutBuyerFieldsRequest,
    makeCheckoutPromotionConfigRequest,
    makeCheckoutRedirectsRequest,
    makeCheckoutTaxConfigRequest,
    makeCheckoutTipConfigRequest
} from '../declarations/types-62.js';
export { makeCreatePaymentLinkRequest } from '../declarations/types-64.js';
export {
    makeDeliveryRecipientRequirement,
    makeDeliveryWindowRequest,
    makeImageInputFile,
    makeImageInputSourceURL
} from '../declarations/types-67.js';
export {
    makeImageRequest,
    makeInventoryRoutingSourceInputFixedLocation,
    makeInventoryRoutingSourceInputPolicy,
    makeInventoryRoutingSourceInputPolicyRevision,
    makeInventoryRoutingSourceRequest
} from '../declarations/types-68.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue, makeOrderLineItemTax } from '../declarations/types-69.js';
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
    makePaymentLinkThemeConfig,
    makePaymentLinkThemePatchRequest
} from '../declarations/types-70.js';
export {
    makeResolvePaymentLinkLineItemModifierRequest,
    makeResolvePaymentLinkLineItemModifiers,
    makeResolvePaymentLinkRequest,
    makeResolvePaymentLinkTextModifierRequest
} from '../declarations/types-71.js';
export { makeSubscriptionIntervalOption, makeTextModifierConfigRequest, makeTextModifierRequest } from '../declarations/types-73.js';
export { makeUpdatePaymentLinkRequest } from '../declarations/types-74.js';
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
 * client.paymentLinks.get("pl_01ARZ3NDEKTSV4RRFFQ69G5FAV")
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
 * client.paymentLinks.getPublic("pl_01ARZ3NDEKTSV4RRFFQ69G5FAV")
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
 * backing order. For a retry after an uncertain response, reuse the original Idempotency-Key and
 * resolution_context.
 *
 * `POST /v1/payment-links/{payment_link_id}/resolve`
 * @param payment_link_id Flint payment link ID.
 * @see https://developers.withflintpay.com/docs/api/payment-links#resolvePaymentLink
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentLinks.resolve("pl_01ARZ3NDEKTSV4RRFFQ69G5FAV", {resolution_context: "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    resolve(payment_link_id: InputValue<string>, params: PaymentLinksResolveParams, options?: RequestOptions<never>): Promise<WithResponseInfo<CheckoutSessionWithSecret, ResolvePaymentLinkResponse>>;
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
