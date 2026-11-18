import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { OrderEditPreview, OrderEditPreviewResponse, OrderEditPreviewsCreateParams } from '../declarations/types-46.js';
import type { RequestOptions } from '../declarations/types-61.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-79.js';
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
    OrderEditPreviewsCreateParams,
    OrderEditPreview,
    OrderEditPreviewResponse,
    OrderEditPreviewRequestInput,
    OrderLineItemModifierRequestModelInput,
    OrderLineItemModifierInputCatalogRequestInput,
    OrderLineItemModifierInputTextRequestInput,
    OrderEditRemovalRequestInput,
    OrderEditPreviewAddition,
    OrderEditRemoval,
    OrderEditRemovalRequest
} from '../declarations/types-46.js';
export type { _SdkWithoutIdempotency, WeightRequestInput } from '../declarations/types-79.js';
export type { RequestOptions } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type {
    CreateOrderLineItemRequestInput,
    CreateOrderLineItemInputVariantInput,
    CreateOrderLineItemInputBundleInput,
    CreateOrderLineItemInputCustomInput
} from '../declarations/types-11.js';
export type { LineItemFulfillmentRequestModelInput, LineItemFulfillmentOriginRequestModelInput } from '../declarations/types-40.js';
export type { GiftCardPurchaseDetailsRequestInput, GiftCardPurchaseRecipientRequestInput } from '../declarations/types-30.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-44.js';
export type { ImageReferenceRequestInput, ImageReferenceRequest } from '../declarations/types-31.js';
export type {
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderDraftLineItemTaxRequestModelInput,
    OrderDraftLineItemTaxCalculationRequestModelInput,
    OrderDraftTaxComponentRequestModelInput,
    OrderDraftTaxJurisdictionRequestModelInput,
    OrderEditChargeRefund,
    OrderDraftLineItemInventoryDemandRequest
} from '../declarations/types-45.js';
export type { MetadataRequestInput, MetadataMap } from '../declarations/types-43.js';
export type { TextModifierRequestInput, TextModifierRequest } from '../declarations/types-74.js';
export type { SubscribedLineRequestModelInput } from '../declarations/types-68.js';
export type { DimensionsRequestInput } from '../declarations/types-25.js';
export type { RefundChargeInput, RefundDestinationsInput, ReadinessMerchantAccountSession } from '../declarations/types-60.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-62.js';
export {
    makeCreateOrderLineItemInputBundle,
    makeCreateOrderLineItemInputCustom,
    makeCreateOrderLineItemInputVariant,
    makeCreateOrderLineItemRequest
} from '../declarations/types-83.js';
export {
    makeDimensionsRequest,
    makeGiftCardPurchaseDetailsRequest,
    makeGiftCardPurchaseRecipientRequest,
    makeImageReferenceRequest
} from '../declarations/types-86.js';
export { makeLineItemFulfillmentOriginRequestModel, makeLineItemFulfillmentRequestModel } from '../declarations/types-87.js';
export {
    makeMetadataRequest,
    makeMoneyValue,
    makeOrderDraftLineItemInventoryDemandRequest,
    makeOrderDraftLineItemTaxCalculationRequestModel,
    makeOrderDraftLineItemTaxRequestModel,
    makeOrderDraftTaxComponentRequestModel,
    makeOrderDraftTaxJurisdictionRequestModel,
    makeOrderEditPreviewRequest,
    makeOrderEditRemovalRequest,
    makeOrderLineItemModifierInputCatalogRequest,
    makeOrderLineItemModifierInputTextRequest,
    makeOrderLineItemModifierRequestModel
} from '../declarations/types-88.js';
export { makeRefundCharge, makeRefundDestinations } from '../declarations/types-90.js';
export { makeSubscribedLineRequestModel } from '../declarations/types-92.js';
export { makeTextModifierRequest } from '../declarations/types-93.js';
export { makeWeightRequest } from '../declarations/types-94.js';
export interface OrderEditPreviewsResource {
    /**
 * Calculates removing items from a paid order, adding items to it, or both, without changing it.
 * Only whole unassigned units are removable; bundle components must all be unassigned. Original
 * line quantity and pricing stay unchanged. Each removed unit's value includes its share of
 * discounts and tax. Charges are released only when you list them in charge_refunds. Added lines
 * use the line item create shape, are priced and taxed as usual without promotions, and must be
 * lines Flint can fulfill: variant, bundle, and custom lines with a delivery requirement. The
 * removed value and released charges pay for added lines first, removals in request order and then
 * charges; the rest is refund_money, and what the added lines cost beyond that is
 * amount_due_money. Invoice-collected, subscription-owned, return-owned, and disputed orders, and
 * orders with an unresolved inventory exception, cannot be edited. Refund a line without
 * fulfillment quantities, such as a digital item or service, with `client.refunds.create`. This
 * calculation holds no stock and sets aside no refundable amount.
 *
 * `POST /v1/order-edit-previews`
 * @see https://developers.withflintpay.com/docs/api/orders#createOrderEditPreview
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.orderEditPreviews.create({order_id: "ord_01KEZF7C0054GQKJ142A8X367A"})
 */
    create(params: OrderEditPreviewsCreateParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<OrderEditPreview, OrderEditPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly orderEditPreviews: OrderEditPreviewsResource;
}
