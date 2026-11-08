import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { OrderEditPreview, OrderEditPreviewResponse, OrderEditPreviewsCreateParams } from '../declarations/types-39.js';
import type { RequestOptions } from '../declarations/types-51.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
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
    OrderEditRemovalRequestInput,
    OrderEditChargeRefund,
    OrderEditRemoval,
    OrderEditRemovalRequest
} from '../declarations/types-39.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-51.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { RefundChargeInput, RefundDestinationsInput } from '../declarations/types-50.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-37.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-13.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-49.js';
export { makeMoneyValue, makeOrderEditPreviewRequest, makeOrderEditRemovalRequest } from '../declarations/types-75.js';
export { makeRefundCharge, makeRefundDestinations } from '../declarations/types-77.js';
export interface OrderEditPreviewsResource {
    /**
 * Calculates a removal from a paid order without changing it. Only whole unassigned units are
 * removable; bundle components must all be unassigned. Original line quantity and pricing stay
 * unchanged. Each removed unit's refund includes its share of discounts and tax. Charges are
 * refunded only when you list them in charge_refunds. Invoice-collected, subscription-owned,
 * return-owned, and disputed orders, and orders with an unresolved inventory exception, cannot be
 * edited. Refund a line without fulfillment quantities, such as a digital item or service, with
 * `client.refunds.create`. This calculation holds no stock and sets aside no refundable amount.
 *
 * `POST /v1/order-edit-previews`
 * @see https://developers.withflintpay.com/docs/api/orders#createOrderEditPreview
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.orderEditPreviews.create({order_id: "ord_01KEZF7C0054GQKJ142A8X367A", remove_line_items:
 * [{order_line_item_id: "li_01KEZF7C008YPRCK7VDKTGWR31", quantity: 1}]})
 */
    create(params: OrderEditPreviewsCreateParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<OrderEditPreview, OrderEditPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly orderEditPreviews: OrderEditPreviewsResource;
}
