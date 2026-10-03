export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { Result, InputValue } from '../runtime.js';
import type { ActionResponse } from '../declarations/ActionResponse.js';
import type { AddReturnLineItemResponse } from '../declarations/AddReturnLineItemResponse.js';
import type { BuyerCreditNote } from '../declarations/BuyerCreditNote.js';
import type { BuyerCreditNoteListResponse } from '../declarations/BuyerCreditNoteListResponse.js';
import type { BuyerCreditNoteResponse } from '../declarations/BuyerCreditNoteResponse.js';
import type { BuyerGiftCard } from '../declarations/BuyerGiftCard.js';
import type { BuyerGiftCardListResponse } from '../declarations/BuyerGiftCardListResponse.js';
import type { BuyerGiftCardResponse } from '../declarations/BuyerGiftCardResponse.js';
import type { BuyerGiftCardTransaction } from '../declarations/BuyerGiftCardTransaction.js';
import type { BuyerGiftCardTransactionListResponse } from '../declarations/BuyerGiftCardTransactionListResponse.js';
import type { BuyerInvoice } from '../declarations/BuyerInvoice.js';
import type { BuyerInvoiceListResponse } from '../declarations/BuyerInvoiceListResponse.js';
import type { BuyerInvoiceResponse } from '../declarations/BuyerInvoiceResponse.js';
import type { BuyerRefund } from '../declarations/BuyerRefund.js';
import type { BuyerRefundListResponse } from '../declarations/BuyerRefundListResponse.js';
import type { CancelSubscriptionResponse } from '../declarations/CancelSubscriptionResponse.js';
import type { CheckoutSessionLaunchResponse } from '../declarations/CheckoutSessionLaunchResponse.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateReturnEligibilityCheckRequestInput } from '../declarations/CreateReturnEligibilityCheckRequestInput.js';
import type { CreateReturnPreviewResponse } from '../declarations/CreateReturnPreviewResponse.js';
import type { CreateReturnResolutionPreviewRequestInput } from '../declarations/CreateReturnResolutionPreviewRequestInput.js';
import type { CustomerAddress } from '../declarations/CustomerAddress.js';
import type { CustomerAddressListResponse } from '../declarations/CustomerAddressListResponse.js';
import type { CustomerAddressResponse } from '../declarations/CustomerAddressResponse.js';
import type { CustomerDeletionRequest } from '../declarations/CustomerDeletionRequest.js';
import type { CustomerDeletionRequestListResponse } from '../declarations/CustomerDeletionRequestListResponse.js';
import type { CustomerDeletionRequestResponse } from '../declarations/CustomerDeletionRequestResponse.js';
import type { CustomerEmailPreferencesResponse } from '../declarations/CustomerEmailPreferencesResponse.js';
import type { CustomerResponse } from '../declarations/CustomerResponse.js';
import type { EmailChangeRequestResponse } from '../declarations/EmailChangeRequestResponse.js';
import type { Fulfillment } from '../declarations/Fulfillment.js';
import type { FulfillmentListResponse } from '../declarations/FulfillmentListResponse.js';
import type { InvoiceCheckoutSessionResponse } from '../declarations/InvoiceCheckoutSessionResponse.js';
import type { ListReturnsResponse } from '../declarations/ListReturnsResponse.js';
import type { MeCancelReturnInput } from '../declarations/MeCancelReturnInput.js';
import type { MeCancelReturnResponse } from '../declarations/MeCancelReturnResponse.js';
import type { MeCancelSubscriptionInput } from '../declarations/MeCancelSubscriptionInput.js';
import type { MeCancelSubscriptionResponse } from '../declarations/MeCancelSubscriptionResponse.js';
import type { MeChangeSubscriptionPaymentMethodInput } from '../declarations/MeChangeSubscriptionPaymentMethodInput.js';
import type { MeChangeSubscriptionPaymentMethodResponse } from '../declarations/MeChangeSubscriptionPaymentMethodResponse.js';
import type { MeConfirmEmailChangeRequestInput } from '../declarations/MeConfirmEmailChangeRequestInput.js';
import type { MeConfirmEmailChangeRequestResponse } from '../declarations/MeConfirmEmailChangeRequestResponse.js';
import type { MeCreateAddressInput } from '../declarations/MeCreateAddressInput.js';
import type { MeCreateAddressResponse } from '../declarations/MeCreateAddressResponse.js';
import type { MeCreateDeletionRequestInput } from '../declarations/MeCreateDeletionRequestInput.js';
import type { MeCreateDeletionRequestResponse } from '../declarations/MeCreateDeletionRequestResponse.js';
import type { MeCreateEmailChangeRequestInput } from '../declarations/MeCreateEmailChangeRequestInput.js';
import type { MeCreateEmailChangeRequestResponse } from '../declarations/MeCreateEmailChangeRequestResponse.js';
import type { MeCreateInvoiceCheckoutSessionInput } from '../declarations/MeCreateInvoiceCheckoutSessionInput.js';
import type { MeCreateInvoiceCheckoutSessionResponse } from '../declarations/MeCreateInvoiceCheckoutSessionResponse.js';
import type { MeCreateReturnInput } from '../declarations/MeCreateReturnInput.js';
import type { MeCreateReturnPreviewInput } from '../declarations/MeCreateReturnPreviewInput.js';
import type { MeCreateReturnPreviewResponse } from '../declarations/MeCreateReturnPreviewResponse.js';
import type { MeCreateReturnResolutionCheckoutSessionInput } from '../declarations/MeCreateReturnResolutionCheckoutSessionInput.js';
import type { MeCreateReturnResolutionCheckoutSessionResponse } from '../declarations/MeCreateReturnResolutionCheckoutSessionResponse.js';
import type { MeCreateReturnResponse } from '../declarations/MeCreateReturnResponse.js';
import type { MeDeleteAddressInput } from '../declarations/MeDeleteAddressInput.js';
import type { MeDeleteAddressResponse } from '../declarations/MeDeleteAddressResponse.js';
import type { MeGetAddressInput } from '../declarations/MeGetAddressInput.js';
import type { MeGetAddressResponse } from '../declarations/MeGetAddressResponse.js';
import type { MeGetCreditNoteInput } from '../declarations/MeGetCreditNoteInput.js';
import type { MeGetCreditNotePDFInput } from '../declarations/MeGetCreditNotePDFInput.js';
import type { MeGetCreditNotePDFResponse } from '../declarations/MeGetCreditNotePDFResponse.js';
import type { MeGetCreditNoteResponse } from '../declarations/MeGetCreditNoteResponse.js';
import type { MeGetDeletionRequestInput } from '../declarations/MeGetDeletionRequestInput.js';
import type { MeGetDeletionRequestResponse } from '../declarations/MeGetDeletionRequestResponse.js';
import type { MeGetEmailPreferencesInput } from '../declarations/MeGetEmailPreferencesInput.js';
import type { MeGetEmailPreferencesResponse } from '../declarations/MeGetEmailPreferencesResponse.js';
import type { MeGetGiftCardInput } from '../declarations/MeGetGiftCardInput.js';
import type { MeGetGiftCardResponse } from '../declarations/MeGetGiftCardResponse.js';
import type { MeGetInput } from '../declarations/MeGetInput.js';
import type { MeGetInvoiceInput } from '../declarations/MeGetInvoiceInput.js';
import type { MeGetInvoicePDFInput } from '../declarations/MeGetInvoicePDFInput.js';
import type { MeGetInvoicePDFResponse } from '../declarations/MeGetInvoicePDFResponse.js';
import type { MeGetInvoiceResponse } from '../declarations/MeGetInvoiceResponse.js';
import type { MeGetOrderInput } from '../declarations/MeGetOrderInput.js';
import type { MeGetOrderResponse } from '../declarations/MeGetOrderResponse.js';
import type { MeGetPaymentMethodInput } from '../declarations/MeGetPaymentMethodInput.js';
import type { MeGetPaymentMethodResponse } from '../declarations/MeGetPaymentMethodResponse.js';
import type { MeGetResponse } from '../declarations/MeGetResponse.js';
import type { MeGetReturnInput } from '../declarations/MeGetReturnInput.js';
import type { MeGetReturnResponse } from '../declarations/MeGetReturnResponse.js';
import type { MeGetSubscriptionInput } from '../declarations/MeGetSubscriptionInput.js';
import type { MeGetSubscriptionResponse } from '../declarations/MeGetSubscriptionResponse.js';
import type { MeListAddressesInput } from '../declarations/MeListAddressesInput.js';
import type { MeListAddressesResponse } from '../declarations/MeListAddressesResponse.js';
import type { MeListCreditNotesInput } from '../declarations/MeListCreditNotesInput.js';
import type { MeListCreditNotesResponse } from '../declarations/MeListCreditNotesResponse.js';
import type { MeListDeletionRequestsInput } from '../declarations/MeListDeletionRequestsInput.js';
import type { MeListDeletionRequestsResponse } from '../declarations/MeListDeletionRequestsResponse.js';
import type { MeListFulfillmentsInput } from '../declarations/MeListFulfillmentsInput.js';
import type { MeListFulfillmentsResponse } from '../declarations/MeListFulfillmentsResponse.js';
import type { MeListGiftCardTransactionsInput } from '../declarations/MeListGiftCardTransactionsInput.js';
import type { MeListGiftCardTransactionsResponse } from '../declarations/MeListGiftCardTransactionsResponse.js';
import type { MeListGiftCardsInput } from '../declarations/MeListGiftCardsInput.js';
import type { MeListGiftCardsResponse } from '../declarations/MeListGiftCardsResponse.js';
import type { MeListInvoicesInput } from '../declarations/MeListInvoicesInput.js';
import type { MeListInvoicesResponse } from '../declarations/MeListInvoicesResponse.js';
import type { MeListOrderActivitiesInput } from '../declarations/MeListOrderActivitiesInput.js';
import type { MeListOrderActivitiesResponse } from '../declarations/MeListOrderActivitiesResponse.js';
import type { MeListOrdersInput } from '../declarations/MeListOrdersInput.js';
import type { MeListOrdersResponse } from '../declarations/MeListOrdersResponse.js';
import type { MeListPackagesInput } from '../declarations/MeListPackagesInput.js';
import type { MeListPackagesResponse } from '../declarations/MeListPackagesResponse.js';
import type { MeListPaymentMethodsInput } from '../declarations/MeListPaymentMethodsInput.js';
import type { MeListPaymentMethodsResponse } from '../declarations/MeListPaymentMethodsResponse.js';
import type { MeListPaymentsInput } from '../declarations/MeListPaymentsInput.js';
import type { MeListPaymentsResponse } from '../declarations/MeListPaymentsResponse.js';
import type { MeListRefundsInput } from '../declarations/MeListRefundsInput.js';
import type { MeListRefundsResponse } from '../declarations/MeListRefundsResponse.js';
import type { MeListReturnsInput } from '../declarations/MeListReturnsInput.js';
import type { MeListReturnsResponse } from '../declarations/MeListReturnsResponse.js';
import type { MeListShipmentsInput } from '../declarations/MeListShipmentsInput.js';
import type { MeListShipmentsResponse } from '../declarations/MeListShipmentsResponse.js';
import type { MeListSubscriptionsInput } from '../declarations/MeListSubscriptionsInput.js';
import type { MeListSubscriptionsResponse } from '../declarations/MeListSubscriptionsResponse.js';
import type { MePauseSubscriptionInput } from '../declarations/MePauseSubscriptionInput.js';
import type { MePauseSubscriptionResponse } from '../declarations/MePauseSubscriptionResponse.js';
import type { MeReactivateSubscriptionInput } from '../declarations/MeReactivateSubscriptionInput.js';
import type { MeReactivateSubscriptionResponse } from '../declarations/MeReactivateSubscriptionResponse.js';
import type { MeRemoveGiftCardInput } from '../declarations/MeRemoveGiftCardInput.js';
import type { MeRemoveGiftCardResponse } from '../declarations/MeRemoveGiftCardResponse.js';
import type { MeRemovePaymentMethodInput } from '../declarations/MeRemovePaymentMethodInput.js';
import type { MeRemovePaymentMethodResponse } from '../declarations/MeRemovePaymentMethodResponse.js';
import type { MeResendOrderReceiptInput } from '../declarations/MeResendOrderReceiptInput.js';
import type { MeResendOrderReceiptResponse } from '../declarations/MeResendOrderReceiptResponse.js';
import type { MeResumeSubscriptionInput } from '../declarations/MeResumeSubscriptionInput.js';
import type { MeResumeSubscriptionResponse } from '../declarations/MeResumeSubscriptionResponse.js';
import type { MeSaveGiftCardInput } from '../declarations/MeSaveGiftCardInput.js';
import type { MeSaveGiftCardResponse } from '../declarations/MeSaveGiftCardResponse.js';
import type { MeSavePaymentMethodInput } from '../declarations/MeSavePaymentMethodInput.js';
import type { MeSavePaymentMethodResponse } from '../declarations/MeSavePaymentMethodResponse.js';
import type { MeSetDefaultAddressInput } from '../declarations/MeSetDefaultAddressInput.js';
import type { MeSetDefaultAddressResponse } from '../declarations/MeSetDefaultAddressResponse.js';
import type { MeSetDefaultPaymentMethodInput } from '../declarations/MeSetDefaultPaymentMethodInput.js';
import type { MeSetDefaultPaymentMethodResponse } from '../declarations/MeSetDefaultPaymentMethodResponse.js';
import type { MeUpdateAddressInput } from '../declarations/MeUpdateAddressInput.js';
import type { MeUpdateAddressResponse } from '../declarations/MeUpdateAddressResponse.js';
import type { MeUpdateEmailPreferencesInput } from '../declarations/MeUpdateEmailPreferencesInput.js';
import type { MeUpdateEmailPreferencesResponse } from '../declarations/MeUpdateEmailPreferencesResponse.js';
import type { MeUpdateInput } from '../declarations/MeUpdateInput.js';
import type { MeUpdateResponse } from '../declarations/MeUpdateResponse.js';
import type { Merchant } from '../declarations/Merchant.js';
import type { MerchantAccountSession } from '../declarations/MerchantAccountSession.js';
import type { MerchantAccountSessionCreateRequest } from '../declarations/MerchantAccountSessionCreateRequest.js';
import type { MerchantAccountSessionCreateRequestInput } from '../declarations/MerchantAccountSessionCreateRequestInput.js';
import type { MerchantAccountSessionEffectivePolicy } from '../declarations/MerchantAccountSessionEffectivePolicy.js';
import type { MerchantAccountSessionEffectivePolicyInput } from '../declarations/MerchantAccountSessionEffectivePolicyInput.js';
import type { MerchantAccountSessionInput } from '../declarations/MerchantAccountSessionInput.js';
import type { MerchantAccountSessionRefreshRequest } from '../declarations/MerchantAccountSessionRefreshRequest.js';
import type { MerchantAccountSessionRefreshRequestInput } from '../declarations/MerchantAccountSessionRefreshRequestInput.js';
import type { MerchantAccountSessionResponse } from '../declarations/MerchantAccountSessionResponse.js';
import type { MerchantAccountSessionResponseInput } from '../declarations/MerchantAccountSessionResponseInput.js';
import type { MerchantAccountSessionStripeCollectionOptions } from '../declarations/MerchantAccountSessionStripeCollectionOptions.js';
import type { MerchantAccountSessionStripeCollectionOptionsInput } from '../declarations/MerchantAccountSessionStripeCollectionOptionsInput.js';
import type { MerchantAccountSessionStripeComponentLaunch } from '../declarations/MerchantAccountSessionStripeComponentLaunch.js';
import type { MerchantAccountSessionStripeComponentLaunchInput } from '../declarations/MerchantAccountSessionStripeComponentLaunchInput.js';
import type { MerchantAccountSessionStripeComponentProps } from '../declarations/MerchantAccountSessionStripeComponentProps.js';
import type { MerchantAccountSessionStripeComponentPropsInput } from '../declarations/MerchantAccountSessionStripeComponentPropsInput.js';
import type { MerchantAccountSessionStripeLaunch } from '../declarations/MerchantAccountSessionStripeLaunch.js';
import type { MerchantAccountSessionStripeLaunchInput } from '../declarations/MerchantAccountSessionStripeLaunchInput.js';
import type { MerchantAccountSessionStripeRequirements } from '../declarations/MerchantAccountSessionStripeRequirements.js';
import type { MerchantAccountSessionStripeRequirementsInput } from '../declarations/MerchantAccountSessionStripeRequirementsInput.js';
import type { MerchantAccountSessionsCreateInput } from '../declarations/MerchantAccountSessionsCreateInput.js';
import type { MerchantAccountSessionsCreateResponse } from '../declarations/MerchantAccountSessionsCreateResponse.js';
import type { MerchantAccountSessionsRefreshInput } from '../declarations/MerchantAccountSessionsRefreshInput.js';
import type { MerchantAccountSessionsRefreshResponse } from '../declarations/MerchantAccountSessionsRefreshResponse.js';
import type { MerchantBillingBalance } from '../declarations/MerchantBillingBalance.js';
import type { MerchantBillingBalanceInput } from '../declarations/MerchantBillingBalanceInput.js';
import type { MerchantBillingBalanceListResponse } from '../declarations/MerchantBillingBalanceListResponse.js';
import type { MerchantBillingBalanceListResponseInput } from '../declarations/MerchantBillingBalanceListResponseInput.js';
import type { MerchantBillingBalanceResponse } from '../declarations/MerchantBillingBalanceResponse.js';
import type { MerchantBillingBalanceResponseInput } from '../declarations/MerchantBillingBalanceResponseInput.js';
import type { MerchantBillingBalancesGetInput } from '../declarations/MerchantBillingBalancesGetInput.js';
import type { MerchantBillingBalancesGetResponse } from '../declarations/MerchantBillingBalancesGetResponse.js';
import type { MerchantBillingBalancesListInput } from '../declarations/MerchantBillingBalancesListInput.js';
import type { MerchantBillingBalancesListResponse } from '../declarations/MerchantBillingBalancesListResponse.js';
import type { MerchantInput } from '../declarations/MerchantInput.js';
import type { MerchantReadinessAxis } from '../declarations/MerchantReadinessAxis.js';
import type { MerchantReadinessAxisInput } from '../declarations/MerchantReadinessAxisInput.js';
import type { MerchantReadinessRequirements } from '../declarations/MerchantReadinessRequirements.js';
import type { MerchantReadinessRequirementsInput } from '../declarations/MerchantReadinessRequirementsInput.js';
import type { MerchantResponse } from '../declarations/MerchantResponse.js';
import type { MerchantResponseInput } from '../declarations/MerchantResponseInput.js';
import type { MerchantSubscriptionInvoice } from '../declarations/MerchantSubscriptionInvoice.js';
import type { MerchantSubscriptionInvoiceInput } from '../declarations/MerchantSubscriptionInvoiceInput.js';
import type { MerchantSubscriptionInvoiceLine } from '../declarations/MerchantSubscriptionInvoiceLine.js';
import type { MerchantSubscriptionInvoiceLineInput } from '../declarations/MerchantSubscriptionInvoiceLineInput.js';
import type { MerchantSubscriptionInvoiceListResponse } from '../declarations/MerchantSubscriptionInvoiceListResponse.js';
import type { MerchantSubscriptionInvoiceListResponseInput } from '../declarations/MerchantSubscriptionInvoiceListResponseInput.js';
import type { MerchantSubscriptionInvoiceResponse } from '../declarations/MerchantSubscriptionInvoiceResponse.js';
import type { MerchantSubscriptionInvoiceResponseInput } from '../declarations/MerchantSubscriptionInvoiceResponseInput.js';
import type { MerchantSubscriptionInvoicesGetInput } from '../declarations/MerchantSubscriptionInvoicesGetInput.js';
import type { MerchantSubscriptionInvoicesGetResponse } from '../declarations/MerchantSubscriptionInvoicesGetResponse.js';
import type { MerchantSubscriptionInvoicesListInput } from '../declarations/MerchantSubscriptionInvoicesListInput.js';
import type { MerchantSubscriptionInvoicesListResponse } from '../declarations/MerchantSubscriptionInvoicesListResponse.js';
import type { MerchantWebhookEnvelope } from '../declarations/MerchantWebhookEnvelope.js';
import type { MerchantWebhookEnvelopeInput } from '../declarations/MerchantWebhookEnvelopeInput.js';
import type { MerchantsGetInput } from '../declarations/MerchantsGetInput.js';
import type { MerchantsGetResponse } from '../declarations/MerchantsGetResponse.js';
import type { MerchantsUpdateInput } from '../declarations/MerchantsUpdateInput.js';
import type { MerchantsUpdateResponse } from '../declarations/MerchantsUpdateResponse.js';
import type { Order } from '../declarations/Order.js';
import type { OrderActivity } from '../declarations/OrderActivity.js';
import type { OrderActivityListResponse } from '../declarations/OrderActivityListResponse.js';
import type { OrderListResponse } from '../declarations/OrderListResponse.js';
import type { OrderResponse } from '../declarations/OrderResponse.js';
import type { Package } from '../declarations/Package.js';
import type { PackageListResponse } from '../declarations/PackageListResponse.js';
import type { PaymentIntent } from '../declarations/PaymentIntent.js';
import type { PaymentIntentListResponse } from '../declarations/PaymentIntentListResponse.js';
import type { PaymentMethod } from '../declarations/PaymentMethod.js';
import type { PaymentMethodListResponse } from '../declarations/PaymentMethodListResponse.js';
import type { PaymentMethodResponse } from '../declarations/PaymentMethodResponse.js';
import type { PostalAddressInput } from '../declarations/PostalAddressInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { ReturnLineItemRequestInput } from '../declarations/ReturnLineItemRequestInput.js';
import type { ReturnResource } from '../declarations/ReturnResource.js';
import type { SavePaymentMethodResponse } from '../declarations/SavePaymentMethodResponse.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { Shipment } from '../declarations/Shipment.js';
import type { ShipmentListResponse } from '../declarations/ShipmentListResponse.js';
import type { Subscription } from '../declarations/Subscription.js';
import type { SubscriptionListResponse } from '../declarations/SubscriptionListResponse.js';
import type { SubscriptionResponse } from '../declarations/SubscriptionResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface MeResource {
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Cancel a Return before any merchandise or value work commits. Cancellation is refused once a receipt, inspection, disposition, or resolution exists.
 * POST /v1/me/returns/{return_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.cancelReturn("example", {reason: "buyer_request"}, { idempotencyKey: idempotencyKey })
 */
    cancelReturn(return_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason": "buyer_request" | "merchant_request" | "duplicate" | "expired" | "created_in_error" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<AddReturnLineItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    cancelReturnWithResponse(return_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason": "buyer_request" | "merchant_request" | "duplicate" | "expired" | "created_in_error" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeCancelReturnResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Cancels a subscription immediately or at period end, and records who asked, why, and when in cancellation_details. A buyer's cancellation follows the store's customer_account.buyer_capabilities. Response may include advisory contract information.
 * POST /v1/me/subscriptions/{subscription_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.cancelSubscription("example", {}, { idempotencyKey: idempotencyKey })
 */
    cancelSubscription(subscription_id: InputValue<string>, params: (InputValue<{ "cancel_immediately"?: boolean; "cancellation_comment"?: string; "cancellation_reason_code"?: "too_expensive" | "missing_features" | "switched_service" | "unused" | "customer_service" | "too_complex" | "low_quality" | "other"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<CancelSubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    cancelSubscriptionWithResponse(subscription_id: InputValue<string>, params: (InputValue<{ "cancel_immediately"?: boolean; "cancellation_comment"?: string; "cancellation_reason_code"?: "too_expensive" | "missing_features" | "switched_service" | "unused" | "customer_service" | "too_complex" | "low_quality" | "other"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeCancelSubscriptionResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Changes the subscription to an active payment method owned by the same customer. The payment method's usage must be off_session.
 * POST /v1/me/subscriptions/{subscription_id}/payment-method
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.changeSubscriptionPaymentMethod("example", {payment_method_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    changeSubscriptionPaymentMethod(subscription_id: InputValue<string>, params: (InputValue<{ "payment_method_id": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    changeSubscriptionPaymentMethodWithResponse(subscription_id: InputValue<string>, params: (InputValue<{ "payment_method_id": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeChangeSubscriptionPaymentMethodResponse>>;
    /**
 * Confirms possession of the current and new email addresses, then atomically updates the customer account in the selected merchant environment. Omit current_email_code only when current_email_confirmation_required is false.
 * POST /v1/me/email-change-requests/{email_change_request_id}/confirm
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.confirmEmailChangeRequest("example", {new_email_code: "example"}, { idempotencyKey: idempotencyKey })
 */
    confirmEmailChangeRequest(email_change_request_id: InputValue<string>, params: (InputValue<{ "current_email_code"?: string; "new_email_code": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<EmailChangeRequestResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    confirmEmailChangeRequestWithResponse(email_change_request_id: InputValue<string>, params: (InputValue<{ "current_email_code"?: string; "new_email_code": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeConfirmEmailChangeRequestResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Creates a stable saved address. The first address becomes both the billing and shipping default. A saved default becomes the customer's effective address for the corresponding role.
 * POST /v1/me/addresses
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createAddress({address: {city: "example", country: "US", line1: "example", postal_code: "example", state: "example"}, recipient_name: "example"}, { idempotencyKey: idempotencyKey })
 */
    createAddress(params: (InputValue<{ "address": PostalAddressInput; "is_default_billing"?: boolean; "is_default_shipping"?: boolean; "label"?: string; "phone"?: string; "recipient_name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<CustomerAddressResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createAddressWithResponse(params: (InputValue<{ "address": PostalAddressInput; "is_default_billing"?: boolean; "is_default_shipping"?: boolean; "label"?: string; "phone"?: string; "recipient_name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeCreateAddressResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Creates or returns the pending tracked deletion request. Required commerce records are retained until the deletion workflow resolves their legal retention requirements.
 * POST /v1/me/deletion-requests
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createDeletionRequest({}, { idempotencyKey: idempotencyKey })
 */
    createDeletionRequest(params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<CustomerDeletionRequestResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createDeletionRequestWithResponse(params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeCreateDeletionRequestResponse>>;
    /**
 * Sends short-lived confirmation codes to the current and new email addresses. If the account has no current email, only the new address must be confirmed. The customer email does not change until confirmation succeeds.
 * POST /v1/me/email-change-requests
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createEmailChangeRequest({new_email: "example"}, { idempotencyKey: idempotencyKey })
 */
    createEmailChangeRequest(params: (InputValue<{ "new_email": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<EmailChangeRequestResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createEmailChangeRequestWithResponse(params: (InputValue<{ "new_email": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeCreateEmailChangeRequestResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns the current open invoice checkout session and aligned card attempt when they still match the invoice balance and collection run. A newly created session and attempt share the fixed expiration of the active invoice public-link generation. Unexpired sessions are reused regardless of remaining lifetime; active payment work returns a resolving conflict instead of creating competing collection. When the invoice's order has items to deliver, a new session offers the delivery methods in settings.checkout.default_delivery_method_ids, and the request fails with a validation error when those methods cannot deliver every item. return_url sets where the checkout sends the buyer after paying. A reused session takes a new return_url only until a payment starts on it, and keeps the one it has after that.
 * POST /v1/me/invoices/{invoice_id}/checkout-session
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createInvoiceCheckoutSession("example", undefined, { idempotencyKey: idempotencyKey })
 */
    createInvoiceCheckoutSession(invoice_id: InputValue<string>, params?: (InputValue<{ "invoice_schedule_entry_id"?: string; "return_url"?: string; }> | { "invoice_schedule_entry_id"?: never; "return_url"?: never }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer" | "invoice">): Promise<_SdkPayloadAt<InvoiceCheckoutSessionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createInvoiceCheckoutSessionWithResponse(invoice_id: InputValue<string>, params?: (InputValue<{ "invoice_schedule_entry_id"?: string; "return_url"?: string; }> | { "invoice_schedule_entry_id"?: never; "return_url"?: never }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer" | "invoice">): Promise<SdkResponse<MeCreateInvoiceCheckoutSessionResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Create a requested Return. When no policy matches, the Return remains available for merchant review rather than failing creation.
 * POST /v1/me/returns
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createReturn({line_items: [{order_line_item_id: "example", requested_quantity: "100", return_reason_id: "example"}], order_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    createReturn(params: (InputValue<{ "external_reference_id"?: string; "line_items": Array<ReturnLineItemRequestInput>; "metadata"?: Record<string, string>; "order_id": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<AddReturnLineItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createReturnWithResponse(params: (InputValue<{ "external_reference_id"?: string; "line_items": Array<ReturnLineItemRequestInput>; "metadata"?: Record<string, string>; "order_id": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeCreateReturnResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Preview return eligibility or resolution amounts without creating a Return or reserving quantity. Set mode to eligibility or resolution and send the matching input object.
 * POST /v1/me/return-previews
 * @example
 * client.me.createReturnPreview({mode: "eligibility", eligibility: {order_id: "example", selection: {selection_type: "all_remaining_fulfilled"}}})
 */
    createReturnPreview(params: (InputValue<({ "eligibility"?: CreateReturnEligibilityCheckRequestInput; "mode": "eligibility" | "resolution"; "resolution"?: CreateReturnResolutionPreviewRequestInput; }) & ((({ "mode": "eligibility"; "eligibility": unknown; }) & ({ "resolution"?: never })) | (({ "mode": "resolution"; "resolution": unknown; }) & ({ "eligibility"?: never })))>) & { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<_SdkPayloadAt<CreateReturnPreviewResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createReturnPreviewWithResponse(params: (InputValue<({ "eligibility"?: CreateReturnEligibilityCheckRequestInput; "mode": "eligibility" | "resolution"; "resolution"?: CreateReturnResolutionPreviewRequestInput; }) & ((({ "mode": "eligibility"; "eligibility": unknown; }) & ({ "resolution"?: never })) | (({ "mode": "resolution"; "resolution": unknown; }) & ({ "eligibility"?: never })))>) & { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeCreateReturnPreviewResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Create or reuse the standard hosted checkout session for a buyer-owed replacement Order linked to this Return resolution. return_url sets where the checkout sends the buyer after paying. A reused session takes a new return_url only until a payment starts on it, and keeps the one it has after that.
 * POST /v1/me/return-resolutions/{resolution_id}/checkout-session
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createReturnResolutionCheckoutSession("example", undefined, { idempotencyKey: idempotencyKey })
 */
    createReturnResolutionCheckoutSession(resolution_id: InputValue<string>, params?: (InputValue<{ "return_url"?: string; }> | { "return_url"?: never }) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<CheckoutSessionLaunchResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createReturnResolutionCheckoutSessionWithResponse(resolution_id: InputValue<string>, params?: (InputValue<{ "return_url"?: string; }> | { "return_url"?: never }) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeCreateReturnResolutionCheckoutSessionResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Deletes a saved address and moves any default designation to the newest remaining address.
 * DELETE /v1/me/addresses/{customer_address_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.deleteAddress("example", {}, { idempotencyKey: idempotencyKey })
 */
    deleteAddress(customer_address_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<ActionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    deleteAddressWithResponse(customer_address_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeDeleteAddressResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a single customer by ID.
 * GET /v1/me
 * @example
 * client.me.get()
 */
    get(params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<_SdkPayloadAt<CustomerResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeGetResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one saved address owned by the customer.
 * GET /v1/me/addresses/{customer_address_id}
 * @example
 * client.me.getAddress("example")
 */
    getAddress(customer_address_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<_SdkPayloadAt<CustomerAddressResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getAddressWithResponse(customer_address_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeGetAddressResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one credit note with its lines, total, and the credit still available to allocate.
 * GET /v1/me/invoices/{invoice_id}/credit-notes/{credit_note_id}
 * @example
 * client.me.getCreditNote("example", "example")
 */
    getCreditNote(invoice_id: InputValue<string>, credit_note_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<_SdkPayloadAt<BuyerCreditNoteResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getCreditNoteWithResponse(invoice_id: InputValue<string>, credit_note_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<SdkResponse<MeGetCreditNoteResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns the credit note document as application/pdf rather than a JSON envelope. The PDF exists from issue onward and carries your branding, the credited lines, and the invoice it corrects.
 * GET /v1/me/invoices/{invoice_id}/credit-notes/{credit_note_id}/pdf
 * @example
 * client.me.getCreditNotePDF("example", "example")
 */
    getCreditNotePDF(invoice_id: InputValue<string>, credit_note_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<Result<MeGetCreditNotePDFResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns the current status of a tracked deletion request.
 * GET /v1/me/deletion-requests/{customer_deletion_request_id}
 * @example
 * client.me.getDeletionRequest("example")
 */
    getDeletionRequest(customer_deletion_request_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<_SdkPayloadAt<CustomerDeletionRequestResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getDeletionRequestWithResponse(customer_deletion_request_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeGetDeletionRequestResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. Returns which of the merchant's optional email categories the customer's current email receives in the selected merchant environment. A category the buyer never changed is on. Email preferences exist only for a customer with an email: without one, the read answers 404 with CUSTOMER_EMAIL_REQUIRED. Receipts and other transactional email always send.
 * GET /v1/me/email-preferences
 * @example
 * client.me.getEmailPreferences()
 */
    getEmailPreferences(params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<_SdkPayloadAt<CustomerEmailPreferencesResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getEmailPreferencesWithResponse(params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeGetEmailPreferencesResponse>>;
    /**
 * Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code.
 * GET /v1/me/gift-cards/{gift_card_id}
 * @example
 * client.me.getGiftCard("example")
 */
    getGiftCard(gift_card_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<_SdkPayloadAt<BuyerGiftCardResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getGiftCardWithResponse(gift_card_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeGetGiftCardResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a single invoice by ID.
 * GET /v1/me/invoices/{invoice_id}
 * @example
 * client.me.getInvoice("example")
 */
    getInvoice(invoice_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<_SdkPayloadAt<BuyerInvoiceResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getInvoiceWithResponse(invoice_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<SdkResponse<MeGetInvoiceResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Downloads the merchant-authenticated PDF artifact generated from the invoice snapshot.
 * GET /v1/me/invoices/{invoice_id}/pdf
 * @example
 * client.me.getInvoicePDF("example")
 */
    getInvoicePDF(invoice_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<Result<MeGetInvoicePDFResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a single order by ID.
 * GET /v1/me/orders/{order_id}
 * @example
 * client.me.getOrder("example")
 */
    getOrder(order_id: InputValue<string>, params?: { "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<_SdkPayloadAt<OrderResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getOrderWithResponse(order_id: InputValue<string>, params?: { "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeGetOrderResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a single payment method by ID.
 * GET /v1/me/payment-methods/{payment_method_id}
 * @example
 * client.me.getPaymentMethod("example")
 */
    getPaymentMethod(payment_method_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<_SdkPayloadAt<PaymentMethodResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getPaymentMethodWithResponse(payment_method_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeGetPaymentMethodResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Retrieve a Return with its line items, policy evaluation, financial summary, and completion blockers. Supports expand for the order, the customer, and each line item's reason and fulfillment.
 * GET /v1/me/returns/{return_id}
 * @example
 * client.me.getReturn("example")
 */
    getReturn(return_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<_SdkPayloadAt<AddReturnLineItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getReturnWithResponse(return_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeGetReturnResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a single subscription by ID. subscription_plan is always included without expand: the plan's current summary, or null when the subscription has no plan.
 * GET /v1/me/subscriptions/{subscription_id}
 * @example
 * client.me.getSubscription("example")
 */
    getSubscription(subscription_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getSubscriptionWithResponse(subscription_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeGetSubscriptionResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the customer's saved addresses with billing and shipping default flags.
 * GET /v1/me/addresses
 * @example
 * client.me.listAddresses()
 */
    listAddresses(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<CustomerAddressListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listAddressesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeListAddressesResponse>>;
    listAddressesPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<CustomerAddressListResponse>;
    listAddressesPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<MeListAddressesResponse>>;
    listAddressesItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<CustomerAddress>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns credit notes for the authenticated merchant, newest first. Filter by invoice_id to see everything credited against one invoice.
 * GET /v1/me/invoices/{invoice_id}/credit-notes
 * @example
 * client.me.listCreditNotes("example")
 */
    listCreditNotes(invoice_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<BuyerCreditNoteListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listCreditNotesWithResponse(invoice_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<SdkResponse<MeListCreditNotesResponse>>;
    listCreditNotesPages(invoice_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): AsyncGenerator<BuyerCreditNoteListResponse>;
    listCreditNotesPagesWithResponse(invoice_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): AsyncGenerator<SdkResponse<MeListCreditNotesResponse>>;
    listCreditNotesItems(invoice_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): AsyncGenerator<BuyerCreditNote>;
    /**
 * Uses the customer identity fixed by the customer session. Lists the current buyer's deletion requests in the selected merchant environment, newest first by requested_at.
 * GET /v1/me/deletion-requests
 * @example
 * client.me.listDeletionRequests()
 */
    listDeletionRequests(params?: { "status"?: InputValue<"pending_review" | "processing" | "completed" | "rejected" | "failed">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<CustomerDeletionRequestListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listDeletionRequestsWithResponse(params?: { "status"?: InputValue<"pending_review" | "processing" | "completed" | "rejected" | "failed">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeListDeletionRequestsResponse>>;
    listDeletionRequestsPages(params?: { "status"?: InputValue<"pending_review" | "processing" | "completed" | "rejected" | "failed">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<CustomerDeletionRequestListResponse>;
    listDeletionRequestsPagesWithResponse(params?: { "status"?: InputValue<"pending_review" | "processing" | "completed" | "rejected" | "failed">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<MeListDeletionRequestsResponse>>;
    listDeletionRequestsItems(params?: { "status"?: InputValue<"pending_review" | "processing" | "completed" | "rejected" | "failed">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<CustomerDeletionRequest>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns fulfillments for operational queue and order-detail views. Results default to newest created first.
 * GET /v1/me/fulfillments
 * @example
 * client.me.listFulfillments()
 */
    listFulfillments(params?: { "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<"pending" | "in_progress" | "ready" | "completed" | "canceled" | "failed" | "scheduled" | "preparing" | "picked" | "packed" | "dispatched">; "type"?: InputValue<"shipment" | "pickup" | "local_delivery" | "digital" | "service">; "location_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "sort_direction"?: InputValue<"asc" | "desc">; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<FulfillmentListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listFulfillmentsWithResponse(params?: { "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<"pending" | "in_progress" | "ready" | "completed" | "canceled" | "failed" | "scheduled" | "preparing" | "picked" | "packed" | "dispatched">; "type"?: InputValue<"shipment" | "pickup" | "local_delivery" | "digital" | "service">; "location_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "sort_direction"?: InputValue<"asc" | "desc">; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeListFulfillmentsResponse>>;
    listFulfillmentsPages(params?: { "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<"pending" | "in_progress" | "ready" | "completed" | "canceled" | "failed" | "scheduled" | "preparing" | "picked" | "packed" | "dispatched">; "type"?: InputValue<"shipment" | "pickup" | "local_delivery" | "digital" | "service">; "location_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "sort_direction"?: InputValue<"asc" | "desc">; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<FulfillmentListResponse>;
    listFulfillmentsPagesWithResponse(params?: { "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<"pending" | "in_progress" | "ready" | "completed" | "canceled" | "failed" | "scheduled" | "preparing" | "picked" | "packed" | "dispatched">; "type"?: InputValue<"shipment" | "pickup" | "local_delivery" | "digital" | "service">; "location_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "sort_direction"?: InputValue<"asc" | "desc">; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<MeListFulfillmentsResponse>>;
    listFulfillmentsItems(params?: { "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<"pending" | "in_progress" | "ready" | "completed" | "canceled" | "failed" | "scheduled" | "preparing" | "picked" | "packed" | "dispatched">; "type"?: InputValue<"shipment" | "pickup" | "local_delivery" | "digital" | "service">; "location_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "sort_direction"?: InputValue<"asc" | "desc">; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<Fulfillment>;
    /**
 * Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code. Lists valid saved cards by saved time then card ID, descending.
 * GET /v1/me/gift-cards
 * @example
 * client.me.listGiftCards()
 */
    listGiftCards(params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerGiftCardListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listGiftCardsWithResponse(params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeListGiftCardsResponse>>;
    listGiftCardsPages(params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerGiftCardListResponse>;
    listGiftCardsPagesWithResponse(params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<MeListGiftCardsResponse>>;
    listGiftCardsItems(params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerGiftCard>;
    /**
 * Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code. Lists the full anonymous balance-change history by per-card sequence, descending. Other holders' identities and order references are omitted.
 * GET /v1/me/gift-cards/{gift_card_id}/transactions
 * @example
 * client.me.listGiftCardTransactions("example")
 */
    listGiftCardTransactions(gift_card_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerGiftCardTransactionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listGiftCardTransactionsWithResponse(gift_card_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeListGiftCardTransactionsResponse>>;
    listGiftCardTransactionsPages(gift_card_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerGiftCardTransactionListResponse>;
    listGiftCardTransactionsPagesWithResponse(gift_card_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<MeListGiftCardTransactionsResponse>>;
    listGiftCardTransactionsItems(gift_card_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerGiftCardTransaction>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of invoices for the authenticated merchant.
 * GET /v1/me/invoices
 * @example
 * client.me.listInvoices()
 */
    listInvoices(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited">>; "order_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "due_after"?: InputValue<string | globalThis.Date>; "due_before"?: InputValue<string | globalThis.Date>; "is_overdue"?: InputValue<boolean>; "has_amount_due"?: InputValue<boolean>; "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">; "sort_direction"?: InputValue<"asc" | "desc">; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerInvoiceListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listInvoicesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited">>; "order_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "due_after"?: InputValue<string | globalThis.Date>; "due_before"?: InputValue<string | globalThis.Date>; "is_overdue"?: InputValue<boolean>; "has_amount_due"?: InputValue<boolean>; "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">; "sort_direction"?: InputValue<"asc" | "desc">; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeListInvoicesResponse>>;
    listInvoicesPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited">>; "order_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "due_after"?: InputValue<string | globalThis.Date>; "due_before"?: InputValue<string | globalThis.Date>; "is_overdue"?: InputValue<boolean>; "has_amount_due"?: InputValue<boolean>; "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">; "sort_direction"?: InputValue<"asc" | "desc">; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerInvoiceListResponse>;
    listInvoicesPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited">>; "order_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "due_after"?: InputValue<string | globalThis.Date>; "due_before"?: InputValue<string | globalThis.Date>; "is_overdue"?: InputValue<boolean>; "has_amount_due"?: InputValue<boolean>; "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">; "sort_direction"?: InputValue<"asc" | "desc">; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<MeListInvoicesResponse>>;
    listInvoicesItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited">>; "order_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "due_after"?: InputValue<string | globalThis.Date>; "due_before"?: InputValue<string | globalThis.Date>; "is_overdue"?: InputValue<boolean>; "has_amount_due"?: InputValue<boolean>; "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">; "sort_direction"?: InputValue<"asc" | "desc">; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerInvoice>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a read-only, human-readable history log for an order. Use it to render timelines and debug what happened, not as a source of truth, ledger, or webhook replacement. Read the owning resource for authoritative state: the order for balances and status, the payment for payment state, the refund for refund outcomes, and the checkout session for checkout state. Do not sum balance_delta_money to compute an order balance. Informational rows such as payment_failed, refund_failed, and checkout_session_expired have a zero balance delta. The default order is newest first. Use sort_direction=asc for chronological timeline rendering. A typical chronological log might show created, payment_failed, payment, refund, then refund_failed; each row gives one reference to click through for the authoritative resource.
 * GET /v1/me/orders/{order_id}/activities
 * @example
 * client.me.listOrderActivities("example")
 */
    listOrderActivities(order_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_direction"?: InputValue<"asc" | "desc">; "type"?: InputValue<Array<"created" | "line_item_added" | "line_item_updated" | "line_item_removed" | "discount_applied" | "discount_removed" | "tax_updated" | "requested_tip_added" | "requested_tip_updated" | "requested_tip_removed" | "charge_added" | "charge_updated" | "charge_removed" | "charge_fulfillment_updated" | "order_updated" | "adjustment" | "closed" | "payment" | "payment_failed" | "refund" | "refund_failed" | "checkout_session_created" | "checkout_session_expired" | "checkout_session_invalidated" | "fulfillment_created" | "fulfillment_updated" | "fulfillment_state_changed">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<OrderActivityListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listOrderActivitiesWithResponse(order_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_direction"?: InputValue<"asc" | "desc">; "type"?: InputValue<Array<"created" | "line_item_added" | "line_item_updated" | "line_item_removed" | "discount_applied" | "discount_removed" | "tax_updated" | "requested_tip_added" | "requested_tip_updated" | "requested_tip_removed" | "charge_added" | "charge_updated" | "charge_removed" | "charge_fulfillment_updated" | "order_updated" | "adjustment" | "closed" | "payment" | "payment_failed" | "refund" | "refund_failed" | "checkout_session_created" | "checkout_session_expired" | "checkout_session_invalidated" | "fulfillment_created" | "fulfillment_updated" | "fulfillment_state_changed">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeListOrderActivitiesResponse>>;
    listOrderActivitiesPages(order_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_direction"?: InputValue<"asc" | "desc">; "type"?: InputValue<Array<"created" | "line_item_added" | "line_item_updated" | "line_item_removed" | "discount_applied" | "discount_removed" | "tax_updated" | "requested_tip_added" | "requested_tip_updated" | "requested_tip_removed" | "charge_added" | "charge_updated" | "charge_removed" | "charge_fulfillment_updated" | "order_updated" | "adjustment" | "closed" | "payment" | "payment_failed" | "refund" | "refund_failed" | "checkout_session_created" | "checkout_session_expired" | "checkout_session_invalidated" | "fulfillment_created" | "fulfillment_updated" | "fulfillment_state_changed">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<OrderActivityListResponse>;
    listOrderActivitiesPagesWithResponse(order_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_direction"?: InputValue<"asc" | "desc">; "type"?: InputValue<Array<"created" | "line_item_added" | "line_item_updated" | "line_item_removed" | "discount_applied" | "discount_removed" | "tax_updated" | "requested_tip_added" | "requested_tip_updated" | "requested_tip_removed" | "charge_added" | "charge_updated" | "charge_removed" | "charge_fulfillment_updated" | "order_updated" | "adjustment" | "closed" | "payment" | "payment_failed" | "refund" | "refund_failed" | "checkout_session_created" | "checkout_session_expired" | "checkout_session_invalidated" | "fulfillment_created" | "fulfillment_updated" | "fulfillment_state_changed">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<MeListOrderActivitiesResponse>>;
    listOrderActivitiesItems(order_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_direction"?: InputValue<"asc" | "desc">; "type"?: InputValue<Array<"created" | "line_item_added" | "line_item_updated" | "line_item_removed" | "discount_applied" | "discount_removed" | "tax_updated" | "requested_tip_added" | "requested_tip_updated" | "requested_tip_removed" | "charge_added" | "charge_updated" | "charge_removed" | "charge_fulfillment_updated" | "order_updated" | "adjustment" | "closed" | "payment" | "payment_failed" | "refund" | "refund_failed" | "checkout_session_created" | "checkout_session_expired" | "checkout_session_invalidated" | "fulfillment_created" | "fulfillment_updated" | "fulfillment_state_changed">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<OrderActivity>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of orders for the authenticated merchant.
 * GET /v1/me/orders
 * @example
 * client.me.listOrders()
 */
    listOrders(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"open" | "closed">; "payment_status"?: InputValue<(("unpaid" | "partially_paid" | "paid") | (Array<"unpaid" | "partially_paid" | "paid">))>; "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>; "fulfillment_status"?: InputValue<Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled">>; "order_number"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "query"?: InputValue<string>; "subscription_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "outstanding_money" | "total">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<OrderListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listOrdersWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"open" | "closed">; "payment_status"?: InputValue<(("unpaid" | "partially_paid" | "paid") | (Array<"unpaid" | "partially_paid" | "paid">))>; "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>; "fulfillment_status"?: InputValue<Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled">>; "order_number"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "query"?: InputValue<string>; "subscription_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "outstanding_money" | "total">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeListOrdersResponse>>;
    listOrdersPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"open" | "closed">; "payment_status"?: InputValue<(("unpaid" | "partially_paid" | "paid") | (Array<"unpaid" | "partially_paid" | "paid">))>; "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>; "fulfillment_status"?: InputValue<Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled">>; "order_number"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "query"?: InputValue<string>; "subscription_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "outstanding_money" | "total">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<OrderListResponse>;
    listOrdersPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"open" | "closed">; "payment_status"?: InputValue<(("unpaid" | "partially_paid" | "paid") | (Array<"unpaid" | "partially_paid" | "paid">))>; "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>; "fulfillment_status"?: InputValue<Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled">>; "order_number"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "query"?: InputValue<string>; "subscription_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "outstanding_money" | "total">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<MeListOrdersResponse>>;
    listOrdersItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"open" | "closed">; "payment_status"?: InputValue<(("unpaid" | "partially_paid" | "paid") | (Array<"unpaid" | "partially_paid" | "paid">))>; "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>; "fulfillment_status"?: InputValue<Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled">>; "order_number"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "query"?: InputValue<string>; "subscription_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "outstanding_money" | "total">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<Order>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists package records, newest created first.
 * GET /v1/me/packages
 * @example
 * client.me.listPackages()
 */
    listPackages(params?: { "shipment_id"?: InputValue<string>; "fulfillment_id"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_system"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<PackageListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listPackagesWithResponse(params?: { "shipment_id"?: InputValue<string>; "fulfillment_id"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_system"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeListPackagesResponse>>;
    listPackagesPages(params?: { "shipment_id"?: InputValue<string>; "fulfillment_id"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_system"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<PackageListResponse>;
    listPackagesPagesWithResponse(params?: { "shipment_id"?: InputValue<string>; "fulfillment_id"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_system"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<MeListPackagesResponse>>;
    listPackagesItems(params?: { "shipment_id"?: InputValue<string>; "fulfillment_id"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_system"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<Package>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns saved payment methods for the merchant, optionally filtered to a customer. By default, only active payment methods are returned. Filter by usage off_session to list the payment methods a subscription, automatic invoice, or default payment method can use.
 * GET /v1/me/payment-methods
 * @example
 * client.me.listPaymentMethods()
 */
    listPaymentMethods(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "type"?: InputValue<"card">; "status"?: InputValue<"active" | "pending" | "expired" | "removed" | "failed">; "usage"?: InputValue<"on_session" | "off_session">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<PaymentMethodListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listPaymentMethodsWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "type"?: InputValue<"card">; "status"?: InputValue<"active" | "pending" | "expired" | "removed" | "failed">; "usage"?: InputValue<"on_session" | "off_session">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeListPaymentMethodsResponse>>;
    listPaymentMethodsPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "type"?: InputValue<"card">; "status"?: InputValue<"active" | "pending" | "expired" | "removed" | "failed">; "usage"?: InputValue<"on_session" | "off_session">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<PaymentMethodListResponse>;
    listPaymentMethodsPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "type"?: InputValue<"card">; "status"?: InputValue<"active" | "pending" | "expired" | "removed" | "failed">; "usage"?: InputValue<"on_session" | "off_session">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<MeListPaymentMethodsResponse>>;
    listPaymentMethodsItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "type"?: InputValue<"card">; "status"?: InputValue<"active" | "pending" | "expired" | "removed" | "failed">; "usage"?: InputValue<"on_session" | "off_session">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<PaymentMethod>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of payment intents for the authenticated merchant.
 * GET /v1/me/payments
 * @example
 * client.me.listPayments()
 */
    listPayments(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "order_id"?: InputValue<string>; "invoice_id"?: InputValue<string>; "status"?: InputValue<"requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | "expired">; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>; "payment_flow"?: InputValue<Array<"checkout" | "payment_link" | "invoice" | "subscription_initial" | "subscription_renewal" | "virtual_terminal" | "api">>; "external_reference_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "query"?: InputValue<string>; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "state"?: InputValue<"with_refunds" | "fully_refunded" | "disputed" | "needs_action">; "sort_by"?: InputValue<"created_at" | "updated_at" | "amount">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<PaymentIntentListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listPaymentsWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "order_id"?: InputValue<string>; "invoice_id"?: InputValue<string>; "status"?: InputValue<"requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | "expired">; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>; "payment_flow"?: InputValue<Array<"checkout" | "payment_link" | "invoice" | "subscription_initial" | "subscription_renewal" | "virtual_terminal" | "api">>; "external_reference_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "query"?: InputValue<string>; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "state"?: InputValue<"with_refunds" | "fully_refunded" | "disputed" | "needs_action">; "sort_by"?: InputValue<"created_at" | "updated_at" | "amount">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeListPaymentsResponse>>;
    listPaymentsPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "order_id"?: InputValue<string>; "invoice_id"?: InputValue<string>; "status"?: InputValue<"requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | "expired">; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>; "payment_flow"?: InputValue<Array<"checkout" | "payment_link" | "invoice" | "subscription_initial" | "subscription_renewal" | "virtual_terminal" | "api">>; "external_reference_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "query"?: InputValue<string>; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "state"?: InputValue<"with_refunds" | "fully_refunded" | "disputed" | "needs_action">; "sort_by"?: InputValue<"created_at" | "updated_at" | "amount">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<PaymentIntentListResponse>;
    listPaymentsPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "order_id"?: InputValue<string>; "invoice_id"?: InputValue<string>; "status"?: InputValue<"requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | "expired">; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>; "payment_flow"?: InputValue<Array<"checkout" | "payment_link" | "invoice" | "subscription_initial" | "subscription_renewal" | "virtual_terminal" | "api">>; "external_reference_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "query"?: InputValue<string>; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "state"?: InputValue<"with_refunds" | "fully_refunded" | "disputed" | "needs_action">; "sort_by"?: InputValue<"created_at" | "updated_at" | "amount">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<MeListPaymentsResponse>>;
    listPaymentsItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "order_id"?: InputValue<string>; "invoice_id"?: InputValue<string>; "status"?: InputValue<"requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | "expired">; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>; "payment_flow"?: InputValue<Array<"checkout" | "payment_link" | "invoice" | "subscription_initial" | "subscription_renewal" | "virtual_terminal" | "api">>; "external_reference_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "query"?: InputValue<string>; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "state"?: InputValue<"with_refunds" | "fully_refunded" | "disputed" | "needs_action">; "sort_by"?: InputValue<"created_at" | "updated_at" | "amount">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<PaymentIntent>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of refunds for the authenticated merchant.
 * GET /v1/me/refunds
 * @example
 * client.me.listRefunds()
 */
    listRefunds(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "order_id"?: InputValue<string>; "payment_intent_id"?: InputValue<string>; "status"?: InputValue<"pending" | "in_transit" | "succeeded" | "failed" | "requires_action" | "canceled" | "partially_succeeded">; "reason"?: InputValue<Array<"duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other">>; "refund_method"?: InputValue<"original_payment">; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "amount">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerRefundListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listRefundsWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "order_id"?: InputValue<string>; "payment_intent_id"?: InputValue<string>; "status"?: InputValue<"pending" | "in_transit" | "succeeded" | "failed" | "requires_action" | "canceled" | "partially_succeeded">; "reason"?: InputValue<Array<"duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other">>; "refund_method"?: InputValue<"original_payment">; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "amount">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeListRefundsResponse>>;
    listRefundsPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "order_id"?: InputValue<string>; "payment_intent_id"?: InputValue<string>; "status"?: InputValue<"pending" | "in_transit" | "succeeded" | "failed" | "requires_action" | "canceled" | "partially_succeeded">; "reason"?: InputValue<Array<"duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other">>; "refund_method"?: InputValue<"original_payment">; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "amount">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerRefundListResponse>;
    listRefundsPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "order_id"?: InputValue<string>; "payment_intent_id"?: InputValue<string>; "status"?: InputValue<"pending" | "in_transit" | "succeeded" | "failed" | "requires_action" | "canceled" | "partially_succeeded">; "reason"?: InputValue<Array<"duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other">>; "refund_method"?: InputValue<"original_payment">; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "amount">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<MeListRefundsResponse>>;
    listRefundsItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "order_id"?: InputValue<string>; "payment_intent_id"?: InputValue<string>; "status"?: InputValue<"pending" | "in_transit" | "succeeded" | "failed" | "requires_action" | "canceled" | "partially_succeeded">; "reason"?: InputValue<Array<"duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other">>; "refund_method"?: InputValue<"original_payment">; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "amount">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerRefund>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. List Returns for the merchant, filtered by order, customer, status, decision, merchandise, resolution, or creation window. Filter by idempotency_key to recover a create whose response never arrived.
 * GET /v1/me/returns
 * @example
 * client.me.listReturns()
 */
    listReturns(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>; "external_reference_id"?: InputValue<string>; "merchandise_status"?: InputValue<Array<"not_required" | "awaiting_handoff" | "in_transit" | "partially_received" | "received" | "inspection_required" | "partially_inspected" | "inspection_review_required" | "disposition_required" | "resolved" | "exception">>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "receiving_location_id"?: InputValue<string>; "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>; "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "correction">>; "return_number"?: InputValue<string>; "return_reason_id"?: InputValue<string>; "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "work_type"?: InputValue<Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<ListReturnsResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listReturnsWithResponse(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>; "external_reference_id"?: InputValue<string>; "merchandise_status"?: InputValue<Array<"not_required" | "awaiting_handoff" | "in_transit" | "partially_received" | "received" | "inspection_required" | "partially_inspected" | "inspection_review_required" | "disposition_required" | "resolved" | "exception">>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "receiving_location_id"?: InputValue<string>; "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>; "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "correction">>; "return_number"?: InputValue<string>; "return_reason_id"?: InputValue<string>; "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "work_type"?: InputValue<Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeListReturnsResponse>>;
    listReturnsPages(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>; "external_reference_id"?: InputValue<string>; "merchandise_status"?: InputValue<Array<"not_required" | "awaiting_handoff" | "in_transit" | "partially_received" | "received" | "inspection_required" | "partially_inspected" | "inspection_review_required" | "disposition_required" | "resolved" | "exception">>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "receiving_location_id"?: InputValue<string>; "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>; "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "correction">>; "return_number"?: InputValue<string>; "return_reason_id"?: InputValue<string>; "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "work_type"?: InputValue<Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<ListReturnsResponse>;
    listReturnsPagesWithResponse(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>; "external_reference_id"?: InputValue<string>; "merchandise_status"?: InputValue<Array<"not_required" | "awaiting_handoff" | "in_transit" | "partially_received" | "received" | "inspection_required" | "partially_inspected" | "inspection_review_required" | "disposition_required" | "resolved" | "exception">>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "receiving_location_id"?: InputValue<string>; "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>; "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "correction">>; "return_number"?: InputValue<string>; "return_reason_id"?: InputValue<string>; "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "work_type"?: InputValue<Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<MeListReturnsResponse>>;
    listReturnsItems(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>; "external_reference_id"?: InputValue<string>; "merchandise_status"?: InputValue<Array<"not_required" | "awaiting_handoff" | "in_transit" | "partially_received" | "received" | "inspection_required" | "partially_inspected" | "inspection_review_required" | "disposition_required" | "resolved" | "exception">>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "receiving_location_id"?: InputValue<string>; "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>; "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "correction">>; "return_number"?: InputValue<string>; "return_reason_id"?: InputValue<string>; "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "work_type"?: InputValue<Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<ReturnResource>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists shipment execution records, newest created first.
 * GET /v1/me/shipments
 * @example
 * client.me.listShipments()
 */
    listShipments(params?: { "order_id"?: InputValue<string>; "fulfillment_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_system"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "return_id"?: InputValue<string>; "handed_off_after"?: InputValue<string | globalThis.Date>; "handed_off_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<ShipmentListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listShipmentsWithResponse(params?: { "order_id"?: InputValue<string>; "fulfillment_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_system"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "return_id"?: InputValue<string>; "handed_off_after"?: InputValue<string | globalThis.Date>; "handed_off_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeListShipmentsResponse>>;
    listShipmentsPages(params?: { "order_id"?: InputValue<string>; "fulfillment_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_system"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "return_id"?: InputValue<string>; "handed_off_after"?: InputValue<string | globalThis.Date>; "handed_off_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<ShipmentListResponse>;
    listShipmentsPagesWithResponse(params?: { "order_id"?: InputValue<string>; "fulfillment_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_system"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "return_id"?: InputValue<string>; "handed_off_after"?: InputValue<string | globalThis.Date>; "handed_off_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<MeListShipmentsResponse>>;
    listShipmentsItems(params?: { "order_id"?: InputValue<string>; "fulfillment_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "external_system"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "return_id"?: InputValue<string>; "handed_off_after"?: InputValue<string | globalThis.Date>; "handed_off_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<Shipment>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of subscriptions for the authenticated merchant. subscription_plan is always included without expand: the plan's current summary, or null when the subscription has no plan.
 * GET /v1/me/subscriptions
 * @example
 * client.me.listSubscriptions()
 */
    listSubscriptions(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete">>; "billing_schedule_owner"?: InputValue<"flint" | "external">; "awaiting_billing_schedule"?: InputValue<boolean>; "cancel_at_period_end"?: InputValue<boolean>; "plan_id"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "next_billing_at_after"?: InputValue<string | globalThis.Date>; "next_billing_at_before"?: InputValue<string | globalThis.Date>; "needs_attention"?: InputValue<boolean>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SubscriptionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listSubscriptionsWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete">>; "billing_schedule_owner"?: InputValue<"flint" | "external">; "awaiting_billing_schedule"?: InputValue<boolean>; "cancel_at_period_end"?: InputValue<boolean>; "plan_id"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "next_billing_at_after"?: InputValue<string | globalThis.Date>; "next_billing_at_before"?: InputValue<string | globalThis.Date>; "needs_attention"?: InputValue<boolean>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<MeListSubscriptionsResponse>>;
    listSubscriptionsPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete">>; "billing_schedule_owner"?: InputValue<"flint" | "external">; "awaiting_billing_schedule"?: InputValue<boolean>; "cancel_at_period_end"?: InputValue<boolean>; "plan_id"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "next_billing_at_after"?: InputValue<string | globalThis.Date>; "next_billing_at_before"?: InputValue<string | globalThis.Date>; "needs_attention"?: InputValue<boolean>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SubscriptionListResponse>;
    listSubscriptionsPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete">>; "billing_schedule_owner"?: InputValue<"flint" | "external">; "awaiting_billing_schedule"?: InputValue<boolean>; "cancel_at_period_end"?: InputValue<boolean>; "plan_id"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "next_billing_at_after"?: InputValue<string | globalThis.Date>; "next_billing_at_before"?: InputValue<string | globalThis.Date>; "needs_attention"?: InputValue<boolean>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<MeListSubscriptionsResponse>>;
    listSubscriptionsItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete">>; "billing_schedule_owner"?: InputValue<"flint" | "external">; "awaiting_billing_schedule"?: InputValue<boolean>; "cancel_at_period_end"?: InputValue<boolean>; "plan_id"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "next_billing_at_after"?: InputValue<string | globalThis.Date>; "next_billing_at_before"?: InputValue<string | globalThis.Date>; "needs_attention"?: InputValue<boolean>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<Subscription>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Pauses a subscription immediately, optionally for a fixed number of billing cycles. A buyer's pause follows the store's customer_account.buyer_capabilities.
 * POST /v1/me/subscriptions/{subscription_id}/pause
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.pauseSubscription("example", {}, { idempotencyKey: idempotencyKey })
 */
    pauseSubscription(subscription_id: InputValue<string>, params: (InputValue<{ "pause_duration_cycles"?: number; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    pauseSubscriptionWithResponse(subscription_id: InputValue<string>, params: (InputValue<{ "pause_duration_cycles"?: number; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MePauseSubscriptionResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Clears a pending period-end cancellation without changing the current billing period.
 * POST /v1/me/subscriptions/{subscription_id}/reactivate
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.reactivateSubscription("example", {}, { idempotencyKey: idempotencyKey })
 */
    reactivateSubscription(subscription_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    reactivateSubscriptionWithResponse(subscription_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeReactivateSubscriptionResponse>>;
    /**
 * Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code. Removes only this buyer's saved access without changing funds or other holders' access. Repeated removals succeed.
 * DELETE /v1/me/gift-cards/{gift_card_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.removeGiftCard("example", {}, { idempotencyKey: idempotencyKey })
 */
    removeGiftCard(gift_card_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<ActionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeGiftCardWithResponse(gift_card_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeRemoveGiftCardResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Soft-removes a saved payment method so it can no longer be used for future payments.
 * DELETE /v1/me/payment-methods/{payment_method_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.removePaymentMethod("example", {}, { idempotencyKey: idempotencyKey })
 */
    removePaymentMethod(payment_method_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<ActionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removePaymentMethodWithResponse(payment_method_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeRemovePaymentMethodResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Queues another receipt email for a paid order when Flint manages receipt delivery. The recipient is derived from the order and cannot be supplied by the caller. When the merchant manages receipt delivery, ask the merchant for another copy.
 * POST /v1/me/orders/{order_id}/receipt
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.resendOrderReceipt("example", {}, { idempotencyKey: idempotencyKey })
 */
    resendOrderReceipt(order_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<ActionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    resendOrderReceiptWithResponse(order_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeResendOrderReceiptResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Requests resumption of a paused subscription. Processing is asynchronous, so the response can still show paused. Retrieve the subscription to follow its status. Paid access resumes only when the subscription is active; overdue payment must be collected first.
 * POST /v1/me/subscriptions/{subscription_id}/resume
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.resumeSubscription("example", {}, { idempotencyKey: idempotencyKey })
 */
    resumeSubscription(subscription_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    resumeSubscriptionWithResponse(subscription_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeResumeSubscriptionResponse>>;
    /**
 * Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code.
 * POST /v1/me/gift-cards
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.saveGiftCard({credential_type: "code", code: "example"}, { idempotencyKey: idempotencyKey })
 */
    saveGiftCard(params: (InputValue<({  }) & (({ "code": string; "credential_type": ("code") & ("code"); }) | ({ "credential_type": ("recipient_access") & ("recipient_access"); "grant_id": string; "recipient_access_token": string; }))>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<BuyerGiftCardResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    saveGiftCardWithResponse(params: (InputValue<({  }) & (({ "code": string; "credential_type": ("code") & ("code"); }) | ({ "credential_type": ("recipient_access") & ("recipient_access"); "grant_id": string; "recipient_access_token": string; }))>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeSaveGiftCardResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Initiates saving a payment method and returns the client setup payload needed to complete setup on the frontend.
 * POST /v1/me/payment-methods
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.savePaymentMethod({}, { idempotencyKey: idempotencyKey })
 */
    savePaymentMethod(params: (InputValue<{ "type"?: "card"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<SavePaymentMethodResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    savePaymentMethodWithResponse(params: (InputValue<{ "type"?: "card"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeSavePaymentMethodResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Sets the address as the billing default, shipping default, or both and makes it the customer's effective address for each selected role.
 * POST /v1/me/addresses/{customer_address_id}/set-default
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.setDefaultAddress("example", {default_for: "billing"}, { idempotencyKey: idempotencyKey })
 */
    setDefaultAddress(customer_address_id: InputValue<string>, params: (InputValue<{ "default_for": "billing" | "shipping" | "both"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<CustomerAddressResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    setDefaultAddressWithResponse(customer_address_id: InputValue<string>, params: (InputValue<{ "default_for": "billing" | "shipping" | "both"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeSetDefaultAddressResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Sets the default payment method for the payment method's owning customer. Subscriptions and automatic invoices charge the default without the buyer, so the payment method's usage must be off_session.
 * POST /v1/me/payment-methods/{payment_method_id}/set-default
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.setDefaultPaymentMethod("example", {}, { idempotencyKey: idempotencyKey })
 */
    setDefaultPaymentMethod(payment_method_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<PaymentMethodResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    setDefaultPaymentMethodWithResponse(payment_method_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeSetDefaultPaymentMethodResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. Updates the current buyer's name or phone. Manage billing and shipping addresses through /v1/me/addresses.
 * PATCH /v1/me
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.update({}, { idempotencyKey: idempotencyKey })
 */
    update(params: (InputValue<{ "name"?: string; "phone"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<CustomerResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(params: (InputValue<{ "name"?: string; "phone"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeUpdateResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Applies a sparse update to a saved address. Updating a default address also updates the customer's effective address for that role.
 * PATCH /v1/me/addresses/{customer_address_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.updateAddress("example", {}, { idempotencyKey: idempotencyKey })
 */
    updateAddress(customer_address_id: InputValue<string>, params: (InputValue<{ "address"?: PostalAddressInput; "label"?: string; "phone"?: string; "recipient_name"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<CustomerAddressResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateAddressWithResponse(customer_address_id: InputValue<string>, params: (InputValue<{ "address"?: PostalAddressInput; "label"?: string; "phone"?: string; "recipient_name"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeUpdateAddressResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. Turns the optional email categories in the body on or off for the customer's current email at this merchant in the selected merchant environment, and leaves the others as they are. The setting follows the email address, so it also covers guest checkouts with the same email. A customer without an email has no email preferences, and the change answers 404 with CUSTOMER_EMAIL_REQUIRED.
 * PATCH /v1/me/email-preferences
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.updateEmailPreferences({checkout_reminders: true}, { idempotencyKey: idempotencyKey })
 */
    updateEmailPreferences(params: (InputValue<{ "checkout_reminders"?: boolean; "shipping_updates"?: boolean; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<_SdkPayloadAt<CustomerEmailPreferencesResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateEmailPreferencesWithResponse(params: (InputValue<{ "checkout_reminders"?: boolean; "shipping_updates"?: boolean; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"customer">): Promise<SdkResponse<MeUpdateEmailPreferencesResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly me: MeResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { AddReturnLineItemResponse } from '../declarations/AddReturnLineItemResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { MeCancelReturnResponse } from '../declarations/MeCancelReturnResponse.js';
export type { CancelSubscriptionResponse } from '../declarations/CancelSubscriptionResponse.js';
export type { MeCancelSubscriptionResponse } from '../declarations/MeCancelSubscriptionResponse.js';
export type { SubscriptionResponse } from '../declarations/SubscriptionResponse.js';
export type { MeChangeSubscriptionPaymentMethodResponse } from '../declarations/MeChangeSubscriptionPaymentMethodResponse.js';
export type { EmailChangeRequestResponse } from '../declarations/EmailChangeRequestResponse.js';
export type { MeConfirmEmailChangeRequestResponse } from '../declarations/MeConfirmEmailChangeRequestResponse.js';
export type { PostalAddressInput } from '../declarations/PostalAddressInput.js';
export type { CustomerAddressResponse } from '../declarations/CustomerAddressResponse.js';
export type { MeCreateAddressResponse } from '../declarations/MeCreateAddressResponse.js';
export type { CustomerDeletionRequestResponse } from '../declarations/CustomerDeletionRequestResponse.js';
export type { MeCreateDeletionRequestResponse } from '../declarations/MeCreateDeletionRequestResponse.js';
export type { MeCreateEmailChangeRequestResponse } from '../declarations/MeCreateEmailChangeRequestResponse.js';
export type { InvoiceCheckoutSessionResponse } from '../declarations/InvoiceCheckoutSessionResponse.js';
export type { MeCreateInvoiceCheckoutSessionResponse } from '../declarations/MeCreateInvoiceCheckoutSessionResponse.js';
export type { ReturnLineItemRequestInput } from '../declarations/ReturnLineItemRequestInput.js';
export type { MeCreateReturnResponse } from '../declarations/MeCreateReturnResponse.js';
export type { CreateReturnEligibilityCheckRequestInput } from '../declarations/CreateReturnEligibilityCheckRequestInput.js';
export type { CreateReturnResolutionPreviewRequestInput } from '../declarations/CreateReturnResolutionPreviewRequestInput.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { CreateReturnPreviewResponse } from '../declarations/CreateReturnPreviewResponse.js';
export type { MeCreateReturnPreviewResponse } from '../declarations/MeCreateReturnPreviewResponse.js';
export type { CheckoutSessionLaunchResponse } from '../declarations/CheckoutSessionLaunchResponse.js';
export type { MeCreateReturnResolutionCheckoutSessionResponse } from '../declarations/MeCreateReturnResolutionCheckoutSessionResponse.js';
export type { ActionResponse } from '../declarations/ActionResponse.js';
export type { MeDeleteAddressResponse } from '../declarations/MeDeleteAddressResponse.js';
export type { CustomerResponse } from '../declarations/CustomerResponse.js';
export type { MeGetResponse } from '../declarations/MeGetResponse.js';
export type { MeGetAddressResponse } from '../declarations/MeGetAddressResponse.js';
export type { BuyerCreditNoteResponse } from '../declarations/BuyerCreditNoteResponse.js';
export type { MeGetCreditNoteResponse } from '../declarations/MeGetCreditNoteResponse.js';
export type { MeGetCreditNotePDFResponse } from '../declarations/MeGetCreditNotePDFResponse.js';
export type { MeGetDeletionRequestResponse } from '../declarations/MeGetDeletionRequestResponse.js';
export type { CustomerEmailPreferencesResponse } from '../declarations/CustomerEmailPreferencesResponse.js';
export type { MeGetEmailPreferencesResponse } from '../declarations/MeGetEmailPreferencesResponse.js';
export type { BuyerGiftCardResponse } from '../declarations/BuyerGiftCardResponse.js';
export type { MeGetGiftCardResponse } from '../declarations/MeGetGiftCardResponse.js';
export type { BuyerInvoiceResponse } from '../declarations/BuyerInvoiceResponse.js';
export type { MeGetInvoiceResponse } from '../declarations/MeGetInvoiceResponse.js';
export type { MeGetInvoicePDFResponse } from '../declarations/MeGetInvoicePDFResponse.js';
export type { OrderResponse } from '../declarations/OrderResponse.js';
export type { MeGetOrderResponse } from '../declarations/MeGetOrderResponse.js';
export type { PaymentMethodResponse } from '../declarations/PaymentMethodResponse.js';
export type { MeGetPaymentMethodResponse } from '../declarations/MeGetPaymentMethodResponse.js';
export type { MeGetReturnResponse } from '../declarations/MeGetReturnResponse.js';
export type { MeGetSubscriptionResponse } from '../declarations/MeGetSubscriptionResponse.js';
export type { CustomerAddressListResponse } from '../declarations/CustomerAddressListResponse.js';
export type { MeListAddressesResponse } from '../declarations/MeListAddressesResponse.js';
export type { CustomerAddress } from '../declarations/CustomerAddress.js';
export type { BuyerCreditNoteListResponse } from '../declarations/BuyerCreditNoteListResponse.js';
export type { MeListCreditNotesResponse } from '../declarations/MeListCreditNotesResponse.js';
export type { BuyerCreditNote } from '../declarations/BuyerCreditNote.js';
export type { CustomerDeletionRequestListResponse } from '../declarations/CustomerDeletionRequestListResponse.js';
export type { MeListDeletionRequestsResponse } from '../declarations/MeListDeletionRequestsResponse.js';
export type { CustomerDeletionRequest } from '../declarations/CustomerDeletionRequest.js';
export type { FulfillmentListResponse } from '../declarations/FulfillmentListResponse.js';
export type { MeListFulfillmentsResponse } from '../declarations/MeListFulfillmentsResponse.js';
export type { Fulfillment } from '../declarations/Fulfillment.js';
export type { BuyerGiftCardListResponse } from '../declarations/BuyerGiftCardListResponse.js';
export type { MeListGiftCardsResponse } from '../declarations/MeListGiftCardsResponse.js';
export type { BuyerGiftCard } from '../declarations/BuyerGiftCard.js';
export type { BuyerGiftCardTransactionListResponse } from '../declarations/BuyerGiftCardTransactionListResponse.js';
export type { MeListGiftCardTransactionsResponse } from '../declarations/MeListGiftCardTransactionsResponse.js';
export type { BuyerGiftCardTransaction } from '../declarations/BuyerGiftCardTransaction.js';
export type { BuyerInvoiceListResponse } from '../declarations/BuyerInvoiceListResponse.js';
export type { MeListInvoicesResponse } from '../declarations/MeListInvoicesResponse.js';
export type { BuyerInvoice } from '../declarations/BuyerInvoice.js';
export type { OrderActivityListResponse } from '../declarations/OrderActivityListResponse.js';
export type { MeListOrderActivitiesResponse } from '../declarations/MeListOrderActivitiesResponse.js';
export type { OrderActivity } from '../declarations/OrderActivity.js';
export type { OrderListResponse } from '../declarations/OrderListResponse.js';
export type { MeListOrdersResponse } from '../declarations/MeListOrdersResponse.js';
export type { Order } from '../declarations/Order.js';
export type { PackageListResponse } from '../declarations/PackageListResponse.js';
export type { MeListPackagesResponse } from '../declarations/MeListPackagesResponse.js';
export type { Package } from '../declarations/Package.js';
export type { PaymentMethodListResponse } from '../declarations/PaymentMethodListResponse.js';
export type { MeListPaymentMethodsResponse } from '../declarations/MeListPaymentMethodsResponse.js';
export type { PaymentMethod } from '../declarations/PaymentMethod.js';
export type { PaymentIntentListResponse } from '../declarations/PaymentIntentListResponse.js';
export type { MeListPaymentsResponse } from '../declarations/MeListPaymentsResponse.js';
export type { PaymentIntent } from '../declarations/PaymentIntent.js';
export type { BuyerRefundListResponse } from '../declarations/BuyerRefundListResponse.js';
export type { MeListRefundsResponse } from '../declarations/MeListRefundsResponse.js';
export type { BuyerRefund } from '../declarations/BuyerRefund.js';
export type { ListReturnsResponse } from '../declarations/ListReturnsResponse.js';
export type { MeListReturnsResponse } from '../declarations/MeListReturnsResponse.js';
export type { ReturnResource } from '../declarations/ReturnResource.js';
export type { ShipmentListResponse } from '../declarations/ShipmentListResponse.js';
export type { MeListShipmentsResponse } from '../declarations/MeListShipmentsResponse.js';
export type { Shipment } from '../declarations/Shipment.js';
export type { SubscriptionListResponse } from '../declarations/SubscriptionListResponse.js';
export type { MeListSubscriptionsResponse } from '../declarations/MeListSubscriptionsResponse.js';
export type { Subscription } from '../declarations/Subscription.js';
export type { MePauseSubscriptionResponse } from '../declarations/MePauseSubscriptionResponse.js';
export type { MeReactivateSubscriptionResponse } from '../declarations/MeReactivateSubscriptionResponse.js';
export type { MeRemoveGiftCardResponse } from '../declarations/MeRemoveGiftCardResponse.js';
export type { MeRemovePaymentMethodResponse } from '../declarations/MeRemovePaymentMethodResponse.js';
export type { MeResendOrderReceiptResponse } from '../declarations/MeResendOrderReceiptResponse.js';
export type { MeResumeSubscriptionResponse } from '../declarations/MeResumeSubscriptionResponse.js';
export type { MeSaveGiftCardResponse } from '../declarations/MeSaveGiftCardResponse.js';
export type { SavePaymentMethodResponse } from '../declarations/SavePaymentMethodResponse.js';
export type { MeSavePaymentMethodResponse } from '../declarations/MeSavePaymentMethodResponse.js';
export type { MeSetDefaultAddressResponse } from '../declarations/MeSetDefaultAddressResponse.js';
export type { MeSetDefaultPaymentMethodResponse } from '../declarations/MeSetDefaultPaymentMethodResponse.js';
export type { MeUpdateResponse } from '../declarations/MeUpdateResponse.js';
export type { MeUpdateAddressResponse } from '../declarations/MeUpdateAddressResponse.js';
export type { MeUpdateEmailPreferencesResponse } from '../declarations/MeUpdateEmailPreferencesResponse.js';
export type { Merchant } from '../declarations/Merchant.js';
export type { MerchantInput } from '../declarations/MerchantInput.js';
export type { MerchantAccountSession } from '../declarations/MerchantAccountSession.js';
export type { MerchantAccountSessionInput } from '../declarations/MerchantAccountSessionInput.js';
export type { MerchantAccountSessionCreateRequest } from '../declarations/MerchantAccountSessionCreateRequest.js';
export type { MerchantAccountSessionCreateRequestInput } from '../declarations/MerchantAccountSessionCreateRequestInput.js';
export type { MerchantAccountSessionEffectivePolicy } from '../declarations/MerchantAccountSessionEffectivePolicy.js';
export type { MerchantAccountSessionEffectivePolicyInput } from '../declarations/MerchantAccountSessionEffectivePolicyInput.js';
export type { MerchantAccountSessionRefreshRequest } from '../declarations/MerchantAccountSessionRefreshRequest.js';
export type { MerchantAccountSessionRefreshRequestInput } from '../declarations/MerchantAccountSessionRefreshRequestInput.js';
export type { MerchantAccountSessionResponse } from '../declarations/MerchantAccountSessionResponse.js';
export type { MerchantAccountSessionResponseInput } from '../declarations/MerchantAccountSessionResponseInput.js';
export type { MerchantAccountSessionStripeCollectionOptions } from '../declarations/MerchantAccountSessionStripeCollectionOptions.js';
export type { MerchantAccountSessionStripeCollectionOptionsInput } from '../declarations/MerchantAccountSessionStripeCollectionOptionsInput.js';
export type { MerchantAccountSessionStripeComponentLaunch } from '../declarations/MerchantAccountSessionStripeComponentLaunch.js';
export type { MerchantAccountSessionStripeComponentLaunchInput } from '../declarations/MerchantAccountSessionStripeComponentLaunchInput.js';
export type { MerchantAccountSessionStripeComponentProps } from '../declarations/MerchantAccountSessionStripeComponentProps.js';
export type { MerchantAccountSessionStripeComponentPropsInput } from '../declarations/MerchantAccountSessionStripeComponentPropsInput.js';
export type { MerchantAccountSessionStripeLaunch } from '../declarations/MerchantAccountSessionStripeLaunch.js';
export type { MerchantAccountSessionStripeLaunchInput } from '../declarations/MerchantAccountSessionStripeLaunchInput.js';
export type { MerchantAccountSessionStripeRequirements } from '../declarations/MerchantAccountSessionStripeRequirements.js';
export type { MerchantAccountSessionStripeRequirementsInput } from '../declarations/MerchantAccountSessionStripeRequirementsInput.js';
export type { MerchantBillingBalance } from '../declarations/MerchantBillingBalance.js';
export type { MerchantBillingBalanceInput } from '../declarations/MerchantBillingBalanceInput.js';
export type { MerchantBillingBalanceListResponse } from '../declarations/MerchantBillingBalanceListResponse.js';
export type { MerchantBillingBalanceListResponseInput } from '../declarations/MerchantBillingBalanceListResponseInput.js';
export type { MerchantBillingBalanceResponse } from '../declarations/MerchantBillingBalanceResponse.js';
export type { MerchantBillingBalanceResponseInput } from '../declarations/MerchantBillingBalanceResponseInput.js';
export type { MerchantReadinessAxis } from '../declarations/MerchantReadinessAxis.js';
export type { MerchantReadinessAxisInput } from '../declarations/MerchantReadinessAxisInput.js';
export type { MerchantReadinessRequirements } from '../declarations/MerchantReadinessRequirements.js';
export type { MerchantReadinessRequirementsInput } from '../declarations/MerchantReadinessRequirementsInput.js';
export type { MerchantResponse } from '../declarations/MerchantResponse.js';
export type { MerchantResponseInput } from '../declarations/MerchantResponseInput.js';
export type { MerchantSubscriptionInvoice } from '../declarations/MerchantSubscriptionInvoice.js';
export type { MerchantSubscriptionInvoiceInput } from '../declarations/MerchantSubscriptionInvoiceInput.js';
export type { MerchantSubscriptionInvoiceLine } from '../declarations/MerchantSubscriptionInvoiceLine.js';
export type { MerchantSubscriptionInvoiceLineInput } from '../declarations/MerchantSubscriptionInvoiceLineInput.js';
export type { MerchantSubscriptionInvoiceListResponse } from '../declarations/MerchantSubscriptionInvoiceListResponse.js';
export type { MerchantSubscriptionInvoiceListResponseInput } from '../declarations/MerchantSubscriptionInvoiceListResponseInput.js';
export type { MerchantSubscriptionInvoiceResponse } from '../declarations/MerchantSubscriptionInvoiceResponse.js';
export type { MerchantSubscriptionInvoiceResponseInput } from '../declarations/MerchantSubscriptionInvoiceResponseInput.js';
export type { MerchantWebhookEnvelope } from '../declarations/MerchantWebhookEnvelope.js';
export type { MerchantWebhookEnvelopeInput } from '../declarations/MerchantWebhookEnvelopeInput.js';
export type { MeCancelReturnInput } from '../declarations/MeCancelReturnInput.js';
export type { MeCancelSubscriptionInput } from '../declarations/MeCancelSubscriptionInput.js';
export type { MeChangeSubscriptionPaymentMethodInput } from '../declarations/MeChangeSubscriptionPaymentMethodInput.js';
export type { MeConfirmEmailChangeRequestInput } from '../declarations/MeConfirmEmailChangeRequestInput.js';
export type { MeCreateAddressInput } from '../declarations/MeCreateAddressInput.js';
export type { MeCreateDeletionRequestInput } from '../declarations/MeCreateDeletionRequestInput.js';
export type { MeCreateEmailChangeRequestInput } from '../declarations/MeCreateEmailChangeRequestInput.js';
export type { MeCreateInvoiceCheckoutSessionInput } from '../declarations/MeCreateInvoiceCheckoutSessionInput.js';
export type { MerchantAccountSessionsCreateInput } from '../declarations/MerchantAccountSessionsCreateInput.js';
export type { MerchantAccountSessionsCreateResponse } from '../declarations/MerchantAccountSessionsCreateResponse.js';
export type { MeCreateReturnInput } from '../declarations/MeCreateReturnInput.js';
export type { MeCreateReturnPreviewInput } from '../declarations/MeCreateReturnPreviewInput.js';
export type { MeCreateReturnResolutionCheckoutSessionInput } from '../declarations/MeCreateReturnResolutionCheckoutSessionInput.js';
export type { MeDeleteAddressInput } from '../declarations/MeDeleteAddressInput.js';
export type { MeGetInput } from '../declarations/MeGetInput.js';
export type { MeGetAddressInput } from '../declarations/MeGetAddressInput.js';
export type { MeGetCreditNoteInput } from '../declarations/MeGetCreditNoteInput.js';
export type { MeGetCreditNotePDFInput } from '../declarations/MeGetCreditNotePDFInput.js';
export type { MeGetDeletionRequestInput } from '../declarations/MeGetDeletionRequestInput.js';
export type { MeGetEmailPreferencesInput } from '../declarations/MeGetEmailPreferencesInput.js';
export type { MeGetGiftCardInput } from '../declarations/MeGetGiftCardInput.js';
export type { MeGetInvoiceInput } from '../declarations/MeGetInvoiceInput.js';
export type { MeGetInvoicePDFInput } from '../declarations/MeGetInvoicePDFInput.js';
export type { MeGetOrderInput } from '../declarations/MeGetOrderInput.js';
export type { MeGetPaymentMethodInput } from '../declarations/MeGetPaymentMethodInput.js';
export type { MerchantsGetInput } from '../declarations/MerchantsGetInput.js';
export type { MerchantsGetResponse } from '../declarations/MerchantsGetResponse.js';
export type { MerchantBillingBalancesGetInput } from '../declarations/MerchantBillingBalancesGetInput.js';
export type { MerchantBillingBalancesGetResponse } from '../declarations/MerchantBillingBalancesGetResponse.js';
export type { MerchantSubscriptionInvoicesGetInput } from '../declarations/MerchantSubscriptionInvoicesGetInput.js';
export type { MerchantSubscriptionInvoicesGetResponse } from '../declarations/MerchantSubscriptionInvoicesGetResponse.js';
export type { MeGetReturnInput } from '../declarations/MeGetReturnInput.js';
export type { MeGetSubscriptionInput } from '../declarations/MeGetSubscriptionInput.js';
export type { MeListAddressesInput } from '../declarations/MeListAddressesInput.js';
export type { MeListCreditNotesInput } from '../declarations/MeListCreditNotesInput.js';
export type { MeListDeletionRequestsInput } from '../declarations/MeListDeletionRequestsInput.js';
export type { MeListFulfillmentsInput } from '../declarations/MeListFulfillmentsInput.js';
export type { MeListGiftCardsInput } from '../declarations/MeListGiftCardsInput.js';
export type { MeListGiftCardTransactionsInput } from '../declarations/MeListGiftCardTransactionsInput.js';
export type { MeListInvoicesInput } from '../declarations/MeListInvoicesInput.js';
export type { MeListOrderActivitiesInput } from '../declarations/MeListOrderActivitiesInput.js';
export type { MeListOrdersInput } from '../declarations/MeListOrdersInput.js';
export type { MeListPackagesInput } from '../declarations/MeListPackagesInput.js';
export type { MeListPaymentMethodsInput } from '../declarations/MeListPaymentMethodsInput.js';
export type { MeListPaymentsInput } from '../declarations/MeListPaymentsInput.js';
export type { MerchantBillingBalancesListInput } from '../declarations/MerchantBillingBalancesListInput.js';
export type { MerchantBillingBalancesListResponse } from '../declarations/MerchantBillingBalancesListResponse.js';
export type { MerchantSubscriptionInvoicesListInput } from '../declarations/MerchantSubscriptionInvoicesListInput.js';
export type { MerchantSubscriptionInvoicesListResponse } from '../declarations/MerchantSubscriptionInvoicesListResponse.js';
export type { MeListRefundsInput } from '../declarations/MeListRefundsInput.js';
export type { MeListReturnsInput } from '../declarations/MeListReturnsInput.js';
export type { MeListShipmentsInput } from '../declarations/MeListShipmentsInput.js';
export type { MeListSubscriptionsInput } from '../declarations/MeListSubscriptionsInput.js';
export type { MePauseSubscriptionInput } from '../declarations/MePauseSubscriptionInput.js';
export type { MeReactivateSubscriptionInput } from '../declarations/MeReactivateSubscriptionInput.js';
export type { MerchantAccountSessionsRefreshInput } from '../declarations/MerchantAccountSessionsRefreshInput.js';
export type { MerchantAccountSessionsRefreshResponse } from '../declarations/MerchantAccountSessionsRefreshResponse.js';
export type { MeRemoveGiftCardInput } from '../declarations/MeRemoveGiftCardInput.js';
export type { MeRemovePaymentMethodInput } from '../declarations/MeRemovePaymentMethodInput.js';
export type { MeResendOrderReceiptInput } from '../declarations/MeResendOrderReceiptInput.js';
export type { MeResumeSubscriptionInput } from '../declarations/MeResumeSubscriptionInput.js';
export type { MeSaveGiftCardInput } from '../declarations/MeSaveGiftCardInput.js';
export type { MeSavePaymentMethodInput } from '../declarations/MeSavePaymentMethodInput.js';
export type { MeSetDefaultAddressInput } from '../declarations/MeSetDefaultAddressInput.js';
export type { MeSetDefaultPaymentMethodInput } from '../declarations/MeSetDefaultPaymentMethodInput.js';
export type { MeUpdateInput } from '../declarations/MeUpdateInput.js';
export type { MeUpdateAddressInput } from '../declarations/MeUpdateAddressInput.js';
export type { MeUpdateEmailPreferencesInput } from '../declarations/MeUpdateEmailPreferencesInput.js';
export type { MerchantsUpdateInput } from '../declarations/MerchantsUpdateInput.js';
export type { MerchantsUpdateResponse } from '../declarations/MerchantsUpdateResponse.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { CancelSubscriptionResult } from '../declarations/CancelSubscriptionResult.js';
export type { BuyerAction } from '../declarations/BuyerAction.js';
export type { ContractInfo } from '../declarations/ContractInfo.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { SubscriptionLineItem } from '../declarations/SubscriptionLineItem.js';
export type { BundleComponent } from '../declarations/BundleComponent.js';
export type { SelectedProductOption } from '../declarations/SelectedProductOption.js';
export type { CategoryReference } from '../declarations/CategoryReference.js';
export type { Image } from '../declarations/Image.js';
export type { OrderLineItemModifier } from '../declarations/OrderLineItemModifier.js';
export type { TextModifierRequest } from '../declarations/TextModifierRequest.js';
export type { CardDetails } from '../declarations/CardDetails.js';
export type { SubscriptionServiceLocation } from '../declarations/SubscriptionServiceLocation.js';
export type { PostalAddress } from '../declarations/PostalAddress.js';
export type { SubscriptionPlanLineItem } from '../declarations/SubscriptionPlanLineItem.js';
export type { OrderLineItemTax } from '../declarations/OrderLineItemTax.js';
export type { EmailChangeRequest } from '../declarations/EmailChangeRequest.js';
export type { InvoiceCheckoutSessionResult } from '../declarations/InvoiceCheckoutSessionResult.js';
export type { CheckoutSession } from '../declarations/CheckoutSession.js';
export type { PaymentAttemptGiftCardRedemption } from '../declarations/PaymentAttemptGiftCardRedemption.js';
export type { PaymentAttemptPaymentIntent } from '../declarations/PaymentAttemptPaymentIntent.js';
export type { PaymentErrorSummary } from '../declarations/PaymentErrorSummary.js';
export type { ErrorRemediation } from '../declarations/ErrorRemediation.js';
export type { PendingPaymentAction } from '../declarations/PendingPaymentAction.js';
export type { StripePaymentClientAction } from '../declarations/StripePaymentClientAction.js';
export type { CheckoutCustomTextWriteConfig } from '../declarations/CheckoutCustomTextWriteConfig.js';
export type { CheckoutCustomerConfig } from '../declarations/CheckoutCustomerConfig.js';
export type { PrefilledCustomerInfo } from '../declarations/PrefilledCustomerInfo.js';
export type { CheckoutDeliveryPinnedDependency } from '../declarations/CheckoutDeliveryPinnedDependency.js';
export type { CheckoutExpirationConfig } from '../declarations/CheckoutExpirationConfig.js';
export type { DeliveryQuoteChoiceGroupResource } from '../declarations/DeliveryQuoteChoiceGroupResource.js';
export type { DeliveryCandidateOutcomeResource } from '../declarations/DeliveryCandidateOutcomeResource.js';
export type { DeliveryAddressAdvisoryResource } from '../declarations/DeliveryAddressAdvisoryResource.js';
export type { DeliveryAddressRequest } from '../declarations/DeliveryAddressRequest.js';
export type { DeliveryInputRequirement } from '../declarations/DeliveryInputRequirement.js';
export type { DeliveryInputConstraint } from '../declarations/DeliveryInputConstraint.js';
export type { DeliveryWindowResource } from '../declarations/DeliveryWindowResource.js';
export type { DeliveryOptionProjection } from '../declarations/DeliveryOptionProjection.js';
export type { DeliveryArrivalEstimate } from '../declarations/DeliveryArrivalEstimate.js';
export type { BuyerInstructionsConfig } from '../declarations/BuyerInstructionsConfig.js';
export type { DeliveryPlan } from '../declarations/DeliveryPlan.js';
export type { DeliveryQuoteExecutionLegResource } from '../declarations/DeliveryQuoteExecutionLegResource.js';
export type { DeliveryShipmentDetails } from '../declarations/DeliveryShipmentDetails.js';
export type { DeliveryPickupDetails } from '../declarations/DeliveryPickupDetails.js';
export type { DeliveryLocationSummaryResource } from '../declarations/DeliveryLocationSummaryResource.js';
export type { DeliveryAddressResource } from '../declarations/DeliveryAddressResource.js';
export type { DeliveryRecipientRequirement } from '../declarations/DeliveryRecipientRequirement.js';
export type { DeliveryQuoteLineItemResource } from '../declarations/DeliveryQuoteLineItemResource.js';
export type { DeliveryMerchantDiagnostic } from '../declarations/DeliveryMerchantDiagnostic.js';
export type { DeliveryEligibilityMismatch } from '../declarations/DeliveryEligibilityMismatch.js';
export type { BuyerDeliveryQuoteChoiceGroupResource } from '../declarations/BuyerDeliveryQuoteChoiceGroupResource.js';
export type { BuyerDeliveryInputRequirementResource } from '../declarations/BuyerDeliveryInputRequirementResource.js';
export type { BuyerDeliveryOptionResource } from '../declarations/BuyerDeliveryOptionResource.js';
export type { LegalSettings } from '../declarations/LegalSettings.js';
export type { PricingAmounts } from '../declarations/PricingAmounts.js';
export type { SettlementAmounts } from '../declarations/SettlementAmounts.js';
export type { SignedMoney } from '../declarations/SignedMoney.js';
export type { PaymentCollectionStripe } from '../declarations/PaymentCollectionStripe.js';
export type { SelectableOrderPaymentIntent } from '../declarations/SelectableOrderPaymentIntent.js';
export type { PaymentCollection } from '../declarations/PaymentCollection.js';
export type { ExpandedPaymentIntentSummary } from '../declarations/ExpandedPaymentIntentSummary.js';
export type { PaymentSourceSummary } from '../declarations/PaymentSourceSummary.js';
export type { PaymentSourceAchDebitSummary } from '../declarations/PaymentSourceAchDebitSummary.js';
export type { PaymentSourceCardSummary } from '../declarations/PaymentSourceCardSummary.js';
export type { CheckoutPaymentConfig } from '../declarations/CheckoutPaymentConfig.js';
export type { CheckoutProblemResource } from '../declarations/CheckoutProblemResource.js';
export type { CheckoutPromotionConfig } from '../declarations/CheckoutPromotionConfig.js';
export type { CheckoutRedirectsConfig } from '../declarations/CheckoutRedirectsConfig.js';
export type { CheckoutTaxConfig } from '../declarations/CheckoutTaxConfig.js';
export type { ThemeConfig } from '../declarations/ThemeConfig.js';
export type { CheckoutTipConfig } from '../declarations/CheckoutTipConfig.js';
export type { HostedCheckout } from '../declarations/HostedCheckout.js';
export type { Invoice } from '../declarations/Invoice.js';
export type { InvoiceLateFee } from '../declarations/InvoiceLateFee.js';
export type { InvoiceLateFeePolicy } from '../declarations/InvoiceLateFeePolicy.js';
export type { InvoicePaymentOptionLimit } from '../declarations/InvoicePaymentOptionLimit.js';
export type { InvoicePaymentTermCalculation } from '../declarations/InvoicePaymentTermCalculation.js';
export type { InvoiceScheduleEntry } from '../declarations/InvoiceScheduleEntry.js';
export type { InvoiceScheduleAmountSpecification } from '../declarations/InvoiceScheduleAmountSpecification.js';
export type { InvoiceScheduleDue } from '../declarations/InvoiceScheduleDue.js';
export type { DocumentTaxID } from '../declarations/DocumentTaxID.js';
export type { OrderCharge } from '../declarations/OrderCharge.js';
export type { OrderCalculatedChargeTax } from '../declarations/OrderCalculatedChargeTax.js';
export type { TaxCalculationRequest } from '../declarations/TaxCalculationRequest.js';
export type { TaxComponentRequest } from '../declarations/TaxComponentRequest.js';
export type { TaxJurisdiction } from '../declarations/TaxJurisdiction.js';
export type { InvoiceDiscount } from '../declarations/InvoiceDiscount.js';
export type { InvoiceLineItem } from '../declarations/InvoiceLineItem.js';
export type { InvoiceTip } from '../declarations/InvoiceTip.js';
export type { InvoicePaymentAttempt } from '../declarations/InvoicePaymentAttempt.js';
export type { ReturnEligibilitySelectionInput } from '../declarations/ReturnEligibilitySelectionInput.js';
export type { ReturnResolutionAdjustmentRequestInput } from '../declarations/ReturnResolutionAdjustmentRequestInput.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { ReturnResolutionLineItemRequestInput } from '../declarations/ReturnResolutionLineItemRequestInput.js';
export type { ReturnReplacementLineItemRequestInput } from '../declarations/ReturnReplacementLineItemRequestInput.js';
export type { CreateReturnPreviewData } from '../declarations/CreateReturnPreviewData.js';
export type { ReturnEligibilityCheck } from '../declarations/ReturnEligibilityCheck.js';
export type { ReturnEligibilityCheckLineItem } from '../declarations/ReturnEligibilityCheckLineItem.js';
export type { ReturnLineItemEligibility } from '../declarations/ReturnLineItemEligibility.js';
export type { ReturnLineItemDecisionProposal } from '../declarations/ReturnLineItemDecisionProposal.js';
export type { ReturnPolicyAdjustmentProposal } from '../declarations/ReturnPolicyAdjustmentProposal.js';
export type { ReturnReasonSummary } from '../declarations/ReturnReasonSummary.js';
export type { ReturnPolicyEvaluation } from '../declarations/ReturnPolicyEvaluation.js';
export type { ReturnPolicyEvaluationLineItem } from '../declarations/ReturnPolicyEvaluationLineItem.js';
export type { ReturnEligibilitySelection } from '../declarations/ReturnEligibilitySelection.js';
export type { ReturnLineItemRequest } from '../declarations/ReturnLineItemRequest.js';
export type { ReturnResolutionPreview } from '../declarations/ReturnResolutionPreview.js';
export type { ReturnResolutionAdjustment } from '../declarations/ReturnResolutionAdjustment.js';
export type { ReturnActor } from '../declarations/ReturnActor.js';
export type { ReturnResolutionLineItem } from '../declarations/ReturnResolutionLineItem.js';
export type { ReturnReplacementLineItem } from '../declarations/ReturnReplacementLineItem.js';
export type { ReturnResolutionWarning } from '../declarations/ReturnResolutionWarning.js';
export type { CheckoutSessionLaunchResult } from '../declarations/CheckoutSessionLaunchResult.js';
export type { CheckoutAccess } from '../declarations/CheckoutAccess.js';
export type { ActionResult } from '../declarations/ActionResult.js';
export type { Customer } from '../declarations/Customer.js';
export type { CustomerReceivableBalance } from '../declarations/CustomerReceivableBalance.js';
export type { CustomerEmailPreferences } from '../declarations/CustomerEmailPreferences.js';
export type { CreditNoteLine } from '../declarations/CreditNoteLine.js';
export type { FulfillmentChargeLink } from '../declarations/FulfillmentChargeLink.js';
export type { DigitalFulfillmentDetails } from '../declarations/DigitalFulfillmentDetails.js';
export type { FulfillmentLineItem } from '../declarations/FulfillmentLineItem.js';
export type { DeliveryFulfillmentDetails } from '../declarations/DeliveryFulfillmentDetails.js';
export type { ExpandedPackageSummary } from '../declarations/ExpandedPackageSummary.js';
export type { PickupFulfillmentDetails } from '../declarations/PickupFulfillmentDetails.js';
export type { FulfillmentRecipient } from '../declarations/FulfillmentRecipient.js';
export type { ServiceFulfillmentDetails } from '../declarations/ServiceFulfillmentDetails.js';
export type { ExpandedShipmentSummary } from '../declarations/ExpandedShipmentSummary.js';
export type { GiftCardMoney } from '../declarations/GiftCardMoney.js';
export type { BuyerInvoiceLateFee } from '../declarations/BuyerInvoiceLateFee.js';
export type { AppliedDiscount } from '../declarations/AppliedDiscount.js';
export type { OrderDeliveryDestinationAddress } from '../declarations/OrderDeliveryDestinationAddress.js';
export type { OrderDeliveryDestinationRecipient } from '../declarations/OrderDeliveryDestinationRecipient.js';
export type { OrderGiftCardAllocation } from '../declarations/OrderGiftCardAllocation.js';
export type { OrderGiftCardSettlement } from '../declarations/OrderGiftCardSettlement.js';
export type { OrderGiftCardSelection } from '../declarations/OrderGiftCardSelection.js';
export type { OrderLineItem } from '../declarations/OrderLineItem.js';
export type { GiftCardProductConfiguration } from '../declarations/GiftCardProductConfiguration.js';
export type { GiftCardCustomAmountBounds } from '../declarations/GiftCardCustomAmountBounds.js';
export type { GiftCardPurchaseRecipient } from '../declarations/GiftCardPurchaseRecipient.js';
export type { LineItemInventorySnapshot } from '../declarations/LineItemInventorySnapshot.js';
export type { LineItemInventoryDemand } from '../declarations/LineItemInventoryDemand.js';
export type { PurchasedGiftCard } from '../declarations/PurchasedGiftCard.js';
export type { OrderCalculatedLineItemTax } from '../declarations/OrderCalculatedLineItemTax.js';
export type { RequestedTip } from '../declarations/RequestedTip.js';
export type { OrderReturnCreditSettlement } from '../declarations/OrderReturnCreditSettlement.js';
export type { OrderTaxExemption } from '../declarations/OrderTaxExemption.js';
export type { OrderTaxLocation } from '../declarations/OrderTaxLocation.js';
export type { TaxBreakdown } from '../declarations/TaxBreakdown.js';
export type { Tip } from '../declarations/Tip.js';
export type { TipPaymentIntentAllocation } from '../declarations/TipPaymentIntentAllocation.js';
export type { TipValueSettlementAllocation } from '../declarations/TipValueSettlementAllocation.js';
export type { ShippingDimensions } from '../declarations/ShippingDimensions.js';
export type { ReturnShipmentLineItemAllocation } from '../declarations/ReturnShipmentLineItemAllocation.js';
export type { ShippingWeight } from '../declarations/ShippingWeight.js';
export type { PaymentAddOnFee } from '../declarations/PaymentAddOnFee.js';
export type { RefundLineItemAllocation } from '../declarations/RefundLineItemAllocation.js';
export type { RefundLineItemAdjustmentRefund } from '../declarations/RefundLineItemAdjustmentRefund.js';
export type { RefundLineItemAdjustment } from '../declarations/RefundLineItemAdjustment.js';
export type { RefundAdjustmentReason } from '../declarations/RefundAdjustmentReason.js';
export type { RefundLineItemModifierAllocation } from '../declarations/RefundLineItemModifierAllocation.js';
export type { RefundTaxBreakdownRefund } from '../declarations/RefundTaxBreakdownRefund.js';
export type { PaymentRefund } from '../declarations/PaymentRefund.js';
export type { RefundTenderAllocation } from '../declarations/RefundTenderAllocation.js';
export type { RefundGiftCardDestination } from '../declarations/RefundGiftCardDestination.js';
export type { ReturnCompletionBlocker } from '../declarations/ReturnCompletionBlocker.js';
export type { ReturnFinancialSummary } from '../declarations/ReturnFinancialSummary.js';
export type { ReturnHandoffRequirement } from '../declarations/ReturnHandoffRequirement.js';
export type { ReturnHandoffDestination } from '../declarations/ReturnHandoffDestination.js';
export type { ReturnLineItem } from '../declarations/ReturnLineItem.js';
export type { ReturnLineItemValue } from '../declarations/ReturnLineItemValue.js';
export type { SavePaymentMethodResult } from '../declarations/SavePaymentMethodResult.js';
export type { StripeClientSetup } from '../declarations/StripeClientSetup.js';
export type { StripeClientSetupStripe } from '../declarations/StripeClientSetupStripe.js';
export type { StripeClientAuthority } from '../declarations/StripeClientAuthority.js';
export type { Banner } from '../declarations/Banner.js';
export type { ImageInput } from '../declarations/ImageInput.js';
export type { OnboardingExternalAction } from '../declarations/OnboardingExternalAction.js';
export type { OnboardingRequirements } from '../declarations/OnboardingRequirements.js';
export type { OnboardingExternalActionInput } from '../declarations/OnboardingExternalActionInput.js';
export type { OnboardingRequirementsInput } from '../declarations/OnboardingRequirementsInput.js';
export type { ResponseMetaInput } from '../declarations/ResponseMetaInput.js';
export type { ResponseWarningInput } from '../declarations/ResponseWarningInput.js';
export type { NextActionInput } from '../declarations/NextActionInput.js';
export type { CancelReturnRequestInput } from '../declarations/CancelReturnRequestInput.js';
export type { CancelSubscriptionRequestInput } from '../declarations/CancelSubscriptionRequestInput.js';
export type { ChangeSubscriptionPaymentMethodRequestInput } from '../declarations/ChangeSubscriptionPaymentMethodRequestInput.js';
export type { ConfirmEmailChangeRequestInput } from '../declarations/ConfirmEmailChangeRequestInput.js';
export type { CreateCustomerAddressRequestInput } from '../declarations/CreateCustomerAddressRequestInput.js';
export type { CreateEmailChangeRequestInput } from '../declarations/CreateEmailChangeRequestInput.js';
export type { InvoiceCheckoutSessionRequestInput } from '../declarations/InvoiceCheckoutSessionRequestInput.js';
export type { CreateReturnRequestInput } from '../declarations/CreateReturnRequestInput.js';
export type { CreateReturnPreviewRequestInput } from '../declarations/CreateReturnPreviewRequestInput.js';
export type { GetOrCreateReturnResolutionCheckoutSessionRequestInput } from '../declarations/GetOrCreateReturnResolutionCheckoutSessionRequestInput.js';
export type { PauseSubscriptionRequestInput } from '../declarations/PauseSubscriptionRequestInput.js';
export type { SaveMeGiftCardRequestInput } from '../declarations/SaveMeGiftCardRequestInput.js';
export type { SaveMePaymentMethodRequestInput } from '../declarations/SaveMePaymentMethodRequestInput.js';
export type { SetDefaultCustomerAddressRequestInput } from '../declarations/SetDefaultCustomerAddressRequestInput.js';
export type { UpdateMeRequestInput } from '../declarations/UpdateMeRequestInput.js';
export type { UpdateCustomerAddressRequestInput } from '../declarations/UpdateCustomerAddressRequestInput.js';
export type { UpdateCustomerEmailPreferencesRequestInput } from '../declarations/UpdateCustomerEmailPreferencesRequestInput.js';
export type { UpdateMerchantRequestInput } from '../declarations/UpdateMerchantRequestInput.js';
export type { ImageRequestInput } from '../declarations/ImageRequestInput.js';
export { makeAddReturnLineItemResponse } from '../declarations/makeAddReturnLineItemResponse.js';
export { makeCancelSubscriptionResponse } from '../declarations/makeCancelSubscriptionResponse.js';
export { makeSubscriptionResponse } from '../declarations/makeSubscriptionResponse.js';
export { makeEmailChangeRequestResponse } from '../declarations/makeEmailChangeRequestResponse.js';
export { makeCustomerAddressResponse } from '../declarations/makeCustomerAddressResponse.js';
export { makeCustomerDeletionRequestResponse } from '../declarations/makeCustomerDeletionRequestResponse.js';
export { makeInvoiceCheckoutSessionResponse } from '../declarations/makeInvoiceCheckoutSessionResponse.js';
export { makeCreateReturnPreviewResponse } from '../declarations/makeCreateReturnPreviewResponse.js';
export { makeCheckoutSessionLaunchResponse } from '../declarations/makeCheckoutSessionLaunchResponse.js';
export { makeActionResponse } from '../declarations/makeActionResponse.js';
export { makeCustomerResponse } from '../declarations/makeCustomerResponse.js';
export { makeBuyerCreditNoteResponse } from '../declarations/makeBuyerCreditNoteResponse.js';
export { makeCustomerEmailPreferencesResponse } from '../declarations/makeCustomerEmailPreferencesResponse.js';
export { makeBuyerGiftCardResponse } from '../declarations/makeBuyerGiftCardResponse.js';
export { makeBuyerInvoiceResponse } from '../declarations/makeBuyerInvoiceResponse.js';
export { makeOrderResponse } from '../declarations/makeOrderResponse.js';
export { makePaymentMethodResponse } from '../declarations/makePaymentMethodResponse.js';
export { makeCustomerAddressListResponse } from '../declarations/makeCustomerAddressListResponse.js';
export { makeCustomerAddress } from '../declarations/makeCustomerAddress.js';
export { makeBuyerCreditNoteListResponse } from '../declarations/makeBuyerCreditNoteListResponse.js';
export { makeBuyerCreditNote } from '../declarations/makeBuyerCreditNote.js';
export { makeCustomerDeletionRequestListResponse } from '../declarations/makeCustomerDeletionRequestListResponse.js';
export { makeCustomerDeletionRequest } from '../declarations/makeCustomerDeletionRequest.js';
export { makeFulfillmentListResponse } from '../declarations/makeFulfillmentListResponse.js';
export { makeFulfillment } from '../declarations/makeFulfillment.js';
export { makeBuyerGiftCardListResponse } from '../declarations/makeBuyerGiftCardListResponse.js';
export { makeBuyerGiftCard } from '../declarations/makeBuyerGiftCard.js';
export { makeBuyerGiftCardTransactionListResponse } from '../declarations/makeBuyerGiftCardTransactionListResponse.js';
export { makeBuyerGiftCardTransaction } from '../declarations/makeBuyerGiftCardTransaction.js';
export { makeBuyerInvoiceListResponse } from '../declarations/makeBuyerInvoiceListResponse.js';
export { makeBuyerInvoice } from '../declarations/makeBuyerInvoice.js';
export { makeOrderActivityListResponse } from '../declarations/makeOrderActivityListResponse.js';
export { makeOrderActivity } from '../declarations/makeOrderActivity.js';
export { makeOrderListResponse } from '../declarations/makeOrderListResponse.js';
export { makeOrder } from '../declarations/makeOrder.js';
export { makePackageListResponse } from '../declarations/makePackageListResponse.js';
export { makePackage } from '../declarations/makePackage.js';
export { makePaymentMethodListResponse } from '../declarations/makePaymentMethodListResponse.js';
export { makePaymentMethod } from '../declarations/makePaymentMethod.js';
export { makePaymentIntentListResponse } from '../declarations/makePaymentIntentListResponse.js';
export { makePaymentIntent } from '../declarations/makePaymentIntent.js';
export { makeBuyerRefundListResponse } from '../declarations/makeBuyerRefundListResponse.js';
export { makeBuyerRefund } from '../declarations/makeBuyerRefund.js';
export { makeListReturnsResponse } from '../declarations/makeListReturnsResponse.js';
export { makeReturnResource } from '../declarations/makeReturnResource.js';
export { makeShipmentListResponse } from '../declarations/makeShipmentListResponse.js';
export { makeShipment } from '../declarations/makeShipment.js';
export { makeSubscriptionListResponse } from '../declarations/makeSubscriptionListResponse.js';
export { makeSubscription } from '../declarations/makeSubscription.js';
export { makeSavePaymentMethodResponse } from '../declarations/makeSavePaymentMethodResponse.js';
export { makeMerchant } from '../declarations/makeMerchant.js';
export { makeMerchantAccountSession } from '../declarations/makeMerchantAccountSession.js';
export { makeMerchantAccountSessionCreateRequest } from '../declarations/makeMerchantAccountSessionCreateRequest.js';
export { makeMerchantAccountSessionEffectivePolicy } from '../declarations/makeMerchantAccountSessionEffectivePolicy.js';
export { makeMerchantAccountSessionRefreshRequest } from '../declarations/makeMerchantAccountSessionRefreshRequest.js';
export { makeMerchantAccountSessionResponse } from '../declarations/makeMerchantAccountSessionResponse.js';
export { makeMerchantAccountSessionStripeCollectionOptions } from '../declarations/makeMerchantAccountSessionStripeCollectionOptions.js';
export { makeMerchantAccountSessionStripeComponentLaunch } from '../declarations/makeMerchantAccountSessionStripeComponentLaunch.js';
export { makeMerchantAccountSessionStripeComponentProps } from '../declarations/makeMerchantAccountSessionStripeComponentProps.js';
export { makeMerchantAccountSessionStripeLaunch } from '../declarations/makeMerchantAccountSessionStripeLaunch.js';
export { makeMerchantAccountSessionStripeRequirements } from '../declarations/makeMerchantAccountSessionStripeRequirements.js';
export { makeMerchantBillingBalance } from '../declarations/makeMerchantBillingBalance.js';
export { makeMerchantBillingBalanceListResponse } from '../declarations/makeMerchantBillingBalanceListResponse.js';
export { makeMerchantBillingBalanceResponse } from '../declarations/makeMerchantBillingBalanceResponse.js';
export { makeMerchantReadinessAxis } from '../declarations/makeMerchantReadinessAxis.js';
export { makeMerchantReadinessRequirements } from '../declarations/makeMerchantReadinessRequirements.js';
export { makeMerchantResponse } from '../declarations/makeMerchantResponse.js';
export { makeMerchantSubscriptionInvoice } from '../declarations/makeMerchantSubscriptionInvoice.js';
export { makeMerchantSubscriptionInvoiceLine } from '../declarations/makeMerchantSubscriptionInvoiceLine.js';
export { makeMerchantSubscriptionInvoiceListResponse } from '../declarations/makeMerchantSubscriptionInvoiceListResponse.js';
export { makeMerchantSubscriptionInvoiceResponse } from '../declarations/makeMerchantSubscriptionInvoiceResponse.js';
export { makeMerchantWebhookEnvelope } from '../declarations/makeMerchantWebhookEnvelope.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeCancelSubscriptionResult } from '../declarations/makeCancelSubscriptionResult.js';
export { makeBuyerAction } from '../declarations/makeBuyerAction.js';
export { makeContractInfo } from '../declarations/makeContractInfo.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeSubscriptionLineItem } from '../declarations/makeSubscriptionLineItem.js';
export { makeBundleComponent } from '../declarations/makeBundleComponent.js';
export { makeSelectedProductOption } from '../declarations/makeSelectedProductOption.js';
export { makeCategoryReference } from '../declarations/makeCategoryReference.js';
export { makeImage } from '../declarations/makeImage.js';
export { makeOrderLineItemModifier } from '../declarations/makeOrderLineItemModifier.js';
export { makeTextModifierRequest } from '../declarations/makeTextModifierRequest.js';
export { makeCardDetails } from '../declarations/makeCardDetails.js';
export { makeSubscriptionServiceLocation } from '../declarations/makeSubscriptionServiceLocation.js';
export { makePostalAddress } from '../declarations/makePostalAddress.js';
export { makeSubscriptionPlanLineItem } from '../declarations/makeSubscriptionPlanLineItem.js';
export { makeOrderLineItemTax } from '../declarations/makeOrderLineItemTax.js';
export { makeEmailChangeRequest } from '../declarations/makeEmailChangeRequest.js';
export { makeInvoiceCheckoutSessionResult } from '../declarations/makeInvoiceCheckoutSessionResult.js';
export { makeCheckoutSession } from '../declarations/makeCheckoutSession.js';
export { makePaymentAttemptGiftCardRedemption } from '../declarations/makePaymentAttemptGiftCardRedemption.js';
export { makePaymentAttemptPaymentIntent } from '../declarations/makePaymentAttemptPaymentIntent.js';
export { makePaymentErrorSummary } from '../declarations/makePaymentErrorSummary.js';
export { makeErrorRemediation } from '../declarations/makeErrorRemediation.js';
export { makePendingPaymentAction } from '../declarations/makePendingPaymentAction.js';
export { makeStripePaymentClientAction } from '../declarations/makeStripePaymentClientAction.js';
export { makeCheckoutCustomTextWriteConfig } from '../declarations/makeCheckoutCustomTextWriteConfig.js';
export { makeCheckoutCustomerConfig } from '../declarations/makeCheckoutCustomerConfig.js';
export { makePrefilledCustomerInfo } from '../declarations/makePrefilledCustomerInfo.js';
export { makeCheckoutDeliveryPinnedDependency } from '../declarations/makeCheckoutDeliveryPinnedDependency.js';
export { makeCheckoutExpirationConfig } from '../declarations/makeCheckoutExpirationConfig.js';
export { makeDeliveryQuoteChoiceGroupResource } from '../declarations/makeDeliveryQuoteChoiceGroupResource.js';
export { makeDeliveryCandidateOutcomeResource } from '../declarations/makeDeliveryCandidateOutcomeResource.js';
export { makeDeliveryAddressAdvisoryResource } from '../declarations/makeDeliveryAddressAdvisoryResource.js';
export { makeDeliveryAddressRequest } from '../declarations/makeDeliveryAddressRequest.js';
export { makeDeliveryInputRequirement } from '../declarations/makeDeliveryInputRequirement.js';
export { makeDeliveryInputConstraint } from '../declarations/makeDeliveryInputConstraint.js';
export { makeDeliveryWindowResource } from '../declarations/makeDeliveryWindowResource.js';
export { makeDeliveryOptionProjection } from '../declarations/makeDeliveryOptionProjection.js';
export { makeDeliveryArrivalEstimate } from '../declarations/makeDeliveryArrivalEstimate.js';
export { makeBuyerInstructionsConfig } from '../declarations/makeBuyerInstructionsConfig.js';
export { makeDeliveryPlan } from '../declarations/makeDeliveryPlan.js';
export { makeDeliveryQuoteExecutionLegResource } from '../declarations/makeDeliveryQuoteExecutionLegResource.js';
export { makeDeliveryShipmentDetails } from '../declarations/makeDeliveryShipmentDetails.js';
export { makeDeliveryPickupDetails } from '../declarations/makeDeliveryPickupDetails.js';
export { makeDeliveryLocationSummaryResource } from '../declarations/makeDeliveryLocationSummaryResource.js';
export { makeDeliveryAddressResource } from '../declarations/makeDeliveryAddressResource.js';
export { makeDeliveryRecipientRequirement } from '../declarations/makeDeliveryRecipientRequirement.js';
export { makeDeliveryQuoteLineItemResource } from '../declarations/makeDeliveryQuoteLineItemResource.js';
export { makeDeliveryMerchantDiagnostic } from '../declarations/makeDeliveryMerchantDiagnostic.js';
export { makeDeliveryEligibilityMismatch } from '../declarations/makeDeliveryEligibilityMismatch.js';
export { makeBuyerDeliveryQuoteChoiceGroupResource } from '../declarations/makeBuyerDeliveryQuoteChoiceGroupResource.js';
export { makeBuyerDeliveryInputRequirementResource } from '../declarations/makeBuyerDeliveryInputRequirementResource.js';
export { makeBuyerDeliveryOptionResource } from '../declarations/makeBuyerDeliveryOptionResource.js';
export { makeLegalSettings } from '../declarations/makeLegalSettings.js';
export { makePricingAmounts } from '../declarations/makePricingAmounts.js';
export { makeSettlementAmounts } from '../declarations/makeSettlementAmounts.js';
export { makeSignedMoney } from '../declarations/makeSignedMoney.js';
export { makePaymentCollectionStripe } from '../declarations/makePaymentCollectionStripe.js';
export { makeSelectableOrderPaymentIntent } from '../declarations/makeSelectableOrderPaymentIntent.js';
export { makePaymentCollection } from '../declarations/makePaymentCollection.js';
export { makeExpandedPaymentIntentSummary } from '../declarations/makeExpandedPaymentIntentSummary.js';
export { makePaymentSourceSummary } from '../declarations/makePaymentSourceSummary.js';
export { makePaymentSourceAchDebitSummary } from '../declarations/makePaymentSourceAchDebitSummary.js';
export { makePaymentSourceCardSummary } from '../declarations/makePaymentSourceCardSummary.js';
export { makeCheckoutPaymentConfig } from '../declarations/makeCheckoutPaymentConfig.js';
export { makeCheckoutProblemResource } from '../declarations/makeCheckoutProblemResource.js';
export { makeCheckoutPromotionConfig } from '../declarations/makeCheckoutPromotionConfig.js';
export { makeCheckoutRedirectsConfig } from '../declarations/makeCheckoutRedirectsConfig.js';
export { makeCheckoutTaxConfig } from '../declarations/makeCheckoutTaxConfig.js';
export { makeThemeConfig } from '../declarations/makeThemeConfig.js';
export { makeCheckoutTipConfig } from '../declarations/makeCheckoutTipConfig.js';
export { makeHostedCheckout } from '../declarations/makeHostedCheckout.js';
export { makeInvoice } from '../declarations/makeInvoice.js';
export { makeInvoiceLateFee } from '../declarations/makeInvoiceLateFee.js';
export { makeInvoiceLateFeePolicy } from '../declarations/makeInvoiceLateFeePolicy.js';
export { makeInvoicePaymentOptionLimit } from '../declarations/makeInvoicePaymentOptionLimit.js';
export { makeInvoicePaymentTermCalculation } from '../declarations/makeInvoicePaymentTermCalculation.js';
export { makeInvoiceScheduleEntry } from '../declarations/makeInvoiceScheduleEntry.js';
export { makeInvoiceScheduleAmountSpecification } from '../declarations/makeInvoiceScheduleAmountSpecification.js';
export { makeInvoiceScheduleDue } from '../declarations/makeInvoiceScheduleDue.js';
export { makeDocumentTaxID } from '../declarations/makeDocumentTaxID.js';
export { makeOrderCharge } from '../declarations/makeOrderCharge.js';
export { makeOrderCalculatedChargeTax } from '../declarations/makeOrderCalculatedChargeTax.js';
export { makeTaxCalculationRequest } from '../declarations/makeTaxCalculationRequest.js';
export { makeTaxComponentRequest } from '../declarations/makeTaxComponentRequest.js';
export { makeTaxJurisdiction } from '../declarations/makeTaxJurisdiction.js';
export { makeInvoiceDiscount } from '../declarations/makeInvoiceDiscount.js';
export { makeInvoiceLineItem } from '../declarations/makeInvoiceLineItem.js';
export { makeInvoiceTip } from '../declarations/makeInvoiceTip.js';
export { makeInvoicePaymentAttempt } from '../declarations/makeInvoicePaymentAttempt.js';
export { makeCreateReturnPreviewData } from '../declarations/makeCreateReturnPreviewData.js';
export { makeReturnEligibilityCheck } from '../declarations/makeReturnEligibilityCheck.js';
export { makeReturnEligibilityCheckLineItem } from '../declarations/makeReturnEligibilityCheckLineItem.js';
export { makeReturnLineItemEligibility } from '../declarations/makeReturnLineItemEligibility.js';
export { makeReturnLineItemDecisionProposal } from '../declarations/makeReturnLineItemDecisionProposal.js';
export { makeReturnPolicyAdjustmentProposal } from '../declarations/makeReturnPolicyAdjustmentProposal.js';
export { makeReturnReasonSummary } from '../declarations/makeReturnReasonSummary.js';
export { makeReturnPolicyEvaluation } from '../declarations/makeReturnPolicyEvaluation.js';
export { makeReturnPolicyEvaluationLineItem } from '../declarations/makeReturnPolicyEvaluationLineItem.js';
export { makeReturnEligibilitySelection } from '../declarations/makeReturnEligibilitySelection.js';
export { makeReturnLineItemRequest } from '../declarations/makeReturnLineItemRequest.js';
export { makeReturnResolutionPreview } from '../declarations/makeReturnResolutionPreview.js';
export { makeReturnResolutionAdjustment } from '../declarations/makeReturnResolutionAdjustment.js';
export { makeReturnActor } from '../declarations/makeReturnActor.js';
export { makeReturnResolutionLineItem } from '../declarations/makeReturnResolutionLineItem.js';
export { makeReturnReplacementLineItem } from '../declarations/makeReturnReplacementLineItem.js';
export { makeReturnResolutionWarning } from '../declarations/makeReturnResolutionWarning.js';
export { makeCheckoutSessionLaunchResult } from '../declarations/makeCheckoutSessionLaunchResult.js';
export { makeCheckoutAccess } from '../declarations/makeCheckoutAccess.js';
export { makeActionResult } from '../declarations/makeActionResult.js';
export { makeCustomer } from '../declarations/makeCustomer.js';
export { makeCustomerReceivableBalance } from '../declarations/makeCustomerReceivableBalance.js';
export { makeCustomerEmailPreferences } from '../declarations/makeCustomerEmailPreferences.js';
export { makeCreditNoteLine } from '../declarations/makeCreditNoteLine.js';
export { makeFulfillmentChargeLink } from '../declarations/makeFulfillmentChargeLink.js';
export { makeDigitalFulfillmentDetails } from '../declarations/makeDigitalFulfillmentDetails.js';
export { makeFulfillmentLineItem } from '../declarations/makeFulfillmentLineItem.js';
export { makeDeliveryFulfillmentDetails } from '../declarations/makeDeliveryFulfillmentDetails.js';
export { makeExpandedPackageSummary } from '../declarations/makeExpandedPackageSummary.js';
export { makePickupFulfillmentDetails } from '../declarations/makePickupFulfillmentDetails.js';
export { makeFulfillmentRecipient } from '../declarations/makeFulfillmentRecipient.js';
export { makeServiceFulfillmentDetails } from '../declarations/makeServiceFulfillmentDetails.js';
export { makeExpandedShipmentSummary } from '../declarations/makeExpandedShipmentSummary.js';
export { makeGiftCardMoney } from '../declarations/makeGiftCardMoney.js';
export { makeBuyerInvoiceLateFee } from '../declarations/makeBuyerInvoiceLateFee.js';
export { makeAppliedDiscount } from '../declarations/makeAppliedDiscount.js';
export { makeOrderDeliveryDestinationAddress } from '../declarations/makeOrderDeliveryDestinationAddress.js';
export { makeOrderDeliveryDestinationRecipient } from '../declarations/makeOrderDeliveryDestinationRecipient.js';
export { makeOrderGiftCardAllocation } from '../declarations/makeOrderGiftCardAllocation.js';
export { makeOrderGiftCardSettlement } from '../declarations/makeOrderGiftCardSettlement.js';
export { makeOrderGiftCardSelection } from '../declarations/makeOrderGiftCardSelection.js';
export { makeOrderLineItem } from '../declarations/makeOrderLineItem.js';
export { makeGiftCardProductConfiguration } from '../declarations/makeGiftCardProductConfiguration.js';
export { makeGiftCardCustomAmountBounds } from '../declarations/makeGiftCardCustomAmountBounds.js';
export { makeGiftCardPurchaseRecipient } from '../declarations/makeGiftCardPurchaseRecipient.js';
export { makeLineItemInventorySnapshot } from '../declarations/makeLineItemInventorySnapshot.js';
export { makeLineItemInventoryDemand } from '../declarations/makeLineItemInventoryDemand.js';
export { makePurchasedGiftCard } from '../declarations/makePurchasedGiftCard.js';
export { makeOrderCalculatedLineItemTax } from '../declarations/makeOrderCalculatedLineItemTax.js';
export { makeRequestedTip } from '../declarations/makeRequestedTip.js';
export { makeOrderReturnCreditSettlement } from '../declarations/makeOrderReturnCreditSettlement.js';
export { makeOrderTaxExemption } from '../declarations/makeOrderTaxExemption.js';
export { makeOrderTaxLocation } from '../declarations/makeOrderTaxLocation.js';
export { makeTaxBreakdown } from '../declarations/makeTaxBreakdown.js';
export { makeTip } from '../declarations/makeTip.js';
export { makeTipPaymentIntentAllocation } from '../declarations/makeTipPaymentIntentAllocation.js';
export { makeTipValueSettlementAllocation } from '../declarations/makeTipValueSettlementAllocation.js';
export { makeShippingDimensions } from '../declarations/makeShippingDimensions.js';
export { makeReturnShipmentLineItemAllocation } from '../declarations/makeReturnShipmentLineItemAllocation.js';
export { makeShippingWeight } from '../declarations/makeShippingWeight.js';
export { makePaymentAddOnFee } from '../declarations/makePaymentAddOnFee.js';
export { makeRefundLineItemAllocation } from '../declarations/makeRefundLineItemAllocation.js';
export { makeRefundLineItemAdjustmentRefund } from '../declarations/makeRefundLineItemAdjustmentRefund.js';
export { makeRefundLineItemAdjustment } from '../declarations/makeRefundLineItemAdjustment.js';
export { makeRefundAdjustmentReason } from '../declarations/makeRefundAdjustmentReason.js';
export { makeRefundLineItemModifierAllocation } from '../declarations/makeRefundLineItemModifierAllocation.js';
export { makeRefundTaxBreakdownRefund } from '../declarations/makeRefundTaxBreakdownRefund.js';
export { makePaymentRefund } from '../declarations/makePaymentRefund.js';
export { makeRefundTenderAllocation } from '../declarations/makeRefundTenderAllocation.js';
export { makeRefundGiftCardDestination } from '../declarations/makeRefundGiftCardDestination.js';
export { makeReturnCompletionBlocker } from '../declarations/makeReturnCompletionBlocker.js';
export { makeReturnFinancialSummary } from '../declarations/makeReturnFinancialSummary.js';
export { makeReturnHandoffRequirement } from '../declarations/makeReturnHandoffRequirement.js';
export { makeReturnHandoffDestination } from '../declarations/makeReturnHandoffDestination.js';
export { makeReturnLineItem } from '../declarations/makeReturnLineItem.js';
export { makeReturnLineItemValue } from '../declarations/makeReturnLineItemValue.js';
export { makeSavePaymentMethodResult } from '../declarations/makeSavePaymentMethodResult.js';
export { makeStripeClientSetup } from '../declarations/makeStripeClientSetup.js';
export { makeStripeClientSetupStripe } from '../declarations/makeStripeClientSetupStripe.js';
export { makeStripeClientAuthority } from '../declarations/makeStripeClientAuthority.js';
export { makeBanner } from '../declarations/makeBanner.js';
export { makeOnboardingExternalAction } from '../declarations/makeOnboardingExternalAction.js';
export { makeOnboardingRequirements } from '../declarations/makeOnboardingRequirements.js';
