import type { ClientOptions } from '../declarations/types-4.js';
import type {
    DeliveryPickupAvailability,
    DeliveryPreview,
    DeliveryPreviewResponse,
    DeliveryPreviewsCreateInput
} from '../declarations/types-14.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
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
export type {
    DeliveryPreviewsCreateInput,
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
} from '../declarations/types-14.js';
export type { _SdkWithoutIdempotency, WeightInput, Weight } from '../declarations/types-65.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type {
    CreateDeliveryPreviewRequestInput,
    CreateDeliveryOptionsPreviewRequestInput,
    CreateDeliveryPickupLocationsPreviewRequestInput
} from '../declarations/types-6.js';
export type {
    DeliveryBuyerLocationRequestInput,
    DeliveryAddressRequestInput,
    DeliveryBuyerLocationInputAddressInput,
    DeliveryBuyerLocationInputCoordinateInput,
    DeliveryBuyerLocationResource,
    DeliveryBuyerLocationResourceAddress,
    DeliveryBuyerLocationResourceCoordinate,
    DeliveryCandidateOutcomeResource,
    DeliveryAddressAdvisoryResource,
    DeliveryArrivalEstimate,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryAddressRequest
} from '../declarations/types-12.js';
export type {
    DeliveryCoordinateRequestInput,
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
export type {
    CreateOrderLineItemRequestInput,
    CreateOrderLineItemInputVariantInput,
    CreateOrderLineItemInputBundleInput,
    CreateOrderLineItemInputCustomInput,
    CreateOrderLineItem,
    CreateOrderLineItemVariant,
    CreateOrderLineItemBundle,
    CreateOrderLineItemCustom
} from '../declarations/types-8.js';
export type {
    LineItemFulfillmentRequestInput,
    LineItemFulfillmentOriginRequestInput,
    LocationCoordinate,
    LineItemFulfillmentRequest,
    LineItemFulfillmentOriginRequest
} from '../declarations/types-30.js';
export type { GiftCardPurchaseDetailsRequestInput } from '../declarations/types-20.js';
export type {
    GiftCardPurchaseRecipientRequestInput,
    ImageReferenceRequestInput,
    GiftCardPurchaseRequest,
    GiftCardPurchaseRecipient,
    ImageReferenceRequest
} from '../declarations/types-21.js';
export type {
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderLineItemModifierRequestInput,
    OrderLineItemModifierInputCatalogInput,
    OrderLineItemModifierInputTextInput,
    OrderDraftLineItemTaxRequestInput,
    OrderDraftLineItemTaxCalculationRequestInput,
    OrderDraftTaxComponentRequestInput,
    OrderDraftTaxJurisdictionRequestInput,
    OrderDraftLineItemInventoryDemandRequest,
    OrderLineItemModifierRequest,
    OrderLineItemModifierInputCatalog,
    OrderLineItemModifierInputText
} from '../declarations/types-34.js';
export type { MetadataRequestInput, MetadataMap } from '../declarations/types-32.js';
export type { TextModifierRequestInput, TextModifierRequest, TaxJurisdiction } from '../declarations/types-50.js';
export type { SubscribedLineRequestInput, SubscribedLineRequest } from '../declarations/types-47.js';
export type {
    MoneyValueInput,
    MoneyValue,
    OrderCalculatedLineItemTax,
    NextAction,
    NextActionMerchantAccountSession
} from '../declarations/types-33.js';
export type { DimensionsInput, Dimensions } from '../declarations/types-17.js';
export type { AuthMode, Address } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { DeliveryWindowRequest, DeliveryShipmentDetails, DeliveryRecipientRequirement } from '../declarations/types-16.js';
export type { BuyerInstructionsConfig } from '../declarations/types-1.js';
export type { DeliveryQuoteExecutionLegResource, DeliveryQuoteLineItemResource } from '../declarations/types-15.js';
export type { TaxCalculationRequest, TaxComponentRequest } from '../declarations/types-49.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export {
    makeCreateDeliveryOptionsPreviewRequest,
    makeCreateDeliveryPickupLocationsPreviewRequest,
    makeCreateDeliveryPreviewRequest
} from '../declarations/types-67.js';
export {
    makeCreateOrderLineItemInputBundle,
    makeCreateOrderLineItemInputCustom,
    makeCreateOrderLineItemInputVariant,
    makeCreateOrderLineItemRequest
} from '../declarations/types-68.js';
export {
    makeDeliveryAddressRequest,
    makeDeliveryBuyerLocationInputAddress,
    makeDeliveryBuyerLocationInputCoordinate,
    makeDeliveryBuyerLocationRequest,
    makeDeliveryCoordinateRequest,
    makeDeliveryPickupAvailabilityMaximumDistanceRequest
} from '../declarations/types-69.js';
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
export { makeLineItemFulfillmentOriginRequest, makeLineItemFulfillmentRequest, makeMetadataRequest } from '../declarations/types-72.js';
export {
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
} from '../declarations/types-73.js';
export {
    makeSubscribedLineRequest,
    makeTaxCalculationRequest,
    makeTaxComponentRequest,
    makeTaxJurisdiction
} from '../declarations/types-76.js';
export { makeTextModifierRequest } from '../declarations/types-77.js';
export { makeWeight } from '../declarations/types-78.js';
export interface DeliveryPreviewsResource {
    /**
 * Computes delivery options with mode delivery_options or up to 25 pickup locations with mode
 * pickup_locations. Creates no resource, holds no inventory, and does not change the current
 * selection. Pickup locations are nearest first when a buyer location is provided. Merchant
 * callers receive diagnostics. Checkout credentials may use only pickup_locations for their own
 * checkout session.
 * @see reference/deliveryPreviews.md#deliverypreviewscreate
 * POST /v1/delivery-previews
 * @example
 * client.deliveryPreviews.create({body: {currency: "USD", line_items: [{type: "variant",
 * variant_id: "example"}], mode: "delivery_options"}})
 */
    create(input: DeliveryPreviewsCreateInput, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<((DeliveryPreview) | (DeliveryPickupAvailability) | (Record<string, unknown>))>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryPreviews.md#deliverypreviewscreate
     */
    createWithResponse(input: DeliveryPreviewsCreateInput, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<SdkResponse<DeliveryPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryPreviews: DeliveryPreviewsResource;
}
