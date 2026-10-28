import type { InputValue } from '../runtime.js';
import type { CheckoutSessionWithSecret, ClientOptions } from '../declarations/types-4.js';
import type { CreatePaymentLinkRequestInput } from '../declarations/types-8.js';
import type { PaymentLink } from '../declarations/types-37.js';
import type {
    PaymentLinkListResponse,
    PaymentLinkResponse,
    PaymentLinksCreateInput,
    PaymentLinksGetInput,
    PaymentLinksGetPublicInput,
    PaymentLinksListInput,
    PaymentLinksResolveInput,
    PaymentLinksUpdateInput
} from '../declarations/types-38.js';
import type { PublicPaymentLinkResponse, PublicPaymentLinkResult } from '../declarations/types-41.js';
import type { RequestOptions, ResolvePaymentLinkRequestInput, ResolvePaymentLinkResponse } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { UpdatePaymentLinkRequestInput } from '../declarations/types-52.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
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
export type { CreatePaymentLinkRequestInput } from '../declarations/types-8.js';
export type {
    RequestOptions,
    ResolvePaymentLinkRequestInput,
    ResolvePaymentLinkResponse,
    ResponseMeta,
    ResolvePaymentLinkLineItemModifiersInput,
    ResolvePaymentLinkLineItemModifierRequestInput,
    ResolvePaymentLinkTextModifierRequestInput,
    ResourceReference,
    ResourceType
} from '../declarations/types-42.js';
export type {
    PaymentLink,
    PaymentLinkCustomFieldRequestInput,
    PaymentLinkCustomTextConfigInput,
    PaymentLinkCustomField,
    PaymentLinkEventConfig,
    PaymentLinkAvailableVariant,
    PaymentAttemptGiftCardRedemption,
    PaymentErrorSummary,
    PaymentAttemptPaymentIntent,
    PaymentClientAction,
    PaymentCollection,
    PaymentCollectionStripe,
    PaymentCollectionStripeElements,
    PaymentLinkCustomFieldPatchRequestInput,
    PaymentLinkCustomTextPatchRequestInput,
    PaymentLinkCustomTextPatchRequest
} from '../declarations/types-37.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type {
    PaymentLinkResponse,
    PaymentLinkListResponse,
    PaymentLinksCreateInput,
    PaymentLinksGetInput,
    PaymentLinksGetPublicInput,
    PaymentLinksListInput,
    PaymentLinksResolveInput,
    PaymentLinksUpdateInput,
    PaymentLinkEventConfigRequestInput,
    PaymentLinkLegalConfigInput,
    PaymentLinkLineItemRequestInput,
    PaymentLinkLineItemInputVariantInput,
    PaymentLinkLineItemInputBundleInput,
    PaymentLinkLineItemInputCustomFixedInput,
    PaymentLinkLineItemInputCustomVariableInput,
    PaymentLinkPaymentConfigInput,
    PaymentLinkThemeConfigInput,
    PaymentLinkLineItem,
    PaymentLinkLineItemVariant,
    PaymentLinkLineItemBundle,
    PaymentLinkLineItemCustomFixed,
    PaymentLinkLineItemCustomVariable,
    PaymentLinkSalesSummary,
    PaymentLinkProductOption,
    PaymentLinkProductOptionValue,
    PaymentLinkSubscriptionPreview,
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
    PaymentLinkRedirectsPatchRequest,
    PaymentLinkThemePatchRequest
} from '../declarations/types-38.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type {
    PublicPaymentLinkResult,
    PublicPaymentLinkResponse,
    PublicPaymentLink,
    PublicResolvedLineItemInfo,
    PublicResolvedModifierGroup,
    PublicResolvedModifierOption,
    PublicResolvedBundleComponent,
    PublicResolvedBundleVariantSummary
} from '../declarations/types-41.js';
export type {
    CheckoutSessionWithSecret,
    ClientOptions,
    CheckoutBuyerFieldsRequestRequestInput,
    CheckoutPromotionConfigRequestRequestInput,
    CheckoutRedirectsRequestInput,
    CheckoutTaxConfigRequestRequestInput,
    CheckoutTipConfigRequestRequestInput,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CheckoutTaxConfig,
    CheckoutTipConfig,
    CheckoutTheme,
    CheckoutSession,
    CheckoutBuyerContact,
    CheckoutCustomerPrefill,
    CheckoutDerivedDeliveryResource,
    CheckoutDeliveryPinnedDependency,
    CheckoutGiftCardChallenge,
    CheckoutMerchantSupport,
    CheckoutPaymentMethodSave,
    CheckoutPrefill,
    CheckoutProblemResource,
    CheckoutSubscriptionTerms,
    CheckoutSubscriptionRecurringShipping,
    CheckoutSessionTax
} from '../declarations/types-4.js';
export type { UpdatePaymentLinkRequestInput } from '../declarations/types-52.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-33.js';
export type { ImageRequestInput, ImageInputSourceURLInput, ImageInputFileInput, ImageAttachment, Image } from '../declarations/types-21.js';
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
} from '../declarations/types-34.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-32.js';
export type { AuthMode, Address } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { LegalSettings } from '../declarations/types-30.js';
export type {
    ProductPriceRange,
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject,
    PricingAmounts,
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary
} from '../declarations/types-39.js';
export type {
    ExpandedSubscriptionPlanSummary,
    ErrorRemediation,
    ExpandedCustomerSummary,
    ExpandedInvoiceSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentLinkSummary
} from '../declarations/types-18.js';
export type {
    SubscriptionIntervalOption,
    SubscriptionPlanLineItem,
    SubscriptionPlanLineItemBundle,
    SubscriptionPlanLineItemCustom
} from '../declarations/types-48.js';
export type { BundleComponent, BundleComponentVariantSummary, BuyerInstructionsConfig } from '../declarations/types-1.js';
export type {
    SelectedProductOption,
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    SettlementAmounts,
    SelectableOrderPaymentIntent
} from '../declarations/types-47.js';
export type { CategoryReference } from '../declarations/types-3.js';
export type { TextModifierRequest, ThemeConfig, TextModifierConfigRequest } from '../declarations/types-50.js';
export type { SubscriptionPlanSwapVariant, SubscriptionPlanLineItemVariant } from '../declarations/types-49.js';
export type { ResponseWarning } from '../declarations/types-43.js';
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
export type { DeliveryOptionProjection, DeliveryPlan, DeliveryPickupDetails } from '../declarations/types-14.js';
export {
    makeCheckoutBuyerFieldsRequestRequest,
    makeCheckoutPromotionConfigRequestRequest,
    makeCheckoutRedirectsRequest,
    makeCheckoutTaxConfigRequestRequest,
    makeCheckoutTipConfigRequestRequest
} from '../declarations/types-66.js';
export { makeCreatePaymentLinkRequest } from '../declarations/types-68.js';
export { makeDeliveryRecipientRequirement, makeDeliveryWindowRequest } from '../declarations/types-70.js';
export {
    makeImageInputFile,
    makeImageInputSourceURL,
    makeImageRequest,
    makeInventoryRoutingSourceInputFixedLocation,
    makeInventoryRoutingSourceInputPolicy,
    makeInventoryRoutingSourceInputPolicyRevision,
    makeInventoryRoutingSourceRequest
} from '../declarations/types-71.js';
export { makeMetadataPatchRequest, makeMetadataRequest } from '../declarations/types-72.js';
export { makeMoneyValue, makeOrderLineItemTax } from '../declarations/types-73.js';
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
} from '../declarations/types-74.js';
export {
    makeResolvePaymentLinkLineItemModifierRequest,
    makeResolvePaymentLinkLineItemModifiers,
    makeResolvePaymentLinkRequest,
    makeResolvePaymentLinkTextModifierRequest
} from '../declarations/types-75.js';
export { makeSubscriptionIntervalOption } from '../declarations/types-76.js';
export { makeTextModifierConfigRequest, makeTextModifierRequest, makeUpdatePaymentLinkRequest } from '../declarations/types-77.js';
export interface PaymentLinksResource {
    /**
 * Creates a payment link for the authenticated merchant. Line items may use fixed prices,
 * buyer-adjustable amounts, and buyer-adjustable quantities.
 * @see reference/paymentLinks.md#paymentlinkscreate
 * POST /v1/payment-links
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentLinks.create({name: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreatePaymentLinkRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<PaymentLink>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentLinks.md#paymentlinkscreate
     */
    createWithResponse(params: (InputValue<CreatePaymentLinkRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PaymentLinkResponse>>;
    /**
 * Returns a single payment link by ID. With expand=sales_summary, includes gross paid totals and
 * refunded totals per currency.
 * @see reference/paymentLinks.md#paymentlinksget
 * GET /v1/payment-links/{payment_link_id}
 * @example
 * client.paymentLinks.get("example")
 */
    get(payment_link_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"sales_summary" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<PaymentLink>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentLinks.md#paymentlinksget
     */
    getWithResponse(payment_link_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"sales_summary" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<PaymentLinkResponse>>;
    /**
 * Returns the sanitized buyer-facing payment-link snapshot and a private resolution context for
 * this browser operation.
 * @see reference/paymentLinks.md#paymentlinksgetpublic
 * GET /v1/payment-links/{payment_link_id}/public
 * @example
 * client.paymentLinks.getPublic("example")
 */
    getPublic(payment_link_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<PublicPaymentLinkResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentLinks.md#paymentlinksgetpublic
     */
    getPublicWithResponse(payment_link_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<SdkResponse<PublicPaymentLinkResponse>>;
    /**
 * Returns a paginated list of payment links for the authenticated merchant. Default order:
 * created_at descending, then payment_link_id descending.
 * @see reference/paymentLinks.md#paymentlinkslist
 * GET /v1/payment-links
 * @example
 * client.paymentLinks.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "payment_link_type"?: InputValue<Array<"standard" | "donation" | "event">>;
        "has_subscription_plan"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"sales_summary" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<PaymentLinkListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentLinks.md#paymentlinkslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "payment_link_type"?: InputValue<Array<"standard" | "donation" | "event">>;
        "has_subscription_plan"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"sales_summary" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<PaymentLinkListResponse>>;
    /** Iterate pages lazily.
     * @see reference/paymentLinks.md#paymentlinkslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "payment_link_type"?: InputValue<Array<"standard" | "donation" | "event">>;
        "has_subscription_plan"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"sales_summary" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PaymentLinkListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/paymentLinks.md#paymentlinkslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "payment_link_type"?: InputValue<Array<"standard" | "donation" | "event">>;
        "has_subscription_plan"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"sales_summary" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<PaymentLinkListResponse>>;
    /** Iterate items lazily.
     * @see reference/paymentLinks.md#paymentlinkslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "payment_link_type"?: InputValue<Array<"standard" | "donation" | "event">>;
        "has_subscription_plan"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"sales_summary" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PaymentLink>;
    /**
 * Creates a buyer checkout session from an active payment link. Catalog-backed modifier
 * availability is frozen onto the checkout session and selected modifiers are resolved onto the
 * backing order. For a retry after an uncertain response, reuse the original Idempotency-Key and
 * resolution_context.
 * @see reference/paymentLinks.md#paymentlinksresolve
 * POST /v1/payment-links/{payment_link_id}/resolve
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentLinks.resolve("example", {resolution_context: "example"}, { idempotencyKey:
 * idempotencyKey })
 */
    resolve(payment_link_id: InputValue<string>, params: (InputValue<ResolvePaymentLinkRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<never>): Promise<CheckoutSessionWithSecret>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentLinks.md#paymentlinksresolve
     */
    resolveWithResponse(payment_link_id: InputValue<string>, params: (InputValue<ResolvePaymentLinkRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<never>): Promise<SdkResponse<ResolvePaymentLinkResponse>>;
    /**
 * Updates a payment link. To replace line items, custom fields, or delivery methods, send the
 * complete array with `expected_version`.
 * @see reference/paymentLinks.md#paymentlinksupdate
 * PATCH /v1/payment-links/{payment_link_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentLinks.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(payment_link_id: InputValue<string>, params: (InputValue<UpdatePaymentLinkRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<PaymentLink>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentLinks.md#paymentlinksupdate
     */
    updateWithResponse(payment_link_id: InputValue<string>, params: (InputValue<UpdatePaymentLinkRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PaymentLinkResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly paymentLinks: PaymentLinksResource;
}
