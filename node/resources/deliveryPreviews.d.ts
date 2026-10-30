import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    DeliveryPickupAvailability,
    DeliveryPreview,
    DeliveryPreviewResponse,
    DeliveryPreviewsCreateParams
} from '../declarations/types-16.js';
import type { RequestOptions } from '../declarations/types-47.js';
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
    DeliveryPreviewsCreateParams,
    DeliveryPreview,
    DeliveryPickupAvailability,
    DeliveryPreviewResponse,
    DeliveryPreviewRoutingSourceInput,
    DeliveryPickupAvailabilityMaximumDistanceRequestInput,
    DeliveryPreviewChoiceGroupResource,
    DeliveryOptionProjection,
    DeliveryPlan,
    DeliveryPickupDetails,
    DeliveryPickupAvailabilityLocationResource,
    DeliveryPickupAvailabilityCandidateOutcome,
    DeliveryPickupAvailabilityMethodResource,
    DeliveryPickupAvailabilityLocationSummary,
    DeliveryPickupAvailabilityDiagnostic
} from '../declarations/types-16.js';
export type { _SdkWithoutIdempotency, WeightInput, Weight } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type {
    CreateDeliveryPreviewRequestInput,
    CreateDeliveryOptionsPreviewRequestInput,
    CreateDeliveryPickupLocationsPreviewRequestInput
} from '../declarations/types-7.js';
export type {
    DeliveryBuyerLocationRequestInput,
    DeliveryAddressRequestInput,
    DeliveryCoordinateRequestInput,
    DeliveryBuyerLocationInputAddressInput,
    DeliveryBuyerLocationInputCoordinateInput,
    DeliveryBuyerLocationResource,
    DeliveryBuyerLocationResourceAddress,
    DeliveryBuyerLocationResourceCoordinate,
    DeliveryCandidateOutcomeResource,
    DeliveryAddressAdvisoryResource,
    DeliveryArrivalEstimate,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext,
    DeliveryAddressRequest
} from '../declarations/types-14.js';
export type {
    CreateOrderLineItemRequestInput,
    CreateOrderLineItemInputVariantInput,
    CreateOrderLineItemInputBundleInput,
    CreateOrderLineItemInputCustomInput,
    CreateOrderLineItem,
    CreateOrderLineItemVariant,
    CreateOrderLineItemBundle,
    CreateOrderLineItemCustom
} from '../declarations/types-9.js';
export type {
    LineItemFulfillmentRequestInput,
    LineItemFulfillmentOriginRequestInput,
    LocationCoordinate,
    LineItemFulfillmentRequest,
    LineItemFulfillmentOriginRequest
} from '../declarations/types-32.js';
export type {
    GiftCardPurchaseDetailsRequestInput,
    GiftCardPurchaseRecipientRequestInput,
    GiftCardPurchaseRequest,
    GiftCardPurchaseRecipient
} from '../declarations/types-24.js';
export type { ImageReferenceRequestInput, ImageReferenceRequest } from '../declarations/types-25.js';
export type {
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderDraftLineItemTaxRequestInput,
    OrderDraftLineItemTaxCalculationRequestInput,
    OrderDraftTaxComponentRequestInput,
    OrderDraftTaxJurisdictionRequestInput,
    OrderDraftLineItemInventoryDemandRequest,
    OrderCalculatedLineItemTax
} from '../declarations/types-36.js';
export type { MetadataRequestInput, MetadataMap } from '../declarations/types-34.js';
export type {
    OrderLineItemModifierRequestInput,
    OrderLineItemModifierInputCatalogInput,
    OrderLineItemModifierInputTextInput,
    OrderLineItemModifierRequest,
    OrderLineItemModifierInputCatalog,
    OrderLineItemModifierInputText
} from '../declarations/types-37.js';
export type {
    TextModifierRequestInput,
    TextModifierRequest,
    TaxCalculationRequest,
    TaxComponentRequest,
    TaxJurisdiction
} from '../declarations/types-57.js';
export type { SubscribedLineRequestInput, SubscribedLineRequest } from '../declarations/types-53.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-35.js';
export type { DimensionsInput, Dimensions } from '../declarations/types-20.js';
export type { AuthMode, Address } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type {
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryLocationSummaryResource,
    DeliveryMerchantDiagnostic,
    DeliveryEligibilityMismatch
} from '../declarations/types-15.js';
export type { DeliveryWindowRequest, DeliveryShipmentDetails } from '../declarations/types-19.js';
export type { BuyerInstructionsConfig } from '../declarations/types-2.js';
export type { DeliveryQuoteExecutionLegResource, DeliveryRecipientRequirement, DeliveryQuoteLineItemResource } from '../declarations/types-18.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export {
    makeCreateDeliveryOptionsPreviewRequest,
    makeCreateDeliveryPickupLocationsPreviewRequest,
    makeCreateDeliveryPreviewRequest
} from '../declarations/types-63.js';
export {
    makeCreateOrderLineItemInputBundle,
    makeCreateOrderLineItemInputCustom,
    makeCreateOrderLineItemInputVariant,
    makeCreateOrderLineItemRequest
} from '../declarations/types-64.js';
export { makeDeliveryAddressRequest } from '../declarations/types-65.js';
export {
    makeDeliveryBuyerLocationInputAddress,
    makeDeliveryBuyerLocationInputCoordinate,
    makeDeliveryBuyerLocationRequest,
    makeDeliveryCoordinateRequest,
    makeDeliveryPickupAvailabilityMaximumDistanceRequest,
    makeDeliveryPreviewRoutingSource
} from '../declarations/types-66.js';
export {
    makeDeliveryRecipientRequirement,
    makeDeliveryWindowRequest,
    makeDimensions,
    makeGiftCardPurchaseDetailsRequest,
    makeGiftCardPurchaseRecipientRequest
} from '../declarations/types-67.js';
export { makeImageReferenceRequest } from '../declarations/types-68.js';
export {
    makeLineItemFulfillmentOriginRequest,
    makeLineItemFulfillmentRequest,
    makeMetadataRequest,
    makeMoneyValue,
    makeOrderCalculatedLineItemTax,
    makeOrderDraftLineItemInventoryDemandRequest,
    makeOrderDraftLineItemTaxCalculationRequest,
    makeOrderDraftLineItemTaxRequest,
    makeOrderDraftTaxComponentRequest,
    makeOrderDraftTaxJurisdictionRequest,
    makeOrderLineItemModifierInputCatalog,
    makeOrderLineItemModifierInputText,
    makeOrderLineItemModifierRequest
} from '../declarations/types-69.js';
export { makeSubscribedLineRequest } from '../declarations/types-72.js';
export { makeTaxCalculationRequest, makeTaxComponentRequest, makeTaxJurisdiction, makeTextModifierRequest } from '../declarations/types-73.js';
export { makeWeight } from '../declarations/types-75.js';
export interface DeliveryPreviewsResource {
    /**
 * Computes delivery options with mode delivery_options or up to 25 pickup locations with mode
 * pickup_locations. Creates no resource, holds no inventory, and does not change the current
 * selection. Pickup locations are nearest first when a buyer location is provided. Merchant
 * callers receive diagnostics. Checkout credentials may use only pickup_locations for their own
 * checkout session.
 *
 * `POST /v1/delivery-previews`
 * @see https://developers.withflintpay.com/docs/api/delivery-previews#createDeliveryPreview
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryPreviews.create({currency: "USD", line_items: [{type: "variant", variant_id:
 * "var_01ARZ3NDEKTSV4RRFFQ69G5FAV"}], mode: "delivery_options"})
 */
    create(params: DeliveryPreviewsCreateParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<((DeliveryPreview) | (DeliveryPickupAvailability) | (Record<string, unknown>)), DeliveryPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryPreviews: DeliveryPreviewsResource;
}
