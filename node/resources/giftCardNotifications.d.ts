export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { GiftCardCommandResponse } from '../declarations/GiftCardCommandResponse.js';
import type { GiftCardNotification } from '../declarations/GiftCardNotification.js';
import type { GiftCardNotificationListResponse } from '../declarations/GiftCardNotificationListResponse.js';
import type { GiftCardNotificationRecipientInput } from '../declarations/GiftCardNotificationRecipientInput.js';
import type { GiftCardNotificationResponse } from '../declarations/GiftCardNotificationResponse.js';
import type { GiftCardNotificationsCancelInput } from '../declarations/GiftCardNotificationsCancelInput.js';
import type { GiftCardNotificationsCancelResponse } from '../declarations/GiftCardNotificationsCancelResponse.js';
import type { GiftCardNotificationsCreateInput } from '../declarations/GiftCardNotificationsCreateInput.js';
import type { GiftCardNotificationsCreateResponse } from '../declarations/GiftCardNotificationsCreateResponse.js';
import type { GiftCardNotificationsGetInput } from '../declarations/GiftCardNotificationsGetInput.js';
import type { GiftCardNotificationsGetResponse } from '../declarations/GiftCardNotificationsGetResponse.js';
import type { GiftCardNotificationsListInput } from '../declarations/GiftCardNotificationsListInput.js';
import type { GiftCardNotificationsListResponse } from '../declarations/GiftCardNotificationsListResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface GiftCardNotificationsResource {
    /**
 * Cancels a notification before sending starts or after confirmed failure. A sending or unconfirmed notification cannot be canceled. Gift card value is preserved.
 * POST /v1/gift-card-notifications/{gift_card_notification_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardNotifications.cancel("example", {}, { idempotencyKey: idempotencyKey })
 */
    cancel(gift_card_notification_id: InputValue<string>, params: (InputValue<{  }>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<GiftCardCommandResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    cancelWithResponse(gift_card_notification_id: InputValue<string>, params: (InputValue<{  }>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<GiftCardNotificationsCancelResponse>>;
    /**
 * Creates a recipient email notification, immediately or up to 90 days from now. A resend creates a new resource with resend_of_notification_id. An unconfirmed send must be resolved before another send is requested. Sending does not change gift card value or order fulfillment.
 * POST /v1/gift-card-notifications
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardNotifications.create({gift_card_id: "example", recipient: {email: "example@example.invalid"}}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "gift_card_id": string; "recipient": GiftCardNotificationRecipientInput; "resend_of_notification_id"?: string; }>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<GiftCardCommandResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "gift_card_id": string; "recipient": GiftCardNotificationRecipientInput; "resend_of_notification_id"?: string; }>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<GiftCardNotificationsCreateResponse>>;
    /**
 * Retrieves a notification and its sending outcome. Sent means the sending provider accepted the message; it does not mean the recipient read it.
 * GET /v1/gift-card-notifications/{gift_card_notification_id}
 * @example
 * client.giftCardNotifications.get("example")
 */
    get(gift_card_notification_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<GiftCardNotificationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(gift_card_notification_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<GiftCardNotificationsGetResponse>>;
    /**
 * Lists recipient notification identities, schedules and delivery outcomes. No redemption codes or recipient access tokens are returned.
 * GET /v1/gift-card-notifications
 * @example
 * client.giftCardNotifications.list()
 */
    list(params?: { "X-Request-Id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "gift_card_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"bounced" | "canceled" | "failed" | "queued" | "scheduled" | "sending" | "sent" | "unconfirmed">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<GiftCardNotificationListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "X-Request-Id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "gift_card_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"bounced" | "canceled" | "failed" | "queued" | "scheduled" | "sending" | "sent" | "unconfirmed">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<GiftCardNotificationsListResponse>>;
    listPages(params?: { "X-Request-Id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "gift_card_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"bounced" | "canceled" | "failed" | "queued" | "scheduled" | "sending" | "sent" | "unconfirmed">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<GiftCardNotificationListResponse>;
    listPagesWithResponse(params?: { "X-Request-Id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "gift_card_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"bounced" | "canceled" | "failed" | "queued" | "scheduled" | "sending" | "sent" | "unconfirmed">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<GiftCardNotificationsListResponse>>;
    listItems(params?: { "X-Request-Id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "gift_card_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"bounced" | "canceled" | "failed" | "queued" | "scheduled" | "sending" | "sent" | "unconfirmed">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<GiftCardNotification>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly giftCardNotifications: GiftCardNotificationsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { GiftCardCommandResponse } from '../declarations/GiftCardCommandResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { GiftCardNotificationsCancelResponse } from '../declarations/GiftCardNotificationsCancelResponse.js';
export type { GiftCardNotificationRecipientInput } from '../declarations/GiftCardNotificationRecipientInput.js';
export type { GiftCardNotificationsCreateResponse } from '../declarations/GiftCardNotificationsCreateResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { GiftCardNotificationResponse } from '../declarations/GiftCardNotificationResponse.js';
export type { GiftCardNotificationsGetResponse } from '../declarations/GiftCardNotificationsGetResponse.js';
export type { GiftCardNotificationListResponse } from '../declarations/GiftCardNotificationListResponse.js';
export type { GiftCardNotificationsListResponse } from '../declarations/GiftCardNotificationsListResponse.js';
export type { GiftCardNotification } from '../declarations/GiftCardNotification.js';
export type { GiftCardNotificationsCancelInput } from '../declarations/GiftCardNotificationsCancelInput.js';
export type { GiftCardNotificationsCreateInput } from '../declarations/GiftCardNotificationsCreateInput.js';
export type { GiftCardNotificationsGetInput } from '../declarations/GiftCardNotificationsGetInput.js';
export type { GiftCardNotificationsListInput } from '../declarations/GiftCardNotificationsListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { GiftCardCommandResult } from '../declarations/GiftCardCommandResult.js';
export type { GiftCard } from '../declarations/GiftCard.js';
export type { GiftCardLoad } from '../declarations/GiftCardLoad.js';
export type { GiftCardFundingDispute } from '../declarations/GiftCardFundingDispute.js';
export type { GiftCardPurchaseRefundValueHold } from '../declarations/GiftCardPurchaseRefundValueHold.js';
export type { GiftCardPurchaseRefundAllocation } from '../declarations/GiftCardPurchaseRefundAllocation.js';
export type { GiftCardPurchaseRefundRecoveryDestination } from '../declarations/GiftCardPurchaseRefundRecoveryDestination.js';
export type { GiftCardPurchaseRefundValueAllocation } from '../declarations/GiftCardPurchaseRefundValueAllocation.js';
export type { GiftCardRedemption } from '../declarations/GiftCardRedemption.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { GiftCardNotificationDeliveryAttempt } from '../declarations/GiftCardNotificationDeliveryAttempt.js';
export type { GiftCardNotificationProviderOutcome } from '../declarations/GiftCardNotificationProviderOutcome.js';
export type { CancelGiftCardNotificationRequestInput } from '../declarations/CancelGiftCardNotificationRequestInput.js';
export type { CreateGiftCardNotificationRequestInput } from '../declarations/CreateGiftCardNotificationRequestInput.js';
export { makeGiftCardCommandResponse } from '../declarations/makeGiftCardCommandResponse.js';
export { makeGiftCardNotificationResponse } from '../declarations/makeGiftCardNotificationResponse.js';
export { makeGiftCardNotificationListResponse } from '../declarations/makeGiftCardNotificationListResponse.js';
export { makeGiftCardNotification } from '../declarations/makeGiftCardNotification.js';
export { makeGiftCardCommandResult } from '../declarations/makeGiftCardCommandResult.js';
export { makeGiftCard } from '../declarations/makeGiftCard.js';
export { makeGiftCardLoad } from '../declarations/makeGiftCardLoad.js';
export { makeGiftCardFundingDispute } from '../declarations/makeGiftCardFundingDispute.js';
export { makeGiftCardPurchaseRefundValueHold } from '../declarations/makeGiftCardPurchaseRefundValueHold.js';
export { makeGiftCardPurchaseRefundAllocation } from '../declarations/makeGiftCardPurchaseRefundAllocation.js';
export { makeGiftCardPurchaseRefundRecoveryDestination } from '../declarations/makeGiftCardPurchaseRefundRecoveryDestination.js';
export { makeGiftCardPurchaseRefundValueAllocation } from '../declarations/makeGiftCardPurchaseRefundValueAllocation.js';
export { makeGiftCardRedemption } from '../declarations/makeGiftCardRedemption.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeGiftCardNotificationDeliveryAttempt } from '../declarations/makeGiftCardNotificationDeliveryAttempt.js';
export { makeGiftCardNotificationProviderOutcome } from '../declarations/makeGiftCardNotificationProviderOutcome.js';
